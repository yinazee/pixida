import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderCard from '../components/OrderCard'
import { getOrders } from '../actions/orders'
import './table.css'


class Claimed extends Component {

  componentDidMount() {
    // this.props.dispatch({
    //   type: "GET_ORDER_SUCCESS",
    //   orders: [ {customer: {
    //               first_name: "Sophie",
    //               last_name: "Rhinestone"
    //               },
    //               item: {
    //               name: "Blanket"
    //               },
    //               service: {
    //               name: "Emboss"
    //               }} ]
    //           })
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
              <OrderCard key={order.id} order={order}/>
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


export default connect(mapStateToProps, { getOrders })(Claimed)
// export default connect(mapStateToProps)(Claimed)
