import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting_form/greeting_form_container';
import { requestAllCity } from '../../actions/city_actions';
import RestaurantListsContainer from '../restaurant_lists/restaurant_lists_container';

class CityDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllCity();
  }

  render() {
    console.log('hey', this.props);
    let city = { name: '', image:'', city_id: '' };
    let id = this.props.match.params.city_id;
    let allIds = Object.keys(this.props.cities);
    allIds.forEach((assignedId) => {
      if (this.props.cities[assignedId]['city_id'] === parseInt(id) ) {
        city = this.props.cities[assignedId];
      }
    });

    return (
      <div>
        <div className='city-show-page'>
          <div className='city-show-page-header'>
            <h1>{city.name}</h1>
          </div>
          <div className="city-show-page-image">
            <img src={city.image} className="city-image"></img>
          </div>
          <RestaurantListsContainer city={city}/>
          <section className='city-show-page-content'>
            Restaurants:
            <ul>
              <li className=''>
                restaurant1
              </li>
              <li className=''>
                restaurant2
              </li>
            </ul>
            <ul>
              <Link to={`/`} className='go-back-to-home'>Go Back To Home</Link>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default CityDetail;
