import React from 'react'
import { Text } from 'react-native'
import { AppFooter } from '../../components/layout/footer/AppFooter'
import { AppHeader } from '../../components/layout/header/AppHeader'
import { Map } from '../../components/map/Map'
import * as Styled from './Home.styles'

export const Home: React.FunctionComponent = ({}) => {

    return (
        <Styled.SafeAreaContainer>
          <Styled.PageContainer>
            <AppHeader />
              <Map />
            <AppFooter/>
          </Styled.PageContainer>
        </Styled.SafeAreaContainer>
    )
}
