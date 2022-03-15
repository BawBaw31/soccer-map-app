import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Colors, Font } from '../../styles/'

export const ButtonContainer = styled(View)`
    display: flex;
    padding: 31px 14px 31px 14px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${Colors.gray};
    border-radius: 10px;
    margin-bottom: 24px;
`

export const ButtonText = styled(Text)`
    font-size: 30px;
    font-family: ${Font.montserratExtrabold};
    color: ${Colors.white};
`
