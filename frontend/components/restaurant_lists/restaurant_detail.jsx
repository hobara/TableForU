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
        <div className='restaurant-showpage-background'>
        </div>
        <div className='restaurant-showpage-header'>
            <span className='showpage-header-left'>
              <img src={this.props.restaurant.image} className='showpage-header-image'/>
            </span>
            <section className='showpage-header-right'>
              <section className='showpage-restaurant-name'>{this.props.restaurant.name}</section>
              <section className='showpage-restaurant-rate'>Rate: {this.props.restaurant.rate}</section>
              <section className='showpage-restaurant-details'>
                <span className='showpage-restaurant-details-left'>
                    Type: {this.props.restaurant.cuisine}  |
                    City: {this.props.restaurant.city_name}  |
                    Price: {this.props.restaurant.price}
                </span>
                <span className='showpage-restaurant-details-right'>
                  Favorites: {this.props.restaurant.favorites}
                </span>
              </section>
            </section>
        </div>
        <div className='restaurant-showpage-nav-link'>
          restaurant showpage nav link container
        </div>
        <div className='restaurant-showpage-reservation'>
          restaurant showpage reservation container
        </div>
        <div className='restaurant-showpage-about'>
          <section className='restaurant-showpage-about-header'>
            <h2>About {this.props.restaurant.name}</h2>
          </section>
          <section className='restaurant-showpage-about-text'>
            {this.props.restaurant.about}
          </section>
          <section className='restaurant-showpage-about-map'>
            <span>**Google Map Container**</span>
          </section>
        </div>
        <img src={this.props.restaurant.image} className='restaurant-showpage-photo'/>
        <div className='restaurant-showpage-reviews'>
          review...coming soon
        </div>
        <Link to={`/`} className='go-back-to-home'>Go Back To Home</Link>
      </div>
    );
  }
}

export default RestaurantDetail;
