import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateOrderFormData } from '../actions/orderForm'
import { createOrder } from '../actions/orders'
import { getItems } from '../actions/items'
import { getServices } from '../actions/services'




class OrderForm extends Component {


  componentDidMount() {
    this.props.getItems()
    this.props.getServices()
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
    const { name, item, service } = this.props.orderFormData


    return (
      <section >
        <h3>Add Order to Queue</h3>
        <div className="tbl-header">
          <table>
             <thead>
               <tr>
                 <th>Name</th>
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
                  name="name"
                  value={name}>
                </input>
                </td>

                <td>
                  <select
                    onChange={this.handleOnChange}
                    name="item"
                    value={item}>
                    <option>Select an Item</option>
                    {this.props.items.map(item =>
                    <option key={item.id}>{item.name}</option>
                  )}
                  </select>
                </td>


                <td>
                  <select
                    onChange={this.handleOnChange}
                    name="service"
                    value={service}>
                  <option>Select an Item</option>
                  {this.props.services.map(service =>
                  <option key={service.id}>{service.name}</option>

                  )}
                  </select>
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
    items: state.items,
    services: state.services

  })
}

export default connect(mapStateToProps, {
  updateOrderFormData,
  createOrder,
  getItems,
  getServices
})(OrderForm)
