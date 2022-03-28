import React from 'react'
import * as Styled from './FormField.styles'

interface FormFieldProps {
    placeholder: string
}

export const SubmitButton = (props: FormFieldProps) => {
    const [text, onChangeText] = React.useState('')

    return (
        <Styled.FormFieldContainer>
            <Styled.FormField
                onChangeText={onChangeText}
                value={text}
                placeholder={props.placeholder}
            />
        </Styled.FormFieldContainer>
    )
}
