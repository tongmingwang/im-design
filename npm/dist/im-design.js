var F = (n) => {
  throw TypeError(n);
};
var M = (n, t, e) => t.has(n) || F("Cannot " + e);
var N = (n, t, e) => (M(n, t, "read from private field"), e ? e.call(n) : t.get(n)), O = (n, t, e) => t.has(n) ? F("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), P = (n, t, e, o) => (M(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
import { inject as Q, ref as k, createElementBlock as p, openBlock as d, createElementVNode as Y, defineComponent as x, computed as B, resolveDirective as j, withDirectives as W, normalizeStyle as z, normalizeClass as I, createCommentVNode as C, renderSlot as q, unref as f, createVNode as Z, createTextVNode as X, toDisplayString as U, useSlots as ee, Fragment as H, renderList as G, createBlock as te, resolveDynamicComponent as ne, mergeProps as oe, vModelDynamic as se, watch as ie, onMounted as le, onUnmounted as re } from "vue";
const J = Symbol("im-design-token");
var T;
class ae {
  constructor() {
    O(this, T);
    P(this, T, []);
  }
  async add(t) {
    N(this, T).push(t);
  }
  remove() {
    try {
      const t = N(this, T).shift();
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
      r && await new Promise((i) => {
        e.style.opacity = "0.1";
        const v = 200 - r;
        setTimeout(
          () => {
            i(null);
          },
          v > 0 ? v : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms ", setTimeout(() => {
        t && (t == null || t.remove());
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
}
T = new WeakMap();
const ce = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: !0
      }), n.addEventListener("mouseup", r, { passive: !0 });
    })();
    const o = new ae();
    async function s(i) {
      if (!t.value) return;
      const v = window.getComputedStyle(n), m = n.getBoundingClientRect(), h = document.createElement("div");
      h.className = "im-ripple", o.add(h);
      const a = document.createElement("div");
      a.className = "im-ripple__item";
      const l = i.clientX || i.touches && i.touches[0].clientX, c = i.clientY || i.touches && i.touches[0].clientY, u = Math.max(m.width, m.height), _ = l - m.left - u / 2, b = c - m.top - u / 2, S = m.width - m.height <= 5;
      Object.assign(a.style, {
        "background-color": v.color,
        width: `${u}px`,
        height: `${u}px`,
        left: `${_}px`,
        top: `${b}px`,
        opacity: "0.33",
        transform: S ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), a.setAttribute("data-time", Date.now() + ""), h.appendChild(a), n.appendChild(h);
      const g = v.position;
      g === "static" && (n.style.position = "relative", n.dataset.originalPosition = g), a.getBoundingClientRect(), a.style.transform = "scale(2.8)", a.style.opacity = "0.33";
    }
    function r() {
      o.remove();
    }
  }
}, $ = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, o) => o ? `is-${e}` : ""
  };
}, K = (n, t) => {
  const e = Q(J), o = k(Number(e.size || 36)), s = k(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
}, ue = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function de(n, t) {
  return d(), p("svg", ue, t[0] || (t[0] = [
    Y("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const me = { render: de }, pe = ["tabindex", "type", "disabled"], fe = /* @__PURE__ */ x({
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
    const e = n, o = t, s = $("button"), { sizeToken: r } = K(), i = B(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), v = B(() => {
      let a = +(e.size || r.value || 36);
      return {
        "--im-button-size": a + "px",
        "--im-button-padding": (a * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), m = B(() => e.loading && ["square", "circle"].includes(e.shape)), h = () => {
      e.disabled || e.loading || o("click");
    };
    return (a, l) => {
      const c = j("ripple");
      return W((d(), p("button", {
        class: I(i.value),
        onClick: h,
        style: z(v.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (d(), p("span", {
          key: 0,
          class: I([f(s).e("loading")])
        }, [
          Z(f(me))
        ], 2)) : C("", !0),
        m.value ? C("", !0) : q(a.$slots, "default", { key: 1 }, () => [
          X(U(e.text), 1)
        ], !0)
      ], 14, pe)), [
        [c, !0]
      ]);
    };
  }
}), w = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, s] of t)
    e[o] = s;
  return e;
}, D = /* @__PURE__ */ w(fe, [["__scopeId", "data-v-706dad03"]]);
D.install = (n) => {
  n.component("ImButton", D);
};
const ve = /* @__PURE__ */ x({
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
    const t = n, e = ee(), o = B(() => {
      var r;
      return ((r = e.default) == null ? void 0 : r.call(e)) || [];
    }), s = $("row");
    return (r, i) => (d(), p("div", {
      class: I([f(s).b()]),
      style: z({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (d(!0), p(H, null, G(o.value, (v, m) => (d(), te(ne(v), { key: m }))), 128))
    ], 6));
  }
}), L = /* @__PURE__ */ w(ve, [["__scopeId", "data-v-5179967f"]]), he = /* @__PURE__ */ x({
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
    const t = n, e = $("col"), o = B(
      () => +((Number(t.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (s, r) => (d(), p("div", {
      class: I([f(e).b()]),
      style: z({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      q(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), R = /* @__PURE__ */ w(he, [["__scopeId", "data-v-ecf91058"]]);
L.install = (n) => {
  n.component("ImRow", L);
};
R.install = (n) => {
  n.component("ImCol", R);
};
const ge = /* @__PURE__ */ x({
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
    const e = n, { sizeToken: o } = K(), s = t, r = k(e.modelValue), i = $("input"), v = () => {
      s("update:modelValue", r.value), s("change", r.value);
    };
    return (m, h) => (d(), p("div", {
      class: I([f(i).b()]),
      style: z({
        "--in-input-size": (e.size || f(o) || 36) + "px"
      })
    }, [
      W(Y("input", oe({
        class: [f(i).e("input")],
        "onUpdate:modelValue": h[0] || (h[0] = (a) => r.value = a)
      }, e, { onInput: v }), null, 16), [
        [se, r.value]
      ])
    ], 6));
  }
}), V = /* @__PURE__ */ w(ge, [["__scopeId", "data-v-6c70856c"]]);
V.install = (n) => {
  n.component("ImInput", V);
};
const _e = /* @__PURE__ */ x({
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
      class: I(["im-icon", [`im-icon-${t.name}`]]),
      style: z({
        "--icon-size": t.size || "16px",
        "--icon-color": t.color
      })
    }, null, 6));
  }
}), A = /* @__PURE__ */ w(_e, [["__scopeId", "data-v-458c0f87"]]);
A.install = function(n) {
  n.component("ImIcon", A);
};
const ye = /* @__PURE__ */ x({
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
    const t = $("divider"), e = n;
    return (o, s) => (d(), p("div", {
      class: I([f(t).b(), f(t).is("vertical", e.vertical)]),
      style: z({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? C("", !0) : (d(), p("span", {
        key: 0,
        class: I([f(t).e("text")])
      }, [
        q(o.$slots, "default", {}, void 0, !0)
      ], 2))
    ], 6));
  }
}), E = /* @__PURE__ */ w(ye, [["__scopeId", "data-v-108f9bec"]]);
E.name = "ImDivider";
E.install = function(n) {
  n.component("ImDivider", E);
};
const Ie = (n, t) => (t.install = (e) => {
  e.component(n, t);
}, t), be = (n, t) => {
  let e = null;
  return function(...o) {
    e || (e = setTimeout(() => {
      n.apply(this, o), e = null;
    }, t));
  };
}, xe = (n, t) => {
  let e = null;
  return function(...o) {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, o);
    }, t);
  };
}, we = ["onClick"], ke = /* @__PURE__ */ x({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(n) {
    const t = $("anchor");
    let e = null;
    const o = k(null), s = k(null), r = k(null), i = n;
    ie(
      () => i.target,
      () => {
        e && e(), e = h();
      }
    ), le(() => {
      e = h();
    }), re(() => {
      e && e();
    });
    function v(l) {
      console.log(l, l == null ? void 0 : l.scrollTop, "el");
      let c = l == null ? void 0 : l.scrollTop;
      return o.value === window && (c = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), c;
    }
    function m(l) {
      var S;
      if (r.value || !o.value) return;
      const c = o.value === window ? l.target : o.value;
      let u = v(c);
      const _ = c.offsetTop || 0, b = (i.data || []).map(({ id: g }) => {
        const y = document.getElementById(g);
        return y ? {
          id: g,
          offsetTop: y.offsetTop - _,
          el: y
        } : null;
      }).filter(Boolean);
      s.value = null;
      for (let g = 0; g < b.length; g++) {
        const y = b[g];
        if (u >= y.offsetTop - (i.offset || 0) && u <= y.offsetTop + (((S = y.el) == null ? void 0 : S.clientHeight) || 0) - (i.offset || 0)) {
          s.value = y.id;
          return;
        }
      }
      if (!s.value && u >= (parseInt(String(i.offset)) || 0)) {
        const g = b.find((y) => u <= y.offsetTop - (i.offset || 0) && u > (i.offset || 0) ? (s.value = y.id, !0) : !1);
        g && (s.value = g.id);
      }
    }
    function h() {
      const l = i.target ? typeof i.target == "string" ? document.querySelector(i.target) : i.target : window;
      if (!l)
        return null;
      o.value = l;
      const c = be(m, 50);
      return m({ target: l }), l.addEventListener("scroll", c, { passive: !0 }), () => {
        l.removeEventListener("scroll", c);
      };
    }
    async function a(l) {
      var c;
      if (l) {
        r.value = l, s.value = l;
        const u = document.getElementById(l);
        if (!u) return;
        u.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start"
        });
        const _ = xe(() => {
          var b;
          r.value = null, (b = o.value) == null || b.removeEventListener("scroll", _);
        }, 300);
        (c = o.value) == null || c.addEventListener("scroll", _, { passive: !0 });
      }
    }
    return (l, c) => {
      const u = j("ripple");
      return i.data && i.data.length ? (d(), p("ul", {
        key: 0,
        class: I([f(t).b()])
      }, [
        (d(!0), p(H, null, G(i.data, (_) => W((d(), p("li", {
          class: I([f(t).e("item"), f(t).is("active", s.value === _.id)]),
          onClick: () => a(_.id)
        }, [
          s.value === _.id ? (d(), p("span", {
            key: 0,
            class: I([f(t).e("bar")])
          }, null, 2)) : C("", !0),
          X(" " + U(_.text), 1)
        ], 10, we)), [
          [u, !0]
        ])), 256))
      ], 2)) : C("", !0);
    };
  }
}), Te = /* @__PURE__ */ w(ke, [["__scopeId", "data-v-8b9791ff"]]), ze = Ie("ImAnchor", Te), $e = [D, R, L, V, A, E, ze], Be = (n, t) => {
  n.provide(J, {
    size: (t == null ? void 0 : t.size) || 36,
    zIndex: (t == null ? void 0 : t.zIndex) || 1e3
  }), n.directive("ripple", ce), $e.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
}, Ee = {
  install: Be
};
export {
  ze as ImAnchor,
  D as ImButton,
  R as ImCol,
  E as ImDivider,
  A as ImIcon,
  V as ImInput,
  L as ImRow,
  Ee as default
};
