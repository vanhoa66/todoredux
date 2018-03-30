import React, { Component } from 'react';
import { connect } from 'react-redux'
import { filter, includes, orderBy as funcOrderBy } from "lodash";

import Item from "./Item"

class List extends Component {

  render() {
    let emlItem = null;
    let { items, sort, search } = this.props;
    items = filter(items, (item) => includes(item.name.toLowerCase(), search.toLowerCase()));
    items = funcOrderBy(items, [sort.orderBy], [sort.orderDir]);
    if (items.length > 0) {
      emlItem = items.map((item, index) => {
        return <Item key={index} index={index} item={item} />
      })
    } else {
      emlItem = <tr><td>No taks</td></tr>;
    }
    return (
      <div className="card">
        <div className="card-header text-white bg-success">
          <b>List Of Tasks</b>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">Level</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {emlItem}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    sort: state.sort,
    search: state.search
  }
}

export default connect(mapStateToProps, null)(List)

