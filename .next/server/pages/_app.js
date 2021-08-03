(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 587:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-router-dom"
var external_react_router_dom_namespaceObject = require("react-router-dom");;
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(783);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(583);
;// CONCATENATED MODULE: external "react-icons/lib"
var lib_namespaceObject = require("react-icons/lib");;
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./public/logo-removebg.png
/* harmony default export */ var logo_removebg = ({"src":"/_next/static/image/public/logo-removebg.a1e5cdfc2e96bc165efbbb3ee5d6ac31.png","height":386,"width":888,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZklEQVR42mM4ERQccD0pxe5cRqbBeV0jo5OBgYFn0jNULrl7ZZ8zs4xhOJORmX4oKan4XH5By7GIyGnHa+uqr7a2zr7Y1r7xWFZ2CAMMXC0pTTiSkdlyLjOrGKip7VJff9Ol/IJ+AG9xLDmWxTKGAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/Navbar/Navbar.js












const Nav = (external_styled_components_default()).nav`
  height: 80px;
  /* margin-top: -80px; */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  background: #f5e9e2;
  width: 100%;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
const NavbarContainer = (external_styled_components_default()).div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
const NavLogo = external_styled_components_default()(external_react_router_dom_namespaceObject.Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;
const MobileIcon = (external_styled_components_default()).div`
  display: none;
  color: #010606;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavMenu = (external_styled_components_default()).ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavItem = (external_styled_components_default()).li`
  height: 80px;
`;
const NavLinks = external_styled_components_default()(external_react_scroll_.Link)`
  color: #010606;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #773344;
  }
`;

const Navbar = ({
  toggle
}) => {
  const {
    0: scrollNav,
    1: setScrollNav
  } = (0,external_react_.useState)(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    external_react_scroll_.animateScroll.scrollToTop();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(lib_namespaceObject.IconContext.Provider, {
      value: {
        color: "#000"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Nav, {
        scrollNav: scrollNav,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavbarContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(NavLogo, {
            href: "/",
            onClick: toggleHome,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: logo_removebg,
              alt: "Scruffs2Crufts Tonbridge",
              width: 200,
              height: 70
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(MobileIcon, {
            onClick: toggle,
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaBars */.Fm7, {})
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavMenu, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(NavItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(NavLinks, {
                to: "home",
                smooth: true,
                duration: 500,
                spy: true,
                exact: "true",
                offset: -80,
                children: "Home"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(NavLinks, {
                to: "pricing",
                smooth: true,
                duration: 500,
                spy: true,
                exact: "true",
                offset: -80,
                children: "Pricing"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(NavLinks, {
                to: "reviews",
                smooth: true,
                duration: 500,
                spy: true,
                exact: "true",
                offset: -80,
                children: "Reviews"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(NavLinks, {
                to: "contact",
                smooth: true,
                duration: 500,
                spy: true,
                exact: "true",
                offset: -80,
                children: "Contact Us"
              })
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ var Navbar_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Footer.js








const FooterContainer = (external_styled_components_default()).footer`
  background-color: #773344;
`;
const FooterWrap = (external_styled_components_default()).div`
  padding: 0px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
const SocialMedia = (external_styled_components_default()).section`
  max-width: 1000px;
  width: 100%;
`;
const SocialMediaWrap = (external_styled_components_default()).div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
`;
const SocialLogo = (/* unused pure expression or super */ null && (styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`));
const WebsiteRights = (external_styled_components_default()).small`
  color: #fff;
  margin-bottom: 16px;
  margin-right: auto;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
const SocialIcons = (external_styled_components_default()).div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65px;
`;
const SocialIconLink = (external_styled_components_default()).a`
  color: #fff;
  font-size: 24px;
`;

const Footer = () => {
  const toggleHome = () => {
    external_react_scroll_.animateScroll.scrollToTop();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(FooterContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(FooterWrap, {
        children: /*#__PURE__*/jsx_runtime_.jsx(SocialMedia, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialMediaWrap, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(WebsiteRights, {
              children: ["Scruffs2Crufts Tonbridge \xA9 ", new Date().getFullYear(), "All rights reserved."]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialIcons, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(SocialIconLink, {
                href: "//www.eddyku.com/",
                target: "_blank",
                "aria-label": "Facebook",
                children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaFacebook */.Am9, {})
              }), /*#__PURE__*/jsx_runtime_.jsx(SocialIconLink, {
                href: "//www.eddyku.com/",
                target: "_blank",
                "aria-label": "Instagram",
                children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaInstagram */.Zf_, {})
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ var logo = ({"src":"/_next/static/image/public/logo.224e52724f2bacb4ac7ba54ddb14c7a8.png","height":386,"width":888,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYUlEQVR4nA3ISQ5AMBgF4PckpgqWEgdw/6PYGY7QRQ2pamr42X404yRJocA0Be4bft+hmgZ2nhH9Rt33b/CeDEFOY5i1LWitBOdYdh0oIi8ArsMgm9bMcoXLHRJXNZ91wQfTaC+N699eKwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/Sidebar/Sidebar.js









const SidebarContainer = (external_styled_components_default()).aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({
  isOpen
}) => isOpen ? "100%" : "0"};
  top: ${({
  isOpen
}) => isOpen ? "0" : "-100%"};
`;
const CloseIcon = external_styled_components_default()(index_esm/* FaTimes */.aHS)`
  color: #010606;
`;
const Icon = (external_styled_components_default()).div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const SidebarWrapper = (external_styled_components_default()).div`
  color: #fff;
`;
const LogoWrapper = (external_styled_components_default()).div`
  text-align: center;
  margin-top: 3rem;
`;
const SidebarMenu = (external_styled_components_default()).ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding-right: 2.5rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
const SidebarLink = external_styled_components_default()(external_react_scroll_.Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #010606;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
const SideBtnWrap = (external_styled_components_default()).div`
  display: flex;
  justify-content: center;
`;
const SidebarRoute = (/* unused pure expression or super */ null && (styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`));

const Sidebar = ({
  isOpen,
  toggle
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SidebarContainer, {
    isOpen: isOpen,
    onClick: toggle,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
      onClick: toggle,
      children: /*#__PURE__*/jsx_runtime_.jsx(CloseIcon, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SidebarWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(LogoWrapper, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: logo,
          alt: "ScruffsScruffs2Crufts Tonbridge",
          width: 150,
          height: 50
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SidebarMenu, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(SidebarLink, {
          to: "about",
          onClick: toggle,
          children: "About"
        }), /*#__PURE__*/jsx_runtime_.jsx(SidebarLink, {
          to: "pricing",
          onClick: toggle,
          children: "Pricing"
        }), /*#__PURE__*/jsx_runtime_.jsx(SidebarLink, {
          to: "reviews",
          onClick: toggle,
          children: "Reviews"
        }), /*#__PURE__*/jsx_runtime_.jsx(SidebarLink, {
          to: "contact",
          onClick: toggle,
          children: "Contact Us"
        })]
      })]
    })]
  });
};

/* harmony default export */ var Sidebar_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./components/Layout.js






function Layout({
  children
}) {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Sidebar_Sidebar, {
      isOpen: isOpen,
      toggle: toggle
    }), /*#__PURE__*/jsx_runtime_.jsx(Navbar_Navbar, {
      toggle: toggle
    }), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}
;// CONCATENATED MODULE: external "history"
var external_history_namespaceObject = require("history");;
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  const history = (0,external_history_namespaceObject.createMemoryHistory)();
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_router_dom_namespaceObject.Router, {
    history: history,
    children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 783:
/***/ (function(module) {

"use strict";
module.exports = require("react-scroll");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,746], function() { return __webpack_exec__(587); });
module.exports = __webpack_exports__;

})();