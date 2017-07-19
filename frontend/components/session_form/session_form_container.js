import { connect } from 'react-redux';
import { signin, logout, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    loggedIn: Boolean(state.currentUser),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: user => dispatch(signin(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
