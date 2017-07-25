import { connect } from 'react-redux';
import CityDetail from './city_detail';
import { requestSingleCity, requestAllCity } from '../../actions/city_actions';

const mapStateToProps = (state) => ({
  city: state.city,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  // requestSingleCity: id => dispatch(requestSingleCity(id))
  requestAllCity: () => dispatch(requestAllCity())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDetail);
