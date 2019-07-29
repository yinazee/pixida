import React, { Component } from 'react';
import Orders from './Orders'
// import Waiting from './Waitings'
// import Claimed from './Claimed'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      orders: []
    }
  }

componentDidMount() {
  fetch('http://localhost:3001/api/orders')
  .then(response => response.json())
  .then(orders => this.setState({ orders }))
}

  render() {
console.log(this.state)
    return (

      <div className="App">
        <img src="https://i.imgur.com/jbzs690.png" alt="pixida"/>
        <h1>PIXIDA</h1>

        <div className="App">
          <Orders orders={this.state.orders}/>

        </div>

      </div>
    )
  }
}


export default App;
