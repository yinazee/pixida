import React, { Component } from 'react'
import { connect } from 'react-redux'
import QueueCard from '../components/QueueCard'
import { getOrders } from '../actions/orders'
import './table.css'


class Queue extends Component {
// order.status are false
  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    return(
      <section>
        <h3>Customers Queue</h3>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
             <thead>
               <tr>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Item</th>
                 <th>Service</th>
                 <th>Edit</th>
                 <th>Delete</th>
                 <th>Status</th>
               </tr>
             </thead>
          </table>
        </div>

        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0">
          {this.props.orders.map(order =>
            order.status === true ?
            null
            :
            <QueueCard key={order.id} order={order}/>

          )}
          </table>
        </div>

      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    orders: state.orders
  })
}


export default connect(mapStateToProps, { getOrders })(Queue)
