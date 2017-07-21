import { connect } from 'react-redux';
import { signin, logout, signup, receiveErrors } from '../../actions/session_actions';
import SignInModal from './signin_modal';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    signin: user => dispatch(signin(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInModal);
