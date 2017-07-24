import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_form/greeting_form_container';
import SignUpModalContainer from './signup_form/signup_modal_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CityListsContainer from './city_lists/city_lists_container';
import CityDetailContainer from './city_lists/city_detail_container';
import RestaurantDetailContainer from './restaurant_lists/restaurant_detail_container';


const App = () => (
  <div>
    <GreetingContainer />
    <Route exact path='/' component={CityListsContainer} />
    <Route exact path='/api/cities/:city_id' component={CityDetailContainer} />
    <Route exact path='/api/restaurants/:restaurant_id' component={RestaurantDetailContainer} />

  </div>
);

export default App;
