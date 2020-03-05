(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* General styles */\nbody {\n  margin: 0;\n  /* font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; */\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n\n/* Antd styles */\n/* CAROUSEL */\n.ant-carousel .slick-slide {\n  text-align: center;\n  height: 52vh;\n  line-height: 52vh;\n  background: #364d79;\n  overflow: hidden;\n}\n\n.ant-carousel .slick-slide h3 {\n  color: #fff;\n}\n\n.firstSlide {\n  background-image: url('/Library.jpeg');\n  background-size: cover; \n}\n\n.secondSlide {\n  background-image: url('/Books.jpeg');\n  background-size: cover; \n}\n\n.thirdSlide {\n  background-image: url('/Books2.jpeg');\n  background-size: cover; \n}\n\n.fourthSlide{\n  background-image: url('/Books3.jpeg');\n  background-size: cover; \n}\n\n/* TABS AND MENU*/\n.ant-tabs-bar .ant-tabs-top-bar{\n  margin: 0;\n}\n\n/* Other styles */\n.navbar{\n  height: 10vh;\n  display: flex;\n  /* align-items: center; */\n  justify-content: space-between;\n}\n\n.links {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n  height: 100%;\n}\n\n.navbar a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  transition: all 0.3s linear;\n  text-decoration: none;\n  color: #333;\n}\n\n.navbar a:hover {\n  color: #333;\n}\n\n.navbar a.nav-active{\n  background-color: whitesmoke;\n  color: #436199;\n}\n\n.noBorder{\n  border: none;\n  outline: none;\n  color: #333;\n}\n\n.noBorder:hover{\n  color: #333;\n}\n\n.logo img, .logo{\n  height: 100%;\n}\n\n.logo {\n  padding: 0 10px;\n}\n\n.content{\n  margin: 0 20px;\n  padding: 0px 20px;\n  width: 75vw;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: justify;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.imgResize {\n  width: 70%;\n  height: 50%;\n}\n\n.imgResize img{\n  width: 100%;\n  height: 100%;\n  margin: auto 0;\n}\n\n.card {\n  align-content: center;\n  text-align: center;\n  margin: 10px;\n  border: 2px solid rgb(17, 19, 46);\n}\n\n.card h3{\n  font-family: 'Times New Roman', Times, serif;\n  color: rgb(17, 19, 46);\n}\n\n.card .button {\n  bottom: 0px;\n}\n\n.imageAndText {\n  display: flex;\n}\n\n.imgContainer {\n  text-align: center;\n  height: 50vh;\n  background-image: url('/notebook.jpeg');\n  background-size: cover; \n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-size: 3em;\n}\n\n.imgContainer h1, .imgContainer h2{\n  padding-top: 9%;\n  color: rgb(16, 16, 37);\n}\n\n.default {\n  text-align: center;\n  height: 20vh;\n  padding-top: 20px;\n}\n\n.detailContainer {\n  width: 100%;\n  /* height: 110vh; */\n  margin-left: auto;\n  margin-right: auto;\n  /* background-color: rgb(247, 244, 244); */\n}\n\n.detailContainer h1 {\n  text-align: center;\n  height: 15vh;\n  background: #253552;\n  color: whitesmoke;\n  font-weight: lighter;\n  font-family: 'Times New Roman', Times, serif;\n  padding-top: 20px; \n}\n\n.imgAndDescription {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  justify-content: center;\n  height: 60vh;\n}\n\n.description {\n  width: 50%;\n  padding-left: 20px;\n  margin-top: 20px; \n  text-align: justify;\n}\n\n.description h3 {\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: bold;\n  color: rgb(90, 90, 90);\n}\n\n.imgAndDescription img {\n  height: 90%;\n}\n\n.auth {\n  height: 83vh;\n  background-image: url('/LibraryAuth.jpeg');\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  align-content: center;\n}\n\n.signupContainer {\n  width: 35%;\n  height: 40%;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 5px;\n  padding: 15px;\n  text-align: center;\n  border: 2px solid rgb(25, 25, 58);\n}\n\n.signupContainer h2 {\n  color: rgb(25, 25, 58);\n  font-weight: bold;\n}\n\n.signupContainer input {\n  border: none;\n  border-radius: 3px;\n  background: rgb(240, 240, 240);\n  width: 70%;\n  height: 15%;\n  margin: 2px;\n  padding-left: 5px; \n}\n\n.signupContainer .button{\n  background: rgb(25, 25, 58);\n  color: #fff;\n  border: none;\n  margin: 5px 0;\n}\n\n.profile{\n  height: 83vh;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background-image: url('/LibraryAuth.jpeg');\n  background-size: cover;\n}\n\n.profileContainer {\n  width: 70%;\n  height: 85%;\n  background: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  border-radius: 10px;\n  display: flex;\n}\n\n.imgAndName{\n  width: 40%;\n  text-align: center;\n}\n\n.interests{\n  width: 60%;\n  text-align: center;\n}\n\n.imgAndName img {\n  width: 35%;\n  border-radius: 100px;\n  box-shadow: 0px 0px 0px 2px rgba(52, 52, 54, 0.192);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.create {\n  background-image: url('/LibraryLight.jpeg');\n  background-size: cover;\n  width: 100%;\n  height: 83vh;\n  display: flex;\n  align-content: center;\n  align-items: center;\n}\n\n.createContainer{\n  background: rgba(255, 255, 255);\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  border-radius: 10px;\n  width: 60%;\n  align-content: center;\n  border: 2px solid rgb(25, 25, 58);\n}\n\n.createContainer .button{\n  background: rgb(25, 25, 58);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n}\n\n.createContainer .button:hover{\n  cursor: pointer;\n}\n\n.createContainer table {\n  width: 95%;\n}\n\n.createContainer td {\n  text-align: left;\n}\n\n.createContainer td input, .createContainer td textarea {\n  border: none;\n  border-radius: 3px;\n  background: rgb(233, 233, 233);\n  width: 70%;\n  height: 20%;\n  margin-top: 2px;\n  margin-left: 10px;\n  padding-left: 5px; \n}\n\n.createContainer h1 {\n  text-align: center;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 375px){\n  .imageAndText {\n   flex-wrap: wrap;\n  }\n\n  .imgContainer{\n    /* font-size: 1.5em; */\n    height: 20vh;\n  }\n\n  .imgContainer h2{\n    font-size: 1.2em;\n    padding-top: 20%;\n  }\n\n  .links{\n    width: 40%;\n  }\n  \n  .detailContainer h1 {\n    height: 20vh;\n    font-size: 1.5em;\n    padding-top: 20px;\n  }\n\n  .detailContainer {\n    width: 100%;\n    /* height: 120vh; */\n  }\n\n  .imgAndDescription img {\n    height: 50%;\n  }\n\n  .default {\n    height: 55vh;\n  }\n\n  .default h2 {\n    font-size: 1.3em;\n  }\n}\n\n@media screen and (max-width: 768px){\n  .imageAndText {\n   flex-wrap: wrap;\n  }\n\n  .imgContainer{\n    font-size: 2.5em;\n    height: 25vh;\n  }\n\n  .imgContainer h2{\n    padding-top: 12%;\n  }\n\n  .default{\n    height: 59vh;\n  }\n}\n", ""]);



/***/ }),

/***/ "./src/Context.js":
/*!************************!*\
  !*** ./src/Context.js ***!
  \************************/
/*! exports provided: MyContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContext", function() { return MyContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/Context.js";

const MyContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
class ContextProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      place: 'Home',
      user: null
    };

    this.changePlace = place => {
      this.setState({
        place
      });
    };

    this.login = user => this.setState({
      user
    });

    this.logout = () => this.setState({
      user: null
    });
  }

  render() {
    const changePlace = this.changePlace,
          state = this.state,
          login = this.login,
          logout = this.logout;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyContext.Provider, {
      value: {
        state,
        changePlace,
        login,
        logout
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, this.props.children);
  }

}

/***/ }),

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_AuthComponents_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AuthComponents/Login */ "./src/components/AuthComponents/Login.js");
/* harmony import */ var _components_AuthComponents_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AuthComponents/Signup */ "./src/components/AuthComponents/Signup.js");
/* harmony import */ var _components_GeneralComponents_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/GeneralComponents/Navbar */ "./src/components/GeneralComponents/Navbar.js");
/* harmony import */ var _components_BecasComponents_Becas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BecasComponents/Becas */ "./src/components/BecasComponents/Becas.js");
/* harmony import */ var _components_PremiosComponents_Premios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PremiosComponents/Premios */ "./src/components/PremiosComponents/Premios.js");
/* harmony import */ var _components_BPC_All__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BPC/All */ "./src/components/BPC/All.js");
/* harmony import */ var _components_BecasComponents_DetailBeca__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/BecasComponents/DetailBeca */ "./src/components/BecasComponents/DetailBeca.js");
/* harmony import */ var _components_PremiosComponents_DetailPremio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PremiosComponents/DetailPremio */ "./src/components/PremiosComponents/DetailPremio.js");
/* harmony import */ var _components_BPC_ByField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/BPC/ByField */ "./src/components/BPC/ByField.js");
/* harmony import */ var _components_AuthComponents_Profile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/AuthComponents/Profile */ "./src/components/AuthComponents/Profile.js");
/* harmony import */ var _components_BecasComponents_CreateBeca__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/BecasComponents/CreateBeca */ "./src/components/BecasComponents/CreateBeca.js");
/* harmony import */ var _components_PremiosComponents_CreatePremio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/PremiosComponents/CreatePremio */ "./src/components/PremiosComponents/CreatePremio.js");
/* harmony import */ var _components_BecasComponents_EditBeca__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/BecasComponents/EditBeca */ "./src/components/BecasComponents/EditBeca.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth */ "./src/services/auth.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Context */ "./src/Context.js");
/* harmony import */ var _components_PremiosComponents_EditPremio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/PremiosComponents/EditPremio */ "./src/components/PremiosComponents/EditPremio.js");
var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/Router.js";




















const Router = () => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_17__["MyContext"]),
        login = _useContext.login,
        changeIsLogged = _useContext.changeIsLogged;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const service = new _services_auth__WEBPACK_IMPORTED_MODULE_16__["default"]();

    const getProfile = async () => {
      const _ref = await service.profile(),
            user = _ref.data.user;

      login(user);
    };

    getProfile();
  }, [changeIsLogged, login]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GeneralComponents_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _components_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/login",
    component: _components_AuthComponents_Login__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/signup",
    component: _components_AuthComponents_Signup__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/profile",
    component: _components_AuthComponents_Profile__WEBPACK_IMPORTED_MODULE_12__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/all",
    component: _components_BPC_All__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/becas",
    component: _components_BecasComponents_Becas__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/pc",
    component: _components_PremiosComponents_Premios__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/beca/:id",
    component: _components_BecasComponents_DetailBeca__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/pc/:id",
    component: _components_PremiosComponents_DetailPremio__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/createBeca",
    component: _components_BecasComponents_CreateBeca__WEBPACK_IMPORTED_MODULE_13__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/createPremio",
    component: _components_PremiosComponents_CreatePremio__WEBPACK_IMPORTED_MODULE_14__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/editBeca",
    component: _components_BecasComponents_EditBeca__WEBPACK_IMPORTED_MODULE_15__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/editPremio",
    component: _components_PremiosComponents_EditPremio__WEBPACK_IMPORTED_MODULE_18__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/:type/:field",
    component: _components_BPC_ByField__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/components/AuthComponents/Login.js":
/*!************************************************!*\
  !*** ./src/components/AuthComponents/Login.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useForm */ "./src/hooks/useForm.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth */ "./src/services/auth.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/AuthComponents/Login.js";







const Login = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"]),
        changePlace = _useContext.changePlace,
        login = _useContext.login;

  const authService = new _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"]();

  const _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        _useForm2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useForm, 2),
        form = _useForm2[0],
        handleInputs = _useForm2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    changePlace('auth');
  }, [changePlace]);

  const handleLogin = () => {
    authService.login(form).then(response => {
      login(response.data.user);
      localStorage.setItem("USER", JSON.stringify(response.data.user));
      props.history.push('/profile');
    }).catch(err => {
      console.log(err);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "signupContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "username",
    placeholder: "Usuario",
    onChange: handleInputs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Contrase\xF1a",
    onChange: handleInputs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: "button",
    onClick: handleLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Login"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "\xBFA\xFAn no tienes una cuenta con nosotros? ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Reg\xEDstrate")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/AuthComponents/Profile.js":
/*!**************************************************!*\
  !*** ./src/components/AuthComponents/Profile.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useForm */ "./src/hooks/useForm.js");

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/AuthComponents/Profile.js";






const Profile = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_2__["MyContext"]),
        state = _useContext.state;

  const _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        _useForm2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useForm, 2),
        form = _useForm2[0],
        uploadPhoto = _useForm2[1];

  if (!state.user) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Loading...");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "profileContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "imgAndName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: state.user.image,
    alt: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "file",
    name: "image",
    onChange: uploadPhoto,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), form.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: form.image,
    alt: "photo_url",
    width: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, state.user.username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_2__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, ({
    state
  }) => //console.log(state)
  state.user.role === 'ADMIN' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "ADMIN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/createBeca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "CREAR BECA")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/createPremio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "CREAR PREMIO O CONCURSO"))) : '')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "interests",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "\xC1reas de inter\xE9s"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/components/AuthComponents/Signup.js":
/*!*************************************************!*\
  !*** ./src/components/AuthComponents/Signup.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useForm */ "./src/hooks/useForm.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth */ "./src/services/auth.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/AuthComponents/Signup.js";






const Signup = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"]),
        changePlace = _useContext.changePlace,
        login = _useContext.login;

  const authService = new _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"]();

  const _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        _useForm2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useForm, 2),
        form = _useForm2[0],
        handleInputs = _useForm2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    changePlace('auth');
  }, [changePlace]);

  const handleSignup = () => {
    authService.signup(form).then(response => {
      login(response.data.user);
      localStorage.setItem("USER", JSON.stringify(response.data.user));
      props.history.push('/profile');
    }).catch(err => {
      console.log(form);
      console.log(err);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "auth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "signupContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "\xA1Crea tu cuenta!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "username",
    placeholder: "Usuario",
    onChange: e => handleInputs(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    onChange: e => handleInputs(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Contrase\xF1a",
    onChange: e => handleInputs(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: "button",
    onClick: handleSignup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Signup")));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./src/components/BPC/All.js":
/*!***********************************!*\
  !*** ./src/components/BPC/All.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/BPC/All.js";






const All = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        bpc = _useState2[0],
        setBPC = _useState2[1];

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_5__["MyContext"]),
        changePlace = _useContext.changePlace;

  const isProduction = "development" === "production";
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(baseURL, "/api/becapremioyconcurso")).then(({
      data
    }) => {
      setBPC(prevState => {
        return [...prevState, ...data.all[0], ...data.all[1]];
      });
    }).catch(err => console.log(err));
    changePlace('Home');
  }, [changePlace, baseURL]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "imgContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "BECAS, PREMIOS Y CONCURSOS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      background: '#ECECEC',
      padding: '10px'
    },
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, bpc.map(bpc => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: bpc._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      bordered: false,
      style: {
        width: 350,
        height: 280
      },
      className: "card",
      key: bpc._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, bpc.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, bpc.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/".concat(bpc.classification === undefined ? 'beca' : 'pc', "/").concat(bpc._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, "Ver detalles"))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (All);

/***/ }),

/***/ "./src/components/BPC/ByField.js":
/*!***************************************!*\
  !*** ./src/components/BPC/ByField.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/BPC/ByField.js";






const ByField = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        results = _useState2[0],
        setResults = _useState2[1];

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_3__["MyContext"]),
        changePlace = _useContext.changePlace;

  const type = props.match.params.type;
  const field = props.match.params.field;
  const aux = type === 'becas' ? 'beca' : 'pc';
  const isProduction = "development" === "production";
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    type === 'becas' ? axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(baseURL, "/api/").concat(type, "/").concat(field)).then(({
      data
    }) => {
      setResults(prevState => {
        return [...data.becas];
      });
    }).catch(err => console.log(err)) : axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(baseURL, "/api/").concat(type, "/").concat(field)).then(({
      data
    }) => {
      setResults(prevState => {
        return [...data.premios];
      });
    }).catch(err => console.log(err));
    changePlace(type);
  }, [changePlace, type, field, baseURL]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "imgContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, field === 'literatura' ? 'LITERATURA' : field === 'cienciaytecnologia' ? 'CIENCIA Y TECNOLOGÍA' : field === 'educacion' ? 'EDUCACIÓN' : field === 'emprendimiento' ? 'EMPRENDIMIENTO' : field === 'arteycultura' ? 'ARTE Y CULTURA' : 'OTROS')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      background: '#ECECEC',
      padding: '10px'
    },
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, results.length !== 0 ? results.map(result => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: result._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      bordered: false,
      style: {
        width: 350,
        height: 280
      },
      className: "card",
      key: result._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }, result.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, result.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/".concat(aux, "/").concat(result._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, "Ver detalles"))));
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "A\xFAn no hay ", type === 'becas' ? 'becas' : 'premios ni concursos', " en esta secci\xF3n...\xBFsabes de ", type === 'becas' ? 'alguna' : 'alguno', "?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "\xA1Cont\xE1ctanos!")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ByField);

/***/ }),

/***/ "./src/components/BecasComponents/Becas.js":
/*!*************************************************!*\
  !*** ./src/components/BecasComponents/Becas.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/BecasComponents/Becas.js";






const Becas = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        becas = _useState2[0],
        setBecas = _useState2[1];

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_2__["MyContext"]),
        changePlace = _useContext.changePlace;

  const isProduction = "development" === "production";
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(baseURL, "/api/beca")).then(({
      data
    }) => {
      setBecas(prevState => {
        return [...prevState, ...data.becas];
      });
    }).catch(err => console.log(err));
    changePlace('Becas');
  }, [changePlace, baseURL]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "imgContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "BECAS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      background: '#ECECEC',
      padding: '10px'
    },
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, becas.map(beca => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      bordered: false,
      style: {
        width: 350,
        height: 270
      },
      className: "card",
      key: beca._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, beca.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, beca.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/beca/".concat(beca._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, "Ver detalles")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Becas);

/***/ }),

/***/ "./src/components/BecasComponents/CreateBeca.js":
/*!******************************************************!*\
  !*** ./src/components/BecasComponents/CreateBeca.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useForm */ "./src/hooks/useForm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/BecasComponents/CreateBeca.js";





const CreateBeca = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_2__["MyContext"]),
        changeIsLogged = _useContext.changeIsLogged;

  const _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        _useForm2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useForm, 3),
        form = _useForm2[0],
        handleInputs = _useForm2[1],
        uploadPhoto = _useForm2[2];

  const isProduction = "development" === "production";
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let user = JSON.parse(localStorage.getItem("USER"));

    if (!user || user.role === 'USER') {
      changeIsLogged(true);
      props.history.push('/');
    }
  });

  const createBeca = () => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(baseURL, "/api/beca"), form).then(({
      data
    }) => {
      props.history.push("/beca/".concat(data.beca._id));
    }).catch(err => {
      console.log(err);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "createContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Crear Beca"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    style: {
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "T\xEDtulo:")), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "title",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    style: {
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Descripci\xF3n:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    type: "text",
    name: "description",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    style: {
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Imagen:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "file",
    name: "image",
    onChange: uploadPhoto,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, form.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: form.image,
    alt: "photo_url",
    width: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    style: {
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Campo:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    defaultValue: "-",
    name: "field",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "-",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "---"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "literatura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Literatura"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "arteycultura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Arte y Cultura"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "cienciaytecnologia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Ciencia y Tecnolog\xEDa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "emprendimiento",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Emprendimiento"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "educacion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Educaci\xF3n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "otros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Otro")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    style: {
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "\xDAltimo d\xEDa para aplicar:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "date",
    name: "endDate",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    style: {
      textAlign: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Link de la convocatoria:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "link",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button",
    onClick: createBeca,
    disabled: form.image ? false : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "CREAR")));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateBeca);

/***/ }),

/***/ "./src/components/BecasComponents/DetailBeca.js":
/*!******************************************************!*\
  !*** ./src/components/BecasComponents/DetailBeca.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useForm */ "./src/hooks/useForm.js");


var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/BecasComponents/DetailBeca.js";







const DetailBeca = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        beca = _useState2[0],
        setBeca = _useState2[1];

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_5__["MyContext"]),
        changePlace = _useContext.changePlace;

  const _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])(),
        _useForm2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useForm, 3),
        form = _useForm2[0],
        handleInputs = _useForm2[1],
        uploadPhoto = _useForm2[2];

  const id = props.match.params.id;
  const isProduction = "development" === "production";
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000';
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(baseURL, "/api/beca/") + id).then(({
      data
    }) => {
      setBeca(prevState => {
        return Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          prevState
        }, data.beca);
      });
    }).catch(err => console.log(err));
    changePlace('Becas');
  }, [changePlace, id, baseURL]);

  const deleteBeca = () => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete("".concat(baseURL, "/api/beca/").concat(id)).then(({
      data
    }) => {
      props.history.push('/becas');
    }).catch(err => console.log(err));
  };

  const updateBeca = () => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("".concat(baseURL, "/api/beca/").concat(id), form).then(({
      data
    }) => {
      setBeca(prevState => {
        return Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, data.beca);
      });
    }).catch(err => {
      console.log(err);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "detailContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, beca.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_5__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, ({
    state
  }) => {
    console.log(beca);
    if (!state.user) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, "....Loading");
    return state.user.role === 'ADMIN' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: deleteBeca,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, "Borrar"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/editBeca",
      params: {
        beca: {
          beca
        },
        form: {
          form
        },
        uploadPhoto: {
          uploadPhoto
        },
        handleInputs: {
          handleInputs
        },
        updateBeca: {
          updateBeca
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, "EDITAR")) : '';
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "imgAndDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: beca.image,
    alt: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "DESCRIPCI\xD3N"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, beca.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "FECHA L\xCDMITE PARA APLICAR"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, beca.endDate), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: beca.link,
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Convocatoria")))));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailBeca);

/***/ }),

/***/ "./src/components/BecasComponents/EditBeca.js":
/*!****************************************************!*\
  !*** ./src/components/BecasComponents/EditBeca.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/BecasComponents/EditBeca.js";


const EditBeca = ({
  beca,
  form,
  uploadPhoto,
  handleInputs,
  updateBeca
}) => {
  console.log(beca);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Form para editar beca"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "T\xEDtulo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "title",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Descripci\xF3n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    type: "text",
    name: "description",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Imagen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    name: "image",
    onChange: uploadPhoto,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Campo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: "-",
    name: "field",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "-",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "---"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "literatura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Literatura"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "arteycultura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Arte y Cultura"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "cienciaytecnologia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Ciencia y Tecnolog\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "emprendimiento",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Emprendimiento"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "educacion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Educaci\xF3n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "otros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Otro"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "\xDAltimo d\xEDa para aplicar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "date",
    name: "endDate",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Link de la convocatoria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "link",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: updateBeca,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "GUARDAR"));
};

/* harmony default export */ __webpack_exports__["default"] = (EditBeca);

/***/ }),

/***/ "./src/components/GeneralComponents/MenuC.js":
/*!***************************************************!*\
  !*** ./src/components/GeneralComponents/MenuC.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/GeneralComponents/MenuC.js";



const SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;
class MenuC extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      current: ''
    };

    this.handleClick = e => {
      if (e.key === 'all') {
        this.setState({
          current: ''
        });
      } else {
        this.setState({
          current: e.key
        });
      }
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      onClick: this.handleClick,
      selectedKeys: [this.state.current],
      mode: "horizontal",
      theme: "dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "all",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/all",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "smile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), "Todos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubMenu, {
      key: "becas",
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "submenu-title-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), "Becas"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].ItemGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Todas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/becas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Todas")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Literatura",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/becas/literatura",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Literatura")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Ciencia y tecnolog\xEDa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/becas/cienciaytecnologia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Ciencia y tecnolog\xEDa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Educaci\xF3n",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/becas/educacion",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Educaci\xF3n")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Emprendimiento",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/becas/emprendimiento",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Emprendimiento")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Arte y cultura",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/becas/arteycultura",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Arte y cultura")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Otros",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/becas/otros",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Otros")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubMenu, {
      key: "pc",
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "submenu-title-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), "Premios y Concursos"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].ItemGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Todos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/pc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Todos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Literatura",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/premios/literatura",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Literatura")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Ciencia y tecnolog\xEDa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/premios/cienciaytecnologia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Ciencia y tecnolog\xEDa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Educaci\xF3n",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/premios/educacion",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Educaci\xF3n")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Emprendimiento",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/premios/emprendimiento",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Emprendimiento")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Arte y cultura",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/premios/arteycultura",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Arte y cultura")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "Otros",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: "/premios/otros",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Otros")))));
  }

}

/***/ }),

/***/ "./src/components/GeneralComponents/Navbar.js":
/*!****************************************************!*\
  !*** ./src/components/GeneralComponents/Navbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _SecondaryMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SecondaryMenu */ "./src/components/GeneralComponents/SecondaryMenu.js");
/* harmony import */ var _MenuC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuC */ "./src/components/GeneralComponents/MenuC.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth */ "./src/services/auth.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/GeneralComponents/Navbar.js";








const Navbar = () => {
  const authService = new _services_auth__WEBPACK_IMPORTED_MODULE_5__["default"]();

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"]),
        logout = _useContext.logout;

  const handleLogout = () => {
    authService.logout().then(response => {
      logout();
      localStorage.clear();
    }).catch(err => {
      console.log(err);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/Icon.jpg",
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, ({
    state
  }) => !state.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/",
    activeClassName: "nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/login",
    activeClassName: "nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/signup",
    activeClassName: "nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Signup")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/",
    activeClassName: "nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/profile",
    activeClassName: "nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "noBorder",
    type: "ghost",
    onClick: handleLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Logout"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, ({
    state
  }) => state.place === 'Home' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuC__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }) : state.place === 'auth' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuC__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SecondaryMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/GeneralComponents/SecondaryMenu.js":
/*!***********************************************************!*\
  !*** ./src/components/GeneralComponents/SecondaryMenu.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/GeneralComponents/SecondaryMenu.js";





const SecondaryMenu = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Main'),
        _useState2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        current = _useState2[0],
        setCurrent = _useState2[1];

  const handleClick = e => {
    setCurrent(e.key);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    onClick: handleClick,
    selectedKeys: [current],
    mode: "horizontal",
    theme: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, ({
    state
  }) => state.place === 'Becas' || state.place === 'becas' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/becas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, ({
    state
  }) => state.place.toUpperCase())) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/pc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, ({
    state
  }) => state.place.toUpperCase())))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "literatura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, ({
    state
  }) => state.place === 'Becas' || state.place === 'becas' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/becas/literatura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Literatura") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/premios/literatura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Literatura"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "cienciaytecnolog\xEDa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, ({
    state
  }) => state.place === 'Becas' || state.place === 'becas' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/becas/cienciaytecnologia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Ciencia y tecnolog\xEDa") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/premios/cienciaytecnologia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Ciencia y tecnolog\xEDa"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "educacion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, ({
    state
  }) => state.place === 'Becas' || state.place === 'becas' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/becas/educacion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Educaci\xF3n") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/premios/educacion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Educaci\xF3n"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "emprendimiento",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, ({
    state
  }) => state.place === 'Becas' || state.place === 'becas' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/becas/emprendimiento",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Emprendimiento") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/premios/emprendimiento",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Emprendimiento"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "arteycultura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, ({
    state
  }) => state.place === 'Becas' || state.place === 'becas' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/becas/arteycultura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Arte y cultura") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/premios/arteycultura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Arte y cultura"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "otros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_4__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, ({
    state
  }) => state.place === 'Becas' || state.place === 'becas' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/becas/otros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "Otros") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/premios/otros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Otros"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SecondaryMenu);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomeComponents_CarouselC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponents/CarouselC */ "./src/components/HomeComponents/CarouselC.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ "./src/Context.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/Home.js";




const TabPane = antd__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane;

const Home = () => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_2__["MyContext"]),
        changePlace = _useContext.changePlace;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    changePlace('Home');
  }, [changePlace]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeComponents_CarouselC__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    defaultActiveKey: "1",
    animated: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: "Qui\xE9nes somos",
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Bienvenid@!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "BECAS:MX es un portal en el que monitoreamos medios de comunicaci\xF3n para colectar convocatorias de becas, premios, concursos y oportunidades para cualquier persona que desee superarse. Aqu\xED encontrar\xE1s informaci\xF3n relevante para que puedas acceder a un desarrollo profesional m\xE1s amplio de acuerdo a tu perfil y aspiraciones."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imageAndText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/GradIcon.png",
    alt: "icon",
    width: "150",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Nuestra historia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      textAlign: "justify"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "BECAS:MX surgi\xF3 originalmente en el 2017 como una cuenta en Twitter con el mismo prop\xF3sito de ayudar a las personas a superarse. Si gustas, puedes visitar la cuenta ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/becas_mx",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "aqu\xED"), "."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: "Nuestra p\xE1gina",
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Un poco m\xE1s sobre nosotros"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imageAndText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/BookIcon.png",
    alt: "icon",
    height: "90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    style: {
      marginLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Nuestra p\xE1gina cuenta con informaci\xF3n de becas, premios y concursos nacionales e internacionales. Con la finalidad de ampliar las oportunidades de educaci\xF3n y contribuir en tu crecimiento profesional, nosotros te ayudamos, de manera r\xE1pida y ordenada, a localizar becas de acuerdo a tu perfil profesional, as\xED como a conocer los requisitos y fechas l\xEDmite de aplicaci\xF3n. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), "Este portal pensado y creado para ti te provee de noticias relevantes e informaci\xF3n en torno a las convocatorias de tu inter\xE9s. Asimismo, el sistema te brinda la posibildad de registrarte y seleccionar las \xE1reas de tu inter\xE9s. \xA1Nosotros te contactaremos cada vez que surja una oportunidad para ti!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: "Contacto",
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "\xA1Ay\xFAdanos a mejorar!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "\xBFSabes de alguna convocatoria que no est\xE9 anunciada aqu\xED? \xA1Haznos saber! ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Env\xEDanos un correo")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/HomeComponents/CarouselC.js":
/*!****************************************************!*\
  !*** ./src/components/HomeComponents/CarouselC.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/HomeComponents/CarouselC.js";



const CarouselC = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    autoplay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "firstSlide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "secondSlide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "thirdSlide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fourthSlide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "."))));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselC);

/***/ }),

/***/ "./src/components/PremiosComponents/CreatePremio.js":
/*!**********************************************************!*\
  !*** ./src/components/PremiosComponents/CreatePremio.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useForm */ "./src/hooks/useForm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/PremiosComponents/CreatePremio.js";





const CreatePremio = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_2__["MyContext"]),
        changeIsLogged = _useContext.changeIsLogged;

  const _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        _useForm2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useForm, 3),
        form = _useForm2[0],
        handleInputs = _useForm2[1],
        uploadPhoto = _useForm2[2];

  const isProduction = "development" === "production";
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let user = JSON.parse(localStorage.getItem("USER"));

    if (!user || user.role === 'USER') {
      changeIsLogged(true);
      props.history.push('/');
    }
  });

  const createPremio = () => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(baseURL, "/api/pc"), form).then(({
      data
    }) => {
      //Swal.fire('Created', 'FoodCreated', 'success')
      props.history.push("/pc/".concat(data.pc._id));
    }).catch(err => {
      console.log(err);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "createContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Crear Premio - Concurso"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "T\xEDtulo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "title",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Descripci\xF3n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    type: "text",
    name: "description",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Imagen"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "file",
    name: "image",
    onChange: uploadPhoto,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), form.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: form.image,
    alt: "photo_url",
    width: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Campo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    defaultValue: "-",
    name: "field",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "-",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "---"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "literatura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Literatura"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "arteycultura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Arte y Cultura"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "cienciaytecnologia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Ciencia y Tecnolog\xEDa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "emprendimiento",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Emprendimiento"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "educacion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Educaci\xF3n"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "otros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Otro"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "\xDAltimo d\xEDa para aplicar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "date",
    name: "endDate",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Premio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "prize",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Tipo de moneda"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    defaultValue: "-",
    name: "prizeCurrency",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "-",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "---"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "MXN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "MXN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "USD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "USD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "EUR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "EUR"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Link de la convocatoria"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "link",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button",
    onClick: createPremio,
    disabled: form.image ? false : true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "CREAR")));
};

/* harmony default export */ __webpack_exports__["default"] = (CreatePremio);

/***/ }),

/***/ "./src/components/PremiosComponents/DetailPremio.js":
/*!**********************************************************!*\
  !*** ./src/components/PremiosComponents/DetailPremio.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useForm */ "./src/hooks/useForm.js");


var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/PremiosComponents/DetailPremio.js";







const DetailPremio = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        pc = _useState2[0],
        setPC = _useState2[1];

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_5__["MyContext"]),
        changePlace = _useContext.changePlace;

  const _useForm = Object(_hooks_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])(),
        _useForm2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useForm, 2),
        form = _useForm2[0],
        handleInputs = _useForm2[1];

  const id = props.match.params.id;
  const isProduction = "development" === "production";
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000';
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(baseURL, "/api/pc/").concat(id)).then(({
      data
    }) => {
      setPC(prevState => {
        return Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          prevState
        }, data.pc);
      });
    }).catch(err => console.log(err));
    changePlace('Premios');
  }, [changePlace, id, baseURL]);

  const deletePremio = () => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete("".concat(baseURL, "/api/pc/").concat(id)).then(({
      data
    }) => {
      props.history.push('/pc');
    }).catch(err => console.log(err));
  };

  const updatePremio = () => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("".concat(baseURL, "/api/pc/").concat(id), form).then(({
      data
    }) => {
      setPC(prevState => {
        return Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, data.beca);
      });
    }).catch(err => {
      console.log(err);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "detailContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, pc.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_5__["MyContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, ({
    state
  }) => {
    if (!state.user) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, "....Loading");
    return state.user.role === 'ADMIN' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: deletePremio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, "Borrar"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/editPremio",
      params: {
        pc: {
          pc
        },
        handleInputs: {
          handleInputs
        },
        updateBeca: {
          updatePremio
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, "EDITAR")) : '';
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "imgAndDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: pc.image,
    alt: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "DESCRIPCI\xD3N"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, pc.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "PREMIO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "$", pc.prize, ".00 ", pc.prizeCurrency), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "FECHA L\xCDMITE PARA APLICAR"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, pc.endDate), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: pc.link,
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Convocatoria")))));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailPremio);

/***/ }),

/***/ "./src/components/PremiosComponents/EditPremio.js":
/*!********************************************************!*\
  !*** ./src/components/PremiosComponents/EditPremio.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/PremiosComponents/EditPremio.js";


const EditPremio = ({
  pc,
  handleInputs,
  updatePremio
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Form para editar premio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "T\xEDtulo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "title",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Descripci\xF3n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    type: "text",
    name: "description",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Imagen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "image",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Campo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: "-",
    name: "field",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "-",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "---"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "literatura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Literatura"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "arteycultura",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Arte y Cultura"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "cienciaytecnologia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Ciencia y Tecnolog\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "emprendimiento",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Emprendimiento"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "educacion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Educaci\xF3n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "otros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Otro"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Premio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    name: "prize",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    defaultValue: "-",
    name: "prizeCurrency",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "-",
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "---"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "MXN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "MXN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "USD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "USD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "EUR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "EUR"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "\xDAltimo d\xEDa para aplicar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "date",
    name: "endDate",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Link de la convocatoria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "link",
    onChange: handleInputs,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: updatePremio,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "GUARDAR"));
};

/* harmony default export */ __webpack_exports__["default"] = (EditPremio);

/***/ }),

/***/ "./src/components/PremiosComponents/Premios.js":
/*!*****************************************************!*\
  !*** ./src/components/PremiosComponents/Premios.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Context */ "./src/Context.js");

var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/components/PremiosComponents/Premios.js";






const Premios = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        pcs = _useState2[0],
        setPC = _useState2[1];

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_5__["MyContext"]),
        changePlace = _useContext.changePlace;

  const isProduction = "development" === "production";
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(baseURL, "/api/pc")).then(({
      data
    }) => {
      setPC(prevState => {
        return [...prevState, ...data.pcs];
      });
    }).catch(err => console.log(err));
    changePlace('Premios');
  }, [changePlace, baseURL]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "imgContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "PREMIOS Y CONCURSOS")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      background: '#ECECEC',
      padding: '10px'
    },
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, pcs.map(pc => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      bordered: false,
      style: {
        width: 350,
        height: 280
      },
      className: "card",
      key: pc._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, pc.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, pc.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/pc/".concat(pc._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "primary",
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, "Ver detalles")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Premios);

/***/ }),

/***/ "./src/hooks/useForm.js":
/*!******************************!*\
  !*** ./src/hooks/useForm.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





const useForm = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
        _useState2 = Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        form = _useState2[0],
        setForm = _useState2[1];

  const isProduction = "development" === "production";
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000';

  const handleInputs = e => {
    e.persist();
    setForm(prevState => Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
      [e.target.name]: e.target.value
    }));
  };

  const uploadPhoto = async e => {
    const file = new FormData();
    file.append('image', e.target.files[0]);

    const _ref = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(baseURL, "/upload"), file),
          image = _ref.data.image;

    setForm(prevState => Object(_home_mariana_code_labs_WEEK_8_BECASMX_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
      image
    }));
  };

  return [form, handleInputs, uploadPhoto];
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Router */ "./src/Router.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Context */ "./src/Context.js");
var _jsxFileName = "/home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const isProduction = "development" === "production";
const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'; // const baseURL = 'https://becasmx.herokuapp.com'

class AuthService {
  constructor() {
    this.service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL,
      withCredentials: true
    });
  }

  signup(data) {
    return this.service.post('/auth/signup', data);
  }

  login(data) {
    return this.service.post('/auth/login', data);
  }

  logout() {
    return this.service.get('/auth/logout');
  }

  profile() {
    return this.service.get('/auth/profile');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AuthService);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/mariana/code/labs/WEEK 8/BECASMX/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/mariana/code/labs/WEEK 8/BECASMX/frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map