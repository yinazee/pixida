import React from 'react'
import { connect } from 'react-redux'
import { updateOrder } from '../actions/orders'


const QueueCard = ({ order, updateOrder }) => {


    const handleOnClick = event => {

      let status = order.status
      order.status = !status
      updateOrder(order)
    }

  return (

    <tbody key={order.id}>
      <tr>
      <td>{order.customer.first_name}</td>
      <td>{order.customer.last_name}</td>
      <td>{order.item.name}</td>
      <td>{order.service.name}</td>
      <td><button className="tbl-header">Edit</button></td>
      <td><button className="tbl-header">Delete</button></td>
      <td><button className="tbl-header" onClick={handleOnClick}>{order.status ? "Finish" : "Claim"}</button></td>
      </tr>
    </tbody>

  )
}


export default connect(null, {updateOrder})(QueueCard)
