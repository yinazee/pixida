export default ( state = [], action ) => {

  switch(action.type) {
    case 'GET_ITEM_SUCCESS':
      return action.items

      default:
        return state;
  }
}
