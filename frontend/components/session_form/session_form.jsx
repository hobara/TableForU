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
    if (this.props.formType === 'login') {
      return <Link to='/signup'>Sign Up</Link>;
    } else {
      return <Link to='/login'>Log In</Link>;
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
      <div className='login-form-container'>

        <form onSubmit={this.handleSubmit} className='login-form-box'>
          Please {this.props.formType} or {this.navLink()}
          <div className='login-form'>
            <br/>
            <label>Username:
              <input type='text' value={this.state.username}
                 onChange={this.update('username')} className='login-input'/>
            </label>
            <br/>
            <label>Password:
              <input type='password' value={this.state.password}
                onChange={this.update('password')} className='login-input'/>
            </label>
            <br/>
            <br/>
            <input type='submit' value='Submit' />
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

export default withRouter(SessionForm);
