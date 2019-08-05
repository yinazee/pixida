export default ( state = [], action ) => {
  // debugger
  console.log(action.type)
  switch(action.type) {
    case 'GET_ORDER_SUCCESS':
      return action.orders

      default:
        return state;
  }
}
