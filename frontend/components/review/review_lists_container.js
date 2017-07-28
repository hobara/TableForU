import { connect } from 'react-redux';
import ReviewLists from './review_lists';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';
import { signup, signin } from '../../actions/session_actions';

const mapStateToProps = (state, {city}) => ({
  restaurant: state.restaurant,
  restaurants: state.restaurants,
  errors: state.errors,
  city: city
});

const mapDispatchToProps = dispatch => ({
  requestAllRestaurant: () => dispatch(requestAllRestaurant()),
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id)),
  signin: (user) => dispatch(signin(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewLists);
