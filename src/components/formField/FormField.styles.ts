import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import { Colors, Font, Spacing } from '../../styles/'

export const SubmitButton = styled(TouchableOpacity)`
    background-color: ${Colors.primary};
    border-radius: 50px;
    padding: ${Spacing.l} ${Spacing.xxl};
`

export const SubmitButtonLabel = styled(Text)`
    font-size: 18px;
    font-family: ${Font.montserratExtrabold};
    color: ${Colors.black};
    text-align: center;
`

export const SubmitButtonContainer = styled(View)`
    justify-content: center;
    align-items: center;
`

export const CustomTextInput = styled(TextInput)`
    margin-bottom: ${Spacing.l};
    font-size: 20px;
    font-family: ${Font.montserratRegular};
    color: ${Colors.white};
    border-bottom-color: ${Colors.white};
    border-bottom-width: 1px;
`

export const FormLabel = styled(Text)`
    color: ${Colors.white};
    font-size: 20px;
    font-family: ${Font.montserratRegular};
`
