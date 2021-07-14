webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./components/menu.tsx\");\n\n\nvar _jsxFileName = \"/Users/francisluz/Documents/Projects/B58-DeFi/source/b58.github.io/src/components/navigation.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbarOpen = _useState2[0],\n      setNavbarOpen = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var changeNavbar = function changeNavbar() {\n      if (window.scrollY >= 20) {\n        setNavbar(true);\n      } else {\n        setNavbar(false);\n      }\n    };\n\n    window.addEventListener(\"scroll\", changeNavbar);\n    return function () {\n      window.removeEventListener(\"scroll\", changeNavbar);\n    };\n  }); // const btn = document.querySelector(\".btn-toggle\");\n  // const prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n  // btn.addEventListener(\"click\", function () {\n  //   if (prefersDarkScheme.matches) {\n  //     document.body.classList.toggle(\"light-theme\");\n  //   } else {\n  //     document.body.classList.toggle(\"dark-theme\");\n  //   }\n  // });\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: navbar ? \"bg-blue-light bg-opacity-75 sticky top-0 z-50 backdrop-filter firefox:bg-opacity-95 transition easy-in-out duration-200\" : \"bg-blue-light lg:bg-transparent sticky top-0 z-50 transition easy-in-out duration-200\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-wrap container px-5 p-2 lg:p-6 mx-auto flex items-center justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex items-center flex-shrink-0 text-white lg:mr-8 lg:pr-8 lg:px-6 lg:border-r\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#home\",\n          title: \"Home\",\n          onClick: function onClick() {\n            return navbarOpen ? setNavbarOpen(false) : false;\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/images/logo.svg\",\n            alt: \"B58 Finance Logo\",\n            className: navbar ? \"w-8 md:w-10 float-left transition duration-500 transform\" : \"w-8 md:w-16 float-left transition duration-500 transform\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"\",\n          role: \"button\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"fill-current h-6 w-6\",\n            viewBox: \"0 0 24 24\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M21.7948 15.7949C19.8964 16.5314 17.8247 16.7001 15.8322 16.2803C13.8396 15.8605 12.0121 14.8703 10.5722 13.4305C9.13235 11.9906 8.14221 10.1631 7.72241 8.17051C7.30261 6.17795 7.47125 4.10631 8.2078 2.20789C5.92746 3.09656 4.02898 4.75356 2.84016 6.89281C1.65133 9.03206 1.24678 11.5193 1.69634 13.925C2.14591 16.3307 3.42137 18.504 5.30252 20.0696C7.18367 21.6351 9.55242 22.4947 11.9998 22.4999C14.1182 22.5004 16.1873 21.8604 17.9353 20.6638C19.6834 19.4672 21.0288 17.7699 21.7948 15.7949Z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"block lg:hidden\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"flex items-center py-2\",\n          onClick: function onClick() {\n            return setNavbarOpen(!navbarOpen);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            className: \"h-6 w-6 text-white\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: \"2\",\n              d: \"M4 6h16M4 12h16m-7 6h7\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full block flex-grow lg:flex lg:items-center lg:w-auto\" + (navbarOpen ? \" flex\" : \" hidden\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"font-bold lg:flex-grow pl-6 lg:pl-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            hover: \"text-blue-dark\",\n            onClick: function onClick() {\n              return navbarOpen ? setNavbarOpen(false) : false;\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navigation, \"1AeKxjNvMGA4aD/lPiX/TYZakss=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLnRzeD82NGEwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsIm5hdmJhciIsInNldE5hdmJhciIsIm5hdmJhck9wZW4iLCJzZXROYXZiYXJPcGVuIiwidXNlRWZmZWN0IiwiY2hhbmdlTmF2YmFyIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxLQUFELENBRGQ7QUFBQSxNQUNoQkMsTUFEZ0I7QUFBQSxNQUNSQyxTQURROztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEtBQUQsQ0FGckI7QUFBQSxNQUVoQkcsVUFGZ0I7QUFBQSxNQUVKQyxhQUZJOztBQUl2QkMseURBQVMsQ0FBQyxZQUFNO0FBRWQsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixVQUFHQyxNQUFNLENBQUNDLE9BQVAsSUFBa0IsRUFBckIsRUFBeUI7QUFDdkJOLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLGlCQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixLQU5EOztBQVFBSyxVQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYQyxZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSixZQUFyQztBQUNELEtBRkQ7QUFHRCxHQWZRLENBQVQsQ0FKdUIsQ0FxQnZCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBR0wsTUFBTSxHQUNuQix5SEFEbUIsR0FFbkIsdUZBRko7QUFBQSwyQkFJRTtBQUFLLGVBQVMsRUFBQyxvRkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxnRkFBZjtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLE9BQVI7QUFBZ0IsZUFBSyxFQUFDLE1BQXRCO0FBQTZCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUUsVUFBVSxHQUFHQyxhQUFhLENBQUMsS0FBRCxDQUFoQixHQUEwQixLQUExQztBQUFBLFdBQXRDO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsa0JBQVQ7QUFBNEIsZUFBRyxFQUFDLGtCQUFoQztBQUFtRCxxQkFBUyxFQUFHSCxNQUFNLEdBQUcsMERBQUgsR0FBZ0U7QUFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEVBQVI7QUFBVyxjQUFJLEVBQUMsUUFBaEI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBc0MsbUJBQU8sRUFBQyxXQUE5QztBQUEwRCxnQkFBSSxFQUFDLE1BQS9EO0FBQXNFLGlCQUFLLEVBQUMsNEJBQTVFO0FBQUEsbUNBQ0U7QUFBTSxzQkFBUSxFQUFDLFNBQWY7QUFBeUIsc0JBQVEsRUFBQyxTQUFsQztBQUE0QyxlQUFDLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBYUU7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsK0JBQ0U7QUFBUSxtQkFBUyxFQUFDLHdCQUFsQjtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUcsYUFBYSxDQUFDLENBQUNELFVBQUYsQ0FBbkI7QUFBQSxXQURYO0FBQUEsaUNBR0U7QUFBSyxpQkFBSyxFQUFDLDRCQUFYO0FBQXdDLHFCQUFTLEVBQUMsb0JBQWxEO0FBQXVFLGdCQUFJLEVBQUMsTUFBNUU7QUFBbUYsbUJBQU8sRUFBQyxXQUEzRjtBQUF1RyxrQkFBTSxFQUFDLGNBQTlHO0FBQUEsbUNBQ0U7QUFBTSwyQkFBYSxFQUFDLE9BQXBCO0FBQTRCLDRCQUFjLEVBQUMsT0FBM0M7QUFBbUQseUJBQVcsRUFBQyxHQUEvRDtBQUFtRSxlQUFDLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBc0JFO0FBQUssaUJBQVMsRUFBRyw4REFDVkEsVUFBVSxHQUFHLE9BQUgsR0FBYSxTQURiLENBQWpCO0FBQUEsK0JBRUU7QUFBSyxtQkFBUyxFQUFDLHFDQUFmO0FBQUEsaUNBQ0UscUVBQUMsNkNBQUQ7QUFBTSxpQkFBSyxFQUFDLGdCQUFaO0FBQTZCLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUEsVUFBVSxHQUFHQyxhQUFhLENBQUMsS0FBRCxDQUFoQixHQUEwQixLQUExQztBQUFBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0FwRUQ7O0dBQU1MLFU7O0tBQUFBLFU7QUFzRVNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdICA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25hdmJhck9wZW4sIHNldE5hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgY2hhbmdlTmF2YmFyID0gKCkgPT4ge1xuICAgICAgaWYod2luZG93LnNjcm9sbFkgPj0gMjApIHtcbiAgICAgICAgc2V0TmF2YmFyKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TmF2YmFyKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9ICBcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZU5hdmJhcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hhbmdlTmF2YmFyKTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi10b2dnbGVcIik7XG4gIC8vIGNvbnN0IHByZWZlcnNEYXJrU2NoZW1lID0gd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xuXG4gIC8vIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAvLyAgIGlmIChwcmVmZXJzRGFya1NjaGVtZS5tYXRjaGVzKSB7XG4gIC8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsaWdodC10aGVtZVwiKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcbiAgLy8gICB9XG4gIC8vIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9eyBuYXZiYXIgXG4gICAgICA/IFwiYmctYmx1ZS1saWdodCBiZy1vcGFjaXR5LTc1IHN0aWNreSB0b3AtMCB6LTUwIGJhY2tkcm9wLWZpbHRlciBmaXJlZm94OmJnLW9wYWNpdHktOTUgdHJhbnNpdGlvbiBlYXN5LWluLW91dCBkdXJhdGlvbi0yMDBcIlxuICAgICAgOiBcImJnLWJsdWUtbGlnaHQgbGc6YmctdHJhbnNwYXJlbnQgc3RpY2t5IHRvcC0wIHotNTAgdHJhbnNpdGlvbiBlYXN5LWluLW91dCBkdXJhdGlvbi0yMDBcIlxuICAgICAgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgY29udGFpbmVyIHB4LTUgcC0yIGxnOnAtNiBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgdGV4dC13aGl0ZSBsZzptci04IGxnOnByLTggbGc6cHgtNiBsZzpib3JkZXItclwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiIHRpdGxlPVwiSG9tZVwiIG9uQ2xpY2s9eygpID0+IG5hdmJhck9wZW4gPyBzZXROYXZiYXJPcGVuKGZhbHNlKSA6IGZhbHNlfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnN2Z1wiIGFsdD1cIkI1OCBGaW5hbmNlIExvZ29cIiBjbGFzc05hbWU9eyBuYXZiYXIgPyBcInctOCBtZDp3LTEwIGZsb2F0LWxlZnQgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdHJhbnNmb3JtXCIgOiBcInctOCBtZDp3LTE2IGZsb2F0LWxlZnQgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdHJhbnNmb3JtXCJ9IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBocmVmPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC02IHctNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMS43OTQ4IDE1Ljc5NDlDMTkuODk2NCAxNi41MzE0IDE3LjgyNDcgMTYuNzAwMSAxNS44MzIyIDE2LjI4MDNDMTMuODM5NiAxNS44NjA1IDEyLjAxMjEgMTQuODcwMyAxMC41NzIyIDEzLjQzMDVDOS4xMzIzNSAxMS45OTA2IDguMTQyMjEgMTAuMTYzMSA3LjcyMjQxIDguMTcwNTFDNy4zMDI2MSA2LjE3Nzk1IDcuNDcxMjUgNC4xMDYzMSA4LjIwNzggMi4yMDc4OUM1LjkyNzQ2IDMuMDk2NTYgNC4wMjg5OCA0Ljc1MzU2IDIuODQwMTYgNi44OTI4MUMxLjY1MTMzIDkuMDMyMDYgMS4yNDY3OCAxMS41MTkzIDEuNjk2MzQgMTMuOTI1QzIuMTQ1OTEgMTYuMzMwNyAzLjQyMTM3IDE4LjUwNCA1LjMwMjUyIDIwLjA2OTZDNy4xODM2NyAyMS42MzUxIDkuNTUyNDIgMjIuNDk0NyAxMS45OTk4IDIyLjQ5OTlDMTQuMTE4MiAyMi41MDA0IDE2LjE4NzMgMjEuODYwNCAxNy45MzUzIDIwLjY2MzhDMTkuNjgzNCAxOS40NjcyIDIxLjAyODggMTcuNzY5OSAyMS43OTQ4IDE1Ljc5NDlaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhck9wZW4oIW5hdmJhck9wZW4pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC13aGl0ZVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk00IDZoMTZNNCAxMmgxNm0tNyA2aDdcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFwidy1mdWxsIGJsb2NrIGZsZXgtZ3JvdyBsZzpmbGV4IGxnOml0ZW1zLWNlbnRlciBsZzp3LWF1dG9cIiArXG4gICAgICAgICAgICAgIChuYXZiYXJPcGVuID8gXCIgZmxleFwiIDogXCIgaGlkZGVuXCIpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgbGc6ZmxleC1ncm93IHBsLTYgbGc6cGwtMFwiPlxuICAgICAgICAgICAgPE1lbnUgaG92ZXI9XCJ0ZXh0LWJsdWUtZGFya1wiIG9uQ2xpY2s9eygpID0+IG5hdmJhck9wZW4gPyBzZXROYXZiYXJPcGVuKGZhbHNlKSA6IGZhbHNlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navigation.tsx\n");

/***/ })

})