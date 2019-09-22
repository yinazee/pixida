import React, { Component } from 'react';
import OrderFormCard from '../components/OrderFormCard'
import Queue from './Queue'
import Finished from './Finished'
// import { Route, Switch, withRouter } from 'react-router-dom'

import './App.css';



class App extends Component {

  render() {

    return (

      <div className="App">
        <img src="https://i.imgur.com/jbzs690.png" alt="pixida"/>
        <h1>PIXIDA</h1>

        <div className="App">
          <OrderFormCard />
          <Queue />
          <Finished />
        </div>

      </div>
    )
  }
}


export default App
