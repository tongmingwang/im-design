var Ie = Object.defineProperty;
var ve = (n) => {
  throw TypeError(n);
};
var we = (n, t, e) => t in n ? Ie(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var J = (n, t, e) => we(n, typeof t != "symbol" ? t + "" : t, e), ye = (n, t, e) => t.has(n) || ve("Cannot " + e);
var K = (n, t, e) => (ye(n, t, "read from private field"), e ? e.call(n) : t.get(n)), he = (n, t, e) => t.has(n) ? ve("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), _e = (n, t, e, o) => (ye(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
import { inject as ke, ref as x, createElementBlock as y, openBlock as p, createElementVNode as C, defineComponent as g, computed as A, resolveDirective as ee, withDirectives as D, normalizeStyle as M, normalizeClass as v, createCommentVNode as z, renderSlot as _, unref as i, createVNode as S, createTextVNode as W, toDisplayString as O, useSlots as te, Fragment as X, renderList as H, createBlock as P, resolveDynamicComponent as ie, mergeProps as xe, vModelDynamic as Le, watch as q, onMounted as ce, onUnmounted as de, Teleport as ue, Transition as se, withCtx as j, vShow as ne, TransitionGroup as $e, createApp as Ce } from "vue";
const be = Symbol("im-design-token");
var N;
class Ee {
  constructor() {
    he(this, N);
    _e(this, N, []);
  }
  async add(t) {
    K(this, N).push(t);
  }
  remove() {
    try {
      const t = K(this, N).shift();
      t && this.run(t);
    } catch (t) {
      console.error(t);
    }
  }
  async run(t) {
    try {
      const e = t.querySelector(".im-ripple__item");
      if (!e) return;
      let o = Date.now(), s = e.getAttribute("data-time");
      const l = o - Number(s) || 0;
      l && await new Promise((a) => {
        e.style.opacity = "0.1";
        const m = 200 - l;
        setTimeout(
          () => {
            a(null);
          },
          m > 0 ? m : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms", setTimeout(() => {
        t && (t == null || t.remove()), K(this, N).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
}
N = new WeakMap();
const Be = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: !0
      }), window.addEventListener("mouseup", l, { passive: !0 });
    })();
    const o = new Ee();
    async function s(a) {
      if (!t.value) return;
      const m = window.getComputedStyle(n), d = n.getBoundingClientRect(), c = document.createElement("div");
      c.className = "im-ripple", o.add(c);
      const r = document.createElement("div");
      r.className = "im-ripple__item";
      const u = a.clientX || a.touches && a.touches[0].clientX, f = a.clientY || a.touches && a.touches[0].clientY, h = Math.max(d.width, d.height), I = u - d.left - h / 2, B = f - d.top - h / 2, T = d.width - d.height <= 5;
      Object.assign(r.style, {
        "background-color": m.color,
        width: `${h}px`,
        height: `${h}px`,
        left: `${I}px`,
        top: `${B}px`,
        opacity: "0.15",
        transform: T ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), r.setAttribute("data-time", Date.now() + ""), c.appendChild(r), n.appendChild(c);
      const w = m.position;
      w === "static" && (n.style.position = "relative", n.dataset.originalPosition = w), r.getBoundingClientRect(), r.style.transform = "scale(2.8)", r.style.opacity = "0.33";
    }
    n.im_add_ripple_fn__ = s, n.im_remove_ripple_fn__ = l;
    function l() {
      o.remove();
    }
  },
  unmounted(n) {
    n && (n != null && n.im_add_ripple_fn__) && n.removeEventListener("mousedown", n.im_add_ripple_fn__), n && n.im_remove_ripple_fn__ && window.removeEventListener("mouseup", n.im_remove_ripple_fn__);
  }
}, k = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, o) => o ? `is-${e}` : ""
  };
}, U = (n, t) => {
  const e = ke(be), o = x(Number(e.size || 36)), s = x(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
}, Te = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function ze(n, t) {
  return p(), y("svg", Te, t[0] || (t[0] = [
    C("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const Me = { render: ze }, Ve = ["tabindex", "type", "disabled"], Ae = /* @__PURE__ */ g({
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
  setup(n, { emit: t }) {
    const e = n, o = t, s = k("button"), { sizeToken: l } = U(), a = A(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), m = A(() => {
      let r = +(e.size || l.value || 36);
      return {
        "--im-button-size": r + "px",
        "--im-button-padding": (r * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), d = A(() => e.loading && ["square", "circle"].includes(e.shape)), c = () => {
      e.disabled || e.loading || o("click");
    };
    return (r, u) => {
      const f = ee("ripple");
      return D((p(), y("button", {
        class: v(a.value),
        onClick: c,
        style: M(m.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (p(), y("span", {
          key: 0,
          class: v([i(s).e("loading")])
        }, [
          S(i(Me))
        ], 2)) : z("", !0),
        d.value ? z("", !0) : _(r.$slots, "default", { key: 1 }, () => [
          W(O(e.text), 1)
        ], !0)
      ], 14, Ve)), [
        [f, !0]
      ]);
    };
  }
}), b = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, s] of t)
    e[o] = s;
  return e;
}, oe = /* @__PURE__ */ b(Ae, [["__scopeId", "data-v-fe80f42d"]]);
oe.install = (n) => {
  n.component("ImButton", oe);
};
const Pe = /* @__PURE__ */ g({
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
  setup(n) {
    const t = n, e = te(), o = A(() => {
      var l;
      return ((l = e.default) == null ? void 0 : l.call(e)) || [];
    }), s = k("row");
    return (l, a) => (p(), y("div", {
      class: v([i(s).b()]),
      style: M({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (p(!0), y(X, null, H(o.value, (m, d) => (p(), P(ie(m), { key: d }))), 128))
    ], 6));
  }
}), ae = /* @__PURE__ */ b(Pe, [["__scopeId", "data-v-5179967f"]]), De = /* @__PURE__ */ g({
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
  setup(n) {
    const t = n, e = k("col"), o = A(
      () => +((Number(t.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (s, l) => (p(), y("div", {
      class: v([i(e).b()]),
      style: M({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      _(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), re = /* @__PURE__ */ b(De, [["__scopeId", "data-v-ecf91058"]]);
ae.install = (n) => {
  n.component("ImRow", ae);
};
re.install = (n) => {
  n.component("ImCol", re);
};
const Re = /* @__PURE__ */ g({
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
  setup(n, { emit: t }) {
    const e = n, { sizeToken: o } = U(), s = t, l = x(e.modelValue), a = k("input"), m = () => {
      s("update:modelValue", l.value), s("change", l.value);
    };
    return (d, c) => (p(), y("div", {
      class: v([i(a).b()]),
      style: M({
        "--in-input-size": (e.size || i(o) || 36) + "px"
      })
    }, [
      D(C("input", xe({
        class: [i(a).e("input")],
        "onUpdate:modelValue": c[0] || (c[0] = (r) => l.value = r)
      }, e, { onInput: m }), null, 16), [
        [Le, l.value]
      ])
    ], 6));
  }
}), le = /* @__PURE__ */ b(Re, [["__scopeId", "data-v-6c70856c"]]);
le.install = (n) => {
  n.component("ImInput", le);
};
const Se = /* @__PURE__ */ g({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(n) {
    const t = n;
    return (e, o) => (p(), y("i", {
      class: v(["im-icon", [`im-icon-${t.name}`]]),
      style: M({
        "--icon-size": (parseInt(String(t.size)) || 16) + "px",
        "--icon-color": t.color
      })
    }, null, 6));
  }
}), F = /* @__PURE__ */ b(Se, [["__scopeId", "data-v-1e711363"]]);
F.install = function(n) {
  n.component("ImIcon", F);
};
const Ye = /* @__PURE__ */ g({
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
  setup(n) {
    const t = k("divider"), e = n;
    return (o, s) => (p(), y("div", {
      class: v([i(t).b(), i(t).is("vertical", e.vertical)]),
      style: M({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? z("", !0) : (p(), y("span", {
        key: 0,
        class: v([i(t).e("text")])
      }, [
        _(o.$slots, "default", {}, void 0, !0)
      ], 2))
    ], 6));
  }
}), Z = /* @__PURE__ */ b(Ye, [["__scopeId", "data-v-108f9bec"]]);
Z.name = "ImDivider";
Z.install = function(n) {
  n.component("ImDivider", Z);
};
const E = (n, t) => (t.install = (e) => {
  e.component(n, t);
}, t), me = (n, t) => {
  let e;
  return function(...o) {
    e || (e = setTimeout(() => {
      n.apply(this, o), e = null;
    }, t));
  };
}, Q = (n, t) => {
  let e;
  return function(...o) {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, o);
    }, t);
  };
}, ge = (n, t, e) => {
  if (!e) return !1;
  const o = e.getBoundingClientRect();
  return n >= o.left && n <= o.left + o.width && t >= o.top && t <= o.top + o.height;
}, Ne = ["onClick"], Oe = /* @__PURE__ */ g({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(n) {
    const t = k("anchor");
    let e = null;
    const o = x(null), s = x(null), l = x(null), a = n;
    q(
      () => a.target,
      () => {
        e && e(), e = c();
      }
    ), ce(() => {
      e = c();
    }), de(() => {
      e && e();
    });
    function m(u) {
      let f = u == null ? void 0 : u.scrollTop;
      return o.value === window && (f = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), f;
    }
    function d(u) {
      var T;
      if (l.value || !o.value) return;
      const f = o.value === window ? u.target : o.value;
      let h = m(f);
      const I = f.offsetTop || 0, B = (a.data || []).map(({ id: w }) => {
        const L = document.getElementById(w);
        return L ? {
          id: w,
          offsetTop: L.offsetTop - I,
          el: L
        } : null;
      }).filter(Boolean);
      s.value = null;
      for (let w = 0; w < B.length; w++) {
        const L = B[w];
        if (h >= L.offsetTop - (a.offset || 0) && h <= L.offsetTop + (((T = L.el) == null ? void 0 : T.clientHeight) || 0) - (a.offset || 0)) {
          s.value = L.id;
          return;
        }
      }
      if (!s.value && h >= (parseInt(String(a.offset)) || 0)) {
        const w = B.find((L) => h <= L.offsetTop - (a.offset || 0) && h > (a.offset || 0) ? (s.value = L.id, !0) : !1);
        w && (s.value = w.id);
      }
    }
    function c() {
      const u = a.target ? typeof a.target == "string" ? document.querySelector(a.target) : a.target : window;
      if (!u)
        return null;
      o.value = u;
      const f = me(d, 50);
      return d({ target: u }), u.addEventListener("scroll", f, { passive: !0 }), () => {
        u.removeEventListener("scroll", f);
      };
    }
    async function r(u) {
      var I, B, T;
      if (s.value === u || !u) return;
      l.value = u, s.value = u;
      const f = document.getElementById(u);
      if (!f) return;
      (B = o.value) == null || B.scrollTo({
        // @ts-ignore
        top: f.offsetTop - (a.offset || 0) - (((I = o.value) == null ? void 0 : I.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const h = Q(() => {
        var w;
        l.value = null, (w = o.value) == null || w.removeEventListener("scroll", h);
      }, 300);
      (T = o.value) == null || T.addEventListener("scroll", h, { passive: !0 });
    }
    return (u, f) => {
      const h = ee("ripple");
      return a.data && a.data.length ? (p(), y("ul", {
        key: 0,
        class: v([i(t).b()])
      }, [
        (p(!0), y(X, null, H(a.data, (I) => D((p(), y("li", {
          class: v([i(t).e("item"), i(t).is("active", s.value === I.id)]),
          onClick: () => r(I.id)
        }, [
          s.value === I.id ? (p(), y("span", {
            key: 0,
            class: v([i(t).e("bar")])
          }, null, 2)) : z("", !0),
          W(" " + O(I.text), 1)
        ], 10, Ne)), [
          [h, !0]
        ])), 256))
      ], 2)) : z("", !0);
    };
  }
}), Xe = /* @__PURE__ */ b(Oe, [["__scopeId", "data-v-4840d244"]]), qe = E("ImAnchor", Xe), Fe = /* @__PURE__ */ g({
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
  setup(n, { emit: t }) {
    const e = t, o = x(null), s = n, l = k("alert"), a = te(), m = A(() => !!(s.showIcon && s.title)), d = A(() => {
      switch (s.color) {
        case "error":
          return "close-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "success":
          return "check-circle-fill";
        default:
          return "info-circle-fill";
      }
    }), c = async () => {
      var r, u;
      e("close"), (r = o.value) == null || r.animate([{
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
      }), await new Promise((f) => setTimeout(f, 300)), (u = o.value) == null || u.remove();
    };
    return (r, u) => {
      const f = ee("ripple");
      return p(), y("div", {
        ref_key: "alertRef",
        ref: o,
        class: v([i(l).b(), i(l).m(s.color || "primary"), s.variant && i(l).m(s.variant || "")])
      }, [
        s.showIcon ? (p(), y("div", {
          key: 0,
          class: v([i(l).e("icon")])
        }, [
          _(r.$slots, "icon", {}, () => [
            S(i(F), {
              name: d.value,
              size: m.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], !0)
        ], 2)) : z("", !0),
        C("div", {
          class: v([i(l).e("content")])
        }, [
          s.title || i(a).title ? (p(), y("div", {
            key: 0,
            class: v([i(l).e("title")])
          }, [
            _(r.$slots, "title", {}, () => [
              W(O(s.title), 1)
            ], !0)
          ], 2)) : z("", !0),
          C("div", {
            class: v([i(l).e("message")])
          }, [
            _(r.$slots, "default", {}, () => [
              W(O(s.message), 1)
            ], !0)
          ], 2)
        ], 2),
        s.closable ? D((p(), y("div", {
          key: 1,
          class: v([i(l).e("close")]),
          onClick: c
        }, [
          _(r.$slots, "close", {}, () => [
            S(i(F), {
              name: "close",
              size: "16"
            })
          ], !0)
        ], 2)), [
          [f, !0]
        ]) : z("", !0)
      ], 2);
    };
  }
}), We = /* @__PURE__ */ b(Fe, [["__scopeId", "data-v-d11fdcb2"]]), He = E("ImAlert", We), je = /* @__PURE__ */ g({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = te(), o = t, s = k("breadcrumb"), l = n, a = A(
      () => {
        var d, c;
        return (c = (d = e.default) == null ? void 0 : d.call(e)) == null ? void 0 : c.filter((r) => {
          var u;
          return (r == null ? void 0 : r.type) && ((u = r == null ? void 0 : r.type) == null ? void 0 : u.name) === "ImBreadcrumbItem";
        });
      }
    ), m = (d) => {
      d && l.modelValue !== d && (o("update:modelValue", d), o("change", d));
    };
    return (d, c) => (p(), y("div", {
      class: v([i(s).b()])
    }, [
      (p(!0), y(X, null, H(a.value, (r, u) => (p(), y(X, null, [
        (p(), P(ie(r), {
          active: l.modelValue,
          onClick: m
        }, null, 8, ["active"])),
        a.value && a.value.length > 0 && u < a.value.length - 1 ? (p(), y("span", {
          key: 0,
          class: v([i(s).e("separator")])
        }, [
          _(d.$slots, "separator", {}, () => [
            W(O(l.separator), 1)
          ], !0)
        ], 2)) : z("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Ue = /* @__PURE__ */ b(je, [["__scopeId", "data-v-64336468"]]), Ge = /* @__PURE__ */ g({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(n, { emit: t }) {
    const e = k("breadcrumb__item"), o = n, s = t;
    return (l, a) => (p(), y("div", {
      onClick: a[0] || (a[0] = () => s("click", o.value)),
      class: v([i(e).b(), i(e).is("active", o.active === o.value && !!o.value)])
    }, [
      _(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ b(Ge, [["__scopeId", "data-v-40ed04b1"]]), Ke = E("ImBreadcrumb", Ue), Qe = E("ImBreadcrumb", Je), Ze = (n = 50) => {
  const t = x(0), e = x(0), o = me((s) => {
    t.value = s.clientX, e.value = s.clientY;
  }, n);
  return ce(() => {
    window.addEventListener("mousemove", o, { passive: !0 });
  }), de(() => {
    window.removeEventListener("mousemove", o);
  }), { x: t, y: e };
}, et = (n, t, e, o = "bottomLeft") => {
  q(
    () => n.value,
    () => {
      n.value && s();
    }
  );
  async function s() {
    var f;
    await new Promise((h) => requestAnimationFrame(h));
    const l = t == null ? void 0 : t.value, a = e == null ? void 0 : e.value;
    if (!l || !a) return;
    const d = (((f = l.children) == null ? void 0 : f.length) != 1 ? l : l.children[0]).getBoundingClientRect(), c = d.bottom, r = a.getBoundingClientRect(), u = 2;
    switch (o) {
      case "bottom":
        a.style.setProperty("top", `${c + u}px`), a.style.setProperty(
          "left",
          `${d.left + d.width / 2 - r.width / 2}px`
        );
        break;
      case "bottomRight":
        a.style.setProperty("top", `${c + u}px`), a.style.setProperty(
          "left",
          `${d.left + d.width - r.width}px`
        );
        break;
      case "top":
        a.style.setProperty(
          "top",
          `${d.top - r.height - u}px`
        ), a.style.setProperty(
          "left",
          `${d.left + d.width / 2 - r.width / 2}px`
        );
        break;
      case "topRight":
        a.style.setProperty(
          "top",
          `${d.top - r.height - u}px`
        ), a.style.setProperty(
          "left",
          `${d.right - r.width}px`
        );
        break;
      case "topLeft":
        a.style.setProperty(
          "top",
          `${d.top - r.height - u}px`
        ), a.style.setProperty("left", `${d.left}px`);
        break;
      default:
        a.style.setProperty("top", `${c + u}px`), a.style.setProperty("left", `${d.left}px`);
        break;
    }
  }
}, tt = (n) => {
  const t = n.toLowerCase().includes("bottom") ? "translateY(-10px)" : "translateY(10px)";
  function e(s, l) {
    s.style.transform = t, s.style.opacity = "0", s.style.pointerEvents = "none", s.getBoundingClientRect(), s.style.transform = "translateY(0px)", s.style.opacity = "1", s.style.pointerEvents = "auto", l();
  }
  async function o(s, l) {
    s.style.transform = t, s.style.opacity = "0", s.getBoundingClientRect();
    const a = () => {
      l(), s && (s.style.transform = "translateY(0px)"), s.removeEventListener("transitionend", a);
    };
    s.addEventListener("transitionend", a, { passive: !0 });
  }
  return {
    onEnter: e,
    onLeave: o
  };
}, st = /* @__PURE__ */ g({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: !1 },
    trigger: { default: "hover" },
    placement: { default: "bottomLeft" },
    zIndex: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    var L;
    const e = t, o = k("dropdown"), s = n, l = x(null), a = x(null), m = x(s.modelValue || !1), d = tt((L = s.placement) != null && L.includes("top") ? "top" : "bottom");
    let c = null, r = 100;
    const { x: u, y: f } = Ze(30), { zIndexToken: h } = U();
    et(m, l, a, s.placement), ce(() => {
      c && c(), c = w();
    }), de(() => {
      c && c();
    }), q(() => s.trigger, () => {
      c && c(), c = w();
    });
    const I = me(() => {
      const R = ge(u.value, f.value, a.value);
      ge(u.value, f.value, l.value) || R || (m.value = !1);
    }, r);
    q(() => [u.value, f.value], () => {
      s.trigger != "hover" || !m.value || I();
    });
    function B() {
      m.value = !0, e("update:modelValue", m.value), e("change", m.value), window.addEventListener("scroll", T, { passive: !0, capture: !0 });
    }
    function T() {
      m.value = !1, e("update:modelValue", m.value), e("change", m.value), window.removeEventListener("scroll", close);
    }
    function w() {
      var G, fe;
      c && c();
      const R = Q((Y) => {
        var V;
        (V = l.value) != null && V.contains(Y.target) || T();
      }, r);
      if (document.addEventListener("click", R, { passive: !0 }), s.trigger === "hover") {
        const Y = Q(B, r);
        return (G = l.value) == null || G.addEventListener("mouseenter", Y, { passive: !0 }), () => {
          var V;
          (V = l.value) == null || V.removeEventListener("mouseenter", Y), document.removeEventListener("click", R);
        };
      }
      if (s.trigger === "click") {
        const Y = Q(() => {
          m.value ? T() : B();
        }, r);
        return (fe = l.value) == null || fe.addEventListener("click", Y, { passive: !0 }), () => {
          var V;
          (V = l.value) == null || V.removeEventListener("click", Y), document.removeEventListener("click", R);
        };
      }
      return null;
    }
    return (R, G) => (p(), y("span", {
      class: v([i(o).b()]),
      ref_key: "dropdownRef",
      ref: l
    }, [
      _(R.$slots, "default", {}, void 0, !0),
      (p(), P(ue, { to: "body" }, [
        S(se, {
          onEnter: i(d).onEnter,
          onLeave: i(d).onLeave,
          duration: { enter: 300, leave: 200 }
        }, {
          default: j(() => [
            D(C("div", {
              class: v([i(o).e("content")]),
              ref_key: "contentRef",
              ref: a,
              style: M({
                zIndex: s.zIndex || i(h)
              })
            }, [
              _(R.$slots, "content", {}, void 0, !0)
            ], 6), [
              [ne, m.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
}), nt = /* @__PURE__ */ b(st, [["__scopeId", "data-v-c394ceaa"]]), ot = E("ImDropdown", nt), at = /* @__PURE__ */ g({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = n, o = te(), s = k("list"), l = A(() => {
      var c;
      const d = ((c = o.default) == null ? void 0 : c.call(o)) || [];
      if (d.length) {
        const r = [];
        return d.forEach((u) => {
          var f, h;
          typeof u.type == "object" ? r.push(u) : u.children && ((f = u.children) != null && f.length) && ((h = u.children) == null || h.forEach((I) => {
            typeof (I == null ? void 0 : I.type) == "object" && r.push(I);
          }));
        }), r;
      }
    }), a = t, m = (d) => {
      a("update:modelValue", d.value), a("change", d.value);
    };
    return (d, c) => (p(), y("ul", {
      class: v([i(s).b()])
    }, [
      (p(!0), y(X, null, H(l.value, (r) => (p(), P(ie(r), {
        active: e.modelValue,
        onClick: () => m(r.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
}), rt = /* @__PURE__ */ b(at, [["__scopeId", "data-v-9599f63c"]]), lt = /* @__PURE__ */ g({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(n, { emit: t }) {
    const e = k("list__item"), o = t, s = n;
    return (l, a) => {
      const m = ee("ripple");
      return D((p(), y("li", {
        class: v([i(e).b(), i(e).is("active", !!(s.active && s.active === s.value))]),
        onClick: a[0] || (a[0] = (d) => o("click", d))
      }, [
        _(l.$slots, "default", {}, void 0, !0)
      ], 2)), [
        [m, s.ripple]
      ]);
    };
  }
}), it = /* @__PURE__ */ b(lt, [["__scopeId", "data-v-41ec0ba7"]]), ct = E("ImList", rt), dt = E("ImListItem", it), ut = ["src", "srcset", "alt", "loading"], mt = /* @__PURE__ */ g({
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
  setup(n, { emit: t }) {
    const e = t, o = k("avatar"), s = n, l = (a) => {
      console.log(a.target), e("error", a);
    };
    return (a, m) => (p(), y("span", {
      class: v([i(o).b(), s.shape ? i(o).m(s.shape) : ""]),
      style: M({
        "--im-avatar-size": (Number(s.size) || 36) + "px",
        "--im-avatar-color": s.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": s.fit
      })
    }, [
      !s.src && !s.srcset ? (p(), y("div", {
        key: 0,
        class: v([i(o).e("icon")])
      }, [
        _(a.$slots, "default", {}, void 0, !0)
      ], 2)) : (p(), y("img", {
        key: 1,
        onError: l,
        src: s.src,
        srcset: s.srcset,
        alt: s.alt,
        loading: s.loading,
        class: v([i(o).e("img")])
      }, null, 42, ut))
    ], 6));
  }
}), pt = /* @__PURE__ */ b(mt, [["__scopeId", "data-v-c4c32038"]]), ft = E("ImAvatar", pt), vt = () => ({
  onEnter: (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease", n.getBoundingClientRect(), n.style.opacity = 1, t();
  },
  onLeave: async (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease", await new Promise((o) => requestAnimationFrame(o));
    const e = () => {
      t(), n && n.removeEventListener("transitionend", e);
    };
    n.addEventListener("transitionend", e);
  }
}), yt = (n = "right") => {
  let t = "", e = "";
  switch (n) {
    case "left":
      t = "translateX(-100%)", e = "translateX(-100%)";
      break;
    case "right":
      t = "translateX(100%)", e = "translateX(100%)";
      break;
    case "top":
      t = "translateY(-100%)", e = "translateY(-100%)";
      break;
    case "bottom":
      t = "translateY(100%)", e = "translateY(100%)";
      break;
    default:
      t = "translateX(100%)", e = "translateX(100%)";
      break;
  }
  return {
    onEnter: (o, s) => {
      o.style.transform = t, o.style.transition = "transform 200ms ease, opacity 200ms ease", o.style.opacity = "0", o.getBoundingClientRect(), o.style.transform = "translateX(0)", o.style.opacity = "1", s();
    },
    onLeave: async (o, s) => {
      o.style.transform = e, o.style.opacity = "0", o.style.transition = "transform 200ms ease, opacity 200ms ease", await new Promise((a) => requestAnimationFrame(a));
      const l = () => {
        s(), o && o.removeEventListener("transitionend", l);
      };
      o.addEventListener("transitionend", l, { passive: !0 });
    }
  };
}, ht = /* @__PURE__ */ g({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: !1 },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(n, { emit: t }) {
    const e = k("mask"), { zIndexToken: o } = U(), s = n, l = vt(), a = t, m = () => {
      s.closeOnClickMask && a("close", !1);
    };
    return (d, c) => (p(), P(se, {
      onEnter: i(l).onEnter,
      onLeave: i(l).onLeave
    }, {
      default: j(() => [
        D(C("div", {
          class: v([i(e).b()]),
          style: M({
            zIndex: s.zIndex || i(o)
          }),
          onClick: m
        }, [
          _(d.$slots, "default", {}, void 0, !0)
        ], 6), [
          [ne, s.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
}), _t = /* @__PURE__ */ b(ht, [["__scopeId", "data-v-2ba470f4"]]), pe = E("ImMask", _t), gt = ["aria-modal"], bt = /* @__PURE__ */ g({
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
  setup(n, { emit: t }) {
    const e = k("drawer"), o = t, s = n, l = x(null), a = yt(s.placement), { zIndexToken: m } = U(), d = () => {
      o("update:modelValue", !1);
    };
    return (c, r) => (p(), P(ue, { to: "body" }, [
      C("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: l,
        class: v([i(e).b(), s.placement ? i(e).m(s.placement) : ""]),
        style: M({ "--im-drawer-size": (parseInt(String(s.size)) || 378) + "px", zIndex: s.zIndex || i(m) }),
        "aria-modal": s.modelValue
      }, [
        s.mask ? (p(), P(i(pe), {
          key: 0,
          visible: s.modelValue,
          closeOnClickMask: s.closeOnClickMask,
          onClose: d,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : z("", !0),
        S(se, {
          onEnter: i(a).onEnter,
          onLeave: i(a).onLeave
        }, {
          default: j(() => [
            D(C("div", {
              class: v([i(e).e("content")])
            }, [
              _(c.$slots, "default", {}, void 0, !0)
            ], 2), [
              [ne, s.modelValue]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ], 14, gt)
    ]));
  }
}), It = /* @__PURE__ */ b(bt, [["__scopeId", "data-v-1b0178a0"]]), wt = E("ImDrawer", It), kt = /* @__PURE__ */ g({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: !1 },
    shadow: { default: "" }
  },
  setup(n) {
    const t = k("card"), e = n;
    return (o, s) => (p(), y("div", {
      class: v([i(t).b(), i(t).is("borderless", e.borderless), e.shadow ? i(t).m(e.shadow) : ""])
    }, [
      _(o.$slots, "header", {}, () => [
        e.title || o.$slots["header-action"] ? (p(), y("div", {
          key: 0,
          class: v([i(t).e("header")])
        }, [
          C("span", {
            class: v([i(t).e("title")])
          }, O(e.title), 3),
          _(o.$slots, "header-action", {}, void 0, !0)
        ], 2)) : z("", !0)
      ], !0),
      C("div", {
        class: v([i(t).e("body")])
      }, [
        _(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), xt = /* @__PURE__ */ b(kt, [["__scopeId", "data-v-bb9cd52c"]]), Lt = E("ImCard", xt), $t = ["data-index", "onMouseenter", "onMouseleave"], Ct = { class: "im-message__text" }, Et = /* @__PURE__ */ g({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(n, { expose: t }) {
    const e = k("message"), o = n, s = x([]);
    let l = null;
    q(() => s.value, () => {
      s.value.length === 0 ? l = setTimeout(() => {
        !s.value.length && o.callback();
      }, 500) : (l && clearTimeout(l), l = null);
    });
    const a = (r) => {
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
    }, m = (r) => {
      r.timer && (clearTimeout(r.timer), r.timer = null);
    }, d = (r) => {
      r.timer && clearTimeout(r.timer), r.timer = setTimeout(() => {
        s.value = s.value.filter((u) => u.id !== r.id);
      }, r.duration || 3e3);
    }, c = (r) => {
      const u = setTimeout(() => {
        s.value = s.value.filter((f) => f.id !== r.id);
      }, r.duration || 3e3);
      s.value.push({ ...r, timer: u });
    };
    return o.add && o.add(c), t({ addMsg: c }), (r, u) => (p(), P($e, {
      tag: "ul",
      name: "list",
      css: !0,
      class: v([i(e).b()])
    }, {
      default: j(() => [
        (p(!0), y(X, null, H(s.value, (f) => (p(), y("li", {
          key: f.id,
          "data-index": f.id,
          onMouseenter: () => m(f),
          onMouseleave: () => d(f),
          class: v(["im-message__item", [i(e).e("item"), f.color ? i(e).e(f.color) : ""]])
        }, [
          S(i(F), {
            name: a(f.color),
            size: "18px"
          }, null, 8, ["name"]),
          C("span", Ct, O(f.msg), 1)
        ], 42, $t))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Bt = /* @__PURE__ */ b(Et, [["__scopeId", "data-v-820c83a9"]]);
class Tt {
  constructor() {
    J(this, "app");
    J(this, "container");
    J(this, "addMsgToList");
    this.app = null, this.container = null, this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    if (typeof window < "u" && window) {
      this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
      const t = this;
      this.app = Ce(Bt, {
        callback: () => {
          t.destroy();
        },
        add: (e) => {
          t.addMsgToList = e;
        }
      }), this.app.mount(this.container);
    } else
      throw new Error("只能在浏览器环境下使用");
  }
  destroy() {
    var t, e;
    (t = this.app) == null || t.unmount(), (e = this.container) == null || e.remove(), this.app = null, this.container = null;
  }
  addMsg(t) {
    if (this.app || this.createApp(), !this.addMsgToList) return console.error("addMsgToList is null");
    this.addMsgToList({
      msg: t.msg,
      id: Math.random().toString().slice(2) + "_" + Date.now(),
      duration: t.duration || 3e3,
      color: (t == null ? void 0 : t.color) || "primary"
    });
  }
  info(t, e) {
    this.addMsg({
      color: "primary",
      msg: t,
      duration: e,
      id: ""
    });
  }
  success(t, e) {
    this.addMsg({
      color: "success",
      msg: t,
      duration: e,
      id: ""
    });
  }
  warning(t, e) {
    this.addMsg({
      color: "warning",
      msg: t,
      duration: e,
      id: ""
    });
  }
  error(t, e) {
    this.addMsg({
      color: "error",
      msg: t,
      duration: e,
      id: ""
    });
  }
}
let $ = null;
const Yt = () => ($ || ($ = new Tt()), {
  info: (n, t = 3e3) => {
    $ == null || $.info(n, t);
  },
  success: (n, t = 3e3) => {
    $ == null || $.success(n, t);
  },
  warning: (n, t = 3e3) => {
    $ == null || $.warning(n, t);
  },
  error: (n, t = 3e3) => {
    $ == null || $.error(n, t);
  }
}), zt = ["data-visible", "data-esc"], Mt = /* @__PURE__ */ g({
  name: "ImDialog",
  __name: "ImDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    closeOnClickMask: { type: Boolean, default: !0 },
    width: { default: "420px" },
    height: { default: "auto" },
    fullscreen: { type: Boolean, default: !1 },
    closeOnEscape: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = k("dialog"), o = t, s = n, l = x(null);
    q(
      () => s.modelValue,
      (c) => {
        c ? s.closeOnEscape && window.addEventListener("keydown", a, { passive: !0 }) : window.removeEventListener("keydown", a);
      }
    );
    function a(c) {
      if (c.key === "Escape" || c.code === "Escape") {
        const r = document.querySelectorAll(
          '.im-dialog[data-visible="true"][data-esc="true"]'
        );
        r.length && l.value && Array.from(r).pop() === l.value && o("update:modelValue", !1);
      }
    }
    const m = async (c, r) => {
      c.style.setProperty("opacity", "0"), c.style.setProperty("transition", "all 0.2s ease"), s.fullscreen ? c.style.setProperty("transform", "translateY(100%)") : c.style.setProperty("transform", "scale(0.98)"), c.getBoundingClientRect(), c.style.setProperty("opacity", "1"), c.style.setProperty("transform", "translateY(0) scale(1)"), r(), !document.body.classList.contains("im-overflow-hidden") && document.body.classList.add("im-overflow-hidden");
    }, d = async (c, r) => {
      c.style.setProperty("opacity", "0"), s.fullscreen ? c.style.setProperty("transform", "translateY(100%)") : c.style.setProperty("transform", "scale(0.98)"), c.style.setProperty("transition", "all 0.2s ease");
      const u = () => {
        r(), Array.from(
          document.body.querySelectorAll('.im-dialog[data-visible="true"]')
        ).length || document.body.classList.remove("im-overflow-hidden"), c.removeEventListener("transitionend", u);
      };
      c.addEventListener("transitionend", u, { passive: !0 });
    };
    return (c, r) => (p(), P(ue, { to: "body" }, [
      C("div", {
        "aria-modal": "true",
        class: v([i(e).b()]),
        tabindex: "-1",
        "data-visible": s.modelValue,
        "data-esc": s.closeOnEscape,
        ref_key: "dialogRef",
        ref: l
      }, [
        S(i(pe), {
          closeOnClickMask: s.closeOnClickMask,
          visible: s.modelValue,
          onClose: r[0] || (r[0] = () => o("update:modelValue", !1))
        }, null, 8, ["closeOnClickMask", "visible"]),
        S(se, {
          onEnter: m,
          duration: { enter: 200, leave: 200 },
          onLeave: d
        }, {
          default: j(() => [
            D(C("div", {
              class: v([
                i(e).e("content"),
                i(e).is("fullscreen", s.fullscreen),
                "im-shadow"
              ]),
              style: M({
                maxWidth: s.width,
                width: s.width,
                height: s.height
              })
            }, [
              _(c.$slots, "default", {}, void 0, !0)
            ], 6), [
              [ne, s.modelValue]
            ])
          ]),
          _: 3
        })
      ], 10, zt)
    ]));
  }
}), Vt = /* @__PURE__ */ b(Mt, [["__scopeId", "data-v-b6a6ad9a"]]), At = E("ImDialog", Vt), Pt = [
  oe,
  re,
  ae,
  le,
  F,
  Z,
  qe,
  He,
  Ke,
  Qe,
  ot,
  ct,
  dt,
  ft,
  pe,
  wt,
  Lt,
  At
], Dt = (n, t) => {
  n.provide(be, {
    size: (t == null ? void 0 : t.size) || 36,
    zIndex: (t == null ? void 0 : t.zIndex) || 1e3
  }), n.directive("ripple", Be), Pt.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
}, Nt = {
  install: Dt
};
export {
  He as ImAlert,
  qe as ImAnchor,
  ft as ImAvatar,
  Ke as ImBreadcrumb,
  Qe as ImBreadcrumbItem,
  oe as ImButton,
  Lt as ImCard,
  re as ImCol,
  At as ImDialog,
  Z as ImDivider,
  wt as ImDrawer,
  ot as ImDropdown,
  F as ImIcon,
  le as ImInput,
  ct as ImList,
  dt as ImListItem,
  pe as ImMask,
  ae as ImRow,
  Nt as default,
  Yt as useImMessage
};
