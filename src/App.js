import QueueAnim from 'rc-queue-anim';
import React, { Component } from 'react';
import classes from './App.scss';
import Select from "./modules/select/select";
import { BrowserRouter } from "react-router-dom";
import sutasLogo from "./assets/sutaslogo.png";



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <QueueAnim duration="2000" type="scale">
          <div key="1" className={classes.container}>
            <div key="2" className={classes.sutas}>
              <img src={sutasLogo}/>
          </div>
            <Select />
          </div>
        </QueueAnim>
      </BrowserRouter>
    );
  }
}

export default App;
