import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    loggedIn: Boolean(state.currentUser),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
