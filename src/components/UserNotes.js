import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/noteActions';

class UserNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: JSON.parse(localStorage.getItem("boardNotes") || false),
    }
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  editNote() {
    // open the note and edit it
  }

  render() {
    return (
      <>
        {this.state.notes == 0 ? (
        <div className = "note-empty">
          Start jotting down your ideas!
        </div>
        ) : (
        <ul className="notes">
          {this.state.notes.map(x => (
            <li key={x._id} className={'note-' + x.color}>
              <div className='note-single'>
                <div onClick={()=>this.editNote()}>
                <div className='note-title'>
                  {x.title}
                </div>
                <div className='note-short'>
                  {x.short}
                </div>
                </div>
                <div className='note-setting'>
                  <span className='note-detail-left'>
                    Last modified: {x.time}
                  </span>
                  <span className='note-detail-right'>
                    <button>Delete (not active atm)</button> 
                  </span>
                </div>
              </div>
            </li> 
          ))}
        </ul>
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