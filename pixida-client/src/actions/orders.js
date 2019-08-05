

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
