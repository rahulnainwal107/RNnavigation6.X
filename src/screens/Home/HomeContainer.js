import React from 'react';
import {View} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';

const HomeContainer = () => {
  return (
    <View>
      <ButtonComponent title={'Stack Navigator'} />
      <ButtonComponent title={'Drawer Navigator'} />
      <ButtonComponent title={'Material Top Tabs'} />
      <ButtonComponent title={'Bottom Tabs Navigator'} />
      <ButtonComponent title={'Material Bottom Tabs Navigator'} />
    </View>
  );
};

export default HomeContainer;
