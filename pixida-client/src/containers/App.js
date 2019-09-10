import React, { Component } from 'react';
// import Orders from './Orders'
import OrderForm from './OrderForm'
import Waiting from './Waiting'
import Claimed from './Claimed'
import Finished from './Finished'
// import { getOrders } from '../actions/orders'
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
          <Waiting />
          <Claimed />
          <Finished />

        </div>

      </div>
    )
  }
}


export default App
