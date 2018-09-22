import React from 'React';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange(e) {

  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="login">
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
          <br />
          <p>Experience Level:</p>
          <select name="experience" value={experience} onChange={this.handleChange}>
            <option value="Novice">Novice</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <br />
          <input className="signup" type="button" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default Login