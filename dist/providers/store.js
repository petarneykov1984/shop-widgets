"use strict";

var _interopRequireWildcard = require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreProvider = exports.store = void 0;

var _objectSpread2 = _interopRequireDefault(require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _types = require("./types");

// import { filterProducts, transform } from '../services/products';
var initialState = {
  selections: [],
  totalPrice: 0,
  onSelectionUpdate: function onSelectionUpdate() {}
};
var store = /*#__PURE__*/(0, _react.createContext)({});
exports.store = store;
var Provider = store.Provider;

var StoreProvider = function StoreProvider(_ref) {
  var children = _ref.children,
      products = _ref.products;

  var _useReducer = (0, _react.useReducer)(function (state, action) {
    switch (action.type) {
      case _types.UPDATE_SELECTION:
        var payload = action.payload;
        console.log('UPDATE_SELECTION action triggered', products, payload);
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
          products: products
        });

      default:
        throw new Error();
    }

    ;
  }, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, initialState), {}, {
    products: products
  })),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return /*#__PURE__*/_react.default.createElement(Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};

exports.StoreProvider = StoreProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm92aWRlcnMvc3RvcmUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInNlbGVjdGlvbnMiLCJ0b3RhbFByaWNlIiwib25TZWxlY3Rpb25VcGRhdGUiLCJzdG9yZSIsIlByb3ZpZGVyIiwiU3RvcmVQcm92aWRlciIsImNoaWxkcmVuIiwicHJvZHVjdHMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJVUERBVEVfU0VMRUNUSU9OIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFEQTtBQVFBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsVUFBVSxFQUFFLEVBRE87QUFFbkJDLEVBQUFBLFVBQVUsRUFBRSxDQUZPO0FBR25CQyxFQUFBQSxpQkFBaUIsRUFBRSw2QkFBTSxDQUFFO0FBSFIsQ0FBckI7QUFNTyxJQUFNQyxLQUFLLGdCQUFHLDBCQUdsQixFQUhrQixDQUFkOztJQUtDQyxRLEdBQWFELEssQ0FBYkMsUTs7QUFFRCxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdGO0FBQUEsTUFBN0VDLFFBQTZFLFFBQTdFQSxRQUE2RTtBQUFBLE1BQW5FQyxRQUFtRSxRQUFuRUEsUUFBbUU7O0FBQUEsb0JBQ2pGLHVCQUFXLFVBQUNDLEtBQUQsRUFBNkJDLE1BQTdCLEVBQWdEO0FBQ25GLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFdBQUtDLHVCQUFMO0FBQUEsWUFDVUMsT0FEVixHQUNzQkgsTUFEdEIsQ0FDVUcsT0FEVjtBQUVFQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWixFQUFpRFAsUUFBakQsRUFBMkRLLE9BQTNEO0FBQ0EsMkVBQVlKLEtBQVo7QUFBbUJELFVBQUFBLFFBQVEsRUFBUkE7QUFBbkI7O0FBRUY7QUFDRSxjQUFNLElBQUlRLEtBQUosRUFBTjtBQVBKOztBQVFDO0FBQ0YsR0FWeUIsOERBVWxCaEIsWUFWa0I7QUFVSlEsSUFBQUEsUUFBUSxFQUFSQTtBQVZJLEtBRGlGO0FBQUE7QUFBQSxNQUNwR0MsS0FEb0c7QUFBQSxNQUM3RlEsUUFENkY7O0FBYTNHLHNCQUNFLDZCQUFDLFFBQUQ7QUFBVSxJQUFBLEtBQUssRUFBRTtBQUFFUixNQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU1EsTUFBQUEsUUFBUSxFQUFSQTtBQUFUO0FBQWpCLEtBQ0dWLFFBREgsQ0FERjtBQUtELENBbEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBmaWx0ZXJQcm9kdWN0cywgdHJhbnNmb3JtIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZHVjdHMnO1xuaW1wb3J0IHsgVVBEQVRFX1NFTEVDVElPTiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb24gPSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZD86IGFueTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzZWxlY3Rpb25zOiBbXSxcbiAgdG90YWxQcmljZTogMCxcbiAgb25TZWxlY3Rpb25VcGRhdGU6ICgpID0+IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlQ29udGV4dDx7XG4gIHN0YXRlPzogdHlwZW9mIGluaXRpYWxTdGF0ZSxcbiAgZGlzcGF0Y2g/OiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+LFxufT4oe30pO1xuXG5jb25zdCB7IFByb3ZpZGVyIH0gPSBzdG9yZTtcblxuZXhwb3J0IGNvbnN0IFN0b3JlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgcHJvZHVjdHMgfTogeyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSwgcHJvZHVjdHM6IFN0cmluZ1tdIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKChzdGF0ZTogdHlwZW9mIGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFVQREFURV9TRUxFQ1RJT046XG4gICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYWN0aW9uO1xuICAgICAgICBjb25zb2xlLmxvZygnVVBEQVRFX1NFTEVDVElPTiBhY3Rpb24gdHJpZ2dlcmVkJywgcHJvZHVjdHMsIHBheWxvYWQpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMgfTtcbiAgICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfTtcbiAgfSwgeyAuLi5pbml0aWFsU3RhdGUsIHByb2R1Y3RzIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcbiJdfQ==