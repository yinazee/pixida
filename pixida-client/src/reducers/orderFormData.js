
let initialState = {
    status: false,
    firstName: "",
    lastName: "",
    item: "",
    service: "",
}


export default (state = initialState, action) => {

console.log(action.orderFormData)
// debugger
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.orderFormData

      default:
        return state
  }
}
