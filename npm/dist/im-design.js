var k = (n) => {
  throw TypeError(n);
};
var B = (n, t, e) => t.has(n) || k("Cannot " + e);
var y = (n, t, e) => (B(n, t, "read from private field"), e ? e.call(n) : t.get(n)), L = (n, t, e) => t.has(n) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), N = (n, t, e, s) => (B(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
import { inject as Y, ref as T, createElementBlock as a, openBlock as c, createElementVNode as b, defineComponent as I, computed as g, resolveDirective as q, withDirectives as A, normalizeStyle as S, normalizeClass as f, createCommentVNode as j, renderSlot as M, unref as _, createVNode as W, createTextVNode as G, toDisplayString as H, useSlots as J, Fragment as K, renderList as Q, createBlock as U, resolveDynamicComponent as Z } from "vue";
const O = Symbol("im-design-token"), C = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, s) => s ? `is-${e}` : ""
  };
}, ee = (n, t) => {
  const e = Y(O), s = T(Number(e.size || 36)), o = T(e.zIndex || 1e3);
  return { sizeToken: s, zIndexToken: o };
}, te = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function R(n, t) {
  return c(), a("svg", te, t[0] || (t[0] = [
    b("path", { d: "M481.835 512 155.584 185.75a21.333 21.333 0 0 1 30.165-30.166L512 481.834l326.25-326.25a21.333 21.333 0 0 1 30.166 30.165L542.166 512l326.25 326.25a21.333 21.333 0 0 1-30.165 30.166L512 542.166l-326.25 326.25a21.333 21.333 0 1 1-30.166-30.165z" }, null, -1)
  ]));
}
const ne = { render: R }, fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ne,
  render: R
}, Symbol.toStringTag, { value: "Module" })), oe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function E(n, t) {
  return c(), a("svg", oe, t[0] || (t[0] = [
    b("path", { d: "M448 768c176.725 0 320-143.275 320-320S624.725 128 448 128 128 271.275 128 448s143.275 320 320 320m0 42.667C247.701 810.667 85.333 648.299 85.333 448S247.701 85.333 448 85.333 810.667 247.701 810.667 448 648.299 810.667 448 810.667m304.917-27.584a21.333 21.333 0 0 1 30.166-30.166L933.93 903.765a21.333 21.333 0 0 1-30.166 30.166L752.917 783.104z" }, null, -1)
  ]));
}
const se = { render: E }, _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: se,
  render: E
}, Symbol.toStringTag, { value: "Module" })), ie = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function D(n, t) {
  return c(), a("svg", ie, t[0] || (t[0] = [
    b("path", { d: "M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333 85.333 38.205 85.333 85.333S810.968 896 763.84 896M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333-85.333-38.205-85.333-85.333S716.712 128 763.84 128m0 554.667h-.072c-39.16 0-74.203 17.626-97.628 45.378L376.255 560.982c4.932-13.101 7.787-28.245 7.787-44.055v-.595c0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509h.059c70.689 0 127.997-57.308 127.997-128s-57.308-128-128-128-128 57.308-128 128c0 18.965 4.224 36.907 11.627 53.099L355.179 435.179c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128l.001.564-.001.484c0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889s128-57.308 128-128-57.308-128-128-128" }, null, -1)
  ]));
}
const re = { render: D }, be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: re,
  render: D
}, Symbol.toStringTag, { value: "Module" })), ce = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function P(n, t) {
  return c(), a("svg", ce, t[0] || (t[0] = [
    b("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const le = { render: P }, ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le,
  render: P
}, Symbol.toStringTag, { value: "Module" })), de = ["tabindex", "type", "disabled"], v = /* @__PURE__ */ I({
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
    tabindex: {}
  },
  emits: ["click"],
  setup(n, { emit: t }) {
    const e = n, s = t, o = C("button"), { sizeToken: i } = ee(), h = g(() => [
      o.b(),
      e.color && o.m(e.color),
      e.shape && o.m(e.shape),
      e.variant && o.m(e.variant),
      o.is("disabled", e.disabled),
      o.is("loading", e.loading)
    ].filter(Boolean)), r = g(() => {
      let u = +(e.size || i.value || 36);
      return {
        "--im-button-size": u + "px",
        "--im-button-padding": (u * 0.4).toFixed(0) + "px"
      };
    }), l = g(() => e.loading && ["square", "circle"].includes(e.shape)), d = () => {
      e.disabled || e.loading || s("click");
    };
    return (u, $) => {
      const m = q("ripple");
      return A((c(), a("button", {
        class: f(h.value),
        onClick: d,
        style: S(r.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (c(), a("span", {
          key: 0,
          class: f([_(o).e("loading")])
        }, [
          W(_(ae))
        ], 2)) : j("", !0),
        l.value ? j("", !0) : M(u.$slots, "default", { key: 1 }, () => [
          G(H(e.text), 1)
        ])
      ], 14, de)), [
        [m]
      ]);
    };
  }
});
v.install = (n) => {
  n.component("ImButton", v);
};
var p;
class ue {
  constructor() {
    L(this, p);
    N(this, p, []);
  }
  add(t) {
    y(this, p).push(t);
  }
  remove() {
    try {
      const t = y(this, p).shift();
      t && this.run(t);
    } catch (t) {
      console.error(t);
    }
  }
  run(t) {
    try {
      if (t.getAttribute("data-remove") === "on") {
        const e = t.querySelector(".im-ripple__item");
        if (!e) return;
        e.style.opacity = "0", e.style.transition = "opacity 0.13s ease-out", setTimeout(() => {
          t.remove();
        }, 150);
      } else
        setTimeout(() => {
          this.run(t);
        }, 30);
    } catch (e) {
      console.log(e);
    }
  }
}
p = new WeakMap();
const me = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: !0
      }), n.addEventListener("mouseup", o, { passive: !0 });
    })();
    const e = new ue();
    async function s(i) {
      const h = window.getComputedStyle(n), r = n.getBoundingClientRect(), l = document.createElement("div");
      l.className = "im-ripple", e.add(l);
      const d = document.createElement("div");
      d.className = "im-ripple__item";
      const u = i.clientX || i.touches && i.touches[0].clientX, $ = i.clientY || i.touches && i.touches[0].clientY, m = Math.max(r.width, r.height), V = u - r.left - m / 2, F = $ - r.top - m / 2, X = r.width - r.height <= 5;
      Object.assign(d.style, {
        "background-color": h.color,
        width: `${m}px`,
        height: `${m}px`,
        left: `${V}px`,
        top: `${F}px`,
        opacity: 0.35,
        transform: X ? "scale(1)" : "scale(0.85)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), l.appendChild(d), n.appendChild(l);
      const z = h.position;
      z === "static" && (n.style.position = "relative", n.dataset.originalPosition = z), d.getBoundingClientRect(), d.style.transform = "scale(5)", d.addEventListener(
        "transitionend",
        () => {
          l.setAttribute("data-remove", "on");
        },
        { once: !0 }
      );
    }
    function o() {
      e.remove();
    }
  }
}, w = /* @__PURE__ */ I({
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
    const t = n, e = J(), s = g(() => {
      var i;
      return ((i = e.default) == null ? void 0 : i.call(e)) || [];
    }), o = C("row");
    return (i, h) => (c(), a("div", {
      class: f([_(o).b()]),
      style: S({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (c(!0), a(K, null, Q(s.value, (r, l) => (c(), U(Z(r), { key: l }))), 128))
    ], 6));
  }
}), x = /* @__PURE__ */ I({
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
    const t = n, e = C("col"), s = g(
      () => +((Number(t.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (o, i) => (c(), a("div", {
      class: f([_(e).b()]),
      style: S({
        "--im-col-w": s.value,
        "--im-col-offset": t.offset
      })
    }, [
      M(o.$slots, "default")
    ], 6));
  }
});
w.install = (n) => {
  n.component("ImRow", w);
};
x.install = (n) => {
  n.component("ImCol", x);
};
const pe = [v, x, w], ye = {
  install(n, t) {
    n.provide(O, {
      size: (t == null ? void 0 : t.size) || 36,
      zIndex: (t == null ? void 0 : t.zIndex) || 1e3
    }), n.directive("ripple", me), pe.forEach((e) => {
      e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
    });
  }
};
export {
  v as ImButton,
  x as ImCol,
  fe as ImIconClose,
  _e as ImIconSearch,
  be as ImIconShare,
  w as ImRow,
  ye as default
};
