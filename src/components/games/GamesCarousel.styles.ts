import { Text, View } from 'react-native'
import styled from 'styled-components'
import { Colors, Font, Spacing } from '../../styles'

export const GamesTitle = styled(Text)`
    margin-bottom: 8px;
    color: ${Colors.white};
    font-family: ${Font.montserratSemiBold};
    font-size: 24px;
`

export const GamesContainer = styled(View)`
    margin-bottom: ${Spacing.xl};
`

export const ItemTitle = styled(Text)`
    color: ${Colors.white};
    font-size: 24px;
    font-family: ${Font.montserratMedium};
    margin-bottom: ${Spacing.l};
`

export const ItemText = styled(Text)`
    font-size: 16px;
    color: ${Colors.white};
    font-family: ${Font.montserratRegular};
    margin-bottom: ${Spacing.s};
`

export const ItemContainer = styled(View)`
    background-color: ${Colors.gray};
    border-radius: 10px;
    padding-left: ${Spacing.s};
    padding-top: ${Spacing.l};
    padding: ${Spacing.l};
    margin-right: ${Spacing.xl};
`
