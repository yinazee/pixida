const setServices = services => {
  return {
    type: 'GET_SERVICE_SUCCESS',
    services
  }
}

export function getServices() {
  return dispatch => {
    return fetch('http://localhost:3000/api/services')
      .then(response => response.json())
      .then(services => dispatch(setServices(services)))
      .catch(error => console.log(error))
  }
}
