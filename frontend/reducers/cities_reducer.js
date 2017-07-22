import merge from 'lodash/merge';
import { RECEIVE_ALL_CITY } from '../actions/city_actions';

const initialState = [];

const CitiesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CITY:
      return merge([], action.cities);
    default:
      return state;
  }
};
export default CitiesReducer;
