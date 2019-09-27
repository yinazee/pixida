import React from 'react'
import { connect } from 'react-redux'
import { finishOrder } from '../actions/orders'
import { deleteOrder } from '../actions/orders'


const FinishedCard = ({ order, finishOrder, deleteOrder }) => {

  const handleOnDelete = event => {
    console.log(order.id)
    deleteOrder(order.id)
  }

  return (
    <tbody>
      <tr>
      <td>{order.customer.name}</td>
      <td>{order.item.name}</td>
      <td>{order.service.name}</td>
      <td><button className="tbl-header">Edit</button></td>
      <td><button className="tbl-header" onClick={handleOnDelete}>Delete</button></td>
      </tr>
    </tbody>

  )
}


export default connect(null, {finishOrder, deleteOrder})(FinishedCard)
