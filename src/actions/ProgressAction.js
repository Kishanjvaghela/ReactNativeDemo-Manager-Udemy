import {
  PROGRESS_DIALOG
} from './types';

export const showProgress = () => {
  return {
    type: PROGRESS_DIALOG,
    payload: true
  };
}

export const hideProgress = () => {
  return {
    type: PROGRESS_DIALOG,
    payload: false
  };
}
