import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import * as Styled from './Map.styles'


export const Map: React.FunctionComponent = ({}) => {
  let location = {
    latitude: 23.259933,
    longitude: 77.412613,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  }

  return (
    <Styled.MapContainer>
      <MapView 
        style={styles.map}
        region={location}
      >
        <Marker coordinate={{ latitude: 23.259933, longitude: 77.412613}} />
      </MapView>
    </Styled.MapContainer>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height,
  },
});