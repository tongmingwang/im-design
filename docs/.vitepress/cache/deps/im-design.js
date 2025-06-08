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

// node_modules/.pnpm/im-design@0.0.37/node_modules/im-design/dist/im-design.js
var xe = Object.defineProperty;
var ge = (s) => {
  throw TypeError(s);
};
var ze = (s, n, e) => n in s ? xe(s, n, { enumerable: true, configurable: true, writable: true, value: e }) : s[n] = e;
var te = (s, n, e) => ze(s, typeof n != "symbol" ? n + "" : n, e);
var he = (s, n, e) => n.has(s) || ge("Cannot " + e);
var ne = (s, n, e) => (he(s, n, "read from private field"), e ? e.call(s) : n.get(s));
var ye = (s, n, e) => n.has(s) ? ge("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(s) : n.set(s, e);
var _e = (s, n, e, a) => (he(s, n, "write to private field"), a ? a.call(s, e) : n.set(s, e), e);
var we = Symbol("im-design-token");
var j;
var Pe = class {
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
var Se = {
  mounted(s, n) {
    s.IM_RIPPLE_VALUE = n.value;
    const e = new Pe(), a = (f) => {
      s.IM_RIPPLE_VALUE && Ve(f, e, s);
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
var $ = (s) => {
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
var Me = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function Ae(s, n) {
  return openBlock(), createElementBlock("svg", Me, n[0] || (n[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var Re = { render: Ae };
var Ne = ["tabindex", "type", "disabled"];
var De = defineComponent({
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
    const e = s, a = n, t = $("button"), { sizeToken: i } = U(), o = computed(() => [
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
    }), d = computed(() => e.loading && ["square", "circle"].includes(e.shape)), u = () => {
      e.disabled || e.loading || a("click");
    };
    return (r, c) => {
      const v = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(o.value),
        onClick: u,
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
        d.value ? createCommentVNode("", true) : renderSlot(r.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, Ne)), [
        [v, true]
      ]);
    };
  }
});
var z = (s, n) => {
  const e = s.__vccOpts || s;
  for (const [a, t] of n)
    e[a] = t;
  return e;
};
var re = z(De, [["__scopeId", "data-v-fe80f42d"]]);
re.install = (s) => {
  s.component("ImButton", re);
};
var Oe = defineComponent({
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
    }), t = $("row");
    return (i, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()]),
      style: normalizeStyle({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (f, d) => (openBlock(), createBlock(resolveDynamicComponent(f), { key: d }))), 128))
    ], 6));
  }
});
var ie = z(Oe, [["__scopeId", "data-v-5179967f"]]);
var Ye = defineComponent({
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
    const n = s, e = $("col"), a = computed(
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
var ce = z(Ye, [["__scopeId", "data-v-ecf91058"]]);
ie.install = (s) => {
  s.component("ImRow", ie);
};
ce.install = (s) => {
  s.component("ImCol", ce);
};
var He = defineComponent({
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
    const e = s, { sizeToken: a } = U(), t = n, i = ref(e.modelValue), o = $("input"), f = () => {
      t("update:modelValue", i.value), t("change", i.value);
    };
    return (d, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(o).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(a) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(o).e("input")],
        "onUpdate:modelValue": u[0] || (u[0] = (r) => i.value = r)
      }, e, { onInput: f }), null, 16), [
        [vModelDynamic, i.value]
      ])
    ], 6));
  }
});
var ue = z(He, [["__scopeId", "data-v-6c70856c"]]);
ue.install = (s) => {
  s.component("ImInput", ue);
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
var A = z(qe, [["__scopeId", "data-v-1e711363"]]);
A.install = function(s) {
  s.component("ImIcon", A);
};
var Fe = defineComponent({
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
var ae = z(Fe, [["__scopeId", "data-v-108f9bec"]]);
ae.name = "ImDivider";
ae.install = function(s) {
  s.component("ImDivider", ae);
};
var N = (s, n) => (n.install = (e) => {
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
var Xe = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"];
var Ie = (s) => {
  if (typeof s == "number") return `${s}px`;
  const n = String(s);
  return s ? Xe.some((e) => n.includes(e)) ? n : `${s}px` : "";
};
var We = ["onClick"];
var Ue = defineComponent({
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
    const a = ref(null), t = ref(null), i = ref(null), o = s;
    watch(
      () => o.target,
      () => {
        e && e(), e = u();
      }
    ), onMounted(() => {
      e = u();
    }), onUnmounted(() => {
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
        const C = D.find((y) => _ <= y.offsetTop - (o.offset || 0) && _ > (o.offset || 0) ? (t.value = y.id, true) : false);
        C && (t.value = C.id);
      }
    }
    function u() {
      const c = o.target ? typeof o.target == "string" ? document.querySelector(o.target) : o.target : window;
      if (!c)
        return null;
      a.value = c;
      const v = fe(d, 50);
      return d({ target: c }), c.addEventListener("scroll", v, { passive: true }), () => {
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
      (O = a.value) == null || O.addEventListener("scroll", _, { passive: true });
    }
    return (c, v) => {
      const _ = resolveDirective("ripple");
      return o.data && o.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(n).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(o.data, (I) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(n).e("item"), unref(n).is("active", t.value === I.id)]),
          onClick: () => r(I.id)
        }, [
          t.value === I.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(n).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(I.text), 1)
        ], 10, We)), [
          [_, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var je = z(Ue, [["__scopeId", "data-v-4840d244"]]);
var Ge = N("ImAnchor", je);
var Je = defineComponent({
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
    const e = n, a = ref(null), t = s, i = $("alert"), o = useSlots(), f = computed(() => !!(t.showIcon && t.title)), d = computed(() => {
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
      const v = resolveDirective("ripple");
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
            createVNode(unref(A), {
              name: d.value,
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
          onClick: u
        }, [
          renderSlot(r.$slots, "close", {}, () => [
            createVNode(unref(A), {
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
var Ke = z(Je, [["__scopeId", "data-v-d11fdcb2"]]);
var Qe = N("ImAlert", Ke);
var Ze = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = useSlots(), a = n, t = $("breadcrumb"), i = s, o = computed(
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
    return (d, u) => (openBlock(), createElementBlock("div", {
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
          renderSlot(d.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(i.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var et = z(Ze, [["__scopeId", "data-v-64336468"]]);
var tt = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(s, { emit: n }) {
    const e = $("breadcrumb__item"), a = s, t = n;
    return (i, o) => (openBlock(), createElementBlock("div", {
      onClick: o[0] || (o[0] = () => t("click", a.value)),
      class: normalizeClass([unref(e).b(), unref(e).is("active", a.active === a.value && !!a.value)])
    }, [
      renderSlot(i.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var nt = z(tt, [["__scopeId", "data-v-40ed04b1"]]);
var st = N("ImBreadcrumb", et);
var at = N("ImBreadcrumb", nt);
var ot = (s = 50) => {
  const n = ref(0), e = ref(0), a = fe((t) => {
    n.value = t.clientX, e.value = t.clientY;
  }, s);
  return onMounted(() => {
    window.addEventListener("mousemove", a, { passive: true });
  }), onUnmounted(() => {
    window.removeEventListener("mousemove", a);
  }), { x: n, y: e };
};
var lt = (s, n, e, a = "bottomLeft") => {
  watch(
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
};
var rt = (s) => {
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
var it = defineComponent({
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
    var g;
    const e = n, a = $("dropdown"), t = s, i = ref(null), o = ref(null), f = ref(t.modelValue || false), d = rt((g = t.placement) != null && g.includes("top") ? "top" : "bottom");
    let u = null, r = 60;
    const { x: c, y: v } = ot(30), { zIndexToken: _ } = U();
    lt(f, i, o, t.placement), onMounted(() => {
      u && u(), u = y();
    }), onUnmounted(() => {
      u && u();
    }), watch(() => t.trigger, () => {
      u && u(), u = y();
    });
    const I = fe(() => {
      const L = be(c.value, v.value, o.value);
      be(c.value, v.value, i.value) || L || (f.value = false);
    }, r);
    watch(() => [c.value, v.value], () => {
      t.trigger != "hover" || !f.value || I();
    });
    function D() {
      f.value = true, e("update:modelValue", f.value), e("change", f.value), window.addEventListener("scroll", C, { passive: true, capture: true });
    }
    function O() {
      f.value = false, e("update:modelValue", f.value), e("change", f.value), window.removeEventListener("scroll", C);
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
      if (document.addEventListener("click", L, { passive: true }), t.trigger === "hover") {
        const H = se(D, r);
        return (b = i.value) == null || b.addEventListener("mouseenter", H, { passive: true }), () => {
          var Y;
          (Y = i.value) == null || Y.removeEventListener("mouseenter", H), document.removeEventListener("click", L);
        };
      }
      if (t.trigger === "click") {
        const H = se(() => {
          f.value ? O() : D();
        }, r);
        return (V = i.value) == null || V.addEventListener("click", H, { passive: true }), () => {
          var Y;
          (Y = i.value) == null || Y.removeEventListener("click", H), document.removeEventListener("click", L);
        };
      }
      return null;
    }
    return (L, b) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(a).b()]),
      ref_key: "dropdownRef",
      ref: i
    }, [
      renderSlot(L.$slots, "default", {}, void 0, true),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          onEnter: unref(d).onEnter,
          onLeave: unref(d).onLeave,
          duration: { enter: 200, leave: 200 }
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(a).e("content"), "im-shadow"]),
              ref_key: "contentRef",
              ref: o,
              style: normalizeStyle({
                zIndex: t.zIndex || unref(_)
              })
            }, [
              renderSlot(L.$slots, "content", {}, void 0, true)
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
var ct = z(it, [["__scopeId", "data-v-4ad7c8b4"]]);
var ut = N("ImDropdown", ct);
var dt = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(s, { emit: n }) {
    const e = s, a = useSlots(), t = $("list"), i = computed(() => {
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
    return (d, u) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(t).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (r) => (openBlock(), createBlock(resolveDynamicComponent(r), {
        active: e.modelValue,
        onClick: () => f(r.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var mt = z(dt, [["__scopeId", "data-v-9599f63c"]]);
var pt = defineComponent({
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
    const e = $("list__item"), a = n, t = s;
    return (i, o) => {
      const f = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(e).b(), unref(e).is("active", !!(t.active && t.active === t.value))]),
        onClick: o[0] || (o[0] = (d) => a("click", d))
      }, [
        renderSlot(i.$slots, "default", {}, void 0, true)
      ], 2)), [
        [f, t.ripple]
      ]);
    };
  }
});
var ft = z(pt, [["__scopeId", "data-v-41ec0ba7"]]);
var vt = N("ImList", mt);
var gt = N("ImListItem", ft);
var ht = ["src", "srcset", "alt", "loading"];
var yt = defineComponent({
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
      }, null, 42, ht))
    ], 6));
  }
});
var _t = z(yt, [["__scopeId", "data-v-c4c32038"]]);
var bt = N("ImAvatar", _t);
var It = () => ({
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
var wt = (s = "right") => {
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
var kt = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const e = $("mask"), { zIndexToken: a } = U(), t = s, i = It(), o = n, f = () => {
      t.closeOnClickMask && o("close", false);
    };
    return (d, u) => (openBlock(), createBlock(Transition, {
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
          renderSlot(d.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, t.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
});
var xt = z(kt, [["__scopeId", "data-v-2ba470f4"]]);
var ve = N("ImMask", xt);
var zt = ["aria-modal"];
var Lt = defineComponent({
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
    const e = $("drawer"), a = n, t = s, i = ref(null), o = wt(t.placement), { zIndexToken: f } = U(), d = () => {
      a("update:modelValue", false);
    };
    return (u, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [
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
          onClose: d,
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
              renderSlot(u.$slots, "default", {}, void 0, true)
            ], 2), [
              [vShow, t.modelValue]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ], 14, zt)
    ]));
  }
});
var $t = z(Lt, [["__scopeId", "data-v-1b0178a0"]]);
var Ct = N("ImDrawer", $t);
var Et = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(s) {
    const n = $("card"), e = s;
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
var Bt = z(Et, [["__scopeId", "data-v-bb9cd52c"]]);
var Tt = N("ImCard", Bt);
var Pt = ["data-index", "onMouseenter", "onMouseleave"];
var Vt = { class: "im-message__text" };
var St = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(s, { expose: n }) {
    const e = $("message"), a = s, t = ref([]);
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
    return a.add && a.add(u), n({ addMsg: u }), (r, c) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(e).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(t.value, (v) => (openBlock(), createElementBlock("li", {
          key: v.id,
          "data-index": v.id,
          onMouseenter: () => f(v),
          onMouseleave: () => d(v),
          class: normalizeClass(["im-message__item", [unref(e).e("item"), v.color ? unref(e).e(v.color) : ""]])
        }, [
          createVNode(unref(A), {
            name: o(v.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", Vt, toDisplayString(v.msg), 1)
        ], 42, Pt))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var Mt = z(St, [["__scopeId", "data-v-820c83a9"]]);
var At = class {
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
var M = null;
var sn = () => (M || (M = new At()), {
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
});
var Rt = ["data-visible", "data-esc"];
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
    const e = $("dialog"), a = n, t = s, i = ref(null), { zIndexToken: o } = U();
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
    const d = async (r, c) => {
      r.style.setProperty("opacity", "0"), r.style.setProperty("transition", "all 0.2s ease"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.getBoundingClientRect(), r.style.setProperty("opacity", "1"), r.style.setProperty("transform", "translateY(0) scale(1)"), c(), !document.body.classList.contains("im-overflow-hidden") && document.body.classList.add("im-overflow-hidden");
    }, u = async (r, c) => {
      r.style.setProperty("opacity", "0"), t.fullscreen ? r.style.setProperty("transform", "translateY(100%)") : r.style.setProperty("transform", "scale(0.98)"), r.style.setProperty("transition", "all 0.2s ease");
      const v = () => {
        c(), Array.from(
          document.body.querySelectorAll('.im-dialog[data-visible="true"]')
        ).length || document.body.classList.remove("im-overflow-hidden"), r.removeEventListener("transitionend", v);
      };
      r.addEventListener("transitionend", v, { passive: true });
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
          onEnter: d,
          duration: { enter: 200, leave: 200 },
          onLeave: u
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
var Dt = z(Nt, [["__scopeId", "data-v-8ba4a4fb"]]);
var Ot = N("ImDialog", Dt);
var Yt = defineComponent({
  name: "ImLayer",
  __name: "ImLayer",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: "" },
    getTarget: { type: Function, default: () => null }
  },
  emits: ["close"],
  setup(s, { emit: n }) {
    const { zIndexToken: e } = U(), a = $("layer"), t = s, i = reactive({
      minWidth: "",
      top: "",
      left: ""
    }), o = ref(null), f = computed(() => t.zIndex || e.value || 1e3);
    watch(() => t.visible, (u) => {
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
    return (u, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, {
        name: "im-fade",
        duration: { enter: 200, leave: 200 }
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass([unref(a).b(), "im-shadow"]),
            ref_key: "contentRef",
            ref: o,
            style: normalizeStyle({
              ...i,
              zIndex: f.value
            })
          }, [
            renderSlot(u.$slots, "default", {}, void 0, true)
          ], 6), [
            [vShow, t.visible]
          ])
        ]),
        _: 3
      })
    ]));
  }
});
var Ht = z(Yt, [["__scopeId", "data-v-a1bb7e2a"]]);
var qt = ["value", "placeholder"];
var Ft = ["onClick"];
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
    zIndex: {}
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const e = $("select"), a = n, t = s, { sizeToken: i } = U(), o = ref(false), f = ref(null), d = ref(null), u = ref(null), r = computed(() => Ie(t.width)), c = computed(() => Ie(t.size || i.value || "36px")), v = computed(() => {
      var y;
      return ((y = t.options.find((g) => g.value === t.modelValue)) == null ? void 0 : y.label) || "";
    });
    watch(() => o.value, (y) => {
      document.removeEventListener("click", I, { capture: true }), y ? document.addEventListener("click", I, { capture: true }) : window.removeEventListener("scroll", _, { capture: true });
    });
    function _(y) {
      var g;
      (g = d.value) != null && g.contains(y.target) || d.value === y.target || (o.value = false);
    }
    function I(y) {
      var g;
      (g = f.value) != null && g.contains(y.target) || f.value === y.target || y.target === d.value || (o.value = false);
    }
    async function D() {
      var g;
      if (o.value) return;
      o.value = true, await new Promise((L) => requestAnimationFrame(L));
      const y = (g = d.value) == null ? void 0 : g.querySelector(`.${e.is("active", true)}`);
      y && y.scrollIntoView({ behavior: "instant", block: "nearest" }), await new Promise((L) => requestAnimationFrame(L)), window.addEventListener("scroll", _, { capture: true });
    }
    function O(y) {
      a("update:modelValue", y);
    }
    function C(y) {
      y.preventDefault(), y.stopPropagation(), a("update:modelValue", "");
    }
    return (y, g) => {
      const L = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(e).b()]),
        style: normalizeStyle({
          "--im-select-width": r.value,
          "--im-select-height": c.value
        })
      }, [
        createBaseVNode("div", {
          onClick: D,
          class: normalizeClass([unref(e).e("trigger"), unref(e).is("open", o.value)]),
          ref_key: "triggerRef",
          ref: f,
          tabindex: "-1"
        }, [
          createBaseVNode("input", {
            class: normalizeClass([unref(e).e("input")]),
            ref_key: "inputRef",
            ref: u,
            tabindex: "-1",
            value: v.value,
            readonly: "",
            type: "text",
            placeholder: t.placeholder
          }, null, 10, qt),
          createBaseVNode("span", {
            class: normalizeClass([unref(e).e("icon-down"), unref(e).is("rotate", o.value)])
          }, [
            renderSlot(y.$slots, "downIcon", {}, () => [
              createVNode(unref(A), {
                name: "down",
                size: "12"
              })
            ], true)
          ], 2),
          t.allowClear && v.value ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(e).e("clear-icon")]),
            onClick: C
          }, [
            renderSlot(y.$slots, "clearIcon", {}, () => [
              createVNode(unref(A), {
                name: "close-circle-fill",
                size: "18"
              })
            ], true)
          ], 2)) : createCommentVNode("", true)
        ], 2),
        createVNode(Ht, {
          visible: o.value,
          getTarget: () => f.value,
          "z-index": t.zIndex
        }, {
          default: withCtx(() => [
            createBaseVNode("ul", {
              class: normalizeClass([unref(e).e("list")]),
              ref_key: "listRef",
              ref: d
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(t.options, (b, V) => withDirectives((openBlock(), createElementBlock("li", {
                onClick: () => !b.disabled && O(b.value),
                class: normalizeClass([unref(e).e("option"), unref(e).is("disabled", !!b.disabled), unref(e).is("active", b.value === t.modelValue)]),
                key: b.value || V
              }, [
                createTextVNode(toDisplayString(b.label || b.value), 1)
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
});
var Wt = z(Xt, [["__scopeId", "data-v-917f1c1a"]]);
var ke = N("ImSelect", Wt);
var Ut = ["aria-disabled"];
var jt = ["onClick", "title"];
var Gt = ["aria-disabled"];
var Jt = defineComponent({
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
    const e = $("pagination"), a = n, t = s, i = ref(t.pageSize), o = ref([1]), { sizeToken: f } = U(), d = computed(() => parseInt(String(t.size || f.value || 36)) + "px"), u = computed(() => Math.ceil(t.total / (i.value || 10))), r = computed(() => t.pageNumber === 1), c = computed(() => t.pageNumber >= u.value), v = computed(() => t.pageSizeItems.map((g) => ({ label: `${g} 条/页`, value: g })));
    watch(() => i.value, (g) => {
      u.value < t.pageNumber ? a("change", { pageSize: g, pageNumber: u.value }) : a("change", { pageSize: g, pageNumber: t.pageNumber });
    }), watch(() => [t.pageNumber, t.pageSize], () => {
      i.value = t.pageSize, I(u.value < t.pageNumber ? u.value : t.pageNumber);
    }, { immediate: true });
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
      const b = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(e).b()]),
        style: normalizeStyle({
          "--im-pagination-size": d.value
        })
      }, [
        g.layout.includes("total") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(e).e("total")])
        }, "共 " + toDisplayString(g.total) + " 条数据", 3)) : createCommentVNode("", true),
        g.layout.includes("prev") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(e).e("prev"), unref(e).is("disabled", r.value)]),
          "aria-disabled": r.value,
          onClick: O
        }, [
          createVNode(unref(A), {
            name: "left",
            size: "14px"
          })
        ], 10, Ut)), [
          [b, !r.value]
        ]) : createCommentVNode("", true),
        g.layout.includes("pager") ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(e).e("pager")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (V) => (openBlock(), createElementBlock(Fragment, null, [
            V === "left" ? (openBlock(), createElementBlock("div", {
              key: 0,
              title: "向前5页",
              class: normalizeClass([unref(e).e("page-item"), unref(e).e("left")]),
              onClick: y
            }, [
              createVNode(unref(A), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(A), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : V !== "right" ? withDirectives((openBlock(), createElementBlock("div", {
              key: 1,
              onClick: () => _(V),
              class: normalizeClass([unref(e).e("page-item"), unref(e).is("active", V === t.pageNumber)]),
              title: String(V)
            }, [
              createTextVNode(toDisplayString(V), 1)
            ], 10, jt)), [
              [b, true]
            ]) : V === "right" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass([unref(e).e("page-item"), unref(e).e("right")]),
              title: "向后5页",
              onClick: C
            }, [
              createVNode(unref(A), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(A), {
                name: "arrowright",
                class: "im-icon--arrowright"
              })
            ], 2)) : createCommentVNode("", true)
          ], 64))), 256))
        ], 2)) : createCommentVNode("", true),
        g.layout.includes("next") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(e).e("next"), unref(e).is("disabled", c.value)]),
          "aria-disabled": c.value,
          onClick: D
        }, [
          createVNode(unref(A), {
            name: "right",
            size: "14px"
          })
        ], 10, Gt)), [
          [b, !c.value]
        ]) : createCommentVNode("", true),
        g.layout.includes("sizes") ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass([unref(e).e("size")])
        }, [
          createVNode(unref(ke), {
            options: v.value,
            modelValue: i.value,
            "onUpdate:modelValue": L[0] || (L[0] = (V) => i.value = V),
            size: t.size
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var Kt = z(Jt, [["__scopeId", "data-v-3bb837f2"]]);
var Qt = N("ImPagination", Kt);
var Zt = [
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
];
var en = (s, n) => {
  s.provide(we, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), s.directive("ripple", Se), Zt.forEach((e) => {
    e.name ? s.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var an = {
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
//# sourceMappingURL=im-design.js.map
