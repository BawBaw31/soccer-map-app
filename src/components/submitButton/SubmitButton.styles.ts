import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Colors, Font } from '../../styles/'

export const SubmitButtonContainer = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const SubmitButton = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    background-color: ${Colors.primary};
    border-radius: 50px;
`

export const SubmitButtonLabel = styled(Text)`
    font-size: 18px;
    padding: 20px 34px;
    font-family: ${Font.montserratExtrabold};
    color: ${Colors.black};
`
