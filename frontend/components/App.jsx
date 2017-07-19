import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SignUpFormContainer from './signup_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link className='header' to='/'>
        <img src='http://res.cloudinary.com/hobara/image/upload/v1500428429/open_table_logo_animation_iifjys.gif' /> TableForU
      </Link>
      <GreetingContainer />
    </header>

    <AuthRoute path='/signin' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SignUpFormContainer} />
  </div>
);

export default App;
