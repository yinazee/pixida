import React, { Component } from 'react';
import OrderForm from './OrderForm'
import Queue from './Queue'
import Finished from './Finished'

import './App.css';



class App extends Component {

  render() {
    // debugger
    console.log(this.state)
    return (

      <div className="App">
        <img src="https://i.imgur.com/jbzs690.png" alt="pixida"/>
        <h1>PIXIDA</h1>

        <div className="App">

          <OrderForm />
          <Queue />
          <Finished />

        </div>

      </div>
    )
  }
}


export default App
