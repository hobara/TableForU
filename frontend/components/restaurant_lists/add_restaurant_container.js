import { connect } from 'react-redux';
import AddRestaurant from './add_restaurant';
import { requestAllRestaurant, requestSingleRestaurant, createRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
  restaurant: state.restaurant,
  restaurants: state.restaurants,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  requestAllRestaurant: () => dispatch(requestAllRestaurant()),
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id)),
  createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRestaurant);
