import React, { Component } from 'react';

import Title from "./Title"
import Search from "./Search"
import Sort from "./Sort"
import ToggleForm from "./ToggleForm"
import Form from "./Form"
import List from "./List"

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="row">
          <Search />
          <Sort />
          <ToggleForm />
        </div>
        <Form />
        <List />
      </div >
    );
  }
}

export default App;
