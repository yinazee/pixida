import React from 'react'


const OrderCard = ({ order }) => {
  // console.log({order})
  return (
    <tbody>
      <tr>
      <td>{order.customer.first_name}</td>
      <td>{order.customer.last_name}</td>
      <td>{order.item.name}</td>
      <td>{order.service.name}</td>
      <td>Claim</td>
      </tr>
    </tbody>
  )
}

export default OrderCard
