

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

export function updateOrderStore(order) {
  return {
    type: "UPDATE_ORDER",
    order
  }
}

export function updateOrder(order) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/orders/${order.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ order: order })
    })
      .then(response => response.json())
      .then(order =>
        // console.log(order)
        dispatch(updateOrderStore(order))
      )
      // .catch(error => console.log(error))

  }
}
//
//
export function finishOrder(order) {
  return {
    type: 'FINISH_ORDER_SUCCESS',
    order
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
