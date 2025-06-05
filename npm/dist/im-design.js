var ie = (t) => {
  throw TypeError(t);
};
var ce = (t, n, e) => n.has(t) || ie("Cannot " + e);
var q = (t, n, e) => (ce(t, n, "read from private field"), e ? e.call(t) : n.get(t)), ue = (t, n, e) => n.has(t) ? ie("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e), de = (t, n, e, s) => (ce(t, n, "write to private field"), s ? s.call(t, e) : n.set(t, e), e);
import { inject as fe, ref as k, createElementBlock as v, openBlock as p, createElementVNode as A, defineComponent as b, computed as E, resolveDirective as U, withDirectives as D, normalizeStyle as P, normalizeClass as _, createCommentVNode as T, renderSlot as x, unref as m, createVNode as O, createTextVNode as N, toDisplayString as Y, useSlots as G, Fragment as M, renderList as J, createBlock as K, resolveDynamicComponent as ne, mergeProps as ve, vModelDynamic as _e, watch as X, onMounted as oe, onUnmounted as se, Teleport as he, Transition as ye, withCtx as ge, vShow as Ie } from "vue";
const pe = Symbol("im-design-token");
var S;
class be {
  constructor() {
    ue(this, S);
    de(this, S, []);
  }
  async add(n) {
    q(this, S).push(n);
  }
  remove() {
    try {
      const n = q(this, S).shift();
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
      r && await new Promise((a) => {
        e.style.opacity = "0.1";
        const l = 200 - r;
        setTimeout(
          () => {
            a(null);
          },
          l > 0 ? l : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms ", setTimeout(() => {
        n && (n == null || n.remove()), q(this, S).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
}
S = new WeakMap();
const we = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(t, n) {
    (function() {
      t.addEventListener("mousedown", o, {
        passive: !0
      }), window.addEventListener("mouseup", r, { passive: !0 });
    })();
    const s = new be();
    async function o(a) {
      if (!n.value) return;
      const l = window.getComputedStyle(t), c = t.getBoundingClientRect(), u = document.createElement("div");
      u.className = "im-ripple", s.add(u);
      const i = document.createElement("div");
      i.className = "im-ripple__item";
      const d = a.clientX || a.touches && a.touches[0].clientX, f = a.clientY || a.touches && a.touches[0].clientY, h = Math.max(c.width, c.height), y = d - c.left - h / 2, B = f - c.top - h / 2, L = c.width - c.height <= 5;
      Object.assign(i.style, {
        "background-color": l.color,
        width: `${h}px`,
        height: `${h}px`,
        left: `${y}px`,
        top: `${B}px`,
        opacity: "0.33",
        transform: L ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), i.setAttribute("data-time", Date.now() + ""), u.appendChild(i), t.appendChild(u);
      const g = l.position;
      g === "static" && (t.style.position = "relative", t.dataset.originalPosition = g), i.getBoundingClientRect(), i.style.transform = "scale(2.8)", i.style.opacity = "0.33";
    }
    t.im_add_ripple_fn__ = o, t.im_remove_ripple_fn__ = r;
    function r() {
      s.remove();
    }
  },
  unmounted(t) {
    t && (t != null && t.im_add_ripple_fn__) && t.removeEventListener("mousedown", t.im_add_ripple_fn__), t && t.im_remove_ripple_fn__ && window.removeEventListener("mouseup", t.im_remove_ripple_fn__);
  }
}, $ = (t) => {
  const n = "im-" + t;
  return {
    b: () => n,
    e: (e) => `${n}__${e}`,
    m: (e) => `${n}--${e}`,
    is: (e, s) => s ? `is-${e}` : ""
  };
}, ae = (t, n) => {
  const e = fe(pe), s = k(Number(e.size || 36)), o = k(e.zIndex || 1e3);
  return { sizeToken: s, zIndexToken: o };
}, xe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function ke(t, n) {
  return p(), v("svg", xe, n[0] || (n[0] = [
    A("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const $e = { render: ke }, Be = ["tabindex", "type", "disabled"], Le = /* @__PURE__ */ b({
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
    const e = t, s = n, o = $("button"), { sizeToken: r } = ae(), a = E(() => [
      o.b(),
      e.color && o.m(e.color),
      e.shape && o.m(e.shape),
      e.variant && o.m(e.variant),
      o.is("disabled", e.disabled),
      o.is("loading", e.loading)
    ].filter(Boolean)), l = E(() => {
      let i = +(e.size || r.value || 36);
      return {
        "--im-button-size": i + "px",
        "--im-button-padding": (i * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), c = E(() => e.loading && ["square", "circle"].includes(e.shape)), u = () => {
      e.disabled || e.loading || s("click");
    };
    return (i, d) => {
      const f = U("ripple");
      return D((p(), v("button", {
        class: _(a.value),
        onClick: u,
        style: P(l.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (p(), v("span", {
          key: 0,
          class: _([m(o).e("loading")])
        }, [
          O(m($e))
        ], 2)) : T("", !0),
        c.value ? T("", !0) : x(i.$slots, "default", { key: 1 }, () => [
          N(Y(e.text), 1)
        ], !0)
      ], 14, Be)), [
        [f, !0]
      ]);
    };
  }
}), w = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [s, o] of n)
    e[s] = o;
  return e;
}, Q = /* @__PURE__ */ w(Le, [["__scopeId", "data-v-706dad03"]]);
Q.install = (t) => {
  t.component("ImButton", Q);
};
const Ce = /* @__PURE__ */ b({
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
    const n = t, e = G(), s = E(() => {
      var r;
      return ((r = e.default) == null ? void 0 : r.call(e)) || [];
    }), o = $("row");
    return (r, a) => (p(), v("div", {
      class: _([m(o).b()]),
      style: P({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (p(!0), v(M, null, J(s.value, (l, c) => (p(), K(ne(l), { key: c }))), 128))
    ], 6));
  }
}), Z = /* @__PURE__ */ w(Ce, [["__scopeId", "data-v-5179967f"]]), Ee = /* @__PURE__ */ b({
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
    const n = t, e = $("col"), s = E(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (o, r) => (p(), v("div", {
      class: _([m(e).b()]),
      style: P({
        "--im-col-w": s.value,
        "--im-col-offset": n.offset
      })
    }, [
      x(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ee = /* @__PURE__ */ w(Ee, [["__scopeId", "data-v-ecf91058"]]);
Z.install = (t) => {
  t.component("ImRow", Z);
};
ee.install = (t) => {
  t.component("ImCol", ee);
};
const Te = /* @__PURE__ */ b({
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
    const e = t, { sizeToken: s } = ae(), o = n, r = k(e.modelValue), a = $("input"), l = () => {
      o("update:modelValue", r.value), o("change", r.value);
    };
    return (c, u) => (p(), v("div", {
      class: _([m(a).b()]),
      style: P({
        "--in-input-size": (e.size || m(s) || 36) + "px"
      })
    }, [
      D(A("input", ve({
        class: [m(a).e("input")],
        "onUpdate:modelValue": u[0] || (u[0] = (i) => r.value = i)
      }, e, { onInput: l }), null, 16), [
        [_e, r.value]
      ])
    ], 6));
  }
}), te = /* @__PURE__ */ w(Te, [["__scopeId", "data-v-6c70856c"]]);
te.install = (t) => {
  t.component("ImInput", te);
};
const ze = /* @__PURE__ */ b({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(t) {
    const n = t;
    return (e, s) => (p(), v("i", {
      class: _(["im-icon", [`im-icon-${n.name}`]]),
      style: P({
        "--icon-size": (parseInt(String(n.size)) || 16) + "px",
        "--icon-color": n.color
      })
    }, null, 6));
  }
}), W = /* @__PURE__ */ w(ze, [["__scopeId", "data-v-1e711363"]]);
W.install = function(t) {
  t.component("ImIcon", W);
};
const Ve = /* @__PURE__ */ b({
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
    const n = $("divider"), e = t;
    return (s, o) => (p(), v("div", {
      class: _([m(n).b(), m(n).is("vertical", e.vertical)]),
      style: P({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? T("", !0) : (p(), v("span", {
        key: 0,
        class: _([m(n).e("text")])
      }, [
        x(s.$slots, "default", {}, void 0, !0)
      ], 2))
    ], 6));
  }
}), H = /* @__PURE__ */ w(Ve, [["__scopeId", "data-v-108f9bec"]]);
H.name = "ImDivider";
H.install = function(t) {
  t.component("ImDivider", H);
};
const R = (t, n) => (n.install = (e) => {
  e.component(t, n);
}, n), re = (t, n) => {
  let e;
  return function(...s) {
    e || (e = setTimeout(() => {
      t.apply(this, s), e = null;
    }, n));
  };
}, F = (t, n) => {
  let e;
  return function(...s) {
    e && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, s);
    }, n);
  };
}, me = (t, n, e) => {
  if (!e) return !1;
  const s = e.getBoundingClientRect();
  return t >= s.left && t <= s.left + s.width && n >= s.top && n <= s.top + s.height;
}, Se = ["onClick"], Pe = /* @__PURE__ */ b({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(t) {
    const n = $("anchor");
    let e = null;
    const s = k(null), o = k(null), r = k(null), a = t;
    X(
      () => a.target,
      () => {
        e && e(), e = u();
      }
    ), oe(() => {
      e = u();
    }), se(() => {
      e && e();
    });
    function l(d) {
      let f = d == null ? void 0 : d.scrollTop;
      return s.value === window && (f = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), f;
    }
    function c(d) {
      var L;
      if (r.value || !s.value) return;
      const f = s.value === window ? d.target : s.value;
      let h = l(f);
      const y = f.offsetTop || 0, B = (a.data || []).map(({ id: g }) => {
        const I = document.getElementById(g);
        return I ? {
          id: g,
          offsetTop: I.offsetTop - y,
          el: I
        } : null;
      }).filter(Boolean);
      o.value = null;
      for (let g = 0; g < B.length; g++) {
        const I = B[g];
        if (h >= I.offsetTop - (a.offset || 0) && h <= I.offsetTop + (((L = I.el) == null ? void 0 : L.clientHeight) || 0) - (a.offset || 0)) {
          o.value = I.id;
          return;
        }
      }
      if (!o.value && h >= (parseInt(String(a.offset)) || 0)) {
        const g = B.find((I) => h <= I.offsetTop - (a.offset || 0) && h > (a.offset || 0) ? (o.value = I.id, !0) : !1);
        g && (o.value = g.id);
      }
    }
    function u() {
      const d = a.target ? typeof a.target == "string" ? document.querySelector(a.target) : a.target : window;
      if (!d)
        return null;
      s.value = d;
      const f = re(c, 50);
      return c({ target: d }), d.addEventListener("scroll", f, { passive: !0 }), () => {
        d.removeEventListener("scroll", f);
      };
    }
    async function i(d) {
      var y, B, L;
      if (o.value === d || !d) return;
      r.value = d, o.value = d;
      const f = document.getElementById(d);
      if (!f) return;
      (B = s.value) == null || B.scrollTo({
        // @ts-ignore
        top: f.offsetTop - (a.offset || 0) - (((y = s.value) == null ? void 0 : y.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const h = F(() => {
        var g;
        r.value = null, (g = s.value) == null || g.removeEventListener("scroll", h);
      }, 300);
      (L = s.value) == null || L.addEventListener("scroll", h, { passive: !0 });
    }
    return (d, f) => {
      const h = U("ripple");
      return a.data && a.data.length ? (p(), v("ul", {
        key: 0,
        class: _([m(n).b()])
      }, [
        (p(!0), v(M, null, J(a.data, (y) => D((p(), v("li", {
          class: _([m(n).e("item"), m(n).is("active", o.value === y.id)]),
          onClick: () => i(y.id)
        }, [
          o.value === y.id ? (p(), v("span", {
            key: 0,
            class: _([m(n).e("bar")])
          }, null, 2)) : T("", !0),
          N(" " + Y(y.text), 1)
        ], 10, Se)), [
          [h, !0]
        ])), 256))
      ], 2)) : T("", !0);
    };
  }
}), Re = /* @__PURE__ */ w(Pe, [["__scopeId", "data-v-4840d244"]]), De = R("ImAnchor", Re), Ae = /* @__PURE__ */ b({
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
    const e = n, s = k(null), o = t, r = $("alert"), a = G(), l = E(() => !!(o.showIcon && o.title)), c = E(() => {
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
    }), u = async () => {
      var i, d;
      e("close"), (i = s.value) == null || i.animate([{
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
      }), await new Promise((f) => setTimeout(f, 300)), (d = s.value) == null || d.remove();
    };
    return (i, d) => {
      const f = U("ripple");
      return p(), v("div", {
        ref_key: "alertRef",
        ref: s,
        class: _([m(r).b(), m(r).m(o.color || "primary"), o.variant && m(r).m(o.variant || "")])
      }, [
        o.showIcon ? (p(), v("div", {
          key: 0,
          class: _([m(r).e("icon")])
        }, [
          x(i.$slots, "icon", {}, () => [
            O(m(W), {
              name: c.value,
              size: l.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], !0)
        ], 2)) : T("", !0),
        A("div", {
          class: _([m(r).e("content")])
        }, [
          o.title || m(a).title ? (p(), v("div", {
            key: 0,
            class: _([m(r).e("title")])
          }, [
            x(i.$slots, "title", {}, () => [
              N(Y(o.title), 1)
            ], !0)
          ], 2)) : T("", !0),
          A("div", {
            class: _([m(r).e("message")])
          }, [
            x(i.$slots, "default", {}, () => [
              N(Y(o.message), 1)
            ], !0)
          ], 2)
        ], 2),
        o.closable ? D((p(), v("div", {
          key: 1,
          class: _([m(r).e("close")]),
          onClick: u
        }, [
          x(i.$slots, "close", {}, () => [
            O(m(W), {
              name: "close",
              size: "16"
            })
          ], !0)
        ], 2)), [
          [f, !0]
        ]) : T("", !0)
      ], 2);
    };
  }
}), Ne = /* @__PURE__ */ w(Ae, [["__scopeId", "data-v-d11fdcb2"]]), Ye = R("ImAlert", Ne), Me = /* @__PURE__ */ b({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: n }) {
    const e = G(), s = n, o = $("breadcrumb"), r = t, a = E(
      () => {
        var c, u;
        return (u = (c = e.default) == null ? void 0 : c.call(e)) == null ? void 0 : u.filter((i) => {
          var d;
          return (i == null ? void 0 : i.type) && ((d = i == null ? void 0 : i.type) == null ? void 0 : d.name) === "ImBreadcrumbItem";
        });
      }
    ), l = (c) => {
      c && r.modelValue !== c && (s("update:modelValue", c), s("change", c));
    };
    return (c, u) => (p(), v("div", {
      class: _([m(o).b()])
    }, [
      (p(!0), v(M, null, J(a.value, (i, d) => (p(), v(M, null, [
        (p(), K(ne(i), {
          active: r.modelValue,
          onClick: l
        }, null, 8, ["active"])),
        a.value && a.value.length > 0 && d < a.value.length - 1 ? (p(), v("span", {
          key: 0,
          class: _([m(o).e("separator")])
        }, [
          x(c.$slots, "separator", {}, () => [
            N(Y(r.separator), 1)
          ], !0)
        ], 2)) : T("", !0)
      ], 64))), 256))
    ], 2));
  }
}), We = /* @__PURE__ */ w(Me, [["__scopeId", "data-v-64336468"]]), je = /* @__PURE__ */ b({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const e = $("breadcrumb__item"), s = t, o = n;
    return (r, a) => (p(), v("div", {
      onClick: a[0] || (a[0] = () => o("click", s.value)),
      class: _([m(e).b(), m(e).is("active", s.active === s.value && !!s.value)])
    }, [
      x(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ w(je, [["__scopeId", "data-v-40ed04b1"]]), Fe = R("ImBreadcrumb", We), Oe = R("ImBreadcrumb", qe), Xe = (t = 50) => {
  const n = k(0), e = k(0), s = re((o) => {
    n.value = o.clientX, e.value = o.clientY;
  }, t);
  return oe(() => {
    window.addEventListener("mousemove", s, { passive: !0 });
  }), se(() => {
    window.removeEventListener("mousemove", s);
  }), { x: n, y: e };
}, He = (t, n, e, s = "bottomLeft") => {
  X(
    () => t.value,
    () => {
      t.value && o();
    }
  );
  async function o() {
    await new Promise((i) => requestAnimationFrame(i));
    const r = n == null ? void 0 : n.value, a = e == null ? void 0 : e.value;
    if (!r || !a) return;
    const l = r.getBoundingClientRect(), c = a.getBoundingClientRect(), u = 4;
    switch (s) {
      case "bottom":
        a.style.setProperty("top", `${l.bottom + u}px`), a.style.setProperty(
          "left",
          `${l.left + l.width / 2 - c.width / 2}px`
        );
        break;
      case "bottomRight":
        a.style.setProperty("top", `${l.bottom + u}px`), a.style.setProperty(
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
        a.style.setProperty("top", `${l.bottom + u}px`), a.style.setProperty("left", `${l.left}px`);
        break;
    }
  }
}, Ue = (t) => {
  const n = t.toLowerCase().includes("bottom") ? "translateY(-10px)" : "translateY(10px)";
  function e(o, r) {
    o.style.transform = n, o.style.opacity = "0", o.style.pointerEvents = "none", o.getBoundingClientRect(), o.style.transform = "translateY(0px)", o.style.opacity = "1", o.style.pointerEvents = "auto", r();
  }
  async function s(o, r) {
    o.style.transform = n, o.style.opacity = "0", o.getBoundingClientRect(), o.addEventListener("transitionend", () => {
      r(), o.style.transform = "translateY(0px)";
    });
  }
  return {
    onEnter: e,
    onLeave: s
  };
}, Ge = /* @__PURE__ */ b({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: !1 },
    trigger: { default: "hover" },
    placement: { default: "bottomLeft" },
    zIndex: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: n }) {
    var I;
    const e = n, s = $("dropdown"), o = t, r = k(null), a = k(null), l = k(o.modelValue || !1), c = Ue((I = o.placement) != null && I.includes("top") ? "top" : "bottom");
    let u = null, i = 100;
    const { x: d, y: f } = Xe(30), { zIndexToken: h } = ae();
    He(l, r, a, o.placement), oe(() => {
      u && u(), u = g();
    }), se(() => {
      u && u();
    }), X(() => o.trigger, () => {
      u && u(), u = g();
    });
    const y = re(() => {
      const z = me(d.value, f.value, a.value);
      me(d.value, f.value, r.value) || z || (l.value = !1);
    }, i);
    X(() => [d.value, f.value], () => {
      o.trigger != "hover" || !l.value || y();
    });
    function B() {
      l.value = !0, e("update:modelValue", l.value), e("change", l.value), window.addEventListener("scroll", L, { passive: !0, capture: !0 });
    }
    function L() {
      l.value = !1, e("update:modelValue", l.value), e("change", l.value), window.removeEventListener("scroll", close);
    }
    function g() {
      var j, le;
      u && u();
      const z = F((V) => {
        var C;
        (C = r.value) != null && C.contains(V.target) || L();
      }, i);
      if (document.addEventListener("click", z, { passive: !0 }), o.trigger === "hover") {
        const V = F(B, i);
        return (j = r.value) == null || j.addEventListener("mouseenter", V, { passive: !0 }), () => {
          var C;
          (C = r.value) == null || C.removeEventListener("mouseenter", V), document.removeEventListener("click", z);
        };
      }
      if (o.trigger === "click") {
        const V = F(() => {
          l.value ? L() : B();
        }, i);
        return (le = r.value) == null || le.addEventListener("click", V, { passive: !0 }), () => {
          var C;
          (C = r.value) == null || C.removeEventListener("click", V), document.removeEventListener("click", z);
        };
      }
      return null;
    }
    return (z, j) => (p(), v("span", {
      class: _([m(s).b()]),
      ref_key: "dropdownRef",
      ref: r
    }, [
      x(z.$slots, "default", {}, void 0, !0),
      (p(), K(he, { to: "body" }, [
        O(ye, {
          onEnter: m(c).onEnter,
          onLeave: m(c).onLeave,
          duration: { enter: 300, leave: 200 }
        }, {
          default: ge(() => [
            D(A("div", {
              class: _([m(s).e("content")]),
              ref_key: "contentRef",
              ref: a,
              style: P({
                zIndex: o.zIndex || m(h)
              })
            }, [
              x(z.$slots, "content", {}, void 0, !0)
            ], 6), [
              [Ie, l.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
}), Je = /* @__PURE__ */ w(Ge, [["__scopeId", "data-v-c394ceaa"]]), Ke = R("ImDropdown", Je), Qe = /* @__PURE__ */ b({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: n }) {
    const e = t, s = G(), o = $("list"), r = E(() => {
      var u;
      const c = ((u = s.default) == null ? void 0 : u.call(s)) || [];
      if (c.length) {
        const i = [];
        return c.forEach((d) => {
          var f, h;
          typeof d.type == "object" ? i.push(d) : d.children && ((f = d.children) != null && f.length) && ((h = d.children) == null || h.forEach((y) => {
            typeof (y == null ? void 0 : y.type) == "object" && i.push(y);
          }));
        }), i;
      }
    });
    console.log(r.value);
    const a = n, l = (c) => {
      a("update:modelValue", c.value), a("change", c.value);
    };
    return (c, u) => (p(), v("ul", {
      class: _([m(o).b()])
    }, [
      (p(!0), v(M, null, J(r.value, (i) => (p(), K(ne(i), {
        active: e.modelValue,
        onClick: () => l(i.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
}), Ze = /* @__PURE__ */ w(Qe, [["__scopeId", "data-v-6b9b0a0f"]]), et = /* @__PURE__ */ b({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const e = $("list__item"), s = n, o = t;
    return (r, a) => {
      const l = U("ripple");
      return D((p(), v("li", {
        class: _([m(e).b(), m(e).is("active", !!(o.active && o.active === o.value))]),
        onClick: a[0] || (a[0] = (c) => s("click", c))
      }, [
        x(r.$slots, "default", {}, void 0, !0)
      ], 2)), [
        [l, o.ripple]
      ]);
    };
  }
}), tt = /* @__PURE__ */ w(et, [["__scopeId", "data-v-1883a87a"]]), nt = R("ImList", Ze), ot = R("ImListItem", tt), st = [
  Q,
  ee,
  Z,
  te,
  W,
  H,
  De,
  Ye,
  Fe,
  Oe,
  Ke,
  nt,
  ot
], at = (t, n) => {
  t.provide(pe, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), t.directive("ripple", we), st.forEach((e) => {
    e.name ? t.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
}, it = {
  install: at
};
export {
  Ye as ImAlert,
  De as ImAnchor,
  Fe as ImBreadcrumb,
  Oe as ImBreadcrumbItem,
  Q as ImButton,
  ee as ImCol,
  H as ImDivider,
  Ke as ImDropdown,
  W as ImIcon,
  te as ImInput,
  nt as ImList,
  ot as ImListItem,
  Z as ImRow,
  it as default
};
