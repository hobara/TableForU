import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SignUpModalContainer from '../signup_form/signup_modal_container';
import SignInModalContainer from '../signin_form/signin_modal_container';
import { signin } from '../../actions/session_actions';

class GreetingForm extends React.Component {
  constructor(props) {
    super(props);

    this.goCityPage = this.goCityPage.bind(this);
    this.sessionLink = this.sessionLink.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
  }

  sessionLink() {
    return(
      <nav className='header-session'>
        <span className='header-right-one'><SignUpModalContainer /></span>
        <span className='header-right-two'><SignInModalContainer /></span>
        <span className='header-button' onClick={this.handleDemo}>Demo</span>
      </nav>
    );
  }

  handleDemo(event) {
    event.preventDefault();
    this.props.signin({user: {username:'Guest', password:'password'}});
  }


  personalGreeting(currentUser, signout) {
    return(
      <nav className='header-loggedin'>
        <span className='header-name'>Hi, {this.props.currentUser.username}!</span>
        <span className='header-button' onClick={this.props.signout} >Sign Out</span>
      </nav>
    );
  }

  goCityPage(event) {
    this.props.history.push(document.getElementById('location-list').value);
  }

  render() {
    console.log(this.props);
    return(
      <div className='header'>
        <section className='header-left'>
          <span className='header-logo-container'>
            <Link className='header-link' to='/'>
              <img className='header-logo-img'
                src='http://res.cloudinary.com/hobara/image/upload/v1500428429/open_table_logo_animation_iifjys.gif' />
                <span className='header-first'>Table</span>
                <span className='header-second'>For</span>
                <span className='header-third'>Ü</span>
            </Link>
          </span>
          <span className='header-city-container'>
            <span className='header-city-content'>
              <select className='header-city-lists' id='location-list' >
                <option >Choose Location</option>
                <option value="/api/city/1">San Francisco</option>
                <option value="/api/city/2">Los Angeles</option>
                <option value="/api/city/3">Seattle</option>
                <option value="/api/city/4">Chicago</option>
                <option value="/api/city/5">Austin</option>
                <option value="/api/city/6">New York</option>
                <option value="/api/city/7">Washington DC</option>
                <option value="/api/city/8">Toronto</option>
                <option value="/api/city/9">Paris</option>
                <option value="/api/city/10">Singapore</option>
                <option value="/api/city/11">Tokyo</option>
                <option value="/api/city/12">Osaka</option>
              </select>
              <span type='submit' onClick={this.goCityPage} className='header-button' >Go</span>
            </span>
          </span>
        </section>
        <section className='header-right'>
          <section className='header-session-container'>
            {this.props.currentUser ? this.personalGreeting(this.currentUser, this.signout) : this.sessionLink()}
          </section>
        </section>
      </div>
    );
  }
}

export default GreetingForm;
