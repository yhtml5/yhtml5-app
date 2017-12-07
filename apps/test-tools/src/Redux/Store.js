import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './Reducers'
import history from './history';

/**
 * redux:
 * https://redux.js.org/
 * immutable.js:
 * https://facebook.github.io/immutable-js/
 * react-router-redux:
 * https://github.com/reactjs/react-router-redux
 * https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
 *
 */

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const Store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(historyMiddleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))


// 打印初始状态
console.log(Store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = Store.subscribe(() =>
// console.log('\nnew state',Store.getState())
// )


export default Store



