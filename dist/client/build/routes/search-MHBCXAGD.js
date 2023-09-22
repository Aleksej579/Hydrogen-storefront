import {
  NoSearchResults,
  SearchForm,
  SearchResults
} from "/build/_shared/chunk-SAPZAS25.js";
import "/build/_shared/chunk-FH5AWDRB.js";
import "/build/_shared/chunk-YOSDW4RD.js";
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

// app/routes/search.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/search.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/search.jsx"
  );
  import.meta.hot.lastModified = "1695303548841.2556";
}
var meta = () => {
  return [{
    title: `Hydrogen | Search`
  }];
};
function SearchPage() {
  _s();
  const {
    searchTerm,
    searchResults
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Search" }, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchForm, { searchTerm }, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    !searchTerm || !searchResults.totalResults ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoSearchResults, {}, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 80,
      columnNumber: 53
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchResults, { results: searchResults.results }, void 0, false, {
      fileName: "app/routes/search.jsx",
      lineNumber: 80,
      columnNumber: 75
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/search.jsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s(SearchPage, "055hEQUIgKujYDDIKNnKGREITpA=", false, function() {
  return [useLoaderData];
});
_c = SearchPage;
var _c;
$RefreshReg$(_c, "SearchPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SearchPage as default,
  meta
};
//# sourceMappingURL=/build/routes/search-MHBCXAGD.js.map
