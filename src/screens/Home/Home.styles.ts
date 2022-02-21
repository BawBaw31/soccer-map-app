import styled from 'styled-components'
import { Colors } from '../../styles'
import { View, SafeAreaView } from 'react-native'

export const SafeAreaContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${Colors.background};
`

export const PageContainer = styled(View)`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 80px 16px 112px 16px;
`