/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TabIcon = ({focused, name, icon, isTrade, trade}) => {
  return isTrade ? (
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.black,
      }}>
      <Image
        source={icon}
        style={
          trade
            ? {
                width: 15,
                height: 15,
                tintColor: COLORS.white,
              }
            : {
                width: 30,
                height: 30,
                tintColor: COLORS.white,
              }
        }
      />
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h4,
        }}>
        {name}
      </Text>
    </View>
  ) : (
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={icon}
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? COLORS.white : COLORS.secondary,
        }}
      />
      <Text
        style={{
          color: focused ? COLORS.white : COLORS.secondary,
          ...FONTS.h4,
        }}>
        {name}
      </Text>
    </View>
  );
};
export default TabIcon;
