import axios from 'axios';
import getData from './getData';
import { useState } from 'react';
import { createStore } from 'redux'

function getApi() {
    const [User, setUser] = useState('');
    const fetchUser = async () => {
        const IdData = await getData();
        setUser(IdData)
    }
    fetchUser();
    return (
        axios({
            method: "GET",
            url: `https://teamsport.tk/api/v1/user/info?userId=${User.id}`,
            headers: { 'Authorization': 'Bearer ' + User.token }
        }).then(res => {
            if (res.data.success == true) {
                console.log(res.data.success);
            }
        }).catch(err => {
            console.log(err);
        })
    )
}
export default getApi;