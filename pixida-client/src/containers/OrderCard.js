import React from 'react'


const OrderCard = ({ order }) => {
  console.log({order})
  return (
    <div>
      <p>{order.customer_id}</p>
    </div>
  )
}

export default OrderCard
