import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
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
    if (this.props.formType === 'signin') {
      return <Link to='/signup'>Sign Up</Link>;
    } else {
      return <Link to='/signin'>Log In</Link>;
    }
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
      <div className='signin-form-container'>
        <form onSubmit={this.handleSubmit} className='signin-form-box'>
          <br/>
          <span className='signin-form-header'>Welcome back!</span>
          <div className='signin-form'>
            <label>Username:
              <input type='text' className='signin-input'
                value={this.state.username} onChange={this.update('username')} />
            </label>
            <br/>
            <label>Password:
              <input type='password' className='signin-input'
                value={this.state.password} onChange={this.update('password')} />
            </label>
            <br/>
            <input type='submit' className='session-button' value='Sign In' />
          </div>
        </form>
        <br />
        <span className='back-to-login'>
          New to TableForU?  <Link to='/signup'>Create an account</Link>
        </span>
        <br />
        <Link to={'/'}>
          <span className='back-to-home'>Go Back to Home</span>
        </Link>
      </div>
    );
  }
}

export default withRouter(SessionForm);
