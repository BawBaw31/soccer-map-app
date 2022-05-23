import React from 'react'
import { View } from 'react-native'
import * as Styled from './PlayersList.styles'
interface PlayersListProps {
    players: any
}
export const PlayersList = (props: PlayersListProps) => {
    return (
        <View>
            <Styled.PlayersListTitle>Players list</Styled.PlayersListTitle>
            {props.players.map((player: any) => (
                <Styled.PlayerTile key={player.id}>
                    <Styled.PlayerName key={player.id}>{player.name}</Styled.PlayerName>
                </Styled.PlayerTile>
            ))}
        </View>
    )
}
