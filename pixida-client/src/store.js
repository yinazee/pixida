import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import orders from './reducers/orders'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  orders: orders
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()(applyMiddleware(thunk))

)
