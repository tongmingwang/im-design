var D = (n) => {
  throw TypeError(n);
};
var R = (n, t, e) => t.has(n) || D("Cannot " + e);
var v = (n, t, e) => (R(n, t, "read from private field"), e ? e.call(n) : t.get(n)), T = (n, t, e) => t.has(n) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), V = (n, t, e, o) => (R(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
import { inject as A, ref as w, createElementBlock as p, openBlock as u, createElementVNode as L, defineComponent as f, computed as g, resolveDirective as O, withDirectives as P, normalizeStyle as b, normalizeClass as y, createCommentVNode as E, renderSlot as j, unref as d, createVNode as U, createTextVNode as W, toDisplayString as G, useSlots as H, Fragment as J, renderList as K, createBlock as Q, resolveDynamicComponent as Z, mergeProps as ee, vModelDynamic as te } from "vue";
const q = Symbol("im-design-token"), x = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, o) => o ? `is-${e}` : ""
  };
}, F = (n, t) => {
  const e = A(q), o = w(Number(e.size || 36)), s = w(e.zIndex || 1e3);
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
  return u(), p("svg", ne, t[0] || (t[0] = [
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
    const e = n, o = t, s = x("button"), { sizeToken: i } = F(), a = g(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), l = g(() => {
      let c = +(e.size || i.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), r = g(() => e.loading && ["square", "circle"].includes(e.shape)), m = () => {
      e.disabled || e.loading || o("click");
    };
    return (c, N) => {
      const I = O("ripple");
      return P((u(), p("button", {
        class: y(a.value),
        onClick: m,
        style: b(l.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (u(), p("span", {
          key: 0,
          class: y([d(s).e("loading")])
        }, [
          U(d(se))
        ], 2)) : E("", !0),
        r.value ? E("", !0) : j(c.$slots, "default", { key: 1 }, () => [
          W(G(e.text), 1)
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
    V(this, h, []);
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
  async run(t) {
    try {
      const e = t.querySelector(".im-ripple__item");
      if (!e) return;
      let o = Date.now(), s = e.getAttribute("data-time");
      const i = o - Number(s) || 0;
      i && await new Promise((a) => {
        e.style.opacity = "0.15";
        const l = 320 - i;
        setTimeout(
          () => {
            a(null);
          },
          l > 0 ? l : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms ", setTimeout(() => {
        t && (t == null || t.remove());
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
}
h = new WeakMap();
const ce = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: !0
      }), n.addEventListener("mouseup", i, { passive: !0 });
    })();
    const o = new ae();
    async function s(a) {
      if (!t.value) return;
      const l = window.getComputedStyle(n), r = n.getBoundingClientRect(), m = document.createElement("div");
      m.className = "im-ripple", o.add(m);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const N = a.clientX || a.touches && a.touches[0].clientX, I = a.clientY || a.touches && a.touches[0].clientY, _ = Math.max(r.width, r.height), M = N - r.left - _ / 2, X = I - r.top - _ / 2, Y = r.width - r.height <= 5;
      Object.assign(c.style, {
        "background-color": l.color,
        width: `${_}px`,
        height: `${_}px`,
        left: `${M}px`,
        top: `${X}px`,
        opacity: "0.25",
        transform: Y ? "scale(0.88)" : "scale(0.66)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), m.appendChild(c), n.appendChild(m);
      const S = l.position;
      S === "static" && (n.style.position = "relative", n.dataset.originalPosition = S), c.getBoundingClientRect(), c.style.transform = "scale(2.8)", c.style.opacity = "0.33";
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
    const t = n, e = H(), o = g(() => {
      var i;
      return ((i = e.default) == null ? void 0 : i.call(e)) || [];
    }), s = x("row");
    return (i, a) => (u(), p("div", {
      class: y([d(s).b()]),
      style: b({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (u(!0), p(J, null, K(o.value, (l, r) => (u(), Q(Z(l), { key: r }))), 128))
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
    const t = n, e = x("col"), o = g(
      () => +((Number(t.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (s, i) => (u(), p("div", {
      class: y([d(e).b()]),
      style: b({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      j(s.$slots, "default")
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
    const e = n, { sizeToken: o } = F(), s = t, i = w(e.modelValue), a = x("input"), l = () => {
      s("update:modelValue", i.value), s("change", i.value);
    };
    return (r, m) => (u(), p("div", {
      class: y([d(a).b()]),
      style: b({
        "--in-input-size": (e.size || d(o) || 36) + "px"
      })
    }, [
      P(L("input", ee({
        class: [d(a).e("input")],
        "onUpdate:modelValue": m[0] || (m[0] = (c) => i.value = c)
      }, e, { onInput: l }), null, 16), [
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
    return (e, o) => (u(), p("i", {
      class: y(["im-icon", [`im-icon-${t.name}`]]),
      style: b({
        "--icon-size": t.size || "16px",
        "--icon-color": t.color
      })
    }, null, 6));
  }
});
$.install = function(n) {
  n.component("ImIcon", $);
};
const le = [z, C, k, B, $], ue = {
  install(n, t) {
    n.provide(q, {
      size: (t == null ? void 0 : t.size) || 36,
      zIndex: (t == null ? void 0 : t.zIndex) || 1e3
    }), n.directive("ripple", ce), le.forEach((e) => {
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
