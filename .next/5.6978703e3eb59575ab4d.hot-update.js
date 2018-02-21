webpackHotUpdate(5,{

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCount = undefined;

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(398);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = __webpack_require__(404);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _nextReduxWrapper = __webpack_require__(438);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = __webpack_require__(464);

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _store = __webpack_require__(470);

var _store2 = _interopRequireDefault(_store);

var _redux = __webpack_require__(394);

var _reselect = __webpack_require__(424);

var _index = __webpack_require__(425);

var _index2 = _interopRequireDefault(_index);

var _layout = __webpack_require__(478);

var _layout2 = _interopRequireDefault(_layout);

var _clock = __webpack_require__(403);

var _clock2 = _interopRequireDefault(_clock);

var _Clock = __webpack_require__(479);

var _Clock2 = _interopRequireDefault(_Clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/dataFredsh/work/sunshine/sunshine-fe-proto/pages/index.js?entry';
// React

// Next

// Redux

// Styles


// Services
var addCount = exports.addCount = function addCount() {
  return { type: 'ADD' };
};

var IndexPage = function (_React$Component) {
  (0, _inherits3.default)(IndexPage, _React$Component);

  function IndexPage() {
    (0, _classCallCheck3.default)(this, IndexPage);

    return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timer = this.props.startClock();
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('>>>>>', this.props)
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2663562723',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '2663562723',
        css: 'div.jsx-2663562723{background-color:#00FF00;width:\'1000px\';margin:auto;}div.hello.jsx-2663562723{background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDc0IsQUFFNEIsQUFJRixxQkFBQyxJQUhULGVBQ0gsWUFBQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvZGF0YUZyZWRzaC93b3JrL3N1bnNoaW5lL3N1bnNoaW5lLWZlLXByb3RvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVhY3RcbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLy8gTmV4dFxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gUmVkdXhcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJ1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJ3N0b3JlJ1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCc7XG4vLyBTdHlsZXNcbmltcG9ydCBiYXNlU3R5bGUgZnJvbSAnc3R5bGVzL2Nzcy9pbmRleC5zY3NzJ1xuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCdcblxuLy8gU2VydmljZXNcbmltcG9ydCBDbG9ja1NlcnZpY2UgZnJvbSAnc2VydmljZXMvY2xvY2snXG5pbXBvcnQgQ2xvY2sgZnJvbSAnY29tcG9uZW50cy9DbG9jaydcblxuXG5leHBvcnQgY29uc3QgYWRkQ291bnQgPSAoKSA9PiB7XG4gIHJldHVybiB7IHR5cGU6ICdBREQnIH1cbn1cblxuXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgc3RvcmUsIGlzU2VydmVyIH0pIHtcbiAgICBzdG9yZS5kaXNwYXRjaChDbG9ja1NlcnZpY2UuYWN0aW9ucy5zZXJ2ZXJSZW5kZXJDbG9jayhpc1NlcnZlcikpXG4gICAgc3RvcmUuZGlzcGF0Y2goYWRkQ291bnQoKSlcblxuICAgIHJldHVybiB7IGlzU2VydmVyLCBvb286IWlzU2VydmVyIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGltZXIgPSB0aGlzLnByb3BzLnN0YXJ0Q2xvY2soKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCc+Pj4+PicsIHRoaXMucHJvcHMpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEZGMDA7XG4gICAgICAgICAgICB3aWR0aDogJzEwMDBweCc7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgICAgICYuaGVsbG97XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsb1wiIHN0eWxlPXt7IHdpZHRoOiA1MDAsIGhlaWdodDogMjAwIH19PlxuICAgICAgICAgICAgICBoZWxsb1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENsb2NrIGxhc3RVcGRhdGU9e3RoaXMucHJvcHMuY2xvY2tMYXN0VXBkYXRlfSBsaWdodD17dGhpcy5wcm9wcy5jbG9ja0xpZ2h0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRDb3VudDogYmluZEFjdGlvbkNyZWF0b3JzKGFkZENvdW50LCBkaXNwYXRjaCksXG4gICAgc3RhcnRDbG9jazogYmluZEFjdGlvbkNyZWF0b3JzKENsb2NrU2VydmljZS5hY3Rpb25zLnN0YXJ0Q2xvY2ssIGRpc3BhdGNoKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3Rvcih7XG4gIGNsb2NrTGFzdFVwZGF0ZTogQ2xvY2tTZXJ2aWNlLnNlbGVjdG9ycy50aW1lKCksXG4gIGNsb2NrTGlnaHQ6IENsb2NrU2VydmljZS5zZWxlY3RvcnMuaXNMaWdodCgpXG59KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29uZmlndXJlU3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShcbiAgd2l0aFJlZHV4U2FnYShJbmRleFBhZ2UpXG4pIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-2663562723' + ' ' + 'hi',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { style: { width: 500, height: 200 }, className: 'jsx-2663562723' + ' ' + 'hello',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'hello')), _react2.default.createElement(_Clock2.default, { lastUpdate: this.props.clockLastUpdate, light: this.props.clockLight, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.dispatch(_clock2.default.actions.serverRenderClock(isServer));
      store.dispatch(addCount());

      return { isServer: isServer, ooo: !isServer };
    }
  }]);

  return IndexPage;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(addCount, dispatch),
    startClock: (0, _redux.bindActionCreators)(_clock2.default.actions.startClock, dispatch)
  };
};

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  clockLastUpdate: _clock2.default.selectors.time(),
  clockLight: _clock2.default.selectors.isLight()
});

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateToProps, mapDispatchToProps)((0, _nextReduxSaga2.default)(IndexPage));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJQcm9wVHlwZXMiLCJMaW5rIiwiSGVhZCIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiLCJjb25maWd1cmVTdG9yZSIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciIsImJhc2VTdHlsZSIsIkxheW91dCIsIkNsb2NrU2VydmljZSIsIkNsb2NrIiwiYWRkQ291bnQiLCJ0eXBlIiwiSW5kZXhQYWdlIiwidGltZXIiLCJwcm9wcyIsInN0YXJ0Q2xvY2siLCJ3aWR0aCIsImhlaWdodCIsImNsb2NrTGFzdFVwZGF0ZSIsImNsb2NrTGlnaHQiLCJzdG9yZSIsImlzU2VydmVyIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwic2VydmVyUmVuZGVyQ2xvY2siLCJvb28iLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzZWxlY3RvcnMiLCJ0aW1lIiwiaXNMaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBRVQsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFHUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUdQOzs7Ozs7O0FBckJBOztBQUdBOztBQUdBOztBQU1BOzs7QUFJQTtBQUtPLElBQU0sOEJBQVcsU0FBWCxBQUFXLFdBQU0sQUFDNUI7U0FBTyxFQUFFLE1BQVQsQUFBTyxBQUFRLEFBQ2hCO0FBRk07O0lBS0QsQTs7Ozs7Ozs7Ozs7d0NBUWdCLEFBQ2xCO1dBQUEsQUFBSyxRQUFRLEtBQUEsQUFBSyxNQUFsQixBQUFhLEFBQVcsQUFDekI7Ozs7NkJBRVEsQUFDUDtBQUNBOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBO2lCQUFBO2FBQUEsQUFhRTtBQWJGLDBCQWFFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxTQUF1QixPQUFPLEVBQUUsT0FBRixBQUFTLEtBQUssUUFBNUMsQUFBOEIsQUFBc0IsMkNBQXBELEFBQWU7O29CQUFmO3NCQUFBO0FBQUE7U0FkSixBQWFFLEFBQ0UsQUFJRiwyQkFBQSxBQUFDLGlDQUFNLFlBQVksS0FBQSxBQUFLLE1BQXhCLEFBQThCLGlCQUFpQixPQUFPLEtBQUEsQUFBSyxNQUEzRCxBQUFpRTtvQkFBakU7c0JBcEJOLEFBQ0UsQUFDRSxBQWtCRSxBQUlQO0FBSk87Ozs7OzBDQWpDb0M7VUFBbkIsQUFBbUIsYUFBbkIsQUFBbUI7VUFBWixBQUFZLGdCQUFaLEFBQVksQUFDMUM7O1lBQUEsQUFBTSxTQUFTLGdCQUFBLEFBQWEsUUFBYixBQUFxQixrQkFBcEMsQUFBZSxBQUF1QyxBQUN0RDtZQUFBLEFBQU0sU0FBTixBQUFlLEFBRWY7O2FBQU8sRUFBRSxVQUFGLFVBQVksS0FBSSxDQUF2QixBQUFPLEFBQWlCLEFBQ3pCOzs7OztFQU5xQixnQixBQUFNOztBQXlDOUIsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztjQUNZLCtCQUFBLEFBQW1CLFVBRHhCLEFBQ0ssQUFBNkIsQUFDdkM7Z0JBQVksK0JBQW1CLGdCQUFBLEFBQWEsUUFBaEMsQUFBd0MsWUFGdEQsQUFBTyxBQUVPLEFBQW9ELEFBRW5FO0FBSlEsQUFDTDtBQUZKOztBQU9BLElBQU07bUJBQ2EsZ0JBQUEsQUFBYSxVQURpQixBQUM5QixBQUF1QixBQUN4QztjQUFZLGdCQUFBLEFBQWEsVUFGM0IsQUFBd0IsQUFBeUIsQUFFbkMsQUFBdUIsQUFHckM7QUFMaUQsQUFDL0MsQ0FEc0I7O2tCQUtULEFBQVUsaURBQVYsQUFBMEIsaUJBQTFCLEFBQTJDLG9CQUN4RCw2QkFERixBQUFlLEFBQ2IsQUFBYyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvZGF0YUZyZWRzaC93b3JrL3N1bnNoaW5lL3N1bnNoaW5lLWZlLXByb3RvIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/dataFredsh/work/sunshine/sunshine-fe-proto/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/dataFredsh/work/sunshine/sunshine-fe-proto/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42OTc4NzAzZTNlYjU5NTc1YWI0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTYzYzRiMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWFjdFxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vLyBOZXh0XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBSZWR1eFxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnc3RvcmUnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0Jztcbi8vIFN0eWxlc1xuaW1wb3J0IGJhc2VTdHlsZSBmcm9tICdzdHlsZXMvY3NzL2luZGV4LnNjc3MnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0J1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IENsb2NrU2VydmljZSBmcm9tICdzZXJ2aWNlcy9jbG9jaydcbmltcG9ydCBDbG9jayBmcm9tICdjb21wb25lbnRzL0Nsb2NrJ1xuXG5cbmV4cG9ydCBjb25zdCBhZGRDb3VudCA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogJ0FERCcgfVxufVxuXG5cbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyBzdG9yZSwgaXNTZXJ2ZXIgfSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKENsb2NrU2VydmljZS5hY3Rpb25zLnNlcnZlclJlbmRlckNsb2NrKGlzU2VydmVyKSlcbiAgICBzdG9yZS5kaXNwYXRjaChhZGRDb3VudCgpKVxuXG4gICAgcmV0dXJuIHsgaXNTZXJ2ZXIsIG9vbzohaXNTZXJ2ZXIgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50aW1lciA9IHRoaXMucHJvcHMuc3RhcnRDbG9jaygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJz4+Pj4+JywgdGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwRkYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwMHB4JztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAgICAgJi5oZWxsb3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbGxvXCIgc3R5bGU9e3sgd2lkdGg6IDUwMCwgaGVpZ2h0OiAyMDAgfX0+XG4gICAgICAgICAgICAgIGhlbGxvXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q2xvY2sgbGFzdFVwZGF0ZT17dGhpcy5wcm9wcy5jbG9ja0xhc3RVcGRhdGV9IGxpZ2h0PXt0aGlzLnByb3BzLmNsb2NrTGlnaHR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKSxcbiAgICBzdGFydENsb2NrOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQ2xvY2tTZXJ2aWNlLmFjdGlvbnMuc3RhcnRDbG9jaywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgY2xvY2tMYXN0VXBkYXRlOiBDbG9ja1NlcnZpY2Uuc2VsZWN0b3JzLnRpbWUoKSxcbiAgY2xvY2tMaWdodDogQ2xvY2tTZXJ2aWNlLnNlbGVjdG9ycy5pc0xpZ2h0KClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjb25maWd1cmVTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFxuICB3aXRoUmVkdXhTYWdhKEluZGV4UGFnZSlcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7O0FBdEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7OztBQWFBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFiQTtBQWFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUpBOzs7OztBQWpDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUxBO0FBQ0E7QUF3Q0E7O0FBRUE7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9