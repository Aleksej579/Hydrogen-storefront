import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-2LN2NMSG.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BNWNWLV6.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/account_.login.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account_.login.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account_.login.jsx"
  );
  import.meta.hot.lastModified = "1695303548757.2559";
}
var meta = () => {
  return [{
    title: "Login"
  }];
};
function Login() {
  _s();
  const data = useActionData();
  const error = data?.error || null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "login", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Sign in." }, void 0, false, {
      fileName: "app/routes/account_.login.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email address" }, void 0, false, {
          fileName: "app/routes/account_.login.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            id: "email",
            name: "email",
            type: "email",
            autoComplete: "email",
            required: true,
            placeholder: "Email address",
            "aria-label": "Email address",
            autoFocus: true
          },
          void 0,
          false,
          {
            fileName: "app/routes/account_.login.jsx",
            lineNumber: 106,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
          fileName: "app/routes/account_.login.jsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", placeholder: "Password", "aria-label": "Password", minLength: 8, required: true }, void 0, false, {
          fileName: "app/routes/account_.login.jsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: error }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 114,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 113,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 112,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 116,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Sign in" }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account_.login.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account_.login.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/recover", children: "Forgot password \u2192" }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/account/register", children: "Register \u2192" }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 125,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/account_.login.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account_.login.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account_.login.jsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_s(Login, "EuQJlwp+1/dClAy+OhUaWQ2c6r8=", false, function() {
  return [useActionData];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/account_.login-XO55UI7I.js.map
