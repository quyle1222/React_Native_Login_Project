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
          name: res.data.data.userFullName,
          email: res.data.data.userMail,
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
}
export default getApi;
