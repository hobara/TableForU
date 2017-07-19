import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to='/signup'>Sign Up</Link>;
  //   } else {
  //   }
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
      <div className='signup-form-container'>
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
          <br/>
          <span className='signup-form-header'>Welcome to TableForU!</span>
          <div className='signup-form'>
            <label>Username:
              <input type='text' className='signup-input'
                value={this.state.username} onChange={this.update('username')} />
            </label>
            <br/>
            <label>Email:
              <input type='text' className='signup-input'
                value={this.state.email} onChange={this.update('email')} />
            </label>
            <br/>
            <label>Password:
              <input type='password' className='signup-input'
                value={this.state.password} onChange={this.update('password')} />
            </label>
            <br/>
            <label>Primary location:
              <input type='location' className='signup-input'
                value={this.state.location} onChange={this.update('location')} />
            </label>
            <div className='session-errors'>
              {this.renderErrors()}
            </div>
            <input type='submit' className='session-button' value='Create Account' />
          </div>
        </form>
        <br />
        <Link to={'/'}>
          <span className='back-to-home'>Go Back to Home</span>
        </Link>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
