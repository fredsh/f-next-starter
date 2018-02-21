'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

var _reduxSaga = require('redux-saga');

var _clock = require('./services/clock');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * We merge all application sagas in a single root saga that is loaded by the store
 */
var rootSaga = /*#__PURE__*/_regenerator2.default.mark(function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(_clock.clockRootSaga)]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, rootSaga, this);
});

// Application sagas

// redux-saga
exports.default = rootSaga;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3Qtc2FnYS5qcyJdLCJuYW1lcyI6WyJjYWxsIiwicHV0Iiwic2VsZWN0IiwidGFrZUxhdGVzdCIsImZvcmsiLCJhbGwiLCJ0YWtlIiwiZGVsYXkiLCJjbG9ja1Jvb3RTYWdhIiwicm9vdFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxBQUFTLEFBQU0sQUFBSyxBQUFRLEFBQVksQUFBTSxBQUFLOztBQUNuRCxBQUFTOztBQUdULEFBQVM7Ozs7QUFFVDs7O0FBR0EsSUFBTSxtREFBVyxTQUFYLEFBQVcsV0FBQTtpRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ1Qsa0JBQUksQ0FESyxBQUNULEFBQUksQUFDUixBQUFLOzthQUZRO2FBQUE7MEJBQUE7O0FBQUE7S0FBWCxBQUFXLFVBQUE7QUFBakIsQUFBTSxBQU1OOztBQVpBOztBQUpBO2tCQWdCQSxBQUFlIiwiZmlsZSI6InJvb3Qtc2FnYS5qcyIsInNvdXJjZVJvb3QiOiIvZGF0YUZyZWRzaC93b3JrL3N1bnNoaW5lL3N1bnNoaW5lLWZlLXByb3RvIn0=