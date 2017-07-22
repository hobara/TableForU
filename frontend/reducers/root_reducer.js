import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import CityReducer from './city_reducer';
import CitiesReducer from './cities_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  city: CityReducer,
  cities: CitiesReducer,
  errors: ErrorsReducer
});

export default RootReducer;
