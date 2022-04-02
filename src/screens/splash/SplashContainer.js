import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import assetPath from '../../assets/index';
import {strings} from '../../theme/index';

const SplashContainer = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeStack'); // To avoid moving backe to splash screen once navigated to home screen.
    }, 5000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image source={assetPath.splashImage} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{strings.splash}</Text>
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
