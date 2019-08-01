import React, { Component } from 'react'
import './table.css'


class Waiting extends Component {

  render() {

    return(
      <section>

        <h3>Customers Waiting</h3>

        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
             <thead>
               <tr>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Item</th>
                 <th>Service</th>
                 <th>Status</th>
               </tr>
             </thead>
          </table>
        </div>

        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0">
            {this.props.orders.map(order =>
              <tbody key={order.id}>
                <tr>
                <td>{order.customer.first_name}</td>
                <td>{order.customer.last_name}</td>
                <td>{order.item.name}</td>
                <td>{order.service.name}</td>
                <td>{order.status}</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>

      </section>
    )

  }
}


export default Waiting
