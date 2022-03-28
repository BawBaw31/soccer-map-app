import React from 'react'
import { MainLayout } from '../../components/layouts/Layouts'
import { SubmitButton } from '../../components/submitButton/SubmitButton'

export const NewGame: React.FunctionComponent = () => {
    const onPress = () => {
        console.log('Button clicked !')
    }

    return (
        <MainLayout>
            <SubmitButton text="Submit" onPress={onPress} />
        </MainLayout>
    )
}
