import React, { Component } from 'react';
// import Orders from './Orders'
import OrderForm from './OrderForm'
import Waiting from './Waiting'
import Claimed from './Claimed'
// import { getOrders } from '../actions/orders'
import './App.css';



class App extends Component {
  //
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     orders: []
  //   }
  // }

// componentDidMount() {
//   fetch('http://localhost:3000/api/orders')
//   .then(response => response.json())
//   .then(orders => this.setState({ orders }))
// }



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

        </div>

      </div>
    )
  }
}



// const mapStateToProps = (state) => {
//   return({
//     orders: state.orders
//   })
// }


export default App
