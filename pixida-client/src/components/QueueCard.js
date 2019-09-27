import React from 'react'
import { connect } from 'react-redux'
import { updateOrder, deleteOrder } from '../actions/orders'



const QueueCard = ({ order, updateOrder, deleteOrder }) => {


    const handleOnClick = event => {
      let status = order.status
      order.status = !status
      updateOrder(order)
    }

    const handleOnDelete = event => {
      console.log(order.id)
      deleteOrder(order.id)
    }

  return (
      <tbody key={order.id}>
          <tr>
          <td>{order.customer.name}</td>
          <td>{order.item.name}</td>
          <td>{order.service.name}</td>
          <td><button className="tbl-header">Edit</button></td>
          <td><button className="tbl-header" onClick={handleOnDelete}>Delete</button></td>
          <td><button className="tbl-header" onClick={handleOnClick}>{order.status ? "Finish" : "Claim"}</button></td>
          </tr>
      </tbody>

  )
}


export default connect(null, {deleteOrder, updateOrder})(QueueCard)
