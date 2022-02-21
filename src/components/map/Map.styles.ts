import styled from 'styled-components'
import { View, Text } from 'react-native'
import { Font, Colors } from '../../styles'
import MapView from "react-native-maps";
import { Dimensions } from "react-native";

export const MapContainer = styled(View)`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`

export const Map = styled(MapView)`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    width: ${Dimensions.get("window").width - 12};
    height: ${Dimensions.get("window").height};
    borderRadius: 10px;
`

export const NearbyStadium = styled(Text)`
    marginRight: auto;
    marginBottom: 8px;
    color: ${Colors.white};
    fontFamily: ${Font.montserratSemiBold};
`