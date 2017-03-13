'use strict';

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

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clock = function (_React$Component) {
    (0, _inherits3.default)(Clock, _React$Component);

    function Clock(props) {
        (0, _classCallCheck3.default)(this, Clock);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Clock.__proto__ || (0, _getPrototypeOf2.default)(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    (0, _createClass3.default)(Clock, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'hello world!'
                ),
                _react2.default.createElement(
                    'h2',
                    null,
                    'this is ',
                    this.state.date.toLocatTimeString()
                )
            );
        }
    }]);
    return Clock;
}(_react2.default.Component);

Renderdom.render(_react2.default.createElement(Clock, null), document.getElementById('root'));
