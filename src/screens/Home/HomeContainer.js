import React, {useCallback} from 'react';
import {View} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';

const HomeContainer = ({navigation}) => {
  const onPress = useCallback(routeName => {
    navigation.navigate(routeName);
  });

  return (
    <View>
      <ButtonComponent
        title={'Stack Navigator'}
        onPress={onPress.bind(this, 'StackScreens')}
      />
      <ButtonComponent title={'Drawer Navigator'} />
      <ButtonComponent title={'Material Top Tabs'} />
      <ButtonComponent title={'Bottom Tabs Navigator'} />
      <ButtonComponent title={'Material Bottom Tabs Navigator'} />
    </View>
  );
};

export default HomeContainer;
