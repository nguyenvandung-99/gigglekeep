import { connect } from "react-redux";
import { fetchBin } from '../actions/noteActions';
import { moveToBin, deleteNote } from '../actions/binActions';
import React, { Component } from "react";
import { Fade } from "react-reveal";

class UserBin extends Component {

  componentDidMount() {
    this.props.fetchBin();
    this.interval = setInterval(this.props.fetchBin, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return(
      <>
        <Fade cascade>
          {!this.props.bin || this.props.bin.length == 0 ? (
          <div className = "empty">
            Bin is empty
          </div>
          ) : (
            <ul className="notes">
              {this.props.bin.map(x => (
                <li key={x._id} className={'note-' + x.color}>
                  <div className='note-single'>
                   
                      <div className='note-title'>
                        {x.title}
                      </div>
                      <div className='note-content'>
                        {x.short}
                      </div>
                    
                    <div className='note-setting'>
                      <span className='note-detail-left'>
                        Deleted: {x.time}
                      </span>
                      <span className='note-detail-right'>
                        <button
                        onClick={()=>this.props.moveToBin(x)}>
                        Restore
                        </button> 
                        <button
                        onClick={()=>this.props.deleteNote(x)}>Delete</button> 
                      </span>
                    </div>
                  </div>
                </li> 
              ))}
            </ul>
          )}
        </Fade>
      </>
    )
  }
}

export default connect((state) => ({
  bin: state.notes.bin,
}), {
  fetchBin,
  moveToBin,
  deleteNote,
})(UserBin);