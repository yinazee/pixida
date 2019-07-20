import React from 'react'

const OrderCard = ({ order }) => {
  return (
    <div>
      <p>{order.customer_id}</p>
    </div>
  )
}

export default OrderCard
