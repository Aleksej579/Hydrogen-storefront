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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1695809121561.296";
}
var meta = () => {
  return [{
    title: "Clever Device 4U | Home"
  }];
};
function Homepage() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "home", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeaturedCollection, { collection: data.featuredCollection }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AllCollections, { collection: data.allCollections }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductLeftRightImage, { products: data.productLeftImage }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecommendedProducts, { products: data.recommendedProducts }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(Homepage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = Homepage;
function AllCollections() {
  _s2();
  const {
    allCollections
  } = useLoaderData();
  const allCollectionsArr = allCollections.collections.nodes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { class: "flex gap-4", children: allCollectionsArr.map((collection) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: collection.title }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "featured-collection", to: `/collections/${collection.handle}`, children: collection.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "featured-collection-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: collection.image, sizes: "100vw" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 77,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 76,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 75,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 73,
    columnNumber: 44
  }, this)) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s2(AllCollections, "msE30W64FYwsnZW3WZvakK9GO6Q=", false, function() {
  return [useLoaderData];
});
_c2 = AllCollections;
function FeaturedCollection({
  collection
}) {
  const image = collection.image;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "featured-collection", to: `/collections/${collection.handle}`, children: [
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "featured-collection-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: image, sizes: "100vw" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 93,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 92,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: collection.title }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_c3 = FeaturedCollection;
function RecommendedProducts({
  products
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended-products", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Recommended Products" }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 104,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: products, children: ({
      products: products2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended-products-grid", children: products2.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "recommended-product", to: `/products/${product.handle}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: product.images.nodes[0], aspectRatio: "1/1", sizes: "(min-width: 45em) 20vw, 50vw" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 110,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: product.title }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 111,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: product.priceRange.minVariantPrice }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 113,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 112,
        columnNumber: 19
      }, this)
    ] }, product.id, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 109,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 108,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 105,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_c4 = RecommendedProducts;
function ProductLeftRightImage({
  products
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 127,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: products, children: ({
      products: products2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: products2.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "flex w-2/4 mx-auto last:flex-row-reverse", to: `/products/${product.handle}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: product.images.nodes[0], aspectRatio: "1/1", sizes: "(min-width: 45em) 20vw, 50vw" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 133,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: product.description }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 134,
        columnNumber: 19
      }, this)
    ] }, product.id, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 132,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 131,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 126,
    columnNumber: 10
  }, this);
}
_c5 = ProductLeftRightImage;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "Homepage");
$RefreshReg$(_c2, "AllCollections");
$RefreshReg$(_c3, "FeaturedCollection");
$RefreshReg$(_c4, "RecommendedProducts");
$RefreshReg$(_c5, "ProductLeftRightImage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Homepage as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-P267G4QA.js.map
