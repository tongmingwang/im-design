var E = (n) => {
  throw TypeError(n);
};
var L = (n, t, e) => t.has(n) || E("Cannot " + e);
var z = (n, t, e) => (L(n, t, "read from private field"), e ? e.call(n) : t.get(n)), W = (n, t, e) => t.has(n) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), P = (n, t, e, o) => (L(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
import { inject as O, ref as k, createElementBlock as p, openBlock as d, createElementVNode as j, defineComponent as _, computed as g, resolveDirective as U, withDirectives as q, normalizeStyle as f, normalizeClass as h, createCommentVNode as $, renderSlot as R, unref as m, createVNode as G, createTextVNode as H, toDisplayString as J, useSlots as K, Fragment as Q, renderList as Z, createBlock as ee, resolveDynamicComponent as te, mergeProps as ne, vModelDynamic as oe } from "vue";
const F = Symbol("im-design-token"), x = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, o) => o ? `is-${e}` : ""
  };
}, M = (n, t) => {
  const e = O(F), o = k(Number(e.size || 36)), i = k(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: i };
}, ie = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function se(n, t) {
  return d(), p("svg", ie, t[0] || (t[0] = [
    j("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const ae = { render: se }, ce = ["tabindex", "type", "disabled"], re = /* @__PURE__ */ _({
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
    const e = n, o = t, i = x("button"), { sizeToken: s } = M(), a = g(() => [
      i.b(),
      e.color && i.m(e.color),
      e.shape && i.m(e.shape),
      e.variant && i.m(e.variant),
      i.is("disabled", e.disabled),
      i.is("loading", e.loading)
    ].filter(Boolean)), r = g(() => {
      let c = +(e.size || s.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), l = g(() => e.loading && ["square", "circle"].includes(e.shape)), u = () => {
      e.disabled || e.loading || o("click");
    };
    return (c, T) => {
      const w = U("ripple");
      return q((d(), p("button", {
        class: h(a.value),
        onClick: u,
        style: f(r.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (d(), p("span", {
          key: 0,
          class: h([m(i).e("loading")])
        }, [
          G(m(ae))
        ], 2)) : $("", !0),
        l.value ? $("", !0) : R(c.$slots, "default", { key: 1 }, () => [
          H(J(e.text), 1)
        ], !0)
      ], 14, ce)), [
        [w, !0]
      ]);
    };
  }
}), y = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, i] of t)
    e[o] = i;
  return e;
}, C = /* @__PURE__ */ y(re, [["__scopeId", "data-v-706dad03"]]);
C.install = (n) => {
  n.component("ImButton", C);
};
var v;
class le {
  constructor() {
    W(this, v);
    P(this, v, []);
  }
  async add(t) {
    z(this, v).push(t);
  }
  remove() {
    try {
      const t = z(this, v).shift();
      t && this.run(t);
    } catch (t) {
      console.error(t);
    }
  }
  async run(t) {
    try {
      const e = t.querySelector(".im-ripple__item");
      if (!e) return;
      let o = Date.now(), i = e.getAttribute("data-time");
      const s = o - Number(i) || 0;
      s && await new Promise((a) => {
        e.style.opacity = "0.1";
        const r = 200 - s;
        setTimeout(
          () => {
            a(null);
          },
          r > 0 ? r : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms ", setTimeout(() => {
        t && (t == null || t.remove());
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
}
v = new WeakMap();
const de = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", i, {
        passive: !0
      }), n.addEventListener("mouseup", s, { passive: !0 });
    })();
    const o = new le();
    async function i(a) {
      if (!t.value) return;
      const r = window.getComputedStyle(n), l = n.getBoundingClientRect(), u = document.createElement("div");
      u.className = "im-ripple", o.add(u);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const T = a.clientX || a.touches && a.touches[0].clientX, w = a.clientY || a.touches && a.touches[0].clientY, I = Math.max(l.width, l.height), X = T - l.left - I / 2, Y = w - l.top - I / 2, A = l.width - l.height <= 5;
      Object.assign(c.style, {
        "background-color": r.color,
        width: `${I}px`,
        height: `${I}px`,
        left: `${X}px`,
        top: `${Y}px`,
        opacity: "0.33",
        transform: A ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), u.appendChild(c), n.appendChild(u);
      const V = r.position;
      V === "static" && (n.style.position = "relative", n.dataset.originalPosition = V), c.getBoundingClientRect(), c.style.transform = "scale(2.8)", c.style.opacity = "0.33";
    }
    function s() {
      o.remove();
    }
  }
}, me = /* @__PURE__ */ _({
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
    const t = n, e = K(), o = g(() => {
      var s;
      return ((s = e.default) == null ? void 0 : s.call(e)) || [];
    }), i = x("row");
    return (s, a) => (d(), p("div", {
      class: h([m(i).b()]),
      style: f({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (d(!0), p(Q, null, Z(o.value, (r, l) => (d(), ee(te(r), { key: l }))), 128))
    ], 6));
  }
}), B = /* @__PURE__ */ y(me, [["__scopeId", "data-v-08122e1f"]]), pe = /* @__PURE__ */ _({
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
    const t = n, e = x("col"), o = g(
      () => +((Number(t.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (i, s) => (d(), p("div", {
      class: h([m(e).b()]),
      style: f({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      R(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), N = /* @__PURE__ */ y(pe, [["__scopeId", "data-v-ecf91058"]]);
B.install = (n) => {
  n.component("ImRow", B);
};
N.install = (n) => {
  n.component("ImCol", N);
};
const ue = /* @__PURE__ */ _({
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
    const e = n, { sizeToken: o } = M(), i = t, s = k(e.modelValue), a = x("input"), r = () => {
      i("update:modelValue", s.value), i("change", s.value);
    };
    return (l, u) => (d(), p("div", {
      class: h([m(a).b()]),
      style: f({
        "--in-input-size": (e.size || m(o) || 36) + "px"
      })
    }, [
      q(j("input", ne({
        class: [m(a).e("input")],
        "onUpdate:modelValue": u[0] || (u[0] = (c) => s.value = c)
      }, e, { onInput: r }), null, 16), [
        [oe, s.value]
      ])
    ], 6));
  }
}), D = /* @__PURE__ */ y(ue, [["__scopeId", "data-v-6c70856c"]]);
D.install = (n) => {
  n.component("ImInput", D);
};
const he = /* @__PURE__ */ _({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: Number,
    color: String
  },
  setup(n) {
    const t = n;
    return (e, o) => (d(), p("i", {
      class: h(["im-icon", [`im-icon-${t.name}`]]),
      style: f({
        "--icon-size": t.size || "16px",
        "--icon-color": t.color
      })
    }, null, 6));
  }
}), S = /* @__PURE__ */ y(he, [["__scopeId", "data-v-458c0f87"]]);
S.install = function(n) {
  n.component("ImIcon", S);
};
const ve = /* @__PURE__ */ _({
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
    const t = x("divider"), e = n;
    return (o, i) => (d(), p("div", {
      class: h([m(t).b(), m(t).is("vertical", e.vertical)]),
      style: f({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? $("", !0) : (d(), p("span", {
        key: 0,
        class: h([m(t).e("text")])
      }, [
        R(o.$slots, "default", {}, void 0, !0)
      ], 2))
    ], 6));
  }
}), b = /* @__PURE__ */ y(ve, [["__scopeId", "data-v-108f9bec"]]);
b.name = "ImDivider";
b.install = function(n) {
  n.component("ImDivider", b);
};
const _e = [C, N, B, D, S, b], ge = {
  install(n, t) {
    n.provide(F, {
      size: (t == null ? void 0 : t.size) || 36,
      zIndex: (t == null ? void 0 : t.zIndex) || 1e3
    }), n.directive("ripple", de), _e.forEach((e) => {
      e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
    });
  }
};
export {
  C as ImButton,
  N as ImCol,
  b as ImDivider,
  S as ImIcon,
  D as ImInput,
  B as ImRow,
  ge as default
};
