import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const orders = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_ORDER_SUCCESS':
      return action.order

      default:
        return state;
  }
}

const order = ordersReducer()
console.log(order)
