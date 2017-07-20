import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from './greeting_form/greeting_form_container';
import SessionFormContainer from './session_form/session_form_container';
import SignUpFormContainer from './signup_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>

    <AuthRoute path='/signup' component={SignUpFormContainer} />
    <AuthRoute path='/signin' component={SessionFormContainer} />

    <div className='main-background'>

    </div>
  </div>
);

export default App;
