import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateOrderFormData } from '../actions/orderForm'

class OrderForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentOrderFormData = Object.assign({}, this.props.orderFormData, {
      [name]: value
    })
    this.props.updateOrderFormData(currentOrderFormData)
  }

  render() {
    const { first_name, last_name, item, service } = this.props.orderFormData
    // console.log(this.props.orderFormData)

    return (

      <div>
      New Order!
      <form>


        <div>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          onChange={this.handleOnChange}
          name="first_name"
          value={first_name}
        />
        </div>

        <div>
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          onChange={this.handleOnChange}
          name="last_name"
          value={last_name}
        />
        </div>

        <div>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          onChange={this.handleOnChange}
          name="item"
          value={item}
        />
        </div>

        <div>
        <label htmlFor="service">Service:</label>
        <input
          type="text"
          onChange={this.handleOnChange}
          name="service"
          value={service}
        />
        </div>

      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orderFormData: state.orderFormData
  }
}

export default connect(mapStateToProps, {updateOrderFormData})(OrderForm)
