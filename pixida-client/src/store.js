import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import orders from './reducers/orders'
import items from './reducers/items'
import services from './reducers/services'
import orderFormData from './reducers/orderFormData'

const enhancer = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const reducers = combineReducers({
  orders,
  items,
  services,
  orderFormData
})

const store = createStore(
  reducers, enhancer
);


export default store
