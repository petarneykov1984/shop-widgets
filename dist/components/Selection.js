"use strict";

var _interopRequireWildcard = require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selection = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/petarneykov/Projects/shop-widgets/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _grid = require("@rebass/grid");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _store = require("../providers/store");

var _types = require("../providers/types");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0 0 15px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SelectionWrapper = (0, _styledComponents.default)(_grid.Flex)(_templateObject(), function (_ref) {
  var checked = _ref.checked;
  return checked && "background: blue; color: #fff";
});

var Selection = function Selection(props) {
  var selected = props.selected,
      label = props.label,
      description = props.description;

  var _useContext = (0, _react.useContext)(_store.store),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _useState = (0, _react.useState)(selected || false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var onChangeHandler = function onChangeHandler() {
    setChecked(!checked);
    dispatch({
      type: _types.UPDATE_SELECTION,
      payload: {
        testPayload: 'testPayloadContent'
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(SelectionWrapper, {
    checked: checked
  }, /*#__PURE__*/_react.default.createElement(_grid.Box, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChangeHandler
  })), /*#__PURE__*/_react.default.createElement(_grid.Box, null, /*#__PURE__*/_react.default.createElement(_grid.Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/_react.default.createElement(_grid.Box, null, label), /*#__PURE__*/_react.default.createElement(_grid.Box, null, description), /*#__PURE__*/_react.default.createElement(_grid.Box, {
    hidden: !checked
  }, "Additional content..."))));
};

exports.Selection = Selection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlbGVjdGlvbi50c3giXSwibmFtZXMiOlsiU2VsZWN0aW9uV3JhcHBlciIsIkZsZXgiLCJjaGVja2VkIiwiU2VsZWN0aW9uIiwicHJvcHMiLCJzZWxlY3RlZCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJzdG9yZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJzZXRDaGVja2VkIiwib25DaGFuZ2VIYW5kbGVyIiwidHlwZSIsIlVQREFURV9TRUxFQ1RJT04iLCJwYXlsb2FkIiwidGVzdFBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxnQkFBZ0IsR0FBRywrQkFBT0MsVUFBUCxDQUFILG9CQUVsQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQWlCQSxPQUFPLG1DQUF4QjtBQUFBLENBRmtCLENBQXRCOztBQVdPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBa0I7QUFBQSxNQUNqQ0MsUUFEaUMsR0FDQUQsS0FEQSxDQUNqQ0MsUUFEaUM7QUFBQSxNQUN2QkMsS0FEdUIsR0FDQUYsS0FEQSxDQUN2QkUsS0FEdUI7QUFBQSxNQUNoQkMsV0FEZ0IsR0FDQUgsS0FEQSxDQUNoQkcsV0FEZ0I7O0FBQUEsb0JBRWIsdUJBQVdDLFlBQVgsQ0FGYTtBQUFBLE1BRWpDQyxLQUZpQyxlQUVqQ0EsS0FGaUM7QUFBQSxNQUUxQkMsUUFGMEIsZUFFMUJBLFFBRjBCOztBQUFBLGtCQUlYLHFCQUFTTCxRQUFRLElBQUksS0FBckIsQ0FKVztBQUFBO0FBQUEsTUFJbENILE9BSmtDO0FBQUEsTUFJekJTLFVBSnlCOztBQUt6QyxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJELElBQUFBLFVBQVUsQ0FBQyxDQUFDVCxPQUFGLENBQVY7QUFDQVEsSUFBQUEsUUFBUSxDQUFFO0FBQUVHLE1BQUFBLElBQUksRUFBRUMsdUJBQVI7QUFBMEJDLE1BQUFBLE9BQU8sRUFBRTtBQUFFQyxRQUFBQSxXQUFXLEVBQUU7QUFBZjtBQUFuQyxLQUFGLENBQVI7QUFDRCxHQUhEOztBQUtBLHNCQUNFLDZCQUFDLGdCQUFEO0FBQWtCLElBQUEsT0FBTyxFQUFFZDtBQUEzQixrQkFDRSw2QkFBQyxTQUFELHFCQUNFO0FBQU8sSUFBQSxJQUFJLEVBQUMsVUFBWjtBQUF1QixJQUFBLE9BQU8sRUFBRUEsT0FBaEM7QUFBeUMsSUFBQSxRQUFRLEVBQUVVO0FBQW5ELElBREYsQ0FERixlQUlFLDZCQUFDLFNBQUQscUJBQ0UsNkJBQUMsVUFBRDtBQUFNLElBQUEsYUFBYSxFQUFDO0FBQXBCLGtCQUNFLDZCQUFDLFNBQUQsUUFBTU4sS0FBTixDQURGLGVBRUUsNkJBQUMsU0FBRCxRQUFNQyxXQUFOLENBRkYsZUFHRSw2QkFBQyxTQUFEO0FBQUssSUFBQSxNQUFNLEVBQUUsQ0FBQ0w7QUFBZCw2QkFIRixDQURGLENBSkYsQ0FERjtBQWNELENBeEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICdAcmViYXNzL2dyaWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9wcm92aWRlcnMvc3RvcmVcIjtcbmltcG9ydCB7IFVQREFURV9TRUxFQ1RJT04gfSBmcm9tIFwiLi4vcHJvdmlkZXJzL3R5cGVzXCI7XG5cblxuY29uc3QgU2VsZWN0aW9uV3JhcHBlciA9IHN0eWxlZChGbGV4KWBcbiAgcGFkZGluZzogMCAwIDE1cHg7XG4gICR7KHsgY2hlY2tlZCB9KSA9PiBjaGVja2VkICYmIGBiYWNrZ3JvdW5kOiBibHVlOyBjb2xvcjogI2ZmZmB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdGlvbiA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZWxlY3RlZCwgbGFiZWwsIGRlc2NyaXB0aW9uIH0gPSBwcm9wcztcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoc3RvcmUpO1xuXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKHNlbGVjdGVkIHx8IGZhbHNlKTtcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldENoZWNrZWQoIWNoZWNrZWQpO1xuICAgIGRpc3BhdGNoISh7IHR5cGU6IFVQREFURV9TRUxFQ1RJT04sIHBheWxvYWQ6IHsgdGVzdFBheWxvYWQ6ICd0ZXN0UGF5bG9hZENvbnRlbnQnIH0gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0aW9uV3JhcHBlciBjaGVja2VkPXtjaGVja2VkfT5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94PlxuICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPEJveD57bGFiZWx9PC9Cb3g+XG4gICAgICAgICAgPEJveD57ZGVzY3JpcHRpb259PC9Cb3g+XG4gICAgICAgICAgPEJveCBoaWRkZW49eyFjaGVja2VkfT5BZGRpdGlvbmFsIGNvbnRlbnQuLi48L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Cb3g+XG4gICAgPC9TZWxlY3Rpb25XcmFwcGVyPlxuICApO1xufTtcbiJdfQ==