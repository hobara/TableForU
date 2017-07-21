import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from './greeting_form/greeting_form_container';
import SignUpModalContainer from './signup_form/signup_modal_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CityLists from './city_lists/city_lists';

const App = () => (
  <div>

    <header>
      <GreetingContainer />
    </header>

    <div className='main-background'>
    </div>

    <div>
      <CityLists />
    </div>

  </div>
);

export default App;
