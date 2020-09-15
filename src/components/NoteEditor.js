import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateNote } from '../actions/editorActions';

class NoteEditor extends Component {
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
      bin: note.bin,
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

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
      time: this.LogTime(),
    });
    setTimeout(() => this.updateNote(), 2000);
  }

  changeColour(e,color) {
    e.preventDefault();
    this.setState({
      color,
      time: this.LogTime(),
    });
    setTimeout(() => this.updateNote(), 2000);
  }

  updateNote() {
    const note = this.state;
    this.props.updateNote(note);
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
            onChange={(e) => this.handleInput(e)}></input>
          </div>
          <div>
            <textarea
            className="note-content"
            name="full"
            type="textarea"
            defaultValue={note.full}
            onChange={(e) => this.handleInput(e)}></textarea>
          </div>
          <div className='note-setting'>
            <span className='note-detail-left'>
              Last modified: {note.time}
            </span>
            <span className='note-detail-right'>
              <span className='setcolor'>
              {['default','red','yellow','blue'].map((color) => (
                <button
                className={'dot note-' + color}
                onClick={(e) => this.changeColour(e,color)}>
                </button>
              ))}
              </span>
              <button
              className="note-delete"
              type="submit">
                Move to Bin (not active)
              </button>
            </span>
          </div>
        </form>
      </div>
      </>
    )
  }
}

export default connect((state) => ({
  }),
  {
    updateNote
  },
)(NoteEditor);
