import React from 'react'
import { TouchableOpacity } from 'react-native'
import BellIcon from '../../assets/icons/BellIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import UserIcon from '../../assets/icons/UserIcon'
import * as Styled from './AppFooter.styles'
import { RouteParams } from '../../navigation/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

export const AppFooter = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    return (
        <Styled.AppFooterContainer>
            <TouchableOpacity
                onPress={() => {
                    console.log('bell clicked')
                    // navigation.navigate('')
                }}
            >
                <BellIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('NewGame')}>
                <PlusIcon />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    console.log('user clicked')
                    // navigation.navigate('')
                }}
            >
                <UserIcon />
            </TouchableOpacity>
        </Styled.AppFooterContainer>
    )
}
