import React, {useCallback} from 'react';
import {View, Text} from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';

const Screen1 = ({navigation}) => {
  const onPress = useCallback(() => {
    navigation.navigate('Screen2');
  }, []);

  return (
    <View>
      <Text>Screen1</Text>
      <ButtonComponent title={'Navigate to screen 2'} onPress={onPress} />
    </View>
  );
};

export default Screen1;
