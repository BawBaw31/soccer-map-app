import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Font, Colors, Percentage } from '../../styles'

export const GamesTitle = styled(Text)`
    margin-bottom: 8px;
    color: ${Colors.white};
    font-family: ${Font.montserratSemiBold};
    font-size: 24px;
`

export const GamesContainer = styled(View)`
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
    padding: 16px;
    margin-right: 20px;
`
