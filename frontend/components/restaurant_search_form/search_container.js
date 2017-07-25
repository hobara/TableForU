import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './search';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
  restaurant: state.restaurant,
  restaurants: state.restaurants,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  requestAllRestaurant: () => dispatch(requestAllRestaurant()),
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm));
