import {
  createHotContext
} from "/build/_shared/chunk-BNWNWLV6.js";
import "/build/_shared/chunk-LSHG36UU.js";
import "/build/_shared/chunk-PNG5AS42.js";

// app/routes/$.jsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$.jsx"
  );
  import.meta.hot.lastModified = "1695303548109.2583";
}
function CatchAllPage() {
  return null;
}
_c = CatchAllPage;
var _c;
$RefreshReg$(_c, "CatchAllPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CatchAllPage as default
};
//# sourceMappingURL=/build/routes/$-AGG2T4TO.js.map
