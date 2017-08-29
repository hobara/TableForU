import merge from 'lodash/merge';
import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/session_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default ErrorsReducer;
