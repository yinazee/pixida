import React, { Component } from 'react'
import { connect } from 'react-redux'
import InProgressCard from '../components/InProgressCard'
import { getOrders } from '../actions/orders'
import './table.css'


class InProgress extends Component {

  componentDidMount() {
    // debugger
    this.props.getOrders()

  }



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
              order.status ?
              <InProgressCard key={order.id} order={order}/>
              :
              null
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


export default connect(mapStateToProps, { getOrders })(InProgress)
