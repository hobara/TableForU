import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { requestAllRestaurant } from '../../actions/restaurant_actions';
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

let contentLabel = 'signin';

const CUISINE_TYPE = {
  1: 'American',
  2: 'Italian',
  3: 'French',
  4: 'Mexican',
  5: 'Japanese',
  6: 'Chinese',
  7: 'Thai',
  8: 'Steakhouse',
  9: 'Seafood',
  10: 'Fusion'
};

const PRICE_TYPE = {
  1: '$',
  2: '$$',
  3: '$$$',
  4: '$$$$'
};

const PRICE_RANGE = {
  1: '$20 and under',
  2: '$30 and under',
  3: '$31 to $50',
  4: '$50 and over'
};

const HOURS_TYPE = {
  1: '18:00 - 22:00',
  2: '18:00 - 23:00',
  3: '19:00 - 23:00',
  4: '19:00 - 24:00'
};

const RATE_TYPE = {
  0: 'https://res.cloudinary.com/hobara/image/upload/c_scale,w_140/v1501068373/stars_b9cqyd.png',
  1: '',
  2: '',
  3: '',
  4: ''
};


class RestaurantLists extends Component {

  constructor(props) {
    super(props);
    if (contentLabel === 'signin') {
      this.state = {
        modalOpen: '',
        username: '',
        password: ''
      };
    } else {
      this.state = {
        modalOpen: '',
        username: '',
        password: '',
        email: '',
        location: ''
      };
    }

    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.requestAllRestaurant();
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

  handleClick() {
    if (window.getState().currentUser === null) {
      contentLabel = 'signin';
      this.openModal('signin');
    } else {
      const { id } = this.props.restaurant;
      this.props.history.push(`/restaurants/${id}`);
    }
  }

  handleSignin() {
    event.preventDefault();
    const user = this.state;
    this.props.signin({user}).then(() => this.closeModal());
  }

  handleSignup() {
    event.preventDefault();
    const user = this.state;
    this.props.signup({user}).then(() => {
      this.closeModal();
      contentLabel = 'signin';
    });
  }

  handleDemo(event) {
    event.preventDefault();
    contentLabel = 'signin';
    this.props.signin({user: {username:'Guest', password:'password'}})
    .then(() => this.closeModal());
  }

  handleDemo(event) {
    event.preventDefault();
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

  renderContent() {
    let restaurantList = [];
    const allIds = Object.keys(this.props.restaurants);
    allIds.forEach((assignedId) => {
      if (this.props.restaurants[assignedId]['city_id'] === this.props.city.city_id ) {
        let obj = {};
        obj[assignedId] = this.props.restaurants[assignedId];
        restaurantList.push(obj);
      }
    });

    if (window.getState().currentUser === null) {
      return(
        <div className='city-restaurant-container'>
          {restaurantList.map((restaurant, idx) =>
            <section key={idx} className='restaurant-listitem'>
              <section className='restaurant-listitem-left'>
                <span onClick={() => {this.openModal('signin'); contentLabel = 'signin';}} >
                  <img className='restaurant-image' src={Object.values(restaurant)[0].image1}/>
                </span>
              </section>
              <section className='restaurant-listitem-middle'>
                <span onClick={() => {this.openModal('signin'); contentLabel = 'signin';}} className='restaurant-name-link' >
                  <span className='restaurant-name'>{Object.values(restaurant)[0].name}</span>
                </span>
                <span className='restaurant-cuisine'>{CUISINE_TYPE[Object.values(restaurant)[0].cuisine]}</span>
                <span className='restaurant-rate'><img src={RATE_TYPE[Object.values(restaurant)[0].rate]} /></span>
                <span className='restaurant-price'>Price:{ PRICE_TYPE[Object.values(restaurant)[0].price]}</span>
              </section>
              <section className='restaurant-listitem-right'>
                <span className='restaurant-review'>Reviews coming soon...</span>
              </section>
            </section>)}
        </div>
      );
    } else {
      return(
        <div className='city-restaurant-container'>
          {restaurantList.map((restaurant, idx) =>
            <section key={idx} className='restaurant-listitem'>
              <section className='restaurant-listitem-left'>
                <Link to={`/restaurants/${Object.keys(restaurant)[0]}`} restaurant={restaurant}>
                  <img className='restaurant-image' src={Object.values(restaurant)[0].image1}/>
                </Link>
              </section>
              <section className='restaurant-listitem-middle'>
                <Link to={`/restaurants/${Object.keys(restaurant)[0]}`} className='restaurant-name-link' restaurant={restaurant}>
                  <span className='restaurant-name'>{Object.values(restaurant)[0].name}</span>
                </Link>
                <span className='restaurant-cuisine'>{CUISINE_TYPE[Object.values(restaurant)[0].cuisine]}</span>
                <span className='restaurant-rate'><img src={RATE_TYPE[Object.values(restaurant)[0].rate]} /></span>
                <span className='restaurant-price'>Price:{PRICE_TYPE[Object.values(restaurant)[0].price]}</span>
              </section>
              <section className='restaurant-listitem-right'>
                <span className='restaurant-review'>Reviews coming soon...</span>
              </section>
            </section>)}
        </div>
      );
    }
  }

  render() {
    return(
      <div className='city-restaurant-lists'>
        <div className='city-restaurant-header'>
          Best Restaurants in {this.props.city.name}
        </div>
        {this.renderContent()}
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
                onClick={() => { contentLabel = 'signup'; this.openModal('signup');}}>
                &nbsp; Create Accout</span>
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


export default RestaurantLists;
