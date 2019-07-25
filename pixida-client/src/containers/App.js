import React, { Component } from 'react';
import Orders from './Orders'
import OrderShow from './OrderShow'
import OrderCard from './OrderCard'
import Waiting from './Waiting'
import Claimed from './Claimed'
import './App.css';

const APIURL = 'http://localhost:3000/'



class App extends Component {


  constructor() {
    super()
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/orders')
    .then(response => {
      return response.json()
    }).then(orders => this.setState({ orders }))
  }

  render() {

    return (

      <div class="App">
        <img src="https://i.imgur.com/jbzs690.png" alt="pixida"/>
        <h1>PIXIDA</h1>

      <div class="App">
      {this.state.orders.length === 0 ?
        "LOL"  :
        <OrderShow order={this.state.orders[0]}/>}
        <Orders orders={this.state.orders}/>
        <Waiting />
        <Claimed />
        </div>

      </div>
    )
  }
}


export default App;
