var Le = Object.defineProperty;
var ge = (s) => {
  throw TypeError(s);
};
var $e = (s, n, e) => n in s ? Le(s, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[n] = e;
var te = (s, n, e) => $e(s, typeof n != "symbol" ? n + "" : n, e), he = (s, n, e) => n.has(s) || ge("Cannot " + e);
var ne = (s, n, e) => (he(s, n, "read from private field"), e ? e.call(s) : n.get(s)), ye = (s, n, e) => n.has(s) ? ge("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(s) : n.set(s, e), _e = (s, n, e, a) => (he(s, n, "write to private field"), a ? a.call(s, e) : n.set(s, e), e);
import { inject as ze, ref as k, createElementBlock as h, openBlock as p, createElementVNode as P, defineComponent as x, computed as T, resolveDirective as K, withDirectives as D, normalizeStyle as A, normalizeClass as v, createCommentVNode as B, renderSlot as $, unref as l, createVNode as S, createTextVNode as G, toDisplayString as F, useSlots as oe, Fragment as X, renderList as J, createBlock as q, resolveDynamicComponent as de, mergeProps as Ce, vModelDynamic as Ee, watch as W, onMounted as me, onUnmounted as pe, Teleport as le, Transition as Z, withCtx as Q, vShow as ee, TransitionGroup as Be, createApp as Te, reactive as Pe } from "vue";
const we = Symbol("im-design-token");
var j;
class Ve {
  constructor() {
    ye(this, j);
    _e(this, j, []);
  }
  async add(n) {
    ne(this, j).push(n);
  }
  remove() {
    try {
      const n = ne(this, j).shift();
      n && this.run(n);
    } catch (n) {
      console.error(n);
    }
  }
  async run(n) {
    try {
      const e = n.querySelector(".im-ripple__item");
      if (!e) return;
      let a = Date.now(), t = e.getAttribute("data-time");
      const i = a - Number(t) || 0;
      i && await new Promise((o) => {
        e.style.opacity = "0.1";
        const f = 200 - i;
        setTimeout(
          () => {
            o(null);
          },
          f > 0 ? f : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms", setTimeout(() => {
        n && (n == null || n.remove()), ne(this, j).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
}
j = new WeakMap();
async function Se(s, n, e) {
  const a = window.getComputedStyle(e), t = e.getBoundingClientRect(), i = document.createElement("div");
  i.className = "im-ripple", n.add(i);
  const o = document.createElement("div");
  o.className = "im-ripple__item";
  const f = s.clientX || s.touches && s.touches[0].clientX, m = s.clientY || s.touches && s.touches[0].clientY, d = Math.max(t.width, t.height), r = f - t.left - d / 2, c = m - t.top - d / 2, g = t.width - t.height <= 5;
  Object.assign(o.style, {
    "background-color": a.color,
    width: `${d}px`,
    height: `${d}px`,
    left: `${r}px`,
    top: `${c}px`,
    opacity: "0.15",
    transform: g ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), o.setAttribute("data-time", Date.now() + ""), i.appendChild(o), e.appendChild(i);
  const y = a.position;
  y === "static" && (e.style.position = "relative", e.dataset.originalPosition = y), o.getBoundingClientRect(), o.style.transform = "scale(2.8)", o.style.opacity = "0.33";
}
const Me = {
  mounted(s, n) {
    s.IM_RIPPLE_VALUE = n.value;
    const e = new Ve(), a = (f) => {
      s.IM_RIPPLE_VALUE && Se(f, e, s);
    }, t = () => {
      e.remove();
    }, i = () => {
      s.addEventListener("mousedown", a, { passive: !0 }), window.addEventListener("mouseup", t, { passive: !0 });
    }, o = () => {
      s.removeEventListener("mousedown", a), window.removeEventListener("mouseup", t);
    };
    i(), s._rippleListeners = { remove: o };
  },
  beforeUnmount(s) {
    var n;
    (n = s._rippleListeners) == null || n.remove();
  },
  updated(s, n) {
    s.IM_RIPPLE_VALUE = n.value;
  }
}, z = (s) => {
  const n = "im-" + s;
  return {
    b: () => n,
    e: (e) => `${n}__${e}`,
    m: (e) => `${n}--${e}`,
    is: (e, a) => a ? `is-${e}` : ""
  };
}, U = (s, n) => {
  const e = ze(we), a = k(Number(e.size || 36)), t = k(e.zIndex || 1e3);
  return { sizeToken: a, zIndexToken: t };
}, Ae = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function Ne(s, n) {
  return p(), h("svg", Ae, n[0] || (n[0] = [
    P("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const Re = { render: Ne }, De = ["tabindex", "type", "disabled"], Oe = /* @__PURE__ */ x({
  name: "ImButton",
  __name: "ImButton",
  props: {
    type: {},
    disabled: { type: Boolean },
    color: {},
    size: {},
    shape: {},
    loading: { type: Boolean },
    text: {},
    variant: {},
    tabindex: {},
    width: {}
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = s, a = n, t = z("button"), { sizeToken: i } = U(), o = T(() => [
      t.b(),
      e.color && t.m(e.color),
      e.shape && t.m(e.shape),
      e.variant && t.m(e.variant),
      t.is("disabled", e.disabled),
      t.is("loading", e.loading)
    ].filter(Boolean)), f = T(() => {
      let r = +(e.size || i.value || 36);
      return {
        "--im-button-size": r + "px",
        "--im-button-padding": (r * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), m = T(() => e.loading && ["square", "circle"].includes(e.shape)), d = () => {
      e.disabled || e.loading || a("click");
    };
    return (r, c) => {
      const g = K("ripple");
      return D((p(), h("button", {
        class: v(o.value),
        onClick: d,
        style: A(f.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (p(), h("span", {
          key: 0,
          class: v([l(t).e("loading")])
        }, [
          S(l(Re))
        ], 2)) : B("", !0),
        m.value ? B("", !0) : $(r.$slots, "default", { key: 1 }, () => [
          G(F(e.text), 1)
        ], !0)
      ], 14, De)), [
        [g, !0]
      ]);
    };
  }
}), L = (s, n) => {
  const e = s.__vccOpts || s;
  for (const [a, t] of n)
    e[a] = t;
  return e;
}, re = /* @__PURE__ */ L(Oe, [["__scopeId", "data-v-fe80f42d"]]);
re.install = (s) => {
  s.component("ImButton", re);
};
const Ye = /* @__PURE__ */ x({
  name: "ImRow",
  __name: "ImRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "top"
    }
  },
  setup(s) {
    const n = s, e = oe(), a = T(() => {
      var i;
      return ((i = e.default) == null ? void 0 : i.call(e)) || [];
    }), t = z("row");
    return (i, o) => (p(), h("div", {
      class: v([l(t).b()]),
      style: A({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (p(!0), h(X, null, J(a.value, (f, m) => (p(), q(de(f), { key: m }))), 128))
    ], 6));
  }
}), ie = /* @__PURE__ */ L(Ye, [["__scopeId", "data-v-5179967f"]]), He = /* @__PURE__ */ x({
  name: "ImCol",
  __name: "ImCol",
  props: {
    span: {
      type: [Number, String],
      default: 4
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(s) {
    const n = s, e = z("col"), a = T(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (t, i) => (p(), h("div", {
      class: v([l(e).b()]),
      style: A({
        "--im-col-w": a.value,
        "--im-col-offset": n.offset
      })
    }, [
      $(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ce = /* @__PURE__ */ L(He, [["__scopeId", "data-v-ecf91058"]]);
ie.install = (s) => {
  s.component("ImRow", ie);
};
ce.install = (s) => {
  s.component("ImCol", ce);
};
const qe = /* @__PURE__ */ x({
  name: "ImInput",
  __name: "ImInput",
  props: {
    modelValue: {},
    size: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    placeholder: {},
    type: {},
    name: {},
    id: {},
    class: {},
    maxlength: {},
    minlength: {},
    max: {},
    min: {},
    step: {},
    pattern: {},
    required: { type: Boolean },
    autocomplete: {},
    autofocus: { type: Boolean },
    tabindex: {}
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = s, { sizeToken: a } = U(), t = n, i = k(e.modelValue), o = z("input"), f = () => {
      t("update:modelValue", i.value), t("change", i.value);
    };
    return (m, d) => (p(), h("div", {
      class: v([l(o).b()]),
      style: A({
        "--in-input-size": (e.size || l(a) || 36) + "px"
      })
    }, [
      D(P("input", Ce({
        class: [l(o).e("input")],
        "onUpdate:modelValue": d[0] || (d[0] = (r) => i.value = r)
      }, e, { onInput: f }), null, 16), [
        [Ee, i.value]
      ])
    ], 6));
  }
}), ue = /* @__PURE__ */ L(qe, [["__scopeId", "data-v-6c70856c"]]);
ue.install = (s) => {
  s.component("ImInput", ue);
};
const Fe = /* @__PURE__ */ x({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(s) {
    const n = s;
    return (e, a) => (p(), h("i", {
      class: v(["im-icon", [`im-icon-${n.name}`]]),
      style: A({
        "--icon-size": (parseInt(String(n.size)) || 16) + "px",
        "--icon-color": n.color
      })
    }, null, 6));
  }
}), H = /* @__PURE__ */ L(Fe, [["__scopeId", "data-v-1e711363"]]);
H.install = function(s) {
  s.component("ImIcon", H);
};
const Xe = /* @__PURE__ */ x({
  __name: "ImDivider",
  props: {
    vertical: { type: Boolean },
    color: {},
    size: {},
    margin: {},
    className: {},
    textLeftWidth: {},
    textRightWidth: {}
  },
  setup(s) {
    const n = z("divider"), e = s;
    return (a, t) => (p(), h("div", {
      class: v([l(n).b(), l(n).is("vertical", e.vertical)]),
      style: A({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? B("", !0) : (p(), h("span", {
        key: 0,
        class: v([l(n).e("text")])
      }, [
        $(a.$slots, "default", {}, void 0, !0)
      ], 2))
    ], 6));
  }
}), ae = /* @__PURE__ */ L(Xe, [["__scopeId", "data-v-108f9bec"]]);
ae.name = "ImDivider";
ae.install = function(s) {
  s.component("ImDivider", ae);
};
const O = (s, n) => (n.install = (e) => {
  e.component(s, n);
}, n), fe = (s, n) => {
  let e;
  return function(...a) {
    e || (e = setTimeout(() => {
      s.apply(this, a), e = null;
    }, n));
  };
}, se = (s, n) => {
  let e;
  return function(...a) {
    e && clearTimeout(e), e = setTimeout(() => {
      s.apply(this, a);
    }, n);
  };
}, be = (s, n, e) => {
  if (!e) return !1;
  const a = e.getBoundingClientRect();
  return s >= a.left && s <= a.left + a.width && n >= a.top && n <= a.top + a.height;
}, We = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"], Ie = (s) => {
  if (typeof s == "number") return `${s}px`;
  const n = String(s);
  return s ? We.some((e) => n.includes(e)) ? n : `${s}px` : "";
}, Ue = ["onClick"], je = /* @__PURE__ */ x({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(s) {
    const n = z("anchor");
    let e = null;
    const a = k(null), t = k(null), i = k(null), o = s;
    W(
      () => o.target,
      () => {
        e && e(), e = d();
      }
    ), me(() => {
      e = d();
    }), pe(() => {
      e && e();
    });
    function f(c) {
      let g = c == null ? void 0 : c.scrollTop;
      return a.value === window && (g = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), g;
    }
    function m(c) {
      var Y;
      if (i.value || !a.value) return;
      const g = a.value === window ? c.target : a.value;
      let y = f(g);
      const b = g.offsetTop || 0, N = (o.data || []).map(({ id: C }) => {
        const E = document.getElementById(C);
        return E ? {
          id: C,
          offsetTop: E.offsetTop - b,
          el: E
        } : null;
      }).filter(Boolean);
      t.value = null;
      for (let C = 0; C < N.length; C++) {
        const E = N[C];
        if (y >= E.offsetTop - (o.offset || 0) && y <= E.offsetTop + (((Y = E.el) == null ? void 0 : Y.clientHeight) || 0) - (o.offset || 0)) {
          t.value = E.id;
          return;
        }
      }
      if (!t.value && y >= (parseInt(String(o.offset)) || 0)) {
        const C = N.find((E) => y <= E.offsetTop - (o.offset || 0) && y > (o.offset || 0) ? (t.value = E.id, !0) : !1);
        C && (t.value = C.id);
      }
    }
    function d() {
      const c = o.target ? typeof o.target == "string" ? document.querySelector(o.target) : o.target : window;
      if (!c)
        return null;
      a.value = c;
      const g = fe(m, 50);
      return m({ target: c }), c.addEventListener("scroll", g, { passive: !0 }), () => {
        c.removeEventListener("scroll", g);
      };
    }
    async function r(c) {
      var b, N, Y;
      if (t.value === c || !c) return;
      i.value = c, t.value = c;
      const g = document.getElementById(c);
      if (!g) return;
      (N = a.value) == null || N.scrollTo({
        // @ts-ignore
        top: g.offsetTop - (o.offset || 0) - (((b = a.value) == null ? void 0 : b.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const y = se(() => {
        var C;
        i.value = null, (C = a.value) == null || C.removeEventListener("scroll", y);
      }, 300);
      (Y = a.value) == null || Y.addEventListener("scroll", y, { passive: !0 });
    }
    return (c, g) => {
      const y = K("ripple");
      return o.data && o.data.length ? (p(), h("ul", {
        key: 0,
        class: v([l(n).b()])
      }, [
        (p(!0), h(X, null, J(o.data, (b) => D((p(), h("li", {
          class: v([l(n).e("item"), l(n).is("active", t.value === b.id)]),
          onClick: () => r(b.id)
        }, [
          t.value === b.id ? (p(), h("span", {
            key: 0,
            class: v([l(n).e("bar")])
          }, null, 2)) : B("", !0),
          G(" " + F(b.text), 1)
        ], 10, Ue)), [
          [y, !0]
        ])), 256))
      ], 2)) : B("", !0);
    };
  }
}), Ge = /* @__PURE__ */ L(je, [["__scopeId", "data-v-4840d244"]]), Je = O("ImAnchor", Ge), Ke = /* @__PURE__ */ x({
  name: "ImAlert",
  __name: "ImAlert",
  props: {
    message: { default: "" },
    color: { default: "primary" },
    variant: {},
    title: { default: "" },
    showIcon: { type: Boolean, default: !0 },
    closable: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const e = n, a = k(null), t = s, i = z("alert"), o = oe(), f = T(() => !!(t.showIcon && t.title)), m = T(() => {
      switch (t.color) {
        case "error":
          return "close-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "success":
          return "check-circle-fill";
        default:
          return "info-circle-fill";
      }
    }), d = async () => {
      var r, c;
      e("close"), (r = a.value) == null || r.animate([{
        offset: 0,
        opacity: 1,
        transform: "scaleY(1)"
      }, {
        transform: "scaleY(0.9)",
        offset: 0.33,
        opacity: 0.25
      }, {
        transform: "scaleY(0)",
        offset: 1,
        opacity: 0
      }], {
        duration: 300,
        easing: "linear",
        fill: "forwards"
      }), await new Promise((g) => setTimeout(g, 300)), (c = a.value) == null || c.remove();
    };
    return (r, c) => {
      const g = K("ripple");
      return p(), h("div", {
        ref_key: "alertRef",
        ref: a,
        class: v([l(i).b(), l(i).m(t.color || "primary"), t.variant && l(i).m(t.variant || "")])
      }, [
        t.showIcon ? (p(), h("div", {
          key: 0,
          class: v([l(i).e("icon")])
        }, [
          $(r.$slots, "icon", {}, () => [
            S(l(H), {
              name: m.value,
              size: f.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], !0)
        ], 2)) : B("", !0),
        P("div", {
          class: v([l(i).e("content")])
        }, [
          t.title || l(o).title ? (p(), h("div", {
            key: 0,
            class: v([l(i).e("title")])
          }, [
            $(r.$slots, "title", {}, () => [
              G(F(t.title), 1)
            ], !0)
          ], 2)) : B("", !0),
          P("div", {
            class: v([l(i).e("message")])
          }, [
            $(r.$slots, "default", {}, () => [
              G(F(t.message), 1)
            ], !0)
          ], 2)
        ], 2),
        t.closable ? D((p(), h("div", {
          key: 1,
          class: v([l(i).e("close")]),
          onClick: d
        }, [
          $(r.$slots, "close", {}, () => [
            S(l(H), {
              name: "close",
              size: "16"
            })
          ], !0)
        ], 2)), [
          [g, !0]
        ]) : B("", !0)
      ], 2);
    };
  }
}), Qe = /* @__PURE__ */ L(Ke, [["__scopeId", "data-v-d11fdcb2"]]), Ze = O("ImAlert", Qe), et = /* @__PURE__ */ x({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = oe(), a = n, t = z("breadcrumb"), i = s, o = T(
      () => {
        var m, d;
        return (d = (m = e.default) == null ? void 0 : m.call(e)) == null ? void 0 : d.filter((r) => {
          var c;
          return (r == null ? void 0 : r.type) && ((c = r == null ? void 0 : r.type) == null ? void 0 : c.name) === "ImBreadcrumbItem";
        });
      }
    ), f = (m) => {
      m && i.modelValue !== m && (a("update:modelValue", m), a("change", m));
    };
    return (m, d) => (p(), h("div", {
      class: v([l(t).b()])
    }, [
      (p(!0), h(X, null, J(o.value, (r, c) => (p(), h(X, null, [
        (p(), q(de(r), {
          active: i.modelValue,
          onClick: f
        }, null, 8, ["active"])),
        o.value && o.value.length > 0 && c < o.value.length - 1 ? (p(), h("span", {
          key: 0,
          class: v([l(t).e("separator")])
        }, [
          $(m.$slots, "separator", {}, () => [
            G(F(i.separator), 1)
          ], !0)
        ], 2)) : B("", !0)
      ], 64))), 256))
    ], 2));
  }
}), tt = /* @__PURE__ */ L(et, [["__scopeId", "data-v-64336468"]]), nt = /* @__PURE__ */ x({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = z("breadcrumb__item"), a = s, t = n;
    return (i, o) => (p(), h("div", {
      onClick: o[0] || (o[0] = () => t("click", a.value)),
      class: v([l(e).b(), l(e).is("active", a.active === a.value && !!a.value)])
    }, [
      $(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), st = /* @__PURE__ */ L(nt, [["__scopeId", "data-v-40ed04b1"]]), at = O("ImBreadcrumb", tt), ot = O("ImBreadcrumb", st), lt = (s = 50) => {
  const n = k(0), e = k(0), a = fe((t) => {
    n.value = t.clientX, e.value = t.clientY;
  }, s);
  return me(() => {
    window.addEventListener("mousemove", a, { passive: !0 });
  }), pe(() => {
    window.removeEventListener("mousemove", a);
  }), { x: n, y: e };
}, rt = (s, n, e, a = "bottomLeft") => {
  W(
    () => s.value,
    () => {
      s.value && t();
    }
  );
  async function t() {
    var g;
    await new Promise((y) => requestAnimationFrame(y));
    const i = n == null ? void 0 : n.value, o = e == null ? void 0 : e.value;
    if (!i || !o) return;
    const m = (((g = i.children) == null ? void 0 : g.length) != 1 ? i : i.children[0]).getBoundingClientRect(), d = m.bottom, r = o.getBoundingClientRect(), c = 2;
    switch (a) {
      case "bottom":
        o.style.setProperty("top", `${d + c}px`), o.style.setProperty(
          "left",
          `${m.left + m.width / 2 - r.width / 2}px`
        );
        break;
      case "bottomRight":
        o.style.setProperty("top", `${d + c}px`), o.style.setProperty(
          "left",
          `${m.left + m.width - r.width}px`
        );
        break;
      case "top":
        o.style.setProperty(
          "top",
          `${m.top - r.height - c}px`
        ), o.style.setProperty(
          "left",
          `${m.left + m.width / 2 - r.width / 2}px`
        );
        break;
      case "topRight":
        o.style.setProperty(
          "top",
          `${m.top - r.height - c}px`
        ), o.style.setProperty(
          "left",
          `${m.right - r.width}px`
        );
        break;
      case "topLeft":
        o.style.setProperty(
          "top",
          `${m.top - r.height - c}px`
        ), o.style.setProperty("left", `${m.left}px`);
        break;
      default:
        o.style.setProperty("top", `${d + c}px`), o.style.setProperty("left", `${m.left}px`);
        break;
    }
  }
}, it = (s) => {
  const n = s.toLowerCase().includes("bottom") ? "translateY(-10px)" : "translateY(10px)";
  function e(t, i) {
    t.style.transform = n, t.style.opacity = "0", t.style.pointerEvents = "none", t.getBoundingClientRect(), t.style.transform = "translateY(0px)", t.style.opacity = "1", t.style.pointerEvents = "auto", i();
  }
  async function a(t, i) {
    t.style.transform = n, t.style.opacity = "0", t.getBoundingClientRect(), t.style.pointerEvents = "none";
    const o = () => {
      i(), t && (t.style.transform = "translateY(0px)", t.style.pointerEvents = "auto"), t.removeEventListener("transitionend", o);
    };
    t.addEventListener("transitionend", o, { passive: !0 });
  }
  return {
    onEnter: e,
    onLeave: a
  };
}, ct = /* @__PURE__ */ x({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: !1 },
    trigger: { default: "hover" },
    placement: { default: "bottomLeft" },
    zIndex: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    var u;
    const e = n, a = z("dropdown"), t = s, i = k(null), o = k(null), f = k(t.modelValue || !1), m = it((u = t.placement) != null && u.includes("top") ? "top" : "bottom");
    let d = null, r = 60;
    const { x: c, y: g } = lt(30), { zIndexToken: y } = U();
    rt(f, i, o, t.placement), me(() => {
      d && d(), d = E();
    }), pe(() => {
      d && d();
    }), W(() => t.trigger, () => {
      d && d(), d = E();
    });
    const b = fe(() => {
      const I = be(c.value, g.value, o.value);
      be(c.value, g.value, i.value) || I || (f.value = !1);
    }, r);
    W(() => [c.value, g.value], () => {
      t.trigger != "hover" || !f.value || b();
    });
    function N() {
      f.value = !0, e("update:modelValue", f.value), e("change", f.value), window.addEventListener("scroll", C, { passive: !0, capture: !0 });
    }
    function Y() {
      f.value = !1, e("update:modelValue", f.value), e("change", f.value), window.removeEventListener("scroll", C);
    }
    function C(I) {
      var _;
      (_ = o.value) != null && _.contains(I.target) || Y();
    }
    function E() {
      var _, w;
      d && d();
      const I = se((V) => {
        var M;
        (M = i.value) != null && M.contains(V.target) || Y();
      }, r);
      if (document.addEventListener("click", I, { passive: !0 }), t.trigger === "hover") {
        const V = se(N, r);
        return (_ = i.value) == null || _.addEventListener("mouseenter", V, { passive: !0 }), () => {
          var M;
          (M = i.value) == null || M.removeEventListener("mouseenter", V), document.removeEventListener("click", I);
        };
      }
      if (t.trigger === "click") {
        const V = se(() => {
          f.value ? Y() : N();
        }, r);
        return (w = i.value) == null || w.addEventListener("click", V, { passive: !0 }), () => {
          var M;
          (M = i.value) == null || M.removeEventListener("click", V), document.removeEventListener("click", I);
        };
      }
      return null;
    }
    return (I, _) => (p(), h("span", {
      class: v([l(a).b()]),
      ref_key: "dropdownRef",
      ref: i
    }, [
      $(I.$slots, "default", {}, void 0, !0),
      (p(), q(le, { to: "body" }, [
        S(Z, {
          onEnter: l(m).onEnter,
          onLeave: l(m).onLeave,
          duration: { enter: 200, leave: 200 }
        }, {
          default: Q(() => [
            D(P("div", {
              class: v([l(a).e("content")]),
              ref_key: "contentRef",
              ref: o,
              style: A({
                zIndex: t.zIndex || l(y)
              })
            }, [
              $(I.$slots, "content", {}, void 0, !0)
            ], 6), [
              [ee, f.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
}), ut = /* @__PURE__ */ L(ct, [["__scopeId", "data-v-f75be340"]]), dt = O("ImDropdown", ut), mt = /* @__PURE__ */ x({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = s, a = oe(), t = z("list"), i = T(() => {
      var d;
      const m = ((d = a.default) == null ? void 0 : d.call(a)) || [];
      if (m.length) {
        const r = [];
        return m.forEach((c) => {
          var g, y;
          typeof c.type == "object" ? r.push(c) : c.children && ((g = c.children) != null && g.length) && ((y = c.children) == null || y.forEach((b) => {
            typeof (b == null ? void 0 : b.type) == "object" && r.push(b);
          }));
        }), r;
      }
    }), o = n, f = (m) => {
      o("update:modelValue", m.value), o("change", m.value);
    };
    return (m, d) => (p(), h("ul", {
      class: v([l(t).b()])
    }, [
      (p(!0), h(X, null, J(i.value, (r) => (p(), q(de(r), {
        active: e.modelValue,
        onClick: () => f(r.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
}), pt = /* @__PURE__ */ L(mt, [["__scopeId", "data-v-9599f63c"]]), ft = /* @__PURE__ */ x({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = z("list__item"), a = n, t = s;
    return (i, o) => {
      const f = K("ripple");
      return D((p(), h("li", {
        class: v([l(e).b(), l(e).is("active", !!(t.active && t.active === t.value))]),
        onClick: o[0] || (o[0] = (m) => a("click", m))
      }, [
        $(i.$slots, "default", {}, void 0, !0)
      ], 2)), [
        [f, t.ripple]
      ]);
    };
  }
}), vt = /* @__PURE__ */ L(ft, [["__scopeId", "data-v-41ec0ba7"]]), gt = O("ImList", pt), ht = O("ImListItem", vt), yt = ["src", "srcset", "alt", "loading"], _t = /* @__PURE__ */ x({
  name: "ImAvatar",
  __name: "ImAvatar",
  props: {
    size: { default: 36 },
    src: { default: "" },
    alt: { default: "" },
    title: { default: "" },
    crossOrigin: { default: "anonymous" },
    fit: { default: "cover" },
    srcset: { default: "" },
    loading: { default: "eager" },
    shape: { default: "circle" },
    color: { default: "" }
  },
  emits: ["error"],
  setup(s, { emit: n }) {
    const e = n, a = z("avatar"), t = s, i = (o) => {
      console.log(o.target), e("error", o);
    };
    return (o, f) => (p(), h("span", {
      class: v([l(a).b(), t.shape ? l(a).m(t.shape) : ""]),
      style: A({
        "--im-avatar-size": (Number(t.size) || 36) + "px",
        "--im-avatar-color": t.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": t.fit
      })
    }, [
      !t.src && !t.srcset ? (p(), h("div", {
        key: 0,
        class: v([l(a).e("icon")])
      }, [
        $(o.$slots, "default", {}, void 0, !0)
      ], 2)) : (p(), h("img", {
        key: 1,
        onError: i,
        src: t.src,
        srcset: t.srcset,
        alt: t.alt,
        loading: t.loading,
        class: v([l(a).e("img")])
      }, null, 42, yt))
    ], 6));
  }
}), bt = /* @__PURE__ */ L(_t, [["__scopeId", "data-v-c4c32038"]]), It = O("ImAvatar", bt), wt = () => ({
  onEnter: (s, n) => {
    s.style.opacity = 0, s.style.transition = "opacity 200ms ease", s.getBoundingClientRect(), s.style.opacity = 1, n();
  },
  onLeave: async (s, n) => {
    s.style.opacity = 0, s.style.transition = "opacity 200ms ease", await new Promise((a) => requestAnimationFrame(a));
    const e = () => {
      n(), s && s.removeEventListener("transitionend", e);
    };
    s.addEventListener("transitionend", e);
  }
}), kt = (s = "right") => {
  let n = "", e = "";
  switch (s) {
    case "left":
      n = "translateX(-100%)", e = "translateX(-100%)";
      break;
    case "right":
      n = "translateX(100%)", e = "translateX(100%)";
      break;
    case "top":
      n = "translateY(-100%)", e = "translateY(-100%)";
      break;
    case "bottom":
      n = "translateY(100%)", e = "translateY(100%)";
      break;
    default:
      n = "translateX(100%)", e = "translateX(100%)";
      break;
  }
  return {
    onEnter: (a, t) => {
      a.style.transform = n, a.style.transition = "transform 200ms ease, opacity 200ms ease", a.style.opacity = "0", a.getBoundingClientRect(), a.style.transform = "translateX(0)", a.style.opacity = "1", t();
    },
    onLeave: async (a, t) => {
      a.style.transform = e, a.style.opacity = "0", a.style.transition = "transform 200ms ease, opacity 200ms ease", await new Promise((o) => requestAnimationFrame(o));
      const i = () => {
        t(), a && a.removeEventListener("transitionend", i);
      };
      a.addEventListener("transitionend", i, { passive: !0 });
    }
  };
}, xt = /* @__PURE__ */ x({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: !1 },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const e = z("mask"), { zIndexToken: a } = U(), t = s, i = wt(), o = n, f = () => {
      t.closeOnClickMask && o("close", !1);
    };
    return (m, d) => (p(), q(Z, {
      onEnter: l(i).onEnter,
      onLeave: l(i).onLeave
    }, {
      default: Q(() => [
        D(P("div", {
          class: v([l(e).b()]),
          style: A({
            zIndex: t.zIndex || l(a)
          }),
          onClick: f
        }, [
          $(m.$slots, "default", {}, void 0, !0)
        ], 6), [
          [ee, t.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
}), Lt = /* @__PURE__ */ L(xt, [["__scopeId", "data-v-2ba470f4"]]), ve = O("ImMask", Lt), $t = ["aria-modal"], zt = /* @__PURE__ */ x({
  name: "ImDrawer",
  __name: "ImDrawer",
  props: {
    modelValue: { type: Boolean, default: !1 },
    mask: { type: Boolean, default: !0 },
    closeOnClickMask: { type: Boolean, default: !0 },
    placement: { default: "right" },
    size: { default: 378 },
    zIndex: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const e = z("drawer"), a = n, t = s, i = k(null), o = kt(t.placement), { zIndexToken: f } = U(), m = () => {
      a("update:modelValue", !1);
    };
    return (d, r) => (p(), q(le, { to: "body" }, [
      P("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: i,
        class: v([l(e).b(), t.placement ? l(e).m(t.placement) : ""]),
        style: A({ "--im-drawer-size": (parseInt(String(t.size)) || 378) + "px", zIndex: t.zIndex || l(f) }),
        "aria-modal": t.modelValue
      }, [
        t.mask ? (p(), q(l(ve), {
          key: 0,
          visible: t.modelValue,
          closeOnClickMask: t.closeOnClickMask,
          onClose: m,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : B("", !0),
        S(Z, {
          onEnter: l(o).onEnter,
          onLeave: l(o).onLeave
        }, {
          default: Q(() => [
            D(P("div", {
              class: v([l(e).e("content")])
            }, [
              $(d.$slots, "default", {}, void 0, !0)
            ], 2), [
              [ee, t.modelValue]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ], 14, $t)
    ]));
  }
}), Ct = /* @__PURE__ */ L(zt, [["__scopeId", "data-v-1b0178a0"]]), Et = O("ImDrawer", Ct), Bt = /* @__PURE__ */ x({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: !1 },
    shadow: { default: "" }
  },
  setup(s) {
    const n = z("card"), e = s;
    return (a, t) => (p(), h("div", {
      class: v([l(n).b(), l(n).is("borderless", e.borderless), e.shadow ? l(n).m(e.shadow) : ""])
    }, [
      $(a.$slots, "header", {}, () => [
        e.title || a.$slots["header-action"] ? (p(), h("div", {
          key: 0,
          class: v([l(n).e("header")])
        }, [
          P("span", {
            class: v([l(n).e("title")])
          }, F(e.title), 3),
          $(a.$slots, "header-action", {}, void 0, !0)
        ], 2)) : B("", !0)
      ], !0),
      P("div", {
        class: v([l(n).e("body")])
      }, [
        $(a.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), Tt = /* @__PURE__ */ L(Bt, [["__scopeId", "data-v-bb9cd52c"]]), Pt = O("ImCard", Tt), Vt = ["data-index", "onMouseenter", "onMouseleave"], St = { class: "im-message__text" }, Mt = /* @__PURE__ */ x({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(s, { expose: n }) {
    const e = z("message"), a = s, t = k([]);
    let i = null;
    W(() => t.value, () => {
      t.value.length === 0 ? i = setTimeout(() => {
        !t.value.length && a.callback();
      }, 500) : (i && clearTimeout(i), i = null);
    });
    const o = (r) => {
      switch (r) {
        case "success":
          return "check-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "error":
          return "close-circle-fill";
        default:
          return "info-circle-fill";
      }
    }, f = (r) => {
      r.timer && (clearTimeout(r.timer), r.timer = null);
    }, m = (r) => {
      r.timer && clearTimeout(r.timer), r.timer = setTimeout(() => {
        t.value = t.value.filter((c) => c.id !== r.id);
      }, r.duration || 3e3);
    }, d = (r) => {
      const c = setTimeout(() => {
        t.value = t.value.filter((g) => g.id !== r.id);
      }, r.duration || 3e3);
      t.value.push({ ...r, timer: c });
    };
    return a.add && a.add(d), n({ addMsg: d }), (r, c) => (p(), q(Be, {
      tag: "ul",
      name: "list",
      css: !0,
      class: v([l(e).b()])
    }, {
      default: Q(() => [
        (p(!0), h(X, null, J(t.value, (g) => (p(), h("li", {
          key: g.id,
          "data-index": g.id,
          onMouseenter: () => f(g),
          onMouseleave: () => m(g),
          class: v(["im-message__item", [l(e).e("item"), g.color ? l(e).e(g.color) : ""]])
        }, [
          S(l(H), {
            name: o(g.color),
            size: "18px"
          }, null, 8, ["name"]),
          P("span", St, F(g.msg), 1)
        ], 42, Vt))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), At = /* @__PURE__ */ L(Mt, [["__scopeId", "data-v-820c83a9"]]);
class Nt {
  constructor() {
    te(this, "app");
    te(this, "container");
    te(this, "addMsgToList");
    this.app = null, this.container = null, this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    if (typeof window < "u" && window) {
      this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
      const n = this;
      this.app = Te(At, {
        callback: () => {
          n.destroy();
        },
        add: (e) => {
          n.addMsgToList = e;
        }
      }), this.app.mount(this.container);
    } else
      throw new Error("只能在浏览器环境下使用");
  }
  destroy() {
    var n, e;
    (n = this.app) == null || n.unmount(), (e = this.container) == null || e.remove(), this.app = null, this.container = null;
  }
  addMsg(n) {
    if (this.app || this.createApp(), !this.addMsgToList) return console.error("addMsgToList is null");
    this.addMsgToList({
      msg: n.msg,
      id: Math.random().toString().slice(2) + "_" + Date.now(),
      duration: n.duration || 3e3,
      color: (n == null ? void 0 : n.color) || "primary"
    });
  }
  info(n, e) {
    this.addMsg({
      color: "primary",
      msg: n,
      duration: e,
      id: ""
    });
  }
  success(n, e) {
    this.addMsg({
      color: "success",
      msg: n,
      duration: e,
      id: ""
    });
  }
  warning(n, e) {
    this.addMsg({
      color: "warning",
      msg: n,
      duration: e,
      id: ""
    });
  }
  error(n, e) {
    this.addMsg({
      color: "error",
      msg: n,
      duration: e,
      id: ""
    });
  }
}
let R = null;
const nn = () => (R || (R = new Nt()), {
  info: (s, n = 3e3) => {
    R == null || R.info(s, n);
  },
  success: (s, n = 3e3) => {
    R == null || R.success(s, n);
  },
  warning: (s, n = 3e3) => {
    R == null || R.warning(s, n);
  },
  error: (s, n = 3e3) => {
    R == null || R.error(s, n);
  }
}), Rt = ["data-visible", "data-esc"], Dt = /* @__PURE__ */ x({
  name: "ImDialog",
  __name: "ImDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    closeOnClickMask: { type: Boolean, default: !0 },
    width: { default: "420px" },
    height: { default: "auto" },
    fullscreen: { type: Boolean, default: !1 },
    closeOnEscape: { type: Boolean, default: !0 },
    mask: { type: Boolean, default: !0 },
    zIndex: { default: 1e3 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const e = z("dialog"), a = n, t = s, i = k(null), { zIndexToken: o } = U();
    W(
      () => t.modelValue,
      (r) => {
        r ? t.closeOnEscape && window.addEventListener("keydown", f, { passive: !0 }) : window.removeEventListener("keydown", f);
      }
    );
    function f(r) {
      if (r.key === "Escape" || r.code === "Escape") {
        const c = document.querySelectorAll(
          '.im-dialog[data-visible="true"][data-esc="true"]'
        );
        c.length && i.value && Array.from(c).pop() === i.value && a("update:modelValue", !1);
      }
    }
    const m = async (r, c) => {
      r.style.setProperty("opacity", "0"), r.style.setProperty("transition", "all 0.2s ease"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.getBoundingClientRect(), r.style.setProperty("opacity", "1"), r.style.setProperty("transform", "translateY(0) scale(1)"), c(), !document.body.classList.contains("im-overflow-hidden") && document.body.classList.add("im-overflow-hidden");
    }, d = async (r, c) => {
      r.style.setProperty("opacity", "0"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.style.setProperty("transition", "all 0.2s ease");
      const g = () => {
        c(), Array.from(
          document.body.querySelectorAll('.im-dialog[data-visible="true"]')
        ).length || document.body.classList.remove("im-overflow-hidden"), r.removeEventListener("transitionend", g);
      };
      r.addEventListener("transitionend", g, { passive: !0 });
    };
    return (r, c) => (p(), q(le, { to: "body" }, [
      P("div", {
        "aria-modal": "true",
        class: v([l(e).b()]),
        tabindex: "-1",
        "data-visible": t.modelValue,
        "data-esc": t.closeOnEscape,
        ref_key: "dialogRef",
        ref: i,
        style: A({
          zIndex: t.zIndex || l(o)
        })
      }, [
        t.mask && !t.fullscreen ? (p(), q(l(ve), {
          key: 0,
          closeOnClickMask: t.closeOnClickMask,
          visible: t.modelValue,
          onClose: c[0] || (c[0] = () => a("update:modelValue", !1))
        }, null, 8, ["closeOnClickMask", "visible"])) : B("", !0),
        S(Z, {
          onEnter: m,
          duration: { enter: 200, leave: 200 },
          onLeave: d
        }, {
          default: Q(() => [
            D(P("div", {
              class: v([
                l(e).e("content"),
                l(e).is("fullscreen", t.fullscreen),
                "im-shadow"
              ]),
              style: A({
                maxWidth: t.width,
                width: t.width,
                height: t.height
              })
            }, [
              $(r.$slots, "default", {}, void 0, !0)
            ], 6), [
              [ee, t.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, Rt)
    ]));
  }
}), Ot = /* @__PURE__ */ L(Dt, [["__scopeId", "data-v-8ba4a4fb"]]), Yt = O("ImDialog", Ot), Ht = ["value"], qt = ["onClick"], Ft = /* @__PURE__ */ x({
  name: "ImSelect",
  __name: "ImSelect",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    width: { default: "" },
    size: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const e = z("select"), a = n, t = s, { sizeToken: i } = U(), o = k(!1), f = Pe({
      minWidth: "",
      top: "",
      left: ""
    }), m = k(null), d = k(null), r = k(null);
    let c = null;
    const g = T(() => Ie(t.width)), y = T(() => Ie(t.size || i.value || "36px")), b = T(() => {
      var u;
      return ((u = t.options.find((I) => I.value === t.modelValue)) == null ? void 0 : u.label) || "";
    });
    function N(u) {
      var I, _;
      (I = d.value) != null && I.contains(u.target) || (_ = r.value) == null || _.blur();
    }
    async function Y() {
      var V, M;
      const u = (V = m.value) == null ? void 0 : V.getBoundingClientRect(), I = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      f.top = `${u == null ? void 0 : u.bottom}px`, f.minWidth = `${u == null ? void 0 : u.width}px`, f.left = `${u == null ? void 0 : u.left}px`, o.value = !0, c && clearTimeout(c), c = null, window.addEventListener("scroll", N, { passive: !0, capture: !0 });
      const _ = (M = d.value) == null ? void 0 : M.querySelector(`.${e.is("active", !0)}`);
      await new Promise((xe) => requestAnimationFrame(xe)), console.log(u == null ? void 0 : u.bottom, d.value.offsetHeight);
      const w = d.value.offsetHeight;
      (u == null ? void 0 : u.bottom) + w > I && (f.top = `${I - w}px`), _ && _.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    function C() {
      c && clearTimeout(c), c = setTimeout(() => {
        o.value = !1, window.removeEventListener("scroll", N), c = null;
      }, 150);
    }
    function E(u) {
      a("update:modelValue", u);
    }
    return (u, I) => {
      const _ = K("ripple");
      return p(), h("div", {
        class: v([l(e).b()]),
        style: A({
          "--im-select-width": g.value,
          "--im-select-height": y.value
        })
      }, [
        P("label", {
          class: v([l(e).e("trigger")]),
          ref_key: "triggerRef",
          ref: m
        }, [
          P("input", {
            class: v([l(e).e("input")]),
            ref_key: "inputRef",
            ref: r,
            value: b.value,
            readonly: "",
            type: "text",
            placeholder: "请选择",
            onFocus: Y,
            onBlur: C
          }, null, 42, Ht),
          P("div", {
            class: v([l(e).e("icon")])
          }, [
            $(u.$slots, "rightIcon", {}, () => [
              S(l(H), {
                name: "down",
                size: "12"
              })
            ], !0)
          ], 2)
        ], 2),
        (p(), q(le, { to: "body" }, [
          S(Z, { name: "select" }, {
            default: Q(() => [
              D(P("ul", {
                class: v([l(e).e("list"), "im-shadow"]),
                style: A(f),
                ref_key: "listRef",
                ref: d
              }, [
                (p(!0), h(X, null, J(t.options, (w, V) => D((p(), h("li", {
                  onClick: () => E(w.value),
                  class: v([l(e).e("option"), l(e).is("active", w.value === t.modelValue)]),
                  key: w.value || V
                }, [
                  G(F(w.label || w.value), 1)
                ], 10, qt)), [
                  [_, !0]
                ])), 128))
              ], 6), [
                [ee, o.value]
              ])
            ]),
            _: 1
          })
        ]))
      ], 6);
    };
  }
}), Xt = /* @__PURE__ */ L(Ft, [["__scopeId", "data-v-7c6e702b"]]), ke = O("ImSelect", Xt), Wt = ["aria-disabled"], Ut = ["onClick", "title"], jt = ["aria-disabled"], Gt = /* @__PURE__ */ x({
  name: "ImPagination",
  __name: "ImPagination",
  props: {
    total: { default: 0 },
    size: { default: "" },
    pageSize: { default: 10 },
    pageSizeItems: { default: () => [10, 20, 30, 40] },
    pageNumber: { default: 1 },
    layout: { default: "prev,pager,next,sizes,total" }
  },
  emits: ["change"],
  setup(s, { emit: n }) {
    const e = z("pagination"), a = n, t = s, i = k(t.pageSize), o = k([1]), { sizeToken: f } = U(), m = T(() => parseInt(String(t.size || f.value || 36)) + "px"), d = T(() => Math.ceil(t.total / (i.value || 10))), r = T(() => t.pageNumber === 1), c = T(() => t.pageNumber >= d.value), g = T(() => t.pageSizeItems.map((u) => ({ label: `${u} 条/页`, value: u })));
    W(() => i.value, (u) => {
      d.value < t.pageNumber ? a("change", { pageSize: u, pageNumber: d.value }) : a("change", { pageSize: u, pageNumber: t.pageNumber });
    }), W(() => [t.pageNumber, t.pageSize], () => {
      i.value = t.pageSize, b(t.pageNumber);
    }, { immediate: !0 });
    function y(u) {
      t.pageNumber !== u && a("change", { pageNumber: u, pageSize: t.pageSize });
    }
    function b(u) {
      if (d.value <= 1)
        o.value = [1];
      else {
        const I = Math.ceil(u / 5), _ = [];
        let w = I * 5 - 4;
        for (let V = 0; V < 5; V++) {
          let M = w + V;
          if (M > d.value)
            break;
          _.push(M);
        }
        u - 5 >= 1 && (_.unshift("left"), _.unshift(1)), u + 5 <= d.value && (_.push("right"), _.push(d.value)), o.value = _, y(u);
      }
    }
    function N() {
      const u = t.pageNumber + 1;
      if (u > d.value) return y(t.pageNumber);
      if (o.value.includes(u))
        return y(u);
      b(u);
    }
    function Y() {
      const u = t.pageNumber - 1;
      if (u < 1) return y(t.pageNumber);
      if (o.value.includes(u))
        return y(u);
      b(u);
    }
    function C() {
      const u = t.pageNumber + 5;
      if (u > d.value) return y(d.value);
      b(u);
    }
    function E() {
      const u = t.pageNumber - 5;
      if (u < 1) return y(1);
      b(u);
    }
    return (u, I) => {
      const _ = K("ripple");
      return p(), h("div", {
        class: v([l(e).b()]),
        style: A({
          "--im-pagination-size": m.value
        })
      }, [
        u.layout.includes("total") ? (p(), h("div", {
          key: 0,
          class: v([l(e).e("total")])
        }, "共 " + F(u.total) + " 条数据", 3)) : B("", !0),
        u.layout.includes("prev") ? D((p(), h("div", {
          key: 1,
          class: v([l(e).e("prev"), l(e).is("disabled", r.value)]),
          "aria-disabled": r.value,
          onClick: Y
        }, [
          S(l(H), {
            name: "left",
            size: "14px"
          })
        ], 10, Wt)), [
          [_, !r.value]
        ]) : B("", !0),
        u.layout.includes("pager") ? (p(), h("div", {
          key: 2,
          class: v([l(e).e("pager")])
        }, [
          (p(!0), h(X, null, J(o.value, (w) => (p(), h(X, null, [
            w === "left" ? (p(), h("div", {
              key: 0,
              title: "向前5页",
              class: v([l(e).e("page-item"), l(e).e("left")]),
              onClick: E
            }, [
              S(l(H), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              S(l(H), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : w !== "right" ? D((p(), h("div", {
              key: 1,
              onClick: () => y(w),
              class: v([l(e).e("page-item"), l(e).is("active", w === t.pageNumber)]),
              title: String(w)
            }, [
              G(F(w), 1)
            ], 10, Ut)), [
              [_, !0]
            ]) : w === "right" ? (p(), h("div", {
              key: 2,
              class: v([l(e).e("page-item"), l(e).e("right")]),
              title: "向后5页",
              onClick: C
            }, [
              S(l(H), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              S(l(H), {
                name: "arrowright",
                class: "im-icon--arrowright"
              })
            ], 2)) : B("", !0)
          ], 64))), 256))
        ], 2)) : B("", !0),
        u.layout.includes("next") ? D((p(), h("div", {
          key: 3,
          class: v([l(e).e("next"), l(e).is("disabled", c.value)]),
          "aria-disabled": c.value,
          onClick: N
        }, [
          S(l(H), {
            name: "right",
            size: "14px"
          })
        ], 10, jt)), [
          [_, !c.value]
        ]) : B("", !0),
        u.layout.includes("sizes") ? (p(), h("div", {
          key: 4,
          class: v([l(e).e("size")])
        }, [
          S(l(ke), {
            options: g.value,
            modelValue: i.value,
            "onUpdate:modelValue": I[0] || (I[0] = (w) => i.value = w),
            size: t.size
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : B("", !0)
      ], 6);
    };
  }
}), Jt = /* @__PURE__ */ L(Gt, [["__scopeId", "data-v-63b4320b"]]), Kt = O("ImPagination", Jt), Qt = [
  re,
  ce,
  ie,
  ue,
  H,
  ae,
  Je,
  Ze,
  at,
  ot,
  dt,
  gt,
  ht,
  It,
  ve,
  Et,
  Pt,
  Yt,
  Kt,
  ke
], Zt = (s, n) => {
  s.provide(we, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), s.directive("ripple", Me), Qt.forEach((e) => {
    e.name ? s.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
}, sn = {
  install: Zt
};
export {
  Ze as ImAlert,
  Je as ImAnchor,
  It as ImAvatar,
  at as ImBreadcrumb,
  ot as ImBreadcrumbItem,
  re as ImButton,
  Pt as ImCard,
  ce as ImCol,
  Yt as ImDialog,
  ae as ImDivider,
  Et as ImDrawer,
  dt as ImDropdown,
  H as ImIcon,
  ue as ImInput,
  gt as ImList,
  ht as ImListItem,
  ve as ImMask,
  Kt as ImPagination,
  ie as ImRow,
  ke as ImSelect,
  sn as default,
  nn as useImMessage
};
