var be = Object.defineProperty;
var pe = (n) => {
  throw TypeError(n);
};
var we = (n, t, e) => t in n ? be(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var te = (n, t, e) => we(n, typeof t != "symbol" ? t + "" : t, e), fe = (n, t, e) => t.has(n) || pe("Cannot " + e);
var G = (n, t, e) => (fe(n, t, "read from private field"), e ? e.call(n) : t.get(n)), ve = (n, t, e) => t.has(n) ? pe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), he = (n, t, e, o) => (fe(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
import { inject as ke, ref as $, createElementBlock as v, openBlock as m, createElementVNode as z, defineComponent as b, computed as A, resolveDirective as Q, withDirectives as R, normalizeStyle as M, normalizeClass as f, createCommentVNode as E, renderSlot as I, unref as i, createVNode as O, createTextVNode as q, toDisplayString as Y, useSlots as Z, Fragment as X, renderList as j, createBlock as S, resolveDynamicComponent as re, mergeProps as xe, vModelDynamic as $e, watch as W, onMounted as le, onUnmounted as ie, Teleport as ye, Transition as ce, withCtx as ee, vShow as ue, TransitionGroup as Ce, createApp as Le } from "vue";
const ge = Symbol("im-design-token");
var N;
class Be {
  constructor() {
    ve(this, N);
    he(this, N, []);
  }
  async add(t) {
    G(this, N).push(t);
  }
  remove() {
    try {
      const t = G(this, N).shift();
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
      const r = o - Number(s) || 0;
      r && await new Promise((a) => {
        e.style.opacity = "0.1";
        const p = 200 - r;
        setTimeout(
          () => {
            a(null);
          },
          p > 0 ? p : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms", setTimeout(() => {
        t && (t == null || t.remove()), G(this, N).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
}
N = new WeakMap();
const Ee = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: !0
      }), window.addEventListener("mouseup", r, { passive: !0 });
    })();
    const o = new Be();
    async function s(a) {
      if (!t.value) return;
      const p = window.getComputedStyle(n), l = n.getBoundingClientRect(), d = document.createElement("div");
      d.className = "im-ripple", o.add(d);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const u = a.clientX || a.touches && a.touches[0].clientX, h = a.clientY || a.touches && a.touches[0].clientY, _ = Math.max(l.width, l.height), y = u - l.left - _ / 2, L = h - l.top - _ / 2, B = l.width - l.height <= 5;
      Object.assign(c.style, {
        "background-color": p.color,
        width: `${_}px`,
        height: `${_}px`,
        left: `${y}px`,
        top: `${L}px`,
        opacity: "0.15",
        transform: B ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), d.appendChild(c), n.appendChild(d);
      const g = p.position;
      g === "static" && (n.style.position = "relative", n.dataset.originalPosition = g), c.getBoundingClientRect(), c.style.transform = "scale(2.8)", c.style.opacity = "0.33";
    }
    n.im_add_ripple_fn__ = s, n.im_remove_ripple_fn__ = r;
    function r() {
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
}, H = (n, t) => {
  const e = ke(ge), o = $(Number(e.size || 36)), s = $(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
}, ze = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function Te(n, t) {
  return m(), v("svg", ze, t[0] || (t[0] = [
    z("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const Me = { render: Te }, Ve = ["tabindex", "type", "disabled"], Ae = /* @__PURE__ */ b({
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
    const e = n, o = t, s = k("button"), { sizeToken: r } = H(), a = A(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), p = A(() => {
      let c = +(e.size || r.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), l = A(() => e.loading && ["square", "circle"].includes(e.shape)), d = () => {
      e.disabled || e.loading || o("click");
    };
    return (c, u) => {
      const h = Q("ripple");
      return R((m(), v("button", {
        class: f(a.value),
        onClick: d,
        style: M(p.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (m(), v("span", {
          key: 0,
          class: f([i(s).e("loading")])
        }, [
          O(i(Me))
        ], 2)) : E("", !0),
        l.value ? E("", !0) : I(c.$slots, "default", { key: 1 }, () => [
          q(Y(e.text), 1)
        ], !0)
      ], 14, Ve)), [
        [h, !0]
      ]);
    };
  }
}), w = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, s] of t)
    e[o] = s;
  return e;
}, ne = /* @__PURE__ */ w(Ae, [["__scopeId", "data-v-706dad03"]]);
ne.install = (n) => {
  n.component("ImButton", ne);
};
const De = /* @__PURE__ */ b({
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
    const t = n, e = Z(), o = A(() => {
      var r;
      return ((r = e.default) == null ? void 0 : r.call(e)) || [];
    }), s = k("row");
    return (r, a) => (m(), v("div", {
      class: f([i(s).b()]),
      style: M({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (m(!0), v(X, null, j(o.value, (p, l) => (m(), S(re(p), { key: l }))), 128))
    ], 6));
  }
}), se = /* @__PURE__ */ w(De, [["__scopeId", "data-v-5179967f"]]), Se = /* @__PURE__ */ b({
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
    return (s, r) => (m(), v("div", {
      class: f([i(e).b()]),
      style: M({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      I(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), oe = /* @__PURE__ */ w(Se, [["__scopeId", "data-v-ecf91058"]]);
se.install = (n) => {
  n.component("ImRow", se);
};
oe.install = (n) => {
  n.component("ImCol", oe);
};
const Re = /* @__PURE__ */ b({
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
    const e = n, { sizeToken: o } = H(), s = t, r = $(e.modelValue), a = k("input"), p = () => {
      s("update:modelValue", r.value), s("change", r.value);
    };
    return (l, d) => (m(), v("div", {
      class: f([i(a).b()]),
      style: M({
        "--in-input-size": (e.size || i(o) || 36) + "px"
      })
    }, [
      R(z("input", xe({
        class: [i(a).e("input")],
        "onUpdate:modelValue": d[0] || (d[0] = (c) => r.value = c)
      }, e, { onInput: p }), null, 16), [
        [$e, r.value]
      ])
    ], 6));
  }
}), ae = /* @__PURE__ */ w(Re, [["__scopeId", "data-v-6c70856c"]]);
ae.install = (n) => {
  n.component("ImInput", ae);
};
const Pe = /* @__PURE__ */ b({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(n) {
    const t = n;
    return (e, o) => (m(), v("i", {
      class: f(["im-icon", [`im-icon-${t.name}`]]),
      style: M({
        "--icon-size": (parseInt(String(t.size)) || 16) + "px",
        "--icon-color": t.color
      })
    }, null, 6));
  }
}), F = /* @__PURE__ */ w(Pe, [["__scopeId", "data-v-1e711363"]]);
F.install = function(n) {
  n.component("ImIcon", F);
};
const Ne = /* @__PURE__ */ b({
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
    return (o, s) => (m(), v("div", {
      class: f([i(t).b(), i(t).is("vertical", e.vertical)]),
      style: M({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? E("", !0) : (m(), v("span", {
        key: 0,
        class: f([i(t).e("text")])
      }, [
        I(o.$slots, "default", {}, void 0, !0)
      ], 2))
    ], 6));
  }
}), K = /* @__PURE__ */ w(Ne, [["__scopeId", "data-v-108f9bec"]]);
K.name = "ImDivider";
K.install = function(n) {
  n.component("ImDivider", K);
};
const T = (n, t) => (t.install = (e) => {
  e.component(n, t);
}, t), de = (n, t) => {
  let e;
  return function(...o) {
    e || (e = setTimeout(() => {
      n.apply(this, o), e = null;
    }, t));
  };
}, J = (n, t) => {
  let e;
  return function(...o) {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, o);
    }, t);
  };
}, _e = (n, t, e) => {
  if (!e) return !1;
  const o = e.getBoundingClientRect();
  return n >= o.left && n <= o.left + o.width && t >= o.top && t <= o.top + o.height;
}, Ye = ["onClick"], Oe = /* @__PURE__ */ b({
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
    const o = $(null), s = $(null), r = $(null), a = n;
    W(
      () => a.target,
      () => {
        e && e(), e = d();
      }
    ), le(() => {
      e = d();
    }), ie(() => {
      e && e();
    });
    function p(u) {
      let h = u == null ? void 0 : u.scrollTop;
      return o.value === window && (h = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), h;
    }
    function l(u) {
      var B;
      if (r.value || !o.value) return;
      const h = o.value === window ? u.target : o.value;
      let _ = p(h);
      const y = h.offsetTop || 0, L = (a.data || []).map(({ id: g }) => {
        const x = document.getElementById(g);
        return x ? {
          id: g,
          offsetTop: x.offsetTop - y,
          el: x
        } : null;
      }).filter(Boolean);
      s.value = null;
      for (let g = 0; g < L.length; g++) {
        const x = L[g];
        if (_ >= x.offsetTop - (a.offset || 0) && _ <= x.offsetTop + (((B = x.el) == null ? void 0 : B.clientHeight) || 0) - (a.offset || 0)) {
          s.value = x.id;
          return;
        }
      }
      if (!s.value && _ >= (parseInt(String(a.offset)) || 0)) {
        const g = L.find((x) => _ <= x.offsetTop - (a.offset || 0) && _ > (a.offset || 0) ? (s.value = x.id, !0) : !1);
        g && (s.value = g.id);
      }
    }
    function d() {
      const u = a.target ? typeof a.target == "string" ? document.querySelector(a.target) : a.target : window;
      if (!u)
        return null;
      o.value = u;
      const h = de(l, 50);
      return l({ target: u }), u.addEventListener("scroll", h, { passive: !0 }), () => {
        u.removeEventListener("scroll", h);
      };
    }
    async function c(u) {
      var y, L, B;
      if (s.value === u || !u) return;
      r.value = u, s.value = u;
      const h = document.getElementById(u);
      if (!h) return;
      (L = o.value) == null || L.scrollTo({
        // @ts-ignore
        top: h.offsetTop - (a.offset || 0) - (((y = o.value) == null ? void 0 : y.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const _ = J(() => {
        var g;
        r.value = null, (g = o.value) == null || g.removeEventListener("scroll", _);
      }, 300);
      (B = o.value) == null || B.addEventListener("scroll", _, { passive: !0 });
    }
    return (u, h) => {
      const _ = Q("ripple");
      return a.data && a.data.length ? (m(), v("ul", {
        key: 0,
        class: f([i(t).b()])
      }, [
        (m(!0), v(X, null, j(a.data, (y) => R((m(), v("li", {
          class: f([i(t).e("item"), i(t).is("active", s.value === y.id)]),
          onClick: () => c(y.id)
        }, [
          s.value === y.id ? (m(), v("span", {
            key: 0,
            class: f([i(t).e("bar")])
          }, null, 2)) : E("", !0),
          q(" " + Y(y.text), 1)
        ], 10, Ye)), [
          [_, !0]
        ])), 256))
      ], 2)) : E("", !0);
    };
  }
}), Xe = /* @__PURE__ */ w(Oe, [["__scopeId", "data-v-4840d244"]]), Fe = T("ImAnchor", Xe), qe = /* @__PURE__ */ b({
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
    const e = t, o = $(null), s = n, r = k("alert"), a = Z(), p = A(() => !!(s.showIcon && s.title)), l = A(() => {
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
    }), d = async () => {
      var c, u;
      e("close"), (c = o.value) == null || c.animate([{
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
      }), await new Promise((h) => setTimeout(h, 300)), (u = o.value) == null || u.remove();
    };
    return (c, u) => {
      const h = Q("ripple");
      return m(), v("div", {
        ref_key: "alertRef",
        ref: o,
        class: f([i(r).b(), i(r).m(s.color || "primary"), s.variant && i(r).m(s.variant || "")])
      }, [
        s.showIcon ? (m(), v("div", {
          key: 0,
          class: f([i(r).e("icon")])
        }, [
          I(c.$slots, "icon", {}, () => [
            O(i(F), {
              name: l.value,
              size: p.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], !0)
        ], 2)) : E("", !0),
        z("div", {
          class: f([i(r).e("content")])
        }, [
          s.title || i(a).title ? (m(), v("div", {
            key: 0,
            class: f([i(r).e("title")])
          }, [
            I(c.$slots, "title", {}, () => [
              q(Y(s.title), 1)
            ], !0)
          ], 2)) : E("", !0),
          z("div", {
            class: f([i(r).e("message")])
          }, [
            I(c.$slots, "default", {}, () => [
              q(Y(s.message), 1)
            ], !0)
          ], 2)
        ], 2),
        s.closable ? R((m(), v("div", {
          key: 1,
          class: f([i(r).e("close")]),
          onClick: d
        }, [
          I(c.$slots, "close", {}, () => [
            O(i(F), {
              name: "close",
              size: "16"
            })
          ], !0)
        ], 2)), [
          [h, !0]
        ]) : E("", !0)
      ], 2);
    };
  }
}), We = /* @__PURE__ */ w(qe, [["__scopeId", "data-v-d11fdcb2"]]), je = T("ImAlert", We), He = /* @__PURE__ */ b({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = Z(), o = t, s = k("breadcrumb"), r = n, a = A(
      () => {
        var l, d;
        return (d = (l = e.default) == null ? void 0 : l.call(e)) == null ? void 0 : d.filter((c) => {
          var u;
          return (c == null ? void 0 : c.type) && ((u = c == null ? void 0 : c.type) == null ? void 0 : u.name) === "ImBreadcrumbItem";
        });
      }
    ), p = (l) => {
      l && r.modelValue !== l && (o("update:modelValue", l), o("change", l));
    };
    return (l, d) => (m(), v("div", {
      class: f([i(s).b()])
    }, [
      (m(!0), v(X, null, j(a.value, (c, u) => (m(), v(X, null, [
        (m(), S(re(c), {
          active: r.modelValue,
          onClick: p
        }, null, 8, ["active"])),
        a.value && a.value.length > 0 && u < a.value.length - 1 ? (m(), v("span", {
          key: 0,
          class: f([i(s).e("separator")])
        }, [
          I(l.$slots, "separator", {}, () => [
            q(Y(r.separator), 1)
          ], !0)
        ], 2)) : E("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Ue = /* @__PURE__ */ w(He, [["__scopeId", "data-v-64336468"]]), Ge = /* @__PURE__ */ b({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(n, { emit: t }) {
    const e = k("breadcrumb__item"), o = n, s = t;
    return (r, a) => (m(), v("div", {
      onClick: a[0] || (a[0] = () => s("click", o.value)),
      class: f([i(e).b(), i(e).is("active", o.active === o.value && !!o.value)])
    }, [
      I(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ w(Ge, [["__scopeId", "data-v-40ed04b1"]]), Ke = T("ImBreadcrumb", Ue), Qe = T("ImBreadcrumb", Je), Ze = (n = 50) => {
  const t = $(0), e = $(0), o = de((s) => {
    t.value = s.clientX, e.value = s.clientY;
  }, n);
  return le(() => {
    window.addEventListener("mousemove", o, { passive: !0 });
  }), ie(() => {
    window.removeEventListener("mousemove", o);
  }), { x: t, y: e };
}, et = (n, t, e, o = "bottomLeft") => {
  W(
    () => n.value,
    () => {
      n.value && s();
    }
  );
  async function s() {
    var h;
    await new Promise((_) => requestAnimationFrame(_));
    const r = t == null ? void 0 : t.value, a = e == null ? void 0 : e.value;
    if (!r || !a) return;
    const l = (((h = r.children) == null ? void 0 : h.length) != 1 ? r : r.children[0]).getBoundingClientRect(), d = l.bottom, c = a.getBoundingClientRect(), u = 2;
    switch (o) {
      case "bottom":
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty(
          "left",
          `${l.left + l.width / 2 - c.width / 2}px`
        );
        break;
      case "bottomRight":
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty(
          "left",
          `${l.left + l.width - c.width}px`
        );
        break;
      case "top":
        a.style.setProperty(
          "top",
          `${l.top - c.height - u}px`
        ), a.style.setProperty(
          "left",
          `${l.left + l.width / 2 - c.width / 2}px`
        );
        break;
      case "topRight":
        a.style.setProperty(
          "top",
          `${l.top - c.height - u}px`
        ), a.style.setProperty(
          "left",
          `${l.right - c.width}px`
        );
        break;
      case "topLeft":
        a.style.setProperty(
          "top",
          `${l.top - c.height - u}px`
        ), a.style.setProperty("left", `${l.left}px`);
        break;
      default:
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty("left", `${l.left}px`);
        break;
    }
  }
}, tt = (n) => {
  const t = n.toLowerCase().includes("bottom") ? "translateY(-10px)" : "translateY(10px)";
  function e(s, r) {
    s.style.transform = t, s.style.opacity = "0", s.style.pointerEvents = "none", s.getBoundingClientRect(), s.style.transform = "translateY(0px)", s.style.opacity = "1", s.style.pointerEvents = "auto", r();
  }
  async function o(s, r) {
    s.style.transform = t, s.style.opacity = "0", s.getBoundingClientRect(), s.addEventListener("transitionend", () => {
      r(), s.style.transform = "translateY(0px)";
    });
  }
  return {
    onEnter: e,
    onLeave: o
  };
}, nt = /* @__PURE__ */ b({
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
    var x;
    const e = t, o = k("dropdown"), s = n, r = $(null), a = $(null), p = $(s.modelValue || !1), l = tt((x = s.placement) != null && x.includes("top") ? "top" : "bottom");
    let d = null, c = 100;
    const { x: u, y: h } = Ze(30), { zIndexToken: _ } = H();
    et(p, r, a, s.placement), le(() => {
      d && d(), d = g();
    }), ie(() => {
      d && d();
    }), W(() => s.trigger, () => {
      d && d(), d = g();
    });
    const y = de(() => {
      const D = _e(u.value, h.value, a.value);
      _e(u.value, h.value, r.value) || D || (p.value = !1);
    }, c);
    W(() => [u.value, h.value], () => {
      s.trigger != "hover" || !p.value || y();
    });
    function L() {
      p.value = !0, e("update:modelValue", p.value), e("change", p.value), window.addEventListener("scroll", B, { passive: !0, capture: !0 });
    }
    function B() {
      p.value = !1, e("update:modelValue", p.value), e("change", p.value), window.removeEventListener("scroll", close);
    }
    function g() {
      var U, me;
      d && d();
      const D = J((P) => {
        var V;
        (V = r.value) != null && V.contains(P.target) || B();
      }, c);
      if (document.addEventListener("click", D, { passive: !0 }), s.trigger === "hover") {
        const P = J(L, c);
        return (U = r.value) == null || U.addEventListener("mouseenter", P, { passive: !0 }), () => {
          var V;
          (V = r.value) == null || V.removeEventListener("mouseenter", P), document.removeEventListener("click", D);
        };
      }
      if (s.trigger === "click") {
        const P = J(() => {
          p.value ? B() : L();
        }, c);
        return (me = r.value) == null || me.addEventListener("click", P, { passive: !0 }), () => {
          var V;
          (V = r.value) == null || V.removeEventListener("click", P), document.removeEventListener("click", D);
        };
      }
      return null;
    }
    return (D, U) => (m(), v("span", {
      class: f([i(o).b()]),
      ref_key: "dropdownRef",
      ref: r
    }, [
      I(D.$slots, "default", {}, void 0, !0),
      (m(), S(ye, { to: "body" }, [
        O(ce, {
          onEnter: i(l).onEnter,
          onLeave: i(l).onLeave,
          duration: { enter: 300, leave: 200 }
        }, {
          default: ee(() => [
            R(z("div", {
              class: f([i(o).e("content")]),
              ref_key: "contentRef",
              ref: a,
              style: M({
                zIndex: s.zIndex || i(_)
              })
            }, [
              I(D.$slots, "content", {}, void 0, !0)
            ], 6), [
              [ue, p.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
}), st = /* @__PURE__ */ w(nt, [["__scopeId", "data-v-c394ceaa"]]), ot = T("ImDropdown", st), at = /* @__PURE__ */ b({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = n, o = Z(), s = k("list"), r = A(() => {
      var d;
      const l = ((d = o.default) == null ? void 0 : d.call(o)) || [];
      if (l.length) {
        const c = [];
        return l.forEach((u) => {
          var h, _;
          typeof u.type == "object" ? c.push(u) : u.children && ((h = u.children) != null && h.length) && ((_ = u.children) == null || _.forEach((y) => {
            typeof (y == null ? void 0 : y.type) == "object" && c.push(y);
          }));
        }), c;
      }
    }), a = t, p = (l) => {
      a("update:modelValue", l.value), a("change", l.value);
    };
    return (l, d) => (m(), v("ul", {
      class: f([i(s).b()])
    }, [
      (m(!0), v(X, null, j(r.value, (c) => (m(), S(re(c), {
        active: e.modelValue,
        onClick: () => p(c.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
}), rt = /* @__PURE__ */ w(at, [["__scopeId", "data-v-9599f63c"]]), lt = /* @__PURE__ */ b({
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
    return (r, a) => {
      const p = Q("ripple");
      return R((m(), v("li", {
        class: f([i(e).b(), i(e).is("active", !!(s.active && s.active === s.value))]),
        onClick: a[0] || (a[0] = (l) => o("click", l))
      }, [
        I(r.$slots, "default", {}, void 0, !0)
      ], 2)), [
        [p, s.ripple]
      ]);
    };
  }
}), it = /* @__PURE__ */ w(lt, [["__scopeId", "data-v-41ec0ba7"]]), ct = T("ImList", rt), ut = T("ImListItem", it), dt = ["src", "srcset", "alt", "loading"], mt = /* @__PURE__ */ b({
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
    const e = t, o = k("avatar"), s = n, r = (a) => {
      console.log(a.target), e("error", a);
    };
    return (a, p) => (m(), v("span", {
      class: f([i(o).b(), s.shape ? i(o).m(s.shape) : ""]),
      style: M({
        "--im-avatar-size": (Number(s.size) || 36) + "px",
        "--im-avatar-color": s.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": s.fit
      })
    }, [
      !s.src && !s.srcset ? (m(), v("div", {
        key: 0,
        class: f([i(o).e("icon")])
      }, [
        I(a.$slots, "default", {}, void 0, !0)
      ], 2)) : (m(), v("img", {
        key: 1,
        onError: r,
        src: s.src,
        srcset: s.srcset,
        alt: s.alt,
        loading: s.loading,
        class: f([i(o).e("img")])
      }, null, 42, dt))
    ], 6));
  }
}), pt = /* @__PURE__ */ w(mt, [["__scopeId", "data-v-c4c32038"]]), ft = T("ImAvatar", pt), vt = () => ({
  onEnter: (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease", n.getBoundingClientRect(), n.style.opacity = 1, t();
  },
  onLeave: async (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease", await new Promise((e) => requestAnimationFrame(e)), n.addEventListener("transitionend", t);
  }
}), ht = (n = "right") => {
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
      o.style.transform = e, o.style.opacity = "0", o.style.transition = "transform 200ms ease, opacity 200ms ease", await new Promise((r) => requestAnimationFrame(r)), o.addEventListener("transitionend", () => {
        s();
      });
    }
  };
}, _t = /* @__PURE__ */ b({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: !1 },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(n, { emit: t }) {
    const e = k("mask"), { zIndexToken: o } = H(), s = n, r = vt(), a = t, p = () => {
      s.closeOnClickMask && a("close", !1);
    };
    return (l, d) => (m(), S(ce, {
      onEnter: i(r).onEnter,
      onLeave: i(r).onLeave
    }, {
      default: ee(() => [
        R(z("div", {
          class: f([i(e).b()]),
          style: M({
            zIndex: s.zIndex || i(o)
          }),
          onClick: p
        }, [
          I(l.$slots, "default", {}, void 0, !0)
        ], 6), [
          [ue, s.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
}), yt = /* @__PURE__ */ w(_t, [["__scopeId", "data-v-2ba470f4"]]), Ie = T("ImMask", yt), gt = ["aria-modal"], It = /* @__PURE__ */ b({
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
    const e = k("drawer"), o = t, s = n, r = $(null), a = ht(s.placement), { zIndexToken: p } = H(), l = () => {
      o("update:modelValue", !1);
    };
    return (d, c) => (m(), S(ye, { to: "body" }, [
      z("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: r,
        class: f([i(e).b(), s.placement ? i(e).m(s.placement) : ""]),
        style: M({ "--im-drawer-size": (parseInt(String(s.size)) || 378) + "px", zIndex: s.zIndex || i(p) }),
        "aria-modal": s.modelValue
      }, [
        s.mask ? (m(), S(i(Ie), {
          key: 0,
          visible: s.modelValue,
          closeOnClickMask: s.closeOnClickMask,
          onClose: l,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : E("", !0),
        O(ce, {
          onEnter: i(a).onEnter,
          onLeave: i(a).onLeave
        }, {
          default: ee(() => [
            R(z("div", {
              class: f([i(e).e("content")])
            }, [
              I(d.$slots, "default", {}, void 0, !0)
            ], 2), [
              [ue, s.modelValue]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ], 14, gt)
    ]));
  }
}), bt = /* @__PURE__ */ w(It, [["__scopeId", "data-v-1b0178a0"]]), wt = T("ImDrawer", bt), kt = /* @__PURE__ */ b({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: !1 },
    shadow: { default: "" }
  },
  setup(n) {
    const t = k("card"), e = n;
    return (o, s) => (m(), v("div", {
      class: f([i(t).b(), i(t).is("borderless", e.borderless), e.shadow ? i(t).m(e.shadow) : ""])
    }, [
      I(o.$slots, "header", {}, () => [
        z("div", {
          class: f([i(t).e("header")])
        }, [
          e.title ? (m(), v("span", {
            key: 0,
            class: f([i(t).e("title")])
          }, Y(e.title), 3)) : E("", !0),
          I(o.$slots, "header-action", {}, void 0, !0)
        ], 2)
      ], !0),
      z("div", {
        class: f([i(t).e("body")])
      }, [
        I(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), xt = /* @__PURE__ */ w(kt, [["__scopeId", "data-v-cf1ecfc0"]]), $t = T("ImCard", xt), Ct = ["data-index"], Lt = { class: "im-message__text" }, Bt = /* @__PURE__ */ b({
  __name: "Message",
  props: {
    callback: { type: Function }
  },
  setup(n, { expose: t }) {
    const e = k("message"), o = n, s = $([]);
    let r = null;
    W(() => s.value, () => {
      s.value.length === 0 ? (console.log("消息列表为空，执行回调函数"), r = setTimeout(() => {
        !s.value.length && o.callback();
      }, 500)) : (r && clearTimeout(r), r = null);
    });
    const a = (l) => {
      switch (l) {
        case "success":
          return "check-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "error":
          return "close-circle-fill";
        default:
          return "info-circle-fill";
      }
    };
    return t({ addMsg: (l) => {
      s.value.push(l), setTimeout(() => {
        s.value = s.value.filter((d) => d.id !== l.id);
      }, l.duration || 3e3);
    } }), (l, d) => (m(), S(Ce, {
      tag: "ul",
      name: "list",
      css: !0,
      class: f([i(e).b()])
    }, {
      default: ee(() => [
        (m(!0), v(X, null, j(s.value, (c) => (m(), v("li", {
          key: c.id,
          "data-index": c.id,
          class: f(["im-message__item", [i(e).e("item"), c.color ? i(e).e(c.color) : ""]])
        }, [
          O(i(F), {
            name: a(c.color),
            size: "18px"
          }, null, 8, ["name"]),
          z("span", Lt, Y(c.msg), 1)
        ], 10, Ct))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Et = /* @__PURE__ */ w(Bt, [["__scopeId", "data-v-dbc89381"]]);
class zt {
  constructor() {
    te(this, "app");
    te(this, "container");
    this.app = null, this.container = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
    const t = this;
    this.app = Le(Et, {
      callback: () => {
        t.destroy();
      }
    }), this.app.mount(this.container);
  }
  destroy() {
    var t, e;
    (t = this.app) == null || t.unmount(), (e = this.container) == null || e.remove(), this.app = null, this.container = null;
  }
  addMsg(t) {
    var e, o, s;
    this.app || this.createApp(), (s = (o = (e = this.app) == null ? void 0 : e._instance) == null ? void 0 : o.exposed) == null || s.addMsg({
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
const C = new zt(), Dt = () => ({
  info: (n, t = 3e3) => {
    C == null || C.info(n, t);
  },
  success: (n, t = 3e3) => {
    C == null || C.success(n, t);
  },
  warning: (n, t = 3e3) => {
    C == null || C.warning(n, t);
  },
  error: (n, t = 3e3) => {
    C == null || C.error(n, t);
  }
}), Tt = [
  ne,
  oe,
  se,
  ae,
  F,
  K,
  Fe,
  je,
  Ke,
  Qe,
  ot,
  ct,
  ut,
  ft,
  Ie,
  wt,
  $t
], Mt = (n, t) => {
  n.provide(ge, {
    size: (t == null ? void 0 : t.size) || 36,
    zIndex: (t == null ? void 0 : t.zIndex) || 1e3
  }), n.directive("ripple", Ee), Tt.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
}, St = {
  install: Mt
};
export {
  je as ImAlert,
  Fe as ImAnchor,
  ft as ImAvatar,
  Ke as ImBreadcrumb,
  Qe as ImBreadcrumbItem,
  ne as ImButton,
  $t as ImCard,
  oe as ImCol,
  K as ImDivider,
  wt as ImDrawer,
  ot as ImDropdown,
  F as ImIcon,
  ae as ImInput,
  ct as ImList,
  ut as ImListItem,
  Ie as ImMask,
  se as ImRow,
  St as default,
  Dt as useImMessage
};
