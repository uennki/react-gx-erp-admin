import { LOGIN_TYPE, LOGOUT_TYPE } from './actionTypes';

const defaultState = {
  status: JSON.parse(localStorage.getItem('loginStatus') || `false`),
};

export default (state = defaultState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_TYPE:
      return { ...state, status: true };
    case LOGOUT_TYPE:
      return { ...state, status: false };
    default:
      return state;
  }
};
