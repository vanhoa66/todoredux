import React, { Component } from 'react';
import { connect } from 'react-redux'

import { toggleForm } from './../actions'

class ToggleForm extends Component {

  handleToggle = () => {
    this.props.toggleForm();
  }
  render() {
    let emlToggle = "Open Form";
    let btnClass = "btn-primary";
    if(this.props.isShow) {
    emlToggle = "Close Form";
    btnClass = "btn-success";
    }
    return (
      <div className="col-6">
        <button onClick = {this.handleToggle} type="button" className={`btn ${btnClass} btn-block`}>{emlToggle}</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isShow: state.isShow,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleForm: () => {
      dispatch((toggleForm()))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToggleForm)

