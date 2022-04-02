import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import assetPath from '../../assets/index';

const SplashContainer = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={assetPath.splashImage} style={styles.imageStyle} />
      <Text style={styles.textStyle}>React Navigation 6.X</Text>
    </View>
  );
};

export default SplashContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  textStyle: {
    fontSize: 18,
  },
});
