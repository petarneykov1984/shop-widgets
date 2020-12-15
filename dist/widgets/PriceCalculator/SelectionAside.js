"use strict";

var _interopRequireWildcard = require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionAside = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grid = require("@rebass/grid");

var _Selection = require("../../components/Selection");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  background: #666;\n  color: #fff;\n  padding: 30px 0;\n  font-family: Mont, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PricecalculatorWrapper = _styledComponents.default.div(_templateObject());

var SelectionAside = function SelectionAside() {
  var context = (0, _react.useContext)(_index.InterfaceContext);
  return /*#__PURE__*/_react.default.createElement(PricecalculatorWrapper, null, /*#__PURE__*/_react.default.createElement(_grid.Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/_react.default.createElement(_grid.Box, null, "Selected products: ", context.selections.length), /*#__PURE__*/_react.default.createElement(_Selection.Selection, {
    selected: false,
    label: "Desktop",
    description: /*#__PURE__*/_react.default.createElement(_grid.Box, null, "Some desktop description")
  }), /*#__PURE__*/_react.default.createElement(_Selection.Selection, {
    selected: true,
    label: "Web",
    description: /*#__PURE__*/_react.default.createElement(_grid.Box, null, "Another description")
  }), /*#__PURE__*/_react.default.createElement(_grid.Box, null, "Total price: $", context.totalPrice)));
}; // export default SelectionAside;


exports.SelectionAside = SelectionAside;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93aWRnZXRzL1ByaWNlQ2FsY3VsYXRvci9TZWxlY3Rpb25Bc2lkZS50c3giXSwibmFtZXMiOlsiUHJpY2VjYWxjdWxhdG9yV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlNlbGVjdGlvbkFzaWRlIiwiY29udGV4dCIsIkludGVyZmFjZUNvbnRleHQiLCJzZWxlY3Rpb25zIiwibGVuZ3RoIiwidG90YWxQcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxzQkFBc0IsR0FBR0MsMEJBQU9DLEdBQVYsbUJBQTVCOztBQU9PLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUNsQyxNQUFNQyxPQUFPLEdBQUcsdUJBQVdDLHVCQUFYLENBQWhCO0FBQ0Esc0JBQ0UsNkJBQUMsc0JBQUQscUJBQ0UsNkJBQUMsVUFBRDtBQUFNLElBQUEsYUFBYSxFQUFDO0FBQXBCLGtCQUNFLDZCQUFDLFNBQUQsK0JBQXlCRCxPQUFPLENBQUNFLFVBQVIsQ0FBbUJDLE1BQTVDLENBREYsZUFFRSw2QkFBQyxvQkFBRDtBQUNFLElBQUEsUUFBUSxFQUFFLEtBRFo7QUFFRSxJQUFBLEtBQUssRUFBQyxTQUZSO0FBR0UsSUFBQSxXQUFXLGVBQUUsNkJBQUMsU0FBRDtBQUhmLElBRkYsZUFPRSw2QkFBQyxvQkFBRDtBQUNFLElBQUEsUUFBUSxFQUFFLElBRFo7QUFFRSxJQUFBLEtBQUssRUFBQyxLQUZSO0FBR0UsSUFBQSxXQUFXLGVBQUUsNkJBQUMsU0FBRDtBQUhmLElBUEYsZUFZRSw2QkFBQyxTQUFELDBCQUFvQkgsT0FBTyxDQUFDSSxVQUE1QixDQVpGLENBREYsQ0FERjtBQWtCRCxDQXBCTSxDLENBc0JQIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnRlcmZhY2VDb250ZXh0IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZsZXgsIEJveCB9IGZyb20gJ0ByZWJhc3MvZ3JpZCc7XG5pbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlbGVjdGlvbic7XG5pbXBvcnQgeyBmbGV4RGlyZWN0aW9uIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmNvbnN0IFByaWNlY2FsY3VsYXRvcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjNjY2O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMzBweCAwO1xuICBmb250LWZhbWlseTogTW9udCwgc2Fucy1zZXJpZjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3Rpb25Bc2lkZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoSW50ZXJmYWNlQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPFByaWNlY2FsY3VsYXRvcldyYXBwZXI+XG4gICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxCb3g+U2VsZWN0ZWQgcHJvZHVjdHM6IHtjb250ZXh0LnNlbGVjdGlvbnMubGVuZ3RofTwvQm94PlxuICAgICAgICA8U2VsZWN0aW9uXG4gICAgICAgICAgc2VsZWN0ZWQ9e2ZhbHNlfVxuICAgICAgICAgIGxhYmVsPVwiRGVza3RvcFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249ezxCb3g+U29tZSBkZXNrdG9wIGRlc2NyaXB0aW9uPC9Cb3g+fVxuICAgICAgICAvPlxuICAgICAgICA8U2VsZWN0aW9uXG4gICAgICAgICAgc2VsZWN0ZWQ9e3RydWV9XG4gICAgICAgICAgbGFiZWw9XCJXZWJcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPXs8Qm94PkFub3RoZXIgZGVzY3JpcHRpb248L0JveD59XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3g+VG90YWwgcHJpY2U6ICR7Y29udGV4dC50b3RhbFByaWNlfTwvQm94PlxuICAgICAgPC9GbGV4PlxuICAgIDwvUHJpY2VjYWxjdWxhdG9yV3JhcHBlcj5cbiAgKTtcbn07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbkFzaWRlO1xuIl19