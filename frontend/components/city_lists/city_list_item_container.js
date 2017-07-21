import { connect } from 'react-redux';
import CityListItem from './city_list_item';
import { requestSingleCity } from '../../actions/city_actions';

const mapStateToProps = (state) => ({
  id: state.city_id,
  name: state.name,
  image: state.image
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleCity: id => dispatch(requestSingleCity(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityListItem);
