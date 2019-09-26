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

      default:
        return state
  }
}
