import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
export default function NearByHospital() {
  const markerArray = [
    {
      latitude: 35.6762,
      longitude: 139.6503,
    },
    {
      latitude: 35.6762,
      longitude: 139.6503,
    },
    {
      latitude: 35.676126,
      longitude: 139.650331,
    },
    {
      latitude: 35.6762,
      longitude: 139.6503,
    },
  ];
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={tokyoRegion} //your region data goes here.
      >
        {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
        {markerArray.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    //the container will fill the whole screen.
    height: 300,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
