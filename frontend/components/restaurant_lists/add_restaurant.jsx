import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { requestAllCity } from '../../actions/city_actions';

class addRestaurant extends Component {

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
        <section className='add-restaurant-button'>
          Add restaurant
        </section>
      </div>
    );
  }


}

export default addRestaurant;
