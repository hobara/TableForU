import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReservationRequestFrom from './reservation_request';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';
import { signin, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  restaurant: state.restaurant,
  restaurants: state.restaurants,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  requestAllRestaurant: () => dispatch(requestAllRestaurant()),
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id)),
  signin: (user) => dispatch(signin(user)),
  signup: (user) => dispatch(signup(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationRequestFrom));
