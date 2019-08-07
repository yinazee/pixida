export default (state = {
  first_name: "",
  last_name: "",
  item: "",
  service: "",
  status: false
}, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.orderFormData

      default:
        return state
  }
}
