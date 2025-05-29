var R = (n) => {
  throw TypeError(n);
};
var V = (n, t, e) => t.has(n) || R("Cannot " + e);
var v = (n, t, e) => (V(n, t, "read from private field"), e ? e.call(n) : t.get(n)), T = (n, t, e) => t.has(n) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), D = (n, t, e, o) => (V(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
import { inject as O, ref as w, createElementBlock as p, openBlock as m, createElementVNode as L, defineComponent as f, computed as y, resolveDirective as U, withDirectives as j, normalizeStyle as _, normalizeClass as g, createCommentVNode as E, renderSlot as q, unref as d, createVNode as W, createTextVNode as A, toDisplayString as G, useSlots as H, Fragment as J, renderList as K, createBlock as Q, resolveDynamicComponent as Z, mergeProps as ee, vModelDynamic as te } from "vue";
const F = Symbol("im-design-token"), x = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, o) => o ? `is-${e}` : ""
  };
}, M = (n, t) => {
  const e = O(F), o = w(Number(e.size || 36)), s = w(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
}, ne = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function oe(n, t) {
  return m(), p("svg", ne, t[0] || (t[0] = [
    L("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const se = { render: oe }, ie = ["tabindex", "type", "disabled"], z = /* @__PURE__ */ f({
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
    const e = n, o = t, s = x("button"), { sizeToken: i } = M(), l = y(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), u = y(() => {
      let a = +(e.size || i.value || 36);
      return {
        "--im-button-size": a + "px",
        "--im-button-padding": (a * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), c = y(() => e.loading && ["square", "circle"].includes(e.shape)), r = () => {
      e.disabled || e.loading || o("click");
    };
    return (a, N) => {
      const I = U("ripple");
      return j((m(), p("button", {
        class: g(l.value),
        onClick: r,
        style: _(u.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (m(), p("span", {
          key: 0,
          class: g([d(s).e("loading")])
        }, [
          W(d(se))
        ], 2)) : E("", !0),
        c.value ? E("", !0) : q(a.$slots, "default", { key: 1 }, () => [
          A(G(e.text), 1)
        ])
      ], 14, ie)), [
        [I, !0]
      ]);
    };
  }
});
z.install = (n) => {
  n.component("ImButton", z);
};
var h;
class ae {
  constructor() {
    T(this, h);
    D(this, h, []);
  }
  async add(t) {
    v(this, h).push(t);
  }
  remove() {
    try {
      const t = v(this, h).shift();
      t && this.run(t);
    } catch (t) {
      console.error(t);
    }
  }
  run(t) {
    try {
      const e = t.querySelector(".im-ripple__item");
      if (!e) return;
      e.style.opacity = "0", e.style.transition = "all 200ms ease-out", e.getBoundingClientRect(), setTimeout(() => {
        t.remove();
      }, 200);
    } catch (e) {
      console.log(e);
    }
  }
}
h = new WeakMap();
const le = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: !0
      }), n.addEventListener("mouseup", i, { passive: !0 });
    })();
    const o = new ae();
    async function s(l) {
      if (!t.value) return;
      const u = window.getComputedStyle(n), c = n.getBoundingClientRect(), r = document.createElement("div");
      r.className = "im-ripple", o.add(r);
      const a = document.createElement("div");
      a.className = "im-ripple__item";
      const N = l.clientX || l.touches && l.touches[0].clientX, I = l.clientY || l.touches && l.touches[0].clientY, b = Math.max(c.width, c.height), P = N - c.left - b / 2, X = I - c.top - b / 2, Y = c.width - c.height <= 5;
      Object.assign(a.style, {
        "background-color": u.color,
        width: `${b}px`,
        height: `${b}px`,
        left: `${P}px`,
        top: `${X}px`,
        opacity: "0.25",
        transform: Y ? "scale(0.88)" : "scale(0.66)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), r.appendChild(a), n.appendChild(r);
      const S = u.position;
      S === "static" && (n.style.position = "relative", n.dataset.originalPosition = S), a.getBoundingClientRect(), a.style.transform = "scale(5)", a.style.opacity = "0.33";
    }
    function i() {
      o.remove();
    }
  }
}, k = /* @__PURE__ */ f({
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
    const t = n, e = H(), o = y(() => {
      var i;
      return ((i = e.default) == null ? void 0 : i.call(e)) || [];
    }), s = x("row");
    return (i, l) => (m(), p("div", {
      class: g([d(s).b()]),
      style: _({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (m(!0), p(J, null, K(o.value, (u, c) => (m(), Q(Z(u), { key: c }))), 128))
    ], 6));
  }
}), C = /* @__PURE__ */ f({
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
    const t = n, e = x("col"), o = y(
      () => +((Number(t.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (s, i) => (m(), p("div", {
      class: g([d(e).b()]),
      style: _({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      q(s.$slots, "default")
    ], 6));
  }
});
k.install = (n) => {
  n.component("ImRow", k);
};
C.install = (n) => {
  n.component("ImCol", C);
};
const B = /* @__PURE__ */ f({
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
    const e = n, { sizeToken: o } = M(), s = t, i = w(e.modelValue), l = x("input"), u = () => {
      s("update:modelValue", i.value), s("change", i.value);
    };
    return (c, r) => (m(), p("div", {
      class: g([d(l).b()]),
      style: _({
        "--in-input-size": (e.size || d(o) || 36) + "px"
      })
    }, [
      j(L("input", ee({
        class: [d(l).e("input")],
        "onUpdate:modelValue": r[0] || (r[0] = (a) => i.value = a)
      }, e, { onInput: u }), null, 16), [
        [te, i.value]
      ])
    ], 6));
  }
});
B.install = (n) => {
  n.component("ImInput", B);
};
const $ = /* @__PURE__ */ f({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: Number,
    color: String
  },
  setup(n) {
    const t = n;
    return (e, o) => (m(), p("i", {
      class: g(["im-icon", [`im-icon-${t.name}`]]),
      style: _({
        "--icon-size": t.size || "16px",
        "--icon-color": t.color
      })
    }, null, 6));
  }
});
$.install = function(n) {
  n.component("ImIcon", $);
};
const ce = [z, C, k, B, $], ue = {
  install(n, t) {
    n.provide(F, {
      size: (t == null ? void 0 : t.size) || 36,
      zIndex: (t == null ? void 0 : t.zIndex) || 1e3
    }), n.directive("ripple", le), ce.forEach((e) => {
      e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
    });
  }
};
export {
  z as ImButton,
  C as ImCol,
  $ as ImIcon,
  B as ImInput,
  k as ImRow,
  ue as default
};
