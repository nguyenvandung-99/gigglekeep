import React, { Component } from "react";

export default class UserInfo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passtype: 'password',
      showpass: false,
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  
  togglePass = () => {
    let showpass = !this.state.showpass;
    this.setState({
      showpass,
      passtype: showpass? 'text' : 'password',
    });
  }

  render() {
    return (
      <form onSubmit={this.props.handleUser}>
        <ul className="form-container">
          <li>
            <div>Username</div>
            <input
              name="username"
              type="text"
              required
              onChange={this.handleInput}></input>
          </li>
          <li>
            <div>Password</div>
            <input
              name="password"
              type={this.state.passtype}
              required
              onChange={this.handleInput}/>
            <span className="togglePass" onClick={this.togglePass}>
              {this.state.showpass? "Hide" : "Show"}
            </span>
          </li>
          <li>
            {this.props.command}
          </li>
        </ul>
      </form>
    )
  }
}