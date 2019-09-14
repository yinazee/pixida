import React from 'react'
import { connect } from 'react-redux'
import { updateOrder } from '../actions/orders'

// order.status is true

const InProgressCard = ({ order, updateOrder }) => {


    const handleOnClick = event => {
      console.log(event.target)
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


export default connect(null, {updateOrder})(InProgressCard)
