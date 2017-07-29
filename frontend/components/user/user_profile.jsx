import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const CUISINE_TYPE = {
  1: 'American',
  2: 'Italian',
  3: 'French',
  4: 'Mexican',
  5: 'Japanese',
  6: 'Chinese',
  7: 'Thai',
  8: 'Steakhouse',
  9: 'Seafood',
  10: 'Fusion'
};

const PRICE_TYPE = {
  1: '$',
  2: '$$',
  3: '$$$',
  4: '$$$$'
};

const PRICE_RANGE = {
  1: '$20 and under',
  2: '$30 and under',
  3: '$31 to $50',
  4: '$50 and over'
};

const HOURS_TYPE = {
  1: '18:00 - 22:00',
  2: '18:00 - 23:00',
  3: '19:00 - 23:00',
  4: '19:00 - 24:00'
};

const RATE_TYPE = {
  0: 'https://res.cloudinary.com/hobara/image/upload/c_scale,w_140/v1501068373/stars_b9cqyd.png',
  1: 'https://res.cloudinary.com/hobara/image/upload/c_scale,w_140/v1501068373/stars_b9cqyd.png',
  2: 'https://res.cloudinary.com/hobara/image/upload/c_scale,w_140/v1501068373/stars_b9cqyd.png',
  3: 'https://res.cloudinary.com/hobara/image/upload/c_scale,w_140/v1501068373/stars_b9cqyd.png',
  4: 'https://res.cloudinary.com/hobara/image/upload/c_scale,w_140/v1501068373/stars_b9cqyd.png',
  5: 'https://res.cloudinary.com/hobara/image/upload/c_scale,w_140/v1501068373/stars_b9cqyd.png',
};


class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.scrollTo = this.scrollTo.bind(this);
    this.upcomingReservations = this.upcomingReservations.bind(this);
    this.pastReservations = this.pastReservations.bind(this);
    this.favoriteRestaurants = this.favoriteRestaurants.bind(this);

  }

  componentWillMount() {
    this.props.requestAllRestaurant();
    this.props.requestAllReservation();
  }

  scrollTo(el) {
    return () => {
      el.scrollIntoView();
    };
  }


  upcomingReservations() {
    const upcoming = [];
    const past = [];
    const today = new Date().toJSON();
    const allRes = this.props.currentUser.reservations;
    allRes.forEach((res) => {
      if (Date.parse(today.slice(0,10)) >= Date.parse(res.date)) {
        past.push(res);
      } else {
        upcoming.push(res);
      }
    });
    if (this.props.restaurants[past[0].restaurant.id] !== undefined) {
    return(
      <div>
        {upcoming.map((res, idx) =>
          <section key={idx} className='upcoming-item'>
            <section className='upcoming-item-left'>
              <img className='upcoming-res-img'
                src={this.props.restaurants[res.restaurant.id].image1}/>
            </section>
            <section className='upcoming-item-middle'>
              <section className='upcoming-res-name'>
                {this.props.restaurants[res.restaurant.id].name}
              </section>
              <section className='upcoming-res-date'>
                {res.date}
              </section>
              <section className='upcoming-res-seats'>
                Table for {res.seats} people
              </section>
            </section>
          </section>
        )}
      </div>
    );
    }
  }


  pastReservations() {
    const upcoming = [];
    const past = [];
    const today = new Date().toJSON();
    const allRes = this.props.currentUser.reservations;
    allRes.forEach((res) => {
      if (Date.parse(today.slice(0,10)) >= Date.parse(res.date)) {
        past.push(res);
      } else {
        upcoming.push(res);
      }
    });
    if (this.props.restaurants[past[0].restaurant.id] !== undefined) {
    return(
      <div>
        {past.map((res, idx) =>
          <section key={idx} className='upcoming-item'>
            <section className='upcoming-item-left'>
              <img className='upcoming-res-img'
                src={this.props.restaurants[res.restaurant.id]['image1']}
                  />
            </section>
            <section className='upcoming-item-middle'>
              <section className='upcoming-res-name'>
                {this.props.restaurants[res.restaurant.id].name}
              </section>
              <section className='upcoming-res-date'>
                {res.date}
              </section>
              <section className='upcoming-res-seats'>
                Table for {res.seats} people
              </section>
            </section>
            <section className='upcoming-item-right'>
              <section className='write-review-form'>
                <span className='write-review-button' key={idx} onClick={() => {window.alert('Go visit restaurant page to write a review');}} >Write Review</span>
              </section>
            </section>
          </section>
        )}
      </div>
    );
    }
  }



  favoriteRestaurants() {
    if (Object.keys(this.props.restaurants).length >=1 ) {
    return(
      <div>
        {this.props.currentUser.favorites.map((res, idx) => (
          <section key={idx} className='favorite-item'>
            <section className='favorite-item-left'>
              <img className='upcoming-res-img'
                src={this.props.restaurants[res.restaurant_id]['image1']}
                  />
            </section>
            <section className='favorite-item-middle'>
              <section className='favorite-item-name'>
                {this.props.restaurants[res.restaurant_id].name}
              </section>
              <section className='favorite-item-rate'>
                <img src={RATE_TYPE[this.props.restaurants[res.restaurant_id].rate]} />
              </section>
              <section className='favorite-item-type'>
                {CUISINE_TYPE[this.props.restaurants[res.restaurant_id].cuisine]}
              </section>
              <section className='favorite-item-price'>
                {PRICE_TYPE[this.props.restaurants[res.restaurant_id].price]}
              </section>
            </section>
            <section className='favorite-item-right'>
              <section className='unfavorite-form'>
                <span className='unfavorite-button' key={idx}
                  onClick={() => {window.alert('Please do not unfavorite me today!');}}>Unfavorite</span>
              </section>
            </section>
          </section>
        ))}
      </div>
    );
  }
  }


  render() {
    return(
    <div className='user-profile-main'>
      <nav className='user-profile-nav'>
        <section className='user-nav-link' onClick={this.scrollTo(this.upcomingSection)}>Upcoming Reservations</section>
        <section className='user-nav-link' onClick={this.scrollTo(this.pastSection)}>Past Reservations</section>
        <section className='user-nav-link' onClick={this.scrollTo(this.favoriteSection)}>Favorites Restaurants</section>
      </nav>
      <div className='user-profile-content'>
        <div className='user-profile-upcoming-reservation'>
          <div className='user-profile-content-title' name='upcoming'
            ref={ el => this.upcomingSection = el }>
            <h2>Upcoming Reservations</h2>
          </div>
          <div className='user-profile-upcoming-lists' >
            {this.upcomingReservations()}
          </div>
        </div>
        <div className='user-profile-past-reservation'>
          <div className='user-profile-content-title' name='past'
            ref={ el => this.pastSection = el }>
            <h2>Past Reservations</h2>
          </div>
          <div className='user-profile-past-lists' >
            {this.pastReservations()}
          </div>
        </div>
        <div className='user-profile-favorite'>
          <div className='user-profile-content-title' name='favorite'
            ref={ el => this.favoriteSection = el }>
            <h2>Favorite Restaurants</h2>
          </div>
          <div className='user-profile-favorite-lists' >
            {this.favoriteRestaurants()}
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
  }
}

export default UserProfile;
