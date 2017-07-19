import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const sessionLink = () => (
  <nav className="signin-signup">
    <Link to="/signup">Sign Up</Link>
    <br />
    <Link to="/signin">Sign In</Link>
  </nav>
);

const personalGreeting = (currentUser, signout) => (
  <nav className="loggedin-header">
    <h3 className="header-name">Hi, {currentUser.username}!</h3>
    <button className="header-button" onClick={signout} >Sign Out</button>
  </nav>
);

const Greeting = ({ currentUser, signout }) => (
  currentUser ? personalGreeting(currentUser, signout) : sessionLink()
);

export default Greeting;
