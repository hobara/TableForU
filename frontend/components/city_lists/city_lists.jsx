import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { requestAllCity } from '../../actions/city_actions';
import AddRestaurantContainer from '../restaurant_lists/add_restaurant_container';
import SearchFormContainer from '../restaurant_search_form/search_container';

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
      //, and make them clickable links that route to '/city/${city.id}`
      // <CityListItem city={city} request={this.props.requestSingleCity}
      <div className='main-background'>
        <div className='main-search-container'>
          <SearchFormContainer />
        </div>

        <div className='city-lists'>
          <section className='city-lists-title'>
            <h4>Featured Cities</h4>
          </section>
          <section id='featured-cities'>
            <div className='row-1'>
              <Link to={'/cities/6'}  className='city-lists-1-1'>New York</Link>
              <Link to={'/cities/2'} className='city-lists-1-2'>Los Angeles</Link>
              <Link to={'/cities/4'} className='city-lists-1-3'>Chicago</Link>
            </div>
            <div className='row-2'>
              <Link to='/cities/1' className='city-lists-2-1'>San Francisco</Link>
              <Link to='/cities/7' className='city-lists-2-2'>Washington DC</Link>
              <Link to='/cities/5' className='city-lists-2-3'>Austin</Link>
            </div>
          </section>


          <section className='city-lists-title'>
            <h4>International Cities</h4>
          </section>
          <section className='international-cities'>
            <div className='row-3'>
              <Link to='/cities/3' className='city-lists-3-1'>London, UK</Link>
              <Link to='/cities/9' className='city-lists-3-2'>Paris, FR</Link>
              <Link to='/cities/8' className='city-lists-3-3'>Toronto, CA</Link>
            </div>
            <div className='row-4'>
              <Link to='/cities/10' className='city-lists-4-1'>Singapore, SG</Link>
              <Link to='/cities/11' className='city-lists-4-2'>Tokyo, JP</Link>
              <Link to='/cities/12' className='city-lists-4-3'>Osaka, JP</Link>
            </div>
          </section>


          <br />
        </div>
        <div>
          <AddRestaurantContainer />
        </div>
      </div>
    );
  }
}


export default CityLists;
