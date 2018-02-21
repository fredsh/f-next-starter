'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('../../styles/css/index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/dataFredsh/work/sunshine/sunshine-fe-proto/components/layout/index.js';
// React

// Next

// Styles


var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      var page = this.props.children;

      return _react2.default.createElement('div', { id: 'app', className: 'layout', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('meta', { charSet: 'UTF-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.props.title || 'Sunshine Project'), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('script', { src: 'https://cdn.polyfill.io/v2/polyfill.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement(_react2.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: '802346411',
        css: 'div.jsx-802346411{background-color:green;width:1200px;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCb0IsQUFFMEIsdUJBQ1YsYUFDRCxZQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9kYXRhRnJlZHNoL3dvcmsvc3Vuc2hpbmUvc3Vuc2hpbmUtZmUtcHJvdG8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWFjdFxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vLyBOZXh0XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBTdHlsZXNcbmltcG9ydCBiYXNlU3R5bGUgZnJvbSAnc3R5bGVzL2Nzcy9pbmRleC5zY3NzJ1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW46cGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiYXBwXCIgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgICAgIDx0aXRsZT57dGhpcy5wcm9wcy50aXRsZSB8fCAnU3Vuc2hpbmUgUHJvamVjdCd9PC90aXRsZT5cbiAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGJhc2VTdHlsZX19Lz5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLnBvbHlmaWxsLmlvL3YyL3BvbHlmaWxsLm1pbi5qc1wiLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qLmhlbGxve1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkXG4gICAgICAgICAgfSovXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgd2l0aExlZnRCYXI6IFByb3BUeXBlcy5ib29sLFxuICB3aXRoUmlnaHRCYXI6IFByb3BUeXBlcy5ib29sLFxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=components/layout/index.js */'
      }), _react2.default.createElement('div', {
        className: 'jsx-802346411',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, page)));
    }
  }]);

  return Layout;
}(_react2.default.Component);

Layout.propTypes = {
  fullWidth: _propTypes2.default.bool,
  withLeftBar: _propTypes2.default.bool,
  withRightBar: _propTypes2.default.bool
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hpbGRyZW4iLCJQcm9wVHlwZXMiLCJMaW5rIiwiSGVhZCIsImJhc2VTdHlsZSIsIkxheW91dCIsInBhZ2UiLCJwcm9wcyIsImNoaWxkcmVuIiwidGl0bGUiLCJfX2h0bWwiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJmdWxsV2lkdGgiLCJib29sIiwid2l0aExlZnRCYXIiLCJ3aXRoUmlnaHRCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPOzs7Ozs7O0FBUFA7O0FBR0E7O0FBR0E7OztJLEFBR007Ozs7Ozs7Ozs7OzZCQUNLO1VBQUEsQUFFSSxPQUNQLEtBSEcsQUFHRSxNQUhGLEFBRUwsQUFFRjs7NkJBQ0UsY0FBQSxTQUFLLElBQUwsQUFBUSxPQUFNLFdBQWQsQUFBd0I7b0JBQXhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLFNBQU4sQUFBYztvQkFBZDtzQkFERixBQUNFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBRkYsQUFFRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUTtBQUFSO0FBQUEsY0FBUSxBQUFLLE1BQUwsQUFBVyxTQUhyQixBQUdFLEFBQTRCLEFBQzVCLDhEQUFPLHlCQUF5QixFQUFoQyxBQUFnQyxBQUFDLEFBQVE7b0JBQXpDO3NCQUpGLEFBSUUsQUFDQTtBQURBO29EQUNRLEtBQVIsQUFBWTtvQkFBWjtzQkFOSixBQUNFLEFBS0UsQUFFRjtBQUZFOzJCQUVELGNBQUQsZ0JBQUEsQUFBTzs7b0JBQVA7c0JBQUE7QUFBQTtBQUFBO2lCQUFBO2FBQUEsQUFXRTtBQVhGLDBCQVdFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0M7QUFERDtBQUFBLFNBcEJOLEFBQ0UsQUFRRSxBQVdFLEFBTVA7Ozs7O0VBL0JrQixnQixBQUFNOztBQWtDM0IsT0FBQSxBQUFPO2FBQ00sb0JBRE0sQUFDSSxBQUNyQjtlQUFhLG9CQUZJLEFBRU0sQUFDdkI7Z0JBQWMsb0JBSGhCLEFBQW1CLEFBR08sQUFHMUI7QUFObUIsQUFDakI7O2tCQUtGLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2RhdGFGcmVkc2gvd29yay9zdW5zaGluZS9zdW5zaGluZS1mZS1wcm90byJ9