import {
  Money,
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

// app/routes/account.orders._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.orders._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.orders._index.jsx"
  );
  import.meta.hot.lastModified = "1695397981630.664";
}
var meta = () => {
  return [{
    title: "Orders"
  }];
};
function Orders() {
  _s();
  const {
    customer
  } = useLoaderData();
  const {
    orders,
    numberOfOrders
  } = customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "orders", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "Orders ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
        "(",
        numberOfOrders,
        ")"
      ] }, void 0, true, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 89,
        columnNumber: 16
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    orders.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrdersTable, { orders }, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 92,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 92,
      columnNumber: 64
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 87,
    columnNumber: 10
  }, this);
}
_s(Orders, "yijW26QhKvLyTUDP0qUPm3wKw78=", false, function() {
  return [useLoaderData];
});
_c = Orders;
function OrdersTable({
  orders
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "acccount-orders", children: orders?.nodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(vt, { connection: orders, children: ({
    nodes,
    isLoading,
    PreviousLink,
    NextLink
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 112,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 111,
        columnNumber: 17
      }, this),
      nodes.map((order) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderItem, { order }, order.id, false, {
          fileName: "app/routes/account.orders._index.jsx",
          lineNumber: 115,
          columnNumber: 20
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 118,
        columnNumber: 47
      }, this) }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 117,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 110,
      columnNumber: 16
    }, this);
  } }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 103,
    columnNumber: 31
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyOrders, {}, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 122,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_c2 = OrdersTable;
function EmptyOrders() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You haven't placed any orders yet." }, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/collections", children: "Start Shopping \u2192" }, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 127,
    columnNumber: 10
  }, this);
}
_c3 = EmptyOrders;
function OrderItem({
  order
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/account/orders/${order.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
        "#",
        order.orderNumber
      ] }, void 0, true, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 142,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: new Date(order.processedAt).toDateString() }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.financialStatus }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: order.fulfillmentStatus }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Money, { data: order.currentTotalPrice }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/account/orders/${btoa(order.id)}`, children: "View Order \u2192" }, void 0, false, {
        fileName: "app/routes/account.orders._index.jsx",
        lineNumber: 148,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.orders._index.jsx",
      lineNumber: 150,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.orders._index.jsx",
    lineNumber: 139,
    columnNumber: 10
  }, this);
}
_c4 = OrderItem;
var ORDER_ITEM_FRAGMENT = `#graphql
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`;
var CUSTOMER_FRAGMENT = `#graphql
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        hasNextPage
        endCursor
      }
    }
  }
  ${ORDER_ITEM_FRAGMENT}
`;
var CUSTOMER_ORDERS_QUERY = `#graphql
  ${CUSTOMER_FRAGMENT}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "Orders");
$RefreshReg$(_c2, "OrdersTable");
$RefreshReg$(_c3, "EmptyOrders");
$RefreshReg$(_c4, "OrderItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Orders as default,
  meta
};
//# sourceMappingURL=/build/routes/account.orders._index-QDLTUSI4.js.map
