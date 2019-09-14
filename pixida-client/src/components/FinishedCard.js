// order.status remains true but is now in the Finished component

import React from 'react'
import { connect } from 'react-redux'

// order.status is true

const FinishedCard = ({ order }) => {

// this function should move it to the finished component.
// if it is true, then render, if it is not, do not render


  return (
    <tbody>
      <tr>
      <td>{order.customer.first_name}</td>
      <td>{order.customer.last_name}</td>
      <td>{order.item.name}</td>
      <td>{order.service.name}</td>
      <td>{order.status ? "Finished" : "Something went wrong"}</td>
      </tr>
    </tbody>

  )
}


export default FinishedCard
