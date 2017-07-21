import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import CityReducer from './city_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  city: CityReducer,
  errors: ErrorsReducer
});

export default RootReducer;
