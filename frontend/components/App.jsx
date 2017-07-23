import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_form/greeting_form_container';
import SignUpModalContainer from './signup_form/signup_modal_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CityListsContainer from './city_lists/city_lists';
import CityListItemContainer from './city_lists/city_list_item_container';


const App = () => (
  <div>
    <GreetingContainer />
    <Route exact path='/' component={CityListsContainer} />
    <Route exact path='/api/city/:city_id' component={CityListItemContainer} />
  </div>
);

export default App;
