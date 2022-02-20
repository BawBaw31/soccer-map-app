import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as Styled from './Map.styles'


export const Map: React.FunctionComponent = ({}) => {
  return (
    <Styled.MapContainer>
      <MapView style={styles.map} />
    </Styled.MapContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});