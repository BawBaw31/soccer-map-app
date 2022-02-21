import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Font, Colors, Percentage } from '../../styles'
import MapView from "react-native-maps";

export const Map = styled(MapView)`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export const MapTitle = styled(Text)`
    margin-bottom: 8px;
    color: ${Colors.white};
    font-family: ${Font.montserratSemiBold};
    font-size: 24px;
`

export const MapContainer = styled(View)`
    height: 100px;
    margin-bottom: 64px;
`