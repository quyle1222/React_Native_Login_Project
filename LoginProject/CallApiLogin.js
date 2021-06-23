import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const storeData = async (token, id) => {
  try {
    await AsyncStorage.setItem('@id', id)
    await AsyncStorage.setItem('@token', token)
  } catch (e) {
    console.log(e);
  }
}
function ActionLogin(userName, passWord, navigation) {
  return (
    axios({
      method: "POST",
      url: 'https://teamsport.tk/api/v1/login',
      data: {
        username: `${userName}`,
        password: `${passWord}`
      }
    }).then(res => {
      console.log(res.data.success);
      if (res.data.success == true) {
        Alert.alert("Đăng nhập thành công");
        storeData(res.data.data.token, res.data.data.userId)
        navigation.navigate("Details");
      }
      else {
        Alert.alert("Đăng nhập thất bại");
      }
    }).catch(err => {
      console.log(err);
    })
  );
}


export default ActionLogin;