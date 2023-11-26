var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/htmx.org/dist/htmx.min.js
var require_htmx_min = __commonJS((exports, module) => {
  (function(e, t) {
    if (typeof define === "function" && define.amd) {
      define([], t);
    } else if (typeof module === "object" && exports) {
      module.exports = t();
    } else {
      e.htmx = e.htmx || t();
    }
  })(typeof self !== "undefined" ? self : exports, function() {
    return function() {
      var Y = { onLoad: t, process: Dt, on: Z, off: K, trigger: fe, ajax: Cr, find: E, findAll: f, closest: d, values: function(e2, t2) {
        var r2 = or(e2, t2 || "post");
        return r2.values;
      }, remove: B, addClass: F, removeClass: n, toggleClass: V, takeClass: j, defineExtension: Ar, removeExtension: Nr, logAll: X, logNone: U, logger: null, config: { historyEnabled: true, historyCacheSize: 10, refreshOnHistoryMiss: false, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: true, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: true, allowScriptTags: true, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: false, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: false, scrollBehavior: "smooth", defaultFocusScroll: false, getCacheBusterParam: false, globalViewTransitions: false, methodsThatUseUrlParams: ["get"], selfRequestsOnly: false, scrollIntoViewOnBoost: true }, parseInterval: v, _: e, createEventSource: function(e2) {
        return new EventSource(e2, { withCredentials: true });
      }, createWebSocket: function(e2) {
        var t2 = new WebSocket(e2, []);
        t2.binaryType = Y.config.wsBinaryType;
        return t2;
      }, version: "1.9.8" };
      var r = { addTriggerHandler: St, bodyContains: oe, canAccessLocalStorage: M, findThisElement: ve, filterValues: cr, hasAttribute: o, getAttributeValue: ee, getClosestAttributeValue: re, getClosestMatch: c, getExpressionVars: wr, getHeaders: fr, getInputValues: or, getInternalData: ie, getSwapSpecification: dr, getTriggerSpecs: Ze, getTarget: ge, makeFragment: l, mergeObjects: se, makeSettleInfo: T, oobSwap: ye, querySelectorExt: le, selectAndSwap: Ue, settleImmediately: Jt, shouldCancel: tt, triggerEvent: fe, triggerErrorEvent: ue, withExtensions: C };
      var b = ["get", "post", "put", "delete", "patch"];
      var w = b.map(function(e2) {
        return "[hx-" + e2 + "], [data-hx-" + e2 + "]";
      }).join(", ");
      function v(e2) {
        if (e2 == undefined) {
          return;
        }
        if (e2.slice(-2) == "ms") {
          return parseFloat(e2.slice(0, -2)) || undefined;
        }
        if (e2.slice(-1) == "s") {
          return parseFloat(e2.slice(0, -1)) * 1000 || undefined;
        }
        if (e2.slice(-1) == "m") {
          return parseFloat(e2.slice(0, -1)) * 1000 * 60 || undefined;
        }
        return parseFloat(e2) || undefined;
      }
      function Q(e2, t2) {
        return e2.getAttribute && e2.getAttribute(t2);
      }
      function o(e2, t2) {
        return e2.hasAttribute && (e2.hasAttribute(t2) || e2.hasAttribute("data-" + t2));
      }
      function ee(e2, t2) {
        return Q(e2, t2) || Q(e2, "data-" + t2);
      }
      function u(e2) {
        return e2.parentElement;
      }
      function te() {
        return document;
      }
      function c(e2, t2) {
        while (e2 && !t2(e2)) {
          e2 = u(e2);
        }
        return e2 ? e2 : null;
      }
      function R(e2, t2, r2) {
        var n2 = ee(t2, r2);
        var i2 = ee(t2, "hx-disinherit");
        if (e2 !== t2 && i2 && (i2 === "*" || i2.split(" ").indexOf(r2) >= 0)) {
          return "unset";
        } else {
          return n2;
        }
      }
      function re(t2, r2) {
        var n2 = null;
        c(t2, function(e2) {
          return n2 = R(t2, e2, r2);
        });
        if (n2 !== "unset") {
          return n2;
        }
      }
      function h(e2, t2) {
        var r2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || e2.oMatchesSelector;
        return r2 && r2.call(e2, t2);
      }
      function q(e2) {
        var t2 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var r2 = t2.exec(e2);
        if (r2) {
          return r2[1].toLowerCase();
        } else {
          return "";
        }
      }
      function i(e2, t2) {
        var r2 = new DOMParser;
        var n2 = r2.parseFromString(e2, "text/html");
        var i2 = n2.body;
        while (t2 > 0) {
          t2--;
          i2 = i2.firstChild;
        }
        if (i2 == null) {
          i2 = te().createDocumentFragment();
        }
        return i2;
      }
      function H(e2) {
        return e2.match(/<body/);
      }
      function l(e2) {
        var t2 = !H(e2);
        if (Y.config.useTemplateFragments && t2) {
          var r2 = i("<body><template>" + e2 + "</template></body>", 0);
          return r2.querySelector("template").content;
        } else {
          var n2 = q(e2);
          switch (n2) {
            case "thead":
            case "tbody":
            case "tfoot":
            case "colgroup":
            case "caption":
              return i("<table>" + e2 + "</table>", 1);
            case "col":
              return i("<table><colgroup>" + e2 + "</colgroup></table>", 2);
            case "tr":
              return i("<table><tbody>" + e2 + "</tbody></table>", 2);
            case "td":
            case "th":
              return i("<table><tbody><tr>" + e2 + "</tr></tbody></table>", 3);
            case "script":
            case "style":
              return i("<div>" + e2 + "</div>", 1);
            default:
              return i(e2, 0);
          }
        }
      }
      function ne(e2) {
        if (e2) {
          e2();
        }
      }
      function L(e2, t2) {
        return Object.prototype.toString.call(e2) === "[object " + t2 + "]";
      }
      function A(e2) {
        return L(e2, "Function");
      }
      function N(e2) {
        return L(e2, "Object");
      }
      function ie(e2) {
        var t2 = "htmx-internal-data";
        var r2 = e2[t2];
        if (!r2) {
          r2 = e2[t2] = {};
        }
        return r2;
      }
      function I(e2) {
        var t2 = [];
        if (e2) {
          for (var r2 = 0;r2 < e2.length; r2++) {
            t2.push(e2[r2]);
          }
        }
        return t2;
      }
      function ae(e2, t2) {
        if (e2) {
          for (var r2 = 0;r2 < e2.length; r2++) {
            t2(e2[r2]);
          }
        }
      }
      function k(e2) {
        var t2 = e2.getBoundingClientRect();
        var r2 = t2.top;
        var n2 = t2.bottom;
        return r2 < window.innerHeight && n2 >= 0;
      }
      function oe(e2) {
        if (e2.getRootNode && e2.getRootNode() instanceof window.ShadowRoot) {
          return te().body.contains(e2.getRootNode().host);
        } else {
          return te().body.contains(e2);
        }
      }
      function P(e2) {
        return e2.trim().split(/\s+/);
      }
      function se(e2, t2) {
        for (var r2 in t2) {
          if (t2.hasOwnProperty(r2)) {
            e2[r2] = t2[r2];
          }
        }
        return e2;
      }
      function S(e2) {
        try {
          return JSON.parse(e2);
        } catch (e3) {
          y(e3);
          return null;
        }
      }
      function M() {
        var e2 = "htmx:localStorageTest";
        try {
          localStorage.setItem(e2, e2);
          localStorage.removeItem(e2);
          return true;
        } catch (e3) {
          return false;
        }
      }
      function D(t2) {
        try {
          var e2 = new URL(t2);
          if (e2) {
            t2 = e2.pathname + e2.search;
          }
          if (!t2.match("^/$")) {
            t2 = t2.replace(/\/+$/, "");
          }
          return t2;
        } catch (e3) {
          return t2;
        }
      }
      function e(e2) {
        return xr(te().body, function() {
          return (0, eval)(e2);
        });
      }
      function t(t2) {
        var e2 = Y.on("htmx:load", function(e3) {
          t2(e3.detail.elt);
        });
        return e2;
      }
      function X() {
        Y.logger = function(e2, t2, r2) {
          if (console) {
            console.log(t2, e2, r2);
          }
        };
      }
      function U() {
        Y.logger = null;
      }
      function E(e2, t2) {
        if (t2) {
          return e2.querySelector(t2);
        } else {
          return E(te(), e2);
        }
      }
      function f(e2, t2) {
        if (t2) {
          return e2.querySelectorAll(t2);
        } else {
          return f(te(), e2);
        }
      }
      function B(e2, t2) {
        e2 = s(e2);
        if (t2) {
          setTimeout(function() {
            B(e2);
            e2 = null;
          }, t2);
        } else {
          e2.parentElement.removeChild(e2);
        }
      }
      function F(e2, t2, r2) {
        e2 = s(e2);
        if (r2) {
          setTimeout(function() {
            F(e2, t2);
            e2 = null;
          }, r2);
        } else {
          e2.classList && e2.classList.add(t2);
        }
      }
      function n(e2, t2, r2) {
        e2 = s(e2);
        if (r2) {
          setTimeout(function() {
            n(e2, t2);
            e2 = null;
          }, r2);
        } else {
          if (e2.classList) {
            e2.classList.remove(t2);
            if (e2.classList.length === 0) {
              e2.removeAttribute("class");
            }
          }
        }
      }
      function V(e2, t2) {
        e2 = s(e2);
        e2.classList.toggle(t2);
      }
      function j(e2, t2) {
        e2 = s(e2);
        ae(e2.parentElement.children, function(e3) {
          n(e3, t2);
        });
        F(e2, t2);
      }
      function d(e2, t2) {
        e2 = s(e2);
        if (e2.closest) {
          return e2.closest(t2);
        } else {
          do {
            if (e2 == null || h(e2, t2)) {
              return e2;
            }
          } while (e2 = e2 && u(e2));
          return null;
        }
      }
      function g(e2, t2) {
        return e2.substring(0, t2.length) === t2;
      }
      function _(e2, t2) {
        return e2.substring(e2.length - t2.length) === t2;
      }
      function z(e2) {
        var t2 = e2.trim();
        if (g(t2, "<") && _(t2, "/>")) {
          return t2.substring(1, t2.length - 2);
        } else {
          return t2;
        }
      }
      function W(e2, t2) {
        if (t2.indexOf("closest ") === 0) {
          return [d(e2, z(t2.substr(8)))];
        } else if (t2.indexOf("find ") === 0) {
          return [E(e2, z(t2.substr(5)))];
        } else if (t2 === "next") {
          return [e2.nextElementSibling];
        } else if (t2.indexOf("next ") === 0) {
          return [$(e2, z(t2.substr(5)))];
        } else if (t2 === "previous") {
          return [e2.previousElementSibling];
        } else if (t2.indexOf("previous ") === 0) {
          return [G(e2, z(t2.substr(9)))];
        } else if (t2 === "document") {
          return [document];
        } else if (t2 === "window") {
          return [window];
        } else if (t2 === "body") {
          return [document.body];
        } else {
          return te().querySelectorAll(z(t2));
        }
      }
      var $ = function(e2, t2) {
        var r2 = te().querySelectorAll(t2);
        for (var n2 = 0;n2 < r2.length; n2++) {
          var i2 = r2[n2];
          if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_PRECEDING) {
            return i2;
          }
        }
      };
      var G = function(e2, t2) {
        var r2 = te().querySelectorAll(t2);
        for (var n2 = r2.length - 1;n2 >= 0; n2--) {
          var i2 = r2[n2];
          if (i2.compareDocumentPosition(e2) === Node.DOCUMENT_POSITION_FOLLOWING) {
            return i2;
          }
        }
      };
      function le(e2, t2) {
        if (t2) {
          return W(e2, t2)[0];
        } else {
          return W(te().body, e2)[0];
        }
      }
      function s(e2) {
        if (L(e2, "String")) {
          return E(e2);
        } else {
          return e2;
        }
      }
      function J(e2, t2, r2) {
        if (A(t2)) {
          return { target: te().body, event: e2, listener: t2 };
        } else {
          return { target: s(e2), event: t2, listener: r2 };
        }
      }
      function Z(t2, r2, n2) {
        Pr(function() {
          var e3 = J(t2, r2, n2);
          e3.target.addEventListener(e3.event, e3.listener);
        });
        var e2 = A(r2);
        return e2 ? r2 : n2;
      }
      function K(t2, r2, n2) {
        Pr(function() {
          var e2 = J(t2, r2, n2);
          e2.target.removeEventListener(e2.event, e2.listener);
        });
        return A(r2) ? r2 : n2;
      }
      var he = te().createElement("output");
      function de(e2, t2) {
        var r2 = re(e2, t2);
        if (r2) {
          if (r2 === "this") {
            return [ve(e2, t2)];
          } else {
            var n2 = W(e2, r2);
            if (n2.length === 0) {
              y('The selector "' + r2 + '" on ' + t2 + " returned no matches!");
              return [he];
            } else {
              return n2;
            }
          }
        }
      }
      function ve(e2, t2) {
        return c(e2, function(e3) {
          return ee(e3, t2) != null;
        });
      }
      function ge(e2) {
        var t2 = re(e2, "hx-target");
        if (t2) {
          if (t2 === "this") {
            return ve(e2, "hx-target");
          } else {
            return le(e2, t2);
          }
        } else {
          var r2 = ie(e2);
          if (r2.boosted) {
            return te().body;
          } else {
            return e2;
          }
        }
      }
      function me(e2) {
        var t2 = Y.config.attributesToSettle;
        for (var r2 = 0;r2 < t2.length; r2++) {
          if (e2 === t2[r2]) {
            return true;
          }
        }
        return false;
      }
      function pe(t2, r2) {
        ae(t2.attributes, function(e2) {
          if (!r2.hasAttribute(e2.name) && me(e2.name)) {
            t2.removeAttribute(e2.name);
          }
        });
        ae(r2.attributes, function(e2) {
          if (me(e2.name)) {
            t2.setAttribute(e2.name, e2.value);
          }
        });
      }
      function xe(e2, t2) {
        var r2 = Ir(t2);
        for (var n2 = 0;n2 < r2.length; n2++) {
          var i2 = r2[n2];
          try {
            if (i2.isInlineSwap(e2)) {
              return true;
            }
          } catch (e3) {
            y(e3);
          }
        }
        return e2 === "outerHTML";
      }
      function ye(e2, i2, a2) {
        var t2 = "#" + Q(i2, "id");
        var o2 = "outerHTML";
        if (e2 === "true") {
        } else if (e2.indexOf(":") > 0) {
          o2 = e2.substr(0, e2.indexOf(":"));
          t2 = e2.substr(e2.indexOf(":") + 1, e2.length);
        } else {
          o2 = e2;
        }
        var r2 = te().querySelectorAll(t2);
        if (r2) {
          ae(r2, function(e3) {
            var t3;
            var r3 = i2.cloneNode(true);
            t3 = te().createDocumentFragment();
            t3.appendChild(r3);
            if (!xe(o2, e3)) {
              t3 = r3;
            }
            var n2 = { shouldSwap: true, target: e3, fragment: t3 };
            if (!fe(e3, "htmx:oobBeforeSwap", n2))
              return;
            e3 = n2.target;
            if (n2["shouldSwap"]) {
              De(o2, e3, e3, t3, a2);
            }
            ae(a2.elts, function(e4) {
              fe(e4, "htmx:oobAfterSwap", n2);
            });
          });
          i2.parentNode.removeChild(i2);
        } else {
          i2.parentNode.removeChild(i2);
          ue(te().body, "htmx:oobErrorNoTarget", { content: i2 });
        }
        return e2;
      }
      function be(e2, t2, r2) {
        var n2 = re(e2, "hx-select-oob");
        if (n2) {
          var i2 = n2.split(",");
          for (let e3 = 0;e3 < i2.length; e3++) {
            var a2 = i2[e3].split(":", 2);
            var o2 = a2[0].trim();
            if (o2.indexOf("#") === 0) {
              o2 = o2.substring(1);
            }
            var s2 = a2[1] || "true";
            var l2 = t2.querySelector("#" + o2);
            if (l2) {
              ye(s2, l2, r2);
            }
          }
        }
        ae(f(t2, "[hx-swap-oob], [data-hx-swap-oob]"), function(e3) {
          var t3 = ee(e3, "hx-swap-oob");
          if (t3 != null) {
            ye(t3, e3, r2);
          }
        });
      }
      function we(e2) {
        ae(f(e2, "[hx-preserve], [data-hx-preserve]"), function(e3) {
          var t2 = ee(e3, "id");
          var r2 = te().getElementById(t2);
          if (r2 != null) {
            e3.parentNode.replaceChild(r2, e3);
          }
        });
      }
      function Se(o2, e2, s2) {
        ae(e2.querySelectorAll("[id]"), function(e3) {
          var t2 = Q(e3, "id");
          if (t2 && t2.length > 0) {
            var r2 = t2.replace("'", "\\'");
            var n2 = e3.tagName.replace(":", "\\:");
            var i2 = o2.querySelector(n2 + "[id='" + r2 + "']");
            if (i2 && i2 !== o2) {
              var a2 = e3.cloneNode();
              pe(e3, i2);
              s2.tasks.push(function() {
                pe(e3, a2);
              });
            }
          }
        });
      }
      function Ee(e2) {
        return function() {
          n(e2, Y.config.addedClass);
          Dt(e2);
          Ct(e2);
          Ce(e2);
          fe(e2, "htmx:load");
        };
      }
      function Ce(e2) {
        var t2 = "[autofocus]";
        var r2 = h(e2, t2) ? e2 : e2.querySelector(t2);
        if (r2 != null) {
          r2.focus();
        }
      }
      function a(e2, t2, r2, n2) {
        Se(e2, r2, n2);
        while (r2.childNodes.length > 0) {
          var i2 = r2.firstChild;
          F(i2, Y.config.addedClass);
          e2.insertBefore(i2, t2);
          if (i2.nodeType !== Node.TEXT_NODE && i2.nodeType !== Node.COMMENT_NODE) {
            n2.tasks.push(Ee(i2));
          }
        }
      }
      function Te(e2, t2) {
        var r2 = 0;
        while (r2 < e2.length) {
          t2 = (t2 << 5) - t2 + e2.charCodeAt(r2++) | 0;
        }
        return t2;
      }
      function Oe(e2) {
        var t2 = 0;
        if (e2.attributes) {
          for (var r2 = 0;r2 < e2.attributes.length; r2++) {
            var n2 = e2.attributes[r2];
            if (n2.value) {
              t2 = Te(n2.name, t2);
              t2 = Te(n2.value, t2);
            }
          }
        }
        return t2;
      }
      function Re(t2) {
        var r2 = ie(t2);
        if (r2.onHandlers) {
          for (let e2 = 0;e2 < r2.onHandlers.length; e2++) {
            const n2 = r2.onHandlers[e2];
            t2.removeEventListener(n2.event, n2.listener);
          }
          delete r2.onHandlers;
        }
      }
      function qe(e2) {
        var t2 = ie(e2);
        if (t2.timeout) {
          clearTimeout(t2.timeout);
        }
        if (t2.webSocket) {
          t2.webSocket.close();
        }
        if (t2.sseEventSource) {
          t2.sseEventSource.close();
        }
        if (t2.listenerInfos) {
          ae(t2.listenerInfos, function(e3) {
            if (e3.on) {
              e3.on.removeEventListener(e3.trigger, e3.listener);
            }
          });
        }
        if (t2.initHash) {
          t2.initHash = null;
        }
        Re(e2);
      }
      function m(e2) {
        fe(e2, "htmx:beforeCleanupElement");
        qe(e2);
        if (e2.children) {
          ae(e2.children, function(e3) {
            m(e3);
          });
        }
      }
      function He(t2, e2, r2) {
        if (t2.tagName === "BODY") {
          return Pe(t2, e2, r2);
        } else {
          var n2;
          var i2 = t2.previousSibling;
          a(u(t2), t2, e2, r2);
          if (i2 == null) {
            n2 = u(t2).firstChild;
          } else {
            n2 = i2.nextSibling;
          }
          ie(t2).replacedWith = n2;
          r2.elts = r2.elts.filter(function(e3) {
            return e3 != t2;
          });
          while (n2 && n2 !== t2) {
            if (n2.nodeType === Node.ELEMENT_NODE) {
              r2.elts.push(n2);
            }
            n2 = n2.nextElementSibling;
          }
          m(t2);
          u(t2).removeChild(t2);
        }
      }
      function Le(e2, t2, r2) {
        return a(e2, e2.firstChild, t2, r2);
      }
      function Ae(e2, t2, r2) {
        return a(u(e2), e2, t2, r2);
      }
      function Ne(e2, t2, r2) {
        return a(e2, null, t2, r2);
      }
      function Ie(e2, t2, r2) {
        return a(u(e2), e2.nextSibling, t2, r2);
      }
      function ke(e2, t2, r2) {
        m(e2);
        return u(e2).removeChild(e2);
      }
      function Pe(e2, t2, r2) {
        var n2 = e2.firstChild;
        a(e2, n2, t2, r2);
        if (n2) {
          while (n2.nextSibling) {
            m(n2.nextSibling);
            e2.removeChild(n2.nextSibling);
          }
          m(n2);
          e2.removeChild(n2);
        }
      }
      function Me(e2, t2, r2) {
        var n2 = r2 || re(e2, "hx-select");
        if (n2) {
          var i2 = te().createDocumentFragment();
          ae(t2.querySelectorAll(n2), function(e3) {
            i2.appendChild(e3);
          });
          t2 = i2;
        }
        return t2;
      }
      function De(e2, t2, r2, n2, i2) {
        switch (e2) {
          case "none":
            return;
          case "outerHTML":
            He(r2, n2, i2);
            return;
          case "afterbegin":
            Le(r2, n2, i2);
            return;
          case "beforebegin":
            Ae(r2, n2, i2);
            return;
          case "beforeend":
            Ne(r2, n2, i2);
            return;
          case "afterend":
            Ie(r2, n2, i2);
            return;
          case "delete":
            ke(r2, n2, i2);
            return;
          default:
            var a2 = Ir(t2);
            for (var o2 = 0;o2 < a2.length; o2++) {
              var s2 = a2[o2];
              try {
                var l2 = s2.handleSwap(e2, r2, n2, i2);
                if (l2) {
                  if (typeof l2.length !== "undefined") {
                    for (var u2 = 0;u2 < l2.length; u2++) {
                      var f2 = l2[u2];
                      if (f2.nodeType !== Node.TEXT_NODE && f2.nodeType !== Node.COMMENT_NODE) {
                        i2.tasks.push(Ee(f2));
                      }
                    }
                  }
                  return;
                }
              } catch (e3) {
                y(e3);
              }
            }
            if (e2 === "innerHTML") {
              Pe(r2, n2, i2);
            } else {
              De(Y.config.defaultSwapStyle, t2, r2, n2, i2);
            }
        }
      }
      function Xe(e2) {
        if (e2.indexOf("<title") > -1) {
          var t2 = e2.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
          var r2 = t2.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
          if (r2) {
            return r2[2];
          }
        }
      }
      function Ue(e2, t2, r2, n2, i2, a2) {
        i2.title = Xe(n2);
        var o2 = l(n2);
        if (o2) {
          be(r2, o2, i2);
          o2 = Me(r2, o2, a2);
          we(o2);
          return De(e2, r2, t2, o2, i2);
        }
      }
      function Be(e2, t2, r2) {
        var n2 = e2.getResponseHeader(t2);
        if (n2.indexOf("{") === 0) {
          var i2 = S(n2);
          for (var a2 in i2) {
            if (i2.hasOwnProperty(a2)) {
              var o2 = i2[a2];
              if (!N(o2)) {
                o2 = { value: o2 };
              }
              fe(r2, a2, o2);
            }
          }
        } else {
          var s2 = n2.split(",");
          for (var l2 = 0;l2 < s2.length; l2++) {
            fe(r2, s2[l2].trim(), []);
          }
        }
      }
      var Fe = /\s/;
      var p = /[\s,]/;
      var Ve = /[_$a-zA-Z]/;
      var je = /[_$a-zA-Z0-9]/;
      var _e = ['"', "'", "/"];
      var ze = /[^\s]/;
      function We(e2) {
        var t2 = [];
        var r2 = 0;
        while (r2 < e2.length) {
          if (Ve.exec(e2.charAt(r2))) {
            var n2 = r2;
            while (je.exec(e2.charAt(r2 + 1))) {
              r2++;
            }
            t2.push(e2.substr(n2, r2 - n2 + 1));
          } else if (_e.indexOf(e2.charAt(r2)) !== -1) {
            var i2 = e2.charAt(r2);
            var n2 = r2;
            r2++;
            while (r2 < e2.length && e2.charAt(r2) !== i2) {
              if (e2.charAt(r2) === "\\") {
                r2++;
              }
              r2++;
            }
            t2.push(e2.substr(n2, r2 - n2 + 1));
          } else {
            var a2 = e2.charAt(r2);
            t2.push(a2);
          }
          r2++;
        }
        return t2;
      }
      function $e(e2, t2, r2) {
        return Ve.exec(e2.charAt(0)) && e2 !== "true" && e2 !== "false" && e2 !== "this" && e2 !== r2 && t2 !== ".";
      }
      function Ge(e2, t2, r2) {
        if (t2[0] === "[") {
          t2.shift();
          var n2 = 1;
          var i2 = " return (function(" + r2 + "){ return (";
          var a2 = null;
          while (t2.length > 0) {
            var o2 = t2[0];
            if (o2 === "]") {
              n2--;
              if (n2 === 0) {
                if (a2 === null) {
                  i2 = i2 + "true";
                }
                t2.shift();
                i2 += ")})";
                try {
                  var s2 = xr(e2, function() {
                    return Function(i2)();
                  }, function() {
                    return true;
                  });
                  s2.source = i2;
                  return s2;
                } catch (e3) {
                  ue(te().body, "htmx:syntax:error", { error: e3, source: i2 });
                  return null;
                }
              }
            } else if (o2 === "[") {
              n2++;
            }
            if ($e(o2, a2, r2)) {
              i2 += "((" + r2 + "." + o2 + ") ? (" + r2 + "." + o2 + ") : (window." + o2 + "))";
            } else {
              i2 = i2 + o2;
            }
            a2 = t2.shift();
          }
        }
      }
      function x(e2, t2) {
        var r2 = "";
        while (e2.length > 0 && !e2[0].match(t2)) {
          r2 += e2.shift();
        }
        return r2;
      }
      var Je = "input, textarea, select";
      function Ze(e2) {
        var t2 = ee(e2, "hx-trigger");
        var r2 = [];
        if (t2) {
          var n2 = We(t2);
          do {
            x(n2, ze);
            var i2 = n2.length;
            var a2 = x(n2, /[,\[\s]/);
            if (a2 !== "") {
              if (a2 === "every") {
                var o2 = { trigger: "every" };
                x(n2, ze);
                o2.pollInterval = v(x(n2, /[,\[\s]/));
                x(n2, ze);
                var s2 = Ge(e2, n2, "event");
                if (s2) {
                  o2.eventFilter = s2;
                }
                r2.push(o2);
              } else if (a2.indexOf("sse:") === 0) {
                r2.push({ trigger: "sse", sseEvent: a2.substr(4) });
              } else {
                var l2 = { trigger: a2 };
                var s2 = Ge(e2, n2, "event");
                if (s2) {
                  l2.eventFilter = s2;
                }
                while (n2.length > 0 && n2[0] !== ",") {
                  x(n2, ze);
                  var u2 = n2.shift();
                  if (u2 === "changed") {
                    l2.changed = true;
                  } else if (u2 === "once") {
                    l2.once = true;
                  } else if (u2 === "consume") {
                    l2.consume = true;
                  } else if (u2 === "delay" && n2[0] === ":") {
                    n2.shift();
                    l2.delay = v(x(n2, p));
                  } else if (u2 === "from" && n2[0] === ":") {
                    n2.shift();
                    var f2 = x(n2, p);
                    if (f2 === "closest" || f2 === "find" || f2 === "next" || f2 === "previous") {
                      n2.shift();
                      var c2 = x(n2, p);
                      if (c2.length > 0) {
                        f2 += " " + c2;
                      }
                    }
                    l2.from = f2;
                  } else if (u2 === "target" && n2[0] === ":") {
                    n2.shift();
                    l2.target = x(n2, p);
                  } else if (u2 === "throttle" && n2[0] === ":") {
                    n2.shift();
                    l2.throttle = v(x(n2, p));
                  } else if (u2 === "queue" && n2[0] === ":") {
                    n2.shift();
                    l2.queue = x(n2, p);
                  } else if ((u2 === "root" || u2 === "threshold") && n2[0] === ":") {
                    n2.shift();
                    l2[u2] = x(n2, p);
                  } else {
                    ue(e2, "htmx:syntax:error", { token: n2.shift() });
                  }
                }
                r2.push(l2);
              }
            }
            if (n2.length === i2) {
              ue(e2, "htmx:syntax:error", { token: n2.shift() });
            }
            x(n2, ze);
          } while (n2[0] === "," && n2.shift());
        }
        if (r2.length > 0) {
          return r2;
        } else if (h(e2, "form")) {
          return [{ trigger: "submit" }];
        } else if (h(e2, 'input[type="button"], input[type="submit"]')) {
          return [{ trigger: "click" }];
        } else if (h(e2, Je)) {
          return [{ trigger: "change" }];
        } else {
          return [{ trigger: "click" }];
        }
      }
      function Ke(e2) {
        ie(e2).cancelled = true;
      }
      function Ye(e2, t2, r2) {
        var n2 = ie(e2);
        n2.timeout = setTimeout(function() {
          if (oe(e2) && n2.cancelled !== true) {
            if (!nt(r2, e2, Ut("hx:poll:trigger", { triggerSpec: r2, target: e2 }))) {
              t2(e2);
            }
            Ye(e2, t2, r2);
          }
        }, r2.pollInterval);
      }
      function Qe(e2) {
        return location.hostname === e2.hostname && Q(e2, "href") && Q(e2, "href").indexOf("#") !== 0;
      }
      function et(t2, r2, e2) {
        if (t2.tagName === "A" && Qe(t2) && (t2.target === "" || t2.target === "_self") || t2.tagName === "FORM") {
          r2.boosted = true;
          var n2, i2;
          if (t2.tagName === "A") {
            n2 = "get";
            i2 = Q(t2, "href");
          } else {
            var a2 = Q(t2, "method");
            n2 = a2 ? a2.toLowerCase() : "get";
            if (n2 === "get") {
            }
            i2 = Q(t2, "action");
          }
          e2.forEach(function(e3) {
            it(t2, function(e4, t3) {
              if (d(e4, Y.config.disableSelector)) {
                m(e4);
                return;
              }
              ce(n2, i2, e4, t3);
            }, r2, e3, true);
          });
        }
      }
      function tt(e2, t2) {
        if (e2.type === "submit" || e2.type === "click") {
          if (t2.tagName === "FORM") {
            return true;
          }
          if (h(t2, 'input[type="submit"], button') && d(t2, "form") !== null) {
            return true;
          }
          if (t2.tagName === "A" && t2.href && (t2.getAttribute("href") === "#" || t2.getAttribute("href").indexOf("#") !== 0)) {
            return true;
          }
        }
        return false;
      }
      function rt(e2, t2) {
        return ie(e2).boosted && e2.tagName === "A" && t2.type === "click" && (t2.ctrlKey || t2.metaKey);
      }
      function nt(e2, t2, r2) {
        var n2 = e2.eventFilter;
        if (n2) {
          try {
            return n2.call(t2, r2) !== true;
          } catch (e3) {
            ue(te().body, "htmx:eventFilter:error", { error: e3, source: n2.source });
            return true;
          }
        }
        return false;
      }
      function it(a2, o2, e2, s2, l2) {
        var u2 = ie(a2);
        var t2;
        if (s2.from) {
          t2 = W(a2, s2.from);
        } else {
          t2 = [a2];
        }
        if (s2.changed) {
          t2.forEach(function(e3) {
            var t3 = ie(e3);
            t3.lastValue = e3.value;
          });
        }
        ae(t2, function(n2) {
          var i2 = function(e3) {
            if (!oe(a2)) {
              n2.removeEventListener(s2.trigger, i2);
              return;
            }
            if (rt(a2, e3)) {
              return;
            }
            if (l2 || tt(e3, a2)) {
              e3.preventDefault();
            }
            if (nt(s2, a2, e3)) {
              return;
            }
            var t3 = ie(e3);
            t3.triggerSpec = s2;
            if (t3.handledFor == null) {
              t3.handledFor = [];
            }
            if (t3.handledFor.indexOf(a2) < 0) {
              t3.handledFor.push(a2);
              if (s2.consume) {
                e3.stopPropagation();
              }
              if (s2.target && e3.target) {
                if (!h(e3.target, s2.target)) {
                  return;
                }
              }
              if (s2.once) {
                if (u2.triggeredOnce) {
                  return;
                } else {
                  u2.triggeredOnce = true;
                }
              }
              if (s2.changed) {
                var r2 = ie(n2);
                if (r2.lastValue === n2.value) {
                  return;
                }
                r2.lastValue = n2.value;
              }
              if (u2.delayed) {
                clearTimeout(u2.delayed);
              }
              if (u2.throttle) {
                return;
              }
              if (s2.throttle) {
                if (!u2.throttle) {
                  o2(a2, e3);
                  u2.throttle = setTimeout(function() {
                    u2.throttle = null;
                  }, s2.throttle);
                }
              } else if (s2.delay) {
                u2.delayed = setTimeout(function() {
                  o2(a2, e3);
                }, s2.delay);
              } else {
                fe(a2, "htmx:trigger");
                o2(a2, e3);
              }
            }
          };
          if (e2.listenerInfos == null) {
            e2.listenerInfos = [];
          }
          e2.listenerInfos.push({ trigger: s2.trigger, listener: i2, on: n2 });
          n2.addEventListener(s2.trigger, i2);
        });
      }
      var at = false;
      var ot = null;
      function st() {
        if (!ot) {
          ot = function() {
            at = true;
          };
          window.addEventListener("scroll", ot);
          setInterval(function() {
            if (at) {
              at = false;
              ae(te().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e2) {
                lt(e2);
              });
            }
          }, 200);
        }
      }
      function lt(t2) {
        if (!o(t2, "data-hx-revealed") && k(t2)) {
          t2.setAttribute("data-hx-revealed", "true");
          var e2 = ie(t2);
          if (e2.initHash) {
            fe(t2, "revealed");
          } else {
            t2.addEventListener("htmx:afterProcessNode", function(e3) {
              fe(t2, "revealed");
            }, { once: true });
          }
        }
      }
      function ut(e2, t2, r2) {
        var n2 = P(r2);
        for (var i2 = 0;i2 < n2.length; i2++) {
          var a2 = n2[i2].split(/:(.+)/);
          if (a2[0] === "connect") {
            ft(e2, a2[1], 0);
          }
          if (a2[0] === "send") {
            ht(e2);
          }
        }
      }
      function ft(s2, r2, n2) {
        if (!oe(s2)) {
          return;
        }
        if (r2.indexOf("/") == 0) {
          var e2 = location.hostname + (location.port ? ":" + location.port : "");
          if (location.protocol == "https:") {
            r2 = "wss://" + e2 + r2;
          } else if (location.protocol == "http:") {
            r2 = "ws://" + e2 + r2;
          }
        }
        var t2 = Y.createWebSocket(r2);
        t2.onerror = function(e3) {
          ue(s2, "htmx:wsError", { error: e3, socket: t2 });
          ct(s2);
        };
        t2.onclose = function(e3) {
          if ([1006, 1012, 1013].indexOf(e3.code) >= 0) {
            var t3 = dt(n2);
            setTimeout(function() {
              ft(s2, r2, n2 + 1);
            }, t3);
          }
        };
        t2.onopen = function(e3) {
          n2 = 0;
        };
        ie(s2).webSocket = t2;
        t2.addEventListener("message", function(e3) {
          if (ct(s2)) {
            return;
          }
          var t3 = e3.data;
          C(s2, function(e4) {
            t3 = e4.transformResponse(t3, null, s2);
          });
          var r3 = T(s2);
          var n3 = l(t3);
          var i2 = I(n3.children);
          for (var a2 = 0;a2 < i2.length; a2++) {
            var o2 = i2[a2];
            ye(ee(o2, "hx-swap-oob") || "true", o2, r3);
          }
          Jt(r3.tasks);
        });
      }
      function ct(e2) {
        if (!oe(e2)) {
          ie(e2).webSocket.close();
          return true;
        }
      }
      function ht(u2) {
        var f2 = c(u2, function(e2) {
          return ie(e2).webSocket != null;
        });
        if (f2) {
          u2.addEventListener(Ze(u2)[0].trigger, function(e2) {
            var t2 = ie(f2).webSocket;
            var r2 = fr(u2, f2);
            var n2 = or(u2, "post");
            var i2 = n2.errors;
            var a2 = n2.values;
            var o2 = wr(u2);
            var s2 = se(a2, o2);
            var l2 = cr(s2, u2);
            l2["HEADERS"] = r2;
            if (i2 && i2.length > 0) {
              fe(u2, "htmx:validation:halted", i2);
              return;
            }
            t2.send(JSON.stringify(l2));
            if (tt(e2, u2)) {
              e2.preventDefault();
            }
          });
        } else {
          ue(u2, "htmx:noWebSocketSourceError");
        }
      }
      function dt(e2) {
        var t2 = Y.config.wsReconnectDelay;
        if (typeof t2 === "function") {
          return t2(e2);
        }
        if (t2 === "full-jitter") {
          var r2 = Math.min(e2, 6);
          var n2 = 1000 * Math.pow(2, r2);
          return n2 * Math.random();
        }
        y('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
      }
      function vt(e2, t2, r2) {
        var n2 = P(r2);
        for (var i2 = 0;i2 < n2.length; i2++) {
          var a2 = n2[i2].split(/:(.+)/);
          if (a2[0] === "connect") {
            gt(e2, a2[1]);
          }
          if (a2[0] === "swap") {
            mt(e2, a2[1]);
          }
        }
      }
      function gt(t2, e2) {
        var r2 = Y.createEventSource(e2);
        r2.onerror = function(e3) {
          ue(t2, "htmx:sseError", { error: e3, source: r2 });
          xt(t2);
        };
        ie(t2).sseEventSource = r2;
      }
      function mt(a2, o2) {
        var s2 = c(a2, yt);
        if (s2) {
          var l2 = ie(s2).sseEventSource;
          var u2 = function(e2) {
            if (xt(s2)) {
              return;
            }
            if (!oe(a2)) {
              l2.removeEventListener(o2, u2);
              return;
            }
            var t2 = e2.data;
            C(a2, function(e3) {
              t2 = e3.transformResponse(t2, null, a2);
            });
            var r2 = dr(a2);
            var n2 = ge(a2);
            var i2 = T(a2);
            Ue(r2.swapStyle, n2, a2, t2, i2);
            Jt(i2.tasks);
            fe(a2, "htmx:sseMessage", e2);
          };
          ie(a2).sseListener = u2;
          l2.addEventListener(o2, u2);
        } else {
          ue(a2, "htmx:noSSESourceError");
        }
      }
      function pt(e2, t2, r2) {
        var n2 = c(e2, yt);
        if (n2) {
          var i2 = ie(n2).sseEventSource;
          var a2 = function() {
            if (!xt(n2)) {
              if (oe(e2)) {
                t2(e2);
              } else {
                i2.removeEventListener(r2, a2);
              }
            }
          };
          ie(e2).sseListener = a2;
          i2.addEventListener(r2, a2);
        } else {
          ue(e2, "htmx:noSSESourceError");
        }
      }
      function xt(e2) {
        if (!oe(e2)) {
          ie(e2).sseEventSource.close();
          return true;
        }
      }
      function yt(e2) {
        return ie(e2).sseEventSource != null;
      }
      function bt(e2, t2, r2, n2) {
        var i2 = function() {
          if (!r2.loaded) {
            r2.loaded = true;
            t2(e2);
          }
        };
        if (n2) {
          setTimeout(i2, n2);
        } else {
          i2();
        }
      }
      function wt(t2, i2, e2) {
        var a2 = false;
        ae(b, function(r2) {
          if (o(t2, "hx-" + r2)) {
            var n2 = ee(t2, "hx-" + r2);
            a2 = true;
            i2.path = n2;
            i2.verb = r2;
            e2.forEach(function(e3) {
              St(t2, e3, i2, function(e4, t3) {
                if (d(e4, Y.config.disableSelector)) {
                  m(e4);
                  return;
                }
                ce(r2, n2, e4, t3);
              });
            });
          }
        });
        return a2;
      }
      function St(n2, e2, t2, r2) {
        if (e2.sseEvent) {
          pt(n2, r2, e2.sseEvent);
        } else if (e2.trigger === "revealed") {
          st();
          it(n2, r2, t2, e2);
          lt(n2);
        } else if (e2.trigger === "intersect") {
          var i2 = {};
          if (e2.root) {
            i2.root = le(n2, e2.root);
          }
          if (e2.threshold) {
            i2.threshold = parseFloat(e2.threshold);
          }
          var a2 = new IntersectionObserver(function(e3) {
            for (var t3 = 0;t3 < e3.length; t3++) {
              var r3 = e3[t3];
              if (r3.isIntersecting) {
                fe(n2, "intersect");
                break;
              }
            }
          }, i2);
          a2.observe(n2);
          it(n2, r2, t2, e2);
        } else if (e2.trigger === "load") {
          if (!nt(e2, n2, Ut("load", { elt: n2 }))) {
            bt(n2, r2, t2, e2.delay);
          }
        } else if (e2.pollInterval) {
          t2.polling = true;
          Ye(n2, r2, e2);
        } else {
          it(n2, r2, t2, e2);
        }
      }
      function Et(e2) {
        if (Y.config.allowScriptTags && (e2.type === "text/javascript" || e2.type === "module" || e2.type === "")) {
          var t2 = te().createElement("script");
          ae(e2.attributes, function(e3) {
            t2.setAttribute(e3.name, e3.value);
          });
          t2.textContent = e2.textContent;
          t2.async = false;
          if (Y.config.inlineScriptNonce) {
            t2.nonce = Y.config.inlineScriptNonce;
          }
          var r2 = e2.parentElement;
          try {
            r2.insertBefore(t2, e2);
          } catch (e3) {
            y(e3);
          } finally {
            if (e2.parentElement) {
              e2.parentElement.removeChild(e2);
            }
          }
        }
      }
      function Ct(e2) {
        if (h(e2, "script")) {
          Et(e2);
        }
        ae(f(e2, "script"), function(e3) {
          Et(e3);
        });
      }
      function Tt() {
        return document.querySelector("[hx-boost], [data-hx-boost]");
      }
      function Ot(e2) {
        var t2 = null;
        var r2 = [];
        if (document.evaluate) {
          var n2 = document.evaluate('//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") ]]', e2);
          while (t2 = n2.iterateNext())
            r2.push(t2);
        } else {
          var i2 = document.getElementsByTagName("*");
          for (var a2 = 0;a2 < i2.length; a2++) {
            var o2 = i2[a2].attributes;
            for (var s2 = 0;s2 < o2.length; s2++) {
              var l2 = o2[s2].name;
              if (g(l2, "hx-on:") || g(l2, "data-hx-on:")) {
                r2.push(i2[a2]);
              }
            }
          }
        }
        return r2;
      }
      function Rt(e2) {
        if (e2.querySelectorAll) {
          var t2 = Tt() ? ", a" : "";
          var r2 = e2.querySelectorAll(w + t2 + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
          return r2;
        } else {
          return [];
        }
      }
      function qt(e2) {
        var t2 = d(e2.target, "button, input[type='submit']");
        var r2 = Lt(e2);
        if (r2) {
          r2.lastButtonClicked = t2;
        }
      }
      function Ht(e2) {
        var t2 = Lt(e2);
        if (t2) {
          t2.lastButtonClicked = null;
        }
      }
      function Lt(e2) {
        var t2 = d(e2.target, "button, input[type='submit']");
        if (!t2) {
          return;
        }
        var r2 = s("#" + Q(t2, "form")) || d(t2, "form");
        if (!r2) {
          return;
        }
        return ie(r2);
      }
      function At(e2) {
        e2.addEventListener("click", qt);
        e2.addEventListener("focusin", qt);
        e2.addEventListener("focusout", Ht);
      }
      function Nt(e2) {
        var t2 = We(e2);
        var r2 = 0;
        for (let e3 = 0;e3 < t2.length; e3++) {
          const n2 = t2[e3];
          if (n2 === "{") {
            r2++;
          } else if (n2 === "}") {
            r2--;
          }
        }
        return r2;
      }
      function It(t2, e2, r2) {
        var n2 = ie(t2);
        if (!Array.isArray(n2.onHandlers)) {
          n2.onHandlers = [];
        }
        var i2;
        var a2 = function(e3) {
          return xr(t2, function() {
            if (!i2) {
              i2 = new Function("event", r2);
            }
            i2.call(t2, e3);
          });
        };
        t2.addEventListener(e2, a2);
        n2.onHandlers.push({ event: e2, listener: a2 });
      }
      function kt(e2) {
        var t2 = ee(e2, "hx-on");
        if (t2) {
          var r2 = {};
          var n2 = t2.split("\n");
          var i2 = null;
          var a2 = 0;
          while (n2.length > 0) {
            var o2 = n2.shift();
            var s2 = o2.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
            if (a2 === 0 && s2) {
              o2.split(":");
              i2 = s2[1].slice(0, -1);
              r2[i2] = s2[2];
            } else {
              r2[i2] += o2;
            }
            a2 += Nt(o2);
          }
          for (var l2 in r2) {
            It(e2, l2, r2[l2]);
          }
        }
      }
      function Pt(t2) {
        Re(t2);
        for (var e2 = 0;e2 < t2.attributes.length; e2++) {
          var r2 = t2.attributes[e2].name;
          var n2 = t2.attributes[e2].value;
          if (g(r2, "hx-on:") || g(r2, "data-hx-on:")) {
            let e3 = r2.slice(r2.indexOf(":") + 1);
            if (g(e3, ":"))
              e3 = "htmx" + e3;
            It(t2, e3, n2);
          }
        }
      }
      function Mt(t2) {
        if (d(t2, Y.config.disableSelector)) {
          m(t2);
          return;
        }
        var r2 = ie(t2);
        if (r2.initHash !== Oe(t2)) {
          qe(t2);
          r2.initHash = Oe(t2);
          kt(t2);
          fe(t2, "htmx:beforeProcessNode");
          if (t2.value) {
            r2.lastValue = t2.value;
          }
          var e2 = Ze(t2);
          var n2 = wt(t2, r2, e2);
          if (!n2) {
            if (re(t2, "hx-boost") === "true") {
              et(t2, r2, e2);
            } else if (o(t2, "hx-trigger")) {
              e2.forEach(function(e3) {
                St(t2, e3, r2, function() {
                });
              });
            }
          }
          if (t2.tagName === "FORM" || Q(t2, "type") === "submit" && o(t2, "form")) {
            At(t2);
          }
          var i2 = ee(t2, "hx-sse");
          if (i2) {
            vt(t2, r2, i2);
          }
          var a2 = ee(t2, "hx-ws");
          if (a2) {
            ut(t2, r2, a2);
          }
          fe(t2, "htmx:afterProcessNode");
        }
      }
      function Dt(e2) {
        e2 = s(e2);
        if (d(e2, Y.config.disableSelector)) {
          m(e2);
          return;
        }
        Mt(e2);
        ae(Rt(e2), function(e3) {
          Mt(e3);
        });
        ae(Ot(e2), Pt);
      }
      function Xt(e2) {
        return e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function Ut(e2, t2) {
        var r2;
        if (window.CustomEvent && typeof window.CustomEvent === "function") {
          r2 = new CustomEvent(e2, { bubbles: true, cancelable: true, detail: t2 });
        } else {
          r2 = te().createEvent("CustomEvent");
          r2.initCustomEvent(e2, true, true, t2);
        }
        return r2;
      }
      function ue(e2, t2, r2) {
        fe(e2, t2, se({ error: t2 }, r2));
      }
      function Bt(e2) {
        return e2 === "htmx:afterProcessNode";
      }
      function C(e2, t2) {
        ae(Ir(e2), function(e3) {
          try {
            t2(e3);
          } catch (e4) {
            y(e4);
          }
        });
      }
      function y(e2) {
        if (console.error) {
          console.error(e2);
        } else if (console.log) {
          console.log("ERROR: ", e2);
        }
      }
      function fe(e2, t2, r2) {
        e2 = s(e2);
        if (r2 == null) {
          r2 = {};
        }
        r2["elt"] = e2;
        var n2 = Ut(t2, r2);
        if (Y.logger && !Bt(t2)) {
          Y.logger(e2, t2, r2);
        }
        if (r2.error) {
          y(r2.error);
          fe(e2, "htmx:error", { errorInfo: r2 });
        }
        var i2 = e2.dispatchEvent(n2);
        var a2 = Xt(t2);
        if (i2 && a2 !== t2) {
          var o2 = Ut(a2, n2.detail);
          i2 = i2 && e2.dispatchEvent(o2);
        }
        C(e2, function(e3) {
          i2 = i2 && (e3.onEvent(t2, n2) !== false && !n2.defaultPrevented);
        });
        return i2;
      }
      var Ft = location.pathname + location.search;
      function Vt() {
        var e2 = te().querySelector("[hx-history-elt],[data-hx-history-elt]");
        return e2 || te().body;
      }
      function jt(e2, t2, r2, n2) {
        if (!M()) {
          return;
        }
        if (Y.config.historyCacheSize <= 0) {
          localStorage.removeItem("htmx-history-cache");
          return;
        }
        e2 = D(e2);
        var i2 = S(localStorage.getItem("htmx-history-cache")) || [];
        for (var a2 = 0;a2 < i2.length; a2++) {
          if (i2[a2].url === e2) {
            i2.splice(a2, 1);
            break;
          }
        }
        var o2 = { url: e2, content: t2, title: r2, scroll: n2 };
        fe(te().body, "htmx:historyItemCreated", { item: o2, cache: i2 });
        i2.push(o2);
        while (i2.length > Y.config.historyCacheSize) {
          i2.shift();
        }
        while (i2.length > 0) {
          try {
            localStorage.setItem("htmx-history-cache", JSON.stringify(i2));
            break;
          } catch (e3) {
            ue(te().body, "htmx:historyCacheError", { cause: e3, cache: i2 });
            i2.shift();
          }
        }
      }
      function _t(e2) {
        if (!M()) {
          return null;
        }
        e2 = D(e2);
        var t2 = S(localStorage.getItem("htmx-history-cache")) || [];
        for (var r2 = 0;r2 < t2.length; r2++) {
          if (t2[r2].url === e2) {
            return t2[r2];
          }
        }
        return null;
      }
      function zt(e2) {
        var t2 = Y.config.requestClass;
        var r2 = e2.cloneNode(true);
        ae(f(r2, "." + t2), function(e3) {
          n(e3, t2);
        });
        return r2.innerHTML;
      }
      function Wt() {
        var e2 = Vt();
        var t2 = Ft || location.pathname + location.search;
        var r2;
        try {
          r2 = te().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
        } catch (e3) {
          r2 = te().querySelector('[hx-history="false"],[data-hx-history="false"]');
        }
        if (!r2) {
          fe(te().body, "htmx:beforeHistorySave", { path: t2, historyElt: e2 });
          jt(t2, zt(e2), te().title, window.scrollY);
        }
        if (Y.config.historyEnabled)
          history.replaceState({ htmx: true }, te().title, window.location.href);
      }
      function $t(e2) {
        if (Y.config.getCacheBusterParam) {
          e2 = e2.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
          if (_(e2, "&") || _(e2, "?")) {
            e2 = e2.slice(0, -1);
          }
        }
        if (Y.config.historyEnabled) {
          history.pushState({ htmx: true }, "", e2);
        }
        Ft = e2;
      }
      function Gt(e2) {
        if (Y.config.historyEnabled)
          history.replaceState({ htmx: true }, "", e2);
        Ft = e2;
      }
      function Jt(e2) {
        ae(e2, function(e3) {
          e3.call();
        });
      }
      function Zt(a2) {
        var e2 = new XMLHttpRequest;
        var o2 = { path: a2, xhr: e2 };
        fe(te().body, "htmx:historyCacheMiss", o2);
        e2.open("GET", a2, true);
        e2.setRequestHeader("HX-History-Restore-Request", "true");
        e2.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            fe(te().body, "htmx:historyCacheMissLoad", o2);
            var e3 = l(this.response);
            e3 = e3.querySelector("[hx-history-elt],[data-hx-history-elt]") || e3;
            var t2 = Vt();
            var r2 = T(t2);
            var n2 = Xe(this.response);
            if (n2) {
              var i2 = E("title");
              if (i2) {
                i2.innerHTML = n2;
              } else {
                window.document.title = n2;
              }
            }
            Pe(t2, e3, r2);
            Jt(r2.tasks);
            Ft = a2;
            fe(te().body, "htmx:historyRestore", { path: a2, cacheMiss: true, serverResponse: this.response });
          } else {
            ue(te().body, "htmx:historyCacheMissLoadError", o2);
          }
        };
        e2.send();
      }
      function Kt(e2) {
        Wt();
        e2 = e2 || location.pathname + location.search;
        var t2 = _t(e2);
        if (t2) {
          var r2 = l(t2.content);
          var n2 = Vt();
          var i2 = T(n2);
          Pe(n2, r2, i2);
          Jt(i2.tasks);
          document.title = t2.title;
          setTimeout(function() {
            window.scrollTo(0, t2.scroll);
          }, 0);
          Ft = e2;
          fe(te().body, "htmx:historyRestore", { path: e2, item: t2 });
        } else {
          if (Y.config.refreshOnHistoryMiss) {
            window.location.reload(true);
          } else {
            Zt(e2);
          }
        }
      }
      function Yt(e2) {
        var t2 = de(e2, "hx-indicator");
        if (t2 == null) {
          t2 = [e2];
        }
        ae(t2, function(e3) {
          var t3 = ie(e3);
          t3.requestCount = (t3.requestCount || 0) + 1;
          e3.classList["add"].call(e3.classList, Y.config.requestClass);
        });
        return t2;
      }
      function Qt(e2) {
        var t2 = de(e2, "hx-disabled-elt");
        if (t2 == null) {
          t2 = [];
        }
        ae(t2, function(e3) {
          var t3 = ie(e3);
          t3.requestCount = (t3.requestCount || 0) + 1;
          e3.setAttribute("disabled", "");
        });
        return t2;
      }
      function er(e2, t2) {
        ae(e2, function(e3) {
          var t3 = ie(e3);
          t3.requestCount = (t3.requestCount || 0) - 1;
          if (t3.requestCount === 0) {
            e3.classList["remove"].call(e3.classList, Y.config.requestClass);
          }
        });
        ae(t2, function(e3) {
          var t3 = ie(e3);
          t3.requestCount = (t3.requestCount || 0) - 1;
          if (t3.requestCount === 0) {
            e3.removeAttribute("disabled");
          }
        });
      }
      function tr(e2, t2) {
        for (var r2 = 0;r2 < e2.length; r2++) {
          var n2 = e2[r2];
          if (n2.isSameNode(t2)) {
            return true;
          }
        }
        return false;
      }
      function rr(e2) {
        if (e2.name === "" || e2.name == null || e2.disabled) {
          return false;
        }
        if (e2.type === "button" || e2.type === "submit" || e2.tagName === "image" || e2.tagName === "reset" || e2.tagName === "file") {
          return false;
        }
        if (e2.type === "checkbox" || e2.type === "radio") {
          return e2.checked;
        }
        return true;
      }
      function nr(e2, t2, r2) {
        if (e2 != null && t2 != null) {
          var n2 = r2[e2];
          if (n2 === undefined) {
            r2[e2] = t2;
          } else if (Array.isArray(n2)) {
            if (Array.isArray(t2)) {
              r2[e2] = n2.concat(t2);
            } else {
              n2.push(t2);
            }
          } else {
            if (Array.isArray(t2)) {
              r2[e2] = [n2].concat(t2);
            } else {
              r2[e2] = [n2, t2];
            }
          }
        }
      }
      function ir(t2, r2, n2, e2, i2) {
        if (e2 == null || tr(t2, e2)) {
          return;
        } else {
          t2.push(e2);
        }
        if (rr(e2)) {
          var a2 = Q(e2, "name");
          var o2 = e2.value;
          if (e2.multiple && e2.tagName === "SELECT") {
            o2 = I(e2.querySelectorAll("option:checked")).map(function(e3) {
              return e3.value;
            });
          }
          if (e2.files) {
            o2 = I(e2.files);
          }
          nr(a2, o2, r2);
          if (i2) {
            ar(e2, n2);
          }
        }
        if (h(e2, "form")) {
          var s2 = e2.elements;
          ae(s2, function(e3) {
            ir(t2, r2, n2, e3, i2);
          });
        }
      }
      function ar(e2, t2) {
        if (e2.willValidate) {
          fe(e2, "htmx:validation:validate");
          if (!e2.checkValidity()) {
            t2.push({ elt: e2, message: e2.validationMessage, validity: e2.validity });
            fe(e2, "htmx:validation:failed", { message: e2.validationMessage, validity: e2.validity });
          }
        }
      }
      function or(e2, t2) {
        var r2 = [];
        var n2 = {};
        var i2 = {};
        var a2 = [];
        var o2 = ie(e2);
        if (o2.lastButtonClicked && !oe(o2.lastButtonClicked)) {
          o2.lastButtonClicked = null;
        }
        var s2 = h(e2, "form") && e2.noValidate !== true || ee(e2, "hx-validate") === "true";
        if (o2.lastButtonClicked) {
          s2 = s2 && o2.lastButtonClicked.formNoValidate !== true;
        }
        if (t2 !== "get") {
          ir(r2, i2, a2, d(e2, "form"), s2);
        }
        ir(r2, n2, a2, e2, s2);
        if (o2.lastButtonClicked || e2.tagName === "BUTTON" || e2.tagName === "INPUT" && Q(e2, "type") === "submit") {
          var l2 = o2.lastButtonClicked || e2;
          var u2 = Q(l2, "name");
          nr(u2, l2.value, i2);
        }
        var f2 = de(e2, "hx-include");
        ae(f2, function(e3) {
          ir(r2, n2, a2, e3, s2);
          if (!h(e3, "form")) {
            ae(e3.querySelectorAll(Je), function(e4) {
              ir(r2, n2, a2, e4, s2);
            });
          }
        });
        n2 = se(n2, i2);
        return { errors: a2, values: n2 };
      }
      function sr(e2, t2, r2) {
        if (e2 !== "") {
          e2 += "&";
        }
        if (String(r2) === "[object Object]") {
          r2 = JSON.stringify(r2);
        }
        var n2 = encodeURIComponent(r2);
        e2 += encodeURIComponent(t2) + "=" + n2;
        return e2;
      }
      function lr(e2) {
        var t2 = "";
        for (var r2 in e2) {
          if (e2.hasOwnProperty(r2)) {
            var n2 = e2[r2];
            if (Array.isArray(n2)) {
              ae(n2, function(e3) {
                t2 = sr(t2, r2, e3);
              });
            } else {
              t2 = sr(t2, r2, n2);
            }
          }
        }
        return t2;
      }
      function ur(e2) {
        var t2 = new FormData;
        for (var r2 in e2) {
          if (e2.hasOwnProperty(r2)) {
            var n2 = e2[r2];
            if (Array.isArray(n2)) {
              ae(n2, function(e3) {
                t2.append(r2, e3);
              });
            } else {
              t2.append(r2, n2);
            }
          }
        }
        return t2;
      }
      function fr(e2, t2, r2) {
        var n2 = { "HX-Request": "true", "HX-Trigger": Q(e2, "id"), "HX-Trigger-Name": Q(e2, "name"), "HX-Target": ee(t2, "id"), "HX-Current-URL": te().location.href };
        pr(e2, "hx-headers", false, n2);
        if (r2 !== undefined) {
          n2["HX-Prompt"] = r2;
        }
        if (ie(e2).boosted) {
          n2["HX-Boosted"] = "true";
        }
        return n2;
      }
      function cr(t2, e2) {
        var r2 = re(e2, "hx-params");
        if (r2) {
          if (r2 === "none") {
            return {};
          } else if (r2 === "*") {
            return t2;
          } else if (r2.indexOf("not ") === 0) {
            ae(r2.substr(4).split(","), function(e3) {
              e3 = e3.trim();
              delete t2[e3];
            });
            return t2;
          } else {
            var n2 = {};
            ae(r2.split(","), function(e3) {
              e3 = e3.trim();
              n2[e3] = t2[e3];
            });
            return n2;
          }
        } else {
          return t2;
        }
      }
      function hr(e2) {
        return Q(e2, "href") && Q(e2, "href").indexOf("#") >= 0;
      }
      function dr(e2, t2) {
        var r2 = t2 ? t2 : re(e2, "hx-swap");
        var n2 = { swapStyle: ie(e2).boosted ? "innerHTML" : Y.config.defaultSwapStyle, swapDelay: Y.config.defaultSwapDelay, settleDelay: Y.config.defaultSettleDelay };
        if (Y.config.scrollIntoViewOnBoost && ie(e2).boosted && !hr(e2)) {
          n2["show"] = "top";
        }
        if (r2) {
          var i2 = P(r2);
          if (i2.length > 0) {
            for (var a2 = 0;a2 < i2.length; a2++) {
              var o2 = i2[a2];
              if (o2.indexOf("swap:") === 0) {
                n2["swapDelay"] = v(o2.substr(5));
              } else if (o2.indexOf("settle:") === 0) {
                n2["settleDelay"] = v(o2.substr(7));
              } else if (o2.indexOf("transition:") === 0) {
                n2["transition"] = o2.substr(11) === "true";
              } else if (o2.indexOf("ignoreTitle:") === 0) {
                n2["ignoreTitle"] = o2.substr(12) === "true";
              } else if (o2.indexOf("scroll:") === 0) {
                var s2 = o2.substr(7);
                var l2 = s2.split(":");
                var u2 = l2.pop();
                var f2 = l2.length > 0 ? l2.join(":") : null;
                n2["scroll"] = u2;
                n2["scrollTarget"] = f2;
              } else if (o2.indexOf("show:") === 0) {
                var c2 = o2.substr(5);
                var l2 = c2.split(":");
                var h2 = l2.pop();
                var f2 = l2.length > 0 ? l2.join(":") : null;
                n2["show"] = h2;
                n2["showTarget"] = f2;
              } else if (o2.indexOf("focus-scroll:") === 0) {
                var d2 = o2.substr("focus-scroll:".length);
                n2["focusScroll"] = d2 == "true";
              } else if (a2 == 0) {
                n2["swapStyle"] = o2;
              } else {
                y("Unknown modifier in hx-swap: " + o2);
              }
            }
          }
        }
        return n2;
      }
      function vr(e2) {
        return re(e2, "hx-encoding") === "multipart/form-data" || h(e2, "form") && Q(e2, "enctype") === "multipart/form-data";
      }
      function gr(t2, r2, n2) {
        var i2 = null;
        C(r2, function(e2) {
          if (i2 == null) {
            i2 = e2.encodeParameters(t2, n2, r2);
          }
        });
        if (i2 != null) {
          return i2;
        } else {
          if (vr(r2)) {
            return ur(n2);
          } else {
            return lr(n2);
          }
        }
      }
      function T(e2) {
        return { tasks: [], elts: [e2] };
      }
      function mr(e2, t2) {
        var r2 = e2[0];
        var n2 = e2[e2.length - 1];
        if (t2.scroll) {
          var i2 = null;
          if (t2.scrollTarget) {
            i2 = le(r2, t2.scrollTarget);
          }
          if (t2.scroll === "top" && (r2 || i2)) {
            i2 = i2 || r2;
            i2.scrollTop = 0;
          }
          if (t2.scroll === "bottom" && (n2 || i2)) {
            i2 = i2 || n2;
            i2.scrollTop = i2.scrollHeight;
          }
        }
        if (t2.show) {
          var i2 = null;
          if (t2.showTarget) {
            var a2 = t2.showTarget;
            if (t2.showTarget === "window") {
              a2 = "body";
            }
            i2 = le(r2, a2);
          }
          if (t2.show === "top" && (r2 || i2)) {
            i2 = i2 || r2;
            i2.scrollIntoView({ block: "start", behavior: Y.config.scrollBehavior });
          }
          if (t2.show === "bottom" && (n2 || i2)) {
            i2 = i2 || n2;
            i2.scrollIntoView({ block: "end", behavior: Y.config.scrollBehavior });
          }
        }
      }
      function pr(e2, t2, r2, n2) {
        if (n2 == null) {
          n2 = {};
        }
        if (e2 == null) {
          return n2;
        }
        var i2 = ee(e2, t2);
        if (i2) {
          var a2 = i2.trim();
          var o2 = r2;
          if (a2 === "unset") {
            return null;
          }
          if (a2.indexOf("javascript:") === 0) {
            a2 = a2.substr(11);
            o2 = true;
          } else if (a2.indexOf("js:") === 0) {
            a2 = a2.substr(3);
            o2 = true;
          }
          if (a2.indexOf("{") !== 0) {
            a2 = "{" + a2 + "}";
          }
          var s2;
          if (o2) {
            s2 = xr(e2, function() {
              return Function("return (" + a2 + ")")();
            }, {});
          } else {
            s2 = S(a2);
          }
          for (var l2 in s2) {
            if (s2.hasOwnProperty(l2)) {
              if (n2[l2] == null) {
                n2[l2] = s2[l2];
              }
            }
          }
        }
        return pr(u(e2), t2, r2, n2);
      }
      function xr(e2, t2, r2) {
        if (Y.config.allowEval) {
          return t2();
        } else {
          ue(e2, "htmx:evalDisallowedError");
          return r2;
        }
      }
      function yr(e2, t2) {
        return pr(e2, "hx-vars", true, t2);
      }
      function br(e2, t2) {
        return pr(e2, "hx-vals", false, t2);
      }
      function wr(e2) {
        return se(yr(e2), br(e2));
      }
      function Sr(t2, r2, n2) {
        if (n2 !== null) {
          try {
            t2.setRequestHeader(r2, n2);
          } catch (e2) {
            t2.setRequestHeader(r2, encodeURIComponent(n2));
            t2.setRequestHeader(r2 + "-URI-AutoEncoded", "true");
          }
        }
      }
      function Er(t2) {
        if (t2.responseURL && typeof URL !== "undefined") {
          try {
            var e2 = new URL(t2.responseURL);
            return e2.pathname + e2.search;
          } catch (e3) {
            ue(te().body, "htmx:badResponseUrl", { url: t2.responseURL });
          }
        }
      }
      function O(e2, t2) {
        return e2.getAllResponseHeaders().match(t2);
      }
      function Cr(e2, t2, r2) {
        e2 = e2.toLowerCase();
        if (r2) {
          if (r2 instanceof Element || L(r2, "String")) {
            return ce(e2, t2, null, null, { targetOverride: s(r2), returnPromise: true });
          } else {
            return ce(e2, t2, s(r2.source), r2.event, { handler: r2.handler, headers: r2.headers, values: r2.values, targetOverride: s(r2.target), swapOverride: r2.swap, returnPromise: true });
          }
        } else {
          return ce(e2, t2, null, null, { returnPromise: true });
        }
      }
      function Tr(e2) {
        var t2 = [];
        while (e2) {
          t2.push(e2);
          e2 = e2.parentElement;
        }
        return t2;
      }
      function Or(e2, t2, r2) {
        var n2;
        var i2;
        if (typeof URL === "function") {
          i2 = new URL(t2, document.location.href);
          var a2 = document.location.origin;
          n2 = a2 === i2.origin;
        } else {
          i2 = t2;
          n2 = g(t2, document.location.origin);
        }
        if (Y.config.selfRequestsOnly) {
          if (!n2) {
            return false;
          }
        }
        return fe(e2, "htmx:validateUrl", se({ url: i2, sameHost: n2 }, r2));
      }
      function ce(t2, r2, n2, i2, a2, e2) {
        var o2 = null;
        var s2 = null;
        a2 = a2 != null ? a2 : {};
        if (a2.returnPromise && typeof Promise !== "undefined") {
          var l2 = new Promise(function(e3, t3) {
            o2 = e3;
            s2 = t3;
          });
        }
        if (n2 == null) {
          n2 = te().body;
        }
        var M2 = a2.handler || qr;
        if (!oe(n2)) {
          ne(o2);
          return l2;
        }
        var u2 = a2.targetOverride || ge(n2);
        if (u2 == null || u2 == he) {
          ue(n2, "htmx:targetError", { target: ee(n2, "hx-target") });
          ne(s2);
          return l2;
        }
        var f2 = ie(n2);
        var c2 = f2.lastButtonClicked;
        if (c2) {
          var h2 = Q(c2, "formaction");
          if (h2 != null) {
            r2 = h2;
          }
          var d2 = Q(c2, "formmethod");
          if (d2 != null) {
            if (d2.toLowerCase() !== "dialog") {
              t2 = d2;
            }
          }
        }
        var v2 = re(n2, "hx-confirm");
        if (e2 === undefined) {
          var D2 = function(e3) {
            return ce(t2, r2, n2, i2, a2, !!e3);
          };
          var X2 = { target: u2, elt: n2, path: r2, verb: t2, triggeringEvent: i2, etc: a2, issueRequest: D2, question: v2 };
          if (fe(n2, "htmx:confirm", X2) === false) {
            ne(o2);
            return l2;
          }
        }
        var g2 = n2;
        var m2 = re(n2, "hx-sync");
        var p2 = null;
        var x2 = false;
        if (m2) {
          var U2 = m2.split(":");
          var B2 = U2[0].trim();
          if (B2 === "this") {
            g2 = ve(n2, "hx-sync");
          } else {
            g2 = le(n2, B2);
          }
          m2 = (U2[1] || "drop").trim();
          f2 = ie(g2);
          if (m2 === "drop" && f2.xhr && f2.abortable !== true) {
            ne(o2);
            return l2;
          } else if (m2 === "abort") {
            if (f2.xhr) {
              ne(o2);
              return l2;
            } else {
              x2 = true;
            }
          } else if (m2 === "replace") {
            fe(g2, "htmx:abort");
          } else if (m2.indexOf("queue") === 0) {
            var F2 = m2.split(" ");
            p2 = (F2[1] || "last").trim();
          }
        }
        if (f2.xhr) {
          if (f2.abortable) {
            fe(g2, "htmx:abort");
          } else {
            if (p2 == null) {
              if (i2) {
                var y2 = ie(i2);
                if (y2 && y2.triggerSpec && y2.triggerSpec.queue) {
                  p2 = y2.triggerSpec.queue;
                }
              }
              if (p2 == null) {
                p2 = "last";
              }
            }
            if (f2.queuedRequests == null) {
              f2.queuedRequests = [];
            }
            if (p2 === "first" && f2.queuedRequests.length === 0) {
              f2.queuedRequests.push(function() {
                ce(t2, r2, n2, i2, a2);
              });
            } else if (p2 === "all") {
              f2.queuedRequests.push(function() {
                ce(t2, r2, n2, i2, a2);
              });
            } else if (p2 === "last") {
              f2.queuedRequests = [];
              f2.queuedRequests.push(function() {
                ce(t2, r2, n2, i2, a2);
              });
            }
            ne(o2);
            return l2;
          }
        }
        var b2 = new XMLHttpRequest;
        f2.xhr = b2;
        f2.abortable = x2;
        var w2 = function() {
          f2.xhr = null;
          f2.abortable = false;
          if (f2.queuedRequests != null && f2.queuedRequests.length > 0) {
            var e3 = f2.queuedRequests.shift();
            e3();
          }
        };
        var V2 = re(n2, "hx-prompt");
        if (V2) {
          var S2 = prompt(V2);
          if (S2 === null || !fe(n2, "htmx:prompt", { prompt: S2, target: u2 })) {
            ne(o2);
            w2();
            return l2;
          }
        }
        if (v2 && !e2) {
          if (!confirm(v2)) {
            ne(o2);
            w2();
            return l2;
          }
        }
        var E2 = fr(n2, u2, S2);
        if (a2.headers) {
          E2 = se(E2, a2.headers);
        }
        var j2 = or(n2, t2);
        var C2 = j2.errors;
        var T2 = j2.values;
        if (a2.values) {
          T2 = se(T2, a2.values);
        }
        var _2 = wr(n2);
        var z2 = se(T2, _2);
        var O2 = cr(z2, n2);
        if (t2 !== "get" && !vr(n2)) {
          E2["Content-Type"] = "application/x-www-form-urlencoded";
        }
        if (Y.config.getCacheBusterParam && t2 === "get") {
          O2["org.htmx.cache-buster"] = Q(u2, "id") || "true";
        }
        if (r2 == null || r2 === "") {
          r2 = te().location.href;
        }
        var R2 = pr(n2, "hx-request");
        var W2 = ie(n2).boosted;
        var q2 = Y.config.methodsThatUseUrlParams.indexOf(t2) >= 0;
        var H2 = { boosted: W2, useUrlParams: q2, parameters: O2, unfilteredParameters: z2, headers: E2, target: u2, verb: t2, errors: C2, withCredentials: a2.credentials || R2.credentials || Y.config.withCredentials, timeout: a2.timeout || R2.timeout || Y.config.timeout, path: r2, triggeringEvent: i2 };
        if (!fe(n2, "htmx:configRequest", H2)) {
          ne(o2);
          w2();
          return l2;
        }
        r2 = H2.path;
        t2 = H2.verb;
        E2 = H2.headers;
        O2 = H2.parameters;
        C2 = H2.errors;
        q2 = H2.useUrlParams;
        if (C2 && C2.length > 0) {
          fe(n2, "htmx:validation:halted", H2);
          ne(o2);
          w2();
          return l2;
        }
        var $2 = r2.split("#");
        var G2 = $2[0];
        var L2 = $2[1];
        var A2 = r2;
        if (q2) {
          A2 = G2;
          var J2 = Object.keys(O2).length !== 0;
          if (J2) {
            if (A2.indexOf("?") < 0) {
              A2 += "?";
            } else {
              A2 += "&";
            }
            A2 += lr(O2);
            if (L2) {
              A2 += "#" + L2;
            }
          }
        }
        if (!Or(n2, A2, H2)) {
          ue(n2, "htmx:invalidPath", H2);
          ne(s2);
          return l2;
        }
        b2.open(t2.toUpperCase(), A2, true);
        b2.overrideMimeType("text/html");
        b2.withCredentials = H2.withCredentials;
        b2.timeout = H2.timeout;
        if (R2.noHeaders) {
        } else {
          for (var N2 in E2) {
            if (E2.hasOwnProperty(N2)) {
              var Z2 = E2[N2];
              Sr(b2, N2, Z2);
            }
          }
        }
        var I2 = { xhr: b2, target: u2, requestConfig: H2, etc: a2, boosted: W2, pathInfo: { requestPath: r2, finalRequestPath: A2, anchor: L2 } };
        b2.onload = function() {
          try {
            var e3 = Tr(n2);
            I2.pathInfo.responsePath = Er(b2);
            M2(n2, I2);
            er(k2, P2);
            fe(n2, "htmx:afterRequest", I2);
            fe(n2, "htmx:afterOnLoad", I2);
            if (!oe(n2)) {
              var t3 = null;
              while (e3.length > 0 && t3 == null) {
                var r3 = e3.shift();
                if (oe(r3)) {
                  t3 = r3;
                }
              }
              if (t3) {
                fe(t3, "htmx:afterRequest", I2);
                fe(t3, "htmx:afterOnLoad", I2);
              }
            }
            ne(o2);
            w2();
          } catch (e4) {
            ue(n2, "htmx:onLoadError", se({ error: e4 }, I2));
            throw e4;
          }
        };
        b2.onerror = function() {
          er(k2, P2);
          ue(n2, "htmx:afterRequest", I2);
          ue(n2, "htmx:sendError", I2);
          ne(s2);
          w2();
        };
        b2.onabort = function() {
          er(k2, P2);
          ue(n2, "htmx:afterRequest", I2);
          ue(n2, "htmx:sendAbort", I2);
          ne(s2);
          w2();
        };
        b2.ontimeout = function() {
          er(k2, P2);
          ue(n2, "htmx:afterRequest", I2);
          ue(n2, "htmx:timeout", I2);
          ne(s2);
          w2();
        };
        if (!fe(n2, "htmx:beforeRequest", I2)) {
          ne(o2);
          w2();
          return l2;
        }
        var k2 = Yt(n2);
        var P2 = Qt(n2);
        ae(["loadstart", "loadend", "progress", "abort"], function(t3) {
          ae([b2, b2.upload], function(e3) {
            e3.addEventListener(t3, function(e4) {
              fe(n2, "htmx:xhr:" + t3, { lengthComputable: e4.lengthComputable, loaded: e4.loaded, total: e4.total });
            });
          });
        });
        fe(n2, "htmx:beforeSend", I2);
        var K2 = q2 ? null : gr(b2, n2, O2);
        b2.send(K2);
        return l2;
      }
      function Rr(e2, t2) {
        var r2 = t2.xhr;
        var n2 = null;
        var i2 = null;
        if (O(r2, /HX-Push:/i)) {
          n2 = r2.getResponseHeader("HX-Push");
          i2 = "push";
        } else if (O(r2, /HX-Push-Url:/i)) {
          n2 = r2.getResponseHeader("HX-Push-Url");
          i2 = "push";
        } else if (O(r2, /HX-Replace-Url:/i)) {
          n2 = r2.getResponseHeader("HX-Replace-Url");
          i2 = "replace";
        }
        if (n2) {
          if (n2 === "false") {
            return {};
          } else {
            return { type: i2, path: n2 };
          }
        }
        var a2 = t2.pathInfo.finalRequestPath;
        var o2 = t2.pathInfo.responsePath;
        var s2 = re(e2, "hx-push-url");
        var l2 = re(e2, "hx-replace-url");
        var u2 = ie(e2).boosted;
        var f2 = null;
        var c2 = null;
        if (s2) {
          f2 = "push";
          c2 = s2;
        } else if (l2) {
          f2 = "replace";
          c2 = l2;
        } else if (u2) {
          f2 = "push";
          c2 = o2 || a2;
        }
        if (c2) {
          if (c2 === "false") {
            return {};
          }
          if (c2 === "true") {
            c2 = o2 || a2;
          }
          if (t2.pathInfo.anchor && c2.indexOf("#") === -1) {
            c2 = c2 + "#" + t2.pathInfo.anchor;
          }
          return { type: f2, path: c2 };
        } else {
          return {};
        }
      }
      function qr(l2, u2) {
        var f2 = u2.xhr;
        var c2 = u2.target;
        var e2 = u2.etc;
        var t2 = u2.requestConfig;
        if (!fe(l2, "htmx:beforeOnLoad", u2))
          return;
        if (O(f2, /HX-Trigger:/i)) {
          Be(f2, "HX-Trigger", l2);
        }
        if (O(f2, /HX-Location:/i)) {
          Wt();
          var r2 = f2.getResponseHeader("HX-Location");
          var h2;
          if (r2.indexOf("{") === 0) {
            h2 = S(r2);
            r2 = h2["path"];
            delete h2["path"];
          }
          Cr("GET", r2, h2).then(function() {
            $t(r2);
          });
          return;
        }
        var n2 = O(f2, /HX-Refresh:/i) && f2.getResponseHeader("HX-Refresh") === "true";
        if (O(f2, /HX-Redirect:/i)) {
          location.href = f2.getResponseHeader("HX-Redirect");
          n2 && location.reload();
          return;
        }
        if (n2) {
          location.reload();
          return;
        }
        if (O(f2, /HX-Retarget:/i)) {
          u2.target = te().querySelector(f2.getResponseHeader("HX-Retarget"));
        }
        var d2 = Rr(l2, u2);
        var i2 = f2.status >= 200 && f2.status < 400 && f2.status !== 204;
        var v2 = f2.response;
        var a2 = f2.status >= 400;
        var g2 = Y.config.ignoreTitle;
        var o2 = se({ shouldSwap: i2, serverResponse: v2, isError: a2, ignoreTitle: g2 }, u2);
        if (!fe(c2, "htmx:beforeSwap", o2))
          return;
        c2 = o2.target;
        v2 = o2.serverResponse;
        a2 = o2.isError;
        g2 = o2.ignoreTitle;
        u2.target = c2;
        u2.failed = a2;
        u2.successful = !a2;
        if (o2.shouldSwap) {
          if (f2.status === 286) {
            Ke(l2);
          }
          C(l2, function(e3) {
            v2 = e3.transformResponse(v2, f2, l2);
          });
          if (d2.type) {
            Wt();
          }
          var s2 = e2.swapOverride;
          if (O(f2, /HX-Reswap:/i)) {
            s2 = f2.getResponseHeader("HX-Reswap");
          }
          var h2 = dr(l2, s2);
          if (h2.hasOwnProperty("ignoreTitle")) {
            g2 = h2.ignoreTitle;
          }
          c2.classList.add(Y.config.swappingClass);
          var m2 = null;
          var p2 = null;
          var x2 = function() {
            try {
              var e3 = document.activeElement;
              var t3 = {};
              try {
                t3 = { elt: e3, start: e3 ? e3.selectionStart : null, end: e3 ? e3.selectionEnd : null };
              } catch (e4) {
              }
              var r3;
              if (O(f2, /HX-Reselect:/i)) {
                r3 = f2.getResponseHeader("HX-Reselect");
              }
              var n3 = T(c2);
              Ue(h2.swapStyle, c2, l2, v2, n3, r3);
              if (t3.elt && !oe(t3.elt) && Q(t3.elt, "id")) {
                var i3 = document.getElementById(Q(t3.elt, "id"));
                var a3 = { preventScroll: h2.focusScroll !== undefined ? !h2.focusScroll : !Y.config.defaultFocusScroll };
                if (i3) {
                  if (t3.start && i3.setSelectionRange) {
                    try {
                      i3.setSelectionRange(t3.start, t3.end);
                    } catch (e4) {
                    }
                  }
                  i3.focus(a3);
                }
              }
              c2.classList.remove(Y.config.swappingClass);
              ae(n3.elts, function(e4) {
                if (e4.classList) {
                  e4.classList.add(Y.config.settlingClass);
                }
                fe(e4, "htmx:afterSwap", u2);
              });
              if (O(f2, /HX-Trigger-After-Swap:/i)) {
                var o3 = l2;
                if (!oe(l2)) {
                  o3 = te().body;
                }
                Be(f2, "HX-Trigger-After-Swap", o3);
              }
              var s3 = function() {
                ae(n3.tasks, function(e5) {
                  e5.call();
                });
                ae(n3.elts, function(e5) {
                  if (e5.classList) {
                    e5.classList.remove(Y.config.settlingClass);
                  }
                  fe(e5, "htmx:afterSettle", u2);
                });
                if (d2.type) {
                  fe(te().body, "htmx:beforeHistoryUpdate", se({ history: d2 }, u2));
                  if (d2.type === "push") {
                    $t(d2.path);
                    fe(te().body, "htmx:pushedIntoHistory", { path: d2.path });
                  } else {
                    Gt(d2.path);
                    fe(te().body, "htmx:replacedInHistory", { path: d2.path });
                  }
                }
                if (u2.pathInfo.anchor) {
                  var e4 = te().getElementById(u2.pathInfo.anchor);
                  if (e4) {
                    e4.scrollIntoView({ block: "start", behavior: "auto" });
                  }
                }
                if (n3.title && !g2) {
                  var t4 = E("title");
                  if (t4) {
                    t4.innerHTML = n3.title;
                  } else {
                    window.document.title = n3.title;
                  }
                }
                mr(n3.elts, h2);
                if (O(f2, /HX-Trigger-After-Settle:/i)) {
                  var r4 = l2;
                  if (!oe(l2)) {
                    r4 = te().body;
                  }
                  Be(f2, "HX-Trigger-After-Settle", r4);
                }
                ne(m2);
              };
              if (h2.settleDelay > 0) {
                setTimeout(s3, h2.settleDelay);
              } else {
                s3();
              }
            } catch (e4) {
              ue(l2, "htmx:swapError", u2);
              ne(p2);
              throw e4;
            }
          };
          var y2 = Y.config.globalViewTransitions;
          if (h2.hasOwnProperty("transition")) {
            y2 = h2.transition;
          }
          if (y2 && fe(l2, "htmx:beforeTransition", u2) && typeof Promise !== "undefined" && document.startViewTransition) {
            var b2 = new Promise(function(e3, t3) {
              m2 = e3;
              p2 = t3;
            });
            var w2 = x2;
            x2 = function() {
              document.startViewTransition(function() {
                w2();
                return b2;
              });
            };
          }
          if (h2.swapDelay > 0) {
            setTimeout(x2, h2.swapDelay);
          } else {
            x2();
          }
        }
        if (a2) {
          ue(l2, "htmx:responseError", se({ error: "Response Status Error Code " + f2.status + " from " + u2.pathInfo.requestPath }, u2));
        }
      }
      var Hr = {};
      function Lr() {
        return { init: function(e2) {
          return null;
        }, onEvent: function(e2, t2) {
          return true;
        }, transformResponse: function(e2, t2, r2) {
          return e2;
        }, isInlineSwap: function(e2) {
          return false;
        }, handleSwap: function(e2, t2, r2, n2) {
          return false;
        }, encodeParameters: function(e2, t2, r2) {
          return null;
        } };
      }
      function Ar(e2, t2) {
        if (t2.init) {
          t2.init(r);
        }
        Hr[e2] = se(Lr(), t2);
      }
      function Nr(e2) {
        delete Hr[e2];
      }
      function Ir(e2, r2, n2) {
        if (e2 == undefined) {
          return r2;
        }
        if (r2 == undefined) {
          r2 = [];
        }
        if (n2 == undefined) {
          n2 = [];
        }
        var t2 = ee(e2, "hx-ext");
        if (t2) {
          ae(t2.split(","), function(e3) {
            e3 = e3.replace(/ /g, "");
            if (e3.slice(0, 7) == "ignore:") {
              n2.push(e3.slice(7));
              return;
            }
            if (n2.indexOf(e3) < 0) {
              var t3 = Hr[e3];
              if (t3 && r2.indexOf(t3) < 0) {
                r2.push(t3);
              }
            }
          });
        }
        return Ir(u(e2), r2, n2);
      }
      var kr = false;
      te().addEventListener("DOMContentLoaded", function() {
        kr = true;
      });
      function Pr(e2) {
        if (kr || te().readyState === "complete") {
          e2();
        } else {
          te().addEventListener("DOMContentLoaded", e2);
        }
      }
      function Mr() {
        if (Y.config.includeIndicatorStyles !== false) {
          te().head.insertAdjacentHTML("beforeend", "<style>                      ." + Y.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + Y.config.requestClass + " ." + Y.config.indicatorClass + "{opacity:1}                      ." + Y.config.requestClass + "." + Y.config.indicatorClass + "{opacity:1}                    </style>");
        }
      }
      function Dr() {
        var e2 = te().querySelector('meta[name="htmx-config"]');
        if (e2) {
          return S(e2.content);
        } else {
          return null;
        }
      }
      function Xr() {
        var e2 = Dr();
        if (e2) {
          Y.config = se(Y.config, e2);
        }
      }
      Pr(function() {
        Xr();
        Mr();
        var e2 = te().body;
        Dt(e2);
        var t2 = te().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
        e2.addEventListener("htmx:abort", function(e3) {
          var t3 = e3.target;
          var r3 = ie(t3);
          if (r3 && r3.xhr) {
            r3.xhr.abort();
          }
        });
        var r2 = window.onpopstate;
        window.onpopstate = function(e3) {
          if (e3.state && e3.state.htmx) {
            Kt();
            ae(t2, function(e4) {
              fe(e4, "htmx:restored", { document: te(), triggerEvent: fe });
            });
          } else {
            if (r2) {
              r2(e3);
            }
          }
        };
        setTimeout(function() {
          fe(e2, "htmx:load", {});
          e2 = null;
        }, 0);
      });
      return Y;
    }();
  });
});

// frontend/src/init.js
var import_htmx = __toESM(require_htmx_min(), 1);
window.htmx = import_htmx.default;

// frontend/src/index.js
console.log("hello world");
