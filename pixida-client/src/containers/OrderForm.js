import React, { Component } from 'react'
import { connect } from 'react-redux'

class OrderForm extends Component {

  render() {
    const { first_name, last_name, item, service } = this.props.orderFormData
    console.log(this.props.orderFormData)

    return (
      <div>
      New Order!
      <form>

        <div>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          name="first_name"
          value={first_name}
        />
        </div>

        <div>
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          name="last_name"
          value={last_name}
        />
        </div>

        <div>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          name="item"
          value={item}
        />
        </div>

        <div>
        <label htmlFor="service">Service:</label>
        <input
          type="text"
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

export default connect(mapStateToProps)(OrderForm)
