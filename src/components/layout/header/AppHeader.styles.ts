import styled from 'styled-components'
import { TextInput, View } from 'react-native'

export const AppHeaderContainer = styled(View)`
    width: 100%;
    position: absolute;
    top: 0;
    padding: 0 16px;
`

export const SearchBarContainer = styled(View)`
    flex-direction: row;
    width: 100%;
    padding: 12px;
    align-items: center;
    border-radius: 50px;
    background-color: #24EA73;
`

export const SearchBar = styled(TextInput)`
    margin-left: 12px;
    flex-grow: 2;
`
