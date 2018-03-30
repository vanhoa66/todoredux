import React, { Component } from 'react';

import { connect } from 'react-redux'
import { sortItem } from './../actions'

class Sort extends Component {

    handleSort(orderBy, orderDir) {
        this.props.sortItem(orderBy, orderDir);
    }

    render() {
        let { orderBy, orderDir } = this.props.sort;
        let elmSort =  orderBy + " - " + orderDir;
        return (
            <div className="col-3">
                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by
          </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a onClick={() => this.handleSort("name", "asc")} className="dropdown-item" role="button">Name Asc</a>
                        <a onClick={() => this.handleSort("name", "desc")} className="dropdown-item" role="button">Name Desc</a>
                        <a onClick={() => this.handleSort("level", "asc")} className="dropdown-item" role="button">Level Asc</a>
                        <a onClick={() => this.handleSort("level", "desc")} className="dropdown-item" role="button">Level Desc</a>
                    </div>
                    <button className="btn btn-primary">{elmSort.toUpperCase()}</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sortItem: (orderBy, orderDir) => {
            dispatch((sortItem(orderBy, orderDir)))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)

