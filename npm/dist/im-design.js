var j = (t) => {
  throw TypeError(t);
};
var X = (t, n, e) => n.has(t) || j("Cannot " + e);
var L = (t, n, e) => (X(t, n, "read from private field"), e ? e.call(t) : n.get(t)), U = (t, n, e) => n.has(t) ? j("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e), H = (t, n, e, s) => (X(t, n, "write to private field"), s ? s.call(t, e) : n.set(t, e), e);
import { inject as te, ref as B, createElementBlock as m, openBlock as d, createElementVNode as R, defineComponent as x, computed as C, resolveDirective as O, withDirectives as W, normalizeStyle as E, normalizeClass as p, createCommentVNode as b, renderSlot as $, unref as a, createVNode as Y, createTextVNode as D, toDisplayString as A, useSlots as G, Fragment as J, renderList as K, createBlock as ne, resolveDynamicComponent as oe, mergeProps as se, vModelDynamic as ie, watch as re, onMounted as le, onUnmounted as ae } from "vue";
const Q = Symbol("im-design-token");
var z;
class ce {
  constructor() {
    U(this, z);
    H(this, z, []);
  }
  async add(n) {
    L(this, z).push(n);
  }
  remove() {
    try {
      const n = L(this, z).shift();
      n && this.run(n);
    } catch (n) {
      console.error(n);
    }
  }
  async run(n) {
    try {
      const e = n.querySelector(".im-ripple__item");
      if (!e) return;
      let s = Date.now(), o = e.getAttribute("data-time");
      const r = s - Number(o) || 0;
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
        n && (n == null || n.remove()), L(this, z).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
}
z = new WeakMap();
const ue = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(t, n) {
    (function() {
      t.addEventListener("mousedown", o, {
        passive: !0
      }), window.addEventListener("mouseup", r, { passive: !0 });
    })();
    const s = new ce();
    async function o(i) {
      if (!n.value) return;
      const v = window.getComputedStyle(t), f = t.getBoundingClientRect(), g = document.createElement("div");
      g.className = "im-ripple", s.add(g);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const l = i.clientX || i.touches && i.touches[0].clientX, u = i.clientY || i.touches && i.touches[0].clientY, _ = Math.max(f.width, f.height), y = l - f.left - _ / 2, w = u - f.top - _ / 2, T = f.width - f.height <= 5;
      Object.assign(c.style, {
        "background-color": v.color,
        width: `${_}px`,
        height: `${_}px`,
        left: `${y}px`,
        top: `${w}px`,
        opacity: "0.33",
        transform: T ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), g.appendChild(c), t.appendChild(g);
      const h = v.position;
      h === "static" && (t.style.position = "relative", t.dataset.originalPosition = h), c.getBoundingClientRect(), c.style.transform = "scale(2.8)", c.style.opacity = "0.33";
    }
    t.im_add_ripple_fn__ = o, t.im_remove_ripple_fn__ = r;
    function r() {
      s.remove();
    }
  },
  unmounted(t) {
    t && (t != null && t.im_add_ripple_fn__) && t.removeEventListener("mousedown", t.im_add_ripple_fn__), t && t.im_remove_ripple_fn__ && window.removeEventListener("mouseup", t.im_remove_ripple_fn__);
  }
}, S = (t) => {
  const n = "im-" + t;
  return {
    b: () => n,
    e: (e) => `${n}__${e}`,
    m: (e) => `${n}--${e}`,
    is: (e, s) => s ? `is-${e}` : ""
  };
}, Z = (t, n) => {
  const e = te(Q), s = B(Number(e.size || 36)), o = B(e.zIndex || 1e3);
  return { sizeToken: s, zIndexToken: o };
}, de = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function me(t, n) {
  return d(), m("svg", de, n[0] || (n[0] = [
    R("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const pe = { render: me }, fe = ["tabindex", "type", "disabled"], ve = /* @__PURE__ */ x({
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
  setup(t, { emit: n }) {
    const e = t, s = n, o = S("button"), { sizeToken: r } = Z(), i = C(() => [
      o.b(),
      e.color && o.m(e.color),
      e.shape && o.m(e.shape),
      e.variant && o.m(e.variant),
      o.is("disabled", e.disabled),
      o.is("loading", e.loading)
    ].filter(Boolean)), v = C(() => {
      let c = +(e.size || r.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), f = C(() => e.loading && ["square", "circle"].includes(e.shape)), g = () => {
      e.disabled || e.loading || s("click");
    };
    return (c, l) => {
      const u = O("ripple");
      return W((d(), m("button", {
        class: p(i.value),
        onClick: g,
        style: E(v.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (d(), m("span", {
          key: 0,
          class: p([a(o).e("loading")])
        }, [
          Y(a(pe))
        ], 2)) : b("", !0),
        f.value ? b("", !0) : $(c.$slots, "default", { key: 1 }, () => [
          D(A(e.text), 1)
        ], !0)
      ], 14, fe)), [
        [u, !0]
      ]);
    };
  }
}), k = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [s, o] of n)
    e[s] = o;
  return e;
}, P = /* @__PURE__ */ k(ve, [["__scopeId", "data-v-706dad03"]]);
P.install = (t) => {
  t.component("ImButton", P);
};
const _e = /* @__PURE__ */ x({
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
  setup(t) {
    const n = t, e = G(), s = C(() => {
      var r;
      return ((r = e.default) == null ? void 0 : r.call(e)) || [];
    }), o = S("row");
    return (r, i) => (d(), m("div", {
      class: p([a(o).b()]),
      style: E({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (d(!0), m(J, null, K(s.value, (v, f) => (d(), ne(oe(v), { key: f }))), 128))
    ], 6));
  }
}), q = /* @__PURE__ */ k(_e, [["__scopeId", "data-v-5179967f"]]), he = /* @__PURE__ */ x({
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
  setup(t) {
    const n = t, e = S("col"), s = C(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (o, r) => (d(), m("div", {
      class: p([a(e).b()]),
      style: E({
        "--im-col-w": s.value,
        "--im-col-offset": n.offset
      })
    }, [
      $(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), F = /* @__PURE__ */ k(he, [["__scopeId", "data-v-ecf91058"]]);
q.install = (t) => {
  t.component("ImRow", q);
};
F.install = (t) => {
  t.component("ImCol", F);
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
  setup(t, { emit: n }) {
    const e = t, { sizeToken: s } = Z(), o = n, r = B(e.modelValue), i = S("input"), v = () => {
      o("update:modelValue", r.value), o("change", r.value);
    };
    return (f, g) => (d(), m("div", {
      class: p([a(i).b()]),
      style: E({
        "--in-input-size": (e.size || a(s) || 36) + "px"
      })
    }, [
      W(R("input", se({
        class: [a(i).e("input")],
        "onUpdate:modelValue": g[0] || (g[0] = (c) => r.value = c)
      }, e, { onInput: v }), null, 16), [
        [ie, r.value]
      ])
    ], 6));
  }
}), M = /* @__PURE__ */ k(ge, [["__scopeId", "data-v-6c70856c"]]);
M.install = (t) => {
  t.component("ImInput", M);
};
const ye = /* @__PURE__ */ x({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(t) {
    const n = t;
    return (e, s) => (d(), m("i", {
      class: p(["im-icon", [`im-icon-${n.name}`]]),
      style: E({
        "--icon-size": (parseInt(String(n.size)) || 16) + "px",
        "--icon-color": n.color
      })
    }, null, 6));
  }
}), N = /* @__PURE__ */ k(ye, [["__scopeId", "data-v-1e711363"]]);
N.install = function(t) {
  t.component("ImIcon", N);
};
const Ie = /* @__PURE__ */ x({
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
  setup(t) {
    const n = S("divider"), e = t;
    return (s, o) => (d(), m("div", {
      class: p([a(n).b(), a(n).is("vertical", e.vertical)]),
      style: E({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? b("", !0) : (d(), m("span", {
        key: 0,
        class: p([a(n).e("text")])
      }, [
        $(s.$slots, "default", {}, void 0, !0)
      ], 2))
    ], 6));
  }
}), V = /* @__PURE__ */ k(Ie, [["__scopeId", "data-v-108f9bec"]]);
V.name = "ImDivider";
V.install = function(t) {
  t.component("ImDivider", V);
};
const ee = (t, n) => (n.install = (e) => {
  e.component(t, n);
}, n), we = (t, n) => {
  let e = null;
  return function(...s) {
    e || (e = setTimeout(() => {
      t.apply(this, s), e = null;
    }, n));
  };
}, be = (t, n) => {
  let e = null;
  return function(...s) {
    e && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, s);
    }, n);
  };
}, xe = ["onClick"], ke = /* @__PURE__ */ x({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(t) {
    const n = S("anchor");
    let e = null;
    const s = B(null), o = B(null), r = B(null), i = t;
    re(
      () => i.target,
      () => {
        e && e(), e = g();
      }
    ), le(() => {
      e = g();
    }), ae(() => {
      e && e();
    });
    function v(l) {
      let u = l == null ? void 0 : l.scrollTop;
      return s.value === window && (u = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), u;
    }
    function f(l) {
      var T;
      if (r.value || !s.value) return;
      const u = s.value === window ? l.target : s.value;
      let _ = v(u);
      const y = u.offsetTop || 0, w = (i.data || []).map(({ id: h }) => {
        const I = document.getElementById(h);
        return I ? {
          id: h,
          offsetTop: I.offsetTop - y,
          el: I
        } : null;
      }).filter(Boolean);
      o.value = null;
      for (let h = 0; h < w.length; h++) {
        const I = w[h];
        if (_ >= I.offsetTop - (i.offset || 0) && _ <= I.offsetTop + (((T = I.el) == null ? void 0 : T.clientHeight) || 0) - (i.offset || 0)) {
          o.value = I.id;
          return;
        }
      }
      if (!o.value && _ >= (parseInt(String(i.offset)) || 0)) {
        const h = w.find((I) => _ <= I.offsetTop - (i.offset || 0) && _ > (i.offset || 0) ? (o.value = I.id, !0) : !1);
        h && (o.value = h.id);
      }
    }
    function g() {
      const l = i.target ? typeof i.target == "string" ? document.querySelector(i.target) : i.target : window;
      if (!l)
        return null;
      s.value = l;
      const u = we(f, 50);
      return f({ target: l }), l.addEventListener("scroll", u, { passive: !0 }), () => {
        l.removeEventListener("scroll", u);
      };
    }
    async function c(l) {
      var y, w, T;
      if (o.value === l || !l) return;
      r.value = l, o.value = l;
      const u = document.getElementById(l);
      if (!u) return;
      (w = s.value) == null || w.scrollTo({
        // @ts-ignore
        top: u.offsetTop - (i.offset || 0) - (((y = s.value) == null ? void 0 : y.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const _ = be(() => {
        var h;
        r.value = null, (h = s.value) == null || h.removeEventListener("scroll", _);
      }, 300);
      (T = s.value) == null || T.addEventListener("scroll", _, { passive: !0 });
    }
    return (l, u) => {
      const _ = O("ripple");
      return i.data && i.data.length ? (d(), m("ul", {
        key: 0,
        class: p([a(n).b()])
      }, [
        (d(!0), m(J, null, K(i.data, (y) => W((d(), m("li", {
          class: p([a(n).e("item"), a(n).is("active", o.value === y.id)]),
          onClick: () => c(y.id)
        }, [
          o.value === y.id ? (d(), m("span", {
            key: 0,
            class: p([a(n).e("bar")])
          }, null, 2)) : b("", !0),
          D(" " + A(y.text), 1)
        ], 10, xe)), [
          [_, !0]
        ])), 256))
      ], 2)) : b("", !0);
    };
  }
}), Te = /* @__PURE__ */ k(ke, [["__scopeId", "data-v-4840d244"]]), $e = ee("ImAnchor", Te), ze = /* @__PURE__ */ x({
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
  setup(t, { emit: n }) {
    const e = n, s = B(null), o = t, r = S("alert"), i = G(), v = C(() => !!(o.showIcon && o.title)), f = C(() => {
      switch (o.color) {
        case "error":
          return "close-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "success":
          return "check-circle-fill";
        default:
          return "info-circle-fill";
      }
    }), g = async () => {
      var c, l;
      e("close"), (c = s.value) == null || c.animate([{
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
      }), await new Promise((u) => setTimeout(u, 300)), (l = s.value) == null || l.remove();
    };
    return (c, l) => {
      const u = O("ripple");
      return d(), m("div", {
        ref_key: "alertRef",
        ref: s,
        class: p([a(r).b(), a(r).m(o.color || "primary"), o.variant && a(r).m(o.variant || "")])
      }, [
        o.showIcon ? (d(), m("div", {
          key: 0,
          class: p([a(r).e("icon")])
        }, [
          $(c.$slots, "icon", {}, () => [
            Y(a(N), {
              name: f.value,
              size: v.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], !0)
        ], 2)) : b("", !0),
        R("div", {
          class: p([a(r).e("content")])
        }, [
          o.title || a(i).title ? (d(), m("div", {
            key: 0,
            class: p([a(r).e("title")])
          }, [
            $(c.$slots, "title", {}, () => [
              D(A(o.title), 1)
            ], !0)
          ], 2)) : b("", !0),
          R("div", {
            class: p([a(r).e("message")])
          }, [
            $(c.$slots, "default", {}, () => [
              D(A(o.message), 1)
            ], !0)
          ], 2)
        ], 2),
        o.closable ? W((d(), m("div", {
          key: 1,
          class: p([a(r).e("close")]),
          onClick: g
        }, [
          $(c.$slots, "close", {}, () => [
            Y(a(N), {
              name: "close",
              size: "16"
            })
          ], !0)
        ], 2)), [
          [u, !0]
        ]) : b("", !0)
      ], 2);
    };
  }
}), Be = /* @__PURE__ */ k(ze, [["__scopeId", "data-v-d11fdcb2"]]), Ce = ee("ImAlert", Be), Se = [
  P,
  F,
  q,
  M,
  N,
  V,
  $e,
  Ce
], Ee = (t, n) => {
  t.provide(Q, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), t.directive("ripple", ue), Se.forEach((e) => {
    e.name ? t.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
}, Re = {
  install: Ee
};
export {
  Ce as ImAlert,
  $e as ImAnchor,
  P as ImButton,
  F as ImCol,
  V as ImDivider,
  N as ImIcon,
  M as ImInput,
  q as ImRow,
  Re as default
};
