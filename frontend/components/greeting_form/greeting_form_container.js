import { connect } from 'react-redux';
import { signout, signin } from '../../actions/session_actions';
import GreetingForm from './greeting_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser,
  loggedIn: Boolean(state.currentUser),
  errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signout()),
    signin: (user) => dispatch(signin(user))

  };
};

  export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GreetingForm));
