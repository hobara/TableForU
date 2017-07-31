import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting_form/greeting_form_container';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';
import ReservationRequestContainer from '../reservation/reservation_request_container';
import ReviewListsContainer from '../review/review_lists_container';
import Modal from 'react-modal';

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
  1: '17:00 - 21:00',
  2: '17:00 - 22:00',
  3: '18:00 - 22:00',
  4: '18:00 - 23:00'
};

const RATE_TYPE = {
  0:  <span className='review-item-rate'>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
      </span>,
  1: <span className='review-item-rate'>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
    </span>,
  2: <span className='review-item-rate'>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
    </span>,
  3: <span className='review-item-rate'>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
    </span>,
  4: <span className='review-item-rate'>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
    </span>,
  5: <span className='review-item-rate'>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
        <i className="fa fa-star fa-lg" aria-hidden="true"></i>
    </span>
};

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(400, 400, 400, 0.50)',
    zIndex: 10
  },
  content: {
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'relative',
    marginTop: '80px',
    marginLeft: 'auto',
    maxMarginLeft: '300px',
    maxMarginRight: '300px',
    marginRight: 'auto',
    maxWidth: '500px',
    border: '1px solid #ccc',
    padding: '10px 0px 10px 0px',
    zIndex: 10,
    overflow: 'auto'
  }
};
let contentLabel = 'review';


class RestaurantDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: '',
      rate: '',
      comment: ''
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.openReviewForm = this.openReviewForm.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.renderReview = this.renderReview.bind(this);
  }

  componentWillMount() {
    this.props.requestAllRestaurant();
    this.props.requestSingleRestaurant(this.props.match.params.restaurant_id);
    // this.props.requestAllReview();

  }

  closeModal() {
    this.setState({ modalOpen: '' });
  }

  openModal(type) {
    this.setState({ modalOpen: type });
  }

  update(key) {
    return event => this.setState({
      [key]: event.currentTarget.value
    });
  }

  scrollTo(el) {
    return () => {
      el.scrollIntoView();
    };
  }

  handleFavorite() {
    let favorite = {};
    favorite.user_id = this.props.currentUser.id;
    favorite.restaurant_id = this.props.restaurant.id;
    const favList = this.props.currentUser.favorites;
    const favResId = [];
    favList.forEach((fav) => {favResId.push(fav.restaurant_id);});
    if (favResId.includes(this.props.restaurant.id)) {
      window.alert('You already have this in your favorite list.');
    } else {
      this.props.addFavorite({favorite: favorite});
      window.alert('Thank you for adding to favorites!');
    }
  }

  openReviewForm() {
    this.openModal('review');
  }

  handleReview() {
    let review = {};
    const allIds = [];
    this.props.currentUser.reservations.forEach((res) => {
      allIds.push(res.restaurant.id);
    });
    if (allIds.includes(this.props.restaurant.id)) {
      let idx = allIds.indexOf(this.props.restaurant.id);
      review.reservation_id = this.props.currentUser.reservations[idx].reservation_id;
      review.user_id = this.props.currentUser.id;
      review.restaurant_id = this.props.restaurant.id;
      review.rate = parseInt(this.state.rate);
      review.comment = this.state.comment;
      this.props.createReview({review: review});
      window.alert('Thank you for submitting a review!');
      this.closeModal();
      this.props.requestSingleRestaurant(this.props.match.params.restaurant_id);
    } else {
      window.alert("Oh it seems you haven't reserved this restaurant. Please write a review after reservation!");
    }
  }

  renderReview() {
    if (this.props.restaurant.reviews) {
    return (
      <div className='review-item-container'>
        <span className='restaurant-showpage-content-photo-header'><h2>Rating and Reviews</h2></span>
        {this.props.restaurant.reviews.map((rev, idx) => (
          <div className='review-item' key={idx}>
            <section className='review-item-top'>
              {RATE_TYPE[rev.rate]}
              <span className='review-item-author'>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                &nbsp; {rev.username}
              </span>
              <span className='review-item-time'>
                - comment on &nbsp; {rev.created_at.slice(0,10)}
              </span>
            </section>
            <section className='review-item-body'>
              <span className='review-item-comment'>
                {rev.comment}
              </span>
            </section>
          </div>
        ))}
      </div>
      );
    }
  }

  render() {
    let averageRate = 0;
    if (Object.keys(this.props.restaurant).length > 0) {
      let totalRate = 0;
      let allReviews = this.props.restaurant.reviews;
      allReviews.map((rev) => {
        totalRate = totalRate + rev.rate;
      });
      if (totalRate === 0) {
        averageRate = 0;
      } else {
        averageRate = Math.floor(totalRate/allReviews.length);
      }
    }
    return (
      <div className='restaurant-showpage-background'>
        <div className='restaurant-showpage-header'>
            <span className='showpage-header-left'>
              <img src={this.props.restaurant.image1} className='showpage-header-image'/>
            </span>
            <section className='showpage-header-right'>
              <section className='showpage-restaurant-name'>{this.props.restaurant.name}</section>
              <section className='showpage-restaurant-rate'>{RATE_TYPE[averageRate]}</section>
              <section className='showpage-restaurant-details'>
                <section className='showpage-restaurant-details-left'>
                  {CUISINE_TYPE[this.props.restaurant.cuisine]} | {this.props.restaurant.city_name}  |
                    Price: {PRICE_TYPE[this.props.restaurant.price]}
                </section>
              </section>
            </section>
            <section className='showpage-restaurant-details-right'>
              <span className='add-to-fav' onClick={this.handleFavorite}>Add to Favorites</span>
              <span className='add-review' onClick={this.openReviewForm}>Add Review</span>
            </section>
        </div>
        <div className='restaurant-showpage-main-container'>
          <div className='restaurant-showpage-nav-link'>
            <nav className='nav-link-wrapper'>
              <a className='page-nav-link' onClick={this.scrollTo(this.reservationSection)}>Reservation</a>
              <a className='page-nav-link' onClick={this.scrollTo(this.aboutSection)}>About</a>
              <a className='page-nav-link' onClick={this.scrollTo(this.photosSection)}>Photos</a>
              <a className='page-nav-link' onClick={this.scrollTo(this.reviewsSection)}>Reviews</a>
            </nav>
          </div>
          <div className='restaurant-showpage-main'>
            <div className='restaurant-showpage-main-content'>
              <div ref={ el => this.reservationSection = el } className='restaurant-showpage-reservation' name='reservation'>
                <ReservationRequestContainer />
              </div>
              <div ref={ el => this.aboutSection = el } className='restaurant-showpage-content-about' id='about'>
                <span className='restaurant-showpage-content-header'>
                  <h2>About {this.props.restaurant.name}</h2>
                </span>
                <section className='restaurant-showpage-content-about-text'>
                  {this.props.restaurant.about}
                </section>
              </div>
              <div ref={ el => this.photosSection = el } className='restaurant-showpage-photos' name='photos'>
                <span className='restaurant-showpage-content-header'>
                  <h2>Photos</h2>
                </span>
                <img src={this.props.restaurant.image1} className='restaurant-showpage-photo'/>
                <img src={this.props.restaurant.image2} className='restaurant-showpage-photo'/>
                <img src={this.props.restaurant.image3} className='restaurant-showpage-photo'/>
              </div>
              <div ref={ el => this.reviewsSection = el } className='restaurant-showpage-reviews' name='reviews'>
                {this.renderReview()}
              </div>
            </div>
            <nav className='restaurant-showpage-detail-right'>
              <section className='detail-right-type'>Cuisine Type: </section>
              <section className='detail-right-data'>{CUISINE_TYPE[this.props.restaurant.cuisine]}</section>
              <section className='detail-right-hours'>Open Hours: </section>
              <section className='detail-right-data'>{HOURS_TYPE[this.props.restaurant.hours]}</section>
              <section className='detail-right-phone'>Phone Number: </section>
              <section className='detail-right-data'>(123) - 456 - 7890</section>
              <section className='detail-right-price'>Price Ranages: </section>
              <section className='detail-right-data'>{PRICE_RANGE[this.props.restaurant.price]}</section>
              <section className='detail-right-web'>Web Site: </section>
              <section className='detail-right-web-data'><Link to='https://table-for-u.herokuapp.com'>'https://table-for-u.herokuapp.com'</Link></section>
            </nav>
          </div>
        </div>

        <Modal
          style={style}
          contentLabel={contentLabel}
          isOpen={this.state.modalOpen === 'review'}
          className='review-form-container'
          onRequestClose={this.closeModal}
          >
          <span className='signup-modal-container'>
            <span className='signup-form-header'>Please share your experience</span>
            <select className='review-rate'
              value={this.state.rate} onChange={this.update('rate')} >
              <option defaultValue hidden >Rate your dining experience</option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
            <input type='textarea' className='review-text' placeholder='  Write review here*'
              value={this.state.comment} onChange={this.update('comment')} />

            <span className='review-submit-button' onClick={this.handleReview}>Submit Review</span>
          </span>
        </Modal>

      </div>
    );
  }
}

export default RestaurantDetail;
