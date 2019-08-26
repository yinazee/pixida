const setItems = items => {
  return {
    type: 'GET_ITEM_SUCCESS',
    items
  }
}

export function getItems() {
  return dispatch => {
    return fetch('http://localhost:3000/api/orders')
      .then(response => response.json())
      .then(items => dispatch(setItems(items)))
      .catch(error => console.log(error))
  }
}



const setOrders = orders => {
  return {
    type: 'GET_ORDER_SUCCESS',
    orders
  }
}

export function getOrders() {
  return dispatch => {
    return fetch('http://localhost:3000/api/orders')
      .then(response => response.json())
      .then(orders => dispatch(setOrders(orders)))
      .catch(error => console.log(error))
  }
}

export function createOrder(order) {
  return dispatch => {
    return fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order: order })
      })
      .then(response => response.json())
      .then(order => {debugger})
      .catch(error => console.log(error))
  }
}
