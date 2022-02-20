import React from 'react'
import { Text, View } from 'react-native'
import { AppFooter } from '../../components/layout/footer/AppFooter'
import { AppHeader } from '../../components/layout/header/AppHeader'
import { StyleSheet } from 'react-native';
import { Map } from '../../components/map/Map'
import * as Styled from './Home.styles'

export const Home: React.FunctionComponent = ({}) => {

    return (
        <Styled.SafeAreaContainer>
          <Styled.PageContainer>
            <AppHeader />
            <View>
              <Text>Add your stadium container</Text>
            </View>
            <View style={styles.view}>
              <Map />
            </View>
            <AppFooter/>
          </Styled.PageContainer>
        </Styled.SafeAreaContainer>
    )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    maxHeight: 400, // Add map height dynamic value
  },
});