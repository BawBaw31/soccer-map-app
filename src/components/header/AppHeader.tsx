import React, { useState } from 'react'
import { NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'
import SearchIcon from '../../assets/icons/SearchIcon'
import * as Styled from './AppHeader.styles'

export const AppHeader: React.FunctionComponent = ({}) => {
    const [searchText, setSearchText] = useState('')

    const onSubmit = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) :void => {
        e.preventDefault()
        console.log(searchText)
    }

    return (
        <Styled.AppHeaderContainer>
            <Styled.SearchBarContainer>
                <SearchIcon />
                <Styled.SearchBar 
                    onChangeText={setSearchText}
                    value={searchText}
                    placeholder='Press to search...'
                    onSubmitEditing={onSubmit}/>
            </Styled.SearchBarContainer>
        </Styled.AppHeaderContainer>
    )
}