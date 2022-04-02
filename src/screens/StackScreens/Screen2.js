import React, {useCallback} from 'react';
import {View, Text} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';

const Screen2 = ({navigation}) => {
  const onPress = useCallback(() => {
    navigation.navigate('Screen3');
  }, []);

  return (
    <View>
      <Text>Screen2</Text>
      <ButtonComponent title={'Navigate to screen 3'} onPress={onPress} />
    </View>
  );
};

export default Screen2;
