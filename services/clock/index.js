// Sagas
import { call, put, select, takeLatest, fork, all, take, cancel } from 'redux-saga/effects';
import { delay, eventChannel, END } from 'redux-saga'
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
  TICK: genConstant('TICK'),
  UPDATE: genConstant('UPDATE'),
  STOP: genConstant('STOP')
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
  },
  updateClock: () => {
    return {
      type: clockConstants.UPDATE,
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
    case clockConstants.UPDATE:
      return state.merge({
          lastUpdate: action.ts,
          light: !!action.light,
          isServer: action.isServer
        })
    default: return state
  }
}

export const updateClockSaga = function*(action){
  try {
    while (true){
      yield delay(800)
      yield put(clockActions.updateClock())
    }
  }
  finally {
    console.log('out')
  }
}

export const clockRootSaga = function*(){
  try {
    while (true) {
      yield take(clockConstants.TICK)
      const clockUpdater = yield fork(updateClockSaga)
      /*
       * use maybe to stop saga either on STOP or END (for changing page)
       */
      yield take.maybe(clockConstants.STOP)
      yield cancel(clockUpdater)
    }  
  }
  finally{
  }
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
  // saga: updateClockSaga,
  saga: clockRootSaga,
  selectors: clockSelectors
}
export default ClockService;