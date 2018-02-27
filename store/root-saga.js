// redux-saga
import { call, put, select, takeLatest, fork, all, take } from 'redux-saga/effects';
import { delay } from 'redux-saga'

// Application sagas
import { clockRootSaga } from 'services/clock'

/*
 * We merge all application sagas in a single root saga that is loaded by the store
 */
const rootSaga = function*(){
  yield all([
    fork(clockRootSaga)
  ])
}

export default clockRootSaga;