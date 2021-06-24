import axios from 'axios';
import getData from './getData';
import {useState} from 'react';
import {store} from '../src/store/store';

function getApi() {
  const [User, setUser] = useState('');
  const fetchUser = async () => {
    const IdData = await getData();
    setUser(IdData);
  };
  fetchUser();
  return axios({
    method: 'GET',
    url: `https://teamsport.tk/api/v1/user/info?userId=${User.id}`,
    headers: {Authorization: 'Bearer ' + User.token},
  })
    .then(res => {
      if (res.data.success == true) {
        store.dispatch({
          type: 'ADD',
          id: res.data.data.userId,
          userFullName: res.data.data.userFullName,
          userMail: res.data.data.userMail,
          userAvatarPath: res.data.data.userAvatarPath,
          userAddress: res.data.data.userAddress,
          userWeight: res.data.data.userWeight,
          userHeight: res.data.data.userHeight,
          userShortIntroduction: res.data.data.userShortIntroduction,
          userAge: res.data.data.userAge,
          userBirthDay: res.data.data.userBirthDay,
          userFirstName: res.data.data.userFirstName,
          userLastName: res.data.data.userLastName,
          userPreferredHand: res.data.data.userPreferredHand,
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
}
export default getApi;
