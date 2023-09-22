import {
  createHotContext
} from "/build/_shared/chunk-BNWNWLV6.js";
import "/build/_shared/chunk-LSHG36UU.js";
import "/build/_shared/chunk-PNG5AS42.js";

// app/routes/account_.logout.jsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account_.logout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account_.logout.jsx"
  );
  import.meta.hot.lastModified = "1695303548761.2559";
}
var meta = () => {
  return [{
    title: "Logout"
  }];
};
function Logout() {
  return null;
}
_c = Logout;
var _c;
$RefreshReg$(_c, "Logout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Logout as default,
  meta
};
//# sourceMappingURL=/build/routes/account_.logout-BQTJCZDH.js.map
