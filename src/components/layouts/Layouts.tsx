import React from 'react'
import { AppFooter } from '../footer/AppFooter'
import { AppHeader } from '../header/AppHeader'
import * as Styled from './Layouts.styles'

export const MainLayout: React.FunctionComponent = (props) => {

    return (
        <Styled.SafeAreaContainer>
            <Styled.PageContainer>
                <AppHeader />
                { props.children }
                <AppFooter/>
            </Styled.PageContainer>
        </Styled.SafeAreaContainer>
    )
}

export const DisconnectedLayout: React.FunctionComponent = (props) => {

    return (
        <Styled.SafeAreaContainer>
            <Styled.KeyboardAvoidingContainer behavior='padding'>
                { props.children }
            </Styled.KeyboardAvoidingContainer>
        </Styled.SafeAreaContainer>
    )
}