import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashContainer from '../screens/splash/SplashContainer';
import HomeStack from './HomeStack';
import {colors} from '../theme/index';

const Stack = createNativeStackNavigator();

const InitialStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashContainer}
        options={{headerShown: false}} // To show hide header on top of screen
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default InitialStack;
