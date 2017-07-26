import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddRestaurant from './add_restaurant';
import { requestAllRestaurant, requestSingleRestaurant, createRestaurant } from '../../actions/restaurant_actions';
import { signup, signin } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  restaurant: state.restaurant,
  restaurants: state.restaurants,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  requestAllRestaurant: () => dispatch(requestAllRestaurant()),
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id)),
  createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
  signin: (user) => dispatch(signin(user)),
  signup: (user) => dispatch(signup(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRestaurant));
