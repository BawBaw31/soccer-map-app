import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Font, Colors, Percentage } from '../../styles'
import MapView from 'react-native-maps'

export const Games = styled(MapView)`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export const GamesTitle = styled(Text)`
    margin-bottom: 12px;
    color: ${Colors.white};
    font-family: ${Font.montserratSemiBold};
    font-size: 24px;
`

export const GamesContainer = styled(View)`
    height: ${Percentage.oneHalf};
    margin-bottom: 24px;
`

export const ItemTitle = styled(Text)`
    color: ${Colors.white};
    font-size: 24px;
    font-family: ${Font.montserratMedium};
    margin-bottom: 16px;
`

export const ItemText = styled(Text)`
    font-size: 16px;
    color: ${Colors.white};
    font-family: ${Font.montserratRegular};
    margin-bottom: 8px;
`

export const ItemContainer = styled(View)`
    background-color: ${Colors.gray};
    border-radius: 10px;
    padding-left: 8px;
    padding-top: 16px;
    height: ${Percentage.full};
    margin-right: 20px;
`
