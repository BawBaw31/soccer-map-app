import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AppFooter from './src/components/layout/footer/AppFooter'

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        {/* <AppFooter></AppFooter> */}
        <StatusBar style='auto' />
      </View>
      <AppFooter></AppFooter>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
