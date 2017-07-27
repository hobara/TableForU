import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Modal from 'react-modal';
import { createRestaurant } from '../../actions/restaurant_actions';


const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(400, 400, 400, 0.50)',
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
    maxMarginLeft: '300px',
    maxMarginRight: '300px',
    marginRight: 'auto',
    maxWidth: '500px',
    border: '1px solid #ccc',
    padding: '10px 0px 10px 0px',
    zIndex: 900,
    overflow: 'auto'
  }
};

let contentLabel = 'add';



class AddRestaurant extends Component {
  constructor(props) {
    super(props);

    if (contentLabel === 'add') {
      this.state = {
        modalOpen: '',
        name: '',
        city_name: '',
        address: '',
        state: '',
        zip: '',
        image1: '',
        about: '',
        cuisine: 0,
        price: 0,
        hours: 0,
        rate: 0
      };
    } else if (contentLabel === 'signin') {
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
    this.handleAdd = this.handleAdd.bind(this);
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.goToShowpage = this.goToShowpage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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

  goToShowpage() {
    const { id } = this.props.restaurant;
    this.props.history.push(`/restaurants/${id}`);
  }

  handleAdd(event) {
    event.preventDefault();
    const newRestaurant = this.state;
    this.props.createRestaurant({restaurant: newRestaurant}).then( () =>
    { this.goToShowpage(); } );
  }

  handleSignin() {
    event.preventDefault();
    const user = this.state;
    this.props.signin({user}).then(() => {
      this.closeModal();
      contentLabel = 'add';
    });
  }

  handleSignup() {
    event.preventDefault();
    const user = this.state;
    this.props.signup({user}).then(() => {
      this.closeModal();
      contentLabel = 'add';
    });
  }


  handleClick() {
    if (window.getState().currentUser === null) {
      contentLabel = 'signin';
      this.openModal('signin');
      style['content']['maxWidth'] = '300px';
    } else {
      contentLabel = 'signup';
      style['content']['maxWidth'] = '500px';
      this.openModal('add');
    }
  }

  handleDemo(event) {
    event.preventDefault();
    this.props.signin({user: {username:'Guest', password:'password'}})
    .then(() => {
      this.closeModal();
      contentLabel = 'add';
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
    return(
      <div className='add-restaurant-container'>
        <section className='add-restaurant-header'>
          <h3>Restaurateurs Join Us</h3>
        </section>
        <p className='add-restaurant-message'>
          Join the more than 40,000 restaurants which fill seats and
        </p>
        <p className='add-restaurant-message'>
           manage reservations with TableForU.
        </p>


        <section className='add-restaurant-button'
          onClick={this.handleClick}>
          Add restaurant
          <Modal
            style={style}
            contentLabel={contentLabel}
            isOpen={this.state.modalOpen === 'add'}
            className='add-restaurant-form'
            onRequestClose={this.closeModal}
            >
            <section className='add-restaurant-form-header'>Grow Your Business With TableForU</section>
            <section className='add-restaurant-form-row'>
              <input type='text' className='restaurant-input-left' placeholder='  Restaurant Name*'
                value={this.state.name} onChange={this.update('name')} />
              <input type='text' className='restaurant-input-right' placeholder='  Image Url'
                value={this.state.image1} onChange={this.update('image')} />
            </section>
            <section className='add-restaurant-form-row'>
              <input type='text' className='restaurant-input-left' placeholder='  Restaurant Street Address*'
                value={this.state.address} onChange={this.update('address')} />
              <input type='text' className='restaurant-input-right' placeholder='  Restaurant City*'
                value={this.state.city_name} onChange={this.update('city_name')} />
            </section>
            <section className='add-restaurant-form-row'>
              <input type='text' className='restaurant-input-left' placeholder='  Restaurant State*'
                value={this.state.state} onChange={this.update('state')} />
              <input type='text' className='restaurant-input-right' placeholder='  Restaurant Zip*'
                value={this.state.zip} onChange={this.update('zip')} />
            </section>
            <section className='add-restaurant-form-row'>
              <textarea type='text' className='restaurant-input-textarea' placeholder='  About Restaurant*'
                value={this.state.about} onChange={this.update('about')} />
            </section>
            <section className='add-restaurant-form-row'>
              <select className='restaurant-input-type'
                value={this.state.cuisine} onChange={this.update('cuisine')} >
                <option defaultValue hidden >Choose Cuisine Type</option>
                <option value="1">American</option>
                <option value="2">Italian</option>
                <option value="3">French</option>
                <option value="4">Mexican</option>
                <option value="5">Japanese</option>
                <option value="6">Chinese</option>
                <option value="7">Thai</option>
                <option value="8">Steakhouse</option>
                <option value="9">Seafood</option>
                <option value="10">Fusion</option>
              </select>
              <select className='restaurant-input-price'
                value={this.state.price} onChange={this.update('price')} >
                <option defaultValue hidden >Choose Price Category</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
              </select>
            </section>
            <section className='add-restaurant-form-row'>
              <select className='restaurant-input-hours'
                value={this.state.hours} onChange={this.update('hours')} >
                <option defaultValue hidden >Choose Open Hours</option>
                <option value="1">17:00 - 21:00</option>
                <option value="2">17:00 - 22:00</option>
                <option value="3">18:00 - 22:00</option>
                <option value="4">18:00 - 23:00</option>
              </select>
              <select className='restaurant-input-cityid'
                value={this.state.city_id} onChange={this.update('city_id')} >
                <option defaultValue hidden >Choose City Location</option>
                <option value="1">San Francisco</option>
                <option value="2">Los Angeles</option>
                <option value="4">Chicago</option>
                <option value="5">Austin</option>
                <option value="6">New York</option>
                <option value="7">Washington DC</option>
                <option value="3">London</option>
                <option value="9">Paris</option>
                <option value="8">Toronto</option>
                <option value="10">Singapore</option>
                <option value="11">Tokyo</option>
                <option value="12">Osaka</option>
              </select>
            </section>
            <section>
              <section className='add-restaurant-errors'>{this.renderErrors()}</section>
            </section>
            <section className='add-restaurant-form-row'>
              <span className='restaurant-input-submit' onClick={this.handleAdd}>Add Restaurant</span>
            </section>
          </Modal>

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
                <span className='back-to-signup-button' onClick={() => { contentLabel = 'signup'; this.openModal('signup');}}>  Create Accout</span>
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
        </section>
      </div>
    );
  }


}

export default AddRestaurant;
