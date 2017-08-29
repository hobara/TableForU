import { connect } from 'react-redux';
import { signin, signout, signup, receiveErrors, clearErrors } from '../../actions/session_actions';
import SignInModal from './signin_modal';

const mapStateToProps = (state) => ({
  errors: state.errors,
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInModal);
