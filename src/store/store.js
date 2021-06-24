import {createStore} from 'redux';

const initAction = {
  type: 'ADD',
  id: '',
  userFullName: '',
  userMail: '',
  userAvatarPath: '',
  userAddress: '',
  userWeight: '',
  userHeight: '',
  userShortIntroduction: '',
  userAge: '',
  userBirthDay: '',
  userFirstName: '',
  userLastName: '',
  userPreferredHand: '',
};
const initState = {
  id: '',
  userFullName: '',
  userMail: '',
  userAvatarPath: '',
  userAddress: '',
  userWeight: '',
  userHeight: '',
  userShortIntroduction: '',
  userAge: '',
  userBirthDay: '',
  userFirstName: '',
  userLastName: '',
  userPreferredHand: '',
};
export const reducer = (state = initState, action = initAction) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      id: action.id,
      userFullName: action.userFullName,
      userMail: action.userMail,
      userAvatarPath: action.userAvatarPath,
      userAddress: action.userAddress,
      userWeight: action.userWeight,
      userHeight: action.userHeight,
      userShortIntroduction: action.userShortIntroduction,
      userAge: action.userAge,
      userBirthDay: action.userBirthDay,
      userFirstName: action.userFirstName,
      userLastName: action.userLastName,
      userPreferredHand: action.userPreferredHand,
    };
  }
  return state;
};

export const store = createStore(reducer);
