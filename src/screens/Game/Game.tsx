import React from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import * as Styled from './Game.styles'
import { onValue, ref } from 'firebase/database'
import { db } from '../../firebase/firebase-setup'
import { useEffect, useState } from 'react'
import { PlayerList } from '../../components/playersList/PlayersList'

interface GameProps {
    route: any
}

export const Game = (props: GameProps) => {
    const [game, setGame] = useState<any>({})

    useEffect(() => {
        const ac = new AbortController()
        try {
            onValue(ref(db, `games/${props.route.params.game.id}`), (snapshot) => {
                const data = snapshot.val()
                setGame(data)
            })
        } catch (e) {
            console.log('Error on getting data : ' + e)
        }
        return () => ac.abort()
    }, [])

    return (
        <TitleLayout title={props.route.params.game.name}>
            <ScrollView>
                <Styled.GameStadium>Stadium : {game.stadium?.title}</Styled.GameStadium>
                <PlayerList gameId={props.route.params.game.id} />
            </ScrollView>
        </TitleLayout>
    )
}
