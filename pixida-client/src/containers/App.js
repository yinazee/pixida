import React, { Component } from 'react';
// import Orders from './Orders'
import OrderForm from './OrderForm'
import Waiting from './Waiting'
import Claimed from './Claimed'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      orders: []
    }
  }

componentDidMount() {
  fetch('http://localhost:3000/api/orders')
  .then(response => response.json())
  .then(orders => this.setState({ orders }))
}

  render() {
    // debugger
    console.log(this.state)
    return (

      <div className="App">
        <img src="https://i.imgur.com/jbzs690.png" alt="pixida"/>
        <h1>PIXIDA</h1>

        <div className="App">
          <OrderForm />
          <Waiting orders={this.state.orders}/>
          <Claimed orders={this.state.orders}/>

        </div>

      </div>
    )
  }
}


export default App;
