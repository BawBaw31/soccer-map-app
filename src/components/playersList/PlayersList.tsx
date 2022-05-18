import { onValue, ref } from 'firebase/database'
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { db } from '../../firebase/firebase-setup'

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
                    <View
                        key={player.id}
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'white',
                            borderTopWidth: 1,
                            borderTopColor: 'white',
                        }}
                    >
                        <Text
                            key={player.id}
                            style={{
                                color: 'white',
                                paddingTop: 10,
                                paddingBottom: 10,
                            }}
                        >
                            {player.name}
                        </Text>
                    </View>
                ))
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    )
}
