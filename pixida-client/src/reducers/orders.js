

export default ( state = [], action ) => {

  switch(action.type) {

    case 'GET_ORDER_SUCCESS':
      return action.orders

      case 'UPDATE_ORDER':
        return state.map(order => order.id === action.order.id ? action.order : order) 

      case 'ADD_ORDER':
      // console.log("reducer", action.newOrder)
        return state = [...state, action.newOrder]


        case "DELETE_ORDER":
          console.log("reducer", action)
              return state.filter(order => order.id === action.orderId ? false : true)
      //
      // case 'DELETE_ORDER':
      //   // const orders = state.order.filter ( order => order.id !== order.id)
      //   // return { ...state, orders}
      //   return state.filter(order => order.id === action.OrderId ? false : true)


      default:
        return state
  }
}
