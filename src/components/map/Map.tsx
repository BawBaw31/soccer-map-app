import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Styled from "./Map.styles";

export const Map: React.FunctionComponent = ({}) => {
  const [location, setLocation]: any = useState(null);
  const [errorMsg, setErrorMsg]: any = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setIsLoaded(true)
      setLocation(location);
    })();
  }, []);

  let latitudeValue: number = 0;
  let longitudeValue: number = 0;

  if (errorMsg) {
    latitudeValue = errorMsg;
    longitudeValue = errorMsg;
  } else if (location) {
    longitudeValue = location.coords.longitude;
    latitudeValue = location.coords.latitude;
  }

  let geolocation = {
    latitude: latitudeValue,
    longitude: longitudeValue,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  };

  return (
    isLoaded ? <Styled.MapContainer>
      {/* Todo: import typography */}
      <Styled.NearbyStadium>Nearby stadiums</Styled.NearbyStadium>
      <Styled.Map region={geolocation}>
        <Marker
          coordinate={{ latitude: latitudeValue, longitude: longitudeValue }}
        />
      </Styled.Map>
    </Styled.MapContainer> : <Text>Loading...</Text>
  );
};
