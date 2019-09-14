import React from 'react'
import { connect } from 'react-redux'
import { finishOrder } from '../actions/orders'

// order.status is true

const InProgressCard = ({ order, finishOrder }) => {

// this function should move it to the finished component.
// if it is true, then render, if it is not, do not render

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
      <td><button className="tbl-header">{order.status ? "Finish" : "This doesn't belong here"}</button></td>
      </tr>
    </tbody>

  )
}


export default connect(null, {finishOrder})(InProgressCard)
