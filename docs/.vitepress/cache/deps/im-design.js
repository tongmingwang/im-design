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
  vModelText,
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.39/node_modules/im-design/dist/im-design.js
var ze = Object.defineProperty;
var ge = (s) => {
  throw TypeError(s);
};
var Le = (s, n, e) => n in s ? ze(s, n, { enumerable: true, configurable: true, writable: true, value: e }) : s[n] = e;
var Z = (s, n, e) => Le(s, typeof n != "symbol" ? n + "" : n, e);
var he = (s, n, e) => n.has(s) || ge("Cannot " + e);
var ee = (s, n, e) => (he(s, n, "read from private field"), e ? e.call(s) : n.get(s));
var ye = (s, n, e) => n.has(s) ? ge("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(s) : n.set(s, e);
var be = (s, n, e, a) => (he(s, n, "write to private field"), a ? a.call(s, e) : n.set(s, e), e);
var we = Symbol("im-design-token");
var J;
var Se = class {
  constructor() {
    ye(this, J);
    be(this, J, []);
  }
  async add(n) {
    ee(this, J).push(n);
  }
  remove() {
    try {
      const n = ee(this, J).shift();
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
      const l = a - Number(t) || 0;
      l && await new Promise((i) => {
        e.style.opacity = "0.1";
        const v = 200 - l;
        setTimeout(
          () => {
            i(null);
          },
          v > 0 ? v : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms", setTimeout(() => {
        n && (n == null || n.remove()), ee(this, J).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
J = /* @__PURE__ */ new WeakMap();
async function Me(s, n, e) {
  const a = window.getComputedStyle(e), t = e.getBoundingClientRect(), l = document.createElement("div");
  l.className = "im-ripple", n.add(l);
  const i = document.createElement("div");
  i.className = "im-ripple__item";
  const v = s.clientX || s.touches && s.touches[0].clientX, f = s.clientY || s.touches && s.touches[0].clientY, m = Math.max(t.width, t.height), r = v - t.left - m / 2, p = f - t.top - m / 2, I = t.width - t.height <= 5;
  Object.assign(i.style, {
    "background-color": a.color,
    width: `${m}px`,
    height: `${m}px`,
    left: `${r}px`,
    top: `${p}px`,
    opacity: "0.15",
    transform: I ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), i.setAttribute("data-time", Date.now() + ""), l.appendChild(i), e.appendChild(l);
  const w = a.position;
  w === "static" && (e.style.position = "relative", e.dataset.originalPosition = w), i.getBoundingClientRect(), i.style.transform = "scale(2.8)", i.style.opacity = "0.33";
}
var Pe = {
  mounted(s, n) {
    s.IM_RIPPLE_VALUE = n.value;
    const e = new Se(), a = (v) => {
      s.IM_RIPPLE_VALUE && Me(v, e, s);
    }, t = () => {
      e.remove();
    }, l = () => {
      s.addEventListener("mousedown", a, { passive: true }), window.addEventListener("mouseup", t, { passive: true });
    }, i = () => {
      s.removeEventListener("mousedown", a), window.removeEventListener("mouseup", t);
    };
    l(), s._rippleListeners = { remove: i };
  },
  beforeUnmount(s) {
    var n;
    (n = s._rippleListeners) == null || n.remove();
  },
  updated(s, n) {
    s.IM_RIPPLE_VALUE = n.value;
  }
};
var L = (s) => {
  const n = "im-" + s;
  return {
    b: () => n,
    e: (e) => `${n}__${e}`,
    m: (e) => `${n}--${e}`,
    is: (e, a) => a ? `is-${e}` : ""
  };
};
var G = (s, n) => {
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
var De = { render: Ne };
var Re = ["tabindex", "type", "disabled"];
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
    const e = s, a = n, t = L("button"), { sizeToken: l } = G(), i = computed(() => [
      t.b(),
      e.color && t.m(e.color),
      e.shape && t.m(e.shape),
      e.variant && t.m(e.variant),
      t.is("disabled", e.disabled),
      t.is("loading", e.loading)
    ].filter(Boolean)), v = computed(() => {
      let r = +(e.size || l.value || 36);
      return {
        "--im-button-size": r + "px",
        "--im-button-padding": (r * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), f = computed(() => e.loading && ["square", "circle"].includes(e.shape)), m = () => {
      e.disabled || e.loading || a("click");
    };
    return (r, p) => {
      const I = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(i.value),
        onClick: m,
        style: normalizeStyle(v.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(t).e("loading")])
        }, [
          createVNode(unref(De))
        ], 2)) : createCommentVNode("", true),
        f.value ? createCommentVNode("", true) : renderSlot(r.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, Re)), [
        [I, true]
      ]);
    };
  }
});
var C = (s, n) => {
  const e = s.__vccOpts || s;
  for (const [a, t] of n)
    e[a] = t;
  return e;
};
var le = C(Oe, [["__scopeId", "data-v-fe80f42d"]]);
le.install = (s) => {
  s.component("ImButton", le);
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
      var l;
      return ((l = e.default) == null ? void 0 : l.call(e)) || [];
    }), t = L("row");
    return (l, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()]),
      style: normalizeStyle({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (v, f) => (openBlock(), createBlock(resolveDynamicComponent(v), { key: f }))), 128))
    ], 6));
  }
});
var ie = C(Ye, [["__scopeId", "data-v-5179967f"]]);
var Fe = defineComponent({
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
    const n = s, e = L("col"), a = computed(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (t, l) => (openBlock(), createElementBlock("div", {
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
var re = C(Fe, [["__scopeId", "data-v-ecf91058"]]);
ie.install = (s) => {
  s.component("ImRow", ie);
};
re.install = (s) => {
  s.component("ImCol", re);
};
var We = defineComponent({
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
    const e = s, { sizeToken: a } = G(), t = n, l = ref(e.modelValue), i = L("input"), v = () => {
      t("update:modelValue", l.value), t("change", l.value);
    };
    return (f, m) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(i).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(a) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(i).e("input")],
        "onUpdate:modelValue": m[0] || (m[0] = (r) => l.value = r)
      }, e, { onInput: v }), null, 16), [
        [vModelDynamic, l.value]
      ])
    ], 6));
  }
});
var ce = C(We, [["__scopeId", "data-v-6c70856c"]]);
ce.install = (s) => {
  s.component("ImInput", ce);
};
var qe = defineComponent({
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
var D = C(qe, [["__scopeId", "data-v-1e711363"]]);
D.install = function(s) {
  s.component("ImIcon", D);
};
var He = defineComponent({
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
    const n = L("divider"), e = s;
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
var ne = C(He, [["__scopeId", "data-v-108f9bec"]]);
ne.name = "ImDivider";
ne.install = function(s) {
  s.component("ImDivider", ne);
};
var F = (s, n) => (n.install = (e) => {
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
var te = (s, n) => {
  let e;
  return function(...a) {
    e && clearTimeout(e), e = setTimeout(() => {
      s.apply(this, a);
    }, n);
  };
};
var _e = (s, n, e) => {
  if (!e) return false;
  const a = e.getBoundingClientRect();
  return s >= a.left && s <= a.left + a.width && n >= a.top && n <= a.top + a.height;
};
var Xe = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"];
var Ie = (s) => {
  if (typeof s == "number") return `${s}px`;
  const n = String(s);
  return s ? Xe.some((e) => n.includes(e)) ? n : `${s}px` : "";
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
    const n = L("anchor");
    let e = null;
    const a = ref(null), t = ref(null), l = ref(null), i = s;
    watch(
      () => i.target,
      () => {
        e && e(), e = m();
      }
    ), onMounted(() => {
      e = m();
    }), onUnmounted(() => {
      e && e();
    });
    function v(p) {
      let I = p == null ? void 0 : p.scrollTop;
      return a.value === window && (I = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), I;
    }
    function f(p) {
      var A;
      if (l.value || !a.value) return;
      const I = a.value === window ? p.target : a.value;
      let w = v(I);
      const k = I.offsetTop || 0, M = (i.data || []).map(({ id: _ }) => {
        const b = document.getElementById(_);
        return b ? {
          id: _,
          offsetTop: b.offsetTop - k,
          el: b
        } : null;
      }).filter(Boolean);
      t.value = null;
      for (let _ = 0; _ < M.length; _++) {
        const b = M[_];
        if (w >= b.offsetTop - (i.offset || 0) && w <= b.offsetTop + (((A = b.el) == null ? void 0 : A.clientHeight) || 0) - (i.offset || 0)) {
          t.value = b.id;
          return;
        }
      }
      if (!t.value && w >= (parseInt(String(i.offset)) || 0)) {
        const _ = M.find((b) => w <= b.offsetTop - (i.offset || 0) && w > (i.offset || 0) ? (t.value = b.id, true) : false);
        _ && (t.value = _.id);
      }
    }
    function m() {
      const p = i.target ? typeof i.target == "string" ? document.querySelector(i.target) : i.target : window;
      if (!p)
        return null;
      a.value = p;
      const I = fe(f, 50);
      return f({ target: p }), p.addEventListener("scroll", I, { passive: true }), () => {
        p.removeEventListener("scroll", I);
      };
    }
    async function r(p) {
      var k, M, A;
      if (t.value === p || !p) return;
      l.value = p, t.value = p;
      const I = document.getElementById(p);
      if (!I) return;
      (M = a.value) == null || M.scrollTo({
        // @ts-ignore
        top: I.offsetTop - (i.offset || 0) - (((k = a.value) == null ? void 0 : k.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const w = te(() => {
        var _;
        l.value = null, (_ = a.value) == null || _.removeEventListener("scroll", w);
      }, 300);
      (A = a.value) == null || A.addEventListener("scroll", w, { passive: true });
    }
    return (p, I) => {
      const w = resolveDirective("ripple");
      return i.data && i.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(n).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.data, (k) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(n).e("item"), unref(n).is("active", t.value === k.id)]),
          onClick: () => r(k.id)
        }, [
          t.value === k.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(n).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(k.text), 1)
        ], 10, Ue)), [
          [w, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Ge = C(je, [["__scopeId", "data-v-4840d244"]]);
var Je = F("ImAnchor", Ge);
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
    const e = n, a = ref(null), t = s, l = L("alert"), i = useSlots(), v = computed(() => !!(t.showIcon && t.title)), f = computed(() => {
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
    }), m = async () => {
      var r, p;
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
      }), await new Promise((I) => setTimeout(I, 300)), (p = a.value) == null || p.remove();
    };
    return (r, p) => {
      const I = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: a,
        class: normalizeClass([unref(l).b(), unref(l).m(t.color || "primary"), t.variant && unref(l).m(t.variant || "")])
      }, [
        t.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(l).e("icon")])
        }, [
          renderSlot(r.$slots, "icon", {}, () => [
            createVNode(unref(D), {
              name: f.value,
              size: v.value ? 24 : 16
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
            renderSlot(r.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(t.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(l).e("message")])
          }, [
            renderSlot(r.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(t.message), 1)
            ], true)
          ], 2)
        ], 2),
        t.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(l).e("close")]),
          onClick: m
        }, [
          renderSlot(r.$slots, "close", {}, () => [
            createVNode(unref(D), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [I, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var Qe = C(Ke, [["__scopeId", "data-v-d11fdcb2"]]);
var Ze = F("ImAlert", Qe);
var et = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = useSlots(), a = n, t = L("breadcrumb"), l = s, i = computed(
      () => {
        var f, m;
        return (m = (f = e.default) == null ? void 0 : f.call(e)) == null ? void 0 : m.filter((r) => {
          var p;
          return (r == null ? void 0 : r.type) && ((p = r == null ? void 0 : r.type) == null ? void 0 : p.name) === "ImBreadcrumbItem";
        });
      }
    ), v = (f) => {
      f && l.modelValue !== f && (a("update:modelValue", f), a("change", f));
    };
    return (f, m) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (r, p) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(r), {
          active: l.modelValue,
          onClick: v
        }, null, 8, ["active"])),
        i.value && i.value.length > 0 && p < i.value.length - 1 ? (openBlock(), createElementBlock("span", {
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
var tt = C(et, [["__scopeId", "data-v-64336468"]]);
var nt = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = L("breadcrumb__item"), a = s, t = n;
    return (l, i) => (openBlock(), createElementBlock("div", {
      onClick: i[0] || (i[0] = () => t("click", a.value)),
      class: normalizeClass([unref(e).b(), unref(e).is("active", a.active === a.value && !!a.value)])
    }, [
      renderSlot(l.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var st = C(nt, [["__scopeId", "data-v-40ed04b1"]]);
var at = F("ImBreadcrumb", tt);
var ot = F("ImBreadcrumb", st);
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
var ke = defineComponent({
  name: "ImLayer",
  __name: "ImLayer",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: "" },
    getTarget: { type: Function, default: () => null },
    placement: {}
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const e = n, { zIndexToken: a } = G(), t = L("layer"), l = s, i = computed(() => l.zIndex || a.value || 1e3);
    watch(() => l.visible, (_) => {
      window.removeEventListener("resize", v), _ && window.addEventListener("resize", v, { passive: true });
    });
    function v() {
      console.log("resize"), e("close");
    }
    const f = ["bottom", "bottom-left", "bottom-right"], m = ["top", "top-left", "top-right"], r = ["right", "right-top", "right-bottom"], p = ["left", "left-top", "left-bottom"];
    function I(_, b, c = "bottom-left") {
      const $ = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      let u = 0;
      if (f.includes(c))
        u = _.bottom;
      else if (m.includes(c))
        u = _.top - b.height;
      else if (r.includes(c) || p.includes(c))
        switch (c) {
          case "right":
          case "left":
            u = _.top + _.height * 0.5 - b.height / 2;
            break;
          case "right-top":
          case "left-top":
            u = _.top;
            break;
          case "right-bottom":
          case "left-bottom":
            u = _.top + _.height - b.height;
            break;
        }
      return $ - u < b.height ? $ - (b.height + 4) : u || _.bottom;
    }
    function w(_, b, c = "bottom-left") {
      const $ = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let u = 0;
      if (f.includes(c) || m.includes(c))
        switch (c) {
          case "bottom":
          case "top":
            u = _.right - _.width / 2 - b.width / 2;
            break;
          case "bottom-right":
          case "top-right":
            u = _.right - b.width;
            break;
        }
      else r.includes(c) ? (u = _.right, console.log(u, "left")) : p.includes(c) && (u = _.left - b.width);
      const y = $ - u - 4;
      return y < b.width ? (console.log("left", u, $ - u), u - y) : u || _.left || 0;
    }
    function k(_, b = "bottom-left") {
      if (m.includes(b)) {
        _.style.transformOrigin = "center bottom";
        return;
      }
      if ((r.includes(b) || p.includes(b)) && ["right-bottom", "left-bottom"].includes(b)) {
        _.style.transformOrigin = "center bottom";
        return;
      }
      _.style.transformOrigin = "center top";
    }
    async function M(_) {
      var b;
      try {
        const c = _, $ = (b = l.getTarget) == null ? void 0 : b.call(l), u = l.placement || "bottom-left";
        if (c.getAnimations().forEach((y) => y == null ? void 0 : y.cancel()), c.style.opacity = "0", k(c, u), $) {
          const y = $.getBoundingClientRect();
          c.style.minWidth = `${y.width}px`, c.style.top = `${y.top}px`, c.style.left = `${y.left}px`, await new Promise((K) => requestAnimationFrame(K));
          const B = c.getBoundingClientRect();
          c.style.top = `${I(y, B, u)}px`, c.style.left = `${w(y, B, u)}px`;
        }
        c.style.opacity = "1", c.animate([
          { opacity: 0, transform: "scaleY(0.9)" },
          { opacity: 1, transform: "scaleY(1)" }
        ], {
          duration: 200,
          easing: "ease"
        });
      } catch (c) {
        console.error(c);
      }
    }
    function A(_, b) {
      const c = _;
      c.getAnimations().forEach(($) => $.cancel()), c.animate([
        { opacity: 1, transform: "scaleY(1)" },
        { opacity: 0, transform: "scaleY(0.9)" }
      ], {
        duration: 200,
        easing: "ease"
      }), Promise.all(
        c.getAnimations().map(($) => $.finished)
      ).finally(b);
    }
    return (_, b) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, {
        css: false,
        duration: { enter: 200, leave: 200 },
        mode: "out-in",
        onBeforeEnter: M,
        onLeave: A
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
var it = defineComponent({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: false },
    trigger: { default: "hover" },
    placement: { default: "bottom-left" },
    zIndex: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = n, a = L("dropdown"), t = s, l = ref(null), i = ref(null), v = ref(t.modelValue || false);
    let f = null, m = 60;
    const { x: r, y: p } = lt(30);
    onMounted(() => {
      f && f(), f = _();
    }), onUnmounted(() => {
      f && f();
    }), watch(() => t.trigger, () => {
      f && f(), f = _();
    });
    const I = fe(() => {
      const b = _e(r.value, p.value, i.value);
      _e(r.value, p.value, l.value) || b || (v.value = false);
    }, m);
    watch(() => [r.value, p.value], () => {
      t.trigger != "hover" || !v.value || I();
    });
    function w() {
      const b = l.value;
      return (b == null ? void 0 : b.children.length) !== 1 ? b : b.children[0];
    }
    function k() {
      v.value = true, e("update:modelValue", v.value), e("change", v.value), window.addEventListener("scroll", A, { passive: true, capture: true });
    }
    function M() {
      v.value = false, e("update:modelValue", v.value), e("change", v.value), window.removeEventListener("scroll", A);
    }
    function A(b) {
      var c;
      (c = i.value) != null && c.contains(b.target) || M();
    }
    function _() {
      var c, $;
      f && f();
      const b = te((u) => {
        var y;
        (y = l.value) != null && y.contains(u.target) || M();
      }, m);
      if (document.addEventListener("click", b, { passive: true }), t.trigger === "hover") {
        const u = te(k, m);
        return (c = l.value) == null || c.addEventListener("mouseenter", u, { passive: true }), () => {
          var y;
          (y = l.value) == null || y.removeEventListener("mouseenter", u), document.removeEventListener("click", b);
        };
      }
      if (t.trigger === "click") {
        const u = te(() => {
          v.value ? M() : k();
        }, m);
        return ($ = l.value) == null || $.addEventListener("click", u, { passive: true }), () => {
          var y;
          (y = l.value) == null || y.removeEventListener("click", u), document.removeEventListener("click", b);
        };
      }
      return null;
    }
    return (b, c) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(a).b()]),
      ref_key: "dropdownRef",
      ref: l
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode(ke, {
        visible: v.value,
        placement: t.placement,
        "z-index": t.zIndex,
        getTarget: w,
        onClose: M
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "contentRef",
            ref: i,
            class: normalizeClass([unref(a).e("content"), "im-shadow"])
          }, [
            renderSlot(b.$slots, "content", {}, void 0, true)
          ], 2)
        ]),
        _: 3
      }, 8, ["visible", "placement", "z-index"])
    ], 2));
  }
});
var rt = C(it, [["__scopeId", "data-v-fe8cd2c2"]]);
var ct = F("ImDropdown", rt);
var ut = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = s, a = useSlots(), t = L("list"), l = computed(() => {
      var m;
      const f = ((m = a.default) == null ? void 0 : m.call(a)) || [];
      if (f.length) {
        const r = [];
        return f.forEach((p) => {
          var I, w;
          typeof p.type == "object" ? r.push(p) : p.children && ((I = p.children) != null && I.length) && ((w = p.children) == null || w.forEach((k) => {
            typeof (k == null ? void 0 : k.type) == "object" && r.push(k);
          }));
        }), r;
      }
    }), i = n, v = (f) => {
      i("update:modelValue", f.value), i("change", f.value);
    };
    return (f, m) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(t).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(l.value, (r) => (openBlock(), createBlock(resolveDynamicComponent(r), {
        active: e.modelValue,
        onClick: () => v(r.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var dt = C(ut, [["__scopeId", "data-v-fdc5814e"]]);
var mt = defineComponent({
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
    const e = L("list__item"), a = n, t = s;
    return (l, i) => {
      const v = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(e).b(), unref(e).is("active", !!(t.active && t.active === t.value))]),
        onClick: i[0] || (i[0] = (f) => a("click", f))
      }, [
        renderSlot(l.$slots, "default", {}, void 0, true)
      ], 2)), [
        [v, t.ripple]
      ]);
    };
  }
});
var pt = C(mt, [["__scopeId", "data-v-5bde9fbf"]]);
var ft = F("ImList", dt);
var vt = F("ImListItem", pt);
var gt = ["src", "srcset", "alt", "loading"];
var ht = defineComponent({
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
    const e = n, a = L("avatar"), t = s, l = (i) => {
      console.log(i.target), e("error", i);
    };
    return (i, v) => (openBlock(), createElementBlock("span", {
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
        renderSlot(i.$slots, "default", {}, void 0, true)
      ], 2)) : (openBlock(), createElementBlock("img", {
        key: 1,
        onError: l,
        src: t.src,
        srcset: t.srcset,
        alt: t.alt,
        loading: t.loading,
        class: normalizeClass([unref(a).e("img")])
      }, null, 42, gt))
    ], 6));
  }
});
var yt = C(ht, [["__scopeId", "data-v-c4c32038"]]);
var bt = F("ImAvatar", yt);
var _t = () => ({
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
var It = (s = "right") => {
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
      a.style.transform = e, a.style.opacity = "0", a.style.transition = "transform 200ms ease, opacity 200ms ease", await new Promise((i) => requestAnimationFrame(i));
      const l = () => {
        t(), a && a.removeEventListener("transitionend", l);
      };
      a.addEventListener("transitionend", l, { passive: true });
    }
  };
};
var wt = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const e = L("mask"), { zIndexToken: a } = G(), t = s, l = _t(), i = n, v = () => {
      t.closeOnClickMask && i("close", false);
    };
    return (f, m) => (openBlock(), createBlock(Transition, {
      onEnter: unref(l).onEnter,
      onLeave: unref(l).onLeave
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(e).b()]),
          style: normalizeStyle({
            zIndex: t.zIndex || unref(a)
          }),
          onClick: v
        }, [
          renderSlot(f.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, t.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
});
var kt = C(wt, [["__scopeId", "data-v-2ba470f4"]]);
var ve = F("ImMask", kt);
var xt = ["aria-modal"];
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
    const e = L("drawer"), a = n, t = s, l = ref(null), i = It(t.placement), { zIndexToken: v } = G(), f = () => {
      a("update:modelValue", false);
    };
    return (m, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: l,
        class: normalizeClass([unref(e).b(), t.placement ? unref(e).m(t.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": (parseInt(String(t.size)) || 378) + "px", zIndex: t.zIndex || unref(v) }),
        "aria-modal": t.modelValue
      }, [
        t.mask ? (openBlock(), createBlock(unref(ve), {
          key: 0,
          visible: t.modelValue,
          closeOnClickMask: t.closeOnClickMask,
          onClose: f,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: unref(i).onEnter,
          onLeave: unref(i).onLeave
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(e).e("content")])
            }, [
              renderSlot(m.$slots, "default", {}, void 0, true)
            ], 2), [
              [vShow, t.modelValue]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ], 14, xt)
    ]));
  }
});
var Lt = C(zt, [["__scopeId", "data-v-1b0178a0"]]);
var Ct = F("ImDrawer", Lt);
var $t = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(s) {
    const n = L("card"), e = s;
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
var Et = C($t, [["__scopeId", "data-v-bb9cd52c"]]);
var Bt = F("ImCard", Et);
var Tt = ["data-index", "onMouseenter", "onMouseleave"];
var Vt = { class: "im-message__text" };
var St = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(s, { expose: n }) {
    const e = L("message"), a = s, t = ref([]);
    let l = null;
    watch(() => t.value, () => {
      t.value.length === 0 ? l = setTimeout(() => {
        !t.value.length && a.callback();
      }, 500) : (l && clearTimeout(l), l = null);
    });
    const i = (r) => {
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
    }, v = (r) => {
      r.timer && (clearTimeout(r.timer), r.timer = null);
    }, f = (r) => {
      r.timer && clearTimeout(r.timer), r.timer = setTimeout(() => {
        t.value = t.value.filter((p) => p.id !== r.id);
      }, r.duration || 3e3);
    }, m = (r) => {
      const p = setTimeout(() => {
        t.value = t.value.filter((I) => I.id !== r.id);
      }, r.duration || 3e3);
      t.value.push({ ...r, timer: p });
    };
    return a.add && a.add(m), n({ addMsg: m }), (r, p) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(e).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.value, (I) => (openBlock(), createElementBlock("li", {
          key: I.id,
          "data-index": I.id,
          onMouseenter: () => v(I),
          onMouseleave: () => f(I),
          class: normalizeClass(["im-message__item", [unref(e).e("item"), I.color ? unref(e).e(I.color) : ""]])
        }, [
          createVNode(unref(D), {
            name: i(I.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", Vt, toDisplayString(I.msg), 1)
        ], 42, Tt))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var Mt = C(St, [["__scopeId", "data-v-820c83a9"]]);
var Pt = class {
  constructor() {
    Z(this, "app");
    Z(this, "container");
    Z(this, "addMsgToList");
    this.app = null, this.container = null, this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    if (typeof window < "u" && window) {
      this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
      const n = this;
      this.app = createApp(Mt, {
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
var N = null;
var an = () => (N || (N = new Pt()), {
  info: (s, n = 3e3) => {
    N == null || N.info(s, n);
  },
  success: (s, n = 3e3) => {
    N == null || N.success(s, n);
  },
  warning: (s, n = 3e3) => {
    N == null || N.warning(s, n);
  },
  error: (s, n = 3e3) => {
    N == null || N.error(s, n);
  }
});
var At = ["data-visible", "data-esc"];
var Nt = defineComponent({
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
    const e = L("dialog"), a = n, t = s, l = ref(null), { zIndexToken: i } = G();
    watch(
      () => t.modelValue,
      (r) => {
        r ? t.closeOnEscape && window.addEventListener("keydown", v, { passive: true }) : window.removeEventListener("keydown", v);
      }
    );
    function v(r) {
      if (r.key === "Escape" || r.code === "Escape") {
        const p = document.querySelectorAll(
          '.im-dialog[data-visible="true"][data-esc="true"]'
        );
        p.length && l.value && Array.from(p).pop() === l.value && a("update:modelValue", false);
      }
    }
    const f = async (r, p) => {
      r.style.setProperty("opacity", "0"), r.style.setProperty("transition", "all 0.2s ease"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.getBoundingClientRect(), r.style.setProperty("opacity", "1"), r.style.setProperty("transform", "translateY(0) scale(1)"), p(), !document.body.classList.contains("im-overflow-hidden") && document.body.classList.add("im-overflow-hidden");
    }, m = async (r, p) => {
      r.style.setProperty("opacity", "0"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.style.setProperty("transition", "all 0.2s ease");
      const I = () => {
        p(), Array.from(
          document.body.querySelectorAll('.im-dialog[data-visible="true"]')
        ).length || document.body.classList.remove("im-overflow-hidden"), r.removeEventListener("transitionend", I);
      };
      r.addEventListener("transitionend", I, { passive: true });
    };
    return (r, p) => (openBlock(), createBlock(Teleport, { to: "body" }, [
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
        t.mask && !t.fullscreen ? (openBlock(), createBlock(unref(ve), {
          key: 0,
          closeOnClickMask: t.closeOnClickMask,
          visible: t.modelValue,
          onClose: p[0] || (p[0] = () => a("update:modelValue", false))
        }, null, 8, ["closeOnClickMask", "visible"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: f,
          duration: { enter: 200, leave: 200 },
          onLeave: m
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
      ], 14, At)
    ]));
  }
});
var Dt = C(Nt, [["__scopeId", "data-v-8ba4a4fb"]]);
var Rt = F("ImDialog", Dt);
var Ot = defineComponent({
  name: "ImOption",
  __name: "ImOption",
  props: {
    disabled: { type: Boolean, default: false },
    value: { default: "" },
    label: {},
    selectList: { default: () => [] }
  },
  emits: ["change"],
  setup(s, { emit: n }) {
    const e = L("option"), a = n, t = s;
    function l(i) {
      if (i.preventDefault(), i.stopPropagation(), t.disabled) return;
      const v = t.value || t.label;
      v && a("change", v);
    }
    return (i, v) => {
      var m;
      const f = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        onClick: l,
        class: normalizeClass([unref(e).b(), unref(e).is("disabled", !!t.disabled), unref(e).is("active", (m = t.selectList) == null ? void 0 : m.includes(t.value || t.label || ""))])
      }, [
        renderSlot(i.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(t.label || t.value), 1)
        ], true)
      ], 2)), [
        [f, !t.disabled]
      ]);
    };
  }
});
var Yt = C(Ot, [["__scopeId", "data-v-17da86b4"]]);
var Ft = ["placeholder"];
var Wt = { key: 1 };
var qt = defineComponent({
  __name: "Trigger",
  props: {
    label: { default: "" },
    show: { type: Boolean },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    filter: { type: Boolean, default: false },
    multiple: { type: Boolean }
  },
  emits: ["filter-change"],
  setup(s, { emit: n }) {
    const e = L("select"), a = n, t = s, l = ref("");
    watch(() => l.value, (v) => {
      v && a("filter-change", v);
    }), watch(() => t.label, (v) => {
      l.value = "";
    });
    const i = computed(() => t.multiple ? String(t.label).split(",") : "");
    return (v, f) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).e("trigger-label"), unref(e).is("disabled", t.disabled)])
    }, [
      t.filter && t.show ? withDirectives((openBlock(), createElementBlock("input", {
        key: 0,
        class: normalizeClass([unref(e).e("input")]),
        tabindex: "-1",
        "onUpdate:modelValue": f[0] || (f[0] = (m) => l.value = m),
        type: "text",
        placeholder: t.placeholder
      }, null, 10, Ft)), [
        [vModelText, l.value]
      ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        t.multiple ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(e).e("tags")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (m, r) => (openBlock(), createElementBlock("span", { key: r }, toDisplayString(m), 1))), 128))
        ], 2)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(e).e("default")])
        }, [
          t.placeholder && !t.label ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(e).e("placeholder")])
          }, toDisplayString(t.placeholder), 3)) : (openBlock(), createElementBlock("span", Wt, toDisplayString(t.label), 1))
        ], 2))
      ], 64))
    ], 2));
  }
});
var Ht = C(qt, [["__scopeId", "data-v-3d86139e"]]);
var Xt = defineComponent({
  name: "ImSelect",
  __name: "ImSelect",
  props: {
    modelValue: { default: "" },
    options: { default: () => [] },
    width: { default: "" },
    size: {},
    placeholder: { default: "" },
    allowClear: { type: Boolean, default: false },
    zIndex: {},
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    filter: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const e = L("select"), a = n, t = s, { sizeToken: l } = G(), i = ref(false), v = ref([]), f = ref(null), m = ref(null), r = computed(() => Ie(t.width)), p = computed(() => Ie(t.size || l.value || "36px")), I = computed(() => {
      var u;
      return t.multiple ? t.options.filter((y) => v.value.includes(String(y.value))).map((y) => y.label).join(",") : ((u = t.options.find((y) => y.value === t.modelValue)) == null ? void 0 : u.label) || "";
    });
    watch(() => t.modelValue, () => {
      M();
    }, { immediate: true }), watch(() => i.value, (u) => {
      document.removeEventListener("click", _, { capture: true }), u ? document.addEventListener("click", _, { capture: true }) : window.removeEventListener("scroll", A, { capture: true });
    });
    function w(u) {
    }
    function k() {
      i.value = false;
    }
    function M() {
      var u;
      t.multiple ? v.value = ((u = String(t.modelValue)) == null ? void 0 : u.split(",")) || [] : v.value = [t.modelValue];
    }
    function A(u) {
      var y;
      (y = m.value) != null && y.contains(u.target) || m.value === u.target || k();
    }
    function _(u) {
      var y, B;
      (y = f.value) != null && y.contains(u.target) || f.value === u.target || u.target === m.value || t.multiple && ((B = m.value) != null && B.contains(u.target)) || m.value === u.target || k();
    }
    async function b() {
      var y;
      if (i.value) return;
      i.value = true, await new Promise((B) => requestAnimationFrame(B));
      const u = (y = m.value) == null ? void 0 : y.querySelector(`.${e.is("active", true)}`);
      u && u.scrollIntoView({ behavior: "instant", block: "nearest" }), await new Promise((B) => requestAnimationFrame(B)), window.addEventListener("scroll", A, { capture: true });
    }
    function c(u) {
      if (t.multiple) {
        const y = v.value;
        y.includes(u) ? y.splice(y.indexOf(u), 1) : y.push(u), a("update:modelValue", y.join(","));
        return;
      } else
        a("update:modelValue", u);
    }
    function $(u) {
      u.preventDefault(), u.stopPropagation(), a("update:modelValue", "");
    }
    return (u, y) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-select-width": r.value,
        "--im-select-height": p.value
      })
    }, [
      createBaseVNode("div", {
        onClick: b,
        class: normalizeClass([unref(e).e("trigger"), unref(e).is("open", i.value)]),
        ref_key: "triggerRef",
        ref: f,
        tabindex: "-1"
      }, [
        createVNode(Ht, {
          show: i.value,
          label: I.value,
          multiple: t.multiple,
          disabled: t.disabled,
          filter: t.filter,
          onFilterChange: w,
          placeholder: t.placeholder
        }, null, 8, ["show", "label", "multiple", "disabled", "filter", "placeholder"]),
        createBaseVNode("span", {
          class: normalizeClass([unref(e).e("icon-down"), unref(e).is("rotate", i.value)])
        }, [
          renderSlot(u.$slots, "downIcon", {}, () => [
            createVNode(unref(D), {
              name: "down",
              size: "12"
            })
          ], true)
        ], 2),
        t.allowClear && I.value ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(e).e("clear-icon")]),
          onClick: $
        }, [
          renderSlot(u.$slots, "clearIcon", {}, () => [
            createVNode(unref(D), {
              name: "close-circle-fill",
              size: "18"
            })
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 2),
      createVNode(ke, {
        visible: i.value,
        getTarget: () => f.value,
        "z-index": t.zIndex,
        onClose: k
      }, {
        default: withCtx(() => [
          createBaseVNode("ul", {
            class: normalizeClass([unref(e).e("list"), "im-shadow"]),
            ref_key: "listRef",
            ref: m
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(t.options, (B, K) => (openBlock(), createBlock(Yt, {
              key: B.value || B.label || K,
              disabled: B.disabled,
              "select-list": v.value,
              value: B.value,
              label: B.label,
              onChange: c
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(B.label || B.value), 1)
              ]),
              _: 2
            }, 1032, ["disabled", "select-list", "value", "label"]))), 128))
          ], 2)
        ]),
        _: 1
      }, 8, ["visible", "getTarget", "z-index"])
    ], 6));
  }
});
var Ut = C(Xt, [["__scopeId", "data-v-f1a3241e"]]);
var xe = F("ImSelect", Ut);
var jt = ["aria-disabled"];
var Gt = ["onClick", "title"];
var Jt = ["aria-disabled"];
var Kt = defineComponent({
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
    const e = L("pagination"), a = n, t = s, l = ref(t.pageSize), i = ref([1]), { sizeToken: v } = G(), f = computed(() => parseInt(String(t.size || v.value || 36)) + "px"), m = computed(() => Math.ceil(t.total / (l.value || 10))), r = computed(() => t.pageNumber === 1), p = computed(() => t.pageNumber >= m.value), I = computed(() => t.pageSizeItems.map((c) => ({ label: `${c} 条/页`, value: c })));
    watch(() => l.value, (c) => {
      m.value < t.pageNumber ? a("change", { pageSize: c, pageNumber: m.value }) : a("change", { pageSize: c, pageNumber: t.pageNumber });
    }), watch(() => [t.pageNumber, t.pageSize], () => {
      l.value = t.pageSize, k(m.value < t.pageNumber ? m.value : t.pageNumber);
    }, { immediate: true });
    function w(c) {
      t.pageNumber !== c && a("change", { pageNumber: c, pageSize: t.pageSize });
    }
    function k(c) {
      if (m.value <= 1)
        i.value = [1];
      else {
        const $ = Math.ceil(c / 5), u = [];
        let y = $ * 5 - 4;
        for (let B = 0; B < 5; B++) {
          let K = y + B;
          if (K > m.value)
            break;
          u.push(K);
        }
        c - 5 >= 1 && (u.unshift("left"), u.unshift(1)), c + 5 <= m.value && (u.push("right"), u.push(m.value)), i.value = u, w(c);
      }
    }
    function M() {
      const c = t.pageNumber + 1;
      if (c > m.value) return w(t.pageNumber);
      if (i.value.includes(c))
        return w(c);
      k(c);
    }
    function A() {
      const c = t.pageNumber - 1;
      if (c < 1) return w(t.pageNumber);
      if (i.value.includes(c))
        return w(c);
      k(c);
    }
    function _() {
      const c = t.pageNumber + 5;
      if (c > m.value) return w(m.value);
      k(c);
    }
    function b() {
      const c = t.pageNumber - 5;
      if (c < 1) return w(1);
      k(c);
    }
    return (c, $) => {
      const u = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(e).b()]),
        style: normalizeStyle({
          "--im-pagination-size": f.value
        })
      }, [
        c.layout.includes("total") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(e).e("total")])
        }, "共 " + toDisplayString(c.total) + " 条数据", 3)) : createCommentVNode("", true),
        c.layout.includes("prev") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(e).e("prev"), unref(e).is("disabled", r.value)]),
          "aria-disabled": r.value,
          onClick: A
        }, [
          createVNode(unref(D), {
            name: "left",
            size: "14px"
          })
        ], 10, jt)), [
          [u, !r.value]
        ]) : createCommentVNode("", true),
        c.layout.includes("pager") ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(e).e("pager")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (y) => (openBlock(), createElementBlock(Fragment, null, [
            y === "left" ? (openBlock(), createElementBlock("div", {
              key: 0,
              title: "向前5页",
              class: normalizeClass([unref(e).e("page-item"), unref(e).e("left")]),
              onClick: b
            }, [
              createVNode(unref(D), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(D), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : y !== "right" ? withDirectives((openBlock(), createElementBlock("div", {
              key: 1,
              onClick: () => w(y),
              class: normalizeClass([unref(e).e("page-item"), unref(e).is("active", y === t.pageNumber)]),
              title: String(y)
            }, [
              createTextVNode(toDisplayString(y), 1)
            ], 10, Gt)), [
              [u, true]
            ]) : y === "right" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass([unref(e).e("page-item"), unref(e).e("right")]),
              title: "向后5页",
              onClick: _
            }, [
              createVNode(unref(D), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(D), {
                name: "arrowright",
                class: "im-icon--arrowright"
              })
            ], 2)) : createCommentVNode("", true)
          ], 64))), 256))
        ], 2)) : createCommentVNode("", true),
        c.layout.includes("next") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(e).e("next"), unref(e).is("disabled", p.value)]),
          "aria-disabled": p.value,
          onClick: M
        }, [
          createVNode(unref(D), {
            name: "right",
            size: "14px"
          })
        ], 10, Jt)), [
          [u, !p.value]
        ]) : createCommentVNode("", true),
        c.layout.includes("sizes") ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass([unref(e).e("size")])
        }, [
          createVNode(unref(xe), {
            options: I.value,
            modelValue: l.value,
            "onUpdate:modelValue": $[0] || ($[0] = (y) => l.value = y),
            size: t.size
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var Qt = C(Kt, [["__scopeId", "data-v-3bb837f2"]]);
var Zt = F("ImPagination", Qt);
var en = [
  le,
  re,
  ie,
  ce,
  D,
  ne,
  Je,
  Ze,
  at,
  ot,
  ct,
  ft,
  vt,
  bt,
  ve,
  Ct,
  Bt,
  Rt,
  Zt,
  xe
];
var tn = (s, n) => {
  s.provide(we, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), s.directive("ripple", Pe), en.forEach((e) => {
    e.name ? s.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var on = {
  install: tn
};
export {
  Ze as ImAlert,
  Je as ImAnchor,
  bt as ImAvatar,
  at as ImBreadcrumb,
  ot as ImBreadcrumbItem,
  le as ImButton,
  Bt as ImCard,
  re as ImCol,
  Rt as ImDialog,
  ne as ImDivider,
  Ct as ImDrawer,
  ct as ImDropdown,
  D as ImIcon,
  ce as ImInput,
  ft as ImList,
  vt as ImListItem,
  ve as ImMask,
  Zt as ImPagination,
  ie as ImRow,
  xe as ImSelect,
  on as default,
  an as useImMessage
};
//# sourceMappingURL=im-design.js.map
