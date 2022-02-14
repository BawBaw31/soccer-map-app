import styled from 'styled-components'
import { TextInput, View } from 'react-native'
import { Colors, Spacing } from '../../../styles'

export const AppHeaderContainer = styled(View)`
    width: 100%;
    position: absolute;
    top: 0;
    padding: ${Spacing.s} ${Spacing.l};
`

export const SearchBarContainer = styled(View)`
    flex-direction: row;
    width: 100%;
    padding: ${Spacing.m};
    align-items: center;
    border-radius: 50px;
    background-color: ${Colors.primary};
`

export const SearchBar = styled(TextInput)`
    margin-left: ${Spacing.m};
    flex-grow: 2;
`
