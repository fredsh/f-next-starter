'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxImmutable = require('redux-immutable');

var _clock = require('./services/clock');

/*
 *  /!\ combineReducers need to be swapped if using or not Immutable
 */
// import { combineReducers } from 'redux'
var rootReducer = (0, _reduxImmutable.combineReducers)({
  clock: _clock.clockReducer
});

exports.default = rootReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QtcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbWJpbmVSZWR1Y2VycyIsImNsb2NrUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiY2xvY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVMsQUFBYTs7QUFNdEIsQUFBUzs7QUFJVCxBQUFTOztBQVJUOzs7QUFHQTtBQU9BLElBQU07QUFBTixBQUFvQixBQUFnQixBQUMzQixBQUdUO0FBSm9DLEFBQ2xDLENBRGtCOztrQkFJcEIsQUFBZSIsImZpbGUiOiJyb290LXJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL2RhdGFGcmVkc2gvd29yay9zdW5zaGluZS9zdW5zaGluZS1mZS1wcm90byJ9