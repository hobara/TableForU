import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting_form/greeting_form_container';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllRestaurant();
    this.props.requestSingleRestaurant(this.props.match.params.restaurant_id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className='restaurant-showpage-header'>
            <section className='showpage-header-left'>
              <img src={this.props.restaurant.image} className='showpage-header-image'/>
            </section>
            <section className='showpage-header-right'>
              <section className='showpage-restaurant-name'>{this.props.restaurant.name}</section>
              <section className='showpage-restaurant-rate'>Rate: {this.props.restaurant.rate}</section>
              <section className='showpage-restaurant-details'>
                <span className='showpage-restaurant-details-left'>
                  <span className='showpage-restaurant-cuisine'>Type: {this.props.restaurant.cuisine}</span>
                  <span className='showpage-restaurant-city'>City: {this.props.restaurant.city_name}</span>
                  <span className='showpage-restaurant-price'>Price: {this.props.restaurant.price}</span>
                </span>
                <span className='showpage-restaurant-details-right'>
                  <span className='showpage-restaurant-favorite'>Favorites: {this.props.restaurant.favorites}</span>
                </span>
              </section>
            </section>
        </div>
        <div className='restaurant-showpage-nav-link'>

        </div>
        <div className='restaurant-showpage-reservation'>

        </div>
        <div className='restaurant-showpage-about'>

        </div>
        <div className='restaurant-showpage-photo'>

        </div>
        <div className='restaurant-showpage-reviews'>

        </div>


        Restaurant Show Page!
      </div>
    );
  }
}

export default RestaurantDetail;
