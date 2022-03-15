import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Colors, Font } from '../../styles/'

export const ButtonContainer = styled(View)`
    width: 100%;
    background-color: ${Colors.gray};
    border-radius: 10px;
`

export const ButtonText = styled(Text)`
    font-size: 30px;
    font-family: ${Font.montserratExtrabold};
    color: ${Colors.white};
`
