import React, {useState} from 'react';
import {View, Text} from 'react-native';
import getApi from '../GetInfoUser/getApi';
import styles from '../styles';
import {store} from '../src/store/store';

const DetailsComponents = () => {
  getApi();
  const data = store.getState();
  console.log('Data ' + data.id);
  return (
    <View style={styles.item}>
      <Text>{data.id}</Text>
      <Text>{data.userName}</Text>
      <Text>{data.userEmail}</Text>
    </View>
  );
};
export default DetailsComponents;
