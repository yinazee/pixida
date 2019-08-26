import React from 'react'
import { connect } from 'react-redux'

class ItemInput extends React.Component {

  render() {

    return (
      <div>
        <select>
          <option>select an item</option>
          <option>Watch</option>
          <option>Ring</option>
        </select>

      </div>
    )
  }
}

export default connect(null)(ItemInput)
