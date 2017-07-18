import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SignUpForm from './session_form';

const mapStateToProps = ({session}) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
