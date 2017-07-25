import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { requestAllCity } from '../../actions/city_actions';
import AddRestaurantContainer from '../restaurant_lists/add_restaurant_container';

class ReservationForm extends Component {

  // componentDidMount() {
  //   return this.props.requestAllCity();
  // }

  render() {
    // const allIds = Object.keys(this.props.cities);
    // let allCities = [ {name: '', image: ''} ];
    // if (allIds.length !== 0) {
    //   allIds.forEach((id) => allCities.push(this.props.cities[id]));
    // }

    return(
      // iterate over props.cities and generate a CityListItem (pass in city as a prop)
      //, and make them clickable links that route to `api/city/${city.id}`
      // <CityListItem city={city} request={this.props.requestSingleCity}
      <div>
        <div className='reservation-header'>
          <h3>Make a reservation</h3>
        </div>

      </div>
    );
  }
}


export default ReservationForm;
