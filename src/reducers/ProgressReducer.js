import {
  PROGRESS_DIALOG
} from '../actions/types';

const INITIAL_STATE = {
  progress: false
};

export default (state = INITIAL_STATE, actions) => {
  console.log('progress Reducers',actions,actions.type,actions.payload);
  switch (actions.type) {
    case PROGRESS_DIALOG:
        return { ...state, progress: actions.payload };
      break;
    default:
      return state;
  }
};
