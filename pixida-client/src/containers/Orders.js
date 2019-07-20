import React, { Component } from 'react'
import OrderCard from './OrderCard'
import orders from '../order-data'
import './App.css'


class Orders extends Component {


  render() {
    const orderCards = this.props.orders.map(order => <OrderCard key={order.name} order={order}/>)
    return (
    <div>
      { orderCards }
    </div>
    )
  }
}

export default Orders
