

const setOrders = orders => {
  return {
    type: 'GET_ORDER_SUCCESS',
    orders
  }
}

export const addOrder = order => {
  console.log("success:", order)
  debugger
  let newOrder = {
        status: order.status,

        customer: {
          firstName: order.customer.first_name,
          lastName: order.customer.last_name
        },
        item: {
          name: order.item.name
        },
        service: {
          name: order.service.name
        }

  }
  return {
    type: "ADD_ORDER",
    newOrder
  }
}

export const resetOrderForm = () => {
  return {
    type: "RESET_NEW_ORDER_FORM",
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
      // .then(order => {
      //   console.log("new_order", order.data)
      //   debugger
      //   dispatch(addOrder(order.data))
      //   dispatch(resetOrderForm())
      //      }
      //  )
      .then(order => {

      if (order.error) {
        alert(order.error)
      }else {
        dispatch(addOrder(order))
        dispatch(resetOrderForm())

      }
    })
  }
}
