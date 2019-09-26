import React, { Component } from 'react'
import { connect } from 'react-redux'
import FinishedCard from '../components/FinishedCard'
import { getOrders } from '../actions/orders'
import './table.css'


class Finished extends Component {

  componentDidMount() {
    this.props.getOrders()
  }


  render() {
    return(
      <section>
        <h3>Finished</h3>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
             <thead>
               <tr>
                 <th>Name</th>
                 <th>Item</th>
                 <th>Service</th>
                 <th>Edit</th>
                 <th>Delete</th>
               </tr>
             </thead>
          </table>
        </div>

        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0">
            {this.props.orders.map(order =>
              order.status ?
              <FinishedCard key={order.id} order={order}/>
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


export default connect(mapStateToProps, { getOrders })(Finished)
