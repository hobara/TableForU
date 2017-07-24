import { connect } from 'react-redux';
import RestaurantDetail from './restaurant_detail';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
  restaurant: state.restaurant,
  restaurants: state.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  requestAllRestaurant: () => dispatch(requestAllRestaurant()),
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);
