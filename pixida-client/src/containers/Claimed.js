import React from 'react'
import './table.css'


const Claimed = (props) => (

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
        {props.orders.map(order =>
          <tbody key={order.id}>
            <tr>
            <td>{order.customer.first_name}</td>
            <td>{order.customer.last_name}</td>
            <td>{order.item.name}</td>
            <td>{order.service.name}</td>
            <td>Finish</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>

  </section>
)


export default Claimed
