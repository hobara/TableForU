import { connect } from 'react-redux';
import CityLists from './city_lists';
import { requestAllCity, requestSingleCity } from '../../actions/city_actions';

const mapStateToProps = state => ({
  cities: state.cities
});

const mapDispatchToProps = dispatch => ({
  requestAllCity: () => dispatch(requestAllCity()),
  requestSingleCity: (id) => dispatch(requestSingleCity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityLists);
