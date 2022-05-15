import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/firebase-setup'
import { Home } from '../screens/Home/Home'
import { Loading } from '../screens/Loading/Loading'
import { Register } from '../screens/Register/Register'
import { SignIn } from '../screens/SignIn/SignIn'
import { NewGame } from '../screens/NewGame/NewGame'
import { StadiumScreen } from '../screens/StadiumScreen/StadiumScreen'

export type RouteParams = {
    Home: undefined
    Loading: undefined
    Register: undefined
    SignIn: undefined
    NewGame: undefined
    StadiumScreen: { id: number }
}

const Stack = createNativeStackNavigator<RouteParams>()

export const RootNavigator = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isSignedIn, setIsSignedIn] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoading(false)
            setIsSignedIn(true)
        } else {
            setIsLoading(false)
            setIsSignedIn(false)
        }
    })

    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'none',
                headerShown: false,
            }}
        >
            {isLoading ? (
                <Stack.Group>
                    <Stack.Screen name="Loading" component={Loading} />
                </Stack.Group>
            ) : isSignedIn ? (
                <Stack.Group>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="NewGame" component={NewGame} />
                    <Stack.Screen name="StadiumScreen" component={StadiumScreen} />
                </Stack.Group>
            ) : (
                <Stack.Group>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    )
}
