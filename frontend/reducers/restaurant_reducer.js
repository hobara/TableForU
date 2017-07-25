import merge from 'lodash/merge';
import { RECEIVE_SINGLE_RESTAURANT } from '../actions/restaurant_actions';

const initialState = {};

const RestaurantReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_RESTAURANT:
      return action.restaurant;
    default:
      return state;
  }
};
export default RestaurantReducer;
