import React, {memo} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {colors} from '../theme';

const ButtonComponent = ({title, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, buttonStyle]}>
      <Text style={[styles.textColor, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonComponent);

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: colors.buttonColor,
    margin: 10,
    borderRadius: 5,
    elevation: 5,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },
  textColor: {
    color: colors.white,
  },
});
