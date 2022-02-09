import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AppFooter from './src/components/layout/footer/AppFooter'

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppFooter/>
      </View>
    </>
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
