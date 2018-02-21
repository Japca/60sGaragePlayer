'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _trackList = require('./trackList.css');

var _trackList2 = _interopRequireDefault(_trackList);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackList = function (_Component) {
    _inherits(TrackList, _Component);

    function TrackList(props) {
        _classCallCheck(this, TrackList);

        var _this = _possibleConstructorReturn(this, (TrackList.__proto__ || Object.getPrototypeOf(TrackList)).call(this, props));

        _this.state = {
            data: []
        };
        return _this;
    }

    _createClass(TrackList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _axios2.default.get('/metaData').then(function (response) {
                _this2.setState({ data: response.data });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var data = this.state.data;
            var id = 0;
            return _react2.default.createElement(
                'div',
                { styleName: 'container' },
                data.map(function (track) {
                    return _react2.default.createElement(
                        'div',
                        { styleName: 'track', key: ++id },
                        _react2.default.createElement(
                            'span',
                            { className: 'play' },
                            _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right fa-3x', 'aria-hidden': 'true' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            _react2.default.createElement(
                                'p',
                                null,
                                track.title,
                                ' (',
                                track.year,
                                ')'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                track.artist
                            )
                        )
                    );
                })
            );
        }
    }]);

    return TrackList;
}(_react.Component);

exports.default = (0, _reactCssModules2.default)(TrackList, _trackList2.default);