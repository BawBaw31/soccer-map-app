import styled from 'styled-components'
import { View } from 'react-native'
import MapView from "react-native-maps";
import { Dimensions } from "react-native";

export const MapContainer = styled(View)`
    flex: 1;
    alignItems: center;
    justifyContent: center; 
`

// Todo: make twelve value dynamic
export const Map = styled(MapView)`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    width: ${Dimensions.get("window").width - 12};
    height: ${Dimensions.get("window").height};
    borderRadius: 10;
`
