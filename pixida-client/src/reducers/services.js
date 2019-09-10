export default ( state = [], action ) => {

  switch(action.type) {
    case 'GET_SERVICE_SUCCESS':
      return action.services

      default:
        return state;
  }
}
