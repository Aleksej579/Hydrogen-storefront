import {
  useVariantUrl
} from "/build/_shared/chunk-X35CUW5Y.js";
import {
  Image,
  Money,
  k
} from "/build/_shared/chunk-6ERETTGJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Link
} from "/build/_shared/chunk-5MVWHDS2.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZR5F4FRS.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Cart.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Cart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Cart.jsx"
  );
  import.meta.hot.lastModified = "1695303548233.257";
}
function CartMain({
  layout,
  cart
}) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount = cart && Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  const className = `cart-main ${withDiscount ? "with-discount" : ""}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartEmpty, { hidden: linesCount, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartDetails, { cart, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = CartMain;
function CartDetails({
  layout,
  cart
}) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLines, { lines: cart?.lines, layout }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    cartHasItems && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartSummary, { cost: cart.cost, layout, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartDiscounts, { discountCodes: cart.discountCodes }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartCheckoutActions, { checkoutUrl: cart.checkoutUrl }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 45,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c2 = CartDetails;
function CartLines({
  lines,
  layout
}) {
  if (!lines)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-labelledby": "cart-lines", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: lines.nodes.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineItem, { line, layout }, line.id, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 59,
    columnNumber: 34
  }, this)) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_c3 = CartLines;
function CartLineItem({
  layout,
  line
}) {
  _s();
  const {
    id,
    merchandise
  } = line;
  const {
    product,
    title,
    image,
    selectedOptions
  } = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "cart-line", children: [
    image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: title, aspectRatio: "1/1", data: image, height: 100, loading: "lazy", width: 100 }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 81,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: lineItemUrl, onClick: () => {
        if (layout === "aside") {
          window.location.href = lineItemUrl;
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: product.title }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 91,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 90,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLinePrice, { line, as: "span" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: selectedOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
        option.name,
        ": ",
        option.value
      ] }, void 0, true, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 97,
        columnNumber: 15
      }, this) }, option.name, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 96,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineQuantity, { line }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, id, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(CartLineItem, "0G/npqv1KFqp38Q/zEdY7LnDVKY=", false, function() {
  return [useVariantUrl];
});
_c4 = CartLineItem;
function CartCheckoutActions({
  checkoutUrl
}) {
  if (!checkoutUrl)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: checkoutUrl, target: "_self", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Continue to Checkout \u2192" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 118,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
}
_c5 = CartCheckoutActions;
function CartSummary({
  cost,
  layout,
  children = null
}) {
  const className = layout === "page" ? "cart-summary-page" : "cart-summary-aside";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-labelledby": "cart-summary", className, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Totals" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "cart-subtotal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Subtotal" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { children: cost?.subtotalAmount?.amount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: cost?.subtotalAmount }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 133,
        columnNumber: 43
      }, this) : "-" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 132,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 128,
    columnNumber: 10
  }, this);
}
_c6 = CartSummary;
function CartLineRemoveButton({
  lineIds
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, { route: "/cart", action: k.ACTIONS.LinesRemove, inputs: {
    lineIds
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Remove" }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 146,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 143,
    columnNumber: 10
  }, this);
}
_c7 = CartLineRemoveButton;
function CartLineQuantity({
  line
}) {
  if (!line || typeof line?.quantity === "undefined")
    return null;
  const {
    id: lineId,
    quantity
  } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-line-quantiy", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
      "Quantity: ",
      quantity,
      " \xA0\xA0"
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineUpdateButton, { lines: [{
      id: lineId,
      quantity: prevQuantity
    }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": "Decrease quantity", disabled: quantity <= 1, name: "decrease-quantity", value: prevQuantity, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2212 " }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 167,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 166,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 162,
      columnNumber: 7
    }, this),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineUpdateButton, { lines: [{
      id: lineId,
      quantity: nextQuantity
    }], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": "Increase quantity", name: "increase-quantity", value: nextQuantity, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 176,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 175,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartLineRemoveButton, { lineIds: [lineId] }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 180,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 160,
    columnNumber: 10
  }, this);
}
_c8 = CartLineQuantity;
function CartLinePrice({
  line,
  priceType = "regular",
  ...passthroughProps
}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount)
    return null;
  const moneyV2 = priceType === "regular" ? line.cost.totalAmount : line.cost.compareAtAmountPerQuantity;
  if (moneyV2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { withoutTrailingZeros: true, ...passthroughProps, data: moneyV2 }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 195,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 194,
    columnNumber: 10
  }, this);
}
_c9 = CartLinePrice;
function CartEmpty({
  hidden = false,
  layout = "aside"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { hidden, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Looks like you haven\u2019t added anything yet, let\u2019s get you started!" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 205,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/collections", onClick: () => {
      if (layout === "aside") {
        window.location.href = "/collections";
      }
    }, children: "Continue shopping \u2192" }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 210,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 203,
    columnNumber: 10
  }, this);
}
_c10 = CartEmpty;
function CartDiscounts({
  discountCodes
}) {
  const codes = discountCodes?.filter((discount) => discount.applicable)?.map(({
    code
  }) => code) || [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { hidden: !codes.length, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: "Discount(s)" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 230,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateDiscountForm, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cart-discount", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { children: codes?.join(", ") }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 233,
          columnNumber: 15
        }, this),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Remove" }, void 0, false, {
          fileName: "app/components/Cart.jsx",
          lineNumber: 235,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 232,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 231,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 229,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 228,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateDiscountForm, { discountCodes: codes, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "discountCode", placeholder: "Discount code" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 244,
        columnNumber: 11
      }, this),
      "\xA0",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Apply" }, void 0, false, {
        fileName: "app/components/Cart.jsx",
        lineNumber: 246,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 243,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Cart.jsx",
      lineNumber: 242,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 226,
    columnNumber: 10
  }, this);
}
_c11 = CartDiscounts;
function UpdateDiscountForm({
  discountCodes,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, { route: "/cart", action: k.ACTIONS.DiscountCodesUpdate, inputs: {
    discountCodes: discountCodes || []
  }, children }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 256,
    columnNumber: 10
  }, this);
}
_c12 = UpdateDiscountForm;
function CartLineUpdateButton({
  children,
  lines
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, { route: "/cart", action: k.ACTIONS.LinesUpdate, inputs: {
    lines
  }, children }, void 0, false, {
    fileName: "app/components/Cart.jsx",
    lineNumber: 267,
    columnNumber: 10
  }, this);
}
_c13 = CartLineUpdateButton;
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
var _c12;
var _c13;
$RefreshReg$(_c, "CartMain");
$RefreshReg$(_c2, "CartDetails");
$RefreshReg$(_c3, "CartLines");
$RefreshReg$(_c4, "CartLineItem");
$RefreshReg$(_c5, "CartCheckoutActions");
$RefreshReg$(_c6, "CartSummary");
$RefreshReg$(_c7, "CartLineRemoveButton");
$RefreshReg$(_c8, "CartLineQuantity");
$RefreshReg$(_c9, "CartLinePrice");
$RefreshReg$(_c10, "CartEmpty");
$RefreshReg$(_c11, "CartDiscounts");
$RefreshReg$(_c12, "UpdateDiscountForm");
$RefreshReg$(_c13, "CartLineUpdateButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CartMain
};
//# sourceMappingURL=/build/_shared/chunk-MA5EVO37.js.map
