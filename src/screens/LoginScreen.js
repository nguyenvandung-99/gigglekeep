import React, { Component } from 'react'
import UserInfo from '../components/UserInfo'

export default class LoginScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    }
  }

  switchLogIn() {
    this.setState({
      login: !this.state.login,
    })
  }

  render() {
    return (
      <UserInfo 
        command = {this.state.login 
          ? <>
          <button
          className="button login"
          type="submit">
            Log In
          </button>
          <br/>
          <button onClick={() => this.switchLogIn()}>
            New to Giggle Keep? Sign up here!
          </button>
          </>
          : <>
          <button
          className="button signup"
          type="submit">
            Sign Up
          </button>
          <br/>
          <button onClick={() => this.switchLogIn()}>
            Already have an account? Log in here!
          </button>
          </>
        }
      />
    )
  }
}