import React from 'react'
import { FormField } from '../../components/formField/FormField.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { SubmitButton } from '../../components/submitButton/SubmitButton'

export const NewGame: React.FunctionComponent = () => {
    const onPress = () => {
        console.log('Button clicked !')
    }

    return (
        <TitleLayout title="New Game">
            <>
                <FormField placeholder="Name" />
                <SubmitButton text="Submit" onPress={onPress} />
            </>
        </TitleLayout>
    )
}
