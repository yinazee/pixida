import React from 'react'
import { connect } from 'react-redux'
import { updateOrder } from '../actions/orders'


const OrderCard = ({ order, updateOrder }) => {

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

// const mapDispatchToProps = (state) => {
//   return({
//     orders: state.orders
//   })
// }

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  };
};


export default connect(mapStateToProps, {updateOrder})(OrderCard)
