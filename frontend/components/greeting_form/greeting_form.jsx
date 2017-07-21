import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SignUpModalContainer from '../signup_form/signup_modal_container';
import SignInModalContainer from '../signin_form/signin_modal_container';

const sessionLink = (handleDemo) => (
  <nav className='header-session'>
    <span className='header-right-one'><SignUpModalContainer /></span>
    <span className='header-right-two'><SignInModalContainer /></span>
    <span className='header-button' onClick={handleDemo}>Demo</span>
  </nav>
);

const personalGreeting = (currentUser, signout) => (
  <nav className='header-loggedin'>
    <span className='header-name'>Hi, {currentUser.username}!</span>
    <span className='header-button' onClick={signout} >Sign Out</span>
  </nav>
);

const GreetingForm = ({ currentUser, signout, handleDemo }) => {
  return(
    <div className='header'>
      <section className='header-left'>
        <span className='header-logo-container'>
          <Link className='header-link' to='/'>
            <img className='header-logo-img'
              src='http://res.cloudinary.com/hobara/image/upload/v1500428429/open_table_logo_animation_iifjys.gif' />
              <span className='header-first'>Table</span>
              <span className='header-second'>for</span>
              <span className='header-third'>Ü</span>
          </Link>
        </span>
        <span className='header-city-container'>
          <span className='header-city-content'>
            <select className='header-city-lists'>
              <option value="">San Francisco</option>
              <option value="">Los Angeles</option>
              <option value="">Seattle</option>
              <option value="">Austin</option>
              <option value="">Chicago</option>
              <option value="">New York</option>
              <option value="">Washington DC</option>
              <option value="">Paris</option>
              <option value="">Toronto</option>
              <option value="">Tokyo</option>
              <option value="">Osaka</option>
              <option value="">Singapore</option>
            </select>
            <span className='header-button' >Go</span>
          </span>
        </span>
      </section>
      <section className='header-right'>
        <section className='header-session-container'>
          {currentUser ? personalGreeting(currentUser, signout) : sessionLink(handleDemo)}
        </section>
      </section>
    </div>
  );
};

export default GreetingForm;
