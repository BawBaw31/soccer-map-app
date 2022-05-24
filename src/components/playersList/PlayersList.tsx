import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { get, off, onValue, ref, remove, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { db, auth } from '../../firebase/firebase-setup'
import { RouteParams } from '../../navigation/RootNavigator'
import * as Styled from './PlayersList.styles'
interface PlayersListProps {
    game: any
}

export const PlayersList = (props: PlayersListProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [isParticipate, setIsParticipate] = useState<boolean>(false)
    const [players, setPlayers] = useState<any>([])
    const maxPlayers = 10

    useEffect((): any => {
        try {
            onValue(ref(db, `games/${props.game.id}/players`), (snapshot) => {
                setIsParticipate(false)
                setPlayers([])
                const data = snapshot.val()
                for (let i = 0; i < maxPlayers; i++) {
                    const playerData: any = Object.values(data)[i]
                    if (playerData?.id === auth.currentUser?.uid) {
                        setIsParticipate(true)
                    }
                    if (playerData) {
                        setPlayers((players: any) => [...players, { id: i, name: playerData.name }])
                    } else {
                        setPlayers((players: any) => [...players, { id: i }])
                    }
                }
            })
        } catch (e) {
            console.log('Error on getting data : ' + e)
        }
        return () => off(ref(db, `games/${props.game.id}/players`))
    }, [])

    const onSubmit = async () => {
        if (auth.currentUser) {
            const data = await get(ref(db, `games/${props.game.id}/players`))
            const updatedData: any = {}
            updatedData[`games/${props.game.id}/players`] = {
                ...data.val(),
                [auth.currentUser?.uid]: {
                    id: auth.currentUser?.uid,
                    name: auth.currentUser?.displayName,
                },
            }
            updatedData[`players/${auth.currentUser?.uid}/games/${props.game.id}`] = {
                id: props.game.id,
                name: props.game.name,
                date: props.game.date,
            }
            try {
                await update(ref(db), updatedData)
            } catch (e) {
                console.log('Error updating data : ' + e)
            }
        } else {
            navigation.navigate('SignIn')
        }
    }

    const removePlayer = async () => {
        if (auth.currentUser) {
            try {
                await remove(ref(db, `games/${props.game.id}/players/${auth.currentUser?.uid}`))
                await remove(ref(db, `players/${auth.currentUser?.uid}/games/${props.game.id}`))
            } catch (e) {
                console.log('Error updating data : ' + e)
            }
        } else {
            navigation.navigate('SignIn')
        }
    }

    return (
        <View>
            <Styled.PlayersListTitle>Players list</Styled.PlayersListTitle>
            {players.map((player: any) => (
                <Styled.PlayerTile key={player.id}>
                    <Styled.PlayerName key={player.id}>{player.name}</Styled.PlayerName>
                </Styled.PlayerTile>
            ))}
            {!isParticipate ? (
                <TouchableOpacity onPress={onSubmit}>
                    <Styled.JoinGameContainer>
                        <Styled.JoinGameLabel>Join Game</Styled.JoinGameLabel>
                    </Styled.JoinGameContainer>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={removePlayer}>
                    <Styled.JoinGameContainer>
                        <Styled.JoinGameLabel>Quit Game</Styled.JoinGameLabel>
                    </Styled.JoinGameContainer>
                </TouchableOpacity>
            )}
        </View>
    )
}
