import React, { Component } from 'react';

import { connect } from 'react-redux'
import { searchItem } from './../actions'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ search: e.target.value });
  }
  handleSearch = (search) => {
    this.props.searchItem(search);
    this.setState({ search: ""});
  }
  render() {
    let {search} =this.state;
    return (
      <div className="col-3">
        <div className="input-group mb-3">
          <input type="text"
            value={search} onChange={this.handleChange}
            className="form-control"
            placeholder="Search for ..."
          />
          <div className="input-group-append">
            <button onClick={() => this.handleSearch(search)} className="btn btn-primary" type="button">Search</button>
            <button onClick={() => this.handleSearch("")} className="btn btn-warning" type="button">Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchItem: (search) => {
      dispatch((searchItem(search)))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)

