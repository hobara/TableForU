import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { requestAllCity } from '../../actions/city_actions';
import AddRestaurant from '../restaurant_lists/add_restaurant';

class CityLists extends Component {

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
        <div className='main-background'>
        </div>
        <div className='city-lists'>
          <section className='city-lists-title'>
            Featured Cities
          </section>
          <section id='featured-cities'>
            <div className='row-1'>
              <Link to={'/api/cities/6'}  className='city-lists-1-1'>New York</Link>
              <Link to={'/api/cities/2'} className='city-lists-1-2'>Los Angeles</Link>
              <Link to={'/api/cities/4'} className='city-lists-1-3'>Chicago</Link>
            </div>
            <div className='row-2'>
              <Link to='/api/cities/1' className='city-lists-2-1'>San Francisco</Link>
              <Link to='/api/cities/7' className='city-lists-2-2'>Washington DC</Link>
              <Link to='/api/cities/5' className='city-lists-2-3'>Austin</Link>
            </div>
          </section>
          <section className='featured-cities-lists'>
            <section className='city-row1'>
              <Link to='/api/cities/1' className='city'>San Francisco</Link>
              <Link to='/api/cities/2' className='city'>Los Angeles</Link>
              <Link to='/api/cities/3' className='city'>Seattle</Link>
              <Link to='/api/cities/4' className='city'>Chicago</Link>
            </section>
            <section className='city-row2'>
              <Link to='/api/cities/5' className='city'>Austin</Link>
              <Link to='/api/cities/6' className='city'>New York</Link>
              <Link to='/api/cities/7' className='city'>Washington DC</Link>
              <Link to='/api/cities/8' className='city'>Toronto</Link>
            </section>
          </section>

          <section className='city-lists-title'>
            International Cities
          </section>
          <section className='international-cities'>
            <div className='row-3'>
              <Link to='/api/cities/10' className='city-lists-3-1'>Singapore</Link>
              <Link to='/api/cities/11' className='city-lists-3-2'>Tokyo</Link>
              <Link to='/api/cities/9' className='city-lists-3-3'>Paris</Link>
            </div>
          </section>
          <section className='city-row3'>
            <Link to='/api/cities/10' className='city'>Singapore, SG</Link>
            <Link to='/api/cities/11' className='city'>Tokyo, JP</Link>
            <Link to='/api/cities/12' className='city'>Osaka, JP</Link>
            <Link to='/api/cities/9' className='city'>Paris, FR</Link>
          </section>
          <br />
        </div>
        <div>
          <AddRestaurant />
        </div>
      </div>
    );
  }
}


export default CityLists;
