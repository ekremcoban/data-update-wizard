import React, { Component } from 'react';
import classes from './App.scss';
import Main from './modules/main/main';

class App extends Component {

  render() {
    return (
      <div className={classes.container}>
          <Main/>
      </div>
    );
  }
}

export default App;
