import React from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import * as Styled from './Game.styles'
import { off, onValue, ref } from 'firebase/database'
import { auth, db } from '../../firebase/firebase-setup'
import { useEffect, useState } from 'react'
import { PlayersList } from '../../components/playersList/PlayersList'
import { MapButton } from '../../components/mapButton/MapButton'

interface GameProps {
    route: any
}

export const Game = (props: GameProps) => {
    const [game, setGame] = useState<any>({})
    const [isParticipate, setIsParticipate] = useState<boolean>(false)
    const [players, setPlayers] = useState<any>([])

    const maxPlayers = 10
    useEffect((): any => {
        try {
            onValue(ref(db, `games/${props.route.params.game.id}`), (snapshot) => {
                const data = snapshot.val()
                setGame(data)
            })
            onValue(ref(db, `games/${props.route.params.game.id}/players`), (snapshot) => {
                setPlayers([])
                const data = snapshot.val()
                for (let i = 0; i < maxPlayers; i++) {
                    const playerData: any = Object.values(data)[i]
                    if (playerData) {
                        setPlayers((players: any) => [
                            ...players,
                            { id: i, name: playerData.username },
                        ])
                    } else {
                        setPlayers((players: any) => [...players, { id: i }])
                    }
                }
            })
        } catch (e) {
            console.log('Error on getting data : ' + e)
        }
        return () =>
            Promise.all([
                off(ref(db, `games/${props.route.params.game.id}`)),
                off(ref(db, `games/${props.route.params.game.id}/players`)),
            ])
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
                {!isParticipate ? <Styled.GameStadium>Partcicipate</Styled.GameStadium> : <></>}

                <PlayersList players={players} />
            </ScrollView>
        </TitleLayout>
    )
}
