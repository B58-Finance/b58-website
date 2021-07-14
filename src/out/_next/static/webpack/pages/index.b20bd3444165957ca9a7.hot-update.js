webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./components/menu.tsx\");\n\n\nvar _jsxFileName = \"/Users/francisluz/Documents/Projects/B58-DeFi/source/b58.github.io/src/components/navigation.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbarOpen = _useState2[0],\n      setNavbarOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDarkMode = _useState3[0],\n      setDarkMode = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var changeNavbar = function changeNavbar() {\n      if (window.scrollY >= 20) {\n        setNavbar(true);\n      } else {\n        setNavbar(false);\n      }\n    };\n\n    window.addEventListener(\"scroll\", changeNavbar);\n    return function () {\n      window.removeEventListener(\"scroll\", changeNavbar);\n    };\n  }); // const btn = document.querySelector(\".btn-toggle\");\n  // const prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n  // btn.addEventListener(\"click\", function () {\n  //   if (prefersDarkScheme.matches) {\n  //     document.body.classList.toggle(\"light-theme\");\n  //   } else {\n  //     document.body.classList.toggle(\"dark-theme\");\n  //   }\n  // });\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: navbar ? \"bg-blue-light bg-opacity-75 sticky top-0 z-50 backdrop-filter firefox:bg-opacity-95 transition easy-in-out duration-200\" : \"bg-blue-light lg:bg-transparent sticky top-0 z-50 transition easy-in-out duration-200\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-wrap container px-5 p-2 lg:p-6 mx-auto flex items-center justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex items-center flex-shrink-0 text-white lg:mr-8 lg:pr-8 lg:px-6 lg:border-r\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#home\",\n          title: \"Home\",\n          onClick: function onClick() {\n            return navbarOpen ? setNavbarOpen(false) : false;\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/images/logo.svg\",\n            alt: \"B58 Finance Logo\",\n            className: navbar ? \"w-8 md:w-10 float-left transition duration-500 transform\" : \"w-8 md:w-16 float-left transition duration-500 transform\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"block lg:hidden\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"flex items-center py-2\",\n          onClick: function onClick() {\n            return setNavbarOpen(!navbarOpen);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            className: \"h-6 w-6 text-white\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: \"2\",\n              d: \"M4 6h16M4 12h16m-7 6h7\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full block flex-grow lg:flex lg:items-center lg:w-auto\" + (navbarOpen ? \" flex\" : \" hidden\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"font-bold lg:flex-grow pl-6 lg:pl-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            hover: \"text-blue-dark\",\n            onClick: function onClick() {\n              return navbarOpen ? setNavbarOpen(false) : false;\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"\",\n          role: \"button\",\n          className: \"flex items-center py-2\",\n          onClick: function onClick() {\n            return setThemeMode(!themeMode);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"fill-current h-6 w-6\",\n            viewBox: \"0 0 24 24\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M21.7948 15.7949C19.8964 16.5314 17.8247 16.7001 15.8322 16.2803C13.8396 15.8605 12.0121 14.8703 10.5722 13.4305C9.13235 11.9906 8.14221 10.1631 7.72241 8.17051C7.30261 6.17795 7.47125 4.10631 8.2078 2.20789C5.92746 3.09656 4.02898 4.75356 2.84016 6.89281C1.65133 9.03206 1.24678 11.5193 1.69634 13.925C2.14591 16.3307 3.42137 18.504 5.30252 20.0696C7.18367 21.6351 9.55242 22.4947 11.9998 22.4999C14.1182 22.5004 16.1873 21.8604 17.9353 20.6638C19.6834 19.4672 21.0288 17.7699 21.7948 15.7949Z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navigation, \"LYNl6Eu/qcsCvgD7ZcwfEegyB9I=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLnRzeD82NGEwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsIm5hdmJhciIsInNldE5hdmJhciIsIm5hdmJhck9wZW4iLCJzZXROYXZiYXJPcGVuIiwiaXNEYXJrTW9kZSIsInNldERhcmtNb2RlIiwidXNlRWZmZWN0IiwiY2hhbmdlTmF2YmFyIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGhlbWVNb2RlIiwidGhlbWVNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxLQUFELENBRGQ7QUFBQSxNQUNoQkMsTUFEZ0I7QUFBQSxNQUNSQyxTQURROztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEtBQUQsQ0FGckI7QUFBQSxNQUVoQkcsVUFGZ0I7QUFBQSxNQUVKQyxhQUZJOztBQUFBLG1CQUdZSixzREFBUSxDQUFDLEtBQUQsQ0FIcEI7QUFBQSxNQUdoQkssVUFIZ0I7QUFBQSxNQUdKQyxXQUhJOztBQUt2QkMseURBQVMsQ0FBQyxZQUFNO0FBRWQsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixVQUFHQyxNQUFNLENBQUNDLE9BQVAsSUFBa0IsRUFBckIsRUFBeUI7QUFDdkJSLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLGlCQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixLQU5EOztBQVFBTyxVQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYQyxZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSixZQUFyQztBQUNELEtBRkQ7QUFH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bmF2aWdhdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW25hdmJhciwgc2V0TmF2YmFyXSAgPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRGFya01vZGUsIHNldERhcmtNb2RlXSAgPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjaGFuZ2VOYXZiYXIgPSAoKSA9PiB7XG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSAyMCkge1xuICAgICAgICBzZXROYXZiYXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXROYXZiYXIoZmFsc2UpO1xuICAgICAgfVxuICAgIH0gIFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hhbmdlTmF2YmFyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGFuZ2VOYXZiYXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXRvZ2dsZVwiKTtcbiAgLy8gY29uc3QgcHJlZmVyc0RhcmtTY2hlbWUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XG5cbiAgLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIC8vICAgaWYgKHByZWZlcnNEYXJrU2NoZW1lLm1hdGNoZXMpIHtcbiAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImxpZ2h0LXRoZW1lXCIpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17IG5hdmJhciBcbiAgICAgID8gXCJiZy1ibHVlLWxpZ2h0IGJnLW9wYWNpdHktNzUgc3RpY2t5IHRvcC0wIHotNTAgYmFja2Ryb3AtZmlsdGVyIGZpcmVmb3g6Ymctb3BhY2l0eS05NSB0cmFuc2l0aW9uIGVhc3ktaW4tb3V0IGR1cmF0aW9uLTIwMFwiXG4gICAgICA6IFwiYmctYmx1ZS1saWdodCBsZzpiZy10cmFuc3BhcmVudCBzdGlja3kgdG9wLTAgei01MCB0cmFuc2l0aW9uIGVhc3ktaW4tb3V0IGR1cmF0aW9uLTIwMFwiXG4gICAgICB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBjb250YWluZXIgcHgtNSBwLTIgbGc6cC02IG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCB0ZXh0LXdoaXRlIGxnOm1yLTggbGc6cHItOCBsZzpweC02IGxnOmJvcmRlci1yXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNob21lXCIgdGl0bGU9XCJIb21lXCIgb25DbGljaz17KCkgPT4gbmF2YmFyT3BlbiA/IHNldE5hdmJhck9wZW4oZmFsc2UpIDogZmFsc2V9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiQjU4IEZpbmFuY2UgTG9nb1wiIGNsYXNzTmFtZT17IG5hdmJhciA/IFwidy04IG1kOnctMTAgZmxvYXQtbGVmdCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCB0cmFuc2Zvcm1cIiA6IFwidy04IG1kOnctMTYgZmxvYXQtbGVmdCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCB0cmFuc2Zvcm1cIn0gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGxnOmhpZGRlblwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHktMlwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZiYXJPcGVuKCFuYXZiYXJPcGVuKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZtLTcgNmg3XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBcInctZnVsbCBibG9jayBmbGV4LWdyb3cgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvXCIgK1xuICAgICAgICAgICAgICAobmF2YmFyT3BlbiA/IFwiIGZsZXhcIiA6IFwiIGhpZGRlblwiKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGxnOmZsZXgtZ3JvdyBwbC02IGxnOnBsLTBcIj5cbiAgICAgICAgICAgIDxNZW51IGhvdmVyPVwidGV4dC1ibHVlLWRhcmtcIiBvbkNsaWNrPXsoKSA9PiBuYXZiYXJPcGVuID8gc2V0TmF2YmFyT3BlbihmYWxzZSkgOiBmYWxzZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIlwiIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCIgb25DbGljaz17KCkgPT4gc2V0VGhlbWVNb2RlKCF0aGVtZU1vZGUpfT5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNiB3LTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjEuNzk0OCAxNS43OTQ5QzE5Ljg5NjQgMTYuNTMxNCAxNy44MjQ3IDE2LjcwMDEgMTUuODMyMiAxNi4yODAzQzEzLjgzOTYgMTUuODYwNSAxMi4wMTIxIDE0Ljg3MDMgMTAuNTcyMiAxMy40MzA1QzkuMTMyMzUgMTEuOTkwNiA4LjE0MjIxIDEwLjE2MzEgNy43MjI0MSA4LjE3MDUxQzcuMzAyNjEgNi4xNzc5NSA3LjQ3MTI1IDQuMTA2MzEgOC4yMDc4IDIuMjA3ODlDNS45Mjc0NiAzLjA5NjU2IDQuMDI4OTggNC43NTM1NiAyLjg0MDE2IDYuODkyODFDMS42NTEzMyA5LjAzMjA2IDEuMjQ2NzggMTEuNTE5MyAxLjY5NjM0IDEzLjkyNUMyLjE0NTkxIDE2LjMzMDcgMy40MjEzNyAxOC41MDQgNS4zMDI1MiAyMC4wNjk2QzcuMTgzNjcgMjEuNjM1MSA5LjU1MjQyIDIyLjQ5NDcgMTEuOTk5OCAyMi40OTk5QzE0LjExODIgMjIuNTAwNCAxNi4xODczIDIxLjg2MDQgMTcuOTM1MyAyMC42NjM4QzE5LjY4MzQgMTkuNDY3MiAyMS4wMjg4IDE3Ljc2OTkgMjEuNzk0OCAxNS43OTQ5WlwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navigation.tsx\n");

/***/ })

})