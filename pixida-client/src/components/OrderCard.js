import React from 'react'
import { connect } from 'react-redux'
import { updateOrder } from '../actions/orders'


const OrderCard = ({ order }) => {

    const handleOnClick = event => {
      console.log(order.status)
      let status = order.status
      order.status = !status
      updateOrder(order)
    }

  return (
    <tbody>
      <tr>
      <td>{order.customer.first_name}</td>
      <td>{order.customer.last_name}</td>
      <td>{order.item.name}</td>
      <td>{order.service.name}</td>
      <td><button className="tbl-header" onClick={handleOnClick}>{order.status ? "Finish" : "Claim"}</button></td>
      </tr>
    </tbody>

  )
}

export default OrderCard
