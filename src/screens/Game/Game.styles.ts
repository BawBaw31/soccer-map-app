import { Text, View } from 'react-native'
import styled from 'styled-components'
import { Colors, Font, Spacing } from '../../styles'

export const GameStadium = styled(Text)`
    margin-bottom: 8px;
    color: ${Colors.white};
    font-family: ${Font.montserratSemiBold};
    font-size: 24px;
`

export const JoinGameContainer = styled(View)`
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${Colors.gray};
    border-radius: 10px;
    margin-bottom: ${Spacing.s};
`

export const JoinGameLabel = styled(Text)`
    font-size: 30px;
    padding: ${Spacing.xxl} ${Spacing.l};
    font-family: ${Font.montserratExtrabold};
    color: ${Colors.white};
`
