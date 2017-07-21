import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SignUpModal from './signup_modal';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpModal);
