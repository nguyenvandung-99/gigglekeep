import React, { Component } from "react";
import UserNotes from '../components/UserNotes'
import { Redirect, Route, Link, BrowserRouter } from "react-router-dom";
import UserBin from "../components/UserBin";

export default class HomeScreen extends Component {
  

  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <div className="navigation">
            <div className="navigation-option">
              <Link to="/">Your Notes</Link>
            </div>
            <div className="navigation-option">
              <Link to="/bin">Bin</Link> 
            </div>
          </div>
          <div className="main">
            <Route path="/" component={UserNotes} />
            <Route path="/bin" component={UserBin} />
          </div>
          <footer></footer>
        </div>
      </BrowserRouter>
    );
  }
}