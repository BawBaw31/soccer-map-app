import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import HomeIcon from '../../assets/icons/HomeIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import UserIcon from '../../assets/icons/UserIcon'
import { auth } from '../../firebase/firebase-setup'
import { RouteParams } from '../../navigation/RootNavigator'
import { CustomButton } from '../formField/FormField'
import * as Styled from './AppFooter.styles'

export const AppFooter = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [modalVisible, setModalVisible] = useState(false)

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
        <>
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <Styled.ModalContainer onPress={() => setModalVisible(!modalVisible)}>
                    <Styled.Modal>
                        <Styled.ModalTitle>My account</Styled.ModalTitle>
                        <CustomButton text="Logout" onPress={Logout} />
                    </Styled.Modal>
                </Styled.ModalContainer>
            </Modal>
            <Styled.AppFooterContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <HomeIcon />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('NewGame')}>
                    <PlusIcon />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <UserIcon />
                </TouchableOpacity>
            </Styled.AppFooterContainer>
        </>
    )
}
