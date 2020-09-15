import { connect } from "react-redux";
import { fetchBin } from '../actions/noteActions';
import React, { Component } from "react";
import { Fade } from "react-reveal";

class UserBin extends Component {

  componentDidMount() {
    this.props.fetchBin();
  }
  
  render() {
    return(
      <>
        <Fade cascade>
          {!this.props.bin ? (
          <div className = "bin-empty">
            Bin is empty
          </div>
          ) : (
            <ul className="notes">
              {this.props.bin.map(x => (
                <li key={x._id} className={'note-' + x.color}>
                  <div className='note-single'>
                    <a 
                    href={"/#" + x._id}
                    onClick={()=>this.openModal(x)}>
                      <div className='note-title'>
                        {x.title}
                      </div>
                      <div className='note-content'>
                        {x.short}
                      </div>
                    </a>
                    <div className='note-setting'>
                      <span className='note-detail-left'>
                        Deleted: {x.time}
                      </span>
                      <span className='note-detail-right'>
                        <button>Delete (not active atm)</button> 
                        <button>Delete (not active atm)</button> 
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
})(UserBin);