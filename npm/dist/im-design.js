var xe = Object.defineProperty;
var ge = (s) => {
  throw TypeError(s);
};
var ze = (s, n, e) => n in s ? xe(s, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[n] = e;
var te = (s, n, e) => ze(s, typeof n != "symbol" ? n + "" : n, e), he = (s, n, e) => n.has(s) || ge("Cannot " + e);
var ne = (s, n, e) => (he(s, n, "read from private field"), e ? e.call(s) : n.get(s)), ye = (s, n, e) => n.has(s) ? ge("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(s) : n.set(s, e), _e = (s, n, e, a) => (he(s, n, "write to private field"), a ? a.call(s, e) : n.set(s, e), e);
import { inject as Le, ref as w, createElementBlock as h, openBlock as m, createElementVNode as P, defineComponent as x, computed as T, resolveDirective as Q, withDirectives as R, normalizeStyle as S, normalizeClass as p, createCommentVNode as E, renderSlot as k, unref as l, createVNode as B, createTextVNode as G, toDisplayString as F, useSlots as oe, Fragment as W, renderList as J, createBlock as q, resolveDynamicComponent as de, mergeProps as $e, vModelDynamic as Ce, watch as X, onMounted as me, onUnmounted as pe, Teleport as le, Transition as Z, withCtx as K, vShow as ee, TransitionGroup as Ee, createApp as Be, reactive as Te } from "vue";
const we = Symbol("im-design-token");
var j;
class Pe {
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
async function Ve(s, n, e) {
  const a = window.getComputedStyle(e), t = e.getBoundingClientRect(), i = document.createElement("div");
  i.className = "im-ripple", n.add(i);
  const o = document.createElement("div");
  o.className = "im-ripple__item";
  const f = s.clientX || s.touches && s.touches[0].clientX, d = s.clientY || s.touches && s.touches[0].clientY, u = Math.max(t.width, t.height), r = f - t.left - u / 2, c = d - t.top - u / 2, v = t.width - t.height <= 5;
  Object.assign(o.style, {
    "background-color": a.color,
    width: `${u}px`,
    height: `${u}px`,
    left: `${r}px`,
    top: `${c}px`,
    opacity: "0.15",
    transform: v ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), o.setAttribute("data-time", Date.now() + ""), i.appendChild(o), e.appendChild(i);
  const _ = a.position;
  _ === "static" && (e.style.position = "relative", e.dataset.originalPosition = _), o.getBoundingClientRect(), o.style.transform = "scale(2.8)", o.style.opacity = "0.33";
}
const Se = {
  mounted(s, n) {
    s.IM_RIPPLE_VALUE = n.value;
    const e = new Pe(), a = (f) => {
      s.IM_RIPPLE_VALUE && Ve(f, e, s);
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
}, $ = (s) => {
  const n = "im-" + s;
  return {
    b: () => n,
    e: (e) => `${n}__${e}`,
    m: (e) => `${n}--${e}`,
    is: (e, a) => a ? `is-${e}` : ""
  };
}, U = (s, n) => {
  const e = Le(we), a = w(Number(e.size || 36)), t = w(e.zIndex || 1e3);
  return { sizeToken: a, zIndexToken: t };
}, Me = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function Ae(s, n) {
  return m(), h("svg", Me, n[0] || (n[0] = [
    P("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const Re = { render: Ae }, Ne = ["tabindex", "type", "disabled"], De = /* @__PURE__ */ x({
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
    const e = s, a = n, t = $("button"), { sizeToken: i } = U(), o = T(() => [
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
    }), d = T(() => e.loading && ["square", "circle"].includes(e.shape)), u = () => {
      e.disabled || e.loading || a("click");
    };
    return (r, c) => {
      const v = Q("ripple");
      return R((m(), h("button", {
        class: p(o.value),
        onClick: u,
        style: S(f.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (m(), h("span", {
          key: 0,
          class: p([l(t).e("loading")])
        }, [
          B(l(Re))
        ], 2)) : E("", !0),
        d.value ? E("", !0) : k(r.$slots, "default", { key: 1 }, () => [
          G(F(e.text), 1)
        ], !0)
      ], 14, Ne)), [
        [v, !0]
      ]);
    };
  }
}), z = (s, n) => {
  const e = s.__vccOpts || s;
  for (const [a, t] of n)
    e[a] = t;
  return e;
}, re = /* @__PURE__ */ z(De, [["__scopeId", "data-v-fe80f42d"]]);
re.install = (s) => {
  s.component("ImButton", re);
};
const Oe = /* @__PURE__ */ x({
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
    }), t = $("row");
    return (i, o) => (m(), h("div", {
      class: p([l(t).b()]),
      style: S({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (m(!0), h(W, null, J(a.value, (f, d) => (m(), q(de(f), { key: d }))), 128))
    ], 6));
  }
}), ie = /* @__PURE__ */ z(Oe, [["__scopeId", "data-v-5179967f"]]), Ye = /* @__PURE__ */ x({
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
    const n = s, e = $("col"), a = T(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (t, i) => (m(), h("div", {
      class: p([l(e).b()]),
      style: S({
        "--im-col-w": a.value,
        "--im-col-offset": n.offset
      })
    }, [
      k(t.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ce = /* @__PURE__ */ z(Ye, [["__scopeId", "data-v-ecf91058"]]);
ie.install = (s) => {
  s.component("ImRow", ie);
};
ce.install = (s) => {
  s.component("ImCol", ce);
};
const He = /* @__PURE__ */ x({
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
    const e = s, { sizeToken: a } = U(), t = n, i = w(e.modelValue), o = $("input"), f = () => {
      t("update:modelValue", i.value), t("change", i.value);
    };
    return (d, u) => (m(), h("div", {
      class: p([l(o).b()]),
      style: S({
        "--in-input-size": (e.size || l(a) || 36) + "px"
      })
    }, [
      R(P("input", $e({
        class: [l(o).e("input")],
        "onUpdate:modelValue": u[0] || (u[0] = (r) => i.value = r)
      }, e, { onInput: f }), null, 16), [
        [Ce, i.value]
      ])
    ], 6));
  }
}), ue = /* @__PURE__ */ z(He, [["__scopeId", "data-v-6c70856c"]]);
ue.install = (s) => {
  s.component("ImInput", ue);
};
const qe = /* @__PURE__ */ x({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(s) {
    const n = s;
    return (e, a) => (m(), h("i", {
      class: p(["im-icon", [`im-icon-${n.name}`]]),
      style: S({
        "--icon-size": (parseInt(String(n.size)) || 16) + "px",
        "--icon-color": n.color
      })
    }, null, 6));
  }
}), A = /* @__PURE__ */ z(qe, [["__scopeId", "data-v-1e711363"]]);
A.install = function(s) {
  s.component("ImIcon", A);
};
const Fe = /* @__PURE__ */ x({
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
    const n = $("divider"), e = s;
    return (a, t) => (m(), h("div", {
      class: p([l(n).b(), l(n).is("vertical", e.vertical)]),
      style: S({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? E("", !0) : (m(), h("span", {
        key: 0,
        class: p([l(n).e("text")])
      }, [
        k(a.$slots, "default", {}, void 0, !0)
      ], 2))
    ], 6));
  }
}), ae = /* @__PURE__ */ z(Fe, [["__scopeId", "data-v-108f9bec"]]);
ae.name = "ImDivider";
ae.install = function(s) {
  s.component("ImDivider", ae);
};
const N = (s, n) => (n.install = (e) => {
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
}, Xe = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"], Ie = (s) => {
  if (typeof s == "number") return `${s}px`;
  const n = String(s);
  return s ? Xe.some((e) => n.includes(e)) ? n : `${s}px` : "";
}, We = ["onClick"], Ue = /* @__PURE__ */ x({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(s) {
    const n = $("anchor");
    let e = null;
    const a = w(null), t = w(null), i = w(null), o = s;
    X(
      () => o.target,
      () => {
        e && e(), e = u();
      }
    ), me(() => {
      e = u();
    }), pe(() => {
      e && e();
    });
    function f(c) {
      let v = c == null ? void 0 : c.scrollTop;
      return a.value === window && (v = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), v;
    }
    function d(c) {
      var O;
      if (i.value || !a.value) return;
      const v = a.value === window ? c.target : a.value;
      let _ = f(v);
      const I = v.offsetTop || 0, D = (o.data || []).map(({ id: C }) => {
        const y = document.getElementById(C);
        return y ? {
          id: C,
          offsetTop: y.offsetTop - I,
          el: y
        } : null;
      }).filter(Boolean);
      t.value = null;
      for (let C = 0; C < D.length; C++) {
        const y = D[C];
        if (_ >= y.offsetTop - (o.offset || 0) && _ <= y.offsetTop + (((O = y.el) == null ? void 0 : O.clientHeight) || 0) - (o.offset || 0)) {
          t.value = y.id;
          return;
        }
      }
      if (!t.value && _ >= (parseInt(String(o.offset)) || 0)) {
        const C = D.find((y) => _ <= y.offsetTop - (o.offset || 0) && _ > (o.offset || 0) ? (t.value = y.id, !0) : !1);
        C && (t.value = C.id);
      }
    }
    function u() {
      const c = o.target ? typeof o.target == "string" ? document.querySelector(o.target) : o.target : window;
      if (!c)
        return null;
      a.value = c;
      const v = fe(d, 50);
      return d({ target: c }), c.addEventListener("scroll", v, { passive: !0 }), () => {
        c.removeEventListener("scroll", v);
      };
    }
    async function r(c) {
      var I, D, O;
      if (t.value === c || !c) return;
      i.value = c, t.value = c;
      const v = document.getElementById(c);
      if (!v) return;
      (D = a.value) == null || D.scrollTo({
        // @ts-ignore
        top: v.offsetTop - (o.offset || 0) - (((I = a.value) == null ? void 0 : I.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const _ = se(() => {
        var C;
        i.value = null, (C = a.value) == null || C.removeEventListener("scroll", _);
      }, 300);
      (O = a.value) == null || O.addEventListener("scroll", _, { passive: !0 });
    }
    return (c, v) => {
      const _ = Q("ripple");
      return o.data && o.data.length ? (m(), h("ul", {
        key: 0,
        class: p([l(n).b()])
      }, [
        (m(!0), h(W, null, J(o.data, (I) => R((m(), h("li", {
          class: p([l(n).e("item"), l(n).is("active", t.value === I.id)]),
          onClick: () => r(I.id)
        }, [
          t.value === I.id ? (m(), h("span", {
            key: 0,
            class: p([l(n).e("bar")])
          }, null, 2)) : E("", !0),
          G(" " + F(I.text), 1)
        ], 10, We)), [
          [_, !0]
        ])), 256))
      ], 2)) : E("", !0);
    };
  }
}), je = /* @__PURE__ */ z(Ue, [["__scopeId", "data-v-4840d244"]]), Ge = N("ImAnchor", je), Je = /* @__PURE__ */ x({
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
    const e = n, a = w(null), t = s, i = $("alert"), o = oe(), f = T(() => !!(t.showIcon && t.title)), d = T(() => {
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
    }), u = async () => {
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
      }), await new Promise((v) => setTimeout(v, 300)), (c = a.value) == null || c.remove();
    };
    return (r, c) => {
      const v = Q("ripple");
      return m(), h("div", {
        ref_key: "alertRef",
        ref: a,
        class: p([l(i).b(), l(i).m(t.color || "primary"), t.variant && l(i).m(t.variant || "")])
      }, [
        t.showIcon ? (m(), h("div", {
          key: 0,
          class: p([l(i).e("icon")])
        }, [
          k(r.$slots, "icon", {}, () => [
            B(l(A), {
              name: d.value,
              size: f.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], !0)
        ], 2)) : E("", !0),
        P("div", {
          class: p([l(i).e("content")])
        }, [
          t.title || l(o).title ? (m(), h("div", {
            key: 0,
            class: p([l(i).e("title")])
          }, [
            k(r.$slots, "title", {}, () => [
              G(F(t.title), 1)
            ], !0)
          ], 2)) : E("", !0),
          P("div", {
            class: p([l(i).e("message")])
          }, [
            k(r.$slots, "default", {}, () => [
              G(F(t.message), 1)
            ], !0)
          ], 2)
        ], 2),
        t.closable ? R((m(), h("div", {
          key: 1,
          class: p([l(i).e("close")]),
          onClick: u
        }, [
          k(r.$slots, "close", {}, () => [
            B(l(A), {
              name: "close",
              size: "16"
            })
          ], !0)
        ], 2)), [
          [v, !0]
        ]) : E("", !0)
      ], 2);
    };
  }
}), Ke = /* @__PURE__ */ z(Je, [["__scopeId", "data-v-d11fdcb2"]]), Qe = N("ImAlert", Ke), Ze = /* @__PURE__ */ x({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = oe(), a = n, t = $("breadcrumb"), i = s, o = T(
      () => {
        var d, u;
        return (u = (d = e.default) == null ? void 0 : d.call(e)) == null ? void 0 : u.filter((r) => {
          var c;
          return (r == null ? void 0 : r.type) && ((c = r == null ? void 0 : r.type) == null ? void 0 : c.name) === "ImBreadcrumbItem";
        });
      }
    ), f = (d) => {
      d && i.modelValue !== d && (a("update:modelValue", d), a("change", d));
    };
    return (d, u) => (m(), h("div", {
      class: p([l(t).b()])
    }, [
      (m(!0), h(W, null, J(o.value, (r, c) => (m(), h(W, null, [
        (m(), q(de(r), {
          active: i.modelValue,
          onClick: f
        }, null, 8, ["active"])),
        o.value && o.value.length > 0 && c < o.value.length - 1 ? (m(), h("span", {
          key: 0,
          class: p([l(t).e("separator")])
        }, [
          k(d.$slots, "separator", {}, () => [
            G(F(i.separator), 1)
          ], !0)
        ], 2)) : E("", !0)
      ], 64))), 256))
    ], 2));
  }
}), et = /* @__PURE__ */ z(Ze, [["__scopeId", "data-v-64336468"]]), tt = /* @__PURE__ */ x({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = $("breadcrumb__item"), a = s, t = n;
    return (i, o) => (m(), h("div", {
      onClick: o[0] || (o[0] = () => t("click", a.value)),
      class: p([l(e).b(), l(e).is("active", a.active === a.value && !!a.value)])
    }, [
      k(i.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ z(tt, [["__scopeId", "data-v-40ed04b1"]]), st = N("ImBreadcrumb", et), at = N("ImBreadcrumb", nt), ot = (s = 50) => {
  const n = w(0), e = w(0), a = fe((t) => {
    n.value = t.clientX, e.value = t.clientY;
  }, s);
  return me(() => {
    window.addEventListener("mousemove", a, { passive: !0 });
  }), pe(() => {
    window.removeEventListener("mousemove", a);
  }), { x: n, y: e };
}, lt = (s, n, e, a = "bottomLeft") => {
  X(
    () => s.value,
    () => {
      s.value && t();
    }
  );
  async function t() {
    var v;
    await new Promise((_) => requestAnimationFrame(_));
    const i = n == null ? void 0 : n.value, o = e == null ? void 0 : e.value;
    if (!i || !o) return;
    const d = (((v = i.children) == null ? void 0 : v.length) != 1 ? i : i.children[0]).getBoundingClientRect(), u = d.bottom, r = o.getBoundingClientRect(), c = 2;
    switch (a) {
      case "bottom":
        o.style.setProperty("top", `${u + c}px`), o.style.setProperty(
          "left",
          `${d.left + d.width / 2 - r.width / 2}px`
        );
        break;
      case "bottomRight":
        o.style.setProperty("top", `${u + c}px`), o.style.setProperty(
          "left",
          `${d.left + d.width - r.width}px`
        );
        break;
      case "top":
        o.style.setProperty(
          "top",
          `${d.top - r.height - c}px`
        ), o.style.setProperty(
          "left",
          `${d.left + d.width / 2 - r.width / 2}px`
        );
        break;
      case "topRight":
        o.style.setProperty(
          "top",
          `${d.top - r.height - c}px`
        ), o.style.setProperty(
          "left",
          `${d.right - r.width}px`
        );
        break;
      case "topLeft":
        o.style.setProperty(
          "top",
          `${d.top - r.height - c}px`
        ), o.style.setProperty("left", `${d.left}px`);
        break;
      default:
        o.style.setProperty("top", `${u + c}px`), o.style.setProperty("left", `${d.left}px`);
        break;
    }
  }
}, rt = (s) => {
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
}, it = /* @__PURE__ */ x({
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
    var g;
    const e = n, a = $("dropdown"), t = s, i = w(null), o = w(null), f = w(t.modelValue || !1), d = rt((g = t.placement) != null && g.includes("top") ? "top" : "bottom");
    let u = null, r = 60;
    const { x: c, y: v } = ot(30), { zIndexToken: _ } = U();
    lt(f, i, o, t.placement), me(() => {
      u && u(), u = y();
    }), pe(() => {
      u && u();
    }), X(() => t.trigger, () => {
      u && u(), u = y();
    });
    const I = fe(() => {
      const L = be(c.value, v.value, o.value);
      be(c.value, v.value, i.value) || L || (f.value = !1);
    }, r);
    X(() => [c.value, v.value], () => {
      t.trigger != "hover" || !f.value || I();
    });
    function D() {
      f.value = !0, e("update:modelValue", f.value), e("change", f.value), window.addEventListener("scroll", C, { passive: !0, capture: !0 });
    }
    function O() {
      f.value = !1, e("update:modelValue", f.value), e("change", f.value), window.removeEventListener("scroll", C);
    }
    function C(L) {
      var b;
      (b = o.value) != null && b.contains(L.target) || O();
    }
    function y() {
      var b, V;
      u && u();
      const L = se((H) => {
        var Y;
        (Y = i.value) != null && Y.contains(H.target) || O();
      }, r);
      if (document.addEventListener("click", L, { passive: !0 }), t.trigger === "hover") {
        const H = se(D, r);
        return (b = i.value) == null || b.addEventListener("mouseenter", H, { passive: !0 }), () => {
          var Y;
          (Y = i.value) == null || Y.removeEventListener("mouseenter", H), document.removeEventListener("click", L);
        };
      }
      if (t.trigger === "click") {
        const H = se(() => {
          f.value ? O() : D();
        }, r);
        return (V = i.value) == null || V.addEventListener("click", H, { passive: !0 }), () => {
          var Y;
          (Y = i.value) == null || Y.removeEventListener("click", H), document.removeEventListener("click", L);
        };
      }
      return null;
    }
    return (L, b) => (m(), h("span", {
      class: p([l(a).b()]),
      ref_key: "dropdownRef",
      ref: i
    }, [
      k(L.$slots, "default", {}, void 0, !0),
      (m(), q(le, { to: "body" }, [
        B(Z, {
          onEnter: l(d).onEnter,
          onLeave: l(d).onLeave,
          duration: { enter: 200, leave: 200 }
        }, {
          default: K(() => [
            R(P("div", {
              class: p([l(a).e("content"), "im-shadow"]),
              ref_key: "contentRef",
              ref: o,
              style: S({
                zIndex: t.zIndex || l(_)
              })
            }, [
              k(L.$slots, "content", {}, void 0, !0)
            ], 6), [
              [ee, f.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
}), ct = /* @__PURE__ */ z(it, [["__scopeId", "data-v-4ad7c8b4"]]), ut = N("ImDropdown", ct), dt = /* @__PURE__ */ x({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = s, a = oe(), t = $("list"), i = T(() => {
      var u;
      const d = ((u = a.default) == null ? void 0 : u.call(a)) || [];
      if (d.length) {
        const r = [];
        return d.forEach((c) => {
          var v, _;
          typeof c.type == "object" ? r.push(c) : c.children && ((v = c.children) != null && v.length) && ((_ = c.children) == null || _.forEach((I) => {
            typeof (I == null ? void 0 : I.type) == "object" && r.push(I);
          }));
        }), r;
      }
    }), o = n, f = (d) => {
      o("update:modelValue", d.value), o("change", d.value);
    };
    return (d, u) => (m(), h("ul", {
      class: p([l(t).b()])
    }, [
      (m(!0), h(W, null, J(i.value, (r) => (m(), q(de(r), {
        active: e.modelValue,
        onClick: () => f(r.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
}), mt = /* @__PURE__ */ z(dt, [["__scopeId", "data-v-9599f63c"]]), pt = /* @__PURE__ */ x({
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
    const e = $("list__item"), a = n, t = s;
    return (i, o) => {
      const f = Q("ripple");
      return R((m(), h("li", {
        class: p([l(e).b(), l(e).is("active", !!(t.active && t.active === t.value))]),
        onClick: o[0] || (o[0] = (d) => a("click", d))
      }, [
        k(i.$slots, "default", {}, void 0, !0)
      ], 2)), [
        [f, t.ripple]
      ]);
    };
  }
}), ft = /* @__PURE__ */ z(pt, [["__scopeId", "data-v-41ec0ba7"]]), vt = N("ImList", mt), gt = N("ImListItem", ft), ht = ["src", "srcset", "alt", "loading"], yt = /* @__PURE__ */ x({
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
    const e = n, a = $("avatar"), t = s, i = (o) => {
      console.log(o.target), e("error", o);
    };
    return (o, f) => (m(), h("span", {
      class: p([l(a).b(), t.shape ? l(a).m(t.shape) : ""]),
      style: S({
        "--im-avatar-size": (Number(t.size) || 36) + "px",
        "--im-avatar-color": t.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": t.fit
      })
    }, [
      !t.src && !t.srcset ? (m(), h("div", {
        key: 0,
        class: p([l(a).e("icon")])
      }, [
        k(o.$slots, "default", {}, void 0, !0)
      ], 2)) : (m(), h("img", {
        key: 1,
        onError: i,
        src: t.src,
        srcset: t.srcset,
        alt: t.alt,
        loading: t.loading,
        class: p([l(a).e("img")])
      }, null, 42, ht))
    ], 6));
  }
}), _t = /* @__PURE__ */ z(yt, [["__scopeId", "data-v-c4c32038"]]), bt = N("ImAvatar", _t), It = () => ({
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
}), wt = (s = "right") => {
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
}, kt = /* @__PURE__ */ x({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: !1 },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const e = $("mask"), { zIndexToken: a } = U(), t = s, i = It(), o = n, f = () => {
      t.closeOnClickMask && o("close", !1);
    };
    return (d, u) => (m(), q(Z, {
      onEnter: l(i).onEnter,
      onLeave: l(i).onLeave
    }, {
      default: K(() => [
        R(P("div", {
          class: p([l(e).b()]),
          style: S({
            zIndex: t.zIndex || l(a)
          }),
          onClick: f
        }, [
          k(d.$slots, "default", {}, void 0, !0)
        ], 6), [
          [ee, t.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
}), xt = /* @__PURE__ */ z(kt, [["__scopeId", "data-v-2ba470f4"]]), ve = N("ImMask", xt), zt = ["aria-modal"], Lt = /* @__PURE__ */ x({
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
    const e = $("drawer"), a = n, t = s, i = w(null), o = wt(t.placement), { zIndexToken: f } = U(), d = () => {
      a("update:modelValue", !1);
    };
    return (u, r) => (m(), q(le, { to: "body" }, [
      P("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: i,
        class: p([l(e).b(), t.placement ? l(e).m(t.placement) : ""]),
        style: S({ "--im-drawer-size": (parseInt(String(t.size)) || 378) + "px", zIndex: t.zIndex || l(f) }),
        "aria-modal": t.modelValue
      }, [
        t.mask ? (m(), q(l(ve), {
          key: 0,
          visible: t.modelValue,
          closeOnClickMask: t.closeOnClickMask,
          onClose: d,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : E("", !0),
        B(Z, {
          onEnter: l(o).onEnter,
          onLeave: l(o).onLeave
        }, {
          default: K(() => [
            R(P("div", {
              class: p([l(e).e("content")])
            }, [
              k(u.$slots, "default", {}, void 0, !0)
            ], 2), [
              [ee, t.modelValue]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ], 14, zt)
    ]));
  }
}), $t = /* @__PURE__ */ z(Lt, [["__scopeId", "data-v-1b0178a0"]]), Ct = N("ImDrawer", $t), Et = /* @__PURE__ */ x({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: !1 },
    shadow: { default: "" }
  },
  setup(s) {
    const n = $("card"), e = s;
    return (a, t) => (m(), h("div", {
      class: p([l(n).b(), l(n).is("borderless", e.borderless), e.shadow ? l(n).m(e.shadow) : ""])
    }, [
      k(a.$slots, "header", {}, () => [
        e.title || a.$slots["header-action"] ? (m(), h("div", {
          key: 0,
          class: p([l(n).e("header")])
        }, [
          P("span", {
            class: p([l(n).e("title")])
          }, F(e.title), 3),
          k(a.$slots, "header-action", {}, void 0, !0)
        ], 2)) : E("", !0)
      ], !0),
      P("div", {
        class: p([l(n).e("body")])
      }, [
        k(a.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), Bt = /* @__PURE__ */ z(Et, [["__scopeId", "data-v-bb9cd52c"]]), Tt = N("ImCard", Bt), Pt = ["data-index", "onMouseenter", "onMouseleave"], Vt = { class: "im-message__text" }, St = /* @__PURE__ */ x({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(s, { expose: n }) {
    const e = $("message"), a = s, t = w([]);
    let i = null;
    X(() => t.value, () => {
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
    }, d = (r) => {
      r.timer && clearTimeout(r.timer), r.timer = setTimeout(() => {
        t.value = t.value.filter((c) => c.id !== r.id);
      }, r.duration || 3e3);
    }, u = (r) => {
      const c = setTimeout(() => {
        t.value = t.value.filter((v) => v.id !== r.id);
      }, r.duration || 3e3);
      t.value.push({ ...r, timer: c });
    };
    return a.add && a.add(u), n({ addMsg: u }), (r, c) => (m(), q(Ee, {
      tag: "ul",
      name: "list",
      css: !0,
      class: p([l(e).b()])
    }, {
      default: K(() => [
        (m(!0), h(W, null, J(t.value, (v) => (m(), h("li", {
          key: v.id,
          "data-index": v.id,
          onMouseenter: () => f(v),
          onMouseleave: () => d(v),
          class: p(["im-message__item", [l(e).e("item"), v.color ? l(e).e(v.color) : ""]])
        }, [
          B(l(A), {
            name: o(v.color),
            size: "18px"
          }, null, 8, ["name"]),
          P("span", Vt, F(v.msg), 1)
        ], 42, Pt))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Mt = /* @__PURE__ */ z(St, [["__scopeId", "data-v-820c83a9"]]);
class At {
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
      this.app = Be(Mt, {
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
let M = null;
const sn = () => (M || (M = new At()), {
  info: (s, n = 3e3) => {
    M == null || M.info(s, n);
  },
  success: (s, n = 3e3) => {
    M == null || M.success(s, n);
  },
  warning: (s, n = 3e3) => {
    M == null || M.warning(s, n);
  },
  error: (s, n = 3e3) => {
    M == null || M.error(s, n);
  }
}), Rt = ["data-visible", "data-esc"], Nt = /* @__PURE__ */ x({
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
    const e = $("dialog"), a = n, t = s, i = w(null), { zIndexToken: o } = U();
    X(
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
    const d = async (r, c) => {
      r.style.setProperty("opacity", "0"), r.style.setProperty("transition", "all 0.2s ease"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.getBoundingClientRect(), r.style.setProperty("opacity", "1"), r.style.setProperty("transform", "translateY(0) scale(1)"), c(), !document.body.classList.contains("im-overflow-hidden") && document.body.classList.add("im-overflow-hidden");
    }, u = async (r, c) => {
      r.style.setProperty("opacity", "0"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.style.setProperty("transition", "all 0.2s ease");
      const v = () => {
        c(), Array.from(
          document.body.querySelectorAll('.im-dialog[data-visible="true"]')
        ).length || document.body.classList.remove("im-overflow-hidden"), r.removeEventListener("transitionend", v);
      };
      r.addEventListener("transitionend", v, { passive: !0 });
    };
    return (r, c) => (m(), q(le, { to: "body" }, [
      P("div", {
        "aria-modal": "true",
        class: p([l(e).b()]),
        tabindex: "-1",
        "data-visible": t.modelValue,
        "data-esc": t.closeOnEscape,
        ref_key: "dialogRef",
        ref: i,
        style: S({
          zIndex: t.zIndex || l(o)
        })
      }, [
        t.mask && !t.fullscreen ? (m(), q(l(ve), {
          key: 0,
          closeOnClickMask: t.closeOnClickMask,
          visible: t.modelValue,
          onClose: c[0] || (c[0] = () => a("update:modelValue", !1))
        }, null, 8, ["closeOnClickMask", "visible"])) : E("", !0),
        B(Z, {
          onEnter: d,
          duration: { enter: 200, leave: 200 },
          onLeave: u
        }, {
          default: K(() => [
            R(P("div", {
              class: p([
                l(e).e("content"),
                l(e).is("fullscreen", t.fullscreen),
                "im-shadow"
              ]),
              style: S({
                maxWidth: t.width,
                width: t.width,
                height: t.height
              })
            }, [
              k(r.$slots, "default", {}, void 0, !0)
            ], 6), [
              [ee, t.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, Rt)
    ]));
  }
}), Dt = /* @__PURE__ */ z(Nt, [["__scopeId", "data-v-8ba4a4fb"]]), Ot = N("ImDialog", Dt), Yt = /* @__PURE__ */ x({
  name: "ImLayer",
  __name: "ImLayer",
  props: {
    visible: { type: Boolean, default: !1 },
    zIndex: { default: "" },
    getTarget: { type: Function, default: () => null }
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const { zIndexToken: e } = U(), a = $("layer"), t = s, i = Te({
      minWidth: "",
      top: "",
      left: ""
    }), o = w(null), f = T(() => t.zIndex || e.value || 1e3);
    X(() => t.visible, (u) => {
      u && d();
    });
    async function d() {
      const u = t.getTarget(), r = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if (u) {
        const c = u.getBoundingClientRect();
        i.minWidth = `${c == null ? void 0 : c.width}px`, i.left = `${c == null ? void 0 : c.left}px`, i.top = `${c == null ? void 0 : c.bottom}px`, await new Promise((_) => requestAnimationFrame(_));
        const v = o.value.clientHeight;
        (c == null ? void 0 : c.bottom) + v > r && (i.top = `${r - v - 8}px`);
      }
    }
    return (u, r) => (m(), q(le, { to: "body" }, [
      B(Z, {
        name: "im-fade",
        duration: { enter: 200, leave: 200 }
      }, {
        default: K(() => [
          R(P("div", {
            class: p([l(a).b(), "im-shadow"]),
            ref_key: "contentRef",
            ref: o,
            style: S({
              ...i,
              zIndex: f.value
            })
          }, [
            k(u.$slots, "default", {}, void 0, !0)
          ], 6), [
            [ee, t.visible]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), Ht = /* @__PURE__ */ z(Yt, [["__scopeId", "data-v-a1bb7e2a"]]), qt = ["value", "placeholder"], Ft = ["onClick"], Xt = /* @__PURE__ */ x({
  name: "ImSelect",
  __name: "ImSelect",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    width: { default: "" },
    size: {},
    placeholder: { default: "" },
    allowClear: { type: Boolean, default: !1 },
    zIndex: {}
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const e = $("select"), a = n, t = s, { sizeToken: i } = U(), o = w(!1), f = w(null), d = w(null), u = w(null), r = T(() => Ie(t.width)), c = T(() => Ie(t.size || i.value || "36px")), v = T(() => {
      var y;
      return ((y = t.options.find((g) => g.value === t.modelValue)) == null ? void 0 : y.label) || "";
    });
    X(() => o.value, (y) => {
      document.removeEventListener("click", I, { capture: !0 }), y ? document.addEventListener("click", I, { capture: !0 }) : window.removeEventListener("scroll", _, { capture: !0 });
    });
    function _(y) {
      var g;
      (g = d.value) != null && g.contains(y.target) || d.value === y.target || (o.value = !1);
    }
    function I(y) {
      var g;
      (g = f.value) != null && g.contains(y.target) || f.value === y.target || y.target === d.value || (o.value = !1);
    }
    async function D() {
      var g;
      if (o.value) return;
      o.value = !0, await new Promise((L) => requestAnimationFrame(L));
      const y = (g = d.value) == null ? void 0 : g.querySelector(`.${e.is("active", !0)}`);
      y && y.scrollIntoView({ behavior: "instant", block: "nearest" }), await new Promise((L) => requestAnimationFrame(L)), window.addEventListener("scroll", _, { capture: !0 });
    }
    function O(y) {
      a("update:modelValue", y);
    }
    function C(y) {
      y.preventDefault(), y.stopPropagation(), a("update:modelValue", "");
    }
    return (y, g) => {
      const L = Q("ripple");
      return m(), h("div", {
        class: p([l(e).b()]),
        style: S({
          "--im-select-width": r.value,
          "--im-select-height": c.value
        })
      }, [
        P("div", {
          onClick: D,
          class: p([l(e).e("trigger"), l(e).is("open", o.value)]),
          ref_key: "triggerRef",
          ref: f,
          tabindex: "-1"
        }, [
          P("input", {
            class: p([l(e).e("input")]),
            ref_key: "inputRef",
            ref: u,
            tabindex: "-1",
            value: v.value,
            readonly: "",
            type: "text",
            placeholder: t.placeholder
          }, null, 10, qt),
          P("span", {
            class: p([l(e).e("icon-down"), l(e).is("rotate", o.value)])
          }, [
            k(y.$slots, "downIcon", {}, () => [
              B(l(A), {
                name: "down",
                size: "12"
              })
            ], !0)
          ], 2),
          t.allowClear && v.value ? (m(), h("span", {
            key: 0,
            class: p([l(e).e("clear-icon")]),
            onClick: C
          }, [
            k(y.$slots, "clearIcon", {}, () => [
              B(l(A), {
                name: "close-circle-fill",
                size: "18"
              })
            ], !0)
          ], 2)) : E("", !0)
        ], 2),
        B(Ht, {
          visible: o.value,
          getTarget: () => f.value,
          "z-index": t.zIndex
        }, {
          default: K(() => [
            P("ul", {
              class: p([l(e).e("list")]),
              ref_key: "listRef",
              ref: d
            }, [
              (m(!0), h(W, null, J(t.options, (b, V) => R((m(), h("li", {
                onClick: () => !b.disabled && O(b.value),
                class: p([l(e).e("option"), l(e).is("disabled", !!b.disabled), l(e).is("active", b.value === t.modelValue)]),
                key: b.value || V
              }, [
                G(F(b.label || b.value), 1)
              ], 10, Ft)), [
                [L, !b.disabled]
              ])), 128))
            ], 2)
          ]),
          _: 1
        }, 8, ["visible", "getTarget", "z-index"])
      ], 6);
    };
  }
}), Wt = /* @__PURE__ */ z(Xt, [["__scopeId", "data-v-917f1c1a"]]), ke = N("ImSelect", Wt), Ut = ["aria-disabled"], jt = ["onClick", "title"], Gt = ["aria-disabled"], Jt = /* @__PURE__ */ x({
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
    const e = $("pagination"), a = n, t = s, i = w(t.pageSize), o = w([1]), { sizeToken: f } = U(), d = T(() => parseInt(String(t.size || f.value || 36)) + "px"), u = T(() => Math.ceil(t.total / (i.value || 10))), r = T(() => t.pageNumber === 1), c = T(() => t.pageNumber >= u.value), v = T(() => t.pageSizeItems.map((g) => ({ label: `${g} 条/页`, value: g })));
    X(() => i.value, (g) => {
      u.value < t.pageNumber ? a("change", { pageSize: g, pageNumber: u.value }) : a("change", { pageSize: g, pageNumber: t.pageNumber });
    }), X(() => [t.pageNumber, t.pageSize], () => {
      i.value = t.pageSize, I(u.value < t.pageNumber ? u.value : t.pageNumber);
    }, { immediate: !0 });
    function _(g) {
      t.pageNumber !== g && a("change", { pageNumber: g, pageSize: t.pageSize });
    }
    function I(g) {
      if (u.value <= 1)
        o.value = [1];
      else {
        const L = Math.ceil(g / 5), b = [];
        let V = L * 5 - 4;
        for (let H = 0; H < 5; H++) {
          let Y = V + H;
          if (Y > u.value)
            break;
          b.push(Y);
        }
        g - 5 >= 1 && (b.unshift("left"), b.unshift(1)), g + 5 <= u.value && (b.push("right"), b.push(u.value)), o.value = b, _(g);
      }
    }
    function D() {
      const g = t.pageNumber + 1;
      if (g > u.value) return _(t.pageNumber);
      if (o.value.includes(g))
        return _(g);
      I(g);
    }
    function O() {
      const g = t.pageNumber - 1;
      if (g < 1) return _(t.pageNumber);
      if (o.value.includes(g))
        return _(g);
      I(g);
    }
    function C() {
      const g = t.pageNumber + 5;
      if (g > u.value) return _(u.value);
      I(g);
    }
    function y() {
      const g = t.pageNumber - 5;
      if (g < 1) return _(1);
      I(g);
    }
    return (g, L) => {
      const b = Q("ripple");
      return m(), h("div", {
        class: p([l(e).b()]),
        style: S({
          "--im-pagination-size": d.value
        })
      }, [
        g.layout.includes("total") ? (m(), h("div", {
          key: 0,
          class: p([l(e).e("total")])
        }, "共 " + F(g.total) + " 条数据", 3)) : E("", !0),
        g.layout.includes("prev") ? R((m(), h("div", {
          key: 1,
          class: p([l(e).e("prev"), l(e).is("disabled", r.value)]),
          "aria-disabled": r.value,
          onClick: O
        }, [
          B(l(A), {
            name: "left",
            size: "14px"
          })
        ], 10, Ut)), [
          [b, !r.value]
        ]) : E("", !0),
        g.layout.includes("pager") ? (m(), h("div", {
          key: 2,
          class: p([l(e).e("pager")])
        }, [
          (m(!0), h(W, null, J(o.value, (V) => (m(), h(W, null, [
            V === "left" ? (m(), h("div", {
              key: 0,
              title: "向前5页",
              class: p([l(e).e("page-item"), l(e).e("left")]),
              onClick: y
            }, [
              B(l(A), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              B(l(A), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : V !== "right" ? R((m(), h("div", {
              key: 1,
              onClick: () => _(V),
              class: p([l(e).e("page-item"), l(e).is("active", V === t.pageNumber)]),
              title: String(V)
            }, [
              G(F(V), 1)
            ], 10, jt)), [
              [b, !0]
            ]) : V === "right" ? (m(), h("div", {
              key: 2,
              class: p([l(e).e("page-item"), l(e).e("right")]),
              title: "向后5页",
              onClick: C
            }, [
              B(l(A), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              B(l(A), {
                name: "arrowright",
                class: "im-icon--arrowright"
              })
            ], 2)) : E("", !0)
          ], 64))), 256))
        ], 2)) : E("", !0),
        g.layout.includes("next") ? R((m(), h("div", {
          key: 3,
          class: p([l(e).e("next"), l(e).is("disabled", c.value)]),
          "aria-disabled": c.value,
          onClick: D
        }, [
          B(l(A), {
            name: "right",
            size: "14px"
          })
        ], 10, Gt)), [
          [b, !c.value]
        ]) : E("", !0),
        g.layout.includes("sizes") ? (m(), h("div", {
          key: 4,
          class: p([l(e).e("size")])
        }, [
          B(l(ke), {
            options: v.value,
            modelValue: i.value,
            "onUpdate:modelValue": L[0] || (L[0] = (V) => i.value = V),
            size: t.size
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : E("", !0)
      ], 6);
    };
  }
}), Kt = /* @__PURE__ */ z(Jt, [["__scopeId", "data-v-3bb837f2"]]), Qt = N("ImPagination", Kt), Zt = [
  re,
  ce,
  ie,
  ue,
  A,
  ae,
  Ge,
  Qe,
  st,
  at,
  ut,
  vt,
  gt,
  bt,
  ve,
  Ct,
  Tt,
  Ot,
  Qt,
  ke
], en = (s, n) => {
  s.provide(we, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), s.directive("ripple", Se), Zt.forEach((e) => {
    e.name ? s.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
}, an = {
  install: en
};
export {
  Qe as ImAlert,
  Ge as ImAnchor,
  bt as ImAvatar,
  st as ImBreadcrumb,
  at as ImBreadcrumbItem,
  re as ImButton,
  Tt as ImCard,
  ce as ImCol,
  Ot as ImDialog,
  ae as ImDivider,
  Ct as ImDrawer,
  ut as ImDropdown,
  A as ImIcon,
  ue as ImInput,
  vt as ImList,
  gt as ImListItem,
  ve as ImMask,
  Qt as ImPagination,
  ie as ImRow,
  ke as ImSelect,
  an as default,
  sn as useImMessage
};
