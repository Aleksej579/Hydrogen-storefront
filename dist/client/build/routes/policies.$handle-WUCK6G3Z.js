import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-2LN2NMSG.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BNWNWLV6.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/policies.$handle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/policies.$handle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/policies.$handle.jsx"
  );
  import.meta.hot.lastModified = "1695303548429.257";
}
var meta = ({
  data
}) => {
  return [{
    title: `Hydrogen | ${data.policy.title}`
  }];
};
function Policy() {
  _s();
  const {
    policy
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "policy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/policies.$handle.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/policies.$handle.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/policies", children: "\u2190 Back to Policies" }, void 0, false, {
      fileName: "app/routes/policies.$handle.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/policies.$handle.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/policies.$handle.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: policy.title }, void 0, false, {
      fileName: "app/routes/policies.$handle.jsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: {
      __html: policy.body
    } }, void 0, false, {
      fileName: "app/routes/policies.$handle.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/policies.$handle.jsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(Policy, "cBk4z3QJRcmP45uz+9oi7Or3TOc=", false, function() {
  return [useLoaderData];
});
_c = Policy;
var _c;
$RefreshReg$(_c, "Policy");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Policy as default,
  meta
};
//# sourceMappingURL=/build/routes/policies.$handle-WUCK6G3Z.js.map
