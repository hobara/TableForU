import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (state = null, action) => {
  Object.freeze(state);
  console.log(action);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.user === undefined) {
        return state;
      } else {
        return action.user;
      }
    default:
      return state;
  }
};

export default SessionReducer;
