import { connect } from 'react-redux';
import CityListItem from './city_list_item';
import { requestSingleCity, requestAllCity } from '../../actions/city_actions';

const mapStateToProps = (state) => ({
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  // requestSingleCity: id => dispatch(requestSingleCity(id))
  requestAllCity: () => dispatch(requestAllCity())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityListItem);
