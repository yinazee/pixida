import React from 'react'
import OrderCard from './OrderCard'

function OrderShow({ order }) {
  return(
    <div>
      <OrderCard order={order}/>
      <button>Claim</button>
    </div>
  )
}

export default OrderShow
