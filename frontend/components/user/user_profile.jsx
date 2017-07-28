import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Modal from 'react-modal';

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

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: '',
      rate: '',
      comment: ''
    };

    this.scrollTo = this.scrollTo.bind(this);
    this.upcomingReservations = this.upcomingReservations.bind(this);
    this.pastReservations = this.pastReservations.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillMount() {
    this.props.requestAllRestaurant();
    this.props.requestAllReservation();
    // this.props.requestAllFavorite();
  }

  scrollTo(el) {
    return () => {
      el.scrollIntoView();
    };
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

  handleSubmit(e) {
    const upcoming = [];
    const past = [];
    const today = new Date().toJSON();
    console.log(this.props);
    // if (this.props.currentUser !== null) {
    const allRes = this.props.currentUser.reservations;
    allRes.forEach((res) => {
      if (Date.parse(today.slice(0,10)) >= Date.parse(res.date)) {
        past.push(res);
      } else {
        upcoming.push(res);
      }
    });

    let review = {};
    console.log(e.currentTarget.key);
    console.log(e.currentTarget.value);
    console.log(this.props);
    console.log(this.state);
    review.user_id = this.props.currentUser;
    review.restaurant_id = past[e.currentTarget.key].restaurant.id;
    review.reservation_id = past[e.currentTarget.key].reservation_id;
    review.rate = parseInt(this.state.rate);
    review.comment = this.state.comment;
    this.props.createReview({review: review});
    window.alert('Thank you for submitting a review!');
    this.closeModal();
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, idx) => (
  //         <li key={`error-${idx}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  upcomingReservations() {
    const upcoming = [];
    const past = [];
    const today = new Date().toJSON();
    // console.log(this.props);
    // if (this.props.currentUser !== null) {
    const allRes = this.props.currentUser.reservations;
    allRes.forEach((res) => {
      if (Date.parse(today.slice(0,10)) >= Date.parse(res.date)) {
        past.push(res);
      } else {
        upcoming.push(res);
      }
    });
    // console.log(this.props.restaurants[past[0].restaurant.id]);
    if (this.props.restaurants[past[0].restaurant.id] !== undefined) {
    return(
      <div>
        {upcoming.map((res, idx) =>
          <section key={idx} className='upcoming-item'>
            <section className='upcoming-item-left'>
              <img className='upcoming-res-img'
                src={this.props.restaurants[res.restaurant.id].image1}
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
    // console.log(this.props);
    // if (this.props.currentUser !== null) {
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
                <span className='write-review-button' key={idx}
                  onClick={() => this.openModal('review')}>Write Review</span>
              </section>
            </section>
          </section>
        )}
      </div>
    );
    }
  }



  favoriteRestaurants() {

    return(
      <div>
        hi
      </div>
    );
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

          </div>
        </div>
      </div>
      <br/>
      <Link to={`/`} className='go-back-to-home'>Go Back To Home</Link>

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

          <span className='review-submit-button' onClick={this.handleSubmit}>Submit Review</span>
        </span>
      </Modal>

    </div>
  );
  }
}

export default UserProfile;
