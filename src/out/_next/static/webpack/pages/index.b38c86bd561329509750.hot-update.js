webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./components/menu.tsx\");\n\n\nvar _jsxFileName = \"/Users/francisluz/Documents/Projects/B58-DeFi/source/b58.github.io/src/components/navigation.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      navbarOpen = _useState2[0],\n      setNavbarOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isDarkMode = _useState3[0],\n      setDarkMode = _useState3[1];\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    var prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n\n    if (prefersDarkScheme.matches) {\n      document.body.classList.toggle(\"light-theme\");\n      var theme = document.body.classList.contains(\"light-theme\") ? \"light\" : \"dark\";\n    } else {\n      document.body.classList.toggle(\"dark-theme\");\n      var theme = document.body.classList.contains(\"dark-theme\") ? \"dark\" : \"light\";\n    }\n\n    setDarkMode(!isDarkMode);\n    console.log(theme);\n    localStorage.setItem(\"theme\", theme);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var changeNavbar = function changeNavbar() {\n      if (window.scrollY >= 20) {\n        setNavbar(true);\n      } else {\n        setNavbar(false);\n      }\n    };\n\n    changeNavbar();\n    window.addEventListener(\"scroll\", changeNavbar); //Dark Mode Auto/Manual Toggle\n\n    var currentTheme = localStorage.getItem(\"theme\");\n    console.log(currentTheme);\n\n    if (currentTheme == \"dark\") {\n      document.body.classList.toggle(\"dark-theme\");\n      setDarkMode(true);\n    } else if (currentTheme == \"light\") {\n      document.body.classList.toggle(\"light-theme\");\n      setDarkMode(false);\n    }\n\n    return function () {\n      window.removeEventListener(\"scroll\", changeNavbar);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    className: navbar ? \"bg-blue-light bg-opacity-75 sticky top-0 z-50 backdrop-filter firefox:bg-opacity-95 transition easy-in-out duration-200\" : \"bg-blue-light lg:bg-transparent sticky top-0 z-50 transition easy-in-out duration-200\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-wrap container px-5 p-2 lg:p-6 mx-auto flex items-center justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex items-center flex-shrink-0 text-white lg:mr-8 lg:pr-8 lg:px-6 lg:border-r\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#home\",\n          title: \"Home\",\n          onClick: function onClick() {\n            return navbarOpen ? setNavbarOpen(false) : false;\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/images/logo.svg\",\n            alt: \"B58 Finance Logo\",\n            className: navbar ? \"w-8 md:w-10 float-left transition duration-500 transform\" : \"w-8 md:w-16 float-left transition duration-500 transform\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"block lg:hidden\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"flex items-center py-2\",\n          onClick: function onClick() {\n            return setNavbarOpen(!navbarOpen);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            className: \"h-6 w-6 text-white\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: \"2\",\n              d: \"M4 6h16M4 12h16m-7 6h7\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full block flex-grow lg:flex lg:items-center lg:w-auto\" + (navbarOpen ? \" flex\" : \" hidden\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"font-bold lg:flex-grow pl-6 lg:pl-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            hover: \"text-blue-dark\",\n            onClick: function onClick() {\n              return navbarOpen ? setNavbarOpen(false) : false;\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#\",\n          role: \"button\",\n          className: \"flex items-center py-2\",\n          onClick: handleClick,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: isDarkMode ? \"hidden\" : \"fill-current h-8 w-8 rounded-full hover:bg-black hover:text-white p-1\",\n            viewBox: \"0 0 24 24\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M21.7948 15.7949C19.8964 16.5314 17.8247 16.7001 15.8322 16.2803C13.8396 15.8605 12.0121 14.8703 10.5722 13.4305C9.13235 11.9906 8.14221 10.1631 7.72241 8.17051C7.30261 6.17795 7.47125 4.10631 8.2078 2.20789C5.92746 3.09656 4.02898 4.75356 2.84016 6.89281C1.65133 9.03206 1.24678 11.5193 1.69634 13.925C2.14591 16.3307 3.42137 18.504 5.30252 20.0696C7.18367 21.6351 9.55242 22.4947 11.9998 22.4999C14.1182 22.5004 16.1873 21.8604 17.9353 20.6638C19.6834 19.4672 21.0288 17.7699 21.7948 15.7949Z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: !isDarkMode ? \"hidden\" : \"fill-current h-8 w-8 rounded-full hover:bg-white hover:text-black p-1\",\n            viewBox: \"0 0 24 24\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5C10.8065 7.5 9.66193 7.97411 8.81802 8.81802C7.97411 9.66193 7.5 10.8065 7.5 12C7.5 13.1935 7.97411 14.3381 8.81802 15.182C9.66193 16.0259 10.8065 16.5 12 16.5ZM12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18ZM12 0C12.1989 0 12.3897 0.0790176 12.5303 0.21967C12.671 0.360322 12.75 0.551088 12.75 0.75V3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5C11.8011 4.5 11.6103 4.42098 11.4697 4.28033C11.329 4.13968 11.25 3.94891 11.25 3.75V0.75C11.25 0.551088 11.329 0.360322 11.4697 0.21967C11.6103 0.0790176 11.8011 0 12 0V0ZM12 19.5C12.1989 19.5 12.3897 19.579 12.5303 19.7197C12.671 19.8603 12.75 20.0511 12.75 20.25V23.25C12.75 23.4489 12.671 23.6397 12.5303 23.7803C12.3897 23.921 12.1989 24 12 24C11.8011 24 11.6103 23.921 11.4697 23.7803C11.329 23.6397 11.25 23.4489 11.25 23.25V20.25C11.25 20.0511 11.329 19.8603 11.4697 19.7197C11.6103 19.579 11.8011 19.5 12 19.5ZM24 12C24 12.1989 23.921 12.3897 23.7803 12.5303C23.6397 12.671 23.4489 12.75 23.25 12.75H20.25C20.0511 12.75 19.8603 12.671 19.7197 12.5303C19.579 12.3897 19.5 12.1989 19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25H23.25C23.4489 11.25 23.6397 11.329 23.7803 11.4697C23.921 11.6103 24 11.8011 24 12ZM4.5 12C4.5 12.1989 4.42098 12.3897 4.28033 12.5303C4.13968 12.671 3.94891 12.75 3.75 12.75H0.75C0.551088 12.75 0.360322 12.671 0.21967 12.5303C0.0790176 12.3897 0 12.1989 0 12C0 11.8011 0.0790176 11.6103 0.21967 11.4697C0.360322 11.329 0.551088 11.25 0.75 11.25H3.75C3.94891 11.25 4.13968 11.329 4.28033 11.4697C4.42098 11.6103 4.5 11.8011 4.5 12ZM20.4855 3.5145C20.6261 3.65515 20.7051 3.84588 20.7051 4.04475C20.7051 4.24362 20.6261 4.43435 20.4855 4.575L18.3645 6.6975C18.2948 6.76713 18.212 6.82235 18.1209 6.86C18.0299 6.89765 17.9323 6.91699 17.8337 6.91692C17.6347 6.91678 17.4439 6.83758 17.3032 6.69675C17.2336 6.62702 17.1784 6.54425 17.1408 6.45318C17.1031 6.36211 17.0838 6.26452 17.0838 6.16597C17.084 5.96695 17.1632 5.77613 17.304 5.6355L19.425 3.5145C19.5656 3.3739 19.7564 3.29491 19.9552 3.29491C20.1541 3.29491 20.3449 3.3739 20.4855 3.5145ZM6.696 17.304C6.8366 17.4446 6.91559 17.6354 6.91559 17.8342C6.91559 18.0331 6.8366 18.2239 6.696 18.3645L4.575 20.4855C4.43355 20.6221 4.2441 20.6977 4.04745 20.696C3.8508 20.6943 3.66269 20.6154 3.52364 20.4764C3.38458 20.3373 3.3057 20.1492 3.30399 19.9526C3.30229 19.7559 3.37788 19.5665 3.5145 19.425L5.6355 17.304C5.77615 17.1634 5.96688 17.0844 6.16575 17.0844C6.36462 17.0844 6.55535 17.1634 6.696 17.304ZM20.4855 20.4855C20.3449 20.6261 20.1541 20.7051 19.9552 20.7051C19.7564 20.7051 19.5656 20.6261 19.425 20.4855L17.304 18.3645C17.1674 18.223 17.0918 18.0336 17.0935 17.8369C17.0952 17.6403 17.1741 17.4522 17.3131 17.3131C17.4522 17.1741 17.6403 17.0952 17.8369 17.0935C18.0336 17.0918 18.223 17.1674 18.3645 17.304L20.4855 19.425C20.6261 19.5656 20.7051 19.7564 20.7051 19.9552C20.7051 20.1541 20.6261 20.3449 20.4855 20.4855ZM6.696 6.6975C6.55535 6.8381 6.36462 6.91709 6.16575 6.91709C5.96688 6.91709 5.77615 6.8381 5.6355 6.6975L3.5145 4.575C3.44287 4.50582 3.38573 4.42306 3.34642 4.33155C3.30712 4.24005 3.28643 4.14164 3.28556 4.04205C3.2847 3.94247 3.30367 3.84371 3.34138 3.75153C3.37909 3.65936 3.43478 3.57562 3.5052 3.5052C3.57562 3.43478 3.65936 3.37909 3.75153 3.34138C3.84371 3.30367 3.94247 3.2847 4.04205 3.28556C4.14164 3.28643 4.24005 3.30712 4.33155 3.34642C4.42306 3.38573 4.50582 3.44287 4.575 3.5145L6.696 5.6355C6.76585 5.70517 6.82126 5.78793 6.85907 5.87905C6.89688 5.97017 6.91634 6.06785 6.91634 6.1665C6.91634 6.26515 6.89688 6.36283 6.85907 6.45395C6.82126 6.54507 6.76585 6.62783 6.696 6.6975Z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navigation, \"LYNl6Eu/qcsCvgD7ZcwfEegyB9I=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLnRzeD82NGEwIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsIm5hdmJhciIsInNldE5hdmJhciIsIm5hdmJhck9wZW4iLCJzZXROYXZiYXJPcGVuIiwiaXNEYXJrTW9kZSIsInNldERhcmtNb2RlIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmVmZXJzRGFya1NjaGVtZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGhlbWUiLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlRWZmZWN0IiwiY2hhbmdlTmF2YmFyIiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50VGhlbWUiLCJnZXRJdGVtIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsS0FBRCxDQURkO0FBQUEsTUFDaEJDLE1BRGdCO0FBQUEsTUFDUkMsU0FEUTs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxLQUFELENBRnJCO0FBQUEsTUFFaEJHLFVBRmdCO0FBQUEsTUFFSkMsYUFGSTs7QUFBQSxtQkFHWUosc0RBQVEsQ0FBQyxLQUFELENBSHBCO0FBQUEsTUFHaEJLLFVBSGdCO0FBQUEsTUFHSkMsV0FISTs7QUFLdkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFZO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxDQUFDQyxVQUFQLENBQWtCLDhCQUFsQixDQUExQjs7QUFDQSxRQUFJ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QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUcsQ0FBQ0EsVUFBRCxHQUFjLFFBQWQsR0FBeUIsdUVBQTFDO0FBQW1ILG1CQUFPLEVBQUMsV0FBM0g7QUFBdUksZ0JBQUksRUFBQyxNQUE1STtBQUFtSixpQkFBSyxFQUFDLDRCQUF6SjtBQUFBLG1DQUNFO0FBQU0sc0JBQVEsRUFBQyxTQUFmO0FBQXlCLHNCQUFRLEVBQUMsU0FBbEM7QUFBNEMsZUFBQyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBL0ZEOztHQUFNTixVOztLQUFBQSxVO0FBaUdTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW25hdmJhciwgc2V0TmF2YmFyXSAgPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRGFya01vZGUsIHNldERhcmtNb2RlXSAgPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICBjb25zdCBwcmVmZXJzRGFya1NjaGVtZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcbiAgICBpZiAocHJlZmVyc0RhcmtTY2hlbWUubWF0Y2hlcykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlnaHQtdGhlbWVcIik7XG4gICAgICB2YXIgdGhlbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0LXRoZW1lXCIpXG4gICAgICAgID8gXCJsaWdodFwiXG4gICAgICAgIDogXCJkYXJrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstdGhlbWVcIik7XG4gICAgICB2YXIgdGhlbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmstdGhlbWVcIilcbiAgICAgICAgPyBcImRhcmtcIlxuICAgICAgICA6IFwibGlnaHRcIjtcbiAgICB9XG4gICAgc2V0RGFya01vZGUoIWlzRGFya01vZGUpO1xuICAgIGNvbnNvbGUubG9nKHRoZW1lKVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB0aGVtZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjaGFuZ2VOYXZiYXIgPSAoKSA9PiB7XG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSAyMCkge1xuICAgICAgICBzZXROYXZiYXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXROYXZiYXIoZmFsc2UpO1xuICAgICAgfVxuICAgIH0gIFxuXG4gICAgY2hhbmdlTmF2YmFyKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGFuZ2VOYXZiYXIpO1xuXG4gICAgLy9EYXJrIE1vZGUgQXV0by9NYW51YWwgVG9nZ2xlXG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VGhlbWUpXG4gICAgaWYgKGN1cnJlbnRUaGVtZSA9PSBcImRhcmtcIikge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFyay10aGVtZVwiKTtcbiAgICAgIHNldERhcmtNb2RlKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFRoZW1lID09IFwibGlnaHRcIikge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlnaHQtdGhlbWVcIik7XG4gICAgICBzZXREYXJrTW9kZShmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZU5hdmJhcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9eyBuYXZiYXIgXG4gICAgICA/IFwiYmctYmx1ZS1saWdodCBiZy1vcGFjaXR5LTc1IHN0aWNreSB0b3AtMCB6LTUwIGJhY2tkcm9wLWZpbHRlciBmaXJlZm94OmJnLW9wYWNpdHktOTUgdHJhbnNpdGlvbiBlYXN5LWluLW91dCBkdXJhdGlvbi0yMDBcIlxuICAgICAgOiBcImJnLWJsdWUtbGlnaHQgbGc6YmctdHJhbnNwYXJlbnQgc3RpY2t5IHRvcC0wIHotNTAgdHJhbnNpdGlvbiBlYXN5LWluLW91dCBkdXJhdGlvbi0yMDBcIlxuICAgICAgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgY29udGFpbmVyIHB4LTUgcC0yIGxnOnAtNiBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgdGV4dC13aGl0ZSBsZzptci04IGxnOnByLTggbGc6cHgtNiBsZzpib3JkZXItclwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiIHRpdGxlPVwiSG9tZVwiIG9uQ2xpY2s9eygpID0+IG5hdmJhck9wZW4gPyBzZXROYXZiYXJPcGVuKGZhbHNlKSA6IGZhbHNlfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnN2Z1wiIGFsdD1cIkI1OCBGaW5hbmNlIExvZ29cIiBjbGFzc05hbWU9eyBuYXZiYXIgPyBcInctOCBtZDp3LTEwIGZsb2F0LWxlZnQgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdHJhbnNmb3JtXCIgOiBcInctOCBtZDp3LTE2IGZsb2F0LWxlZnQgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdHJhbnNmb3JtXCJ9IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW5cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2YmFyT3BlbighbmF2YmFyT3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2bS03IDZoN1wiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgXCJ3LWZ1bGwgYmxvY2sgZmxleC1ncm93IGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOnctYXV0b1wiICtcbiAgICAgICAgICAgICAgKG5hdmJhck9wZW4gPyBcIiBmbGV4XCIgOiBcIiBoaWRkZW5cIikgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBsZzpmbGV4LWdyb3cgcGwtNiBsZzpwbC0wXCI+XG4gICAgICAgICAgICA8TWVudSBob3Zlcj1cInRleHQtYmx1ZS1kYXJrXCIgb25DbGljaz17KCkgPT4gbmF2YmFyT3BlbiA/IHNldE5hdmJhck9wZW4oZmFsc2UpIDogZmFsc2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17IGlzRGFya01vZGUgPyBcImhpZGRlblwiIDogXCJmaWxsLWN1cnJlbnQgaC04IHctOCByb3VuZGVkLWZ1bGwgaG92ZXI6YmctYmxhY2sgaG92ZXI6dGV4dC13aGl0ZSBwLTFcIn0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIxLjc5NDggMTUuNzk0OUMxOS44OTY0IDE2LjUzMTQgMTcuODI0NyAxNi43MDAxIDE1LjgzMjIgMTYuMjgwM0MxMy44Mzk2IDE1Ljg2MDUgMTIuMDEyMSAxNC44NzAzIDEwLjU3MjIgMTMuNDMwNUM5LjEzMjM1IDExLjk5MDYgOC4xNDIyMSAxMC4xNjMxIDcuNzIyNDEgOC4xNzA1MUM3LjMwMjYxIDYuMTc3OTUgNy40NzEyNSA0LjEwNjMxIDguMjA3OCAyLjIwNzg5QzUuOTI3NDYgMy4wOTY1NiA0LjAyODk4IDQuNzUzNTYgMi44NDAxNiA2Ljg5MjgxQzEuNjUxMzMgOS4wMzIwNiAxLjI0Njc4IDExLjUxOTMgMS42OTYzNCAxMy45MjVDMi4xNDU5MSAxNi4zMzA3IDMuNDIxMzcgMTguNTA0IDUuMzAyNTIgMjAuMDY5NkM3LjE4MzY3IDIxLjYzNTEgOS41NTI0MiAyMi40OTQ3IDExLjk5OTggMjIuNDk5OUMxNC4xMTgyIDIyLjUwMDQgMTYuMTg3MyAyMS44NjA0IDE3LjkzNTMgMjAuNjYzOEMxOS42ODM0IDE5LjQ2NzIgMjEuMDI4OCAxNy43Njk5IDIxLjc5NDggMTUuNzk0OVpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17ICFpc0RhcmtNb2RlID8gXCJoaWRkZW5cIiA6IFwiZmlsbC1jdXJyZW50IGgtOCB3LTggcm91bmRlZC1mdWxsIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgcC0xXCJ9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMiAxNi41QzEzLjE5MzUgMTYuNSAxNC4zMzgxIDE2LjAyNTkgMTUuMTgyIDE1LjE4MkMxNi4wMjU5IDE0LjMzODEgMTYuNSAxMy4xOTM1IDE2LjUgMTJDMTYuNSAxMC44MDY1IDE2LjAyNTkgOS42NjE5MyAxNS4xODIgOC44MTgwMkMxNC4zMzgxIDcuOTc0MTEgMTMuMTkzNSA3LjUgMTIgNy41QzEwLjgwNjUgNy41IDkuNjYxOTMgNy45NzQxMSA4LjgxODAyIDguODE4MDJDNy45NzQxMSA5LjY2MTkzIDcuNSAxMC44MDY1IDcuNSAxMkM3LjUgMTMuMTkzNSA3Ljk3NDExIDE0LjMzODEgOC44MTgwMiAxNS4xODJDOS42NjE5MyAxNi4wMjU5IDEwLjgwNjUgMTYuNSAxMiAxNi41Wk0xMiAxOEMxMy41OTEzIDE4IDE1LjExNzQgMTcuMzY3OSAxNi4yNDI2IDE2LjI0MjZDMTcuMzY3OSAxNS4xMTc0IDE4IDEzLjU5MTMgMTggMTJDMTggMTAuNDA4NyAxNy4zNjc5IDguODgyNTggMTYuMjQyNiA3Ljc1NzM2QzE1LjExNzQgNi42MzIxNCAxMy41OTEzIDYgMTIgNkMxMC40MDg3IDYgOC44ODI1OCA2LjYzMjE0IDcuNzU3MzYgNy43NTczNkM2LjYzMjE0IDguODgyNTggNiAxMC40MDg3IDYgMTJDNiAxMy41OTEzIDYuNjMyMTQgMTUuMTE3NCA3Ljc1NzM2IDE2LjI0MjZDOC44ODI1OCAxNy4zNjc5IDEwLjQwODcgMTggMTIgMThaTTEyIDBDMTIuMTk4OSAwIDEyLjM4OTcgMC4wNzkwMTc2IDEyLjUzMDMgMC4yMTk2N0MxMi42NzEgMC4zNjAzMjIgMTIuNzUgMC41NTEwODggMTIuNzUgMC43NVYzLjc1QzEyLjc1IDMuOTQ4OTEgMTIuNjcxIDQuMTM5NjggMTIuNTMwMyA0LjI4MDMzQzEyLjM4OTcgNC40MjA5OCAxMi4xOTg5IDQuNSAxMiA0LjVDMTEuODAxMSA0LjUgMTEuNjEwMyA0LjQyMDk4IDExLjQ2OTcgNC4yODAzM0MxMS4zMjkgNC4xMzk2OCAxMS4yNSAzLjk0ODkxIDExLjI1IDMuNzVWMC43NUMxMS4yNSAwLjU1MTA4OCAxMS4zMjkgMC4zNjAzMjIgMTEuNDY5NyAwLjIxOTY3QzExLjYxMDMgMC4wNzkwMTc2IDExLjgwMTEgMCAxMiAwVjBaTTEyIDE5LjVDMTIuMTk4OSAxOS41IDEyLjM4OTcgMTkuNTc5IDEyLjUzMDMgMTkuNzE5N0MxMi42NzEgMTkuODYwMyAxMi43NSAyMC4wNTExIDEyLjc1IDIwLjI1VjIzLjI1QzEyLjc1IDIzLjQ0ODkgMTIuNjcxIDIzLjYzOTcgMTIuNTMwMyAyMy43ODAzQzEyLjM4OTcgMjMuOTIxIDEyLjE5ODkgMjQgMTIgMjRDMTEuODAxMSAyNCAxMS42MTAzIDIzLjkyMSAxMS40Njk3IDIzLjc4MDNDMTEuMzI5IDIzLjYzOTcgMTEuMjUgMjMuNDQ4OSAxMS4yNSAyMy4yNVYyMC4yNUMxMS4yNSAyMC4wNTExIDExLjMyOSAxOS44NjAzIDExLjQ2OTcgMTkuNzE5N0MxMS42MTAzIDE5LjU3OSAxMS44MDExIDE5LjUgMTIgMTkuNVpNMjQgMTJDMjQgMTIuMTk4OSAyMy45MjEgMTIuMzg5NyAyMy43ODAzIDEyLjUzMDNDMjMuNjM5NyAxMi42NzEgMjMuNDQ4OSAxMi43NSAyMy4yNSAxMi43NUgyMC4yNUMyMC4wNTExIDEyLjc1IDE5Ljg2MDMgMTIuNjcxIDE5LjcxOTcgMTIuNTMwM0MxOS41NzkgMTIuMzg5NyAxOS41IDEyLjE5ODkgMTkuNSAxMkMxOS41IDExLjgwMTEgMTkuNTc5IDExLjYxMDMgMTkuNzE5NyAxMS40Njk3QzE5Ljg2MDMgMTEuMzI5IDIwLjA1MTEgMTEuMjUgMjAuMjUgMTEuMjVIMjMuMjVDMjMuNDQ4OSAxMS4yNSAyMy42Mzk3IDExLjMyOSAyMy43ODAzIDExLjQ2OTdDMjMuOTIxIDExLjYxMDMgMjQgMTEuODAxMSAyNCAxMlpNNC41IDEyQzQuNSAxMi4xOTg5IDQuNDIwOTggMTIuMzg5NyA0LjI4MDMzIDEyLjUzMDNDNC4xMzk2OCAxMi42NzEgMy45NDg5MSAxMi43NSAzLjc1IDEyLjc1SDAuNzVDMC41NTEwODggMTIuNzUgMC4zNjAzMjIgMTIuNjcxIDAuMjE5NjcgMTIuNTMwM0MwLjA3OTAxNzYgMTIuMzg5NyAwIDEyLjE5ODkgMCAxMkMwIDExLjgwMTEgMC4wNzkwMTc2IDExLjYxMDMgMC4yMTk2NyAxMS40Njk3QzAuMzYwMzIyIDExLjMyOSAwLjU1MTA4OCAxMS4yNSAwLjc1IDExLjI1SDMuNzVDMy45NDg5MSAxMS4yNSA0LjEzOTY4IDExLjMyOSA0LjI4MDMzIDExLjQ2OTdDNC40MjA5OCAxMS42MTAzIDQuNSAxMS44MDExIDQuNSAxMlpNMjAuNDg1NSAzLjUxNDVDMjAuNjI2MSAzLjY1NTE1IDIwLjcwNTEgMy44NDU4OCAyMC43MDUxIDQuMDQ0NzVDMjAuNzA1MSA0LjI0MzYyIDIwLjYyNjEgNC40MzQzNSAyMC40ODU1IDQuNTc1TDE4LjM2NDUgNi42OTc1QzE4LjI5NDggNi43NjcxMyAxOC4yMTIgNi44MjIzNSAxOC4xMjA5IDYuODZDMTguMDI5OSA2Ljg5NzY1IDE3LjkzMjMgNi45MTY5OSAxNy44MzM3IDYuOTE2OTJDMTcuNjM0NyA2LjkxNjc4IDE3LjQ0MzkgNi44Mzc1OCAxNy4zMDMyIDYuNjk2NzVDMTcuMjMzNiA2LjYyNzAyIDE3LjE3ODQgNi41NDQyNSAxNy4xNDA4IDYuNDUzMThDMTcuMTAzMSA2LjM2MjExIDE3LjA4MzggNi4yNjQ1MiAxNy4wODM4IDYuMTY1OTdDMTcuMDg0IDUuOTY2OTUgMTcuMTYzMiA1Ljc3NjEzIDE3LjMwNCA1LjYzNTVMMTkuNDI1IDMuNTE0NUMxOS41NjU2IDMuMzczOSAxOS43NTY0IDMuMjk0OTEgMTkuOTU1MiAzLjI5NDkxQzIwLjE1NDEgMy4yOTQ5MSAyMC4zNDQ5IDMuMzczOSAyMC40ODU1IDMuNTE0NVpNNi42OTYgMTcuMzA0QzYuODM2NiAxNy40NDQ2IDYuOTE1NTkgMTcuNjM1NCA2LjkxNTU5IDE3LjgzNDJDNi45MTU1OSAxOC4wMzMxIDYuODM2NiAxOC4yMjM5IDYuNjk2IDE4LjM2NDVMNC41NzUgMjAuNDg1NUM0LjQzMzU1IDIwLjYyMjEgNC4yNDQxIDIwLjY5NzcgNC4wNDc0NSAyMC42OTZDMy44NTA4IDIwLjY5NDMgMy42NjI2OSAyMC42MTU0IDMuNTIzNjQgMjAuNDc2NEMzLjM4NDU4IDIwLjMzNzMgMy4zMDU3IDIwLjE0OTIgMy4zMDM5OSAxOS45NTI2QzMuMzAyMjkgMTkuNzU1OSAzLjM3Nzg4IDE5LjU2NjUgMy41MTQ1IDE5LjQyNUw1LjYzNTUgMTcuMzA0QzUuNzc2MTUgMTcuMTYzNCA1Ljk2Njg4IDE3LjA4NDQgNi4xNjU3NSAxNy4wODQ0QzYuMzY0NjIgMTcuMDg0NCA2LjU1NTM1IDE3LjE2MzQgNi42OTYgMTcuMzA0Wk0yMC40ODU1IDIwLjQ4NTVDMjAuMzQ0OSAyMC42MjYxIDIwLjE1NDEgMjAuNzA1MSAxOS45NTUyIDIwLjcwNTFDMTkuNzU2NCAyMC43MDUxIDE5LjU2NTYgMjAuNjI2MSAxOS40MjUgMjAuNDg1NUwxNy4zMDQgMTguMzY0NUMxNy4xNjc0IDE4LjIyMyAxNy4wOTE4IDE4LjAzMzYgMTcuMDkzNSAxNy44MzY5QzE3LjA5NTIgMTcuNjQwMyAxNy4xNzQxIDE3LjQ1MjIgMTcuMzEzMSAxNy4zMTMxQzE3LjQ1MjIgMTcuMTc0MSAxNy42NDAzIDE3LjA5NTIgMTcuODM2OSAxNy4wOTM1QzE4LjAzMzYgMTcuMDkxOCAxOC4yMjMgMTcuMTY3NCAxOC4zNjQ1IDE3LjMwNEwyMC40ODU1IDE5LjQyNUMyMC42MjYxIDE5LjU2NTYgMjAuNzA1MSAxOS43NTY0IDIwLjcwNTEgMTkuOTU1MkMyMC43MDUxIDIwLjE1NDEgMjAuNjI2MSAyMC4zNDQ5IDIwLjQ4NTUgMjAuNDg1NVpNNi42OTYgNi42OTc1QzYuNTU1MzUgNi44MzgxIDYuMzY0NjIgNi45MTcwOSA2LjE2NTc1IDYuOTE3MDlDNS45NjY4OCA2LjkxNzA5IDUuNzc2MTUgNi44MzgxIDUuNjM1NSA2LjY5NzVMMy41MTQ1IDQuNTc1QzMuNDQyODcgNC41MDU4MiAzLjM4NTczIDQuNDIzMDYgMy4zNDY0MiA0LjMzMTU1QzMuMzA3MTIgNC4yNDAwNSAzLjI4NjQzIDQuMTQxNjQgMy4yODU1NiA0LjA0MjA1QzMuMjg0NyAzLjk0MjQ3IDMuMzAzNjcgMy44NDM3MSAzLjM0MTM4IDMuNzUxNTNDMy4zNzkwOSAzLjY1OTM2IDMuNDM0NzggMy41NzU2MiAzLjUwNTIgMy41MDUyQzMuNTc1NjIgMy40MzQ3OCAzLjY1OTM2IDMuMzc5MDkgMy43NTE1MyAzLjM0MTM4QzMuODQzNzEgMy4zMDM2NyAzLjk0MjQ3IDMuMjg0NyA0LjA0MjA1IDMuMjg1NTZDNC4xNDE2NCAzLjI4NjQzIDQuMjQwMDUgMy4zMDcxMiA0LjMzMTU1IDMuMzQ2NDJDNC40MjMwNiAzLjM4NTczIDQuNTA1ODIgMy40NDI4NyA0LjU3NSAzLjUxNDVMNi42OTYgNS42MzU1QzYuNzY1ODUgNS43MDUxNyA2LjgyMTI2IDUuNzg3OTMgNi44NTkwNyA1Ljg3OTA1QzYuODk2ODggNS45NzAxNyA2LjkxNjM0IDYuMDY3ODUgNi45MTYzNCA2LjE2NjVDNi45MTYzNCA2LjI2NTE1IDYuODk2ODggNi4zNjI4MyA2Ljg1OTA3IDYuNDUzOTVDNi44MjEyNiA2LjU0NTA3IDYuNzY1ODUgNi42Mjc4MyA2LjY5NiA2LjY5NzVaXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigation.tsx\n");

/***/ })

})