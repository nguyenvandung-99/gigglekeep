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
            <Link to="/home">Your Notes</Link>
            <br />
            <Link to="/bin">Bin</Link>
          </div>
          <div className="main">
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={UserNotes} />
            <Route path="/bin" component={UserBin} />
          </div>
          <footer></footer>
        </div>
      </BrowserRouter>
    );
  }
}