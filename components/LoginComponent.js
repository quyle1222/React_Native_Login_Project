import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styles';
import ActionLogin from '../CallApiLogin';

const ImageLogin = () => {
  return (
    <Image
      style={styles.imageLogin}
      source={require('../image/Image.png')}></Image>
  );
};

const LoginComponents = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const submit = () => {
    ActionLogin(userName, passWord, navigation);
  };
  return (
    <ScrollView
      howsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View style={styles.item}>
          <ImageLogin />
        </View>
        <View style={[styles.item]}>
          <Text style={styles.text}>Tài khoản</Text>
        </View>
        <View style={styles.item}>
          <TextInput
            defaultValue={userName}
            onChangeText={userName => setUserName(userName)}
            style={styles.input}></TextInput>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Mật khẩu</Text>
        </View>
        <View style={styles.item}>
          <TextInput
            secureTextEntry={true}
            defaultValue={passWord}
            onChangeText={passWord => setPassWord(passWord)}
            style={styles.input}></TextInput>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => submit(userName, passWord, navigation)}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default LoginComponents;
