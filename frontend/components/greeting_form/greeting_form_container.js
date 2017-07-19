import { connect } from 'react-redux';
import { signout, signin } from '../../actions/session_actions';
import GreetingForm from './greeting_form';

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
    handleDemo:() => dispatch(signin({user: {username:'Guest', password:'password'}}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GreetingForm);
