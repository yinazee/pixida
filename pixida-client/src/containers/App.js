import React, { Component } from 'react';
import Orders from './Orders'
import OrderShow from './OrderShow'
import orders from '../order-data'
import './App.css';

const APIURL = 'http://localhost:3000/'


class App extends Component {


  constructor() {
    super()
    this.state = {
      orders: {}
    }
  }

  componentDidMount() {
    // fetch("http://localhost.com/3000/api/orders")
    // .then(r => r.json())
    // .then(orders => this.setState({order: orders}))
    this.setState({ orders: orders })
}

  //
  // componentDidMount() {
  //   fetch('http://localhost:3001/api/orders')
  //   .then(response => {
  //     return response.json()
  //   }).then(orders => this.setState({ orders }))
  // }

  render() {

    // const { fetchingData } = this.state
    // console.log(fetchingData)
    return (
      <div className="App">
      <img src="https://i.imgur.com/jbzs690.png" alt="pixida"/>
      <h1>PIXIDA</h1>
       <div>
        <OrderShow order={this.state.orders(0)}/>
        <Orders orders={this.state.orders}/>
       </div>
      </div>
    )
  }
}


export default App;
