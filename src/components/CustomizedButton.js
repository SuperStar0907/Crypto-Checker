/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';
const CustomizedButton = ({children, onPress}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: COLORS.white,
        }}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default CustomizedButton;
