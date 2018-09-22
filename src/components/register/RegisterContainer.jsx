import React from 'react';
// import Login from './Login.jsx';
// import Signup from './Signup.jsx';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registered: true,
      role: 'Customer',
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
    console.log(this.state);
    //TODO will create axios post request
    //? might want to send to container app
  }

  renderView() {
    let { registered, role } = this.state;
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

  //TODO include button to sign up or log in
  // toggle between two views
  render() {
    return (
      <div className="login">
        <button onClick={() => this.setState({ registered: false })}>Create Account</button>
        <button onClick={() => this.setState({ registered: true })}>Login</button>
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