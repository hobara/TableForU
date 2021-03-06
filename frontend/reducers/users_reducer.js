import { merge } from 'lodash';
import { RECEIVE_USER, RECEIVE_UPDATE, RECEIVE_DESTROY_RESERVATION } from '../actions/user_actions';

const _nullUser = {
  reservations: [],
};

const UsersReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_UPDATE:
      let updateState = Object.assign({}, state);
      merge(updateState.reservations.find(el => el.res_id === action.reservation.res_id), action.reservation);
      return updateState;
    default:
      return state;
  }
};

export default UsersReducer;
