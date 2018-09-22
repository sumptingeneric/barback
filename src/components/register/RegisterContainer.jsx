import React from 'react';
import axios from 'axios';
import { Redirect } from '@reach/router';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registered: true,
      role: 'Customer',
      loggedIn: false,
      password: '',
      username:  '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password, role, registered } = this.state;
    const userInfo = { username, password, role };
    const loginInfo = { username, password };
    if (registered) {
      console.log('sending login to server');
      axios.get('/api/users/login', {
        params: loginInfo,
      }).then((response) => {
        if (!response.error) {
          this.setState({ loggedIn: true })
        } else {
          alert('invalid login attempt, please try again')
        }
      })
    } else {
      console.log('sending signup to server');
      axios.post('/api/users/create', userInfo)
        .then((response) => {
          if (!response.error) {
            this.setState({ loggedIn: true })
          } else {
            alert('invalid login attempt, please try again')
          }
        })
    }
  }

  renderView() {
    let { registered, role, loggedIn } = this.state;
    if (loggedIn) {
      return <Redirect noThrow to="/customer" />;
    }
    if (registered) {
      return (
        <div>
          <br />
          <span>Role: </span>
          <select name="role" value={role} onBlur={this.handleChange} onChange={this.handleChange}>
            <option value="Customer">Customer</option>
            <option value="Bartender">Bartender</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="login">
        <button onClick={() => this.setState({ registered: true })}>Login</button>
        <button onClick={() => this.setState({ registered: false })}>Create Account</button>
        <form>
          <label htmlFor="username">
            Username:
            <input type="text" name="username" onChange={this.handleChange} />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input type="password" name="password" onChange={this.handleChange} />
          </label>
          {this.renderView()}
          <br />
          <input className="signup" type="button" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
};

export default RegisterContainer;