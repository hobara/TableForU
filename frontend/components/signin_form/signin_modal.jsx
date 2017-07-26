import React from 'react';
import Modal from 'react-modal';
import SignUpModal from '../signup_form/signup_modal';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(400, 400, 400, 0.30)',
    zIndex: 10
  },
  content: {
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'relative',
    marginTop: '80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '300px',
    border: '1px solid #ccc',
    padding: '10px',
    zIndex: 900,
    overflow: 'auto'
  }
};

let contentLabel = 'signin';

class SignInModal extends React.Component {
  constructor(props) {
    super(props);
    if (contentLabel === 'signin') {
      this.state = {
        modalOpen: '',
        username: '',
        password: ''
      };
    } else {
      this.state = {
        modalOpen: '',
        username: '',
        password: '',
        email: '',
        location: ''
      };
    }
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: '' });
  }

  openModal(name) {
    this.setState({ modalOpen: name });
  }

  update(key) {
    return event => this.setState({
      [key]: event.currentTarget.value
    });
  }

  handleSignin(event) {
    event.preventDefault();
    const user = this.state;
    this.props.signin({user});
  }

  handleSignup(event) {
    event.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  modalContent() {
    if (this.state.modalOpen === 'signin') {
      return (
        <span className='signin-modal-container'>
          <span className='signin-form-header'>Please sign in</span>
          <input type='text' className='signin-input' placeholder='  Username*'
            value={this.state.username} onChange={this.update('username')} />
          <input type='password' className='signin-input' placeholder='  Password*'
            value={this.state.password} onChange={this.update('password')} />
          <h6>{this.renderErrors()}</h6>
          <span className='signin-button' onClick={this.handleSignin}>Sign In</span>
          <br />
          <span className='back-to-login'>New to TableForU?
            <span className='back-to-login-button' onClick={() => { contentLabel = 'signin'; this.openModal('signup');}}>  Create Accout</span>
          </span>
        </span>
      );
    } else {
      return (
        <span className='signup-modal-container'>
          <span className='signup-form-header'>Welcome to TableForÜ!</span>
          <input type='text' className='signup-input' placeholder='  Username*'
            value={this.state.username} onChange={this.update('username')} />
          <input type='text' className='signup-input' placeholder='  Email*'
            value={this.state.email} onChange={this.update('email')} />
          <input type='password' className='signup-input' placeholder='  Password*'
            value={this.state.password} onChange={this.update('password')} />
          <input type='location' className='signup-input' placeholder='  Primary dining location'
            value={this.state.location} onChange={this.update('location')} />
          <h6>{this.renderErrors()}</h6>
          <span className='signup-button' onClick={this.handleSignup}>Create Account</span>
        </span>
      );
    }

  }

  render() {
    return (
      <span>
        <span className='header-signin' onClick={() => this.openModal('signin')}>Sign In</span>
          <Modal
            style={style}
            contentLabel={contentLabel}
            isOpen={this.state.modalOpen !== ''}
            className='signin-form-container'
            onRequestClose={this.closeModal}
            >
            <i
              className='fa fa-times close-button'
              aria-hidden='true'
              onClick={this.closeModal}>
            </i>
            {this.modalContent()}
          </Modal>
      </span>
    );
  }
}

export default SignInModal;
