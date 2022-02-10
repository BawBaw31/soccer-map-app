import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { AppFooter } from '../components/layout/footer/AppFooter'

export const Home: React.FunctionComponent = ({}) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        <AppFooter/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#312F36',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
