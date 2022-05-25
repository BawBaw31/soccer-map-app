import React from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import * as Styled from './Game.styles'
import { off, onValue, ref } from 'firebase/database'
import { db } from '../../firebase/firebase-setup'
import { useEffect, useState } from 'react'
import { PlayersList } from '../../components/playersList/PlayersList'
import { MapButton } from '../../components/mapButton/MapButton'
import { Route } from '@react-navigation/native'

interface GameProps {
    route: Route<'Game', { game: any }>
}

export const Game = (props: GameProps) => {
    const [game, setGame] = useState<any>({})

    useEffect((): any => {
        try {
            onValue(ref(db, `games/${props.route.params.game.id}`), (snapshot) => {
                const data = snapshot.val()
                setGame(data)
            })
        } catch (e) {
            console.log('Error on getting data : ' + e)
        }
        return () => off(ref(db, `games/${props.route.params.game.id}/players`))
    }, [])

    return (
        <TitleLayout title={props.route.params.game.name} goBack="Home">
            <ScrollView>
                <Styled.GameStadium>Stadium : {game.stadium?.title}</Styled.GameStadium>
                <MapButton
                    text="Go to the game"
                    latitude={game.stadium?.geocode?.lat}
                    longitude={game.stadium?.geocode?.long}
                />
                <PlayersList game={props.route.params.game} />
            </ScrollView>
        </TitleLayout>
    )
}
