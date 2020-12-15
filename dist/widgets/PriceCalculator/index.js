"use strict";

var _interopRequireDefault = require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriceCalculator = exports.InterfaceContext = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _SelectionAside = require("./SelectionAside");

var InterfaceContext = /*#__PURE__*/_react.default.createContext({
  selections: [],
  totalPrice: 0,
  onSelectionUpdate: function onSelectionUpdate() {}
});

exports.InterfaceContext = InterfaceContext;

var PriceCalculator = function PriceCalculator(props) {
  var selections = props.selections;
  return /*#__PURE__*/_react.default.createElement(InterfaceContext.Provider, {
    value: {
      selections: (0, _toConsumableArray2.default)(selections),
      totalPrice: 0,
      onSelectionUpdate: function onSelectionUpdate() {
        console.log('onSelUpd');
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_SelectionAside.SelectionAside, null));
};

exports.PriceCalculator = PriceCalculator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93aWRnZXRzL1ByaWNlQ2FsY3VsYXRvci9pbmRleC50c3giXSwibmFtZXMiOlsiSW50ZXJmYWNlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInNlbGVjdGlvbnMiLCJ0b3RhbFByaWNlIiwib25TZWxlY3Rpb25VcGRhdGUiLCJQcmljZUNhbGN1bGF0b3IiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRU8sSUFBTUEsZ0JBQWdCLGdCQUFHQyxlQUFNQyxhQUFOLENBQW9CO0FBQ2xEQyxFQUFBQSxVQUFVLEVBQUUsRUFEc0M7QUFFbERDLEVBQUFBLFVBQVUsRUFBRSxDQUZzQztBQUdsREMsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQU0sQ0FBRTtBQUh1QixDQUFwQixDQUF6Qjs7OztBQVVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBLE1BQ3ZDSixVQUR1QyxHQUN4QkksS0FEd0IsQ0FDdkNKLFVBRHVDO0FBRS9DLHNCQUNFLDZCQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQ0UsSUFBQSxLQUFLLEVBQUU7QUFDTEEsTUFBQUEsVUFBVSxtQ0FBTUEsVUFBTixDQURMO0FBRUxDLE1BQUFBLFVBQVUsRUFBRSxDQUZQO0FBR0xDLE1BQUFBLGlCQUFpQixFQUFFLDZCQUFNO0FBQ3ZCRyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0Q7QUFMSTtBQURULGtCQVNFLDZCQUFDLDhCQUFELE9BVEYsQ0FERjtBQWFELENBZk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0aW9uQXNpZGUgfSBmcm9tICcuL1NlbGVjdGlvbkFzaWRlJztcblxuZXhwb3J0IGNvbnN0IEludGVyZmFjZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgc2VsZWN0aW9uczogW10sXG4gIHRvdGFsUHJpY2U6IDAsXG4gIG9uU2VsZWN0aW9uVXBkYXRlOiAoKSA9PiB7fSxcbn0pO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZWxlY3Rpb25zOiBbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFByaWNlQ2FsY3VsYXRvciA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZWxlY3Rpb25zIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8SW50ZXJmYWNlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc2VsZWN0aW9uczogWy4uLnNlbGVjdGlvbnNdLFxuICAgICAgICB0b3RhbFByaWNlOiAwLFxuICAgICAgICBvblNlbGVjdGlvblVwZGF0ZTogKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdvblNlbFVwZCcpO1xuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8U2VsZWN0aW9uQXNpZGUgLz5cbiAgICA8L0ludGVyZmFjZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl19