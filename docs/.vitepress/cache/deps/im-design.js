import {
  Fragment,
  Teleport,
  Transition,
  TransitionGroup,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  inject,
  mergeProps,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveDirective,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  useSlots,
  vModelDynamic,
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.32/node_modules/im-design/dist/im-design.js
var Le = Object.defineProperty;
var ge = (s) => {
  throw TypeError(s);
};
var $e = (s, n, e) => n in s ? Le(s, n, { enumerable: true, configurable: true, writable: true, value: e }) : s[n] = e;
var te = (s, n, e) => $e(s, typeof n != "symbol" ? n + "" : n, e);
var he = (s, n, e) => n.has(s) || ge("Cannot " + e);
var ne = (s, n, e) => (he(s, n, "read from private field"), e ? e.call(s) : n.get(s));
var ye = (s, n, e) => n.has(s) ? ge("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(s) : n.set(s, e);
var _e = (s, n, e, a) => (he(s, n, "write to private field"), a ? a.call(s, e) : n.set(s, e), e);
var we = Symbol("im-design-token");
var j;
var Ve = class {
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
};
j = /* @__PURE__ */ new WeakMap();
async function Se(s, n, e) {
  const a = window.getComputedStyle(e), t = e.getBoundingClientRect(), i = document.createElement("div");
  i.className = "im-ripple", n.add(i);
  const o = document.createElement("div");
  o.className = "im-ripple__item";
  const f = s.clientX || s.touches && s.touches[0].clientX, m = s.clientY || s.touches && s.touches[0].clientY, d = Math.max(t.width, t.height), r = f - t.left - d / 2, c = m - t.top - d / 2, g = t.width - t.height <= 5;
  Object.assign(o.style, {
    "background-color": a.color,
    width: `${d}px`,
    height: `${d}px`,
    left: `${r}px`,
    top: `${c}px`,
    opacity: "0.15",
    transform: g ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), o.setAttribute("data-time", Date.now() + ""), i.appendChild(o), e.appendChild(i);
  const y = a.position;
  y === "static" && (e.style.position = "relative", e.dataset.originalPosition = y), o.getBoundingClientRect(), o.style.transform = "scale(2.8)", o.style.opacity = "0.33";
}
var Me = {
  mounted(s, n) {
    s.IM_RIPPLE_VALUE = n.value;
    const e = new Ve(), a = (f) => {
      s.IM_RIPPLE_VALUE && Se(f, e, s);
    }, t = () => {
      e.remove();
    }, i = () => {
      s.addEventListener("mousedown", a, { passive: true }), window.addEventListener("mouseup", t, { passive: true });
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
};
var z = (s) => {
  const n = "im-" + s;
  return {
    b: () => n,
    e: (e) => `${n}__${e}`,
    m: (e) => `${n}--${e}`,
    is: (e, a) => a ? `is-${e}` : ""
  };
};
var U = (s, n) => {
  const e = inject(we), a = ref(Number(e.size || 36)), t = ref(e.zIndex || 1e3);
  return { sizeToken: a, zIndexToken: t };
};
var Ae = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function Ne(s, n) {
  return openBlock(), createElementBlock("svg", Ae, n[0] || (n[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var Re = { render: Ne };
var De = ["tabindex", "type", "disabled"];
var Oe = defineComponent({
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
    const e = s, a = n, t = z("button"), { sizeToken: i } = U(), o = computed(() => [
      t.b(),
      e.color && t.m(e.color),
      e.shape && t.m(e.shape),
      e.variant && t.m(e.variant),
      t.is("disabled", e.disabled),
      t.is("loading", e.loading)
    ].filter(Boolean)), f = computed(() => {
      let r = +(e.size || i.value || 36);
      return {
        "--im-button-size": r + "px",
        "--im-button-padding": (r * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), m = computed(() => e.loading && ["square", "circle"].includes(e.shape)), d = () => {
      e.disabled || e.loading || a("click");
    };
    return (r, c) => {
      const g = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(o.value),
        onClick: d,
        style: normalizeStyle(f.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(t).e("loading")])
        }, [
          createVNode(unref(Re))
        ], 2)) : createCommentVNode("", true),
        m.value ? createCommentVNode("", true) : renderSlot(r.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, De)), [
        [g, true]
      ]);
    };
  }
});
var L = (s, n) => {
  const e = s.__vccOpts || s;
  for (const [a, t] of n)
    e[a] = t;
  return e;
};
var re = L(Oe, [["__scopeId", "data-v-fe80f42d"]]);
re.install = (s) => {
  s.component("ImButton", re);
};
var Ye = defineComponent({
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
    const n = s, e = useSlots(), a = computed(() => {
      var i;
      return ((i = e.default) == null ? void 0 : i.call(e)) || [];
    }), t = z("row");
    return (i, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()]),
      style: normalizeStyle({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (f, m) => (openBlock(), createBlock(resolveDynamicComponent(f), { key: m }))), 128))
    ], 6));
  }
});
var ie = L(Ye, [["__scopeId", "data-v-5179967f"]]);
var He = defineComponent({
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
    const n = s, e = z("col"), a = computed(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (t, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-col-w": a.value,
        "--im-col-offset": n.offset
      })
    }, [
      renderSlot(t.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var ce = L(He, [["__scopeId", "data-v-ecf91058"]]);
ie.install = (s) => {
  s.component("ImRow", ie);
};
ce.install = (s) => {
  s.component("ImCol", ce);
};
var qe = defineComponent({
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
    const e = s, { sizeToken: a } = U(), t = n, i = ref(e.modelValue), o = z("input"), f = () => {
      t("update:modelValue", i.value), t("change", i.value);
    };
    return (m, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(o).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(a) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(o).e("input")],
        "onUpdate:modelValue": d[0] || (d[0] = (r) => i.value = r)
      }, e, { onInput: f }), null, 16), [
        [vModelDynamic, i.value]
      ])
    ], 6));
  }
});
var ue = L(qe, [["__scopeId", "data-v-6c70856c"]]);
ue.install = (s) => {
  s.component("ImInput", ue);
};
var Fe = defineComponent({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(s) {
    const n = s;
    return (e, a) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(["im-icon", [`im-icon-${n.name}`]]),
      style: normalizeStyle({
        "--icon-size": (parseInt(String(n.size)) || 16) + "px",
        "--icon-color": n.color
      })
    }, null, 6));
  }
});
var H = L(Fe, [["__scopeId", "data-v-1e711363"]]);
H.install = function(s) {
  s.component("ImIcon", H);
};
var Xe = defineComponent({
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
    const n = z("divider"), e = s;
    return (a, t) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(n).b(), unref(n).is("vertical", e.vertical)]),
      style: normalizeStyle({
        "--im-divider-color": e.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${e.margin || 8}px`,
        "--im-divider-size": `${e.size || 1}px`,
        "--im-divider-text-left-width": e.textLeftWidth ? e.textLeftWidth : "100%",
        "--im-divider-text-right-width": e.textRightWidth ? e.textRightWidth : "100%"
      })
    }, [
      e.vertical ? createCommentVNode("", true) : (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass([unref(n).e("text")])
      }, [
        renderSlot(a.$slots, "default", {}, void 0, true)
      ], 2))
    ], 6));
  }
});
var ae = L(Xe, [["__scopeId", "data-v-108f9bec"]]);
ae.name = "ImDivider";
ae.install = function(s) {
  s.component("ImDivider", ae);
};
var O = (s, n) => (n.install = (e) => {
  e.component(s, n);
}, n);
var fe = (s, n) => {
  let e;
  return function(...a) {
    e || (e = setTimeout(() => {
      s.apply(this, a), e = null;
    }, n));
  };
};
var se = (s, n) => {
  let e;
  return function(...a) {
    e && clearTimeout(e), e = setTimeout(() => {
      s.apply(this, a);
    }, n);
  };
};
var be = (s, n, e) => {
  if (!e) return false;
  const a = e.getBoundingClientRect();
  return s >= a.left && s <= a.left + a.width && n >= a.top && n <= a.top + a.height;
};
var We = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"];
var Ie = (s) => {
  if (typeof s == "number") return `${s}px`;
  const n = String(s);
  return s ? We.some((e) => n.includes(e)) ? n : `${s}px` : "";
};
var Ue = ["onClick"];
var je = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(s) {
    const n = z("anchor");
    let e = null;
    const a = ref(null), t = ref(null), i = ref(null), o = s;
    watch(
      () => o.target,
      () => {
        e && e(), e = d();
      }
    ), onMounted(() => {
      e = d();
    }), onUnmounted(() => {
      e && e();
    });
    function f(c) {
      let g = c == null ? void 0 : c.scrollTop;
      return a.value === window && (g = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), g;
    }
    function m(c) {
      var Y;
      if (i.value || !a.value) return;
      const g = a.value === window ? c.target : a.value;
      let y = f(g);
      const b = g.offsetTop || 0, N = (o.data || []).map(({ id: C }) => {
        const E = document.getElementById(C);
        return E ? {
          id: C,
          offsetTop: E.offsetTop - b,
          el: E
        } : null;
      }).filter(Boolean);
      t.value = null;
      for (let C = 0; C < N.length; C++) {
        const E = N[C];
        if (y >= E.offsetTop - (o.offset || 0) && y <= E.offsetTop + (((Y = E.el) == null ? void 0 : Y.clientHeight) || 0) - (o.offset || 0)) {
          t.value = E.id;
          return;
        }
      }
      if (!t.value && y >= (parseInt(String(o.offset)) || 0)) {
        const C = N.find((E) => y <= E.offsetTop - (o.offset || 0) && y > (o.offset || 0) ? (t.value = E.id, true) : false);
        C && (t.value = C.id);
      }
    }
    function d() {
      const c = o.target ? typeof o.target == "string" ? document.querySelector(o.target) : o.target : window;
      if (!c)
        return null;
      a.value = c;
      const g = fe(m, 50);
      return m({ target: c }), c.addEventListener("scroll", g, { passive: true }), () => {
        c.removeEventListener("scroll", g);
      };
    }
    async function r(c) {
      var b, N, Y;
      if (t.value === c || !c) return;
      i.value = c, t.value = c;
      const g = document.getElementById(c);
      if (!g) return;
      (N = a.value) == null || N.scrollTo({
        // @ts-ignore
        top: g.offsetTop - (o.offset || 0) - (((b = a.value) == null ? void 0 : b.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const y = se(() => {
        var C;
        i.value = null, (C = a.value) == null || C.removeEventListener("scroll", y);
      }, 300);
      (Y = a.value) == null || Y.addEventListener("scroll", y, { passive: true });
    }
    return (c, g) => {
      const y = resolveDirective("ripple");
      return o.data && o.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(n).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(o.data, (b) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(n).e("item"), unref(n).is("active", t.value === b.id)]),
          onClick: () => r(b.id)
        }, [
          t.value === b.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(n).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(b.text), 1)
        ], 10, Ue)), [
          [y, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Ge = L(je, [["__scopeId", "data-v-4840d244"]]);
var Je = O("ImAnchor", Ge);
var Ke = defineComponent({
  name: "ImAlert",
  __name: "ImAlert",
  props: {
    message: { default: "" },
    color: { default: "primary" },
    variant: {},
    title: { default: "" },
    showIcon: { type: Boolean, default: true },
    closable: { type: Boolean, default: false }
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const e = n, a = ref(null), t = s, i = z("alert"), o = useSlots(), f = computed(() => !!(t.showIcon && t.title)), m = computed(() => {
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
    }), d = async () => {
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
      }), await new Promise((g) => setTimeout(g, 300)), (c = a.value) == null || c.remove();
    };
    return (r, c) => {
      const g = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: a,
        class: normalizeClass([unref(i).b(), unref(i).m(t.color || "primary"), t.variant && unref(i).m(t.variant || "")])
      }, [
        t.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(i).e("icon")])
        }, [
          renderSlot(r.$slots, "icon", {}, () => [
            createVNode(unref(H), {
              name: m.value,
              size: f.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(i).e("content")])
        }, [
          t.title || unref(o).title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(i).e("title")])
          }, [
            renderSlot(r.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(t.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(i).e("message")])
          }, [
            renderSlot(r.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(t.message), 1)
            ], true)
          ], 2)
        ], 2),
        t.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(i).e("close")]),
          onClick: d
        }, [
          renderSlot(r.$slots, "close", {}, () => [
            createVNode(unref(H), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [g, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var Qe = L(Ke, [["__scopeId", "data-v-d11fdcb2"]]);
var Ze = O("ImAlert", Qe);
var et = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = useSlots(), a = n, t = z("breadcrumb"), i = s, o = computed(
      () => {
        var m, d;
        return (d = (m = e.default) == null ? void 0 : m.call(e)) == null ? void 0 : d.filter((r) => {
          var c;
          return (r == null ? void 0 : r.type) && ((c = r == null ? void 0 : r.type) == null ? void 0 : c.name) === "ImBreadcrumbItem";
        });
      }
    ), f = (m) => {
      m && i.modelValue !== m && (a("update:modelValue", m), a("change", m));
    };
    return (m, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (r, c) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(r), {
          active: i.modelValue,
          onClick: f
        }, null, 8, ["active"])),
        o.value && o.value.length > 0 && c < o.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(t).e("separator")])
        }, [
          renderSlot(m.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(i.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var tt = L(et, [["__scopeId", "data-v-64336468"]]);
var nt = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = z("breadcrumb__item"), a = s, t = n;
    return (i, o) => (openBlock(), createElementBlock("div", {
      onClick: o[0] || (o[0] = () => t("click", a.value)),
      class: normalizeClass([unref(e).b(), unref(e).is("active", a.active === a.value && !!a.value)])
    }, [
      renderSlot(i.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var st = L(nt, [["__scopeId", "data-v-40ed04b1"]]);
var at = O("ImBreadcrumb", tt);
var ot = O("ImBreadcrumb", st);
var lt = (s = 50) => {
  const n = ref(0), e = ref(0), a = fe((t) => {
    n.value = t.clientX, e.value = t.clientY;
  }, s);
  return onMounted(() => {
    window.addEventListener("mousemove", a, { passive: true });
  }), onUnmounted(() => {
    window.removeEventListener("mousemove", a);
  }), { x: n, y: e };
};
var rt = (s, n, e, a = "bottomLeft") => {
  watch(
    () => s.value,
    () => {
      s.value && t();
    }
  );
  async function t() {
    var g;
    await new Promise((y) => requestAnimationFrame(y));
    const i = n == null ? void 0 : n.value, o = e == null ? void 0 : e.value;
    if (!i || !o) return;
    const m = (((g = i.children) == null ? void 0 : g.length) != 1 ? i : i.children[0]).getBoundingClientRect(), d = m.bottom, r = o.getBoundingClientRect(), c = 2;
    switch (a) {
      case "bottom":
        o.style.setProperty("top", `${d + c}px`), o.style.setProperty(
          "left",
          `${m.left + m.width / 2 - r.width / 2}px`
        );
        break;
      case "bottomRight":
        o.style.setProperty("top", `${d + c}px`), o.style.setProperty(
          "left",
          `${m.left + m.width - r.width}px`
        );
        break;
      case "top":
        o.style.setProperty(
          "top",
          `${m.top - r.height - c}px`
        ), o.style.setProperty(
          "left",
          `${m.left + m.width / 2 - r.width / 2}px`
        );
        break;
      case "topRight":
        o.style.setProperty(
          "top",
          `${m.top - r.height - c}px`
        ), o.style.setProperty(
          "left",
          `${m.right - r.width}px`
        );
        break;
      case "topLeft":
        o.style.setProperty(
          "top",
          `${m.top - r.height - c}px`
        ), o.style.setProperty("left", `${m.left}px`);
        break;
      default:
        o.style.setProperty("top", `${d + c}px`), o.style.setProperty("left", `${m.left}px`);
        break;
    }
  }
};
var it = (s) => {
  const n = s.toLowerCase().includes("bottom") ? "translateY(-10px)" : "translateY(10px)";
  function e(t, i) {
    t.style.transform = n, t.style.opacity = "0", t.style.pointerEvents = "none", t.getBoundingClientRect(), t.style.transform = "translateY(0px)", t.style.opacity = "1", t.style.pointerEvents = "auto", i();
  }
  async function a(t, i) {
    t.style.transform = n, t.style.opacity = "0", t.getBoundingClientRect(), t.style.pointerEvents = "none";
    const o = () => {
      i(), t && (t.style.transform = "translateY(0px)", t.style.pointerEvents = "auto"), t.removeEventListener("transitionend", o);
    };
    t.addEventListener("transitionend", o, { passive: true });
  }
  return {
    onEnter: e,
    onLeave: a
  };
};
var ct = defineComponent({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: false },
    trigger: { default: "hover" },
    placement: { default: "bottomLeft" },
    zIndex: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    var u;
    const e = n, a = z("dropdown"), t = s, i = ref(null), o = ref(null), f = ref(t.modelValue || false), m = it((u = t.placement) != null && u.includes("top") ? "top" : "bottom");
    let d = null, r = 60;
    const { x: c, y: g } = lt(30), { zIndexToken: y } = U();
    rt(f, i, o, t.placement), onMounted(() => {
      d && d(), d = E();
    }), onUnmounted(() => {
      d && d();
    }), watch(() => t.trigger, () => {
      d && d(), d = E();
    });
    const b = fe(() => {
      const I = be(c.value, g.value, o.value);
      be(c.value, g.value, i.value) || I || (f.value = false);
    }, r);
    watch(() => [c.value, g.value], () => {
      t.trigger != "hover" || !f.value || b();
    });
    function N() {
      f.value = true, e("update:modelValue", f.value), e("change", f.value), window.addEventListener("scroll", C, { passive: true, capture: true });
    }
    function Y() {
      f.value = false, e("update:modelValue", f.value), e("change", f.value), window.removeEventListener("scroll", C);
    }
    function C(I) {
      var _;
      (_ = o.value) != null && _.contains(I.target) || Y();
    }
    function E() {
      var _, w;
      d && d();
      const I = se((V) => {
        var M;
        (M = i.value) != null && M.contains(V.target) || Y();
      }, r);
      if (document.addEventListener("click", I, { passive: true }), t.trigger === "hover") {
        const V = se(N, r);
        return (_ = i.value) == null || _.addEventListener("mouseenter", V, { passive: true }), () => {
          var M;
          (M = i.value) == null || M.removeEventListener("mouseenter", V), document.removeEventListener("click", I);
        };
      }
      if (t.trigger === "click") {
        const V = se(() => {
          f.value ? Y() : N();
        }, r);
        return (w = i.value) == null || w.addEventListener("click", V, { passive: true }), () => {
          var M;
          (M = i.value) == null || M.removeEventListener("click", V), document.removeEventListener("click", I);
        };
      }
      return null;
    }
    return (I, _) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(a).b()]),
      ref_key: "dropdownRef",
      ref: i
    }, [
      renderSlot(I.$slots, "default", {}, void 0, true),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          onEnter: unref(m).onEnter,
          onLeave: unref(m).onLeave,
          duration: { enter: 200, leave: 200 }
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(a).e("content")]),
              ref_key: "contentRef",
              ref: o,
              style: normalizeStyle({
                zIndex: t.zIndex || unref(y)
              })
            }, [
              renderSlot(I.$slots, "content", {}, void 0, true)
            ], 6), [
              [vShow, f.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
});
var ut = L(ct, [["__scopeId", "data-v-f75be340"]]);
var dt = O("ImDropdown", ut);
var mt = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = s, a = useSlots(), t = z("list"), i = computed(() => {
      var d;
      const m = ((d = a.default) == null ? void 0 : d.call(a)) || [];
      if (m.length) {
        const r = [];
        return m.forEach((c) => {
          var g, y;
          typeof c.type == "object" ? r.push(c) : c.children && ((g = c.children) != null && g.length) && ((y = c.children) == null || y.forEach((b) => {
            typeof (b == null ? void 0 : b.type) == "object" && r.push(b);
          }));
        }), r;
      }
    }), o = n, f = (m) => {
      o("update:modelValue", m.value), o("change", m.value);
    };
    return (m, d) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(t).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (r) => (openBlock(), createBlock(resolveDynamicComponent(r), {
        active: e.modelValue,
        onClick: () => f(r.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var pt = L(mt, [["__scopeId", "data-v-9599f63c"]]);
var ft = defineComponent({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: false },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: true }
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = z("list__item"), a = n, t = s;
    return (i, o) => {
      const f = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(e).b(), unref(e).is("active", !!(t.active && t.active === t.value))]),
        onClick: o[0] || (o[0] = (m) => a("click", m))
      }, [
        renderSlot(i.$slots, "default", {}, void 0, true)
      ], 2)), [
        [f, t.ripple]
      ]);
    };
  }
});
var vt = L(ft, [["__scopeId", "data-v-41ec0ba7"]]);
var gt = O("ImList", pt);
var ht = O("ImListItem", vt);
var yt = ["src", "srcset", "alt", "loading"];
var _t = defineComponent({
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
    const e = n, a = z("avatar"), t = s, i = (o) => {
      console.log(o.target), e("error", o);
    };
    return (o, f) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(a).b(), t.shape ? unref(a).m(t.shape) : ""]),
      style: normalizeStyle({
        "--im-avatar-size": (Number(t.size) || 36) + "px",
        "--im-avatar-color": t.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": t.fit
      })
    }, [
      !t.src && !t.srcset ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(a).e("icon")])
      }, [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ], 2)) : (openBlock(), createElementBlock("img", {
        key: 1,
        onError: i,
        src: t.src,
        srcset: t.srcset,
        alt: t.alt,
        loading: t.loading,
        class: normalizeClass([unref(a).e("img")])
      }, null, 42, yt))
    ], 6));
  }
});
var bt = L(_t, [["__scopeId", "data-v-c4c32038"]]);
var It = O("ImAvatar", bt);
var wt = () => ({
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
});
var kt = (s = "right") => {
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
      a.addEventListener("transitionend", i, { passive: true });
    }
  };
};
var xt = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const e = z("mask"), { zIndexToken: a } = U(), t = s, i = wt(), o = n, f = () => {
      t.closeOnClickMask && o("close", false);
    };
    return (m, d) => (openBlock(), createBlock(Transition, {
      onEnter: unref(i).onEnter,
      onLeave: unref(i).onLeave
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(e).b()]),
          style: normalizeStyle({
            zIndex: t.zIndex || unref(a)
          }),
          onClick: f
        }, [
          renderSlot(m.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, t.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
});
var Lt = L(xt, [["__scopeId", "data-v-2ba470f4"]]);
var ve = O("ImMask", Lt);
var $t = ["aria-modal"];
var zt = defineComponent({
  name: "ImDrawer",
  __name: "ImDrawer",
  props: {
    modelValue: { type: Boolean, default: false },
    mask: { type: Boolean, default: true },
    closeOnClickMask: { type: Boolean, default: true },
    placement: { default: "right" },
    size: { default: 378 },
    zIndex: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const e = z("drawer"), a = n, t = s, i = ref(null), o = kt(t.placement), { zIndexToken: f } = U(), m = () => {
      a("update:modelValue", false);
    };
    return (d, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: i,
        class: normalizeClass([unref(e).b(), t.placement ? unref(e).m(t.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": (parseInt(String(t.size)) || 378) + "px", zIndex: t.zIndex || unref(f) }),
        "aria-modal": t.modelValue
      }, [
        t.mask ? (openBlock(), createBlock(unref(ve), {
          key: 0,
          visible: t.modelValue,
          closeOnClickMask: t.closeOnClickMask,
          onClose: m,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: unref(o).onEnter,
          onLeave: unref(o).onLeave
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(e).e("content")])
            }, [
              renderSlot(d.$slots, "default", {}, void 0, true)
            ], 2), [
              [vShow, t.modelValue]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ], 14, $t)
    ]));
  }
});
var Ct = L(zt, [["__scopeId", "data-v-1b0178a0"]]);
var Et = O("ImDrawer", Ct);
var Bt = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(s) {
    const n = z("card"), e = s;
    return (a, t) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(n).b(), unref(n).is("borderless", e.borderless), e.shadow ? unref(n).m(e.shadow) : ""])
    }, [
      renderSlot(a.$slots, "header", {}, () => [
        e.title || a.$slots["header-action"] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(n).e("header")])
        }, [
          createBaseVNode("span", {
            class: normalizeClass([unref(n).e("title")])
          }, toDisplayString(e.title), 3),
          renderSlot(a.$slots, "header-action", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ], true),
      createBaseVNode("div", {
        class: normalizeClass([unref(n).e("body")])
      }, [
        renderSlot(a.$slots, "default", {}, void 0, true)
      ], 2)
    ], 2));
  }
});
var Tt = L(Bt, [["__scopeId", "data-v-bb9cd52c"]]);
var Pt = O("ImCard", Tt);
var Vt = ["data-index", "onMouseenter", "onMouseleave"];
var St = { class: "im-message__text" };
var Mt = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(s, { expose: n }) {
    const e = z("message"), a = s, t = ref([]);
    let i = null;
    watch(() => t.value, () => {
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
    }, m = (r) => {
      r.timer && clearTimeout(r.timer), r.timer = setTimeout(() => {
        t.value = t.value.filter((c) => c.id !== r.id);
      }, r.duration || 3e3);
    }, d = (r) => {
      const c = setTimeout(() => {
        t.value = t.value.filter((g) => g.id !== r.id);
      }, r.duration || 3e3);
      t.value.push({ ...r, timer: c });
    };
    return a.add && a.add(d), n({ addMsg: d }), (r, c) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(e).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.value, (g) => (openBlock(), createElementBlock("li", {
          key: g.id,
          "data-index": g.id,
          onMouseenter: () => f(g),
          onMouseleave: () => m(g),
          class: normalizeClass(["im-message__item", [unref(e).e("item"), g.color ? unref(e).e(g.color) : ""]])
        }, [
          createVNode(unref(H), {
            name: o(g.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", St, toDisplayString(g.msg), 1)
        ], 42, Vt))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var At = L(Mt, [["__scopeId", "data-v-820c83a9"]]);
var Nt = class {
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
      this.app = createApp(At, {
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
};
var R = null;
var nn = () => (R || (R = new Nt()), {
  info: (s, n = 3e3) => {
    R == null || R.info(s, n);
  },
  success: (s, n = 3e3) => {
    R == null || R.success(s, n);
  },
  warning: (s, n = 3e3) => {
    R == null || R.warning(s, n);
  },
  error: (s, n = 3e3) => {
    R == null || R.error(s, n);
  }
});
var Rt = ["data-visible", "data-esc"];
var Dt = defineComponent({
  name: "ImDialog",
  __name: "ImDialog",
  props: {
    modelValue: { type: Boolean, default: false },
    closeOnClickMask: { type: Boolean, default: true },
    width: { default: "420px" },
    height: { default: "auto" },
    fullscreen: { type: Boolean, default: false },
    closeOnEscape: { type: Boolean, default: true },
    mask: { type: Boolean, default: true },
    zIndex: { default: 1e3 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const e = z("dialog"), a = n, t = s, i = ref(null), { zIndexToken: o } = U();
    watch(
      () => t.modelValue,
      (r) => {
        r ? t.closeOnEscape && window.addEventListener("keydown", f, { passive: true }) : window.removeEventListener("keydown", f);
      }
    );
    function f(r) {
      if (r.key === "Escape" || r.code === "Escape") {
        const c = document.querySelectorAll(
          '.im-dialog[data-visible="true"][data-esc="true"]'
        );
        c.length && i.value && Array.from(c).pop() === i.value && a("update:modelValue", false);
      }
    }
    const m = async (r, c) => {
      r.style.setProperty("opacity", "0"), r.style.setProperty("transition", "all 0.2s ease"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.getBoundingClientRect(), r.style.setProperty("opacity", "1"), r.style.setProperty("transform", "translateY(0) scale(1)"), c(), !document.body.classList.contains("im-overflow-hidden") && document.body.classList.add("im-overflow-hidden");
    }, d = async (r, c) => {
      r.style.setProperty("opacity", "0"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.style.setProperty("transition", "all 0.2s ease");
      const g = () => {
        c(), Array.from(
          document.body.querySelectorAll('.im-dialog[data-visible="true"]')
        ).length || document.body.classList.remove("im-overflow-hidden"), r.removeEventListener("transitionend", g);
      };
      r.addEventListener("transitionend", g, { passive: true });
    };
    return (r, c) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        "aria-modal": "true",
        class: normalizeClass([unref(e).b()]),
        tabindex: "-1",
        "data-visible": t.modelValue,
        "data-esc": t.closeOnEscape,
        ref_key: "dialogRef",
        ref: i,
        style: normalizeStyle({
          zIndex: t.zIndex || unref(o)
        })
      }, [
        t.mask && !t.fullscreen ? (openBlock(), createBlock(unref(ve), {
          key: 0,
          closeOnClickMask: t.closeOnClickMask,
          visible: t.modelValue,
          onClose: c[0] || (c[0] = () => a("update:modelValue", false))
        }, null, 8, ["closeOnClickMask", "visible"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: m,
          duration: { enter: 200, leave: 200 },
          onLeave: d
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([
                unref(e).e("content"),
                unref(e).is("fullscreen", t.fullscreen),
                "im-shadow"
              ]),
              style: normalizeStyle({
                maxWidth: t.width,
                width: t.width,
                height: t.height
              })
            }, [
              renderSlot(r.$slots, "default", {}, void 0, true)
            ], 6), [
              [vShow, t.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, Rt)
    ]));
  }
});
var Ot = L(Dt, [["__scopeId", "data-v-8ba4a4fb"]]);
var Yt = O("ImDialog", Ot);
var Ht = ["value"];
var qt = ["onClick"];
var Ft = defineComponent({
  name: "ImSelect",
  __name: "ImSelect",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    width: { default: "" },
    size: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const e = z("select"), a = n, t = s, { sizeToken: i } = U(), o = ref(false), f = reactive({
      minWidth: "",
      top: "",
      left: ""
    }), m = ref(null), d = ref(null), r = ref(null);
    let c = null;
    const g = computed(() => Ie(t.width)), y = computed(() => Ie(t.size || i.value || "36px")), b = computed(() => {
      var u;
      return ((u = t.options.find((I) => I.value === t.modelValue)) == null ? void 0 : u.label) || "";
    });
    function N(u) {
      var I, _;
      (I = d.value) != null && I.contains(u.target) || (_ = r.value) == null || _.blur();
    }
    async function Y() {
      var V, M;
      const u = (V = m.value) == null ? void 0 : V.getBoundingClientRect(), I = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      f.top = `${u == null ? void 0 : u.bottom}px`, f.minWidth = `${u == null ? void 0 : u.width}px`, f.left = `${u == null ? void 0 : u.left}px`, o.value = true, c && clearTimeout(c), c = null, window.addEventListener("scroll", N, { passive: true, capture: true });
      const _ = (M = d.value) == null ? void 0 : M.querySelector(`.${e.is("active", true)}`);
      await new Promise((xe) => requestAnimationFrame(xe)), console.log(u == null ? void 0 : u.bottom, d.value.offsetHeight);
      const w = d.value.offsetHeight;
      (u == null ? void 0 : u.bottom) + w > I && (f.top = `${I - w}px`), _ && _.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    function C() {
      c && clearTimeout(c), c = setTimeout(() => {
        o.value = false, window.removeEventListener("scroll", N), c = null;
      }, 150);
    }
    function E(u) {
      a("update:modelValue", u);
    }
    return (u, I) => {
      const _ = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(e).b()]),
        style: normalizeStyle({
          "--im-select-width": g.value,
          "--im-select-height": y.value
        })
      }, [
        createBaseVNode("label", {
          class: normalizeClass([unref(e).e("trigger")]),
          ref_key: "triggerRef",
          ref: m
        }, [
          createBaseVNode("input", {
            class: normalizeClass([unref(e).e("input")]),
            ref_key: "inputRef",
            ref: r,
            value: b.value,
            readonly: "",
            type: "text",
            placeholder: "请选择",
            onFocus: Y,
            onBlur: C
          }, null, 42, Ht),
          createBaseVNode("div", {
            class: normalizeClass([unref(e).e("icon")])
          }, [
            renderSlot(u.$slots, "rightIcon", {}, () => [
              createVNode(unref(H), {
                name: "down",
                size: "12"
              })
            ], true)
          ], 2)
        ], 2),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "select" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("ul", {
                class: normalizeClass([unref(e).e("list"), "im-shadow"]),
                style: normalizeStyle(f),
                ref_key: "listRef",
                ref: d
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(t.options, (w, V) => withDirectives((openBlock(), createElementBlock("li", {
                  onClick: () => E(w.value),
                  class: normalizeClass([unref(e).e("option"), unref(e).is("active", w.value === t.modelValue)]),
                  key: w.value || V
                }, [
                  createTextVNode(toDisplayString(w.label || w.value), 1)
                ], 10, qt)), [
                  [_, true]
                ])), 128))
              ], 6), [
                [vShow, o.value]
              ])
            ]),
            _: 1
          })
        ]))
      ], 6);
    };
  }
});
var Xt = L(Ft, [["__scopeId", "data-v-7c6e702b"]]);
var ke = O("ImSelect", Xt);
var Wt = ["aria-disabled"];
var Ut = ["onClick", "title"];
var jt = ["aria-disabled"];
var Gt = defineComponent({
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
    const e = z("pagination"), a = n, t = s, i = ref(t.pageSize), o = ref([1]), { sizeToken: f } = U(), m = computed(() => parseInt(String(t.size || f.value || 36)) + "px"), d = computed(() => Math.ceil(t.total / (i.value || 10))), r = computed(() => t.pageNumber === 1), c = computed(() => t.pageNumber >= d.value), g = computed(() => t.pageSizeItems.map((u) => ({ label: `${u} 条/页`, value: u })));
    watch(() => i.value, (u) => {
      d.value < t.pageNumber ? a("change", { pageSize: u, pageNumber: d.value }) : a("change", { pageSize: u, pageNumber: t.pageNumber });
    }), watch(() => [t.pageNumber, t.pageSize], () => {
      i.value = t.pageSize, b(t.pageNumber);
    }, { immediate: true });
    function y(u) {
      t.pageNumber !== u && a("change", { pageNumber: u, pageSize: t.pageSize });
    }
    function b(u) {
      if (d.value <= 1)
        o.value = [1];
      else {
        const I = Math.ceil(u / 5), _ = [];
        let w = I * 5 - 4;
        for (let V = 0; V < 5; V++) {
          let M = w + V;
          if (M > d.value)
            break;
          _.push(M);
        }
        u - 5 >= 1 && (_.unshift("left"), _.unshift(1)), u + 5 <= d.value && (_.push("right"), _.push(d.value)), o.value = _, y(u);
      }
    }
    function N() {
      const u = t.pageNumber + 1;
      if (u > d.value) return y(t.pageNumber);
      if (o.value.includes(u))
        return y(u);
      b(u);
    }
    function Y() {
      const u = t.pageNumber - 1;
      if (u < 1) return y(t.pageNumber);
      if (o.value.includes(u))
        return y(u);
      b(u);
    }
    function C() {
      const u = t.pageNumber + 5;
      if (u > d.value) return y(d.value);
      b(u);
    }
    function E() {
      const u = t.pageNumber - 5;
      if (u < 1) return y(1);
      b(u);
    }
    return (u, I) => {
      const _ = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(e).b()]),
        style: normalizeStyle({
          "--im-pagination-size": m.value
        })
      }, [
        u.layout.includes("total") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(e).e("total")])
        }, "共 " + toDisplayString(u.total) + " 条数据", 3)) : createCommentVNode("", true),
        u.layout.includes("prev") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(e).e("prev"), unref(e).is("disabled", r.value)]),
          "aria-disabled": r.value,
          onClick: Y
        }, [
          createVNode(unref(H), {
            name: "left",
            size: "14px"
          })
        ], 10, Wt)), [
          [_, !r.value]
        ]) : createCommentVNode("", true),
        u.layout.includes("pager") ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(e).e("pager")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (w) => (openBlock(), createElementBlock(Fragment, null, [
            w === "left" ? (openBlock(), createElementBlock("div", {
              key: 0,
              title: "向前5页",
              class: normalizeClass([unref(e).e("page-item"), unref(e).e("left")]),
              onClick: E
            }, [
              createVNode(unref(H), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(H), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : w !== "right" ? withDirectives((openBlock(), createElementBlock("div", {
              key: 1,
              onClick: () => y(w),
              class: normalizeClass([unref(e).e("page-item"), unref(e).is("active", w === t.pageNumber)]),
              title: String(w)
            }, [
              createTextVNode(toDisplayString(w), 1)
            ], 10, Ut)), [
              [_, true]
            ]) : w === "right" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass([unref(e).e("page-item"), unref(e).e("right")]),
              title: "向后5页",
              onClick: C
            }, [
              createVNode(unref(H), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(H), {
                name: "arrowright",
                class: "im-icon--arrowright"
              })
            ], 2)) : createCommentVNode("", true)
          ], 64))), 256))
        ], 2)) : createCommentVNode("", true),
        u.layout.includes("next") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(e).e("next"), unref(e).is("disabled", c.value)]),
          "aria-disabled": c.value,
          onClick: N
        }, [
          createVNode(unref(H), {
            name: "right",
            size: "14px"
          })
        ], 10, jt)), [
          [_, !c.value]
        ]) : createCommentVNode("", true),
        u.layout.includes("sizes") ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass([unref(e).e("size")])
        }, [
          createVNode(unref(ke), {
            options: g.value,
            modelValue: i.value,
            "onUpdate:modelValue": I[0] || (I[0] = (w) => i.value = w),
            size: t.size
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var Jt = L(Gt, [["__scopeId", "data-v-63b4320b"]]);
var Kt = O("ImPagination", Jt);
var Qt = [
  re,
  ce,
  ie,
  ue,
  H,
  ae,
  Je,
  Ze,
  at,
  ot,
  dt,
  gt,
  ht,
  It,
  ve,
  Et,
  Pt,
  Yt,
  Kt,
  ke
];
var Zt = (s, n) => {
  s.provide(we, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), s.directive("ripple", Me), Qt.forEach((e) => {
    e.name ? s.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var sn = {
  install: Zt
};
export {
  Ze as ImAlert,
  Je as ImAnchor,
  It as ImAvatar,
  at as ImBreadcrumb,
  ot as ImBreadcrumbItem,
  re as ImButton,
  Pt as ImCard,
  ce as ImCol,
  Yt as ImDialog,
  ae as ImDivider,
  Et as ImDrawer,
  dt as ImDropdown,
  H as ImIcon,
  ue as ImInput,
  gt as ImList,
  ht as ImListItem,
  ve as ImMask,
  Kt as ImPagination,
  ie as ImRow,
  ke as ImSelect,
  sn as default,
  nn as useImMessage
};
//# sourceMappingURL=im-design.js.map
