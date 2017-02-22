import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '' ,
  password: '',
  user: null
};

export default (state = INITIAL_STATE, actions) => {
  console.log('authReducers',actions,actions.type,actions.payload);

  switch (actions.type) {
    case EMAIL_CHANGED:
      return { ...state, email: actions.payload, error: ''};
    case PASSWORD_CHANGED:
        return { ...state, password: actions.payload, error: '' };
    case LOGIN_USER_SUCCESS:
        return { ...state, user: actions.payload, error: ''};
    case LOGIN_USER_FAILED:
        return { ...state, error: actions.payload, password: ''};
    default:
      return state;
  }
};
