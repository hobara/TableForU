import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
    this.upcomingReservations = this.upcomingReservations.bind(this);
    this.pastReservations = this.pastReservations.bind(this);
    this.favoriteRestaurants = this.favoritesRestaurants.bind(this);
  }

  componentDidMount() {
    this.props.requestAllReservation();
    this.props.requestAllFavorite();
  }

  scrollTo(el) {
    return () => {
      el.scrollIntoView();
    };
  }

  upcomingReservations() {

    return(
      <div>
      upcoming
      </div>
    );
  }

  pastReservations() {

    return(
      <div>
      past
      </div>
    );
  }

  favoriteRestaurants() {

    return(
      <div>
      favorite
      </div>
    );
  }


  render() {
    console.log(this.props);
    <div className='user-profile-main'>
      <nav className='user-profile-nav'>
        <a className='user-nav-link' onClick={this.scrollTo(this.upcomingSection)}>Upcoming Reservations</a>
        <a className='user-nav-link' onClickon={this.scrollTo(this.pastSection)}>Past Reservations</a>
        <a className='user-nav-link' onClickon={this.scrollTo(this.favoriteSection)}>Favorites Restaurants</a>
      </nav>
      <div className='user-profile-content'>
        <div className='user-profile-content-upcoming-reservation'>
          <div className='user-profile-upcoming-title' name='upcoming'
            ref={ el => this.upcomingSection = el }>
            <h3>Upcoming Reservations</h3>
          </div>
          <div className='user-profile-upcoming-lists' >
            {this.upcomingReservations()}
          </div>
        </div>
        <div className='user-profile-content-past-reservation'>
          <div className='user-profile-past-title' name='past'
            ref={ el => this.pastSection = el }>
            <h3>Past Reservations</h3>
          </div>
          <div className='user-profile-past-lists' >
            {this.pastReservations()}
          </div>
        </div>
        <div className='user-profile-content-favorite-lists'>
          <div className='user-profile-favorite-title' name='favorite'
            ref={ el => this.favoriteSection = el }>
            <h3>Favorite Restaurants</h3>
          </div>
          <div className='user-profile-favorite-lists' >
            {this.favoriteRestaurants()}
          </div>
        </div>
      </div>

      <Link to={`/`} className='go-back-to-home'>Go Back To Home</Link>
    </div>


  }




}
