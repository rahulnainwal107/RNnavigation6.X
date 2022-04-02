import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from '../screens/StackScreens/Screen1';
import Screen2 from '../screens/StackScreens/Screen2';
import Screen3 from '../screens/StackScreens/Screen3';
import {colors} from '../theme/index';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{headerStyle: {backgroundColor: colors.headerBackgroundColor}}}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{headerStyle: {backgroundColor: colors.headerBackgroundColor}}}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{headerStyle: {backgroundColor: colors.headerBackgroundColor}}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
