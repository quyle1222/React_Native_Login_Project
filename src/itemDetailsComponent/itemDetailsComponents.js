import React from 'react';
import {StylesDetails} from '../StylesComponent/StylesDetails';
import {View, Text, Image} from 'react-native';
export function ItemDetailsComponent(text) {
  return (
    <View style={StylesDetails.fieldContainer}>
      <Text style={StylesDetails.textField}>{text}</Text>
    </View>
  );
}
