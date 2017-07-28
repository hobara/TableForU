import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';
import { addFavorite, removeFavorite } from '../../actions/favorite_actions';
import { createReview, requestAllReview } from '../../actions/review_actions';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  restaurant: state.restaurant,
  restaurants: state.restaurants,
  favorites: state.favorites,
  reviews: state.reviews,

});

const mapDispatchToProps = (dispatch) => ({
  requestAllRestaurant: () => dispatch(requestAllRestaurant()),
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id)),
  addFavorite: (favorite) => dispatch(addFavorite(favorite)),
  createReview: (review) => dispatch(createReview(review)),
  requestAllReview: () => dispatch(requestAllReview())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);
