import merge from 'lodash/merge';
import { RECEIVE_ALL_CITY, RECEIVE_SINGLE_CITY } from '../actions/city_actions';

const initialState = {
  lists: {},
  currentCity: null
};

const CityReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CITY:
      return merge({}, state, {lists: action.city});
    case RECEIVE_SINGLE_CITY:
      const city1 = action.payload.city;
      return merge({}, state, {
        lists: { [city1.id]: city1 },
        currentCity: city1.id
      });
    default:
      return state;
  }
};
export default CityReducer;
