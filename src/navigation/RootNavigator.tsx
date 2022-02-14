import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home/Home'

export type RouteParams = {
    Home: undefined
}

const Stack = createNativeStackNavigator<RouteParams>()

export const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            animation: 'none',
            headerShown: false
        }}>
            <Stack.Group>
                <Stack.Screen name='Home' component={Home} />
            </Stack.Group>
        </Stack.Navigator>
    )
}