export default (state = {
  status: false,
  customer: {
  first_name: "",
  last_name: ""
  },
  item: {
  id: "",
  },
  service: {
  id: "",
  }
}, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.orderFormData

      default:
        return state
  }
}
