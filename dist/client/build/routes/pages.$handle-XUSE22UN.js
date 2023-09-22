import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
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

// app/routes/pages.$handle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/pages.$handle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/pages.$handle.jsx"
  );
  import.meta.hot.lastModified = "1695303548121.2583";
}
var meta = ({
  data
}) => {
  return [{
    title: `Hydrogen | ${data.page.title}`
  }];
};
function Page() {
  _s();
  const {
    page
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: page.title }, void 0, false, {
      fileName: "app/routes/pages.$handle.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/pages.$handle.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { dangerouslySetInnerHTML: {
      __html: page.body
    } }, void 0, false, {
      fileName: "app/routes/pages.$handle.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/pages.$handle.jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(Page, "3NtuklEl4O0yHgF2kvqT1ubcBDw=", false, function() {
  return [useLoaderData];
});
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/pages.$handle-XUSE22UN.js.map
