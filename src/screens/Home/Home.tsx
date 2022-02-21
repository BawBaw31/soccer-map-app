import React from 'react'
import { AppFooter } from '../../components/layout/footer/AppFooter'
import { AppHeader } from '../../components/layout/header/AppHeader'
import { Map } from '../../components/map/Map'
import { View } from 'react-native'
import * as Styled from './Home.styles'

export const Home: React.FunctionComponent = ({}) => {
    return (
        <Styled.SafeAreaContainer>
          <Styled.PageContainer>
            <AppHeader />
            <View>
              <Map />
            </View>
            <AppFooter/>
          </Styled.PageContainer>
        </Styled.SafeAreaContainer>
    )
}
