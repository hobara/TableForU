import { connect } from 'react-redux';
import RestaurantLists from './restaurant_lists';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, {city}) => ({
  restaurants: state.restaurants,
  city: city
});

const mapDispatchToProps = dispatch => ({
  requestAllRestaurant: () => dispatch(requestAllRestaurant()),
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantLists);
