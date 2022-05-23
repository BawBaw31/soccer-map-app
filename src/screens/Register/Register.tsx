import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, set } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import { DisconnectedLayout } from '../../components/layouts/Layouts'
import { auth, db } from '../../firebase/firebase-setup'
import { RouteParams } from '../../navigation/RootNavigator'
import * as Styled from './Register.styles'

export const Register = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    useEffect(() => {
        if (username !== '' && password !== '' && email !== '') {
            setIsDisabled(false)
        }
        if (username === '' || password === '' || email === '') {
            setIsDisabled(true)
        }
    }, [username, password, email])

    const RegisterUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                if (res) {
                    const reference = ref(db, 'players/' + res.user.uid)
                    set(reference, {
                        mark: 0,
                    })
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    updateProfile(auth.currentUser, { displayName: username })
                }
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <DisconnectedLayout>
            <Styled.FormContainer>
                <Styled.FormTitle>Register</Styled.FormTitle>
                <Styled.FormLabel>Username</Styled.FormLabel>
                <Styled.Field
                    placeholder="Username"
                    placeholderTextColor="black"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <Styled.FormLabel>Email</Styled.FormLabel>
                <Styled.Field
                    placeholder="Email"
                    placeholderTextColor="black"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Styled.FormLabel>Password</Styled.FormLabel>
                <Styled.Field
                    placeholder="Password"
                    placeholderTextColor="black"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <Styled.FormButton disabled={isDisabled}>
                    <Button
                        title="Submit"
                        onPress={RegisterUser}
                        color="black"
                        disabled={isDisabled}
                    />
                </Styled.FormButton>
                <Styled.FormButton>
                    <Button
                        title="Sign in"
                        onPress={() => navigation.navigate('SignIn')}
                        color="black"
                    />
                </Styled.FormButton>
            </Styled.FormContainer>
        </DisconnectedLayout>
    )
}
