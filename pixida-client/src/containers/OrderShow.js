import React from 'react'
import orders from '../order-data' 

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
