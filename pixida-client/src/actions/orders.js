import { resetOrderForm }  from './orderForm'

const setOrders = orders => {
  return {
    type: 'GET_ORDER_SUCCESS',
    orders
  }
}

export const addOrder = order => {
  console.log("success:", order)

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



export const getOrders = () => {
  return dispatch => {
    return fetch('http://localhost:3000/orders')
      .then(response => response.json())
      .then(orders => dispatch(setOrders(orders)))
      .catch(error => console.log(error))
  }
}

export const updateOrderStore = (order) => {
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
        dispatch(updateOrderStore(order))
      )

  }
}


export const finishOrder = (order) => {
  return {
    type: 'FINISH_ORDER_SUCCESS',
    order
  }
}

export const createOrder = (order) => {
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
        alert(`${order.customer.name}'s order has been added to the queue!`)
      }
    })
  }
}

export const deleteOrder = (orderId) => {
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

        }
      })
      .catch(console.log)

  }

}
