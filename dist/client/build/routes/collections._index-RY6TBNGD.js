import {
  Image,
  vt
} from "/build/_shared/chunk-6ERETTGJ.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Link,
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

// app/routes/collections._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/collections._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/collections._index.jsx"
  );
  import.meta.hot.lastModified = "1697188952999.6155";
}
function Collections() {
  _s();
  const {
    collections
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collections", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Collections" }, void 0, false, {
      fileName: "app/routes/collections._index.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(vt, { connection: collections, children: ({
      nodes,
      isLoading,
      PreviousLink,
      NextLink
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
        fileName: "app/routes/collections._index.jsx",
        lineNumber: 56,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "app/routes/collections._index.jsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollectionsGrid, { collections: nodes }, void 0, false, {
        fileName: "app/routes/collections._index.jsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
        fileName: "app/routes/collections._index.jsx",
        lineNumber: 60,
        columnNumber: 43
      }, this) }, void 0, false, {
        fileName: "app/routes/collections._index.jsx",
        lineNumber: 59,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/collections._index.jsx",
      lineNumber: 54,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/collections._index.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/collections._index.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(Collections, "6brbiW8AhZwVjyj0UPHG6QMQMU4=", false, function() {
  return [useLoaderData];
});
_c = Collections;
function CollectionsGrid({
  collections
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collections-grid", children: collections.map((collection, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollectionItem, { collection, index }, collection.id, false, {
    fileName: "app/routes/collections._index.jsx",
    lineNumber: 74,
    columnNumber: 47
  }, this)) }, void 0, false, {
    fileName: "app/routes/collections._index.jsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_c2 = CollectionsGrid;
function CollectionItem({
  collection,
  index
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "collection-item", to: `/collections/${collection.handle}`, prefetch: "intent", children: [
    collection.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: collection.image.altText || collection.title, aspectRatio: "1/1", data: collection.image, loading: index < 3 ? "eager" : void 0 }, void 0, false, {
      fileName: "app/routes/collections._index.jsx",
      lineNumber: 83,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: collection.title }, void 0, false, {
      fileName: "app/routes/collections._index.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, collection.id, true, {
    fileName: "app/routes/collections._index.jsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_c3 = CollectionItem;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Collections");
$RefreshReg$(_c2, "CollectionsGrid");
$RefreshReg$(_c3, "CollectionItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Collections as default
};
//# sourceMappingURL=/build/routes/collections._index-RY6TBNGD.js.map
