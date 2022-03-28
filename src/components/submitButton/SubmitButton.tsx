import React from 'react'
import * as Styled from './SubmitButton.styles'
import { TouchableOpacity, View } from 'react-native'

interface ButtonProps {
    text: string
    onPress(): void
}

export const SubmitButton = (props: ButtonProps) => {
    return (
        <Styled.SubmitButtonContainer>
            <TouchableOpacity onPress={props.onPress}>
                <Styled.SubmitButton>
                    <Styled.SubmitButtonLabel>{props.text}</Styled.SubmitButtonLabel>
                </Styled.SubmitButton>
            </TouchableOpacity>
        </Styled.SubmitButtonContainer>
    )
}
