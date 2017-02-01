import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
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
    playload: text
  };
};
