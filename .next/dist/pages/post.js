'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Post = require('../components/Post');

var _Post2 = _interopRequireDefault(_Post);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pw/Documents/ReactJs/v3/next-dni/pages/post.js?entry',
    _this2 = undefined;

var Post = function (_React$Component) {
  (0, _inherits3.default)(Post, _React$Component);

  function Post() {
    (0, _classCallCheck3.default)(this, Post);

    return (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).apply(this, arguments));
  }

  (0, _createClass3.default)(Post, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, this.props.post && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, this.props.post.description), _react2.default.createElement('meta', { name: 'description', content: this.props.post.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('meta', { name: 'image', content: this.props.post.thumbnailUrl, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('meta', { name: 'og:title', content: this.props.post.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('meta', { name: 'og:description', content: this.props.post.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('meta', { name: 'og:image', content: this.props.post.thumbnailUrl, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('meta', { name: 'twitter:title', content: this.props.post.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('meta', { name: 'twitter:description', content: this.props.post.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('meta', { name: 'twitter:image', content: this.props.post.thumbnailUrl, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement(_Post2.default, { data: this.props.post, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })));
    }
  }]);

  return Post;
}(_react2.default.Component);

exports.default = Post;


Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, json;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('http://dnitestapp-env.us-west-2.elasticbeanstalk.com/api/feeds/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;

            console.log("Data fetched" + (0, _stringify2.default)(json));
            return _context.abrupt('return', { post: json });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this2);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiUG9zdExheW91dCIsImZldGNoIiwiSGVhZCIsIlBvc3QiLCJwcm9wcyIsInBvc3QiLCJkZXNjcmlwdGlvbiIsInRodW1ibmFpbFVybCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImlkIiwicXVlcnkiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVjLEE7Ozs7Ozs7Ozs7OzZCQUNULEFBQ1I7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxPQUNHLEFBQUssTUFBTCxBQUFXLHdCQUNWLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUTtBQUFSO0FBQUEsY0FBUSxBQUFLLE1BQUwsQUFBVyxLQURyQixBQUNFLEFBQXdCLEFBQ3hCLHNEQUFNLE1BQU4sQUFBVyxlQUFjLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUE3QyxBQUFrRDtvQkFBbEQ7c0JBRkYsQUFFRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQXZDLEFBQTRDO29CQUE1QztzQkFIRixBQUdFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBMUMsQUFBK0M7b0JBQS9DO3NCQUpGLEFBSUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxrQkFBaUIsU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQWhELEFBQXFEO29CQUFyRDtzQkFMRixBQUtFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBMUMsQUFBK0M7b0JBQS9DO3NCQU5GLEFBTUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxnQkFBZSxTQUExQixBQUFrQztvQkFBbEM7c0JBUEYsQUFPRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLGlCQUFnQixTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBL0MsQUFBb0Q7b0JBQXBEO3NCQVJGLEFBUUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyx1QkFBc0IsU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQXJELEFBQTBEO29CQUExRDtzQkFURixBQVNFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsaUJBQWdCLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUEvQyxBQUFvRDtvQkFBcEQ7c0JBWEosQUFDRSxBQVVFLEFBRUY7QUFGRTsyQkFFRixBQUFDLGdDQUFXLE1BQU0sS0FBQSxBQUFLLE1BQXZCLEFBQTZCO29CQUE3QjtzQkFoQlIsQUFDRSxBQUVJLEFBYUUsQUFLVDtBQUxTOzs7Ozs7RUFsQnNCLGdCQUFNLEE7O2tCQUFuQixBOzs7QUEwQnJCLEtBQUEsQUFBSyw4QkFBTDtzRkFBdUIsaUJBQUEsQUFBTyxTQUFQO2lCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQ2Q7QUFEYyxpQkFDUixRQURRLEFBQ0EsTUFEQSxBQUNkOzRCQURjO21CQUVILHFHQUZHLEFBRUgsQUFBd0U7O2VBQXBGO0FBRmUsMkJBQUE7NEJBQUE7bUJBR0YsSUFIRSxBQUdGLEFBQUk7O2VBQWpCO0FBSGUsNEJBSXJCOztvQkFBQSxBQUFRLElBQUksaUJBQWUseUJBSk4sQUFJckIsQUFBMkIsQUFBZTs2Q0FDbkMsRUFBRSxNQUxZLEFBS2QsQUFBUTs7ZUFMTTtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXZCOzt1QkFBQTs0QkFBQTtBQUFBIiwiZmlsZSI6InBvc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcHcvRG9jdW1lbnRzL1JlYWN0SnMvdjMvbmV4dC1kbmkifQ==