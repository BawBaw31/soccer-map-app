import styled from 'styled-components'
import { Colors } from '../../styles'
import { View, SafeAreaView, KeyboardAvoidingView } from 'react-native'

export const SafeAreaContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${Colors.background};
`

export const PageContainer = styled(View)`
    flex: 1;
`

export const PageContent = styled(View)`
    flex: 1;
    padding: 80px 16px 112px 16px;
`

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`