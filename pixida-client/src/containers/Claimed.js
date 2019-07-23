import React, { Component } from 'react'
import OrderCard from './OrderCard'
import './table.css'

class Claimed extends Component {
  render() {
    // const orderCards = this.props.orders.map(order => <OrderCard order={order}/>)
    return (

      <div class="container">
      <div class="tbl-header">
        <h1>claim component</h1>
        <table cellpadding="0" cellspacing="0" border="0">

          <thead>
            <tr>
              <td><strong>First Name</strong></td>
              <td><strong>Last Name</strong></td>
              <td><strong>Item</strong></td>
              <td><strong>Service</strong></td>
              <td><strong>Status</strong></td>
            </tr>
          </thead>
        </table>
      </div>

      <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td>Maggie</td>
                <td>Price</td>
                <td>Bracelet</td>
                <td>Engraving</td>
                <td>Finish</td>
              </tr>
              <tr>
                <td>Scott</td>
                <td>Yu</td>
                <td>Watch</td>
                <td>Battery</td>
                <td>Finish</td>
              </tr>
              <tr>
                <td>Luca</td>
                <td>Rose</td>
                <td>Ring</td>
                <td>Steam Clean</td>
                <td>Finish</td>
              </tr>

            </tbody>
          </table>
      </div>

      </div>
    )
  }
}


export default Claimed
