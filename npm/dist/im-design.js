var de = (n) => {
  throw TypeError(n);
};
var me = (n, t, e) => t.has(n) || de("Cannot " + e);
var j = (n, t, e) => (me(n, t, "read from private field"), e ? e.call(n) : t.get(n)), pe = (n, t, e) => t.has(n) ? de("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), fe = (n, t, e, o) => (me(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
import { inject as ge, ref as $, createElementBlock as v, openBlock as p, createElementVNode as z, defineComponent as b, computed as A, resolveDirective as J, withDirectives as R, normalizeStyle as T, normalizeClass as f, createCommentVNode as L, renderSlot as I, unref as l, createVNode as Y, createTextVNode as O, toDisplayString as N, useSlots as K, Fragment as X, renderList as Q, createBlock as M, resolveDynamicComponent as se, mergeProps as Ie, vModelDynamic as be, watch as U, onMounted as oe, onUnmounted as ae, Teleport as _e, Transition as re, withCtx as le, vShow as ie } from "vue";
const he = Symbol("im-design-token");
var P;
class we {
  constructor() {
    pe(this, P);
    fe(this, P, []);
  }
  async add(t) {
    j(this, P).push(t);
  }
  remove() {
    try {
      const t = j(this, P).shift();
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
        const m = 200 - r;
        setTimeout(
          () => {
            a(null);
          },
          m > 0 ? m : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms", setTimeout(() => {
        t && (t == null || t.remove()), j(this, P).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
}
P = new WeakMap();
const ke = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: !0
      }), window.addEventListener("mouseup", r, { passive: !0 });
    })();
    const o = new we();
    async function s(a) {
      if (!t.value) return;
      const m = window.getComputedStyle(n), i = n.getBoundingClientRect(), d = document.createElement("div");
      d.className = "im-ripple", o.add(d);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const u = a.clientX || a.touches && a.touches[0].clientX, _ = a.clientY || a.touches && a.touches[0].clientY, h = Math.max(i.width, i.height), y = u - i.left - h / 2, C = _ - i.top - h / 2, B = i.width - i.height <= 5;
      Object.assign(c.style, {
        "background-color": m.color,
        width: `${h}px`,
        height: `${h}px`,
        left: `${y}px`,
        top: `${C}px`,
        opacity: "0.15",
        transform: B ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), d.appendChild(c), n.appendChild(d);
      const g = m.position;
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
}, F = (n, t) => {
  const e = ge(he), o = $(Number(e.size || 36)), s = $(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
}, xe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function $e(n, t) {
  return p(), v("svg", xe, t[0] || (t[0] = [
    z("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
const Ce = { render: $e }, Be = ["tabindex", "type", "disabled"], Le = /* @__PURE__ */ b({
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
    const e = n, o = t, s = k("button"), { sizeToken: r } = F(), a = A(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), m = A(() => {
      let c = +(e.size || r.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), i = A(() => e.loading && ["square", "circle"].includes(e.shape)), d = () => {
      e.disabled || e.loading || o("click");
    };
    return (c, u) => {
      const _ = J("ripple");
      return R((p(), v("button", {
        class: f(a.value),
        onClick: d,
        style: T(m.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (p(), v("span", {
          key: 0,
          class: f([l(s).e("loading")])
        }, [
          Y(l(Ce))
        ], 2)) : L("", !0),
        i.value ? L("", !0) : I(c.$slots, "default", { key: 1 }, () => [
          O(N(e.text), 1)
        ], !0)
      ], 14, Be)), [
        [_, !0]
      ]);
    };
  }
}), w = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, s] of t)
    e[o] = s;
  return e;
}, Z = /* @__PURE__ */ w(Le, [["__scopeId", "data-v-706dad03"]]);
Z.install = (n) => {
  n.component("ImButton", Z);
};
const Ee = /* @__PURE__ */ b({
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
    const t = n, e = K(), o = A(() => {
      var r;
      return ((r = e.default) == null ? void 0 : r.call(e)) || [];
    }), s = k("row");
    return (r, a) => (p(), v("div", {
      class: f([l(s).b()]),
      style: T({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (p(!0), v(X, null, Q(o.value, (m, i) => (p(), M(se(m), { key: i }))), 128))
    ], 6));
  }
}), ee = /* @__PURE__ */ w(Ee, [["__scopeId", "data-v-5179967f"]]), ze = /* @__PURE__ */ b({
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
    return (s, r) => (p(), v("div", {
      class: f([l(e).b()]),
      style: T({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      I(s.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), te = /* @__PURE__ */ w(ze, [["__scopeId", "data-v-ecf91058"]]);
ee.install = (n) => {
  n.component("ImRow", ee);
};
te.install = (n) => {
  n.component("ImCol", te);
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
  setup(n, { emit: t }) {
    const e = n, { sizeToken: o } = F(), s = t, r = $(e.modelValue), a = k("input"), m = () => {
      s("update:modelValue", r.value), s("change", r.value);
    };
    return (i, d) => (p(), v("div", {
      class: f([l(a).b()]),
      style: T({
        "--in-input-size": (e.size || l(o) || 36) + "px"
      })
    }, [
      R(z("input", Ie({
        class: [l(a).e("input")],
        "onUpdate:modelValue": d[0] || (d[0] = (c) => r.value = c)
      }, e, { onInput: m }), null, 16), [
        [be, r.value]
      ])
    ], 6));
  }
}), ne = /* @__PURE__ */ w(Te, [["__scopeId", "data-v-6c70856c"]]);
ne.install = (n) => {
  n.component("ImInput", ne);
};
const Ve = /* @__PURE__ */ b({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(n) {
    const t = n;
    return (e, o) => (p(), v("i", {
      class: f(["im-icon", [`im-icon-${t.name}`]]),
      style: T({
        "--icon-size": (parseInt(String(t.size)) || 16) + "px",
        "--icon-color": t.color
      })
    }, null, 6));
  }
}), q = /* @__PURE__ */ w(Ve, [["__scopeId", "data-v-1e711363"]]);
q.install = function(n) {
  n.component("ImIcon", q);
};
const Ae = /* @__PURE__ */ b({
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
    return (o, s) => (p(), v("div", {
      class: f([l(t).b(), l(t).is("vertical", e.vertical)]),
      style: T({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? L("", !0) : (p(), v("span", {
        key: 0,
        class: f([l(t).e("text")])
      }, [
        I(o.$slots, "default", {}, void 0, !0)
      ], 2))
    ], 6));
  }
}), G = /* @__PURE__ */ w(Ae, [["__scopeId", "data-v-108f9bec"]]);
G.name = "ImDivider";
G.install = function(n) {
  n.component("ImDivider", G);
};
const E = (n, t) => (t.install = (e) => {
  e.component(n, t);
}, t), ce = (n, t) => {
  let e;
  return function(...o) {
    e || (e = setTimeout(() => {
      n.apply(this, o), e = null;
    }, t));
  };
}, H = (n, t) => {
  let e;
  return function(...o) {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, o);
    }, t);
  };
}, ve = (n, t, e) => {
  if (!e) return !1;
  const o = e.getBoundingClientRect();
  return n >= o.left && n <= o.left + o.width && t >= o.top && t <= o.top + o.height;
}, De = ["onClick"], Re = /* @__PURE__ */ b({
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
    U(
      () => a.target,
      () => {
        e && e(), e = d();
      }
    ), oe(() => {
      e = d();
    }), ae(() => {
      e && e();
    });
    function m(u) {
      let _ = u == null ? void 0 : u.scrollTop;
      return o.value === window && (_ = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), _;
    }
    function i(u) {
      var B;
      if (r.value || !o.value) return;
      const _ = o.value === window ? u.target : o.value;
      let h = m(_);
      const y = _.offsetTop || 0, C = (a.data || []).map(({ id: g }) => {
        const x = document.getElementById(g);
        return x ? {
          id: g,
          offsetTop: x.offsetTop - y,
          el: x
        } : null;
      }).filter(Boolean);
      s.value = null;
      for (let g = 0; g < C.length; g++) {
        const x = C[g];
        if (h >= x.offsetTop - (a.offset || 0) && h <= x.offsetTop + (((B = x.el) == null ? void 0 : B.clientHeight) || 0) - (a.offset || 0)) {
          s.value = x.id;
          return;
        }
      }
      if (!s.value && h >= (parseInt(String(a.offset)) || 0)) {
        const g = C.find((x) => h <= x.offsetTop - (a.offset || 0) && h > (a.offset || 0) ? (s.value = x.id, !0) : !1);
        g && (s.value = g.id);
      }
    }
    function d() {
      const u = a.target ? typeof a.target == "string" ? document.querySelector(a.target) : a.target : window;
      if (!u)
        return null;
      o.value = u;
      const _ = ce(i, 50);
      return i({ target: u }), u.addEventListener("scroll", _, { passive: !0 }), () => {
        u.removeEventListener("scroll", _);
      };
    }
    async function c(u) {
      var y, C, B;
      if (s.value === u || !u) return;
      r.value = u, s.value = u;
      const _ = document.getElementById(u);
      if (!_) return;
      (C = o.value) == null || C.scrollTo({
        // @ts-ignore
        top: _.offsetTop - (a.offset || 0) - (((y = o.value) == null ? void 0 : y.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const h = H(() => {
        var g;
        r.value = null, (g = o.value) == null || g.removeEventListener("scroll", h);
      }, 300);
      (B = o.value) == null || B.addEventListener("scroll", h, { passive: !0 });
    }
    return (u, _) => {
      const h = J("ripple");
      return a.data && a.data.length ? (p(), v("ul", {
        key: 0,
        class: f([l(t).b()])
      }, [
        (p(!0), v(X, null, Q(a.data, (y) => R((p(), v("li", {
          class: f([l(t).e("item"), l(t).is("active", s.value === y.id)]),
          onClick: () => c(y.id)
        }, [
          s.value === y.id ? (p(), v("span", {
            key: 0,
            class: f([l(t).e("bar")])
          }, null, 2)) : L("", !0),
          O(" " + N(y.text), 1)
        ], 10, De)), [
          [h, !0]
        ])), 256))
      ], 2)) : L("", !0);
    };
  }
}), Se = /* @__PURE__ */ w(Re, [["__scopeId", "data-v-4840d244"]]), Pe = E("ImAnchor", Se), Me = /* @__PURE__ */ b({
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
    const e = t, o = $(null), s = n, r = k("alert"), a = K(), m = A(() => !!(s.showIcon && s.title)), i = A(() => {
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
      }), await new Promise((_) => setTimeout(_, 300)), (u = o.value) == null || u.remove();
    };
    return (c, u) => {
      const _ = J("ripple");
      return p(), v("div", {
        ref_key: "alertRef",
        ref: o,
        class: f([l(r).b(), l(r).m(s.color || "primary"), s.variant && l(r).m(s.variant || "")])
      }, [
        s.showIcon ? (p(), v("div", {
          key: 0,
          class: f([l(r).e("icon")])
        }, [
          I(c.$slots, "icon", {}, () => [
            Y(l(q), {
              name: i.value,
              size: m.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], !0)
        ], 2)) : L("", !0),
        z("div", {
          class: f([l(r).e("content")])
        }, [
          s.title || l(a).title ? (p(), v("div", {
            key: 0,
            class: f([l(r).e("title")])
          }, [
            I(c.$slots, "title", {}, () => [
              O(N(s.title), 1)
            ], !0)
          ], 2)) : L("", !0),
          z("div", {
            class: f([l(r).e("message")])
          }, [
            I(c.$slots, "default", {}, () => [
              O(N(s.message), 1)
            ], !0)
          ], 2)
        ], 2),
        s.closable ? R((p(), v("div", {
          key: 1,
          class: f([l(r).e("close")]),
          onClick: d
        }, [
          I(c.$slots, "close", {}, () => [
            Y(l(q), {
              name: "close",
              size: "16"
            })
          ], !0)
        ], 2)), [
          [_, !0]
        ]) : L("", !0)
      ], 2);
    };
  }
}), Ne = /* @__PURE__ */ w(Me, [["__scopeId", "data-v-d11fdcb2"]]), Ye = E("ImAlert", Ne), Oe = /* @__PURE__ */ b({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = K(), o = t, s = k("breadcrumb"), r = n, a = A(
      () => {
        var i, d;
        return (d = (i = e.default) == null ? void 0 : i.call(e)) == null ? void 0 : d.filter((c) => {
          var u;
          return (c == null ? void 0 : c.type) && ((u = c == null ? void 0 : c.type) == null ? void 0 : u.name) === "ImBreadcrumbItem";
        });
      }
    ), m = (i) => {
      i && r.modelValue !== i && (o("update:modelValue", i), o("change", i));
    };
    return (i, d) => (p(), v("div", {
      class: f([l(s).b()])
    }, [
      (p(!0), v(X, null, Q(a.value, (c, u) => (p(), v(X, null, [
        (p(), M(se(c), {
          active: r.modelValue,
          onClick: m
        }, null, 8, ["active"])),
        a.value && a.value.length > 0 && u < a.value.length - 1 ? (p(), v("span", {
          key: 0,
          class: f([l(s).e("separator")])
        }, [
          I(i.$slots, "separator", {}, () => [
            O(N(r.separator), 1)
          ], !0)
        ], 2)) : L("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Xe = /* @__PURE__ */ w(Oe, [["__scopeId", "data-v-64336468"]]), qe = /* @__PURE__ */ b({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(n, { emit: t }) {
    const e = k("breadcrumb__item"), o = n, s = t;
    return (r, a) => (p(), v("div", {
      onClick: a[0] || (a[0] = () => s("click", o.value)),
      class: f([l(e).b(), l(e).is("active", o.active === o.value && !!o.value)])
    }, [
      I(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ w(qe, [["__scopeId", "data-v-40ed04b1"]]), We = E("ImBreadcrumb", Xe), je = E("ImBreadcrumb", Fe), He = (n = 50) => {
  const t = $(0), e = $(0), o = ce((s) => {
    t.value = s.clientX, e.value = s.clientY;
  }, n);
  return oe(() => {
    window.addEventListener("mousemove", o, { passive: !0 });
  }), ae(() => {
    window.removeEventListener("mousemove", o);
  }), { x: t, y: e };
}, Ue = (n, t, e, o = "bottomLeft") => {
  U(
    () => n.value,
    () => {
      n.value && s();
    }
  );
  async function s() {
    var _;
    await new Promise((h) => requestAnimationFrame(h));
    const r = t == null ? void 0 : t.value, a = e == null ? void 0 : e.value;
    if (!r || !a) return;
    const i = (((_ = r.children) == null ? void 0 : _.length) != 1 ? r : r.children[0]).getBoundingClientRect(), d = i.bottom, c = a.getBoundingClientRect(), u = 2;
    switch (o) {
      case "bottom":
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty(
          "left",
          `${i.left + i.width / 2 - c.width / 2}px`
        );
        break;
      case "bottomRight":
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty(
          "left",
          `${i.left + i.width - c.width}px`
        );
        break;
      case "top":
        a.style.setProperty(
          "top",
          `${i.top - c.height - u}px`
        ), a.style.setProperty(
          "left",
          `${i.left + i.width / 2 - c.width / 2}px`
        );
        break;
      case "topRight":
        a.style.setProperty(
          "top",
          `${i.top - c.height - u}px`
        ), a.style.setProperty(
          "left",
          `${i.right - c.width}px`
        );
        break;
      case "topLeft":
        a.style.setProperty(
          "top",
          `${i.top - c.height - u}px`
        ), a.style.setProperty("left", `${i.left}px`);
        break;
      default:
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty("left", `${i.left}px`);
        break;
    }
  }
}, Ge = (n) => {
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
}, Je = /* @__PURE__ */ b({
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
    const e = t, o = k("dropdown"), s = n, r = $(null), a = $(null), m = $(s.modelValue || !1), i = Ge((x = s.placement) != null && x.includes("top") ? "top" : "bottom");
    let d = null, c = 100;
    const { x: u, y: _ } = He(30), { zIndexToken: h } = F();
    Ue(m, r, a, s.placement), oe(() => {
      d && d(), d = g();
    }), ae(() => {
      d && d();
    }), U(() => s.trigger, () => {
      d && d(), d = g();
    });
    const y = ce(() => {
      const D = ve(u.value, _.value, a.value);
      ve(u.value, _.value, r.value) || D || (m.value = !1);
    }, c);
    U(() => [u.value, _.value], () => {
      s.trigger != "hover" || !m.value || y();
    });
    function C() {
      m.value = !0, e("update:modelValue", m.value), e("change", m.value), window.addEventListener("scroll", B, { passive: !0, capture: !0 });
    }
    function B() {
      m.value = !1, e("update:modelValue", m.value), e("change", m.value), window.removeEventListener("scroll", close);
    }
    function g() {
      var W, ue;
      d && d();
      const D = H((S) => {
        var V;
        (V = r.value) != null && V.contains(S.target) || B();
      }, c);
      if (document.addEventListener("click", D, { passive: !0 }), s.trigger === "hover") {
        const S = H(C, c);
        return (W = r.value) == null || W.addEventListener("mouseenter", S, { passive: !0 }), () => {
          var V;
          (V = r.value) == null || V.removeEventListener("mouseenter", S), document.removeEventListener("click", D);
        };
      }
      if (s.trigger === "click") {
        const S = H(() => {
          m.value ? B() : C();
        }, c);
        return (ue = r.value) == null || ue.addEventListener("click", S, { passive: !0 }), () => {
          var V;
          (V = r.value) == null || V.removeEventListener("click", S), document.removeEventListener("click", D);
        };
      }
      return null;
    }
    return (D, W) => (p(), v("span", {
      class: f([l(o).b()]),
      ref_key: "dropdownRef",
      ref: r
    }, [
      I(D.$slots, "default", {}, void 0, !0),
      (p(), M(_e, { to: "body" }, [
        Y(re, {
          onEnter: l(i).onEnter,
          onLeave: l(i).onLeave,
          duration: { enter: 300, leave: 200 }
        }, {
          default: le(() => [
            R(z("div", {
              class: f([l(o).e("content")]),
              ref_key: "contentRef",
              ref: a,
              style: T({
                zIndex: s.zIndex || l(h)
              })
            }, [
              I(D.$slots, "content", {}, void 0, !0)
            ], 6), [
              [ie, m.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
}), Ke = /* @__PURE__ */ w(Je, [["__scopeId", "data-v-c394ceaa"]]), Qe = E("ImDropdown", Ke), Ze = /* @__PURE__ */ b({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = n, o = K(), s = k("list"), r = A(() => {
      var d;
      const i = ((d = o.default) == null ? void 0 : d.call(o)) || [];
      if (i.length) {
        const c = [];
        return i.forEach((u) => {
          var _, h;
          typeof u.type == "object" ? c.push(u) : u.children && ((_ = u.children) != null && _.length) && ((h = u.children) == null || h.forEach((y) => {
            typeof (y == null ? void 0 : y.type) == "object" && c.push(y);
          }));
        }), c;
      }
    }), a = t, m = (i) => {
      a("update:modelValue", i.value), a("change", i.value);
    };
    return (i, d) => (p(), v("ul", {
      class: f([l(s).b()])
    }, [
      (p(!0), v(X, null, Q(r.value, (c) => (p(), M(se(c), {
        active: e.modelValue,
        onClick: () => m(c.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
}), et = /* @__PURE__ */ w(Ze, [["__scopeId", "data-v-9599f63c"]]), tt = /* @__PURE__ */ b({
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
      const m = J("ripple");
      return R((p(), v("li", {
        class: f([l(e).b(), l(e).is("active", !!(s.active && s.active === s.value))]),
        onClick: a[0] || (a[0] = (i) => o("click", i))
      }, [
        I(r.$slots, "default", {}, void 0, !0)
      ], 2)), [
        [m, s.ripple]
      ]);
    };
  }
}), nt = /* @__PURE__ */ w(tt, [["__scopeId", "data-v-41ec0ba7"]]), st = E("ImList", et), ot = E("ImListItem", nt), at = ["src", "srcset", "alt", "loading"], rt = /* @__PURE__ */ b({
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
    return (a, m) => (p(), v("span", {
      class: f([l(o).b(), s.shape ? l(o).m(s.shape) : ""]),
      style: T({
        "--im-avatar-size": (Number(s.size) || 36) + "px",
        "--im-avatar-color": s.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": s.fit
      })
    }, [
      !s.src && !s.srcset ? (p(), v("div", {
        key: 0,
        class: f([l(o).e("icon")])
      }, [
        I(a.$slots, "default", {}, void 0, !0)
      ], 2)) : (p(), v("img", {
        key: 1,
        onError: r,
        src: s.src,
        srcset: s.srcset,
        alt: s.alt,
        loading: s.loading,
        class: f([l(o).e("img")])
      }, null, 42, at))
    ], 6));
  }
}), lt = /* @__PURE__ */ w(rt, [["__scopeId", "data-v-c4c32038"]]), it = E("ImAvatar", lt), ct = () => ({
  onEnter: (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease-out", n.getBoundingClientRect(), n.style.opacity = 1, t();
  },
  onLeave: async (n, t) => {
    n.style.opacity = 0, await new Promise((e) => requestAnimationFrame(e)), n.addEventListener("transitionend", t);
  }
}), ut = (n = "right") => {
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
      o.style.transform = t, o.style.transition = "transform 200ms ease-out", o.getBoundingClientRect(), o.style.transform = "translateX(0)", s();
    },
    onLeave: async (o, s) => {
      o.style.transform = e, o.style.transition = "transform 200ms ease-out", await new Promise((r) => requestAnimationFrame(r)), o.addEventListener("transitionend", () => {
        s();
      });
    }
  };
}, dt = /* @__PURE__ */ b({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: !1 },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(n, { emit: t }) {
    const e = k("mask"), { zIndexToken: o } = F(), s = n, r = ct(), a = t, m = () => {
      s.closeOnClickMask && a("close", !1);
    };
    return (i, d) => (p(), M(re, {
      onEnter: l(r).onEnter,
      onLeave: l(r).onLeave
    }, {
      default: le(() => [
        R(z("div", {
          class: f([l(e).b()]),
          style: T({
            zIndex: s.zIndex || l(o)
          }),
          onClick: m
        }, [
          I(i.$slots, "default", {}, void 0, !0)
        ], 6), [
          [ie, s.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
}), mt = /* @__PURE__ */ w(dt, [["__scopeId", "data-v-2ba470f4"]]), ye = E("ImMask", mt), pt = ["aria-modal"], ft = /* @__PURE__ */ b({
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
    const e = k("drawer"), o = t, s = n, r = $(null), a = ut(s.placement), { zIndexToken: m } = F(), i = () => {
      o("update:modelValue", !1);
    };
    return (d, c) => (p(), M(_e, { to: "body" }, [
      z("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: r,
        class: f([l(e).b(), s.placement ? l(e).m(s.placement) : ""]),
        style: T({ "--im-drawer-size": (parseInt(String(s.size)) || 378) + "px", zIndex: s.zIndex || l(m) }),
        "aria-modal": s.modelValue
      }, [
        s.mask ? (p(), M(l(ye), {
          key: 0,
          visible: s.modelValue,
          closeOnClickMask: s.closeOnClickMask,
          onClose: i,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : L("", !0),
        Y(re, {
          onEnter: l(a).onEnter,
          onLeave: l(a).onLeave
        }, {
          default: le(() => [
            R(z("div", {
              class: f([l(e).e("content")])
            }, [
              I(d.$slots, "default", {}, void 0, !0)
            ], 2), [
              [ie, s.modelValue]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ], 14, pt)
    ]));
  }
}), vt = /* @__PURE__ */ w(ft, [["__scopeId", "data-v-1b0178a0"]]), _t = E("ImDrawer", vt), ht = /* @__PURE__ */ b({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: !1 },
    shadow: { default: "" }
  },
  setup(n) {
    const t = k("card"), e = n;
    return (o, s) => (p(), v("div", {
      class: f([l(t).b(), l(t).is("borderless", e.borderless), e.shadow ? l(t).m(e.shadow) : ""])
    }, [
      I(o.$slots, "header", {}, () => [
        z("div", {
          class: f([l(t).e("header")])
        }, [
          e.title ? (p(), v("span", {
            key: 0,
            class: f([l(t).e("title")])
          }, N(e.title), 3)) : L("", !0),
          I(o.$slots, "header-action", {}, void 0, !0)
        ], 2)
      ], !0),
      z("div", {
        class: f([l(t).e("body")])
      }, [
        I(o.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 2));
  }
}), yt = /* @__PURE__ */ w(ht, [["__scopeId", "data-v-cf1ecfc0"]]), gt = E("ImCard", yt), It = [
  Z,
  te,
  ee,
  ne,
  q,
  G,
  Pe,
  Ye,
  We,
  je,
  Qe,
  st,
  ot,
  it,
  ye,
  _t,
  gt
], bt = (n, t) => {
  n.provide(he, {
    size: (t == null ? void 0 : t.size) || 36,
    zIndex: (t == null ? void 0 : t.zIndex) || 1e3
  }), n.directive("ripple", ke), It.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
}, xt = {
  install: bt
};
export {
  Ye as ImAlert,
  Pe as ImAnchor,
  it as ImAvatar,
  We as ImBreadcrumb,
  je as ImBreadcrumbItem,
  Z as ImButton,
  gt as ImCard,
  te as ImCol,
  G as ImDivider,
  _t as ImDrawer,
  Qe as ImDropdown,
  q as ImIcon,
  ne as ImInput,
  st as ImList,
  ot as ImListItem,
  ye as ImMask,
  ee as ImRow,
  xt as default
};
