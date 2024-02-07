"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = Symbol.for("react.element");
      var n = Symbol.for("react.portal");
      var p = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r = Symbol.for("react.profiler");
      var t = Symbol.for("react.provider");
      var u2 = Symbol.for("react.context");
      var v = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a) {
        if (null === a || "object" !== typeof a)
          return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, e) {
        var d, c = {}, k = null, h = null;
        if (null != b)
          for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
            J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g)
          c.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++)
            f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps)
          for (d in g = a.defaultProps, g)
            void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
      }
      function N(a, b) {
        return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k)
          a = null;
        var h = false;
        if (null === a)
          h = true;
        else
          switch (k) {
            case "string":
            case "number":
              h = true;
              break;
            case "object":
              switch (a.$$typeof) {
                case l:
                case n:
                  h = true;
              }
          }
        if (h)
          return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
            return a2;
          })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a))
          for (var g = 0; g < a.length; g++) {
            k = a[g];
            var f = d + Q(k, g);
            h += R(k, b, e, f, c);
          }
        else if (f = A(a), "function" === typeof f)
          for (a = f.call(a), g = 0; !(k = a.next()).done; )
            k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
        else if ("object" === k)
          throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b, e) {
        if (null == a)
          return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a2) {
          return b.call(e, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status)
              a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status)
              a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status)
          return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      exports.Children = { map: S, forEach: function(a, b, e) {
        S(a, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a))
          throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.cloneElement = function(a, b, e) {
        if (null === a || void 0 === a)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps)
            var g = a.type.defaultProps;
          for (f in b)
            J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f)
          d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++)
            g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.");
      };
      exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.2.0";
    }
  });

  // ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
  var require_react = __commonJS({
    "../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../node_modules/.pnpm/scheduler@0.23.0/node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "../../node_modules/.pnpm/scheduler@0.23.0/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a:
          for (; 0 < c; ) {
            var d = c - 1 >>> 1, e = a[d];
            if (0 < g(e, b))
              a[d] = b, a[c] = e, c = d;
            else
              break a;
          }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length)
          return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a:
            for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
              var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
              if (0 > g(C, c))
                n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
              else if (n < e && 0 > g(x, c))
                a[d] = x, a[n] = c, d = n;
              else
                break a;
            }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l;
      var p;
      var q;
      var r = [];
      var t = [];
      var u2 = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback)
            k(t);
          else if (b.startTime <= a)
            k(t), b.sortIndex = b.expirationTime, f(r, b);
          else
            break;
          b = h(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A)
          if (null !== h(r))
            A = true, I(J);
          else {
            var b = h(t);
            null !== b && K(H, b.startTime - a);
          }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b);
            } else
              k(r);
            v = h(r);
          }
          if (null !== v)
            var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else
          N = false;
      }
      var S;
      if ("function" === typeof F)
        S = function() {
          F(R);
        };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else
        S = function() {
          D(R, 0);
        };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // ../../node_modules/.pnpm/scheduler@0.23.0/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "../../node_modules/.pnpm/scheduler@0.23.0/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
          b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a, b) {
        ha(a, b);
        ha(a + "Capture", b);
      }
      function ha(a, b) {
        ea[a] = b;
        for (a = 0; a < b.length; a++)
          da.add(b[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a) {
        if (ja.call(ma, a))
          return true;
        if (ja.call(la, a))
          return false;
        if (ka.test(a))
          return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa(a, b, c, d) {
        if (null !== c && 0 === c.type)
          return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d)
              return false;
            if (null !== c)
              return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa(a, b, c, d))
          return true;
        if (d)
          return false;
        if (null !== c)
          switch (c.type) {
            case 3:
              return !b;
            case 4:
              return false === b;
            case 5:
              return isNaN(b);
            case 6:
              return isNaN(b) || 1 > b;
          }
        return false;
      }
      function v(a, b, c, d, e, f, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra,
          sa
        );
        z[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta(a, b, c, d) {
        var e = z.hasOwnProperty(b) ? z[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
          qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a)
          return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A = Object.assign;
      var La;
      function Ma(a) {
        if (void 0 === La)
          try {
            throw Error();
          } catch (c) {
            var b = c.stack.trim().match(/\n( *(at )?)/);
            La = b && b[1] || "";
          }
        return "\n" + La + a;
      }
      var Na = false;
      function Oa(a, b) {
        if (!a || Na)
          return "";
        Na = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b)
            if (b = function() {
              throw Error();
            }, Object.defineProperty(b.prototype, "props", { set: function() {
              throw Error();
            } }), "object" === typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(b, []);
              } catch (l) {
                var d = l;
              }
              Reflect.construct(a, [], b);
            } else {
              try {
                b.call();
              } catch (l) {
                d = l;
              }
              a.call(b.prototype);
            }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
              h--;
            for (; 1 <= g && 0 <= h; g--, h--)
              if (e[g] !== f[h]) {
                if (1 !== g || 1 !== h) {
                  do
                    if (g--, h--, 0 > h || e[g] !== f[h]) {
                      var k = "\n" + e[g].replace(" at new ", " at ");
                      a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                      return k;
                    }
                  while (1 <= g && 0 <= h);
                }
                break;
              }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa(a) {
        if (null == a)
          return null;
        if ("function" === typeof a)
          return a.displayName || a.name || null;
        if ("string" === typeof a)
          return a;
        switch (a) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a)
          switch (a.$$typeof) {
            case Ca:
              return (a.displayName || "Context") + ".Consumer";
            case Ba:
              return (a._context.displayName || "Context") + ".Provider";
            case Da:
              var b = a.render;
              a = a.displayName;
              a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
              return a;
            case Ga:
              return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
            case Ha:
              b = a._payload;
              a = a._init;
              try {
                return Qa(a(b));
              } catch (c) {
              }
          }
        return null;
      }
      function Ra(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b)
              return b.displayName || b.name || null;
            if ("string" === typeof b)
              return b;
        }
        return null;
      }
      function Sa(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a) {
        var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa(a) {
        if (!a)
          return false;
        var b = a._valueTracker;
        if (!b)
          return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a)
          return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya(a, b) {
        var c = b.checked;
        return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa(b.value), d = b.type;
        if (null != c)
          if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c)
              a.value = "" + c;
          } else
            a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
            return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa(a.ownerDocument) !== a)
          null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++)
            b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++)
            e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b || a[e].disabled || (b = a[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML)
          throw Error(p(91));
        return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b)
              throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length)
                throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa(c) };
      }
      function ib(a, b) {
        var c = Sa(b.value), d = Sa(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      }(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
          a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; )
            a.removeChild(a.firstChild);
          for (; b.firstChild; )
            a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b)
          if (b.hasOwnProperty(c)) {
            var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
            "float" === c && (c = "cssFloat");
            d ? a.setProperty(c, e) : a[c] = e;
          }
      }
      var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
            throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children)
              throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
              throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style)
            throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-"))
          return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb)
            throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b)
            for (a = 0; a < b.length; a++)
              Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib)
          return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab)
            Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c)
          return null;
        var d = Db(c);
        if (null === d)
          return null;
        c = d[b];
        a:
          switch (b) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
              a = !d;
              break a;
            default:
              a = false;
          }
        if (a)
          return null;
        if (c && "function" !== typeof c)
          throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia)
        try {
          Mb = {};
          Object.defineProperty(Mb, "passive", { get: function() {
            Lb = true;
          } });
          window.addEventListener("test", Mb, Mb);
          window.removeEventListener("test", Mb, Mb);
        } catch (a) {
          Lb = false;
        }
      var Mb;
      function Nb(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e, f, g, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e, f, g, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else
            throw Error(p(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate)
          for (; b.return; )
            b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b)
            return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a)
          throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b)
            throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (null === e)
            break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c)
                return Xb(e), a;
              if (f === d)
                return Xb(e), b;
              f = f.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return)
            c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g)
                throw Error(p(189));
            }
          }
          if (c.alternate !== d)
            throw Error(p(190));
        }
        if (3 !== c.tag)
          throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag)
          return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b)
            return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot)
          try {
            lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
          } catch (b) {
          }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b) {
        var c = a.pendingLanes;
        if (0 === c)
          return 0;
        var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
        } else
          g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
        if (0 === d)
          return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240)))
          return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b)
          for (a = a.entanglements, b &= d; 0 < b; )
            c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function vc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
          var g = 31 - oc(f), h = 1 << g, k = e[g];
          if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d))
              e[g] = vc(h, b);
          } else
            k <= b && (a.expiredLanes |= h);
          f &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++)
          b.push(a);
        return b;
      }
      function Ac(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e = 31 - oc(c), f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function Cc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f)
          return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a;
      }
      function Uc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Vc(a) {
        var b = Wc(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn)
          return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else
            return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc(a) && c.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad(b2, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c = 0; c < Qc.length; c++)
          d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
          Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function gd(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e = Yc(a, b, c, d);
          if (null === e)
            hd(a, b, d, id, c), Sc(a, d);
          else if (Uc(e, a, b, c, d))
            d.stopPropagation();
          else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e; ) {
              var f = Cb(e);
              null !== f && Ec(f);
              f = Yc(a, b, c, d);
              null === f && hd(a, b, d, id, c);
              if (f === e)
                break;
              e = f;
            }
            null !== e && d.stopPropagation();
          } else
            hd(a, b, d, null, c);
        }
      }
      var id = null;
      function Yc(a, b, c, d) {
        id = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a)
          if (b = Vb(a), null === b)
            a = null;
          else if (c = b.tag, 13 === c) {
            a = Wb(b);
            if (null !== a)
              return a;
            a = null;
          } else if (3 === c) {
            if (b.stateNode.current.memoizedState.isDehydrated)
              return 3 === b.tag ? b.stateNode.containerInfo : null;
            a = null;
          } else
            b !== a && (a = null);
        id = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md)
          return md;
        var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++)
          ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
          ;
        return md = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e, f, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a)
            a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
          this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a)
          return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A({}, ud, { key: function(a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ("Unidentified" !== b)
            return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie = false;
      function je(a, b) {
        switch (a) {
          case "compositionend":
            return he(b);
          case "keypress":
            if (32 !== b.which)
              return null;
            fe = true;
            return ee;
          case "textInput":
            return a = b.data, a === ee && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b) {
        if (ie)
          return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length)
                return b.char;
              if (b.which)
                return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
      }
      function ne(a, b, c, d) {
        Eb(d);
        b = oe(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe = null;
      var qe = null;
      function re(a) {
        se(a, 0);
      }
      function te(a) {
        var b = ue(a);
        if (Wa(b))
          return a;
      }
      function ve(a, b) {
        if ("change" === a)
          return b;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else
          xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a) {
        if ("value" === a.propertyName && te(qe)) {
          var b = [];
          ne(b, qe, a, xb(a));
          Jb(re, b);
        }
      }
      function Ce(a, b, c) {
        "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
      }
      function De(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a)
          return te(qe);
      }
      function Ee(a, b) {
        if ("click" === a)
          return te(b);
      }
      function Fe(a, b) {
        if ("input" === a || "change" === a)
          return te(b);
      }
      function Ge(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a, b) {
        if (He(a, b))
          return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
          return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length)
          return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!ja.call(b, e) || !He(a[e], b[e]))
            return false;
        }
        return true;
      }
      function Je(a) {
        for (; a && a.firstChild; )
          a = a.firstChild;
        return a;
      }
      function Ke(a, b) {
        var c = Je(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b)
              return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je(c);
        }
      }
      function Le(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me() {
        for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c)
            a = b.contentWindow;
          else
            break;
          b = Xa(a.document);
        }
        return b;
      }
      function Ne(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe(a) {
        var b = Me(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
              c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c.textContent.length, f = Math.min(d.start, e);
              d = void 0 === d.end ? f : Math.min(d.end, e);
              !a.extend && f > d && (e = d, d = f, f = e);
              e = Ke(c, f);
              var g = Ke(
                c,
                d
              );
              e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; )
            1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++)
            a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
      }
      function Ve(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a) {
        if (Xe[a])
          return Xe[a];
        if (!We[a])
          return a;
        var b = We[a], c;
        for (c in b)
          if (b.hasOwnProperty(c) && c in Ye)
            return Xe[a] = b[c];
        return a;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b)
              for (var g = d.length - 1; 0 <= g; g--) {
                var h = d[g], k = h.instance, l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped())
                  break a;
                nf(e, h, l);
                f = k;
              }
            else
              for (g = 0; g < d.length; g++) {
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped())
                  break a;
                nf(e, h, l);
                f = k;
              }
          }
        }
        if (Qb)
          throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
      }
      function hd(a, b, c, d, e) {
        var f = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d)
          a:
            for (; ; ) {
              if (null === d)
                return;
              var g = d.tag;
              if (3 === g || 4 === g) {
                var h = d.stateNode.containerInfo;
                if (h === e || 8 === h.nodeType && h.parentNode === e)
                  break;
                if (4 === g)
                  for (g = d.return; null !== g; ) {
                    var k = g.tag;
                    if (3 === k || 4 === k) {
                      if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e)
                        return;
                    }
                    g = g.return;
                  }
                for (; null !== h; ) {
                  g = Wc(h);
                  if (null === g)
                    return;
                  k = g.tag;
                  if (5 === k || 6 === k) {
                    d = f = g;
                    continue a;
                  }
                  h = h.parentNode;
                }
              }
              d = d.return;
            }
        Jb(function() {
          var d2 = f, e2 = xb(c), g2 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k2 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c))
                    break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c.button)
                    break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w = d2, u2; null !== w; ) {
                u2 = w;
                var F = u2.stateNode;
                5 === u2.tag && null !== F && (u2 = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u2))));
                if (J)
                  break;
                w = w.return;
              }
              0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k2 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf]))
                break a;
              if (k2 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag))
                    n = null;
                } else
                  k2 = null, n = d2;
                if (k2 !== n) {
                  t = Bd;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a || "pointerover" === a)
                    t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u2 = null == n ? h2 : ue(n);
                  h2 = new t(F, w + "leave", k2, c, e2);
                  h2.target = J;
                  h2.relatedTarget = u2;
                  F = null;
                  Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u2, t.relatedTarget = J, F = t);
                  J = F;
                  if (k2 && n)
                    b: {
                      t = k2;
                      x = n;
                      w = 0;
                      for (u2 = t; u2; u2 = vf(u2))
                        w++;
                      u2 = 0;
                      for (F = x; F; F = vf(F))
                        u2++;
                      for (; 0 < w - u2; )
                        t = vf(t), w--;
                      for (; 0 < u2 - w; )
                        x = vf(x), u2--;
                      for (; w--; ) {
                        if (t === x || null !== x && t === x.alternate)
                          break b;
                        t = vf(t);
                        x = vf(x);
                      }
                      t = null;
                    }
                  else
                    t = null;
                  null !== k2 && wf(g2, h2, k2, t, false);
                  null !== n && null !== J && wf(g2, J, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type)
                var na = ve;
              else if (me(h2))
                if (we)
                  na = Fe;
                else {
                  na = De;
                  var xa = Ce;
                }
              else
                (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a, d2))) {
                ne(g2, na, c, e2);
                break a;
              }
              xa && xa(a, h2, d2);
              "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue(d2) : window;
            switch (a) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable)
                  Qe = xa, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g2, c, e2);
                break;
              case "selectionchange":
                if (Pe)
                  break;
              case "keydown":
              case "keyup":
                Ue(g2, c, e2);
            }
            var $a;
            if (ae)
              b: {
                switch (a) {
                  case "compositionstart":
                    var ba = "onCompositionStart";
                    break b;
                  case "compositionend":
                    ba = "onCompositionEnd";
                    break b;
                  case "compositionupdate":
                    ba = "onCompositionUpdate";
                    break b;
                }
                ba = void 0;
              }
            else
              ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a, c) : ke(a, c))
              d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e = a, f = e.stateNode;
          5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a)
          return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k = h.alternate, l = h.stateNode;
          if (null !== k && k === d)
            break;
          5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c)
          throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e = c.nextSibling;
          a.removeChild(c);
          if (e && 8 === e.nodeType)
            if (c = e.data, "/$" === c) {
              if (0 === d) {
                a.removeChild(e);
                bd(b);
                return;
              }
              d--;
            } else
              "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b)
            break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b)
              break;
            if ("/$" === b)
              return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b)
                return a;
              b--;
            } else
              "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b = a[Of];
        if (b)
          return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child)
              for (a = Mf(a); null !== a; ) {
                if (c = a[Of])
                  return c;
                a = Mf(a);
              }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue(a) {
        if (5 === a.tag || 6 === a.tag)
          return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c)
          return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
          return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c)
          e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a, b, c) {
        if (H.current !== Vf)
          throw Error(p(168));
        G(H, b);
        G(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext)
          return c;
        d = d.getChildContext();
        for (var e in d)
          if (!(e in b))
            throw Error(p(108, Ra(a) || "Unknown", e));
        return A({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d)
          throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
        G(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - oc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          rg = 1 << 32 - oc(b) + e | c << e | d;
          sg = f + a;
        } else
          rg = 1 << f | c << e | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; )
          mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; )
          qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a))
                throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
            }
          } else {
            if (Dg(a))
              throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
          a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg)
          return false;
        if (!I)
          return Fg(a), I = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a))
            throw Hg(), Error(p(418));
          for (; b; )
            Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a)
            throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else
                  "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else
          yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; )
          a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a, b) {
        if (a && a.defaultProps) {
          b = A({}, b);
          a = a.defaultProps;
          for (var c in a)
            void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      var Mg = Uf(null);
      var Ng = null;
      var Og = null;
      var Pg = null;
      function Qg() {
        Pg = Og = Ng = null;
      }
      function Rg(a) {
        var b = Mg.current;
        E(Mg);
        a._currentValue = b;
      }
      function Sg(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c)
            break;
          a = a.return;
        }
      }
      function Tg(a, b) {
        Ng = a;
        Pg = Og = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
      }
      function Vg(a) {
        var b = a._currentValue;
        if (Pg !== a)
          if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
            if (null === Ng)
              throw Error(p(308));
            Og = a;
            Ng.dependencies = { lanes: 0, firstContext: a };
          } else
            Og = Og.next = a;
        return b;
      }
      var Wg = null;
      function Xg(a) {
        null === Wg ? Wg = [a] : Wg.push(a);
      }
      function Yg(a, b, c, d) {
        var e = b.interleaved;
        null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
        b.interleaved = c;
        return Zg(a, d);
      }
      function Zg(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; )
          a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var $g = false;
      function ah(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function bh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function ch(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function dh(a, b, c) {
        var d = a.updateQueue;
        if (null === d)
          return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return Zg(a, c);
        }
        e = d.interleaved;
        null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return Zg(a, c);
      }
      function eh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      function fh(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f ? e = f = g : f = f.next = g;
              c = c.next;
            } while (null !== c);
            null === f ? e = f = b : f = f.next = b;
          } else
            e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function gh(a, b, c, d) {
        var e = a.updateQueue;
        $g = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var q = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a, t = h;
                r = b;
                y = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q = n.call(y, q, r);
                      break a;
                    }
                    q = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y, q, r) : n;
                    if (null === r || void 0 === r)
                      break a;
                    q = A({}, q, r);
                    break a;
                  case 2:
                    $g = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
            } else
              y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h)
              if (h = e.shared.pending, null === h)
                break;
              else
                r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
          } while (1);
          null === m && (k = q);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else
            null === f && (e.shared.lanes = 0);
          hh |= g;
          a.lanes = g;
          a.memoizedState = q;
        }
      }
      function ih(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a)
          for (b = 0; b < a.length; b++) {
            var d = a[b], e = d.callback;
            if (null !== e) {
              d.callback = null;
              d = c;
              if ("function" !== typeof e)
                throw Error(p(191, e));
              e.call(d);
            }
          }
      }
      var jh = new aa.Component().refs;
      function kh(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var nh = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f = ch(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = dh(a, f, e);
        null !== b && (mh(b, a, e, d), eh(b, a, e));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f = ch(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = dh(a, f, e);
        null !== b && (mh(b, a, e, d), eh(b, a, e));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = L(), d = lh(a), e = ch(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = dh(a, e, d);
        null !== b && (mh(b, a, d, c), eh(b, a, d));
      } };
      function oh(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
      }
      function ph(a, b, c) {
        var d = false, e = Vf;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = nh;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function qh(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && nh.enqueueReplaceState(b, b.state, null);
      }
      function rh(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = jh;
        ah(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      function sh(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag)
                throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d)
              throw Error(p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f)
              return b.ref;
            b = function(a2) {
              var b2 = e.refs;
              b2 === jh && (b2 = e.refs = {});
              null === a2 ? delete b2[f] : b2[f] = a2;
            };
            b._stringRef = f;
            return b;
          }
          if ("string" !== typeof a)
            throw Error(p(284));
          if (!c._owner)
            throw Error(p(290, a));
        }
        return a;
      }
      function th(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function uh(a) {
        var b = a._init;
        return b(a._payload);
      }
      function vh(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a)
            return null;
          for (; null !== d2; )
            b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
            null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = wh(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a)
            return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2)
            return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag)
            return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          var f2 = c2.type;
          if (f2 === ya)
            return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && uh(f2) === b2.type))
            return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
          d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = sh(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
            return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f2) {
          if (null === b2 || 7 !== b2.tag)
            return b2 = Ah(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
            return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va:
                return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
              case wa:
                return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha:
                var d2 = b2._init;
                return q(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka(b2))
              return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
            th(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
            return null !== e2 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va:
                return c2.key === e2 ? k(a2, b2, c2, d2) : null;
              case wa:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
              case Ha:
                return e2 = c2._init, r(
                  a2,
                  b2,
                  e2(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2))
              return null !== e2 ? null : m(a2, b2, c2, d2, null);
            th(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
            return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
              case wa:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
              case Ha:
                var f2 = d2._init;
                return y(a2, b2, c2, f2(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2))
              return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
            th(b2, d2);
          }
          return null;
        }
        function n(e2, g2, h2, k2) {
          for (var l2 = null, m2 = null, u2 = g2, w = g2 = 0, x = null; null !== u2 && w < h2.length; w++) {
            u2.index > w ? (x = u2, u2 = null) : x = u2.sibling;
            var n2 = r(e2, u2, h2[w], k2);
            if (null === n2) {
              null === u2 && (u2 = x);
              break;
            }
            a && u2 && null === n2.alternate && b(e2, u2);
            g2 = f(n2, g2, w);
            null === m2 ? l2 = n2 : m2.sibling = n2;
            m2 = n2;
            u2 = x;
          }
          if (w === h2.length)
            return c(e2, u2), I && tg(e2, w), l2;
          if (null === u2) {
            for (; w < h2.length; w++)
              u2 = q(e2, h2[w], k2), null !== u2 && (g2 = f(u2, g2, w), null === m2 ? l2 = u2 : m2.sibling = u2, m2 = u2);
            I && tg(e2, w);
            return l2;
          }
          for (u2 = d(e2, u2); w < h2.length; w++)
            x = y(u2, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u2.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
          a && u2.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function t(e2, g2, h2, k2) {
          var l2 = Ka(h2);
          if ("function" !== typeof l2)
            throw Error(p(150));
          h2 = l2.call(h2);
          if (null == h2)
            throw Error(p(151));
          for (var u2 = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
            m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
            var t2 = r(e2, m2, n2.value, k2);
            if (null === t2) {
              null === m2 && (m2 = x);
              break;
            }
            a && m2 && null === t2.alternate && b(e2, m2);
            g2 = f(t2, g2, w);
            null === u2 ? l2 = t2 : u2.sibling = t2;
            u2 = t2;
            m2 = x;
          }
          if (n2.done)
            return c(
              e2,
              m2
            ), I && tg(e2, w), l2;
          if (null === m2) {
            for (; !n2.done; w++, n2 = h2.next())
              n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u2 ? l2 = n2 : u2.sibling = n2, u2 = n2);
            I && tg(e2, w);
            return l2;
          }
          for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next())
            n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u2 ? l2 = n2 : u2.sibling = n2, u2 = n2);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function J(a2, d2, f2, h2) {
          "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
          if ("object" === typeof f2 && null !== f2) {
            switch (f2.$$typeof) {
              case va:
                a: {
                  for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === ya) {
                        if (7 === l2.tag) {
                          c(a2, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && uh(k2) === l2.type) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = sh(a2, l2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else
                      b(a2, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === ya ? (d2 = Ah(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = yh(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa:
                a: {
                  for (l2 = f2.key; null !== d2; ) {
                    if (d2.key === l2)
                      if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                        c(a2, d2.sibling);
                        d2 = e(d2, f2.children || []);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      } else {
                        c(a2, d2);
                        break;
                      }
                    else
                      b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = zh(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha:
                return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
            }
            if (eb(f2))
              return n(a2, d2, f2, h2);
            if (Ka(f2))
              return t(a2, d2, f2, h2);
            th(a2, f2);
          }
          return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J;
      }
      var Bh = vh(true);
      var Ch = vh(false);
      var Dh = {};
      var Eh = Uf(Dh);
      var Fh = Uf(Dh);
      var Gh = Uf(Dh);
      function Hh(a) {
        if (a === Dh)
          throw Error(p(174));
        return a;
      }
      function Ih(a, b) {
        G(Gh, b);
        G(Fh, a);
        G(Eh, Dh);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E(Eh);
        G(Eh, b);
      }
      function Jh() {
        E(Eh);
        E(Fh);
        E(Gh);
      }
      function Kh(a) {
        Hh(Gh.current);
        var b = Hh(Eh.current);
        var c = lb(b, a.type);
        b !== c && (G(Fh, a), G(Eh, c));
      }
      function Lh(a) {
        Fh.current === a && (E(Eh), E(Fh));
      }
      var M = Uf(0);
      function Mh(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
              return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128))
              return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a)
            break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a)
              return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Nh = [];
      function Oh() {
        for (var a = 0; a < Nh.length; a++)
          Nh[a]._workInProgressVersionPrimary = null;
        Nh.length = 0;
      }
      var Ph = ua.ReactCurrentDispatcher;
      var Qh = ua.ReactCurrentBatchConfig;
      var Rh = 0;
      var N = null;
      var O = null;
      var P = null;
      var Sh = false;
      var Th = false;
      var Uh = 0;
      var Vh = 0;
      function Q() {
        throw Error(p(321));
      }
      function Wh(a, b) {
        if (null === b)
          return false;
        for (var c = 0; c < b.length && c < a.length; c++)
          if (!He(a[c], b[c]))
            return false;
        return true;
      }
      function Xh(a, b, c, d, e, f) {
        Rh = f;
        N = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
        a = c(d, e);
        if (Th) {
          f = 0;
          do {
            Th = false;
            Uh = 0;
            if (25 <= f)
              throw Error(p(301));
            f += 1;
            P = O = null;
            b.updateQueue = null;
            Ph.current = $h;
            a = c(d, e);
          } while (Th);
        }
        Ph.current = ai;
        b = null !== O && null !== O.next;
        Rh = 0;
        P = O = N = null;
        Sh = false;
        if (b)
          throw Error(p(300));
        return a;
      }
      function bi() {
        var a = 0 !== Uh;
        Uh = 0;
        return a;
      }
      function ci() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === P ? N.memoizedState = P = a : P = P.next = a;
        return P;
      }
      function di() {
        if (null === O) {
          var a = N.alternate;
          a = null !== a ? a.memoizedState : null;
        } else
          a = O.next;
        var b = null === P ? N.memoizedState : P.next;
        if (null !== b)
          P = b, O = a;
        else {
          if (null === a)
            throw Error(p(310));
          O = a;
          a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
          null === P ? N.memoizedState = P = a : P = P.next = a;
        }
        return P;
      }
      function ei(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function fi(a) {
        var b = di(), c = b.queue;
        if (null === c)
          throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = O, e = d.baseQueue, f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null, k = null, l = f;
          do {
            var m = l.lane;
            if ((Rh & m) === m)
              null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var q = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = q, g = d) : k = k.next = q;
              N.lanes |= m;
              hh |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          He(d, b.memoizedState) || (Ug = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e = a;
          do
            f = e.lane, N.lanes |= f, hh |= f, e = e.next;
          while (e !== a);
        } else
          null === e && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function gi(a) {
        var b = di(), c = b.queue;
        if (null === c)
          throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          He(f, b.memoizedState) || (Ug = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function hi() {
      }
      function ii(a, b) {
        var c = N, d = di(), e = b(), f = !He(d.memoizedState, e);
        f && (d.memoizedState = e, Ug = true);
        d = d.queue;
        ji(ki.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
          c.flags |= 2048;
          li(9, mi.bind(null, c, d, e, b), void 0, null);
          if (null === R)
            throw Error(p(349));
          0 !== (Rh & 30) || ni(c, b, e);
        }
        return e;
      }
      function ni(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = N.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function mi(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        oi(b) && pi(a);
      }
      function ki(a, b, c) {
        return c(function() {
          oi(b) && pi(a);
        });
      }
      function oi(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He(a, c);
        } catch (d) {
          return true;
        }
      }
      function pi(a) {
        var b = Zg(a, 1);
        null !== b && mh(b, a, 1, -1);
      }
      function qi(a) {
        var b = ci();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ri.bind(null, N, a);
        return [b.memoizedState, a];
      }
      function li(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = N.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function si() {
        return di().memoizedState;
      }
      function ti(a, b, c, d) {
        var e = ci();
        N.flags |= a;
        e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function ui(a, b, c, d) {
        var e = di();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== O) {
          var g = O.memoizedState;
          f = g.destroy;
          if (null !== d && Wh(d, g.deps)) {
            e.memoizedState = li(b, c, f, d);
            return;
          }
        }
        N.flags |= a;
        e.memoizedState = li(1 | b, c, f, d);
      }
      function vi(a, b) {
        return ti(8390656, 8, a, b);
      }
      function ji(a, b) {
        return ui(2048, 8, a, b);
      }
      function wi(a, b) {
        return ui(4, 2, a, b);
      }
      function xi(a, b) {
        return ui(4, 4, a, b);
      }
      function yi(a, b) {
        if ("function" === typeof b)
          return a = a(), b(a), function() {
            b(null);
          };
        if (null !== b && void 0 !== b)
          return a = a(), b.current = a, function() {
            b.current = null;
          };
      }
      function zi(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ui(4, 4, yi.bind(null, b, a), c);
      }
      function Ai() {
      }
      function Bi(a, b) {
        var c = di();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Wh(b, d[1]))
          return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function Ci(a, b) {
        var c = di();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Wh(b, d[1]))
          return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function Di(a, b, c) {
        if (0 === (Rh & 21))
          return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
        He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
        return b;
      }
      function Ei(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Qh.transition;
        Qh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Qh.transition = d;
        }
      }
      function Fi() {
        return di().memoizedState;
      }
      function Gi(a, b, c) {
        var d = lh(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a))
          Ii(b, c);
        else if (c = Yg(a, b, c, d), null !== c) {
          var e = L();
          mh(c, a, d, e);
          Ji(c, b, d);
        }
      }
      function ri(a, b, c) {
        var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a))
          Ii(b, e);
        else {
          var f = a.alternate;
          if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f))
            try {
              var g = b.lastRenderedState, h = f(g, c);
              e.hasEagerState = true;
              e.eagerState = h;
              if (He(h, g)) {
                var k = b.interleaved;
                null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
                b.interleaved = e;
                return;
              }
            } catch (l) {
            } finally {
            }
          c = Yg(a, b, e, d);
          null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
        }
      }
      function Hi(a) {
        var b = a.alternate;
        return a === N || null !== b && b === N;
      }
      function Ii(a, b) {
        Th = Sh = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Ji(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false };
      var Yh = { readContext: Vg, useCallback: function(a, b) {
        ci().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ti(
          4194308,
          4,
          yi.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ti(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ti(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = ci();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = ci();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = Gi.bind(null, N, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = ci();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
        return ci().memoizedState = a;
      }, useTransition: function() {
        var a = qi(false), b = a[0];
        a = Ei.bind(null, a[1]);
        ci().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = N, e = ci();
        if (I) {
          if (void 0 === c)
            throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === R)
            throw Error(p(349));
          0 !== (Rh & 30) || ni(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        vi(ki.bind(
          null,
          d,
          f,
          a
        ), [a]);
        d.flags |= 2048;
        li(9, mi.bind(null, d, f, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = ci(), b = R.identifierPrefix;
        if (I) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Uh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else
          c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Zh = {
        readContext: Vg,
        useCallback: Bi,
        useContext: Vg,
        useEffect: ji,
        useImperativeHandle: zi,
        useInsertionEffect: wi,
        useLayoutEffect: xi,
        useMemo: Ci,
        useReducer: fi,
        useRef: si,
        useState: function() {
          return fi(ei);
        },
        useDebugValue: Ai,
        useDeferredValue: function(a) {
          var b = di();
          return Di(b, O.memoizedState, a);
        },
        useTransition: function() {
          var a = fi(ei)[0], b = di().memoizedState;
          return [a, b];
        },
        useMutableSource: hi,
        useSyncExternalStore: ii,
        useId: Fi,
        unstable_isNewReconciler: false
      };
      var $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
        return gi(ei);
      }, useDebugValue: Ai, useDeferredValue: function(a) {
        var b = di();
        return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
      }, useTransition: function() {
        var a = gi(ei)[0], b = di().memoizedState;
        return [a, b];
      }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
      function Ki(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e, digest: null };
      }
      function Li(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Mi(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Ni = "function" === typeof WeakMap ? WeakMap : Map;
      function Oi(a, b, c) {
        c = ch(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Pi || (Pi = true, Qi = d);
          Mi(a, b);
        };
        return c;
      }
      function Ri(a, b, c) {
        c = ch(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function() {
            return d(e);
          };
          c.callback = function() {
            Mi(a, b);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
          Mi(a, b);
          "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Ti(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Ni();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else
          e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
      }
      function Vi(a) {
        do {
          var b;
          if (b = 13 === a.tag)
            b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b)
            return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Wi(a, b, c, d, e) {
        if (0 === (a.mode & 1))
          return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Xi = ua.ReactCurrentOwner;
      var Ug = false;
      function Yi(a, b, c, d) {
        b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
      }
      function Zi(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        Tg(b, e);
        d = Xh(a, b, c, d, f, e);
        c = bi();
        if (null !== a && !Ug)
          return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
        I && c && vg(b);
        b.flags |= 1;
        Yi(a, b, d, e);
        return b.child;
      }
      function aj(a, b, c, d, e) {
        if (null === a) {
          var f = c.type;
          if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps)
            return b.tag = 15, b.type = f, cj(a, b, f, d, e);
          a = yh(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if (0 === (a.lanes & e)) {
          var g = f.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie;
          if (c(g, d) && a.ref === b.ref)
            return $i(a, b, e);
        }
        b.flags |= 1;
        a = wh(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function cj(a, b, c, d, e) {
        if (null !== a) {
          var f = a.memoizedProps;
          if (Ie(f, d) && a.ref === b.ref)
            if (Ug = false, b.pendingProps = d = f, 0 !== (a.lanes & e))
              0 !== (a.flags & 131072) && (Ug = true);
            else
              return b.lanes = a.lanes, $i(a, b, e);
        }
        return dj(a, b, c, d, e);
      }
      function ej(a, b, c) {
        var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode)
          if (0 === (b.mode & 1))
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
          else {
            if (0 === (c & 1073741824))
              return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
            d = null !== f ? f.baseLanes : c;
            G(fj, gj);
            gj |= d;
          }
        else
          null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
        Yi(a, b, e, c);
        return b.child;
      }
      function hj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c)
          b.flags |= 512, b.flags |= 2097152;
      }
      function dj(a, b, c, d, e) {
        var f = Zf(c) ? Xf : H.current;
        f = Yf(b, f);
        Tg(b, e);
        c = Xh(a, b, c, d, f, e);
        d = bi();
        if (null !== a && !Ug)
          return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
        I && d && vg(b);
        b.flags |= 1;
        Yi(a, b, c, e);
        return b.child;
      }
      function ij(a, b, c, d, e) {
        if (Zf(c)) {
          var f = true;
          cg(b);
        } else
          f = false;
        Tg(b, e);
        if (null === b.stateNode)
          jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
          var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
          $g = false;
          var r = b.memoizedState;
          g.state = r;
          gh(b, d, g, e);
          k = b.memoizedState;
          h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          bh(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : Lg(b.type, h);
          g.props = l;
          q = b.pendingProps;
          r = g.context;
          k = c.contextType;
          "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
          $g = false;
          r = b.memoizedState;
          g.state = r;
          gh(b, d, g, e);
          var n = b.memoizedState;
          h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return kj(a, b, c, d, f, e);
      }
      function kj(a, b, c, d, e, f) {
        hj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g)
          return e && dg(b, c, false), $i(a, b, f);
        d = b.stateNode;
        Xi.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
        b.memoizedState = d.state;
        e && dg(b, c, true);
        return b.child;
      }
      function lj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        Ih(a, b.containerInfo);
      }
      function mj(a, b, c, d, e) {
        Ig();
        Jg(e);
        b.flags |= 256;
        Yi(a, b, c, d);
        return b.child;
      }
      var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function oj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function pj(a, b, c) {
        var d = b.pendingProps, e = M.current, f = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h)
          f = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState)
          e |= 1;
        G(M, e & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a))
            return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
        }
        e = a.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h))
          return sj(a, b, g, d, h, e, c);
        if (f) {
          f = d.fallback;
          g = b.mode;
          e = a.child;
          h = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
          f.return = b;
          d.return = b;
          d.sibling = f;
          b.child = d;
          d = f;
          f = b.child;
          g = a.child.memoizedState;
          g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f.memoizedState = g;
          f.childLanes = a.childLanes & ~c;
          b.memoizedState = nj;
          return d;
        }
        f = a.child;
        a = f.sibling;
        d = wh(f, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function rj(a, b) {
        b = qj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function tj(a, b, c, d) {
        null !== d && Jg(d);
        Bh(b, a.child, null, c);
        a = rj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function sj(a, b, c, d, e, f, g) {
        if (c) {
          if (b.flags & 256)
            return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
          if (null !== b.memoizedState)
            return b.child = a.child, b.flags |= 128, null;
          f = d.fallback;
          e = b.mode;
          d = qj({ mode: "visible", children: d.children }, e, 0, null);
          f = Ah(f, e, g, null);
          f.flags |= 2;
          d.return = b;
          f.return = b;
          d.sibling = f;
          b.child = d;
          0 !== (b.mode & 1) && Bh(b, a.child, null, g);
          b.child.memoizedState = oj(g);
          b.memoizedState = nj;
          return f;
        }
        if (0 === (b.mode & 1))
          return tj(a, b, g, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d)
            var h = d.dgst;
          d = h;
          f = Error(p(419));
          d = Li(f, d, void 0);
          return tj(a, b, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (Ug || h) {
          d = R;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
          }
          uj();
          d = Li(Error(p(421)));
          return tj(a, b, g, d);
        }
        if ("$?" === e.data)
          return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
        a = f.treeContext;
        yg = Lf(e.nextSibling);
        xg = b;
        I = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = rj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function wj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        Sg(a.return, b, c);
      }
      function xj(a, b, c, d, e) {
        var f = a.memoizedState;
        null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function yj(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        Yi(a, b, d.children, c);
        d = M.current;
        if (0 !== (d & 2))
          d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128))
            a:
              for (a = b.child; null !== a; ) {
                if (13 === a.tag)
                  null !== a.memoizedState && wj(a, c, b);
                else if (19 === a.tag)
                  wj(a, c, b);
                else if (null !== a.child) {
                  a.child.return = a;
                  a = a.child;
                  continue;
                }
                if (a === b)
                  break a;
                for (; null === a.sibling; ) {
                  if (null === a.return || a.return === b)
                    break a;
                  a = a.return;
                }
                a.sibling.return = a.return;
                a = a.sibling;
              }
          d &= 1;
        }
        G(M, d);
        if (0 === (b.mode & 1))
          b.memoizedState = null;
        else
          switch (e) {
            case "forwards":
              c = b.child;
              for (e = null; null !== c; )
                a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
              c = e;
              null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
              xj(b, false, e, c, f);
              break;
            case "backwards":
              c = null;
              e = b.child;
              for (b.child = null; null !== e; ) {
                a = e.alternate;
                if (null !== a && null === Mh(a)) {
                  b.child = e;
                  break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
              }
              xj(b, true, c, null, f);
              break;
            case "together":
              xj(b, false, null, null, void 0);
              break;
            default:
              b.memoizedState = null;
          }
        return b.child;
      }
      function jj(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function $i(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        hh |= b.lanes;
        if (0 === (c & b.childLanes))
          return null;
        if (null !== a && b.child !== a.child)
          throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = wh(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; )
            a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function zj(a, b, c) {
        switch (b.tag) {
          case 3:
            lj(b);
            Ig();
            break;
          case 5:
            Kh(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            Ih(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(Mg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated)
                return G(M, M.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes))
                return pj(a, b, c);
              G(M, M.current & 1);
              a = $i(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G(M, M.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d)
                return yj(a, b, c);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(M, M.current);
            if (d)
              break;
            else
              return null;
          case 22:
          case 23:
            return b.lanes = 0, ej(a, b, c);
        }
        return $i(a, b, c);
      }
      var Aj;
      var Bj;
      var Cj;
      var Dj;
      Aj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag)
            a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b)
            break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b)
              return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Bj = function() {
      };
      Cj = function(a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          Hh(Eh.current);
          var f = null;
          switch (c) {
            case "input":
              e = Ya(a, e);
              d = Ya(a, d);
              f = [];
              break;
            case "select":
              e = A({}, e, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = gb(a, e);
              d = gb(a, d);
              f = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l in e)
            if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l])
              if ("style" === l) {
                var h = e[l];
                for (g in h)
                  h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
              } else
                "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h))
              if ("style" === l)
                if (h) {
                  for (g in h)
                    !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                  for (g in k)
                    k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                } else
                  c || (f || (f = []), f.push(
                    l,
                    c
                  )), c = k;
              else
                "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l)
            b.flags |= 4;
        }
      };
      Dj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Ej(a, b) {
        if (!I)
          switch (a.tailMode) {
            case "hidden":
              b = a.tail;
              for (var c = null; null !== b; )
                null !== b.alternate && (c = b), b = b.sibling;
              null === c ? a.tail = null : c.sibling = null;
              break;
            case "collapsed":
              c = a.tail;
              for (var d = null; null !== c; )
                null !== c.alternate && (d = c), c = c.sibling;
              null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
          }
      }
      function S(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b)
          for (var e = a.child; null !== e; )
            c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else
          for (e = a.child; null !== e; )
            c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Fj(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            Jh();
            E(Wf);
            E(H);
            Oh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child)
              Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
            Bj(a, b);
            S(b);
            return null;
          case 5:
            Lh(b);
            var e = Hh(Gh.current);
            c = b.type;
            if (null !== a && null != b.stateNode)
              Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode)
                  throw Error(p(166));
                S(b);
                return null;
              }
              a = Hh(Eh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++)
                      D(lf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za(d, f);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f), D("invalid", d);
                }
                ub(c, f);
                e = null;
                for (var g in f)
                  if (f.hasOwnProperty(g)) {
                    var h = f[g];
                    "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                      d.textContent,
                      h,
                      a
                    ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                  }
                switch (c) {
                  case "input":
                    Va(d);
                    db(d, f, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = Bf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                Aj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++)
                        D(lf[e], a);
                      e = d;
                      break;
                    case "source":
                      D("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Za(a, d);
                      e = Ya(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e = A({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  ub(c, e);
                  h = e;
                  for (f in h)
                    if (h.hasOwnProperty(f)) {
                      var k = h[f];
                      "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                    }
                  switch (c) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f = d.value;
                      null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a && null != b.stateNode)
              Dj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode)
                throw Error(p(166));
              c = Hh(Gh.current);
              Hh(Eh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f = d.nodeValue !== c) {
                  if (a = xg, null !== a)
                    switch (a.tag) {
                      case 3:
                        Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        break;
                      case 5:
                        true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    }
                }
                f && (b.flags |= 4);
              } else
                d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E(M);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
                Hg(), Ig(), b.flags |= 98560, f = false;
              else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f)
                    throw Error(p(318));
                  f = b.memoizedState;
                  f = null !== f ? f.dehydrated : null;
                  if (!f)
                    throw Error(p(317));
                  f[Of] = b;
                } else
                  Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f = false;
              } else
                null !== zg && (Gj(zg), zg = null), f = true;
              if (!f)
                return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128))
              return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return Rg(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E(M);
            f = b.memoizedState;
            if (null === f)
              return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g)
              if (d)
                Ej(f, false);
              else {
                if (0 !== T || null !== a && 0 !== (a.flags & 128))
                  for (a = b.child; null !== a; ) {
                    g = Mh(a);
                    if (null !== g) {
                      b.flags |= 128;
                      Ej(f, false);
                      d = g.updateQueue;
                      null !== d && (b.updateQueue = d, b.flags |= 4);
                      b.subtreeFlags = 0;
                      d = c;
                      for (c = b.child; null !== c; )
                        f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                      G(M, M.current & 1 | 2);
                      return b.child;
                    }
                    a = a.sibling;
                  }
                null !== f.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f, false), b.lanes = 4194304);
              }
            else {
              if (!d)
                if (a = Mh(g), null !== a) {
                  if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I)
                    return S(b), null;
                } else
                  2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f, false), b.lanes = 4194304);
              f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail)
              return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Jj(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Lh(b), null;
          case 13:
            E(M);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate)
                throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E(M), null;
          case 4:
            return Jh(), null;
          case 10:
            return Rg(b.type._context), null;
          case 22:
          case 23:
            return Ij(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Kj = false;
      var U = false;
      var Lj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Mj(a, b) {
        var c = a.ref;
        if (null !== c)
          if ("function" === typeof c)
            try {
              c(null);
            } catch (d) {
              W(a, b, d);
            }
          else
            c.current = null;
      }
      function Nj(a, b, c) {
        try {
          c();
        } catch (d) {
          W(a, b, d);
        }
      }
      var Oj = false;
      function Pj(a, b) {
        Cf = dd;
        a = Me();
        if (Ne(a)) {
          if ("selectionStart" in a)
            var c = { start: a.selectionStart, end: a.selectionEnd };
          else
            a: {
              c = (c = a.ownerDocument) && c.defaultView || window;
              var d = c.getSelection && c.getSelection();
              if (d && 0 !== d.rangeCount) {
                c = d.anchorNode;
                var e = d.anchorOffset, f = d.focusNode;
                d = d.focusOffset;
                try {
                  c.nodeType, f.nodeType;
                } catch (F) {
                  c = null;
                  break a;
                }
                var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                b:
                  for (; ; ) {
                    for (var y; ; ) {
                      q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                      q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                      3 === q.nodeType && (g += q.nodeValue.length);
                      if (null === (y = q.firstChild))
                        break;
                      r = q;
                      q = y;
                    }
                    for (; ; ) {
                      if (q === a)
                        break b;
                      r === c && ++l === e && (h = g);
                      r === f && ++m === d && (k = g);
                      if (null !== (y = q.nextSibling))
                        break;
                      q = r;
                      r = q.parentNode;
                    }
                    q = y;
                  }
                c = -1 === h || -1 === k ? null : { start: h, end: k };
              } else
                c = null;
            }
          c = c || { start: 0, end: 0 };
        } else
          c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b; null !== V; )
          if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
            a.return = b, V = a;
          else
            for (; null !== V; ) {
              b = V;
              try {
                var n = b.alternate;
                if (0 !== (b.flags & 1024))
                  switch (b.tag) {
                    case 0:
                    case 11:
                    case 15:
                      break;
                    case 1:
                      if (null !== n) {
                        var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
                        x.__reactInternalSnapshotBeforeUpdate = w;
                      }
                      break;
                    case 3:
                      var u2 = b.stateNode.containerInfo;
                      1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                      break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    default:
                      throw Error(p(163));
                  }
              } catch (F) {
                W(b, b.return, F);
              }
              a = b.sibling;
              if (null !== a) {
                a.return = b.return;
                V = a;
                break;
              }
              V = b.return;
            }
        n = Oj;
        Oj = false;
        return n;
      }
      function Qj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Nj(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Rj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Sj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Tj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Tj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Uj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Vj(a) {
        a:
          for (; ; ) {
            for (; null === a.sibling; ) {
              if (null === a.return || Uj(a.return))
                return null;
              a = a.return;
            }
            a.sibling.return = a.return;
            for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
              if (a.flags & 2)
                continue a;
              if (null === a.child || 4 === a.tag)
                continue a;
              else
                a.child.return = a, a = a.child;
            }
            if (!(a.flags & 2))
              return a.stateNode;
          }
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d)
          a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a))
          for (Wj(a, b, c), a = a.sibling; null !== a; )
            Wj(a, b, c), a = a.sibling;
      }
      function Xj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d)
          a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a))
          for (Xj(a, b, c), a = a.sibling; null !== a; )
            Xj(a, b, c), a = a.sibling;
      }
      var X = null;
      var Yj = false;
      function Zj(a, b, c) {
        for (c = c.child; null !== c; )
          ak(a, b, c), c = c.sibling;
      }
      function ak(a, b, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount)
          try {
            lc.onCommitFiberUnmount(kc, c);
          } catch (h) {
          }
        switch (c.tag) {
          case 5:
            U || Mj(c, b);
          case 6:
            var d = X, e = Yj;
            X = null;
            Zj(a, b, c);
            X = d;
            Yj = e;
            null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
          case 18:
            null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
            break;
          case 4:
            d = X;
            e = Yj;
            X = c.stateNode.containerInfo;
            Yj = true;
            Zj(a, b, c);
            X = d;
            Yj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
                e = e.next;
              } while (e !== d);
            }
            Zj(a, b, c);
            break;
          case 1:
            if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
              try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
              } catch (h) {
                W(c, b, h);
              }
            Zj(a, b, c);
            break;
          case 21:
            Zj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
            break;
          default:
            Zj(a, b, c);
        }
      }
      function bk(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Lj());
          b.forEach(function(b2) {
            var d = ck.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function dk(a, b) {
        var c = b.deletions;
        if (null !== c)
          for (var d = 0; d < c.length; d++) {
            var e = c[d];
            try {
              var f = a, g = b, h = g;
              a:
                for (; null !== h; ) {
                  switch (h.tag) {
                    case 5:
                      X = h.stateNode;
                      Yj = false;
                      break a;
                    case 3:
                      X = h.stateNode.containerInfo;
                      Yj = true;
                      break a;
                    case 4:
                      X = h.stateNode.containerInfo;
                      Yj = true;
                      break a;
                  }
                  h = h.return;
                }
              if (null === X)
                throw Error(p(160));
              ak(f, g, e);
              X = null;
              Yj = false;
              var k = e.alternate;
              null !== k && (k.return = null);
              e.return = null;
            } catch (l) {
              W(e, b, l);
            }
          }
        if (b.subtreeFlags & 12854)
          for (b = b.child; null !== b; )
            ek(b, a), b = b.sibling;
      }
      function ek(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            dk(b, a);
            fk(a);
            if (d & 4) {
              try {
                Qj(3, a, a.return), Rj(3, a);
              } catch (t) {
                W(a, a.return, t);
              }
              try {
                Qj(5, a, a.return);
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 1:
            dk(b, a);
            fk(a);
            d & 512 && null !== c && Mj(c, c.return);
            break;
          case 5:
            dk(b, a);
            fk(a);
            d & 512 && null !== c && Mj(c, c.return);
            if (a.flags & 32) {
              var e = a.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W(a, a.return, t);
              }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
              var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
              a.updateQueue = null;
              if (null !== k)
                try {
                  "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                  vb(h, g);
                  var l = vb(h, f);
                  for (g = 0; g < k.length; g += 2) {
                    var m = k[g], q = k[g + 1];
                    "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                  }
                  switch (h) {
                    case "input":
                      bb(e, f);
                      break;
                    case "textarea":
                      ib(e, f);
                      break;
                    case "select":
                      var r = e._wrapperState.wasMultiple;
                      e._wrapperState.wasMultiple = !!f.multiple;
                      var y = f.value;
                      null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                        e,
                        !!f.multiple,
                        f.defaultValue,
                        true
                      ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
                  }
                  e[Pf] = f;
                } catch (t) {
                  W(a, a.return, t);
                }
            }
            break;
          case 6:
            dk(b, a);
            fk(a);
            if (d & 4) {
              if (null === a.stateNode)
                throw Error(p(162));
              e = a.stateNode;
              f = a.memoizedProps;
              try {
                e.nodeValue = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 3:
            dk(b, a);
            fk(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated)
              try {
                bd(b.containerInfo);
              } catch (t) {
                W(a, a.return, t);
              }
            break;
          case 4:
            dk(b, a);
            fk(a);
            break;
          case 13:
            dk(b, a);
            fk(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
            d & 4 && bk(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
            fk(a);
            if (d & 8192) {
              l = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1))
                for (V = a, m = a.child; null !== m; ) {
                  for (q = V = m; null !== V; ) {
                    r = V;
                    y = r.child;
                    switch (r.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Qj(4, r, r.return);
                        break;
                      case 1:
                        Mj(r, r.return);
                        var n = r.stateNode;
                        if ("function" === typeof n.componentWillUnmount) {
                          d = r;
                          c = r.return;
                          try {
                            b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                          } catch (t) {
                            W(d, c, t);
                          }
                        }
                        break;
                      case 5:
                        Mj(r, r.return);
                        break;
                      case 22:
                        if (null !== r.memoizedState) {
                          hk(q);
                          continue;
                        }
                    }
                    null !== y ? (y.return = r, V = y) : hk(q);
                  }
                  m = m.sibling;
                }
              a:
                for (m = null, q = a; ; ) {
                  if (5 === q.tag) {
                    if (null === m) {
                      m = q;
                      try {
                        e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                      } catch (t) {
                        W(a, a.return, t);
                      }
                    }
                  } else if (6 === q.tag) {
                    if (null === m)
                      try {
                        q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                      } catch (t) {
                        W(a, a.return, t);
                      }
                  } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                    q.child.return = q;
                    q = q.child;
                    continue;
                  }
                  if (q === a)
                    break a;
                  for (; null === q.sibling; ) {
                    if (null === q.return || q.return === a)
                      break a;
                    m === q && (m = null);
                    q = q.return;
                  }
                  m === q && (m = null);
                  q.sibling.return = q.return;
                  q = q.sibling;
                }
            }
            break;
          case 19:
            dk(b, a);
            fk(a);
            d & 4 && bk(a);
            break;
          case 21:
            break;
          default:
            dk(
              b,
              a
            ), fk(a);
        }
      }
      function fk(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Uj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f = Vj(a);
                Xj(a, f, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Vj(a);
                Wj(a, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k) {
            W(a, a.return, k);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function ik(a, b, c) {
        V = a;
        jk(a, b, c);
      }
      function jk(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e = V, f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Kj;
            if (!g) {
              var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Kj;
              var l = U;
              Kj = g;
              if ((U = k) && !l)
                for (V = e; null !== V; )
                  g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V = k) : kk(e);
              for (; null !== f; )
                V = f, jk(f, b, c), f = f.sibling;
              V = e;
              Kj = h;
              U = l;
            }
            lk(a, b, c);
          } else
            0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a, b, c);
        }
      }
      function lk(a) {
        for (; null !== V; ) {
          var b = V;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772))
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    U || Rj(5, b);
                    break;
                  case 1:
                    var d = b.stateNode;
                    if (b.flags & 4 && !U)
                      if (null === c)
                        d.componentDidMount();
                      else {
                        var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                        d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                      }
                    var f = b.updateQueue;
                    null !== f && ih(b, f, d);
                    break;
                  case 3:
                    var g = b.updateQueue;
                    if (null !== g) {
                      c = null;
                      if (null !== b.child)
                        switch (b.child.tag) {
                          case 5:
                            c = b.child.stateNode;
                            break;
                          case 1:
                            c = b.child.stateNode;
                        }
                      ih(b, g, c);
                    }
                    break;
                  case 5:
                    var h = b.stateNode;
                    if (null === c && b.flags & 4) {
                      c = h;
                      var k = b.memoizedProps;
                      switch (b.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          k.autoFocus && c.focus();
                          break;
                        case "img":
                          k.src && (c.src = k.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (null === b.memoizedState) {
                      var l = b.alternate;
                      if (null !== l) {
                        var m = l.memoizedState;
                        if (null !== m) {
                          var q = m.dehydrated;
                          null !== q && bd(q);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  default:
                    throw Error(p(163));
                }
              U || b.flags & 512 && Sj(b);
            } catch (r) {
              W(b, b.return, r);
            }
          }
          if (b === a) {
            V = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function hk(a) {
        for (; null !== V; ) {
          var b = V;
          if (b === a) {
            V = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b = V;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Rj(4, b);
                } catch (k) {
                  W(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Sj(b);
                } catch (k) {
                  W(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Sj(b);
                } catch (k) {
                  W(b, g, k);
                }
            }
          } catch (k) {
            W(b, b.return, k);
          }
          if (b === a) {
            V = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V = h;
            break;
          }
          V = b.return;
        }
      }
      var mk = Math.ceil;
      var nk = ua.ReactCurrentDispatcher;
      var ok2 = ua.ReactCurrentOwner;
      var pk = ua.ReactCurrentBatchConfig;
      var K = 0;
      var R = null;
      var Y = null;
      var Z = 0;
      var gj = 0;
      var fj = Uf(0);
      var T = 0;
      var qk = null;
      var hh = 0;
      var rk = 0;
      var sk = 0;
      var tk = null;
      var uk = null;
      var gk = 0;
      var Hj = Infinity;
      var vk = null;
      var Pi = false;
      var Qi = null;
      var Si = null;
      var wk = false;
      var xk = null;
      var yk = 0;
      var zk = 0;
      var Ak = null;
      var Bk = -1;
      var Ck = 0;
      function L() {
        return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
      }
      function lh(a) {
        if (0 === (a.mode & 1))
          return 1;
        if (0 !== (K & 2) && 0 !== Z)
          return Z & -Z;
        if (null !== Kg.transition)
          return 0 === Ck && (Ck = yc()), Ck;
        a = C;
        if (0 !== a)
          return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function mh(a, b, c, d) {
        if (50 < zk)
          throw zk = 0, Ak = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K & 2) || a !== R)
          a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
      }
      function Ek(a, b) {
        var c = a.callbackNode;
        wc(a, b);
        var d = uc(a, a === R ? Z : 0);
        if (0 === d)
          null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc(c);
          if (1 === b)
            0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
              0 === (K & 6) && jg();
            }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Gk(c, Hk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Hk(a, b) {
        Bk = -1;
        Ck = 0;
        if (0 !== (K & 6))
          throw Error(p(327));
        var c = a.callbackNode;
        if (Ik() && a.callbackNode !== c)
          return null;
        var d = uc(a, a === R ? Z : 0);
        if (0 === d)
          return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
          b = Jk(a, d);
        else {
          b = d;
          var e = K;
          K |= 2;
          var f = Kk();
          if (R !== a || Z !== b)
            vk = null, Hj = B() + 500, Lk(a, b);
          do
            try {
              Mk();
              break;
            } catch (h) {
              Nk(a, h);
            }
          while (1);
          Qg();
          nk.current = f;
          K = e;
          null !== Y ? b = 0 : (R = null, Z = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
          if (1 === b)
            throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
          if (6 === b)
            Dk(a, d);
          else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b))
              throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Qk(a, uk, vk);
                break;
              case 3:
                Dk(a, d);
                if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
                  if (0 !== uc(a, 0))
                    break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    L();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
                  break;
                }
                Qk(a, uk, vk);
                break;
              case 4:
                Dk(a, d);
                if ((d & 4194240) === d)
                  break;
                b = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
                  break;
                }
                Qk(a, uk, vk);
                break;
              case 5:
                Qk(a, uk, vk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Ek(a, B());
        return a.callbackNode === c ? Hk.bind(null, a) : null;
      }
      function Ok(a, b) {
        var c = tk;
        a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
        a = Jk(a, b);
        2 !== a && (b = uk, uk = c, null !== b && Gj(b));
        return a;
      }
      function Gj(a) {
        null === uk ? uk = a : uk.push.apply(uk, a);
      }
      function Pk(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c))
              for (var d = 0; d < c.length; d++) {
                var e = c[d], f = e.getSnapshot;
                e = e.value;
                try {
                  if (!He(f(), e))
                    return false;
                } catch (g) {
                  return false;
                }
              }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c)
            c.return = b, b = c;
          else {
            if (b === a)
              break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a)
                return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Dk(a, b) {
        b &= ~sk;
        b &= ~rk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Fk(a) {
        if (0 !== (K & 6))
          throw Error(p(327));
        Ik();
        var b = uc(a, 0);
        if (0 === (b & 1))
          return Ek(a, B()), null;
        var c = Jk(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b = d, c = Ok(a, d));
        }
        if (1 === c)
          throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
        if (6 === c)
          throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Qk(a, uk, vk);
        Ek(a, B());
        return null;
      }
      function Rk(a, b) {
        var c = K;
        K |= 1;
        try {
          return a(b);
        } finally {
          K = c, 0 === K && (Hj = B() + 500, fg && jg());
        }
      }
      function Sk(a) {
        null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
        var b = K;
        K |= 1;
        var c = pk.transition, d = C;
        try {
          if (pk.transition = null, C = 1, a)
            return a();
        } finally {
          C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
        }
      }
      function Ij() {
        gj = fj.current;
        E(fj);
      }
      function Lk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y)
          for (c = Y.return; null !== c; ) {
            var d = c;
            wg(d);
            switch (d.tag) {
              case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $f();
                break;
              case 3:
                Jh();
                E(Wf);
                E(H);
                Oh();
                break;
              case 5:
                Lh(d);
                break;
              case 4:
                Jh();
                break;
              case 13:
                E(M);
                break;
              case 19:
                E(M);
                break;
              case 10:
                Rg(d.type._context);
                break;
              case 22:
              case 23:
                Ij();
            }
            c = c.return;
          }
        R = a;
        Y = a = wh(a.current, null);
        Z = gj = b;
        T = 0;
        qk = null;
        sk = rk = hh = 0;
        uk = tk = null;
        if (null !== Wg) {
          for (b = 0; b < Wg.length; b++)
            if (c = Wg[b], d = c.interleaved, null !== d) {
              c.interleaved = null;
              var e = d.next, f = c.pending;
              if (null !== f) {
                var g = f.next;
                f.next = e;
                d.next = g;
              }
              c.pending = d;
            }
          Wg = null;
        }
        return a;
      }
      function Nk(a, b) {
        do {
          var c = Y;
          try {
            Qg();
            Ph.current = ai;
            if (Sh) {
              for (var d = N.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Sh = false;
            }
            Rh = 0;
            P = O = N = null;
            Th = false;
            Uh = 0;
            ok2.current = null;
            if (null === c || null === c.return) {
              T = 1;
              qk = b;
              Y = null;
              break;
            }
            a: {
              var f = a, g = c.return, h = c, k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m = h, q = m.tag;
                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Vi(g);
                if (null !== y) {
                  y.flags &= -257;
                  Wi(y, g, h, f, b);
                  y.mode & 1 && Ti(f, l, b);
                  b = y;
                  k = l;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k);
                    b.updateQueue = t;
                  } else
                    n.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Ti(f, l, b);
                    uj();
                    break a;
                  }
                  k = Error(p(426));
                }
              } else if (I && h.mode & 1) {
                var J = Vi(g);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Wi(J, g, h, f, b);
                  Jg(Ki(k, h));
                  break a;
                }
              }
              f = k = Ki(k, h);
              4 !== T && (T = 2);
              null === tk ? tk = [f] : tk.push(f);
              f = g;
              do {
                switch (f.tag) {
                  case 3:
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var x = Oi(f, k, b);
                    fh(f, x);
                    break a;
                  case 1:
                    h = k;
                    var w = f.type, u2 = f.stateNode;
                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                      f.flags |= 65536;
                      b &= -b;
                      f.lanes |= b;
                      var F = Ri(f, h, b);
                      fh(f, F);
                      break a;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Tk(c);
          } catch (na) {
            b = na;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Kk() {
        var a = nk.current;
        nk.current = ai;
        return null === a ? ai : a;
      }
      function uj() {
        if (0 === T || 3 === T || 2 === T)
          T = 4;
        null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
      }
      function Jk(a, b) {
        var c = K;
        K |= 2;
        var d = Kk();
        if (R !== a || Z !== b)
          vk = null, Lk(a, b);
        do
          try {
            Uk();
            break;
          } catch (e) {
            Nk(a, e);
          }
        while (1);
        Qg();
        K = c;
        nk.current = d;
        if (null !== Y)
          throw Error(p(261));
        R = null;
        Z = 0;
        return T;
      }
      function Uk() {
        for (; null !== Y; )
          Vk(Y);
      }
      function Mk() {
        for (; null !== Y && !cc(); )
          Vk(Y);
      }
      function Vk(a) {
        var b = Wk(a.alternate, a, gj);
        a.memoizedProps = a.pendingProps;
        null === b ? Tk(a) : Y = b;
        ok2.current = null;
      }
      function Tk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Fj(c, b, gj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Jj(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a)
              a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Qk(a, b, c) {
        var d = C, e = pk.transition;
        try {
          pk.transition = null, C = 1, Xk(a, b, c, d);
        } finally {
          pk.transition = e, C = d;
        }
        return null;
      }
      function Xk(a, b, c, d) {
        do
          Ik();
        while (null !== xk);
        if (0 !== (K & 6))
          throw Error(p(327));
        c = a.finishedWork;
        var e = a.finishedLanes;
        if (null === c)
          return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current)
          throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = c.lanes | c.childLanes;
        Bc(a, f);
        a === R && (Y = R = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
          Ik();
          return null;
        }));
        f = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f) {
          f = pk.transition;
          pk.transition = null;
          var g = C;
          C = 1;
          var h = K;
          K |= 4;
          ok2.current = null;
          Pj(a, c);
          ek(c, a);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          ik(c, a, e);
          dc();
          K = h;
          C = g;
          pk.transition = f;
        } else
          a.current = c;
        wk && (wk = false, xk = a, yk = e);
        f = a.pendingLanes;
        0 === f && (Si = null);
        mc(c.stateNode, d);
        Ek(a, B());
        if (null !== b)
          for (d = a.onRecoverableError, c = 0; c < b.length; c++)
            e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Pi)
          throw Pi = false, a = Qi, Qi = null, a;
        0 !== (yk & 1) && 0 !== a.tag && Ik();
        f = a.pendingLanes;
        0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
        jg();
        return null;
      }
      function Ik() {
        if (null !== xk) {
          var a = Dc(yk), b = pk.transition, c = C;
          try {
            pk.transition = null;
            C = 16 > a ? 16 : a;
            if (null === xk)
              var d = false;
            else {
              a = xk;
              xk = null;
              yk = 0;
              if (0 !== (K & 6))
                throw Error(p(331));
              var e = K;
              K |= 4;
              for (V = a.current; null !== V; ) {
                var f = V, g = f.child;
                if (0 !== (V.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (V = l; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(8, m, f);
                        }
                        var q = m.child;
                        if (null !== q)
                          q.return = m, V = q;
                        else
                          for (; null !== V; ) {
                            m = V;
                            var r = m.sibling, y = m.return;
                            Tj(m);
                            if (m === l) {
                              V = null;
                              break;
                            }
                            if (null !== r) {
                              r.return = y;
                              V = r;
                              break;
                            }
                            V = y;
                          }
                      }
                    }
                    var n = f.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J = t.sibling;
                          t.sibling = null;
                          t = J;
                        } while (null !== t);
                      }
                    }
                    V = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g)
                  g.return = f, V = g;
                else
                  b:
                    for (; null !== V; ) {
                      f = V;
                      if (0 !== (f.flags & 2048))
                        switch (f.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(9, f, f.return);
                        }
                      var x = f.sibling;
                      if (null !== x) {
                        x.return = f.return;
                        V = x;
                        break b;
                      }
                      V = f.return;
                    }
              }
              var w = a.current;
              for (V = w; null !== V; ) {
                g = V;
                var u2 = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u2)
                  u2.return = g, V = u2;
                else
                  b:
                    for (g = w; null !== V; ) {
                      h = V;
                      if (0 !== (h.flags & 2048))
                        try {
                          switch (h.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Rj(9, h);
                          }
                        } catch (na) {
                          W(h, h.return, na);
                        }
                      if (h === g) {
                        V = null;
                        break b;
                      }
                      var F = h.sibling;
                      if (null !== F) {
                        F.return = h.return;
                        V = F;
                        break b;
                      }
                      V = h.return;
                    }
              }
              K = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot)
                try {
                  lc.onPostCommitFiberRoot(kc, a);
                } catch (na) {
                }
              d = true;
            }
            return d;
          } finally {
            C = c, pk.transition = b;
          }
        }
        return false;
      }
      function Yk(a, b, c) {
        b = Ki(c, b);
        b = Oi(a, b, 1);
        a = dh(a, b, 1);
        b = L();
        null !== a && (Ac(a, 1, b), Ek(a, b));
      }
      function W(a, b, c) {
        if (3 === a.tag)
          Yk(a, a, c);
        else
          for (; null !== b; ) {
            if (3 === b.tag) {
              Yk(b, a, c);
              break;
            } else if (1 === b.tag) {
              var d = b.stateNode;
              if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
                a = Ki(c, a);
                a = Ri(b, a, 1);
                b = dh(b, a, 1);
                a = L();
                null !== b && (Ac(b, 1, a), Ek(b, a));
                break;
              }
            }
            b = b.return;
          }
      }
      function Ui(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = L();
        a.pingedLanes |= a.suspendedLanes & c;
        R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
        Ek(a, b);
      }
      function Zk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = L();
        a = Zg(a, b);
        null !== a && (Ac(a, b, c), Ek(a, c));
      }
      function vj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Zk(a, c);
      }
      function ck(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Zk(a, c);
      }
      var Wk;
      Wk = function(a, b, c) {
        if (null !== a)
          if (a.memoizedProps !== b.pendingProps || Wf.current)
            Ug = true;
          else {
            if (0 === (a.lanes & c) && 0 === (b.flags & 128))
              return Ug = false, zj(a, b, c);
            Ug = 0 !== (a.flags & 131072) ? true : false;
          }
        else
          Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            jj(a, b);
            a = b.pendingProps;
            var e = Yf(b, H.current);
            Tg(b, c);
            e = Xh(null, b, d, a, e, c);
            var f = bi();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Yi(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              jj(a, b);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = $k(d);
              a = Lg(d, a);
              switch (e) {
                case 0:
                  b = dj(null, b, d, a, c);
                  break a;
                case 1:
                  b = ij(null, b, d, a, c);
                  break a;
                case 11:
                  b = Zi(null, b, d, a, c);
                  break a;
                case 14:
                  b = aj(null, b, d, Lg(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
          case 3:
            a: {
              lj(b);
              if (null === a)
                throw Error(p(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              bh(a, b);
              gh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f.isDehydrated)
                if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                  e = Ki(Error(p(423)), b);
                  b = mj(a, b, d, c, e);
                  break a;
                } else if (d !== e) {
                  e = Ki(Error(p(424)), b);
                  b = mj(a, b, d, c, e);
                  break a;
                } else
                  for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
                    c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e) {
                  b = $i(a, b, c);
                  break a;
                }
                Yi(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return pj(a, b, c);
          case 4:
            return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
          case 7:
            return Yi(a, b, b.pendingProps, c), b.child;
          case 8:
            return Yi(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Yi(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              G(Mg, d._currentValue);
              d._currentValue = g;
              if (null !== f)
                if (He(f.value, g)) {
                  if (f.children === e.children && !Wf.current) {
                    b = $i(a, b, c);
                    break a;
                  }
                } else
                  for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                    var h = f.dependencies;
                    if (null !== h) {
                      g = f.child;
                      for (var k = h.firstContext; null !== k; ) {
                        if (k.context === d) {
                          if (1 === f.tag) {
                            k = ch(-1, c & -c);
                            k.tag = 2;
                            var l = f.updateQueue;
                            if (null !== l) {
                              l = l.shared;
                              var m = l.pending;
                              null === m ? k.next = k : (k.next = m.next, m.next = k);
                              l.pending = k;
                            }
                          }
                          f.lanes |= c;
                          k = f.alternate;
                          null !== k && (k.lanes |= c);
                          Sg(
                            f.return,
                            c,
                            b
                          );
                          h.lanes |= c;
                          break;
                        }
                        k = k.next;
                      }
                    } else if (10 === f.tag)
                      g = f.type === b.type ? null : f.child;
                    else if (18 === f.tag) {
                      g = f.return;
                      if (null === g)
                        throw Error(p(341));
                      g.lanes |= c;
                      h = g.alternate;
                      null !== h && (h.lanes |= c);
                      Sg(g, c, b);
                      g = f.sibling;
                    } else
                      g = f.child;
                    if (null !== g)
                      g.return = f;
                    else
                      for (g = f; null !== g; ) {
                        if (g === b) {
                          g = null;
                          break;
                        }
                        f = g.sibling;
                        if (null !== f) {
                          f.return = g.return;
                          g = f;
                          break;
                        }
                        g = g.return;
                      }
                    f = g;
                  }
              Yi(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
          case 15:
            return cj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
          case 19:
            return yj(a, b, c);
          case 22:
            return ej(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Gk(a, b) {
        return ac(a, b);
      }
      function al(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new al(a, b, c, d);
      }
      function bj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function $k(a) {
        if ("function" === typeof a)
          return bj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da)
            return 11;
          if (a === Ga)
            return 14;
        }
        return 2;
      }
      function wh(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function yh(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a)
          bj(a) && (g = 1);
        else if ("string" === typeof a)
          g = 5;
        else
          a:
            switch (a) {
              case ya:
                return Ah(c.children, e, f, b);
              case za:
                g = 8;
                e |= 8;
                break;
              case Aa:
                return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
              case Ea:
                return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
              case Fa:
                return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
              case Ia:
                return qj(c, e, f, b);
              default:
                if ("object" === typeof a && null !== a)
                  switch (a.$$typeof) {
                    case Ba:
                      g = 10;
                      break a;
                    case Ca:
                      g = 9;
                      break a;
                    case Da:
                      g = 11;
                      break a;
                    case Ga:
                      g = 14;
                      break a;
                    case Ha:
                      g = 16;
                      d = null;
                      break a;
                  }
                throw Error(p(130, null == a ? a : typeof a, ""));
            }
        b = Bg(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function Ah(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function qj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function xh(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function zh(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function bl(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function cl(a, b, c, d, e, f, g, h, k) {
        a = new bl(a, b, c, h, k);
        1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
        f = Bg(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        ah(f);
        return a;
      }
      function dl(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function el(a) {
        if (!a)
          return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag)
            throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c))
            return bg(a, c, b);
        }
        return b;
      }
      function fl(a, b, c, d, e, f, g, h, k) {
        a = cl(c, d, true, a, e, f, g, h, k);
        a.context = el(null);
        c = a.current;
        d = L();
        e = lh(c);
        f = ch(d, e);
        f.callback = void 0 !== b && null !== b ? b : null;
        dh(c, f, e);
        a.current.lanes = e;
        Ac(a, e, d);
        Ek(a, d);
        return a;
      }
      function gl(a, b, c, d) {
        var e = b.current, f = L(), g = lh(e);
        c = el(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = ch(f, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = dh(e, b, g);
        null !== a && (mh(a, e, g, f), eh(a, e, g));
        return g;
      }
      function hl(a) {
        a = a.current;
        if (!a.child)
          return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function il(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function jl(a, b) {
        il(a, b);
        (a = a.alternate) && il(a, b);
      }
      function kl() {
        return null;
      }
      var ll = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ml(a) {
        this._internalRoot = a;
      }
      nl.prototype.render = ml.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b)
          throw Error(p(409));
        gl(a, b, null, null);
      };
      nl.prototype.unmount = ml.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Sk(function() {
            gl(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function nl(a) {
        this._internalRoot = a;
      }
      nl.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
            ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function ol(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function pl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function ql() {
      }
      function rl(a, b, c, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f = d;
            d = function() {
              var a2 = hl(g);
              f.call(a2);
            };
          }
          var g = fl(b, d, a, 0, null, false, false, "", ql);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Sk();
          return g;
        }
        for (; e = a.lastChild; )
          a.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = hl(k);
            h.call(a2);
          };
        }
        var k = cl(a, 0, false, null, null, false, false, "", ql);
        a._reactRootContainer = k;
        a[uf] = k.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Sk(function() {
          gl(b, k, c, d);
        });
        return k;
      }
      function sl(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a2 = hl(g);
              h.call(a2);
            };
          }
          gl(b, g, a, e);
        } else
          g = rl(c, b, a, e, d);
        return hl(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc(b.pendingLanes);
              0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
            }
            break;
          case 13:
            Sk(function() {
              var b2 = Zg(a, 1);
              if (null !== b2) {
                var c2 = L();
                mh(b2, a, 1, c2);
              }
            }), jl(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b = Zg(a, 134217728);
          if (null !== b) {
            var c = L();
            mh(b, a, 134217728, c);
          }
          jl(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = lh(a), c = Zg(a, b);
          if (null !== c) {
            var d = L();
            mh(c, a, b, d);
          }
          jl(a, b);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; )
                c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Db(d);
                  if (!e)
                    throw Error(p(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Rk;
      Hb = Sk;
      var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] };
      var ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
      var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!wl.isDisabled && wl.supportsFiber)
          try {
            kc = wl.inject(vl), lc = wl;
          } catch (a) {
          }
      }
      var wl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ol(b))
          throw Error(p(200));
        return dl(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!ol(a))
          throw Error(p(299));
        var c = false, d = "", e = ll;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = cl(a, 1, false, null, null, c, false, d, e);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ml(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a)
          return null;
        if (1 === a.nodeType)
          return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render)
            throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Sk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!pl(b))
          throw Error(p(200));
        return sl(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!ol(a))
          throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e = false, f = "", g = ll;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = fl(b, null, a, 1, null != c ? c : null, e, false, f, g);
        a[uf] = b.current;
        sf(a);
        if (d)
          for (a = 0; a < d.length; a++)
            c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
              c,
              e
            );
        return new nl(b);
      };
      exports.render = function(a, b, c) {
        if (!pl(b))
          throw Error(p(200));
        return sl(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!pl(a))
          throw Error(p(40));
        return a._reactRootContainer ? (Sk(function() {
          sl(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Rk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!pl(c))
          throw Error(p(200));
        if (null == a || void 0 === a._reactInternals)
          throw Error(p(38));
        return sl(a, b, c, false, d);
      };
      exports.version = "18.2.0-next-9e3b772b8-20220608";
    }
  });

  // ../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // ../../node_modules/.pnpm/is-buffer@2.0.5/node_modules/is-buffer/index.js
  var require_is_buffer = __commonJS({
    "../../node_modules/.pnpm/is-buffer@2.0.5/node_modules/is-buffer/index.js"(exports, module) {
      module.exports = function isBuffer2(obj) {
        return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
      };
    }
  });

  // ../../node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js
  var require_extend = __commonJS({
    "../../node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js"(exports, module) {
      "use strict";
      var hasOwn = Object.prototype.hasOwnProperty;
      var toStr = Object.prototype.toString;
      var defineProperty = Object.defineProperty;
      var gOPD = Object.getOwnPropertyDescriptor;
      var isArray = function isArray2(arr) {
        if (typeof Array.isArray === "function") {
          return Array.isArray(arr);
        }
        return toStr.call(arr) === "[object Array]";
      };
      var isPlainObject2 = function isPlainObject3(obj) {
        if (!obj || toStr.call(obj) !== "[object Object]") {
          return false;
        }
        var hasOwnConstructor = hasOwn.call(obj, "constructor");
        var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
        if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
          return false;
        }
        var key;
        for (key in obj) {
        }
        return typeof key === "undefined" || hasOwn.call(obj, key);
      };
      var setProperty = function setProperty2(target, options) {
        if (defineProperty && options.name === "__proto__") {
          defineProperty(target, options.name, {
            enumerable: true,
            configurable: true,
            value: options.newValue,
            writable: true
          });
        } else {
          target[options.name] = options.newValue;
        }
      };
      var getProperty = function getProperty2(obj, name) {
        if (name === "__proto__") {
          if (!hasOwn.call(obj, name)) {
            return void 0;
          } else if (gOPD) {
            return gOPD(obj, name).value;
          }
        }
        return obj[name];
      };
      module.exports = function extend2() {
        var options, name, src, copy, copyIsArray, clone;
        var target = arguments[0];
        var i = 1;
        var length = arguments.length;
        var deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[1] || {};
          i = 2;
        }
        if (target == null || typeof target !== "object" && typeof target !== "function") {
          target = {};
        }
        for (; i < length; ++i) {
          options = arguments[i];
          if (options != null) {
            for (name in options) {
              src = getProperty(target, name);
              copy = getProperty(options, name);
              if (target !== copy) {
                if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                  if (copyIsArray) {
                    copyIsArray = false;
                    clone = src && isArray(src) ? src : [];
                  } else {
                    clone = src && isPlainObject2(src) ? src : {};
                  }
                  setProperty(target, { name, newValue: extend2(deep, clone, copy) });
                } else if (typeof copy !== "undefined") {
                  setProperty(target, { name, newValue: copy });
                }
              }
            }
          }
        }
        return target;
      };
    }
  });

  // ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js
  var require_factoryWithThrowingShims = __commonJS({
    "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      function emptyFunction() {
      }
      function emptyFunctionWithReset() {
      }
      emptyFunctionWithReset.resetWarningCache = emptyFunction;
      module.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            return;
          }
          var err = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          err.name = "Invariant Violation";
          throw err;
        }
        ;
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        ;
        var ReactPropTypes = {
          array: shim,
          bigint: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,
          any: shim,
          arrayOf: getShim,
          element: shim,
          elementType: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim,
          checkPropTypes: emptyFunctionWithReset,
          resetWarningCache: emptyFunction
        };
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // ../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"(exports, module) {
      if (false) {
        ReactIs2 = null;
        throwOnDirectAccess = true;
        module.exports = null(ReactIs2.isElement, throwOnDirectAccess);
      } else {
        module.exports = require_factoryWithThrowingShims()();
      }
      var ReactIs2;
      var throwOnDirectAccess;
    }
  });

  // ../../node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.production.min.js
  var require_react_is_production_min = __commonJS({
    "../../node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
      "use strict";
      var b = Symbol.for("react.element");
      var c = Symbol.for("react.portal");
      var d = Symbol.for("react.fragment");
      var e = Symbol.for("react.strict_mode");
      var f = Symbol.for("react.profiler");
      var g = Symbol.for("react.provider");
      var h = Symbol.for("react.context");
      var k = Symbol.for("react.server_context");
      var l = Symbol.for("react.forward_ref");
      var m = Symbol.for("react.suspense");
      var n = Symbol.for("react.suspense_list");
      var p = Symbol.for("react.memo");
      var q = Symbol.for("react.lazy");
      var t = Symbol.for("react.offscreen");
      var u2;
      u2 = Symbol.for("react.module.reference");
      function v(a) {
        if ("object" === typeof a && null !== a) {
          var r = a.$$typeof;
          switch (r) {
            case b:
              switch (a = a.type, a) {
                case d:
                case f:
                case e:
                case m:
                case n:
                  return a;
                default:
                  switch (a = a && a.$$typeof, a) {
                    case k:
                    case h:
                    case l:
                    case q:
                    case p:
                    case g:
                      return a;
                    default:
                      return r;
                  }
              }
            case c:
              return r;
          }
        }
      }
      exports.ContextConsumer = h;
      exports.ContextProvider = g;
      exports.Element = b;
      exports.ForwardRef = l;
      exports.Fragment = d;
      exports.Lazy = q;
      exports.Memo = p;
      exports.Portal = c;
      exports.Profiler = f;
      exports.StrictMode = e;
      exports.Suspense = m;
      exports.SuspenseList = n;
      exports.isAsyncMode = function() {
        return false;
      };
      exports.isConcurrentMode = function() {
        return false;
      };
      exports.isContextConsumer = function(a) {
        return v(a) === h;
      };
      exports.isContextProvider = function(a) {
        return v(a) === g;
      };
      exports.isElement = function(a) {
        return "object" === typeof a && null !== a && a.$$typeof === b;
      };
      exports.isForwardRef = function(a) {
        return v(a) === l;
      };
      exports.isFragment = function(a) {
        return v(a) === d;
      };
      exports.isLazy = function(a) {
        return v(a) === q;
      };
      exports.isMemo = function(a) {
        return v(a) === p;
      };
      exports.isPortal = function(a) {
        return v(a) === c;
      };
      exports.isProfiler = function(a) {
        return v(a) === f;
      };
      exports.isStrictMode = function(a) {
        return v(a) === e;
      };
      exports.isSuspense = function(a) {
        return v(a) === m;
      };
      exports.isSuspenseList = function(a) {
        return v(a) === n;
      };
      exports.isValidElementType = function(a) {
        return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u2 || void 0 !== a.getModuleId) ? true : false;
      };
      exports.typeOf = v;
    }
  });

  // ../../node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "../../node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_is_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../node_modules/.pnpm/inline-style-parser@0.1.1/node_modules/inline-style-parser/index.js
  var require_inline_style_parser = __commonJS({
    "../../node_modules/.pnpm/inline-style-parser@0.1.1/node_modules/inline-style-parser/index.js"(exports, module) {
      var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
      var NEWLINE_REGEX = /\n/g;
      var WHITESPACE_REGEX = /^\s*/;
      var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
      var COLON_REGEX = /^:\s*/;
      var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
      var SEMICOLON_REGEX = /^[;\s]*/;
      var TRIM_REGEX = /^\s+|\s+$/g;
      var NEWLINE = "\n";
      var FORWARD_SLASH = "/";
      var ASTERISK = "*";
      var EMPTY_STRING = "";
      var TYPE_COMMENT = "comment";
      var TYPE_DECLARATION = "declaration";
      module.exports = function(style, options) {
        if (typeof style !== "string") {
          throw new TypeError("First argument must be a string");
        }
        if (!style)
          return [];
        options = options || {};
        var lineno = 1;
        var column = 1;
        function updatePosition(str) {
          var lines = str.match(NEWLINE_REGEX);
          if (lines)
            lineno += lines.length;
          var i = str.lastIndexOf(NEWLINE);
          column = ~i ? str.length - i : column + str.length;
        }
        function position3() {
          var start = { line: lineno, column };
          return function(node2) {
            node2.position = new Position(start);
            whitespace2();
            return node2;
          };
        }
        function Position(start) {
          this.start = start;
          this.end = { line: lineno, column };
          this.source = options.source;
        }
        Position.prototype.content = style;
        var errorsList = [];
        function error(msg) {
          var err = new Error(
            options.source + ":" + lineno + ":" + column + ": " + msg
          );
          err.reason = msg;
          err.filename = options.source;
          err.line = lineno;
          err.column = column;
          err.source = style;
          if (options.silent) {
            errorsList.push(err);
          } else {
            throw err;
          }
        }
        function match(re) {
          var m = re.exec(style);
          if (!m)
            return;
          var str = m[0];
          updatePosition(str);
          style = style.slice(str.length);
          return m;
        }
        function whitespace2() {
          match(WHITESPACE_REGEX);
        }
        function comments(rules) {
          var c;
          rules = rules || [];
          while (c = comment()) {
            if (c !== false) {
              rules.push(c);
            }
          }
          return rules;
        }
        function comment() {
          var pos = position3();
          if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1))
            return;
          var i = 2;
          while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
            ++i;
          }
          i += 2;
          if (EMPTY_STRING === style.charAt(i - 1)) {
            return error("End of comment missing");
          }
          var str = style.slice(2, i - 2);
          column += 2;
          updatePosition(str);
          style = style.slice(i);
          column += 2;
          return pos({
            type: TYPE_COMMENT,
            comment: str
          });
        }
        function declaration() {
          var pos = position3();
          var prop = match(PROPERTY_REGEX);
          if (!prop)
            return;
          comment();
          if (!match(COLON_REGEX))
            return error("property missing ':'");
          var val = match(VALUE_REGEX);
          var ret = pos({
            type: TYPE_DECLARATION,
            property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
            value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
          });
          match(SEMICOLON_REGEX);
          return ret;
        }
        function declarations() {
          var decls = [];
          comments(decls);
          var decl;
          while (decl = declaration()) {
            if (decl !== false) {
              decls.push(decl);
              comments(decls);
            }
          }
          return decls;
        }
        whitespace2();
        return declarations();
      };
      function trim(str) {
        return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
      }
    }
  });

  // ../../node_modules/.pnpm/style-to-object@0.4.1/node_modules/style-to-object/index.js
  var require_style_to_object = __commonJS({
    "../../node_modules/.pnpm/style-to-object@0.4.1/node_modules/style-to-object/index.js"(exports, module) {
      var parse2 = require_inline_style_parser();
      function StyleToObject2(style, iterator) {
        var output = null;
        if (!style || typeof style !== "string") {
          return output;
        }
        var declaration;
        var declarations = parse2(style);
        var hasIterator = typeof iterator === "function";
        var property;
        var value;
        for (var i = 0, len = declarations.length; i < len; i++) {
          declaration = declarations[i];
          property = declaration.property;
          value = declaration.value;
          if (hasIterator) {
            iterator(property, value, declaration);
          } else if (value) {
            output || (output = {});
            output[property] = value;
          }
        }
        return output;
      }
      module.exports = StyleToObject2;
      module.exports.default = StyleToObject2;
    }
  });

  // ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        var nativeCodeString = "[native code]";
        function classNames() {
          var classes = [];
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg)
              continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") {
              classes.push(arg);
            } else if (Array.isArray(arg)) {
              if (arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                  classes.push(inner);
                }
              }
            } else if (argType === "object") {
              if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
                classes.push(arg.toString());
                continue;
              }
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            }
          }
          return classes.join(" ");
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames;
          });
        } else {
          window.classNames = classNames;
        }
      })();
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/base.js
  var require_base = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/base.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = Diff;
      function Diff() {
      }
      Diff.prototype = {
        diff: function diff(oldString, newString) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var callback = options.callback;
          if (typeof options === "function") {
            callback = options;
            options = {};
          }
          this.options = options;
          var self = this;
          function done(value) {
            if (callback) {
              setTimeout(function() {
                callback(void 0, value);
              }, 0);
              return true;
            } else {
              return value;
            }
          }
          oldString = this.castInput(oldString);
          newString = this.castInput(newString);
          oldString = this.removeEmpty(this.tokenize(oldString));
          newString = this.removeEmpty(this.tokenize(newString));
          var newLen = newString.length, oldLen = oldString.length;
          var editLength = 1;
          var maxEditLength = newLen + oldLen;
          if (options.maxEditLength) {
            maxEditLength = Math.min(maxEditLength, options.maxEditLength);
          }
          var bestPath = [{
            newPos: -1,
            components: []
          }];
          var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
          if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
            return done([{
              value: this.join(newString),
              count: newString.length
            }]);
          }
          function execEditLength() {
            for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
              var basePath = void 0;
              var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1], _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
              if (addPath) {
                bestPath[diagonalPath - 1] = void 0;
              }
              var canAdd = addPath && addPath.newPos + 1 < newLen, canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
              if (!canAdd && !canRemove) {
                bestPath[diagonalPath] = void 0;
                continue;
              }
              if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
                basePath = clonePath(removePath);
                self.pushComponent(basePath.components, void 0, true);
              } else {
                basePath = addPath;
                basePath.newPos++;
                self.pushComponent(basePath.components, true, void 0);
              }
              _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);
              if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
                return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
              } else {
                bestPath[diagonalPath] = basePath;
              }
            }
            editLength++;
          }
          if (callback) {
            (function exec() {
              setTimeout(function() {
                if (editLength > maxEditLength) {
                  return callback();
                }
                if (!execEditLength()) {
                  exec();
                }
              }, 0);
            })();
          } else {
            while (editLength <= maxEditLength) {
              var ret = execEditLength();
              if (ret) {
                return ret;
              }
            }
          }
        },
        pushComponent: function pushComponent(components, added, removed) {
          var last = components[components.length - 1];
          if (last && last.added === added && last.removed === removed) {
            components[components.length - 1] = {
              count: last.count + 1,
              added,
              removed
            };
          } else {
            components.push({
              count: 1,
              added,
              removed
            });
          }
        },
        extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
          var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath, commonCount = 0;
          while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
            newPos++;
            oldPos++;
            commonCount++;
          }
          if (commonCount) {
            basePath.components.push({
              count: commonCount
            });
          }
          basePath.newPos = newPos;
          return oldPos;
        },
        equals: function equals(left, right) {
          if (this.options.comparator) {
            return this.options.comparator(left, right);
          } else {
            return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
          }
        },
        removeEmpty: function removeEmpty(array) {
          var ret = [];
          for (var i = 0; i < array.length; i++) {
            if (array[i]) {
              ret.push(array[i]);
            }
          }
          return ret;
        },
        castInput: function castInput(value) {
          return value;
        },
        tokenize: function tokenize(value) {
          return value.split("");
        },
        join: function join2(chars) {
          return chars.join("");
        }
      };
      function buildValues(diff, components, newString, oldString, useLongestToken) {
        var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
        for (; componentPos < componentLen; componentPos++) {
          var component = components[componentPos];
          if (!component.removed) {
            if (!component.added && useLongestToken) {
              var value = newString.slice(newPos, newPos + component.count);
              value = value.map(function(value2, i) {
                var oldValue = oldString[oldPos + i];
                return oldValue.length > value2.length ? oldValue : value2;
              });
              component.value = diff.join(value);
            } else {
              component.value = diff.join(newString.slice(newPos, newPos + component.count));
            }
            newPos += component.count;
            if (!component.added) {
              oldPos += component.count;
            }
          } else {
            component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
            oldPos += component.count;
            if (componentPos && components[componentPos - 1].added) {
              var tmp = components[componentPos - 1];
              components[componentPos - 1] = components[componentPos];
              components[componentPos] = tmp;
            }
          }
        }
        var lastComponent = components[componentLen - 1];
        if (componentLen > 1 && typeof lastComponent.value === "string" && (lastComponent.added || lastComponent.removed) && diff.equals("", lastComponent.value)) {
          components[componentLen - 2].value += lastComponent.value;
          components.pop();
        }
        return components;
      }
      function clonePath(path2) {
        return {
          newPos: path2.newPos,
          components: path2.components.slice(0)
        };
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/character.js
  var require_character = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/character.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.diffChars = diffChars;
      exports.characterDiff = void 0;
      var _base = _interopRequireDefault(require_base());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var characterDiff = new _base["default"]();
      exports.characterDiff = characterDiff;
      function diffChars(oldStr, newStr, options) {
        return characterDiff.diff(oldStr, newStr, options);
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/util/params.js
  var require_params = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/util/params.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.generateOptions = generateOptions;
      function generateOptions(options, defaults) {
        if (typeof options === "function") {
          defaults.callback = options;
        } else if (options) {
          for (var name in options) {
            if (options.hasOwnProperty(name)) {
              defaults[name] = options[name];
            }
          }
        }
        return defaults;
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/word.js
  var require_word = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/word.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.diffWords = diffWords;
      exports.diffWordsWithSpace = diffWordsWithSpace;
      exports.wordDiff = void 0;
      var _base = _interopRequireDefault(require_base());
      var _params = require_params();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
      var reWhitespace = /\S/;
      var wordDiff = new _base["default"]();
      exports.wordDiff = wordDiff;
      wordDiff.equals = function(left, right) {
        if (this.options.ignoreCase) {
          left = left.toLowerCase();
          right = right.toLowerCase();
        }
        return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
      };
      wordDiff.tokenize = function(value) {
        var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/);
        for (var i = 0; i < tokens.length - 1; i++) {
          if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
            tokens[i] += tokens[i + 2];
            tokens.splice(i + 1, 2);
            i--;
          }
        }
        return tokens;
      };
      function diffWords(oldStr, newStr, options) {
        options = (0, _params.generateOptions)(options, {
          ignoreWhitespace: true
        });
        return wordDiff.diff(oldStr, newStr, options);
      }
      function diffWordsWithSpace(oldStr, newStr, options) {
        return wordDiff.diff(oldStr, newStr, options);
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/line.js
  var require_line = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/line.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.diffLines = diffLines;
      exports.diffTrimmedLines = diffTrimmedLines;
      exports.lineDiff = void 0;
      var _base = _interopRequireDefault(require_base());
      var _params = require_params();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var lineDiff = new _base["default"]();
      exports.lineDiff = lineDiff;
      lineDiff.tokenize = function(value) {
        var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
        if (!linesAndNewlines[linesAndNewlines.length - 1]) {
          linesAndNewlines.pop();
        }
        for (var i = 0; i < linesAndNewlines.length; i++) {
          var line = linesAndNewlines[i];
          if (i % 2 && !this.options.newlineIsToken) {
            retLines[retLines.length - 1] += line;
          } else {
            if (this.options.ignoreWhitespace) {
              line = line.trim();
            }
            retLines.push(line);
          }
        }
        return retLines;
      };
      function diffLines(oldStr, newStr, callback) {
        return lineDiff.diff(oldStr, newStr, callback);
      }
      function diffTrimmedLines(oldStr, newStr, callback) {
        var options = (0, _params.generateOptions)(callback, {
          ignoreWhitespace: true
        });
        return lineDiff.diff(oldStr, newStr, options);
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/sentence.js
  var require_sentence = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/sentence.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.diffSentences = diffSentences;
      exports.sentenceDiff = void 0;
      var _base = _interopRequireDefault(require_base());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var sentenceDiff = new _base["default"]();
      exports.sentenceDiff = sentenceDiff;
      sentenceDiff.tokenize = function(value) {
        return value.split(/(\S.+?[.!?])(?=\s+|$)/);
      };
      function diffSentences(oldStr, newStr, callback) {
        return sentenceDiff.diff(oldStr, newStr, callback);
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/css.js
  var require_css = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/css.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.diffCss = diffCss;
      exports.cssDiff = void 0;
      var _base = _interopRequireDefault(require_base());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var cssDiff = new _base["default"]();
      exports.cssDiff = cssDiff;
      cssDiff.tokenize = function(value) {
        return value.split(/([{}:;,]|\s+)/);
      };
      function diffCss(oldStr, newStr, callback) {
        return cssDiff.diff(oldStr, newStr, callback);
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/json.js
  var require_json = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.diffJson = diffJson;
      exports.canonicalize = canonicalize;
      exports.jsonDiff = void 0;
      var _base = _interopRequireDefault(require_base());
      var _line = require_line();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      var objectPrototypeToString = Object.prototype.toString;
      var jsonDiff = new _base["default"]();
      exports.jsonDiff = jsonDiff;
      jsonDiff.useLongestToken = true;
      jsonDiff.tokenize = _line.lineDiff.tokenize;
      jsonDiff.castInput = function(value) {
        var _this$options = this.options, undefinedReplacement = _this$options.undefinedReplacement, _this$options$stringi = _this$options.stringifyReplacer, stringifyReplacer = _this$options$stringi === void 0 ? function(k, v) {
          return typeof v === "undefined" ? undefinedReplacement : v;
        } : _this$options$stringi;
        return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
      };
      jsonDiff.equals = function(left, right) {
        return _base["default"].prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
      };
      function diffJson(oldObj, newObj, options) {
        return jsonDiff.diff(oldObj, newObj, options);
      }
      function canonicalize(obj, stack, replacementStack, replacer, key) {
        stack = stack || [];
        replacementStack = replacementStack || [];
        if (replacer) {
          obj = replacer(key, obj);
        }
        var i;
        for (i = 0; i < stack.length; i += 1) {
          if (stack[i] === obj) {
            return replacementStack[i];
          }
        }
        var canonicalizedObj;
        if ("[object Array]" === objectPrototypeToString.call(obj)) {
          stack.push(obj);
          canonicalizedObj = new Array(obj.length);
          replacementStack.push(canonicalizedObj);
          for (i = 0; i < obj.length; i += 1) {
            canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
          }
          stack.pop();
          replacementStack.pop();
          return canonicalizedObj;
        }
        if (obj && obj.toJSON) {
          obj = obj.toJSON();
        }
        if (_typeof(
          obj
        ) === "object" && obj !== null) {
          stack.push(obj);
          canonicalizedObj = {};
          replacementStack.push(canonicalizedObj);
          var sortedKeys = [], _key;
          for (_key in obj) {
            if (obj.hasOwnProperty(_key)) {
              sortedKeys.push(_key);
            }
          }
          sortedKeys.sort();
          for (i = 0; i < sortedKeys.length; i += 1) {
            _key = sortedKeys[i];
            canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
          }
          stack.pop();
          replacementStack.pop();
        } else {
          canonicalizedObj = obj;
        }
        return canonicalizedObj;
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/array.js
  var require_array = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/diff/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.diffArrays = diffArrays;
      exports.arrayDiff = void 0;
      var _base = _interopRequireDefault(require_base());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var arrayDiff = new _base["default"]();
      exports.arrayDiff = arrayDiff;
      arrayDiff.tokenize = function(value) {
        return value.slice();
      };
      arrayDiff.join = arrayDiff.removeEmpty = function(value) {
        return value;
      };
      function diffArrays(oldArr, newArr, callback) {
        return arrayDiff.diff(oldArr, newArr, callback);
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/patch/parse.js
  var require_parse = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/patch/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.parsePatch = parsePatch;
      function parsePatch(uniDiff) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/), delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [], list3 = [], i = 0;
        function parseIndex() {
          var index2 = {};
          list3.push(index2);
          while (i < diffstr.length) {
            var line = diffstr[i];
            if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
              break;
            }
            var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
            if (header) {
              index2.index = header[1];
            }
            i++;
          }
          parseFileHeader(index2);
          parseFileHeader(index2);
          index2.hunks = [];
          while (i < diffstr.length) {
            var _line = diffstr[i];
            if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
              break;
            } else if (/^@@/.test(_line)) {
              index2.hunks.push(parseHunk());
            } else if (_line && options.strict) {
              throw new Error("Unknown line " + (i + 1) + " " + JSON.stringify(_line));
            } else {
              i++;
            }
          }
        }
        function parseFileHeader(index2) {
          var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);
          if (fileHeader) {
            var keyPrefix = fileHeader[1] === "---" ? "old" : "new";
            var data = fileHeader[2].split("	", 2);
            var fileName = data[0].replace(/\\\\/g, "\\");
            if (/^".*"$/.test(fileName)) {
              fileName = fileName.substr(1, fileName.length - 2);
            }
            index2[keyPrefix + "FileName"] = fileName;
            index2[keyPrefix + "Header"] = (data[1] || "").trim();
            i++;
          }
        }
        function parseHunk() {
          var chunkHeaderIndex = i, chunkHeaderLine = diffstr[i++], chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
          var hunk = {
            oldStart: +chunkHeader[1],
            oldLines: typeof chunkHeader[2] === "undefined" ? 1 : +chunkHeader[2],
            newStart: +chunkHeader[3],
            newLines: typeof chunkHeader[4] === "undefined" ? 1 : +chunkHeader[4],
            lines: [],
            linedelimiters: []
          };
          if (hunk.oldLines === 0) {
            hunk.oldStart += 1;
          }
          if (hunk.newLines === 0) {
            hunk.newStart += 1;
          }
          var addCount = 0, removeCount = 0;
          for (; i < diffstr.length; i++) {
            if (diffstr[i].indexOf("--- ") === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf("+++ ") === 0 && diffstr[i + 2].indexOf("@@") === 0) {
              break;
            }
            var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? " " : diffstr[i][0];
            if (operation === "+" || operation === "-" || operation === " " || operation === "\\") {
              hunk.lines.push(diffstr[i]);
              hunk.linedelimiters.push(delimiters[i] || "\n");
              if (operation === "+") {
                addCount++;
              } else if (operation === "-") {
                removeCount++;
              } else if (operation === " ") {
                addCount++;
                removeCount++;
              }
            } else {
              break;
            }
          }
          if (!addCount && hunk.newLines === 1) {
            hunk.newLines = 0;
          }
          if (!removeCount && hunk.oldLines === 1) {
            hunk.oldLines = 0;
          }
          if (options.strict) {
            if (addCount !== hunk.newLines) {
              throw new Error("Added line count did not match for hunk at line " + (chunkHeaderIndex + 1));
            }
            if (removeCount !== hunk.oldLines) {
              throw new Error("Removed line count did not match for hunk at line " + (chunkHeaderIndex + 1));
            }
          }
          return hunk;
        }
        while (i < diffstr.length) {
          parseIndex();
        }
        return list3;
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/util/distance-iterator.js
  var require_distance_iterator = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/util/distance-iterator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = _default;
      function _default(start, minLine, maxLine) {
        var wantForward = true, backwardExhausted = false, forwardExhausted = false, localOffset = 1;
        return function iterator() {
          if (wantForward && !forwardExhausted) {
            if (backwardExhausted) {
              localOffset++;
            } else {
              wantForward = false;
            }
            if (start + localOffset <= maxLine) {
              return localOffset;
            }
            forwardExhausted = true;
          }
          if (!backwardExhausted) {
            if (!forwardExhausted) {
              wantForward = true;
            }
            if (minLine <= start - localOffset) {
              return -localOffset++;
            }
            backwardExhausted = true;
            return iterator();
          }
        };
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/patch/apply.js
  var require_apply = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/patch/apply.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.applyPatch = applyPatch;
      exports.applyPatches = applyPatches;
      var _parse = require_parse();
      var _distanceIterator = _interopRequireDefault(require_distance_iterator());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function applyPatch(source, uniDiff) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (typeof uniDiff === "string") {
          uniDiff = (0, _parse.parsePatch)(uniDiff);
        }
        if (Array.isArray(uniDiff)) {
          if (uniDiff.length > 1) {
            throw new Error("applyPatch only works with a single input.");
          }
          uniDiff = uniDiff[0];
        }
        var lines = source.split(/\r\n|[\n\v\f\r\x85]/), delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [], hunks = uniDiff.hunks, compareLine = options.compareLine || function(lineNumber, line2, operation2, patchContent) {
          return line2 === patchContent;
        }, errorCount = 0, fuzzFactor = options.fuzzFactor || 0, minLine = 0, offset = 0, removeEOFNL, addEOFNL;
        function hunkFits(hunk2, toPos2) {
          for (var j2 = 0; j2 < hunk2.lines.length; j2++) {
            var line2 = hunk2.lines[j2], operation2 = line2.length > 0 ? line2[0] : " ", content4 = line2.length > 0 ? line2.substr(1) : line2;
            if (operation2 === " " || operation2 === "-") {
              if (!compareLine(toPos2 + 1, lines[toPos2], operation2, content4)) {
                errorCount++;
                if (errorCount > fuzzFactor) {
                  return false;
                }
              }
              toPos2++;
            }
          }
          return true;
        }
        for (var i = 0; i < hunks.length; i++) {
          var hunk = hunks[i], maxLine = lines.length - hunk.oldLines, localOffset = 0, toPos = offset + hunk.oldStart - 1;
          var iterator = (0, _distanceIterator["default"])(toPos, minLine, maxLine);
          for (; localOffset !== void 0; localOffset = iterator()) {
            if (hunkFits(hunk, toPos + localOffset)) {
              hunk.offset = offset += localOffset;
              break;
            }
          }
          if (localOffset === void 0) {
            return false;
          }
          minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
        }
        var diffOffset = 0;
        for (var _i = 0; _i < hunks.length; _i++) {
          var _hunk = hunks[_i], _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
          diffOffset += _hunk.newLines - _hunk.oldLines;
          for (var j = 0; j < _hunk.lines.length; j++) {
            var line = _hunk.lines[j], operation = line.length > 0 ? line[0] : " ", content3 = line.length > 0 ? line.substr(1) : line, delimiter = _hunk.linedelimiters[j];
            if (operation === " ") {
              _toPos++;
            } else if (operation === "-") {
              lines.splice(_toPos, 1);
              delimiters.splice(_toPos, 1);
            } else if (operation === "+") {
              lines.splice(_toPos, 0, content3);
              delimiters.splice(_toPos, 0, delimiter);
              _toPos++;
            } else if (operation === "\\") {
              var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
              if (previousOperation === "+") {
                removeEOFNL = true;
              } else if (previousOperation === "-") {
                addEOFNL = true;
              }
            }
          }
        }
        if (removeEOFNL) {
          while (!lines[lines.length - 1]) {
            lines.pop();
            delimiters.pop();
          }
        } else if (addEOFNL) {
          lines.push("");
          delimiters.push("\n");
        }
        for (var _k = 0; _k < lines.length - 1; _k++) {
          lines[_k] = lines[_k] + delimiters[_k];
        }
        return lines.join("");
      }
      function applyPatches(uniDiff, options) {
        if (typeof uniDiff === "string") {
          uniDiff = (0, _parse.parsePatch)(uniDiff);
        }
        var currentIndex = 0;
        function processIndex() {
          var index2 = uniDiff[currentIndex++];
          if (!index2) {
            return options.complete();
          }
          options.loadFile(index2, function(err, data) {
            if (err) {
              return options.complete(err);
            }
            var updatedContent = applyPatch(data, index2, options);
            options.patched(index2, updatedContent, function(err2) {
              if (err2) {
                return options.complete(err2);
              }
              processIndex();
            });
          });
        }
        processIndex();
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/patch/create.js
  var require_create = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/patch/create.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.structuredPatch = structuredPatch;
      exports.formatPatch = formatPatch;
      exports.createTwoFilesPatch = createTwoFilesPatch;
      exports.createPatch = createPatch;
      var _line = require_line();
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
          return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
        if (!options) {
          options = {};
        }
        if (typeof options.context === "undefined") {
          options.context = 4;
        }
        var diff = (0, _line.diffLines)(oldStr, newStr, options);
        if (!diff) {
          return;
        }
        diff.push({
          value: "",
          lines: []
        });
        function contextLines(lines) {
          return lines.map(function(entry) {
            return " " + entry;
          });
        }
        var hunks = [];
        var oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
        var _loop = function _loop2(i2) {
          var current = diff[i2], lines = current.lines || current.value.replace(/\n$/, "").split("\n");
          current.lines = lines;
          if (current.added || current.removed) {
            var _curRange;
            if (!oldRangeStart) {
              var prev = diff[i2 - 1];
              oldRangeStart = oldLine;
              newRangeStart = newLine;
              if (prev) {
                curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
                oldRangeStart -= curRange.length;
                newRangeStart -= curRange.length;
              }
            }
            (_curRange = curRange).push.apply(
              _curRange,
              _toConsumableArray(
                lines.map(function(entry) {
                  return (current.added ? "+" : "-") + entry;
                })
              )
            );
            if (current.added) {
              newLine += lines.length;
            } else {
              oldLine += lines.length;
            }
          } else {
            if (oldRangeStart) {
              if (lines.length <= options.context * 2 && i2 < diff.length - 2) {
                var _curRange2;
                (_curRange2 = curRange).push.apply(
                  _curRange2,
                  _toConsumableArray(
                    contextLines(lines)
                  )
                );
              } else {
                var _curRange3;
                var contextSize = Math.min(lines.length, options.context);
                (_curRange3 = curRange).push.apply(
                  _curRange3,
                  _toConsumableArray(
                    contextLines(lines.slice(0, contextSize))
                  )
                );
                var hunk = {
                  oldStart: oldRangeStart,
                  oldLines: oldLine - oldRangeStart + contextSize,
                  newStart: newRangeStart,
                  newLines: newLine - newRangeStart + contextSize,
                  lines: curRange
                };
                if (i2 >= diff.length - 2 && lines.length <= options.context) {
                  var oldEOFNewline = /\n$/.test(oldStr);
                  var newEOFNewline = /\n$/.test(newStr);
                  var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;
                  if (!oldEOFNewline && noNlBeforeAdds && oldStr.length > 0) {
                    curRange.splice(hunk.oldLines, 0, "\\ No newline at end of file");
                  }
                  if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
                    curRange.push("\\ No newline at end of file");
                  }
                }
                hunks.push(hunk);
                oldRangeStart = 0;
                newRangeStart = 0;
                curRange = [];
              }
            }
            oldLine += lines.length;
            newLine += lines.length;
          }
        };
        for (var i = 0; i < diff.length; i++) {
          _loop(
            i
          );
        }
        return {
          oldFileName,
          newFileName,
          oldHeader,
          newHeader,
          hunks
        };
      }
      function formatPatch(diff) {
        var ret = [];
        if (diff.oldFileName == diff.newFileName) {
          ret.push("Index: " + diff.oldFileName);
        }
        ret.push("===================================================================");
        ret.push("--- " + diff.oldFileName + (typeof diff.oldHeader === "undefined" ? "" : "	" + diff.oldHeader));
        ret.push("+++ " + diff.newFileName + (typeof diff.newHeader === "undefined" ? "" : "	" + diff.newHeader));
        for (var i = 0; i < diff.hunks.length; i++) {
          var hunk = diff.hunks[i];
          if (hunk.oldLines === 0) {
            hunk.oldStart -= 1;
          }
          if (hunk.newLines === 0) {
            hunk.newStart -= 1;
          }
          ret.push("@@ -" + hunk.oldStart + "," + hunk.oldLines + " +" + hunk.newStart + "," + hunk.newLines + " @@");
          ret.push.apply(ret, hunk.lines);
        }
        return ret.join("\n") + "\n";
      }
      function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
        return formatPatch(structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options));
      }
      function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
        return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/util/array.js
  var require_array2 = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/util/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.arrayEqual = arrayEqual;
      exports.arrayStartsWith = arrayStartsWith;
      function arrayEqual(a, b) {
        if (a.length !== b.length) {
          return false;
        }
        return arrayStartsWith(a, b);
      }
      function arrayStartsWith(array, start) {
        if (start.length > array.length) {
          return false;
        }
        for (var i = 0; i < start.length; i++) {
          if (start[i] !== array[i]) {
            return false;
          }
        }
        return true;
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/patch/merge.js
  var require_merge = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/patch/merge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calcLineCount = calcLineCount;
      exports.merge = merge2;
      var _create = require_create();
      var _parse = require_parse();
      var _array = require_array2();
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
          return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function calcLineCount(hunk) {
        var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines), oldLines = _calcOldNewLineCount.oldLines, newLines = _calcOldNewLineCount.newLines;
        if (oldLines !== void 0) {
          hunk.oldLines = oldLines;
        } else {
          delete hunk.oldLines;
        }
        if (newLines !== void 0) {
          hunk.newLines = newLines;
        } else {
          delete hunk.newLines;
        }
      }
      function merge2(mine, theirs, base2) {
        mine = loadPatch(mine, base2);
        theirs = loadPatch(theirs, base2);
        var ret = {};
        if (mine.index || theirs.index) {
          ret.index = mine.index || theirs.index;
        }
        if (mine.newFileName || theirs.newFileName) {
          if (!fileNameChanged(mine)) {
            ret.oldFileName = theirs.oldFileName || mine.oldFileName;
            ret.newFileName = theirs.newFileName || mine.newFileName;
            ret.oldHeader = theirs.oldHeader || mine.oldHeader;
            ret.newHeader = theirs.newHeader || mine.newHeader;
          } else if (!fileNameChanged(theirs)) {
            ret.oldFileName = mine.oldFileName;
            ret.newFileName = mine.newFileName;
            ret.oldHeader = mine.oldHeader;
            ret.newHeader = mine.newHeader;
          } else {
            ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
            ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
            ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
            ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
          }
        }
        ret.hunks = [];
        var mineIndex = 0, theirsIndex = 0, mineOffset = 0, theirsOffset = 0;
        while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
          var mineCurrent = mine.hunks[mineIndex] || {
            oldStart: Infinity
          }, theirsCurrent = theirs.hunks[theirsIndex] || {
            oldStart: Infinity
          };
          if (hunkBefore(mineCurrent, theirsCurrent)) {
            ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
            mineIndex++;
            theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
          } else if (hunkBefore(theirsCurrent, mineCurrent)) {
            ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
            theirsIndex++;
            mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
          } else {
            var mergedHunk = {
              oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
              oldLines: 0,
              newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
              newLines: 0,
              lines: []
            };
            mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
            theirsIndex++;
            mineIndex++;
            ret.hunks.push(mergedHunk);
          }
        }
        return ret;
      }
      function loadPatch(param, base2) {
        if (typeof param === "string") {
          if (/^@@/m.test(param) || /^Index:/m.test(param)) {
            return (0, _parse.parsePatch)(param)[0];
          }
          if (!base2) {
            throw new Error("Must provide a base reference or pass in a patch");
          }
          return (0, _create.structuredPatch)(void 0, void 0, base2, param);
        }
        return param;
      }
      function fileNameChanged(patch) {
        return patch.newFileName && patch.newFileName !== patch.oldFileName;
      }
      function selectField(index2, mine, theirs) {
        if (mine === theirs) {
          return mine;
        } else {
          index2.conflict = true;
          return {
            mine,
            theirs
          };
        }
      }
      function hunkBefore(test, check) {
        return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
      }
      function cloneHunk(hunk, offset) {
        return {
          oldStart: hunk.oldStart,
          oldLines: hunk.oldLines,
          newStart: hunk.newStart + offset,
          newLines: hunk.newLines,
          lines: hunk.lines
        };
      }
      function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
        var mine = {
          offset: mineOffset,
          lines: mineLines,
          index: 0
        }, their = {
          offset: theirOffset,
          lines: theirLines,
          index: 0
        };
        insertLeading(hunk, mine, their);
        insertLeading(hunk, their, mine);
        while (mine.index < mine.lines.length && their.index < their.lines.length) {
          var mineCurrent = mine.lines[mine.index], theirCurrent = their.lines[their.index];
          if ((mineCurrent[0] === "-" || mineCurrent[0] === "+") && (theirCurrent[0] === "-" || theirCurrent[0] === "+")) {
            mutualChange(hunk, mine, their);
          } else if (mineCurrent[0] === "+" && theirCurrent[0] === " ") {
            var _hunk$lines;
            (_hunk$lines = hunk.lines).push.apply(
              _hunk$lines,
              _toConsumableArray(
                collectChange(mine)
              )
            );
          } else if (theirCurrent[0] === "+" && mineCurrent[0] === " ") {
            var _hunk$lines2;
            (_hunk$lines2 = hunk.lines).push.apply(
              _hunk$lines2,
              _toConsumableArray(
                collectChange(their)
              )
            );
          } else if (mineCurrent[0] === "-" && theirCurrent[0] === " ") {
            removal(hunk, mine, their);
          } else if (theirCurrent[0] === "-" && mineCurrent[0] === " ") {
            removal(hunk, their, mine, true);
          } else if (mineCurrent === theirCurrent) {
            hunk.lines.push(mineCurrent);
            mine.index++;
            their.index++;
          } else {
            conflict(hunk, collectChange(mine), collectChange(their));
          }
        }
        insertTrailing(hunk, mine);
        insertTrailing(hunk, their);
        calcLineCount(hunk);
      }
      function mutualChange(hunk, mine, their) {
        var myChanges = collectChange(mine), theirChanges = collectChange(their);
        if (allRemoves(myChanges) && allRemoves(theirChanges)) {
          if ((0, _array.arrayStartsWith)(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
            var _hunk$lines3;
            (_hunk$lines3 = hunk.lines).push.apply(
              _hunk$lines3,
              _toConsumableArray(
                myChanges
              )
            );
            return;
          } else if ((0, _array.arrayStartsWith)(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
            var _hunk$lines4;
            (_hunk$lines4 = hunk.lines).push.apply(
              _hunk$lines4,
              _toConsumableArray(
                theirChanges
              )
            );
            return;
          }
        } else if ((0, _array.arrayEqual)(myChanges, theirChanges)) {
          var _hunk$lines5;
          (_hunk$lines5 = hunk.lines).push.apply(
            _hunk$lines5,
            _toConsumableArray(
              myChanges
            )
          );
          return;
        }
        conflict(hunk, myChanges, theirChanges);
      }
      function removal(hunk, mine, their, swap) {
        var myChanges = collectChange(mine), theirChanges = collectContext(their, myChanges);
        if (theirChanges.merged) {
          var _hunk$lines6;
          (_hunk$lines6 = hunk.lines).push.apply(
            _hunk$lines6,
            _toConsumableArray(
              theirChanges.merged
            )
          );
        } else {
          conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
        }
      }
      function conflict(hunk, mine, their) {
        hunk.conflict = true;
        hunk.lines.push({
          conflict: true,
          mine,
          theirs: their
        });
      }
      function insertLeading(hunk, insert, their) {
        while (insert.offset < their.offset && insert.index < insert.lines.length) {
          var line = insert.lines[insert.index++];
          hunk.lines.push(line);
          insert.offset++;
        }
      }
      function insertTrailing(hunk, insert) {
        while (insert.index < insert.lines.length) {
          var line = insert.lines[insert.index++];
          hunk.lines.push(line);
        }
      }
      function collectChange(state2) {
        var ret = [], operation = state2.lines[state2.index][0];
        while (state2.index < state2.lines.length) {
          var line = state2.lines[state2.index];
          if (operation === "-" && line[0] === "+") {
            operation = "+";
          }
          if (operation === line[0]) {
            ret.push(line);
            state2.index++;
          } else {
            break;
          }
        }
        return ret;
      }
      function collectContext(state2, matchChanges) {
        var changes = [], merged = [], matchIndex = 0, contextChanges = false, conflicted = false;
        while (matchIndex < matchChanges.length && state2.index < state2.lines.length) {
          var change = state2.lines[state2.index], match = matchChanges[matchIndex];
          if (match[0] === "+") {
            break;
          }
          contextChanges = contextChanges || change[0] !== " ";
          merged.push(match);
          matchIndex++;
          if (change[0] === "+") {
            conflicted = true;
            while (change[0] === "+") {
              changes.push(change);
              change = state2.lines[++state2.index];
            }
          }
          if (match.substr(1) === change.substr(1)) {
            changes.push(change);
            state2.index++;
          } else {
            conflicted = true;
          }
        }
        if ((matchChanges[matchIndex] || "")[0] === "+" && contextChanges) {
          conflicted = true;
        }
        if (conflicted) {
          return changes;
        }
        while (matchIndex < matchChanges.length) {
          merged.push(matchChanges[matchIndex++]);
        }
        return {
          merged,
          changes
        };
      }
      function allRemoves(changes) {
        return changes.reduce(function(prev, change) {
          return prev && change[0] === "-";
        }, true);
      }
      function skipRemoveSuperset(state2, removeChanges, delta) {
        for (var i = 0; i < delta; i++) {
          var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
          if (state2.lines[state2.index + i] !== " " + changeContent) {
            return false;
          }
        }
        state2.index += delta;
        return true;
      }
      function calcOldNewLineCount(lines) {
        var oldLines = 0;
        var newLines = 0;
        lines.forEach(function(line) {
          if (typeof line !== "string") {
            var myCount = calcOldNewLineCount(line.mine);
            var theirCount = calcOldNewLineCount(line.theirs);
            if (oldLines !== void 0) {
              if (myCount.oldLines === theirCount.oldLines) {
                oldLines += myCount.oldLines;
              } else {
                oldLines = void 0;
              }
            }
            if (newLines !== void 0) {
              if (myCount.newLines === theirCount.newLines) {
                newLines += myCount.newLines;
              } else {
                newLines = void 0;
              }
            }
          } else {
            if (newLines !== void 0 && (line[0] === "+" || line[0] === " ")) {
              newLines++;
            }
            if (oldLines !== void 0 && (line[0] === "-" || line[0] === " ")) {
              oldLines++;
            }
          }
        });
        return {
          oldLines,
          newLines
        };
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/convert/dmp.js
  var require_dmp = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/convert/dmp.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.convertChangesToDMP = convertChangesToDMP;
      function convertChangesToDMP(changes) {
        var ret = [], change, operation;
        for (var i = 0; i < changes.length; i++) {
          change = changes[i];
          if (change.added) {
            operation = 1;
          } else if (change.removed) {
            operation = -1;
          } else {
            operation = 0;
          }
          ret.push([operation, change.value]);
        }
        return ret;
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/convert/xml.js
  var require_xml = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/convert/xml.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.convertChangesToXML = convertChangesToXML;
      function convertChangesToXML(changes) {
        var ret = [];
        for (var i = 0; i < changes.length; i++) {
          var change = changes[i];
          if (change.added) {
            ret.push("<ins>");
          } else if (change.removed) {
            ret.push("<del>");
          }
          ret.push(escapeHTML(change.value));
          if (change.added) {
            ret.push("</ins>");
          } else if (change.removed) {
            ret.push("</del>");
          }
        }
        return ret.join("");
      }
      function escapeHTML(s) {
        var n = s;
        n = n.replace(/&/g, "&amp;");
        n = n.replace(/</g, "&lt;");
        n = n.replace(/>/g, "&gt;");
        n = n.replace(/"/g, "&quot;");
        return n;
      }
    }
  });

  // ../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/index.js
  var require_lib = __commonJS({
    "../../node_modules/.pnpm/diff@5.1.0/node_modules/diff/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "Diff", {
        enumerable: true,
        get: function get() {
          return _base["default"];
        }
      });
      Object.defineProperty(exports, "diffChars", {
        enumerable: true,
        get: function get() {
          return _character.diffChars;
        }
      });
      Object.defineProperty(exports, "diffWords", {
        enumerable: true,
        get: function get() {
          return _word.diffWords;
        }
      });
      Object.defineProperty(exports, "diffWordsWithSpace", {
        enumerable: true,
        get: function get() {
          return _word.diffWordsWithSpace;
        }
      });
      Object.defineProperty(exports, "diffLines", {
        enumerable: true,
        get: function get() {
          return _line.diffLines;
        }
      });
      Object.defineProperty(exports, "diffTrimmedLines", {
        enumerable: true,
        get: function get() {
          return _line.diffTrimmedLines;
        }
      });
      Object.defineProperty(exports, "diffSentences", {
        enumerable: true,
        get: function get() {
          return _sentence.diffSentences;
        }
      });
      Object.defineProperty(exports, "diffCss", {
        enumerable: true,
        get: function get() {
          return _css.diffCss;
        }
      });
      Object.defineProperty(exports, "diffJson", {
        enumerable: true,
        get: function get() {
          return _json.diffJson;
        }
      });
      Object.defineProperty(exports, "canonicalize", {
        enumerable: true,
        get: function get() {
          return _json.canonicalize;
        }
      });
      Object.defineProperty(exports, "diffArrays", {
        enumerable: true,
        get: function get() {
          return _array.diffArrays;
        }
      });
      Object.defineProperty(exports, "applyPatch", {
        enumerable: true,
        get: function get() {
          return _apply.applyPatch;
        }
      });
      Object.defineProperty(exports, "applyPatches", {
        enumerable: true,
        get: function get() {
          return _apply.applyPatches;
        }
      });
      Object.defineProperty(exports, "parsePatch", {
        enumerable: true,
        get: function get() {
          return _parse.parsePatch;
        }
      });
      Object.defineProperty(exports, "merge", {
        enumerable: true,
        get: function get() {
          return _merge.merge;
        }
      });
      Object.defineProperty(exports, "structuredPatch", {
        enumerable: true,
        get: function get() {
          return _create.structuredPatch;
        }
      });
      Object.defineProperty(exports, "createTwoFilesPatch", {
        enumerable: true,
        get: function get() {
          return _create.createTwoFilesPatch;
        }
      });
      Object.defineProperty(exports, "createPatch", {
        enumerable: true,
        get: function get() {
          return _create.createPatch;
        }
      });
      Object.defineProperty(exports, "convertChangesToDMP", {
        enumerable: true,
        get: function get() {
          return _dmp.convertChangesToDMP;
        }
      });
      Object.defineProperty(exports, "convertChangesToXML", {
        enumerable: true,
        get: function get() {
          return _xml.convertChangesToXML;
        }
      });
      var _base = _interopRequireDefault(require_base());
      var _character = require_character();
      var _word = require_word();
      var _line = require_line();
      var _sentence = require_sentence();
      var _css = require_css();
      var _json = require_json();
      var _array = require_array();
      var _apply = require_apply();
      var _parse = require_parse();
      var _merge = require_merge();
      var _create = require_create();
      var _dmp = require_dmp();
      var _xml = require_xml();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
    }
  });

  // ../../node_modules/.pnpm/react-diff-viewer-continued@3.2.5_react-dom@18.2.0_react@18.2.0/node_modules/react-diff-viewer-continued/lib/compute-lines.js
  var require_compute_lines = __commonJS({
    "../../node_modules/.pnpm/react-diff-viewer-continued@3.2.5_react-dom@18.2.0_react@18.2.0/node_modules/react-diff-viewer-continued/lib/compute-lines.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.computeLineInformation = exports.DiffMethod = exports.DiffType = void 0;
      var diff = require_lib();
      var jsDiff = diff;
      var DiffType;
      (function(DiffType2) {
        DiffType2[DiffType2["DEFAULT"] = 0] = "DEFAULT";
        DiffType2[DiffType2["ADDED"] = 1] = "ADDED";
        DiffType2[DiffType2["REMOVED"] = 2] = "REMOVED";
        DiffType2[DiffType2["CHANGED"] = 3] = "CHANGED";
      })(DiffType = exports.DiffType || (exports.DiffType = {}));
      var DiffMethod2;
      (function(DiffMethod3) {
        DiffMethod3["CHARS"] = "diffChars";
        DiffMethod3["WORDS"] = "diffWords";
        DiffMethod3["WORDS_WITH_SPACE"] = "diffWordsWithSpace";
        DiffMethod3["LINES"] = "diffLines";
        DiffMethod3["TRIMMED_LINES"] = "diffTrimmedLines";
        DiffMethod3["SENTENCES"] = "diffSentences";
        DiffMethod3["CSS"] = "diffCss";
        DiffMethod3["JSON"] = "diffJson";
      })(DiffMethod2 = exports.DiffMethod || (exports.DiffMethod = {}));
      var constructLines = (value) => {
        if (value === "")
          return [];
        const lines = value.replace(/\n$/, "").split("\n");
        return lines;
      };
      var computeDiff = (oldValue, newValue, compareMethod = DiffMethod2.CHARS) => {
        const diffArray = jsDiff[compareMethod](oldValue, newValue);
        const computedDiff = {
          left: [],
          right: []
        };
        diffArray.forEach(({ added, removed, value }) => {
          const diffInformation = {};
          if (added) {
            diffInformation.type = DiffType.ADDED;
            diffInformation.value = value;
            computedDiff.right.push(diffInformation);
          }
          if (removed) {
            diffInformation.type = DiffType.REMOVED;
            diffInformation.value = value;
            computedDiff.left.push(diffInformation);
          }
          if (!removed && !added) {
            diffInformation.type = DiffType.DEFAULT;
            diffInformation.value = value;
            computedDiff.right.push(diffInformation);
            computedDiff.left.push(diffInformation);
          }
          return diffInformation;
        });
        return computedDiff;
      };
      var computeLineInformation = (oldString, newString, disableWordDiff = false, lineCompareMethod = DiffMethod2.CHARS, linesOffset = 0) => {
        let diffArray = [];
        if (typeof oldString === "string" && typeof newString === "string") {
          diffArray = diff.diffLines(oldString.trimRight(), newString.trimRight(), {
            newlineIsToken: false,
            ignoreWhitespace: false,
            ignoreCase: false
          });
        } else {
          diffArray = diff.diffJson(oldString, newString);
        }
        let rightLineNumber = linesOffset;
        let leftLineNumber = linesOffset;
        let lineInformation = [];
        let counter = 0;
        const diffLines = [];
        const ignoreDiffIndexes = [];
        const getLineInformation = (value, diffIndex, added, removed, evaluateOnlyFirstLine) => {
          const lines = constructLines(value);
          return lines.map((line, lineIndex) => {
            const left = {};
            const right = {};
            if (ignoreDiffIndexes.includes(`${diffIndex}-${lineIndex}`) || evaluateOnlyFirstLine && lineIndex !== 0) {
              return void 0;
            }
            if (added || removed) {
              let countAsChange = true;
              if (removed) {
                leftLineNumber += 1;
                left.lineNumber = leftLineNumber;
                left.type = DiffType.REMOVED;
                left.value = line || " ";
                const nextDiff = diffArray[diffIndex + 1];
                if (nextDiff && nextDiff.added) {
                  const nextDiffLines = constructLines(nextDiff.value)[lineIndex];
                  if (nextDiffLines) {
                    const nextDiffLineInfo = getLineInformation(nextDiffLines, diffIndex, true, false, true);
                    const { value: rightValue, lineNumber, type } = nextDiffLineInfo[0].right;
                    ignoreDiffIndexes.push(`${diffIndex + 1}-${lineIndex}`);
                    right.lineNumber = lineNumber;
                    if (left.value === rightValue) {
                      countAsChange = false;
                      right.type = 0;
                      left.type = 0;
                      right.value = rightValue;
                    } else {
                      right.type = type;
                      if (disableWordDiff) {
                        right.value = rightValue;
                      } else {
                        const computedDiff = computeDiff(line, rightValue, lineCompareMethod);
                        right.value = computedDiff.right;
                        left.value = computedDiff.left;
                      }
                    }
                  }
                }
              } else {
                rightLineNumber += 1;
                right.lineNumber = rightLineNumber;
                right.type = DiffType.ADDED;
                right.value = line;
              }
              if (countAsChange && !evaluateOnlyFirstLine) {
                if (!diffLines.includes(counter)) {
                  diffLines.push(counter);
                }
              }
            } else {
              leftLineNumber += 1;
              rightLineNumber += 1;
              left.lineNumber = leftLineNumber;
              left.type = DiffType.DEFAULT;
              left.value = line;
              right.lineNumber = rightLineNumber;
              right.type = DiffType.DEFAULT;
              right.value = line;
            }
            if (!evaluateOnlyFirstLine) {
              counter += 1;
            }
            return { right, left };
          }).filter(Boolean);
        };
        diffArray.forEach(({ added, removed, value }, index2) => {
          lineInformation = [
            ...lineInformation,
            ...getLineInformation(value, index2, added, removed)
          ];
        });
        return {
          lineInformation,
          diffLines
        };
      };
      exports.computeLineInformation = computeLineInformation;
    }
  });

  // ../../node_modules/.pnpm/@emotion+sheet@0.9.4/node_modules/@emotion/sheet/dist/sheet.browser.cjs.js
  var require_sheet_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/@emotion+sheet@0.9.4/node_modules/@emotion/sheet/dist/sheet.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function sheetForTag(tag) {
        if (tag.sheet) {
          return tag.sheet;
        }
        for (var i = 0; i < document.styleSheets.length; i++) {
          if (document.styleSheets[i].ownerNode === tag) {
            return document.styleSheets[i];
          }
        }
      }
      function createStyleElement(options) {
        var tag = document.createElement("style");
        tag.setAttribute("data-emotion", options.key);
        if (options.nonce !== void 0) {
          tag.setAttribute("nonce", options.nonce);
        }
        tag.appendChild(document.createTextNode(""));
        return tag;
      }
      var StyleSheet = /* @__PURE__ */ function() {
        function StyleSheet2(options) {
          this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
          this.tags = [];
          this.ctr = 0;
          this.nonce = options.nonce;
          this.key = options.key;
          this.container = options.container;
          this.before = null;
        }
        var _proto = StyleSheet2.prototype;
        _proto.insert = function insert(rule) {
          if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
            var _tag = createStyleElement(this);
            var before;
            if (this.tags.length === 0) {
              before = this.before;
            } else {
              before = this.tags[this.tags.length - 1].nextSibling;
            }
            this.container.insertBefore(_tag, before);
            this.tags.push(_tag);
          }
          var tag = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var sheet = sheetForTag(tag);
            try {
              var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64;
              sheet.insertRule(
                rule,
                isImportRule ? 0 : sheet.cssRules.length
              );
            } catch (e) {
              if (false) {
                console.warn('There was a problem inserting the following rule: "' + rule + '"', e);
              }
            }
          } else {
            tag.appendChild(document.createTextNode(rule));
          }
          this.ctr++;
        };
        _proto.flush = function flush() {
          this.tags.forEach(function(tag) {
            return tag.parentNode.removeChild(tag);
          });
          this.tags = [];
          this.ctr = 0;
        };
        return StyleSheet2;
      }();
      exports.StyleSheet = StyleSheet;
    }
  });

  // ../../node_modules/.pnpm/@emotion+stylis@0.8.5/node_modules/@emotion/stylis/dist/stylis.browser.cjs.js
  var require_stylis_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/@emotion+stylis@0.8.5/node_modules/@emotion/stylis/dist/stylis.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function stylis_min(W) {
        function M(d, c, e, h, a) {
          for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u2 = k = q = 0, l = 0, r = 0, I = 0, t = 0, B2 = e.length, J = B2 - 1, y, f = "", p = "", F2 = "", G2 = "", C; l < B2; ) {
            g = e.charCodeAt(l);
            l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B2++, J++);
            if (0 === b + n + v + m) {
              if (l === J && (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)) {
                switch (g) {
                  case 32:
                  case 9:
                  case 59:
                  case 13:
                  case 10:
                    break;
                  default:
                    f += e.charAt(l);
                }
                g = 59;
              }
              switch (g) {
                case 123:
                  f = f.trim();
                  q = f.charCodeAt(0);
                  k = 1;
                  for (t = ++l; l < B2; ) {
                    switch (g = e.charCodeAt(l)) {
                      case 123:
                        k++;
                        break;
                      case 125:
                        k--;
                        break;
                      case 47:
                        switch (g = e.charCodeAt(l + 1)) {
                          case 42:
                          case 47:
                            a: {
                              for (u2 = l + 1; u2 < J; ++u2) {
                                switch (e.charCodeAt(u2)) {
                                  case 47:
                                    if (42 === g && 42 === e.charCodeAt(u2 - 1) && l + 2 !== u2) {
                                      l = u2 + 1;
                                      break a;
                                    }
                                    break;
                                  case 10:
                                    if (47 === g) {
                                      l = u2 + 1;
                                      break a;
                                    }
                                }
                              }
                              l = u2;
                            }
                        }
                        break;
                      case 91:
                        g++;
                      case 40:
                        g++;
                      case 34:
                      case 39:
                        for (; l++ < J && e.charCodeAt(l) !== g; ) {
                        }
                    }
                    if (0 === k)
                      break;
                    l++;
                  }
                  k = e.substring(t, l);
                  0 === q && (q = (f = f.replace(ca, "").trim()).charCodeAt(0));
                  switch (q) {
                    case 64:
                      0 < r && (f = f.replace(N, ""));
                      g = f.charCodeAt(1);
                      switch (g) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          r = c;
                          break;
                        default:
                          r = O;
                      }
                      k = M(c, r, k, g, a + 1);
                      t = k.length;
                      0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(""), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ""));
                      if (0 < t)
                        switch (g) {
                          case 115:
                            f = f.replace(da, ea);
                          case 100:
                          case 109:
                          case 45:
                            k = f + "{" + k + "}";
                            break;
                          case 107:
                            f = f.replace(fa, "$1 $2");
                            k = f + "{" + k + "}";
                            k = 1 === w || 2 === w && L("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                            break;
                          default:
                            k = f + k, 112 === h && (k = (p += k, ""));
                        }
                      else
                        k = "";
                      break;
                    default:
                      k = M(c, X(c, f, I), k, h, a + 1);
                  }
                  F2 += k;
                  k = I = r = u2 = q = 0;
                  f = "";
                  g = e.charCodeAt(++l);
                  break;
                case 125:
                case 59:
                  f = (0 < r ? f.replace(N, "") : f).trim();
                  if (1 < (t = f.length))
                    switch (0 === u2 && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(" ", ":")).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = "\0\0"), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
                      case 0:
                        break;
                      case 64:
                        if (105 === g || 99 === g) {
                          G2 += f + e.charAt(l);
                          break;
                        }
                      default:
                        58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                    }
                  I = r = u2 = q = 0;
                  f = "";
                  g = e.charCodeAt(++l);
              }
            }
            switch (g) {
              case 13:
              case 10:
                47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += "\0");
                0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
                z = 1;
                D++;
                break;
              case 59:
              case 125:
                if (0 === b + n + v + m) {
                  z++;
                  break;
                }
              default:
                z++;
                y = e.charAt(l);
                switch (g) {
                  case 9:
                  case 32:
                    if (0 === n + m + b)
                      switch (x) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                          y = "";
                          break;
                        default:
                          32 !== g && (y = " ");
                      }
                    break;
                  case 0:
                    y = "\\0";
                    break;
                  case 12:
                    y = "\\f";
                    break;
                  case 11:
                    y = "\\v";
                    break;
                  case 38:
                    0 === n + b + m && (r = I = 1, y = "\f" + y);
                    break;
                  case 108:
                    if (0 === n + b + m + E && 0 < u2)
                      switch (l - u2) {
                        case 2:
                          112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                        case 8:
                          111 === K && (E = K);
                      }
                    break;
                  case 58:
                    0 === n + b + m && (u2 = l);
                    break;
                  case 44:
                    0 === b + v + n + m && (r = 1, y += "\r");
                    break;
                  case 34:
                  case 39:
                    0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                    break;
                  case 91:
                    0 === n + b + v && m++;
                    break;
                  case 93:
                    0 === n + b + v && m--;
                    break;
                  case 41:
                    0 === n + b + m && v--;
                    break;
                  case 40:
                    if (0 === n + b + m) {
                      if (0 === q)
                        switch (2 * x + 3 * K) {
                          case 533:
                            break;
                          default:
                            q = 1;
                        }
                      v++;
                    }
                    break;
                  case 64:
                    0 === b + v + n + m + u2 + k && (k = 1);
                    break;
                  case 42:
                  case 47:
                    if (!(0 < n + m + v))
                      switch (b) {
                        case 0:
                          switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                            case 235:
                              b = 47;
                              break;
                            case 220:
                              t = l, b = 42;
                          }
                          break;
                        case 42:
                          47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = "", b = 0);
                      }
                }
                0 === b && (f += y);
            }
            K = x;
            x = g;
            l++;
          }
          t = p.length;
          if (0 < t) {
            r = c;
            if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length))
              return G2 + p + F2;
            p = r.join(",") + "{" + p + "}";
            if (0 !== w * E) {
              2 !== w || L(p, 2) || (E = 0);
              switch (E) {
                case 111:
                  p = p.replace(ha, ":-moz-$1") + p;
                  break;
                case 112:
                  p = p.replace(Q, "::-webkit-input-$1") + p.replace(Q, "::-moz-$1") + p.replace(Q, ":-ms-input-$1") + p;
              }
              E = 0;
            }
          }
          return G2 + p + F2;
        }
        function X(d, c, e) {
          var h = c.trim().split(ia);
          c = h;
          var a = h.length, m = d.length;
          switch (m) {
            case 0:
            case 1:
              var b = 0;
              for (d = 0 === m ? "" : d[0] + " "; b < a; ++b) {
                c[b] = Z(d, c[b], e).trim();
              }
              break;
            default:
              var v = b = 0;
              for (c = []; b < a; ++b) {
                for (var n = 0; n < m; ++n) {
                  c[v++] = Z(d[n] + " ", h[b], e).trim();
                }
              }
          }
          return c;
        }
        function Z(d, c, e) {
          var h = c.charCodeAt(0);
          33 > h && (h = (c = c.trim()).charCodeAt(0));
          switch (h) {
            case 38:
              return c.replace(F, "$1" + d.trim());
            case 58:
              return d.trim() + c.replace(F, "$1" + d.trim());
            default:
              if (0 < 1 * e && 0 < c.indexOf("\f"))
                return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
          }
          return d + c;
        }
        function P(d, c, e, h) {
          var a = d + ";", m = 2 * c + 3 * e + 4 * h;
          if (944 === m) {
            d = a.indexOf(":", 9) + 1;
            var b = a.substring(d, a.length - 1).trim();
            b = a.substring(0, d).trim() + b + ";";
            return 1 === w || 2 === w && L(b, 1) ? "-webkit-" + b + b : b;
          }
          if (0 === w || 2 === w && !L(a, 1))
            return a;
          switch (m) {
            case 1015:
              return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
            case 951:
              return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
            case 963:
              return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
            case 1009:
              if (100 !== a.charCodeAt(4))
                break;
            case 969:
            case 942:
              return "-webkit-" + a + a;
            case 978:
              return "-webkit-" + a + "-moz-" + a + a;
            case 1019:
            case 983:
              return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
            case 883:
              if (45 === a.charCodeAt(8))
                return "-webkit-" + a + a;
              if (0 < a.indexOf("image-set(", 11))
                return a.replace(ja, "$1-webkit-$2") + a;
              break;
            case 932:
              if (45 === a.charCodeAt(4))
                switch (a.charCodeAt(5)) {
                  case 103:
                    return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                  case 115:
                    return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                  case 98:
                    return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
                }
              return "-webkit-" + a + "-ms-" + a + a;
            case 964:
              return "-webkit-" + a + "-ms-flex-" + a + a;
            case 1023:
              if (99 !== a.charCodeAt(8))
                break;
              b = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
              return "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a;
            case 1005:
              return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;
            case 1e3:
              b = a.substring(13).trim();
              c = b.indexOf("-") + 1;
              switch (b.charCodeAt(0) + b.charCodeAt(c)) {
                case 226:
                  b = a.replace(G, "tb");
                  break;
                case 232:
                  b = a.replace(G, "tb-rl");
                  break;
                case 220:
                  b = a.replace(G, "lr");
                  break;
                default:
                  return a;
              }
              return "-webkit-" + a + "-ms-" + b + a;
            case 1017:
              if (-1 === a.indexOf("sticky", 9))
                break;
            case 975:
              c = (a = d).length - 10;
              b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();
              switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
                case 203:
                  if (111 > b.charCodeAt(8))
                    break;
                case 115:
                  a = a.replace(b, "-webkit-" + b) + ";" + a;
                  break;
                case 207:
                case 102:
                  a = a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a.replace(b, "-webkit-" + b) + ";" + a.replace(b, "-ms-" + b + "box") + ";" + a;
              }
              return a + ";";
            case 938:
              if (45 === a.charCodeAt(5))
                switch (a.charCodeAt(6)) {
                  case 105:
                    return b = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a;
                  case 115:
                    return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;
                  default:
                    return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
                }
              break;
            case 973:
            case 989:
              if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
                break;
            case 931:
            case 953:
              if (true === la.test(d))
                return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0) ? P(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch") : a.replace(b, "-webkit-" + b) + a.replace(b, "-moz-" + b.replace("fill-", "")) + a;
              break;
            case 962:
              if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
                return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
          }
          return a;
        }
        function L(d, c) {
          var e = d.indexOf(1 === c ? ":" : "{"), h = d.substring(0, 3 !== c ? e : 10);
          e = d.substring(e + 1, d.length - 1);
          return R(2 !== c ? h : h.replace(na, "$1"), e, c);
        }
        function ea(d, c) {
          var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
          return e !== c + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
        }
        function H(d, c, e, h, a, m, b, v, n, q) {
          for (var g = 0, x = c, w2; g < A; ++g) {
            switch (w2 = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
              case void 0:
              case false:
              case true:
              case null:
                break;
              default:
                x = w2;
            }
          }
          if (x !== c)
            return x;
        }
        function T(d) {
          switch (d) {
            case void 0:
            case null:
              A = S.length = 0;
              break;
            default:
              if ("function" === typeof d)
                S[A++] = d;
              else if ("object" === typeof d)
                for (var c = 0, e = d.length; c < e; ++c) {
                  T(d[c]);
                }
              else
                Y = !!d | 0;
          }
          return T;
        }
        function U(d) {
          d = d.prefix;
          void 0 !== d && (R = null, d ? "function" !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
          return U;
        }
        function B(d, c) {
          var e = d;
          33 > e.charCodeAt(0) && (e = e.trim());
          V = e;
          e = [V];
          if (0 < A) {
            var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
            void 0 !== h && "string" === typeof h && (c = h);
          }
          var a = M(O, e, c, 0, 0);
          0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
          V = "";
          E = 0;
          z = D = 1;
          return a;
        }
        var ca = /^\0+/g, N = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q = /::(place)/g, ha = /:(read-only)/g, G = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z = 1, D = 1, E = 0, w = 1, O = [], S = [], A = 0, R = null, Y = 0, V = "";
        B.use = T;
        B.set = U;
        void 0 !== W && U(W);
        return B;
      }
      exports.default = stylis_min;
    }
  });

  // ../../node_modules/.pnpm/@emotion+weak-memoize@0.2.5/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.cjs.js
  var require_weak_memoize_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/@emotion+weak-memoize@0.2.5/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var weakMemoize = function weakMemoize2(func) {
        var cache = /* @__PURE__ */ new WeakMap();
        return function(arg) {
          if (cache.has(arg)) {
            return cache.get(arg);
          }
          var ret = func(arg);
          cache.set(arg, ret);
          return ret;
        };
      };
      exports.default = weakMemoize;
    }
  });

  // ../../node_modules/.pnpm/@emotion+cache@10.0.29/node_modules/@emotion/cache/dist/cache.browser.cjs.js
  var require_cache_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/@emotion+cache@10.0.29/node_modules/@emotion/cache/dist/cache.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _interopDefault(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var sheet = require_sheet_browser_cjs();
      var Stylis = _interopDefault(require_stylis_browser_cjs());
      require_weak_memoize_browser_cjs();
      var delimiter = "/*|*/";
      var needle = delimiter + "}";
      function toSheet(block) {
        if (block) {
          Sheet.current.insert(block + "}");
        }
      }
      var Sheet = {
        current: null
      };
      var ruleSheet = function ruleSheet2(context, content3, selectors, parents, line, column, length, ns, depth, at) {
        switch (context) {
          case 1: {
            switch (content3.charCodeAt(0)) {
              case 64: {
                Sheet.current.insert(content3 + ";");
                return "";
              }
              case 108: {
                if (content3.charCodeAt(2) === 98) {
                  return "";
                }
              }
            }
            break;
          }
          case 2: {
            if (ns === 0)
              return content3 + delimiter;
            break;
          }
          case 3: {
            switch (ns) {
              case 102:
              case 112: {
                Sheet.current.insert(selectors[0] + content3);
                return "";
              }
              default: {
                return content3 + (at === 0 ? delimiter : "");
              }
            }
          }
          case -2: {
            content3.split(needle).forEach(toSheet);
          }
        }
      };
      var createCache = function createCache2(options) {
        if (options === void 0)
          options = {};
        var key = options.key || "css";
        var stylisOptions;
        if (options.prefix !== void 0) {
          stylisOptions = {
            prefix: options.prefix
          };
        }
        var stylis = new Stylis(stylisOptions);
        if (false) {
          if (/[^a-z-]/.test(key)) {
            throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
          }
        }
        var inserted = {};
        var container;
        {
          container = options.container || document.head;
          var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
          Array.prototype.forEach.call(nodes, function(node2) {
            var attrib = node2.getAttribute("data-emotion-" + key);
            attrib.split(" ").forEach(function(id) {
              inserted[id] = true;
            });
            if (node2.parentNode !== container) {
              container.appendChild(node2);
            }
          });
        }
        var _insert;
        {
          stylis.use(options.stylisPlugins)(ruleSheet);
          _insert = function insert(selector, serialized, sheet2, shouldCache) {
            var name = serialized.name;
            Sheet.current = sheet2;
            if (false) {
              var map = serialized.map;
              Sheet.current = {
                insert: function insert2(rule) {
                  sheet2.insert(rule + map);
                }
              };
            }
            stylis(selector, serialized.styles);
            if (shouldCache) {
              cache.inserted[name] = true;
            }
          };
        }
        if (false) {
          var commentStart = /\/\*/g;
          var commentEnd = /\*\//g;
          stylis.use(function(context, content3) {
            switch (context) {
              case -1: {
                while (commentStart.test(content3)) {
                  commentEnd.lastIndex = commentStart.lastIndex;
                  if (commentEnd.test(content3)) {
                    commentStart.lastIndex = commentEnd.lastIndex;
                    continue;
                  }
                  throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
                }
                commentStart.lastIndex = 0;
                break;
              }
            }
          });
          stylis.use(function(context, content3, selectors) {
            switch (context) {
              case -1: {
                var flag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
                var unsafePseudoClasses = content3.match(/(:first|:nth|:nth-last)-child/g);
                if (unsafePseudoClasses && cache.compat !== true) {
                  unsafePseudoClasses.forEach(function(unsafePseudoClass) {
                    var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                    var ignore2 = ignoreRegExp.test(content3);
                    if (unsafePseudoClass && !ignore2) {
                      console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
                    }
                  });
                }
                break;
              }
            }
          });
        }
        var cache = {
          key,
          sheet: new sheet.StyleSheet({
            key,
            container,
            nonce: options.nonce,
            speedy: options.speedy
          }),
          nonce: options.nonce,
          inserted,
          registered: {},
          insert: _insert
        };
        return cache;
      };
      exports.default = createCache;
    }
  });

  // ../../node_modules/.pnpm/@emotion+hash@0.8.0/node_modules/@emotion/hash/dist/hash.browser.cjs.js
  var require_hash_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/@emotion+hash@0.8.0/node_modules/@emotion/hash/dist/hash.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function murmur2(str) {
        var h = 0;
        var k, i = 0, len = str.length;
        for (; len >= 4; ++i, len -= 4) {
          k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
          k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
          k ^= k >>> 24;
          h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
        }
        switch (len) {
          case 3:
            h ^= (str.charCodeAt(i + 2) & 255) << 16;
          case 2:
            h ^= (str.charCodeAt(i + 1) & 255) << 8;
          case 1:
            h ^= str.charCodeAt(i) & 255;
            h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
        }
        h ^= h >>> 13;
        h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
        return ((h ^ h >>> 15) >>> 0).toString(36);
      }
      exports.default = murmur2;
    }
  });

  // ../../node_modules/.pnpm/@emotion+unitless@0.7.5/node_modules/@emotion/unitless/dist/unitless.browser.cjs.js
  var require_unitless_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/@emotion+unitless@0.7.5/node_modules/@emotion/unitless/dist/unitless.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var unitlessKeys = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
      exports.default = unitlessKeys;
    }
  });

  // ../../node_modules/.pnpm/@emotion+memoize@0.7.4/node_modules/@emotion/memoize/dist/memoize.browser.cjs.js
  var require_memoize_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/@emotion+memoize@0.7.4/node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function memoize(fn) {
        var cache = {};
        return function(arg) {
          if (cache[arg] === void 0)
            cache[arg] = fn(arg);
          return cache[arg];
        };
      }
      exports.default = memoize;
    }
  });

  // ../../node_modules/.pnpm/@emotion+serialize@0.11.16/node_modules/@emotion/serialize/dist/serialize.browser.cjs.js
  var require_serialize_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/@emotion+serialize@0.11.16/node_modules/@emotion/serialize/dist/serialize.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _interopDefault(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var hashString = _interopDefault(require_hash_browser_cjs());
      var unitless = _interopDefault(require_unitless_browser_cjs());
      var memoize = _interopDefault(require_memoize_browser_cjs());
      var hyphenateRegex = /[A-Z]|^ms/g;
      var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
      var isCustomProperty = function isCustomProperty2(property) {
        return property.charCodeAt(1) === 45;
      };
      var isProcessableValue = function isProcessableValue2(value) {
        return value != null && typeof value !== "boolean";
      };
      var processStyleName = memoize(function(styleName) {
        return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
      });
      var processStyleValue = function processStyleValue2(key, value) {
        switch (key) {
          case "animation":
          case "animationName": {
            if (typeof value === "string") {
              return value.replace(animationRegex, function(match, p1, p2) {
                cursor = {
                  name: p1,
                  styles: p2,
                  next: cursor
                };
                return p1;
              });
            }
          }
        }
        if (unitless[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
          return value + "px";
        }
        return value;
      };
      if (false) {
        contentValuePattern = /(attr|calc|counters?|url)\(/;
        contentValues = ["normal", "none", "counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote", "initial", "inherit", "unset"];
        oldProcessStyleValue = processStyleValue;
        msPattern = /^-ms-/;
        hyphenPattern = /-(.)/g;
        hyphenatedCache = {};
        processStyleValue = function processStyleValue2(key, value) {
          if (key === "content") {
            if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
              console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
            }
          }
          var processed = oldProcessStyleValue(key, value);
          if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
            hyphenatedCache[key] = true;
            console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
              return _char.toUpperCase();
            }) + "?");
          }
          return processed;
        };
      }
      var contentValuePattern;
      var contentValues;
      var oldProcessStyleValue;
      var msPattern;
      var hyphenPattern;
      var hyphenatedCache;
      function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
        if (interpolation == null) {
          return "";
        }
        if (interpolation.__emotion_styles !== void 0) {
          if (false) {
            throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
          }
          return interpolation;
        }
        switch (typeof interpolation) {
          case "boolean": {
            return "";
          }
          case "object": {
            if (interpolation.anim === 1) {
              cursor = {
                name: interpolation.name,
                styles: interpolation.styles,
                next: cursor
              };
              return interpolation.name;
            }
            if (interpolation.styles !== void 0) {
              var next = interpolation.next;
              if (next !== void 0) {
                while (next !== void 0) {
                  cursor = {
                    name: next.name,
                    styles: next.styles,
                    next: cursor
                  };
                  next = next.next;
                }
              }
              var styles = interpolation.styles + ";";
              if (false) {
                styles += interpolation.map;
              }
              return styles;
            }
            return createStringFromObject(mergedProps, registered, interpolation);
          }
          case "function": {
            if (mergedProps !== void 0) {
              var previousCursor = cursor;
              var result = interpolation(mergedProps);
              cursor = previousCursor;
              return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
            } else if (false) {
              console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
            }
            break;
          }
          case "string":
            if (false) {
              var matched = [];
              var replaced = interpolation.replace(animationRegex, function(match, p1, p2) {
                var fakeVarName = "animation" + matched.length;
                matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
                return "${" + fakeVarName + "}";
              });
              if (matched.length) {
                console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
              }
            }
            break;
        }
        if (registered == null) {
          return interpolation;
        }
        var cached = registered[interpolation];
        if (false) {
          console.error("Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion");
          shouldWarnAboutInterpolatingClassNameFromCss = false;
        }
        return cached !== void 0 && !couldBeSelectorInterpolation ? cached : interpolation;
      }
      function createStringFromObject(mergedProps, registered, obj) {
        var string3 = "";
        if (Array.isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            string3 += handleInterpolation(mergedProps, registered, obj[i], false);
          }
        } else {
          for (var _key in obj) {
            var value = obj[_key];
            if (typeof value !== "object") {
              if (registered != null && registered[value] !== void 0) {
                string3 += _key + "{" + registered[value] + "}";
              } else if (isProcessableValue(value)) {
                string3 += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
              }
            } else {
              if (_key === "NO_COMPONENT_SELECTOR" && false) {
                throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
              }
              if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
                for (var _i = 0; _i < value.length; _i++) {
                  if (isProcessableValue(value[_i])) {
                    string3 += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
                  }
                }
              } else {
                var interpolated = handleInterpolation(mergedProps, registered, value, false);
                switch (_key) {
                  case "animation":
                  case "animationName": {
                    string3 += processStyleName(_key) + ":" + interpolated + ";";
                    break;
                  }
                  default: {
                    if (false) {
                      console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                    }
                    string3 += _key + "{" + interpolated + "}";
                  }
                }
              }
            }
          }
        }
        return string3;
      }
      var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
      if (false) {
        sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
      }
      var cursor;
      var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
        if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
          return args[0];
        }
        var stringMode = true;
        var styles = "";
        cursor = void 0;
        var strings = args[0];
        if (strings == null || strings.raw === void 0) {
          stringMode = false;
          styles += handleInterpolation(mergedProps, registered, strings, false);
        } else {
          if (false) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
          }
          styles += strings[0];
        }
        for (var i = 1; i < args.length; i++) {
          styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);
          if (stringMode) {
            if (false) {
              console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles += strings[i];
          }
        }
        var sourceMap;
        if (false) {
          styles = styles.replace(sourceMapPattern, function(match2) {
            sourceMap = match2;
            return "";
          });
        }
        labelPattern.lastIndex = 0;
        var identifierName = "";
        var match;
        while ((match = labelPattern.exec(styles)) !== null) {
          identifierName += "-" + match[1];
        }
        var name = hashString(styles) + identifierName;
        if (false) {
          return {
            name,
            styles,
            map: sourceMap,
            next: cursor,
            toString: function toString2() {
              return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            }
          };
        }
        return {
          name,
          styles,
          next: cursor
        };
      };
      exports.serializeStyles = serializeStyles;
    }
  });

  // ../../node_modules/.pnpm/@emotion+utils@0.11.3/node_modules/@emotion/utils/dist/utils.browser.cjs.js
  var require_utils_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/@emotion+utils@0.11.3/node_modules/@emotion/utils/dist/utils.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var isBrowser = true;
      function getRegisteredStyles(registered, registeredStyles, classNames) {
        var rawClassName = "";
        classNames.split(" ").forEach(function(className) {
          if (registered[className] !== void 0) {
            registeredStyles.push(registered[className]);
          } else {
            rawClassName += className + " ";
          }
        });
        return rawClassName;
      }
      var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
        var className = cache.key + "-" + serialized.name;
        if ((isStringTag === false || isBrowser === false && cache.compat !== void 0) && cache.registered[className] === void 0) {
          cache.registered[className] = serialized.styles;
        }
        if (cache.inserted[serialized.name] === void 0) {
          var current = serialized;
          do {
            var maybeStyles = cache.insert("." + className, current, cache.sheet, true);
            current = current.next;
          } while (current !== void 0);
        }
      };
      exports.getRegisteredStyles = getRegisteredStyles;
      exports.insertStyles = insertStyles;
    }
  });

  // ../../node_modules/.pnpm/create-emotion@10.0.27/node_modules/create-emotion/dist/create-emotion.browser.cjs.js
  var require_create_emotion_browser_cjs = __commonJS({
    "../../node_modules/.pnpm/create-emotion@10.0.27/node_modules/create-emotion/dist/create-emotion.browser.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _interopDefault(ex) {
        return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
      }
      var createCache = _interopDefault(require_cache_browser_cjs());
      var serialize = require_serialize_browser_cjs();
      var utils = require_utils_browser_cjs();
      function insertWithoutScoping(cache, serialized) {
        if (cache.inserted[serialized.name] === void 0) {
          return cache.insert("", serialized, cache.sheet, true);
        }
      }
      function merge2(registered, css, className) {
        var registeredStyles = [];
        var rawClassName = utils.getRegisteredStyles(registered, registeredStyles, className);
        if (registeredStyles.length < 2) {
          return className;
        }
        return rawClassName + css(registeredStyles);
      }
      var createEmotion = function createEmotion2(options) {
        var cache = createCache(options);
        cache.sheet.speedy = function(value) {
          if (false) {
            throw new Error("speedy must be changed before any rules are inserted");
          }
          this.isSpeedy = value;
        };
        cache.compat = true;
        var css = function css2() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var serialized = serialize.serializeStyles(args, cache.registered, void 0);
          utils.insertStyles(cache, serialized, false);
          return cache.key + "-" + serialized.name;
        };
        var keyframes = function keyframes2() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          var serialized = serialize.serializeStyles(args, cache.registered);
          var animation = "animation-" + serialized.name;
          insertWithoutScoping(cache, {
            name: serialized.name,
            styles: "@keyframes " + animation + "{" + serialized.styles + "}"
          });
          return animation;
        };
        var injectGlobal = function injectGlobal2() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          var serialized = serialize.serializeStyles(args, cache.registered);
          insertWithoutScoping(cache, serialized);
        };
        var cx = function cx2() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return merge2(cache.registered, css, classnames(args));
        };
        return {
          css,
          cx,
          injectGlobal,
          keyframes,
          hydrate: function hydrate(ids) {
            ids.forEach(function(key) {
              cache.inserted[key] = true;
            });
          },
          flush: function flush() {
            cache.registered = {};
            cache.inserted = {};
            cache.sheet.flush();
          },
          sheet: cache.sheet,
          cache,
          getRegisteredStyles: utils.getRegisteredStyles.bind(null, cache.registered),
          merge: merge2.bind(null, cache.registered, css)
        };
      };
      var classnames = function classnames2(args) {
        var cls = "";
        for (var i = 0; i < args.length; i++) {
          var arg = args[i];
          if (arg == null)
            continue;
          var toAdd = void 0;
          switch (typeof arg) {
            case "boolean":
              break;
            case "object": {
              if (Array.isArray(arg)) {
                toAdd = classnames2(arg);
              } else {
                toAdd = "";
                for (var k in arg) {
                  if (arg[k] && k) {
                    toAdd && (toAdd += " ");
                    toAdd += k;
                  }
                }
              }
              break;
            }
            default: {
              toAdd = arg;
            }
          }
          if (toAdd) {
            cls && (cls += " ");
            cls += toAdd;
          }
        }
        return cls;
      };
      exports.default = createEmotion;
    }
  });

  // ../../node_modules/.pnpm/emotion@10.0.27/node_modules/emotion/dist/emotion.cjs.prod.js
  var require_emotion_cjs_prod = __commonJS({
    "../../node_modules/.pnpm/emotion@10.0.27/node_modules/emotion/dist/emotion.cjs.prod.js"(exports) {
      "use strict";
      function _interopDefault(ex) {
        return ex && "object" == typeof ex && "default" in ex ? ex.default : ex;
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createEmotion = _interopDefault(require_create_emotion_browser_cjs());
      var _createEmotion = createEmotion();
      var flush = _createEmotion.flush;
      var hydrate = _createEmotion.hydrate;
      var cx = _createEmotion.cx;
      var merge2 = _createEmotion.merge;
      var getRegisteredStyles = _createEmotion.getRegisteredStyles;
      var injectGlobal = _createEmotion.injectGlobal;
      var keyframes = _createEmotion.keyframes;
      var css = _createEmotion.css;
      var sheet = _createEmotion.sheet;
      var cache = _createEmotion.cache;
      exports.cache = cache, exports.css = css, exports.cx = cx, exports.flush = flush, exports.getRegisteredStyles = getRegisteredStyles, exports.hydrate = hydrate, exports.injectGlobal = injectGlobal, exports.keyframes = keyframes, exports.merge = merge2, exports.sheet = sheet;
    }
  });

  // ../../node_modules/.pnpm/emotion@10.0.27/node_modules/emotion/dist/emotion.cjs.js
  var require_emotion_cjs = __commonJS({
    "../../node_modules/.pnpm/emotion@10.0.27/node_modules/emotion/dist/emotion.cjs.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_emotion_cjs_prod();
      } else {
        module.exports = null;
      }
    }
  });

  // ../../node_modules/.pnpm/react-diff-viewer-continued@3.2.5_react-dom@18.2.0_react@18.2.0/node_modules/react-diff-viewer-continued/lib/styles.js
  var require_styles = __commonJS({
    "../../node_modules/.pnpm/react-diff-viewer-continued@3.2.5_react-dom@18.2.0_react@18.2.0/node_modules/react-diff-viewer-continued/lib/styles.js"(exports) {
      "use strict";
      var __rest = exports && exports.__rest || function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var emotion_1 = require_emotion_cjs();
      exports.default = (styleOverride, useDarkTheme = false) => {
        const { variables: overrideVariables = {} } = styleOverride, styles = __rest(styleOverride, ["variables"]);
        const themeVariables = {
          light: Object.assign({
            diffViewerBackground: "#fff",
            diffViewerColor: "#212529",
            addedBackground: "#e6ffed",
            addedColor: "#24292e",
            removedBackground: "#ffeef0",
            removedColor: "#24292e",
            changedBackground: "#fffbdd",
            wordAddedBackground: "#acf2bd",
            wordRemovedBackground: "#fdb8c0",
            addedGutterBackground: "#cdffd8",
            removedGutterBackground: "#ffdce0",
            gutterBackground: "#f7f7f7",
            gutterBackgroundDark: "#f3f1f1",
            highlightBackground: "#fffbdd",
            highlightGutterBackground: "#fff5b1",
            codeFoldGutterBackground: "#dbedff",
            codeFoldBackground: "#f1f8ff",
            emptyLineBackground: "#fafbfc",
            gutterColor: "#212529",
            addedGutterColor: "#212529",
            removedGutterColor: "#212529",
            codeFoldContentColor: "#212529",
            diffViewerTitleBackground: "#fafbfc",
            diffViewerTitleColor: "#212529",
            diffViewerTitleBorderColor: "#eee"
          }, overrideVariables.light || {}),
          dark: Object.assign({
            diffViewerBackground: "#2e303c",
            diffViewerColor: "#FFF",
            addedBackground: "#044B53",
            addedColor: "white",
            removedBackground: "#632F34",
            removedColor: "white",
            changedBackground: "#3e302c",
            wordAddedBackground: "#055d67",
            wordRemovedBackground: "#7d383f",
            addedGutterBackground: "#034148",
            removedGutterBackground: "#632b30",
            gutterBackground: "#2c2f3a",
            gutterBackgroundDark: "#262933",
            highlightBackground: "#2a3967",
            highlightGutterBackground: "#2d4077",
            codeFoldGutterBackground: "#21232b",
            codeFoldBackground: "#262831",
            emptyLineBackground: "#363946",
            gutterColor: "#666c87",
            addedGutterColor: "#8c8c8c",
            removedGutterColor: "#8c8c8c",
            codeFoldContentColor: "#656a8b",
            diffViewerTitleBackground: "#2f323e",
            diffViewerTitleColor: "#555a7b",
            diffViewerTitleBorderColor: "#353846"
          }, overrideVariables.dark || {})
        };
        const variables = useDarkTheme ? themeVariables.dark : themeVariables.light;
        const content3 = (0, emotion_1.css)({
          width: "100%",
          label: "content"
        });
        const splitView = (0, emotion_1.css)({
          [`.${content3}`]: {
            width: "50%"
          },
          label: "split-view"
        });
        const diffContainer = (0, emotion_1.css)({
          width: "100%",
          background: variables.diffViewerBackground,
          pre: {
            margin: 0,
            whiteSpace: "pre-wrap",
            lineHeight: "25px"
          },
          label: "diff-container",
          borderCollapse: "collapse"
        });
        const codeFoldContent = (0, emotion_1.css)({
          color: variables.codeFoldContentColor,
          label: "code-fold-content"
        });
        const contentText = (0, emotion_1.css)({
          color: variables.diffViewerColor,
          label: "content-text"
        });
        const titleBlock = (0, emotion_1.css)({
          background: variables.diffViewerTitleBackground,
          padding: 10,
          borderBottom: `1px solid ${variables.diffViewerTitleBorderColor}`,
          label: "title-block",
          ":last-child": {
            borderLeft: `1px solid ${variables.diffViewerTitleBorderColor}`
          },
          [`.${contentText}`]: {
            color: variables.diffViewerTitleColor
          }
        });
        const lineNumber = (0, emotion_1.css)({
          color: variables.gutterColor,
          label: "line-number"
        });
        const diffRemoved = (0, emotion_1.css)({
          background: variables.removedBackground,
          color: variables.removedColor,
          pre: {
            color: variables.removedColor
          },
          [`.${lineNumber}`]: {
            color: variables.removedGutterColor
          },
          label: "diff-removed"
        });
        const diffAdded = (0, emotion_1.css)({
          background: variables.addedBackground,
          color: variables.addedColor,
          pre: {
            color: variables.addedColor
          },
          [`.${lineNumber}`]: {
            color: variables.addedGutterColor
          },
          label: "diff-added"
        });
        const diffChanged = (0, emotion_1.css)({
          background: variables.changedBackground,
          [`.${lineNumber}`]: {
            color: variables.gutterColor
          },
          label: "diff-changed"
        });
        const wordDiff = (0, emotion_1.css)({
          padding: 2,
          display: "inline-flex",
          borderRadius: 4,
          wordBreak: "break-all",
          label: "word-diff"
        });
        const wordAdded = (0, emotion_1.css)({
          background: variables.wordAddedBackground,
          label: "word-added"
        });
        const wordRemoved = (0, emotion_1.css)({
          background: variables.wordRemovedBackground,
          label: "word-removed"
        });
        const codeFoldGutter = (0, emotion_1.css)({
          backgroundColor: variables.codeFoldGutterBackground,
          label: "code-fold-gutter"
        });
        const codeFold = (0, emotion_1.css)({
          backgroundColor: variables.codeFoldBackground,
          height: 40,
          fontSize: 14,
          fontWeight: 700,
          label: "code-fold",
          a: {
            textDecoration: "underline !important",
            cursor: "pointer",
            pre: {
              display: "inline"
            }
          }
        });
        const emptyLine = (0, emotion_1.css)({
          backgroundColor: variables.emptyLineBackground,
          label: "empty-line"
        });
        const marker = (0, emotion_1.css)({
          width: 25,
          paddingLeft: 10,
          paddingRight: 10,
          userSelect: "none",
          label: "marker",
          [`&.${diffAdded}`]: {
            pre: {
              color: variables.addedColor
            }
          },
          [`&.${diffRemoved}`]: {
            pre: {
              color: variables.removedColor
            }
          }
        });
        const highlightedLine = (0, emotion_1.css)({
          background: variables.highlightBackground,
          label: "highlighted-line",
          [`.${wordAdded}, .${wordRemoved}`]: {
            backgroundColor: "initial"
          }
        });
        const highlightedGutter = (0, emotion_1.css)({
          label: "highlighted-gutter"
        });
        const gutter = (0, emotion_1.css)({
          userSelect: "none",
          minWidth: 50,
          padding: "0 10px",
          whiteSpace: "nowrap",
          label: "gutter",
          textAlign: "right",
          background: variables.gutterBackground,
          "&:hover": {
            cursor: "pointer",
            background: variables.gutterBackgroundDark,
            pre: {
              opacity: 1
            }
          },
          pre: {
            opacity: 0.5
          },
          [`&.${diffAdded}`]: {
            background: variables.addedGutterBackground
          },
          [`&.${diffRemoved}`]: {
            background: variables.removedGutterBackground
          },
          [`&.${highlightedGutter}`]: {
            background: variables.highlightGutterBackground,
            "&:hover": {
              background: variables.highlightGutterBackground
            }
          }
        });
        const emptyGutter = (0, emotion_1.css)({
          "&:hover": {
            background: variables.gutterBackground,
            cursor: "initial"
          },
          label: "empty-gutter"
        });
        const line = (0, emotion_1.css)({
          verticalAlign: "baseline",
          label: "line"
        });
        const defaultStyles = {
          diffContainer,
          diffRemoved,
          diffAdded,
          diffChanged,
          splitView,
          marker,
          highlightedGutter,
          highlightedLine,
          gutter,
          line,
          wordDiff,
          wordAdded,
          wordRemoved,
          codeFoldGutter,
          codeFold,
          emptyGutter,
          emptyLine,
          lineNumber,
          contentText,
          content: content3,
          codeFoldContent,
          titleBlock
        };
        const computerOverrideStyles = Object.keys(styles).reduce((acc, key) => Object.assign(Object.assign({}, acc), {
          [key]: (0, emotion_1.css)(styles[key])
        }), {});
        return Object.keys(defaultStyles).reduce((acc, key) => Object.assign(Object.assign({}, acc), {
          [key]: computerOverrideStyles[key] ? (0, emotion_1.cx)(defaultStyles[key], computerOverrideStyles[key]) : defaultStyles[key]
        }), {});
      };
    }
  });

  // ../../node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.cjs.js
  var require_memoize_one_cjs = __commonJS({
    "../../node_modules/.pnpm/memoize-one@6.0.0/node_modules/memoize-one/dist/memoize-one.cjs.js"(exports, module) {
      "use strict";
      var safeIsNaN = Number.isNaN || function ponyfill(value) {
        return typeof value === "number" && value !== value;
      };
      function isEqual(first, second) {
        if (first === second) {
          return true;
        }
        if (safeIsNaN(first) && safeIsNaN(second)) {
          return true;
        }
        return false;
      }
      function areInputsEqual(newInputs, lastInputs) {
        if (newInputs.length !== lastInputs.length) {
          return false;
        }
        for (var i = 0; i < newInputs.length; i++) {
          if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
          }
        }
        return true;
      }
      function memoizeOne(resultFn, isEqual2) {
        if (isEqual2 === void 0) {
          isEqual2 = areInputsEqual;
        }
        var cache = null;
        function memoized() {
          var newArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
          }
          if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
            return cache.lastResult;
          }
          var lastResult = resultFn.apply(this, newArgs);
          cache = {
            lastResult,
            lastArgs: newArgs,
            lastThis: this
          };
          return lastResult;
        }
        memoized.clear = function clear() {
          cache = null;
        };
        return memoized;
      }
      module.exports = memoizeOne;
    }
  });

  // ../../node_modules/.pnpm/react-diff-viewer-continued@3.2.5_react-dom@18.2.0_react@18.2.0/node_modules/react-diff-viewer-continued/lib/index.js
  var require_lib2 = __commonJS({
    "../../node_modules/.pnpm/react-diff-viewer-continued@3.2.5_react-dom@18.2.0_react@18.2.0/node_modules/react-diff-viewer-continued/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DiffMethod = exports.LineNumberPrefix = void 0;
      var React14 = require_react();
      var PropTypes2 = require_prop_types();
      var classnames_1 = require_classnames();
      var compute_lines_1 = require_compute_lines();
      Object.defineProperty(exports, "DiffMethod", { enumerable: true, get: function() {
        return compute_lines_1.DiffMethod;
      } });
      var styles_1 = require_styles();
      var m = require_memoize_one_cjs();
      var memoize = m.default || m;
      var LineNumberPrefix;
      (function(LineNumberPrefix2) {
        LineNumberPrefix2["LEFT"] = "L";
        LineNumberPrefix2["RIGHT"] = "R";
      })(LineNumberPrefix = exports.LineNumberPrefix || (exports.LineNumberPrefix = {}));
      var DiffViewer2 = class extends React14.Component {
        constructor(props) {
          super(props);
          this.resetCodeBlocks = () => {
            if (this.state.expandedBlocks.length > 0) {
              this.setState({
                expandedBlocks: []
              });
              return true;
            }
            return false;
          };
          this.onBlockExpand = (id) => {
            const prevState = this.state.expandedBlocks.slice();
            prevState.push(id);
            this.setState({
              expandedBlocks: prevState
            });
          };
          this.computeStyles = memoize(styles_1.default);
          this.onLineNumberClickProxy = (id) => {
            if (this.props.onLineNumberClick) {
              return (e) => this.props.onLineNumberClick(id, e);
            }
            return () => {
            };
          };
          this.renderWordDiff = (diffArray, renderer) => {
            return diffArray.map((wordDiff, i) => {
              return React14.createElement("span", { key: i, className: (0, classnames_1.default)(this.styles.wordDiff, {
                [this.styles.wordAdded]: wordDiff.type === compute_lines_1.DiffType.ADDED,
                [this.styles.wordRemoved]: wordDiff.type === compute_lines_1.DiffType.REMOVED
              }) }, renderer ? renderer(wordDiff.value) : wordDiff.value);
            });
          };
          this.renderLine = (lineNumber, type, prefix, value, additionalLineNumber, additionalPrefix) => {
            const lineNumberTemplate = `${prefix}-${lineNumber}`;
            const additionalLineNumberTemplate = `${additionalPrefix}-${additionalLineNumber}`;
            const highlightLine = this.props.highlightLines.includes(lineNumberTemplate) || this.props.highlightLines.includes(additionalLineNumberTemplate);
            const added = type === compute_lines_1.DiffType.ADDED;
            const removed = type === compute_lines_1.DiffType.REMOVED;
            const changed = type === compute_lines_1.DiffType.CHANGED;
            let content3;
            if (Array.isArray(value)) {
              content3 = this.renderWordDiff(value, this.props.renderContent);
            } else if (this.props.renderContent) {
              content3 = this.props.renderContent(value);
            } else {
              content3 = value;
            }
            return React14.createElement(
              React14.Fragment,
              null,
              !this.props.hideLineNumbers && React14.createElement(
                "td",
                { onClick: lineNumber && this.onLineNumberClickProxy(lineNumberTemplate), className: (0, classnames_1.default)(this.styles.gutter, {
                  [this.styles.emptyGutter]: !lineNumber,
                  [this.styles.diffAdded]: added,
                  [this.styles.diffRemoved]: removed,
                  [this.styles.diffChanged]: changed,
                  [this.styles.highlightedGutter]: highlightLine
                }) },
                React14.createElement("pre", { className: this.styles.lineNumber }, lineNumber)
              ),
              !this.props.splitView && !this.props.hideLineNumbers && React14.createElement(
                "td",
                { onClick: additionalLineNumber && this.onLineNumberClickProxy(additionalLineNumberTemplate), className: (0, classnames_1.default)(this.styles.gutter, {
                  [this.styles.emptyGutter]: !additionalLineNumber,
                  [this.styles.diffAdded]: added,
                  [this.styles.diffRemoved]: removed,
                  [this.styles.diffChanged]: changed,
                  [this.styles.highlightedGutter]: highlightLine
                }) },
                React14.createElement("pre", { className: this.styles.lineNumber }, additionalLineNumber)
              ),
              this.props.renderGutter ? this.props.renderGutter({
                lineNumber,
                type,
                prefix,
                value,
                additionalLineNumber,
                additionalPrefix,
                styles: this.styles
              }) : null,
              React14.createElement(
                "td",
                { className: (0, classnames_1.default)(this.styles.marker, {
                  [this.styles.emptyLine]: !content3,
                  [this.styles.diffAdded]: added,
                  [this.styles.diffRemoved]: removed,
                  [this.styles.diffChanged]: changed,
                  [this.styles.highlightedLine]: highlightLine
                }) },
                React14.createElement(
                  "pre",
                  null,
                  added && "+",
                  removed && "-"
                )
              ),
              React14.createElement(
                "td",
                { className: (0, classnames_1.default)(this.styles.content, {
                  [this.styles.emptyLine]: !content3,
                  [this.styles.diffAdded]: added,
                  [this.styles.diffRemoved]: removed,
                  [this.styles.diffChanged]: changed,
                  [this.styles.highlightedLine]: highlightLine
                }) },
                React14.createElement("pre", { className: this.styles.contentText }, content3)
              )
            );
          };
          this.renderSplitView = ({ left, right }, index2) => {
            return React14.createElement(
              "tr",
              { key: index2, className: this.styles.line },
              this.renderLine(left.lineNumber, left.type, LineNumberPrefix.LEFT, left.value),
              this.renderLine(right.lineNumber, right.type, LineNumberPrefix.RIGHT, right.value)
            );
          };
          this.renderInlineView = ({ left, right }, index2) => {
            let content3;
            if (left.type === compute_lines_1.DiffType.REMOVED && right.type === compute_lines_1.DiffType.ADDED) {
              return React14.createElement(
                React14.Fragment,
                { key: index2 },
                React14.createElement("tr", { className: this.styles.line }, this.renderLine(left.lineNumber, left.type, LineNumberPrefix.LEFT, left.value, null)),
                React14.createElement("tr", { className: this.styles.line }, this.renderLine(null, right.type, LineNumberPrefix.RIGHT, right.value, right.lineNumber))
              );
            }
            if (left.type === compute_lines_1.DiffType.REMOVED) {
              content3 = this.renderLine(left.lineNumber, left.type, LineNumberPrefix.LEFT, left.value, null);
            }
            if (left.type === compute_lines_1.DiffType.DEFAULT) {
              content3 = this.renderLine(left.lineNumber, left.type, LineNumberPrefix.LEFT, left.value, right.lineNumber, LineNumberPrefix.RIGHT);
            }
            if (right.type === compute_lines_1.DiffType.ADDED) {
              content3 = this.renderLine(null, right.type, LineNumberPrefix.RIGHT, right.value, right.lineNumber);
            }
            return React14.createElement("tr", { key: index2, className: this.styles.line }, content3);
          };
          this.onBlockClickProxy = (id) => () => this.onBlockExpand(id);
          this.renderSkippedLineIndicator = (num, blockNumber, leftBlockLineNumber, rightBlockLineNumber) => {
            const { hideLineNumbers, splitView } = this.props;
            const message = this.props.codeFoldMessageRenderer ? this.props.codeFoldMessageRenderer(num, leftBlockLineNumber, rightBlockLineNumber) : React14.createElement(
              "pre",
              { className: this.styles.codeFoldContent },
              "Expand ",
              num,
              " lines ..."
            );
            const content3 = React14.createElement(
              "td",
              null,
              React14.createElement("a", { onClick: this.onBlockClickProxy(blockNumber), tabIndex: 0 }, message)
            );
            const isUnifiedViewWithoutLineNumbers = !splitView && !hideLineNumbers;
            return React14.createElement(
              "tr",
              { key: `${leftBlockLineNumber}-${rightBlockLineNumber}`, className: this.styles.codeFold },
              !hideLineNumbers && React14.createElement("td", { className: this.styles.codeFoldGutter }),
              this.props.renderGutter ? React14.createElement("td", { className: this.styles.codeFoldGutter }) : null,
              React14.createElement("td", { className: (0, classnames_1.default)({
                [this.styles.codeFoldGutter]: isUnifiedViewWithoutLineNumbers
              }) }),
              isUnifiedViewWithoutLineNumbers ? React14.createElement(
                React14.Fragment,
                null,
                React14.createElement("td", null),
                content3
              ) : React14.createElement(
                React14.Fragment,
                null,
                content3,
                this.props.renderGutter ? React14.createElement("td", null) : null,
                React14.createElement("td", null)
              ),
              React14.createElement("td", null),
              React14.createElement("td", null)
            );
          };
          this.renderDiff = () => {
            const { oldValue, newValue, splitView, disableWordDiff, compareMethod, linesOffset } = this.props;
            const { lineInformation, diffLines } = (0, compute_lines_1.computeLineInformation)(oldValue, newValue, disableWordDiff, compareMethod, linesOffset);
            const extraLines = this.props.extraLinesSurroundingDiff < 0 ? 0 : this.props.extraLinesSurroundingDiff;
            let skippedLines = [];
            return lineInformation.map((line, i) => {
              const diffBlockStart = diffLines[0];
              const currentPosition = diffBlockStart - i;
              if (this.props.showDiffOnly) {
                if (currentPosition === -extraLines) {
                  skippedLines = [];
                  diffLines.shift();
                }
                if (line.left.type === compute_lines_1.DiffType.DEFAULT && (currentPosition > extraLines || typeof diffBlockStart === "undefined") && !this.state.expandedBlocks.includes(diffBlockStart)) {
                  skippedLines.push(i + 1);
                  if (i === lineInformation.length - 1 && skippedLines.length > 1) {
                    return this.renderSkippedLineIndicator(skippedLines.length, diffBlockStart, line.left.lineNumber, line.right.lineNumber);
                  } else if (i < lineInformation.length - 1) {
                    return null;
                  }
                }
              }
              const diffNodes = splitView ? this.renderSplitView(line, i) : this.renderInlineView(line, i);
              if (currentPosition === extraLines && skippedLines.length > 0) {
                const { length } = skippedLines;
                skippedLines = [];
                return React14.createElement(
                  React14.Fragment,
                  { key: i },
                  this.renderSkippedLineIndicator(length, diffBlockStart, line.left.lineNumber, line.right.lineNumber),
                  diffNodes
                );
              }
              return diffNodes;
            });
          };
          this.render = () => {
            const { oldValue, newValue, useDarkTheme, leftTitle, rightTitle, splitView, hideLineNumbers } = this.props;
            if (this.props.compareMethod !== compute_lines_1.DiffMethod.JSON) {
              if (typeof oldValue !== "string" || typeof newValue !== "string") {
                throw Error('"oldValue" and "newValue" should be strings');
              }
            }
            this.styles = this.computeStyles(this.props.styles, useDarkTheme);
            const nodes = this.renderDiff();
            const colSpanOnSplitView = hideLineNumbers ? 2 : 3;
            const colSpanOnInlineView = hideLineNumbers ? 2 : 4;
            let columnExtension = this.props.renderGutter ? 1 : 0;
            const title = (leftTitle || rightTitle) && React14.createElement(
              "tr",
              null,
              React14.createElement(
                "td",
                { colSpan: (splitView ? colSpanOnSplitView : colSpanOnInlineView) + columnExtension, className: this.styles.titleBlock },
                React14.createElement("pre", { className: this.styles.contentText }, leftTitle)
              ),
              splitView && React14.createElement(
                "td",
                { colSpan: colSpanOnSplitView + columnExtension, className: this.styles.titleBlock },
                React14.createElement("pre", { className: this.styles.contentText }, rightTitle)
              )
            );
            return React14.createElement(
              "table",
              { className: (0, classnames_1.default)(this.styles.diffContainer, {
                [this.styles.splitView]: splitView
              }) },
              React14.createElement(
                "tbody",
                null,
                title,
                nodes
              )
            );
          };
          this.state = {
            expandedBlocks: []
          };
        }
      };
      DiffViewer2.defaultProps = {
        oldValue: "",
        newValue: "",
        splitView: true,
        highlightLines: [],
        disableWordDiff: false,
        compareMethod: compute_lines_1.DiffMethod.CHARS,
        styles: {},
        hideLineNumbers: false,
        extraLinesSurroundingDiff: 3,
        showDiffOnly: true,
        useDarkTheme: false,
        linesOffset: 0
      };
      DiffViewer2.propTypes = {
        oldValue: PropTypes2.any.isRequired,
        newValue: PropTypes2.any.isRequired,
        splitView: PropTypes2.bool,
        disableWordDiff: PropTypes2.bool,
        compareMethod: PropTypes2.oneOf(Object.values(compute_lines_1.DiffMethod)),
        renderContent: PropTypes2.func,
        renderGutter: PropTypes2.func,
        onLineNumberClick: PropTypes2.func,
        extraLinesSurroundingDiff: PropTypes2.number,
        styles: PropTypes2.object,
        hideLineNumbers: PropTypes2.bool,
        showDiffOnly: PropTypes2.bool,
        highlightLines: PropTypes2.arrayOf(PropTypes2.string),
        leftTitle: PropTypes2.oneOfType([PropTypes2.string, PropTypes2.element]),
        rightTitle: PropTypes2.oneOfType([PropTypes2.string, PropTypes2.element]),
        linesOffset: PropTypes2.number
      };
      exports.default = DiffViewer2;
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/helpers/util.js
  var require_util = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/helpers/util.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getParsedType = exports.ZodParsedType = exports.util = void 0;
      var util;
      (function(util2) {
        util2.assertEqual = (val) => val;
        function assertIs(_arg) {
        }
        util2.assertIs = assertIs;
        function assertNever(_x) {
          throw new Error();
        }
        util2.assertNever = assertNever;
        util2.arrayToEnum = (items) => {
          const obj = {};
          for (const item of items) {
            obj[item] = item;
          }
          return obj;
        };
        util2.getValidEnumValues = (obj) => {
          const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
          const filtered = {};
          for (const k of validKeys) {
            filtered[k] = obj[k];
          }
          return util2.objectValues(filtered);
        };
        util2.objectValues = (obj) => {
          return util2.objectKeys(obj).map(function(e) {
            return obj[e];
          });
        };
        util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
          const keys2 = [];
          for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
              keys2.push(key);
            }
          }
          return keys2;
        };
        util2.find = (arr, checker) => {
          for (const item of arr) {
            if (checker(item))
              return item;
          }
          return void 0;
        };
        util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
        function joinValues(array, separator = " | ") {
          return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
        }
        util2.joinValues = joinValues;
        util2.jsonStringifyReplacer = (_, value) => {
          if (typeof value === "bigint") {
            return value.toString();
          }
          return value;
        };
      })(util = exports.util || (exports.util = {}));
      exports.ZodParsedType = util.arrayToEnum([
        "string",
        "nan",
        "number",
        "integer",
        "float",
        "boolean",
        "date",
        "bigint",
        "symbol",
        "function",
        "undefined",
        "null",
        "array",
        "object",
        "unknown",
        "promise",
        "void",
        "never",
        "map",
        "set"
      ]);
      var getParsedType = (data) => {
        const t = typeof data;
        switch (t) {
          case "undefined":
            return exports.ZodParsedType.undefined;
          case "string":
            return exports.ZodParsedType.string;
          case "number":
            return isNaN(data) ? exports.ZodParsedType.nan : exports.ZodParsedType.number;
          case "boolean":
            return exports.ZodParsedType.boolean;
          case "function":
            return exports.ZodParsedType.function;
          case "bigint":
            return exports.ZodParsedType.bigint;
          case "symbol":
            return exports.ZodParsedType.symbol;
          case "object":
            if (Array.isArray(data)) {
              return exports.ZodParsedType.array;
            }
            if (data === null) {
              return exports.ZodParsedType.null;
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
              return exports.ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
              return exports.ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
              return exports.ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
              return exports.ZodParsedType.date;
            }
            return exports.ZodParsedType.object;
          default:
            return exports.ZodParsedType.unknown;
        }
      };
      exports.getParsedType = getParsedType;
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/ZodError.js
  var require_ZodError = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/ZodError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ZodError = exports.quotelessJson = exports.ZodIssueCode = void 0;
      var util_1 = require_util();
      exports.ZodIssueCode = util_1.util.arrayToEnum([
        "invalid_type",
        "invalid_literal",
        "custom",
        "invalid_union",
        "invalid_union_discriminator",
        "invalid_enum_value",
        "unrecognized_keys",
        "invalid_arguments",
        "invalid_return_type",
        "invalid_date",
        "invalid_string",
        "too_small",
        "too_big",
        "invalid_intersection_types",
        "not_multiple_of",
        "not_finite"
      ]);
      var quotelessJson = (obj) => {
        const json = JSON.stringify(obj, null, 2);
        return json.replace(/"([^"]+)":/g, "$1:");
      };
      exports.quotelessJson = quotelessJson;
      var ZodError = class extends Error {
        constructor(issues) {
          super();
          this.issues = [];
          this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
          };
          this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
          };
          const actualProto = new.target.prototype;
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(this, actualProto);
          } else {
            this.__proto__ = actualProto;
          }
          this.name = "ZodError";
          this.issues = issues;
        }
        get errors() {
          return this.issues;
        }
        format(_mapper) {
          const mapper = _mapper || function(issue) {
            return issue.message;
          };
          const fieldErrors = { _errors: [] };
          const processError = (error) => {
            for (const issue of error.issues) {
              if (issue.code === "invalid_union") {
                issue.unionErrors.map(processError);
              } else if (issue.code === "invalid_return_type") {
                processError(issue.returnTypeError);
              } else if (issue.code === "invalid_arguments") {
                processError(issue.argumentsError);
              } else if (issue.path.length === 0) {
                fieldErrors._errors.push(mapper(issue));
              } else {
                let curr = fieldErrors;
                let i = 0;
                while (i < issue.path.length) {
                  const el = issue.path[i];
                  const terminal = i === issue.path.length - 1;
                  if (!terminal) {
                    curr[el] = curr[el] || { _errors: [] };
                  } else {
                    curr[el] = curr[el] || { _errors: [] };
                    curr[el]._errors.push(mapper(issue));
                  }
                  curr = curr[el];
                  i++;
                }
              }
            }
          };
          processError(this);
          return fieldErrors;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, util_1.util.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return this.issues.length === 0;
        }
        flatten(mapper = (issue) => issue.message) {
          const fieldErrors = {};
          const formErrors = [];
          for (const sub of this.issues) {
            if (sub.path.length > 0) {
              fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
              fieldErrors[sub.path[0]].push(mapper(sub));
            } else {
              formErrors.push(mapper(sub));
            }
          }
          return { formErrors, fieldErrors };
        }
        get formErrors() {
          return this.flatten();
        }
      };
      exports.ZodError = ZodError;
      ZodError.create = (issues) => {
        const error = new ZodError(issues);
        return error;
      };
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/locales/en.js
  var require_en = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/locales/en.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var util_1 = require_util();
      var ZodError_1 = require_ZodError();
      var errorMap = (issue, _ctx) => {
        let message;
        switch (issue.code) {
          case ZodError_1.ZodIssueCode.invalid_type:
            if (issue.received === util_1.ZodParsedType.undefined) {
              message = "Required";
            } else {
              message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
          case ZodError_1.ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util_1.util.jsonStringifyReplacer)}`;
            break;
          case ZodError_1.ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util_1.util.joinValues(issue.keys, ", ")}`;
            break;
          case ZodError_1.ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
          case ZodError_1.ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util_1.util.joinValues(issue.options)}`;
            break;
          case ZodError_1.ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util_1.util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
          case ZodError_1.ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
          case ZodError_1.ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
          case ZodError_1.ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
          case ZodError_1.ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
              if ("startsWith" in issue.validation) {
                message = `Invalid input: must start with "${issue.validation.startsWith}"`;
              } else if ("endsWith" in issue.validation) {
                message = `Invalid input: must end with "${issue.validation.endsWith}"`;
              } else {
                util_1.util.assertNever(issue.validation);
              }
            } else if (issue.validation !== "regex") {
              message = `Invalid ${issue.validation}`;
            } else {
              message = "Invalid";
            }
            break;
          case ZodError_1.ZodIssueCode.too_small:
            if (issue.type === "array")
              message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
              message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
              message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
              message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(issue.minimum)}`;
            else
              message = "Invalid input";
            break;
          case ZodError_1.ZodIssueCode.too_big:
            if (issue.type === "array")
              message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
              message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
              message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
              message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(issue.maximum)}`;
            else
              message = "Invalid input";
            break;
          case ZodError_1.ZodIssueCode.custom:
            message = `Invalid input`;
            break;
          case ZodError_1.ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
          case ZodError_1.ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
          case ZodError_1.ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
          default:
            message = _ctx.defaultError;
            util_1.util.assertNever(issue);
        }
        return { message };
      };
      exports.default = errorMap;
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/errors.js
  var require_errors = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/errors.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getErrorMap = exports.setErrorMap = exports.defaultErrorMap = void 0;
      var en_1 = __importDefault(require_en());
      exports.defaultErrorMap = en_1.default;
      var overrideErrorMap = en_1.default;
      function setErrorMap(map) {
        overrideErrorMap = map;
      }
      exports.setErrorMap = setErrorMap;
      function getErrorMap() {
        return overrideErrorMap;
      }
      exports.getErrorMap = getErrorMap;
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/helpers/parseUtil.js
  var require_parseUtil = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/helpers/parseUtil.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isAsync = exports.isValid = exports.isDirty = exports.isAborted = exports.OK = exports.DIRTY = exports.INVALID = exports.ParseStatus = exports.addIssueToContext = exports.EMPTY_PATH = exports.makeIssue = void 0;
      var errors_1 = require_errors();
      var en_1 = __importDefault(require_en());
      var makeIssue = (params) => {
        const { data, path: path2, errorMaps, issueData } = params;
        const fullPath = [...path2, ...issueData.path || []];
        const fullIssue = {
          ...issueData,
          path: fullPath
        };
        let errorMessage = "";
        const maps = errorMaps.filter((m) => !!m).slice().reverse();
        for (const map of maps) {
          errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
        }
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message || errorMessage
        };
      };
      exports.makeIssue = makeIssue;
      exports.EMPTY_PATH = [];
      function addIssueToContext(ctx, issueData) {
        const issue = (0, exports.makeIssue)({
          issueData,
          data: ctx.data,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            (0, errors_1.getErrorMap)(),
            en_1.default
          ].filter((x) => !!x)
        });
        ctx.common.issues.push(issue);
      }
      exports.addIssueToContext = addIssueToContext;
      var ParseStatus = class {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          if (this.value === "valid")
            this.value = "dirty";
        }
        abort() {
          if (this.value !== "aborted")
            this.value = "aborted";
        }
        static mergeArray(status, results) {
          const arrayValue = [];
          for (const s of results) {
            if (s.status === "aborted")
              return exports.INVALID;
            if (s.status === "dirty")
              status.dirty();
            arrayValue.push(s.value);
          }
          return { status: status.value, value: arrayValue };
        }
        static async mergeObjectAsync(status, pairs) {
          const syncPairs = [];
          for (const pair of pairs) {
            syncPairs.push({
              key: await pair.key,
              value: await pair.value
            });
          }
          return ParseStatus.mergeObjectSync(status, syncPairs);
        }
        static mergeObjectSync(status, pairs) {
          const finalObject = {};
          for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
              return exports.INVALID;
            if (value.status === "aborted")
              return exports.INVALID;
            if (key.status === "dirty")
              status.dirty();
            if (value.status === "dirty")
              status.dirty();
            if (typeof value.value !== "undefined" || pair.alwaysSet) {
              finalObject[key.value] = value.value;
            }
          }
          return { status: status.value, value: finalObject };
        }
      };
      exports.ParseStatus = ParseStatus;
      exports.INVALID = Object.freeze({
        status: "aborted"
      });
      var DIRTY = (value) => ({ status: "dirty", value });
      exports.DIRTY = DIRTY;
      var OK = (value) => ({ status: "valid", value });
      exports.OK = OK;
      var isAborted = (x) => x.status === "aborted";
      exports.isAborted = isAborted;
      var isDirty = (x) => x.status === "dirty";
      exports.isDirty = isDirty;
      var isValid = (x) => x.status === "valid";
      exports.isValid = isValid;
      var isAsync = (x) => typeof Promise !== void 0 && x instanceof Promise;
      exports.isAsync = isAsync;
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/helpers/typeAliases.js
  var require_typeAliases = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/helpers/typeAliases.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/helpers/errorUtil.js
  var require_errorUtil = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/helpers/errorUtil.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.errorUtil = void 0;
      var errorUtil;
      (function(errorUtil2) {
        errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
        errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
      })(errorUtil = exports.errorUtil || (exports.errorUtil = {}));
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/types.js
  var require_types = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.date = exports.boolean = exports.bigint = exports.array = exports.any = exports.coerce = exports.ZodFirstPartyTypeKind = exports.late = exports.ZodSchema = exports.Schema = exports.custom = exports.ZodPipeline = exports.ZodBranded = exports.BRAND = exports.ZodNaN = exports.ZodCatch = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = exports.ZodTransformer = exports.ZodEffects = exports.ZodPromise = exports.ZodNativeEnum = exports.ZodEnum = exports.ZodLiteral = exports.ZodLazy = exports.ZodFunction = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.objectUtil = exports.ZodArray = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodDate = exports.ZodBoolean = exports.ZodBigInt = exports.ZodNumber = exports.ZodString = exports.ZodType = void 0;
      exports.NEVER = exports.void = exports.unknown = exports.union = exports.undefined = exports.tuple = exports.transformer = exports.symbol = exports.string = exports.strictObject = exports.set = exports.record = exports.promise = exports.preprocess = exports.pipeline = exports.ostring = exports.optional = exports.onumber = exports.oboolean = exports.object = exports.number = exports.nullable = exports.null = exports.never = exports.nativeEnum = exports.nan = exports.map = exports.literal = exports.lazy = exports.intersection = exports.instanceof = exports.function = exports.enum = exports.effect = exports.discriminatedUnion = void 0;
      var errors_1 = require_errors();
      var errorUtil_1 = require_errorUtil();
      var parseUtil_1 = require_parseUtil();
      var util_1 = require_util();
      var ZodError_1 = require_ZodError();
      var ParseInputLazyPath = class {
        constructor(parent, value, path2, key) {
          this.parent = parent;
          this.data = value;
          this._path = path2;
          this._key = key;
        }
        get path() {
          return this._path.concat(this._key);
        }
      };
      var handleResult = (ctx, result) => {
        if ((0, parseUtil_1.isValid)(result)) {
          return { success: true, data: result.value };
        } else {
          if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
          }
          const error = new ZodError_1.ZodError(ctx.common.issues);
          return { success: false, error };
        }
      };
      function processCreateParams(params) {
        if (!params)
          return {};
        const { errorMap, invalid_type_error, required_error, description } = params;
        if (errorMap && (invalid_type_error || required_error)) {
          throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
        }
        if (errorMap)
          return { errorMap, description };
        const customMap = (iss, ctx) => {
          if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
          if (typeof ctx.data === "undefined") {
            return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
          }
          return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
        };
        return { errorMap: customMap, description };
      }
      var ZodType = class {
        constructor(def) {
          this.spa = this.safeParseAsync;
          this._def = def;
          this.parse = this.parse.bind(this);
          this.safeParse = this.safeParse.bind(this);
          this.parseAsync = this.parseAsync.bind(this);
          this.safeParseAsync = this.safeParseAsync.bind(this);
          this.spa = this.spa.bind(this);
          this.refine = this.refine.bind(this);
          this.refinement = this.refinement.bind(this);
          this.superRefine = this.superRefine.bind(this);
          this.optional = this.optional.bind(this);
          this.nullable = this.nullable.bind(this);
          this.nullish = this.nullish.bind(this);
          this.array = this.array.bind(this);
          this.promise = this.promise.bind(this);
          this.or = this.or.bind(this);
          this.and = this.and.bind(this);
          this.transform = this.transform.bind(this);
          this.brand = this.brand.bind(this);
          this.default = this.default.bind(this);
          this.catch = this.catch.bind(this);
          this.describe = this.describe.bind(this);
          this.pipe = this.pipe.bind(this);
          this.isNullable = this.isNullable.bind(this);
          this.isOptional = this.isOptional.bind(this);
        }
        get description() {
          return this._def.description;
        }
        _getType(input) {
          return (0, util_1.getParsedType)(input.data);
        }
        _getOrReturnCtx(input, ctx) {
          return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, util_1.getParsedType)(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          };
        }
        _processInputParams(input) {
          return {
            status: new parseUtil_1.ParseStatus(),
            ctx: {
              common: input.parent.common,
              data: input.data,
              parsedType: (0, util_1.getParsedType)(input.data),
              schemaErrorMap: this._def.errorMap,
              path: input.path,
              parent: input.parent
            }
          };
        }
        _parseSync(input) {
          const result = this._parse(input);
          if ((0, parseUtil_1.isAsync)(result)) {
            throw new Error("Synchronous parse encountered promise.");
          }
          return result;
        }
        _parseAsync(input) {
          const result = this._parse(input);
          return Promise.resolve(result);
        }
        parse(data, params) {
          const result = this.safeParse(data, params);
          if (result.success)
            return result.data;
          throw result.error;
        }
        safeParse(data, params) {
          var _a;
          const ctx = {
            common: {
              issues: [],
              async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
              contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, util_1.getParsedType)(data)
          };
          const result = this._parseSync({ data, path: ctx.path, parent: ctx });
          return handleResult(ctx, result);
        }
        async parseAsync(data, params) {
          const result = await this.safeParseAsync(data, params);
          if (result.success)
            return result.data;
          throw result.error;
        }
        async safeParseAsync(data, params) {
          const ctx = {
            common: {
              issues: [],
              contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
              async: true
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: (0, util_1.getParsedType)(data)
          };
          const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
          const result = await ((0, parseUtil_1.isAsync)(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
          return handleResult(ctx, result);
        }
        refine(check, message) {
          const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
              return { message };
            } else if (typeof message === "function") {
              return message(val);
            } else {
              return message;
            }
          };
          return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
              code: ZodError_1.ZodIssueCode.custom,
              ...getIssueProperties(val)
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
              return result.then((data) => {
                if (!data) {
                  setError();
                  return false;
                } else {
                  return true;
                }
              });
            }
            if (!result) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        refinement(check, refinementData) {
          return this._refinement((val, ctx) => {
            if (!check(val)) {
              ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
              return false;
            } else {
              return true;
            }
          });
        }
        _refinement(refinement) {
          return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement }
          });
        }
        superRefine(refinement) {
          return this._refinement(refinement);
        }
        optional() {
          return ZodOptional.create(this);
        }
        nullable() {
          return ZodNullable.create(this);
        }
        nullish() {
          return this.optional().nullable();
        }
        array() {
          return ZodArray.create(this);
        }
        promise() {
          return ZodPromise.create(this);
        }
        or(option) {
          return ZodUnion.create([this, option]);
        }
        and(incoming) {
          return ZodIntersection.create(this, incoming);
        }
        transform(transform) {
          return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform }
          });
        }
        default(def) {
          const defaultValueFunc = typeof def === "function" ? def : () => def;
          return new ZodDefault({
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
          });
        }
        brand() {
          return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(void 0)
          });
        }
        catch(def) {
          const defaultValueFunc = typeof def === "function" ? def : () => def;
          return new ZodCatch({
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodCatch
          });
        }
        describe(description) {
          const This = this.constructor;
          return new This({
            ...this._def,
            description
          });
        }
        pipe(target) {
          return ZodPipeline.create(this, target);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      };
      exports.ZodType = ZodType;
      exports.Schema = ZodType;
      exports.ZodSchema = ZodType;
      var cuidRegex = /^c[^\s-]{8,}$/i;
      var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
      var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      var datetimeRegex = (args) => {
        if (args.precision) {
          if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}:\\d{2})|Z)$`);
          } else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
          }
        } else if (args.precision === 0) {
          if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}:\\d{2})|Z)$`);
          } else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
          }
        } else {
          if (args.offset) {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}:\\d{2})|Z)$`);
          } else {
            return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
          }
        }
      };
      var ZodString = class extends ZodType {
        constructor() {
          super(...arguments);
          this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
            validation,
            code: ZodError_1.ZodIssueCode.invalid_string,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
          this.nonempty = (message) => this.min(1, errorUtil_1.errorUtil.errToObj(message));
          this.trim = () => new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }]
          });
        }
        _parse(input) {
          if (this._def.coerce) {
            input.data = String(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.string) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(
              ctx2,
              {
                code: ZodError_1.ZodIssueCode.invalid_type,
                expected: util_1.ZodParsedType.string,
                received: ctx2.parsedType
              }
            );
            return parseUtil_1.INVALID;
          }
          const status = new parseUtil_1.ParseStatus();
          let ctx = void 0;
          for (const check of this._def.checks) {
            if (check.kind === "min") {
              if (input.data.length < check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              if (input.data.length > check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "length") {
              const tooBig = input.data.length > check.value;
              const tooSmall = input.data.length < check.value;
              if (tooBig || tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                if (tooBig) {
                  (0, parseUtil_1.addIssueToContext)(ctx, {
                    code: ZodError_1.ZodIssueCode.too_big,
                    maximum: check.value,
                    type: "string",
                    inclusive: true,
                    exact: true,
                    message: check.message
                  });
                } else if (tooSmall) {
                  (0, parseUtil_1.addIssueToContext)(ctx, {
                    code: ZodError_1.ZodIssueCode.too_small,
                    minimum: check.value,
                    type: "string",
                    inclusive: true,
                    exact: true,
                    message: check.message
                  });
                }
                status.dirty();
              }
            } else if (check.kind === "email") {
              if (!emailRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "email",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "uuid") {
              if (!uuidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "uuid",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "cuid") {
              if (!cuidRegex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "cuid",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "url") {
              try {
                new URL(input.data);
              } catch (_a) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "url",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "regex") {
              check.regex.lastIndex = 0;
              const testResult = check.regex.test(input.data);
              if (!testResult) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  validation: "regex",
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "trim") {
              input.data = input.data.trim();
            } else if (check.kind === "startsWith") {
              if (!input.data.startsWith(check.value)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  validation: { startsWith: check.value },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "endsWith") {
              if (!input.data.endsWith(check.value)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  validation: { endsWith: check.value },
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "datetime") {
              const regex = datetimeRegex(check);
              if (!regex.test(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_string,
                  validation: "datetime",
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util_1.util.assertNever(check);
            }
          }
          return { status: status.value, value: input.data };
        }
        _addCheck(check) {
          return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check]
          });
        }
        email(message) {
          return this._addCheck({ kind: "email", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        url(message) {
          return this._addCheck({ kind: "url", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        uuid(message) {
          return this._addCheck({ kind: "uuid", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        cuid(message) {
          return this._addCheck({ kind: "cuid", ...errorUtil_1.errorUtil.errToObj(message) });
        }
        datetime(options) {
          var _a;
          if (typeof options === "string") {
            return this._addCheck({
              kind: "datetime",
              precision: null,
              offset: false,
              message: options
            });
          }
          return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            ...errorUtil_1.errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
          });
        }
        regex(regex, message) {
          return this._addCheck({
            kind: "regex",
            regex,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        startsWith(value, message) {
          return this._addCheck({
            kind: "startsWith",
            value,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        endsWith(value, message) {
          return this._addCheck({
            kind: "endsWith",
            value,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        min(minLength, message) {
          return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        max(maxLength, message) {
          return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        length(len, message) {
          return this._addCheck({
            kind: "length",
            value: len,
            ...errorUtil_1.errorUtil.errToObj(message)
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((ch) => ch.kind === "datetime");
        }
        get isEmail() {
          return !!this._def.checks.find((ch) => ch.kind === "email");
        }
        get isURL() {
          return !!this._def.checks.find((ch) => ch.kind === "url");
        }
        get isUUID() {
          return !!this._def.checks.find((ch) => ch.kind === "uuid");
        }
        get isCUID() {
          return !!this._def.checks.find((ch) => ch.kind === "cuid");
        }
        get minLength() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min;
        }
        get maxLength() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max;
        }
      };
      exports.ZodString = ZodString;
      ZodString.create = (params) => {
        var _a;
        return new ZodString({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodString,
          coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
          ...processCreateParams(params)
        });
      };
      function floatSafeRemainder(val, step) {
        const valDecCount = (val.toString().split(".")[1] || "").length;
        const stepDecCount = (step.toString().split(".")[1] || "").length;
        const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
        const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
        const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
        return valInt % stepInt / Math.pow(10, decCount);
      }
      var ZodNumber = class extends ZodType {
        constructor() {
          super(...arguments);
          this.min = this.gte;
          this.max = this.lte;
          this.step = this.multipleOf;
        }
        _parse(input) {
          if (this._def.coerce) {
            input.data = Number(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.number) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.number,
              received: ctx2.parsedType
            });
            return parseUtil_1.INVALID;
          }
          let ctx = void 0;
          const status = new parseUtil_1.ParseStatus();
          for (const check of this._def.checks) {
            if (check.kind === "int") {
              if (!util_1.util.isInteger(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "min") {
              const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
              if (tooSmall) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "number",
                  inclusive: check.inclusive,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
              if (tooBig) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "number",
                  inclusive: check.inclusive,
                  exact: false,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "multipleOf") {
              if (floatSafeRemainder(input.data, check.value) !== 0) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.not_multiple_of,
                  multipleOf: check.value,
                  message: check.message
                });
                status.dirty();
              }
            } else if (check.kind === "finite") {
              if (!Number.isFinite(input.data)) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.not_finite,
                  message: check.message
                });
                status.dirty();
              }
            } else {
              util_1.util.assertNever(check);
            }
          }
          return { status: status.value, value: input.data };
        }
        gte(value, message) {
          return this.setLimit("min", value, true, errorUtil_1.errorUtil.toString(message));
        }
        gt(value, message) {
          return this.setLimit("min", value, false, errorUtil_1.errorUtil.toString(message));
        }
        lte(value, message) {
          return this.setLimit("max", value, true, errorUtil_1.errorUtil.toString(message));
        }
        lt(value, message) {
          return this.setLimit("max", value, false, errorUtil_1.errorUtil.toString(message));
        }
        setLimit(kind, value, inclusive, message) {
          return new ZodNumber({
            ...this._def,
            checks: [
              ...this._def.checks,
              {
                kind,
                value,
                inclusive,
                message: errorUtil_1.errorUtil.toString(message)
              }
            ]
          });
        }
        _addCheck(check) {
          return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check]
          });
        }
        int(message) {
          return this._addCheck({
            kind: "int",
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        positive(message) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        negative(message) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        nonpositive(message) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        nonnegative(message) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        multipleOf(value, message) {
          return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        finite(message) {
          return this._addCheck({
            kind: "finite",
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        get minValue() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min;
        }
        get maxValue() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max;
        }
        get isInt() {
          return !!this._def.checks.find((ch) => ch.kind === "int");
        }
      };
      exports.ZodNumber = ZodNumber;
      ZodNumber.create = (params) => {
        return new ZodNumber({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodNumber,
          coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
          ...processCreateParams(params)
        });
      };
      var ZodBigInt = class extends ZodType {
        _parse(input) {
          if (this._def.coerce) {
            input.data = BigInt(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.bigint) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.bigint,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodBigInt = ZodBigInt;
      ZodBigInt.create = (params) => {
        var _a;
        return new ZodBigInt({
          typeName: ZodFirstPartyTypeKind.ZodBigInt,
          coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
          ...processCreateParams(params)
        });
      };
      var ZodBoolean = class extends ZodType {
        _parse(input) {
          if (this._def.coerce) {
            input.data = Boolean(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.boolean,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodBoolean = ZodBoolean;
      ZodBoolean.create = (params) => {
        return new ZodBoolean({
          typeName: ZodFirstPartyTypeKind.ZodBoolean,
          coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
          ...processCreateParams(params)
        });
      };
      var ZodDate = class extends ZodType {
        _parse(input) {
          if (this._def.coerce) {
            input.data = new Date(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.date) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.date,
              received: ctx2.parsedType
            });
            return parseUtil_1.INVALID;
          }
          if (isNaN(input.data.getTime())) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_date
            });
            return parseUtil_1.INVALID;
          }
          const status = new parseUtil_1.ParseStatus();
          let ctx = void 0;
          for (const check of this._def.checks) {
            if (check.kind === "min") {
              if (input.data.getTime() < check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_small,
                  message: check.message,
                  inclusive: true,
                  exact: false,
                  minimum: check.value,
                  type: "date"
                });
                status.dirty();
              }
            } else if (check.kind === "max") {
              if (input.data.getTime() > check.value) {
                ctx = this._getOrReturnCtx(input, ctx);
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.too_big,
                  message: check.message,
                  inclusive: true,
                  exact: false,
                  maximum: check.value,
                  type: "date"
                });
                status.dirty();
              }
            } else {
              util_1.util.assertNever(check);
            }
          }
          return {
            status: status.value,
            value: new Date(input.data.getTime())
          };
        }
        _addCheck(check) {
          return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check]
          });
        }
        min(minDate, message) {
          return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        max(maxDate, message) {
          return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil_1.errorUtil.toString(message)
          });
        }
        get minDate() {
          let min = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "min") {
              if (min === null || ch.value > min)
                min = ch.value;
            }
          }
          return min != null ? new Date(min) : null;
        }
        get maxDate() {
          let max = null;
          for (const ch of this._def.checks) {
            if (ch.kind === "max") {
              if (max === null || ch.value < max)
                max = ch.value;
            }
          }
          return max != null ? new Date(max) : null;
        }
      };
      exports.ZodDate = ZodDate;
      ZodDate.create = (params) => {
        return new ZodDate({
          checks: [],
          coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
          typeName: ZodFirstPartyTypeKind.ZodDate,
          ...processCreateParams(params)
        });
      };
      var ZodSymbol = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.symbol,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodSymbol = ZodSymbol;
      ZodSymbol.create = (params) => {
        return new ZodSymbol({
          typeName: ZodFirstPartyTypeKind.ZodSymbol,
          ...processCreateParams(params)
        });
      };
      var ZodUndefined = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.undefined,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodUndefined = ZodUndefined;
      ZodUndefined.create = (params) => {
        return new ZodUndefined({
          typeName: ZodFirstPartyTypeKind.ZodUndefined,
          ...processCreateParams(params)
        });
      };
      var ZodNull = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.null,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodNull = ZodNull;
      ZodNull.create = (params) => {
        return new ZodNull({
          typeName: ZodFirstPartyTypeKind.ZodNull,
          ...processCreateParams(params)
        });
      };
      var ZodAny = class extends ZodType {
        constructor() {
          super(...arguments);
          this._any = true;
        }
        _parse(input) {
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodAny = ZodAny;
      ZodAny.create = (params) => {
        return new ZodAny({
          typeName: ZodFirstPartyTypeKind.ZodAny,
          ...processCreateParams(params)
        });
      };
      var ZodUnknown = class extends ZodType {
        constructor() {
          super(...arguments);
          this._unknown = true;
        }
        _parse(input) {
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodUnknown = ZodUnknown;
      ZodUnknown.create = (params) => {
        return new ZodUnknown({
          typeName: ZodFirstPartyTypeKind.ZodUnknown,
          ...processCreateParams(params)
        });
      };
      var ZodNever = class extends ZodType {
        _parse(input) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_1.addIssueToContext)(ctx, {
            code: ZodError_1.ZodIssueCode.invalid_type,
            expected: util_1.ZodParsedType.never,
            received: ctx.parsedType
          });
          return parseUtil_1.INVALID;
        }
      };
      exports.ZodNever = ZodNever;
      ZodNever.create = (params) => {
        return new ZodNever({
          typeName: ZodFirstPartyTypeKind.ZodNever,
          ...processCreateParams(params)
        });
      };
      var ZodVoid = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.void,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
      };
      exports.ZodVoid = ZodVoid;
      ZodVoid.create = (params) => {
        return new ZodVoid({
          typeName: ZodFirstPartyTypeKind.ZodVoid,
          ...processCreateParams(params)
        });
      };
      var ZodArray = class extends ZodType {
        _parse(input) {
          const { ctx, status } = this._processInputParams(input);
          const def = this._def;
          if (ctx.parsedType !== util_1.ZodParsedType.array) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.array,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: tooBig ? ZodError_1.ZodIssueCode.too_big : ZodError_1.ZodIssueCode.too_small,
                minimum: tooSmall ? def.exactLength.value : void 0,
                maximum: tooBig ? def.exactLength.value : void 0,
                type: "array",
                inclusive: true,
                exact: true,
                message: def.exactLength.message
              });
              status.dirty();
            }
          }
          if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_small,
                minimum: def.minLength.value,
                type: "array",
                inclusive: true,
                exact: false,
                message: def.minLength.message
              });
              status.dirty();
            }
          }
          if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_big,
                maximum: def.maxLength.value,
                type: "array",
                inclusive: true,
                exact: false,
                message: def.maxLength.message
              });
              status.dirty();
            }
          }
          if (ctx.common.async) {
            return Promise.all(ctx.data.map((item, i) => {
              return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result2) => {
              return parseUtil_1.ParseStatus.mergeArray(status, result2);
            });
          }
          const result = ctx.data.map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          });
          return parseUtil_1.ParseStatus.mergeArray(status, result);
        }
        get element() {
          return this._def.type;
        }
        min(minLength, message) {
          return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        max(maxLength, message) {
          return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        length(len, message) {
          return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        nonempty(message) {
          return this.min(1, message);
        }
      };
      exports.ZodArray = ZodArray;
      ZodArray.create = (schema, params) => {
        return new ZodArray({
          type: schema,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: ZodFirstPartyTypeKind.ZodArray,
          ...processCreateParams(params)
        });
      };
      var objectUtil;
      (function(objectUtil2) {
        objectUtil2.mergeShapes = (first, second) => {
          return {
            ...first,
            ...second
          };
        };
      })(objectUtil = exports.objectUtil || (exports.objectUtil = {}));
      var AugmentFactory = (def) => (augmentation) => {
        return new ZodObject({
          ...def,
          shape: () => ({
            ...def.shape(),
            ...augmentation
          })
        });
      };
      function deepPartialify(schema) {
        if (schema instanceof ZodObject) {
          const newShape = {};
          for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
          }
          return new ZodObject({
            ...schema._def,
            shape: () => newShape
          });
        } else if (schema instanceof ZodArray) {
          return ZodArray.create(deepPartialify(schema.element));
        } else if (schema instanceof ZodOptional) {
          return ZodOptional.create(deepPartialify(schema.unwrap()));
        } else if (schema instanceof ZodNullable) {
          return ZodNullable.create(deepPartialify(schema.unwrap()));
        } else if (schema instanceof ZodTuple) {
          return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
        } else {
          return schema;
        }
      }
      var ZodObject = class extends ZodType {
        constructor() {
          super(...arguments);
          this._cached = null;
          this.nonstrict = this.passthrough;
          this.augment = AugmentFactory(this._def);
          this.extend = AugmentFactory(this._def);
        }
        _getCached() {
          if (this._cached !== null)
            return this._cached;
          const shape = this._def.shape();
          const keys2 = util_1.util.objectKeys(shape);
          return this._cached = { shape, keys: keys2 };
        }
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.object) {
            const ctx2 = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx2, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.object,
              received: ctx2.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const { status, ctx } = this._processInputParams(input);
          const { shape, keys: shapeKeys } = this._getCached();
          const extraKeys = [];
          if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
              if (!shapeKeys.includes(key)) {
                extraKeys.push(key);
              }
            }
          }
          const pairs = [];
          for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
              alwaysSet: key in ctx.data
            });
          }
          if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
              for (const key of extraKeys) {
                pairs.push({
                  key: { status: "valid", value: key },
                  value: { status: "valid", value: ctx.data[key] }
                });
              }
            } else if (unknownKeys === "strict") {
              if (extraKeys.length > 0) {
                (0, parseUtil_1.addIssueToContext)(ctx, {
                  code: ZodError_1.ZodIssueCode.unrecognized_keys,
                  keys: extraKeys
                });
                status.dirty();
              }
            } else if (unknownKeys === "strip") {
            } else {
              throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
          } else {
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
              const value = ctx.data[key];
              pairs.push({
                key: { status: "valid", value: key },
                value: catchall._parse(
                  new ParseInputLazyPath(ctx, value, ctx.path, key)
                ),
                alwaysSet: key in ctx.data
              });
            }
          }
          if (ctx.common.async) {
            return Promise.resolve().then(async () => {
              const syncPairs = [];
              for (const pair of pairs) {
                const key = await pair.key;
                syncPairs.push({
                  key,
                  value: await pair.value,
                  alwaysSet: pair.alwaysSet
                });
              }
              return syncPairs;
            }).then((syncPairs) => {
              return parseUtil_1.ParseStatus.mergeObjectSync(status, syncPairs);
            });
          } else {
            return parseUtil_1.ParseStatus.mergeObjectSync(status, pairs);
          }
        }
        get shape() {
          return this._def.shape();
        }
        strict(message) {
          errorUtil_1.errorUtil.errToObj;
          return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== void 0 ? {
              errorMap: (issue, ctx) => {
                var _a, _b, _c, _d;
                const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                if (issue.code === "unrecognized_keys")
                  return {
                    message: (_d = errorUtil_1.errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                  };
                return {
                  message: defaultError
                };
              }
            } : {}
          });
        }
        strip() {
          return new ZodObject({
            ...this._def,
            unknownKeys: "strip"
          });
        }
        passthrough() {
          return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
          });
        }
        setKey(key, schema) {
          return this.augment({ [key]: schema });
        }
        merge(merging) {
          const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
            typeName: ZodFirstPartyTypeKind.ZodObject
          });
          return merged;
        }
        catchall(index2) {
          return new ZodObject({
            ...this._def,
            catchall: index2
          });
        }
        pick(mask) {
          const shape = {};
          util_1.util.objectKeys(mask).map((key) => {
            if (this.shape[key])
              shape[key] = this.shape[key];
          });
          return new ZodObject({
            ...this._def,
            shape: () => shape
          });
        }
        omit(mask) {
          const shape = {};
          util_1.util.objectKeys(this.shape).map((key) => {
            if (util_1.util.objectKeys(mask).indexOf(key) === -1) {
              shape[key] = this.shape[key];
            }
          });
          return new ZodObject({
            ...this._def,
            shape: () => shape
          });
        }
        deepPartial() {
          return deepPartialify(this);
        }
        partial(mask) {
          const newShape = {};
          if (mask) {
            util_1.util.objectKeys(this.shape).map((key) => {
              if (util_1.util.objectKeys(mask).indexOf(key) === -1) {
                newShape[key] = this.shape[key];
              } else {
                newShape[key] = this.shape[key].optional();
              }
            });
            return new ZodObject({
              ...this._def,
              shape: () => newShape
            });
          } else {
            for (const key in this.shape) {
              const fieldSchema = this.shape[key];
              newShape[key] = fieldSchema.optional();
            }
          }
          return new ZodObject({
            ...this._def,
            shape: () => newShape
          });
        }
        required(mask) {
          const newShape = {};
          if (mask) {
            util_1.util.objectKeys(this.shape).map((key) => {
              if (util_1.util.objectKeys(mask).indexOf(key) === -1) {
                newShape[key] = this.shape[key];
              } else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                  newField = newField._def.innerType;
                }
                newShape[key] = newField;
              }
            });
          } else {
            for (const key in this.shape) {
              const fieldSchema = this.shape[key];
              let newField = fieldSchema;
              while (newField instanceof ZodOptional) {
                newField = newField._def.innerType;
              }
              newShape[key] = newField;
            }
          }
          return new ZodObject({
            ...this._def,
            shape: () => newShape
          });
        }
        keyof() {
          return createZodEnum(util_1.util.objectKeys(this.shape));
        }
      };
      exports.ZodObject = ZodObject;
      ZodObject.create = (shape, params) => {
        return new ZodObject({
          shape: () => shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params)
        });
      };
      ZodObject.strictCreate = (shape, params) => {
        return new ZodObject({
          shape: () => shape,
          unknownKeys: "strict",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params)
        });
      };
      ZodObject.lazycreate = (shape, params) => {
        return new ZodObject({
          shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params)
        });
      };
      var ZodUnion = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const options = this._def.options;
          function handleResults(results) {
            for (const result of results) {
              if (result.result.status === "valid") {
                return result.result;
              }
            }
            for (const result of results) {
              if (result.result.status === "dirty") {
                ctx.common.issues.push(...result.ctx.common.issues);
                return result.result;
              }
            }
            const unionErrors = results.map((result) => new ZodError_1.ZodError(result.ctx.common.issues));
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_union,
              unionErrors
            });
            return parseUtil_1.INVALID;
          }
          if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
              const childCtx = {
                ...ctx,
                common: {
                  ...ctx.common,
                  issues: []
                },
                parent: null
              };
              return {
                result: await option._parseAsync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: childCtx
                }),
                ctx: childCtx
              };
            })).then(handleResults);
          } else {
            let dirty = void 0;
            const issues = [];
            for (const option of options) {
              const childCtx = {
                ...ctx,
                common: {
                  ...ctx.common,
                  issues: []
                },
                parent: null
              };
              const result = option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              });
              if (result.status === "valid") {
                return result;
              } else if (result.status === "dirty" && !dirty) {
                dirty = { result, ctx: childCtx };
              }
              if (childCtx.common.issues.length) {
                issues.push(childCtx.common.issues);
              }
            }
            if (dirty) {
              ctx.common.issues.push(...dirty.ctx.common.issues);
              return dirty.result;
            }
            const unionErrors = issues.map((issues2) => new ZodError_1.ZodError(issues2));
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_union,
              unionErrors
            });
            return parseUtil_1.INVALID;
          }
        }
        get options() {
          return this._def.options;
        }
      };
      exports.ZodUnion = ZodUnion;
      ZodUnion.create = (types, params) => {
        return new ZodUnion({
          options: types,
          typeName: ZodFirstPartyTypeKind.ZodUnion,
          ...processCreateParams(params)
        });
      };
      var getDiscriminator = (type) => {
        if (type instanceof ZodLazy) {
          return getDiscriminator(type.schema);
        } else if (type instanceof ZodEffects) {
          return getDiscriminator(type.innerType());
        } else if (type instanceof ZodLiteral) {
          return [type.value];
        } else if (type instanceof ZodEnum) {
          return type.options;
        } else if (type instanceof ZodNativeEnum) {
          return Object.keys(type.enum);
        } else if (type instanceof ZodDefault) {
          return getDiscriminator(type._def.innerType);
        } else if (type instanceof ZodUndefined) {
          return [void 0];
        } else if (type instanceof ZodNull) {
          return [null];
        } else {
          return null;
        }
      };
      var ZodDiscriminatedUnion = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.object) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.object,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const discriminator = this.discriminator;
          const discriminatorValue = ctx.data[discriminator];
          const option = this.optionsMap.get(discriminatorValue);
          if (!option) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_union_discriminator,
              options: Array.from(this.optionsMap.keys()),
              path: [discriminator]
            });
            return parseUtil_1.INVALID;
          }
          if (ctx.common.async) {
            return option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
          } else {
            return option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
          }
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(discriminator, options, params) {
          const optionsMap = /* @__PURE__ */ new Map();
          for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues) {
              throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
              if (optionsMap.has(value)) {
                throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
              }
              optionsMap.set(value, type);
            }
          }
          return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params)
          });
        }
      };
      exports.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
      function mergeValues(a, b) {
        const aType = (0, util_1.getParsedType)(a);
        const bType = (0, util_1.getParsedType)(b);
        if (a === b) {
          return { valid: true, data: a };
        } else if (aType === util_1.ZodParsedType.object && bType === util_1.ZodParsedType.object) {
          const bKeys = util_1.util.objectKeys(b);
          const sharedKeys = util_1.util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
          const newObj = { ...a, ...b };
          for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
              return { valid: false };
            }
            newObj[key] = sharedValue.data;
          }
          return { valid: true, data: newObj };
        } else if (aType === util_1.ZodParsedType.array && bType === util_1.ZodParsedType.array) {
          if (a.length !== b.length) {
            return { valid: false };
          }
          const newArray = [];
          for (let index2 = 0; index2 < a.length; index2++) {
            const itemA = a[index2];
            const itemB = b[index2];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
              return { valid: false };
            }
            newArray.push(sharedValue.data);
          }
          return { valid: true, data: newArray };
        } else if (aType === util_1.ZodParsedType.date && bType === util_1.ZodParsedType.date && +a === +b) {
          return { valid: true, data: a };
        } else {
          return { valid: false };
        }
      }
      var ZodIntersection = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const handleParsed = (parsedLeft, parsedRight) => {
            if ((0, parseUtil_1.isAborted)(parsedLeft) || (0, parseUtil_1.isAborted)(parsedRight)) {
              return parseUtil_1.INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.invalid_intersection_types
              });
              return parseUtil_1.INVALID;
            }
            if ((0, parseUtil_1.isDirty)(parsedLeft) || (0, parseUtil_1.isDirty)(parsedRight)) {
              status.dirty();
            }
            return { status: status.value, value: merged.data };
          };
          if (ctx.common.async) {
            return Promise.all([
              this._def.left._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              }),
              this._def.right._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              })
            ]).then(([left, right]) => handleParsed(left, right));
          } else {
            return handleParsed(this._def.left._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }), this._def.right._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }));
          }
        }
      };
      exports.ZodIntersection = ZodIntersection;
      ZodIntersection.create = (left, right, params) => {
        return new ZodIntersection({
          left,
          right,
          typeName: ZodFirstPartyTypeKind.ZodIntersection,
          ...processCreateParams(params)
        });
      };
      var ZodTuple = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.array) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.array,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          if (ctx.data.length < this._def.items.length) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.too_small,
              minimum: this._def.items.length,
              inclusive: true,
              exact: false,
              type: "array"
            });
            return parseUtil_1.INVALID;
          }
          const rest = this._def.rest;
          if (!rest && ctx.data.length > this._def.items.length) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.too_big,
              maximum: this._def.items.length,
              inclusive: true,
              exact: false,
              type: "array"
            });
            status.dirty();
          }
          const items = ctx.data.map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
              return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
          }).filter((x) => !!x);
          if (ctx.common.async) {
            return Promise.all(items).then((results) => {
              return parseUtil_1.ParseStatus.mergeArray(status, results);
            });
          } else {
            return parseUtil_1.ParseStatus.mergeArray(status, items);
          }
        }
        get items() {
          return this._def.items;
        }
        rest(rest) {
          return new ZodTuple({
            ...this._def,
            rest
          });
        }
      };
      exports.ZodTuple = ZodTuple;
      ZodTuple.create = (schemas, params) => {
        if (!Array.isArray(schemas)) {
          throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
        }
        return new ZodTuple({
          items: schemas,
          typeName: ZodFirstPartyTypeKind.ZodTuple,
          rest: null,
          ...processCreateParams(params)
        });
      };
      var ZodRecord = class extends ZodType {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.object) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.object,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const pairs = [];
          const keyType = this._def.keyType;
          const valueType = this._def.valueType;
          for (const key in ctx.data) {
            pairs.push({
              key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
              value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
            });
          }
          if (ctx.common.async) {
            return parseUtil_1.ParseStatus.mergeObjectAsync(status, pairs);
          } else {
            return parseUtil_1.ParseStatus.mergeObjectSync(status, pairs);
          }
        }
        get element() {
          return this._def.valueType;
        }
        static create(first, second, third) {
          if (second instanceof ZodType) {
            return new ZodRecord({
              keyType: first,
              valueType: second,
              typeName: ZodFirstPartyTypeKind.ZodRecord,
              ...processCreateParams(third)
            });
          }
          return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
          });
        }
      };
      exports.ZodRecord = ZodRecord;
      var ZodMap = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.map) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.map,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const keyType = this._def.keyType;
          const valueType = this._def.valueType;
          const pairs = [...ctx.data.entries()].map(([key, value], index2) => {
            return {
              key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index2, "key"])),
              value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index2, "value"]))
            };
          });
          if (ctx.common.async) {
            const finalMap = /* @__PURE__ */ new Map();
            return Promise.resolve().then(async () => {
              for (const pair of pairs) {
                const key = await pair.key;
                const value = await pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                  return parseUtil_1.INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                  status.dirty();
                }
                finalMap.set(key.value, value.value);
              }
              return { status: status.value, value: finalMap };
            });
          } else {
            const finalMap = /* @__PURE__ */ new Map();
            for (const pair of pairs) {
              const key = pair.key;
              const value = pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return parseUtil_1.INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          }
        }
      };
      exports.ZodMap = ZodMap;
      ZodMap.create = (keyType, valueType, params) => {
        return new ZodMap({
          valueType,
          keyType,
          typeName: ZodFirstPartyTypeKind.ZodMap,
          ...processCreateParams(params)
        });
      };
      var ZodSet = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.set) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.set,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const def = this._def;
          if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_small,
                minimum: def.minSize.value,
                type: "set",
                inclusive: true,
                exact: false,
                message: def.minSize.message
              });
              status.dirty();
            }
          }
          if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
              (0, parseUtil_1.addIssueToContext)(ctx, {
                code: ZodError_1.ZodIssueCode.too_big,
                maximum: def.maxSize.value,
                type: "set",
                inclusive: true,
                exact: false,
                message: def.maxSize.message
              });
              status.dirty();
            }
          }
          const valueType = this._def.valueType;
          function finalizeSet(elements2) {
            const parsedSet = /* @__PURE__ */ new Set();
            for (const element2 of elements2) {
              if (element2.status === "aborted")
                return parseUtil_1.INVALID;
              if (element2.status === "dirty")
                status.dirty();
              parsedSet.add(element2.value);
            }
            return { status: status.value, value: parsedSet };
          }
          const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
          if (ctx.common.async) {
            return Promise.all(elements).then((elements2) => finalizeSet(elements2));
          } else {
            return finalizeSet(elements);
          }
        }
        min(minSize, message) {
          return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        max(maxSize, message) {
          return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: errorUtil_1.errorUtil.toString(message) }
          });
        }
        size(size, message) {
          return this.min(size, message).max(size, message);
        }
        nonempty(message) {
          return this.min(1, message);
        }
      };
      exports.ZodSet = ZodSet;
      ZodSet.create = (valueType, params) => {
        return new ZodSet({
          valueType,
          minSize: null,
          maxSize: null,
          typeName: ZodFirstPartyTypeKind.ZodSet,
          ...processCreateParams(params)
        });
      };
      var ZodFunction = class extends ZodType {
        constructor() {
          super(...arguments);
          this.validate = this.implement;
        }
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.function) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.function,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          function makeArgsIssue(args, error) {
            return (0, parseUtil_1.makeIssue)({
              data: args,
              path: ctx.path,
              errorMaps: [
                ctx.common.contextualErrorMap,
                ctx.schemaErrorMap,
                (0, errors_1.getErrorMap)(),
                errors_1.defaultErrorMap
              ].filter((x) => !!x),
              issueData: {
                code: ZodError_1.ZodIssueCode.invalid_arguments,
                argumentsError: error
              }
            });
          }
          function makeReturnsIssue(returns, error) {
            return (0, parseUtil_1.makeIssue)({
              data: returns,
              path: ctx.path,
              errorMaps: [
                ctx.common.contextualErrorMap,
                ctx.schemaErrorMap,
                (0, errors_1.getErrorMap)(),
                errors_1.defaultErrorMap
              ].filter((x) => !!x),
              issueData: {
                code: ZodError_1.ZodIssueCode.invalid_return_type,
                returnTypeError: error
              }
            });
          }
          const params = { errorMap: ctx.common.contextualErrorMap };
          const fn = ctx.data;
          if (this._def.returns instanceof ZodPromise) {
            return (0, parseUtil_1.OK)(async (...args) => {
              const error = new ZodError_1.ZodError([]);
              const parsedArgs = await this._def.args.parseAsync(args, params).catch((e) => {
                error.addIssue(makeArgsIssue(args, e));
                throw error;
              });
              const result = await fn(...parsedArgs);
              const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e) => {
                error.addIssue(makeReturnsIssue(result, e));
                throw error;
              });
              return parsedReturns;
            });
          } else {
            return (0, parseUtil_1.OK)((...args) => {
              const parsedArgs = this._def.args.safeParse(args, params);
              if (!parsedArgs.success) {
                throw new ZodError_1.ZodError([makeArgsIssue(args, parsedArgs.error)]);
              }
              const result = fn(...parsedArgs.data);
              const parsedReturns = this._def.returns.safeParse(result, params);
              if (!parsedReturns.success) {
                throw new ZodError_1.ZodError([makeReturnsIssue(result, parsedReturns.error)]);
              }
              return parsedReturns.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...items) {
          return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
          });
        }
        returns(returnType) {
          return new ZodFunction({
            ...this._def,
            returns: returnType
          });
        }
        implement(func) {
          const validatedFunc = this.parse(func);
          return validatedFunc;
        }
        strictImplement(func) {
          const validatedFunc = this.parse(func);
          return validatedFunc;
        }
        static create(args, returns, params) {
          return new ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params)
          });
        }
      };
      exports.ZodFunction = ZodFunction;
      var ZodLazy = class extends ZodType {
        get schema() {
          return this._def.getter();
        }
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const lazySchema = this._def.getter();
          return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
        }
      };
      exports.ZodLazy = ZodLazy;
      ZodLazy.create = (getter, params) => {
        return new ZodLazy({
          getter,
          typeName: ZodFirstPartyTypeKind.ZodLazy,
          ...processCreateParams(params)
        });
      };
      var ZodLiteral = class extends ZodType {
        _parse(input) {
          if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_literal,
              expected: this._def.value
            });
            return parseUtil_1.INVALID;
          }
          return { status: "valid", value: input.data };
        }
        get value() {
          return this._def.value;
        }
      };
      exports.ZodLiteral = ZodLiteral;
      ZodLiteral.create = (value, params) => {
        return new ZodLiteral({
          value,
          typeName: ZodFirstPartyTypeKind.ZodLiteral,
          ...processCreateParams(params)
        });
      };
      function createZodEnum(values, params) {
        return new ZodEnum({
          values,
          typeName: ZodFirstPartyTypeKind.ZodEnum,
          ...processCreateParams(params)
        });
      }
      var ZodEnum = class extends ZodType {
        _parse(input) {
          if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, parseUtil_1.addIssueToContext)(ctx, {
              expected: util_1.util.joinValues(expectedValues),
              received: ctx.parsedType,
              code: ZodError_1.ZodIssueCode.invalid_type
            });
            return parseUtil_1.INVALID;
          }
          if (this._def.values.indexOf(input.data) === -1) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            (0, parseUtil_1.addIssueToContext)(ctx, {
              received: ctx.data,
              code: ZodError_1.ZodIssueCode.invalid_enum_value,
              options: expectedValues
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          const enumValues = {};
          for (const val of this._def.values) {
            enumValues[val] = val;
          }
          return enumValues;
        }
        get Values() {
          const enumValues = {};
          for (const val of this._def.values) {
            enumValues[val] = val;
          }
          return enumValues;
        }
        get Enum() {
          const enumValues = {};
          for (const val of this._def.values) {
            enumValues[val] = val;
          }
          return enumValues;
        }
      };
      exports.ZodEnum = ZodEnum;
      ZodEnum.create = createZodEnum;
      var ZodNativeEnum = class extends ZodType {
        _parse(input) {
          const nativeEnumValues = util_1.util.getValidEnumValues(this._def.values);
          const ctx = this._getOrReturnCtx(input);
          if (ctx.parsedType !== util_1.ZodParsedType.string && ctx.parsedType !== util_1.ZodParsedType.number) {
            const expectedValues = util_1.util.objectValues(nativeEnumValues);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              expected: util_1.util.joinValues(expectedValues),
              received: ctx.parsedType,
              code: ZodError_1.ZodIssueCode.invalid_type
            });
            return parseUtil_1.INVALID;
          }
          if (nativeEnumValues.indexOf(input.data) === -1) {
            const expectedValues = util_1.util.objectValues(nativeEnumValues);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              received: ctx.data,
              code: ZodError_1.ZodIssueCode.invalid_enum_value,
              options: expectedValues
            });
            return parseUtil_1.INVALID;
          }
          return (0, parseUtil_1.OK)(input.data);
        }
        get enum() {
          return this._def.values;
        }
      };
      exports.ZodNativeEnum = ZodNativeEnum;
      ZodNativeEnum.create = (values, params) => {
        return new ZodNativeEnum({
          values,
          typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
          ...processCreateParams(params)
        });
      };
      var ZodPromise = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== util_1.ZodParsedType.promise && ctx.common.async === false) {
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.promise,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          const promisified = ctx.parsedType === util_1.ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
          return (0, parseUtil_1.OK)(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
              path: ctx.path,
              errorMap: ctx.common.contextualErrorMap
            });
          }));
        }
      };
      exports.ZodPromise = ZodPromise;
      ZodPromise.create = (schema, params) => {
        return new ZodPromise({
          type: schema,
          typeName: ZodFirstPartyTypeKind.ZodPromise,
          ...processCreateParams(params)
        });
      };
      var ZodEffects = class extends ZodType {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
        }
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const effect = this._def.effect || null;
          if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data);
            if (ctx.common.async) {
              return Promise.resolve(processed).then((processed2) => {
                return this._def.schema._parseAsync({
                  data: processed2,
                  path: ctx.path,
                  parent: ctx
                });
              });
            } else {
              return this._def.schema._parseSync({
                data: processed,
                path: ctx.path,
                parent: ctx
              });
            }
          }
          const checkCtx = {
            addIssue: (arg) => {
              (0, parseUtil_1.addIssueToContext)(ctx, arg);
              if (arg.fatal) {
                status.abort();
              } else {
                status.dirty();
              }
            },
            get path() {
              return ctx.path;
            }
          };
          checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
          if (effect.type === "refinement") {
            const executeRefinement = (acc) => {
              const result = effect.refinement(acc, checkCtx);
              if (ctx.common.async) {
                return Promise.resolve(result);
              }
              if (result instanceof Promise) {
                throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
              }
              return acc;
            };
            if (ctx.common.async === false) {
              const inner = this._def.schema._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
              if (inner.status === "aborted")
                return parseUtil_1.INVALID;
              if (inner.status === "dirty")
                status.dirty();
              executeRefinement(inner.value);
              return { status: status.value, value: inner.value };
            } else {
              return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
                if (inner.status === "aborted")
                  return parseUtil_1.INVALID;
                if (inner.status === "dirty")
                  status.dirty();
                return executeRefinement(inner.value).then(() => {
                  return { status: status.value, value: inner.value };
                });
              });
            }
          }
          if (effect.type === "transform") {
            if (ctx.common.async === false) {
              const base2 = this._def.schema._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
              if (!(0, parseUtil_1.isValid)(base2))
                return base2;
              const result = effect.transform(base2.value, checkCtx);
              if (result instanceof Promise) {
                throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
              }
              return { status: status.value, value: result };
            } else {
              return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base2) => {
                if (!(0, parseUtil_1.isValid)(base2))
                  return base2;
                return Promise.resolve(effect.transform(base2.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
              });
            }
          }
          util_1.util.assertNever(effect);
        }
      };
      exports.ZodEffects = ZodEffects;
      exports.ZodTransformer = ZodEffects;
      ZodEffects.create = (schema, effect, params) => {
        return new ZodEffects({
          schema,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect,
          ...processCreateParams(params)
        });
      };
      ZodEffects.createWithPreprocess = (preprocess2, schema, params) => {
        return new ZodEffects({
          schema,
          effect: { type: "preprocess", transform: preprocess2 },
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          ...processCreateParams(params)
        });
      };
      var ZodOptional = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === util_1.ZodParsedType.undefined) {
            return (0, parseUtil_1.OK)(void 0);
          }
          return this._def.innerType._parse(input);
        }
        unwrap() {
          return this._def.innerType;
        }
      };
      exports.ZodOptional = ZodOptional;
      ZodOptional.create = (type, params) => {
        return new ZodOptional({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodOptional,
          ...processCreateParams(params)
        });
      };
      var ZodNullable = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === util_1.ZodParsedType.null) {
            return (0, parseUtil_1.OK)(null);
          }
          return this._def.innerType._parse(input);
        }
        unwrap() {
          return this._def.innerType;
        }
      };
      exports.ZodNullable = ZodNullable;
      ZodNullable.create = (type, params) => {
        return new ZodNullable({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodNullable,
          ...processCreateParams(params)
        });
      };
      var ZodDefault = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          let data = ctx.data;
          if (ctx.parsedType === util_1.ZodParsedType.undefined) {
            data = this._def.defaultValue();
          }
          return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
          });
        }
        removeDefault() {
          return this._def.innerType;
        }
      };
      exports.ZodDefault = ZodDefault;
      ZodDefault.create = (type, params) => {
        return new ZodDefault({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodDefault,
          defaultValue: typeof params.default === "function" ? params.default : () => params.default,
          ...processCreateParams(params)
        });
      };
      var ZodCatch = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const result = this._def.innerType._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if ((0, parseUtil_1.isAsync)(result)) {
            return result.then((result2) => {
              return {
                status: "valid",
                value: result2.status === "valid" ? result2.value : this._def.defaultValue()
              };
            });
          } else {
            return {
              status: "valid",
              value: result.status === "valid" ? result.value : this._def.defaultValue()
            };
          }
        }
        removeDefault() {
          return this._def.innerType;
        }
      };
      exports.ZodCatch = ZodCatch;
      ZodCatch.create = (type, params) => {
        return new ZodCatch({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodCatch,
          defaultValue: typeof params.default === "function" ? params.default : () => params.default,
          ...processCreateParams(params)
        });
      };
      var ZodNaN = class extends ZodType {
        _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== util_1.ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            (0, parseUtil_1.addIssueToContext)(ctx, {
              code: ZodError_1.ZodIssueCode.invalid_type,
              expected: util_1.ZodParsedType.nan,
              received: ctx.parsedType
            });
            return parseUtil_1.INVALID;
          }
          return { status: "valid", value: input.data };
        }
      };
      exports.ZodNaN = ZodNaN;
      ZodNaN.create = (params) => {
        return new ZodNaN({
          typeName: ZodFirstPartyTypeKind.ZodNaN,
          ...processCreateParams(params)
        });
      };
      exports.BRAND = Symbol("zod_brand");
      var ZodBranded = class extends ZodType {
        _parse(input) {
          const { ctx } = this._processInputParams(input);
          const data = ctx.data;
          return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
          });
        }
        unwrap() {
          return this._def.type;
        }
      };
      exports.ZodBranded = ZodBranded;
      var ZodPipeline = class extends ZodType {
        _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.common.async) {
            const handleAsync = async () => {
              const inResult = await this._def.in._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
              });
              if (inResult.status === "aborted")
                return parseUtil_1.INVALID;
              if (inResult.status === "dirty") {
                status.dirty();
                return (0, parseUtil_1.DIRTY)(inResult.value);
              } else {
                return this._def.out._parseAsync({
                  data: inResult.value,
                  path: ctx.path,
                  parent: ctx
                });
              }
            };
            return handleAsync();
          } else {
            const inResult = this._def.in._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return parseUtil_1.INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return {
                status: "dirty",
                value: inResult.value
              };
            } else {
              return this._def.out._parseSync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          }
        }
        static create(a, b) {
          return new ZodPipeline({
            in: a,
            out: b,
            typeName: ZodFirstPartyTypeKind.ZodPipeline
          });
        }
      };
      exports.ZodPipeline = ZodPipeline;
      var custom = (check, params = {}, fatal) => {
        if (check)
          return ZodAny.create().superRefine((data, ctx) => {
            if (!check(data)) {
              const p = typeof params === "function" ? params(data) : params;
              const p2 = typeof p === "string" ? { message: p } : p;
              ctx.addIssue({ code: "custom", ...p2, fatal });
            }
          });
        return ZodAny.create();
      };
      exports.custom = custom;
      exports.late = {
        object: ZodObject.lazycreate
      };
      var ZodFirstPartyTypeKind;
      (function(ZodFirstPartyTypeKind2) {
        ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
        ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
        ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
        ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
        ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
        ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
        ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
        ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
        ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
        ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
        ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
        ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
        ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
        ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
        ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
        ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
        ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
        ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
        ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
        ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
        ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
        ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
        ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
        ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
        ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
        ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
        ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
        ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
        ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
        ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
        ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
        ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
        ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
        ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
        ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
      })(ZodFirstPartyTypeKind = exports.ZodFirstPartyTypeKind || (exports.ZodFirstPartyTypeKind = {}));
      var instanceOfType = (cls, params = {
        message: `Input not instance of ${cls.name}`
      }) => (0, exports.custom)((data) => data instanceof cls, params, true);
      exports.instanceof = instanceOfType;
      var stringType = ZodString.create;
      exports.string = stringType;
      var numberType = ZodNumber.create;
      exports.number = numberType;
      var nanType = ZodNaN.create;
      exports.nan = nanType;
      var bigIntType = ZodBigInt.create;
      exports.bigint = bigIntType;
      var booleanType = ZodBoolean.create;
      exports.boolean = booleanType;
      var dateType = ZodDate.create;
      exports.date = dateType;
      var symbolType = ZodSymbol.create;
      exports.symbol = symbolType;
      var undefinedType = ZodUndefined.create;
      exports.undefined = undefinedType;
      var nullType = ZodNull.create;
      exports.null = nullType;
      var anyType = ZodAny.create;
      exports.any = anyType;
      var unknownType = ZodUnknown.create;
      exports.unknown = unknownType;
      var neverType = ZodNever.create;
      exports.never = neverType;
      var voidType = ZodVoid.create;
      exports.void = voidType;
      var arrayType = ZodArray.create;
      exports.array = arrayType;
      var objectType = ZodObject.create;
      exports.object = objectType;
      var strictObjectType = ZodObject.strictCreate;
      exports.strictObject = strictObjectType;
      var unionType = ZodUnion.create;
      exports.union = unionType;
      var discriminatedUnionType = ZodDiscriminatedUnion.create;
      exports.discriminatedUnion = discriminatedUnionType;
      var intersectionType = ZodIntersection.create;
      exports.intersection = intersectionType;
      var tupleType = ZodTuple.create;
      exports.tuple = tupleType;
      var recordType = ZodRecord.create;
      exports.record = recordType;
      var mapType = ZodMap.create;
      exports.map = mapType;
      var setType = ZodSet.create;
      exports.set = setType;
      var functionType = ZodFunction.create;
      exports.function = functionType;
      var lazyType = ZodLazy.create;
      exports.lazy = lazyType;
      var literalType = ZodLiteral.create;
      exports.literal = literalType;
      var enumType = ZodEnum.create;
      exports.enum = enumType;
      var nativeEnumType = ZodNativeEnum.create;
      exports.nativeEnum = nativeEnumType;
      var promiseType = ZodPromise.create;
      exports.promise = promiseType;
      var effectsType = ZodEffects.create;
      exports.effect = effectsType;
      exports.transformer = effectsType;
      var optionalType = ZodOptional.create;
      exports.optional = optionalType;
      var nullableType = ZodNullable.create;
      exports.nullable = nullableType;
      var preprocessType = ZodEffects.createWithPreprocess;
      exports.preprocess = preprocessType;
      var pipelineType = ZodPipeline.create;
      exports.pipeline = pipelineType;
      var ostring = () => stringType().optional();
      exports.ostring = ostring;
      var onumber = () => numberType().optional();
      exports.onumber = onumber;
      var oboolean = () => booleanType().optional();
      exports.oboolean = oboolean;
      exports.coerce = {
        string: (arg) => ZodString.create({ ...arg, coerce: true }),
        number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
        boolean: (arg) => ZodBoolean.create({ ...arg, coerce: true }),
        bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
        date: (arg) => ZodDate.create({ ...arg, coerce: true })
      };
      exports.NEVER = parseUtil_1.INVALID;
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/external.js
  var require_external = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/external.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_errors(), exports);
      __exportStar(require_parseUtil(), exports);
      __exportStar(require_typeAliases(), exports);
      __exportStar(require_util(), exports);
      __exportStar(require_types(), exports);
      __exportStar(require_ZodError(), exports);
    }
  });

  // ../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/index.js
  var require_lib3 = __commonJS({
    "../../node_modules/.pnpm/zod@3.20.2/node_modules/zod/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod2) {
        if (mod2 && mod2.__esModule)
          return mod2;
        var result = {};
        if (mod2 != null) {
          for (var k in mod2)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod2, k))
              __createBinding(result, mod2, k);
        }
        __setModuleDefault(result, mod2);
        return result;
      };
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.z = void 0;
      var mod = __importStar(require_external());
      exports.z = mod;
      __exportStar(require_external(), exports);
      exports.default = mod;
    }
  });

  // ../common/build/webview-api/ErrorSchema.js
  var require_ErrorSchema = __commonJS({
    "../common/build/webview-api/ErrorSchema.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.errorSchema = void 0;
      var zod_1 = __importDefault(require_lib3());
      exports.errorSchema = zod_1.default.union([
        zod_1.default.string(),
        zod_1.default.object({
          title: zod_1.default.string(),
          message: zod_1.default.string(),
          level: zod_1.default.union([zod_1.default.literal("error"), zod_1.default.literal("warning")]).default("error").optional(),
          disableRetry: zod_1.default.boolean().optional(),
          disableDismiss: zod_1.default.boolean().optional()
        })
      ]);
    }
  });

  // ../common/build/webview-api/ConversationSchema.js
  var require_ConversationSchema = __commonJS({
    "../common/build/webview-api/ConversationSchema.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.conversationSchema = exports.messageSchema = exports.selectionSchema = void 0;
      var zod_1 = __importDefault(require_lib3());
      var ErrorSchema_1 = require_ErrorSchema();
      exports.selectionSchema = zod_1.default.object({
        filename: zod_1.default.string(),
        startLine: zod_1.default.number(),
        endLine: zod_1.default.number(),
        text: zod_1.default.string()
      });
      exports.messageSchema = zod_1.default.object({
        author: zod_1.default.union([zod_1.default.literal("user"), zod_1.default.literal("bot")]),
        content: zod_1.default.string()
      });
      var messageExchangeContentSchema = zod_1.default.object({
        type: zod_1.default.literal("messageExchange"),
        messages: zod_1.default.array(exports.messageSchema),
        error: ErrorSchema_1.errorSchema.optional(),
        state: zod_1.default.discriminatedUnion("type", [
          zod_1.default.object({
            type: zod_1.default.literal("userCanReply"),
            responsePlaceholder: zod_1.default.union([zod_1.default.string(), zod_1.default.undefined()])
          }),
          zod_1.default.object({
            type: zod_1.default.literal("waitingForBotAnswer"),
            botAction: zod_1.default.union([zod_1.default.string(), zod_1.default.undefined()])
          }),
          zod_1.default.object({
            type: zod_1.default.literal("botAnswerStreaming"),
            partialAnswer: zod_1.default.string()
          })
        ])
      });
      var instructionRefinementContentSchema = zod_1.default.object({
        type: zod_1.default.literal("instructionRefinement"),
        instruction: zod_1.default.string(),
        error: ErrorSchema_1.errorSchema.optional(),
        state: zod_1.default.discriminatedUnion("type", [
          zod_1.default.object({
            type: zod_1.default.literal("userCanRefineInstruction"),
            label: zod_1.default.union([zod_1.default.string(), zod_1.default.undefined()]),
            responseMessage: zod_1.default.union([zod_1.default.string(), zod_1.default.undefined()])
          }),
          zod_1.default.object({
            type: zod_1.default.literal("waitingForBotAnswer"),
            botAction: zod_1.default.union([zod_1.default.string(), zod_1.default.undefined()])
          })
        ])
      });
      exports.conversationSchema = zod_1.default.object({
        id: zod_1.default.string(),
        header: zod_1.default.object({
          title: zod_1.default.string(),
          isTitleMessage: zod_1.default.boolean(),
          codicon: zod_1.default.string()
        }),
        content: zod_1.default.discriminatedUnion("type", [
          messageExchangeContentSchema,
          instructionRefinementContentSchema
        ])
      });
    }
  });

  // ../common/build/webview-api/PanelState.js
  var require_PanelState = __commonJS({
    "../common/build/webview-api/PanelState.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.panelStateSchema = void 0;
      var zod_1 = __importDefault(require_lib3());
      var ConversationSchema_1 = require_ConversationSchema();
      var ErrorSchema_1 = require_ErrorSchema();
      exports.panelStateSchema = zod_1.default.discriminatedUnion("type", [
        zod_1.default.object({
          type: zod_1.default.literal("login")
        }),
        zod_1.default.object({
          type: zod_1.default.literal("chat"),
          conversations: zod_1.default.array(ConversationSchema_1.conversationSchema),
          selectedConversationId: zod_1.default.union([zod_1.default.string(), zod_1.default.undefined()]),
          hasFittenAIApiKey: zod_1.default.boolean(),
          surfacePromptForFittenAIPlus: zod_1.default.boolean(),
          error: ErrorSchema_1.errorSchema.optional()
        }),
        zod_1.default.object({
          type: zod_1.default.literal("diff"),
          oldCode: zod_1.default.string(),
          newCode: zod_1.default.string(),
          languageId: zod_1.default.string().optional()
        })
      ]).optional();
    }
  });

  // ../common/build/webview-api/IncomingMessage.js
  var require_IncomingMessage = __commonJS({
    "../common/build/webview-api/IncomingMessage.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.incomingMessageSchema = void 0;
      var zod_1 = __importDefault(require_lib3());
      var PanelState_1 = require_PanelState();
      exports.incomingMessageSchema = zod_1.default.object({
        data: zod_1.default.object({
          type: zod_1.default.literal("updateState"),
          state: PanelState_1.panelStateSchema
        })
      });
    }
  });

  // ../common/build/webview-api/OutgoingMessage.js
  var require_OutgoingMessage = __commonJS({
    "../common/build/webview-api/OutgoingMessage.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.outgoingMessageSchema = void 0;
      var zod_1 = __importDefault(require_lib3());
      var ErrorSchema_1 = require_ErrorSchema();
      exports.outgoingMessageSchema = zod_1.default.discriminatedUnion("type", [
        zod_1.default.object({
          type: zod_1.default.literal("startChat")
        }),
        zod_1.default.object({
          type: zod_1.default.literal("enterFittenAIApiKey"),
          data: zod_1.default.object({
            apikey: zod_1.default.string()
          })
        }),
        zod_1.default.object({
          type: zod_1.default.literal("clickCollapsedConversation"),
          data: zod_1.default.object({
            id: zod_1.default.string()
          })
        }),
        zod_1.default.object({
          type: zod_1.default.literal("deleteConversation"),
          data: zod_1.default.object({
            id: zod_1.default.string()
          })
        }),
        zod_1.default.object({
          type: zod_1.default.literal("exportConversation"),
          data: zod_1.default.object({
            id: zod_1.default.string()
          })
        }),
        zod_1.default.object({
          type: zod_1.default.literal("sendMessage"),
          data: zod_1.default.object({
            id: zod_1.default.string(),
            message: zod_1.default.string()
          })
        }),
        zod_1.default.object({
          type: zod_1.default.literal("reportError"),
          error: ErrorSchema_1.errorSchema
        }),
        zod_1.default.object({
          type: zod_1.default.literal("dismissError"),
          data: zod_1.default.object({
            id: zod_1.default.string()
          })
        }),
        zod_1.default.object({
          type: zod_1.default.literal("retry"),
          data: zod_1.default.object({
            id: zod_1.default.string()
          })
        }),
        zod_1.default.object({
          type: zod_1.default.literal("applyDiff")
        }),
        zod_1.default.object({
          type: zod_1.default.literal("insertPromptIntoEditor"),
          data: zod_1.default.object({
            id: zod_1.default.string()
          })
        }),
        zod_1.default.object({
          type: zod_1.default.literal("fetch"),
          url: zod_1.default.string(),
          options: zod_1.default.object({
            method: zod_1.default.string(),
            headers: zod_1.default.object({
              "Content-Type": zod_1.default.string()
            }),
            body: zod_1.default.string()
          })
        }),
        zod_1.default.object({
          type: zod_1.default.literal("startLoading")
        }),
        zod_1.default.object({
          type: zod_1.default.literal("stopLoading")
        })
      ]);
    }
  });

  // ../common/build/webview-api/index.js
  var require_webview_api = __commonJS({
    "../common/build/webview-api/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_ConversationSchema(), exports);
      __exportStar(require_ErrorSchema(), exports);
      __exportStar(require_IncomingMessage(), exports);
      __exportStar(require_OutgoingMessage(), exports);
      __exportStar(require_PanelState(), exports);
    }
  });

  // ../common/build/util/nextId.js
  var require_nextId = __commonJS({
    "../common/build/util/nextId.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createNextId = void 0;
      function createNextId({ prefix = "" }) {
        let id = 0;
        return () => `${prefix}${id++}`;
      }
      exports.createNextId = createNextId;
    }
  });

  // ../common/build/util/index.js
  var require_util2 = __commonJS({
    "../common/build/util/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_nextId(), exports);
    }
  });

  // ../common/build/index.js
  var require_build = __commonJS({
    "../common/build/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.util = exports.webviewApi = void 0;
      exports.webviewApi = __importStar(require_webview_api());
      exports.util = __importStar(require_util2());
    }
  });

  // build/webview.js
  var React13 = __toESM(require_react(), 1);
  var import_client = __toESM(require_client(), 1);

  // build/panel/ChatPanelView.js
  var import_react10 = __toESM(require_react(), 1);

  // build/component/CollapsedConversationView.js
  var import_react2 = __toESM(require_react(), 1);

  // build/component/ConversationHeader.js
  var import_react = __toESM(require_react(), 1);
  var ConversationHeader = ({ conversation, onIconClick }) => {
    return import_react.default.createElement(
      "div",
      { className: "header" },
      import_react.default.createElement("i", { className: `codicon codicon-${conversation.header.codicon} inline` }),
      conversation.header.isTitleMessage ? import_react.default.createElement("span", { className: "message user" }, conversation.header.title) : conversation.header.title,
      onIconClick && import_react.default.createElement(
        "span",
        null,
        "\xA0",
        import_react.default.createElement("i", { className: "codicon codicon-eye inline", onClick: onIconClick })
      )
    );
  };

  // build/component/CollapsedConversationView.js
  var CollapsedConversationView = ({ conversation, onClick }) => import_react2.default.createElement(
    "div",
    { className: `conversation collapsed`, onClick },
    import_react2.default.createElement(ConversationHeader, { conversation })
  );

  // build/component/ExpandedConversationView.js
  var import_react9 = __toESM(require_react(), 1);

  // build/component/InstructionRefinementView.js
  var import_react7 = __toESM(require_react(), 1);

  // build/component/ChatInput.js
  var import_react3 = __toESM(require_react(), 1);
  var ChatInput = ({ placeholder, disabled, text: text4, onChange, onSubmit, shouldCreateNewLineOnEnter }) => {
    const callbackRef = (0, import_react3.useCallback)((inputElement) => {
      if (inputElement) {
        setTimeout(() => {
          inputElement.focus();
        }, 50);
      }
    }, []);
    const textareaWrapperRef = (0, import_react3.useRef)(null);
    return import_react3.default.createElement(
      "div",
      { className: "chat-input", ref: textareaWrapperRef },
      import_react3.default.createElement("textarea", {
        disabled,
        ref: callbackRef,
        placeholder,
        value: text4,
        rows: 1,
        onInput: (event) => {
          if (!textareaWrapperRef.current)
            return;
          textareaWrapperRef.current.dataset.replicatedValue = event.currentTarget.value;
          onChange?.(event.currentTarget.value);
        },
        onKeyDown: (event) => {
          if (!(event.target instanceof HTMLTextAreaElement) || event.shiftKey || onSubmit == null || event.key !== "Enter" || shouldCreateNewLineOnEnter && !event.ctrlKey && !event.metaKey) {
            return;
          }
          const value = event.target.value.trim();
          if (value !== "") {
            event.preventDefault();
            event.stopPropagation();
            onSubmit(value);
          }
        }
      })
    );
  };

  // build/component/ErrorMessage.js
  var import_react6 = __toESM(require_react(), 1);

  // ../../node_modules/.pnpm/react-markdown@8.0.5_@types+react@18.0.26_react@18.2.0/node_modules/react-markdown/lib/uri-transformer.js
  var protocols = ["http", "https", "mailto", "tel"];
  function uriTransformer(uri) {
    const url = (uri || "").trim();
    const first = url.charAt(0);
    if (first === "#" || first === "/") {
      return url;
    }
    const colon = url.indexOf(":");
    if (colon === -1) {
      return url;
    }
    let index2 = -1;
    while (++index2 < protocols.length) {
      const protocol = protocols[index2];
      if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
        return url;
      }
    }
    index2 = url.indexOf("?");
    if (index2 !== -1 && colon > index2) {
      return url;
    }
    index2 = url.indexOf("#");
    if (index2 !== -1 && colon > index2) {
      return url;
    }
    return "javascript:void(0)";
  }

  // ../../node_modules/.pnpm/react-markdown@8.0.5_@types+react@18.0.26_react@18.2.0/node_modules/react-markdown/lib/react-markdown.js
  var import_react5 = __toESM(require_react(), 1);

  // ../../node_modules/.pnpm/vfile@5.3.6/node_modules/vfile/lib/index.js
  var import_is_buffer = __toESM(require_is_buffer(), 1);

  // ../../node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/lib/index.js
  function stringifyPosition(value) {
    if (!value || typeof value !== "object") {
      return "";
    }
    if ("position" in value || "type" in value) {
      return position(value.position);
    }
    if ("start" in value || "end" in value) {
      return position(value);
    }
    if ("line" in value || "column" in value) {
      return point(value);
    }
    return "";
  }
  function point(point4) {
    return index(point4 && point4.line) + ":" + index(point4 && point4.column);
  }
  function position(pos) {
    return point(pos && pos.start) + "-" + point(pos && pos.end);
  }
  function index(value) {
    return value && typeof value === "number" ? value : 1;
  }

  // ../../node_modules/.pnpm/vfile-message@3.1.3/node_modules/vfile-message/index.js
  var VFileMessage = class extends Error {
    constructor(reason, place, origin) {
      const parts = [null, null];
      let position3 = {
        start: { line: null, column: null },
        end: { line: null, column: null }
      };
      super();
      if (typeof place === "string") {
        origin = place;
        place = void 0;
      }
      if (typeof origin === "string") {
        const index2 = origin.indexOf(":");
        if (index2 === -1) {
          parts[1] = origin;
        } else {
          parts[0] = origin.slice(0, index2);
          parts[1] = origin.slice(index2 + 1);
        }
      }
      if (place) {
        if ("type" in place || "position" in place) {
          if (place.position) {
            position3 = place.position;
          }
        } else if ("start" in place || "end" in place) {
          position3 = place;
        } else if ("line" in place || "column" in place) {
          position3.start = place;
        }
      }
      this.name = stringifyPosition(place) || "1:1";
      this.message = typeof reason === "object" ? reason.message : reason;
      this.stack = "";
      if (typeof reason === "object" && reason.stack) {
        this.stack = reason.stack;
      }
      this.reason = this.message;
      this.fatal;
      this.line = position3.start.line;
      this.column = position3.start.column;
      this.position = position3;
      this.source = parts[0];
      this.ruleId = parts[1];
      this.file;
      this.actual;
      this.expected;
      this.url;
      this.note;
    }
  };
  VFileMessage.prototype.file = "";
  VFileMessage.prototype.name = "";
  VFileMessage.prototype.reason = "";
  VFileMessage.prototype.message = "";
  VFileMessage.prototype.stack = "";
  VFileMessage.prototype.fatal = null;
  VFileMessage.prototype.column = null;
  VFileMessage.prototype.line = null;
  VFileMessage.prototype.source = null;
  VFileMessage.prototype.ruleId = null;
  VFileMessage.prototype.position = null;

  // ../../node_modules/.pnpm/vfile@5.3.6/node_modules/vfile/lib/minpath.browser.js
  var path = { basename, dirname, extname, join, sep: "/" };
  function basename(path2, ext) {
    if (ext !== void 0 && typeof ext !== "string") {
      throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path2);
    let start = 0;
    let end = -1;
    let index2 = path2.length;
    let seenNonSlash;
    if (ext === void 0 || ext.length === 0 || ext.length > path2.length) {
      while (index2--) {
        if (path2.charCodeAt(index2) === 47) {
          if (seenNonSlash) {
            start = index2 + 1;
            break;
          }
        } else if (end < 0) {
          seenNonSlash = true;
          end = index2 + 1;
        }
      }
      return end < 0 ? "" : path2.slice(start, end);
    }
    if (ext === path2) {
      return "";
    }
    let firstNonSlashEnd = -1;
    let extIndex = ext.length - 1;
    while (index2--) {
      if (path2.charCodeAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd < 0) {
          seenNonSlash = true;
          firstNonSlashEnd = index2 + 1;
        }
        if (extIndex > -1) {
          if (path2.charCodeAt(index2) === ext.charCodeAt(extIndex--)) {
            if (extIndex < 0) {
              end = index2;
            }
          } else {
            extIndex = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end) {
      end = firstNonSlashEnd;
    } else if (end < 0) {
      end = path2.length;
    }
    return path2.slice(start, end);
  }
  function dirname(path2) {
    assertPath(path2);
    if (path2.length === 0) {
      return ".";
    }
    let end = -1;
    let index2 = path2.length;
    let unmatchedSlash;
    while (--index2) {
      if (path2.charCodeAt(index2) === 47) {
        if (unmatchedSlash) {
          end = index2;
          break;
        }
      } else if (!unmatchedSlash) {
        unmatchedSlash = true;
      }
    }
    return end < 0 ? path2.charCodeAt(0) === 47 ? "/" : "." : end === 1 && path2.charCodeAt(0) === 47 ? "//" : path2.slice(0, end);
  }
  function extname(path2) {
    assertPath(path2);
    let index2 = path2.length;
    let end = -1;
    let startPart = 0;
    let startDot = -1;
    let preDotState = 0;
    let unmatchedSlash;
    while (index2--) {
      const code2 = path2.charCodeAt(index2);
      if (code2 === 47) {
        if (unmatchedSlash) {
          startPart = index2 + 1;
          break;
        }
        continue;
      }
      if (end < 0) {
        unmatchedSlash = true;
        end = index2 + 1;
      }
      if (code2 === 46) {
        if (startDot < 0) {
          startDot = index2;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot > -1) {
        preDotState = -1;
      }
    }
    if (startDot < 0 || end < 0 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path2.slice(startDot, end);
  }
  function join(...segments) {
    let index2 = -1;
    let joined;
    while (++index2 < segments.length) {
      assertPath(segments[index2]);
      if (segments[index2]) {
        joined = joined === void 0 ? segments[index2] : joined + "/" + segments[index2];
      }
    }
    return joined === void 0 ? "." : normalize(joined);
  }
  function normalize(path2) {
    assertPath(path2);
    const absolute = path2.charCodeAt(0) === 47;
    let value = normalizeString(path2, !absolute);
    if (value.length === 0 && !absolute) {
      value = ".";
    }
    if (value.length > 0 && path2.charCodeAt(path2.length - 1) === 47) {
      value += "/";
    }
    return absolute ? "/" + value : value;
  }
  function normalizeString(path2, allowAboveRoot) {
    let result = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let index2 = -1;
    let code2;
    let lastSlashIndex;
    while (++index2 <= path2.length) {
      if (index2 < path2.length) {
        code2 = path2.charCodeAt(index2);
      } else if (code2 === 47) {
        break;
      } else {
        code2 = 47;
      }
      if (code2 === 47) {
        if (lastSlash === index2 - 1 || dots === 1) {
        } else if (lastSlash !== index2 - 1 && dots === 2) {
          if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46 || result.charCodeAt(result.length - 2) !== 46) {
            if (result.length > 2) {
              lastSlashIndex = result.lastIndexOf("/");
              if (lastSlashIndex !== result.length - 1) {
                if (lastSlashIndex < 0) {
                  result = "";
                  lastSegmentLength = 0;
                } else {
                  result = result.slice(0, lastSlashIndex);
                  lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
                }
                lastSlash = index2;
                dots = 0;
                continue;
              }
            } else if (result.length > 0) {
              result = "";
              lastSegmentLength = 0;
              lastSlash = index2;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            result = result.length > 0 ? result + "/.." : "..";
            lastSegmentLength = 2;
          }
        } else {
          if (result.length > 0) {
            result += "/" + path2.slice(lastSlash + 1, index2);
          } else {
            result = path2.slice(lastSlash + 1, index2);
          }
          lastSegmentLength = index2 - lastSlash - 1;
        }
        lastSlash = index2;
        dots = 0;
      } else if (code2 === 46 && dots > -1) {
        dots++;
      } else {
        dots = -1;
      }
    }
    return result;
  }
  function assertPath(path2) {
    if (typeof path2 !== "string") {
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(path2)
      );
    }
  }

  // ../../node_modules/.pnpm/vfile@5.3.6/node_modules/vfile/lib/minproc.browser.js
  var proc = { cwd };
  function cwd() {
    return "/";
  }

  // ../../node_modules/.pnpm/vfile@5.3.6/node_modules/vfile/lib/minurl.shared.js
  function isUrl(fileURLOrPath) {
    return fileURLOrPath !== null && typeof fileURLOrPath === "object" && fileURLOrPath.href && fileURLOrPath.origin;
  }

  // ../../node_modules/.pnpm/vfile@5.3.6/node_modules/vfile/lib/minurl.browser.js
  function urlToPath(path2) {
    if (typeof path2 === "string") {
      path2 = new URL(path2);
    } else if (!isUrl(path2)) {
      const error = new TypeError(
        'The "path" argument must be of type string or an instance of URL. Received `' + path2 + "`"
      );
      error.code = "ERR_INVALID_ARG_TYPE";
      throw error;
    }
    if (path2.protocol !== "file:") {
      const error = new TypeError("The URL must be of scheme file");
      error.code = "ERR_INVALID_URL_SCHEME";
      throw error;
    }
    return getPathFromURLPosix(path2);
  }
  function getPathFromURLPosix(url) {
    if (url.hostname !== "") {
      const error = new TypeError(
        'File URL host must be "localhost" or empty on darwin'
      );
      error.code = "ERR_INVALID_FILE_URL_HOST";
      throw error;
    }
    const pathname = url.pathname;
    let index2 = -1;
    while (++index2 < pathname.length) {
      if (pathname.charCodeAt(index2) === 37 && pathname.charCodeAt(index2 + 1) === 50) {
        const third = pathname.charCodeAt(index2 + 2);
        if (third === 70 || third === 102) {
          const error = new TypeError(
            "File URL path must not include encoded / characters"
          );
          error.code = "ERR_INVALID_FILE_URL_PATH";
          throw error;
        }
      }
    }
    return decodeURIComponent(pathname);
  }

  // ../../node_modules/.pnpm/vfile@5.3.6/node_modules/vfile/lib/index.js
  var order = ["history", "path", "basename", "stem", "extname", "dirname"];
  var VFile = class {
    constructor(value) {
      let options;
      if (!value) {
        options = {};
      } else if (typeof value === "string" || (0, import_is_buffer.default)(value)) {
        options = { value };
      } else if (isUrl(value)) {
        options = { path: value };
      } else {
        options = value;
      }
      this.data = {};
      this.messages = [];
      this.history = [];
      this.cwd = proc.cwd();
      this.value;
      this.stored;
      this.result;
      this.map;
      let index2 = -1;
      while (++index2 < order.length) {
        const prop2 = order[index2];
        if (prop2 in options && options[prop2] !== void 0) {
          this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2];
        }
      }
      let prop;
      for (prop in options) {
        if (!order.includes(prop))
          this[prop] = options[prop];
      }
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(path2) {
      if (isUrl(path2)) {
        path2 = urlToPath(path2);
      }
      assertNonEmpty(path2, "path");
      if (this.path !== path2) {
        this.history.push(path2);
      }
    }
    get dirname() {
      return typeof this.path === "string" ? path.dirname(this.path) : void 0;
    }
    set dirname(dirname2) {
      assertPath2(this.basename, "dirname");
      this.path = path.join(dirname2 || "", this.basename);
    }
    get basename() {
      return typeof this.path === "string" ? path.basename(this.path) : void 0;
    }
    set basename(basename2) {
      assertNonEmpty(basename2, "basename");
      assertPart(basename2, "basename");
      this.path = path.join(this.dirname || "", basename2);
    }
    get extname() {
      return typeof this.path === "string" ? path.extname(this.path) : void 0;
    }
    set extname(extname2) {
      assertPart(extname2, "extname");
      assertPath2(this.dirname, "extname");
      if (extname2) {
        if (extname2.charCodeAt(0) !== 46) {
          throw new Error("`extname` must start with `.`");
        }
        if (extname2.includes(".", 1)) {
          throw new Error("`extname` cannot contain multiple dots");
        }
      }
      this.path = path.join(this.dirname, this.stem + (extname2 || ""));
    }
    get stem() {
      return typeof this.path === "string" ? path.basename(this.path, this.extname) : void 0;
    }
    set stem(stem) {
      assertNonEmpty(stem, "stem");
      assertPart(stem, "stem");
      this.path = path.join(this.dirname || "", stem + (this.extname || ""));
    }
    toString(encoding) {
      return (this.value || "").toString(encoding);
    }
    message(reason, place, origin) {
      const message = new VFileMessage(reason, place, origin);
      if (this.path) {
        message.name = this.path + ":" + message.name;
        message.file = this.path;
      }
      message.fatal = false;
      this.messages.push(message);
      return message;
    }
    info(reason, place, origin) {
      const message = this.message(reason, place, origin);
      message.fatal = null;
      return message;
    }
    fail(reason, place, origin) {
      const message = this.message(reason, place, origin);
      message.fatal = true;
      throw message;
    }
  };
  function assertPart(part, name) {
    if (part && part.includes(path.sep)) {
      throw new Error(
        "`" + name + "` cannot be a path: did not expect `" + path.sep + "`"
      );
    }
  }
  function assertNonEmpty(part, name) {
    if (!part) {
      throw new Error("`" + name + "` cannot be empty");
    }
  }
  function assertPath2(path2, name) {
    if (!path2) {
      throw new Error("Setting `" + name + "` requires `path` to be set too");
    }
  }

  // ../../node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
  function bail(error) {
    if (error) {
      throw error;
    }
  }

  // ../../node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
  var import_is_buffer2 = __toESM(require_is_buffer(), 1);
  var import_extend = __toESM(require_extend(), 1);

  // ../../node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
  function isPlainObject(value) {
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
  }

  // ../../node_modules/.pnpm/trough@2.1.0/node_modules/trough/index.js
  function trough() {
    const fns = [];
    const pipeline = { run, use };
    return pipeline;
    function run(...values) {
      let middlewareIndex = -1;
      const callback = values.pop();
      if (typeof callback !== "function") {
        throw new TypeError("Expected function as last argument, not " + callback);
      }
      next(null, ...values);
      function next(error, ...output) {
        const fn = fns[++middlewareIndex];
        let index2 = -1;
        if (error) {
          callback(error);
          return;
        }
        while (++index2 < values.length) {
          if (output[index2] === null || output[index2] === void 0) {
            output[index2] = values[index2];
          }
        }
        values = output;
        if (fn) {
          wrap(fn, next)(...output);
        } else {
          callback(null, ...output);
        }
      }
    }
    function use(middelware) {
      if (typeof middelware !== "function") {
        throw new TypeError(
          "Expected `middelware` to be a function, not " + middelware
        );
      }
      fns.push(middelware);
      return pipeline;
    }
  }
  function wrap(middleware, callback) {
    let called;
    return wrapped;
    function wrapped(...parameters) {
      const fnExpectsCallback = middleware.length > parameters.length;
      let result;
      if (fnExpectsCallback) {
        parameters.push(done);
      }
      try {
        result = middleware.apply(this, parameters);
      } catch (error) {
        const exception = error;
        if (fnExpectsCallback && called) {
          throw exception;
        }
        return done(exception);
      }
      if (!fnExpectsCallback) {
        if (result instanceof Promise) {
          result.then(then, done);
        } else if (result instanceof Error) {
          done(result);
        } else {
          then(result);
        }
      }
    }
    function done(error, ...output) {
      if (!called) {
        called = true;
        callback(error, ...output);
      }
    }
    function then(value) {
      done(null, value);
    }
  }

  // ../../node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
  var unified = base().freeze();
  var own = {}.hasOwnProperty;
  function base() {
    const transformers = trough();
    const attachers = [];
    let namespace = {};
    let frozen;
    let freezeIndex = -1;
    processor.data = data;
    processor.Parser = void 0;
    processor.Compiler = void 0;
    processor.freeze = freeze;
    processor.attachers = attachers;
    processor.use = use;
    processor.parse = parse2;
    processor.stringify = stringify3;
    processor.run = run;
    processor.runSync = runSync;
    processor.process = process2;
    processor.processSync = processSync;
    return processor;
    function processor() {
      const destination = base();
      let index2 = -1;
      while (++index2 < attachers.length) {
        destination.use(...attachers[index2]);
      }
      destination.data((0, import_extend.default)(true, {}, namespace));
      return destination;
    }
    function data(key, value) {
      if (typeof key === "string") {
        if (arguments.length === 2) {
          assertUnfrozen("data", frozen);
          namespace[key] = value;
          return processor;
        }
        return own.call(namespace, key) && namespace[key] || null;
      }
      if (key) {
        assertUnfrozen("data", frozen);
        namespace = key;
        return processor;
      }
      return namespace;
    }
    function freeze() {
      if (frozen) {
        return processor;
      }
      while (++freezeIndex < attachers.length) {
        const [attacher, ...options] = attachers[freezeIndex];
        if (options[0] === false) {
          continue;
        }
        if (options[0] === true) {
          options[0] = void 0;
        }
        const transformer = attacher.call(processor, ...options);
        if (typeof transformer === "function") {
          transformers.use(transformer);
        }
      }
      frozen = true;
      freezeIndex = Number.POSITIVE_INFINITY;
      return processor;
    }
    function use(value, ...options) {
      let settings;
      assertUnfrozen("use", frozen);
      if (value === null || value === void 0) {
      } else if (typeof value === "function") {
        addPlugin(value, ...options);
      } else if (typeof value === "object") {
        if (Array.isArray(value)) {
          addList(value);
        } else {
          addPreset(value);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value + "`");
      }
      if (settings) {
        namespace.settings = Object.assign(namespace.settings || {}, settings);
      }
      return processor;
      function add(value2) {
        if (typeof value2 === "function") {
          addPlugin(value2);
        } else if (typeof value2 === "object") {
          if (Array.isArray(value2)) {
            const [plugin, ...options2] = value2;
            addPlugin(plugin, ...options2);
          } else {
            addPreset(value2);
          }
        } else {
          throw new TypeError("Expected usable value, not `" + value2 + "`");
        }
      }
      function addPreset(result) {
        addList(result.plugins);
        if (result.settings) {
          settings = Object.assign(settings || {}, result.settings);
        }
      }
      function addList(plugins) {
        let index2 = -1;
        if (plugins === null || plugins === void 0) {
        } else if (Array.isArray(plugins)) {
          while (++index2 < plugins.length) {
            const thing = plugins[index2];
            add(thing);
          }
        } else {
          throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
        }
      }
      function addPlugin(plugin, value2) {
        let index2 = -1;
        let entry;
        while (++index2 < attachers.length) {
          if (attachers[index2][0] === plugin) {
            entry = attachers[index2];
            break;
          }
        }
        if (entry) {
          if (isPlainObject(entry[1]) && isPlainObject(value2)) {
            value2 = (0, import_extend.default)(true, entry[1], value2);
          }
          entry[1] = value2;
        } else {
          attachers.push([...arguments]);
        }
      }
    }
    function parse2(doc) {
      processor.freeze();
      const file = vfile(doc);
      const Parser = processor.Parser;
      assertParser("parse", Parser);
      if (newable(Parser, "parse")) {
        return new Parser(String(file), file).parse();
      }
      return Parser(String(file), file);
    }
    function stringify3(node2, doc) {
      processor.freeze();
      const file = vfile(doc);
      const Compiler = processor.Compiler;
      assertCompiler("stringify", Compiler);
      assertNode(node2);
      if (newable(Compiler, "compile")) {
        return new Compiler(node2, file).compile();
      }
      return Compiler(node2, file);
    }
    function run(node2, doc, callback) {
      assertNode(node2);
      processor.freeze();
      if (!callback && typeof doc === "function") {
        callback = doc;
        doc = void 0;
      }
      if (!callback) {
        return new Promise(executor);
      }
      executor(null, callback);
      function executor(resolve, reject) {
        transformers.run(node2, vfile(doc), done);
        function done(error, tree, file) {
          tree = tree || node2;
          if (error) {
            reject(error);
          } else if (resolve) {
            resolve(tree);
          } else {
            callback(null, tree, file);
          }
        }
      }
    }
    function runSync(node2, file) {
      let result;
      let complete;
      processor.run(node2, file, done);
      assertDone("runSync", "run", complete);
      return result;
      function done(error, tree) {
        bail(error);
        result = tree;
        complete = true;
      }
    }
    function process2(doc, callback) {
      processor.freeze();
      assertParser("process", processor.Parser);
      assertCompiler("process", processor.Compiler);
      if (!callback) {
        return new Promise(executor);
      }
      executor(null, callback);
      function executor(resolve, reject) {
        const file = vfile(doc);
        processor.run(processor.parse(file), file, (error, tree, file2) => {
          if (error || !tree || !file2) {
            done(error);
          } else {
            const result = processor.stringify(tree, file2);
            if (result === void 0 || result === null) {
            } else if (looksLikeAVFileValue(result)) {
              file2.value = result;
            } else {
              file2.result = result;
            }
            done(error, file2);
          }
        });
        function done(error, file2) {
          if (error || !file2) {
            reject(error);
          } else if (resolve) {
            resolve(file2);
          } else {
            callback(null, file2);
          }
        }
      }
    }
    function processSync(doc) {
      let complete;
      processor.freeze();
      assertParser("processSync", processor.Parser);
      assertCompiler("processSync", processor.Compiler);
      const file = vfile(doc);
      processor.process(file, done);
      assertDone("processSync", "process", complete);
      return file;
      function done(error) {
        complete = true;
        bail(error);
      }
    }
  }
  function newable(value, name) {
    return typeof value === "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
  }
  function keys(value) {
    let key;
    for (key in value) {
      if (own.call(value, key)) {
        return true;
      }
    }
    return false;
  }
  function assertParser(name, value) {
    if (typeof value !== "function") {
      throw new TypeError("Cannot `" + name + "` without `Parser`");
    }
  }
  function assertCompiler(name, value) {
    if (typeof value !== "function") {
      throw new TypeError("Cannot `" + name + "` without `Compiler`");
    }
  }
  function assertUnfrozen(name, frozen) {
    if (frozen) {
      throw new Error(
        "Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
      );
    }
  }
  function assertNode(node2) {
    if (!isPlainObject(node2) || typeof node2.type !== "string") {
      throw new TypeError("Expected node, got `" + node2 + "`");
    }
  }
  function assertDone(name, asyncName, complete) {
    if (!complete) {
      throw new Error(
        "`" + name + "` finished async. Use `" + asyncName + "` instead"
      );
    }
  }
  function vfile(value) {
    return looksLikeAVFile(value) ? value : new VFile(value);
  }
  function looksLikeAVFile(value) {
    return Boolean(
      value && typeof value === "object" && "message" in value && "messages" in value
    );
  }
  function looksLikeAVFileValue(value) {
    return typeof value === "string" || (0, import_is_buffer2.default)(value);
  }

  // ../../node_modules/.pnpm/mdast-util-to-string@3.1.1/node_modules/mdast-util-to-string/lib/index.js
  function toString(value, options) {
    const includeImageAlt = (options || {}).includeImageAlt;
    return one(
      value,
      typeof includeImageAlt === "boolean" ? includeImageAlt : true
    );
  }
  function one(value, includeImageAlt) {
    return node(value) && ("value" in value && value.value || includeImageAlt && "alt" in value && value.alt || "children" in value && all(value.children, includeImageAlt)) || Array.isArray(value) && all(value, includeImageAlt) || "";
  }
  function all(values, includeImageAlt) {
    const result = [];
    let index2 = -1;
    while (++index2 < values.length) {
      result[index2] = one(values[index2], includeImageAlt);
    }
    return result.join("");
  }
  function node(value) {
    return Boolean(value && typeof value === "object");
  }

  // ../../node_modules/.pnpm/micromark-util-chunked@1.0.0/node_modules/micromark-util-chunked/index.js
  function splice(list3, start, remove, items) {
    const end = list3.length;
    let chunkStart = 0;
    let parameters;
    if (start < 0) {
      start = -start > end ? 0 : end + start;
    } else {
      start = start > end ? end : start;
    }
    remove = remove > 0 ? remove : 0;
    if (items.length < 1e4) {
      parameters = Array.from(items);
      parameters.unshift(start, remove);
      [].splice.apply(list3, parameters);
    } else {
      if (remove)
        [].splice.apply(list3, [start, remove]);
      while (chunkStart < items.length) {
        parameters = items.slice(chunkStart, chunkStart + 1e4);
        parameters.unshift(start, 0);
        [].splice.apply(list3, parameters);
        chunkStart += 1e4;
        start += 1e4;
      }
    }
  }
  function push(list3, items) {
    if (list3.length > 0) {
      splice(list3, list3.length, 0, items);
      return list3;
    }
    return items;
  }

  // ../../node_modules/.pnpm/micromark-util-combine-extensions@1.0.0/node_modules/micromark-util-combine-extensions/index.js
  var hasOwnProperty = {}.hasOwnProperty;
  function combineExtensions(extensions) {
    const all3 = {};
    let index2 = -1;
    while (++index2 < extensions.length) {
      syntaxExtension(all3, extensions[index2]);
    }
    return all3;
  }
  function syntaxExtension(all3, extension2) {
    let hook;
    for (hook in extension2) {
      const maybe = hasOwnProperty.call(all3, hook) ? all3[hook] : void 0;
      const left = maybe || (all3[hook] = {});
      const right = extension2[hook];
      let code2;
      for (code2 in right) {
        if (!hasOwnProperty.call(left, code2))
          left[code2] = [];
        const value = right[code2];
        constructs(
          left[code2],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
  function constructs(existing, list3) {
    let index2 = -1;
    const before = [];
    while (++index2 < list3.length) {
      ;
      (list3[index2].add === "after" ? existing : before).push(list3[index2]);
    }
    splice(existing, 0, 0, before);
  }

  // ../../node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
  var unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

  // ../../node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js
  var asciiAlpha = regexCheck(/[A-Za-z]/);
  var asciiDigit = regexCheck(/\d/);
  var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
  var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
  var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
  var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
  function asciiControl(code2) {
    return code2 !== null && (code2 < 32 || code2 === 127);
  }
  function markdownLineEndingOrSpace(code2) {
    return code2 !== null && (code2 < 0 || code2 === 32);
  }
  function markdownLineEnding(code2) {
    return code2 !== null && code2 < -2;
  }
  function markdownSpace(code2) {
    return code2 === -2 || code2 === -1 || code2 === 32;
  }
  var unicodeWhitespace = regexCheck(/\s/);
  var unicodePunctuation = regexCheck(unicodePunctuationRegex);
  function regexCheck(regex) {
    return check;
    function check(code2) {
      return code2 !== null && regex.test(String.fromCharCode(code2));
    }
  }

  // ../../node_modules/.pnpm/micromark-factory-space@1.0.0/node_modules/micromark-factory-space/index.js
  function factorySpace(effects, ok2, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start;
    function start(code2) {
      if (markdownSpace(code2)) {
        effects.enter(type);
        return prefix(code2);
      }
      return ok2(code2);
    }
    function prefix(code2) {
      if (markdownSpace(code2) && size++ < limit) {
        effects.consume(code2);
        return prefix;
      }
      effects.exit(type);
      return ok2(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/content.js
  var content = {
    tokenize: initializeContent
  };
  function initializeContent(effects) {
    const contentStart = effects.attempt(
      this.parser.constructs.contentInitial,
      afterContentStartConstruct,
      paragraphInitial
    );
    let previous2;
    return contentStart;
    function afterContentStartConstruct(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, contentStart, "linePrefix");
    }
    function paragraphInitial(code2) {
      effects.enter("paragraph");
      return lineStart(code2);
    }
    function lineStart(code2) {
      const token = effects.enter("chunkText", {
        contentType: "text",
        previous: previous2
      });
      if (previous2) {
        previous2.next = token;
      }
      previous2 = token;
      return data(code2);
    }
    function data(code2) {
      if (code2 === null) {
        effects.exit("chunkText");
        effects.exit("paragraph");
        effects.consume(code2);
        return;
      }
      if (markdownLineEnding(code2)) {
        effects.consume(code2);
        effects.exit("chunkText");
        return lineStart;
      }
      effects.consume(code2);
      return data;
    }
  }

  // ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/document.js
  var document2 = {
    tokenize: initializeDocument
  };
  var containerConstruct = {
    tokenize: tokenizeContainer
  };
  function initializeDocument(effects) {
    const self = this;
    const stack = [];
    let continued = 0;
    let childFlow;
    let childToken;
    let lineStartOffset;
    return start;
    function start(code2) {
      if (continued < stack.length) {
        const item = stack[continued];
        self.containerState = item[1];
        return effects.attempt(
          item[0].continuation,
          documentContinue,
          checkNewContainers
        )(code2);
      }
      return checkNewContainers(code2);
    }
    function documentContinue(code2) {
      continued++;
      if (self.containerState._closeFlow) {
        self.containerState._closeFlow = void 0;
        if (childFlow) {
          closeFlow();
        }
        const indexBeforeExits = self.events.length;
        let indexBeforeFlow = indexBeforeExits;
        let point4;
        while (indexBeforeFlow--) {
          if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
            point4 = self.events[indexBeforeFlow][1].end;
            break;
          }
        }
        exitContainers(continued);
        let index2 = indexBeforeExits;
        while (index2 < self.events.length) {
          self.events[index2][1].end = Object.assign({}, point4);
          index2++;
        }
        splice(
          self.events,
          indexBeforeFlow + 1,
          0,
          self.events.slice(indexBeforeExits)
        );
        self.events.length = index2;
        return checkNewContainers(code2);
      }
      return start(code2);
    }
    function checkNewContainers(code2) {
      if (continued === stack.length) {
        if (!childFlow) {
          return documentContinued(code2);
        }
        if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
          return flowStart(code2);
        }
        self.interrupt = Boolean(
          childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
        );
      }
      self.containerState = {};
      return effects.check(
        containerConstruct,
        thereIsANewContainer,
        thereIsNoNewContainer
      )(code2);
    }
    function thereIsANewContainer(code2) {
      if (childFlow)
        closeFlow();
      exitContainers(continued);
      return documentContinued(code2);
    }
    function thereIsNoNewContainer(code2) {
      self.parser.lazy[self.now().line] = continued !== stack.length;
      lineStartOffset = self.now().offset;
      return flowStart(code2);
    }
    function documentContinued(code2) {
      self.containerState = {};
      return effects.attempt(
        containerConstruct,
        containerContinue,
        flowStart
      )(code2);
    }
    function containerContinue(code2) {
      continued++;
      stack.push([self.currentConstruct, self.containerState]);
      return documentContinued(code2);
    }
    function flowStart(code2) {
      if (code2 === null) {
        if (childFlow)
          closeFlow();
        exitContainers(0);
        effects.consume(code2);
        return;
      }
      childFlow = childFlow || self.parser.flow(self.now());
      effects.enter("chunkFlow", {
        contentType: "flow",
        previous: childToken,
        _tokenizer: childFlow
      });
      return flowContinue(code2);
    }
    function flowContinue(code2) {
      if (code2 === null) {
        writeToChild(effects.exit("chunkFlow"), true);
        exitContainers(0);
        effects.consume(code2);
        return;
      }
      if (markdownLineEnding(code2)) {
        effects.consume(code2);
        writeToChild(effects.exit("chunkFlow"));
        continued = 0;
        self.interrupt = void 0;
        return start;
      }
      effects.consume(code2);
      return flowContinue;
    }
    function writeToChild(token, eof) {
      const stream = self.sliceStream(token);
      if (eof)
        stream.push(null);
      token.previous = childToken;
      if (childToken)
        childToken.next = token;
      childToken = token;
      childFlow.defineSkip(token.start);
      childFlow.write(stream);
      if (self.parser.lazy[token.start.line]) {
        let index2 = childFlow.events.length;
        while (index2--) {
          if (childFlow.events[index2][1].start.offset < lineStartOffset && (!childFlow.events[index2][1].end || childFlow.events[index2][1].end.offset > lineStartOffset)) {
            return;
          }
        }
        const indexBeforeExits = self.events.length;
        let indexBeforeFlow = indexBeforeExits;
        let seen;
        let point4;
        while (indexBeforeFlow--) {
          if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
            if (seen) {
              point4 = self.events[indexBeforeFlow][1].end;
              break;
            }
            seen = true;
          }
        }
        exitContainers(continued);
        index2 = indexBeforeExits;
        while (index2 < self.events.length) {
          self.events[index2][1].end = Object.assign({}, point4);
          index2++;
        }
        splice(
          self.events,
          indexBeforeFlow + 1,
          0,
          self.events.slice(indexBeforeExits)
        );
        self.events.length = index2;
      }
    }
    function exitContainers(size) {
      let index2 = stack.length;
      while (index2-- > size) {
        const entry = stack[index2];
        self.containerState = entry[1];
        entry[0].exit.call(self, effects);
      }
      stack.length = size;
    }
    function closeFlow() {
      childFlow.write([null]);
      childToken = void 0;
      childFlow = void 0;
      self.containerState._closeFlow = void 0;
    }
  }
  function tokenizeContainer(effects, ok2, nok) {
    return factorySpace(
      effects,
      effects.attempt(this.parser.constructs.document, ok2, nok),
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }

  // ../../node_modules/.pnpm/micromark-util-classify-character@1.0.0/node_modules/micromark-util-classify-character/index.js
  function classifyCharacter(code2) {
    if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      return 1;
    }
    if (unicodePunctuation(code2)) {
      return 2;
    }
  }

  // ../../node_modules/.pnpm/micromark-util-resolve-all@1.0.0/node_modules/micromark-util-resolve-all/index.js
  function resolveAll(constructs2, events, context) {
    const called = [];
    let index2 = -1;
    while (++index2 < constructs2.length) {
      const resolve = constructs2[index2].resolveAll;
      if (resolve && !called.includes(resolve)) {
        events = resolve(events, context);
        called.push(resolve);
      }
    }
    return events;
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/attention.js
  var attention = {
    name: "attention",
    tokenize: tokenizeAttention,
    resolveAll: resolveAllAttention
  };
  function resolveAllAttention(events, context) {
    let index2 = -1;
    let open;
    let group;
    let text4;
    let openingSequence;
    let closingSequence;
    let use;
    let nextEvents;
    let offset;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
        open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
            if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
              continue;
            }
            use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
            const start = Object.assign({}, events[open][1].end);
            const end = Object.assign({}, events[index2][1].start);
            movePoint(start, -use);
            movePoint(end, use);
            openingSequence = {
              type: use > 1 ? "strongSequence" : "emphasisSequence",
              start,
              end: Object.assign({}, events[open][1].end)
            };
            closingSequence = {
              type: use > 1 ? "strongSequence" : "emphasisSequence",
              start: Object.assign({}, events[index2][1].start),
              end
            };
            text4 = {
              type: use > 1 ? "strongText" : "emphasisText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            group = {
              type: use > 1 ? "strong" : "emphasis",
              start: Object.assign({}, openingSequence.start),
              end: Object.assign({}, closingSequence.end)
            };
            events[open][1].end = Object.assign({}, openingSequence.start);
            events[index2][1].start = Object.assign({}, closingSequence.end);
            nextEvents = [];
            if (events[open][1].end.offset - events[open][1].start.offset) {
              nextEvents = push(nextEvents, [
                ["enter", events[open][1], context],
                ["exit", events[open][1], context]
              ]);
            }
            nextEvents = push(nextEvents, [
              ["enter", group, context],
              ["enter", openingSequence, context],
              ["exit", openingSequence, context],
              ["enter", text4, context]
            ]);
            nextEvents = push(
              nextEvents,
              resolveAll(
                context.parser.constructs.insideSpan.null,
                events.slice(open + 1, index2),
                context
              )
            );
            nextEvents = push(nextEvents, [
              ["exit", text4, context],
              ["enter", closingSequence, context],
              ["exit", closingSequence, context],
              ["exit", group, context]
            ]);
            if (events[index2][1].end.offset - events[index2][1].start.offset) {
              offset = 2;
              nextEvents = push(nextEvents, [
                ["enter", events[index2][1], context],
                ["exit", events[index2][1], context]
              ]);
            } else {
              offset = 0;
            }
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - offset - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "attentionSequence") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeAttention(effects, ok2) {
    const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
    const previous2 = this.previous;
    const before = classifyCharacter(previous2);
    let marker;
    return start;
    function start(code2) {
      effects.enter("attentionSequence");
      marker = code2;
      return sequence(code2);
    }
    function sequence(code2) {
      if (code2 === marker) {
        effects.consume(code2);
        return sequence;
      }
      const token = effects.exit("attentionSequence");
      const after = classifyCharacter(code2);
      const open = !after || after === 2 && before || attentionMarkers2.includes(code2);
      const close = !before || before === 2 && after || attentionMarkers2.includes(previous2);
      token._open = Boolean(marker === 42 ? open : open && (before || !close));
      token._close = Boolean(marker === 42 ? close : close && (after || !open));
      return ok2(code2);
    }
  }
  function movePoint(point4, offset) {
    point4.column += offset;
    point4.offset += offset;
    point4._bufferIndex += offset;
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/autolink.js
  var autolink = {
    name: "autolink",
    tokenize: tokenizeAutolink
  };
  function tokenizeAutolink(effects, ok2, nok) {
    let size = 1;
    return start;
    function start(code2) {
      effects.enter("autolink");
      effects.enter("autolinkMarker");
      effects.consume(code2);
      effects.exit("autolinkMarker");
      effects.enter("autolinkProtocol");
      return open;
    }
    function open(code2) {
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        return schemeOrEmailAtext;
      }
      return asciiAtext(code2) ? emailAtext(code2) : nok(code2);
    }
    function schemeOrEmailAtext(code2) {
      return code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2) ? schemeInsideOrEmailAtext(code2) : emailAtext(code2);
    }
    function schemeInsideOrEmailAtext(code2) {
      if (code2 === 58) {
        effects.consume(code2);
        return urlInside;
      }
      if ((code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) && size++ < 32) {
        effects.consume(code2);
        return schemeInsideOrEmailAtext;
      }
      return emailAtext(code2);
    }
    function urlInside(code2) {
      if (code2 === 62) {
        effects.exit("autolinkProtocol");
        return end(code2);
      }
      if (code2 === null || code2 === 32 || code2 === 60 || asciiControl(code2)) {
        return nok(code2);
      }
      effects.consume(code2);
      return urlInside;
    }
    function emailAtext(code2) {
      if (code2 === 64) {
        effects.consume(code2);
        size = 0;
        return emailAtSignOrDot;
      }
      if (asciiAtext(code2)) {
        effects.consume(code2);
        return emailAtext;
      }
      return nok(code2);
    }
    function emailAtSignOrDot(code2) {
      return asciiAlphanumeric(code2) ? emailLabel(code2) : nok(code2);
    }
    function emailLabel(code2) {
      if (code2 === 46) {
        effects.consume(code2);
        size = 0;
        return emailAtSignOrDot;
      }
      if (code2 === 62) {
        effects.exit("autolinkProtocol").type = "autolinkEmail";
        return end(code2);
      }
      return emailValue(code2);
    }
    function emailValue(code2) {
      if ((code2 === 45 || asciiAlphanumeric(code2)) && size++ < 63) {
        effects.consume(code2);
        return code2 === 45 ? emailValue : emailLabel;
      }
      return nok(code2);
    }
    function end(code2) {
      effects.enter("autolinkMarker");
      effects.consume(code2);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok2;
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/blank-line.js
  var blankLine = {
    tokenize: tokenizeBlankLine,
    partial: true
  };
  function tokenizeBlankLine(effects, ok2, nok) {
    return factorySpace(effects, afterWhitespace, "linePrefix");
    function afterWhitespace(code2) {
      return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/block-quote.js
  var blockQuote = {
    name: "blockQuote",
    tokenize: tokenizeBlockQuoteStart,
    continuation: {
      tokenize: tokenizeBlockQuoteContinuation
    },
    exit
  };
  function tokenizeBlockQuoteStart(effects, ok2, nok) {
    const self = this;
    return start;
    function start(code2) {
      if (code2 === 62) {
        const state2 = self.containerState;
        if (!state2.open) {
          effects.enter("blockQuote", {
            _container: true
          });
          state2.open = true;
        }
        effects.enter("blockQuotePrefix");
        effects.enter("blockQuoteMarker");
        effects.consume(code2);
        effects.exit("blockQuoteMarker");
        return after;
      }
      return nok(code2);
    }
    function after(code2) {
      if (markdownSpace(code2)) {
        effects.enter("blockQuotePrefixWhitespace");
        effects.consume(code2);
        effects.exit("blockQuotePrefixWhitespace");
        effects.exit("blockQuotePrefix");
        return ok2;
      }
      effects.exit("blockQuotePrefix");
      return ok2(code2);
    }
  }
  function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
    return factorySpace(
      effects,
      effects.attempt(blockQuote, ok2, nok),
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function exit(effects) {
    effects.exit("blockQuote");
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/character-escape.js
  var characterEscape = {
    name: "characterEscape",
    tokenize: tokenizeCharacterEscape
  };
  function tokenizeCharacterEscape(effects, ok2, nok) {
    return start;
    function start(code2) {
      effects.enter("characterEscape");
      effects.enter("escapeMarker");
      effects.consume(code2);
      effects.exit("escapeMarker");
      return open;
    }
    function open(code2) {
      if (asciiPunctuation(code2)) {
        effects.enter("characterEscapeValue");
        effects.consume(code2);
        effects.exit("characterEscapeValue");
        effects.exit("characterEscape");
        return ok2;
      }
      return nok(code2);
    }
  }

  // ../../node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.dom.js
  var element = document.createElement("i");
  function decodeNamedCharacterReference(value) {
    const characterReference2 = "&" + value + ";";
    element.innerHTML = characterReference2;
    const char = element.textContent;
    if (char.charCodeAt(char.length - 1) === 59 && value !== "semi") {
      return false;
    }
    return char === characterReference2 ? false : char;
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/character-reference.js
  var characterReference = {
    name: "characterReference",
    tokenize: tokenizeCharacterReference
  };
  function tokenizeCharacterReference(effects, ok2, nok) {
    const self = this;
    let size = 0;
    let max;
    let test;
    return start;
    function start(code2) {
      effects.enter("characterReference");
      effects.enter("characterReferenceMarker");
      effects.consume(code2);
      effects.exit("characterReferenceMarker");
      return open;
    }
    function open(code2) {
      if (code2 === 35) {
        effects.enter("characterReferenceMarkerNumeric");
        effects.consume(code2);
        effects.exit("characterReferenceMarkerNumeric");
        return numeric;
      }
      effects.enter("characterReferenceValue");
      max = 31;
      test = asciiAlphanumeric;
      return value(code2);
    }
    function numeric(code2) {
      if (code2 === 88 || code2 === 120) {
        effects.enter("characterReferenceMarkerHexadecimal");
        effects.consume(code2);
        effects.exit("characterReferenceMarkerHexadecimal");
        effects.enter("characterReferenceValue");
        max = 6;
        test = asciiHexDigit;
        return value;
      }
      effects.enter("characterReferenceValue");
      max = 7;
      test = asciiDigit;
      return value(code2);
    }
    function value(code2) {
      let token;
      if (code2 === 59 && size) {
        token = effects.exit("characterReferenceValue");
        if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
          return nok(code2);
        }
        effects.enter("characterReferenceMarker");
        effects.consume(code2);
        effects.exit("characterReferenceMarker");
        effects.exit("characterReference");
        return ok2;
      }
      if (test(code2) && size++ < max) {
        effects.consume(code2);
        return value;
      }
      return nok(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-fenced.js
  var codeFenced = {
    name: "codeFenced",
    tokenize: tokenizeCodeFenced,
    concrete: true
  };
  function tokenizeCodeFenced(effects, ok2, nok) {
    const self = this;
    const closingFenceConstruct = {
      tokenize: tokenizeClosingFence,
      partial: true
    };
    const nonLazyLine = {
      tokenize: tokenizeNonLazyLine,
      partial: true
    };
    const tail = this.events[this.events.length - 1];
    const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let sizeOpen = 0;
    let marker;
    return start;
    function start(code2) {
      effects.enter("codeFenced");
      effects.enter("codeFencedFence");
      effects.enter("codeFencedFenceSequence");
      marker = code2;
      return sequenceOpen(code2);
    }
    function sequenceOpen(code2) {
      if (code2 === marker) {
        effects.consume(code2);
        sizeOpen++;
        return sequenceOpen;
      }
      effects.exit("codeFencedFenceSequence");
      return sizeOpen < 3 ? nok(code2) : factorySpace(effects, infoOpen, "whitespace")(code2);
    }
    function infoOpen(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        return openAfter(code2);
      }
      effects.enter("codeFencedFenceInfo");
      effects.enter("chunkString", {
        contentType: "string"
      });
      return info(code2);
    }
    function info(code2) {
      if (code2 === null || markdownLineEndingOrSpace(code2)) {
        effects.exit("chunkString");
        effects.exit("codeFencedFenceInfo");
        return factorySpace(effects, infoAfter, "whitespace")(code2);
      }
      if (code2 === 96 && code2 === marker)
        return nok(code2);
      effects.consume(code2);
      return info;
    }
    function infoAfter(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        return openAfter(code2);
      }
      effects.enter("codeFencedFenceMeta");
      effects.enter("chunkString", {
        contentType: "string"
      });
      return meta(code2);
    }
    function meta(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("chunkString");
        effects.exit("codeFencedFenceMeta");
        return openAfter(code2);
      }
      if (code2 === 96 && code2 === marker)
        return nok(code2);
      effects.consume(code2);
      return meta;
    }
    function openAfter(code2) {
      effects.exit("codeFencedFence");
      return self.interrupt ? ok2(code2) : contentStart(code2);
    }
    function contentStart(code2) {
      if (code2 === null) {
        return after(code2);
      }
      if (markdownLineEnding(code2)) {
        return effects.attempt(
          nonLazyLine,
          effects.attempt(
            closingFenceConstruct,
            after,
            initialPrefix ? factorySpace(
              effects,
              contentStart,
              "linePrefix",
              initialPrefix + 1
            ) : contentStart
          ),
          after
        )(code2);
      }
      effects.enter("codeFlowValue");
      return contentContinue(code2);
    }
    function contentContinue(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("codeFlowValue");
        return contentStart(code2);
      }
      effects.consume(code2);
      return contentContinue;
    }
    function after(code2) {
      effects.exit("codeFenced");
      return ok2(code2);
    }
    function tokenizeNonLazyLine(effects2, ok3, nok2) {
      const self2 = this;
      return start2;
      function start2(code2) {
        effects2.enter("lineEnding");
        effects2.consume(code2);
        effects2.exit("lineEnding");
        return lineStart;
      }
      function lineStart(code2) {
        return self2.parser.lazy[self2.now().line] ? nok2(code2) : ok3(code2);
      }
    }
    function tokenizeClosingFence(effects2, ok3, nok2) {
      let size = 0;
      return factorySpace(
        effects2,
        closingSequenceStart,
        "linePrefix",
        this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      );
      function closingSequenceStart(code2) {
        effects2.enter("codeFencedFence");
        effects2.enter("codeFencedFenceSequence");
        return closingSequence(code2);
      }
      function closingSequence(code2) {
        if (code2 === marker) {
          effects2.consume(code2);
          size++;
          return closingSequence;
        }
        if (size < sizeOpen)
          return nok2(code2);
        effects2.exit("codeFencedFenceSequence");
        return factorySpace(effects2, closingSequenceEnd, "whitespace")(code2);
      }
      function closingSequenceEnd(code2) {
        if (code2 === null || markdownLineEnding(code2)) {
          effects2.exit("codeFencedFence");
          return ok3(code2);
        }
        return nok2(code2);
      }
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-indented.js
  var codeIndented = {
    name: "codeIndented",
    tokenize: tokenizeCodeIndented
  };
  var indentedContent = {
    tokenize: tokenizeIndentedContent,
    partial: true
  };
  function tokenizeCodeIndented(effects, ok2, nok) {
    const self = this;
    return start;
    function start(code2) {
      effects.enter("codeIndented");
      return factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code2);
    }
    function afterStartPrefix(code2) {
      const tail = self.events[self.events.length - 1];
      return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code2) : nok(code2);
    }
    function afterPrefix(code2) {
      if (code2 === null) {
        return after(code2);
      }
      if (markdownLineEnding(code2)) {
        return effects.attempt(indentedContent, afterPrefix, after)(code2);
      }
      effects.enter("codeFlowValue");
      return content3(code2);
    }
    function content3(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("codeFlowValue");
        return afterPrefix(code2);
      }
      effects.consume(code2);
      return content3;
    }
    function after(code2) {
      effects.exit("codeIndented");
      return ok2(code2);
    }
  }
  function tokenizeIndentedContent(effects, ok2, nok) {
    const self = this;
    return start;
    function start(code2) {
      if (self.parser.lazy[self.now().line]) {
        return nok(code2);
      }
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return start;
      }
      return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code2);
    }
    function afterPrefix(code2) {
      const tail = self.events[self.events.length - 1];
      return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok2(code2) : markdownLineEnding(code2) ? start(code2) : nok(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-text.js
  var codeText = {
    name: "codeText",
    tokenize: tokenizeCodeText,
    resolve: resolveCodeText,
    previous
  };
  function resolveCodeText(events) {
    let tailExitIndex = events.length - 4;
    let headEnterIndex = 3;
    let index2;
    let enter;
    if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
      index2 = headEnterIndex;
      while (++index2 < tailExitIndex) {
        if (events[index2][1].type === "codeTextData") {
          events[headEnterIndex][1].type = "codeTextPadding";
          events[tailExitIndex][1].type = "codeTextPadding";
          headEnterIndex += 2;
          tailExitIndex -= 2;
          break;
        }
      }
    }
    index2 = headEnterIndex - 1;
    tailExitIndex++;
    while (++index2 <= tailExitIndex) {
      if (enter === void 0) {
        if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
          enter = index2;
        }
      } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
        events[enter][1].type = "codeTextData";
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          tailExitIndex -= index2 - enter - 2;
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return events;
  }
  function previous(code2) {
    return code2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function tokenizeCodeText(effects, ok2, nok) {
    const self = this;
    let sizeOpen = 0;
    let size;
    let token;
    return start;
    function start(code2) {
      effects.enter("codeText");
      effects.enter("codeTextSequence");
      return openingSequence(code2);
    }
    function openingSequence(code2) {
      if (code2 === 96) {
        effects.consume(code2);
        sizeOpen++;
        return openingSequence;
      }
      effects.exit("codeTextSequence");
      return gap(code2);
    }
    function gap(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      if (code2 === 96) {
        token = effects.enter("codeTextSequence");
        size = 0;
        return closingSequence(code2);
      }
      if (code2 === 32) {
        effects.enter("space");
        effects.consume(code2);
        effects.exit("space");
        return gap;
      }
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return gap;
      }
      effects.enter("codeTextData");
      return data(code2);
    }
    function data(code2) {
      if (code2 === null || code2 === 32 || code2 === 96 || markdownLineEnding(code2)) {
        effects.exit("codeTextData");
        return gap(code2);
      }
      effects.consume(code2);
      return data;
    }
    function closingSequence(code2) {
      if (code2 === 96) {
        effects.consume(code2);
        size++;
        return closingSequence;
      }
      if (size === sizeOpen) {
        effects.exit("codeTextSequence");
        effects.exit("codeText");
        return ok2(code2);
      }
      token.type = "codeTextData";
      return data(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-util-subtokenize@1.0.2/node_modules/micromark-util-subtokenize/index.js
  function subtokenize(events) {
    const jumps = {};
    let index2 = -1;
    let event;
    let lineIndex;
    let otherIndex;
    let otherEvent;
    let parameters;
    let subevents;
    let more;
    while (++index2 < events.length) {
      while (index2 in jumps) {
        index2 = jumps[index2];
      }
      event = events[index2];
      if (index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix") {
        subevents = event[1]._tokenizer.events;
        otherIndex = 0;
        if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
          otherIndex += 2;
        }
        if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
          while (++otherIndex < subevents.length) {
            if (subevents[otherIndex][1].type === "content") {
              break;
            }
            if (subevents[otherIndex][1].type === "chunkText") {
              subevents[otherIndex][1]._isInFirstContentOfListItem = true;
              otherIndex++;
            }
          }
        }
      }
      if (event[0] === "enter") {
        if (event[1].contentType) {
          Object.assign(jumps, subcontent(events, index2));
          index2 = jumps[index2];
          more = true;
        }
      } else if (event[1]._container) {
        otherIndex = index2;
        lineIndex = void 0;
        while (otherIndex--) {
          otherEvent = events[otherIndex];
          if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
            if (otherEvent[0] === "enter") {
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
              }
              otherEvent[1].type = "lineEnding";
              lineIndex = otherIndex;
            }
          } else {
            break;
          }
        }
        if (lineIndex) {
          event[1].end = Object.assign({}, events[lineIndex][1].start);
          parameters = events.slice(lineIndex, index2);
          parameters.unshift(event);
          splice(events, lineIndex, index2 - lineIndex + 1, parameters);
        }
      }
    }
    return !more;
  }
  function subcontent(events, eventIndex) {
    const token = events[eventIndex][1];
    const context = events[eventIndex][2];
    let startPosition = eventIndex - 1;
    const startPositions = [];
    const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
    const childEvents = tokenizer.events;
    const jumps = [];
    const gaps = {};
    let stream;
    let previous2;
    let index2 = -1;
    let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [start];
    while (current) {
      while (events[++startPosition][1] !== current) {
      }
      startPositions.push(startPosition);
      if (!current._tokenizer) {
        stream = context.sliceStream(current);
        if (!current.next) {
          stream.push(null);
        }
        if (previous2) {
          tokenizer.defineSkip(current.start);
        }
        if (current._isInFirstContentOfListItem) {
          tokenizer._gfmTasklistFirstContentOfListItem = true;
        }
        tokenizer.write(stream);
        if (current._isInFirstContentOfListItem) {
          tokenizer._gfmTasklistFirstContentOfListItem = void 0;
        }
      }
      previous2 = current;
      current = current.next;
    }
    current = token;
    while (++index2 < childEvents.length) {
      if (childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line) {
        start = index2 + 1;
        breaks.push(start);
        current._tokenizer = void 0;
        current.previous = void 0;
        current = current.next;
      }
    }
    tokenizer.events = [];
    if (current) {
      current._tokenizer = void 0;
      current.previous = void 0;
    } else {
      breaks.pop();
    }
    index2 = breaks.length;
    while (index2--) {
      const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
      const start2 = startPositions.pop();
      jumps.unshift([start2, start2 + slice.length - 1]);
      splice(events, start2, 2, slice);
    }
    index2 = -1;
    while (++index2 < jumps.length) {
      gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
      adjust += jumps[index2][1] - jumps[index2][0] - 1;
    }
    return gaps;
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/content.js
  var content2 = {
    tokenize: tokenizeContent,
    resolve: resolveContent
  };
  var continuationConstruct = {
    tokenize: tokenizeContinuation,
    partial: true
  };
  function resolveContent(events) {
    subtokenize(events);
    return events;
  }
  function tokenizeContent(effects, ok2) {
    let previous2;
    return start;
    function start(code2) {
      effects.enter("content");
      previous2 = effects.enter("chunkContent", {
        contentType: "content"
      });
      return data(code2);
    }
    function data(code2) {
      if (code2 === null) {
        return contentEnd(code2);
      }
      if (markdownLineEnding(code2)) {
        return effects.check(
          continuationConstruct,
          contentContinue,
          contentEnd
        )(code2);
      }
      effects.consume(code2);
      return data;
    }
    function contentEnd(code2) {
      effects.exit("chunkContent");
      effects.exit("content");
      return ok2(code2);
    }
    function contentContinue(code2) {
      effects.consume(code2);
      effects.exit("chunkContent");
      previous2.next = effects.enter("chunkContent", {
        contentType: "content",
        previous: previous2
      });
      previous2 = previous2.next;
      return data;
    }
  }
  function tokenizeContinuation(effects, ok2, nok) {
    const self = this;
    return startLookahead;
    function startLookahead(code2) {
      effects.exit("chunkContent");
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, prefixed, "linePrefix");
    }
    function prefixed(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        return nok(code2);
      }
      const tail = self.events[self.events.length - 1];
      if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
        return ok2(code2);
      }
      return effects.interrupt(self.parser.constructs.flow, nok, ok2)(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-factory-destination@1.0.0/node_modules/micromark-factory-destination/index.js
  function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    function start(code2) {
      if (code2 === 60) {
        effects.enter(type);
        effects.enter(literalType);
        effects.enter(literalMarkerType);
        effects.consume(code2);
        effects.exit(literalMarkerType);
        return destinationEnclosedBefore;
      }
      if (code2 === null || code2 === 41 || asciiControl(code2)) {
        return nok(code2);
      }
      effects.enter(type);
      effects.enter(rawType);
      effects.enter(stringType);
      effects.enter("chunkString", {
        contentType: "string"
      });
      return destinationRaw(code2);
    }
    function destinationEnclosedBefore(code2) {
      if (code2 === 62) {
        effects.enter(literalMarkerType);
        effects.consume(code2);
        effects.exit(literalMarkerType);
        effects.exit(literalType);
        effects.exit(type);
        return ok2;
      }
      effects.enter(stringType);
      effects.enter("chunkString", {
        contentType: "string"
      });
      return destinationEnclosed(code2);
    }
    function destinationEnclosed(code2) {
      if (code2 === 62) {
        effects.exit("chunkString");
        effects.exit(stringType);
        return destinationEnclosedBefore(code2);
      }
      if (code2 === null || code2 === 60 || markdownLineEnding(code2)) {
        return nok(code2);
      }
      effects.consume(code2);
      return code2 === 92 ? destinationEnclosedEscape : destinationEnclosed;
    }
    function destinationEnclosedEscape(code2) {
      if (code2 === 60 || code2 === 62 || code2 === 92) {
        effects.consume(code2);
        return destinationEnclosed;
      }
      return destinationEnclosed(code2);
    }
    function destinationRaw(code2) {
      if (code2 === 40) {
        if (++balance > limit)
          return nok(code2);
        effects.consume(code2);
        return destinationRaw;
      }
      if (code2 === 41) {
        if (!balance--) {
          effects.exit("chunkString");
          effects.exit(stringType);
          effects.exit(rawType);
          effects.exit(type);
          return ok2(code2);
        }
        effects.consume(code2);
        return destinationRaw;
      }
      if (code2 === null || markdownLineEndingOrSpace(code2)) {
        if (balance)
          return nok(code2);
        effects.exit("chunkString");
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok2(code2);
      }
      if (asciiControl(code2))
        return nok(code2);
      effects.consume(code2);
      return code2 === 92 ? destinationRawEscape : destinationRaw;
    }
    function destinationRawEscape(code2) {
      if (code2 === 40 || code2 === 41 || code2 === 92) {
        effects.consume(code2);
        return destinationRaw;
      }
      return destinationRaw(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-factory-label@1.0.2/node_modules/micromark-factory-label/index.js
  function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    let data;
    return start;
    function start(code2) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.enter(stringType);
      return atBreak;
    }
    function atBreak(code2) {
      if (code2 === null || code2 === 91 || code2 === 93 && !data || code2 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
        return nok(code2);
      }
      if (code2 === 93) {
        effects.exit(stringType);
        effects.enter(markerType);
        effects.consume(code2);
        effects.exit(markerType);
        effects.exit(type);
        return ok2;
      }
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return atBreak;
      }
      effects.enter("chunkString", {
        contentType: "string"
      });
      return label(code2);
    }
    function label(code2) {
      if (code2 === null || code2 === 91 || code2 === 93 || markdownLineEnding(code2) || size++ > 999) {
        effects.exit("chunkString");
        return atBreak(code2);
      }
      effects.consume(code2);
      data = data || !markdownSpace(code2);
      return code2 === 92 ? labelEscape : label;
    }
    function labelEscape(code2) {
      if (code2 === 91 || code2 === 92 || code2 === 93) {
        effects.consume(code2);
        size++;
        return label;
      }
      return label(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-factory-title@1.0.2/node_modules/micromark-factory-title/index.js
  function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
    let marker;
    return start;
    function start(code2) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      marker = code2 === 40 ? 41 : code2;
      return atFirstTitleBreak;
    }
    function atFirstTitleBreak(code2) {
      if (code2 === marker) {
        effects.enter(markerType);
        effects.consume(code2);
        effects.exit(markerType);
        effects.exit(type);
        return ok2;
      }
      effects.enter(stringType);
      return atTitleBreak(code2);
    }
    function atTitleBreak(code2) {
      if (code2 === marker) {
        effects.exit(stringType);
        return atFirstTitleBreak(marker);
      }
      if (code2 === null) {
        return nok(code2);
      }
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return factorySpace(effects, atTitleBreak, "linePrefix");
      }
      effects.enter("chunkString", {
        contentType: "string"
      });
      return title(code2);
    }
    function title(code2) {
      if (code2 === marker || code2 === null || markdownLineEnding(code2)) {
        effects.exit("chunkString");
        return atTitleBreak(code2);
      }
      effects.consume(code2);
      return code2 === 92 ? titleEscape : title;
    }
    function titleEscape(code2) {
      if (code2 === marker || code2 === 92) {
        effects.consume(code2);
        return title;
      }
      return title(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-factory-whitespace@1.0.0/node_modules/micromark-factory-whitespace/index.js
  function factoryWhitespace(effects, ok2) {
    let seen;
    return start;
    function start(code2) {
      if (markdownLineEnding(code2)) {
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        seen = true;
        return start;
      }
      if (markdownSpace(code2)) {
        return factorySpace(
          effects,
          start,
          seen ? "linePrefix" : "lineSuffix"
        )(code2);
      }
      return ok2(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-util-normalize-identifier@1.0.0/node_modules/micromark-util-normalize-identifier/index.js
  function normalizeIdentifier(value) {
    return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/definition.js
  var definition = {
    name: "definition",
    tokenize: tokenizeDefinition
  };
  var titleConstruct = {
    tokenize: tokenizeTitle,
    partial: true
  };
  function tokenizeDefinition(effects, ok2, nok) {
    const self = this;
    let identifier;
    return start;
    function start(code2) {
      effects.enter("definition");
      return factoryLabel.call(
        self,
        effects,
        labelAfter,
        nok,
        "definitionLabel",
        "definitionLabelMarker",
        "definitionLabelString"
      )(code2);
    }
    function labelAfter(code2) {
      identifier = normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      );
      if (code2 === 58) {
        effects.enter("definitionMarker");
        effects.consume(code2);
        effects.exit("definitionMarker");
        return factoryWhitespace(
          effects,
          factoryDestination(
            effects,
            effects.attempt(
              titleConstruct,
              factorySpace(effects, after, "whitespace"),
              factorySpace(effects, after, "whitespace")
            ),
            nok,
            "definitionDestination",
            "definitionDestinationLiteral",
            "definitionDestinationLiteralMarker",
            "definitionDestinationRaw",
            "definitionDestinationString"
          )
        );
      }
      return nok(code2);
    }
    function after(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("definition");
        if (!self.parser.defined.includes(identifier)) {
          self.parser.defined.push(identifier);
        }
        return ok2(code2);
      }
      return nok(code2);
    }
  }
  function tokenizeTitle(effects, ok2, nok) {
    return start;
    function start(code2) {
      return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, before)(code2) : nok(code2);
    }
    function before(code2) {
      if (code2 === 34 || code2 === 39 || code2 === 40) {
        return factoryTitle(
          effects,
          factorySpace(effects, after, "whitespace"),
          nok,
          "definitionTitle",
          "definitionTitleMarker",
          "definitionTitleString"
        )(code2);
      }
      return nok(code2);
    }
    function after(code2) {
      return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
  var hardBreakEscape = {
    name: "hardBreakEscape",
    tokenize: tokenizeHardBreakEscape
  };
  function tokenizeHardBreakEscape(effects, ok2, nok) {
    return start;
    function start(code2) {
      effects.enter("hardBreakEscape");
      effects.enter("escapeMarker");
      effects.consume(code2);
      return open;
    }
    function open(code2) {
      if (markdownLineEnding(code2)) {
        effects.exit("escapeMarker");
        effects.exit("hardBreakEscape");
        return ok2(code2);
      }
      return nok(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/heading-atx.js
  var headingAtx = {
    name: "headingAtx",
    tokenize: tokenizeHeadingAtx,
    resolve: resolveHeadingAtx
  };
  function resolveHeadingAtx(events, context) {
    let contentEnd = events.length - 2;
    let contentStart = 3;
    let content3;
    let text4;
    if (events[contentStart][1].type === "whitespace") {
      contentStart += 2;
    }
    if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
      contentEnd -= 2;
    }
    if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
      contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    }
    if (contentEnd > contentStart) {
      content3 = {
        type: "atxHeadingText",
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end
      };
      text4 = {
        type: "chunkText",
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end,
        contentType: "text"
      };
      splice(events, contentStart, contentEnd - contentStart + 1, [
        ["enter", content3, context],
        ["enter", text4, context],
        ["exit", text4, context],
        ["exit", content3, context]
      ]);
    }
    return events;
  }
  function tokenizeHeadingAtx(effects, ok2, nok) {
    const self = this;
    let size = 0;
    return start;
    function start(code2) {
      effects.enter("atxHeading");
      effects.enter("atxHeadingSequence");
      return fenceOpenInside(code2);
    }
    function fenceOpenInside(code2) {
      if (code2 === 35 && size++ < 6) {
        effects.consume(code2);
        return fenceOpenInside;
      }
      if (code2 === null || markdownLineEndingOrSpace(code2)) {
        effects.exit("atxHeadingSequence");
        return self.interrupt ? ok2(code2) : headingBreak(code2);
      }
      return nok(code2);
    }
    function headingBreak(code2) {
      if (code2 === 35) {
        effects.enter("atxHeadingSequence");
        return sequence(code2);
      }
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("atxHeading");
        return ok2(code2);
      }
      if (markdownSpace(code2)) {
        return factorySpace(effects, headingBreak, "whitespace")(code2);
      }
      effects.enter("atxHeadingText");
      return data(code2);
    }
    function sequence(code2) {
      if (code2 === 35) {
        effects.consume(code2);
        return sequence;
      }
      effects.exit("atxHeadingSequence");
      return headingBreak(code2);
    }
    function data(code2) {
      if (code2 === null || code2 === 35 || markdownLineEndingOrSpace(code2)) {
        effects.exit("atxHeadingText");
        return headingBreak(code2);
      }
      effects.consume(code2);
      return data;
    }
  }

  // ../../node_modules/.pnpm/micromark-util-html-tag-name@1.1.0/node_modules/micromark-util-html-tag-name/index.js
  var htmlBlockNames = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ];
  var htmlRawNames = ["pre", "script", "style", "textarea"];

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/html-flow.js
  var htmlFlow = {
    name: "htmlFlow",
    tokenize: tokenizeHtmlFlow,
    resolveTo: resolveToHtmlFlow,
    concrete: true
  };
  var nextBlankConstruct = {
    tokenize: tokenizeNextBlank,
    partial: true
  };
  function resolveToHtmlFlow(events) {
    let index2 = events.length;
    while (index2--) {
      if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
        break;
      }
    }
    if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
      events[index2][1].start = events[index2 - 2][1].start;
      events[index2 + 1][1].start = events[index2 - 2][1].start;
      events.splice(index2 - 2, 2);
    }
    return events;
  }
  function tokenizeHtmlFlow(effects, ok2, nok) {
    const self = this;
    let kind;
    let startTag;
    let buffer2;
    let index2;
    let marker;
    return start;
    function start(code2) {
      effects.enter("htmlFlow");
      effects.enter("htmlFlowData");
      effects.consume(code2);
      return open;
    }
    function open(code2) {
      if (code2 === 33) {
        effects.consume(code2);
        return declarationStart;
      }
      if (code2 === 47) {
        effects.consume(code2);
        return tagCloseStart;
      }
      if (code2 === 63) {
        effects.consume(code2);
        kind = 3;
        return self.interrupt ? ok2 : continuationDeclarationInside;
      }
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        buffer2 = String.fromCharCode(code2);
        startTag = true;
        return tagName;
      }
      return nok(code2);
    }
    function declarationStart(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        kind = 2;
        return commentOpenInside;
      }
      if (code2 === 91) {
        effects.consume(code2);
        kind = 5;
        buffer2 = "CDATA[";
        index2 = 0;
        return cdataOpenInside;
      }
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        kind = 4;
        return self.interrupt ? ok2 : continuationDeclarationInside;
      }
      return nok(code2);
    }
    function commentOpenInside(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return self.interrupt ? ok2 : continuationDeclarationInside;
      }
      return nok(code2);
    }
    function cdataOpenInside(code2) {
      if (code2 === buffer2.charCodeAt(index2++)) {
        effects.consume(code2);
        return index2 === buffer2.length ? self.interrupt ? ok2 : continuation : cdataOpenInside;
      }
      return nok(code2);
    }
    function tagCloseStart(code2) {
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        buffer2 = String.fromCharCode(code2);
        return tagName;
      }
      return nok(code2);
    }
    function tagName(code2) {
      if (code2 === null || code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
        if (code2 !== 47 && startTag && htmlRawNames.includes(buffer2.toLowerCase())) {
          kind = 1;
          return self.interrupt ? ok2(code2) : continuation(code2);
        }
        if (htmlBlockNames.includes(buffer2.toLowerCase())) {
          kind = 6;
          if (code2 === 47) {
            effects.consume(code2);
            return basicSelfClosing;
          }
          return self.interrupt ? ok2(code2) : continuation(code2);
        }
        kind = 7;
        return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code2) : startTag ? completeAttributeNameBefore(code2) : completeClosingTagAfter(code2);
      }
      if (code2 === 45 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        buffer2 += String.fromCharCode(code2);
        return tagName;
      }
      return nok(code2);
    }
    function basicSelfClosing(code2) {
      if (code2 === 62) {
        effects.consume(code2);
        return self.interrupt ? ok2 : continuation;
      }
      return nok(code2);
    }
    function completeClosingTagAfter(code2) {
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeClosingTagAfter;
      }
      return completeEnd(code2);
    }
    function completeAttributeNameBefore(code2) {
      if (code2 === 47) {
        effects.consume(code2);
        return completeEnd;
      }
      if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
        effects.consume(code2);
        return completeAttributeName;
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeAttributeNameBefore;
      }
      return completeEnd(code2);
    }
    function completeAttributeName(code2) {
      if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        return completeAttributeName;
      }
      return completeAttributeNameAfter(code2);
    }
    function completeAttributeNameAfter(code2) {
      if (code2 === 61) {
        effects.consume(code2);
        return completeAttributeValueBefore;
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeAttributeNameAfter;
      }
      return completeAttributeNameBefore(code2);
    }
    function completeAttributeValueBefore(code2) {
      if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
        return nok(code2);
      }
      if (code2 === 34 || code2 === 39) {
        effects.consume(code2);
        marker = code2;
        return completeAttributeValueQuoted;
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeAttributeValueBefore;
      }
      marker = null;
      return completeAttributeValueUnquoted(code2);
    }
    function completeAttributeValueQuoted(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        return nok(code2);
      }
      if (code2 === marker) {
        effects.consume(code2);
        return completeAttributeValueQuotedAfter;
      }
      effects.consume(code2);
      return completeAttributeValueQuoted;
    }
    function completeAttributeValueUnquoted(code2) {
      if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 || markdownLineEndingOrSpace(code2)) {
        return completeAttributeNameAfter(code2);
      }
      effects.consume(code2);
      return completeAttributeValueUnquoted;
    }
    function completeAttributeValueQuotedAfter(code2) {
      if (code2 === 47 || code2 === 62 || markdownSpace(code2)) {
        return completeAttributeNameBefore(code2);
      }
      return nok(code2);
    }
    function completeEnd(code2) {
      if (code2 === 62) {
        effects.consume(code2);
        return completeAfter;
      }
      return nok(code2);
    }
    function completeAfter(code2) {
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return completeAfter;
      }
      return code2 === null || markdownLineEnding(code2) ? continuation(code2) : nok(code2);
    }
    function continuation(code2) {
      if (code2 === 45 && kind === 2) {
        effects.consume(code2);
        return continuationCommentInside;
      }
      if (code2 === 60 && kind === 1) {
        effects.consume(code2);
        return continuationRawTagOpen;
      }
      if (code2 === 62 && kind === 4) {
        effects.consume(code2);
        return continuationClose;
      }
      if (code2 === 63 && kind === 3) {
        effects.consume(code2);
        return continuationDeclarationInside;
      }
      if (code2 === 93 && kind === 5) {
        effects.consume(code2);
        return continuationCharacterDataInside;
      }
      if (markdownLineEnding(code2) && (kind === 6 || kind === 7)) {
        return effects.check(
          nextBlankConstruct,
          continuationClose,
          continuationAtLineEnding
        )(code2);
      }
      if (code2 === null || markdownLineEnding(code2)) {
        return continuationAtLineEnding(code2);
      }
      effects.consume(code2);
      return continuation;
    }
    function continuationAtLineEnding(code2) {
      effects.exit("htmlFlowData");
      return htmlContinueStart(code2);
    }
    function htmlContinueStart(code2) {
      if (code2 === null) {
        return done(code2);
      }
      if (markdownLineEnding(code2)) {
        return effects.attempt(
          {
            tokenize: htmlLineEnd,
            partial: true
          },
          htmlContinueStart,
          done
        )(code2);
      }
      effects.enter("htmlFlowData");
      return continuation(code2);
    }
    function htmlLineEnd(effects2, ok3, nok2) {
      return start2;
      function start2(code2) {
        effects2.enter("lineEnding");
        effects2.consume(code2);
        effects2.exit("lineEnding");
        return lineStart;
      }
      function lineStart(code2) {
        return self.parser.lazy[self.now().line] ? nok2(code2) : ok3(code2);
      }
    }
    function continuationCommentInside(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return continuationDeclarationInside;
      }
      return continuation(code2);
    }
    function continuationRawTagOpen(code2) {
      if (code2 === 47) {
        effects.consume(code2);
        buffer2 = "";
        return continuationRawEndTag;
      }
      return continuation(code2);
    }
    function continuationRawEndTag(code2) {
      if (code2 === 62 && htmlRawNames.includes(buffer2.toLowerCase())) {
        effects.consume(code2);
        return continuationClose;
      }
      if (asciiAlpha(code2) && buffer2.length < 8) {
        effects.consume(code2);
        buffer2 += String.fromCharCode(code2);
        return continuationRawEndTag;
      }
      return continuation(code2);
    }
    function continuationCharacterDataInside(code2) {
      if (code2 === 93) {
        effects.consume(code2);
        return continuationDeclarationInside;
      }
      return continuation(code2);
    }
    function continuationDeclarationInside(code2) {
      if (code2 === 62) {
        effects.consume(code2);
        return continuationClose;
      }
      if (code2 === 45 && kind === 2) {
        effects.consume(code2);
        return continuationDeclarationInside;
      }
      return continuation(code2);
    }
    function continuationClose(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("htmlFlowData");
        return done(code2);
      }
      effects.consume(code2);
      return continuationClose;
    }
    function done(code2) {
      effects.exit("htmlFlow");
      return ok2(code2);
    }
  }
  function tokenizeNextBlank(effects, ok2, nok) {
    return start;
    function start(code2) {
      effects.exit("htmlFlowData");
      effects.enter("lineEndingBlank");
      effects.consume(code2);
      effects.exit("lineEndingBlank");
      return effects.attempt(blankLine, ok2, nok);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/html-text.js
  var htmlText = {
    name: "htmlText",
    tokenize: tokenizeHtmlText
  };
  function tokenizeHtmlText(effects, ok2, nok) {
    const self = this;
    let marker;
    let buffer2;
    let index2;
    let returnState;
    return start;
    function start(code2) {
      effects.enter("htmlText");
      effects.enter("htmlTextData");
      effects.consume(code2);
      return open;
    }
    function open(code2) {
      if (code2 === 33) {
        effects.consume(code2);
        return declarationOpen;
      }
      if (code2 === 47) {
        effects.consume(code2);
        return tagCloseStart;
      }
      if (code2 === 63) {
        effects.consume(code2);
        return instruction;
      }
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        return tagOpen;
      }
      return nok(code2);
    }
    function declarationOpen(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return commentOpen;
      }
      if (code2 === 91) {
        effects.consume(code2);
        buffer2 = "CDATA[";
        index2 = 0;
        return cdataOpen;
      }
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        return declaration;
      }
      return nok(code2);
    }
    function commentOpen(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return commentStart;
      }
      return nok(code2);
    }
    function commentStart(code2) {
      if (code2 === null || code2 === 62) {
        return nok(code2);
      }
      if (code2 === 45) {
        effects.consume(code2);
        return commentStartDash;
      }
      return comment(code2);
    }
    function commentStartDash(code2) {
      if (code2 === null || code2 === 62) {
        return nok(code2);
      }
      return comment(code2);
    }
    function comment(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      if (code2 === 45) {
        effects.consume(code2);
        return commentClose;
      }
      if (markdownLineEnding(code2)) {
        returnState = comment;
        return atLineEnding(code2);
      }
      effects.consume(code2);
      return comment;
    }
    function commentClose(code2) {
      if (code2 === 45) {
        effects.consume(code2);
        return end;
      }
      return comment(code2);
    }
    function cdataOpen(code2) {
      if (code2 === buffer2.charCodeAt(index2++)) {
        effects.consume(code2);
        return index2 === buffer2.length ? cdata : cdataOpen;
      }
      return nok(code2);
    }
    function cdata(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      if (code2 === 93) {
        effects.consume(code2);
        return cdataClose;
      }
      if (markdownLineEnding(code2)) {
        returnState = cdata;
        return atLineEnding(code2);
      }
      effects.consume(code2);
      return cdata;
    }
    function cdataClose(code2) {
      if (code2 === 93) {
        effects.consume(code2);
        return cdataEnd;
      }
      return cdata(code2);
    }
    function cdataEnd(code2) {
      if (code2 === 62) {
        return end(code2);
      }
      if (code2 === 93) {
        effects.consume(code2);
        return cdataEnd;
      }
      return cdata(code2);
    }
    function declaration(code2) {
      if (code2 === null || code2 === 62) {
        return end(code2);
      }
      if (markdownLineEnding(code2)) {
        returnState = declaration;
        return atLineEnding(code2);
      }
      effects.consume(code2);
      return declaration;
    }
    function instruction(code2) {
      if (code2 === null) {
        return nok(code2);
      }
      if (code2 === 63) {
        effects.consume(code2);
        return instructionClose;
      }
      if (markdownLineEnding(code2)) {
        returnState = instruction;
        return atLineEnding(code2);
      }
      effects.consume(code2);
      return instruction;
    }
    function instructionClose(code2) {
      return code2 === 62 ? end(code2) : instruction(code2);
    }
    function tagCloseStart(code2) {
      if (asciiAlpha(code2)) {
        effects.consume(code2);
        return tagClose;
      }
      return nok(code2);
    }
    function tagClose(code2) {
      if (code2 === 45 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        return tagClose;
      }
      return tagCloseBetween(code2);
    }
    function tagCloseBetween(code2) {
      if (markdownLineEnding(code2)) {
        returnState = tagCloseBetween;
        return atLineEnding(code2);
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return tagCloseBetween;
      }
      return end(code2);
    }
    function tagOpen(code2) {
      if (code2 === 45 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        return tagOpen;
      }
      if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
        return tagOpenBetween(code2);
      }
      return nok(code2);
    }
    function tagOpenBetween(code2) {
      if (code2 === 47) {
        effects.consume(code2);
        return end;
      }
      if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
        effects.consume(code2);
        return tagOpenAttributeName;
      }
      if (markdownLineEnding(code2)) {
        returnState = tagOpenBetween;
        return atLineEnding(code2);
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return tagOpenBetween;
      }
      return end(code2);
    }
    function tagOpenAttributeName(code2) {
      if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
        effects.consume(code2);
        return tagOpenAttributeName;
      }
      return tagOpenAttributeNameAfter(code2);
    }
    function tagOpenAttributeNameAfter(code2) {
      if (code2 === 61) {
        effects.consume(code2);
        return tagOpenAttributeValueBefore;
      }
      if (markdownLineEnding(code2)) {
        returnState = tagOpenAttributeNameAfter;
        return atLineEnding(code2);
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return tagOpenAttributeNameAfter;
      }
      return tagOpenBetween(code2);
    }
    function tagOpenAttributeValueBefore(code2) {
      if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
        return nok(code2);
      }
      if (code2 === 34 || code2 === 39) {
        effects.consume(code2);
        marker = code2;
        return tagOpenAttributeValueQuoted;
      }
      if (markdownLineEnding(code2)) {
        returnState = tagOpenAttributeValueBefore;
        return atLineEnding(code2);
      }
      if (markdownSpace(code2)) {
        effects.consume(code2);
        return tagOpenAttributeValueBefore;
      }
      effects.consume(code2);
      marker = void 0;
      return tagOpenAttributeValueUnquoted;
    }
    function tagOpenAttributeValueQuoted(code2) {
      if (code2 === marker) {
        effects.consume(code2);
        return tagOpenAttributeValueQuotedAfter;
      }
      if (code2 === null) {
        return nok(code2);
      }
      if (markdownLineEnding(code2)) {
        returnState = tagOpenAttributeValueQuoted;
        return atLineEnding(code2);
      }
      effects.consume(code2);
      return tagOpenAttributeValueQuoted;
    }
    function tagOpenAttributeValueQuotedAfter(code2) {
      if (code2 === 62 || code2 === 47 || markdownLineEndingOrSpace(code2)) {
        return tagOpenBetween(code2);
      }
      return nok(code2);
    }
    function tagOpenAttributeValueUnquoted(code2) {
      if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 96) {
        return nok(code2);
      }
      if (code2 === 62 || markdownLineEndingOrSpace(code2)) {
        return tagOpenBetween(code2);
      }
      effects.consume(code2);
      return tagOpenAttributeValueUnquoted;
    }
    function atLineEnding(code2) {
      effects.exit("htmlTextData");
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(
        effects,
        afterPrefix,
        "linePrefix",
        self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      );
    }
    function afterPrefix(code2) {
      effects.enter("htmlTextData");
      return returnState(code2);
    }
    function end(code2) {
      if (code2 === 62) {
        effects.consume(code2);
        effects.exit("htmlTextData");
        effects.exit("htmlText");
        return ok2;
      }
      return nok(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-end.js
  var labelEnd = {
    name: "labelEnd",
    tokenize: tokenizeLabelEnd,
    resolveTo: resolveToLabelEnd,
    resolveAll: resolveAllLabelEnd
  };
  var resourceConstruct = {
    tokenize: tokenizeResource
  };
  var fullReferenceConstruct = {
    tokenize: tokenizeFullReference
  };
  var collapsedReferenceConstruct = {
    tokenize: tokenizeCollapsedReference
  };
  function resolveAllLabelEnd(events) {
    let index2 = -1;
    let token;
    while (++index2 < events.length) {
      token = events[index2][1];
      if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
        events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
        token.type = "data";
        index2++;
      }
    }
    return events;
  }
  function resolveToLabelEnd(events, context) {
    let index2 = events.length;
    let offset = 0;
    let token;
    let open;
    let close;
    let media;
    while (index2--) {
      token = events[index2][1];
      if (open) {
        if (token.type === "link" || token.type === "labelLink" && token._inactive) {
          break;
        }
        if (events[index2][0] === "enter" && token.type === "labelLink") {
          token._inactive = true;
        }
      } else if (close) {
        if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
          open = index2;
          if (token.type !== "labelLink") {
            offset = 2;
            break;
          }
        }
      } else if (token.type === "labelEnd") {
        close = index2;
      }
    }
    const group = {
      type: events[open][1].type === "labelLink" ? "link" : "image",
      start: Object.assign({}, events[open][1].start),
      end: Object.assign({}, events[events.length - 1][1].end)
    };
    const label = {
      type: "label",
      start: Object.assign({}, events[open][1].start),
      end: Object.assign({}, events[close][1].end)
    };
    const text4 = {
      type: "labelText",
      start: Object.assign({}, events[open + offset + 2][1].end),
      end: Object.assign({}, events[close - 2][1].start)
    };
    media = [
      ["enter", group, context],
      ["enter", label, context]
    ];
    media = push(media, events.slice(open + 1, open + offset + 3));
    media = push(media, [["enter", text4, context]]);
    media = push(
      media,
      resolveAll(
        context.parser.constructs.insideSpan.null,
        events.slice(open + offset + 4, close - 3),
        context
      )
    );
    media = push(media, [
      ["exit", text4, context],
      events[close - 2],
      events[close - 1],
      ["exit", label, context]
    ]);
    media = push(media, events.slice(close + 1));
    media = push(media, [["exit", group, context]]);
    splice(events, open, events.length, media);
    return events;
  }
  function tokenizeLabelEnd(effects, ok2, nok) {
    const self = this;
    let index2 = self.events.length;
    let labelStart;
    let defined;
    while (index2--) {
      if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
        labelStart = self.events[index2][1];
        break;
      }
    }
    return start;
    function start(code2) {
      if (!labelStart) {
        return nok(code2);
      }
      if (labelStart._inactive)
        return balanced(code2);
      defined = self.parser.defined.includes(
        normalizeIdentifier(
          self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
          })
        )
      );
      effects.enter("labelEnd");
      effects.enter("labelMarker");
      effects.consume(code2);
      effects.exit("labelMarker");
      effects.exit("labelEnd");
      return afterLabelEnd;
    }
    function afterLabelEnd(code2) {
      if (code2 === 40) {
        return effects.attempt(
          resourceConstruct,
          ok2,
          defined ? ok2 : balanced
        )(code2);
      }
      if (code2 === 91) {
        return effects.attempt(
          fullReferenceConstruct,
          ok2,
          defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced
        )(code2);
      }
      return defined ? ok2(code2) : balanced(code2);
    }
    function balanced(code2) {
      labelStart._balanced = true;
      return nok(code2);
    }
  }
  function tokenizeResource(effects, ok2, nok) {
    return start;
    function start(code2) {
      effects.enter("resource");
      effects.enter("resourceMarker");
      effects.consume(code2);
      effects.exit("resourceMarker");
      return factoryWhitespace(effects, open);
    }
    function open(code2) {
      if (code2 === 41) {
        return end(code2);
      }
      return factoryDestination(
        effects,
        destinationAfter,
        nok,
        "resourceDestination",
        "resourceDestinationLiteral",
        "resourceDestinationLiteralMarker",
        "resourceDestinationRaw",
        "resourceDestinationString",
        32
      )(code2);
    }
    function destinationAfter(code2) {
      return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, between)(code2) : end(code2);
    }
    function between(code2) {
      if (code2 === 34 || code2 === 39 || code2 === 40) {
        return factoryTitle(
          effects,
          factoryWhitespace(effects, end),
          nok,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(code2);
      }
      return end(code2);
    }
    function end(code2) {
      if (code2 === 41) {
        effects.enter("resourceMarker");
        effects.consume(code2);
        effects.exit("resourceMarker");
        effects.exit("resource");
        return ok2;
      }
      return nok(code2);
    }
  }
  function tokenizeFullReference(effects, ok2, nok) {
    const self = this;
    return start;
    function start(code2) {
      return factoryLabel.call(
        self,
        effects,
        afterLabel,
        nok,
        "reference",
        "referenceMarker",
        "referenceString"
      )(code2);
    }
    function afterLabel(code2) {
      return self.parser.defined.includes(
        normalizeIdentifier(
          self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
        )
      ) ? ok2(code2) : nok(code2);
    }
  }
  function tokenizeCollapsedReference(effects, ok2, nok) {
    return start;
    function start(code2) {
      effects.enter("reference");
      effects.enter("referenceMarker");
      effects.consume(code2);
      effects.exit("referenceMarker");
      return open;
    }
    function open(code2) {
      if (code2 === 93) {
        effects.enter("referenceMarker");
        effects.consume(code2);
        effects.exit("referenceMarker");
        effects.exit("reference");
        return ok2;
      }
      return nok(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-start-image.js
  var labelStartImage = {
    name: "labelStartImage",
    tokenize: tokenizeLabelStartImage,
    resolveAll: labelEnd.resolveAll
  };
  function tokenizeLabelStartImage(effects, ok2, nok) {
    const self = this;
    return start;
    function start(code2) {
      effects.enter("labelImage");
      effects.enter("labelImageMarker");
      effects.consume(code2);
      effects.exit("labelImageMarker");
      return open;
    }
    function open(code2) {
      if (code2 === 91) {
        effects.enter("labelMarker");
        effects.consume(code2);
        effects.exit("labelMarker");
        effects.exit("labelImage");
        return after;
      }
      return nok(code2);
    }
    function after(code2) {
      return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-start-link.js
  var labelStartLink = {
    name: "labelStartLink",
    tokenize: tokenizeLabelStartLink,
    resolveAll: labelEnd.resolveAll
  };
  function tokenizeLabelStartLink(effects, ok2, nok) {
    const self = this;
    return start;
    function start(code2) {
      effects.enter("labelLink");
      effects.enter("labelMarker");
      effects.consume(code2);
      effects.exit("labelMarker");
      effects.exit("labelLink");
      return after;
    }
    function after(code2) {
      return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/line-ending.js
  var lineEnding = {
    name: "lineEnding",
    tokenize: tokenizeLineEnding
  };
  function tokenizeLineEnding(effects, ok2) {
    return start;
    function start(code2) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, ok2, "linePrefix");
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/thematic-break.js
  var thematicBreak = {
    name: "thematicBreak",
    tokenize: tokenizeThematicBreak
  };
  function tokenizeThematicBreak(effects, ok2, nok) {
    let size = 0;
    let marker;
    return start;
    function start(code2) {
      effects.enter("thematicBreak");
      marker = code2;
      return atBreak(code2);
    }
    function atBreak(code2) {
      if (code2 === marker) {
        effects.enter("thematicBreakSequence");
        return sequence(code2);
      }
      if (markdownSpace(code2)) {
        return factorySpace(effects, atBreak, "whitespace")(code2);
      }
      if (size < 3 || code2 !== null && !markdownLineEnding(code2)) {
        return nok(code2);
      }
      effects.exit("thematicBreak");
      return ok2(code2);
    }
    function sequence(code2) {
      if (code2 === marker) {
        effects.consume(code2);
        size++;
        return sequence;
      }
      effects.exit("thematicBreakSequence");
      return atBreak(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/list.js
  var list = {
    name: "list",
    tokenize: tokenizeListStart,
    continuation: {
      tokenize: tokenizeListContinuation
    },
    exit: tokenizeListEnd
  };
  var listItemPrefixWhitespaceConstruct = {
    tokenize: tokenizeListItemPrefixWhitespace,
    partial: true
  };
  var indentConstruct = {
    tokenize: tokenizeIndent,
    partial: true
  };
  function tokenizeListStart(effects, ok2, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let size = 0;
    return start;
    function start(code2) {
      const kind = self.containerState.type || (code2 === 42 || code2 === 43 || code2 === 45 ? "listUnordered" : "listOrdered");
      if (kind === "listUnordered" ? !self.containerState.marker || code2 === self.containerState.marker : asciiDigit(code2)) {
        if (!self.containerState.type) {
          self.containerState.type = kind;
          effects.enter(kind, {
            _container: true
          });
        }
        if (kind === "listUnordered") {
          effects.enter("listItemPrefix");
          return code2 === 42 || code2 === 45 ? effects.check(thematicBreak, nok, atMarker)(code2) : atMarker(code2);
        }
        if (!self.interrupt || code2 === 49) {
          effects.enter("listItemPrefix");
          effects.enter("listItemValue");
          return inside(code2);
        }
      }
      return nok(code2);
    }
    function inside(code2) {
      if (asciiDigit(code2) && ++size < 10) {
        effects.consume(code2);
        return inside;
      }
      if ((!self.interrupt || size < 2) && (self.containerState.marker ? code2 === self.containerState.marker : code2 === 41 || code2 === 46)) {
        effects.exit("listItemValue");
        return atMarker(code2);
      }
      return nok(code2);
    }
    function atMarker(code2) {
      effects.enter("listItemMarker");
      effects.consume(code2);
      effects.exit("listItemMarker");
      self.containerState.marker = self.containerState.marker || code2;
      return effects.check(
        blankLine,
        self.interrupt ? nok : onBlank,
        effects.attempt(
          listItemPrefixWhitespaceConstruct,
          endOfPrefix,
          otherPrefix
        )
      );
    }
    function onBlank(code2) {
      self.containerState.initialBlankLine = true;
      initialSize++;
      return endOfPrefix(code2);
    }
    function otherPrefix(code2) {
      if (markdownSpace(code2)) {
        effects.enter("listItemPrefixWhitespace");
        effects.consume(code2);
        effects.exit("listItemPrefixWhitespace");
        return endOfPrefix;
      }
      return nok(code2);
    }
    function endOfPrefix(code2) {
      self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
      return ok2(code2);
    }
  }
  function tokenizeListContinuation(effects, ok2, nok) {
    const self = this;
    self.containerState._closeFlow = void 0;
    return effects.check(blankLine, onBlank, notBlank);
    function onBlank(code2) {
      self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
      return factorySpace(
        effects,
        ok2,
        "listItemIndent",
        self.containerState.size + 1
      )(code2);
    }
    function notBlank(code2) {
      if (self.containerState.furtherBlankLines || !markdownSpace(code2)) {
        self.containerState.furtherBlankLines = void 0;
        self.containerState.initialBlankLine = void 0;
        return notInCurrentItem(code2);
      }
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code2);
    }
    function notInCurrentItem(code2) {
      self.containerState._closeFlow = true;
      self.interrupt = void 0;
      return factorySpace(
        effects,
        effects.attempt(list, ok2, nok),
        "linePrefix",
        self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code2);
    }
  }
  function tokenizeIndent(effects, ok2, nok) {
    const self = this;
    return factorySpace(
      effects,
      afterPrefix,
      "listItemIndent",
      self.containerState.size + 1
    );
    function afterPrefix(code2) {
      const tail = self.events[self.events.length - 1];
      return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok2(code2) : nok(code2);
    }
  }
  function tokenizeListEnd(effects) {
    effects.exit(this.containerState.type);
  }
  function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
    const self = this;
    return factorySpace(
      effects,
      afterPrefix,
      "listItemPrefixWhitespace",
      self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
    );
    function afterPrefix(code2) {
      const tail = self.events[self.events.length - 1];
      return !markdownSpace(code2) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code2) : nok(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/setext-underline.js
  var setextUnderline = {
    name: "setextUnderline",
    tokenize: tokenizeSetextUnderline,
    resolveTo: resolveToSetextUnderline
  };
  function resolveToSetextUnderline(events, context) {
    let index2 = events.length;
    let content3;
    let text4;
    let definition2;
    while (index2--) {
      if (events[index2][0] === "enter") {
        if (events[index2][1].type === "content") {
          content3 = index2;
          break;
        }
        if (events[index2][1].type === "paragraph") {
          text4 = index2;
        }
      } else {
        if (events[index2][1].type === "content") {
          events.splice(index2, 1);
        }
        if (!definition2 && events[index2][1].type === "definition") {
          definition2 = index2;
        }
      }
    }
    const heading2 = {
      type: "setextHeading",
      start: Object.assign({}, events[text4][1].start),
      end: Object.assign({}, events[events.length - 1][1].end)
    };
    events[text4][1].type = "setextHeadingText";
    if (definition2) {
      events.splice(text4, 0, ["enter", heading2, context]);
      events.splice(definition2 + 1, 0, ["exit", events[content3][1], context]);
      events[content3][1].end = Object.assign({}, events[definition2][1].end);
    } else {
      events[content3][1] = heading2;
    }
    events.push(["exit", heading2, context]);
    return events;
  }
  function tokenizeSetextUnderline(effects, ok2, nok) {
    const self = this;
    let index2 = self.events.length;
    let marker;
    let paragraph2;
    while (index2--) {
      if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
        paragraph2 = self.events[index2][1].type === "paragraph";
        break;
      }
    }
    return start;
    function start(code2) {
      if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph2)) {
        effects.enter("setextHeadingLine");
        effects.enter("setextHeadingLineSequence");
        marker = code2;
        return closingSequence(code2);
      }
      return nok(code2);
    }
    function closingSequence(code2) {
      if (code2 === marker) {
        effects.consume(code2);
        return closingSequence;
      }
      effects.exit("setextHeadingLineSequence");
      return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code2);
    }
    function closingSequenceEnd(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects.exit("setextHeadingLine");
        return ok2(code2);
      }
      return nok(code2);
    }
  }

  // ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/flow.js
  var flow = {
    tokenize: initializeFlow
  };
  function initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(
      blankLine,
      atBlankEnding,
      effects.attempt(
        this.parser.constructs.flowInitial,
        afterConstruct,
        factorySpace(
          effects,
          effects.attempt(
            this.parser.constructs.flow,
            afterConstruct,
            effects.attempt(content2, afterConstruct)
          ),
          "linePrefix"
        )
      )
    );
    return initial;
    function atBlankEnding(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("lineEndingBlank");
      effects.consume(code2);
      effects.exit("lineEndingBlank");
      self.currentConstruct = void 0;
      return initial;
    }
    function afterConstruct(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      self.currentConstruct = void 0;
      return initial;
    }
  }

  // ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/text.js
  var resolver = {
    resolveAll: createResolver()
  };
  var string = initializeFactory("string");
  var text = initializeFactory("text");
  function initializeFactory(field) {
    return {
      tokenize: initializeText,
      resolveAll: createResolver(
        field === "text" ? resolveAllLineSuffixes : void 0
      )
    };
    function initializeText(effects) {
      const self = this;
      const constructs2 = this.parser.constructs[field];
      const text4 = effects.attempt(constructs2, start, notText);
      return start;
      function start(code2) {
        return atBreak(code2) ? text4(code2) : notText(code2);
      }
      function notText(code2) {
        if (code2 === null) {
          effects.consume(code2);
          return;
        }
        effects.enter("data");
        effects.consume(code2);
        return data;
      }
      function data(code2) {
        if (atBreak(code2)) {
          effects.exit("data");
          return text4(code2);
        }
        effects.consume(code2);
        return data;
      }
      function atBreak(code2) {
        if (code2 === null) {
          return true;
        }
        const list3 = constructs2[code2];
        let index2 = -1;
        if (list3) {
          while (++index2 < list3.length) {
            const item = list3[index2];
            if (!item.previous || item.previous.call(self, self.previous)) {
              return true;
            }
          }
        }
        return false;
      }
    }
  }
  function createResolver(extraResolver) {
    return resolveAllText;
    function resolveAllText(events, context) {
      let index2 = -1;
      let enter;
      while (++index2 <= events.length) {
        if (enter === void 0) {
          if (events[index2] && events[index2][1].type === "data") {
            enter = index2;
            index2++;
          }
        } else if (!events[index2] || events[index2][1].type !== "data") {
          if (index2 !== enter + 2) {
            events[enter][1].end = events[index2 - 1][1].end;
            events.splice(enter + 2, index2 - enter - 2);
            index2 = enter + 2;
          }
          enter = void 0;
        }
      }
      return extraResolver ? extraResolver(events, context) : events;
    }
  }
  function resolveAllLineSuffixes(events, context) {
    let eventIndex = 0;
    while (++eventIndex <= events.length) {
      if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
        const data = events[eventIndex - 1][1];
        const chunks = context.sliceStream(data);
        let index2 = chunks.length;
        let bufferIndex = -1;
        let size = 0;
        let tabs;
        while (index2--) {
          const chunk = chunks[index2];
          if (typeof chunk === "string") {
            bufferIndex = chunk.length;
            while (chunk.charCodeAt(bufferIndex - 1) === 32) {
              size++;
              bufferIndex--;
            }
            if (bufferIndex)
              break;
            bufferIndex = -1;
          } else if (chunk === -2) {
            tabs = true;
            size++;
          } else if (chunk === -1) {
          } else {
            index2++;
            break;
          }
        }
        if (size) {
          const token = {
            type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
            start: {
              line: data.end.line,
              column: data.end.column - size,
              offset: data.end.offset - size,
              _index: data.start._index + index2,
              _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
            },
            end: Object.assign({}, data.end)
          };
          data.end = Object.assign({}, token.start);
          if (data.start.offset === data.end.offset) {
            Object.assign(data, token);
          } else {
            events.splice(
              eventIndex,
              0,
              ["enter", token, context],
              ["exit", token, context]
            );
            eventIndex += 2;
          }
        }
        eventIndex++;
      }
    }
    return events;
  }

  // ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/create-tokenizer.js
  function createTokenizer(parser, initialize, from) {
    let point4 = Object.assign(
      from ? Object.assign({}, from) : {
        line: 1,
        column: 1,
        offset: 0
      },
      {
        _index: 0,
        _bufferIndex: -1
      }
    );
    const columnStart = {};
    const resolveAllConstructs = [];
    let chunks = [];
    let stack = [];
    let consumed = true;
    const effects = {
      consume,
      enter,
      exit: exit2,
      attempt: constructFactory(onsuccessfulconstruct),
      check: constructFactory(onsuccessfulcheck),
      interrupt: constructFactory(onsuccessfulcheck, {
        interrupt: true
      })
    };
    const context = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser,
      sliceStream,
      sliceSerialize,
      now,
      defineSkip,
      write
    };
    let state2 = initialize.tokenize.call(context, effects);
    let expectedCode;
    if (initialize.resolveAll) {
      resolveAllConstructs.push(initialize);
    }
    return context;
    function write(slice) {
      chunks = push(chunks, slice);
      main();
      if (chunks[chunks.length - 1] !== null) {
        return [];
      }
      addResult(initialize, 0);
      context.events = resolveAll(resolveAllConstructs, context.events, context);
      return context.events;
    }
    function sliceSerialize(token, expandTabs) {
      return serializeChunks(sliceStream(token), expandTabs);
    }
    function sliceStream(token) {
      return sliceChunks(chunks, token);
    }
    function now() {
      return Object.assign({}, point4);
    }
    function defineSkip(value) {
      columnStart[value.line] = value.column;
      accountForPotentialSkip();
    }
    function main() {
      let chunkIndex;
      while (point4._index < chunks.length) {
        const chunk = chunks[point4._index];
        if (typeof chunk === "string") {
          chunkIndex = point4._index;
          if (point4._bufferIndex < 0) {
            point4._bufferIndex = 0;
          }
          while (point4._index === chunkIndex && point4._bufferIndex < chunk.length) {
            go(chunk.charCodeAt(point4._bufferIndex));
          }
        } else {
          go(chunk);
        }
      }
    }
    function go(code2) {
      consumed = void 0;
      expectedCode = code2;
      state2 = state2(code2);
    }
    function consume(code2) {
      if (markdownLineEnding(code2)) {
        point4.line++;
        point4.column = 1;
        point4.offset += code2 === -3 ? 2 : 1;
        accountForPotentialSkip();
      } else if (code2 !== -1) {
        point4.column++;
        point4.offset++;
      }
      if (point4._bufferIndex < 0) {
        point4._index++;
      } else {
        point4._bufferIndex++;
        if (point4._bufferIndex === chunks[point4._index].length) {
          point4._bufferIndex = -1;
          point4._index++;
        }
      }
      context.previous = code2;
      consumed = true;
    }
    function enter(type, fields) {
      const token = fields || {};
      token.type = type;
      token.start = now();
      context.events.push(["enter", token, context]);
      stack.push(token);
      return token;
    }
    function exit2(type) {
      const token = stack.pop();
      token.end = now();
      context.events.push(["exit", token, context]);
      return token;
    }
    function onsuccessfulconstruct(construct, info) {
      addResult(construct, info.from);
    }
    function onsuccessfulcheck(_, info) {
      info.restore();
    }
    function constructFactory(onreturn, fields) {
      return hook;
      function hook(constructs2, returnState, bogusState) {
        let listOfConstructs;
        let constructIndex;
        let currentConstruct;
        let info;
        return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? handleListOfConstructs([constructs2]) : handleMapOfConstructs(constructs2);
        function handleMapOfConstructs(map) {
          return start;
          function start(code2) {
            const def = code2 !== null && map[code2];
            const all3 = code2 !== null && map.null;
            const list3 = [
              ...Array.isArray(def) ? def : def ? [def] : [],
              ...Array.isArray(all3) ? all3 : all3 ? [all3] : []
            ];
            return handleListOfConstructs(list3)(code2);
          }
        }
        function handleListOfConstructs(list3) {
          listOfConstructs = list3;
          constructIndex = 0;
          if (list3.length === 0) {
            return bogusState;
          }
          return handleConstruct(list3[constructIndex]);
        }
        function handleConstruct(construct) {
          return start;
          function start(code2) {
            info = store();
            currentConstruct = construct;
            if (!construct.partial) {
              context.currentConstruct = construct;
            }
            if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
              return nok(code2);
            }
            return construct.tokenize.call(
              fields ? Object.assign(Object.create(context), fields) : context,
              effects,
              ok2,
              nok
            )(code2);
          }
        }
        function ok2(code2) {
          consumed = true;
          onreturn(currentConstruct, info);
          return returnState;
        }
        function nok(code2) {
          consumed = true;
          info.restore();
          if (++constructIndex < listOfConstructs.length) {
            return handleConstruct(listOfConstructs[constructIndex]);
          }
          return bogusState;
        }
      }
    }
    function addResult(construct, from2) {
      if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
        resolveAllConstructs.push(construct);
      }
      if (construct.resolve) {
        splice(
          context.events,
          from2,
          context.events.length - from2,
          construct.resolve(context.events.slice(from2), context)
        );
      }
      if (construct.resolveTo) {
        context.events = construct.resolveTo(context.events, context);
      }
    }
    function store() {
      const startPoint = now();
      const startPrevious = context.previous;
      const startCurrentConstruct = context.currentConstruct;
      const startEventsIndex = context.events.length;
      const startStack = Array.from(stack);
      return {
        restore,
        from: startEventsIndex
      };
      function restore() {
        point4 = startPoint;
        context.previous = startPrevious;
        context.currentConstruct = startCurrentConstruct;
        context.events.length = startEventsIndex;
        stack = startStack;
        accountForPotentialSkip();
      }
    }
    function accountForPotentialSkip() {
      if (point4.line in columnStart && point4.column < 2) {
        point4.column = columnStart[point4.line];
        point4.offset += columnStart[point4.line] - 1;
      }
    }
  }
  function sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    let view;
    if (startIndex === endIndex) {
      view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
    } else {
      view = chunks.slice(startIndex, endIndex);
      if (startBufferIndex > -1) {
        view[0] = view[0].slice(startBufferIndex);
      }
      if (endBufferIndex > 0) {
        view.push(chunks[endIndex].slice(0, endBufferIndex));
      }
    }
    return view;
  }
  function serializeChunks(chunks, expandTabs) {
    let index2 = -1;
    const result = [];
    let atTab;
    while (++index2 < chunks.length) {
      const chunk = chunks[index2];
      let value;
      if (typeof chunk === "string") {
        value = chunk;
      } else
        switch (chunk) {
          case -5: {
            value = "\r";
            break;
          }
          case -4: {
            value = "\n";
            break;
          }
          case -3: {
            value = "\r\n";
            break;
          }
          case -2: {
            value = expandTabs ? " " : "	";
            break;
          }
          case -1: {
            if (!expandTabs && atTab)
              continue;
            value = " ";
            break;
          }
          default: {
            value = String.fromCharCode(chunk);
          }
        }
      atTab = chunk === -2;
      result.push(value);
    }
    return result.join("");
  }

  // ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/constructs.js
  var constructs_exports = {};
  __export(constructs_exports, {
    attentionMarkers: () => attentionMarkers,
    contentInitial: () => contentInitial,
    disable: () => disable,
    document: () => document3,
    flow: () => flow2,
    flowInitial: () => flowInitial,
    insideSpan: () => insideSpan,
    string: () => string2,
    text: () => text2
  });
  var document3 = {
    [42]: list,
    [43]: list,
    [45]: list,
    [48]: list,
    [49]: list,
    [50]: list,
    [51]: list,
    [52]: list,
    [53]: list,
    [54]: list,
    [55]: list,
    [56]: list,
    [57]: list,
    [62]: blockQuote
  };
  var contentInitial = {
    [91]: definition
  };
  var flowInitial = {
    [-2]: codeIndented,
    [-1]: codeIndented,
    [32]: codeIndented
  };
  var flow2 = {
    [35]: headingAtx,
    [42]: thematicBreak,
    [45]: [setextUnderline, thematicBreak],
    [60]: htmlFlow,
    [61]: setextUnderline,
    [95]: thematicBreak,
    [96]: codeFenced,
    [126]: codeFenced
  };
  var string2 = {
    [38]: characterReference,
    [92]: characterEscape
  };
  var text2 = {
    [-5]: lineEnding,
    [-4]: lineEnding,
    [-3]: lineEnding,
    [33]: labelStartImage,
    [38]: characterReference,
    [42]: attention,
    [60]: [autolink, htmlText],
    [91]: labelStartLink,
    [92]: [hardBreakEscape, characterEscape],
    [93]: labelEnd,
    [95]: attention,
    [96]: codeText
  };
  var insideSpan = {
    null: [attention, resolver]
  };
  var attentionMarkers = {
    null: [42, 95]
  };
  var disable = {
    null: []
  };

  // ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/parse.js
  function parse(options = {}) {
    const constructs2 = combineExtensions(
      [constructs_exports].concat(options.extensions || [])
    );
    const parser = {
      defined: [],
      lazy: {},
      constructs: constructs2,
      content: create2(content),
      document: create2(document2),
      flow: create2(flow),
      string: create2(string),
      text: create2(text)
    };
    return parser;
    function create2(initial) {
      return creator;
      function creator(from) {
        return createTokenizer(parser, initial, from);
      }
    }
  }

  // ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/preprocess.js
  var search = /[\0\t\n\r]/g;
  function preprocess() {
    let column = 1;
    let buffer2 = "";
    let start = true;
    let atCarriageReturn;
    return preprocessor;
    function preprocessor(value, encoding, end) {
      const chunks = [];
      let match;
      let next;
      let startPosition;
      let endPosition;
      let code2;
      value = buffer2 + value.toString(encoding);
      startPosition = 0;
      buffer2 = "";
      if (start) {
        if (value.charCodeAt(0) === 65279) {
          startPosition++;
        }
        start = void 0;
      }
      while (startPosition < value.length) {
        search.lastIndex = startPosition;
        match = search.exec(value);
        endPosition = match && match.index !== void 0 ? match.index : value.length;
        code2 = value.charCodeAt(endPosition);
        if (!match) {
          buffer2 = value.slice(startPosition);
          break;
        }
        if (code2 === 10 && startPosition === endPosition && atCarriageReturn) {
          chunks.push(-3);
          atCarriageReturn = void 0;
        } else {
          if (atCarriageReturn) {
            chunks.push(-5);
            atCarriageReturn = void 0;
          }
          if (startPosition < endPosition) {
            chunks.push(value.slice(startPosition, endPosition));
            column += endPosition - startPosition;
          }
          switch (code2) {
            case 0: {
              chunks.push(65533);
              column++;
              break;
            }
            case 9: {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next)
                chunks.push(-1);
              break;
            }
            case 10: {
              chunks.push(-4);
              column = 1;
              break;
            }
            default: {
              atCarriageReturn = true;
              column = 1;
            }
          }
        }
        startPosition = endPosition + 1;
      }
      if (end) {
        if (atCarriageReturn)
          chunks.push(-5);
        if (buffer2)
          chunks.push(buffer2);
        chunks.push(null);
      }
      return chunks;
    }
  }

  // ../../node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/postprocess.js
  function postprocess(events) {
    while (!subtokenize(events)) {
    }
    return events;
  }

  // ../../node_modules/.pnpm/micromark-util-decode-numeric-character-reference@1.0.0/node_modules/micromark-util-decode-numeric-character-reference/index.js
  function decodeNumericCharacterReference(value, base2) {
    const code2 = Number.parseInt(value, base2);
    if (code2 < 9 || code2 === 11 || code2 > 13 && code2 < 32 || code2 > 126 && code2 < 160 || code2 > 55295 && code2 < 57344 || code2 > 64975 && code2 < 65008 || (code2 & 65535) === 65535 || (code2 & 65535) === 65534 || code2 > 1114111) {
      return "\uFFFD";
    }
    return String.fromCharCode(code2);
  }

  // ../../node_modules/.pnpm/micromark-util-decode-string@1.0.2/node_modules/micromark-util-decode-string/index.js
  var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function decodeString(value) {
    return value.replace(characterEscapeOrReference, decode);
  }
  function decode($0, $1, $2) {
    if ($1) {
      return $1;
    }
    const head = $2.charCodeAt(0);
    if (head === 35) {
      const head2 = $2.charCodeAt(1);
      const hex = head2 === 120 || head2 === 88;
      return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
    }
    return decodeNamedCharacterReference($2) || $0;
  }

  // ../../node_modules/.pnpm/mdast-util-from-markdown@1.2.1/node_modules/mdast-util-from-markdown/lib/index.js
  var own2 = {}.hasOwnProperty;
  var fromMarkdown = function(value, encoding, options) {
    if (typeof encoding !== "string") {
      options = encoding;
      encoding = void 0;
    }
    return compiler(options)(
      postprocess(
        parse(options).document().write(preprocess()(value, encoding, true))
      )
    );
  };
  function compiler(options) {
    const config = {
      transforms: [],
      canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
      enter: {
        autolink: opener(link2),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading2),
        blockQuote: opener(blockQuote2),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer2,
        codeFencedFenceMeta: buffer2,
        codeIndented: opener(codeFlow, buffer2),
        codeText: opener(codeText2, buffer2),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition2),
        definitionDestinationString: buffer2,
        definitionLabelString: buffer2,
        definitionTitleString: buffer2,
        emphasis: opener(emphasis2),
        hardBreakEscape: opener(hardBreak2),
        hardBreakTrailing: opener(hardBreak2),
        htmlFlow: opener(html4, buffer2),
        htmlFlowData: onenterdata,
        htmlText: opener(html4, buffer2),
        htmlTextData: onenterdata,
        image: opener(image2),
        label: buffer2,
        link: opener(link2),
        listItem: opener(listItem2),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list3, onenterlistordered),
        listUnordered: opener(list3),
        paragraph: opener(paragraph2),
        reference: onenterreference,
        referenceString: buffer2,
        resourceDestinationString: buffer2,
        resourceTitleString: buffer2,
        setextHeading: opener(heading2),
        strong: opener(strong2),
        thematicBreak: opener(thematicBreak3)
      },
      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    };
    configure(config, (options || {}).mdastExtensions || []);
    const data = {};
    return compile;
    function compile(events) {
      let tree = {
        type: "root",
        children: []
      };
      const context = {
        stack: [tree],
        tokenStack: [],
        config,
        enter,
        exit: exit2,
        buffer: buffer2,
        resume,
        setData,
        getData
      };
      const listStack = [];
      let index2 = -1;
      while (++index2 < events.length) {
        if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
          if (events[index2][0] === "enter") {
            listStack.push(index2);
          } else {
            const tail = listStack.pop();
            index2 = prepareList(events, tail, index2);
          }
        }
      }
      index2 = -1;
      while (++index2 < events.length) {
        const handler = config[events[index2][0]];
        if (own2.call(handler, events[index2][1].type)) {
          handler[events[index2][1].type].call(
            Object.assign(
              {
                sliceSerialize: events[index2][2].sliceSerialize
              },
              context
            ),
            events[index2][1]
          );
        }
      }
      if (context.tokenStack.length > 0) {
        const tail = context.tokenStack[context.tokenStack.length - 1];
        const handler = tail[1] || defaultOnError;
        handler.call(context, void 0, tail[0]);
      }
      tree.position = {
        start: point2(
          events.length > 0 ? events[0][1].start : {
            line: 1,
            column: 1,
            offset: 0
          }
        ),
        end: point2(
          events.length > 0 ? events[events.length - 2][1].end : {
            line: 1,
            column: 1,
            offset: 0
          }
        )
      };
      index2 = -1;
      while (++index2 < config.transforms.length) {
        tree = config.transforms[index2](tree) || tree;
      }
      return tree;
    }
    function prepareList(events, start, length) {
      let index2 = start - 1;
      let containerBalance = -1;
      let listSpread = false;
      let listItem3;
      let lineIndex;
      let firstBlankLineIndex;
      let atMarker;
      while (++index2 <= length) {
        const event = events[index2];
        if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
          if (event[0] === "enter") {
            containerBalance++;
          } else {
            containerBalance--;
          }
          atMarker = void 0;
        } else if (event[1].type === "lineEndingBlank") {
          if (event[0] === "enter") {
            if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
              firstBlankLineIndex = index2;
            }
            atMarker = void 0;
          }
        } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
        } else {
          atMarker = void 0;
        }
        if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
          if (listItem3) {
            let tailIndex = index2;
            lineIndex = void 0;
            while (tailIndex--) {
              const tailEvent = events[tailIndex];
              if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                if (tailEvent[0] === "exit")
                  continue;
                if (lineIndex) {
                  events[lineIndex][1].type = "lineEndingBlank";
                  listSpread = true;
                }
                tailEvent[1].type = "lineEnding";
                lineIndex = tailIndex;
              } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
              } else {
                break;
              }
            }
            if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
              listItem3._spread = true;
            }
            listItem3.end = Object.assign(
              {},
              lineIndex ? events[lineIndex][1].start : event[1].end
            );
            events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
            index2++;
            length++;
          }
          if (event[1].type === "listItemPrefix") {
            listItem3 = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, event[1].start)
            };
            events.splice(index2, 0, ["enter", listItem3, event[2]]);
            index2++;
            length++;
            firstBlankLineIndex = void 0;
            atMarker = true;
          }
        }
      }
      events[start][1]._spread = listSpread;
      return length;
    }
    function setData(key, value) {
      data[key] = value;
    }
    function getData(key) {
      return data[key];
    }
    function opener(create2, and) {
      return open;
      function open(token) {
        enter.call(this, create2(token), token);
        if (and)
          and.call(this, token);
      }
    }
    function buffer2() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function enter(node2, token, errorHandler) {
      const parent = this.stack[this.stack.length - 1];
      parent.children.push(node2);
      this.stack.push(node2);
      this.tokenStack.push([token, errorHandler]);
      node2.position = {
        start: point2(token.start)
      };
      return node2;
    }
    function closer(and) {
      return close;
      function close(token) {
        if (and)
          and.call(this, token);
        exit2.call(this, token);
      }
    }
    function exit2(token, onExitError) {
      const node2 = this.stack.pop();
      const open = this.tokenStack.pop();
      if (!open) {
        throw new Error(
          "Cannot close `" + token.type + "` (" + stringifyPosition({
            start: token.start,
            end: token.end
          }) + "): it\u2019s not open"
        );
      } else if (open[0].type !== token.type) {
        if (onExitError) {
          onExitError.call(this, token, open[0]);
        } else {
          const handler = open[1] || defaultOnError;
          handler.call(this, token, open[0]);
        }
      }
      node2.position.end = point2(token.end);
      return node2;
    }
    function resume() {
      return toString(this.stack.pop());
    }
    function onenterlistordered() {
      setData("expectingFirstListItemValue", true);
    }
    function onenterlistitemvalue(token) {
      if (getData("expectingFirstListItemValue")) {
        const ancestor = this.stack[this.stack.length - 2];
        ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
        setData("expectingFirstListItemValue");
      }
    }
    function onexitcodefencedfenceinfo() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.lang = data2;
    }
    function onexitcodefencedfencemeta() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.meta = data2;
    }
    function onexitcodefencedfence() {
      if (getData("flowCodeInside"))
        return;
      this.buffer();
      setData("flowCodeInside", true);
    }
    function onexitcodefenced() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
      setData("flowCodeInside");
    }
    function onexitcodeindented() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2.replace(/(\r?\n|\r)$/g, "");
    }
    function onexitdefinitionlabelstring(token) {
      const label = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.label = label;
      node2.identifier = normalizeIdentifier(
        this.sliceSerialize(token)
      ).toLowerCase();
    }
    function onexitdefinitiontitlestring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.title = data2;
    }
    function onexitdefinitiondestinationstring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.url = data2;
    }
    function onexitatxheadingsequence(token) {
      const node2 = this.stack[this.stack.length - 1];
      if (!node2.depth) {
        const depth = this.sliceSerialize(token).length;
        node2.depth = depth;
      }
    }
    function onexitsetextheadingtext() {
      setData("setextHeadingSlurpLineEnding", true);
    }
    function onexitsetextheadinglinesequence(token) {
      const node2 = this.stack[this.stack.length - 1];
      node2.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
    }
    function onexitsetextheading() {
      setData("setextHeadingSlurpLineEnding");
    }
    function onenterdata(token) {
      const node2 = this.stack[this.stack.length - 1];
      let tail = node2.children[node2.children.length - 1];
      if (!tail || tail.type !== "text") {
        tail = text4();
        tail.position = {
          start: point2(token.start)
        };
        node2.children.push(tail);
      }
      this.stack.push(tail);
    }
    function onexitdata(token) {
      const tail = this.stack.pop();
      tail.value += this.sliceSerialize(token);
      tail.position.end = point2(token.end);
    }
    function onexitlineending(token) {
      const context = this.stack[this.stack.length - 1];
      if (getData("atHardBreak")) {
        const tail = context.children[context.children.length - 1];
        tail.position.end = point2(token.end);
        setData("atHardBreak");
        return;
      }
      if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
        onenterdata.call(this, token);
        onexitdata.call(this, token);
      }
    }
    function onexithardbreak() {
      setData("atHardBreak", true);
    }
    function onexithtmlflow() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2;
    }
    function onexithtmltext() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2;
    }
    function onexitcodetext() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.value = data2;
    }
    function onexitlink() {
      const node2 = this.stack[this.stack.length - 1];
      if (getData("inReference")) {
        const referenceType = getData("referenceType") || "shortcut";
        node2.type += "Reference";
        node2.referenceType = referenceType;
        delete node2.url;
        delete node2.title;
      } else {
        delete node2.identifier;
        delete node2.label;
      }
      setData("referenceType");
    }
    function onexitimage() {
      const node2 = this.stack[this.stack.length - 1];
      if (getData("inReference")) {
        const referenceType = getData("referenceType") || "shortcut";
        node2.type += "Reference";
        node2.referenceType = referenceType;
        delete node2.url;
        delete node2.title;
      } else {
        delete node2.identifier;
        delete node2.label;
      }
      setData("referenceType");
    }
    function onexitlabeltext(token) {
      const string3 = this.sliceSerialize(token);
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.label = decodeString(string3);
      ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
    }
    function onexitlabel() {
      const fragment = this.stack[this.stack.length - 1];
      const value = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      setData("inReference", true);
      if (node2.type === "link") {
        const children = fragment.children;
        node2.children = children;
      } else {
        node2.alt = value;
      }
    }
    function onexitresourcedestinationstring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.url = data2;
    }
    function onexitresourcetitlestring() {
      const data2 = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.title = data2;
    }
    function onexitresource() {
      setData("inReference");
    }
    function onenterreference() {
      setData("referenceType", "collapsed");
    }
    function onexitreferencestring(token) {
      const label = this.resume();
      const node2 = this.stack[this.stack.length - 1];
      node2.label = label;
      node2.identifier = normalizeIdentifier(
        this.sliceSerialize(token)
      ).toLowerCase();
      setData("referenceType", "full");
    }
    function onexitcharacterreferencemarker(token) {
      setData("characterReferenceType", token.type);
    }
    function onexitcharacterreferencevalue(token) {
      const data2 = this.sliceSerialize(token);
      const type = getData("characterReferenceType");
      let value;
      if (type) {
        value = decodeNumericCharacterReference(
          data2,
          type === "characterReferenceMarkerNumeric" ? 10 : 16
        );
        setData("characterReferenceType");
      } else {
        const result = decodeNamedCharacterReference(data2);
        value = result;
      }
      const tail = this.stack.pop();
      tail.value += value;
      tail.position.end = point2(token.end);
    }
    function onexitautolinkprotocol(token) {
      onexitdata.call(this, token);
      const node2 = this.stack[this.stack.length - 1];
      node2.url = this.sliceSerialize(token);
    }
    function onexitautolinkemail(token) {
      onexitdata.call(this, token);
      const node2 = this.stack[this.stack.length - 1];
      node2.url = "mailto:" + this.sliceSerialize(token);
    }
    function blockQuote2() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function codeFlow() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function codeText2() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function definition2() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function emphasis2() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function heading2() {
      return {
        type: "heading",
        depth: void 0,
        children: []
      };
    }
    function hardBreak2() {
      return {
        type: "break"
      };
    }
    function html4() {
      return {
        type: "html",
        value: ""
      };
    }
    function image2() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function link2() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function list3(token) {
      return {
        type: "list",
        ordered: token.type === "listOrdered",
        start: null,
        spread: token._spread,
        children: []
      };
    }
    function listItem2(token) {
      return {
        type: "listItem",
        spread: token._spread,
        checked: null,
        children: []
      };
    }
    function paragraph2() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function strong2() {
      return {
        type: "strong",
        children: []
      };
    }
    function text4() {
      return {
        type: "text",
        value: ""
      };
    }
    function thematicBreak3() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function point2(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function configure(combined, extensions) {
    let index2 = -1;
    while (++index2 < extensions.length) {
      const value = extensions[index2];
      if (Array.isArray(value)) {
        configure(combined, value);
      } else {
        extension(combined, value);
      }
    }
  }
  function extension(combined, extension2) {
    let key;
    for (key in extension2) {
      if (own2.call(extension2, key)) {
        if (key === "canContainEols") {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
        } else if (key === "transforms") {
          const right = extension2[key];
          if (right) {
            combined[key].push(...right);
          }
        } else if (key === "enter" || key === "exit") {
          const right = extension2[key];
          if (right) {
            Object.assign(combined[key], right);
          }
        }
      }
    }
  }
  function defaultOnError(left, right) {
    if (left) {
      throw new Error(
        "Cannot close `" + left.type + "` (" + stringifyPosition({
          start: left.start,
          end: left.end
        }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
          start: right.start,
          end: right.end
        }) + ") is open"
      );
    } else {
      throw new Error(
        "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
          start: right.start,
          end: right.end
        }) + ") is still open"
      );
    }
  }

  // ../../node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/lib/index.js
  function remarkParse(options) {
    const parser = (doc) => {
      const settings = this.data("settings");
      return fromMarkdown(
        doc,
        Object.assign({}, settings, options, {
          extensions: this.data("micromarkExtensions") || [],
          mdastExtensions: this.data("fromMarkdownExtensions") || []
        })
      );
    };
    Object.assign(this, { Parser: parser });
  }

  // ../../node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js
  var remark_parse_default = remarkParse;

  // ../../node_modules/.pnpm/unist-builder@3.0.1/node_modules/unist-builder/lib/index.js
  var u = function(type, props, value) {
    const node2 = { type: String(type) };
    if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
      value = props;
    } else {
      Object.assign(node2, props);
    }
    if (Array.isArray(value)) {
      node2.children = value;
    } else if (value !== void 0 && value !== null) {
      node2.value = String(value);
    }
    return node2;
  };

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/traverse.js
  var own3 = {}.hasOwnProperty;
  function unknown(h, node2) {
    const data = node2.data || {};
    if ("value" in node2 && !(own3.call(data, "hName") || own3.call(data, "hProperties") || own3.call(data, "hChildren"))) {
      return h.augment(node2, u("text", node2.value));
    }
    return h(node2, "div", all2(h, node2));
  }
  function one2(h, node2, parent) {
    const type = node2 && node2.type;
    let fn;
    if (!type) {
      throw new Error("Expected node, got `" + node2 + "`");
    }
    if (own3.call(h.handlers, type)) {
      fn = h.handlers[type];
    } else if (h.passThrough && h.passThrough.includes(type)) {
      fn = returnNode;
    } else {
      fn = h.unknownHandler;
    }
    return (typeof fn === "function" ? fn : unknown)(h, node2, parent);
  }
  function returnNode(h, node2) {
    return "children" in node2 ? { ...node2, children: all2(h, node2) } : node2;
  }
  function all2(h, parent) {
    const values = [];
    if ("children" in parent) {
      const nodes = parent.children;
      let index2 = -1;
      while (++index2 < nodes.length) {
        const result = one2(h, nodes[index2], parent);
        if (result) {
          if (index2 && nodes[index2 - 1].type === "break") {
            if (!Array.isArray(result) && result.type === "text") {
              result.value = result.value.replace(/^\s+/, "");
            }
            if (!Array.isArray(result) && result.type === "element") {
              const head = result.children[0];
              if (head && head.type === "text") {
                head.value = head.value.replace(/^\s+/, "");
              }
            }
          }
          if (Array.isArray(result)) {
            values.push(...result);
          } else {
            values.push(result);
          }
        }
      }
    }
    return values;
  }

  // ../../node_modules/.pnpm/unist-util-is@5.2.0/node_modules/unist-util-is/lib/index.js
  var convert = function(test) {
    if (test === void 0 || test === null) {
      return ok;
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  };
  function anyFactory(tests) {
    const checks2 = [];
    let index2 = -1;
    while (++index2 < tests.length) {
      checks2[index2] = convert(tests[index2]);
    }
    return castFactory(any);
    function any(...parameters) {
      let index3 = -1;
      while (++index3 < checks2.length) {
        if (checks2[index3].call(this, ...parameters))
          return true;
      }
      return false;
    }
  }
  function propsFactory(check) {
    return castFactory(all3);
    function all3(node2) {
      let key;
      for (key in check) {
        if (node2[key] !== check[key])
          return false;
      }
      return true;
    }
  }
  function typeFactory(check) {
    return castFactory(type);
    function type(node2) {
      return node2 && node2.type === check;
    }
  }
  function castFactory(check) {
    return assertion;
    function assertion(node2, ...parameters) {
      return Boolean(
        node2 && typeof node2 === "object" && "type" in node2 && Boolean(check.call(this, node2, ...parameters))
      );
    }
  }
  function ok() {
    return true;
  }

  // ../../node_modules/.pnpm/unist-util-visit-parents@5.1.3/node_modules/unist-util-visit-parents/lib/color.browser.js
  function color(d) {
    return d;
  }

  // ../../node_modules/.pnpm/unist-util-visit-parents@5.1.3/node_modules/unist-util-visit-parents/lib/index.js
  var CONTINUE = true;
  var EXIT = false;
  var SKIP = "skip";
  var visitParents = function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
      test = null;
    }
    const is2 = convert(test);
    const step = reverse ? -1 : 1;
    factory2(tree, void 0, [])();
    function factory2(node2, index2, parents) {
      const value = node2 && typeof node2 === "object" ? node2 : {};
      if (typeof value.type === "string") {
        const name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
        Object.defineProperty(visit2, "name", {
          value: "node (" + color(node2.type + (name ? "<" + name + ">" : "")) + ")"
        });
      }
      return visit2;
      function visit2() {
        let result = [];
        let subresult;
        let offset;
        let grandparents;
        if (!test || is2(node2, index2, parents[parents.length - 1] || null)) {
          result = toResult(visitor(node2, parents));
          if (result[0] === EXIT) {
            return result;
          }
        }
        if (node2.children && result[0] !== SKIP) {
          offset = (reverse ? node2.children.length : -1) + step;
          grandparents = parents.concat(node2);
          while (offset > -1 && offset < node2.children.length) {
            subresult = factory2(node2.children[offset], offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
        return result;
      }
    }
  };
  function toResult(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === "number") {
      return [CONTINUE, value];
    }
    return [value];
  }

  // ../../node_modules/.pnpm/unist-util-visit@4.1.2/node_modules/unist-util-visit/lib/index.js
  var visit = function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
      test = null;
    }
    visitParents(tree, test, overload, reverse);
    function overload(node2, parents) {
      const parent = parents[parents.length - 1];
      return visitor(
        node2,
        parent ? parent.children.indexOf(node2) : null,
        parent
      );
    }
  };

  // ../../node_modules/.pnpm/unist-util-position@4.0.4/node_modules/unist-util-position/lib/index.js
  var pointStart = point3("start");
  var pointEnd = point3("end");
  function point3(type) {
    return point4;
    function point4(node2) {
      const point5 = node2 && node2.position && node2.position[type] || {};
      return {
        line: point5.line || null,
        column: point5.column || null,
        offset: point5.offset > -1 ? point5.offset : null
      };
    }
  }

  // ../../node_modules/.pnpm/unist-util-generated@2.0.1/node_modules/unist-util-generated/lib/index.js
  function generated(node2) {
    return !node2 || !node2.position || !node2.position.start || !node2.position.start.line || !node2.position.start.column || !node2.position.end || !node2.position.end.line || !node2.position.end.column;
  }

  // ../../node_modules/.pnpm/mdast-util-definitions@5.1.2/node_modules/mdast-util-definitions/lib/index.js
  var own4 = {}.hasOwnProperty;
  function definitions(tree) {
    const cache = /* @__PURE__ */ Object.create(null);
    if (!tree || !tree.type) {
      throw new Error("mdast-util-definitions expected node");
    }
    visit(tree, "definition", (definition3) => {
      const id = clean(definition3.identifier);
      if (id && !own4.call(cache, id)) {
        cache[id] = definition3;
      }
    });
    return definition2;
    function definition2(identifier) {
      const id = clean(identifier);
      return id && own4.call(cache, id) ? cache[id] : null;
    }
  }
  function clean(value) {
    return String(value || "").toUpperCase();
  }

  // ../../node_modules/.pnpm/micromark-util-sanitize-uri@1.1.0/node_modules/micromark-util-sanitize-uri/index.js
  function normalizeUri(value) {
    const result = [];
    let index2 = -1;
    let start = 0;
    let skip = 0;
    while (++index2 < value.length) {
      const code2 = value.charCodeAt(index2);
      let replace = "";
      if (code2 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2))) {
        skip = 2;
      } else if (code2 < 128) {
        if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code2))) {
          replace = String.fromCharCode(code2);
        }
      } else if (code2 > 55295 && code2 < 57344) {
        const next = value.charCodeAt(index2 + 1);
        if (code2 < 56320 && next > 56319 && next < 57344) {
          replace = String.fromCharCode(code2, next);
          skip = 1;
        } else {
          replace = "\uFFFD";
        }
      } else {
        replace = String.fromCharCode(code2);
      }
      if (replace) {
        result.push(value.slice(start, index2), encodeURIComponent(replace));
        start = index2 + skip + 1;
        replace = "";
      }
      if (skip) {
        index2 += skip;
        skip = 0;
      }
    }
    return result.join("") + value.slice(start);
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/wrap.js
  function wrap2(nodes, loose) {
    const result = [];
    let index2 = -1;
    if (loose) {
      result.push(u("text", "\n"));
    }
    while (++index2 < nodes.length) {
      if (index2)
        result.push(u("text", "\n"));
      result.push(nodes[index2]);
    }
    if (loose && nodes.length > 0) {
      result.push(u("text", "\n"));
    }
    return result;
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/footer.js
  function footer(h) {
    let index2 = -1;
    const listItems = [];
    while (++index2 < h.footnoteOrder.length) {
      const def = h.footnoteById[h.footnoteOrder[index2].toUpperCase()];
      if (!def) {
        continue;
      }
      const content3 = all2(h, def);
      const id = String(def.identifier);
      const safeId = normalizeUri(id.toLowerCase());
      let referenceIndex = 0;
      const backReferences = [];
      while (++referenceIndex <= h.footnoteCounts[id]) {
        const backReference = {
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + h.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
            dataFootnoteBackref: true,
            className: ["data-footnote-backref"],
            ariaLabel: h.footnoteBackLabel
          },
          children: [{ type: "text", value: "\u21A9" }]
        };
        if (referenceIndex > 1) {
          backReference.children.push({
            type: "element",
            tagName: "sup",
            children: [{ type: "text", value: String(referenceIndex) }]
          });
        }
        if (backReferences.length > 0) {
          backReferences.push({ type: "text", value: " " });
        }
        backReferences.push(backReference);
      }
      const tail = content3[content3.length - 1];
      if (tail && tail.type === "element" && tail.tagName === "p") {
        const tailTail = tail.children[tail.children.length - 1];
        if (tailTail && tailTail.type === "text") {
          tailTail.value += " ";
        } else {
          tail.children.push({ type: "text", value: " " });
        }
        tail.children.push(...backReferences);
      } else {
        content3.push(...backReferences);
      }
      const listItem2 = {
        type: "element",
        tagName: "li",
        properties: { id: h.clobberPrefix + "fn-" + safeId },
        children: wrap2(content3, true)
      };
      if (def.position) {
        listItem2.position = def.position;
      }
      listItems.push(listItem2);
    }
    if (listItems.length === 0) {
      return null;
    }
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: true, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: h.footnoteLabelTagName,
          properties: {
            ...JSON.parse(JSON.stringify(h.footnoteLabelProperties)),
            id: "footnote-label"
          },
          children: [u("text", h.footnoteLabel)]
        },
        { type: "text", value: "\n" },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: wrap2(listItems, true)
        },
        { type: "text", value: "\n" }
      ]
    };
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
  function blockquote(h, node2) {
    return h(node2, "blockquote", wrap2(all2(h, node2), true));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/break.js
  function hardBreak(h, node2) {
    return [h(node2, "br"), u("text", "\n")];
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/code.js
  function code(h, node2) {
    const value = node2.value ? node2.value + "\n" : "";
    const lang = node2.lang && node2.lang.match(/^[^ \t]+(?=[ \t]|$)/);
    const props = {};
    if (lang) {
      props.className = ["language-" + lang];
    }
    const code2 = h(node2, "code", props, [u("text", value)]);
    if (node2.meta) {
      code2.data = { meta: node2.meta };
    }
    return h(node2.position, "pre", [code2]);
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/delete.js
  function strikethrough(h, node2) {
    return h(node2, "del", all2(h, node2));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
  function emphasis(h, node2) {
    return h(node2, "em", all2(h, node2));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
  function footnoteReference(h, node2) {
    const id = String(node2.identifier);
    const safeId = normalizeUri(id.toLowerCase());
    const index2 = h.footnoteOrder.indexOf(id);
    let counter;
    if (index2 === -1) {
      h.footnoteOrder.push(id);
      h.footnoteCounts[id] = 1;
      counter = h.footnoteOrder.length;
    } else {
      h.footnoteCounts[id]++;
      counter = index2 + 1;
    }
    const reuseCounter = h.footnoteCounts[id];
    return h(node2, "sup", [
      h(
        node2.position,
        "a",
        {
          href: "#" + h.clobberPrefix + "fn-" + safeId,
          id: h.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
          dataFootnoteRef: true,
          ariaDescribedBy: "footnote-label"
        },
        [u("text", String(counter))]
      )
    ]);
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/footnote.js
  function footnote(h, node2) {
    const footnoteById = h.footnoteById;
    let no = 1;
    while (no in footnoteById)
      no++;
    const identifier = String(no);
    footnoteById[identifier] = {
      type: "footnoteDefinition",
      identifier,
      children: [{ type: "paragraph", children: node2.children }],
      position: node2.position
    };
    return footnoteReference(h, {
      type: "footnoteReference",
      identifier,
      position: node2.position
    });
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/heading.js
  function heading(h, node2) {
    return h(node2, "h" + node2.depth, all2(h, node2));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/html.js
  function html(h, node2) {
    return h.dangerous ? h.augment(node2, u("raw", node2.value)) : null;
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/revert.js
  function revert(h, node2) {
    const subtype = node2.referenceType;
    let suffix = "]";
    if (subtype === "collapsed") {
      suffix += "[]";
    } else if (subtype === "full") {
      suffix += "[" + (node2.label || node2.identifier) + "]";
    }
    if (node2.type === "imageReference") {
      return u("text", "![" + node2.alt + suffix);
    }
    const contents = all2(h, node2);
    const head = contents[0];
    if (head && head.type === "text") {
      head.value = "[" + head.value;
    } else {
      contents.unshift(u("text", "["));
    }
    const tail = contents[contents.length - 1];
    if (tail && tail.type === "text") {
      tail.value += suffix;
    } else {
      contents.push(u("text", suffix));
    }
    return contents;
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
  function imageReference(h, node2) {
    const def = h.definition(node2.identifier);
    if (!def) {
      return revert(h, node2);
    }
    const props = { src: normalizeUri(def.url || ""), alt: node2.alt };
    if (def.title !== null && def.title !== void 0) {
      props.title = def.title;
    }
    return h(node2, "img", props);
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/image.js
  function image(h, node2) {
    const props = { src: normalizeUri(node2.url), alt: node2.alt };
    if (node2.title !== null && node2.title !== void 0) {
      props.title = node2.title;
    }
    return h(node2, "img", props);
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
  function inlineCode(h, node2) {
    return h(node2, "code", [u("text", node2.value.replace(/\r?\n|\r/g, " "))]);
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
  function linkReference(h, node2) {
    const def = h.definition(node2.identifier);
    if (!def) {
      return revert(h, node2);
    }
    const props = { href: normalizeUri(def.url || "") };
    if (def.title !== null && def.title !== void 0) {
      props.title = def.title;
    }
    return h(node2, "a", props, all2(h, node2));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/link.js
  function link(h, node2) {
    const props = { href: normalizeUri(node2.url) };
    if (node2.title !== null && node2.title !== void 0) {
      props.title = node2.title;
    }
    return h(node2, "a", props, all2(h, node2));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
  function listItem(h, node2, parent) {
    const result = all2(h, node2);
    const loose = parent ? listLoose(parent) : listItemLoose(node2);
    const props = {};
    const wrapped = [];
    if (typeof node2.checked === "boolean") {
      let paragraph2;
      if (result[0] && result[0].type === "element" && result[0].tagName === "p") {
        paragraph2 = result[0];
      } else {
        paragraph2 = h(null, "p", []);
        result.unshift(paragraph2);
      }
      if (paragraph2.children.length > 0) {
        paragraph2.children.unshift(u("text", " "));
      }
      paragraph2.children.unshift(
        h(null, "input", {
          type: "checkbox",
          checked: node2.checked,
          disabled: true
        })
      );
      props.className = ["task-list-item"];
    }
    let index2 = -1;
    while (++index2 < result.length) {
      const child = result[index2];
      if (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") {
        wrapped.push(u("text", "\n"));
      }
      if (child.type === "element" && child.tagName === "p" && !loose) {
        wrapped.push(...child.children);
      } else {
        wrapped.push(child);
      }
    }
    const tail = result[result.length - 1];
    if (tail && (loose || !("tagName" in tail) || tail.tagName !== "p")) {
      wrapped.push(u("text", "\n"));
    }
    return h(node2, "li", props, wrapped);
  }
  function listLoose(node2) {
    let loose = node2.spread;
    const children = node2.children;
    let index2 = -1;
    while (!loose && ++index2 < children.length) {
      loose = listItemLoose(children[index2]);
    }
    return Boolean(loose);
  }
  function listItemLoose(node2) {
    const spread = node2.spread;
    return spread === void 0 || spread === null ? node2.children.length > 1 : spread;
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/list.js
  function list2(h, node2) {
    const props = {};
    const name = node2.ordered ? "ol" : "ul";
    const items = all2(h, node2);
    let index2 = -1;
    if (typeof node2.start === "number" && node2.start !== 1) {
      props.start = node2.start;
    }
    while (++index2 < items.length) {
      const item = items[index2];
      if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
        props.className = ["contains-task-list"];
        break;
      }
    }
    return h(node2, name, props, wrap2(items, true));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
  function paragraph(h, node2) {
    return h(node2, "p", all2(h, node2));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/root.js
  function root(h, node2) {
    return h.augment(node2, u("root", wrap2(all2(h, node2))));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/strong.js
  function strong(h, node2) {
    return h(node2, "strong", all2(h, node2));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/table.js
  function table(h, node2) {
    const rows = node2.children;
    let index2 = -1;
    const align = node2.align || [];
    const result = [];
    while (++index2 < rows.length) {
      const row = rows[index2].children;
      const name = index2 === 0 ? "th" : "td";
      const out = [];
      let cellIndex = -1;
      const length = node2.align ? align.length : row.length;
      while (++cellIndex < length) {
        const cell = row[cellIndex];
        out.push(
          h(cell, name, { align: align[cellIndex] }, cell ? all2(h, cell) : [])
        );
      }
      result[index2] = h(rows[index2], "tr", wrap2(out, true));
    }
    return h(
      node2,
      "table",
      wrap2(
        [h(result[0].position, "thead", wrap2([result[0]], true))].concat(
          result[1] ? h(
            {
              start: pointStart(result[1]),
              end: pointEnd(result[result.length - 1])
            },
            "tbody",
            wrap2(result.slice(1), true)
          ) : []
        ),
        true
      )
    );
  }

  // ../../node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js
  var tab = 9;
  var space = 32;
  function trimLines(value) {
    const source = String(value);
    const search2 = /\r?\n|\r/g;
    let match = search2.exec(source);
    let last = 0;
    const lines = [];
    while (match) {
      lines.push(
        trimLine(source.slice(last, match.index), last > 0, true),
        match[0]
      );
      last = match.index + match[0].length;
      match = search2.exec(source);
    }
    lines.push(trimLine(source.slice(last), last > 0, false));
    return lines.join("");
  }
  function trimLine(value, start, end) {
    let startIndex = 0;
    let endIndex = value.length;
    if (start) {
      let code2 = value.codePointAt(startIndex);
      while (code2 === tab || code2 === space) {
        startIndex++;
        code2 = value.codePointAt(startIndex);
      }
    }
    if (end) {
      let code2 = value.codePointAt(endIndex - 1);
      while (code2 === tab || code2 === space) {
        endIndex--;
        code2 = value.codePointAt(endIndex - 1);
      }
    }
    return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/text.js
  function text3(h, node2) {
    return h.augment(node2, u("text", trimLines(String(node2.value))));
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
  function thematicBreak2(h, node2) {
    return h(node2, "hr");
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/handlers/index.js
  var handlers = {
    blockquote,
    break: hardBreak,
    code,
    delete: strikethrough,
    emphasis,
    footnoteReference,
    footnote,
    heading,
    html,
    imageReference,
    image,
    inlineCode,
    linkReference,
    link,
    listItem,
    list: list2,
    paragraph,
    root,
    strong,
    table,
    text: text3,
    thematicBreak: thematicBreak2,
    toml: ignore,
    yaml: ignore,
    definition: ignore,
    footnoteDefinition: ignore
  };
  function ignore() {
    return null;
  }

  // ../../node_modules/.pnpm/mdast-util-to-hast@12.2.6/node_modules/mdast-util-to-hast/lib/index.js
  var own5 = {}.hasOwnProperty;
  function factory(tree, options) {
    const settings = options || {};
    const dangerous = settings.allowDangerousHtml || false;
    const footnoteById = {};
    h.dangerous = dangerous;
    h.clobberPrefix = settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix;
    h.footnoteLabel = settings.footnoteLabel || "Footnotes";
    h.footnoteLabelTagName = settings.footnoteLabelTagName || "h2";
    h.footnoteLabelProperties = settings.footnoteLabelProperties || {
      className: ["sr-only"]
    };
    h.footnoteBackLabel = settings.footnoteBackLabel || "Back to content";
    h.definition = definitions(tree);
    h.footnoteById = footnoteById;
    h.footnoteOrder = [];
    h.footnoteCounts = {};
    h.augment = augment;
    h.handlers = { ...handlers, ...settings.handlers };
    h.unknownHandler = settings.unknownHandler;
    h.passThrough = settings.passThrough;
    visit(tree, "footnoteDefinition", (definition2) => {
      const id = String(definition2.identifier).toUpperCase();
      if (!own5.call(footnoteById, id)) {
        footnoteById[id] = definition2;
      }
    });
    return h;
    function augment(left, right) {
      if (left && "data" in left && left.data) {
        const data = left.data;
        if (data.hName) {
          if (right.type !== "element") {
            right = {
              type: "element",
              tagName: "",
              properties: {},
              children: []
            };
          }
          right.tagName = data.hName;
        }
        if (right.type === "element" && data.hProperties) {
          right.properties = { ...right.properties, ...data.hProperties };
        }
        if ("children" in right && right.children && data.hChildren) {
          right.children = data.hChildren;
        }
      }
      if (left) {
        const ctx = "type" in left ? left : { position: left };
        if (!generated(ctx)) {
          right.position = { start: pointStart(ctx), end: pointEnd(ctx) };
        }
      }
      return right;
    }
    function h(node2, tagName, props, children) {
      if (Array.isArray(props)) {
        children = props;
        props = {};
      }
      return augment(node2, {
        type: "element",
        tagName,
        properties: props || {},
        children: children || []
      });
    }
  }
  function toHast(tree, options) {
    const h = factory(tree, options);
    const node2 = one2(h, tree, null);
    const foot = footer(h);
    if (foot) {
      node2.children.push(u("text", "\n"), foot);
    }
    return Array.isArray(node2) ? { type: "root", children: node2 } : node2;
  }

  // ../../node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/lib/index.js
  var remarkRehype = function(destination, options) {
    return destination && "run" in destination ? bridge(destination, options) : mutate(destination || options);
  };
  var lib_default = remarkRehype;
  function bridge(destination, options) {
    return (node2, file, next) => {
      destination.run(toHast(node2, options), file, (error) => {
        next(error);
      });
    };
  }
  function mutate(options) {
    return (node2) => toHast(node2, options);
  }

  // ../../node_modules/.pnpm/react-markdown@8.0.5_@types+react@18.0.26_react@18.2.0/node_modules/react-markdown/lib/react-markdown.js
  var import_prop_types = __toESM(require_prop_types(), 1);

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/util/schema.js
  var Schema = class {
    constructor(property, normal, space2) {
      this.property = property;
      this.normal = normal;
      if (space2) {
        this.space = space2;
      }
    }
  };
  Schema.prototype.property = {};
  Schema.prototype.normal = {};
  Schema.prototype.space = null;

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/util/merge.js
  function merge(definitions2, space2) {
    const property = {};
    const normal = {};
    let index2 = -1;
    while (++index2 < definitions2.length) {
      Object.assign(property, definitions2[index2].property);
      Object.assign(normal, definitions2[index2].normal);
    }
    return new Schema(property, normal, space2);
  }

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/normalize.js
  function normalize2(value) {
    return value.toLowerCase();
  }

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/util/info.js
  var Info = class {
    constructor(property, attribute) {
      this.property = property;
      this.attribute = attribute;
    }
  };
  Info.prototype.space = null;
  Info.prototype.boolean = false;
  Info.prototype.booleanish = false;
  Info.prototype.overloadedBoolean = false;
  Info.prototype.number = false;
  Info.prototype.commaSeparated = false;
  Info.prototype.spaceSeparated = false;
  Info.prototype.commaOrSpaceSeparated = false;
  Info.prototype.mustUseProperty = false;
  Info.prototype.defined = false;

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/util/types.js
  var types_exports = {};
  __export(types_exports, {
    boolean: () => boolean,
    booleanish: () => booleanish,
    commaOrSpaceSeparated: () => commaOrSpaceSeparated,
    commaSeparated: () => commaSeparated,
    number: () => number,
    overloadedBoolean: () => overloadedBoolean,
    spaceSeparated: () => spaceSeparated
  });
  var powers = 0;
  var boolean = increment();
  var booleanish = increment();
  var overloadedBoolean = increment();
  var number = increment();
  var spaceSeparated = increment();
  var commaSeparated = increment();
  var commaOrSpaceSeparated = increment();
  function increment() {
    return 2 ** ++powers;
  }

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/util/defined-info.js
  var checks = Object.keys(types_exports);
  var DefinedInfo = class extends Info {
    constructor(property, attribute, mask, space2) {
      let index2 = -1;
      super(property, attribute);
      mark(this, "space", space2);
      if (typeof mask === "number") {
        while (++index2 < checks.length) {
          const check = checks[index2];
          mark(this, checks[index2], (mask & types_exports[check]) === types_exports[check]);
        }
      }
    }
  };
  DefinedInfo.prototype.defined = true;
  function mark(values, key, value) {
    if (value) {
      values[key] = value;
    }
  }

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/util/create.js
  var own6 = {}.hasOwnProperty;
  function create(definition2) {
    const property = {};
    const normal = {};
    let prop;
    for (prop in definition2.properties) {
      if (own6.call(definition2.properties, prop)) {
        const value = definition2.properties[prop];
        const info = new DefinedInfo(
          prop,
          definition2.transform(definition2.attributes || {}, prop),
          value,
          definition2.space
        );
        if (definition2.mustUseProperty && definition2.mustUseProperty.includes(prop)) {
          info.mustUseProperty = true;
        }
        property[prop] = info;
        normal[normalize2(prop)] = prop;
        normal[normalize2(info.attribute)] = prop;
      }
    }
    return new Schema(property, normal, definition2.space);
  }

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/xlink.js
  var xlink = create({
    space: "xlink",
    transform(_, prop) {
      return "xlink:" + prop.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/xml.js
  var xml = create({
    space: "xml",
    transform(_, prop) {
      return "xml:" + prop.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
  });

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/util/case-sensitive-transform.js
  function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
  }

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/util/case-insensitive-transform.js
  function caseInsensitiveTransform(attributes, property) {
    return caseSensitiveTransform(attributes, property.toLowerCase());
  }

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/xmlns.js
  var xmlns = create({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: caseInsensitiveTransform,
    properties: { xmlns: null, xmlnsXLink: null }
  });

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/aria.js
  var aria = create({
    transform(_, prop) {
      return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: booleanish,
      ariaAutoComplete: null,
      ariaBusy: booleanish,
      ariaChecked: booleanish,
      ariaColCount: number,
      ariaColIndex: number,
      ariaColSpan: number,
      ariaControls: spaceSeparated,
      ariaCurrent: null,
      ariaDescribedBy: spaceSeparated,
      ariaDetails: null,
      ariaDisabled: booleanish,
      ariaDropEffect: spaceSeparated,
      ariaErrorMessage: null,
      ariaExpanded: booleanish,
      ariaFlowTo: spaceSeparated,
      ariaGrabbed: booleanish,
      ariaHasPopup: null,
      ariaHidden: booleanish,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: spaceSeparated,
      ariaLevel: number,
      ariaLive: null,
      ariaModal: booleanish,
      ariaMultiLine: booleanish,
      ariaMultiSelectable: booleanish,
      ariaOrientation: null,
      ariaOwns: spaceSeparated,
      ariaPlaceholder: null,
      ariaPosInSet: number,
      ariaPressed: booleanish,
      ariaReadOnly: booleanish,
      ariaRelevant: null,
      ariaRequired: booleanish,
      ariaRoleDescription: spaceSeparated,
      ariaRowCount: number,
      ariaRowIndex: number,
      ariaRowSpan: number,
      ariaSelected: booleanish,
      ariaSetSize: number,
      ariaSort: null,
      ariaValueMax: number,
      ariaValueMin: number,
      ariaValueNow: number,
      ariaValueText: null,
      role: null
    }
  });

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/html.js
  var html2 = create({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: caseInsensitiveTransform,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: commaSeparated,
      acceptCharset: spaceSeparated,
      accessKey: spaceSeparated,
      action: null,
      allow: null,
      allowFullScreen: boolean,
      allowPaymentRequest: boolean,
      allowUserMedia: boolean,
      alt: null,
      as: null,
      async: boolean,
      autoCapitalize: null,
      autoComplete: spaceSeparated,
      autoFocus: boolean,
      autoPlay: boolean,
      capture: boolean,
      charSet: null,
      checked: boolean,
      cite: null,
      className: spaceSeparated,
      cols: number,
      colSpan: null,
      content: null,
      contentEditable: booleanish,
      controls: boolean,
      controlsList: spaceSeparated,
      coords: number | commaSeparated,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: boolean,
      defer: boolean,
      dir: null,
      dirName: null,
      disabled: boolean,
      download: overloadedBoolean,
      draggable: booleanish,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: boolean,
      formTarget: null,
      headers: spaceSeparated,
      height: number,
      hidden: boolean,
      high: number,
      href: null,
      hrefLang: null,
      htmlFor: spaceSeparated,
      httpEquiv: spaceSeparated,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: boolean,
      itemId: null,
      itemProp: spaceSeparated,
      itemRef: spaceSeparated,
      itemScope: boolean,
      itemType: spaceSeparated,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: boolean,
      low: number,
      manifest: null,
      max: null,
      maxLength: number,
      media: null,
      method: null,
      min: null,
      minLength: number,
      multiple: boolean,
      muted: boolean,
      name: null,
      nonce: null,
      noModule: boolean,
      noValidate: boolean,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: boolean,
      optimum: number,
      pattern: null,
      ping: spaceSeparated,
      placeholder: null,
      playsInline: boolean,
      poster: null,
      preload: null,
      readOnly: boolean,
      referrerPolicy: null,
      rel: spaceSeparated,
      required: boolean,
      reversed: boolean,
      rows: number,
      rowSpan: number,
      sandbox: spaceSeparated,
      scope: null,
      scoped: boolean,
      seamless: boolean,
      selected: boolean,
      shape: null,
      size: number,
      sizes: null,
      slot: null,
      span: number,
      spellCheck: booleanish,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: number,
      step: null,
      style: null,
      tabIndex: number,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: boolean,
      useMap: null,
      value: booleanish,
      width: number,
      wrap: null,
      align: null,
      aLink: null,
      archive: spaceSeparated,
      axis: null,
      background: null,
      bgColor: null,
      border: number,
      borderColor: null,
      bottomMargin: number,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: boolean,
      declare: boolean,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: number,
      leftMargin: number,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: number,
      marginWidth: number,
      noResize: boolean,
      noHref: boolean,
      noShade: boolean,
      noWrap: boolean,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: number,
      rules: null,
      scheme: null,
      scrolling: booleanish,
      standby: null,
      summary: null,
      text: null,
      topMargin: number,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: number,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: boolean,
      disableRemotePlayback: boolean,
      prefix: null,
      property: null,
      results: number,
      security: null,
      unselectable: null
    }
  });

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/svg.js
  var svg = create({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin"
    },
    transform: caseSensitiveTransform,
    properties: {
      about: commaOrSpaceSeparated,
      accentHeight: number,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: number,
      amplitude: number,
      arabicForm: null,
      ascent: number,
      attributeName: null,
      attributeType: null,
      azimuth: number,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: number,
      by: null,
      calcMode: null,
      capHeight: number,
      className: spaceSeparated,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: number,
      diffuseConstant: number,
      direction: null,
      display: null,
      dur: null,
      divisor: number,
      dominantBaseline: null,
      download: boolean,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: number,
      enableBackground: null,
      end: null,
      event: null,
      exponent: number,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: number,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: commaSeparated,
      g2: commaSeparated,
      glyphName: commaSeparated,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: number,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: number,
      horizOriginX: number,
      horizOriginY: number,
      id: null,
      ideographic: number,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: number,
      k: number,
      k1: number,
      k2: number,
      k3: number,
      k4: number,
      kernelMatrix: commaOrSpaceSeparated,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: number,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: number,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: number,
      overlineThickness: number,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: number,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: spaceSeparated,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: number,
      pointsAtY: number,
      pointsAtZ: number,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: commaOrSpaceSeparated,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: commaOrSpaceSeparated,
      rev: commaOrSpaceSeparated,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: commaOrSpaceSeparated,
      requiredFeatures: commaOrSpaceSeparated,
      requiredFonts: commaOrSpaceSeparated,
      requiredFormats: commaOrSpaceSeparated,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: number,
      specularExponent: number,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: number,
      strikethroughThickness: number,
      string: null,
      stroke: null,
      strokeDashArray: commaOrSpaceSeparated,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: number,
      strokeOpacity: number,
      strokeWidth: null,
      style: null,
      surfaceScale: number,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: commaOrSpaceSeparated,
      tabIndex: number,
      tableValues: null,
      target: null,
      targetX: number,
      targetY: number,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: commaOrSpaceSeparated,
      to: null,
      transform: null,
      u1: null,
      u2: null,
      underlinePosition: number,
      underlineThickness: number,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: number,
      values: null,
      vAlphabetic: number,
      vMathematical: number,
      vectorEffect: null,
      vHanging: number,
      vIdeographic: number,
      version: null,
      vertAdvY: number,
      vertOriginX: number,
      vertOriginY: number,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: number,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    }
  });

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/find.js
  var valid = /^data[-\w.:]+$/i;
  var dash = /-[a-z]/g;
  var cap = /[A-Z]/g;
  function find(schema, value) {
    const normal = normalize2(value);
    let prop = value;
    let Type = Info;
    if (normal in schema.normal) {
      return schema.property[schema.normal[normal]];
    }
    if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
      if (value.charAt(4) === "-") {
        const rest = value.slice(5).replace(dash, camelcase);
        prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
      } else {
        const rest = value.slice(4);
        if (!dash.test(rest)) {
          let dashes = rest.replace(cap, kebab);
          if (dashes.charAt(0) !== "-") {
            dashes = "-" + dashes;
          }
          value = "data" + dashes;
        }
      }
      Type = DefinedInfo;
    }
    return new Type(prop, value);
  }
  function kebab($0) {
    return "-" + $0.toLowerCase();
  }
  function camelcase($0) {
    return $0.charAt(1).toUpperCase();
  }

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/lib/hast-to-react.js
  var hastToReact = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink"
  };

  // ../../node_modules/.pnpm/property-information@6.2.0/node_modules/property-information/index.js
  var html3 = merge([xml, xlink, xmlns, aria, html2], "html");
  var svg2 = merge([xml, xlink, xmlns, aria, svg], "svg");

  // ../../node_modules/.pnpm/react-markdown@8.0.5_@types+react@18.0.26_react@18.2.0/node_modules/react-markdown/lib/rehype-filter.js
  function rehypeFilter(options) {
    if (options.allowedElements && options.disallowedElements) {
      throw new TypeError(
        "Only one of `allowedElements` and `disallowedElements` should be defined"
      );
    }
    if (options.allowedElements || options.disallowedElements || options.allowElement) {
      return (tree) => {
        visit(tree, "element", (node2, index2, parent_) => {
          const parent = parent_;
          let remove;
          if (options.allowedElements) {
            remove = !options.allowedElements.includes(node2.tagName);
          } else if (options.disallowedElements) {
            remove = options.disallowedElements.includes(node2.tagName);
          }
          if (!remove && options.allowElement && typeof index2 === "number") {
            remove = !options.allowElement(node2, index2, parent);
          }
          if (remove && typeof index2 === "number") {
            if (options.unwrapDisallowed && node2.children) {
              parent.children.splice(index2, 1, ...node2.children);
            } else {
              parent.children.splice(index2, 1);
            }
            return index2;
          }
          return void 0;
        });
      };
    }
  }

  // ../../node_modules/.pnpm/react-markdown@8.0.5_@types+react@18.0.26_react@18.2.0/node_modules/react-markdown/lib/ast-to-react.js
  var import_react4 = __toESM(require_react(), 1);
  var import_react_is = __toESM(require_react_is(), 1);

  // ../../node_modules/.pnpm/hast-util-whitespace@2.0.1/node_modules/hast-util-whitespace/index.js
  function whitespace(thing) {
    const value = thing && typeof thing === "object" && thing.type === "text" ? thing.value || "" : thing;
    return typeof value === "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
  }

  // ../../node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js
  function stringify(values) {
    return values.join(" ").trim();
  }

  // ../../node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js
  function stringify2(values, options) {
    const settings = options || {};
    const input = values[values.length - 1] === "" ? [...values, ""] : values;
    return input.join(
      (settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")
    ).trim();
  }

  // ../../node_modules/.pnpm/style-to-object@0.4.1/node_modules/style-to-object/index.mjs
  var import_index = __toESM(require_style_to_object(), 1);
  var style_to_object_default = import_index.default;

  // ../../node_modules/.pnpm/react-markdown@8.0.5_@types+react@18.0.26_react@18.2.0/node_modules/react-markdown/lib/ast-to-react.js
  var own7 = {}.hasOwnProperty;
  var tableElements = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
  function childrenToReact(context, node2) {
    const children = [];
    let childIndex = -1;
    let child;
    while (++childIndex < node2.children.length) {
      child = node2.children[childIndex];
      if (child.type === "element") {
        children.push(toReact(context, child, childIndex, node2));
      } else if (child.type === "text") {
        if (node2.type !== "element" || !tableElements.has(node2.tagName) || !whitespace(child)) {
          children.push(child.value);
        }
      } else if (child.type === "raw" && !context.options.skipHtml) {
        children.push(child.value);
      }
    }
    return children;
  }
  function toReact(context, node2, index2, parent) {
    const options = context.options;
    const transform = options.transformLinkUri === void 0 ? uriTransformer : options.transformLinkUri;
    const parentSchema = context.schema;
    const name = node2.tagName;
    const properties = {};
    let schema = parentSchema;
    let property;
    if (parentSchema.space === "html" && name === "svg") {
      schema = svg2;
      context.schema = schema;
    }
    if (node2.properties) {
      for (property in node2.properties) {
        if (own7.call(node2.properties, property)) {
          addProperty(properties, property, node2.properties[property], context);
        }
      }
    }
    if (name === "ol" || name === "ul") {
      context.listDepth++;
    }
    const children = childrenToReact(context, node2);
    if (name === "ol" || name === "ul") {
      context.listDepth--;
    }
    context.schema = parentSchema;
    const position3 = node2.position || {
      start: { line: null, column: null, offset: null },
      end: { line: null, column: null, offset: null }
    };
    const component = options.components && own7.call(options.components, name) ? options.components[name] : name;
    const basic = typeof component === "string" || component === import_react4.default.Fragment;
    if (!import_react_is.default.isValidElementType(component)) {
      throw new TypeError(
        `Component for name \`${name}\` not defined or is not renderable`
      );
    }
    properties.key = [
      name,
      position3.start.line,
      position3.start.column,
      index2
    ].join("-");
    if (name === "a" && options.linkTarget) {
      properties.target = typeof options.linkTarget === "function" ? options.linkTarget(
        String(properties.href || ""),
        node2.children,
        typeof properties.title === "string" ? properties.title : null
      ) : options.linkTarget;
    }
    if (name === "a" && transform) {
      properties.href = transform(
        String(properties.href || ""),
        node2.children,
        typeof properties.title === "string" ? properties.title : null
      );
    }
    if (!basic && name === "code" && parent.type === "element" && parent.tagName !== "pre") {
      properties.inline = true;
    }
    if (!basic && (name === "h1" || name === "h2" || name === "h3" || name === "h4" || name === "h5" || name === "h6")) {
      properties.level = Number.parseInt(name.charAt(1), 10);
    }
    if (name === "img" && options.transformImageUri) {
      properties.src = options.transformImageUri(
        String(properties.src || ""),
        String(properties.alt || ""),
        typeof properties.title === "string" ? properties.title : null
      );
    }
    if (!basic && name === "li" && parent.type === "element") {
      const input = getInputElement(node2);
      properties.checked = input && input.properties ? Boolean(input.properties.checked) : null;
      properties.index = getElementsBeforeCount(parent, node2);
      properties.ordered = parent.tagName === "ol";
    }
    if (!basic && (name === "ol" || name === "ul")) {
      properties.ordered = name === "ol";
      properties.depth = context.listDepth;
    }
    if (name === "td" || name === "th") {
      if (properties.align) {
        if (!properties.style)
          properties.style = {};
        properties.style.textAlign = properties.align;
        delete properties.align;
      }
      if (!basic) {
        properties.isHeader = name === "th";
      }
    }
    if (!basic && name === "tr" && parent.type === "element") {
      properties.isHeader = Boolean(parent.tagName === "thead");
    }
    if (options.sourcePos) {
      properties["data-sourcepos"] = flattenPosition(position3);
    }
    if (!basic && options.rawSourcePos) {
      properties.sourcePosition = node2.position;
    }
    if (!basic && options.includeElementIndex) {
      properties.index = getElementsBeforeCount(parent, node2);
      properties.siblingCount = getElementsBeforeCount(parent);
    }
    if (!basic) {
      properties.node = node2;
    }
    return children.length > 0 ? import_react4.default.createElement(component, properties, children) : import_react4.default.createElement(component, properties);
  }
  function getInputElement(node2) {
    let index2 = -1;
    while (++index2 < node2.children.length) {
      const child = node2.children[index2];
      if (child.type === "element" && child.tagName === "input") {
        return child;
      }
    }
    return null;
  }
  function getElementsBeforeCount(parent, node2) {
    let index2 = -1;
    let count = 0;
    while (++index2 < parent.children.length) {
      if (parent.children[index2] === node2)
        break;
      if (parent.children[index2].type === "element")
        count++;
    }
    return count;
  }
  function addProperty(props, prop, value, ctx) {
    const info = find(ctx.schema, prop);
    let result = value;
    if (result === null || result === void 0 || result !== result) {
      return;
    }
    if (Array.isArray(result)) {
      result = info.commaSeparated ? stringify2(result) : stringify(result);
    }
    if (info.property === "style" && typeof result === "string") {
      result = parseStyle(result);
    }
    if (info.space && info.property) {
      props[own7.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result;
    } else if (info.attribute) {
      props[info.attribute] = result;
    }
  }
  function parseStyle(value) {
    const result = {};
    try {
      style_to_object_default(value, iterator);
    } catch {
    }
    return result;
    function iterator(name, v) {
      const k = name.slice(0, 4) === "-ms-" ? `ms-${name.slice(4)}` : name;
      result[k.replace(/-([a-z])/g, styleReplacer)] = v;
    }
  }
  function styleReplacer(_, $1) {
    return $1.toUpperCase();
  }
  function flattenPosition(pos) {
    return [
      pos.start.line,
      ":",
      pos.start.column,
      "-",
      pos.end.line,
      ":",
      pos.end.column
    ].map(String).join("");
  }

  // ../../node_modules/.pnpm/react-markdown@8.0.5_@types+react@18.0.26_react@18.2.0/node_modules/react-markdown/lib/react-markdown.js
  var own8 = {}.hasOwnProperty;
  var changelog = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md";
  var deprecated = {
    plugins: { to: "remarkPlugins", id: "change-plugins-to-remarkplugins" },
    renderers: { to: "components", id: "change-renderers-to-components" },
    astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
    allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
    escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
    source: { to: "children", id: "change-source-to-children" },
    allowNode: {
      to: "allowElement",
      id: "replace-allownode-allowedtypes-and-disallowedtypes"
    },
    allowedTypes: {
      to: "allowedElements",
      id: "replace-allownode-allowedtypes-and-disallowedtypes"
    },
    disallowedTypes: {
      to: "disallowedElements",
      id: "replace-allownode-allowedtypes-and-disallowedtypes"
    },
    includeNodeIndex: {
      to: "includeElementIndex",
      id: "change-includenodeindex-to-includeelementindex"
    }
  };
  function ReactMarkdown(options) {
    for (const key in deprecated) {
      if (own8.call(deprecated, key) && own8.call(options, key)) {
        const deprecation = deprecated[key];
        console.warn(
          `[react-markdown] Warning: please ${deprecation.to ? `use \`${deprecation.to}\` instead of` : "remove"} \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`
        );
        delete deprecated[key];
      }
    }
    const processor = unified().use(remark_parse_default).use(options.remarkPlugins || []).use(lib_default, {
      ...options.remarkRehypeOptions,
      allowDangerousHtml: true
    }).use(options.rehypePlugins || []).use(rehypeFilter, options);
    const file = new VFile();
    if (typeof options.children === "string") {
      file.value = options.children;
    } else if (options.children !== void 0 && options.children !== null) {
      console.warn(
        `[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`
      );
    }
    const hastNode = processor.runSync(processor.parse(file), file);
    if (hastNode.type !== "root") {
      throw new TypeError("Expected a `root` node");
    }
    let result = import_react5.default.createElement(
      import_react5.default.Fragment,
      {},
      childrenToReact({ options, schema: html3, listDepth: 0 }, hastNode)
    );
    if (options.className) {
      result = import_react5.default.createElement("div", { className: options.className }, result);
    }
    return result;
  }
  ReactMarkdown.propTypes = {
    children: import_prop_types.default.string,
    className: import_prop_types.default.string,
    allowElement: import_prop_types.default.func,
    allowedElements: import_prop_types.default.arrayOf(import_prop_types.default.string),
    disallowedElements: import_prop_types.default.arrayOf(import_prop_types.default.string),
    unwrapDisallowed: import_prop_types.default.bool,
    remarkPlugins: import_prop_types.default.arrayOf(
      import_prop_types.default.oneOfType([
        import_prop_types.default.object,
        import_prop_types.default.func,
        import_prop_types.default.arrayOf(
          import_prop_types.default.oneOfType([
            import_prop_types.default.bool,
            import_prop_types.default.string,
            import_prop_types.default.object,
            import_prop_types.default.func,
            import_prop_types.default.arrayOf(
              import_prop_types.default.any
            )
          ])
        )
      ])
    ),
    rehypePlugins: import_prop_types.default.arrayOf(
      import_prop_types.default.oneOfType([
        import_prop_types.default.object,
        import_prop_types.default.func,
        import_prop_types.default.arrayOf(
          import_prop_types.default.oneOfType([
            import_prop_types.default.bool,
            import_prop_types.default.string,
            import_prop_types.default.object,
            import_prop_types.default.func,
            import_prop_types.default.arrayOf(
              import_prop_types.default.any
            )
          ])
        )
      ])
    ),
    sourcePos: import_prop_types.default.bool,
    rawSourcePos: import_prop_types.default.bool,
    skipHtml: import_prop_types.default.bool,
    includeElementIndex: import_prop_types.default.bool,
    transformLinkUri: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.bool]),
    linkTarget: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.string]),
    transformImageUri: import_prop_types.default.func,
    components: import_prop_types.default.object
  };

  // build/component/ErrorMessage.js
  function ErrorMessage({ error, onClickDismiss, onClickRetry }) {
    return typeof error === "string" ? import_react6.default.createElement(
      "div",
      { key: "error", className: "message bot error error-body" },
      import_react6.default.createElement(
        "span",
        { className: "error-message" },
        "Error: ",
        error
      ),
      import_react6.default.createElement(
        "span",
        { className: "error-retry", onClick: onClickRetry },
        import_react6.default.createElement("i", { className: "codicon codicon-debug-restart inline" }),
        import_react6.default.createElement("span", null, "Retry")
      )
    ) : import_react6.default.createElement(
      "div",
      { key: "error", className: `message bot error level-${error.level}` },
      import_react6.default.createElement(
        "span",
        { className: "error-title" },
        import_react6.default.createElement(ReactMarkdown, null, error.title)
      ),
      import_react6.default.createElement(
        "span",
        { className: "error-message" },
        import_react6.default.createElement(ReactMarkdown, null, error.message)
      ),
      import_react6.default.createElement(
        "div",
        { className: "error-buttons" },
        !error.disableDismiss && import_react6.default.createElement("button", { className: "error-dismiss", onClick: onClickDismiss }, "Dismiss"),
        !error.disableRetry && import_react6.default.createElement(
          "button",
          { className: "error-retry", onClick: onClickRetry },
          import_react6.default.createElement("i", { className: "codicon codicon-debug-restart inline" }),
          import_react6.default.createElement("span", null, "Retry")
        )
      )
    );
  }

  // build/Translate.js
  function translate(content3, language = "en") {
    if (language == "en") {
      return content3;
    }
    if (content3 == "Start new chat")
      return "\u5F00\u59CB\u65B0\u5BF9\u8BDD";
    if (content3 == "Username or phoneNumber")
      return "\u7528\u6237\u540D\u6216\u624B\u673A\u53F7";
    if (content3 == "Password")
      return "\u5BC6\u7801";
    if (content3 == "I agree to the")
      return "\u6211\u540C\u610F";
    if (content3 == "Privacy Policy")
      return "\u9690\u79C1\u653F\u7B56";
    if (content3 == "and")
      return "\u548C";
    if (content3 == "User Agreement")
      return "\u7528\u6237\u534F\u8BAE";
    if (content3 == "Login")
      return "\u767B\u5F55";
    if (content3 == "Forgot Password")
      return "\u5FD8\u8BB0\u5BC6\u7801";
    if (content3 == "Register")
      return "\u6CE8\u518C";
    if (content3 == "Reply\u2026")
      return "\u8FDB\u884C\u56DE\u590D...";
    if (content3 == "Ask\u2026")
      return "\u8FDB\u884C\u8BE2\u95EE...";
    if (content3 == "Enter instructions\u2026")
      return "\u8F93\u5165\u6307\u4EE4...";
    if (content3 == "Generate")
      return "\u751F\u6210";
    if (content3 == "Export conversation")
      return "\u5BFC\u51FA\u5BF9\u8BDD";
    if (content3 == "Delete conversation")
      return "\u5220\u9664\u5BF9\u8BDD";
    if (content3 == "login ing...")
      return "\u767B\u5F55\u4E2D...";
    if (content3 == "please input username and password")
      return "\u8BF7\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801";
    if (content3 == "wrong username or password")
      return "\u9519\u8BEF\u7684\u7528\u6237\u540D\u6216\u5BC6\u7801";
    if (content3 == "Invalid phone number")
      return "\u624B\u673A\u53F7\u65E0\u6548,\u5F53\u524D\u53EA\u652F\u6301\u4E2D\u56FD\u5927\u9646\u624B\u673A\u53F7";
    if (content3 == "send code success")
      return "\u4EE3\u7801\u53D1\u9001\u6210\u529F";
    if (content3 == "please input all info")
      return "\u8BF7\u8F93\u5165\u5168\u4FE1\u606F";
    if (content3 == "password not match")
      return "\u5BC6\u7801\u4E0D\u5339\u914D";
    if (content3 == "register success!")
      return "\u6CE8\u518C\u6210\u529F\uFF01";
    if (content3 == "change password success")
      return "\u5BC6\u7801\u4FEE\u6539\u6210\u529F";
    if (content3 == "Generating")
      return "\u751F\u6210\u4E2D";
    if (content3 == "Username")
      return "\u7528\u6237\u540D";
    if (content3 == "Phone Number")
      return "\u624B\u673A\u53F7\u7801";
    if (content3 == "Verification Code")
      return "\u9A8C\u8BC1\u7801";
    if (content3 == "Password")
      return "\u5BC6\u7801";
    if (content3 == "Confirm Password")
      return "\u786E\u8BA4\u5BC6\u7801";
    if (content3 == "Register")
      return "\u6CE8\u518C";
    if (content3 == "Back to Login")
      return "\u8FD4\u56DE\u767B\u5F55";
    if (content3 == "New Password")
      return "\u65B0\u5BC6\u7801";
    if (content3 == "Send")
      return "\u53D1\u9001";
    if (content3 == "change")
      return "\u4FEE\u6539";
    return content3;
  }

  // build/component/InstructionRefinementView.js
  function InstructionRefinementView({ content: content3, onSendMessage, onClickDismissError, onClickRetry }) {
    const [inputText, setInputText] = (0, import_react7.useState)(content3.instruction);
    return import_react7.default.createElement(
      "div",
      { className: "instruction-refinement" },
      (() => {
        const type = content3.state.type;
        switch (type) {
          case "waitingForBotAnswer":
            return import_react7.default.createElement(
              import_react7.default.Fragment,
              null,
              import_react7.default.createElement(ChatInput, { text: inputText, disabled: true }),
              import_react7.default.createElement("button", { disabled: true }, content3.state.botAction ?? translate("Generating", "cn"))
            );
          case "userCanRefineInstruction":
            return import_react7.default.createElement(
              import_react7.default.Fragment,
              null,
              import_react7.default.createElement(ChatInput, { text: inputText, placeholder: translate("Enter instructions\u2026", "cn"), onChange: setInputText, onSubmit: () => onSendMessage(inputText), shouldCreateNewLineOnEnter: true }),
              import_react7.default.createElement("button", { onClick: () => onSendMessage(inputText) }, translate("Generate", "cn"))
            );
          default: {
            const exhaustiveCheck = type;
            throw new Error(`unsupported type: ${exhaustiveCheck}`);
          }
        }
      })(),
      content3.error && import_react7.default.createElement(ErrorMessage, { error: content3.error, onClickDismiss: onClickDismissError, onClickRetry })
    );
  }

  // build/component/MessageExchangeView.js
  var import_react8 = __toESM(require_react(), 1);
  function MessageExchangeView({ content: content3, onClickDismissError, onClickRetry, onSendMessage }) {
    const [inputText, setInputText] = (0, import_react8.useState)("");
    return import_react8.default.createElement(
      "div",
      { className: "message-exchange" },
      content3.messages.map((message, i) => import_react8.default.createElement(
        "div",
        { className: `message ${message.author}`, key: i },
        message.author === "user" && message.content,
        message.author === "bot" && import_react8.default.createElement(ReactMarkdown, null, message.content)
      )),
      (() => {
        const type = content3.state.type;
        switch (type) {
          case "waitingForBotAnswer":
            return import_react8.default.createElement(
              "div",
              { className: "message bot" },
              content3.state.botAction ?? "",
              import_react8.default.createElement("span", { className: "in-progress" })
            );
          case "botAnswerStreaming":
            return import_react8.default.createElement(
              "div",
              { className: "message bot" },
              import_react8.default.createElement(ReactMarkdown, null, content3.state.partialAnswer ?? ""),
              import_react8.default.createElement("span", { className: "in-progress" })
            );
          case "userCanReply":
            return import_react8.default.createElement(ChatInput, { placeholder: content3.state.responsePlaceholder ?? content3.messages.length > 0 ? translate("Reply\u2026", "cn") : translate("Ask\u2026", "cn"), text: inputText, onChange: setInputText, onSubmit: () => {
              onSendMessage(inputText);
              setInputText("");
            } });
          default: {
            const exhaustiveCheck = type;
            throw new Error(`unsupported type: ${exhaustiveCheck}`);
          }
        }
      })(),
      content3.error && import_react8.default.createElement(ErrorMessage, { error: content3.error, onClickDismiss: onClickDismissError, onClickRetry })
    );
  }

  // build/component/ExpandedConversationView.js
  var ExpandedConversationView = ({ conversation, onSendMessage, onClickDismissError, onClickRetry, onClickDelete, onClickExport, onClickInsertPrompt }) => {
    const content3 = conversation.content;
    return import_react9.default.createElement(
      "div",
      { className: `conversation expanded` },
      onClickInsertPrompt ? import_react9.default.createElement(ConversationHeader, { conversation, onIconClick: onClickInsertPrompt }) : import_react9.default.createElement(ConversationHeader, { conversation }),
      (() => {
        const type = content3.type;
        switch (type) {
          case "messageExchange":
            return import_react9.default.createElement(MessageExchangeView, { content: content3, onSendMessage, onClickDismissError, onClickRetry });
          case "instructionRefinement":
            return import_react9.default.createElement(InstructionRefinementView, { content: content3, onSendMessage, onClickDismissError, onClickRetry });
          default: {
            const exhaustiveCheck = type;
            throw new Error(`unsupported type: ${exhaustiveCheck}`);
          }
        }
      })(),
      import_react9.default.createElement(
        "div",
        { className: "footer" },
        import_react9.default.createElement(
          "span",
          { className: "action-panel" },
          import_react9.default.createElement("i", { className: "codicon codicon-save inline action-export", title: translate("Export conversation", "cn"), onClick: onClickExport }),
          import_react9.default.createElement("i", { className: "codicon codicon-trash inline action-delete", title: translate("Delete conversation", "cn"), onClick: onClickDelete })
        )
      )
    );
  };

  // build/panel/ChatPanelView.js
  var StartChatButton = ({ onClick }) => import_react10.default.createElement(
    "div",
    { className: "start-chat" },
    import_react10.default.createElement(
      "center",
      null,
      import_react10.default.createElement("p", null, "\xA0")
    ),
    import_react10.default.createElement(
      "center",
      null,
      import_react10.default.createElement("p", null, "\xA0")
    ),
    import_react10.default.createElement(
      "center",
      null,
      import_react10.default.createElement("p", null, "\xA0")
    ),
    import_react10.default.createElement(
      "center",
      null,
      import_react10.default.createElement("h3", { style: { color: "lightblue" } }, "\u5FEB\u53BB\u4F53\u9A8C\u9AD8\u6548\u7684\u4EE3\u7801\u81EA\u52A8\u8865\u5168\u5427!")
    ),
    import_react10.default.createElement(
      "center",
      null,
      import_react10.default.createElement("p", null, "\xA0")
    ),
    import_react10.default.createElement("h5", null, "\xA0\xA0\u6253\u5F00\u60A8\u6B63\u5728\u7F16\u5199\u7684\u4EE3\u7801\u6587\u4EF6\uFF0C\u8F93\u5165\u4EFB\u610F\u4EE3\u7801\u5373\u53EF\u4F7F\u7528\u81EA\u52A8\u8865\u5168\u529F\u80FD\u3002"),
    import_react10.default.createElement("p", null, "\xA0\xA0\u2022\xA0\u6309\u4E0B tab \u63A5\u53D7\u6240\u6709\u8865\u5168\u5EFA\u8BAE\u3002"),
    import_react10.default.createElement("p", null, "\xA0\xA0\u2022\xA0\u6309\u4E0B ctrl+\u2B07\uFE0F \u63A5\u53D7\u4E00\u884C\u8865\u5168\u5EFA\u8BAE\u3002"),
    import_react10.default.createElement("p", null, "\xA0\xA0\u2022\xA0\u6309\u4E0B ctrl+\u27A1\uFE0F \u63A5\u6536\u5355\u4E2A\u8BCD\u8865\u5168\u5EFA\u8BAE\u3002"),
    import_react10.default.createElement(
      "center",
      null,
      import_react10.default.createElement("p", null, "\xA0")
    ),
    import_react10.default.createElement("h4", null, "\xA0\xA0\u4E5F\u53EF\u4EE5\u70B9\u51FB\u4E0A\u65B9\u56FE\u6807\uFF0C\u4F53\u9A8C\u5B9E\u7528\u5C0F\u529F\u80FD\u3002\u4F8B\u5982\u70B9\u51FB\u4E0A\u65B9\u3010\u804A\u5929\u56FE\u6807\u3011\uFF0C\u5373\u53EF\u5F00\u59CB\u4E0EAI\u4EE3\u7801\u52A9\u624B\u804A\u5929\u3002")
  );
  var ChatPanelView = ({ panelState, sendMessage: sendMessage2 }) => {
    const [Message, setMessage] = (0, import_react10.useState)(null);
    const onLogin = async (username2, password2) => {
      if (username2 === "" || password2 === "") {
        setMessage(translate("please input username and password", "cn"));
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        return false;
      }
      try {
        sendMessage2({ type: "startLoading" });
        setMessage(translate("login ing...", "cn"));
        const response = await fetch("http://116.177.253.43:15001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: username2,
            password: password2
          })
        });
        const data = await response.json();
        sendMessage2({ type: "stopLoading" });
        if (response.ok && data["code"] == 200) {
          setTimeout(() => {
            setMessage("");
          }, 3e3);
          let user_token = data["data"]["token"];
          const fico_res = await fetch("http://116.177.253.43:15001/get_ft_token", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user_token}`
            }
          });
          const fico_data = await fico_res.json();
          let apikey = fico_data["data"]["fico_token"];
          sendMessage2({ type: "enterFittenAIApiKey", data: { apikey } });
          setUsername("");
          setPassword("");
        } else {
          setMessage(translate("wrong username or password", "cn"));
          setTimeout(() => {
            setMessage("");
          }, 3e3);
        }
      } catch (error) {
        console.error("There has been a problem with your login operation:", error);
      }
    };
    const [username, setUsername] = (0, import_react10.useState)("");
    const [password, setPassword] = (0, import_react10.useState)("");
    const [forgetphoneNumber, setforgetPhoneNumber] = (0, import_react10.useState)("");
    const [forgetPassword, setforgetPassword] = (0, import_react10.useState)("");
    const [forgetConfirmPassword, setforgetConfirmPassword] = (0, import_react10.useState)("");
    const [registerUsername, setRegisterUsername] = (0, import_react10.useState)("");
    const [phoneNumber, setPhoneNumber] = (0, import_react10.useState)("");
    const [verificationCode, setVerificationCode] = (0, import_react10.useState)("");
    const [registerPassword, setRegisterPassword] = (0, import_react10.useState)("");
    const [confirmPassword, setConfirmPassword] = (0, import_react10.useState)("");
    const [countdown, setCountdown] = (0, import_react10.useState)(0);
    (0, import_react10.useEffect)(() => {
      let timer;
      if (countdown > 0) {
        timer = setTimeout(() => setCountdown(countdown - 1), 1e3);
      }
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }, [countdown]);
    const onSendCode = async () => {
      const validatePhoneNumber = (phoneNumber2) => {
        const regex = /^1[3-9]\d{9}$/;
        return regex.test(phoneNumber2);
      };
      if (!validatePhoneNumber(phoneNumber)) {
        setMessage(translate("Invalid phone number", "cn"));
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        return false;
      }
      if (countdown === 0) {
        const response = await fetch("http://116.177.253.43:15001/phone_code", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ phone: phoneNumber })
        });
        const data = await response.json();
        if (data["status_code"] === 0) {
          setMessage("send code success");
          setTimeout(() => {
            setMessage("");
          }, 3e3);
        } else {
          setMessage(data["msg"]);
          setTimeout(() => {
            setMessage("");
          }, 3e3);
        }
        setCountdown(30);
      }
    };
    const fgonSendCode = async () => {
      const validatePhoneNumber = (forgetphoneNumber2) => {
        const regex = /^1[3-9]\d{9}$/;
        return regex.test(forgetphoneNumber2);
      };
      if (!validatePhoneNumber(forgetphoneNumber)) {
        setMessage(translate("Invalid phone number", "cn"));
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        return false;
      }
      if (countdown === 0) {
        const response = await fetch("http://116.177.253.43:15001/phone_code", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ phone: forgetphoneNumber })
        });
        const data = await response.json();
        if (data["status_code"] === 0) {
          setMessage("send code success");
          setTimeout(() => {
            setMessage("");
          }, 3e3);
        } else {
          setMessage(data["msg"]);
          setTimeout(() => {
            setMessage("");
          }, 3e3);
        }
        setCountdown(30);
      }
    };
    const onRegister = async (event) => {
      event.preventDefault();
      if (registerUsername === "" || phoneNumber === "" || verificationCode === "" || registerPassword === "" || confirmPassword === "") {
        setMessage(translate("please input all info", "cn"));
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        return false;
      }
      if (registerPassword !== confirmPassword) {
        setMessage(translate("password not match", "cn"));
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        return false;
      }
      let email = "";
      const response = await fetch("http://116.177.253.43:15001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: registerUsername, password: registerPassword, phone: phoneNumber, code: verificationCode, email })
      });
      const data = await response.json();
      if (data["status_code"] === 0) {
        setMessage(translate("register success!", "cn"));
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        setTimeout(() => {
          setIsRegistering(false);
        }, 1e3);
        setRegisterUsername("");
        setPhoneNumber("");
        setVerificationCode("");
        setRegisterPassword("");
        setConfirmPassword("");
      } else {
        setMessage(data["msg"]);
        setTimeout(() => {
          setMessage("");
        }, 3e3);
      }
    };
    const [isRegistering, setIsRegistering] = (0, import_react10.useState)(false);
    const handleSubmit = (event) => {
      event.preventDefault();
      onLogin(username, password);
    };
    const [isForgotPassword, setIsForgotPassword] = (0, import_react10.useState)(false);
    const onForgotPassword = async (event) => {
      event.preventDefault();
      if (forgetphoneNumber === "" || verificationCode === "" || forgetPassword === "" || forgetConfirmPassword === "") {
        setMessage(translate("please input all info", "cn"));
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        return false;
      }
      if (registerPassword !== confirmPassword) {
        setMessage(translate("password not match", "cn"));
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        return false;
      }
      const response = await fetch("http://116.177.253.43:15001/update_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password: forgetPassword, phone: forgetphoneNumber, code: verificationCode, email: "" })
      });
      const response_data = await response.json();
      if (response_data["status_code"] === 0) {
        setMessage(translate("change password success", "cn"));
        setTimeout(() => {
          setMessage("");
        }, 3e3);
        setTimeout(() => {
          setIsForgotPassword(false);
        }, 1e3);
        setforgetPhoneNumber("");
        setVerificationCode("");
        setforgetPassword("");
        setforgetConfirmPassword("");
      } else {
        setMessage(response_data["msg"]);
      }
    };
    if (panelState == null) {
      return import_react10.default.createElement(StartChatButton, { onClick: () => sendMessage2({ type: "startChat" }) });
    }
    if (panelState?.type !== "chat") {
      throw new Error(`Invalid panel state '${panelState?.type}' (expected 'chat'))`);
    }
    if (!panelState.hasFittenAIApiKey) {
      return import_react10.default.createElement(
        "div",
        { className: "enter-api-key" },
        import_react10.default.createElement("div", { style: { height: "20px" } }, Message && import_react10.default.createElement(
          "p",
          null,
          " ",
          Message
        )),
        import_react10.default.createElement("br", null),
        import_react10.default.createElement("br", null),
        import_react10.default.createElement("br", null),
        import_react10.default.createElement("br", null),
        isRegistering ? import_react10.default.createElement(
          "form",
          { onSubmit: onRegister },
          import_react10.default.createElement(
            "label",
            null,
            translate("Username", "cn"),
            ":",
            import_react10.default.createElement("input", { type: "text", value: registerUsername, onChange: (e) => setRegisterUsername(e.target.value) })
          ),
          import_react10.default.createElement(
            "label",
            null,
            translate("Phone Number", "cn"),
            ":",
            import_react10.default.createElement("input", { type: "text", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value) })
          ),
          import_react10.default.createElement(
            "label",
            null,
            translate("Verification Code", "cn"),
            ":",
            import_react10.default.createElement(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              import_react10.default.createElement("input", { type: "text", style: { flex: 2 }, value: verificationCode, onChange: (e) => setVerificationCode(e.target.value) }),
              import_react10.default.createElement("button", { type: "button", style: { flex: 1 }, disabled: countdown > 0, onClick: onSendCode }, countdown > 0 ? translate("Send", "cn") + ` (${countdown})` : translate("Send", "cn"))
            )
          ),
          import_react10.default.createElement(
            "label",
            null,
            translate("Password", "cn"),
            ":",
            import_react10.default.createElement("input", { type: "password", value: registerPassword, onChange: (e) => setRegisterPassword(e.target.value) })
          ),
          import_react10.default.createElement(
            "label",
            null,
            translate("Confirm Password", "cn"),
            ":",
            import_react10.default.createElement("input", { type: "password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value) })
          ),
          import_react10.default.createElement(
            "label",
            null,
            import_react10.default.createElement("input", { type: "checkbox", required: true }),
            translate("I agree to the", "cn"),
            " ",
            import_react10.default.createElement("a", { href: "http://116.177.253.43:15001/privacy", target: "_blank" }, translate("Privacy Policy", "cn")),
            " ",
            translate("and", "cn"),
            " ",
            import_react10.default.createElement("a", { href: "http://116.177.253.43:15001/agreenment", target: "_blank" }, translate("User Agreement", "cn"))
          ),
          import_react10.default.createElement("button", { type: "submit" }, translate("Register", "cn")),
          import_react10.default.createElement("button", { onClick: () => setIsRegistering(false) }, translate("Back to Login", "cn"))
        ) : isForgotPassword ? import_react10.default.createElement(
          "form",
          { onSubmit: onForgotPassword },
          import_react10.default.createElement(
            "label",
            null,
            translate("Phone Number", "cn"),
            ":",
            import_react10.default.createElement("input", { type: "text", value: forgetphoneNumber, onChange: (e) => setforgetPhoneNumber(e.target.value) })
          ),
          import_react10.default.createElement(
            "label",
            null,
            translate("Verification Code", "cn"),
            ":",
            import_react10.default.createElement(
              "div",
              { style: { display: "flex", alignItems: "center" } },
              import_react10.default.createElement("input", { type: "text", style: { flex: 2 }, value: verificationCode, onChange: (e) => setVerificationCode(e.target.value) }),
              import_react10.default.createElement("button", { type: "button", style: { flex: 1 }, disabled: countdown > 0, onClick: fgonSendCode }, countdown > 0 ? translate("Send", "cn") + ` (${countdown})` : translate("Send", "cn"))
            )
          ),
          import_react10.default.createElement(
            "label",
            null,
            translate("New Password", "cn"),
            ":",
            import_react10.default.createElement("input", { type: "password", value: forgetPassword, onChange: (e) => setforgetPassword(e.target.value) })
          ),
          import_react10.default.createElement(
            "label",
            null,
            translate("Confirm Password", "cn"),
            ":",
            import_react10.default.createElement("input", { type: "password", value: forgetConfirmPassword, onChange: (e) => setforgetConfirmPassword(e.target.value) })
          ),
          import_react10.default.createElement("button", { type: "submit" }, translate("change", "cn")),
          import_react10.default.createElement("button", { onClick: () => setIsForgotPassword(false) }, translate("Back to Login", "cn"))
        ) : import_react10.default.createElement(
          "form",
          { onSubmit: handleSubmit },
          import_react10.default.createElement(
            "label",
            null,
            translate("Username or phoneNumber", "cn"),
            ":",
            import_react10.default.createElement("input", { type: "text", value: username, onChange: (e) => setUsername(e.target.value) })
          ),
          import_react10.default.createElement(
            "label",
            null,
            translate("Password", "cn"),
            ":",
            import_react10.default.createElement("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value) })
          ),
          import_react10.default.createElement("button", { type: "submit" }, translate("Login", "cn")),
          import_react10.default.createElement(
            "div",
            { style: { display: "flex", justifyContent: "space-between", marginTop: "1em" } },
            import_react10.default.createElement("a", { onClick: () => setIsForgotPassword(true) }, translate("Forgot Password", "cn")),
            import_react10.default.createElement("a", { style: { fontSize: "small" }, onClick: () => setIsRegistering(true) }, translate("Register", "cn"))
          )
        )
      );
    }
    if (panelState.conversations.length === 0) {
      return import_react10.default.createElement(StartChatButton, { onClick: () => sendMessage2({ type: "startChat" }) });
    }
    return import_react10.default.createElement("div", null, panelState.conversations.reverse().map((conversation) => panelState.selectedConversationId === conversation.id ? import_react10.default.createElement(ExpandedConversationView, { key: conversation.id, conversation, onSendMessage: (message) => sendMessage2({
      type: "sendMessage",
      data: { id: conversation.id, message }
    }), onClickRetry: () => sendMessage2({
      type: "retry",
      data: { id: conversation.id }
    }), onClickDismissError: () => sendMessage2({
      type: "dismissError",
      data: { id: conversation.id }
    }), onClickDelete: () => sendMessage2({
      type: "deleteConversation",
      data: { id: conversation.id }
    }), onClickExport: () => {
      sendMessage2({
        type: "exportConversation",
        data: { id: conversation.id }
      });
    }, onClickInsertPrompt: panelState.surfacePromptForFittenAIPlus ? () => {
      sendMessage2({
        type: "insertPromptIntoEditor",
        data: { id: conversation.id }
      });
    } : void 0 }) : import_react10.default.createElement(CollapsedConversationView, { key: conversation.id, conversation, onClick: () => sendMessage2({
      type: "clickCollapsedConversation",
      data: { id: conversation.id }
    }) })));
  };

  // build/panel/DiffPanelView.js
  var import_react12 = __toESM(require_react(), 1);

  // build/component/DiffView.js
  var import_react11 = __toESM(require_react(), 1);
  var import_react_diff_viewer_continued = __toESM(require_lib2(), 1);

  // build/vscode/VsCodeApi.js
  var vscodeApi = acquireVsCodeApi();

  // build/vscode/SendMessage.js
  var sendMessage = (message) => {
    vscodeApi.postMessage(message);
  };

  // build/component/DiffView.js
  var ReactDiffViewer = import_react_diff_viewer_continued.default.default;
  var DiffView = ({ oldCode, newCode, languageId }) => {
    const { grammar, language } = toPrismHighlightOptions(languageId);
    const { highlight } = getPrism();
    return import_react11.default.createElement(ReactDiffViewer, { oldValue: oldCode, newValue: newCode, splitView: true, showDiffOnly: true, extraLinesSurroundingDiff: 3, compareMethod: import_react_diff_viewer_continued.DiffMethod.WORDS, renderContent: (str) => {
      return import_react11.default.createElement("pre", { style: { display: "inline" }, dangerouslySetInnerHTML: {
        __html: highlight(str ?? "", grammar, language)
      } });
    }, styles: {
      variables: {
        light: {
          fontFamily: "var(--vscode-editor-font-family)",
          fontSize: "var(--vscode-editor-font-size)",
          diffViewerBackground: "var(--vscode-editor-background)",
          diffViewerColor: "var(--vscode-editor-foreground)",
          addedBackground: "var(--vscode-diffEditor-insertedLineBackground)",
          addedColor: "var(--vscode-editor-foreground)",
          wordAddedBackground: "var(--vscode-diffEditor-insertedLineBackground)",
          removedBackground: "var(--vscode-diffEditor-removedLineBackground)",
          removedColor: "var(--vscode-editor-foreground)",
          wordRemovedBackground: "var(--vscode-diffEditor-removedLineBackground)",
          highlightBackground: "var(--vscode-editor-rangeHighlightBackground)",
          highlightGutterBackground: "var(--vscode-editor-rangeHighlightBackground)",
          codeFoldGutterBackground: "var(--vscode-editorGutter-background)",
          codeFoldBackground: "var(--vscode-diffEditor-diagonalFill)",
          emptyLineBackground: "var(--vscode-editor-background)",
          gutterColor: "var(--vscode-editorLineNumber-foreground)",
          addedGutterColor: "var(--vscode-editorLineNumber-foreground)",
          removedGutterColor: "var(--vscode-editorLineNumber-foreground)",
          addedGutterBackground: "var(--vscode-editorGutter-addedBackground)",
          removedGutterBackground: "var(--vscode-editorGutter-deletedBackground)",
          gutterBackground: "var(--vscode-editorGutter-background)",
          gutterBackgroundDark: "var(--vscode-editorGutter-background)",
          codeFoldContentColor: "var(--vscode-editorGutter-foldingControlForeground)",
          diffViewerTitleBackground: "var(--vscode-editor-background)",
          diffViewerTitleColor: "var(--vscode-editor-foreground)",
          diffViewerTitleBorderColor: "var(--vscode-sideBySideEditor-horizontalBorder)"
        }
      },
      contentText: {
        fontFamily: "var(--vscode-editor-font-family) !important"
      },
      gutter: {
        borderLeft: "1px solid var(--vscode-panel-border)",
        borderRight: "1px solid var(--vscode-panel-border)",
        "> pre": {
          opacity: 1
        },
        "&:first-child": {
          borderLeft: "none"
        }
      },
      marker: {
        paddingLeft: "5px",
        paddingRight: "0px",
        "> pre": {
          display: "none"
        }
      },
      codeFoldGutter: {
        background: "var(--vscode-panel-background)"
      },
      codeFold: {
        borderTop: "1px solid var(--vscode-panel-border)",
        borderBottom: "1px solid var(--vscode-panel-border)",
        background: "var(--vscode-panel-background)",
        "&:last-child": {
          borderBottom: "none"
        },
        "&:first-child": {
          borderTop: "none"
        },
        "> td > a": {
          textDecoration: "none !important"
        }
      }
    } });
  };
  function toPrismHighlightOptions(languageId) {
    const { languages } = getPrism();
    const DEFAULT_PRISM_OPTIONS = {
      grammar: languages.text,
      language: "text"
    };
    if (!languageId) {
      return DEFAULT_PRISM_OPTIONS;
    }
    switch (languageId) {
      case "javascript":
      case "vue":
      case "coffeescript":
        return {
          grammar: languages.javascript,
          language: "javascript"
        };
      case "typescript":
        return {
          grammar: languages.typescript,
          language: "typescript"
        };
      case "javascriptreact":
        return {
          grammar: languages.jsx,
          language: "jsx"
        };
      case "typescriptreact":
        return {
          grammar: languages.tsx,
          language: "tsx"
        };
      case "json":
      case "jsonc":
        return {
          grammar: languages.json,
          language: "json"
        };
      case "markdown":
        return {
          grammar: languages.markdown,
          language: "markdown"
        };
      case "java":
        return {
          grammar: languages.java,
          language: "java"
        };
      case "html":
      case "vue-html":
      case "django-html":
        return {
          grammar: languages.html,
          language: "html"
        };
      case "xml":
        return {
          grammar: languages.xml,
          language: "xml"
        };
      case "css":
        return {
          grammar: languages.css,
          language: "css"
        };
      case "python":
        return {
          grammar: languages.python,
          language: "python"
        };
      case "powershell":
        return {
          grammar: languages.powershell,
          language: "powershell"
        };
      case "php":
        return {
          grammar: languages.php,
          language: "php"
        };
      case "go":
        return {
          grammar: languages.go,
          language: "go"
        };
      case "ruby":
        return {
          grammar: languages.ruby,
          language: "ruby"
        };
      case "rust":
        return {
          grammar: languages.rust,
          language: "rust"
        };
      case "shellscript":
        return {
          grammar: languages.bash,
          language: "bash"
        };
      case "sql":
        return {
          grammar: languages.sql,
          language: "sql"
        };
      case "twig":
        return {
          grammar: languages.twig,
          language: "twig"
        };
      case "yaml":
        return {
          grammar: languages.yaml,
          language: "yaml"
        };
      case "dockerfile": {
        return {
          grammar: languages.docker,
          language: "docker"
        };
      }
      case "csharp":
        return {
          grammar: languages.csharp,
          language: "csharp"
        };
      case "cpp":
        return {
          grammar: languages.cpp,
          language: "cpp"
        };
      case "dart":
        return {
          grammar: languages.dart,
          language: "dart"
        };
      case "haskell":
        return {
          grammar: languages.haskell,
          language: "haskell"
        };
      case "plaintext":
      case "django-txt":
      case "diff":
        return DEFAULT_PRISM_OPTIONS;
      default:
        sendMessage({
          type: "reportError",
          error: {
            title: `Unable to highlight syntax for language ${languageId}`,
            message: `We could not find a matching Prism grammar for language ${languageId}. We used the default one (${DEFAULT_PRISM_OPTIONS.language}). Please [open an issue](https://github.com/fittencode-ai/fittencode-vscode/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=Add%20syntax%20highlight%20for%20language%20%22${languageId}%22) to ask for supporting this language.`,
            level: "warning",
            disableRetry: true
          }
        });
        return DEFAULT_PRISM_OPTIONS;
    }
  }
  function getPrism() {
    if (!globalThis) {
      throw new Error("Prism should be loaded for DiffView to work");
    }
    return globalThis.Prism;
  }

  // build/panel/DiffPanelView.js
  var DiffPanelView = ({ panelState, sendMessage: sendMessage2 }) => {
    if (panelState == null) {
      return import_react12.default.createElement(import_react12.default.Fragment, null);
    }
    if (panelState.type !== "diff") {
      throw new Error(`Invalid panel state '${panelState.type}' (expected 'diff'))`);
    }
    return import_react12.default.createElement(
      import_react12.default.Fragment,
      null,
      import_react12.default.createElement(DiffView, { oldCode: panelState.oldCode, newCode: panelState.newCode, languageId: panelState.languageId }),
      import_react12.default.createElement(
        "div",
        { style: {
          padding: "var(--container-padding)",
          background: "var(--vscode-panel-background)",
          borderTop: "1px solid var(--vscode-panel-border)"
        } },
        import_react12.default.createElement("button", { onClick: () => {
          sendMessage2({
            type: "applyDiff"
          });
        } }, "Apply")
      )
    );
  };

  // build/vscode/StateManager.js
  var import_common = __toESM(require_build(), 1);
  var state = void 0;
  var updateListener = void 0;
  var loadedState = vscodeApi.getState();
  try {
    state = import_common.webviewApi.panelStateSchema.parse(loadedState);
  } catch (error) {
    console.log({
      loadedState,
      error
    });
  }
  var updateState = (newState) => {
    vscodeApi.setState(newState);
    state = newState;
    if (updateListener != null) {
      updateListener(state);
    }
  };
  window.addEventListener("message", (rawMessage) => {
    const event = import_common.webviewApi.incomingMessageSchema.parse(rawMessage);
    const message = event.data;
    if (message.type === "updateState") {
      updateState(message.state);
    }
  });
  var registerUpdateListener = (listener) => {
    updateListener = listener;
  };
  var getState = () => state;

  // build/webview.js
  var rootElement = document.getElementById("root");
  var panel = document.currentScript?.getAttribute("data-panel-id");
  var isStateReloadingEnabled = document.currentScript?.getAttribute("data-state-reloading-enabled") === "true";
  if (rootElement != void 0) {
    const reactRoot = (0, import_client.createRoot)(rootElement);
    const render = (panelState) => {
      try {
        reactRoot?.render(React13.createElement(React13.StrictMode, null, (() => {
          switch (panel) {
            case "chat":
              return React13.createElement(ChatPanelView, { sendMessage, panelState });
            case "diff":
              return React13.createElement(DiffPanelView, { sendMessage, panelState });
            default:
              return React13.createElement("div", null);
          }
        })()));
      } catch (error) {
        console.error(error);
      }
    };
    render(isStateReloadingEnabled ? getState() : void 0);
    registerUpdateListener(render);
  }
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
