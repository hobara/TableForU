import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { requestAllRestaurant } from '../../actions/city_actions';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Modal from 'react-modal';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(400, 400, 400, 0.30)',
    zIndex: 10
  },
  content: {
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'relative',
    marginTop: '80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '300px',
    border: '1px solid #ccc',
    padding: '10px',
    zIndex: 900,
    overflow: 'auto'
  }
};

let contentLabel = 'search';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    if (contentLabel === 'signin') {
      this.state = {
        modalOpen: '',
        username: '',
        password: '',
        inputVal: '',
      };
    } else if (contentLabel === 'signup') {
      this.state = {
        modalOpen: '',
        username: '',
        password: '',
        email: '',
        location: '',
        inputVal: ''
      };
    } else {
      this.state = {
        inputVal: '',
        restaurant: {}
      };
    }

    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.requestAllRestaurant();
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return matches;
    }
    Object.values(this.props.restaurants).forEach(restaurant => {
      if (restaurant.name.toLowerCase().includes(this.state.inputVal.toLowerCase())) {
        matches.push(restaurant);
      }
    });
    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText.split(',')[0];
    this.setState({inputVal: name});

    let allIds = Object.keys(this.props.restaurants);
    let allRes = [];
    allIds.forEach((id) => {
      let obj = {};
      obj[id] = this.props.restaurants[id];
      allRes.push(obj);
    });
    let targetRes;
    allRes.forEach((res) => {
      if (Object.values(res)[0]['name'] === name) { targetRes = res; }
    });
    this.setState({restaurant: targetRes});
  }

  handleClick() {
    if (window.getState().currentUser === null) {
      this.openModal('signin');
      contentLabel = 'signin';
    } else if (this.state.inputVal === '') {
      window.alert('Please type a search key word.');
    } else {
      let id = Object.keys(this.state.restaurant)[0];
      if (window.location.hash === '#/') {
        window.location.href = window.location.href + `restaurants/${id}`;
      } else {
        window.location.href = window.location.origin + `/#/restaurants/${id}`;
      }
    }
  }

  closeModal() {
    this.setState({ modalOpen: '' });
  }

  openModal(type) {
    this.setState({ modalOpen: type });
  }

  update(key) {
    return event => this.setState({
      [key]: event.currentTarget.value
    });
  }

  handleSignin() {
    event.preventDefault();
    const user = this.state;
    this.props.signin({user}).then(() => {
      this.closeModal();
      contentLabel = 'search';
    });
  }

  handleSignup() {
    event.preventDefault();
    const user = this.state;
    this.props.signup({user}).then(() => {
      this.closeModal();
      contentLabel = 'search';
    });
  }

  handleDemo(event) {
    event.preventDefault();
    contentLabel = 'signin';
    this.props.signin({user: {username:'Guest', password:'password'}})
    .then(() => {
      this.closeModal();
      contentLabel = 'search';
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    let today = new Date().toJSON().slice(0,10);
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} className='search-result-item' onClick={this.selectName}>
          {result.name}, {result.city_name}</li>
      );
    });

    return(
      <div className='search-container'>
        <div className='search-header'>
          <h3>Make restaurant reservations the easy way</h3>
        </div>
        <div className='search-bar'>
            <select className='search-seats' defaultValue='2'>
              <option value='1'>1 person</option>
              <option value='2'>2 people</option>
              <option value='3'>3 people</option>
              <option value='4'>4 people</option>
              <option value='5'>5 people</option>
              <option value='6'>6 people</option>
              <option value='7'>7 people</option>
              <option value='8'>8 people</option>
              <option value='9'>9 people</option>
              <option value='10'>10 people</option>
            </select>
            <input type='date' className='search-date' defaultValue={today}/>
            <select className='search-time'>
              <option value='6'>6:00 PM</option>
              <option value='7'>7:00 PM</option>
              <option value='8'>8:00 PM</option>
              <option value='9'>9:00 PM</option>
              <option value='10'>10:00 PM</option>
              <option value='11'>11:00 PM</option>
            </select>
            <span className='search-restaurant'>
              <input className='search-restaurant-input'
              onChange={this.handleInput}
              value={this.state.inputVal}
              placeholder='Search Restaurant'/>
              <ul className='search-result'>
                <CSSTransitionGroup
                  transitionName='auto'
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                  {results}
                </CSSTransitionGroup>
              </ul>
            </span>
            <span className='search-find-button' onClick={this.handleClick}>
              Find a Table
            </span>
        </div>

        <Modal
          style={style}
          contentLabel={contentLabel}
          isOpen={this.state.modalOpen === 'signin'}
          className='signin-form-container'
          onRequestClose={this.closeModal}
          >
          <span className='signin-modal-container'>
            <span className='signin-form-header'>Please sign in</span>
            <input type='text' className='signin-input' placeholder='  Username*'
              value={this.state.username} onChange={this.update('username')} />
            <input type='password' className='signin-input' placeholder='  Password*'
              value={this.state.password} onChange={this.update('password')} />
            <h6>{this.renderErrors()}</h6>
            <span className='signin-button' onClick={this.handleSignin}>Sign In</span>
            <br />
            <span className='back-to-signup'>New to TableForU?
              <span className='back-to-signup-button'
                onClick={() => {
                  contentLabel = 'signup';
                  this.openModal('signup');
                }}>   Create Accout</span>
            </span>
            <span className='back-to-signup'>
              Or sign in as a &nbsp;
              <span className='back-to-signup-button' onClick={this.handleDemo}>Guest</span>
            </span>
          </span>
        </Modal>

        <Modal
          style={style}
          contentLabel={contentLabel}
          isOpen={this.state.modalOpen === 'signup'}
          className='signin-form-container'
          onRequestClose={this.closeModal}
          >
          <span className='signup-modal-container'>
            <span className='signup-form-header'>Welcome to TableForÜ!</span>
            <input type='text' className='signup-input' placeholder='  Username*'
              value={this.state.username} onChange={this.update('username')} />
            <input type='text' className='signup-input' placeholder='  Email*'
              value={this.state.email} onChange={this.update('email')} />
            <input type='password' className='signup-input' placeholder='  Password*'
              value={this.state.password} onChange={this.update('password')} />
            <input type='location' className='signup-input' placeholder='  Primary dining location'
              value={this.state.location} onChange={this.update('location')} />
            <h6>{this.renderErrors()}</h6>
            <span className='signup-button' onClick={this.handleSignup}>Create Account</span>
          </span>
        </Modal>
      </div>
    );
  }
}


export default SearchForm;
