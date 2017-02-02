import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from './types';

export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  console.log('login user action called');
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(user => {
        console.log('signInWithEmailAndPassword then');
        onLoginSuccess(dispatch, user);
      })
      .catch((error) => {
        console.log('signInWithEmailAndPassword catch',error);
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(user => onLoginSuccess(dispatch,user))
          .catch(() => onLoginFailed(dispatch));
      });
  };
};

const onLoginSuccess = (dispatch, user) => {

  const returnObj = {
    type: LOGIN_USER_SUCCESS,
    payload: user
  }
  dispatch(returnObj);

  Actions.main();

}

const onLoginFailed = (dispatch) => {
    console.log('onLoginFailed');
    dispatch({ type: LOGIN_USER_FAILED});
}
