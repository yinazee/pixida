export default ( state = [], action ) => {

  switch(action.type) {

    case 'GET_ORDER_SUCCESS':
      return action.orders
      //
      // case 'DELETE_ORDER':
      //   const orders = state.order.filter ( order => order.id !== order.id)
      //   return { ...state, orders}

      case 'UPDATE_ORDER':
        return state.map(order => order.id === action.order.id ? action.order : order) 

      default:
        return state
  }
}
