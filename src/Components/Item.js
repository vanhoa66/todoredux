import React, { Component } from 'react';
import { connect } from 'react-redux'

import { openForm, closeForm, deleteTodo, itemSelected, itemUnSelected } from './../actions'

class Item extends Component {

  handleEdit = (item) => {
    this.props.editItem(item);
  }

  handleDelete = (id) => {
    this.props.deleteItem(id);
    this.props.itemUnSelected();
  }

  render() {
    let { item, index } = this.props;
    let elmLevel = <button type="button" className="btn btn-info">Easy</button>;
    if (item.level === 1) {
      elmLevel = <button type="button" className="btn btn-success">Medium</button>
    } else if (item.level === 2) {
      elmLevel = <button type="button" className="btn btn-danger">Hard</button>
    }
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{elmLevel}</td>
        <td>
          <button onClick={() => this.handleEdit(item)} type="button" className="btn btn-dark">Edit</button>
          <button onClick={() => window.confirm("Delete it") ? this.handleDelete(item.id) : null} type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editItem: (item) => {
      dispatch((itemSelected(item)));
      dispatch((openForm()))
    },

    deleteItem: (id) => {
      dispatch((deleteTodo(id)));
      dispatch((closeForm()))
    },
    itemUnSelected: () => {
      dispatch((itemUnSelected()))
    }
  }
}

export default connect(null, mapDispatchToProps)(Item)
