import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { requestAllRestaurant } from '../../actions/city_actions';

class SearchForm extends Component {

  componentDidMount() {
    this.props.requestAllRestaurant();
  }

  render() {
    console.log(this.props);
    let today = new Date().toJSON().slice(0,10);

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
