import React from 'react'


const OrderCard = ({ order }) => {
  console.log({order})
      // const orderCards = this.props.orders.map(order => <OrderCard order={order}/>)
  return (
    <div>
      <p>{order}</p>
    </div>
  )
}

export default OrderCard
