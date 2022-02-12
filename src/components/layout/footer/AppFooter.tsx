import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../../../navigation/RootNavigator'
import { TouchableOpacity } from 'react-native'
import BellIcon from '../../../assets/icons/BellIcon'
import PlusIcon from '../../../assets/icons/PlusIcon'
import UserIcon from '../../../assets/icons/UserIcon'
import * as Styled from "./AppFooter.styles"

export const AppFooter: React.FunctionComponent = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()

    return (
        <Styled.AppFooterContainer>
            <TouchableOpacity onPress={() => {
                console.log('bell clicked')
                navigation.navigate('Home')
            }}>
                <BellIcon/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                console.log('plus clicked')
                navigation.navigate('Test')
            }}>
                <PlusIcon/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('user clicked')}>
                <UserIcon/>
            </TouchableOpacity>
        </Styled.AppFooterContainer>
    )
}