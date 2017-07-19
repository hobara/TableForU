import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import Greeting from './greeting_form';

const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser,
  loggedIn: Boolean(state.currentUser),
  errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
