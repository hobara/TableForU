import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      location: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
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
      console.log(this.props),
      <div className='signup-form-container'>
        <form className='signup-form-box'>
          <br/>
          <span className='signup-form-header'>Welcome to TableForU!</span>
          <div className='signup-form'>
            <input type='text' className='signup-input' placeholder='Username*'
              value={this.state.username} onChange={this.update('username')} />
            <br/>
            <input type='text' className='signup-input' placeholder='Email*'
              value={this.state.email} onChange={this.update('email')} />
            <br/>
            <input type='password' className='signup-input' placeholder='Password*'
              value={this.state.password} onChange={this.update('password')} />
            <br/>
            <input type='location' className='signup-input' placeholder='Primary dining location*'
              value={this.state.location} onChange={this.update('location')} />
            <section className='session-errors'>
              <h6>{this.renderErrors()}</h6>
            </section>
            <input type='submit' className='session-button'
              value='Create Account' onClick={this.handleSubmit} />
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
