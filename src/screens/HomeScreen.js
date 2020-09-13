import React, { Component } from "react";
import UserNotes from '../components/UserNotes'

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div className="homescreen">
          <UserNotes />
        </div>
      </div>
    );
  }
}