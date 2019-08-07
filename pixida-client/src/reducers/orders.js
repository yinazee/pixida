export default ( state = [], action ) => {

  switch(action.type) {
    case 'GET_ORDER_SUCCESS':
      return action.orders

      default:
        return state;
  }
}
