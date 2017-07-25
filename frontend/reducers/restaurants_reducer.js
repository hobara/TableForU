import merge from 'lodash/merge';
import { RECEIVE_ALL_RESTAURANT } from '../actions/restaurant_actions';

const initialState = {};

const RestaurantsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_RESTAURANT:
      return action.restaurants;
    default:
      return state;
  }
};
export default RestaurantsReducer;
