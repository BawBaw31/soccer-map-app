import React from 'react'
import { ScrollView, Text } from 'react-native'

interface StadiumScreenProps {
    route: any
}

export const StadiumScreen = (props: StadiumScreenProps) => {
    return (
        <ScrollView>
            <Text>Stadium with id {props.route.params.id}</Text>
        </ScrollView>
    )
}
