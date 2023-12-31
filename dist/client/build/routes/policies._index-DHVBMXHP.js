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

// app/routes/policies._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/policies._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/policies._index.jsx"
  );
  import.meta.hot.lastModified = "1695303548441.257";
}
function Policies() {
  _s();
  const {
    policies
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "policies", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Policies" }, void 0, false, {
      fileName: "app/routes/policies._index.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: policies.map((policy) => {
      if (!policy)
        return null;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/policies/${policy.handle}`, children: policy.title }, void 0, false, {
        fileName: "app/routes/policies._index.jsx",
        lineNumber: 49,
        columnNumber: 15
      }, this) }, policy.id, false, {
        fileName: "app/routes/policies._index.jsx",
        lineNumber: 48,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/policies._index.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/policies._index.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s(Policies, "qILlRnlKUbKnmDp/2bx3pTxZVH4=", false, function() {
  return [useLoaderData];
});
_c = Policies;
var _c;
$RefreshReg$(_c, "Policies");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Policies as default
};
//# sourceMappingURL=/build/routes/policies._index-DHVBMXHP.js.map
