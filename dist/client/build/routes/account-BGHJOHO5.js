import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Form,
  NavLink,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-5MVWHDS2.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZR5F4FRS.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/account.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.jsx"
  );
  import.meta.hot.lastModified = "1695303548713.256";
}
function shouldRevalidate() {
  return true;
}
function Acccount() {
  _s();
  const {
    customer,
    isPrivateRoute,
    isAccountHome
  } = useLoaderData();
  if (!isPrivateRoute && !isAccountHome) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: {
      customer
    } }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 108,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountLayout, { customer, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, { context: {
      customer
    } }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.jsx",
    lineNumber: 112,
    columnNumber: 10
  }, this);
}
_s(Acccount, "U4PMAgORDvrTbde6uLfXiArM0BA=", false, function() {
  return [useLoaderData];
});
_c = Acccount;
function AccountLayout({
  customer,
  children
}) {
  const heading = customer ? customer.firstName ? `Welcome, ${customer.firstName}` : `Welcome to your account.` : "Account Details";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: heading }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccountMenu, {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/routes/account.jsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}
_c2 = AccountLayout;
function AccountMenu() {
  function isActiveStyle({
    isActive,
    isPending
  }) {
    return {
      fontWeight: isActive ? "bold" : void 0,
      color: isPending ? "grey" : "black"
    };
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { role: "navigation", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account/orders", style: isActiveStyle, children: "Orders \xA0" }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    "\xA0|\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account/profile", style: isActiveStyle, children: "\xA0 Profile \xA0" }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    "\xA0|\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/account/addresses", style: isActiveStyle, children: "\xA0 Addresses \xA0" }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    "\xA0|\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logout, {}, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 160,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.jsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
}
_c3 = AccountMenu;
function Logout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "account-logout", method: "POST", action: "/account/logout", children: [
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Sign out" }, void 0, false, {
      fileName: "app/routes/account.jsx",
      lineNumber: 166,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.jsx",
    lineNumber: 165,
    columnNumber: 10
  }, this);
}
_c4 = Logout;
var CUSTOMER_FRAGMENT = `#graphql
  fragment Customer on Customer {
    acceptsMarketing
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
    defaultAddress {
      ...Address
    }
    email
    firstName
    lastName
    numberOfOrders
    phone
  }
  fragment Address on MailingAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    country
    province
    city
    zip
    phone
  }
`;
var CUSTOMER_QUERY = `#graphql
  query Customer(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
  ${CUSTOMER_FRAGMENT}
`;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "Acccount");
$RefreshReg$(_c2, "AccountLayout");
$RefreshReg$(_c3, "AccountMenu");
$RefreshReg$(_c4, "Logout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Acccount as default,
  shouldRevalidate
};
//# sourceMappingURL=/build/routes/account-BGHJOHO5.js.map
