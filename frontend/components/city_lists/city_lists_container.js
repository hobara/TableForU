import { connect } from 'react-redux';
import CityLists from './city_lists';
import { requestAllCity } from '../../actions/city_actions';

const mapStateToProps = state => ({
  cities: requestAllCity()
});

const mapDispatchToProps = dispatch => ({
  requestAllCity: () => dispatch(requestAllCity())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityLists);
