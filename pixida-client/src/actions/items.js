const setItems = items => {
  return {
    type: 'GET_ITEM_SUCCESS',
    items
  }
}

export function getItems() {
  return dispatch => {
    return fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(items => dispatch(setItems(items)))
      .catch(error => console.log(error))
  }
}
