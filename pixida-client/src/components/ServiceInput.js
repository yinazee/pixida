import React from 'react'
import { connect } from 'react-redux'

class ServiceInput extends React.Component {

  render() {

    return (
      <div>
        <select>
          <option>select a service</option>
          <option>Steam Cleaning</option>
          <option>Polishing</option>
        </select>
      </div>
    )
  }

}

export default connect(null)(ServiceInput)
