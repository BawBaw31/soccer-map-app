import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { Marker, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import * as Styled from './Map.styles'

export const Map: React.FunctionComponent = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        ;(async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }
            const location = await Location.getCurrentPositionAsync({})
            setIsLoaded(true)
            setLocation(location)
        })()
    }, [])

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
                <Styled.Map region={geolocation}>
                    {latitudeValue && longitudeValue ? (
                        <Marker
                            coordinate={{ latitude: latitudeValue, longitude: longitudeValue }}
                        />
                    ) : null}
                </Styled.Map>
            ) : (
                <Text>Loading...</Text>
            )}
        </Styled.MapContainer>
    )
}
