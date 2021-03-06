import React from 'react'
import * as Styled from './FormField.styles'

interface CustomButtonProps {
    text: string
    onPress(): void
    submit?: boolean
    isDisabled?: boolean
}

export const CustomButton = (props: CustomButtonProps) => {
    return (
        <Styled.SubmitButtonContainer>
            <Styled.SubmitButton onPress={props.onPress} disabled={props.isDisabled}>
                <Styled.SubmitButtonLabel>{props.text}</Styled.SubmitButtonLabel>
            </Styled.SubmitButton>
        </Styled.SubmitButtonContainer>
    )
}
