import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/InitialScreens/SplashScreen';
import {store} from './src/redux/store/store';
import {Provider} from 'react-redux';

const App = () => {
  //   return (
  //     <Provider store={store}>
  //       <SafeAreaView style={styles.container}>
  //         <SplashScreen />
  //       </SafeAreaView>
  //     </Provider>
  //   );
  return (
    <SafeAreaView style={styles.container}>
      <SplashScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
