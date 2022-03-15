import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Colors, Font } from '../../styles/'

export const FullWidthButtonContainer = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${Colors.gray};
    border-radius: 10px;
    margin-bottom: 24px;
`

export const FullWidthButtonText = styled(Text)`
    font-size: 30px;
    padding: 31px 14px 31px 14px;
    font-family: ${Font.montserratExtrabold};
    color: ${Colors.white};
`
