import React, { useState, useEffect, useCallback } from 'react'
import { Text } from 'react-native'
import { Marker, Region } from 'react-native-maps'
import * as Location from 'expo-location'
import * as Styled from './Map.styles'

export const Map = () => {
    const [location, setLocation] = useState<Location.LocationObject | null>(null)
    const [errorMsg, setErrorMsg] = useState<string>('')
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

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
                </Styled.Map>
            ) : (
                <Text>Loading...</Text>
            )}
        </Styled.MapContainer>
    )
}
