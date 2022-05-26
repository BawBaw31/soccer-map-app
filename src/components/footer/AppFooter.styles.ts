import styled from 'styled-components'
import { Pressable, View, Text } from 'react-native'
import { Colors, Font, Spacing } from '../../styles'

export const AppFooterContainer = styled(View)`
    flex-direction: row;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: ${Spacing.l} ${Spacing.xl};
    align-items: center;
    justify-content: space-between;
`

export const ModalContainer = styled(Pressable)`
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Colors.transparentBackground};
`
export const Modal = styled(View)`
    background-color: white;
    border-radius: 10px;
    padding: ${Spacing.xxl};
    align-items: center;
`

export const ModalTitle = styled(Text)`
    margin-bottom: ${Spacing.l};
    color: ${Colors.black};
    font-family: ${Font.montserratSemiBold};
    font-size: 16px;
`
