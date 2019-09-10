export default (state = {
  status: false,
  customer: {
    first_name: "",
    last_name: ""
  },
  item: {
    name: "",
  },
  service: {
    name: "",
  }
}, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.orderFormData

      default:
        return state
  }
}
