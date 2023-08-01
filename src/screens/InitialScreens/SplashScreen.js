import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import imagePath from '../../constant/imagePath';
import NearByHospital from '../../components/NearByHospital';
const SplashScreen = () => {
  return (
    <ScrollView>
      <NearByHospital />
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
    </ScrollView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageStyle: {
    height: 300,
    width: 300,
  },
});
