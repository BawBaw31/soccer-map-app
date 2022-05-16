import React, { useState, useEffect, useCallback } from 'react'
import { Text } from 'react-native'
import { Marker, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import * as Styled from './Map.styles'
import { onValue, ref } from 'firebase/database'
import { useNavigation } from '@react-navigation/native'
import { db } from '../../firebase/firebase-setup'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../../navigation/RootNavigator'

export const Map = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [location, setLocation] = useState<Location.LocationObject | null>(null)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [stadiums, setStadiums] = useState<any[]>([])

    const checkLocationPermission = useCallback(async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
            return
        }
        const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Low })
        setLocation(location)
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        try {
            onValue(ref(db, 'stadiums/'), (snapshot: any) => {
                setStadiums([])
                const data = snapshot.val()
                Object.values(data).map((stadium: any) => {
                    setStadiums((oldStadiums: any) => [...oldStadiums, stadium])
                })
            })
        } catch (e) {
            console.log('Error on getting data : ' + e)
        }
        checkLocationPermission()
    }, [checkLocationPermission])

    let latitudeValue = 0
    let longitudeValue = 0

    if (location) {
        longitudeValue = location.coords.longitude
        latitudeValue = location.coords.latitude
    }

    const geolocation: Region = {
        latitude: latitudeValue,
        longitude: longitudeValue,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09,
    }

    return (
        <Styled.MapContainer>
            <Styled.MapTitle>Nearby stadiums</Styled.MapTitle>
            {isLoaded ? (
                <Styled.Map region={geolocation} provider="google">
                    {latitudeValue && longitudeValue ? (
                        <Marker
                            coordinate={{ latitude: latitudeValue, longitude: longitudeValue }}
                            tracksViewChanges={false}
                        />
                    ) : null}
                    {stadiums.map((stadium) => (
                        <Marker
                            onPress={() => {
                                navigation.navigate('StadiumScreen', { id: stadium.id })
                            }}
                            key={stadium.id}
                            coordinate={{
                                latitude: stadium.geocode.lat,
                                longitude: stadium.geocode.long,
                            }}
                        />
                    ))}
                </Styled.Map>
            ) : (
                <Text>Loading...</Text>
            )}
        </Styled.MapContainer>
    )
}
