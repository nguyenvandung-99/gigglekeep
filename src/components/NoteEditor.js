import React, { Component } from 'react'

export default class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      title: '',
      color: '',
      time: '',
      full: '',
    }
  }

  componentDidMount() {
    const note = this.props.note;
    this.setState({
      _id: note._id,
      title: note.title,
      color: note.color,
      time: note.time,
      full: note.full,
    });
  }

  LogTime() {
    const current = new Date();
    return current.getFullYear() +
    '/' + ('0' + (current.getMonth() + 1)).slice(-2) +
    '/' + ('0' + current.getDate()).slice(-2) +
    ' ' + ('0' + current.getHours()).slice(-2) + 
    ':' + ('0' + current.getMinutes()).slice(-2);
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      time: this.LogTime(),
    });
  }

  render() {
    const note = this.state;
    return (
      <>
      <div className={"note-edit note-" + note.color}>
        <form onSubmit={this.createOrder}>
          <div >
            <input 
            className="note-title"
            name="title"
            type="text"
            defaultValue={note.title}
            onChange={this.handleInput}></input>
          </div>
          <div>
            <textarea
            className="note-content"
            name="full"
            type="textarea"
            defaultValue={note.full}
            onChange={this.handleInput}></textarea>
          </div>
          <div className='note-setting'>
            <span className='note-detail-left'>
              Last modified: {note.time}
            </span>
            <span className='note-detail-right'>
              <button
              className="button primary"
              type="submit">
                Save (not active)
              </button>
            </span>
          </div>
        </form>
      </div>
      </>
    )
  }
}