import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateOrderFormData } from '../actions/orderForm'
import { createOrder } from '../actions/orders'
import ItemInput from '../components/ItemInput'
import { getItems } from '../actions/items'
import ServiceInput from '../components/ServiceInput'


class OrderForm extends Component {

  componentDidMount() {
    // debugger
    this.props.getItems()
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentOrderFormData = Object.assign({}, this.props.orderFormData, {
      [name]: value
    })
    this.props.updateOrderFormData(currentOrderFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createOrder(this.props.orderFormData)
  }


  render() {
    const { first_name, last_name, item, service } = this.props.orderFormData
    // const items = this.props.getItems
    console.log(this.props.items)

    return (
      <section >
        <h3>Add Order to Queue</h3>
        <div className="tbl-header">
          <table>
             <thead>
               <tr>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Item</th>
                 <th>Service</th>
               </tr>
             </thead>
          </table>
        </div>

        <form onSubmit={this.handleOnSubmit}>
          <div className="neworder-tbl">
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              <tr>
                <td>
                <input
                  type="text"
                  onChange={this.handleOnChange}
                  name="first_name"
                  value={first_name}>
                </input>
                </td>

                <td>
                <input
                  type="text"
                  onChange={this.handleOnChange}
                  name="last_name"
                  value={last_name}>
                </input>
                </td>

                <td>
                {this.props.items.map(item =>
                  <ItemInput key={item.id} item={item}/>
                )}
                </td>

                <td>
                  <ServiceInput/>
                </td>

              </tr>
            </tbody>
          </table>
          </div>
          <button className="tbl-header" type="submit">Add Order</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    orderFormData: state.orderFormData,
    items: state.items
  })
}



export default connect(mapStateToProps, {
  updateOrderFormData,
  createOrder,
  getItems
})(OrderForm)
