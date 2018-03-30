import React, { Component } from 'react';

import { connect } from 'react-redux'
import { addTodo, closeForm, itemUnSelected } from './../actions'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      level: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let { itemSelected } = nextProps;
    if (itemSelected !== null) {
      this.setState({
        id: itemSelected.id,
        name: itemSelected.name,
        level: itemSelected.level
      })
    }
  }

  handleCancel = () => {
    this.props.closeForm();
    this.props.itemUnSelected();
  }

  handleSubmit = (event) => {
    let item = {
      id: this.state.id,
      name: this.state.name,
      level: this.state.level
    }
    this.props.addTodo(item);
    this.props.itemUnSelected();
    this.props.closeForm();
    event.preventDefault();

    this.setState({
      id: "",
      name: "",
      level: 0,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    if (!this.props.isShow) return null;
    return (
      <div className="row">
        <div className="offset-6 col-6 ">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-row">
                <div className="form-group col-12">
                  <input name="name" type="text"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    className="form-control mb-2" id="inlineFormInput"
                    placeholder="Task Name" />
                </div>
              </div>
              <div className="form-group col-3">
                <select name="level"
                  value={this.state.level}
                  onChange={this.handleInputChange}
                  className="form-control" id="sel1">
                  <option value={0}>Easy</option>
                  <option value={1}>Medium</option>
                  <option value={2}>Hard</option>
                </select>
              </div>
              <div className="form-group col-4">
                <button type="submit" className="btn btn-danger">Submit</button>
                <button onClick={this.handleCancel} type="button" className="btn btn-info">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isShow: state.isShow,
    itemSelected: state.itemSelected
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (item) => {
      dispatch((addTodo(item)))
    },
    closeForm: () => {
      dispatch((closeForm()))
    },
    itemUnSelected: () => {
      dispatch((itemUnSelected()))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
