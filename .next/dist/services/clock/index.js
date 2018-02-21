'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clockSelectors = exports.clockRootSaga = exports.updateClockSaga = exports.clockReducer = exports.clockActions = exports.clockConstants = exports.serviceName = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

var _reduxSaga = require('redux-saga');

var _immutable = require('immutable');

var _reselect = require('reselect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Immutable

// Sagas
var appName = 'sunshine';
// Reselect
var serviceName = exports.serviceName = 'clockService';

var genConstant = function genConstant(name) {
  return appName + '/' + serviceName + '/' + name;
};

/*
 * Constants starting by "_" are also triggered server-side
 */
var clockConstants = exports.clockConstants = {
  _INIT_CLOCK: genConstant('_INIT_CLOCK'),
  TICK: genConstant('TICK')
};

var clockActions = exports.clockActions = {
  serverRenderClock: function serverRenderClock(isServer) {
    return {
      type: clockConstants._INIT_CLOCK,
      light: !isServer, ts: Date.now()
    };
  },
  startClock: function startClock() {
    return {
      type: clockConstants.TICK,
      light: true, ts: Date.now()
    };
  }
};

var initialState = (0, _immutable.fromJS)({
  lastUpdate: 0,
  light: false
});

var clockReducer = exports.clockReducer = function clockReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case clockConstants._INIT_CLOCK:
    case clockConstants.TICK:
      return state.merge({
        lastUpdate: action.ts,
        light: !!action.light,
        isServer: action.isServer
      });
    default:
      return state;
  }
};

var updateClockSaga = /*#__PURE__*/exports.updateClockSaga = _regenerator2.default.mark(function updateClockSaga(action) {
  return _regenerator2.default.wrap(function updateClockSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!true) {
            _context.next = 7;
            break;
          }

          _context.next = 3;
          return (0, _reduxSaga.delay)(1000);

        case 3:
          _context.next = 5;
          return (0, _effects.put)(clockActions.startClock());

        case 5:
          _context.next = 0;
          break;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, updateClockSaga, this);
});

var clockRootSaga = /*#__PURE__*/exports.clockRootSaga = _regenerator2.default.mark(function clockRootSaga() {
  return _regenerator2.default.wrap(function clockRootSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(clockConstants.TICK, updateClockSaga);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, clockRootSaga, this);
});

var selectClock = function selectClock(state) {
  return state.get('clock');
};

var makeSelectLight = function makeSelectLight() {
  return (0, _reselect.createSelector)(selectClock, function (clockState) {
    return clockState.get('light');
  });
};
var makeSelectTime = function makeSelectTime() {
  return (0, _reselect.createSelector)(selectClock, function (clockState) {
    return clockState.get('lastUpdate');
  });
};

var clockSelectors = exports.clockSelectors = {
  isLight: makeSelectLight,
  time: makeSelectTime
};

var ClockService = {
  constants: clockConstants,
  actions: clockActions,
  reducer: clockReducer,
  saga: clockRootSaga,
  selectors: clockSelectors
};

exports.default = ClockService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Nsb2NrL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbGwiLCJwdXQiLCJzZWxlY3QiLCJ0YWtlTGF0ZXN0IiwiZm9yayIsImFsbCIsInRha2UiLCJkZWxheSIsImZyb21KUyIsImNyZWF0ZVNlbGVjdG9yIiwiYXBwTmFtZSIsInNlcnZpY2VOYW1lIiwiZ2VuQ29uc3RhbnQiLCJuYW1lIiwiY2xvY2tDb25zdGFudHMiLCJfSU5JVF9DTE9DSyIsIlRJQ0siLCJjbG9ja0FjdGlvbnMiLCJzZXJ2ZXJSZW5kZXJDbG9jayIsImlzU2VydmVyIiwidHlwZSIsImxpZ2h0IiwidHMiLCJEYXRlIiwibm93Iiwic3RhcnRDbG9jayIsImluaXRpYWxTdGF0ZSIsImxhc3RVcGRhdGUiLCJjbG9ja1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm1lcmdlIiwidXBkYXRlQ2xvY2tTYWdhIiwiY2xvY2tSb290U2FnYSIsInNlbGVjdENsb2NrIiwiZ2V0IiwibWFrZVNlbGVjdExpZ2h0IiwiY2xvY2tTdGF0ZSIsIm1ha2VTZWxlY3RUaW1lIiwiY2xvY2tTZWxlY3RvcnMiLCJpc0xpZ2h0IiwidGltZSIsIkNsb2NrU2VydmljZSIsImNvbnN0YW50cyIsImFjdGlvbnMiLCJyZWR1Y2VyIiwic2FnYSIsInNlbGVjdG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxBQUFTLEFBQU0sQUFBSyxBQUFRLEFBQVksQUFBTSxBQUFLOztBQUNuRCxBQUFTOztBQUVULEFBQVM7O0FBRVQsQUFBUzs7OztBQUhUOztBQUhBO0FBUUEsSUFBTSxVQUFOLEFBQWdCLEFBQ2hCO0FBSkE7QUFJTyxJQUFNLG9DQUFOLEFBQW9COztBQUUzQixJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxNQUFEO1NBQUEsQUFBYSxnQkFBYixBQUF3QixvQkFBeEIsQUFBdUM7QUFBM0Q7O0FBR0EsQUFHQTs7O0FBQU8sSUFBTTtlQUNFLFlBRGUsQUFDZixBQUFZLEFBQ3pCO1FBQU0sWUFGRCxBQUF1QixBQUV0QixBQUFZLEFBSXBCO0FBTjhCLEFBQzVCOztBQUtLLElBQU07cUJBQ1EsMkJBQUEsQUFBQyxVQUFhLEFBQy9COztZQUNRLGVBREQsQUFDZ0IsQUFDckI7YUFBTyxDQUZGLEFBRUcsVUFBVSxJQUFJLEtBRnhCLEFBQU8sQUFFaUIsQUFBSyxBQUU5QjtBQUpRLEFBQ0w7QUFIc0IsQUFPMUI7Y0FBWSxzQkFBTSxBQUNoQjs7WUFDUSxlQURELEFBQ2dCLEFBQ3JCO2FBRkssQUFFRSxNQUFNLElBQUksS0FGbkIsQUFBTyxBQUVZLEFBQUssQUFFekI7QUFKUSxBQUNMO0FBVEMsQUFBcUI7QUFBQSxBQUMxQjs7QUFjRixJQUFNO2NBQXNCLEFBQ2QsQUFDWjtTQUZGLEFBQXFCLEFBQU8sQUFFbkIsQUFHVDtBQUw0QixBQUMxQixDQURtQjs7QUFLZCxJQUFNLHNDQUFlLFNBQWYsQUFBZSxlQUFrQztNQUFqQyxBQUFpQyw0RUFBekIsQUFBeUI7TUFBWCxBQUFXLG1CQUM1RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFLLGVBQUwsQUFBb0IsQUFDcEI7U0FBSyxlQUFMLEFBQW9CLEFBQ2xCO21CQUFPLEFBQU07b0JBQ0csT0FERyxBQUNJLEFBQ25CO2VBQU8sQ0FBQyxDQUFDLE9BRk0sQUFFQyxBQUNoQjtrQkFBVSxPQUhkLEFBQU8sQUFBWSxBQUdFLEFBRXZCO0FBTHFCLEFBQ2YsT0FERztBQUtBO2FBUlgsQUFRVyxBQUFPLEFBRW5COztBQVhNLEFBYVA7O0FBQU8sSUFBTSxvRkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBVSxRQUFWO3dFQUFBO2NBQUE7dUNBQUE7YUFBQTtlQUFBLEFBQ3RCLE1BRHNCOzRCQUFBO0FBQUE7QUFBQTs7MEJBQUE7aUJBRXJCLHNCQUZxQixBQUVyQixBQUFNOzthQUZlOzBCQUFBO2lCQUdyQixrQkFBSSxhQUhpQixBQUdyQixBQUFJLEFBQWE7O2FBSEk7MEJBQUE7QUFBQTs7YUFBQTthQUFBOzBCQUFBOztBQUFBO0tBQWxCLEFBQWtCLGlCQUFBO0FBQXhCLEFBQU0sQUFPYjs7QUFBTyxJQUFNLGdGQUFnQixTQUFoQixBQUFnQixnQkFBQTt1RUFBQTtjQUFBO3lDQUFBO2FBQUE7MkJBQUE7aUJBQ3JCLHlCQUFXLGVBQVgsQUFBMEIsTUFETCxBQUNyQixBQUFnQzs7YUFEWDthQUFBOzJCQUFBOztBQUFBO0tBQWhCLEFBQWdCLGVBQUE7QUFBdEIsQUFBTTs7QUFLYixJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxPQUFEO1NBQVcsTUFBQSxBQUFNLElBQWpCLEFBQVcsQUFBVTtBQUF6Qzs7QUFFQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixrQkFBQTt1Q0FBTSxBQUM1QixhQUNBLFVBQUEsQUFBQyxZQUFEO1dBQWdCLFdBQUEsQUFBVyxJQUEzQixBQUFnQixBQUFlO0FBRlQsQUFBTSxHQUFBO0FBQTlCO0FBSUEsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIsaUJBQUE7dUNBQU0sQUFDM0IsYUFDQSxVQUFBLEFBQUMsWUFBRDtXQUFnQixXQUFBLEFBQVcsSUFBM0IsQUFBZ0IsQUFBZTtBQUZWLEFBQU0sR0FBQTtBQUE3QixBQUtBOztBQUFPLElBQU07V0FBaUIsQUFDbkIsQUFDVDtRQUZLLEFBQXVCLEFBRXRCO0FBRnNCLEFBQzVCOztBQUlGLElBQU07YUFBZSxBQUNSLEFBQ1g7V0FGbUIsQUFFVixBQUNUO1dBSG1CLEFBR1YsQUFDVDtRQUptQixBQUliLEFBQ047YUFMRixBQUFxQixBQUtSLEFBR2I7QUFScUIsQUFDbkI7O2tCQU9GLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2RhdGFGcmVkc2gvd29yay9zdW5zaGluZS9zdW5zaGluZS1mZS1wcm90byJ9