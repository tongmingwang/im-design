import {
  Fragment,
  Teleport,
  Text,
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
  onBeforeMount,
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
  useAttrs,
  useSlots,
  vModelDynamic,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.43/node_modules/im-design/dist/im-design.js
var Fe = Object.defineProperty;
var ze = (n) => {
  throw TypeError(n);
};
var We = (n, a, t) => a in n ? Fe(n, a, { enumerable: true, configurable: true, writable: true, value: t }) : n[a] = t;
var ue = (n, a, t) => We(n, typeof a != "symbol" ? a + "" : a, t);
var $e = (n, a, t) => a.has(n) || ze("Cannot " + t);
var de = (n, a, t) => ($e(n, a, "read from private field"), t ? t.call(n) : a.get(n));
var Te = (n, a, t) => a.has(n) ? ze("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(n) : a.set(n, t);
var Be = (n, a, t, s) => ($e(n, a, "write to private field"), s ? s.call(n, t) : a.set(n, t), t);
var Pe = Symbol("im-design-token");
var se;
var et = class {
  constructor() {
    Te(this, se);
    Be(this, se, []);
  }
  async add(a) {
    de(this, se).push(a);
  }
  remove() {
    try {
      const a = de(this, se).shift();
      a && this.run(a);
    } catch (a) {
      console.error(a);
    }
  }
  async run(a) {
    try {
      const t = a.querySelector(".im-ripple__item");
      if (!t) return;
      let s = Date.now(), e = t.getAttribute("data-time");
      const r = s - Number(e) || 0;
      r && await new Promise((l) => {
        t.style.opacity = "0.1";
        const u = 200 - r;
        setTimeout(
          () => {
            l(null);
          },
          u > 0 ? u : 0
        );
      }), t.style.opacity = "0", t.style.transition = "all 50ms", setTimeout(() => {
        a && (a == null || a.remove()), de(this, se).length && this.remove();
      }, 50);
    } catch (t) {
      console.log(t);
    }
  }
};
se = /* @__PURE__ */ new WeakMap();
async function tt(n, a, t) {
  const s = window.getComputedStyle(t), e = t.getBoundingClientRect(), r = document.createElement("div");
  r.className = "im-ripple", a.add(r);
  const l = document.createElement("div");
  l.className = "im-ripple__item";
  const u = n.clientX || n.touches && n.touches[0].clientX, f = n.clientY || n.touches && n.touches[0].clientY, m = Math.max(e.width, e.height), i = u - e.left - m / 2, c = f - e.top - m / 2, v = e.width - e.height <= 5;
  Object.assign(l.style, {
    "background-color": s.color,
    width: `${m}px`,
    height: `${m}px`,
    left: `${i}px`,
    top: `${c}px`,
    opacity: "0.15",
    transform: v ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), l.setAttribute("data-time", Date.now() + ""), r.appendChild(l), t.appendChild(r);
  const h = s.position;
  h === "static" && (t.style.position = "relative", t.dataset.originalPosition = h), l.getBoundingClientRect(), l.style.transform = "scale(2.8)", l.style.opacity = "0.33";
}
var at = {
  mounted(n, a) {
    n.IM_RIPPLE_VALUE = a.value;
    const t = new et(), s = (u) => {
      n.IM_RIPPLE_VALUE && tt(u, t, n);
    }, e = () => {
      t.remove();
    }, r = () => {
      n.addEventListener("mousedown", s, { passive: true }), window.addEventListener("mouseup", e, { passive: true });
    }, l = () => {
      n.removeEventListener("mousedown", s), window.removeEventListener("mouseup", e);
    };
    r(), n._rippleListeners = { remove: l };
  },
  beforeUnmount(n) {
    var a;
    (a = n._rippleListeners) == null || a.remove();
  },
  updated(n, a) {
    n.IM_RIPPLE_VALUE = a.value;
  }
};
var L = (n) => {
  const a = "im-" + n;
  return {
    b: () => a,
    e: (t) => `${a}__${t}`,
    m: (t) => `${a}--${t}`,
    is: (t, s) => s ? `is-${t}` : ""
  };
};
var ne = (n, a) => {
  const t = inject(Pe), s = ref(Number(t.size || 36)), e = ref(t.zIndex || 1e3);
  return { sizeToken: s, zIndexToken: e };
};
var nt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function st(n, a) {
  return openBlock(), createElementBlock("svg", nt, a[0] || (a[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var ot = { render: st };
var lt = ["tabindex", "type", "disabled"];
var it = defineComponent({
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
  setup(n, { expose: a, emit: t }) {
    const s = n, e = t, r = L("button"), { sizeToken: l } = ne(), u = useAttrs(), f = computed(() => [
      r.b(),
      s.color && r.m(s.color),
      s.shape && r.m(s.shape),
      s.variant && r.m(s.variant),
      r.is("disabled", s.disabled),
      r.is("loading", s.loading)
    ].filter(Boolean)), m = ref(), i = computed(() => {
      let h = +(s.size || l.value || 36);
      return {
        "--im-button-size": h + "px",
        "--im-button-padding": (h * 0.45).toFixed(0) + "px",
        width: s.width
      };
    });
    a({
      ref: m,
      $el: m,
      focus: () => {
        var h;
        return (h = m.value) == null ? void 0 : h.focus();
      },
      blur: () => {
        var h;
        return (h = m.value) == null ? void 0 : h.blur();
      }
    });
    const c = computed(() => s.loading && ["square", "circle"].includes(s.shape)), v = () => {
      s.disabled || s.loading || e("click");
    };
    return (h, x) => {
      const O = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", mergeProps(unref(u), {
        class: f.value,
        onClick: v,
        ref_key: "buttonRef",
        ref: m,
        style: i.value,
        tabindex: s.tabindex || 0,
        type: s.type || "button",
        disabled: s.disabled || s.loading
      }), [
        s.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(r).e("loading")])
        }, [
          createVNode(unref(ot))
        ], 2)) : createCommentVNode("", true),
        c.value ? createCommentVNode("", true) : renderSlot(h.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(s.text), 1)
        ], true)
      ], 16, lt)), [
        [O, true]
      ]);
    };
  }
});
var V = (n, a) => {
  const t = n.__vccOpts || n;
  for (const [s, e] of a)
    t[s] = e;
  return t;
};
var be = V(it, [["__scopeId", "data-v-a3d92bde"]]);
be.install = (n) => {
  n.component("ImButton", be);
};
var rt = defineComponent({
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
    const a = n, t = useSlots(), s = computed(() => {
      var r;
      return ((r = t.default) == null ? void 0 : r.call(t)) || [];
    }), e = L("row");
    return (r, l) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-row-gutter": a.gutter + "px",
        "align-items": a.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (u, f) => (openBlock(), createBlock(resolveDynamicComponent(u), { key: f }))), 128))
    ], 6));
  }
});
var _e = V(rt, [["__scopeId", "data-v-5179967f"]]);
var ct = defineComponent({
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
    const a = n, t = L("col"), s = computed(
      () => +((Number(a.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (e, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()]),
      style: normalizeStyle({
        "--im-col-w": s.value,
        "--im-col-offset": a.offset
      })
    }, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var Ie = V(ct, [["__scopeId", "data-v-ecf91058"]]);
_e.install = (n) => {
  n.component("ImRow", _e);
};
Ie.install = (n) => {
  n.component("ImCol", Ie);
};
var ut = defineComponent({
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
    const t = n, { sizeToken: s } = ne(), e = a, r = ref(t.modelValue), l = L("input"), u = () => {
      e("update:modelValue", r.value), e("change", r.value);
    };
    return (f, m) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(l).b()]),
      style: normalizeStyle({
        "--in-input-size": (t.size || unref(s) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(l).e("input")],
        "onUpdate:modelValue": m[0] || (m[0] = (i) => r.value = i)
      }, t, { onInput: u }), null, 16), [
        [vModelDynamic, r.value]
      ])
    ], 6));
  }
});
var we = V(ut, [["__scopeId", "data-v-6c70856c"]]);
we.install = (n) => {
  n.component("ImInput", we);
};
var ie = (n, a) => {
  let t;
  return function(...s) {
    t || (t = setTimeout(() => {
      n.apply(this, s), t = null;
    }, a));
  };
};
var dt = (n, a) => {
  let t;
  return function(...s) {
    t && clearTimeout(t), t = setTimeout(() => {
      n.apply(this, s);
    }, a);
  };
};
var Le = (n, a, t) => {
  if (!t) return false;
  const s = t.getBoundingClientRect();
  return n >= s.left && n <= s.left + s.width && a >= s.top && a <= s.top + s.height;
};
var mt = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"];
var pe = (n) => {
  if (typeof n == "number") return `${n}px`;
  const a = String(n);
  return n ? mt.some((t) => a.includes(t)) ? a : `${n}px` : "";
};
var pt = defineComponent({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    size: { default: 16 },
    name: {},
    color: { default: "currentColor" }
  },
  setup(n) {
    const a = n, t = computed(() => pe(a.size));
    return (s, e) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(["im-icon", [`im-icon-${a.name}`]]),
      style: normalizeStyle({
        "--icon-size": t.value,
        "--icon-color": a.color
      })
    }, null, 6));
  }
});
var P = V(pt, [["__scopeId", "data-v-a82dfaa3"]]);
P.install = function(n) {
  n.component("ImIcon", P);
};
var ft = defineComponent({
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
    const a = L("divider"), t = n;
    return (s, e) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b(), unref(a).is("vertical", t.vertical)]),
      style: normalizeStyle({
        "--im-divider-color": t.color || "var(--im-gray-color-4)",
        "--im-divider-margin-size": `${t.margin || 8}px`,
        "--im-divider-size": `${t.size || 1}px`,
        "--im-divider-text-left-width": t.textLeftWidth ? t.textLeftWidth : "100%",
        "--im-divider-text-right-width": t.textRightWidth ? t.textRightWidth : "100%"
      })
    }, [
      t.vertical ? createCommentVNode("", true) : (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass([unref(a).e("text")])
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2))
    ], 6));
  }
});
var fe = V(ft, [["__scopeId", "data-v-108f9bec"]]);
fe.name = "ImDivider";
fe.install = function(n) {
  n.component("ImDivider", fe);
};
var H = (n, a) => (a.install = (t) => {
  t.component(n, a);
}, a);
var vt = ["onClick"];
var gt = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(n) {
    const a = L("anchor");
    let t = null;
    const s = ref(null), e = ref(null), r = ref(null), l = n;
    watch(
      () => l.target,
      () => {
        t && t(), t = m();
      }
    ), onMounted(() => {
      t = m();
    }), onUnmounted(() => {
      t && t();
    });
    function u(c) {
      let v = c == null ? void 0 : c.scrollTop;
      return s.value === window && (v = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), v;
    }
    function f(c) {
      var q;
      if (r.value || !s.value) return;
      const v = s.value === window ? c.target : s.value;
      let h = u(v);
      const x = v.offsetTop || 0, O = (l.data || []).map(({ id: E }) => {
        const S = document.getElementById(E);
        return S ? {
          id: E,
          offsetTop: S.offsetTop - x,
          el: S
        } : null;
      }).filter(Boolean);
      e.value = null;
      for (let E = 0; E < O.length; E++) {
        const S = O[E];
        if (h >= S.offsetTop - (l.offset || 0) && h <= S.offsetTop + (((q = S.el) == null ? void 0 : q.clientHeight) || 0) - (l.offset || 0)) {
          e.value = S.id;
          return;
        }
      }
      if (!e.value && h >= (parseInt(String(l.offset)) || 0)) {
        const E = O.find((S) => h <= S.offsetTop - (l.offset || 0) && h > (l.offset || 0) ? (e.value = S.id, true) : false);
        E && (e.value = E.id);
      }
    }
    function m() {
      const c = l.target ? typeof l.target == "string" ? document.querySelector(l.target) : l.target : window;
      if (!c)
        return null;
      s.value = c;
      const v = ie(f, 50);
      return f({ target: c }), c.addEventListener("scroll", v, { passive: true }), () => {
        c.removeEventListener("scroll", v);
      };
    }
    async function i(c) {
      var x, O, q;
      if (e.value === c || !c) return;
      r.value = c, e.value = c;
      const v = document.getElementById(c);
      if (!v) return;
      (O = s.value) == null || O.scrollTo({
        // @ts-ignore
        top: v.offsetTop - (l.offset || 0) - (((x = s.value) == null ? void 0 : x.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const h = dt(() => {
        var E;
        r.value = null, (E = s.value) == null || E.removeEventListener("scroll", h);
      }, 300);
      (q = s.value) == null || q.addEventListener("scroll", h, { passive: true });
    }
    return (c, v) => {
      const h = resolveDirective("ripple");
      return l.data && l.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(a).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(l.data, (x) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(a).e("item"), unref(a).is("active", e.value === x.id)]),
          onClick: () => i(x.id)
        }, [
          e.value === x.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(a).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(x.text), 1)
        ], 10, vt)), [
          [h, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var ht = V(gt, [["__scopeId", "data-v-4840d244"]]);
var yt = H("ImAnchor", ht);
var bt = defineComponent({
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
    const t = a, s = ref(null), e = n, r = L("alert"), l = useSlots(), u = computed(() => !!(e.showIcon && e.title)), f = computed(() => {
      switch (e.color) {
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
      var i, c;
      t("close"), (i = s.value) == null || i.animate([{
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
      }), await new Promise((v) => setTimeout(v, 300)), (c = s.value) == null || c.remove();
    };
    return (i, c) => {
      const v = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: s,
        class: normalizeClass([unref(r).b(), unref(r).m(e.color || "primary"), e.variant && unref(r).m(e.variant || "")])
      }, [
        e.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(r).e("icon")])
        }, [
          renderSlot(i.$slots, "icon", {}, () => [
            createVNode(unref(P), {
              name: f.value,
              size: u.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(r).e("content")])
        }, [
          e.title || unref(l).title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(r).e("title")])
          }, [
            renderSlot(i.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(e.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(r).e("message")])
          }, [
            renderSlot(i.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(e.message), 1)
            ], true)
          ], 2)
        ], 2),
        e.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(r).e("close")]),
          onClick: m
        }, [
          renderSlot(i.$slots, "close", {}, () => [
            createVNode(unref(P), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [v, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var _t = V(bt, [["__scopeId", "data-v-d11fdcb2"]]);
var It = H("ImAlert", _t);
var wt = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: a }) {
    const t = useSlots(), s = a, e = L("breadcrumb"), r = n, l = computed(
      () => {
        var f, m;
        return (m = (f = t.default) == null ? void 0 : f.call(t)) == null ? void 0 : m.filter((i) => {
          var c;
          return (i == null ? void 0 : i.type) && ((c = i == null ? void 0 : i.type) == null ? void 0 : c.name) === "ImBreadcrumbItem";
        });
      }
    ), u = (f) => {
      f && r.modelValue !== f && (s("update:modelValue", f), s("change", f));
    };
    return (f, m) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(l.value, (i, c) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(i), {
          active: r.modelValue,
          onClick: u
        }, null, 8, ["active"])),
        l.value && l.value.length > 0 && c < l.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(e).e("separator")])
        }, [
          renderSlot(f.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(r.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var kt = V(wt, [["__scopeId", "data-v-64336468"]]);
var xt = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(n, { emit: a }) {
    const t = L("breadcrumb__item"), s = n, e = a;
    return (r, l) => (openBlock(), createElementBlock("div", {
      onClick: l[0] || (l[0] = () => e("click", s.value)),
      class: normalizeClass([unref(t).b(), unref(t).is("active", s.active === s.value && !!s.value)])
    }, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var Ct = V(xt, [["__scopeId", "data-v-40ed04b1"]]);
var zt = H("ImBreadcrumb", kt);
var $t = H("ImBreadcrumb", Ct);
var Tt = (n = 50) => {
  const a = ref(0), t = ref(0), s = ie((e) => {
    a.value = e.clientX, t.value = e.clientY;
  }, n);
  return onMounted(() => {
    window.addEventListener("mousemove", s, { passive: true });
  }), onUnmounted(() => {
    window.removeEventListener("mousemove", s);
  }), { x: a, y: t };
};
var ve = (n, a) => !n || !n.getAnimations ? false : (n.getAnimations(a).forEach((t) => t.cancel()), true);
var De = async (n, a) => {
  if (!n || !n.getAnimations) return false;
  try {
    return await Promise.all(
      n.getAnimations(a).map((t) => t.finished)
    ), true;
  } catch {
    return false;
  }
};
var he = () => ({
  width: (window == null ? void 0 : window.innerWidth) || document.documentElement.clientWidth || document.body.clientWidth,
  height: (window == null ? void 0 : window.innerHeight) || document.documentElement.clientHeight || document.body.clientHeight
});
var Bt = () => document ? document.body.style.overflow === "hidden" || document.body.classList.contains("im-lock-scroll") : false;
var Oe = async () => {
  try {
    if (await new Promise((a) => setTimeout(a, 0)), !document) return Promise.resolve();
    Array.from(document.querySelectorAll(".is-im-lock-scroll")).length ? Bt() || document.body.classList.add("im-lock-scroll") : document.body.classList.remove("im-lock-scroll");
  } catch {
  }
};
var xe = defineComponent({
  name: "ImLayer",
  __name: "ImLayer",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: "" },
    placement: { default: "bottom-left" },
    offset: { default: 8 },
    getTriggerContainer: { type: Function, default: () => null },
    customClass: { default: "" },
    arrow: { type: Boolean, default: true },
    scrollHide: { type: Boolean, default: false }
  },
  emits: ["close"],
  setup(n, { emit: a }) {
    const { zIndexToken: t } = ne(), s = L("layer"), e = ref(null), r = a, l = n, u = reactive({
      top: "",
      left: "",
      width: "fit-content"
    }), f = computed(() => O(l.placement));
    onBeforeMount(() => {
      if (!document.getElementById("im-layer-container")) {
        const I = document.createElement("div");
        I.id = "im-layer-container", document.body.appendChild(I);
      }
    });
    const m = ["bottom", "bottom-left", "bottom-right"], i = ["top", "top-left", "top-right"], c = ["right", "right-top", "right-bottom"], v = ["left", "left-top", "left-bottom"];
    function h(y, I, w = "bottom-left") {
      const { height: U } = he();
      let M = 0;
      const ee = l.arrow ? parseInt(String(l.offset || 0)) : 0;
      if (m.includes(w))
        M = y.bottom, M += ee;
      else if (i.includes(w))
        M = y.top - I.height, M -= ee;
      else if (c.includes(w) || v.includes(w))
        switch (w) {
          case "right":
          case "left":
            M = y.top + y.height * 0.5 - I.height / 2;
            break;
          case "right-top":
          case "left-top":
            M = y.top;
            break;
          case "right-bottom":
          case "left-bottom":
            M = y.top + y.height - I.height;
            break;
        }
      return M <= 0 ? 0 : M + I.height >= U ? U - I.height : M || y.top || 0;
    }
    function x(y, I, w = "bottom-left") {
      const U = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let M = 0;
      const ee = l.arrow ? parseInt(String(l.offset || 0)) : 0;
      if (m.includes(w) || i.includes(w))
        switch (w) {
          case "bottom":
          case "top":
            M = y.right - y.width / 2 - I.width / 2;
            break;
          case "bottom-right":
          case "top-right":
            M = y.left + y.width - I.width;
            break;
          default:
            M = y.left;
            break;
        }
      else c.includes(w) ? M = y.left + y.width + ee : v.includes(w) && (M = y.left - I.width - ee);
      return M <= 0 ? 0 : M + I.width >= U ? U - I.width : M || y.left || 0;
    }
    const O = (y) => [...m, ...i, ...c, ...v].includes(y) ? l.placement : "bottom-left";
    function q() {
      l.scrollHide ? r("close", true) : b();
    }
    const E = ie(b, 100), S = ie(q, 100);
    async function b() {
      var ee;
      const y = (ee = l.getTriggerContainer) == null ? void 0 : ee.call(l);
      if (!y) {
        r("close", true);
        return;
      }
      F();
      const I = f.value, w = e.value, U = y.getBoundingClientRect(), M = w.getBoundingClientRect();
      u.width = `${U.width}px`, u.top = `${h(U, M, I)}px`, u.left = `${x(U, M, I)}px`;
    }
    function W() {
      window.removeEventListener("scroll", S), l.visible && window.addEventListener("scroll", S, {
        passive: true,
        capture: true
      });
    }
    function R() {
      window.removeEventListener("resize", E), l.visible && window.addEventListener("resize", E, { passive: true, capture: true });
    }
    function F() {
      const y = e.value;
      if (i.includes(f.value)) {
        y.style.transformOrigin = "center bottom";
        return;
      }
      if ((c.includes(f.value) || v.includes(f.value)) && ["right-bottom", "left-bottom"].includes(f.value)) {
        y.style.transformOrigin = "center bottom";
        return;
      }
      y.style.transformOrigin = "center top";
    }
    async function _(y) {
      const I = y;
      W(), R(), await new Promise((w) => requestAnimationFrame(w)), b(), I.style.setProperty("transition", "none");
      try {
        I.getAnimations().forEach((w) => w == null ? void 0 : w.cancel()), I.animate(
          [
            { opacity: 0, transform: "scaleY(0.8)" },
            { opacity: 1, transform: "scaleY(1)" }
          ],
          {
            duration: 200,
            easing: "ease"
          }
        ), Promise.all(
          I.getAnimations().map((w) => w.finished)
        ).finally(() => {
          I.style.setProperty("transition", "all 0.2s ease");
        });
      } catch (w) {
        console.error(w);
      }
    }
    function C(y, I) {
      const w = y;
      w.getAnimations().forEach((U) => U.cancel()), w.animate(
        [
          { opacity: 1, transform: "scaleY(1)" },
          { opacity: 0, transform: "scaleY(0.9)" }
        ],
        {
          duration: 200,
          easing: "ease"
        }
      ), Promise.all(
        w.getAnimations().map((U) => U.finished)
      ).finally(() => {
        I(), W(), R();
      });
    }
    return (y, I) => (openBlock(), createBlock(Teleport, { to: "#im-layer-container" }, [
      createVNode(Transition, {
        css: false,
        duration: { enter: 200, leave: 200 },
        mode: "out-in",
        onBeforeEnter: _,
        onLeave: C
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            tabindex: "-1",
            ref_key: "layerRef",
            ref: e,
            "aria-modal": "true",
            class: normalizeClass([
              unref(s).b(),
              "im-shadow",
              l.customClass,
              f.value && unref(s).m(f.value)
            ]),
            style: normalizeStyle({
              zIndex: l.zIndex || unref(t),
              ...u
            })
          }, [
            l.arrow ? (openBlock(), createElementBlock("svg", {
              key: 0,
              class: normalizeClass([unref(s).e("arrow")]),
              width: "16",
              height: "16",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "19626"
            }, I[0] || (I[0] = [
              createBaseVNode("path", {
                d: "M590.336 763.563l359.083-362.155A85.333 85.333 0 0 0 888.832 256H170.667a85.333 85.333 0 0 0-60.587 145.408l359.083 362.155a85.333 85.333 0 0 0 121.173 0z",
                "p-id": "19626"
              }, null, -1)
            ]), 2)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass([unref(s).e("content")])
            }, [
              renderSlot(y.$slots, "default")
            ], 2)
          ], 6), [
            [vShow, l.visible]
          ])
        ]),
        _: 3
      })
    ]));
  }
});
var Lt = defineComponent({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: false },
    trigger: { default: "hover" },
    placement: { default: "bottom-left" },
    zIndex: { default: void 0 },
    arrow: { type: Boolean, default: true },
    offset: { default: 8 }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: a }) {
    const t = a, s = L("dropdown"), e = n, r = ref(null), l = ref(null), u = ref(e.modelValue || false);
    let f = 120;
    const { x: m, y: i } = Tt(30), c = ie(() => {
      const b = Le(m.value, i.value, l.value);
      Le(m.value, i.value, r.value) || b || (u.value = false);
    }, f);
    watch(
      () => [m.value, i.value],
      () => {
        e.trigger != "hover" || !u.value || !e.trigger || c();
      }
    ), watch(() => u.value, (b) => {
      document.removeEventListener("click", h), b && document.addEventListener("click", h, { passive: true });
    }, { immediate: true }), watch(() => e.modelValue, (b) => {
      u.value = b;
    });
    function v() {
      return r.value;
    }
    function h(b) {
      if (u.value) {
        const W = b.target, R = r.value;
        if (W === R || R != null && R.contains(W)) return;
        S();
      }
    }
    function x() {
      (e.trigger === "hover" || !e.trigger) && E();
    }
    function O() {
      (e.trigger === "hover" || !e.trigger) && c();
    }
    function q() {
      e.trigger === "click" && (u.value ? S() : E());
    }
    function E() {
      u.value = true, t("update:modelValue", u.value), t("change", u.value);
    }
    function S() {
      u.value = false, t("update:modelValue", u.value), t("change", u.value);
    }
    return (b, W) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(s).b()]),
      ref_key: "dropdownRef",
      ref: r,
      onMouseenter: x,
      onMouseleave: O,
      onClick: q
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode(xe, {
        visible: u.value,
        placement: e.placement,
        offset: e.offset,
        "z-index": e.zIndex,
        getTriggerContainer: v,
        onClose: S,
        arrow: e.arrow
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "contentRef",
            ref: l,
            class: normalizeClass([unref(s).e("content")])
          }, [
            renderSlot(b.$slots, "content", {}, void 0, true)
          ], 2)
        ]),
        _: 3
      }, 8, ["visible", "placement", "offset", "z-index", "arrow"])
    ], 34));
  }
});
var Vt = V(Lt, [["__scopeId", "data-v-db6f7bf8"]]);
var Et = H("ImDropdown", Vt);
var St = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: a }) {
    const t = n, s = useSlots(), e = L("list"), r = (i) => typeof i.type == "object" && i.type !== null, l = (i, c) => {
      const v = [];
      return i.forEach((h) => {
        if (r(h) && h.type && h.type.name == c) {
          const x = h.props || {};
          v.push({ vnode: h, props: x });
        } else h && (h != null && h.children) && Array.isArray(h.children) && v.push(...l(h.children, c));
      }), v;
    }, u = computed(() => {
      var v;
      const i = ((v = s.default) == null ? void 0 : v.call(s)) || [];
      return l(i, "ImListItem").map((h) => h.vnode);
    }), f = a, m = (i) => {
      var v;
      const c = ((v = i.props) == null ? void 0 : v.value) || "";
      c !== 0 && !c || (f("update:modelValue", c), f("change", c));
    };
    return (i, c) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(u.value, (v) => (openBlock(), createBlock(resolveDynamicComponent(v), {
        active: t.modelValue,
        onClick: () => m(v)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var Mt = V(St, [["__scopeId", "data-v-5a9d7c31"]]);
var At = defineComponent({
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
    const t = L("list__item"), s = a, e = n;
    function r(l) {
      if (e.disabled) {
        l.stopPropagation();
        return;
      }
      s("click", e.value);
    }
    return (l, u) => {
      const f = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(t).b(), unref(t).is("active", !!(e.active && e.active === e.value)), unref(t).is("disabled", e.disabled)]),
        onClick: r
      }, [
        renderSlot(l.$slots, "default", {}, void 0, true)
      ], 2)), [
        [f, e.ripple && !e.disabled]
      ]);
    };
  }
});
var Rt = V(At, [["__scopeId", "data-v-6df1dd93"]]);
var Nt = H("ImList", Mt);
var Pt = H("ImListItem", Rt);
var Dt = ["src", "srcset", "alt", "loading"];
var Ot = defineComponent({
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
    const t = a, s = L("avatar"), e = n, r = (l) => {
      console.log(l.target), t("error", l);
    };
    return (l, u) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(s).b(), e.shape ? unref(s).m(e.shape) : ""]),
      style: normalizeStyle({
        "--im-avatar-size": (Number(e.size) || 36) + "px",
        "--im-avatar-color": e.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": e.fit
      })
    }, [
      !e.src && !e.srcset ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(s).e("icon")])
      }, [
        renderSlot(l.$slots, "default", {}, void 0, true)
      ], 2)) : (openBlock(), createElementBlock("img", {
        key: 1,
        onError: r,
        src: e.src,
        srcset: e.srcset,
        alt: e.alt,
        loading: e.loading,
        class: normalizeClass([unref(s).e("img")])
      }, null, 42, Dt))
    ], 6));
  }
});
var Yt = V(Ot, [["__scopeId", "data-v-c4c32038"]]);
var Ht = H("ImAvatar", Yt);
var Ft = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(n, { emit: a }) {
    const t = L("mask"), { zIndexToken: s } = ne(), e = n, r = a, l = () => {
      e.closeOnClickMask && r("close", false);
    };
    return (u, f) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(t).b()]),
          style: normalizeStyle({
            zIndex: e.zIndex || unref(s)
          }),
          onClick: l
        }, [
          renderSlot(u.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, e.visible]
        ])
      ]),
      _: 3
    }));
  }
});
var Wt = V(Ft, [["__scopeId", "data-v-d5aadf77"]]);
var Ce = H("ImMask", Wt);
var ae = {
  duration: 200,
  delay: 0,
  easing: "ease-out"
};
function ye(n, a = "right") {
  const t = (n == null ? void 0 : n.getBoundingClientRect()) || {}, s = (t == null ? void 0 : t.width) || 0, e = (t == null ? void 0 : t.height) || 0;
  switch (a) {
    case "left":
      return s ? `translateX(-${s}px)` : "translateX(-100%)";
    case "right":
      return s ? `translateX(${s}px)` : "translateX(100%)";
    case "top":
      return e ? `translateY(-${e}px)` : "translateY(-100%)";
    case "bottom":
      return e ? `translateY(${e}px)` : "translateY(100%)";
    default:
      return s ? `translateX(${s}px)` : "translateX(100%)";
  }
}
var me = async (n, a = true) => {
  let t = ye(n, "right"), s = [];
  a ? s = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : s = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], n == null || n.animate(s, ae);
};
var Ve = async (n, a = true) => {
  let t = ye(n, "left"), s = [];
  a ? s = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : s = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], n == null || n.animate(s, ae);
};
var Ee = async (n, a = true) => {
  let t = ye(n, "top"), s = [];
  a ? s = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : s = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], n == null || n.animate(s, ae);
};
var Se = async (n, a = true) => {
  let t = ye(n, "bottom"), s = [];
  a ? s = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : s = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], n == null || n.animate(s, ae);
};
var Xt = async (n, a) => {
  let t = [], s = "center";
  const e = (a == null ? void 0 : a.getBoundingClientRect()) || null, { width: r, height: l } = he(), u = n.getBoundingClientRect();
  if (e) {
    const f = (e.left - u.left) / u.width * 100, m = (e.top - u.top) / u.height * 100;
    s = `${f}% ${m}%`;
  } else {
    const f = (r * 0.5 - u.left) / u.width * 100, m = (l - u.top) / u.height * 100;
    s = `${f}% ${m}%`;
  }
  t = [
    {
      opacity: 0,
      transformOrigin: s,
      transform: "scale(0) "
    },
    {
      opacity: 1,
      transformOrigin: s,
      transform: "scale(1)"
    }
  ], n == null || n.animate(t, ae);
};
var qt = async (n, a) => {
  let t = [], s = "center";
  const e = (a == null ? void 0 : a.getBoundingClientRect()) || null, { width: r, height: l } = he(), u = n.getBoundingClientRect();
  let f = "50%", m = "50%";
  e ? (f = (e.left + e.width * 0.5 - u.left) / u.width * 100, m = (e.top + e.height * 0.5 - u.top) / u.height * 100, s = `${f}% ${m}%`) : (f = (r * 0.5 - u.left) / u.width * 100, m = (l - u.top) / u.height * 100, s = `${f}% ${m}%`), t = [
    {
      opacity: 1,
      transformOrigin: s,
      transform: "scale(1)",
      offset: 0
    },
    {
      opacity: 0,
      transformOrigin: s,
      transform: "scale(0.33)",
      offset: 1
    }
  ], n == null || n.animate(t, ae);
};
var Me = (n, a = true) => {
  if (!n || !n.animate)
    return console.log("elFullscreenBottomIn");
  const { height: t } = he();
  a ? n.animate(
    [
      { transform: `translateY(${t}px)`, opacity: 0 },
      { transform: "translateY(0)", opacity: 1 }
    ],
    ae
  ) : n.animate(
    [
      { transform: "translateY(0)", opacity: 1 },
      { transform: `translateY(${t}px)`, opacity: 0 }
    ],
    ae
  );
};
var Ut = ["aria-modal"];
var jt = defineComponent({
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
    const t = L("drawer"), s = a, e = n, r = ref(null), { zIndexToken: l } = ne(), u = computed(() => pe(e.size || l.value || "280px"));
    watch(() => e.modelValue, (c) => {
      Oe();
    }, { immediate: true });
    const f = () => {
      s("update:modelValue", false);
    };
    function m(c, v) {
      switch (ve(c), e.placement) {
        case "right":
          me(c);
          break;
        case "left":
          Ve(c);
          break;
        case "top":
          Ee(c);
          break;
        case "bottom":
          Se(c);
          break;
        default:
          me(c);
          break;
      }
      v();
    }
    function i(c, v) {
      switch (ve(c), e.placement) {
        case "right":
          me(c, false);
          break;
        case "left":
          Ve(c, false);
          break;
        case "top":
          Ee(c, false);
          break;
        case "bottom":
          Se(c, false);
          break;
        default:
          me(c, false);
          break;
      }
      De(c).finally(v);
    }
    return (c, v) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: r,
        class: normalizeClass([unref(t).b(), unref(t).is("im-lock-scroll", e.modelValue), e.placement ? unref(t).m(e.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": u.value, zIndex: e.zIndex || unref(l) }),
        "aria-modal": e.modelValue
      }, [
        e.mask ? (openBlock(), createBlock(unref(Ce), {
          key: 0,
          visible: e.modelValue,
          closeOnClickMask: e.closeOnClickMask,
          onClose: f,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: m,
          onLeave: i
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(t).e("content")])
            }, [
              renderSlot(c.$slots, "default", {}, void 0, true)
            ], 2), [
              [vShow, e.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, Ut)
    ]));
  }
});
var Gt = V(jt, [["__scopeId", "data-v-230f0857"]]);
var Jt = H("ImDrawer", Gt);
var Kt = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(n) {
    const a = L("card"), t = n;
    return (s, e) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b(), unref(a).is("borderless", t.borderless), t.shadow ? unref(a).m(t.shadow) : ""])
    }, [
      renderSlot(s.$slots, "header", {}, () => [
        t.title || s.$slots["header-action"] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(a).e("header")])
        }, [
          createBaseVNode("span", {
            class: normalizeClass([unref(a).e("title")])
          }, toDisplayString(t.title), 3),
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
var Qt = V(Kt, [["__scopeId", "data-v-4ccad88b"]]);
var Zt = H("ImCard", Qt);
var ea = ["data-index", "onMouseenter", "onMouseleave"];
var ta = { class: "im-message__text" };
var aa = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(n, { expose: a }) {
    const t = L("message"), s = n, e = ref([]);
    let r = null;
    watch(() => e.value, () => {
      e.value.length === 0 ? r = setTimeout(() => {
        !e.value.length && s.callback();
      }, 500) : (r && clearTimeout(r), r = null);
    });
    const l = (i) => {
      switch (i) {
        case "success":
          return "check-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "error":
          return "close-circle-fill";
        default:
          return "info-circle-fill";
      }
    }, u = (i) => {
      i.timer && (clearTimeout(i.timer), i.timer = null);
    }, f = (i) => {
      i.timer && clearTimeout(i.timer), i.timer = setTimeout(() => {
        e.value = e.value.filter((c) => c.id !== i.id);
      }, i.duration || 3e3);
    }, m = (i) => {
      const c = setTimeout(() => {
        e.value = e.value.filter((v) => v.id !== i.id);
      }, i.duration || 3e3);
      e.value.push({ ...i, timer: c });
    };
    return s.add && s.add(m), a({ addMsg: m }), (i, c) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(t).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (v) => (openBlock(), createElementBlock("li", {
          key: v.id,
          "data-index": v.id,
          onMouseenter: () => u(v),
          onMouseleave: () => f(v),
          class: normalizeClass(["im-message__item", [unref(t).e("item"), v.color ? unref(t).e(v.color) : ""]])
        }, [
          createVNode(unref(P), {
            name: l(v.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", ta, toDisplayString(v.msg), 1)
        ], 42, ea))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var na = V(aa, [["__scopeId", "data-v-820c83a9"]]);
var sa = class {
  constructor() {
    ue(this, "app");
    ue(this, "container");
    ue(this, "addMsgToList");
    this.app = null, this.container = null, this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    if (typeof window < "u" && window) {
      this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
      const a = this;
      this.app = createApp(na, {
        callback: () => {
          a.destroy();
        },
        add: (t) => {
          a.addMsgToList = t;
        }
      }), this.app.mount(this.container);
    } else
      throw new Error("只能在浏览器环境下使用");
  }
  destroy() {
    var a, t;
    (a = this.app) == null || a.unmount(), (t = this.container) == null || t.remove(), this.app = null, this.container = null;
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
  info(a, t) {
    this.addMsg({
      color: "primary",
      msg: a,
      duration: t,
      id: ""
    });
  }
  success(a, t) {
    this.addMsg({
      color: "success",
      msg: a,
      duration: t,
      id: ""
    });
  }
  warning(a, t) {
    this.addMsg({
      color: "warning",
      msg: a,
      duration: t,
      id: ""
    });
  }
  error(a, t) {
    this.addMsg({
      color: "error",
      msg: a,
      duration: t,
      id: ""
    });
  }
};
var X = null;
var Ta = () => (X || (X = new sa()), {
  info: (n, a = 3e3) => {
    X == null || X.info(n, a);
  },
  success: (n, a = 3e3) => {
    X == null || X.success(n, a);
  },
  warning: (n, a = 3e3) => {
    X == null || X.warning(n, a);
  },
  error: (n, a = 3e3) => {
    X == null || X.error(n, a);
  }
});
var oa = ["data-esc"];
var la = defineComponent({
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
    const t = L("dialog"), s = a, e = n, r = ref(null), { zIndexToken: l } = ne();
    watch(
      () => e.modelValue,
      (i) => {
        window.removeEventListener("keydown", u), i && e.closeOnEscape && window.addEventListener("keydown", u, { passive: true }), Oe();
      },
      {
        immediate: true
      }
    );
    function u(i) {
      if (i.key === "Escape" || i.code === "Escape") {
        const c = document.querySelectorAll(
          '.im-dialog.is-show[data-esc="true"]'
        );
        c.length && r.value && Array.from(c).pop() === r.value && s("update:modelValue", false);
      }
    }
    const f = async (i, c) => {
      ve(i, { subtree: true }), e.fullscreen ? Me(i) : Xt(i, e == null ? void 0 : e.getTarget()), c();
    }, m = async (i, c) => {
      ve(i, { subtree: true }), e.fullscreen ? Me(i, false) : qt(i, e == null ? void 0 : e.getTarget()), await De(i, { subtree: true }), c();
    };
    return (i, c) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        "aria-modal": "true",
        tabindex: -1,
        class: normalizeClass([unref(t).b(), unref(t).is("im-lock-scroll", e.modelValue), unref(t).is("show", e.modelValue)]),
        "data-esc": e.closeOnEscape,
        ref_key: "dialogRef",
        ref: r,
        style: normalizeStyle({
          zIndex: e.zIndex || unref(l)
        })
      }, [
        e.mask && !e.fullscreen ? (openBlock(), createBlock(unref(Ce), {
          key: 0,
          closeOnClickMask: e.closeOnClickMask,
          visible: e.modelValue,
          onClose: c[0] || (c[0] = () => s("update:modelValue", false))
        }, null, 8, ["closeOnClickMask", "visible"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: f,
          duration: { enter: 200, leave: 200 },
          onLeave: m
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([
                unref(t).e("content"),
                unref(t).is("fullscreen", e.fullscreen),
                e.fullscreen ? "" : "im-shadow"
              ]),
              style: normalizeStyle({
                maxWidth: e.width,
                width: e.width,
                height: e.height
              })
            }, [
              renderSlot(i.$slots, "default", {}, void 0, true)
            ], 6), [
              [vShow, e.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, oa)
    ]));
  }
});
var ia = V(la, [["__scopeId", "data-v-40b12ccd"]]);
var ra = H("ImDialog", ia);
var ca = defineComponent({
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
    const t = L("option"), s = a, e = n;
    function r(l) {
      if (l.preventDefault(), l.stopPropagation(), e.disabled) return;
      const u = e.value || e.label;
      u && s("change", u);
    }
    return (l, u) => {
      var m, i;
      const f = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        onClick: r,
        class: normalizeClass([unref(t).b(), unref(t).is("disabled", !!e.disabled), unref(t).is("active", (m = e.selectList) == null ? void 0 : m.includes(e.value || e.label || ""))])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([unref(t).e("text")])
        }, [
          renderSlot(l.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(e.label || e.value), 1)
          ], true)
        ], 2),
        e.multiple && ((i = e.selectList) != null && i.includes(e.value || e.label || "")) ? (openBlock(), createBlock(unref(P), {
          key: 0,
          name: "check",
          size: "12",
          class: normalizeClass([unref(t).e("check")])
        }, {
          default: withCtx(() => u[0] || (u[0] = [
            createTextVNode("✓")
          ])),
          _: 1,
          __: [0]
        }, 8, ["class"])) : createCommentVNode("", true)
      ], 2)), [
        [f, !e.disabled]
      ]);
    };
  }
});
var ua = V(ca, [["__scopeId", "data-v-baa1be82"]]);
var da = defineComponent({
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
    const t = L("tag"), s = a, e = n;
    function r(l) {
      s("update:modelValue", false), s("close", l);
    }
    return (l, u) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        e.modelValue ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(t).b(), e.color ? unref(t).m(e.color) : "", unref(t).is("border", e.border)])
        }, [
          createBaseVNode("div", {
            class: normalizeClass([unref(t).e("content")])
          }, [
            renderSlot(l.$slots, "default", {}, void 0, true),
            e.closeable ? (openBlock(), createBlock(unref(P), {
              key: 0,
              name: "close",
              size: "1em",
              onClick: r,
              class: normalizeClass([unref(t).e("close")])
            }, null, 8, ["class"])) : createCommentVNode("", true)
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var ma = V(da, [["__scopeId", "data-v-16275f2c"]]);
var Ye = H("ImTag", ma);
var pa = defineComponent({
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
    maxTag: { default: 1 },
    arrow: { type: Boolean, default: true },
    offset: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: a }) {
    const t = L("select"), s = a, e = n, { sizeToken: r } = ne(), l = ref(false), u = ref([]), f = ref(null), m = ref(null), i = computed(() => pe(e.width)), c = computed(() => pe(e.size || r.value || "36px")), v = computed(() => {
      var _;
      return e.multiple ? e.options.filter((C) => u.value.includes(String(C.value))).map((C) => C.label) : ((_ = e.options.find((C) => C.value === e.modelValue)) == null ? void 0 : _.label) || "";
    }), h = computed(() => e.options.filter(
      (_) => u.value.includes(String(_.value))
    )), x = computed(() => {
      const _ = h.value.length - e.maxTag;
      return h.value.length && e.maxTag && h.value.length - e.maxTag && _ > 0 ? _ : "";
    }), O = computed(() => e.clearable && e.modelValue && v.value && !e.disabled);
    watch(
      () => e.modelValue,
      () => {
        S();
      },
      { immediate: true }
    ), watch(
      () => l.value,
      (_) => {
        document.removeEventListener("click", b, { capture: true }), _ && document.addEventListener("click", b, { capture: true });
      }
    );
    function q(_, C) {
      C.preventDefault();
      const y = u.value.filter((I) => I !== _.value);
      s("update:modelValue", y.join(","));
    }
    function E() {
      l.value = false;
    }
    function S() {
      var _;
      e.multiple ? u.value = ((_ = String(e.modelValue)) == null ? void 0 : _.split(",")) || [] : u.value = [e.modelValue];
    }
    function b(_) {
      var C, y;
      (C = f.value) != null && C.contains(_.target) || f.value === _.target || _.target === m.value || e.multiple && ((y = m.value) != null && y.contains(_.target)) || m.value === _.target || E();
    }
    async function W() {
      var C;
      if (l.value) return;
      l.value = true, await new Promise((y) => requestAnimationFrame(y));
      const _ = (C = m.value) == null ? void 0 : C.querySelector(
        `.${t.is("active", true)}`
      );
      _ && _.scrollIntoView({ behavior: "instant", block: "nearest" }), await new Promise((y) => requestAnimationFrame(y));
    }
    function R(_) {
      if (e.multiple) {
        const C = u.value;
        C.includes(_) ? C.splice(C.indexOf(_), 1) : C.push(_), s("update:modelValue", C.filter((y) => y).join(","));
        return;
      } else
        s("update:modelValue", _);
    }
    function F(_) {
      _.preventDefault(), _.stopPropagation(), s("update:modelValue", "");
    }
    return (_, C) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(t).b(),
        unref(t).is("open", l.value),
        unref(t).is("disabled", e.disabled),
        unref(t).is("multiple", e.multiple)
      ]),
      style: normalizeStyle({
        "--im-select-width": i.value,
        "--im-select-height": c.value
      })
    }, [
      createBaseVNode("div", {
        onClick: W,
        class: normalizeClass([unref(t).e("trigger")]),
        ref_key: "triggerRef",
        ref: f,
        tabindex: "-1"
      }, [
        e.placeholder && !v.value ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(t).e("placeholder")])
        }, toDisplayString(e.placeholder), 3)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(t).e("tag-wrap")])
        }, [
          e.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(t).e("tags")])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(h.value, (y, I) => (openBlock(), createElementBlock(Fragment, null, [
              I < e.maxTag ? (openBlock(), createBlock(unref(Ye), {
                key: I,
                onClose: withModifiers((w) => q(y, w), ["stop"]),
                closeable: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(y.label), 1)
                ]),
                _: 2
              }, 1032, ["onClose"])) : createCommentVNode("", true)
            ], 64))), 256))
          ], 2)) : createCommentVNode("", true),
          e.multiple && h.value.length && x.value ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(t).e("more")])
          }, [
            createVNode(unref(P), {
              name: "plus",
              size: "12px"
            }),
            createTextVNode(" " + toDisplayString(x.value), 1)
          ], 2)) : createCommentVNode("", true),
          e.multiple ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass([unref(t).e("default")])
          }, toDisplayString(v.value), 3))
        ], 2)),
        createBaseVNode("span", {
          class: normalizeClass([unref(t).e("icon-down"), unref(t).is("rotate", l.value)])
        }, [
          renderSlot(_.$slots, "downIcon", {}, () => [
            createVNode(unref(P), {
              name: "down",
              size: "12"
            })
          ], true)
        ], 2),
        O.value ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass([unref(t).e("clear-icon")]),
          onClick: F
        }, [
          renderSlot(_.$slots, "clearIcon", {}, () => [
            createVNode(unref(P), {
              name: "close-circle-fill",
              size: "18"
            })
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 2),
      createVNode(xe, {
        visible: l.value,
        getTriggerContainer: () => f.value,
        "z-index": e.zIndex,
        onClose: E,
        arrow: e.arrow,
        offset: e.offset
      }, {
        default: withCtx(() => [
          createBaseVNode("ul", {
            class: normalizeClass([unref(t).e("list")]),
            ref_key: "listRef",
            ref: m
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.options, (y, I) => (openBlock(), createBlock(ua, {
              multiple: e.multiple,
              key: y.value || y.label || I,
              disabled: y.disabled,
              "select-list": u.value,
              value: y.value,
              label: y.label,
              onChange: R
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(y.label || y.value), 1)
              ]),
              _: 2
            }, 1032, ["multiple", "disabled", "select-list", "value", "label"]))), 128))
          ], 2)
        ]),
        _: 1
      }, 8, ["visible", "getTriggerContainer", "z-index", "arrow", "offset"])
    ], 6));
  }
});
var fa = V(pa, [["__scopeId", "data-v-35e35f7b"]]);
var He = H("ImSelect", fa);
var va = ["aria-disabled"];
var ga = ["onClick", "title"];
var ha = ["aria-disabled"];
var ya = defineComponent({
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
    const t = L("pagination"), s = a, e = n, r = ref(e.pageSize), l = ref([1]), { sizeToken: u } = ne(), f = computed(() => parseInt(String(e.size || u.value || 36)) + "px"), m = computed(
      () => Math.ceil(e.total / (r.value || 10))
    ), i = computed(() => e.pageNumber === 1), c = computed(() => e.pageNumber >= m.value), v = computed(
      () => e.pageSizeItems.map((b) => ({ label: `${b} 条/页`, value: b }))
    );
    watch(
      () => r.value,
      (b) => {
        m.value < e.pageNumber ? s("change", { pageSize: b, pageNumber: m.value }) : s("change", { pageSize: b, pageNumber: e.pageNumber });
      }
    ), watch(
      () => [e.pageNumber, e.pageSize],
      () => {
        r.value = e.pageSize, x(
          m.value < e.pageNumber ? m.value : e.pageNumber
        );
      },
      { immediate: true }
    );
    function h(b) {
      e.pageNumber !== b && s("change", { pageNumber: b, pageSize: e.pageSize });
    }
    function x(b) {
      if (m.value <= 1)
        l.value = [1];
      else {
        const W = Math.ceil(b / 5), R = [];
        let F = W * 5 - 4;
        for (let _ = 0; _ < 5; _++) {
          let C = F + _;
          if (C > m.value)
            break;
          R.push(C);
        }
        b - 5 >= 1 && (R.unshift("left"), R.unshift(1)), b + 5 <= m.value && (R.push("right"), R.push(m.value)), l.value = R, h(b);
      }
    }
    function O() {
      const b = e.pageNumber + 1;
      if (b > m.value) return h(e.pageNumber);
      if (l.value.includes(b))
        return h(b);
      x(b);
    }
    function q() {
      const b = e.pageNumber - 1;
      if (b < 1) return h(e.pageNumber);
      if (l.value.includes(b))
        return h(b);
      x(b);
    }
    function E() {
      const b = e.pageNumber + 5;
      if (b > m.value) return h(m.value);
      x(b);
    }
    function S() {
      const b = e.pageNumber - 5;
      if (b < 1) return h(1);
      x(b);
    }
    return (b, W) => {
      const R = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(t).b()]),
        style: normalizeStyle({
          "--im-pagination-size": f.value
        })
      }, [
        b.layout.includes("total") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(t).e("total")])
        }, " 共 " + toDisplayString(b.total) + " 条数据 ", 3)) : createCommentVNode("", true),
        b.layout.includes("prev") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(t).e("prev"), unref(t).is("disabled", i.value)]),
          "aria-disabled": i.value,
          onClick: q
        }, [
          createVNode(unref(P), {
            name: "left",
            size: "14px"
          })
        ], 10, va)), [
          [R, !i.value]
        ]) : createCommentVNode("", true),
        b.layout.includes("pager") ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(t).e("pager")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(l.value, (F) => (openBlock(), createElementBlock(Fragment, null, [
            F === "left" ? (openBlock(), createElementBlock("div", {
              key: 0,
              title: "向前5页",
              class: normalizeClass([unref(t).e("page-item"), unref(t).e("left")]),
              onClick: S
            }, [
              createVNode(unref(P), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(P), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : F !== "right" ? withDirectives((openBlock(), createElementBlock("div", {
              key: 1,
              onClick: () => h(F),
              class: normalizeClass([
                unref(t).e("page-item"),
                unref(t).is("active", F === e.pageNumber)
              ]),
              title: String(F)
            }, [
              createTextVNode(toDisplayString(F), 1)
            ], 10, ga)), [
              [R, true]
            ]) : F === "right" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass([unref(t).e("page-item"), unref(t).e("right")]),
              title: "向后5页",
              onClick: E
            }, [
              createVNode(unref(P), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(P), {
                name: "arrowright",
                class: "im-icon--arrowright"
              })
            ], 2)) : createCommentVNode("", true)
          ], 64))), 256))
        ], 2)) : createCommentVNode("", true),
        b.layout.includes("next") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(t).e("next"), unref(t).is("disabled", c.value)]),
          "aria-disabled": c.value,
          onClick: O
        }, [
          createVNode(unref(P), {
            name: "right",
            size: "14px"
          })
        ], 10, ha)), [
          [R, !c.value]
        ]) : createCommentVNode("", true),
        b.layout.includes("sizes") ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass([unref(t).e("size")])
        }, [
          createVNode(unref(He), {
            options: v.value,
            modelValue: r.value,
            "onUpdate:modelValue": W[0] || (W[0] = (F) => r.value = F),
            size: e.size
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var ba = V(ya, [["__scopeId", "data-v-541697d0"]]);
var _a = H("ImPagination", ba);
var Ia = defineComponent({
  name: "ImTooltip",
  __name: "ImTooltip",
  props: {
    content: {}
  },
  setup(n) {
    const a = L("tooltip"), t = ref(), s = ref(false), e = n, r = useSlots(), l = computed(() => {
      var i;
      return (i = r == null ? void 0 : r.default) == null ? void 0 : i.call(r)[0];
    }), u = computed(() => {
      const i = l.value;
      return (i == null ? void 0 : i.type) === Text;
    });
    function f() {
      s.value = !s.value;
    }
    function m() {
      var i, c;
      return ((i = t.value) == null ? void 0 : i.$el) || ((c = t.value) == null ? void 0 : c.ref) || t.value;
    }
    return (i, c) => (openBlock(), createElementBlock(Fragment, null, [
      u.value ? (openBlock(), createElementBlock("span", {
        key: 0,
        ref_key: "triggerRef",
        ref: t,
        onClick: f,
        class: normalizeClass([unref(a).b()])
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(l.value), {
          ref_key: "triggerRef",
          ref: t
        }, null, 512))
      ], 2)) : (openBlock(), createBlock(resolveDynamicComponent(l.value), {
        key: 1,
        ref_key: "triggerRef",
        ref: t,
        onClick: f,
        class: normalizeClass([unref(a).b()])
      }, null, 8, ["class"])),
      createVNode(xe, {
        visible: s.value,
        getTarget: m,
        offset: 8
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([unref(a).e("content"), "im-shadow"])
          }, [
            renderSlot(i.$slots, "content", {}, () => [
              createTextVNode(toDisplayString(e.content), 1)
            ], true)
          ], 2)
        ]),
        _: 3
      }, 8, ["visible"])
    ], 64));
  }
});
var wa = V(Ia, [["__scopeId", "data-v-10f39d6c"]]);
var ka = H("ImTooltip", wa);
var xa = [
  be,
  Ie,
  _e,
  we,
  P,
  fe,
  yt,
  It,
  zt,
  $t,
  Et,
  Nt,
  Pt,
  Ht,
  Ce,
  Jt,
  Zt,
  ra,
  _a,
  He,
  Ye,
  ka
];
var Ca = (n, a) => {
  n.provide(Pe, {
    size: (a == null ? void 0 : a.size) || 36,
    zIndex: (a == null ? void 0 : a.zIndex) || 1e3
  }), n.directive("ripple", at), xa.forEach((t) => {
    t.name ? n.component(t.name, t) : console.warn(`组件${t}缺少name属性`);
  });
};
var Ba = {
  install: Ca
};
export {
  It as ImAlert,
  yt as ImAnchor,
  Ht as ImAvatar,
  zt as ImBreadcrumb,
  $t as ImBreadcrumbItem,
  be as ImButton,
  Zt as ImCard,
  Ie as ImCol,
  ra as ImDialog,
  fe as ImDivider,
  Jt as ImDrawer,
  Et as ImDropdown,
  P as ImIcon,
  we as ImInput,
  Nt as ImList,
  Pt as ImListItem,
  Ce as ImMask,
  _a as ImPagination,
  _e as ImRow,
  He as ImSelect,
  Ye as ImTag,
  ka as ImTooltip,
  Ba as default,
  Ta as useImMessage
};
//# sourceMappingURL=im-design.js.map
