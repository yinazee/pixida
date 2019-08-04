import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const ordersReducer = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_ORDER_SUCCESS':
      return action.orders

      default:
        return state;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  orders: ordersReducer
})

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
