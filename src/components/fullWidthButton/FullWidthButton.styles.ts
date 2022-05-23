import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Colors, Font, Spacing } from '../../styles/'

export const FullWidthButtonContainer = styled(View)`
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${Colors.gray};
    border-radius: 10px;
    margin-bottom: ${Spacing.s};
`

export const FullWidthButtonLabel = styled(Text)`
    font-size: 30px;
    padding: ${Spacing.xxl} ${Spacing.l};
    font-family: ${Font.montserratExtrabold};
    color: ${Colors.white};
`
