import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const initialState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  console.log(action);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const user = action.user;
      return merge({}, state, { currentUser: user });
    case RECEIVE_ERRORS:
      const newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
