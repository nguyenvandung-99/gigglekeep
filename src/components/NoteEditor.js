import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateNote } from '../actions/editorActions';
import { moveToBin } from '../actions/binActions'
import { LogTime } from '../LogTime';
const shortid = require("shortid");

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      title: '',
      color: '',
      time: '',
      full: '',
      new: null,
    }
  }

  componentDidMount() {
    const note = this.props.note;
    this.setState({
      _id: note._id || shortid.generate(),
      title: note.title || 'Title...',
      color: note.color || "default",
      time: note.time || LogTime(),
      full: note.full || '',
      bin: note.bin || false,
      new: note.new || false,
    });
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
      time: LogTime(),
    });
    setTimeout(() => this.updateNote(), 2000);
  }

  changeColour(e,color) {
    e.preventDefault();
    this.setState({
      color,
      time: LogTime(),
    });
    setTimeout(() => this.updateNote(), 2000);
  }

  updateNote() {
    const note = this.state;
    this.props.updateNote(note);
    this.setState({
      new: false,
    })
  }

  moveToBin(e,note) {
    e.preventDefault();
    this.props.closeModal();
    this.props.moveToBin(note);
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
              onClick={(e)=>this.moveToBin(e,note)}
              disabled={this.state.new}>
                Move to Bin
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
    updateNote,
    moveToBin,
  },
)(NoteEditor);
