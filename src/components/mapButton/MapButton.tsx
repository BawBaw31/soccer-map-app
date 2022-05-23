import React from 'react'
import * as Styled from './MapButton.styles'
import { TouchableOpacity } from 'react-native'
import { Linking } from 'react-native'

interface ButtonProps {
    text: string
    longitude: number
    latitude: number
}

export const MapButton = (props: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={() => {
                Linking.openURL(
                    `https://www.google.com/maps/dir/?api=1&destination=${props.latitude},${props.longitude}&dir_action=navigate`,
                )
            }}
        >
            <Styled.MapButtonContainer>
                <Styled.MapButtonLabel>{props.text}</Styled.MapButtonLabel>
            </Styled.MapButtonContainer>
        </TouchableOpacity>
    )
}
