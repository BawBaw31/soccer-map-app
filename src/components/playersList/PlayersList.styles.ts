import { Text, View } from 'react-native'
import styled from 'styled-components'
import { Colors, Font, Spacing } from '../../styles/'

export const PlayerTile = styled(View)`
    border-bottom-color: ${Colors.white};
    border-top-color: ${Colors.white};
    border-bottom-width: 1px;
    border-top-width: 1px;
`

export const PlayerName = styled(Text)`
    color: ${Colors.white};
    font-family: ${Font.montserratSemiBold};
    font-size: 16px;
    padding-top: ${Spacing.s};
    padding-bottom: ${Spacing.s};
`

export const PlayersListTitle = styled(Text)`
    color: ${Colors.white};
    font-family: ${Font.montserratSemiBold};
    font-size: 24px;
    margin-bottom: ${Spacing.m};
`
