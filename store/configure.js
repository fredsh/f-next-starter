import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import rootSaga from './root-saga'

import Immutable, {isImmutable, fromJS} from 'immutable';

const sagaMiddleware = createSagaMiddleware()

function configureStore(initialState) {

  const composeEnhancers =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        serialize: {
          immutable: Immutable
        }
      }) : compose;

  const middlewares = [
    sagaMiddleware
  ];

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  );
  //const store = createStore(reducer, enhancer);

  /*
   * When store state is sent to client, it is converted to normal JS object
   * Therefore, it needs to be converted back to Immutable on initial load
   */
  const storeInitialState = isImmutable(initialState) ? initialState : fromJS(initialState)

  const store = createStore(
    rootReducer,
    storeInitialState,
    enhancer
  )

  /**
   * next-redux-saga depends on `runSagaTask` and `sagaTask` being attached to the store.
   * 
   *   `runSagaTask` is used to rerun the rootSaga on the client when in sync mode (default)
   *   `sagaTask` is used to await the rootSaga task before sending results to the client
   *   
   */




  store.runSagaTask = () => {
    console.log('runSagaTask')
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  // run the rootSaga initially
  store.runSagaTask()
  return store
}

export default configureStore