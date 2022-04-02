import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Tab1 from '../screens/MaterialTopTab/Tab1';
import Tab2 from '../screens/MaterialTopTab/Tab2';
import Tab3 from '../screens/MaterialTopTab/Tab3';

const Tab = createMaterialTopTabNavigator();

const TopTabBarStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tab1"
      swipeEnabled={true}
      screenOptions={({}) => ({
        backBehavior: 'initialRoute',
        lazy: true,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle: {backgroundColor: 'red'},
      })}>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
    </Tab.Navigator>
  );
};

export default TopTabBarStack;
