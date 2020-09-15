import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';
import Fade from 'react-reveal'
import NoteEditor from './NoteEditor';
import Modal from 'react-modal';

class UserNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
    }
  }

  componentDidMount() {
    this.props.fetchNotes();
    this.interval = setInterval(this.props.fetchNotes, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  openModal(event,note) {
    event.preventDefault();
    this.setState({
      note,
    });
  }

  closeModal() {
    this.setState({
      note: null,
    });
  }

  deleteNote() {
    // change bin to true
  }

  render() {
    const {note} = this.state;
    return (
      <>
        <Fade cascade>
          {!this.props.notes ? (
          <div className = "note-empty">
            Start jotting down your ideas!
          </div>
          ) : (
            <ul className="notes">
              {this.props.notes.map(x => (
                <li key={x._id} className={'note-' + x.color}>
                  <div className='note-single'>
                    <a 
                    href={"/#" + x._id}
                    onClick={(e)=>this.openModal(e,x)}>
                      <div className='note-title'>
                        {x.title}
                      </div>
                      <div className='note-content'>
                        {x.short}
                      </div>
                    </a>
                    <div className='note-setting'>
                      <span className='note-detail-left'>
                        Last modified: {x.time}
                      </span>
                      <span className='note-detail-right'>
                        <button className='note-delete'>Move to Bin (not active atm)</button> 
                      </span>
                    </div>
                  </div>
                </li> 
              ))}
            </ul>
          )}
        </Fade>
        {note && (
          <div className={"note-" + note.color}>
            <Modal 
            isOpen={true} 
            onRequestClose={() => this.closeModal()}>
              <Fade right>
                <div>
                <NoteEditor
                note = {note}
                />
                </div>
              </Fade>
            </Modal>
          </div>
        )}
      </>
    )
  }
}

export default connect((state) => ({
  notes: state.notes.filteredNotes,
}), {
  fetchNotes,
})(UserNotes);