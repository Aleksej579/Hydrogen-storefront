import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-UHAUI7PR.js";
import {
  Form,
  useActionData,
  useNavigation,
  useOutletContext
} from "/build/_shared/chunk-2LN2NMSG.js";
import "/build/_shared/chunk-BVWHYGSQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BNWNWLV6.js";
import "/build/_shared/chunk-LSHG36UU.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/account.profile.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/account.profile.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/account.profile.jsx"
  );
  import.meta.hot.lastModified = "1695303548673.256";
}
var meta = () => {
  return [{
    title: "Profile"
  }];
};
function AccountProfile() {
  _s();
  const account = useOutletContext();
  const {
    state
  } = useNavigation();
  const action = useActionData();
  const customer = action?.customer ?? account?.customer;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-profile", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "My profile" }, void 0, false, {
      fileName: "app/routes/account.profile.jsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/account.profile.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PUT", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Personal information" }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", children: "First name" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "firstName", name: "firstName", type: "text", autoComplete: "given-name", placeholder: "First name", "aria-label": "First name", defaultValue: customer.firstName ?? "", minLength: 2 }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", children: "Last name" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "lastName", name: "lastName", type: "text", autoComplete: "family-name", placeholder: "Last name", "aria-label": "Last name", defaultValue: customer.lastName ?? "", minLength: 2 }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", children: "Mobile" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "phone", name: "phone", type: "tel", autoComplete: "tel", placeholder: "Mobile", "aria-label": "Mobile", defaultValue: customer.phone ?? "" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 138,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email address" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, placeholder: "Email address", "aria-label": "Email address", defaultValue: customer.email ?? "" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "account-profile-marketing", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "acceptsMarketing", name: "acceptsMarketing", type: "checkbox", placeholder: "Accept marketing", "aria-label": "Accept marketing", defaultChecked: customer.acceptsMarketing }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "acceptsMarketing", children: "\xA0 Subscribed to marketing communications" }, void 0, false, {
            fileName: "app/routes/account.profile.jsx",
            lineNumber: 143,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Change password (optional)" }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "currentPassword", children: "Current password" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "currentPassword", name: "currentPassword", type: "password", autoComplete: "current-password", placeholder: "Current password", "aria-label": "Current password", minLength: 8 }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 152,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "newPassword", children: "New password" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "newPassword", name: "newPassword", type: "password", placeholder: "New password", "aria-label": "New password", minLength: 8 }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 155,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "newPasswordConfirm", children: "New password (confirm)" }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 157,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "newPasswordConfirm", name: "newPasswordConfirm", type: "password", placeholder: "New password (confirm)", "aria-label": "New password confirm", minLength: 8 }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 158,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: "Passwords must be at least 8 characters." }, void 0, false, {
          fileName: "app/routes/account.profile.jsx",
          lineNumber: 159,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      action?.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mark", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: action.error }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 163,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 162,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 161,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 165,
        columnNumber: 18
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: state !== "idle", children: state !== "idle" ? "Updating" : "Update" }, void 0, false, {
        fileName: "app/routes/account.profile.jsx",
        lineNumber: 166,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.profile.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.profile.jsx",
    lineNumber: 127,
    columnNumber: 10
  }, this);
}
_s(AccountProfile, "ESq5n4UNxLQdC87RexB90ndxeMw=", false, function() {
  return [useOutletContext, useNavigation, useActionData];
});
_c = AccountProfile;
var _c;
$RefreshReg$(_c, "AccountProfile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AccountProfile as default,
  meta
};
//# sourceMappingURL=/build/routes/account.profile-FHFP4PT4.js.map
