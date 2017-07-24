import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import CityReducer from './city_reducer';
import CitiesReducer from './cities_reducer';
import RestaurantReducer from './restaurant_reducer';
import RestaurantsReducer from './restaurants_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  city: CityReducer,
  cities: CitiesReducer,
  restaurant: RestaurantReducer,
  restaurants: RestaurantsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
