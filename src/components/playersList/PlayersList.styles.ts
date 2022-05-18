import { Text, View } from 'react-native'
import styled from 'styled-components'
import { Colors, Font } from '../../styles/'

export const PlayerTile = styled(View)`
    border-top-color: ${Colors.white};
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.white};
    border-top-width: 1px;
`

export const PlayerName = styled(Text)`
    color: ${Colors.white};
    font-family: ${Font.montserratSemiBold};
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
`

export const MapContainer = styled(View)`
    height: 200px;
    margin-bottom: 64px;
`
