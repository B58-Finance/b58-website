webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./components/menu.tsx\");\n\n\nvar _jsxFileName = \"/Users/francisluz/Documents/Projects/B58-DeFi/source/b58.github.io/src/components/navigation.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbarOpen = _useState2[0],\n      setNavbarOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDarkMode = _useState3[0],\n      setDarkMode = _useState3[1];\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    setDarkMode(!isDarkMode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var changeNavbar = function changeNavbar() {\n      if (window.scrollY >= 20) {\n        setNavbar(true);\n      } else {\n        setNavbar(false);\n      }\n    };\n\n    window.addEventListener(\"scroll\", changeNavbar);\n    return function () {\n      window.removeEventListener(\"scroll\", changeNavbar);\n    };\n  }); // const btn = document.querySelector(\".btn-toggle\");\n  // const prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n  // btn.addEventListener(\"click\", function () {\n  //   if (prefersDarkScheme.matches) {\n  //     document.body.classList.toggle(\"light-theme\");\n  //   } else {\n  //     document.body.classList.toggle(\"dark-theme\");\n  //   }\n  // });\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: navbar ? \"bg-blue-light bg-opacity-75 sticky top-0 z-50 backdrop-filter firefox:bg-opacity-95 transition easy-in-out duration-200\" : \"bg-blue-light lg:bg-transparent sticky top-0 z-50 transition easy-in-out duration-200\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-wrap container px-5 p-2 lg:p-6 mx-auto flex items-center justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex items-center flex-shrink-0 text-white lg:mr-8 lg:pr-8 lg:px-6 lg:border-r\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#home\",\n          title: \"Home\",\n          onClick: function onClick() {\n            return navbarOpen ? setNavbarOpen(false) : false;\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/images/logo.svg\",\n            alt: \"B58 Finance Logo\",\n            className: navbar ? \"w-8 md:w-10 float-left transition duration-500 transform\" : \"w-8 md:w-16 float-left transition duration-500 transform\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"block lg:hidden\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"flex items-center py-2\",\n          onClick: function onClick() {\n            return setNavbarOpen(!navbarOpen);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            className: \"h-6 w-6 text-white\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: \"2\",\n              d: \"M4 6h16M4 12h16m-7 6h7\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full block flex-grow lg:flex lg:items-center lg:w-auto\" + (navbarOpen ? \" flex\" : \" hidden\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"font-bold lg:flex-grow pl-6 lg:pl-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            hover: \"text-blue-dark\",\n            onClick: function onClick() {\n              return navbarOpen ? setNavbarOpen(false) : false;\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#\",\n          role: \"button\",\n          className: \"flex items-center py-2\",\n          onClick: handleClick,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: isDarkMode ? \"hidden\" : \"fill-current h-6 w-6\",\n            viewBox: \"0 0 24 24\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M21.7948 15.7949C19.8964 16.5314 17.8247 16.7001 15.8322 16.2803C13.8396 15.8605 12.0121 14.8703 10.5722 13.4305C9.13235 11.9906 8.14221 10.1631 7.72241 8.17051C7.30261 6.17795 7.47125 4.10631 8.2078 2.20789C5.92746 3.09656 4.02898 4.75356 2.84016 6.89281C1.65133 9.03206 1.24678 11.5193 1.69634 13.925C2.14591 16.3307 3.42137 18.504 5.30252 20.0696C7.18367 21.6351 9.55242 22.4947 11.9998 22.4999C14.1182 22.5004 16.1873 21.8604 17.9353 20.6638C19.6834 19.4672 21.0288 17.7699 21.7948 15.7949Z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navigation, \"LYNl6Eu/qcsCvgD7ZcwfEegyB9I=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLnRzeD82NGEwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsIm5hdmJhciIsInNldE5hdmJhciIsIm5hdmJhck9wZW4iLCJzZXROYXZiYXJPcGVuIiwiaXNEYXJrTW9kZSIsInNldERhcmtNb2RlIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJjaGFuZ2VOYXZiYXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEtBQUQsQ0FEZDtBQUFBLE1BQ2hCQyxNQURnQjtBQUFBLE1BQ1JDLFNBRFE7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsS0FBRCxDQUZyQjtBQUFBLE1BRWhCRyxVQUZnQjtBQUFBLE1BRUpDLGFBRkk7O0FBQUEsbUJBR1lKLHNEQUFRLENBQUMsS0FBRCxDQUhwQjtBQUFBLE1BR2hCSyxVQUhnQjtBQUFBLE1BR0pDLFdBSEk7O0FBS3ZCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FILGVBQVcsQ0FBQyxDQUFDRCxVQUFGLENBQVg7QUFDRCxHQUhEOztBQUtBSyx5REFBUyxDQUFDLFlBQU07QUFFZCxRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFVBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQixFQUFyQixFQUF5QjtBQUN2QlgsaUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxPQUZELE1BRU87QUFDTEEsaUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDtBQUNGLEtBTkQ7O0FB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O0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0ExRUQ7O0dBQU1OLFU7O0tBQUFBLFU7QUE0RVNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdICA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25hdmJhck9wZW4sIHNldE5hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEYXJrTW9kZSwgc2V0RGFya01vZGVdICA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldERhcmtNb2RlKCFpc0RhcmtNb2RlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNoYW5nZU5hdmJhciA9ICgpID0+IHtcbiAgICAgIGlmKHdpbmRvdy5zY3JvbGxZID49IDIwKSB7XG4gICAgICAgIHNldE5hdmJhcih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldE5hdmJhcihmYWxzZSk7XG4gICAgICB9XG4gICAgfSAgXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGFuZ2VOYXZiYXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZU5hdmJhcik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tdG9nZ2xlXCIpO1xuICAvLyBjb25zdCBwcmVmZXJzRGFya1NjaGVtZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcblxuICAvLyBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gICBpZiAocHJlZmVyc0RhcmtTY2hlbWUubWF0Y2hlcykge1xuICAvLyAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlnaHQtdGhlbWVcIik7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstdGhlbWVcIik7XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXsgbmF2YmFyIFxuICAgICAgPyBcImJnLWJsdWUtbGlnaHQgYmctb3BhY2l0eS03NSBzdGlja3kgdG9wLTAgei01MCBiYWNrZHJvcC1maWx0ZXIgZmlyZWZveDpiZy1vcGFjaXR5LTk1IHRyYW5zaXRpb24gZWFzeS1pbi1vdXQgZHVyYXRpb24tMjAwXCJcbiAgICAgIDogXCJiZy1ibHVlLWxpZ2h0IGxnOmJnLXRyYW5zcGFyZW50IHN0aWNreSB0b3AtMCB6LTUwIHRyYW5zaXRpb24gZWFzeS1pbi1vdXQgZHVyYXRpb24tMjAwXCJcbiAgICAgIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGNvbnRhaW5lciBweC01IHAtMiBsZzpwLTYgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIHRleHQtd2hpdGUgbGc6bXItOCBsZzpwci04IGxnOnB4LTYgbGc6Ym9yZGVyLXJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2hvbWVcIiB0aXRsZT1cIkhvbWVcIiBvbkNsaWNrPXsoKSA9PiBuYXZiYXJPcGVuID8gc2V0TmF2YmFyT3BlbihmYWxzZSkgOiBmYWxzZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJCNTggRmluYW5jZSBMb2dvXCIgY2xhc3NOYW1lPXsgbmF2YmFyID8gXCJ3LTggbWQ6dy0xMCBmbG9hdC1sZWZ0IHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIHRyYW5zZm9ybVwiIDogXCJ3LTggbWQ6dy0xNiBmbG9hdC1sZWZ0IHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIHRyYW5zZm9ybVwifSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhck9wZW4oIW5hdmJhck9wZW4pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC13aGl0ZVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk00IDZoMTZNNCAxMmgxNm0tNyA2aDdcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFwidy1mdWxsIGJsb2NrIGZsZXgtZ3JvdyBsZzpmbGV4IGxnOml0ZW1zLWNlbnRlciBsZzp3LWF1dG9cIiArXG4gICAgICAgICAgICAgIChuYXZiYXJPcGVuID8gXCIgZmxleFwiIDogXCIgaGlkZGVuXCIpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgbGc6ZmxleC1ncm93IHBsLTYgbGc6cGwtMFwiPlxuICAgICAgICAgICAgPE1lbnUgaG92ZXI9XCJ0ZXh0LWJsdWUtZGFya1wiIG9uQ2xpY2s9eygpID0+IG5hdmJhck9wZW4gPyBzZXROYXZiYXJPcGVuKGZhbHNlKSA6IGZhbHNlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9eyBpc0RhcmtNb2RlID8gXCJoaWRkZW5cIiA6IFwiZmlsbC1jdXJyZW50IGgtNiB3LTZcIn0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIxLjc5NDggMTUuNzk0OUMxOS44OTY0IDE2LjUzMTQgMTcuODI0NyAxNi43MDAxIDE1LjgzMjIgMTYuMjgwM0MxMy44Mzk2IDE1Ljg2MDUgMTIuMDEyMSAxNC44NzAzIDEwLjU3MjIgMTMuNDMwNUM5LjEzMjM1IDExLjk5MDYgOC4xNDIyMSAxMC4xNjMxIDcuNzIyNDEgOC4xNzA1MUM3LjMwMjYxIDYuMTc3OTUgNy40NzEyNSA0LjEwNjMxIDguMjA3OCAyLjIwNzg5QzUuOTI3NDYgMy4wOTY1NiA0LjAyODk4IDQuNzUzNTYgMi44NDAxNiA2Ljg5MjgxQzEuNjUxMzMgOS4wMzIwNiAxLjI0Njc4IDExLjUxOTMgMS42OTYzNCAxMy45MjVDMi4xNDU5MSAxNi4zMzA3IDMuNDIxMzcgMTguNTA0IDUuMzAyNTIgMjAuMDY5NkM3LjE4MzY3IDIxLjYzNTEgOS41NTI0MiAyMi40OTQ3IDExLjk5OTggMjIuNDk5OUMxNC4xMTgyIDIyLjUwMDQgMTYuMTg3MyAyMS44NjA0IDE3LjkzNTMgMjAuNjYzOEMxOS42ODM0IDE5LjQ2NzIgMjEuMDI4OCAxNy43Njk5IDIxLjc5NDggMTUuNzk0OVpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navigation.tsx\n");

/***/ })

})