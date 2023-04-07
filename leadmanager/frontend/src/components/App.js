import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';

import { Provider } from 'react-redux';
import store from '../store';

// Alert options
// const options = {
//   timeout: 3000,
//   position: positions.TOP_CENTER,
//   transition: transitions.SCALE
// }

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <Fragment>
          <Header />

          <div className="container">
          <Dashboard />
          </div>
        </Fragment>

      </Provider>

    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
