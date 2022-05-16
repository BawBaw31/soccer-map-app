import React from 'react'
import { ScrollView, Text } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'

interface GameScreenProps {
    route: any
}

export const GameScreen = (props: GameScreenProps) => {
    return (
        <TitleLayout title="Add name of the game here">
            <ScrollView>
                <Text>{props.route.params.id}</Text>
            </ScrollView>
        </TitleLayout>
    )
}
