import { resetOrderForm }  from './orderForm'

const setOrders = orders => {
  return {
    type: 'GET_ORDER_SUCCESS',
    orders
  }
}

export const addOrder = order => {
  console.log("success:", order)
  // debugger

  let newOrder = {
        status: order.status,

        customer: {
          name: order.customer.name
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



export const deleteOrderSuccess = orderId => {
  console.log("here", orderId)
  return {
    type: "DELETE_ORDER",
    orderId
  }
}



export function getOrders() {
  return dispatch => {
    return fetch('http://localhost:3000/orders')
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
    return fetch(`http://localhost:3000/orders/${order.id}`, {
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
    return fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order: order })
      })
      .then(response => response.json())
      .then(order => {

      if (order.error) {
        alert(order.error)
      }else {
        dispatch(addOrder(order))
        dispatch(resetOrderForm())
        alert("New Order added to Queue!")
      }
    })
  }
}

export function deleteOrder(orderId) {
  console.log("im inside deleteOrder action", orderId)

  return dispatch => {
    return fetch(`http://localhost:3000/orders/${orderId}`, {

      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteOrderSuccess(orderId))

          // history.push(`/orders`)
          // go somewhere else --> trip show?
          // add the new trip to the store
        }
      })
      .catch(console.log)

  }

}
