import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { requestAllRestaurant } from '../../actions/restaurant_actions';


class RestaurantLists extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllRestaurant();
  }

  render() {
    let restaurantList = [];
    const allIds = Object.keys(this.props.restaurants);
    allIds.forEach((assignedId) => {
      // console.log(this.props.restaurants[assignedId]);
      if (this.props.restaurants[assignedId]['city_id'] === 1 ) {
        let obj = {};
        obj[assignedId] = this.props.restaurants[assignedId];
        restaurantList.push(obj);
      }
    });

    return(
      <div className='city-restaurant-lists'>
        <div className='city-restaurant-header'>
          Best Restaurants in {this.props.city.name}
        </div>
        <div className='city-restaurant-container'>
          {restaurantList.map((restaurant, idx) =>
            <section key={idx} className='restaurant-listitem'>
              <section className='restaurant-listitem-left'>
                <Link to={`/restaurants/${Object.keys(restaurant)[0]}`} restaurant={restaurant}>
                  <img className='restaurant-image' src={Object.values(restaurant)[0].image}/>
                </Link>
              </section>
              <section className='restaurant-listitem-middle'>
                <Link to={`/restaurants/${Object.keys(restaurant)[0]}`} className='restaurant-name-link' restaurant={restaurant}>
                  <span className='restaurant-name'>{Object.values(restaurant)[0].name}</span>
                </Link>
                <span className='restaurant-cuisine'>Type:{Object.values(restaurant)[0].cuisine}</span>
                <span className='restaurant-rate'>Rate:{Object.values(restaurant)[0].rate}</span>
                <span className='restaurant-price'>Price:{Object.values(restaurant)[0].price}</span>
              </section>
              <section className='restaurant-listitem-right'>
                <span className='restaurant-review'>Reviews coming soon...</span>
              </section>
            </section>)}
        </div>
      </div>
    );
  }
}


export default RestaurantLists;
