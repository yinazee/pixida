import React from 'react'
import orders from '../order-data'


const OrderCard = ({ order }) => {
  console.log({order})
  return (
    <div>
      <p>{order}</p>
    </div>
  )
}

export default OrderCard
