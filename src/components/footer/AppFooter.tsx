import React from 'react'
import { TouchableOpacity } from 'react-native'
import BellIcon from '../../assets/icons/BellIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import UserIcon from '../../assets/icons/UserIcon'
import * as Styled from './AppFooter.styles'
import { RouteParams } from '../../navigation/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase-setup'

export const AppFooter = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const Logout = () => {
        signOut(auth)
            .then((res) => {
                console.log('Logout :', res)
            })
            .catch((err) => {
                alert(err)
            })
    }
    return (
        <Styled.AppFooterContainer>
            <TouchableOpacity
                onPress={() => {
                    console.log('bell clicked')
                }}
            >
                <BellIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('NewGame')}>
                <PlusIcon />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    Logout()
                }}
            >
                <UserIcon />
            </TouchableOpacity>
        </Styled.AppFooterContainer>
    )
}
