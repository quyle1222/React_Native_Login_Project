import {createStore} from 'redux';

const initAction = {
  type: 'ADD',
  id: 0,
  name: '',
  email: '',
  avatar: '',
};
const initState = {
  id: 0,
  userName: '',
  userEmail: '',
  userAvatar: '',
};
export const reducer = (state = initState, action = initAction) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      id: action.id,
      userName: action.name,
      userEmail: action.email,
      userAvatar: action.avatar,
    };
  }
  return state;
};

export const store = createStore(reducer);
