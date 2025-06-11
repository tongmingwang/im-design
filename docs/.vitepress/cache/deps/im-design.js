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
  withDirectives,
  withModifiers
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.40/node_modules/im-design/dist/im-design.js
var Re = Object.defineProperty;
var xe = (n) => {
  throw TypeError(n);
};
var Pe = (n, a, e) => a in n ? Re(n, a, { enumerable: true, configurable: true, writable: true, value: e }) : n[a] = e;
var ne = (n, a, e) => Pe(n, typeof a != "symbol" ? a + "" : a, e);
var ze = (n, a, e) => a.has(n) || xe("Cannot " + e);
var se = (n, a, e) => (ze(n, a, "read from private field"), e ? e.call(n) : a.get(n));
var $e = (n, a, e) => a.has(n) ? xe("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(n) : a.set(n, e);
var Ce = (n, a, e, s) => (ze(n, a, "write to private field"), s ? s.call(n, e) : a.set(n, e), e);
var Ee = Symbol("im-design-token");
var Z;
var qe = class {
  constructor() {
    $e(this, Z);
    Ce(this, Z, []);
  }
  async add(a) {
    se(this, Z).push(a);
  }
  remove() {
    try {
      const a = se(this, Z).shift();
      a && this.run(a);
    } catch (a) {
      console.error(a);
    }
  }
  async run(a) {
    try {
      const e = a.querySelector(".im-ripple__item");
      if (!e) return;
      let s = Date.now(), t = e.getAttribute("data-time");
      const l = s - Number(t) || 0;
      l && await new Promise((i) => {
        e.style.opacity = "0.1";
        const c = 200 - l;
        setTimeout(
          () => {
            i(null);
          },
          c > 0 ? c : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms", setTimeout(() => {
        a && (a == null || a.remove()), se(this, Z).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
Z = /* @__PURE__ */ new WeakMap();
async function Ue(n, a, e) {
  const s = window.getComputedStyle(e), t = e.getBoundingClientRect(), l = document.createElement("div");
  l.className = "im-ripple", a.add(l);
  const i = document.createElement("div");
  i.className = "im-ripple__item";
  const c = n.clientX || n.touches && n.touches[0].clientX, f = n.clientY || n.touches && n.touches[0].clientY, p = Math.max(t.width, t.height), d = c - t.left - p / 2, u = f - t.top - p / 2, r = t.width - t.height <= 5;
  Object.assign(i.style, {
    "background-color": s.color,
    width: `${p}px`,
    height: `${p}px`,
    left: `${d}px`,
    top: `${u}px`,
    opacity: "0.15",
    transform: r ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), i.setAttribute("data-time", Date.now() + ""), l.appendChild(i), e.appendChild(l);
  const b = s.position;
  b === "static" && (e.style.position = "relative", e.dataset.originalPosition = b), i.getBoundingClientRect(), i.style.transform = "scale(2.8)", i.style.opacity = "0.33";
}
var je = {
  mounted(n, a) {
    n.IM_RIPPLE_VALUE = a.value;
    const e = new qe(), s = (c) => {
      n.IM_RIPPLE_VALUE && Ue(c, e, n);
    }, t = () => {
      e.remove();
    }, l = () => {
      n.addEventListener("mousedown", s, { passive: true }), window.addEventListener("mouseup", t, { passive: true });
    }, i = () => {
      n.removeEventListener("mousedown", s), window.removeEventListener("mouseup", t);
    };
    l(), n._rippleListeners = { remove: i };
  },
  beforeUnmount(n) {
    var a;
    (a = n._rippleListeners) == null || a.remove();
  },
  updated(n, a) {
    n.IM_RIPPLE_VALUE = a.value;
  }
};
var V = (n) => {
  const a = "im-" + n;
  return {
    b: () => a,
    e: (e) => `${a}__${e}`,
    m: (e) => `${a}--${e}`,
    is: (e, s) => s ? `is-${e}` : ""
  };
};
var Q = (n, a) => {
  const e = inject(Ee), s = ref(Number(e.size || 36)), t = ref(e.zIndex || 1e3);
  return { sizeToken: s, zIndexToken: t };
};
var Ge = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function Je(n, a) {
  return openBlock(), createElementBlock("svg", Ge, a[0] || (a[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var Ke = { render: Je };
var Qe = ["tabindex", "type", "disabled"];
var Ze = defineComponent({
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
  setup(n, { expose: a, emit: e }) {
    const s = n, t = e, l = V("button"), { sizeToken: i } = Q(), c = computed(() => [
      l.b(),
      s.color && l.m(s.color),
      s.shape && l.m(s.shape),
      s.variant && l.m(s.variant),
      l.is("disabled", s.disabled),
      l.is("loading", s.loading)
    ].filter(Boolean)), f = ref(), p = computed(() => {
      let r = +(s.size || i.value || 36);
      return {
        "--im-button-size": r + "px",
        "--im-button-padding": (r * 0.45).toFixed(0) + "px",
        width: s.width
      };
    });
    a({ ref: f, focus: () => {
      var r;
      return (r = f.value) == null ? void 0 : r.focus();
    }, blur: () => {
      var r;
      return (r = f.value) == null ? void 0 : r.blur();
    } });
    const d = computed(() => s.loading && ["square", "circle"].includes(s.shape)), u = () => {
      s.disabled || s.loading || t("click");
    };
    return (r, b) => {
      const x = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(c.value),
        onClick: u,
        ref_key: "buttonRef",
        ref: f,
        style: normalizeStyle(p.value),
        tabindex: s.tabindex || 0,
        type: s.type || "button",
        disabled: s.disabled || s.loading
      }, [
        s.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(l).e("loading")])
        }, [
          createVNode(unref(Ke))
        ], 2)) : createCommentVNode("", true),
        d.value ? createCommentVNode("", true) : renderSlot(r.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(s.text), 1)
        ], true)
      ], 14, Qe)), [
        [x, true]
      ]);
    };
  }
});
var E = (n, a) => {
  const e = n.__vccOpts || n;
  for (const [s, t] of a)
    e[s] = t;
  return e;
};
var fe = E(Ze, [["__scopeId", "data-v-7cc6c600"]]);
fe.install = (n) => {
  n.component("ImButton", fe);
};
var et = defineComponent({
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
    const a = n, e = useSlots(), s = computed(() => {
      var l;
      return ((l = e.default) == null ? void 0 : l.call(e)) || [];
    }), t = V("row");
    return (l, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()]),
      style: normalizeStyle({
        "--im-row-gutter": a.gutter + "px",
        "align-items": a.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (c, f) => (openBlock(), createBlock(resolveDynamicComponent(c), { key: f }))), 128))
    ], 6));
  }
});
var ve = E(et, [["__scopeId", "data-v-5179967f"]]);
var tt = defineComponent({
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
    const a = n, e = V("col"), s = computed(
      () => +((Number(a.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (t, l) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-col-w": s.value,
        "--im-col-offset": a.offset
      })
    }, [
      renderSlot(t.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var ge = E(tt, [["__scopeId", "data-v-ecf91058"]]);
ve.install = (n) => {
  n.component("ImRow", ve);
};
ge.install = (n) => {
  n.component("ImCol", ge);
};
var at = defineComponent({
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
  setup(n, { emit: a }) {
    const e = n, { sizeToken: s } = Q(), t = a, l = ref(e.modelValue), i = V("input"), c = () => {
      t("update:modelValue", l.value), t("change", l.value);
    };
    return (f, p) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(i).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(s) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(i).e("input")],
        "onUpdate:modelValue": p[0] || (p[0] = (d) => l.value = d)
      }, e, { onInput: c }), null, 16), [
        [vModelDynamic, l.value]
      ])
    ], 6));
  }
});
var he = E(at, [["__scopeId", "data-v-6c70856c"]]);
he.install = (n) => {
  n.component("ImInput", he);
};
var we = (n, a) => {
  let e;
  return function(...s) {
    e || (e = setTimeout(() => {
      n.apply(this, s), e = null;
    }, a));
  };
};
var le = (n, a) => {
  let e;
  return function(...s) {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, s);
    }, a);
  };
};
var Te = (n, a, e) => {
  if (!e) return false;
  const s = e.getBoundingClientRect();
  return n >= s.left && n <= s.left + s.width && a >= s.top && a <= s.top + s.height;
};
var nt = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"];
var ie = (n) => {
  if (typeof n == "number") return `${n}px`;
  const a = String(n);
  return n ? nt.some((e) => a.includes(e)) ? a : `${n}px` : "";
};
var st = defineComponent({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    size: { default: 16 },
    name: {},
    color: { default: "currentColor" }
  },
  setup(n) {
    const a = n, e = computed(() => ie(a.size));
    return (s, t) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(["im-icon", [`im-icon-${a.name}`]]),
      style: normalizeStyle({
        "--icon-size": e.value,
        "--icon-color": a.color
      })
    }, null, 6));
  }
});
var R = E(st, [["__scopeId", "data-v-a82dfaa3"]]);
R.install = function(n) {
  n.component("ImIcon", R);
};
var ot = defineComponent({
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
    const a = V("divider"), e = n;
    return (s, t) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b(), unref(a).is("vertical", e.vertical)]),
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
        class: normalizeClass([unref(a).e("text")])
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2))
    ], 6));
  }
});
var re = E(ot, [["__scopeId", "data-v-108f9bec"]]);
re.name = "ImDivider";
re.install = function(n) {
  n.component("ImDivider", re);
};
var Y = (n, a) => (a.install = (e) => {
  e.component(n, a);
}, a);
var lt = ["onClick"];
var it = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(n) {
    const a = V("anchor");
    let e = null;
    const s = ref(null), t = ref(null), l = ref(null), i = n;
    watch(
      () => i.target,
      () => {
        e && e(), e = p();
      }
    ), onMounted(() => {
      e = p();
    }), onUnmounted(() => {
      e && e();
    });
    function c(u) {
      let r = u == null ? void 0 : u.scrollTop;
      return s.value === window && (r = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), r;
    }
    function f(u) {
      var W;
      if (l.value || !s.value) return;
      const r = s.value === window ? u.target : s.value;
      let b = c(r);
      const x = r.offsetTop || 0, D = (i.data || []).map(({ id: _ }) => {
        const g = document.getElementById(_);
        return g ? {
          id: _,
          offsetTop: g.offsetTop - x,
          el: g
        } : null;
      }).filter(Boolean);
      t.value = null;
      for (let _ = 0; _ < D.length; _++) {
        const g = D[_];
        if (b >= g.offsetTop - (i.offset || 0) && b <= g.offsetTop + (((W = g.el) == null ? void 0 : W.clientHeight) || 0) - (i.offset || 0)) {
          t.value = g.id;
          return;
        }
      }
      if (!t.value && b >= (parseInt(String(i.offset)) || 0)) {
        const _ = D.find((g) => b <= g.offsetTop - (i.offset || 0) && b > (i.offset || 0) ? (t.value = g.id, true) : false);
        _ && (t.value = _.id);
      }
    }
    function p() {
      const u = i.target ? typeof i.target == "string" ? document.querySelector(i.target) : i.target : window;
      if (!u)
        return null;
      s.value = u;
      const r = we(f, 50);
      return f({ target: u }), u.addEventListener("scroll", r, { passive: true }), () => {
        u.removeEventListener("scroll", r);
      };
    }
    async function d(u) {
      var x, D, W;
      if (t.value === u || !u) return;
      l.value = u, t.value = u;
      const r = document.getElementById(u);
      if (!r) return;
      (D = s.value) == null || D.scrollTo({
        // @ts-ignore
        top: r.offsetTop - (i.offset || 0) - (((x = s.value) == null ? void 0 : x.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const b = le(() => {
        var _;
        l.value = null, (_ = s.value) == null || _.removeEventListener("scroll", b);
      }, 300);
      (W = s.value) == null || W.addEventListener("scroll", b, { passive: true });
    }
    return (u, r) => {
      const b = resolveDirective("ripple");
      return i.data && i.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(a).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.data, (x) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(a).e("item"), unref(a).is("active", t.value === x.id)]),
          onClick: () => d(x.id)
        }, [
          t.value === x.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(a).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(x.text), 1)
        ], 10, lt)), [
          [b, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var rt = E(it, [["__scopeId", "data-v-4840d244"]]);
var ct = Y("ImAnchor", rt);
var ut = defineComponent({
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
  setup(n, { emit: a }) {
    const e = a, s = ref(null), t = n, l = V("alert"), i = useSlots(), c = computed(() => !!(t.showIcon && t.title)), f = computed(() => {
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
    }), p = async () => {
      var d, u;
      e("close"), (d = s.value) == null || d.animate([{
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
      }), await new Promise((r) => setTimeout(r, 300)), (u = s.value) == null || u.remove();
    };
    return (d, u) => {
      const r = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: s,
        class: normalizeClass([unref(l).b(), unref(l).m(t.color || "primary"), t.variant && unref(l).m(t.variant || "")])
      }, [
        t.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(l).e("icon")])
        }, [
          renderSlot(d.$slots, "icon", {}, () => [
            createVNode(unref(R), {
              name: f.value,
              size: c.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(l).e("content")])
        }, [
          t.title || unref(i).title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(l).e("title")])
          }, [
            renderSlot(d.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(t.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(l).e("message")])
          }, [
            renderSlot(d.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(t.message), 1)
            ], true)
          ], 2)
        ], 2),
        t.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(l).e("close")]),
          onClick: p
        }, [
          renderSlot(d.$slots, "close", {}, () => [
            createVNode(unref(R), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [r, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var dt = E(ut, [["__scopeId", "data-v-d11fdcb2"]]);
var mt = Y("ImAlert", dt);
var pt = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: a }) {
    const e = useSlots(), s = a, t = V("breadcrumb"), l = n, i = computed(
      () => {
        var f, p;
        return (p = (f = e.default) == null ? void 0 : f.call(e)) == null ? void 0 : p.filter((d) => {
          var u;
          return (d == null ? void 0 : d.type) && ((u = d == null ? void 0 : d.type) == null ? void 0 : u.name) === "ImBreadcrumbItem";
        });
      }
    ), c = (f) => {
      f && l.modelValue !== f && (s("update:modelValue", f), s("change", f));
    };
    return (f, p) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (d, u) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(d), {
          active: l.modelValue,
          onClick: c
        }, null, 8, ["active"])),
        i.value && i.value.length > 0 && u < i.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(t).e("separator")])
        }, [
          renderSlot(f.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(l.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var ft = E(pt, [["__scopeId", "data-v-64336468"]]);
var vt = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(n, { emit: a }) {
    const e = V("breadcrumb__item"), s = n, t = a;
    return (l, i) => (openBlock(), createElementBlock("div", {
      onClick: i[0] || (i[0] = () => t("click", s.value)),
      class: normalizeClass([unref(e).b(), unref(e).is("active", s.active === s.value && !!s.value)])
    }, [
      renderSlot(l.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var gt = E(vt, [["__scopeId", "data-v-40ed04b1"]]);
var ht = Y("ImBreadcrumb", ft);
var bt = Y("ImBreadcrumb", gt);
var yt = (n = 50) => {
  const a = ref(0), e = ref(0), s = we((t) => {
    a.value = t.clientX, e.value = t.clientY;
  }, n);
  return onMounted(() => {
    window.addEventListener("mousemove", s, { passive: true });
  }), onUnmounted(() => {
    window.removeEventListener("mousemove", s);
  }), { x: a, y: e };
};
var Se = defineComponent({
  name: "ImLayer",
  __name: "ImLayer",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: "" },
    getTarget: { type: Function, default: () => null },
    placement: {}
  },
  emits: ["close"],
  setup(n, { emit: a }) {
    const e = a, { zIndexToken: s } = Q(), t = V("layer"), l = n, i = computed(() => l.zIndex || s.value || 1e3);
    watch(() => l.visible, (_) => {
      window.removeEventListener("resize", c), _ && window.addEventListener("resize", c, { passive: true });
    });
    function c() {
      e("close");
    }
    const f = ["bottom", "bottom-left", "bottom-right"], p = ["top", "top-left", "top-right"], d = ["right", "right-top", "right-bottom"], u = ["left", "left-top", "left-bottom"];
    function r(_, g, v = "bottom-left") {
      const z = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      let w = 0;
      if (f.includes(v))
        w = _.bottom;
      else if (p.includes(v))
        w = _.top - g.height;
      else if (d.includes(v) || u.includes(v))
        switch (v) {
          case "right":
          case "left":
            w = _.top + _.height * 0.5 - g.height / 2;
            break;
          case "right-top":
          case "left-top":
            w = _.top;
            break;
          case "right-bottom":
          case "left-bottom":
            w = _.top + _.height - g.height;
            break;
        }
      return w < 0 ? 4 : z - w - 4 < g.height ? z - (g.height + 4) : w || _.bottom;
    }
    function b(_, g, v = "bottom-left") {
      const z = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let w = 0;
      if (f.includes(v) || p.includes(v))
        switch (v) {
          case "bottom":
          case "top":
            w = _.right - _.width / 2 - g.width / 2;
            break;
          case "bottom-right":
          case "top-right":
            w = _.right - g.width;
            break;
        }
      else d.includes(v) ? w = _.right : u.includes(v) && (w = _.left - g.width);
      return w < 0 ? 4 : z - w - 4 < g.width ? z - g.width - 4 : w || _.left || 0;
    }
    function x(_, g = "bottom-left") {
      if (p.includes(g)) {
        _.style.transformOrigin = "center bottom";
        return;
      }
      if ((d.includes(g) || u.includes(g)) && ["right-bottom", "left-bottom"].includes(g)) {
        _.style.transformOrigin = "center bottom";
        return;
      }
      _.style.transformOrigin = "center top";
    }
    async function D(_) {
      var v;
      const g = _;
      try {
        const z = (v = l.getTarget) == null ? void 0 : v.call(l), w = l.placement || "bottom-left";
        if (g.getAnimations().forEach((k) => k == null ? void 0 : k.cancel()), g.style.opacity = "0", x(g, w), z) {
          const k = z.getBoundingClientRect();
          g.style.minWidth = `${k.width}px`, g.style.top = `${k.top}px`, g.style.left = `${k.left}px`, await new Promise((I) => requestAnimationFrame(I));
          const J = g.getBoundingClientRect();
          g.style.top = `${r(k, J, w)}px`, g.style.left = `${b(k, J, w)}px`;
        }
        g.style.opacity = "1", g.animate([
          { opacity: 0, transform: "scaleY(0.9)" },
          { opacity: 1, transform: "scaleY(1)" }
        ], {
          duration: 200,
          easing: "ease"
        });
      } catch (z) {
        console.error(z);
      }
    }
    function W(_, g) {
      const v = _;
      v.getAnimations().forEach((z) => z.cancel()), v.animate([
        { opacity: 1, transform: "scaleY(1)" },
        { opacity: 0, transform: "scaleY(0.9)" }
      ], {
        duration: 200,
        easing: "ease"
      }), Promise.all(
        v.getAnimations().map((z) => z.finished)
      ).finally(g);
    }
    return (_, g) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, {
        css: false,
        duration: { enter: 200, leave: 200 },
        mode: "out-in",
        onBeforeEnter: D,
        onLeave: W
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            tabindex: "-1",
            aria: "",
            class: normalizeClass([unref(t).b()]),
            style: normalizeStyle({
              zIndex: i.value
            })
          }, [
            renderSlot(_.$slots, "default")
          ], 6), [
            [vShow, l.visible]
          ])
        ]),
        _: 3
      })
    ]));
  }
});
var _t = defineComponent({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: false },
    trigger: { default: "hover" },
    placement: { default: "bottom-left" },
    zIndex: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: a }) {
    const e = a, s = V("dropdown"), t = n, l = ref(null), i = ref(null), c = ref(t.modelValue || false);
    let f = null, p = 60;
    const { x: d, y: u } = yt(30);
    onMounted(() => {
      f && f(), f = _();
    }), onUnmounted(() => {
      f && f();
    }), watch(() => t.trigger, () => {
      f && f(), f = _();
    });
    const r = we(() => {
      const g = Te(d.value, u.value, i.value);
      Te(d.value, u.value, l.value) || g || (c.value = false);
    }, p);
    watch(() => [d.value, u.value], () => {
      t.trigger != "hover" || !c.value || r();
    });
    function b() {
      const g = l.value;
      return (g == null ? void 0 : g.children.length) !== 1 ? g : g.children[0];
    }
    function x() {
      c.value = true, e("update:modelValue", c.value), e("change", c.value), window.addEventListener("scroll", W, { passive: true, capture: true });
    }
    function D() {
      c.value = false, e("update:modelValue", c.value), e("change", c.value), window.removeEventListener("scroll", W);
    }
    function W(g) {
      var v;
      (v = i.value) != null && v.contains(g.target) || D();
    }
    function _() {
      var v, z;
      f && f();
      const g = le((w) => {
        var k;
        (k = l.value) != null && k.contains(w.target) || D();
      }, p);
      if (document.addEventListener("click", g, { passive: true }), t.trigger === "hover") {
        const w = le(x, p);
        return (v = l.value) == null || v.addEventListener("mouseenter", w, { passive: true }), () => {
          var k;
          (k = l.value) == null || k.removeEventListener("mouseenter", w), document.removeEventListener("click", g);
        };
      }
      if (t.trigger === "click") {
        const w = le(() => {
          c.value ? D() : x();
        }, p);
        return (z = l.value) == null || z.addEventListener("click", w, { passive: true }), () => {
          var k;
          (k = l.value) == null || k.removeEventListener("click", w), document.removeEventListener("click", g);
        };
      }
      return null;
    }
    return (g, v) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(s).b()]),
      ref_key: "dropdownRef",
      ref: l
    }, [
      renderSlot(g.$slots, "default", {}, void 0, true),
      createVNode(Se, {
        visible: c.value,
        placement: t.placement,
        "z-index": t.zIndex,
        getTarget: b,
        onClose: D
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "contentRef",
            ref: i,
            class: normalizeClass([unref(s).e("content"), "im-shadow"])
          }, [
            renderSlot(g.$slots, "content", {}, void 0, true)
          ], 2)
        ]),
        _: 3
      }, 8, ["visible", "placement", "z-index"])
    ], 2));
  }
});
var It = E(_t, [["__scopeId", "data-v-82af5cc8"]]);
var wt = Y("ImDropdown", It);
var kt = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: a }) {
    const e = n, s = useSlots(), t = V("list"), l = (d) => typeof d.type == "object" && d.type !== null, i = (d, u) => {
      const r = [];
      return d.forEach((b) => {
        if (l(b) && b.type && b.type.name == u) {
          console.log(b);
          const x = b.props || {};
          r.push({ vnode: b, props: x });
        } else b && (b != null && b.children) && Array.isArray(b.children) && r.push(...i(b.children, u));
      }), r;
    }, c = computed(() => {
      var r;
      const d = ((r = s.default) == null ? void 0 : r.call(s)) || [];
      return i(d, "ImListItem").map((b) => b.vnode);
    }), f = a, p = (d) => {
      var r;
      const u = ((r = d.props) == null ? void 0 : r.value) || "";
      u !== 0 && !u || (f("update:modelValue", d.value), f("change", d.value));
    };
    return (d, u) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(t).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(c.value, (r) => (openBlock(), createBlock(resolveDynamicComponent(r), {
        active: e.modelValue,
        onClick: () => p(r)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var xt = E(kt, [["__scopeId", "data-v-11b90479"]]);
var zt = defineComponent({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: false },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: true }
  },
  emits: ["click"],
  setup(n, { emit: a }) {
    const e = V("list__item"), s = a, t = n;
    function l(i) {
      if (t.disabled) {
        i.stopPropagation();
        return;
      }
      s("click", t.value);
    }
    return (i, c) => {
      const f = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(e).b(), unref(e).is("active", !!(t.active && t.active === t.value)), unref(e).is("disabled", t.disabled)]),
        onClick: l
      }, [
        renderSlot(i.$slots, "default", {}, void 0, true)
      ], 2)), [
        [f, t.ripple && !t.disabled]
      ]);
    };
  }
});
var $t = E(zt, [["__scopeId", "data-v-6df1dd93"]]);
var Ct = Y("ImList", xt);
var Tt = Y("ImListItem", $t);
var Lt = ["src", "srcset", "alt", "loading"];
var Bt = defineComponent({
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
  setup(n, { emit: a }) {
    const e = a, s = V("avatar"), t = n, l = (i) => {
      console.log(i.target), e("error", i);
    };
    return (i, c) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(s).b(), t.shape ? unref(s).m(t.shape) : ""]),
      style: normalizeStyle({
        "--im-avatar-size": (Number(t.size) || 36) + "px",
        "--im-avatar-color": t.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": t.fit
      })
    }, [
      !t.src && !t.srcset ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(s).e("icon")])
      }, [
        renderSlot(i.$slots, "default", {}, void 0, true)
      ], 2)) : (openBlock(), createElementBlock("img", {
        key: 1,
        onError: l,
        src: t.src,
        srcset: t.srcset,
        alt: t.alt,
        loading: t.loading,
        class: normalizeClass([unref(s).e("img")])
      }, null, 42, Lt))
    ], 6));
  }
});
var Vt = E(Bt, [["__scopeId", "data-v-c4c32038"]]);
var Et = Y("ImAvatar", Vt);
var St = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(n, { emit: a }) {
    const e = V("mask"), { zIndexToken: s } = Q(), t = n, l = a, i = () => {
      t.closeOnClickMask && l("close", false);
    };
    return (c, f) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(e).b()]),
          style: normalizeStyle({
            zIndex: t.zIndex || unref(s)
          }),
          onClick: i
        }, [
          renderSlot(c.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, t.visible]
        ])
      ]),
      _: 3
    }));
  }
});
var Mt = E(St, [["__scopeId", "data-v-d5aadf77"]]);
var ke = Y("ImMask", Mt);
var ce = (n, a) => !n || !n.getAnimations ? false : (n.getAnimations(a).forEach((e) => e.cancel()), true);
var Me = async (n, a) => {
  if (!n || !n.getAnimations) return false;
  try {
    return await Promise.all(
      n.getAnimations(a).map((e) => e.finished)
    ), true;
  } catch {
    return false;
  }
};
var ue = () => ({
  width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
});
function pe(n, a = "right") {
  const e = (n == null ? void 0 : n.getBoundingClientRect()) || {}, s = (e == null ? void 0 : e.width) || 0, t = (e == null ? void 0 : e.height) || 0;
  switch (a) {
    case "left":
      return s ? `translateX(-${s}px)` : "translateX(-100%)";
    case "right":
      return s ? `translateX(${s}px)` : "translateX(100%)";
    case "top":
      return t ? `translateY(-${t}px)` : "translateY(-100%)";
    case "bottom":
      return t ? `translateY(${t}px)` : "translateY(100%)";
    default:
      return s ? `translateX(${s}px)` : "translateX(100%)";
  }
}
var oe = async (n, a = true) => {
  let e = pe(n, "right"), s = [];
  a ? s = [
    { transform: e, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : s = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: e, opacity: 0 }
  ], n == null || n.animate(s, { duration: 200, delay: 0, easing: "ease" });
};
var Le = async (n, a = true) => {
  let e = pe(n, "left"), s = [];
  a ? s = [
    { transform: e, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : s = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: e, opacity: 0 }
  ], n == null || n.animate(s, { duration: 200, delay: 0, easing: "ease" });
};
var Be = async (n, a = true) => {
  let e = pe(n, "top"), s = [];
  a ? s = [
    { transform: e, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : s = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: e, opacity: 0 }
  ], n == null || n.animate(s, { duration: 200, delay: 0, easing: "ease" });
};
var Ve = async (n, a = true) => {
  let e = pe(n, "bottom"), s = [];
  a ? s = [
    { transform: e, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : s = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: e, opacity: 0 }
  ], n == null || n.animate(s, { duration: 200, delay: 0, easing: "ease" });
};
var At = async (n, a) => {
  let e = [], s = "center";
  const t = (a == null ? void 0 : a.getBoundingClientRect()) || null, { width: l, height: i } = ue(), c = n.getBoundingClientRect();
  if (t) {
    const f = (t.left - c.left) / c.width * 100, p = (t.top - c.top) / c.height * 100;
    s = `${f}% ${p}%`, e = [
      {
        opacity: 0,
        transformOrigin: s,
        transform: "scale(0) "
      },
      {
        opacity: 0.25,
        transformOrigin: s,
        transform: "scale(0.5) ",
        offset: 0.5
      },
      {
        opacity: 1,
        transformOrigin: s,
        transform: "scale(1)"
      }
    ];
  } else {
    const f = (l * 0.5 - c.left) / c.width * 100, p = (i - c.top) / c.height * 100;
    s = `${f}% ${p}%`, e = [
      {
        opacity: 0.33,
        transformOrigin: s,
        transform: "scale(0) rotate(90deg)",
        offset: 0
      },
      {
        opacity: 0.5,
        transformOrigin: s,
        transform: "scale(0.5) rotate(5deg)",
        offset: 0.66
      },
      {
        opacity: 1,
        transformOrigin: s,
        transform: "scale(1) rotate(0deg)"
      }
    ];
  }
  n == null || n.animate(e, { duration: 200, delay: 0, easing: "ease" });
};
var Nt = async (n, a) => {
  let e = [], s = "center";
  const t = (a == null ? void 0 : a.getBoundingClientRect()) || null, { width: l, height: i } = ue(), c = n.getBoundingClientRect();
  let f = "50%", p = "50%";
  t ? (f = (t.left - c.left) / c.width * 100, p = (t.top - c.top) / c.height * 100, s = `${f}% ${p}%`, e = [
    {
      opacity: 1,
      transformOrigin: s,
      transform: "scale(1)",
      offset: 0
    },
    {
      opacity: 0.33,
      transformOrigin: s,
      transform: "scale(0.5)",
      offset: 0.66
    },
    {
      opacity: 0.05,
      transformOrigin: s,
      transform: "scale(0)",
      offset: 1
    }
  ]) : (f = (l * 0.5 - c.left) / c.width * 100, p = (i - c.top) / c.height * 100, s = `${f}% ${p}%`, e = [
    {
      opacity: 1,
      transformOrigin: s,
      transform: "scale(1) rotate(0deg)",
      offset: 0
    },
    {
      opacity: 0.33,
      transformOrigin: s,
      transform: "scale(0.5) rotate(5deg)",
      offset: 0.66
    },
    {
      opacity: 0.05,
      transformOrigin: s,
      transform: "scale(0) rotate(90deg)",
      offset: 1
    }
  ]), n == null || n.animate(e, { duration: 200, delay: 0, easing: "ease" });
};
var Dt = ["aria-modal"];
var Rt = defineComponent({
  name: "ImDrawer",
  __name: "ImDrawer",
  props: {
    modelValue: { type: Boolean, default: false },
    mask: { type: Boolean, default: true },
    closeOnClickMask: { type: Boolean, default: true },
    placement: { default: "right" },
    size: { default: "280px" },
    zIndex: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: a }) {
    const e = V("drawer"), s = a, t = n, l = ref(null), { zIndexToken: i } = Q(), c = computed(() => ie(t.size || i.value || "280px")), f = () => {
      s("update:modelValue", false);
    };
    function p(u, r) {
      switch (ce(u), t.placement) {
        case "right":
          oe(u);
          break;
        case "left":
          Le(u);
          break;
        case "top":
          Be(u);
          break;
        case "bottom":
          Ve(u);
          break;
        default:
          oe(u);
          break;
      }
      r();
    }
    function d(u, r) {
      switch (ce(u), t.placement) {
        case "right":
          oe(u, false);
          break;
        case "left":
          Le(u, false);
          break;
        case "top":
          Be(u, false);
          break;
        case "bottom":
          Ve(u, false);
          break;
        default:
          oe(u, false);
          break;
      }
      Me(u).finally(r);
    }
    return (u, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: l,
        class: normalizeClass([unref(e).b(), t.placement ? unref(e).m(t.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": c.value, zIndex: t.zIndex || unref(i) }),
        "aria-modal": t.modelValue
      }, [
        t.mask ? (openBlock(), createBlock(unref(ke), {
          key: 0,
          visible: t.modelValue,
          closeOnClickMask: t.closeOnClickMask,
          onClose: f,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: p,
          onLeave: d
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(e).e("content")])
            }, [
              renderSlot(u.$slots, "default", {}, void 0, true)
            ], 2), [
              [vShow, t.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, Dt)
    ]));
  }
});
var Pt = E(Rt, [["__scopeId", "data-v-bdbdf826"]]);
var Ot = Y("ImDrawer", Pt);
var Yt = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(n) {
    const a = V("card"), e = n;
    return (s, t) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b(), unref(a).is("borderless", e.borderless), e.shadow ? unref(a).m(e.shadow) : ""])
    }, [
      renderSlot(s.$slots, "header", {}, () => [
        e.title || s.$slots["header-action"] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(a).e("header")])
        }, [
          createBaseVNode("span", {
            class: normalizeClass([unref(a).e("title")])
          }, toDisplayString(e.title), 3),
          renderSlot(s.$slots, "header-action", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ], true),
      createBaseVNode("div", {
        class: normalizeClass([unref(a).e("body")])
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2)
    ], 2));
  }
});
var Wt = E(Yt, [["__scopeId", "data-v-4ccad88b"]]);
var Ht = Y("ImCard", Wt);
var Ft = ["data-index", "onMouseenter", "onMouseleave"];
var Xt = { class: "im-message__text" };
var qt = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(n, { expose: a }) {
    const e = V("message"), s = n, t = ref([]);
    let l = null;
    watch(() => t.value, () => {
      t.value.length === 0 ? l = setTimeout(() => {
        !t.value.length && s.callback();
      }, 500) : (l && clearTimeout(l), l = null);
    });
    const i = (d) => {
      switch (d) {
        case "success":
          return "check-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "error":
          return "close-circle-fill";
        default:
          return "info-circle-fill";
      }
    }, c = (d) => {
      d.timer && (clearTimeout(d.timer), d.timer = null);
    }, f = (d) => {
      d.timer && clearTimeout(d.timer), d.timer = setTimeout(() => {
        t.value = t.value.filter((u) => u.id !== d.id);
      }, d.duration || 3e3);
    }, p = (d) => {
      const u = setTimeout(() => {
        t.value = t.value.filter((r) => r.id !== d.id);
      }, d.duration || 3e3);
      t.value.push({ ...d, timer: u });
    };
    return s.add && s.add(p), a({ addMsg: p }), (d, u) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(e).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.value, (r) => (openBlock(), createElementBlock("li", {
          key: r.id,
          "data-index": r.id,
          onMouseenter: () => c(r),
          onMouseleave: () => f(r),
          class: normalizeClass(["im-message__item", [unref(e).e("item"), r.color ? unref(e).e(r.color) : ""]])
        }, [
          createVNode(unref(R), {
            name: i(r.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", Xt, toDisplayString(r.msg), 1)
        ], 42, Ft))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var Ut = E(qt, [["__scopeId", "data-v-820c83a9"]]);
var jt = class {
  constructor() {
    ne(this, "app");
    ne(this, "container");
    ne(this, "addMsgToList");
    this.app = null, this.container = null, this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    if (typeof window < "u" && window) {
      this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
      const a = this;
      this.app = createApp(Ut, {
        callback: () => {
          a.destroy();
        },
        add: (e) => {
          a.addMsgToList = e;
        }
      }), this.app.mount(this.container);
    } else
      throw new Error("只能在浏览器环境下使用");
  }
  destroy() {
    var a, e;
    (a = this.app) == null || a.unmount(), (e = this.container) == null || e.remove(), this.app = null, this.container = null;
  }
  addMsg(a) {
    if (this.app || this.createApp(), !this.addMsgToList) return console.error("addMsgToList is null");
    this.addMsgToList({
      msg: a.msg,
      id: Math.random().toString().slice(2) + "_" + Date.now(),
      duration: a.duration || 3e3,
      color: (a == null ? void 0 : a.color) || "primary"
    });
  }
  info(a, e) {
    this.addMsg({
      color: "primary",
      msg: a,
      duration: e,
      id: ""
    });
  }
  success(a, e) {
    this.addMsg({
      color: "success",
      msg: a,
      duration: e,
      id: ""
    });
  }
  warning(a, e) {
    this.addMsg({
      color: "warning",
      msg: a,
      duration: e,
      id: ""
    });
  }
  error(a, e) {
    this.addMsg({
      color: "error",
      msg: a,
      duration: e,
      id: ""
    });
  }
};
var H = null;
var va = () => (H || (H = new jt()), {
  info: (n, a = 3e3) => {
    H == null || H.info(n, a);
  },
  success: (n, a = 3e3) => {
    H == null || H.success(n, a);
  },
  warning: (n, a = 3e3) => {
    H == null || H.warning(n, a);
  },
  error: (n, a = 3e3) => {
    H == null || H.error(n, a);
  }
});
var Gt = ["data-visible", "data-esc"];
var Jt = defineComponent({
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
    zIndex: { default: 1e3 },
    getTarget: { type: Function, default: () => null }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: a }) {
    const e = V("dialog"), s = a, t = n, l = ref(null), { zIndexToken: i } = Q(), c = {
      duration: 300,
      easing: "ease"
    };
    watch(
      () => t.modelValue,
      (r) => {
        window.removeEventListener("keydown", f), r && t.closeOnEscape && window.addEventListener("keydown", f, { passive: true });
      }
    );
    function f(r) {
      if (r.key === "Escape" || r.code === "Escape") {
        const b = document.querySelectorAll(
          '.im-dialog[data-visible="true"][data-esc="true"]'
        );
        b.length && l.value && Array.from(b).pop() === l.value && s("update:modelValue", false);
      }
    }
    function p() {
      Array.from(
        document.body.querySelectorAll('.im-dialog[data-visible="true"]')
      ).length ? !document.body.classList.contains("im-overflow-hidden") && document.body.classList.add("im-overflow-hidden") : document.body.classList.remove("im-overflow-hidden");
    }
    const d = async (r, b) => {
      if (ce(r), t.fullscreen) {
        const { height: x } = ue();
        r.animate([
          {
            transform: `translateY(${x}px)`,
            opacity: 0
          },
          {
            transform: "translateY(0)",
            opacity: 1
          }
        ], c);
      } else
        At(r, t == null ? void 0 : t.getTarget()), b(), p();
    }, u = async (r, b) => {
      ce(r);
      const { height: x } = ue();
      t.fullscreen ? r.animate([
        {
          transform: 0,
          opacity: 1
        },
        {
          transform: `translateY(${x}px)`,
          opacity: 0
        }
      ], c) : Nt(r, t == null ? void 0 : t.getTarget()), await Me(r), b(), p();
    };
    return (r, b) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        "aria-modal": "true",
        class: normalizeClass([unref(e).b()]),
        tabindex: "-1",
        "data-visible": t.modelValue,
        "data-esc": t.closeOnEscape,
        ref_key: "dialogRef",
        ref: l,
        style: normalizeStyle({
          zIndex: t.zIndex || unref(i)
        })
      }, [
        t.mask && !t.fullscreen ? (openBlock(), createBlock(unref(ke), {
          key: 0,
          closeOnClickMask: t.closeOnClickMask,
          visible: t.modelValue,
          onClose: b[0] || (b[0] = () => s("update:modelValue", false))
        }, null, 8, ["closeOnClickMask", "visible"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: d,
          duration: { enter: 200, leave: 200 },
          onLeave: u
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([
                unref(e).e("content"),
                unref(e).is("fullscreen", t.fullscreen),
                t.fullscreen ? "" : "im-shadow"
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
      ], 14, Gt)
    ]));
  }
});
var Kt = E(Jt, [["__scopeId", "data-v-d1225f96"]]);
var Qt = Y("ImDialog", Kt);
var Zt = defineComponent({
  name: "ImOption",
  __name: "ImOption",
  props: {
    disabled: { type: Boolean, default: false },
    value: { default: "" },
    label: {},
    selectList: { default: () => [] },
    multiple: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(n, { emit: a }) {
    const e = V("option"), s = a, t = n;
    function l(i) {
      if (i.preventDefault(), i.stopPropagation(), t.disabled) return;
      const c = t.value || t.label;
      c && s("change", c);
    }
    return (i, c) => {
      var p, d;
      const f = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        onClick: l,
        class: normalizeClass([unref(e).b(), unref(e).is("disabled", !!t.disabled), unref(e).is("active", (p = t.selectList) == null ? void 0 : p.includes(t.value || t.label || ""))])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([unref(e).e("text")])
        }, [
          renderSlot(i.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(t.label || t.value), 1)
          ], true)
        ], 2),
        t.multiple && ((d = t.selectList) != null && d.includes(t.value || t.label || "")) ? (openBlock(), createBlock(unref(R), {
          key: 0,
          name: "check",
          size: "12",
          class: normalizeClass([unref(e).e("check")])
        }, {
          default: withCtx(() => c[0] || (c[0] = [
            createTextVNode("✓")
          ])),
          _: 1,
          __: [0]
        }, 8, ["class"])) : createCommentVNode("", true)
      ], 2)), [
        [f, !t.disabled]
      ]);
    };
  }
});
var ea = E(Zt, [["__scopeId", "data-v-baa1be82"]]);
var ta = defineComponent({
  name: "ImTag",
  __name: "ImTag",
  props: {
    color: { default: "" },
    border: { type: Boolean },
    closeable: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: true }
  },
  emits: ["close", "update:modelValue"],
  setup(n, { emit: a }) {
    const e = V("tag"), s = a, t = n;
    function l(i) {
      s("update:modelValue", false), s("close", i);
    }
    return (i, c) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        t.modelValue ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(e).b(), t.color ? unref(e).m(t.color) : "", unref(e).is("border", t.border)])
        }, [
          createBaseVNode("div", {
            class: normalizeClass([unref(e).e("content")])
          }, [
            renderSlot(i.$slots, "default", {}, void 0, true),
            t.closeable ? (openBlock(), createBlock(unref(R), {
              key: 0,
              name: "close",
              size: "1em",
              onClick: l,
              class: normalizeClass([unref(e).e("close")])
            }, null, 8, ["class"])) : createCommentVNode("", true)
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var aa = E(ta, [["__scopeId", "data-v-74f9f4a0"]]);
var Ae = Y("ImTag", aa);
var na = defineComponent({
  name: "ImSelect",
  __name: "ImSelect",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    width: { default: "" },
    size: {},
    placeholder: { default: "" },
    clearable: { type: Boolean, default: false },
    zIndex: {},
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    maxTag: { default: 1 }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: a }) {
    const e = V("select"), s = a, t = n, { sizeToken: l } = Q(), i = ref(false), c = ref([]), f = ref(null), p = ref(null), d = computed(() => ie(t.width)), u = computed(() => ie(t.size || l.value || "36px")), r = computed(() => {
      var I;
      return t.multiple ? t.options.filter((L) => c.value.includes(String(L.value))).map((L) => L.label) : ((I = t.options.find((L) => L.value === t.modelValue)) == null ? void 0 : I.label) || "";
    }), b = computed(() => t.options.filter((I) => c.value.includes(String(I.value)))), x = computed(() => {
      const I = b.value.length - t.maxTag;
      return b.value.length && t.maxTag && b.value.length - t.maxTag && I > 0 ? I : "";
    }), D = computed(() => t.clearable && t.modelValue && r.value && !t.disabled);
    watch(() => t.modelValue, () => {
      g();
    }, { immediate: true }), watch(() => i.value, (I) => {
      document.removeEventListener("click", z, { capture: true }), I ? document.addEventListener("click", z, { capture: true }) : window.removeEventListener("scroll", v, { capture: true });
    });
    function W(I, L) {
      L.preventDefault();
      const M = c.value.filter((ee) => ee !== I.value);
      s("update:modelValue", M.join(","));
    }
    function _() {
      i.value = false;
    }
    function g() {
      var I;
      t.multiple ? c.value = ((I = String(t.modelValue)) == null ? void 0 : I.split(",")) || [] : c.value = [t.modelValue];
    }
    function v(I) {
      var L;
      (L = p.value) != null && L.contains(I.target) || p.value === I.target || _();
    }
    function z(I) {
      var L, M;
      (L = f.value) != null && L.contains(I.target) || f.value === I.target || I.target === p.value || t.multiple && ((M = p.value) != null && M.contains(I.target)) || p.value === I.target || _();
    }
    async function w() {
      var L;
      if (i.value) return;
      i.value = true, await new Promise((M) => requestAnimationFrame(M));
      const I = (L = p.value) == null ? void 0 : L.querySelector(`.${e.is("active", true)}`);
      I && I.scrollIntoView({ behavior: "instant", block: "nearest" }), await new Promise((M) => requestAnimationFrame(M)), window.addEventListener("scroll", v, { capture: true });
    }
    function k(I) {
      if (t.multiple) {
        const L = c.value;
        L.includes(I) ? L.splice(L.indexOf(I), 1) : L.push(I), s("update:modelValue", L.filter((M) => M).join(","));
        return;
      } else
        s("update:modelValue", I);
    }
    function J(I) {
      I.preventDefault(), I.stopPropagation(), s("update:modelValue", "");
    }
    return (I, L) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b(), unref(e).is("open", i.value), unref(e).is("disabled", t.disabled), unref(e).is("multiple", t.multiple)]),
      style: normalizeStyle({
        "--im-select-width": d.value,
        "--im-select-height": u.value
      })
    }, [
      createBaseVNode("div", {
        onClick: w,
        class: normalizeClass([unref(e).e("trigger")]),
        ref_key: "triggerRef",
        ref: f,
        tabindex: "-1"
      }, [
        t.placeholder && !r.value ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(e).e("placeholder")])
        }, toDisplayString(t.placeholder), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          t.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(e).e("tags")])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.value, (M, ee) => (openBlock(), createElementBlock(Fragment, null, [
              ee < t.maxTag ? (openBlock(), createBlock(unref(Ae), {
                key: ee,
                onClose: withModifiers((De) => W(M, De), ["stop"]),
                closeable: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(M.label), 1)
                ]),
                _: 2
              }, 1032, ["onClose"])) : createCommentVNode("", true)
            ], 64))), 256)),
            x.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(e).e("more")])
            }, [
              createVNode(unref(R), {
                name: "plus",
                size: "12px"
              }),
              createTextVNode(" " + toDisplayString(x.value), 1)
            ], 2)) : createCommentVNode("", true)
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(e).e("default")])
          }, [
            createBaseVNode("span", null, toDisplayString(r.value), 1)
          ], 2))
        ], 64)),
        createBaseVNode("span", {
          class: normalizeClass([unref(e).e("icon-down"), unref(e).is("rotate", i.value)])
        }, [
          renderSlot(I.$slots, "downIcon", {}, () => [
            createVNode(unref(R), {
              name: "down",
              size: "12"
            })
          ], true)
        ], 2),
        D.value ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass([unref(e).e("clear-icon")]),
          onClick: J
        }, [
          renderSlot(I.$slots, "clearIcon", {}, () => [
            createVNode(unref(R), {
              name: "close-circle-fill",
              size: "18"
            })
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 2),
      createVNode(Se, {
        visible: i.value,
        getTarget: () => f.value,
        "z-index": t.zIndex,
        onClose: _
      }, {
        default: withCtx(() => [
          createBaseVNode("ul", {
            class: normalizeClass([unref(e).e("list"), "im-shadow"]),
            ref_key: "listRef",
            ref: p
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.options, (M, ee) => (openBlock(), createBlock(ea, {
              multiple: t.multiple,
              key: M.value || M.label || ee,
              disabled: M.disabled,
              "select-list": c.value,
              value: M.value,
              label: M.label,
              onChange: k
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(M.label || M.value), 1)
              ]),
              _: 2
            }, 1032, ["multiple", "disabled", "select-list", "value", "label"]))), 128))
          ], 2)
        ]),
        _: 1
      }, 8, ["visible", "getTarget", "z-index"])
    ], 6));
  }
});
var sa = E(na, [["__scopeId", "data-v-364f96fc"]]);
var Ne = Y("ImSelect", sa);
var oa = ["aria-disabled"];
var la = ["onClick", "title"];
var ia = ["aria-disabled"];
var ra = defineComponent({
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
  setup(n, { emit: a }) {
    const e = V("pagination"), s = a, t = n, l = ref(t.pageSize), i = ref([1]), { sizeToken: c } = Q(), f = computed(() => parseInt(String(t.size || c.value || 36)) + "px"), p = computed(() => Math.ceil(t.total / (l.value || 10))), d = computed(() => t.pageNumber === 1), u = computed(() => t.pageNumber >= p.value), r = computed(() => t.pageSizeItems.map((v) => ({ label: `${v} 条/页`, value: v })));
    watch(() => l.value, (v) => {
      p.value < t.pageNumber ? s("change", { pageSize: v, pageNumber: p.value }) : s("change", { pageSize: v, pageNumber: t.pageNumber });
    }), watch(() => [t.pageNumber, t.pageSize], () => {
      l.value = t.pageSize, x(p.value < t.pageNumber ? p.value : t.pageNumber);
    }, { immediate: true });
    function b(v) {
      t.pageNumber !== v && s("change", { pageNumber: v, pageSize: t.pageSize });
    }
    function x(v) {
      if (p.value <= 1)
        i.value = [1];
      else {
        const z = Math.ceil(v / 5), w = [];
        let k = z * 5 - 4;
        for (let J = 0; J < 5; J++) {
          let I = k + J;
          if (I > p.value)
            break;
          w.push(I);
        }
        v - 5 >= 1 && (w.unshift("left"), w.unshift(1)), v + 5 <= p.value && (w.push("right"), w.push(p.value)), i.value = w, b(v);
      }
    }
    function D() {
      const v = t.pageNumber + 1;
      if (v > p.value) return b(t.pageNumber);
      if (i.value.includes(v))
        return b(v);
      x(v);
    }
    function W() {
      const v = t.pageNumber - 1;
      if (v < 1) return b(t.pageNumber);
      if (i.value.includes(v))
        return b(v);
      x(v);
    }
    function _() {
      const v = t.pageNumber + 5;
      if (v > p.value) return b(p.value);
      x(v);
    }
    function g() {
      const v = t.pageNumber - 5;
      if (v < 1) return b(1);
      x(v);
    }
    return (v, z) => {
      const w = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(e).b()]),
        style: normalizeStyle({
          "--im-pagination-size": f.value
        })
      }, [
        v.layout.includes("total") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(e).e("total")])
        }, "共 " + toDisplayString(v.total) + " 条数据", 3)) : createCommentVNode("", true),
        v.layout.includes("prev") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(e).e("prev"), unref(e).is("disabled", d.value)]),
          "aria-disabled": d.value,
          onClick: W
        }, [
          createVNode(unref(R), {
            name: "left",
            size: "14px"
          })
        ], 10, oa)), [
          [w, !d.value]
        ]) : createCommentVNode("", true),
        v.layout.includes("pager") ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(e).e("pager")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (k) => (openBlock(), createElementBlock(Fragment, null, [
            k === "left" ? (openBlock(), createElementBlock("div", {
              key: 0,
              title: "向前5页",
              class: normalizeClass([unref(e).e("page-item"), unref(e).e("left")]),
              onClick: g
            }, [
              createVNode(unref(R), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(R), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : k !== "right" ? withDirectives((openBlock(), createElementBlock("div", {
              key: 1,
              onClick: () => b(k),
              class: normalizeClass([unref(e).e("page-item"), unref(e).is("active", k === t.pageNumber)]),
              title: String(k)
            }, [
              createTextVNode(toDisplayString(k), 1)
            ], 10, la)), [
              [w, true]
            ]) : k === "right" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass([unref(e).e("page-item"), unref(e).e("right")]),
              title: "向后5页",
              onClick: _
            }, [
              createVNode(unref(R), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(R), {
                name: "arrowright",
                class: "im-icon--arrowright"
              })
            ], 2)) : createCommentVNode("", true)
          ], 64))), 256))
        ], 2)) : createCommentVNode("", true),
        v.layout.includes("next") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(e).e("next"), unref(e).is("disabled", u.value)]),
          "aria-disabled": u.value,
          onClick: D
        }, [
          createVNode(unref(R), {
            name: "right",
            size: "14px"
          })
        ], 10, ia)), [
          [w, !u.value]
        ]) : createCommentVNode("", true),
        v.layout.includes("sizes") ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass([unref(e).e("size")])
        }, [
          createVNode(unref(Ne), {
            options: r.value,
            modelValue: l.value,
            "onUpdate:modelValue": z[0] || (z[0] = (k) => l.value = k),
            size: t.size
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var ca = E(ra, [["__scopeId", "data-v-3bb837f2"]]);
var ua = Y("ImPagination", ca);
var da = [
  fe,
  ge,
  ve,
  he,
  R,
  re,
  ct,
  mt,
  ht,
  bt,
  wt,
  Ct,
  Tt,
  Et,
  ke,
  Ot,
  Ht,
  Qt,
  ua,
  Ne,
  Ae
];
var ma = (n, a) => {
  n.provide(Ee, {
    size: (a == null ? void 0 : a.size) || 36,
    zIndex: (a == null ? void 0 : a.zIndex) || 1e3
  }), n.directive("ripple", je), da.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var ga = {
  install: ma
};
export {
  mt as ImAlert,
  ct as ImAnchor,
  Et as ImAvatar,
  ht as ImBreadcrumb,
  bt as ImBreadcrumbItem,
  fe as ImButton,
  Ht as ImCard,
  ge as ImCol,
  Qt as ImDialog,
  re as ImDivider,
  Ot as ImDrawer,
  wt as ImDropdown,
  R as ImIcon,
  he as ImInput,
  Ct as ImList,
  Tt as ImListItem,
  ke as ImMask,
  ua as ImPagination,
  ve as ImRow,
  Ne as ImSelect,
  Ae as ImTag,
  ga as default,
  va as useImMessage
};
//# sourceMappingURL=im-design.js.map
