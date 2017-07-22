import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting_form/greeting_form_container';
import { requestAllCity } from '../../actions/city_actions';

class CityListItem extends Component {

  componentDidMount() {
    this.props.requestSingleCity(this.props.match.params.city_id);
  }
  //
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.city_id !== nextProps.match.params.city_id) {
      this.props.requestSingleCity(nextProps.match.params.city_id);
    }
  }

  render() {
    console.log(this.props);
    let singleCity = this.props.city;

    return (
      <div className='city-show-page'>
        <div className='city-show-page-header'>
          <h2>{singleCity.name}</h2>
        </div>
        <div className="city-show-page-image">
          <img src={singleCity.image} className="city-image"></img>
        </div>
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
    );
  }
}

export default CityListItem;
