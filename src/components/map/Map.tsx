import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
import * as Styled from './Map.styles'


export const Map: React.FunctionComponent = ({}) => {
  return (
    <Styled.MapContainer>
      <MapView style={styles.map} />
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