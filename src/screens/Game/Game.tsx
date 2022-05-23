import React from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import * as Styled from './Game.styles'
import { off, onValue, ref } from 'firebase/database'
import { db } from '../../firebase/firebase-setup'
import { useEffect, useState } from 'react'
import { PlayersList } from '../../components/playersList/PlayersList'
import { MapButton } from '../../components/mapButton/MapButton'

interface GameProps {
    route: any
}

export const Game = (props: GameProps) => {
    const [game, setGame] = useState<any>({})

    useEffect(() => {
        try {
            onValue(ref(db, `games/${props.route.params.game.id}`), (snapshot) => {
                const data = snapshot.val()
                setGame(data)
            })
        } catch (e) {
            console.log('Error on getting data : ' + e)
        }
        return () => off(ref(db, `games/${props.route.params.game.id}`))
    }, [])

    return (
        <TitleLayout title={props.route.params.game.name}>
            <ScrollView>
                <Styled.GameStadium>Stadium : {game.stadium?.title}</Styled.GameStadium>
                <MapButton
                    text="Go to the game"
                    latitude={game.stadium?.geocode?.lat}
                    longitude={game.stadium?.geocode?.long}
                />
                <PlayersList gameId={props.route.params.game.id} />
            </ScrollView>
        </TitleLayout>
    )
}
