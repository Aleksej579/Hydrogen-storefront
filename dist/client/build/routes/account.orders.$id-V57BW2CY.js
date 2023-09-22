import {
  Image,
  Money
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

// app/routes/account.orders.$id.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.orders.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.orders.$id.jsx"
  );
  import.meta.hot.lastModified = "1695303548617.256";
}
var meta = ({
  data
}) => {
  return [{
    title: `Order ${data?.order?.name}`
  }];
};
function OrderRoute() {
  _s();
  const {
    order,
    lineItems,
    discountValue,
    discountPercentage
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-order", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Order ",
      order.name
    ] }, void 0, true, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Placed on ",
      new Date(order.processedAt).toDateString()
    ] }, void 0, true, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Product" }, void 0, false, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Price" }, void 0, false, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Quantity" }, void 0, false, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", children: "Total" }, void 0, false, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 91,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 87,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: lineItems.map((lineItem, lineItemIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderLineRow, { lineItem }, lineItemIndex, false, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 97,
            columnNumber: 11
          }, this)
        )) }, void 0, false, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tfoot", { children: [
          (discountValue && discountValue.amount || discountPercentage) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Discounts" }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 102,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 101,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Discounts" }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 105,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 104,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: discountPercentage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "-",
              discountPercentage,
              "% OFF"
            ] }, void 0, true, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 108,
              columnNumber: 41
            }, this) : discountValue && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: discountValue }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 108,
              columnNumber: 100
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 107,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 100,
            columnNumber: 79
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 112,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 116,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 115,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.subtotalPriceV2 }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 119,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 118,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 111,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: "Tax" }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 123,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Tax" }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 127,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 126,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalTaxV2 }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 130,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 129,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 122,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", colSpan: 3, children: "Total" }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 134,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Total" }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 138,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 137,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.totalPriceV2 }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 141,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/account.orders.$id.jsx",
              lineNumber: 140,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 133,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.orders.$id.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Shipping Address" }, void 0, false, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 147,
          columnNumber: 11
        }, this),
        order?.shippingAddress ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("address", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            order.shippingAddress.firstName && order.shippingAddress.firstName + " ",
            order.shippingAddress.lastName
          ] }, void 0, true, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 149,
            columnNumber: 15
          }, this),
          order?.shippingAddress?.formatted ? order.shippingAddress.formatted.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: line }, line, false, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 153,
            columnNumber: 96
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
            fileName: "app/routes/account.orders.$id.jsx",
            lineNumber: 153,
            columnNumber: 124
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 148,
          columnNumber: 37
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No shipping address defined" }, void 0, false, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 154,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Status" }, void 0, false, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 155,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.fulfillmentStatus }, void 0, false, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 157,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 156,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.orders.$id.jsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: order.statusUrl, rel: "noreferrer", children: "View Order Status \u2192" }, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 163,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 162,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.orders.$id.jsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(OrderRoute, "VWNsq0d8NkbTP5ronHng6o3+YvQ=", false, function() {
  return [useLoaderData];
});
_c = OrderRoute;
function OrderLineRow({
  lineItem
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${lineItem.variant.product.handle}`, children: lineItem?.variant?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { data: lineItem.variant.image, width: 96, height: 96 }, void 0, false, {
        fileName: "app/routes/account.orders.$id.jsx",
        lineNumber: 181,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/account.orders.$id.jsx",
        lineNumber: 180,
        columnNumber: 42
      }, this) }, void 0, false, {
        fileName: "app/routes/account.orders.$id.jsx",
        lineNumber: 179,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: lineItem.title }, void 0, false, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 185,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: lineItem.variant.title }, void 0, false, {
          fileName: "app/routes/account.orders.$id.jsx",
          lineNumber: 186,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.orders.$id.jsx",
        lineNumber: 184,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 178,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 177,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.variant.price }, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 191,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 190,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: lineItem.quantity }, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: lineItem.discountedTotalPrice }, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 195,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account.orders.$id.jsx",
      lineNumber: 194,
      columnNumber: 7
    }, this)
  ] }, lineItem.variant.id, true, {
    fileName: "app/routes/account.orders.$id.jsx",
    lineNumber: 176,
    columnNumber: 10
  }, this);
}
_c2 = OrderLineRow;
var _c;
var _c2;
$RefreshReg$(_c, "OrderRoute");
$RefreshReg$(_c2, "OrderLineRow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OrderRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/account.orders.$id-V57BW2CY.js.map
