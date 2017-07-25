import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { requestAllCity } from '../../actions/city_actions';
import AddRestaurantContainer from '../restaurant_lists/add_restaurant_container';

class SearchForm extends Component {

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
      <div className='search-container'>
        <div className='search-header'>
          <h3>Make restaurant reservations the easy way</h3>
        </div>
        <div className='search-bar'>
          <select className='search-seats'>
            <option value='1'>1 person</option>
            <option selected value='2'>2 people</option>
            <option value='3'>3 people</option>
            <option value='4'>4 people</option>
            <option value='5'>5 people</option>
            <option value='6'>6 people</option>
            <option value='7'>7 people</option>
            <option value='8'>8 people</option>
            <option value='9'>9 people</option>
            <option value='10'>10 people</option>
          </select>
          <input type='date' className='search-date'/>
          <select className='search-time'>
            <option value='6'>6:00 PM</option>
            <option value='7'>7:00 PM</option>
            <option value='8'>8:00 PM</option>
            <option value='9'>9:00 PM</option>
            <option value='10'>10:00 PM</option>
            <option value='11'>11:00 PM</option>
          </select>
          <input type='text' className='search-restaurant' placeholder='Search restaurants' />
          <span className='search-find-button'>
            Find a Table
          </span>
        </div>
      </div>
    );
  }
}


export default SearchForm;
