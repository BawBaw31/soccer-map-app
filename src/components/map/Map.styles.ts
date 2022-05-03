import { Text, View } from 'react-native'
import MapView from 'react-native-maps'
import styled from 'styled-components'
import { Colors, Font } from '../../styles'

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
    height: 200px;
    margin-bottom: 64px;
`
