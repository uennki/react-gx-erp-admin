import { LOGIN_TYPE, LOGOUT_TYPE } from './actionTypes';

function logoutAction() {
  return { type: LOGOUT_TYPE };
}

function loginAction() {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_TYPE });
  };
}

export { logoutAction, loginAction };
