import {createStore} from 'redux';

const initAction = {
  type: 'ADD',
  id: 0,
  name: '',
  email: '',
};
const initState = {
  id: 0,
  userName: '',
  userEmail: '',
};
export const reducer = (state = initState, action = initAction) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      id: action.id,
      userName: action.name,
      userEmail: action.email,
    };
  }
  return state;
};

export const store = createStore(reducer);
