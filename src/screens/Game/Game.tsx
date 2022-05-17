import React from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'

interface GameProps {
    route: any
}

export const Game = (props: GameProps) => {
    return (
        <TitleLayout title={props.route.params.game.name}>
            <ScrollView></ScrollView>
        </TitleLayout>
    )
}
