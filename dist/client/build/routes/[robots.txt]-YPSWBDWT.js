import "/build/_shared/chunk-FH5AWDRB.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  isRouteErrorResponse,
  useRouteError
} from "/build/_shared/chunk-2LN2NMSG.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BNWNWLV6.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/[robots.txt].jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/[robots.txt].jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/[robots.txt].jsx"
  );
  import.meta.hot.lastModified = "1695303549005.2551";
}
function ErrorBoundary() {
  _s();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Oops" }, void 0, false, {
        fileName: "app/routes/[robots.txt].jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "Status: ",
        error.status
      ] }, void 0, true, {
        fileName: "app/routes/[robots.txt].jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error.data.message }, void 0, false, {
        fileName: "app/routes/[robots.txt].jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/[robots.txt].jsx",
      lineNumber: 49,
      columnNumber: 12
    }, this);
  }
  let errorMessage = "Unknown error";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Uh oh ..." }, void 0, false, {
      fileName: "app/routes/[robots.txt].jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Something went wrong." }, void 0, false, {
      fileName: "app/routes/[robots.txt].jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { children: errorMessage }, void 0, false, {
      fileName: "app/routes/[robots.txt].jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/[robots.txt].jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c = ErrorBoundary;
var _c;
$RefreshReg$(_c, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary
};
//# sourceMappingURL=/build/routes/[robots.txt]-YPSWBDWT.js.map
