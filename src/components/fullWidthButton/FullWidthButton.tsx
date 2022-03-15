import React from 'react'
import * as Styled from './FullWidthButton.styles'
import { TouchableOpacity } from 'react-native'

interface ButtonProps {
    text: string
    onPress(): void
}

export const FullWidthButton: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Styled.FullWidthButtonContainer>
                <Styled.FullWidthButtonText>{props.text}</Styled.FullWidthButtonText>
            </Styled.FullWidthButtonContainer>
        </TouchableOpacity>
    )
}
