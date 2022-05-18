import { onValue, ref } from 'firebase/database'
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { db } from '../../firebase/firebase-setup'
import * as Styled from './PlayersList.styles'
interface PlayerListProps {
    gameId: number
}
export const PlayerList = (props: PlayerListProps) => {
    const [playerList, setPlayerList] = useState<any>([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
        {
            id: 10,
        },
    ])

    useEffect(() => {
        const fetchData = async () => {
            const ac = new AbortController()
            try {
                onValue(ref(db, `games/${props.gameId}/players`), (snapshot) => {
                    const data = snapshot.val()
                    Object.values(data).map((player: any, index) => {
                        if (playerList.length > index) {
                            playerList[index].name = player.id
                        }
                    })
                    setPlayerList(playerList)
                })
                return () => ac.abort()
            } catch (e) {
                console.log('Error on getting data : ' + e)
            }
        }

        fetchData()
    }, [playerList])

    return (
        <View>
            {playerList ? (
                playerList.map((player: any) => (
                    <Styled.PlayerTile key={player.id}>
                        <Styled.PlayerName key={player.id}>{player.name}</Styled.PlayerName>
                    </Styled.PlayerTile>
                ))
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    )
}
