import {
  Image,
  Money
} from "/build/_shared/chunk-6ERETTGJ.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Await,
  Link,
  useLoaderData
} from "/build/_shared/chunk-5MVWHDS2.js";
import {
  require_react
} from "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZR5F4FRS.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1695642675277.489";
}
var meta = () => {
  return [{
    title: "Hydrogen | Home"
  }];
};
function Homepage() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeaturedCollection, { collection: data.featuredCollection }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecommendedProducts, { products: data.recommendedProducts }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(Homepage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = Homepage;
function FeaturedCollection({
  collection
}) {
  const image = collection.image;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "featured-collection", to: `/collections/${collection.handle}`, children: [
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "featured-collection-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: image, sizes: "100vw" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 66,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 65,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: collection.title }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_c2 = FeaturedCollection;
function RecommendedProducts({
  products
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended-products", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Recommended Products" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 77,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: products, children: ({
      products: products2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended-products-grid", children: products2.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "recommended-product", to: `/products/${product.handle}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: product.images.nodes[0], aspectRatio: "1/1", sizes: "(min-width: 45em) 20vw, 50vw" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 83,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: product.title }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 84,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: product.priceRange.minVariantPrice }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 86,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 85,
        columnNumber: 19
      }, this)
    ] }, product.id, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 82,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 81,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_c3 = RecommendedProducts;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Homepage");
$RefreshReg$(_c2, "FeaturedCollection");
$RefreshReg$(_c3, "RecommendedProducts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-CZYLJNB4.js.map
