import "/build/_shared/chunk-X35CUW5Y.js";
import {
  Image,
  Money,
  k,
  sr
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

// app/routes/products.$handle.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/products.$handle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/products.$handle.jsx"
  );
  import.meta.hot.lastModified = "1697564483143.4878";
}
var meta = ({
  data
}) => {
  return [{
    title: `Hydrogen | ${data.product.title}`
  }];
};
function Product() {
  _s();
  const {
    product,
    variants
  } = useLoaderData();
  const {
    productImages_
  } = useLoaderData();
  const data = useLoaderData();
  const {
    selectedVariant
  } = product;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductImages, { productImages_ }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductImage, { image: selectedVariant?.image }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductMain, { selectedVariant, product, variants }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 132,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecommendedProducts, { products: data.recommendedProducts }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 128,
    columnNumber: 10
  }, this);
}
_s(Product, "6saLlfSb11AI+tHoJZO3KOzI9ks=", false, function() {
  return [useLoaderData, useLoaderData, useLoaderData];
});
_c = Product;
function ProductImage({
  image
}) {
  if (!image) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-image" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 145,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: image.altText || "Product Image", aspectRatio: "1/1", data: image, sizes: "(min-width: 45em) 50vw, 100vw" }, image.id, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 148,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
}
_c2 = ProductImage;
function ProductImages({
  productImages_
}) {
  console.log(productImages_);
  return (
    // <h1>{"test"}</h1>
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: productImages_.products.nodes.map((product) => {
      return product.title;
    }) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 160,
      columnNumber: 5
    }, this)
  );
}
_c3 = ProductImages;
function ProductMain({
  selectedVariant,
  product,
  variants
}) {
  const {
    title,
    descriptionHtml
  } = product;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: title }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductPrice, { selectedVariant }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 180,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductForm, { product, selectedVariant, variants: [] }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 182,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { errorElement: "There was a problem loading product variants", resolve: variants, children: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductForm, { product, selectedVariant, variants: data.product?.variants.nodes || [] }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 184,
      columnNumber: 20
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 183,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 188,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Description" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 190,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 189,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { dangerouslySetInnerHTML: {
      __html: descriptionHtml
    } }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 196,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 178,
    columnNumber: 10
  }, this);
}
_c4 = ProductMain;
function ProductPrice({
  selectedVariant
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-price", children: selectedVariant?.compareAtPrice ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Sale" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 205,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 206,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-price-on-sale", children: [
      selectedVariant ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: selectedVariant.price }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 208,
        columnNumber: 32
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("s", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: selectedVariant.compareAtPrice }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 210,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 209,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 207,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 204,
    columnNumber: 42
  }, this) : selectedVariant?.price && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: selectedVariant?.price }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 213,
    columnNumber: 41
  }, this) }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 203,
    columnNumber: 10
  }, this);
}
_c5 = ProductPrice;
function ProductForm({
  product,
  selectedVariant,
  variants
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(sr, { handle: product.handle, options: product.options, variants, children: ({
      option
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductOptions, { option }, option.name, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 226,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 223,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 228,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddToCartButton, { disabled: !selectedVariant || !selectedVariant.availableForSale, onClick: () => {
      window.location.href = window.location.href + "#cart-aside";
    }, lines: selectedVariant ? [{
      merchandiseId: selectedVariant.id,
      quantity: 1
    }] : [], children: selectedVariant?.availableForSale ? "Add to cart" : "Sold out" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 229,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 222,
    columnNumber: 10
  }, this);
}
_c6 = ProductForm;
function ProductOptions({
  option
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-options", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: option.name }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-options-grid", children: option.values.map(({
      value,
      isAvailable,
      isActive,
      to
    }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "product-options-item", prefetch: "intent", preventScrollReset: true, replace: true, to, style: {
        border: isActive ? "1px solid black" : "1px solid transparent",
        opacity: isAvailable ? 1 : 0.3
      }, children: value }, option.name + value, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 252,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 260,
      columnNumber: 7
    }, this)
  ] }, option.name, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 243,
    columnNumber: 10
  }, this);
}
_c7 = ProductOptions;
function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, { route: "/cart", inputs: {
    lines
  }, action: k.ACTIONS.LinesAdd, children: (fetcher) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "analytics", type: "hidden", value: JSON.stringify(analytics) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 275,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", onClick, disabled: disabled ?? fetcher.state !== "idle", className: "border border-black rounded-sm w-full px-4 py-2 text-white bg-black uppercase hover:bg-white hover:text-black transition-colors duration-150", children }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 276,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 274,
    columnNumber: 19
  }, this) }, void 0, false, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 271,
    columnNumber: 10
  }, this);
}
_c8 = AddToCartButton;
function RecommendedProducts({
  products
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended-products", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "You may also like" }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 287,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 288,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: products, children: ({
      products: products2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "recommended-products-grid", children: products2.nodes.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "recommended-product", to: `/products/${product.handle}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: product.images.nodes[0], aspectRatio: "1/1", sizes: "(min-width: 45em) 20vw, 50vw" }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 294,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: product.title }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 295,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: product.priceRange.minVariantPrice }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 297,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/products.$handle.jsx",
        lineNumber: 296,
        columnNumber: 19
      }, this)
    ] }, product.id, true, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 293,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 292,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 289,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 288,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/products.$handle.jsx",
      lineNumber: 303,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.$handle.jsx",
    lineNumber: 286,
    columnNumber: 10
  }, this);
}
_c9 = RecommendedProducts;
var PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;
var PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;
var PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;
var PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;
var VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
$RefreshReg$(_c, "Product");
$RefreshReg$(_c2, "ProductImage");
$RefreshReg$(_c3, "ProductImages");
$RefreshReg$(_c4, "ProductMain");
$RefreshReg$(_c5, "ProductPrice");
$RefreshReg$(_c6, "ProductForm");
$RefreshReg$(_c7, "ProductOptions");
$RefreshReg$(_c8, "AddToCartButton");
$RefreshReg$(_c9, "RecommendedProducts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Product as default,
  meta
};
//# sourceMappingURL=/build/routes/products.$handle-E2YXQBWH.js.map
