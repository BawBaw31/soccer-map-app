import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { Text, View } from 'react-native'
import { StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import * as Styled from "./Map.styles";

export const Map: React.FunctionComponent = ({}) => {
  const [location, setLocation]: any = useState(null);
  const [errorMsg, setErrorMsg]: any = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


  let geolocation = {
    latitude: 23.259933,
    longitude: 77.412613,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  };

  let text: any = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <View>
        <Text>{text}</Text>
      </View>
      <Styled.MapContainer>
        <MapView style={styles.map} region={geolocation}>
          <Marker coordinate={{ latitude: 23.259933, longitude: 77.412613 }} />
        </MapView>
      </Styled.MapContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height,
  },
});
