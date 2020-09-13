import React, { Component } from 'react'

export default class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  LogTime() {
    const current = new Date();
    let MyDateString;
    current.setDate(current.getDate() + 20);
    MyDateString = current.getFullYear() +
    '/' + ('0' + (current.getMonth() + 1)).slice(-2) +
    '/' + ('0' + current.getDate()).slice(-2) +
    ' ' + ('0' + current.getHours()).slice(-2) + 
    ':' + ('0' + current.getMinutes()).slice(-2);
  }
}