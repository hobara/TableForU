import React from 'react';
import Modal from 'react-modal';

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

const contentLabel = 'Sign Up';


class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: '',
      username: '',
      password: '',
      email: '',
      location: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: '' });
  }

  openModal() {
    this.setState({ modalOpen: 'signup' });
  }

  update(key) {
    return event => this.setState({
      [key]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
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

  render() {
    return (
    <span>
      <span className='header-signup' onClick={() => this.openModal('signup')}>Sign Up</span>
        <Modal
          style={style}
          contentLabel={contentLabel}
          isOpen={this.state.modalOpen !== ''}
          className='signup-form-container'
          onRequestClose={this.closeModal}
          >
          <i
            className='fa fa-times close-button'
            aria-hidden='true'
            onClick={this.closeModal}>
          </i>

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
          <span className='signup-button' onClick={this.handleSubmit}>Create Account</span>
        </Modal>
      </span>
    );
  }
}

export default SignUpModal;
