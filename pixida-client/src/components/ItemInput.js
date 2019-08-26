import React from 'react'


const ItemInput = ({ item }) => {
  console.log({item})
      return (
        <div>
          <select>
            <option>{item.name}</option>
          </select>
        </div>
      )
}

export default ItemInput
