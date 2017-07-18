import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const sessionLink = () => (
  <nav className="login-signup">
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/signup">Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <nav className="loggedin-header">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </nav>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLink()
);

export default Greeting;
