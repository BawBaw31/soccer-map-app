import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import * as Styled from './Game.styles'
import { off, onValue, ref, update, get } from 'firebase/database'
import { auth, db } from '../../firebase/firebase-setup'
import { useEffect, useState } from 'react'
import { PlayersList } from '../../components/playersList/PlayersList'
import { MapButton } from '../../components/mapButton/MapButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RouteParams } from '../../navigation/RootNavigator'

interface GameProps {
    route: any
}

export const Game = (props: GameProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
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
        return () =>
            Promise.all([
                off(ref(db, `games/${props.route.params.game.id}`)),
                off(ref(db, `games/${props.route.params.game.id}/players`)),
            ])
    }, [])

    const onSubmit = async () => {
        if (auth.currentUser) {
            const data = await get(ref(db, `games/${props.route.params.game.id}/players`))
            const updatedData: any = {}
            updatedData[`games/${props.route.params.game.id}/players`] = {
                ...data.val(),
                [auth.currentUser?.uid]: {
                    id: auth.currentUser?.uid,
                    name: auth.currentUser?.displayName,
                },
            }
            updatedData[`players/${auth.currentUser?.uid}/games/${props.route.params.game.id}`] = {
                id: props.route.params.game.id,
                name: props.route.params.game.name,
                date: props.route.params.game.date,
            }
            try {
                await update(ref(db), updatedData)
                navigation.navigate('Home')
            } catch (e) {
                console.log('Error updating data : ' + e)
            }
        } else {
            navigation.navigate('SignIn')
        }
    }

    return (
        <TitleLayout title={props.route.params.game.name}>
            <ScrollView>
                <Styled.GameStadium>Stadium : {game.stadium?.title}</Styled.GameStadium>
                <MapButton
                    text="Go to the game"
                    latitude={game.stadium?.geocode?.lat}
                    longitude={game.stadium?.geocode?.long}
                />
                {!isParticipate ? (
                    <TouchableOpacity onPress={onSubmit}>
                        <Styled.JoinGameContainer>
                            <Styled.JoinGameLabel>Join game</Styled.JoinGameLabel>
                        </Styled.JoinGameContainer>
                    </TouchableOpacity>
                ) : (
                    <></>
                )}
                <PlayersList players={players} />
            </ScrollView>
        </TitleLayout>
    )
}
