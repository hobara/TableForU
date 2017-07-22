import merge from 'lodash/merge';
import { RECEIVE_SINGLE_CITY } from '../actions/city_actions';

const initialState = {};

const CityReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_CITY:
      return action.city;
    default:
      return state;
  }
};
export default CityReducer;
