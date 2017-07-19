import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


export const signup = (user) => dispatch => (
  APIUtil.signup(user)
  .then(user1 => {
    dispatch(receiveCurrentUser(user1));
    dispatch(clearErrors());
    },
  err => (dispatch(receiveErrors(err.responseJSON))))
);

export const signin = (user) => dispatch => (
  APIUtil.signin(user)
  .then(user1 => {
    dispatch(receiveCurrentUser(user1));
    dispatch(clearErrors());
    },
  err => (dispatch(receiveErrors(err.responseJSON))))
);

export const signout = () => dispatch => (
  APIUtil.signout()
  .then(user => dispatch(receiveCurrentUser(null)))
);
