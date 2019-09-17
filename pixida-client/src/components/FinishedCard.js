import React from 'react'
import { connect } from 'react-redux'
import { finishOrder } from '../actions/orders'


const FinishedCard = ({ order, finishOrder }) => {



  const handleOnClick = event => {
    console.log(event.target)
    let status = order.status
    if (order.status = true)
      finishOrder(order)
    else {
      alert("Order hasn't been claimed yet!")
    }
  }

  return (
    <tbody>
      <tr>
      <td>{order.customer.first_name}</td>
      <td>{order.customer.last_name}</td>
      <td>{order.item.name}</td>
      <td>{order.service.name}</td>
      <td><button className="tbl-header">Edit</button></td>
      <td><button className="tbl-header">Delete</button></td>
      </tr>
    </tbody>

  )
}


export default connect(null, {finishOrder})(FinishedCard)
