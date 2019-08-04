import React, { Component } from 'react'
import OrderCard from '../components/OrderCard'
import './table.css'


class Waiting extends Component {

  render() {
    return(
      <section>

        <h3>Customers Claimed</h3>

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
              <OrderCard key={order.id} order={order}/>
            )}
          </table>
        </div>

      </section>
    )
  }

}





export default Waiting
