import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, set } from 'firebase/database'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native'
import { DisconnectedLayout } from '../../components/layouts/Layouts'
import { auth, db } from '../../firebase/firebase-setup'
import { RouteParams } from '../../navigation/RootNavigator'

export const Register = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const RegisterUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const reference = ref(db, 'players/' + res.user.uid)
                set(reference, {
                    mark: 0,
                })
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <DisconnectedLayout>
            <>
                <Text>Register</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />

                <Button title="Submit" onPress={RegisterUser} />
                <Button title="Sign in" onPress={() => navigation.navigate('SignIn')} />
            </>
        </DisconnectedLayout>
    )
}
