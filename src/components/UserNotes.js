import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';
import { moveToBin } from '../actions/binActions';
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

  newNote(e) {
    e.preventDefault();
    this.setState({
      note: {new: true},
    });
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

  render() {
    const {note} = this.state;
    return (
      <div>
        <Fade cascade>
          <div
          onClick={(e)=>this.newNote(e)}
          className="note-new">
            Add a new note...
          </div>
          {!this.props.notes ? (
            <div className = "empty">
              Start jotting down your ideas!
            </div>
          ) : (
            <div>
              <ul className="notes">
                {this.props.notes.map(x => (
                  <li key={x._id} className={'note-' + x.color}>
                    <div className='note-single'>
                      <a 
                      href={"/#" + x._id}
                      onClick={(e)=>this.openModal(e,x)}>
                        <div className='note-title note-title-main'>
                          {x.title}
                        </div>
                        <div className='note-content'>
                          {x.full}
                        </div>
                      </a>
                      <div className='note-setting'>
                        <span className='note-detail-left'>
                          Last modified: {x.time}
                        </span>
                        <span className='note-detail-right'>
                          <button 
                          onClick={()=>this.props.moveToBin(x)}
                          className='note-delete'>Move to Bin</button> 
                        </span>
                      </div>
                    </div>
                  </li> 
                ))}
              </ul>
            </div>
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
                closeModal = {() => this.closeModal()}
                />
                </div>
              </Fade>
            </Modal>
          </div>
        )}
      </div>
    )
  }
}

export default connect((state) => ({
  notes: state.notes.filteredNotes,
}), {
  fetchNotes,
  moveToBin,
},
)(UserNotes);