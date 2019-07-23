import React, { Component } from 'react'
import OrderCard from './OrderCard'
import './table.css'

class Waiting extends Component {
  render() {
    const orderCards = this.props.orders.map(order => <OrderCard key={order.name} order={order}/>)
    return (
      <div>
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
                <td>AAC</td>
                <td>AUSTRALIAN COMPANY </td>
                <td>$1.38</td>
                <td>+2.01</td>
                <td>-0.36%</td>
              </tr>
              <tr>
                <td>AAD</td>
                <td>AUSENCO</td>
                <td>$2.38</td>
                <td>-0.01</td>
                <td>-1.36%</td>
              </tr>
              <tr>
                <td>AAD</td>
                <td>AUSENCO</td>
                <td>$2.38</td>
                <td>-0.01</td>
                <td>-1.36%</td>
              </tr>

            </tbody>
          </table>
      </div>

      </div>
    )
  }
}


export default Waiting
