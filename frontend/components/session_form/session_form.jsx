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

  update(key) {
    return event => this.setState({
      [key]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.signin({user});
  }

  // navLink() {
  //   if (this.props.formType === 'signin') {
  //     return <Link to='/signup'>Sign Up</Link>;
  //   } else {
  //     return <Link to='/signin'>Log In</Link>;
  //   }
  // }

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
          <span className='signin-form-header'>Please sign in</span>
          <div className='signin-form'>
            <label>
              <input type='text' className='signin-input' placeholder='Username*'
                value={this.state.username} onChange={this.update('username')} />
            </label>
            <br/>
            <label>
              <input type='password' className='signin-input' placeholder='Password*'
                value={this.state.password} onChange={this.update('password')} />
            </label>
            <section className='session-errors'>
              <h6>{this.renderErrors()}</h6>
            </section>
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
