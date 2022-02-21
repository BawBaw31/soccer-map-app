import React from 'react'
import { Text } from 'react-native'
import { DisconnectedLayout } from '../../components/layouts/Layouts'

export const Loading: React.FunctionComponent = () => {

    return (
        <DisconnectedLayout>
            <Text>Loading ...</Text>
        </DisconnectedLayout>
    )
}