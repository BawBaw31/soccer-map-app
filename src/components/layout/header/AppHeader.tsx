import React, { useState } from 'react'
import { TextInput } from 'react-native'
import SearchIcon from '../../../assets/icons/SearchIcon'
import * as Styled from "./AppHeader.styles"

export const AppHeader: React.FunctionComponent = ({}) => {
    const [searchText, setSearchText] = useState('')
    console.log(searchText)

    return (
        <Styled.AppHeaderContainer>
            <SearchIcon />
            <TextInput 
                onChangeText={setSearchText}
                value={searchText}
                placeholder="Press to search..."
                keyboardType="numeric"/>
        </Styled.AppHeaderContainer>
    )
}