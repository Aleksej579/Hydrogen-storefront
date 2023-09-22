import {
  Image,
  vt
} from "/build/_shared/chunk-FH5AWDRB.js";
import "/build/_shared/chunk-YOSDW4RD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-2LN2NMSG.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BNWNWLV6.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/blogs.$blogHandle._index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blogs.$blogHandle._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blogs.$blogHandle._index.jsx"
  );
  import.meta.hot.lastModified = "1695303548477.2568";
}
var meta = ({
  data
}) => {
  return [{
    title: `Hydrogen | ${data.blog.title} blog`
  }];
};
function Blog() {
  _s();
  const {
    blog
  } = useLoaderData();
  const {
    articles
  } = blog;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: blog.title }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(vt, { connection: articles, children: ({
      nodes,
      isLoading,
      PreviousLink,
      NextLink
    }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviousLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2191 Load previous" }, void 0, false, {
          fileName: "app/routes/blogs.$blogHandle._index.jsx",
          lineNumber: 84,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/blogs.$blogHandle._index.jsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        nodes.map((article, index) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArticleItem, { article, loading: index < 2 ? "eager" : "lazy" }, article.id, false, {
            fileName: "app/routes/blogs.$blogHandle._index.jsx",
            lineNumber: 87,
            columnNumber: 22
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NextLink, { children: isLoading ? "Loading..." : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Load more \u2193" }, void 0, false, {
          fileName: "app/routes/blogs.$blogHandle._index.jsx",
          lineNumber: 90,
          columnNumber: 47
        }, this) }, void 0, false, {
          fileName: "app/routes/blogs.$blogHandle._index.jsx",
          lineNumber: 89,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blogs.$blogHandle._index.jsx",
        lineNumber: 82,
        columnNumber: 18
      }, this);
    } }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blogs.$blogHandle._index.jsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(Blog, "SHOFUFk+9xRgdR41JGjHYbh9Fpc=", false, function() {
  return [useLoaderData];
});
_c = Blog;
function ArticleItem({
  article,
  loading
}) {
  const publishedAt = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(article.publishedAt));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-article", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/${article.blog.handle}/${article.handle}`, children: [
    article.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-article-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { alt: article.image.altText || article.title, aspectRatio: "3/2", data: article.image, loading, sizes: "(min-width: 768px) 50vw, 100vw" }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 114,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 113,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: article.title }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 116,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: publishedAt }, void 0, false, {
      fileName: "app/routes/blogs.$blogHandle._index.jsx",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blogs.$blogHandle._index.jsx",
    lineNumber: 112,
    columnNumber: 7
  }, this) }, article.id, false, {
    fileName: "app/routes/blogs.$blogHandle._index.jsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_c2 = ArticleItem;
var _c;
var _c2;
$RefreshReg$(_c, "Blog");
$RefreshReg$(_c2, "ArticleItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Blog as default,
  meta
};
//# sourceMappingURL=/build/routes/blogs.$blogHandle._index-G2KIUGEI.js.map
