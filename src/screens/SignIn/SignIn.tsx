import React, { useState } from 'react'
import { Button } from 'react-native'
import { DisconnectedLayout } from '../../components/layouts/Layouts'
import { auth } from '../../firebase/firebase-setup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../../navigation/RootNavigator'
import * as Styled from './Signin.styles'

export const SignIn = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <DisconnectedLayout>
            <Styled.FormContainer>
                <Styled.FormTitle>Signin</Styled.FormTitle>
                <Styled.Field
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor="black"
                />
                <Styled.Field
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor="black"
                />
                <Styled.FormButton>
                    <Button title="Submit" onPress={SignInUser} color="black" />
                </Styled.FormButton>
                <Styled.FormButton>
                    <Button
                        title="Register"
                        onPress={() => navigation.navigate('Register')}
                        color="black"
                    />
                </Styled.FormButton>
            </Styled.FormContainer>
        </DisconnectedLayout>
    )
}
