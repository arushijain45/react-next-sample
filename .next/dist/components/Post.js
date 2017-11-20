"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/pw/Documents/ReactJs/v3/next-dni/components/Post.js";


var Post = function (_React$Component) {
  (0, _inherits3.default)(Post, _React$Component);

  function Post() {
    (0, _classCallCheck3.default)(this, Post);

    return (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).apply(this, arguments));
  }

  (0, _createClass3.default)(Post, [{
    key: "render",
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement("div", {
        className: "jsx-3944101572" + " " + "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement("img", { src: data.thumbnailUrl, alt: data.description, className: "jsx-3944101572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }), _react2.default.createElement("scan", {
        className: "jsx-3944101572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, data.description), _react2.default.createElement(_style2.default, {
        styleId: "3944101572",
        css: "img.jsx-3944101572{width:200px;height:200px;border-radius:3px;}scan.jsx-3944101572{text-decoration:none;color:#747474;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRb0IsQUFHeUIsQUFNUyxZQUxSLFNBTUMsSUFMSSxVQU1wQixRQUxBIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wdy9Eb2N1bWVudHMvUmVhY3RKcy92My9uZXh0LWRuaSIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgUG9zdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxpbWcgc3JjPXtkYXRhLnRodW1ibmFpbFVybH0gYWx0PXtkYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8c2Nhbj57ZGF0YS5kZXNjcmlwdGlvbn08L3NjYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzY2FuIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNzQ3NDc0O1xuICAgICAgICAgIH1cbiAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=components/Post.js */"
      }));
    }
  }]);

  return Post;
}(_react2.default.Component);

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJQb3N0IiwiZGF0YSIsInByb3BzIiwidGh1bWJuYWlsVXJsIiwiZGVzY3JpcHRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ00sQTs7Ozs7Ozs7Ozs7NkJBQ0s7VUFBQSxBQUNDLE9BQVMsS0FEVixBQUNlLE1BRGYsQUFDQyxBQUNSOzs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEseUNBQ08sS0FBSyxLQUFWLEFBQWUsY0FBYyxLQUFLLEtBQWxDLEFBQXVDLHdCQUF2Qzs7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FGRixBQUVFLEFBQVk7aUJBRmQ7YUFERixBQUNFLEFBaUJIO0FBakJHOzs7OztFQUphLGdCQUFNLEEsQUF3QnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBvc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcHcvRG9jdW1lbnRzL1JlYWN0SnMvdjMvbmV4dC1kbmkifQ==