import { connect } from 'react-redux';
import CityDetail from './city_detail';
import { requestSingleCity, requestAllCity } from '../../actions/city_actions';
import { requestAllRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
  city: state.city,
  cities: state.cities,
  restaurants: state.restaurants
});

const mapDispatchToProps = (dispatch) => ({

  requestAllCity: () => dispatch(requestAllCity()),
  requestAllRestaurant: () => dispatch(requestAllRestaurant())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail);
