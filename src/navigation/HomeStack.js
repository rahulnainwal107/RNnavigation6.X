import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeContainer from '../screens/Home/HomeContainer';
import StackScreenNavigator from './StackScreenNavigator';
import {colors} from '../theme/index';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeContainer}
        options={{headerStyle: {backgroundColor: colors.headerBackgroundColor}}}
      />
      <Stack.Screen
        name="StackScreens"
        component={StackScreenNavigator}
        options={{headerStyle: {backgroundColor: colors.headerBackgroundColor}}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
