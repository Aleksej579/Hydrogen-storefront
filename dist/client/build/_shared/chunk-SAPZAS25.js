import {
  Image,
  Money,
  vt
} from "/build/_shared/chunk-FH5AWDRB.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Form,
  Link,
  useFetcher,
  useFetchers,
  useParams
} from "/build/_shared/chunk-2LN2NMSG.js";
import {
  require_react
} from "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BNWNWLV6.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Search.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Search.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Search.jsx"
  );
  import.meta.hot.lastModified = "1695303548989.2551";
}
var NO_PREDICTIVE_SEARCH_RESULTS = [{
  type: "queries",
  items: []
}, {
  type: "products",
  items: []
}, {
  type: "collections",
  items: []
}, {
  type: "pages",
  items: []
}, {
  type: "articles",
  items: []
}];
function SearchForm({
  searchTerm
}) {
  _s();
  const inputRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    function handleKeyDown(event) {
      if (event.key === "k" && event.metaKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (event.key === "Escape") {
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { defaultValue: searchTerm, name: "q", placeholder: "Search\u2026", ref: inputRef, type: "search" }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Search" }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(SearchForm, "cBQ6FQ+sf5H+lvNONLKqtm4aeQ8=");
_c = SearchForm;
function SearchResults({
  results
}) {
  if (!results) {
    return null;
  }
  const keys = Object.keys(results);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: results && keys.map((type) => {
    const resourceResults = results[type];
    if (resourceResults.nodes[0]?.__typename === "Page") {
      const pageResults = resourceResults;
      return resourceResults.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchResultPageGrid, { pages: pageResults }, "pages", false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 86,
        columnNumber: 47
      }, this) : null;
    }
    if (resourceResults.nodes[0]?.__typename === "Product") {
      const productResults = resourceResults;
      return resourceResults.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchResultsProductsGrid, { products: productResults }, "products", false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 90,
        columnNumber: 47
      }, this) : null;
    }
    if (resourceResults.nodes[0]?.__typename === "Article") {
      const articleResults = resourceResults;
      return resourceResults.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchResultArticleGrid, { articles: articleResults }, "articles", false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 94,
        columnNumber: 47
      }, this) : null;
    }
    return null;
  }) }, void 0, false, {
    fileName: "app/components/Search.jsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_c2 = SearchResults;
function SearchResultsProductsGrid({
  products
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Products" }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(vt, { connection: products, children: ({
      nodes,
      isLoading,
      NextLink,
      PreviousLink
    }) => {
      const itemsMarkup = nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/products/${product.handle}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: product.title }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 115,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 114,
        columnNumber: 15
      }, this) }, product.id, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 113,
        columnNumber: 50
      }, this));
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 121,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 120,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 119,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          itemsMarkup,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/Search.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Search.jsx",
          lineNumber: 124,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 130,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/Search.jsx",
          lineNumber: 128,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Search.jsx",
        lineNumber: 118,
        columnNumber: 16
      }, this);
    } }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}
_c3 = SearchResultsProductsGrid;
function SearchResultPageGrid({
  pages
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Pages" }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: pages?.nodes?.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/pages/${page.handle}`, children: page.title }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 147,
      columnNumber: 13
    }, this) }, page.id, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 146,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 152,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 143,
    columnNumber: 10
  }, this);
}
_c4 = SearchResultPageGrid;
function SearchResultArticleGrid({
  articles
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Articles" }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: articles?.nodes?.map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "search-results-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/blog/${article.handle}`, children: article.title }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 163,
      columnNumber: 13
    }, this) }, article.id, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 162,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 168,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 159,
    columnNumber: 10
  }, this);
}
_c5 = SearchResultArticleGrid;
function NoSearchResults() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No results, try a different search." }, void 0, false, {
    fileName: "app/components/Search.jsx",
    lineNumber: 173,
    columnNumber: 10
  }, this);
}
_c6 = NoSearchResults;
function PredictiveSearchForm({
  action,
  children,
  className = "predictive-search-form",
  method = "POST",
  ...props
}) {
  _s2();
  const params = useParams();
  const fetcher = useFetcher();
  const inputRef = (0, import_react2.useRef)(null);
  function fetchResults(event) {
    const searchAction = action ?? "/api/predictive-search";
    const localizedAction = params.locale ? `/${params.locale}${searchAction}` : searchAction;
    const newSearchTerm = event.target.value || "";
    fetcher.submit({
      q: newSearchTerm,
      limit: "6"
    }, {
      method,
      action: localizedAction
    });
  }
  (0, import_react2.useEffect)(() => {
    inputRef?.current?.setAttribute("type", "search");
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { ...props, className, onSubmit: (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!inputRef?.current || inputRef.current.value === "") {
      return;
    }
    inputRef.current.blur();
  }, children: children({
    fetchResults,
    inputRef,
    fetcher
  }) }, void 0, false, {
    fileName: "app/components/Search.jsx",
    lineNumber: 209,
    columnNumber: 10
  }, this);
}
_s2(PredictiveSearchForm, "w+gxIf9XD5nbfQoCzJSClzki63I=", false, function() {
  return [useParams, useFetcher];
});
_c7 = PredictiveSearchForm;
function PredictiveSearchResults() {
  _s3();
  const {
    results,
    totalResults,
    searchInputRef,
    searchTerm
  } = usePredictiveSearch();
  function goToSearchResult(event) {
    if (!searchInputRef.current)
      return;
    searchInputRef.current.blur();
    searchInputRef.current.value = "";
    window.location.href = event.currentTarget.href;
  }
  if (!totalResults) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoPredictiveSearchResults, { searchTerm }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 244,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "predictive-search-results", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: results.map(({
      type,
      items
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PredictiveSearchResult, { goToSearchResult, items, searchTerm, type }, type, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 251,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 247,
      columnNumber: 7
    }, this),
    searchTerm.current && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: goToSearchResult, to: `/search?q=${searchTerm.current}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "View all results for ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("q", { children: searchTerm.current }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 256,
        columnNumber: 34
      }, this),
      "\xA0 \u2192"
    ] }, void 0, true, {
      fileName: "app/components/Search.jsx",
      lineNumber: 255,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 254,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 246,
    columnNumber: 10
  }, this);
}
_s3(PredictiveSearchResults, "tuszxxK+sQ3KXn/XnZUqcddoLD0=", false, function() {
  return [usePredictiveSearch];
});
_c8 = PredictiveSearchResults;
function NoPredictiveSearchResults({
  searchTerm
}) {
  if (!searchTerm.current) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
    "No results found for ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("q", { children: searchTerm.current }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 273,
      columnNumber: 28
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 272,
    columnNumber: 10
  }, this);
}
_c9 = NoPredictiveSearchResults;
function PredictiveSearchResult({
  goToSearchResult,
  items,
  searchTerm,
  type
}) {
  const isSuggestions = type === "queries";
  const categoryUrl = `/search?q=${searchTerm.current}&type=${pluralToSingularSearchType(type)}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "predictive-search-result", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: categoryUrl, onClick: goToSearchResult, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: isSuggestions ? "Suggestions" : type }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 287,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 286,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchResultItem, { goToSearchResult, item }, item.id, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 290,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 289,
      columnNumber: 7
    }, this)
  ] }, type, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 285,
    columnNumber: 10
  }, this);
}
_c10 = PredictiveSearchResult;
function SearchResultItem({
  goToSearchResult,
  item
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "predictive-search-result-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: goToSearchResult, to: item.url, children: [
    item.image?.url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: item.image.altText ?? "", src: item.image.url, width: 50, height: 50 }, void 0, false, {
      fileName: "app/components/Search.jsx",
      lineNumber: 301,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      item.styledTitle ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: {
        __html: item.styledTitle
      } }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 303,
        columnNumber: 31
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.title }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 305,
        columnNumber: 17
      }, this),
      item?.price && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: item.price }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 307,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Search.jsx",
        lineNumber: 306,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Search.jsx",
      lineNumber: 302,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Search.jsx",
    lineNumber: 300,
    columnNumber: 7
  }, this) }, item.id, false, {
    fileName: "app/components/Search.jsx",
    lineNumber: 299,
    columnNumber: 10
  }, this);
}
_c11 = SearchResultItem;
function usePredictiveSearch() {
  _s4();
  const fetchers = useFetchers();
  const searchTerm = (0, import_react2.useRef)("");
  const searchInputRef = (0, import_react2.useRef)(null);
  const searchFetcher = fetchers.find((fetcher) => fetcher.data?.searchResults);
  if (searchFetcher?.state === "loading") {
    searchTerm.current = searchFetcher.formData?.get("q") || "";
  }
  const search = searchFetcher?.data?.searchResults || {
    results: NO_PREDICTIVE_SEARCH_RESULTS,
    totalResults: 0
  };
  (0, import_react2.useEffect)(() => {
    if (searchInputRef.current)
      return;
    searchInputRef.current = document.querySelector('input[type="search"]');
  }, []);
  return {
    ...search,
    searchInputRef,
    searchTerm
  };
}
_s4(usePredictiveSearch, "4JOUwH6LlHnwafkRDaEtVmEPUa8=", false, function() {
  return [useFetchers];
});
function pluralToSingularSearchType(type) {
  const plural = {
    articles: "ARTICLE",
    collections: "COLLECTION",
    pages: "PAGE",
    products: "PRODUCT",
    queries: "QUERY"
  };
  if (typeof type === "string") {
    return plural[type];
  }
  return type.map((t) => plural[t]).join(",");
}
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
$RefreshReg$(_c, "SearchForm");
$RefreshReg$(_c2, "SearchResults");
$RefreshReg$(_c3, "SearchResultsProductsGrid");
$RefreshReg$(_c4, "SearchResultPageGrid");
$RefreshReg$(_c5, "SearchResultArticleGrid");
$RefreshReg$(_c6, "NoSearchResults");
$RefreshReg$(_c7, "PredictiveSearchForm");
$RefreshReg$(_c8, "PredictiveSearchResults");
$RefreshReg$(_c9, "NoPredictiveSearchResults");
$RefreshReg$(_c10, "PredictiveSearchResult");
$RefreshReg$(_c11, "SearchResultItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SearchForm,
  SearchResults,
  NoSearchResults,
  PredictiveSearchForm,
  PredictiveSearchResults
};
//# sourceMappingURL=/build/_shared/chunk-SAPZAS25.js.map
