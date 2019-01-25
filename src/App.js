import React, { Component } from 'react';
import classes from './App.scss';
import Select from "./modules/select/select";
import { BrowserRouter } from "react-router-dom";




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.container}>
          <Select />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
