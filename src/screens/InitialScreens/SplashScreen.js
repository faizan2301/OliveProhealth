import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import imagePath from '../../constant/imagePath';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={imagePath.appLogo} style={styles.imageStyle} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 300,
    width: 300,
  },
});
