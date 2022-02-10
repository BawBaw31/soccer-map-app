import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home"
import { Test } from "../screens/Test"

export type RouteParams = {
    Home: undefined
    Test: undefined
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
                <Stack.Screen name='Test' component={Test} />
            </Stack.Group>
        </Stack.Navigator>
    )
}