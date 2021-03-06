import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting_form/greeting_form_container';
import { requestAllCity } from '../../actions/city_actions';
import RestaurantListsContainer from '../restaurant_lists/restaurant_lists_container';
import SearchFormContainer from '../restaurant_search_form/search_container';

class CityDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllCity();
  }

  render() {

    let city = { name: '', image:'', city_id: '' };
    let id = this.props.match.params.city_id;
    let allIds = Object.keys(this.props.cities);
    allIds.forEach((assignedId) => {
      if (this.props.cities[assignedId]['city_id'] === parseInt(id) ) {
        city = this.props.cities[assignedId];
      }
    });
    const style = {
      backgroundImage: `url(${city.image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };

    return (
      <div>
        <div className='city-show-page'>
          <div className='city-show-page-header'>
            <h1>{city.name}</h1>
          </div>
          <div className='city-show-page-image' style={style} >
            <div className='city-show-page-search'>
              <SearchFormContainer />
            </div>
          </div>
          <div className='city-show-page-restaurant'>
            <RestaurantListsContainer city={city}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CityDetail;
