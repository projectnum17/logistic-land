var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_index_001 = __commonJS({
  "assets/index-e49e667c.js"(exports, module) {
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
          fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
          fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    const index = "";
    /*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
    !function(e, t) {
      "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
        if (!e2.document)
          throw new Error("jQuery requires a window with a document");
        return t(e2);
      } : t(e);
    }("undefined" != typeof window ? window : globalThis, function(C, e) {
      var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function(e2) {
        return t.flat.call(e2);
      } : function(e2) {
        return t.concat.apply([], e2);
      }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function(e2) {
        return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
      }, x = function(e2) {
        return null != e2 && e2 === e2.window;
      }, E = C.document, c = { type: true, src: true, nonce: true, noModule: true };
      function b(e2, t2, n2) {
        var r2, i2, o2 = (n2 = n2 || E).createElement("script");
        if (o2.text = e2, t2)
          for (r2 in c)
            (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
        n2.head.appendChild(o2).parentNode.removeChild(o2);
      }
      function w(e2) {
        return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[o.call(e2)] || "object" : typeof e2;
      }
      var f = "3.6.0", S = function(e2, t2) {
        return new S.fn.init(e2, t2);
      };
      function p(e2) {
        var t2 = !!e2 && "length" in e2 && e2.length, n2 = w(e2);
        return !m(e2) && !x(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
      }
      S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() {
        return s.call(this);
      }, get: function(e2) {
        return null == e2 ? s.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
      }, pushStack: function(e2) {
        var t2 = S.merge(this.constructor(), e2);
        return t2.prevObject = this, t2;
      }, each: function(e2) {
        return S.each(this, e2);
      }, map: function(n2) {
        return this.pushStack(S.map(this, function(e2, t2) {
          return n2.call(e2, t2, e2);
        }));
      }, slice: function() {
        return this.pushStack(s.apply(this, arguments));
      }, first: function() {
        return this.eq(0);
      }, last: function() {
        return this.eq(-1);
      }, even: function() {
        return this.pushStack(S.grep(this, function(e2, t2) {
          return (t2 + 1) % 2;
        }));
      }, odd: function() {
        return this.pushStack(S.grep(this, function(e2, t2) {
          return t2 % 2;
        }));
      }, eq: function(e2) {
        var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
        return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
      }, end: function() {
        return this.prevObject || this.constructor();
      }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() {
        var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
        for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || m(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++)
          if (null != (e2 = arguments[s2]))
            for (t2 in e2)
              r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (S.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || S.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = S.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
        return a2;
      }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
        throw new Error(e2);
      }, noop: function() {
      }, isPlainObject: function(e2) {
        var t2, n2;
        return !(!e2 || "[object Object]" !== o.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = v.call(t2, "constructor") && t2.constructor) && a.call(n2) === l);
      }, isEmptyObject: function(e2) {
        var t2;
        for (t2 in e2)
          return false;
        return true;
      }, globalEval: function(e2, t2, n2) {
        b(e2, { nonce: t2 && t2.nonce }, n2);
      }, each: function(e2, t2) {
        var n2, r2 = 0;
        if (p(e2)) {
          for (n2 = e2.length; r2 < n2; r2++)
            if (false === t2.call(e2[r2], r2, e2[r2]))
              break;
        } else
          for (r2 in e2)
            if (false === t2.call(e2[r2], r2, e2[r2]))
              break;
        return e2;
      }, makeArray: function(e2, t2) {
        var n2 = t2 || [];
        return null != e2 && (p(Object(e2)) ? S.merge(n2, "string" == typeof e2 ? [e2] : e2) : u.call(n2, e2)), n2;
      }, inArray: function(e2, t2, n2) {
        return null == t2 ? -1 : i.call(t2, e2, n2);
      }, merge: function(e2, t2) {
        for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++)
          e2[i2++] = t2[r2];
        return e2.length = i2, e2;
      }, grep: function(e2, t2, n2) {
        for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++)
          !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
        return r2;
      }, map: function(e2, t2, n2) {
        var r2, i2, o2 = 0, a2 = [];
        if (p(e2))
          for (r2 = e2.length; o2 < r2; o2++)
            null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
        else
          for (o2 in e2)
            null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
        return g(a2);
      }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
        n["[object " + t2 + "]"] = t2.toLowerCase();
      });
      var d = function(n2) {
        var e2, d2, b2, o2, i2, h2, f2, g2, w2, u2, l2, T2, C2, a2, E2, v2, s2, c2, y2, S2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), p2 = n2.document, k2 = 0, r2 = 0, m2 = ue2(), x2 = ue2(), A2 = ue2(), N2 = ue2(), j2 = function(e3, t3) {
          return e3 === t3 && (l2 = true), 0;
        }, D2 = {}.hasOwnProperty, t2 = [], q2 = t2.pop, L2 = t2.push, H2 = t2.push, O2 = t2.slice, P2 = function(e3, t3) {
          for (var n3 = 0, r3 = e3.length; n3 < r3; n3++)
            if (e3[n3] === t3)
              return n3;
          return -1;
        }, R2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M2 = "[\\x20\\t\\r\\n\\f]", I2 = "(?:\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W2 = "\\[" + M2 + "*(" + I2 + ")(?:" + M2 + "*([*^$|!~]?=)" + M2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + I2 + "))|)" + M2 + "*\\]", F2 = ":(" + I2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + W2 + ")*)|.*)\\)|)", B2 = new RegExp(M2 + "+", "g"), $3 = new RegExp("^" + M2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M2 + "+$", "g"), _2 = new RegExp("^" + M2 + "*," + M2 + "*"), z2 = new RegExp("^" + M2 + "*([>+~]|" + M2 + ")" + M2 + "*"), U2 = new RegExp(M2 + "|>"), X2 = new RegExp(F2), V2 = new RegExp("^" + I2 + "$"), G2 = { ID: new RegExp("^#(" + I2 + ")"), CLASS: new RegExp("^\\.(" + I2 + ")"), TAG: new RegExp("^(" + I2 + "|[*])"), ATTR: new RegExp("^" + W2), PSEUDO: new RegExp("^" + F2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M2 + "*(even|odd|(([+-]|)(\\d*)n|)" + M2 + "*(?:([+-]|)" + M2 + "*(\\d+)|))" + M2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + R2 + ")$", "i"), needsContext: new RegExp("^" + M2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M2 + "*((?:-\\d)?\\d*)" + M2 + "*\\)|)(?=[^-]|$)", "i") }, Y2 = /HTML$/i, Q2 = /^(?:input|select|textarea|button)$/i, J2 = /^h\d$/i, K2 = /^[^{]+\{\s*\[native \w/, Z2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee2 = /[+~]/, te2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\([^\\r\\n\\f])", "g"), ne2 = function(e3, t3) {
          var n3 = "0x" + e3.slice(1) - 65536;
          return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
        }, re2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie2 = function(e3, t3) {
          return t3 ? "\0" === e3 ? "�" : e3.slice(0, -1) + "\\" + e3.charCodeAt(e3.length - 1).toString(16) + " " : "\\" + e3;
        }, oe2 = function() {
          T2();
        }, ae2 = be2(function(e3) {
          return true === e3.disabled && "fieldset" === e3.nodeName.toLowerCase();
        }, { dir: "parentNode", next: "legend" });
        try {
          H2.apply(t2 = O2.call(p2.childNodes), p2.childNodes), t2[p2.childNodes.length].nodeType;
        } catch (e3) {
          H2 = { apply: t2.length ? function(e4, t3) {
            L2.apply(e4, O2.call(t3));
          } : function(e4, t3) {
            var n3 = e4.length, r3 = 0;
            while (e4[n3++] = t3[r3++])
              ;
            e4.length = n3 - 1;
          } };
        }
        function se2(t3, e3, n3, r3) {
          var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
          if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3)
            return n3;
          if (!r3 && (T2(e3), e3 = e3 || C2, E2)) {
            if (11 !== p3 && (u3 = Z2.exec(t3)))
              if (i3 = u3[1]) {
                if (9 === p3) {
                  if (!(a3 = e3.getElementById(i3)))
                    return n3;
                  if (a3.id === i3)
                    return n3.push(a3), n3;
                } else if (f3 && (a3 = f3.getElementById(i3)) && y2(e3, a3) && a3.id === i3)
                  return n3.push(a3), n3;
              } else {
                if (u3[2])
                  return H2.apply(n3, e3.getElementsByTagName(t3)), n3;
                if ((i3 = u3[3]) && d2.getElementsByClassName && e3.getElementsByClassName)
                  return H2.apply(n3, e3.getElementsByClassName(i3)), n3;
              }
            if (d2.qsa && !N2[t3 + " "] && (!v2 || !v2.test(t3)) && (1 !== p3 || "object" !== e3.nodeName.toLowerCase())) {
              if (c3 = t3, f3 = e3, 1 === p3 && (U2.test(t3) || z2.test(t3))) {
                (f3 = ee2.test(t3) && ye2(e3.parentNode) || e3) === e3 && d2.scope || ((s3 = e3.getAttribute("id")) ? s3 = s3.replace(re2, ie2) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = h2(t3)).length;
                while (o3--)
                  l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + xe2(l3[o3]);
                c3 = l3.join(",");
              }
              try {
                return H2.apply(n3, f3.querySelectorAll(c3)), n3;
              } catch (e4) {
                N2(t3, true);
              } finally {
                s3 === S2 && e3.removeAttribute("id");
              }
            }
          }
          return g2(t3.replace($3, "$1"), e3, n3, r3);
        }
        function ue2() {
          var r3 = [];
          return function e3(t3, n3) {
            return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
          };
        }
        function le2(e3) {
          return e3[S2] = true, e3;
        }
        function ce2(e3) {
          var t3 = C2.createElement("fieldset");
          try {
            return !!e3(t3);
          } catch (e4) {
            return false;
          } finally {
            t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
          }
        }
        function fe2(e3, t3) {
          var n3 = e3.split("|"), r3 = n3.length;
          while (r3--)
            b2.attrHandle[n3[r3]] = t3;
        }
        function pe2(e3, t3) {
          var n3 = t3 && e3, r3 = n3 && 1 === e3.nodeType && 1 === t3.nodeType && e3.sourceIndex - t3.sourceIndex;
          if (r3)
            return r3;
          if (n3) {
            while (n3 = n3.nextSibling)
              if (n3 === t3)
                return -1;
          }
          return e3 ? 1 : -1;
        }
        function de2(t3) {
          return function(e3) {
            return "input" === e3.nodeName.toLowerCase() && e3.type === t3;
          };
        }
        function he2(n3) {
          return function(e3) {
            var t3 = e3.nodeName.toLowerCase();
            return ("input" === t3 || "button" === t3) && e3.type === n3;
          };
        }
        function ge2(t3) {
          return function(e3) {
            return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && ae2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
          };
        }
        function ve2(a3) {
          return le2(function(o3) {
            return o3 = +o3, le2(function(e3, t3) {
              var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
              while (i3--)
                e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
            });
          });
        }
        function ye2(e3) {
          return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
        }
        for (e2 in d2 = se2.support = {}, i2 = se2.isXML = function(e3) {
          var t3 = e3 && e3.namespaceURI, n3 = e3 && (e3.ownerDocument || e3).documentElement;
          return !Y2.test(t3 || n3 && n3.nodeName || "HTML");
        }, T2 = se2.setDocument = function(e3) {
          var t3, n3, r3 = e3 ? e3.ownerDocument || e3 : p2;
          return r3 != C2 && 9 === r3.nodeType && r3.documentElement && (a2 = (C2 = r3).documentElement, E2 = !i2(C2), p2 != C2 && (n3 = C2.defaultView) && n3.top !== n3 && (n3.addEventListener ? n3.addEventListener("unload", oe2, false) : n3.attachEvent && n3.attachEvent("onunload", oe2)), d2.scope = ce2(function(e4) {
            return a2.appendChild(e4).appendChild(C2.createElement("div")), "undefined" != typeof e4.querySelectorAll && !e4.querySelectorAll(":scope fieldset div").length;
          }), d2.attributes = ce2(function(e4) {
            return e4.className = "i", !e4.getAttribute("className");
          }), d2.getElementsByTagName = ce2(function(e4) {
            return e4.appendChild(C2.createComment("")), !e4.getElementsByTagName("*").length;
          }), d2.getElementsByClassName = K2.test(C2.getElementsByClassName), d2.getById = ce2(function(e4) {
            return a2.appendChild(e4).id = S2, !C2.getElementsByName || !C2.getElementsByName(S2).length;
          }), d2.getById ? (b2.filter.ID = function(e4) {
            var t4 = e4.replace(te2, ne2);
            return function(e5) {
              return e5.getAttribute("id") === t4;
            };
          }, b2.find.ID = function(e4, t4) {
            if ("undefined" != typeof t4.getElementById && E2) {
              var n4 = t4.getElementById(e4);
              return n4 ? [n4] : [];
            }
          }) : (b2.filter.ID = function(e4) {
            var n4 = e4.replace(te2, ne2);
            return function(e5) {
              var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
              return t4 && t4.value === n4;
            };
          }, b2.find.ID = function(e4, t4) {
            if ("undefined" != typeof t4.getElementById && E2) {
              var n4, r4, i3, o3 = t4.getElementById(e4);
              if (o3) {
                if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                  return [o3];
                i3 = t4.getElementsByName(e4), r4 = 0;
                while (o3 = i3[r4++])
                  if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                    return [o3];
              }
              return [];
            }
          }), b2.find.TAG = d2.getElementsByTagName ? function(e4, t4) {
            return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : d2.qsa ? t4.querySelectorAll(e4) : void 0;
          } : function(e4, t4) {
            var n4, r4 = [], i3 = 0, o3 = t4.getElementsByTagName(e4);
            if ("*" === e4) {
              while (n4 = o3[i3++])
                1 === n4.nodeType && r4.push(n4);
              return r4;
            }
            return o3;
          }, b2.find.CLASS = d2.getElementsByClassName && function(e4, t4) {
            if ("undefined" != typeof t4.getElementsByClassName && E2)
              return t4.getElementsByClassName(e4);
          }, s2 = [], v2 = [], (d2.qsa = K2.test(C2.querySelectorAll)) && (ce2(function(e4) {
            var t4;
            a2.appendChild(e4).innerHTML = "<a id='" + S2 + "'></a><select id='" + S2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e4.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + M2 + `*(?:''|"")`), e4.querySelectorAll("[selected]").length || v2.push("\\[" + M2 + "*(?:value|" + R2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || v2.push("~="), (t4 = C2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || v2.push("\\[" + M2 + "*name" + M2 + "*=" + M2 + `*(?:''|"")`), e4.querySelectorAll(":checked").length || v2.push(":checked"), e4.querySelectorAll("a#" + S2 + "+*").length || v2.push(".#.+[+~]"), e4.querySelectorAll("\\\f"), v2.push("[\\r\\n\\f]");
          }), ce2(function(e4) {
            e4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t4 = C2.createElement("input");
            t4.setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), e4.querySelectorAll("[name=d]").length && v2.push("name" + M2 + "*[*^$|!~]?="), 2 !== e4.querySelectorAll(":enabled").length && v2.push(":enabled", ":disabled"), a2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && v2.push(":enabled", ":disabled"), e4.querySelectorAll("*,:x"), v2.push(",.*:");
          })), (d2.matchesSelector = K2.test(c2 = a2.matches || a2.webkitMatchesSelector || a2.mozMatchesSelector || a2.oMatchesSelector || a2.msMatchesSelector)) && ce2(function(e4) {
            d2.disconnectedMatch = c2.call(e4, "*"), c2.call(e4, "[s!='']:x"), s2.push("!=", F2);
          }), v2 = v2.length && new RegExp(v2.join("|")), s2 = s2.length && new RegExp(s2.join("|")), t3 = K2.test(a2.compareDocumentPosition), y2 = t3 || K2.test(a2.contains) ? function(e4, t4) {
            var n4 = 9 === e4.nodeType ? e4.documentElement : e4, r4 = t4 && t4.parentNode;
            return e4 === r4 || !(!r4 || 1 !== r4.nodeType || !(n4.contains ? n4.contains(r4) : e4.compareDocumentPosition && 16 & e4.compareDocumentPosition(r4)));
          } : function(e4, t4) {
            if (t4) {
              while (t4 = t4.parentNode)
                if (t4 === e4)
                  return true;
            }
            return false;
          }, j2 = t3 ? function(e4, t4) {
            if (e4 === t4)
              return l2 = true, 0;
            var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
            return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !d2.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 == C2 || e4.ownerDocument == p2 && y2(p2, e4) ? -1 : t4 == C2 || t4.ownerDocument == p2 && y2(p2, t4) ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0 : 4 & n4 ? -1 : 1);
          } : function(e4, t4) {
            if (e4 === t4)
              return l2 = true, 0;
            var n4, r4 = 0, i3 = e4.parentNode, o3 = t4.parentNode, a3 = [e4], s3 = [t4];
            if (!i3 || !o3)
              return e4 == C2 ? -1 : t4 == C2 ? 1 : i3 ? -1 : o3 ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0;
            if (i3 === o3)
              return pe2(e4, t4);
            n4 = e4;
            while (n4 = n4.parentNode)
              a3.unshift(n4);
            n4 = t4;
            while (n4 = n4.parentNode)
              s3.unshift(n4);
            while (a3[r4] === s3[r4])
              r4++;
            return r4 ? pe2(a3[r4], s3[r4]) : a3[r4] == p2 ? -1 : s3[r4] == p2 ? 1 : 0;
          }), C2;
        }, se2.matches = function(e3, t3) {
          return se2(e3, null, null, t3);
        }, se2.matchesSelector = function(e3, t3) {
          if (T2(e3), d2.matchesSelector && E2 && !N2[t3 + " "] && (!s2 || !s2.test(t3)) && (!v2 || !v2.test(t3)))
            try {
              var n3 = c2.call(e3, t3);
              if (n3 || d2.disconnectedMatch || e3.document && 11 !== e3.document.nodeType)
                return n3;
            } catch (e4) {
              N2(t3, true);
            }
          return 0 < se2(t3, C2, null, [e3]).length;
        }, se2.contains = function(e3, t3) {
          return (e3.ownerDocument || e3) != C2 && T2(e3), y2(e3, t3);
        }, se2.attr = function(e3, t3) {
          (e3.ownerDocument || e3) != C2 && T2(e3);
          var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && D2.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !E2) : void 0;
          return void 0 !== r3 ? r3 : d2.attributes || !E2 ? e3.getAttribute(t3) : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
        }, se2.escape = function(e3) {
          return (e3 + "").replace(re2, ie2);
        }, se2.error = function(e3) {
          throw new Error("Syntax error, unrecognized expression: " + e3);
        }, se2.uniqueSort = function(e3) {
          var t3, n3 = [], r3 = 0, i3 = 0;
          if (l2 = !d2.detectDuplicates, u2 = !d2.sortStable && e3.slice(0), e3.sort(j2), l2) {
            while (t3 = e3[i3++])
              t3 === e3[i3] && (r3 = n3.push(i3));
            while (r3--)
              e3.splice(n3[r3], 1);
          }
          return u2 = null, e3;
        }, o2 = se2.getText = function(e3) {
          var t3, n3 = "", r3 = 0, i3 = e3.nodeType;
          if (i3) {
            if (1 === i3 || 9 === i3 || 11 === i3) {
              if ("string" == typeof e3.textContent)
                return e3.textContent;
              for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
                n3 += o2(e3);
            } else if (3 === i3 || 4 === i3)
              return e3.nodeValue;
          } else
            while (t3 = e3[r3++])
              n3 += o2(t3);
          return n3;
        }, (b2 = se2.selectors = { cacheLength: 50, createPseudo: le2, match: G2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
          return e3[1] = e3[1].replace(te2, ne2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(te2, ne2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
        }, CHILD: function(e3) {
          return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || se2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && se2.error(e3[0]), e3;
        }, PSEUDO: function(e3) {
          var t3, n3 = !e3[6] && e3[2];
          return G2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && X2.test(n3) && (t3 = h2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
        } }, filter: { TAG: function(e3) {
          var t3 = e3.replace(te2, ne2).toLowerCase();
          return "*" === e3 ? function() {
            return true;
          } : function(e4) {
            return e4.nodeName && e4.nodeName.toLowerCase() === t3;
          };
        }, CLASS: function(e3) {
          var t3 = m2[e3 + " "];
          return t3 || (t3 = new RegExp("(^|" + M2 + ")" + e3 + "(" + M2 + "|$)")) && m2(e3, function(e4) {
            return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
          });
        }, ATTR: function(n3, r3, i3) {
          return function(e3) {
            var t3 = se2.attr(e3, n3);
            return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(B2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
          };
        }, CHILD: function(h3, e3, t3, g3, v3) {
          var y3 = "nth" !== h3.slice(0, 3), m3 = "last" !== h3.slice(-4), x3 = "of-type" === e3;
          return 1 === g3 && 0 === v3 ? function(e4) {
            return !!e4.parentNode;
          } : function(e4, t4, n3) {
            var r3, i3, o3, a3, s3, u3, l3 = y3 !== m3 ? "nextSibling" : "previousSibling", c3 = e4.parentNode, f3 = x3 && e4.nodeName.toLowerCase(), p3 = !n3 && !x3, d3 = false;
            if (c3) {
              if (y3) {
                while (l3) {
                  a3 = e4;
                  while (a3 = a3[l3])
                    if (x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType)
                      return false;
                  u3 = l3 = "only" === h3 && !u3 && "nextSibling";
                }
                return true;
              }
              if (u3 = [m3 ? c3.firstChild : c3.lastChild], m3 && p3) {
                d3 = (s3 = (r3 = (i3 = (o3 = (a3 = c3)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]) && r3[2], a3 = s3 && c3.childNodes[s3];
                while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop())
                  if (1 === a3.nodeType && ++d3 && a3 === e4) {
                    i3[h3] = [k2, s3, d3];
                    break;
                  }
              } else if (p3 && (d3 = s3 = (r3 = (i3 = (o3 = (a3 = e4)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]), false === d3) {
                while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop())
                  if ((x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType) && ++d3 && (p3 && ((i3 = (o3 = a3[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] = [k2, d3]), a3 === e4))
                    break;
              }
              return (d3 -= v3) === g3 || d3 % g3 == 0 && 0 <= d3 / g3;
            }
          };
        }, PSEUDO: function(e3, o3) {
          var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || se2.error("unsupported pseudo: " + e3);
          return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? le2(function(e4, t4) {
            var n3, r3 = a3(e4, o3), i3 = r3.length;
            while (i3--)
              e4[n3 = P2(e4, r3[i3])] = !(t4[n3] = r3[i3]);
          }) : function(e4) {
            return a3(e4, 0, t3);
          }) : a3;
        } }, pseudos: { not: le2(function(e3) {
          var r3 = [], i3 = [], s3 = f2(e3.replace($3, "$1"));
          return s3[S2] ? le2(function(e4, t3, n3, r4) {
            var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
            while (a3--)
              (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
          }) : function(e4, t3, n3) {
            return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
          };
        }), has: le2(function(t3) {
          return function(e3) {
            return 0 < se2(t3, e3).length;
          };
        }), contains: le2(function(t3) {
          return t3 = t3.replace(te2, ne2), function(e3) {
            return -1 < (e3.textContent || o2(e3)).indexOf(t3);
          };
        }), lang: le2(function(n3) {
          return V2.test(n3 || "") || se2.error("unsupported lang: " + n3), n3 = n3.replace(te2, ne2).toLowerCase(), function(e3) {
            var t3;
            do {
              if (t3 = E2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang"))
                return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
            } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
            return false;
          };
        }), target: function(e3) {
          var t3 = n2.location && n2.location.hash;
          return t3 && t3.slice(1) === e3.id;
        }, root: function(e3) {
          return e3 === a2;
        }, focus: function(e3) {
          return e3 === C2.activeElement && (!C2.hasFocus || C2.hasFocus()) && !!(e3.type || e3.href || ~e3.tabIndex);
        }, enabled: ge2(false), disabled: ge2(true), checked: function(e3) {
          var t3 = e3.nodeName.toLowerCase();
          return "input" === t3 && !!e3.checked || "option" === t3 && !!e3.selected;
        }, selected: function(e3) {
          return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
        }, empty: function(e3) {
          for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
            if (e3.nodeType < 6)
              return false;
          return true;
        }, parent: function(e3) {
          return !b2.pseudos.empty(e3);
        }, header: function(e3) {
          return J2.test(e3.nodeName);
        }, input: function(e3) {
          return Q2.test(e3.nodeName);
        }, button: function(e3) {
          var t3 = e3.nodeName.toLowerCase();
          return "input" === t3 && "button" === e3.type || "button" === t3;
        }, text: function(e3) {
          var t3;
          return "input" === e3.nodeName.toLowerCase() && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
        }, first: ve2(function() {
          return [0];
        }), last: ve2(function(e3, t3) {
          return [t3 - 1];
        }), eq: ve2(function(e3, t3, n3) {
          return [n3 < 0 ? n3 + t3 : n3];
        }), even: ve2(function(e3, t3) {
          for (var n3 = 0; n3 < t3; n3 += 2)
            e3.push(n3);
          return e3;
        }), odd: ve2(function(e3, t3) {
          for (var n3 = 1; n3 < t3; n3 += 2)
            e3.push(n3);
          return e3;
        }), lt: ve2(function(e3, t3, n3) {
          for (var r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; )
            e3.push(r3);
          return e3;
        }), gt: ve2(function(e3, t3, n3) {
          for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; )
            e3.push(r3);
          return e3;
        }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
          b2.pseudos[e2] = de2(e2);
        for (e2 in { submit: true, reset: true })
          b2.pseudos[e2] = he2(e2);
        function me2() {
        }
        function xe2(e3) {
          for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++)
            r3 += e3[t3].value;
          return r3;
        }
        function be2(s3, e3, t3) {
          var u3 = e3.dir, l3 = e3.next, c3 = l3 || u3, f3 = t3 && "parentNode" === c3, p3 = r2++;
          return e3.first ? function(e4, t4, n3) {
            while (e4 = e4[u3])
              if (1 === e4.nodeType || f3)
                return s3(e4, t4, n3);
            return false;
          } : function(e4, t4, n3) {
            var r3, i3, o3, a3 = [k2, p3];
            if (n3) {
              while (e4 = e4[u3])
                if ((1 === e4.nodeType || f3) && s3(e4, t4, n3))
                  return true;
            } else
              while (e4 = e4[u3])
                if (1 === e4.nodeType || f3)
                  if (i3 = (o3 = e4[S2] || (e4[S2] = {}))[e4.uniqueID] || (o3[e4.uniqueID] = {}), l3 && l3 === e4.nodeName.toLowerCase())
                    e4 = e4[u3] || e4;
                  else {
                    if ((r3 = i3[c3]) && r3[0] === k2 && r3[1] === p3)
                      return a3[2] = r3[2];
                    if ((i3[c3] = a3)[2] = s3(e4, t4, n3))
                      return true;
                  }
            return false;
          };
        }
        function we2(i3) {
          return 1 < i3.length ? function(e3, t3, n3) {
            var r3 = i3.length;
            while (r3--)
              if (!i3[r3](e3, t3, n3))
                return false;
            return true;
          } : i3[0];
        }
        function Te2(e3, t3, n3, r3, i3) {
          for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++)
            (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
          return a3;
        }
        function Ce2(d3, h3, g3, v3, y3, e3) {
          return v3 && !v3[S2] && (v3 = Ce2(v3)), y3 && !y3[S2] && (y3 = Ce2(y3, e3)), le2(function(e4, t3, n3, r3) {
            var i3, o3, a3, s3 = [], u3 = [], l3 = t3.length, c3 = e4 || function(e5, t4, n4) {
              for (var r4 = 0, i4 = t4.length; r4 < i4; r4++)
                se2(e5, t4[r4], n4);
              return n4;
            }(h3 || "*", n3.nodeType ? [n3] : n3, []), f3 = !d3 || !e4 && h3 ? c3 : Te2(c3, s3, d3, n3, r3), p3 = g3 ? y3 || (e4 ? d3 : l3 || v3) ? [] : t3 : f3;
            if (g3 && g3(f3, p3, n3, r3), v3) {
              i3 = Te2(p3, u3), v3(i3, [], n3, r3), o3 = i3.length;
              while (o3--)
                (a3 = i3[o3]) && (p3[u3[o3]] = !(f3[u3[o3]] = a3));
            }
            if (e4) {
              if (y3 || d3) {
                if (y3) {
                  i3 = [], o3 = p3.length;
                  while (o3--)
                    (a3 = p3[o3]) && i3.push(f3[o3] = a3);
                  y3(null, p3 = [], i3, r3);
                }
                o3 = p3.length;
                while (o3--)
                  (a3 = p3[o3]) && -1 < (i3 = y3 ? P2(e4, a3) : s3[o3]) && (e4[i3] = !(t3[i3] = a3));
              }
            } else
              p3 = Te2(p3 === t3 ? p3.splice(l3, p3.length) : p3), y3 ? y3(null, t3, p3, r3) : H2.apply(t3, p3);
          });
        }
        function Ee2(e3) {
          for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = be2(function(e4) {
            return e4 === i3;
          }, a3, true), l3 = be2(function(e4) {
            return -1 < P2(i3, e4);
          }, a3, true), c3 = [function(e4, t4, n4) {
            var r4 = !o3 && (n4 || t4 !== w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
            return i3 = null, r4;
          }]; s3 < r3; s3++)
            if (t3 = b2.relative[e3[s3].type])
              c3 = [be2(we2(c3), t3)];
            else {
              if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
                for (n3 = ++s3; n3 < r3; n3++)
                  if (b2.relative[e3[n3].type])
                    break;
                return Ce2(1 < s3 && we2(c3), 1 < s3 && xe2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace($3, "$1"), t3, s3 < n3 && Ee2(e3.slice(s3, n3)), n3 < r3 && Ee2(e3 = e3.slice(n3)), n3 < r3 && xe2(e3));
              }
              c3.push(t3);
            }
          return we2(c3);
        }
        return me2.prototype = b2.filters = b2.pseudos, b2.setFilters = new me2(), h2 = se2.tokenize = function(e3, t3) {
          var n3, r3, i3, o3, a3, s3, u3, l3 = x2[e3 + " "];
          if (l3)
            return t3 ? 0 : l3.slice(0);
          a3 = e3, s3 = [], u3 = b2.preFilter;
          while (a3) {
            for (o3 in n3 && !(r3 = _2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = z2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace($3, " ") }), a3 = a3.slice(n3.length)), b2.filter)
              !(r3 = G2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
            if (!n3)
              break;
          }
          return t3 ? a3.length : a3 ? se2.error(e3) : x2(e3, s3).slice(0);
        }, f2 = se2.compile = function(e3, t3) {
          var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = A2[e3 + " "];
          if (!a3) {
            t3 || (t3 = h2(e3)), n3 = t3.length;
            while (n3--)
              (a3 = Ee2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
            (a3 = A2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
              var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = k2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
              for (i4 && (w2 = t4 == C2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
                if (x3 && o4) {
                  a4 = 0, t4 || o4.ownerDocument == C2 || (T2(o4), n4 = !E2);
                  while (s3 = v3[a4++])
                    if (s3(o4, t4 || C2, n4)) {
                      r4.push(o4);
                      break;
                    }
                  i4 && (k2 = h3);
                }
                m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
              }
              if (u3 += l3, m3 && l3 !== u3) {
                a4 = 0;
                while (s3 = y3[a4++])
                  s3(c3, f3, t4, n4);
                if (e4) {
                  if (0 < u3)
                    while (l3--)
                      c3[l3] || f3[l3] || (f3[l3] = q2.call(r4));
                  f3 = Te2(f3);
                }
                H2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && se2.uniqueSort(r4);
              }
              return i4 && (k2 = h3, w2 = p3), c3;
            }, m3 ? le2(r3) : r3))).selector = e3;
          }
          return a3;
        }, g2 = se2.select = function(e3, t3, n3, r3) {
          var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && h2(e3 = l3.selector || e3);
          if (n3 = n3 || [], 1 === c3.length) {
            if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && E2 && b2.relative[o3[1].type]) {
              if (!(t3 = (b2.find.ID(a3.matches[0].replace(te2, ne2), t3) || [])[0]))
                return n3;
              l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
            }
            i3 = G2.needsContext.test(e3) ? 0 : o3.length;
            while (i3--) {
              if (a3 = o3[i3], b2.relative[s3 = a3.type])
                break;
              if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(te2, ne2), ee2.test(o3[0].type) && ye2(t3.parentNode) || t3))) {
                if (o3.splice(i3, 1), !(e3 = r3.length && xe2(o3)))
                  return H2.apply(n3, r3), n3;
                break;
              }
            }
          }
          return (l3 || f2(e3, c3))(r3, t3, !E2, n3, !t3 || ee2.test(e3) && ye2(t3.parentNode) || t3), n3;
        }, d2.sortStable = S2.split("").sort(j2).join("") === S2, d2.detectDuplicates = !!l2, T2(), d2.sortDetached = ce2(function(e3) {
          return 1 & e3.compareDocumentPosition(C2.createElement("fieldset"));
        }), ce2(function(e3) {
          return e3.innerHTML = "<a href='#'></a>", "#" === e3.firstChild.getAttribute("href");
        }) || fe2("type|href|height|width", function(e3, t3, n3) {
          if (!n3)
            return e3.getAttribute(t3, "type" === t3.toLowerCase() ? 1 : 2);
        }), d2.attributes && ce2(function(e3) {
          return e3.innerHTML = "<input/>", e3.firstChild.setAttribute("value", ""), "" === e3.firstChild.getAttribute("value");
        }) || fe2("value", function(e3, t3, n3) {
          if (!n3 && "input" === e3.nodeName.toLowerCase())
            return e3.defaultValue;
        }), ce2(function(e3) {
          return null == e3.getAttribute("disabled");
        }) || fe2(R2, function(e3, t3, n3) {
          var r3;
          if (!n3)
            return true === e3[t3] ? t3.toLowerCase() : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
        }), se2;
      }(C);
      S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
      var h = function(e2, t2, n2) {
        var r2 = [], i2 = void 0 !== n2;
        while ((e2 = e2[t2]) && 9 !== e2.nodeType)
          if (1 === e2.nodeType) {
            if (i2 && S(e2).is(n2))
              break;
            r2.push(e2);
          }
        return r2;
      }, T = function(e2, t2) {
        for (var n2 = []; e2; e2 = e2.nextSibling)
          1 === e2.nodeType && e2 !== t2 && n2.push(e2);
        return n2;
      }, k = S.expr.match.needsContext;
      function A(e2, t2) {
        return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
      }
      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function j(e2, n2, r2) {
        return m(n2) ? S.grep(e2, function(e3, t2) {
          return !!n2.call(e3, t2, e3) !== r2;
        }) : n2.nodeType ? S.grep(e2, function(e3) {
          return e3 === n2 !== r2;
        }) : "string" != typeof n2 ? S.grep(e2, function(e3) {
          return -1 < i.call(n2, e3) !== r2;
        }) : S.filter(n2, e2, r2);
      }
      S.filter = function(e2, t2, n2) {
        var r2 = t2[0];
        return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? S.find.matchesSelector(r2, e2) ? [r2] : [] : S.find.matches(e2, S.grep(t2, function(e3) {
          return 1 === e3.nodeType;
        }));
      }, S.fn.extend({ find: function(e2) {
        var t2, n2, r2 = this.length, i2 = this;
        if ("string" != typeof e2)
          return this.pushStack(S(e2).filter(function() {
            for (t2 = 0; t2 < r2; t2++)
              if (S.contains(i2[t2], this))
                return true;
          }));
        for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++)
          S.find(e2, i2[t2], n2);
        return 1 < r2 ? S.uniqueSort(n2) : n2;
      }, filter: function(e2) {
        return this.pushStack(j(this, e2 || [], false));
      }, not: function(e2) {
        return this.pushStack(j(this, e2 || [], true));
      }, is: function(e2) {
        return !!j(this, "string" == typeof e2 && k.test(e2) ? S(e2) : e2 || [], false).length;
      } });
      var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (S.fn.init = function(e2, t2, n2) {
        var r2, i2;
        if (!e2)
          return this;
        if (n2 = n2 || D, "string" == typeof e2) {
          if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : q.exec(e2)) || !r2[1] && t2)
            return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
          if (r2[1]) {
            if (t2 = t2 instanceof S ? t2[0] : t2, S.merge(this, S.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : E, true)), N.test(r2[1]) && S.isPlainObject(t2))
              for (r2 in t2)
                m(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
            return this;
          }
          return (i2 = E.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
        }
        return e2.nodeType ? (this[0] = e2, this.length = 1, this) : m(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(S) : S.makeArray(e2, this);
      }).prototype = S.fn, D = S(E);
      var L = /^(?:parents|prev(?:Until|All))/, H = { children: true, contents: true, next: true, prev: true };
      function O(e2, t2) {
        while ((e2 = e2[t2]) && 1 !== e2.nodeType)
          ;
        return e2;
      }
      S.fn.extend({ has: function(e2) {
        var t2 = S(e2, this), n2 = t2.length;
        return this.filter(function() {
          for (var e3 = 0; e3 < n2; e3++)
            if (S.contains(this, t2[e3]))
              return true;
        });
      }, closest: function(e2, t2) {
        var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && S(e2);
        if (!k.test(e2)) {
          for (; r2 < i2; r2++)
            for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode)
              if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && S.find.matchesSelector(n2, e2))) {
                o2.push(n2);
                break;
              }
        }
        return this.pushStack(1 < o2.length ? S.uniqueSort(o2) : o2);
      }, index: function(e2) {
        return e2 ? "string" == typeof e2 ? i.call(S(e2), this[0]) : i.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function(e2, t2) {
        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e2, t2))));
      }, addBack: function(e2) {
        return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
      } }), S.each({ parent: function(e2) {
        var t2 = e2.parentNode;
        return t2 && 11 !== t2.nodeType ? t2 : null;
      }, parents: function(e2) {
        return h(e2, "parentNode");
      }, parentsUntil: function(e2, t2, n2) {
        return h(e2, "parentNode", n2);
      }, next: function(e2) {
        return O(e2, "nextSibling");
      }, prev: function(e2) {
        return O(e2, "previousSibling");
      }, nextAll: function(e2) {
        return h(e2, "nextSibling");
      }, prevAll: function(e2) {
        return h(e2, "previousSibling");
      }, nextUntil: function(e2, t2, n2) {
        return h(e2, "nextSibling", n2);
      }, prevUntil: function(e2, t2, n2) {
        return h(e2, "previousSibling", n2);
      }, siblings: function(e2) {
        return T((e2.parentNode || {}).firstChild, e2);
      }, children: function(e2) {
        return T(e2.firstChild);
      }, contents: function(e2) {
        return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (A(e2, "template") && (e2 = e2.content || e2), S.merge([], e2.childNodes));
      } }, function(r2, i2) {
        S.fn[r2] = function(e2, t2) {
          var n2 = S.map(this, i2, e2);
          return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = S.filter(t2, n2)), 1 < this.length && (H[r2] || S.uniqueSort(n2), L.test(r2) && n2.reverse()), this.pushStack(n2);
        };
      });
      var P = /[^\x20\t\r\n\f]+/g;
      function R(e2) {
        return e2;
      }
      function M(e2) {
        throw e2;
      }
      function I(e2, t2, n2, r2) {
        var i2;
        try {
          e2 && m(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && m(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
        } catch (e3) {
          n2.apply(void 0, [e3]);
        }
      }
      S.Callbacks = function(r2) {
        var e2, n2;
        r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, S.each(e2.match(P) || [], function(e3, t3) {
          n2[t3] = true;
        }), n2) : S.extend({}, r2);
        var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
          for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
            t2 = u2.shift();
            while (++l2 < s2.length)
              false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
          }
          r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
        }, f2 = { add: function() {
          return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
            S.each(e3, function(e4, t3) {
              m(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== w(t3) && n3(t3);
            });
          }(arguments), t2 && !i2 && c2()), this;
        }, remove: function() {
          return S.each(arguments, function(e3, t3) {
            var n3;
            while (-1 < (n3 = S.inArray(t3, s2, n3)))
              s2.splice(n3, 1), n3 <= l2 && l2--;
          }), this;
        }, has: function(e3) {
          return e3 ? -1 < S.inArray(e3, s2) : 0 < s2.length;
        }, empty: function() {
          return s2 && (s2 = []), this;
        }, disable: function() {
          return a2 = u2 = [], s2 = t2 = "", this;
        }, disabled: function() {
          return !s2;
        }, lock: function() {
          return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
        }, locked: function() {
          return !!a2;
        }, fireWith: function(e3, t3) {
          return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
        }, fire: function() {
          return f2.fireWith(this, arguments), this;
        }, fired: function() {
          return !!o2;
        } };
        return f2;
      }, S.extend({ Deferred: function(e2) {
        var o2 = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
          return i2;
        }, always: function() {
          return s2.done(arguments).fail(arguments), this;
        }, "catch": function(e3) {
          return a2.then(null, e3);
        }, pipe: function() {
          var i3 = arguments;
          return S.Deferred(function(r2) {
            S.each(o2, function(e3, t2) {
              var n2 = m(i3[t2[4]]) && i3[t2[4]];
              s2[t2[1]](function() {
                var e4 = n2 && n2.apply(this, arguments);
                e4 && m(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
              });
            }), i3 = null;
          }).promise();
        }, then: function(t2, n2, r2) {
          var u2 = 0;
          function l2(i3, o3, a3, s3) {
            return function() {
              var n3 = this, r3 = arguments, e3 = function() {
                var e4, t4;
                if (!(i3 < u2)) {
                  if ((e4 = a3.apply(n3, r3)) === o3.promise())
                    throw new TypeError("Thenable self-resolution");
                  t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, m(t4) ? s3 ? t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3)) : (u2++, t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3), l2(u2, o3, R, o3.notifyWith))) : (a3 !== R && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
                }
              }, t3 = s3 ? e3 : function() {
                try {
                  e3();
                } catch (e4) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e4, t3.stackTrace), u2 <= i3 + 1 && (a3 !== M && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
                }
              };
              i3 ? t3() : (S.Deferred.getStackHook && (t3.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t3));
            };
          }
          return S.Deferred(function(e3) {
            o2[0][3].add(l2(0, e3, m(r2) ? r2 : R, e3.notifyWith)), o2[1][3].add(l2(0, e3, m(t2) ? t2 : R)), o2[2][3].add(l2(0, e3, m(n2) ? n2 : M));
          }).promise();
        }, promise: function(e3) {
          return null != e3 ? S.extend(e3, a2) : a2;
        } }, s2 = {};
        return S.each(o2, function(e3, t2) {
          var n2 = t2[2], r2 = t2[5];
          a2[t2[1]] = n2.add, r2 && n2.add(function() {
            i2 = r2;
          }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
            return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
          }, s2[t2[0] + "With"] = n2.fireWith;
        }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
      }, when: function(e2) {
        var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = s.call(arguments), o2 = S.Deferred(), a2 = function(t3) {
          return function(e3) {
            r2[t3] = this, i2[t3] = 1 < arguments.length ? s.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
          };
        };
        if (n2 <= 1 && (I(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || m(i2[t2] && i2[t2].then)))
          return o2.then();
        while (t2--)
          I(i2[t2], a2(t2), o2.reject);
        return o2.promise();
      } });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      S.Deferred.exceptionHook = function(e2, t2) {
        C.console && C.console.warn && e2 && W.test(e2.name) && C.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
      }, S.readyException = function(e2) {
        C.setTimeout(function() {
          throw e2;
        });
      };
      var F = S.Deferred();
      function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
      }
      S.fn.ready = function(e2) {
        return F.then(e2)["catch"](function(e3) {
          S.readyException(e3);
        }), this;
      }, S.extend({ isReady: false, readyWait: 1, ready: function(e2) {
        (true === e2 ? --S.readyWait : S.isReady) || (S.isReady = true) !== e2 && 0 < --S.readyWait || F.resolveWith(E, [S]);
      } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
      var $2 = function(e2, t2, n2, r2, i2, o2, a2) {
        var s2 = 0, u2 = e2.length, l2 = null == n2;
        if ("object" === w(n2))
          for (s2 in i2 = true, n2)
            $2(e2, t2, s2, n2[s2], true, o2, a2);
        else if (void 0 !== r2 && (i2 = true, m(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
          return l2.call(S(e3), n3);
        })), t2))
          for (; s2 < u2; s2++)
            t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
        return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
      }, _ = /^-ms-/, z = /-([a-z])/g;
      function U(e2, t2) {
        return t2.toUpperCase();
      }
      function X(e2) {
        return e2.replace(_, "ms-").replace(z, U);
      }
      var V = function(e2) {
        return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
      };
      function G() {
        this.expando = S.expando + G.uid++;
      }
      G.uid = 1, G.prototype = { cache: function(e2) {
        var t2 = e2[this.expando];
        return t2 || (t2 = {}, V(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
      }, set: function(e2, t2, n2) {
        var r2, i2 = this.cache(e2);
        if ("string" == typeof t2)
          i2[X(t2)] = n2;
        else
          for (r2 in t2)
            i2[X(r2)] = t2[r2];
        return i2;
      }, get: function(e2, t2) {
        return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][X(t2)];
      }, access: function(e2, t2, n2) {
        return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
      }, remove: function(e2, t2) {
        var n2, r2 = e2[this.expando];
        if (void 0 !== r2) {
          if (void 0 !== t2) {
            n2 = (t2 = Array.isArray(t2) ? t2.map(X) : (t2 = X(t2)) in r2 ? [t2] : t2.match(P) || []).length;
            while (n2--)
              delete r2[t2[n2]];
          }
          (void 0 === t2 || S.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
        }
      }, hasData: function(e2) {
        var t2 = e2[this.expando];
        return void 0 !== t2 && !S.isEmptyObject(t2);
      } };
      var Y = new G(), Q = new G(), J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
      function Z(e2, t2, n2) {
        var r2, i2;
        if (void 0 === n2 && 1 === e2.nodeType)
          if (r2 = "data-" + t2.replace(K, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
            try {
              n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : J.test(i2) ? JSON.parse(i2) : i2);
            } catch (e3) {
            }
            Q.set(e2, t2, n2);
          } else
            n2 = void 0;
        return n2;
      }
      S.extend({ hasData: function(e2) {
        return Q.hasData(e2) || Y.hasData(e2);
      }, data: function(e2, t2, n2) {
        return Q.access(e2, t2, n2);
      }, removeData: function(e2, t2) {
        Q.remove(e2, t2);
      }, _data: function(e2, t2, n2) {
        return Y.access(e2, t2, n2);
      }, _removeData: function(e2, t2) {
        Y.remove(e2, t2);
      } }), S.fn.extend({ data: function(n2, e2) {
        var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
        if (void 0 === n2) {
          if (this.length && (i2 = Q.get(o2), 1 === o2.nodeType && !Y.get(o2, "hasDataAttrs"))) {
            t2 = a2.length;
            while (t2--)
              a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = X(r2.slice(5)), Z(o2, r2, i2[r2]));
            Y.set(o2, "hasDataAttrs", true);
          }
          return i2;
        }
        return "object" == typeof n2 ? this.each(function() {
          Q.set(this, n2);
        }) : $2(this, function(e3) {
          var t3;
          if (o2 && void 0 === e3)
            return void 0 !== (t3 = Q.get(o2, n2)) ? t3 : void 0 !== (t3 = Z(o2, n2)) ? t3 : void 0;
          this.each(function() {
            Q.set(this, n2, e3);
          });
        }, null, e2, 1 < arguments.length, null, true);
      }, removeData: function(e2) {
        return this.each(function() {
          Q.remove(this, e2);
        });
      } }), S.extend({ queue: function(e2, t2, n2) {
        var r2;
        if (e2)
          return t2 = (t2 || "fx") + "queue", r2 = Y.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = Y.access(e2, t2, S.makeArray(n2)) : r2.push(n2)), r2 || [];
      }, dequeue: function(e2, t2) {
        t2 = t2 || "fx";
        var n2 = S.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = S._queueHooks(e2, t2);
        "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
          S.dequeue(e2, t2);
        }, o2)), !r2 && o2 && o2.empty.fire();
      }, _queueHooks: function(e2, t2) {
        var n2 = t2 + "queueHooks";
        return Y.get(e2, n2) || Y.access(e2, n2, { empty: S.Callbacks("once memory").add(function() {
          Y.remove(e2, [t2 + "queue", n2]);
        }) });
      } }), S.fn.extend({ queue: function(t2, n2) {
        var e2 = 2;
        return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? S.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
          var e3 = S.queue(this, t2, n2);
          S._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && S.dequeue(this, t2);
        });
      }, dequeue: function(e2) {
        return this.each(function() {
          S.dequeue(this, e2);
        });
      }, clearQueue: function(e2) {
        return this.queue(e2 || "fx", []);
      }, promise: function(e2, t2) {
        var n2, r2 = 1, i2 = S.Deferred(), o2 = this, a2 = this.length, s2 = function() {
          --r2 || i2.resolveWith(o2, [o2]);
        };
        "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
        while (a2--)
          (n2 = Y.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
        return s2(), i2.promise(t2);
      } });
      var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function(e2) {
        return S.contains(e2.ownerDocument, e2);
      }, oe = { composed: true };
      re.getRootNode && (ie = function(e2) {
        return S.contains(e2.ownerDocument, e2) || e2.getRootNode(oe) === e2.ownerDocument;
      });
      var ae = function(e2, t2) {
        return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && ie(e2) && "none" === S.css(e2, "display");
      };
      function se(e2, t2, n2, r2) {
        var i2, o2, a2 = 20, s2 = r2 ? function() {
          return r2.cur();
        } : function() {
          return S.css(e2, t2, "");
        }, u2 = s2(), l2 = n2 && n2[3] || (S.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (S.cssNumber[t2] || "px" !== l2 && +u2) && te.exec(S.css(e2, t2));
        if (c2 && c2[3] !== l2) {
          u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
          while (a2--)
            S.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
          c2 *= 2, S.style(e2, t2, c2 + l2), n2 = n2 || [];
        }
        return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
      }
      var ue = {};
      function le(e2, t2) {
        for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++)
          (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = Y.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ae(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ue[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = S.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ue[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", Y.set(r2, "display", n2)));
        for (c2 = 0; c2 < f2; c2++)
          null != l2[c2] && (e2[c2].style.display = l2[c2]);
        return e2;
      }
      S.fn.extend({ show: function() {
        return le(this, true);
      }, hide: function() {
        return le(this);
      }, toggle: function(e2) {
        return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
          ae(this) ? S(this).show() : S(this).hide();
        });
      } });
      var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
      ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(true).cloneNode(true).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(true).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
      var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
      function ve(e2, t2) {
        var n2;
        return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && A(e2, t2) ? S.merge([e2], n2) : n2;
      }
      function ye(e2, t2) {
        for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
          Y.set(e2[n2], "globalEval", !t2 || Y.get(t2[n2], "globalEval"));
      }
      ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
      var me = /<|&#?\w+;/;
      function xe(e2, t2, n2, r2, i2) {
        for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++)
          if ((o2 = e2[d2]) || 0 === o2)
            if ("object" === w(o2))
              S.merge(p2, o2.nodeType ? [o2] : o2);
            else if (me.test(o2)) {
              a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (de.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ge[s2] || ge._default, a2.innerHTML = u2[1] + S.htmlPrefilter(o2) + u2[2], c2 = u2[0];
              while (c2--)
                a2 = a2.lastChild;
              S.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
            } else
              p2.push(t2.createTextNode(o2));
        f2.textContent = "", d2 = 0;
        while (o2 = p2[d2++])
          if (r2 && -1 < S.inArray(o2, r2))
            i2 && i2.push(o2);
          else if (l2 = ie(o2), a2 = ve(f2.appendChild(o2), "script"), l2 && ye(a2), n2) {
            c2 = 0;
            while (o2 = a2[c2++])
              he.test(o2.type || "") && n2.push(o2);
          }
        return f2;
      }
      var be = /^([^.]*)(?:\.(.+)|)/;
      function we() {
        return true;
      }
      function Te() {
        return false;
      }
      function Ce(e2, t2) {
        return e2 === function() {
          try {
            return E.activeElement;
          } catch (e3) {
          }
        }() == ("focus" === t2);
      }
      function Ee(e2, t2, n2, r2, i2, o2) {
        var a2, s2;
        if ("object" == typeof t2) {
          for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2)
            Ee(e2, s2, n2, r2, t2[s2], o2);
          return e2;
        }
        if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2)
          i2 = Te;
        else if (!i2)
          return e2;
        return 1 === o2 && (a2 = i2, (i2 = function(e3) {
          return S().off(e3), a2.apply(this, arguments);
        }).guid = a2.guid || (a2.guid = S.guid++)), e2.each(function() {
          S.event.add(this, t2, i2, r2, n2);
        });
      }
      function Se(e2, i2, o2) {
        o2 ? (Y.set(e2, i2, false), S.event.add(e2, i2, { namespace: false, handler: function(e3) {
          var t2, n2, r2 = Y.get(this, i2);
          if (1 & e3.isTrigger && this[i2]) {
            if (r2.length)
              (S.event.special[i2] || {}).delegateType && e3.stopPropagation();
            else if (r2 = s.call(arguments), Y.set(this, i2, r2), t2 = o2(this, i2), this[i2](), r2 !== (n2 = Y.get(this, i2)) || t2 ? Y.set(this, i2, false) : n2 = {}, r2 !== n2)
              return e3.stopImmediatePropagation(), e3.preventDefault(), n2 && n2.value;
          } else
            r2.length && (Y.set(this, i2, { value: S.event.trigger(S.extend(r2[0], S.Event.prototype), r2.slice(1), this) }), e3.stopImmediatePropagation());
        } })) : void 0 === Y.get(e2, i2) && S.event.add(e2, i2, we);
      }
      S.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
        var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.get(t2);
        if (V(t2)) {
          n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && S.find.matchesSelector(re, i2), n2.guid || (n2.guid = S.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
            return "undefined" != typeof S && S.event.triggered !== e3.type ? S.event.dispatch.apply(t2, arguments) : void 0;
          }), l2 = (e2 = (e2 || "").match(P) || [""]).length;
          while (l2--)
            d2 = g2 = (s2 = be.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = S.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = S.event.special[d2] || {}, c2 = S.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && S.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), S.event.global[d2] = true);
        }
      }, remove: function(e2, t2, n2, r2, i2) {
        var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.hasData(e2) && Y.get(e2);
        if (v2 && (u2 = v2.events)) {
          l2 = (t2 = (t2 || "").match(P) || [""]).length;
          while (l2--)
            if (d2 = g2 = (s2 = be.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
              f2 = S.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
              while (o2--)
                c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
              a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || S.removeEvent(e2, d2, v2.handle), delete u2[d2]);
            } else
              for (d2 in u2)
                S.event.remove(e2, d2 + t2[l2], n2, r2, true);
          S.isEmptyObject(u2) && Y.remove(e2, "handle events");
        }
      }, dispatch: function(e2) {
        var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = S.event.fix(e2), l2 = (Y.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = S.event.special[u2.type] || {};
        for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++)
          s2[t2] = arguments[t2];
        if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
          a2 = S.event.handlers.call(this, u2, l2), t2 = 0;
          while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
            u2.currentTarget = i2.elem, n2 = 0;
            while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped())
              u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((S.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
          }
          return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
        }
      }, handlers: function(e2, t2) {
        var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
        if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
          for (; l2 !== this; l2 = l2.parentNode || this)
            if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
              for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++)
                void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < S(i2, this).index(l2) : S.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
              o2.length && s2.push({ elem: l2, handlers: o2 });
            }
        }
        return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
      }, addProp: function(t2, e2) {
        Object.defineProperty(S.Event.prototype, t2, { enumerable: true, configurable: true, get: m(e2) ? function() {
          if (this.originalEvent)
            return e2(this.originalEvent);
        } : function() {
          if (this.originalEvent)
            return this.originalEvent[t2];
        }, set: function(e3) {
          Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
        } });
      }, fix: function(e2) {
        return e2[S.expando] ? e2 : new S.Event(e2);
      }, special: { load: { noBubble: true }, click: { setup: function(e2) {
        var t2 = this || e2;
        return pe.test(t2.type) && t2.click && A(t2, "input") && Se(t2, "click", we), false;
      }, trigger: function(e2) {
        var t2 = this || e2;
        return pe.test(t2.type) && t2.click && A(t2, "input") && Se(t2, "click"), true;
      }, _default: function(e2) {
        var t2 = e2.target;
        return pe.test(t2.type) && t2.click && A(t2, "input") && Y.get(t2, "click") || A(t2, "a");
      } }, beforeunload: { postDispatch: function(e2) {
        void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
      } } } }, S.removeEvent = function(e2, t2, n2) {
        e2.removeEventListener && e2.removeEventListener(t2, n2);
      }, S.Event = function(e2, t2) {
        if (!(this instanceof S.Event))
          return new S.Event(e2, t2);
        e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? we : Te, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && S.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[S.expando] = true;
      }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: false, preventDefault: function() {
        var e2 = this.originalEvent;
        this.isDefaultPrevented = we, e2 && !this.isSimulated && e2.preventDefault();
      }, stopPropagation: function() {
        var e2 = this.originalEvent;
        this.isPropagationStopped = we, e2 && !this.isSimulated && e2.stopPropagation();
      }, stopImmediatePropagation: function() {
        var e2 = this.originalEvent;
        this.isImmediatePropagationStopped = we, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
      } }, S.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e2, t2) {
        S.event.special[e2] = { setup: function() {
          return Se(this, e2, Ce), false;
        }, trigger: function() {
          return Se(this, e2), true;
        }, _default: function() {
          return true;
        }, delegateType: t2 };
      }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
        S.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
          var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
          return n2 && (n2 === this || S.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
        } };
      }), S.fn.extend({ on: function(e2, t2, n2, r2) {
        return Ee(this, e2, t2, n2, r2);
      }, one: function(e2, t2, n2, r2) {
        return Ee(this, e2, t2, n2, r2, 1);
      }, off: function(e2, t2, n2) {
        var r2, i2;
        if (e2 && e2.preventDefault && e2.handleObj)
          return r2 = e2.handleObj, S(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
        if ("object" == typeof e2) {
          for (i2 in e2)
            this.off(i2, t2, e2[i2]);
          return this;
        }
        return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = Te), this.each(function() {
          S.event.remove(this, e2, n2, t2);
        });
      } });
      var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function je(e2, t2) {
        return A(e2, "table") && A(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && S(e2).children("tbody")[0] || e2;
      }
      function De(e2) {
        return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
      }
      function qe(e2) {
        return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
      }
      function Le(e2, t2) {
        var n2, r2, i2, o2, a2, s2;
        if (1 === t2.nodeType) {
          if (Y.hasData(e2) && (s2 = Y.get(e2).events))
            for (i2 in Y.remove(t2, "handle events"), s2)
              for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++)
                S.event.add(t2, i2, s2[i2][n2]);
          Q.hasData(e2) && (o2 = Q.access(e2), a2 = S.extend({}, o2), Q.set(t2, a2));
        }
      }
      function He(n2, r2, i2, o2) {
        r2 = g(r2);
        var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = m(d2);
        if (h2 || 1 < f2 && "string" == typeof d2 && !y.checkClone && Ae.test(d2))
          return n2.each(function(e3) {
            var t3 = n2.eq(e3);
            h2 && (r2[0] = d2.call(this, e3, t3.html())), He(t3, r2, i2, o2);
          });
        if (f2 && (t2 = (e2 = xe(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
          for (s2 = (a2 = S.map(ve(e2, "script"), De)).length; c2 < f2; c2++)
            u2 = e2, c2 !== p2 && (u2 = S.clone(u2, true, true), s2 && S.merge(a2, ve(u2, "script"))), i2.call(n2[c2], u2, c2);
          if (s2)
            for (l2 = a2[a2.length - 1].ownerDocument, S.map(a2, qe), c2 = 0; c2 < s2; c2++)
              u2 = a2[c2], he.test(u2.type || "") && !Y.access(u2, "globalEval") && S.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? S._evalUrl && !u2.noModule && S._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : b(u2.textContent.replace(Ne, ""), u2, l2));
        }
        return n2;
      }
      function Oe(e2, t2, n2) {
        for (var r2, i2 = t2 ? S.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++)
          n2 || 1 !== r2.nodeType || S.cleanData(ve(r2)), r2.parentNode && (n2 && ie(r2) && ye(ve(r2, "script")), r2.parentNode.removeChild(r2));
        return e2;
      }
      S.extend({ htmlPrefilter: function(e2) {
        return e2;
      }, clone: function(e2, t2, n2) {
        var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = ie(e2);
        if (!(y.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || S.isXMLDoc(e2)))
          for (a2 = ve(c2), r2 = 0, i2 = (o2 = ve(e2)).length; r2 < i2; r2++)
            s2 = o2[r2], u2 = a2[r2], "input" === (l2 = u2.nodeName.toLowerCase()) && pe.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
        if (t2)
          if (n2)
            for (o2 = o2 || ve(e2), a2 = a2 || ve(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++)
              Le(o2[r2], a2[r2]);
          else
            Le(e2, c2);
        return 0 < (a2 = ve(c2, "script")).length && ye(a2, !f2 && ve(e2, "script")), c2;
      }, cleanData: function(e2) {
        for (var t2, n2, r2, i2 = S.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++)
          if (V(n2)) {
            if (t2 = n2[Y.expando]) {
              if (t2.events)
                for (r2 in t2.events)
                  i2[r2] ? S.event.remove(n2, r2) : S.removeEvent(n2, r2, t2.handle);
              n2[Y.expando] = void 0;
            }
            n2[Q.expando] && (n2[Q.expando] = void 0);
          }
      } }), S.fn.extend({ detach: function(e2) {
        return Oe(this, e2, true);
      }, remove: function(e2) {
        return Oe(this, e2);
      }, text: function(e2) {
        return $2(this, function(e3) {
          return void 0 === e3 ? S.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
          });
        }, null, e2, arguments.length);
      }, append: function() {
        return He(this, arguments, function(e2) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e2).appendChild(e2);
        });
      }, prepend: function() {
        return He(this, arguments, function(e2) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t2 = je(this, e2);
            t2.insertBefore(e2, t2.firstChild);
          }
        });
      }, before: function() {
        return He(this, arguments, function(e2) {
          this.parentNode && this.parentNode.insertBefore(e2, this);
        });
      }, after: function() {
        return He(this, arguments, function(e2) {
          this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
        });
      }, empty: function() {
        for (var e2, t2 = 0; null != (e2 = this[t2]); t2++)
          1 === e2.nodeType && (S.cleanData(ve(e2, false)), e2.textContent = "");
        return this;
      }, clone: function(e2, t2) {
        return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
          return S.clone(this, e2, t2);
        });
      }, html: function(e2) {
        return $2(this, function(e3) {
          var t2 = this[0] || {}, n2 = 0, r2 = this.length;
          if (void 0 === e3 && 1 === t2.nodeType)
            return t2.innerHTML;
          if ("string" == typeof e3 && !ke.test(e3) && !ge[(de.exec(e3) || ["", ""])[1].toLowerCase()]) {
            e3 = S.htmlPrefilter(e3);
            try {
              for (; n2 < r2; n2++)
                1 === (t2 = this[n2] || {}).nodeType && (S.cleanData(ve(t2, false)), t2.innerHTML = e3);
              t2 = 0;
            } catch (e4) {
            }
          }
          t2 && this.empty().append(e3);
        }, null, e2, arguments.length);
      }, replaceWith: function() {
        var n2 = [];
        return He(this, arguments, function(e2) {
          var t2 = this.parentNode;
          S.inArray(this, n2) < 0 && (S.cleanData(ve(this)), t2 && t2.replaceChild(e2, this));
        }, n2);
      } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
        S.fn[e2] = function(e3) {
          for (var t2, n2 = [], r2 = S(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++)
            t2 = o2 === i2 ? this : this.clone(true), S(r2[o2])[a2](t2), u.apply(n2, t2.get());
          return this.pushStack(n2);
        };
      });
      var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function(e2) {
        var t2 = e2.ownerDocument.defaultView;
        return t2 && t2.opener || (t2 = C), t2.getComputedStyle(e2);
      }, Me = function(e2, t2, n2) {
        var r2, i2, o2 = {};
        for (i2 in t2)
          o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
        for (i2 in r2 = n2.call(e2), t2)
          e2.style[i2] = o2[i2];
        return r2;
      }, Ie = new RegExp(ne.join("|"), "i");
      function We(e2, t2, n2) {
        var r2, i2, o2, a2, s2 = e2.style;
        return (n2 = n2 || Re(e2)) && ("" !== (a2 = n2.getPropertyValue(t2) || n2[t2]) || ie(e2) || (a2 = S.style(e2, t2)), !y.pixelBoxStyles() && Pe.test(a2) && Ie.test(t2) && (r2 = s2.width, i2 = s2.minWidth, o2 = s2.maxWidth, s2.minWidth = s2.maxWidth = s2.width = a2, a2 = n2.width, s2.width = r2, s2.minWidth = i2, s2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
      }
      function Fe(e2, t2) {
        return { get: function() {
          if (!e2())
            return (this.get = t2).apply(this, arguments);
          delete this.get;
        } };
      }
      !function() {
        function e2() {
          if (l2) {
            u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u2).appendChild(l2);
            var e3 = C.getComputedStyle(l2);
            n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), re.removeChild(u2), l2 = null;
          }
        }
        function t2(e3) {
          return Math.round(parseFloat(e3));
        }
        var n2, r2, i2, o2, a2, s2, u2 = E.createElement("div"), l2 = E.createElement("div");
        l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l2.style.backgroundClip, S.extend(y, { boxSizingReliable: function() {
          return e2(), r2;
        }, pixelBoxStyles: function() {
          return e2(), o2;
        }, pixelPosition: function() {
          return e2(), n2;
        }, reliableMarginLeft: function() {
          return e2(), s2;
        }, scrollboxSize: function() {
          return e2(), i2;
        }, reliableTrDimensions: function() {
          var e3, t3, n3, r3;
          return null == a2 && (e3 = E.createElement("table"), t3 = E.createElement("tr"), n3 = E.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", re.appendChild(e3).appendChild(t3).appendChild(n3), r3 = C.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, re.removeChild(e3)), a2;
        } }));
      }();
      var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {};
      function ze(e2) {
        var t2 = S.cssProps[e2] || _e[e2];
        return t2 || (e2 in $e ? e2 : _e[e2] = function(e3) {
          var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Be.length;
          while (n2--)
            if ((e3 = Be[n2] + t3) in $e)
              return e3;
        }(e2) || e2);
      }
      var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Ge = { letterSpacing: "0", fontWeight: "400" };
      function Ye(e2, t2, n2) {
        var r2 = te.exec(t2);
        return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
      }
      function Qe(e2, t2, n2, r2, i2, o2) {
        var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0;
        if (n2 === (r2 ? "border" : "content"))
          return 0;
        for (; a2 < 4; a2 += 2)
          "margin" === n2 && (u2 += S.css(e2, n2 + ne[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= S.css(e2, "padding" + ne[a2], true, i2)), "margin" !== n2 && (u2 -= S.css(e2, "border" + ne[a2] + "Width", true, i2))) : (u2 += S.css(e2, "padding" + ne[a2], true, i2), "padding" !== n2 ? u2 += S.css(e2, "border" + ne[a2] + "Width", true, i2) : s2 += S.css(e2, "border" + ne[a2] + "Width", true, i2));
        return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2;
      }
      function Je(e2, t2, n2) {
        var r2 = Re(e2), i2 = (!y.boxSizingReliable() || n2) && "border-box" === S.css(e2, "boxSizing", false, r2), o2 = i2, a2 = We(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
        if (Pe.test(a2)) {
          if (!n2)
            return a2;
          a2 = "auto";
        }
        return (!y.boxSizingReliable() && i2 || !y.reliableTrDimensions() && A(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === S.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === S.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + Qe(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
      }
      function Ke(e2, t2, n2, r2, i2) {
        return new Ke.prototype.init(e2, t2, n2, r2, i2);
      }
      S.extend({ cssHooks: { opacity: { get: function(e2, t2) {
        if (t2) {
          var n2 = We(e2, "opacity");
          return "" === n2 ? "1" : n2;
        }
      } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
        if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
          var i2, o2, a2, s2 = X(t2), u2 = Xe.test(t2), l2 = e2.style;
          if (u2 || (t2 = ze(s2)), a2 = S.cssHooks[t2] || S.cssHooks[s2], void 0 === n2)
            return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
          "string" === (o2 = typeof n2) && (i2 = te.exec(n2)) && i2[1] && (n2 = se(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (S.cssNumber[s2] ? "" : "px")), y.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
        }
      }, css: function(e2, t2, n2, r2) {
        var i2, o2, a2, s2 = X(t2);
        return Xe.test(t2) || (t2 = ze(s2)), (a2 = S.cssHooks[t2] || S.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = We(e2, t2, r2)), "normal" === i2 && t2 in Ge && (i2 = Ge[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
      } }), S.each(["height", "width"], function(e2, u2) {
        S.cssHooks[u2] = { get: function(e3, t2, n2) {
          if (t2)
            return !Ue.test(S.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? Je(e3, u2, n2) : Me(e3, Ve, function() {
              return Je(e3, u2, n2);
            });
        }, set: function(e3, t2, n2) {
          var r2, i2 = Re(e3), o2 = !y.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === S.css(e3, "boxSizing", false, i2), s2 = n2 ? Qe(e3, u2, n2, a2, i2) : 0;
          return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - Qe(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = te.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = S.css(e3, u2)), Ye(0, t2, s2);
        } };
      }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e2, t2) {
        if (t2)
          return (parseFloat(We(e2, "marginLeft")) || e2.getBoundingClientRect().left - Me(e2, { marginLeft: 0 }, function() {
            return e2.getBoundingClientRect().left;
          })) + "px";
      }), S.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
        S.cssHooks[i2 + o2] = { expand: function(e2) {
          for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++)
            n2[i2 + ne[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
          return n2;
        } }, "margin" !== i2 && (S.cssHooks[i2 + o2].set = Ye);
      }), S.fn.extend({ css: function(e2, t2) {
        return $2(this, function(e3, t3, n2) {
          var r2, i2, o2 = {}, a2 = 0;
          if (Array.isArray(t3)) {
            for (r2 = Re(e3), i2 = t3.length; a2 < i2; a2++)
              o2[t3[a2]] = S.css(e3, t3[a2], false, r2);
            return o2;
          }
          return void 0 !== n2 ? S.style(e3, t3, n2) : S.css(e3, t3);
        }, e2, t2, 1 < arguments.length);
      } }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function(e2, t2, n2, r2, i2, o2) {
        this.elem = e2, this.prop = n2, this.easing = i2 || S.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (S.cssNumber[n2] ? "" : "px");
      }, cur: function() {
        var e2 = Ke.propHooks[this.prop];
        return e2 && e2.get ? e2.get(this) : Ke.propHooks._default.get(this);
      }, run: function(e2) {
        var t2, n2 = Ke.propHooks[this.prop];
        return this.options.duration ? this.pos = t2 = S.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : Ke.propHooks._default.set(this), this;
      } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function(e2) {
        var t2;
        return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = S.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
      }, set: function(e2) {
        S.fx.step[e2.prop] ? S.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !S.cssHooks[e2.prop] && null == e2.elem.style[ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : S.style(e2.elem, e2.prop, e2.now + e2.unit);
      } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function(e2) {
        e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
      } }, S.easing = { linear: function(e2) {
        return e2;
      }, swing: function(e2) {
        return 0.5 - Math.cos(e2 * Math.PI) / 2;
      }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {};
      var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
      function ot() {
        et && (false === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
      }
      function at() {
        return C.setTimeout(function() {
          Ze = void 0;
        }), Ze = Date.now();
      }
      function st(e2, t2) {
        var n2, r2 = 0, i2 = { height: e2 };
        for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2)
          i2["margin" + (n2 = ne[r2])] = i2["padding" + n2] = e2;
        return t2 && (i2.opacity = i2.width = e2), i2;
      }
      function ut(e2, t2, n2) {
        for (var r2, i2 = (lt.tweeners[t2] || []).concat(lt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++)
          if (r2 = i2[o2].call(n2, t2, e2))
            return r2;
      }
      function lt(o2, e2, t2) {
        var n2, a2, r2 = 0, i2 = lt.prefilters.length, s2 = S.Deferred().always(function() {
          delete u2.elem;
        }), u2 = function() {
          if (a2)
            return false;
          for (var e3 = Ze || at(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++)
            l2.tweens[r3].run(n3);
          return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
        }, l2 = s2.promise({ elem: o2, props: S.extend({}, e2), opts: S.extend(true, { specialEasing: {}, easing: S.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: Ze || at(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
          var n3 = S.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
          return l2.tweens.push(n3), n3;
        }, stop: function(e3) {
          var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
          if (a2)
            return this;
          for (a2 = true; t3 < n3; t3++)
            l2.tweens[t3].run(1);
          return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
        } }), c2 = l2.props;
        for (!function(e3, t3) {
          var n3, r3, i3, o3, a3;
          for (n3 in e3)
            if (i3 = t3[r3 = X(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = S.cssHooks[r3]) && "expand" in a3)
              for (n3 in o3 = a3.expand(o3), delete e3[r3], o3)
                n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
            else
              t3[r3] = i3;
        }(c2, l2.opts.specialEasing); r2 < i2; r2++)
          if (n2 = lt.prefilters[r2].call(l2, o2, c2, l2.opts))
            return m(n2.stop) && (S._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
        return S.map(c2, ut, l2), m(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), S.fx.timer(S.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
      }
      S.Animation = S.extend(lt, { tweeners: { "*": [function(e2, t2) {
        var n2 = this.createTween(e2, t2);
        return se(n2.elem, e2, te.exec(t2), n2), n2;
      }] }, tweener: function(e2, t2) {
        m(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(P);
        for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++)
          n2 = e2[r2], lt.tweeners[n2] = lt.tweeners[n2] || [], lt.tweeners[n2].unshift(t2);
      }, prefilters: [function(e2, t2, n2) {
        var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ae(e2), v2 = Y.get(e2, "fxshow");
        for (r2 in n2.queue || (null == (a2 = S._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
          a2.unqueued || s2();
        }), a2.unqueued++, p2.always(function() {
          p2.always(function() {
            a2.unqueued--, S.queue(e2, "fx").length || a2.empty.fire();
          });
        })), t2)
          if (i2 = t2[r2], rt.test(i2)) {
            if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
              if ("show" !== i2 || !v2 || void 0 === v2[r2])
                continue;
              g2 = true;
            }
            d2[r2] = v2 && v2[r2] || S.style(e2, r2);
          }
        if ((u2 = !S.isEmptyObject(t2)) || !S.isEmptyObject(d2))
          for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = Y.get(e2, "display")), "none" === (c2 = S.css(e2, "display")) && (l2 ? c2 = l2 : (le([e2], true), l2 = e2.style.display || l2, c2 = S.css(e2, "display"), le([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === S.css(e2, "float") && (u2 || (p2.done(function() {
            h2.display = l2;
          }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
            h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
          })), u2 = false, d2)
            u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = Y.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && le([e2], true), p2.done(function() {
              for (r2 in g2 || le([e2]), Y.remove(e2, "fxshow"), d2)
                S.style(e2, r2, d2[r2]);
            })), u2 = ut(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
      }], prefilter: function(e2, t2) {
        t2 ? lt.prefilters.unshift(e2) : lt.prefilters.push(e2);
      } }), S.speed = function(e2, t2, n2) {
        var r2 = e2 && "object" == typeof e2 ? S.extend({}, e2) : { complete: n2 || !n2 && t2 || m(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !m(t2) && t2 };
        return S.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in S.fx.speeds ? r2.duration = S.fx.speeds[r2.duration] : r2.duration = S.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
          m(r2.old) && r2.old.call(this), r2.queue && S.dequeue(this, r2.queue);
        }, r2;
      }, S.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
        return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
      }, animate: function(t2, e2, n2, r2) {
        var i2 = S.isEmptyObject(t2), o2 = S.speed(e2, n2, r2), a2 = function() {
          var e3 = lt(this, S.extend({}, t2), o2);
          (i2 || Y.get(this, "finish")) && e3.stop(true);
        };
        return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
      }, stop: function(i2, e2, o2) {
        var a2 = function(e3) {
          var t2 = e3.stop;
          delete e3.stop, t2(o2);
        };
        return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
          var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = S.timers, r2 = Y.get(this);
          if (t2)
            r2[t2] && r2[t2].stop && a2(r2[t2]);
          else
            for (t2 in r2)
              r2[t2] && r2[t2].stop && it.test(t2) && a2(r2[t2]);
          for (t2 = n2.length; t2--; )
            n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
          !e3 && o2 || S.dequeue(this, i2);
        });
      }, finish: function(a2) {
        return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
          var e2, t2 = Y.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = S.timers, o2 = n2 ? n2.length : 0;
          for (t2.finish = true, S.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; )
            i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
          for (e2 = 0; e2 < o2; e2++)
            n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
          delete t2.finish;
        });
      } }), S.each(["toggle", "show", "hide"], function(e2, r2) {
        var i2 = S.fn[r2];
        S.fn[r2] = function(e3, t2, n2) {
          return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(st(r2, true), e3, t2, n2);
        };
      }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
        S.fn[e2] = function(e3, t2, n2) {
          return this.animate(r2, e3, t2, n2);
        };
      }), S.timers = [], S.fx.tick = function() {
        var e2, t2 = 0, n2 = S.timers;
        for (Ze = Date.now(); t2 < n2.length; t2++)
          (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
        n2.length || S.fx.stop(), Ze = void 0;
      }, S.fx.timer = function(e2) {
        S.timers.push(e2), S.fx.start();
      }, S.fx.interval = 13, S.fx.start = function() {
        et || (et = true, ot());
      }, S.fx.stop = function() {
        et = null;
      }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r2, e2) {
        return r2 = S.fx && S.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
          var n2 = C.setTimeout(e3, r2);
          t2.stop = function() {
            C.clearTimeout(n2);
          };
        });
      }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
      var ct, ft = S.expr.attrHandle;
      S.fn.extend({ attr: function(e2, t2) {
        return $2(this, S.attr, e2, t2, 1 < arguments.length);
      }, removeAttr: function(e2) {
        return this.each(function() {
          S.removeAttr(this, e2);
        });
      } }), S.extend({ attr: function(e2, t2, n2) {
        var r2, i2, o2 = e2.nodeType;
        if (3 !== o2 && 8 !== o2 && 2 !== o2)
          return "undefined" == typeof e2.getAttribute ? S.prop(e2, t2, n2) : (1 === o2 && S.isXMLDoc(e2) || (i2 = S.attrHooks[t2.toLowerCase()] || (S.expr.match.bool.test(t2) ? ct : void 0)), void 0 !== n2 ? null === n2 ? void S.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = S.find.attr(e2, t2)) ? void 0 : r2);
      }, attrHooks: { type: { set: function(e2, t2) {
        if (!y.radioValue && "radio" === t2 && A(e2, "input")) {
          var n2 = e2.value;
          return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
        }
      } } }, removeAttr: function(e2, t2) {
        var n2, r2 = 0, i2 = t2 && t2.match(P);
        if (i2 && 1 === e2.nodeType)
          while (n2 = i2[r2++])
            e2.removeAttribute(n2);
      } }), ct = { set: function(e2, t2, n2) {
        return false === t2 ? S.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
      } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
        var a2 = ft[t2] || S.find.attr;
        ft[t2] = function(e3, t3, n2) {
          var r2, i2, o2 = t3.toLowerCase();
          return n2 || (i2 = ft[o2], ft[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, ft[o2] = i2), r2;
        };
      });
      var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;
      function ht(e2) {
        return (e2.match(P) || []).join(" ");
      }
      function gt(e2) {
        return e2.getAttribute && e2.getAttribute("class") || "";
      }
      function vt(e2) {
        return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(P) || [];
      }
      S.fn.extend({ prop: function(e2, t2) {
        return $2(this, S.prop, e2, t2, 1 < arguments.length);
      }, removeProp: function(e2) {
        return this.each(function() {
          delete this[S.propFix[e2] || e2];
        });
      } }), S.extend({ prop: function(e2, t2, n2) {
        var r2, i2, o2 = e2.nodeType;
        if (3 !== o2 && 8 !== o2 && 2 !== o2)
          return 1 === o2 && S.isXMLDoc(e2) || (t2 = S.propFix[t2] || t2, i2 = S.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
      }, propHooks: { tabIndex: { get: function(e2) {
        var t2 = S.find.attr(e2, "tabindex");
        return t2 ? parseInt(t2, 10) : pt.test(e2.nodeName) || dt.test(e2.nodeName) && e2.href ? 0 : -1;
      } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e2) {
        var t2 = e2.parentNode;
        return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
      }, set: function(e2) {
        var t2 = e2.parentNode;
        t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
      } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this;
      }), S.fn.extend({ addClass: function(t2) {
        var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
        if (m(t2))
          return this.each(function(e3) {
            S(this).addClass(t2.call(this, e3, gt(this)));
          });
        if ((e2 = vt(t2)).length) {
          while (n2 = this[u2++])
            if (i2 = gt(n2), r2 = 1 === n2.nodeType && " " + ht(i2) + " ") {
              a2 = 0;
              while (o2 = e2[a2++])
                r2.indexOf(" " + o2 + " ") < 0 && (r2 += o2 + " ");
              i2 !== (s2 = ht(r2)) && n2.setAttribute("class", s2);
            }
        }
        return this;
      }, removeClass: function(t2) {
        var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
        if (m(t2))
          return this.each(function(e3) {
            S(this).removeClass(t2.call(this, e3, gt(this)));
          });
        if (!arguments.length)
          return this.attr("class", "");
        if ((e2 = vt(t2)).length) {
          while (n2 = this[u2++])
            if (i2 = gt(n2), r2 = 1 === n2.nodeType && " " + ht(i2) + " ") {
              a2 = 0;
              while (o2 = e2[a2++])
                while (-1 < r2.indexOf(" " + o2 + " "))
                  r2 = r2.replace(" " + o2 + " ", " ");
              i2 !== (s2 = ht(r2)) && n2.setAttribute("class", s2);
            }
        }
        return this;
      }, toggleClass: function(i2, t2) {
        var o2 = typeof i2, a2 = "string" === o2 || Array.isArray(i2);
        return "boolean" == typeof t2 && a2 ? t2 ? this.addClass(i2) : this.removeClass(i2) : m(i2) ? this.each(function(e2) {
          S(this).toggleClass(i2.call(this, e2, gt(this), t2), t2);
        }) : this.each(function() {
          var e2, t3, n2, r2;
          if (a2) {
            t3 = 0, n2 = S(this), r2 = vt(i2);
            while (e2 = r2[t3++])
              n2.hasClass(e2) ? n2.removeClass(e2) : n2.addClass(e2);
          } else
            void 0 !== i2 && "boolean" !== o2 || ((e2 = gt(this)) && Y.set(this, "__className__", e2), this.setAttribute && this.setAttribute("class", e2 || false === i2 ? "" : Y.get(this, "__className__") || ""));
        });
      }, hasClass: function(e2) {
        var t2, n2, r2 = 0;
        t2 = " " + e2 + " ";
        while (n2 = this[r2++])
          if (1 === n2.nodeType && -1 < (" " + ht(gt(n2)) + " ").indexOf(t2))
            return true;
        return false;
      } });
      var yt = /\r/g;
      S.fn.extend({ val: function(n2) {
        var r2, e2, i2, t2 = this[0];
        return arguments.length ? (i2 = m(n2), this.each(function(e3) {
          var t3;
          1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, S(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = S.map(t3, function(e4) {
            return null == e4 ? "" : e4 + "";
          })), (r2 = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
        })) : t2 ? (r2 = S.valHooks[t2.type] || S.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(yt, "") : null == e2 ? "" : e2 : void 0;
      } }), S.extend({ valHooks: { option: { get: function(e2) {
        var t2 = S.find.attr(e2, "value");
        return null != t2 ? t2 : ht(S.text(e2));
      } }, select: { get: function(e2) {
        var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
        for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++)
          if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !A(n2.parentNode, "optgroup"))) {
            if (t2 = S(n2).val(), a2)
              return t2;
            s2.push(t2);
          }
        return s2;
      }, set: function(e2, t2) {
        var n2, r2, i2 = e2.options, o2 = S.makeArray(t2), a2 = i2.length;
        while (a2--)
          ((r2 = i2[a2]).selected = -1 < S.inArray(S.valHooks.option.get(r2), o2)) && (n2 = true);
        return n2 || (e2.selectedIndex = -1), o2;
      } } } }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = { set: function(e2, t2) {
          if (Array.isArray(t2))
            return e2.checked = -1 < S.inArray(S(e2).val(), t2);
        } }, y.checkOn || (S.valHooks[this].get = function(e2) {
          return null === e2.getAttribute("value") ? "on" : e2.value;
        });
      }), y.focusin = "onfocusin" in C;
      var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function(e2) {
        e2.stopPropagation();
      };
      S.extend(S.event, { trigger: function(e2, t2, n2, r2) {
        var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || E], d2 = v.call(e2, "type") ? e2.type : e2, h2 = v.call(e2, "namespace") ? e2.namespace.split(".") : [];
        if (o2 = f2 = a2 = n2 = n2 || E, 3 !== n2.nodeType && 8 !== n2.nodeType && !mt.test(d2 + S.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[S.expando] ? e2 : new S.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : S.makeArray(t2, [e2]), c2 = S.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
          if (!r2 && !c2.noBubble && !x(n2)) {
            for (s2 = c2.delegateType || d2, mt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode)
              p2.push(o2), a2 = o2;
            a2 === (n2.ownerDocument || E) && p2.push(a2.defaultView || a2.parentWindow || C);
          }
          i2 = 0;
          while ((o2 = p2[i2++]) && !e2.isPropagationStopped())
            f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (Y.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && Y.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && V(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
          return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !V(n2) || u2 && m(n2[d2]) && !x(n2) && ((a2 = n2[u2]) && (n2[u2] = null), S.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, xt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, xt), S.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
        }
      }, simulate: function(e2, t2, n2) {
        var r2 = S.extend(new S.Event(), n2, { type: e2, isSimulated: true });
        S.event.trigger(r2, null, t2);
      } }), S.fn.extend({ trigger: function(e2, t2) {
        return this.each(function() {
          S.event.trigger(e2, t2, this);
        });
      }, triggerHandler: function(e2, t2) {
        var n2 = this[0];
        if (n2)
          return S.event.trigger(e2, t2, n2, true);
      } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n2, r2) {
        var i2 = function(e2) {
          S.event.simulate(r2, e2.target, S.event.fix(e2));
        };
        S.event.special[r2] = { setup: function() {
          var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2);
          t2 || e2.addEventListener(n2, i2, true), Y.access(e2, r2, (t2 || 0) + 1);
        }, teardown: function() {
          var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2) - 1;
          t2 ? Y.access(e2, r2, t2) : (e2.removeEventListener(n2, i2, true), Y.remove(e2, r2));
        } };
      });
      var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/;
      S.parseXML = function(e2) {
        var t2, n2;
        if (!e2 || "string" != typeof e2)
          return null;
        try {
          t2 = new C.DOMParser().parseFromString(e2, "text/xml");
        } catch (e3) {
        }
        return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || S.error("Invalid XML: " + (n2 ? S.map(n2.childNodes, function(e3) {
          return e3.textContent;
        }).join("\n") : e2)), t2;
      };
      var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i;
      function At(n2, e2, r2, i2) {
        var t2;
        if (Array.isArray(e2))
          S.each(e2, function(e3, t3) {
            r2 || Ct.test(n2) ? i2(n2, t3) : At(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
          });
        else if (r2 || "object" !== w(e2))
          i2(n2, e2);
        else
          for (t2 in e2)
            At(n2 + "[" + t2 + "]", e2[t2], r2, i2);
      }
      S.param = function(e2, t2) {
        var n2, r2 = [], i2 = function(e3, t3) {
          var n3 = m(t3) ? t3() : t3;
          r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
        };
        if (null == e2)
          return "";
        if (Array.isArray(e2) || e2.jquery && !S.isPlainObject(e2))
          S.each(e2, function() {
            i2(this.name, this.value);
          });
        else
          for (n2 in e2)
            At(n2, e2[n2], t2, i2);
        return r2.join("&");
      }, S.fn.extend({ serialize: function() {
        return S.param(this.serializeArray());
      }, serializeArray: function() {
        return this.map(function() {
          var e2 = S.prop(this, "elements");
          return e2 ? S.makeArray(e2) : this;
        }).filter(function() {
          var e2 = this.type;
          return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e2) && (this.checked || !pe.test(e2));
        }).map(function(e2, t2) {
          var n2 = S(this).val();
          return null == n2 ? null : Array.isArray(n2) ? S.map(n2, function(e3) {
            return { name: t2.name, value: e3.replace(Et, "\r\n") };
          }) : { name: t2.name, value: n2.replace(Et, "\r\n") };
        }).get();
      } });
      var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a");
      function It(o2) {
        return function(e2, t2) {
          "string" != typeof e2 && (t2 = e2, e2 = "*");
          var n2, r2 = 0, i2 = e2.toLowerCase().match(P) || [];
          if (m(t2))
            while (n2 = i2[r2++])
              "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
        };
      }
      function Wt(t2, i2, o2, a2) {
        var s2 = {}, u2 = t2 === Pt;
        function l2(e2) {
          var r2;
          return s2[e2] = true, S.each(t2[e2] || [], function(e3, t3) {
            var n2 = t3(i2, o2, a2);
            return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
          }), r2;
        }
        return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
      }
      function Ft(e2, t2) {
        var n2, r2, i2 = S.ajaxSettings.flatOptions || {};
        for (n2 in t2)
          void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
        return r2 && S.extend(true, e2, r2), e2;
      }
      Mt.href = bt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
        return t2 ? Ft(Ft(e2, S.ajaxSettings), t2) : Ft(S.ajaxSettings, e2);
      }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function(e2, t2) {
        "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
        var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = S.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? S(y2) : S.event, x2 = S.Deferred(), b2 = S.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
          var t3;
          if (h2) {
            if (!n2) {
              n2 = {};
              while (t3 = qt.exec(p2))
                n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
            }
            t3 = n2[e3.toLowerCase() + " "];
          }
          return null == t3 ? null : t3.join(", ");
        }, getAllResponseHeaders: function() {
          return h2 ? p2 : null;
        }, setRequestHeader: function(e3, t3) {
          return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
        }, overrideMimeType: function(e3) {
          return null == h2 && (v2.mimeType = e3), this;
        }, statusCode: function(e3) {
          var t3;
          if (e3)
            if (h2)
              T2.always(e3[T2.status]);
            else
              for (t3 in e3)
                w2[t3] = [w2[t3], e3[t3]];
          return this;
        }, abort: function(e3) {
          var t3 = e3 || u2;
          return c2 && c2.abort(t3), l2(0, t3), this;
        } };
        if (x2.promise(T2), v2.url = ((e2 || v2.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(P) || [""], null == v2.crossDomain) {
          r2 = E.createElement("a");
          try {
            r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Mt.protocol + "//" + Mt.host != r2.protocol + "//" + r2.host;
          } catch (e3) {
            v2.crossDomain = true;
          }
        }
        if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = S.param(v2.data, v2.traditional)), Wt(Ot, v2, t2, T2), h2)
          return T2;
        for (i2 in (g2 = S.event && v2.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Lt.test(v2.type), f2 = v2.url.replace(jt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Nt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (Tt.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(Dt, "$1"), o2 = (Tt.test(f2) ? "&" : "?") + "_=" + wt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (S.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", S.lastModified[f2]), S.etag[f2] && T2.setRequestHeader("If-None-Match", S.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers)
          T2.setRequestHeader(i2, v2.headers[i2]);
        if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2))
          return T2.abort();
        if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Wt(Pt, v2, t2, T2)) {
          if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2)
            return T2;
          v2.async && 0 < v2.timeout && (d2 = C.setTimeout(function() {
            T2.abort("timeout");
          }, v2.timeout));
          try {
            h2 = false, c2.send(a2, l2);
          } catch (e3) {
            if (h2)
              throw e3;
            l2(-1, e3);
          }
        } else
          l2(-1, "No Transport");
        function l2(e3, t3, n3, r3) {
          var i3, o3, a3, s3, u3, l3 = t3;
          h2 || (h2 = true, d2 && C.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = function(e4, t4, n4) {
            var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
            while ("*" === u4[0])
              u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
            if (r4) {
              for (i4 in s4)
                if (s4[i4] && s4[i4].test(r4)) {
                  u4.unshift(i4);
                  break;
                }
            }
            if (u4[0] in n4)
              o4 = u4[0];
            else {
              for (i4 in n4) {
                if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
                  o4 = i4;
                  break;
                }
                a4 || (a4 = i4);
              }
              o4 = o4 || a4;
            }
            if (o4)
              return o4 !== u4[0] && u4.unshift(o4), n4[o4];
          }(v2, T2, n3)), !i3 && -1 < S.inArray("script", v2.dataTypes) && S.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
          }), s3 = function(e4, t4, n4, r4) {
            var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
            if (c3[1])
              for (a4 in e4.converters)
                l4[a4.toLowerCase()] = e4.converters[a4];
            o4 = c3.shift();
            while (o4)
              if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
                if ("*" === o4)
                  o4 = u4;
                else if ("*" !== u4 && u4 !== o4) {
                  if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
                    for (i4 in l4)
                      if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                        true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                        break;
                      }
                  }
                  if (true !== a4)
                    if (a4 && e4["throws"])
                      t4 = a4(t4);
                    else
                      try {
                        t4 = a4(t4);
                      } catch (e5) {
                        return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
                      }
                }
              }
            return { state: "success", data: t4 };
          }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (S.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (S.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --S.active || S.event.trigger("ajaxStop")));
        }
        return T2;
      }, getJSON: function(e2, t2, n2) {
        return S.get(e2, t2, n2, "json");
      }, getScript: function(e2, t2) {
        return S.get(e2, void 0, t2, "script");
      } }), S.each(["get", "post"], function(e2, i2) {
        S[i2] = function(e3, t2, n2, r2) {
          return m(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), S.ajax(S.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, S.isPlainObject(e3) && e3));
        };
      }), S.ajaxPrefilter(function(e2) {
        var t2;
        for (t2 in e2.headers)
          "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
      }), S._evalUrl = function(e2, t2, n2) {
        return S.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
        } }, dataFilter: function(e3) {
          S.globalEval(e3, t2, n2);
        } });
      }, S.fn.extend({ wrapAll: function(e2) {
        var t2;
        return this[0] && (m(e2) && (e2 = e2.call(this[0])), t2 = S(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
          var e3 = this;
          while (e3.firstElementChild)
            e3 = e3.firstElementChild;
          return e3;
        }).append(this)), this;
      }, wrapInner: function(n2) {
        return m(n2) ? this.each(function(e2) {
          S(this).wrapInner(n2.call(this, e2));
        }) : this.each(function() {
          var e2 = S(this), t2 = e2.contents();
          t2.length ? t2.wrapAll(n2) : e2.append(n2);
        });
      }, wrap: function(t2) {
        var n2 = m(t2);
        return this.each(function(e2) {
          S(this).wrapAll(n2 ? t2.call(this, e2) : t2);
        });
      }, unwrap: function(e2) {
        return this.parent(e2).not("body").each(function() {
          S(this).replaceWith(this.childNodes);
        }), this;
      } }), S.expr.pseudos.hidden = function(e2) {
        return !S.expr.pseudos.visible(e2);
      }, S.expr.pseudos.visible = function(e2) {
        return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
      }, S.ajaxSettings.xhr = function() {
        try {
          return new C.XMLHttpRequest();
        } catch (e2) {
        }
      };
      var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr();
      y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i2) {
        var o2, a2;
        if (y.cors || $t && !i2.crossDomain)
          return { send: function(e2, t2) {
            var n2, r2 = i2.xhr();
            if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields)
              for (n2 in i2.xhrFields)
                r2[n2] = i2.xhrFields[n2];
            for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2)
              r2.setRequestHeader(n2, e2[n2]);
            o2 = function(e3) {
              return function() {
                o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Bt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
              };
            }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
              4 === r2.readyState && C.setTimeout(function() {
                o2 && a2();
              });
            }, o2 = o2("abort");
            try {
              r2.send(i2.hasContent && i2.data || null);
            } catch (e3) {
              if (o2)
                throw e3;
            }
          }, abort: function() {
            o2 && o2();
          } };
      }), S.ajaxPrefilter(function(e2) {
        e2.crossDomain && (e2.contents.script = false);
      }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
        return S.globalEval(e2), e2;
      } } }), S.ajaxPrefilter("script", function(e2) {
        void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
      }), S.ajaxTransport("script", function(n2) {
        var r2, i2;
        if (n2.crossDomain || n2.scriptAttrs)
          return { send: function(e2, t2) {
            r2 = S("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
              r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
            }), E.head.appendChild(r2[0]);
          }, abort: function() {
            i2 && i2();
          } };
      });
      var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
      S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
        var e2 = zt.pop() || S.expando + "_" + wt.guid++;
        return this[e2] = true, e2;
      } }), S.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
        var r2, i2, o2, a2 = false !== e2.jsonp && (Ut.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e2.data) && "data");
        if (a2 || "jsonp" === e2.dataTypes[0])
          return r2 = e2.jsonpCallback = m(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Ut, "$1" + r2) : false !== e2.jsonp && (e2.url += (Tt.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
            return o2 || S.error(r2 + " was not called"), o2[0];
          }, e2.dataTypes[0] = "json", i2 = C[r2], C[r2] = function() {
            o2 = arguments;
          }, n2.always(function() {
            void 0 === i2 ? S(C).removeProp(r2) : C[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, zt.push(r2)), o2 && m(i2) && i2(o2[0]), o2 = i2 = void 0;
          }), "script";
      }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e2, t2, n2) {
        return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (y.createHTMLDocument ? ((r2 = (t2 = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t2.head.appendChild(r2)) : t2 = E), o2 = !n2 && [], (i2 = N.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = xe([e2], t2, o2), o2 && o2.length && S(o2).remove(), S.merge([], i2.childNodes)));
        var r2, i2, o2;
      }, S.fn.load = function(e2, t2, n2) {
        var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
        return -1 < s2 && (r2 = ht(e2.slice(s2)), e2 = e2.slice(0, s2)), m(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && S.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
          o2 = arguments, a2.html(r2 ? S("<div>").append(S.parseHTML(e3)).find(r2) : e3);
        }).always(n2 && function(e3, t3) {
          a2.each(function() {
            n2.apply(this, o2 || [e3.responseText, t3, e3]);
          });
        }), this;
      }, S.expr.pseudos.animated = function(t2) {
        return S.grep(S.timers, function(e2) {
          return t2 === e2.elem;
        }).length;
      }, S.offset = { setOffset: function(e2, t2, n2) {
        var r2, i2, o2, a2, s2, u2, l2 = S.css(e2, "position"), c2 = S(e2), f2 = {};
        "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = S.css(e2, "top"), u2 = S.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), m(t2) && (t2 = t2.call(e2, n2, S.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
      } }, S.fn.extend({ offset: function(t2) {
        if (arguments.length)
          return void 0 === t2 ? this : this.each(function(e3) {
            S.offset.setOffset(this, t2, e3);
          });
        var e2, n2, r2 = this[0];
        return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
      }, position: function() {
        if (this[0]) {
          var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
          if ("fixed" === S.css(r2, "position"))
            t2 = r2.getBoundingClientRect();
          else {
            t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
            while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === S.css(e2, "position"))
              e2 = e2.parentNode;
            e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = S(e2).offset()).top += S.css(e2, "borderTopWidth", true), i2.left += S.css(e2, "borderLeftWidth", true));
          }
          return { top: t2.top - i2.top - S.css(r2, "marginTop", true), left: t2.left - i2.left - S.css(r2, "marginLeft", true) };
        }
      }, offsetParent: function() {
        return this.map(function() {
          var e2 = this.offsetParent;
          while (e2 && "static" === S.css(e2, "position"))
            e2 = e2.offsetParent;
          return e2 || re;
        });
      } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
        var o2 = "pageYOffset" === i2;
        S.fn[t2] = function(e2) {
          return $2(this, function(e3, t3, n2) {
            var r2;
            if (x(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2)
              return r2 ? r2[i2] : e3[t3];
            r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
          }, t2, e2, arguments.length);
        };
      }), S.each(["top", "left"], function(e2, n2) {
        S.cssHooks[n2] = Fe(y.pixelPosition, function(e3, t2) {
          if (t2)
            return t2 = We(e3, n2), Pe.test(t2) ? S(e3).position()[n2] + "px" : t2;
        });
      }), S.each({ Height: "height", Width: "width" }, function(a2, s2) {
        S.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
          S.fn[o2] = function(e2, t2) {
            var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
            return $2(this, function(e3, t3, n3) {
              var r3;
              return x(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? S.css(e3, t3, i2) : S.style(e3, t3, n3, i2);
            }, s2, n2 ? e2 : void 0, n2);
          };
        });
      }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
        S.fn[t2] = function(e3) {
          return this.on(t2, e3);
        };
      }), S.fn.extend({ bind: function(e2, t2, n2) {
        return this.on(e2, null, t2, n2);
      }, unbind: function(e2, t2) {
        return this.off(e2, null, t2);
      }, delegate: function(e2, t2, n2, r2) {
        return this.on(t2, e2, n2, r2);
      }, undelegate: function(e2, t2, n2) {
        return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
      }, hover: function(e2, t2) {
        return this.mouseenter(e2).mouseleave(t2 || e2);
      } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
        S.fn[n2] = function(e3, t2) {
          return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
        };
      });
      var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      S.proxy = function(e2, t2) {
        var n2, r2, i2;
        if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), m(e2))
          return r2 = s.call(arguments, 2), (i2 = function() {
            return e2.apply(t2 || this, r2.concat(s.call(arguments)));
          }).guid = e2.guid = e2.guid || S.guid++, i2;
      }, S.holdReady = function(e2) {
        e2 ? S.readyWait++ : S.ready(true);
      }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e2) {
        var t2 = S.type(e2);
        return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
      }, S.trim = function(e2) {
        return null == e2 ? "" : (e2 + "").replace(Xt, "");
      }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S;
      });
      var Vt = C.jQuery, Gt = C.$;
      return S.noConflict = function(e2) {
        return C.$ === S && (C.$ = Gt), e2 && C.jQuery === S && (C.jQuery = Vt), S;
      }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
    });
    const sideToggle = document.querySelector(".js-side-toggle");
    const side = document.querySelector(".js-side");
    const mainContent = document.querySelector(".js-main");
    sideToggle.addEventListener("click", () => {
      side.classList.toggle("minify");
      mainContent.classList.toggle("wide");
    });
    $(".custom-select").each(function() {
      var classes = $(this).attr("class");
      $(this).attr("id");
      $(this).attr("name");
      var template = '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + "</span>";
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + "</span>";
      });
      template += "</div></div>";
      $(this).wrap('<div class="custom-select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(
      function() {
        $(this).parents(".custom-options").addClass("option-hover");
      },
      function() {
        $(this).parents(".custom-options").removeClass("option-hover");
      }
    );
    $(".custom-select-trigger").on("click", function() {
      $("html").one("click", function() {
        $(".custom-select").removeClass("opened");
      });
      $(this).parents(".custom-select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
      $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
      $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
    var button = document.getElementById("done");
    button.addEventListener("click", showAlert);
    function showAlert() {
      alert("Все успішно завершено!");
    }
    var sidebarItems = document.querySelectorAll(".nav__list-link");
    document.querySelectorAll(".page");
    sidebarItems.forEach(function(item) {
      item.addEventListener("click", function() {
        var pageId = this.getAttribute("id");
        var activeItem = document.querySelector(".nav__list-link.active");
        var activePage = document.querySelector(".page.active");
        activeItem.classList.remove("active");
        activePage.classList.remove("active");
        this.classList.add("active");
        var targetPage = document.getElementById(pageId + "-content");
        targetPage.classList.add("active");
      });
    });
  }
});
export default require_index_001();
