// Sagas
import { call, put, select, takeLatest, fork, all, take } from 'redux-saga/effects';
import { delay } from 'redux-saga'
// Immutable
import { fromJS } from 'immutable';
// Reselect
import { createSelector } from 'reselect';

const appName = 'sunshine'
export const serviceName = 'clockService'

const genConstant = (name) => `${appName}/${serviceName}/${name}`


/*
 * Constants starting by "_" are also triggered server-side
 */
export const clockConstants = {
  _INIT_CLOCK: genConstant('_INIT_CLOCK'),
  TICK: genConstant('TICK')
}


export const clockActions = {
  serverRenderClock: (isServer) => {
    return {
      type: clockConstants._INIT_CLOCK,
      light: !isServer, ts: Date.now()
    }
  },
  startClock: () => {
    return {
      type: clockConstants.TICK,
      light: true, ts: Date.now()
    }
  }
}

const initialState = fromJS({
  lastUpdate: 0,
  light: false
})

export const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case clockConstants._INIT_CLOCK:
    case clockConstants.TICK:
      return state.merge({
          lastUpdate: action.ts,
          light: !!action.light,
          isServer: action.isServer
        })
    default: return state
  }
}

export const updateClockSaga = function*(action){
  while (true){
    yield delay(1000)
    yield put(clockActions.startClock())
  }
}

export const clockRootSaga = function*(){
  yield takeLatest(clockConstants.TICK, updateClockSaga)
}


const selectClock = (state) => state.get('clock')

const makeSelectLight = () => createSelector(
  selectClock,
  (clockState) => clockState.get('light')
);
const makeSelectTime = () => createSelector(
  selectClock,
  (clockState) => clockState.get('lastUpdate')
);

export const clockSelectors = {
  isLight: makeSelectLight,
  time: makeSelectTime
}

const ClockService = {
  constants: clockConstants,
  actions: clockActions,
  reducer: clockReducer,
  saga: clockRootSaga,
  selectors: clockSelectors
}

export default ClockService;