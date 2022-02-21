import styled from 'styled-components'
import { Colors, MapStyle } from '../../styles'
import { View, SafeAreaView } from 'react-native'

export const SafeAreaContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${Colors.background};
`

export const PageContainer = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const MapContainer = styled(View)`
    flex: 1;
    maxHeight: ${MapStyle.mapHeight};
`