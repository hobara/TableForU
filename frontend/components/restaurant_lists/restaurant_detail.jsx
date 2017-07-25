import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting_form/greeting_form_container';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';


class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    this.props.requestAllRestaurant();
    this.props.requestSingleRestaurant(this.props.match.params.restaurant_id);
  }

  scrollTo(el) {
    return () => {
      el.scrollIntoView();
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className='restaurant-showpage-background'>
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
        <div className='restaurant-showpage-main-background'>
          <div className='restaurant-showpage-main'>
            <nav className='restaurant-showpage-nav-link'>
              <div className='page-nav-link' onClick={this.scrollTo(this.reservationSection)}>Reservation</div>
              <a className='page-nav-link' onClick={this.scrollTo(this.aboutSection)}>About</a>
              <a className='page-nav-link' onClick={this.scrollTo(this.photosSection)}>Photo</a>
              <a className='page-nav-link' onClick={this.scrollTo(this.reviewsSection)}>Reviews</a>
            </nav>
            <div className='restaurant-showpage-main-content'>
              <div ref={ el => this.reservationSection = el } className='restaurant-showpage-reservation' name='reservation'>
              </div>
              <div ref={ el => this.aboutSection = el } className='restaurant-showpage-content-about' id='about'>
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
              <div ref={ el => this.photosSection = el } className='restaurant-showpage-photos' name='photos'>
                <img src={this.props.restaurant.image} className='restaurant-showpage-photo'/>
              </div>
              <div ref={ el => this.reviewsSection = el } className='restaurant-showpage-reviews' name='reviews'>
                review...coming soon
              </div>
            </div>
            <nav className='restaurant-showpage-detail-right'>
              <section className='detail-right-type'>Cuisine Type: </section>
              <section className='detail-right-data'>{this.props.restaurant.cuisine}</section>
              <section className='detail-right-hours'>Open Hours: </section>
              <section className='detail-right-data'>{this.props.restaurant.hours}</section>
              <section className='detail-right-phone'>Phone Number: </section>
              <section className='detail-right-data'>(123) - 456 - 7890</section>
              <section className='detail-right-price'>Price Ranages: </section>
              <section className='detail-right-data'>{this.props.restaurant.price}</section>
              <section className='detail-right-web'>Web Site: </section>
              <section className='detail-right-web-data'>'https://table-for-u.herokuapp.com'</section>
            </nav>
          </div>
        </div>
        <Link to={`/`} className='go-back-to-home'>Go Back To Home</Link>
      </div>
    );
  }
}

export default RestaurantDetail;
