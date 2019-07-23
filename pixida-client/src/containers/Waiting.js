import React, { Component } from 'react'
import OrderCard from './OrderCard'
import './table.css'

class Waiting extends Component {
  render() {
    return (
    // const orderCards = this.props.orders.map(order => <OrderCard order={order}/>)
      <div class="container">
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <td><strong>First Name</strong></td>
              <td><strong>Last Name</strong></td>
              <td><strong>Item</strong></td>
              <td><strong>Service</strong></td>
              <td><strong>Claim</strong></td>
            </tr>
          </thead>
        </table>
      </div>

      <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td>order.customer.first_name</td>
                <td>order.customer.last_name</td>
                <td>order.item</td>
                <td>order.service</td>
                <td>order.status</td>
              </tr>
              <tr>
                <td>Scott</td>
                <td>Yu</td>
                <td>Watch</td>
                <td>Battery</td>
                <td>Claim</td>
              </tr>
              <tr>
                <td>Luca</td>
                <td>Rose</td>
                <td>Ring</td>
                <td>Steam Clean</td>
                <td>Claim</td>
              </tr>

            </tbody>
          </table>
      </div>

      </div>
    )
  }
}


export default Waiting
