import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const sessionLink = (handleDemo) => (
  <nav className="signin-signup">
    <Link to="/signup">Sign Up</Link>
    <br />
    <Link to="/signin">Sign In</Link>
    <br />
    <button className='demo-button' onClick={handleDemo}>Demo</button>
  </nav>
);

const personalGreeting = (currentUser, signout) => (
  <nav className="loggedin-header">
    <h3 className="header-name">Hi, {currentUser.username}!</h3>
    <button className="header-button" onClick={signout} >Sign Out</button>
  </nav>
);

const GreetingForm = ({ currentUser, signout, handleDemo }) => (
  currentUser ? personalGreeting(currentUser, signout) : sessionLink(handleDemo)
);

export default GreetingForm;
