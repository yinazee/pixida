import React, { Component } from 'react'
import { connect } from 'react-redux'
import FinishedCard from '../components/FinishedCard'
import { getOrders } from '../actions/orders'
import './table.css'


class Finished extends Component {



  render() {
    return(
      <section>
        <h3>Finished</h3>
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


export default connect(mapStateToProps, { getOrders })(Finished)
// export default connect(mapStateToProps)(Claimed)
