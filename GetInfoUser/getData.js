
import AsyncStorage from '@react-native-async-storage/async-storage';
async function getData() {
    try {
        const Obj = {
            id: await AsyncStorage.getItem('@id'),
            token: await AsyncStorage.getItem('@token')
        }
        return Obj;
    } catch (error) {
        console.log(error);
    }
}
export default getData;