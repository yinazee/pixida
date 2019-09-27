let initialState = {
    status: false,
    name: "",
    item: "",
    service: "",
}


export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.orderFormData


      case 'RESET_NEW_ORDER_FORM':
        return initialState

      default:
        return state
  }
}
