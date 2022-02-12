import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { AppFooter } from '../components/layout/footer/AppFooter'
import { AppHeader } from '../components/layout/header/AppHeader'

export const Home: React.FunctionComponent = ({}) => {

    return (
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.container}>
            <AppHeader />
              <Text>Home</Text>
            <AppFooter/>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#312F36',
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
})
