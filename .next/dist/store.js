'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _rootReducer = require('./root-reducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _rootSaga = require('./root-saga');

var _rootSaga2 = _interopRequireDefault(_rootSaga);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();

function configureStore(initialState) {

  var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    serialize: {
      immutable: _immutable2.default
    }
  }) : _redux.compose;

  var middlewares = [sagaMiddleware];

  var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares)
  // other store enhancers if any
  );
  //const store = createStore(reducer, enhancer);

  /*
   * When store state is sent to client, it is converted to normal JS object
   * Therefore, it needs to be converted back to Immutable on initial load
   */
  var storeInitialState = (0, _immutable.isImmutable)(initialState) ? initialState : (0, _immutable.fromJS)(initialState);

  var store = (0, _redux.createStore)(_rootReducer2.default, storeInitialState, enhancer);

  /**
   * next-redux-saga depends on `runSagaTask` and `sagaTask` being attached to the store.
   * 
   *   `runSagaTask` is used to rerun the rootSaga on the client when in sync mode (default)
   *   `sagaTask` is used to await the rootSaga task before sending results to the client
   *   
   */

  store.runSagaTask = function () {
    store.sagaTask = sagaMiddleware.run(_rootSaga2.default);
  };

  // run the rootSaga initially
  store.runSagaTask();
  return store;
}

exports.default = configureStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwicm9vdFJlZHVjZXIiLCJyb290U2FnYSIsIkltbXV0YWJsZSIsImlzSW1tdXRhYmxlIiwiZnJvbUpTIiwic2FnYU1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJzZXJpYWxpemUiLCJpbW11dGFibGUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwic3RvcmVJbml0aWFsU3RhdGUiLCJzdG9yZSIsInJ1blNhZ2FUYXNrIiwic2FnYVRhc2siLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQWEsQUFBaUI7O0FBQ3ZDLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU8sQUFBWSxBQUFhOzs7Ozs7QUFFaEMsSUFBTSxpQkFBTixBQUF1Qjs7QUFFdkIsU0FBQSxBQUFTLGVBQVQsQUFBd0IsY0FBYyxBQUVwQzs7TUFBTSwyQkFDSixBQUFPLDZEQUFQLEFBQU8sYUFBUCxBQUFrQixZQUNoQixPQURGLEFBQ1MsOENBQ1AsQUFBTztBQUVMOztBQUxOLEFBQ0UsQUFFRSxBQUE0QyxBQUUvQixBQUNFLEFBRVYsQUFFVDtBQUxpQixBQUNUO0FBSHdDLEFBQzFDLEdBREYsQ0FGRjs7TUFTSSxjQUFjLENBQXBCLEFBQW9CLEFBQ2xCLEFBR0Y7O01BQU0sNEJBQ0osd0NBQUEsQUFBbUIsQUFDbkI7QUFGRixBQUFpQixBQUlqQjtBQUppQjtBQU1qQjs7QUFJQTs7OztNQUFNLG9CQUFvQiw0QkFBQSxBQUFZLGdCQUFaLEFBQTRCLGVBQWUsdUJBQXJFLEFBQXFFLEFBQU8sQUFFNUU7O01BQU0sUUFBUSxBQUNaLCtDQURZLEFBRVosbUJBRkYsQUFBYyxBQUdaLEFBR0Y7O0FBV0E7Ozs7Ozs7O1FBQUEsQUFBTSxjQUFjLFlBQU0sQUFDeEI7VUFBQSxBQUFNLFdBQVcsZUFBakIsQUFBaUIsQUFBZSxBQUFJLEFBQ3JDO0FBRkQsQUFJQTs7QUFDQTtRQUFBLEFBQU0sQUFDTjtTQUFBLEFBQU8sQUFDUjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9kYXRhRnJlZHNoL3dvcmsvc3Vuc2hpbmUvc3Vuc2hpbmUtZmUtcHJvdG8ifQ==