import { off, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { db } from '../../firebase/firebase-setup'
import * as Styled from './PlayersList.styles'
interface PlayersListProps {
    gameId: number
}
export const PlayersList = (props: PlayersListProps) => {
    const maxPlayers = 10
    const [players, setPlayers] = useState<any>([])

    useEffect(() => {
        try {
            onValue(ref(db, `games/${props.gameId}/players`), (snapshot) => {
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
        return () => off(ref(db, `games/${props.gameId}/players`))
    }, [])

    return (
        <View>
            <Styled.PlayersListTitle>Players list</Styled.PlayersListTitle>
            {players.map((player: any) => (
                <Styled.PlayerTile key={player.id}>
                    <Styled.PlayerName key={player.id}>{player.name}</Styled.PlayerName>
                </Styled.PlayerTile>
            ))}
        </View>
    )
}
