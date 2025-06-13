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

// node_modules/.pnpm/im-design@0.0.46/node_modules/im-design/dist/im-design.js
var Je = Object.defineProperty;
var Ae = (o) => {
  throw TypeError(o);
};
var Ke = (o, a, t) => a in o ? Je(o, a, { enumerable: true, configurable: true, writable: true, value: t }) : o[a] = t;
var pe = (o, a, t) => Ke(o, typeof a != "symbol" ? a + "" : a, t);
var Ne = (o, a, t) => a.has(o) || Ae("Cannot " + t);
var te = (o, a, t) => (Ne(o, a, "read from private field"), t ? t.call(o) : a.get(o));
var ze = (o, a, t) => a.has(o) ? Ae("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(o) : a.set(o, t);
var fe = (o, a, t, n) => (Ne(o, a, "write to private field"), n ? n.call(o, t) : a.set(o, t), t);
var We = Symbol("im-design-token");
var re;
var st = class {
  constructor() {
    ze(this, re);
    fe(this, re, []);
  }
  async add(a) {
    te(this, re).push(a);
  }
  remove() {
    try {
      const a = te(this, re).shift();
      a && this.run(a);
    } catch (a) {
      console.error(a);
    }
  }
  async run(a) {
    try {
      const t = a.querySelector(".im-ripple__item");
      if (!t) return;
      let n = Date.now(), e = t.getAttribute("data-time");
      const i = n - Number(e) || 0;
      i && await new Promise((s) => {
        t.style.opacity = "0.1";
        const d = 200 - i;
        setTimeout(
          () => {
            s(null);
          },
          d > 0 ? d : 0
        );
      }), t.style.opacity = "0", t.style.transition = "all 50ms", setTimeout(() => {
        a && (a == null || a.remove()), te(this, re).length && this.remove();
      }, 50);
    } catch (t) {
      console.log(t);
    }
  }
};
re = /* @__PURE__ */ new WeakMap();
async function lt(o, a, t) {
  const n = window.getComputedStyle(t), e = t.getBoundingClientRect(), i = document.createElement("div");
  i.className = "im-ripple", a.add(i);
  const s = document.createElement("div");
  s.className = "im-ripple__item";
  const d = o.clientX || o.touches && o.touches[0].clientX, v = o.clientY || o.touches && o.touches[0].clientY, u = Math.max(e.width, e.height), r = d - e.left - u / 2, c = v - e.top - u / 2, f = e.width - e.height <= 5;
  Object.assign(s.style, {
    "background-color": n.color,
    width: `${u}px`,
    height: `${u}px`,
    left: `${r}px`,
    top: `${c}px`,
    opacity: "0.15",
    transform: f ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), s.setAttribute("data-time", Date.now() + ""), i.appendChild(s), t.appendChild(i);
  const g = n.position;
  g === "static" && (t.style.position = "relative", t.dataset.originalPosition = g), s.getBoundingClientRect(), s.style.transform = "scale(2.8)", s.style.opacity = "0.33";
}
var it = {
  mounted(o, a) {
    o.IM_RIPPLE_VALUE = a.value;
    const t = new st(), n = (d) => {
      o.IM_RIPPLE_VALUE && lt(d, t, o);
    }, e = () => {
      t.remove();
    }, i = () => {
      o.addEventListener("mousedown", n, { passive: true }), window.addEventListener("mouseup", e, { passive: true });
    }, s = () => {
      o.removeEventListener("mousedown", n), window.removeEventListener("mouseup", e);
    };
    i(), o._rippleListeners = { remove: s };
  },
  beforeUnmount(o) {
    var a;
    (a = o._rippleListeners) == null || a.remove();
  },
  updated(o, a) {
    o.IM_RIPPLE_VALUE = a.value;
  }
};
var B = (o) => {
  const a = "im-" + o;
  return {
    b: () => a,
    e: (t) => `${a}__${t}`,
    m: (t) => `${a}--${t}`,
    is: (t, n) => n ? `is-${t}` : ""
  };
};
var ye = (o, a) => {
  let t;
  return function(...n) {
    t || (t = setTimeout(() => {
      o.apply(this, n), t = null;
    }, a));
  };
};
var we = (o, a) => {
  let t;
  return function(...n) {
    t && clearTimeout(t), t = setTimeout(() => {
      o.apply(this, n);
    }, a);
  };
};
var rt = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"];
var se = (o) => {
  if (typeof o == "number") return `${o}px`;
  const a = String(o);
  return o ? rt.some((t) => a.includes(t)) ? a : `${o}px` : "";
};
var ct = defineComponent({
  name: "ImLoading",
  __name: "ImLoading",
  props: {
    size: { default: "32" },
    loading: { type: Boolean, default: false },
    loadingText: { default: "" },
    mask: { type: Boolean, default: true },
    customClass: { default: "" },
    fullscreen: { type: Boolean, default: false },
    zIndex: {}
  },
  setup(o) {
    const a = B("loading"), t = o, n = computed(() => se(t.size));
    return (e, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(a).b(),
        t.customClass,
        unref(a).is("fullscreen", t.fullscreen),
        unref(a).is("mask", t.mask)
      ]),
      style: normalizeStyle({
        "--im-loading-size": n.value
      })
    }, [
      createBaseVNode("div", {
        class: normalizeClass([unref(a).e("icon-wrapper")])
      }, [
        (openBlock(), createElementBlock("svg", {
          viewBox: "0 0 1024 1024",
          class: normalizeClass([unref(a).e("loading")]),
          version: "1.1",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          "p-id": "5828"
        }, i[0] || (i[0] = [
          createBaseVNode("path", {
            d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3 0.1 19.9-16 36-35.9 36z",
            "p-id": "5829"
          }, null, -1)
        ]), 2))
      ], 2),
      t.loadingText ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(a).e("text")])
      }, toDisplayString(t.loadingText), 3)) : createCommentVNode("", true)
    ], 6));
  }
});
var L = (o, a) => {
  const t = o.__vccOpts || o;
  for (const [n, e] of a)
    t[n] = e;
  return t;
};
var qe = L(ct, [["__scopeId", "data-v-8ece8f88"]]);
function ve(o, a) {
  he(o);
  const t = createApp(qe, {
    loading: true,
    fullScreen: false,
    loadingText: a
  }), n = document.createElement("div"), e = window.getComputedStyle(o);
  e.overflow !== "hidden" && (o.dataset.overflow = e.overflow, o.style.overflow = "hidden"), e.position === "static" && (o.dataset.position = e.position, o.style.position = "relative"), o.appendChild(n), t.mount(n), o.IM_LOADING_INSTANCE = t;
}
function he(o) {
  const a = o == null ? void 0 : o.IM_LOADING_INSTANCE;
  if (a)
    try {
      a.unmount(), a._container.remove(), o.IM_LOADING_INSTANCE = null, o.dataset.overflow && (o.style.overflow = o.dataset.overflow, delete o.dataset.overflow), o.dataset.position && (o.style.position = o.dataset.position, delete o.dataset.position);
    } catch (t) {
      console.error(t);
    }
}
var ut = {
  mounted(o, a) {
    var t, n;
    if (typeof a.value == "boolean")
      return a.value && ve(o);
    (t = a.value) != null && t.loading && ve(o, (n = a.value) == null ? void 0 : n.loadingText);
  },
  beforeUnmount(o) {
    he(o);
  },
  updated(o, a) {
    var t, n;
    if (typeof a.value == "boolean")
      return a.value ? ve(o) : he(o);
    (t = a.value) != null && t.loading ? ve(o, (n = a.value) == null ? void 0 : n.loadingText) : he(o);
  }
};
var dt = defineComponent({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    size: { default: 16 },
    name: {},
    color: { default: "currentColor" }
  },
  setup(o) {
    const a = o, t = computed(() => se(a.size));
    return (n, e) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(["im-icon", [`im-icon-${a.name}`]]),
      style: normalizeStyle({
        "--icon-size": t.value,
        "--icon-color": a.color
      })
    }, null, 6));
  }
});
var Y = L(dt, [["__scopeId", "data-v-a82dfaa3"]]);
Y.install = function(o) {
  o.component("ImIcon", Y);
};
var mt = ["data-index", "onMouseenter", "onMouseleave"];
var pt = { class: "im-message__text" };
var ft = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(o, { expose: a }) {
    const t = B("message"), n = o, e = ref([]);
    let i = null;
    watch(() => e.value, () => {
      e.value.length === 0 ? i = setTimeout(() => {
        !e.value.length && n.callback();
      }, 500) : (i && clearTimeout(i), i = null);
    });
    const s = (r) => {
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
    }, d = (r) => {
      r.timer && (clearTimeout(r.timer), r.timer = null);
    }, v = (r) => {
      r.timer && clearTimeout(r.timer), r.timer = setTimeout(() => {
        e.value = e.value.filter((c) => c.id !== r.id);
      }, r.duration || 3e3);
    }, u = (r) => {
      const c = setTimeout(() => {
        e.value = e.value.filter((f) => f.id !== r.id);
      }, r.duration || 3e3);
      e.value.push({ ...r, timer: c });
    };
    return n.add && n.add(u), a({ addMsg: u }), (r, c) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(t).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (f) => (openBlock(), createElementBlock("li", {
          key: f.id,
          "data-index": f.id,
          onMouseenter: () => d(f),
          onMouseleave: () => v(f),
          class: normalizeClass(["im-message__item", [unref(t).e("item"), f.color ? unref(t).e(f.color) : ""]])
        }, [
          createVNode(unref(Y), {
            name: s(f.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", pt, toDisplayString(f.msg), 1)
        ], 42, mt))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var vt = L(ft, [["__scopeId", "data-v-820c83a9"]]);
var gt = class {
  constructor() {
    pe(this, "app");
    pe(this, "container");
    pe(this, "addMsgToList");
    this.app = null, this.container = null, this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    if (typeof window < "u" && window) {
      this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
      const a = this;
      this.app = createApp(vt, {
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
var G = null;
var Qo = () => (G || (G = new gt()), {
  info: (o, a = 3e3) => {
    G == null || G.info(o, a);
  },
  success: (o, a = 3e3) => {
    G == null || G.success(o, a);
  },
  warning: (o, a = 3e3) => {
    G == null || G.warning(o, a);
  },
  error: (o, a = 3e3) => {
    G == null || G.error(o, a);
  }
});
var ee;
var ht = class {
  constructor() {
    ze(this, ee);
    fe(this, ee, null);
  }
  setLoading(a, t) {
    a ? this.createLoading(t) : this.closeLoading();
  }
  createLoading(a = {}) {
    this.closeLoading(), fe(this, ee, createApp(qe, {
      ...a,
      loading: true,
      fullscreen: true
    }));
    const t = document.createElement("div");
    t.setAttribute("class", "im-loading-container"), document.body.appendChild(t), te(this, ee).mount(t);
  }
  closeLoading() {
    te(this, ee) && (te(this, ee).unmount(), te(this, ee)._container && document.body.removeChild(te(this, ee)._container));
  }
};
ee = /* @__PURE__ */ new WeakMap();
var Pe = new ht();
var Zo = () => ({
  show(o) {
    Pe.setLoading(true, o);
  },
  hide() {
    Pe.setLoading(false);
  }
});
var oe = (o, a) => {
  const t = inject(We), n = ref(Number(t.size || 36)), e = ref(t.zIndex || 1e3);
  return { sizeToken: n, zIndexToken: e };
};
var yt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function bt(o, a) {
  return openBlock(), createElementBlock("svg", yt, a[0] || (a[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var _t = { render: bt };
var It = ["tabindex", "type", "disabled"];
var wt = defineComponent({
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
  setup(o, { expose: a, emit: t }) {
    const n = o, e = t, i = B("button"), { sizeToken: s } = oe(), d = useAttrs(), v = computed(() => [
      i.b(),
      n.color && i.m(n.color),
      n.shape && i.m(n.shape),
      n.variant && i.m(n.variant),
      i.is("disabled", n.disabled),
      i.is("loading", n.loading)
    ].filter(Boolean)), u = ref(), r = computed(() => {
      let g = +(n.size || s.value || 36);
      return {
        "--im-button-size": g + "px",
        "--im-button-padding": (g * 0.45).toFixed(0) + "px",
        width: n.width
      };
    });
    a({
      ref: u,
      $el: u,
      focus: () => {
        var g;
        return (g = u.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = u.value) == null ? void 0 : g.blur();
      }
    });
    const c = computed(() => n.loading && ["square", "circle"].includes(n.shape)), f = () => {
      n.disabled || n.loading || e("click");
    };
    return (g, V) => {
      const A = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", mergeProps(unref(d), {
        class: v.value,
        onClick: f,
        ref_key: "buttonRef",
        ref: u,
        style: r.value,
        tabindex: n.tabindex || 0,
        type: n.type || "button",
        disabled: n.disabled || n.loading
      }), [
        n.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(i).e("loading")])
        }, [
          createVNode(unref(_t))
        ], 2)) : createCommentVNode("", true),
        c.value ? createCommentVNode("", true) : renderSlot(g.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(n.text), 1)
        ], true)
      ], 16, It)), [
        [A, true]
      ]);
    };
  }
});
var $e = L(wt, [["__scopeId", "data-v-a3d92bde"]]);
$e.install = (o) => {
  o.component("ImButton", $e);
};
var kt = defineComponent({
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
  setup(o) {
    const a = o, t = useSlots(), n = computed(() => {
      var i;
      return ((i = t.default) == null ? void 0 : i.call(t)) || [];
    }), e = B("row");
    return (i, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-row-gutter": a.gutter + "px",
        "align-items": a.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(n.value, (d, v) => (openBlock(), createBlock(resolveDynamicComponent(d), { key: v }))), 128))
    ], 6));
  }
});
var Te = L(kt, [["__scopeId", "data-v-5179967f"]]);
var Ct = defineComponent({
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
  setup(o) {
    const a = o, t = B("col"), n = computed(
      () => +((Number(a.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (e, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()]),
      style: normalizeStyle({
        "--im-col-w": n.value,
        "--im-col-offset": a.offset
      })
    }, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var Be = L(Ct, [["__scopeId", "data-v-ecf91058"]]);
Te.install = (o) => {
  o.component("ImRow", Te);
};
Be.install = (o) => {
  o.component("ImCol", Be);
};
var xt = defineComponent({
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
  setup(o, { emit: a }) {
    const t = o, { sizeToken: n } = oe(), e = a, i = ref(t.modelValue), s = B("input"), d = () => {
      e("update:modelValue", i.value), e("change", i.value);
    };
    return (v, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(s).b()]),
      style: normalizeStyle({
        "--in-input-size": (t.size || unref(n) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(s).e("input")],
        "onUpdate:modelValue": u[0] || (u[0] = (r) => i.value = r)
      }, t, { onInput: d }), null, 16), [
        [vModelDynamic, i.value]
      ])
    ], 6));
  }
});
var Le = L(xt, [["__scopeId", "data-v-6c70856c"]]);
Le.install = (o) => {
  o.component("ImInput", Le);
};
var zt = defineComponent({
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
  setup(o) {
    const a = B("divider"), t = o;
    return (n, e) => (openBlock(), createElementBlock("div", {
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
        renderSlot(n.$slots, "default", {}, void 0, true)
      ], 2))
    ], 6));
  }
});
var be = L(zt, [["__scopeId", "data-v-108f9bec"]]);
be.name = "ImDivider";
be.install = function(o) {
  o.component("ImDivider", be);
};
var O = (o, a) => (a.install = (t) => {
  t.component(o, a);
}, a);
var $t = ["onClick"];
var Tt = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(o) {
    const a = B("anchor");
    let t = null;
    const n = ref(null), e = ref(null), i = ref(null), s = o;
    watch(
      () => s.target,
      () => {
        t && t(), t = u();
      }
    ), onMounted(() => {
      t = u();
    }), onUnmounted(() => {
      t && t();
    });
    function d(c) {
      let f = c == null ? void 0 : c.scrollTop;
      return n.value === window && (f = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), f;
    }
    function v(c) {
      var I;
      if (i.value || !n.value) return;
      const f = n.value === window ? c.target : n.value;
      let g = d(f);
      const V = f.offsetTop || 0, A = (s.data || []).map(({ id: z }) => {
        const x = document.getElementById(z);
        return x ? {
          id: z,
          offsetTop: x.offsetTop - V,
          el: x
        } : null;
      }).filter(Boolean);
      e.value = null;
      for (let z = 0; z < A.length; z++) {
        const x = A[z];
        if (g >= x.offsetTop - (s.offset || 0) && g <= x.offsetTop + (((I = x.el) == null ? void 0 : I.clientHeight) || 0) - (s.offset || 0)) {
          e.value = x.id;
          return;
        }
      }
      if (!e.value && g >= (parseInt(String(s.offset)) || 0)) {
        const z = A.find((x) => g <= x.offsetTop - (s.offset || 0) && g > (s.offset || 0) ? (e.value = x.id, true) : false);
        z && (e.value = z.id);
      }
    }
    function u() {
      const c = s.target ? typeof s.target == "string" ? document.querySelector(s.target) : s.target : window;
      if (!c)
        return null;
      n.value = c;
      const f = ye(v, 50);
      return v({ target: c }), c.addEventListener("scroll", f, { passive: true }), () => {
        c.removeEventListener("scroll", f);
      };
    }
    async function r(c) {
      var V, A, I;
      if (e.value === c || !c) return;
      i.value = c, e.value = c;
      const f = document.getElementById(c);
      if (!f) return;
      (A = n.value) == null || A.scrollTo({
        // @ts-ignore
        top: f.offsetTop - (s.offset || 0) - (((V = n.value) == null ? void 0 : V.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const g = we(() => {
        var z;
        i.value = null, (z = n.value) == null || z.removeEventListener("scroll", g);
      }, 300);
      (I = n.value) == null || I.addEventListener("scroll", g, { passive: true });
    }
    return (c, f) => {
      const g = resolveDirective("ripple");
      return s.data && s.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(a).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(s.data, (V) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(a).e("item"), unref(a).is("active", e.value === V.id)]),
          onClick: () => r(V.id)
        }, [
          e.value === V.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(a).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(V.text), 1)
        ], 10, $t)), [
          [g, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Bt = L(Tt, [["__scopeId", "data-v-4840d244"]]);
var Lt = O("ImAnchor", Bt);
var Vt = defineComponent({
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
  setup(o, { emit: a }) {
    const t = a, n = ref(null), e = o, i = B("alert"), s = useSlots(), d = computed(() => !!(e.showIcon && e.title)), v = computed(() => {
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
    }), u = async () => {
      var r, c;
      t("close"), (r = n.value) == null || r.animate([{
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
      }), await new Promise((f) => setTimeout(f, 300)), (c = n.value) == null || c.remove();
    };
    return (r, c) => {
      const f = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: n,
        class: normalizeClass([unref(i).b(), unref(i).m(e.color || "primary"), e.variant && unref(i).m(e.variant || "")])
      }, [
        e.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(i).e("icon")])
        }, [
          renderSlot(r.$slots, "icon", {}, () => [
            createVNode(unref(Y), {
              name: v.value,
              size: d.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(i).e("content")])
        }, [
          e.title || unref(s).title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(i).e("title")])
          }, [
            renderSlot(r.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(e.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(i).e("message")])
          }, [
            renderSlot(r.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(e.message), 1)
            ], true)
          ], 2)
        ], 2),
        e.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(i).e("close")]),
          onClick: u
        }, [
          renderSlot(r.$slots, "close", {}, () => [
            createVNode(unref(Y), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [f, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var Et = L(Vt, [["__scopeId", "data-v-d11fdcb2"]]);
var St = O("ImAlert", Et);
var Mt = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: a }) {
    const t = useSlots(), n = a, e = B("breadcrumb"), i = o, s = computed(
      () => {
        var v, u;
        return (u = (v = t.default) == null ? void 0 : v.call(t)) == null ? void 0 : u.filter((r) => {
          var c;
          return (r == null ? void 0 : r.type) && ((c = r == null ? void 0 : r.type) == null ? void 0 : c.name) === "ImBreadcrumbItem";
        });
      }
    ), d = (v) => {
      v && i.modelValue !== v && (n("update:modelValue", v), n("change", v));
    };
    return (v, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (r, c) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(r), {
          active: i.modelValue,
          onClick: d
        }, null, 8, ["active"])),
        s.value && s.value.length > 0 && c < s.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(e).e("separator")])
        }, [
          renderSlot(v.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(i.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var At = L(Mt, [["__scopeId", "data-v-64336468"]]);
var Nt = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(o, { emit: a }) {
    const t = B("breadcrumb__item"), n = o, e = a;
    return (i, s) => (openBlock(), createElementBlock("div", {
      onClick: s[0] || (s[0] = () => e("click", n.value)),
      class: normalizeClass([unref(t).b(), unref(t).is("active", n.active === n.value && !!n.value)])
    }, [
      renderSlot(i.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var Pt = L(Nt, [["__scopeId", "data-v-40ed04b1"]]);
var Dt = O("ImBreadcrumb", At);
var Rt = O("ImBreadcrumb", Pt);
var _e = (o, a) => !o || !o.getAnimations ? false : (o.getAnimations(a).forEach((t) => t.cancel()), true);
var Xe = async (o, a) => {
  if (!o || !o.getAnimations) return false;
  try {
    return await Promise.all(
      o.getAnimations(a).map((t) => t.finished)
    ), true;
  } catch {
    return false;
  }
};
var ke = () => ({
  width: (window == null ? void 0 : window.innerWidth) || document.documentElement.clientWidth || document.body.clientWidth,
  height: (window == null ? void 0 : window.innerHeight) || document.documentElement.clientHeight || document.body.clientHeight
});
var Ot = () => document ? document.body.style.overflow === "hidden" || document.body.classList.contains("im-lock-scroll") : false;
var Ue = async () => {
  try {
    if (await new Promise((a) => setTimeout(a, 0)), !document) return Promise.resolve();
    Array.from(document.querySelectorAll(".is-im-lock-scroll")).length ? Ot() || document.body.classList.add("im-lock-scroll") : document.body.classList.remove("im-lock-scroll");
  } catch {
  }
};
var Yt = ["role"];
var Ce = defineComponent({
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
    scrollClose: { type: Boolean, default: false },
    role: { default: "dropdown" }
  },
  emits: ["close", "mouseenter", "mouseleave"],
  setup(o, { emit: a }) {
    const { zIndexToken: t } = oe(), n = B("layer"), e = ref(null), i = a, s = o, d = reactive({
      top: "",
      left: "",
      minWidth: "fit-content"
    }), v = computed(() => I(s.placement)), u = {
      option: {
        easing: "ease",
        // 动画过渡效果
        duration: 200,
        // 动画持续时间
        delay: 0
        // 动画延迟时间
      },
      dropdown: [
        { opacity: 0, transform: "scaleY(0.88)" },
        { opacity: 1, transform: "scaleY(1)" }
      ],
      tooltip: [
        { opacity: 0, transform: "scale(0.88)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      dropdownLeave: [
        { opacity: 1, transform: "scaleY(1)" },
        { opacity: 0, transform: "scaleY(0.88)" }
      ],
      tooltipLeave: [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.88)" }
      ]
    };
    onBeforeMount(() => {
      if (!document.getElementById("im-layer-container")) {
        const b = document.createElement("div");
        b.id = "im-layer-container", document.body.appendChild(b);
      }
    });
    const r = ["bottom", "bottom-left", "bottom-right"], c = ["top", "top-left", "top-right"], f = ["right", "right-top", "right-bottom"], g = ["left", "left-top", "left-bottom"];
    function V(y, b, k = "bottom-left") {
      const { height: K } = ke();
      let P = 0;
      const ae = s.arrow ? parseInt(String(s.offset || 0)) : 0;
      if (r.includes(k))
        P = y.bottom, P += ae;
      else if (c.includes(k))
        P = y.top - b.height, P -= ae;
      else if (f.includes(k) || g.includes(k))
        switch (k) {
          case "right":
          case "left":
            P = y.top + y.height * 0.5 - b.height / 2;
            break;
          case "right-top":
          case "left-top":
            P = y.top;
            break;
          case "right-bottom":
          case "left-bottom":
            P = y.top + y.height - b.height;
            break;
        }
      return P <= 0 ? 0 : P + b.height >= K ? K - b.height : P || y.top || 0;
    }
    function A(y, b, k = "bottom-left") {
      const K = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let P = 0;
      const ae = s.arrow ? parseInt(String(s.offset || 0)) : 0;
      if (r.includes(k) || c.includes(k))
        switch (k) {
          case "bottom":
          case "top":
            P = y.right - y.width / 2 - b.width / 2;
            break;
          case "bottom-right":
          case "top-right":
            P = y.left + y.width - b.width;
            break;
          default:
            P = y.left;
            break;
        }
      else f.includes(k) ? P = y.left + y.width + ae : g.includes(k) && (P = y.left - b.width - ae);
      return P <= 0 ? 0 : P + b.width >= K ? K - b.width : P || y.left || 0;
    }
    const I = (y) => [...r, ...c, ...f, ...g].includes(y) ? s.placement : "bottom-left";
    function z(y) {
      if (s.scrollClose) {
        const b = y.target, k = e.value;
        if (b && b === k || k != null && k.contains(b))
          return;
        i("close", true);
      } else
        Q();
    }
    const x = ye(Q, 100), w = ye(z, 100);
    async function Q() {
      var ae;
      const y = (ae = s.getTriggerContainer) == null ? void 0 : ae.call(s);
      if (!y)
        return i("close", true);
      ie();
      const b = v.value, k = e.value, K = y.getBoundingClientRect(), P = k.getBoundingClientRect();
      d.minWidth = s.role == "tooltip" ? "fit-content" : `${K.width}px`, d.top = `${V(K, P, b)}px`, d.left = `${A(K, P, b)}px`;
    }
    function X() {
      window.removeEventListener("scroll", w), s.visible && window.addEventListener("scroll", w, {
        passive: true,
        capture: true
      });
    }
    function F() {
      window.removeEventListener("resize", x), s.visible && window.addEventListener("resize", x, {
        passive: true,
        capture: true
      });
    }
    function ie() {
      const y = e.value;
      if (c.includes(v.value)) {
        y.style.transformOrigin = "center bottom";
        return;
      }
      if ((f.includes(v.value) || g.includes(v.value)) && ["right-bottom", "left-bottom"].includes(v.value)) {
        y.style.transformOrigin = "center bottom";
        return;
      }
      y.style.transformOrigin = "center top";
    }
    async function _(y) {
      const b = y;
      b.style.setProperty("transition", "none"), X(), F(), await new Promise((k) => requestAnimationFrame(k)), Q();
      try {
        b.getAnimations().forEach((k) => k == null ? void 0 : k.cancel()), b.animate(
          s.role === "tooltip" ? u.tooltip : u.dropdown,
          u.option
        ), Promise.all(
          b.getAnimations().map((k) => k.finished)
        ).finally(() => {
          b.style.setProperty("transition", "all 0.2s ease");
        });
      } catch (k) {
        console.error(k);
      }
    }
    function N(y, b) {
      const k = y;
      k.getAnimations().forEach((K) => K.cancel()), k.animate(
        s.role === "tooltip" ? u.tooltipLeave : u.dropdownLeave,
        u.option
      ), Promise.all(
        k.getAnimations().map((K) => K.finished)
      ).finally(() => {
        b(), X(), F();
      });
    }
    return (y, b) => (openBlock(), createBlock(Teleport, { to: "#im-layer-container" }, [
      createVNode(Transition, {
        css: false,
        duration: { enter: 200, leave: 200 },
        mode: "out-in",
        onBeforeEnter: _,
        onLeave: N
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            onMouseenter: b[0] || (b[0] = (k) => i("mouseenter", k)),
            onMouseleave: b[1] || (b[1] = (k) => i("mouseleave", k)),
            tabindex: "-1",
            ref_key: "layerRef",
            ref: e,
            "aria-modal": "true",
            class: normalizeClass([
              unref(n).b(),
              "im-shadow",
              s.customClass,
              v.value && unref(n).m(v.value)
            ]),
            style: normalizeStyle({
              zIndex: s.zIndex || unref(t),
              ...d
            }),
            role: s.role
          }, [
            s.arrow ? (openBlock(), createElementBlock("svg", {
              key: 0,
              class: normalizeClass([unref(n).e("arrow")]),
              width: "16",
              height: "16",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "19626"
            }, b[2] || (b[2] = [
              createBaseVNode("path", {
                d: "M590.336 763.563l359.083-362.155A85.333 85.333 0 0 0 888.832 256H170.667a85.333 85.333 0 0 0-60.587 145.408l359.083 362.155a85.333 85.333 0 0 0 121.173 0z",
                "p-id": "19626"
              }, null, -1)
            ]), 2)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass([unref(n).e("content")])
            }, [
              renderSlot(y.$slots, "default")
            ], 2)
          ], 46, Yt), [
            [vShow, s.visible]
          ])
        ]),
        _: 3
      })
    ]));
  }
});
var Ht = 100;
var Ft = defineComponent({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: false },
    trigger: { default: "hover" },
    placement: { default: "bottom-left" },
    zIndex: { default: void 0 },
    arrow: { type: Boolean, default: true },
    offset: { default: 8 },
    scrollClose: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: a }) {
    const t = a, n = B("dropdown"), e = o, i = ref(null), s = ref(e.modelValue || false);
    onMounted(() => {
      d();
    }), watch(
      () => s.value,
      () => {
        d();
      }
    ), watch(
      () => e.modelValue,
      (I) => {
        s.value = I;
      }
    );
    function d() {
      document.removeEventListener("click", u, { capture: true }), s.value && document.addEventListener("click", u, {
        passive: true,
        capture: true
      });
    }
    function v() {
      return i.value;
    }
    function u(I) {
      if (s.value) {
        const z = I.target, x = i.value;
        if (z === x || x != null && x.contains(z) || z.classList.contains("is-disabled")) return;
        f(false);
      }
    }
    function r() {
      (e.trigger === "hover" || !e.trigger) && f(true);
    }
    function c() {
      (e.trigger === "hover" || !e.trigger) && f(false);
    }
    const f = we((I) => {
      I ? V() : A();
    }, Ht);
    function g() {
      !s.value && f(true);
    }
    function V() {
      s.value = true, t("update:modelValue", s.value), t("change", s.value);
    }
    function A() {
      s.value = false, t("update:modelValue", s.value), t("change", s.value);
    }
    return (I, z) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(n).b()]),
      ref_key: "dropdownRef",
      ref: i,
      onMouseenter: r,
      onMouseleave: c,
      onClick: g
    }, [
      renderSlot(I.$slots, "default", {}, void 0, true),
      createVNode(Ce, {
        visible: s.value,
        customClass: unref(n).e("content"),
        placement: e.placement,
        offset: e.offset,
        "z-index": e.zIndex,
        getTriggerContainer: v,
        arrow: e.arrow,
        scrollClose: e.scrollClose,
        onClose: A,
        onMouseenter: r,
        onMouseleave: c
      }, {
        default: withCtx(() => [
          renderSlot(I.$slots, "content", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["visible", "customClass", "placement", "offset", "z-index", "arrow", "scrollClose"])
    ], 34));
  }
});
var Wt = L(Ft, [["__scopeId", "data-v-64b1a7dc"]]);
var qt = O("ImDropdown", Wt);
var Xt = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: a }) {
    const t = o, n = useSlots(), e = B("list"), i = (r) => typeof r.type == "object" && r.type !== null, s = (r, c) => {
      const f = [];
      return r.forEach((g) => {
        if (i(g) && g.type && g.type.name == c) {
          const V = g.props || {};
          f.push({ vnode: g, props: V });
        } else g && (g != null && g.children) && Array.isArray(g.children) && f.push(...s(g.children, c));
      }), f;
    }, d = computed(() => {
      var f;
      const r = ((f = n.default) == null ? void 0 : f.call(n)) || [];
      return s(r, "ImListItem").map((g) => g.vnode);
    }), v = a, u = (r) => {
      var f;
      const c = ((f = r.props) == null ? void 0 : f.value) || "";
      console.log(c, "value"), !(c !== 0 && !c) && (v("update:modelValue", c), v("change", c));
    };
    return (r, c) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (f) => (openBlock(), createBlock(resolveDynamicComponent(f), {
        active: t.modelValue,
        onClick: () => u(f)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var Ut = L(Xt, [["__scopeId", "data-v-541c876e"]]);
var jt = defineComponent({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: false },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: true }
  },
  emits: ["click"],
  setup(o, { emit: a }) {
    const t = B("list__item"), n = a, e = o;
    function i(s) {
      if (e.disabled) {
        s.stopPropagation();
        return;
      }
      n("click", e.value);
    }
    return (s, d) => {
      const v = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(t).b(), unref(t).is("active", !!(e.active && e.active === e.value)), unref(t).is("disabled", e.disabled)]),
        onClick: i
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2)), [
        [v, e.ripple && !e.disabled]
      ]);
    };
  }
});
var Gt = L(jt, [["__scopeId", "data-v-6df1dd93"]]);
var Jt = O("ImList", Ut);
var Kt = O("ImListItem", Gt);
var Qt = ["src", "srcset", "alt", "loading"];
var Zt = defineComponent({
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
  setup(o, { emit: a }) {
    const t = a, n = B("avatar"), e = o, i = (s) => {
      console.log(s.target), t("error", s);
    };
    return (s, d) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(n).b(), e.shape ? unref(n).m(e.shape) : ""]),
      style: normalizeStyle({
        "--im-avatar-size": (Number(e.size) || 36) + "px",
        "--im-avatar-color": e.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": e.fit
      })
    }, [
      !e.src && !e.srcset ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(n).e("icon")])
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2)) : (openBlock(), createElementBlock("img", {
        key: 1,
        onError: i,
        src: e.src,
        srcset: e.srcset,
        alt: e.alt,
        loading: e.loading,
        class: normalizeClass([unref(n).e("img")])
      }, null, 42, Qt))
    ], 6));
  }
});
var eo = L(Zt, [["__scopeId", "data-v-c4c32038"]]);
var to = O("ImAvatar", eo);
var oo = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(o, { emit: a }) {
    const t = B("mask"), { zIndexToken: n } = oe(), e = o, i = a, s = () => {
      e.closeOnClickMask && i("close", false);
    };
    return (d, v) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(t).b()]),
          style: normalizeStyle({
            zIndex: e.zIndex || unref(n)
          }),
          onClick: s
        }, [
          renderSlot(d.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, e.visible]
        ])
      ]),
      _: 3
    }));
  }
});
var ao = L(oo, [["__scopeId", "data-v-d5aadf77"]]);
var Me = O("ImMask", ao);
var le = {
  duration: 200,
  delay: 0,
  easing: "ease-out"
};
function xe(o, a = "right") {
  const t = (o == null ? void 0 : o.getBoundingClientRect()) || {}, n = (t == null ? void 0 : t.width) || 0, e = (t == null ? void 0 : t.height) || 0;
  switch (a) {
    case "left":
      return n ? `translateX(-${n}px)` : "translateX(-100%)";
    case "right":
      return n ? `translateX(${n}px)` : "translateX(100%)";
    case "top":
      return e ? `translateY(-${e}px)` : "translateY(-100%)";
    case "bottom":
      return e ? `translateY(${e}px)` : "translateY(100%)";
    default:
      return n ? `translateX(${n}px)` : "translateX(100%)";
  }
}
var ge = async (o, a = true) => {
  let t = xe(o, "right"), n = [];
  a ? n = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : n = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], o == null || o.animate(n, le);
};
var De = async (o, a = true) => {
  let t = xe(o, "left"), n = [];
  a ? n = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : n = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], o == null || o.animate(n, le);
};
var Re = async (o, a = true) => {
  let t = xe(o, "top"), n = [];
  a ? n = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : n = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], o == null || o.animate(n, le);
};
var Oe = async (o, a = true) => {
  let t = xe(o, "bottom"), n = [];
  a ? n = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : n = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], o == null || o.animate(n, le);
};
var no = async (o, a) => {
  let t = [], n = "center";
  const e = (a == null ? void 0 : a.getBoundingClientRect()) || null, { width: i, height: s } = ke(), d = o.getBoundingClientRect();
  if (e) {
    const v = (e.left - d.left) / d.width * 100, u = (e.top - d.top) / d.height * 100;
    n = `${v}% ${u}%`;
  } else {
    const v = (i * 0.5 - d.left) / d.width * 100, u = (s - d.top) / d.height * 100;
    n = `${v}% ${u}%`;
  }
  t = [
    {
      opacity: 0,
      transformOrigin: n,
      transform: "scale(0) "
    },
    {
      opacity: 1,
      transformOrigin: n,
      transform: "scale(1)"
    }
  ], o == null || o.animate(t, le);
};
var so = async (o, a) => {
  let t = [], n = "center";
  const e = (a == null ? void 0 : a.getBoundingClientRect()) || null, { width: i, height: s } = ke(), d = o.getBoundingClientRect();
  let v = "50%", u = "50%";
  e ? (v = (e.left + e.width * 0.5 - d.left) / d.width * 100, u = (e.top + e.height * 0.5 - d.top) / d.height * 100, n = `${v}% ${u}%`) : (v = (i * 0.5 - d.left) / d.width * 100, u = (s - d.top) / d.height * 100, n = `${v}% ${u}%`), t = [
    {
      opacity: 1,
      transformOrigin: n,
      transform: "scale(1)",
      offset: 0
    },
    {
      opacity: 0,
      transformOrigin: n,
      transform: "scale(0.33)",
      offset: 1
    }
  ], o == null || o.animate(t, le);
};
var Ye = (o, a = true) => {
  if (!o || !o.animate)
    return console.log("elFullscreenBottomIn");
  const { height: t } = ke();
  a ? o.animate(
    [
      { transform: `translateY(${t}px)`, opacity: 0 },
      { transform: "translateY(0)", opacity: 1 }
    ],
    le
  ) : o.animate(
    [
      { transform: "translateY(0)", opacity: 1 },
      { transform: `translateY(${t}px)`, opacity: 0 }
    ],
    le
  );
};
var lo = ["aria-modal"];
var io = defineComponent({
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
  setup(o, { emit: a }) {
    const t = B("drawer"), n = a, e = o, i = ref(null), { zIndexToken: s } = oe(), d = computed(() => se(e.size || s.value || "280px"));
    watch(() => e.modelValue, (c) => {
      Ue();
    }, { immediate: true });
    const v = () => {
      n("update:modelValue", false);
    };
    function u(c, f) {
      switch (_e(c), e.placement) {
        case "right":
          ge(c);
          break;
        case "left":
          De(c);
          break;
        case "top":
          Re(c);
          break;
        case "bottom":
          Oe(c);
          break;
        default:
          ge(c);
          break;
      }
      f();
    }
    function r(c, f) {
      switch (_e(c), e.placement) {
        case "right":
          ge(c, false);
          break;
        case "left":
          De(c, false);
          break;
        case "top":
          Re(c, false);
          break;
        case "bottom":
          Oe(c, false);
          break;
        default:
          ge(c, false);
          break;
      }
      Xe(c).finally(f);
    }
    return (c, f) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: i,
        class: normalizeClass([unref(t).b(), unref(t).is("im-lock-scroll", e.modelValue), e.placement ? unref(t).m(e.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": d.value, zIndex: e.zIndex || unref(s) }),
        "aria-modal": e.modelValue
      }, [
        e.mask ? (openBlock(), createBlock(unref(Me), {
          key: 0,
          visible: e.modelValue,
          closeOnClickMask: e.closeOnClickMask,
          onClose: v,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: u,
          onLeave: r
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
      ], 14, lo)
    ]));
  }
});
var ro = L(io, [["__scopeId", "data-v-230f0857"]]);
var co = O("ImDrawer", ro);
var uo = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(o) {
    const a = B("card"), t = o;
    return (n, e) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b(), unref(a).is("borderless", t.borderless), t.shadow ? unref(a).m(t.shadow) : ""])
    }, [
      renderSlot(n.$slots, "header", {}, () => [
        t.title || n.$slots["header-action"] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(a).e("header")])
        }, [
          createBaseVNode("span", {
            class: normalizeClass([unref(a).e("title")])
          }, toDisplayString(t.title), 3),
          renderSlot(n.$slots, "header-action", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ], true),
      createBaseVNode("div", {
        class: normalizeClass([unref(a).e("body")])
      }, [
        renderSlot(n.$slots, "default", {}, void 0, true)
      ], 2)
    ], 2));
  }
});
var mo = L(uo, [["__scopeId", "data-v-4ccad88b"]]);
var po = O("ImCard", mo);
var fo = ["data-esc"];
var vo = defineComponent({
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
  setup(o, { emit: a }) {
    const t = B("dialog"), n = a, e = o, i = ref(null), { zIndexToken: s } = oe();
    watch(
      () => e.modelValue,
      (r) => {
        window.removeEventListener("keydown", d), r && e.closeOnEscape && window.addEventListener("keydown", d, { passive: true }), Ue();
      },
      {
        immediate: true
      }
    );
    function d(r) {
      if (r.key === "Escape" || r.code === "Escape") {
        const c = document.querySelectorAll(
          '.im-dialog.is-show[data-esc="true"]'
        );
        c.length && i.value && Array.from(c).pop() === i.value && n("update:modelValue", false);
      }
    }
    const v = async (r, c) => {
      _e(r, { subtree: true }), e.fullscreen ? Ye(r) : no(r, e == null ? void 0 : e.getTarget()), c();
    }, u = async (r, c) => {
      _e(r, { subtree: true }), e.fullscreen ? Ye(r, false) : so(r, e == null ? void 0 : e.getTarget()), await Xe(r, { subtree: true }), c();
    };
    return (r, c) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        "aria-modal": "true",
        tabindex: -1,
        class: normalizeClass([
          unref(t).b(),
          unref(t).is("im-lock-scroll", e.modelValue),
          unref(t).is("show", e.modelValue)
        ]),
        "data-esc": e.closeOnEscape,
        ref_key: "dialogRef",
        ref: i,
        style: normalizeStyle({
          zIndex: e.zIndex || unref(s)
        })
      }, [
        e.mask && !e.fullscreen ? (openBlock(), createBlock(unref(Me), {
          key: 0,
          closeOnClickMask: e.closeOnClickMask,
          visible: e.modelValue,
          onClose: c[0] || (c[0] = () => n("update:modelValue", false))
        }, null, 8, ["closeOnClickMask", "visible"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: v,
          duration: { enter: 200, leave: 200 },
          onLeave: u
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
              renderSlot(r.$slots, "default", {}, void 0, true)
            ], 6), [
              [vShow, e.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, fo)
    ]));
  }
});
var go = L(vo, [["__scopeId", "data-v-8904b1d9"]]);
var ho = O("ImDialog", go);
var yo = defineComponent({
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
  setup(o, { emit: a }) {
    const t = B("option"), n = a, e = o;
    function i(s) {
      if (s.preventDefault(), s.stopPropagation(), e.disabled) return;
      const d = e.value || e.label;
      d && n("change", d);
    }
    return (s, d) => {
      var u, r;
      const v = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        onClick: i,
        class: normalizeClass([unref(t).b(), unref(t).is("disabled", !!e.disabled), unref(t).is("active", (u = e.selectList) == null ? void 0 : u.includes(e.value || e.label || ""))])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([unref(t).e("text")])
        }, [
          renderSlot(s.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(e.label || e.value), 1)
          ], true)
        ], 2),
        e.multiple && ((r = e.selectList) != null && r.includes(e.value || e.label || "")) ? (openBlock(), createBlock(unref(Y), {
          key: 0,
          name: "check",
          size: "12",
          class: normalizeClass([unref(t).e("check")])
        }, {
          default: withCtx(() => d[0] || (d[0] = [
            createTextVNode("✓")
          ])),
          _: 1,
          __: [0]
        }, 8, ["class"])) : createCommentVNode("", true)
      ], 2)), [
        [v, !e.disabled]
      ]);
    };
  }
});
var bo = L(yo, [["__scopeId", "data-v-baa1be82"]]);
var _o = defineComponent({
  name: "ImTag",
  __name: "ImTag",
  props: {
    color: { default: "" },
    border: { type: Boolean },
    closeable: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: true }
  },
  emits: ["close", "update:modelValue"],
  setup(o, { emit: a }) {
    const t = B("tag"), n = a, e = o;
    function i(s) {
      n("update:modelValue", false), n("close", s);
    }
    return (s, d) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        e.modelValue ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(t).b(), e.color ? unref(t).m(e.color) : "", unref(t).is("border", e.border)])
        }, [
          createBaseVNode("div", {
            class: normalizeClass([unref(t).e("content")])
          }, [
            renderSlot(s.$slots, "default", {}, void 0, true),
            e.closeable ? (openBlock(), createBlock(unref(Y), {
              key: 0,
              name: "close",
              size: "1em",
              onClick: i,
              class: normalizeClass([unref(t).e("close")])
            }, null, 8, ["class"])) : createCommentVNode("", true)
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var Io = L(_o, [["__scopeId", "data-v-16275f2c"]]);
var je = O("ImTag", Io);
var wo = defineComponent({
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
    offset: { default: 8 },
    scrollClose: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: a }) {
    const t = B("select"), n = a, e = o, { sizeToken: i } = oe(), s = ref(false), d = ref([]), v = ref(null), u = ref(null), r = computed(() => se(e.width)), c = computed(() => se(e.size || i.value || "36px")), f = computed(() => {
      var _;
      return e.multiple ? e.options.filter((N) => d.value.includes(String(N.value))).map((N) => N.label) : ((_ = e.options.find((N) => N.value === e.modelValue)) == null ? void 0 : _.label) || "";
    }), g = computed(() => e.options.filter(
      (_) => d.value.includes(String(_.value))
    )), V = computed(() => {
      const _ = g.value.length - e.maxTag;
      return g.value.length && e.maxTag && g.value.length - e.maxTag && _ > 0 ? _ : "";
    }), A = computed(() => e.clearable && e.modelValue && f.value && !e.disabled), I = computed(() => {
      var _;
      return e.placeholder ? e.multiple ? !((_ = g.value) != null && _.length) : !f.value : false;
    });
    watch(
      () => e.modelValue,
      () => {
        w();
      },
      { immediate: true }
    ), watch(
      () => s.value,
      (_) => {
        document.removeEventListener("click", Q, { capture: true }), _ && document.addEventListener("click", Q, { capture: true });
      }
    );
    function z(_, N) {
      N.preventDefault();
      const y = d.value.filter((b) => b !== _.value);
      n("update:modelValue", y.join(","));
    }
    function x() {
      s.value = false;
    }
    function w() {
      var _;
      e.multiple ? d.value = ((_ = String(e.modelValue)) == null ? void 0 : _.split(",")) || [] : d.value = [e.modelValue];
    }
    function Q(_) {
      var N, y;
      (N = v.value) != null && N.contains(_.target) || v.value === _.target || _.target === u.value || e.multiple && ((y = u.value) != null && y.contains(_.target)) || u.value === _.target || x();
    }
    async function X() {
      var N;
      if (s.value) return;
      s.value = true, await new Promise((y) => requestAnimationFrame(y));
      const _ = (N = u.value) == null ? void 0 : N.querySelector(
        `.${t.is("active", true)}`
      );
      _ && _.scrollIntoView({ behavior: "instant", block: "nearest" }), await new Promise((y) => requestAnimationFrame(y));
    }
    function F(_) {
      if (e.multiple) {
        const N = d.value;
        N.includes(_) ? N.splice(N.indexOf(_), 1) : N.push(_), n("update:modelValue", N.filter((y) => y).join(","));
        return;
      } else
        n("update:modelValue", _);
    }
    function ie(_) {
      _.preventDefault(), _.stopPropagation(), n("update:modelValue", "");
    }
    return (_, N) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(t).b(),
        unref(t).is("open", s.value),
        unref(t).is("disabled", e.disabled),
        unref(t).is("multiple", e.multiple)
      ]),
      style: normalizeStyle({
        "--im-select-width": r.value,
        "--im-select-height": c.value
      })
    }, [
      createBaseVNode("div", {
        onClick: X,
        class: normalizeClass([unref(t).e("trigger")]),
        ref_key: "triggerRef",
        ref: v,
        tabindex: "-1"
      }, [
        I.value ? (openBlock(), createElementBlock("span", {
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (y, b) => (openBlock(), createElementBlock(Fragment, null, [
              b < e.maxTag ? (openBlock(), createBlock(unref(je), {
                key: b,
                onClose: withModifiers((k) => z(y, k), ["stop"]),
                closeable: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(y.label), 1)
                ]),
                _: 2
              }, 1032, ["onClose"])) : createCommentVNode("", true)
            ], 64))), 256))
          ], 2)) : createCommentVNode("", true),
          e.multiple && g.value.length && V.value ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(t).e("more")])
          }, [
            createVNode(unref(Y), {
              name: "plus",
              size: "12px"
            }),
            createTextVNode(" " + toDisplayString(V.value), 1)
          ], 2)) : createCommentVNode("", true),
          e.multiple ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass([unref(t).e("default")])
          }, toDisplayString(f.value), 3))
        ], 2)),
        createBaseVNode("span", {
          class: normalizeClass([unref(t).e("icon-down"), unref(t).is("rotate", s.value)])
        }, [
          renderSlot(_.$slots, "downIcon", {}, () => [
            createVNode(unref(Y), {
              name: "down",
              size: "12"
            })
          ], true)
        ], 2),
        A.value ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass([unref(t).e("clear-icon")]),
          onClick: ie
        }, [
          renderSlot(_.$slots, "clearIcon", {}, () => [
            createVNode(unref(Y), {
              name: "close-circle-fill",
              size: "18"
            })
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 2),
      createVNode(Ce, {
        visible: s.value,
        getTriggerContainer: () => v.value,
        "z-index": e.zIndex,
        onClose: x,
        arrow: e.arrow,
        offset: e.offset,
        scrollClose: e.scrollClose
      }, {
        default: withCtx(() => [
          createBaseVNode("ul", {
            class: normalizeClass([unref(t).e("list")]),
            ref_key: "listRef",
            ref: u
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.options, (y, b) => (openBlock(), createBlock(bo, {
              multiple: e.multiple,
              key: y.value || y.label || b,
              disabled: y.disabled,
              "select-list": d.value,
              value: y.value,
              label: y.label,
              onChange: F
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(y.label || y.value), 1)
              ]),
              _: 2
            }, 1032, ["multiple", "disabled", "select-list", "value", "label"]))), 128))
          ], 2)
        ]),
        _: 1
      }, 8, ["visible", "getTriggerContainer", "z-index", "arrow", "offset", "scrollClose"])
    ], 6));
  }
});
var ko = L(wo, [["__scopeId", "data-v-51b7f08b"]]);
var Ge = O("ImSelect", ko);
var Co = ["aria-disabled"];
var xo = ["onClick", "title"];
var zo = ["aria-disabled"];
var $o = defineComponent({
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
  setup(o, { emit: a }) {
    const t = B("pagination"), n = a, e = o, i = ref(e.pageSize), s = ref([1]), { sizeToken: d } = oe(), v = computed(() => parseInt(String(e.size || d.value || 36)) + "px"), u = computed(
      () => Math.ceil(e.total / (i.value || 10))
    ), r = computed(() => e.pageNumber === 1), c = computed(() => e.pageNumber >= u.value), f = computed(
      () => e.pageSizeItems.map((w) => ({ label: `${w} 条/页`, value: w }))
    );
    watch(
      () => i.value,
      (w) => {
        u.value < e.pageNumber ? n("change", { pageSize: w, pageNumber: u.value }) : n("change", { pageSize: w, pageNumber: e.pageNumber });
      }
    ), watch(
      () => [e.pageNumber, e.pageSize],
      () => {
        i.value = e.pageSize, V(
          u.value < e.pageNumber ? u.value : e.pageNumber
        );
      },
      { immediate: true }
    );
    function g(w) {
      e.pageNumber !== w && n("change", { pageNumber: w, pageSize: e.pageSize });
    }
    function V(w) {
      if (u.value <= 1)
        s.value = [1];
      else {
        const Q = Math.ceil(w / 5), X = [];
        let F = Q * 5 - 4;
        for (let ie = 0; ie < 5; ie++) {
          let _ = F + ie;
          if (_ > u.value)
            break;
          X.push(_);
        }
        w - 5 >= 1 && (X.unshift("left"), X.unshift(1)), w + 5 <= u.value && (X.push("right"), X.push(u.value)), s.value = X, g(w);
      }
    }
    function A() {
      const w = e.pageNumber + 1;
      if (w > u.value) return g(e.pageNumber);
      if (s.value.includes(w))
        return g(w);
      V(w);
    }
    function I() {
      const w = e.pageNumber - 1;
      if (w < 1) return g(e.pageNumber);
      if (s.value.includes(w))
        return g(w);
      V(w);
    }
    function z() {
      const w = e.pageNumber + 5;
      if (w > u.value) return g(u.value);
      V(w);
    }
    function x() {
      const w = e.pageNumber - 5;
      if (w < 1) return g(1);
      V(w);
    }
    return (w, Q) => {
      const X = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(t).b()]),
        style: normalizeStyle({
          "--im-pagination-size": v.value
        })
      }, [
        w.layout.includes("total") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(t).e("total")])
        }, " 共 " + toDisplayString(w.total) + " 条数据 ", 3)) : createCommentVNode("", true),
        w.layout.includes("prev") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(t).e("prev"), unref(t).is("disabled", r.value)]),
          "aria-disabled": r.value,
          onClick: I
        }, [
          createVNode(unref(Y), {
            name: "left",
            size: "14px"
          })
        ], 10, Co)), [
          [X, !r.value]
        ]) : createCommentVNode("", true),
        w.layout.includes("pager") ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(t).e("pager")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (F) => (openBlock(), createElementBlock(Fragment, null, [
            F === "left" ? (openBlock(), createElementBlock("div", {
              key: 0,
              title: "向前5页",
              class: normalizeClass([unref(t).e("page-item"), unref(t).e("left")]),
              onClick: x
            }, [
              createVNode(unref(Y), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(Y), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : F !== "right" ? withDirectives((openBlock(), createElementBlock("div", {
              key: 1,
              onClick: () => g(F),
              class: normalizeClass([
                unref(t).e("page-item"),
                unref(t).is("active", F === e.pageNumber)
              ]),
              title: String(F)
            }, [
              createTextVNode(toDisplayString(F), 1)
            ], 10, xo)), [
              [X, true]
            ]) : F === "right" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass([unref(t).e("page-item"), unref(t).e("right")]),
              title: "向后5页",
              onClick: z
            }, [
              createVNode(unref(Y), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(Y), {
                name: "arrowright",
                class: "im-icon--arrowright"
              })
            ], 2)) : createCommentVNode("", true)
          ], 64))), 256))
        ], 2)) : createCommentVNode("", true),
        w.layout.includes("next") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(t).e("next"), unref(t).is("disabled", c.value)]),
          "aria-disabled": c.value,
          onClick: A
        }, [
          createVNode(unref(Y), {
            name: "right",
            size: "14px"
          })
        ], 10, zo)), [
          [X, !c.value]
        ]) : createCommentVNode("", true),
        w.layout.includes("sizes") ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass([unref(t).e("size")])
        }, [
          createVNode(unref(Ge), {
            options: f.value,
            modelValue: i.value,
            "onUpdate:modelValue": Q[0] || (Q[0] = (F) => i.value = F),
            size: e.size
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var To = L($o, [["__scopeId", "data-v-5bb564e5"]]);
var Bo = O("ImPagination", To);
var Lo = defineComponent({
  name: "ImTooltip",
  __name: "ImTooltip",
  props: {
    placement: { default: "top" },
    offset: { default: 8 },
    zIndex: {},
    arrow: { type: Boolean, default: true },
    scrollClose: { type: Boolean, default: false },
    modelValue: { type: Boolean },
    trigger: { default: "hover" },
    content: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: a }) {
    const t = B("tooltip"), n = ref(null), e = ref(false), i = a, s = o;
    onMounted(() => {
      d();
    }), watch(
      () => s.modelValue,
      (I) => {
        e.value = I;
      }
    ), watch(
      () => e.value,
      () => {
        d();
      }
    );
    function d() {
      document.removeEventListener("click", v, { capture: true }), e.value && document.addEventListener("click", v, {
        passive: true,
        capture: true
      });
    }
    function v(I) {
      if (e.value) {
        const z = I.target, x = n.value;
        if (z === x || x != null && x.contains(z) || z.classList.contains("is-disabled")) return;
        u(false);
      }
    }
    const u = we((I) => {
      I ? V() : A();
    }, 100);
    function r() {
      (!s.trigger || s.trigger === "hover") && u(true);
    }
    function c() {
      (!s.trigger || s.trigger === "hover") && u(false);
    }
    function f() {
      e.value || u(true);
    }
    function g() {
      return n.value;
    }
    function V() {
      e.value = true, i("update:modelValue", e.value), i("change", e.value);
    }
    function A() {
      e.value = false, i("update:modelValue", e.value), i("change", e.value);
    }
    return (I, z) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(t).b()]),
      ref_key: "triggerRef",
      ref: n,
      onMouseenter: r,
      onMouseleave: c,
      onClick: f
    }, [
      renderSlot(I.$slots, "default", {}, void 0, true),
      createVNode(Ce, {
        visible: e.value,
        customClass: unref(t).e("wrapper"),
        placement: s.placement,
        offset: s.offset,
        "z-index": s.zIndex,
        getTriggerContainer: g,
        arrow: s.arrow,
        scrollClose: s.scrollClose,
        onClose: A,
        onMouseenter: r,
        onMouseleave: c,
        role: "tooltip"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([unref(t).e("content")])
          }, [
            renderSlot(I.$slots, "content", {}, () => [
              createTextVNode(toDisplayString(s.content), 1)
            ], true)
          ], 2)
        ]),
        _: 3
      }, 8, ["visible", "customClass", "placement", "offset", "z-index", "arrow", "scrollClose"])
    ], 34));
  }
});
var Vo = L(Lo, [["__scopeId", "data-v-f51e979f"]]);
var Eo = O("ImTooltip", Vo);
var So = defineComponent({
  name: "ImPopover",
  __name: "ImPopover",
  props: {
    placement: { default: "top" },
    offset: { default: 8 },
    zIndex: {},
    arrow: { type: Boolean, default: true },
    scrollClose: { type: Boolean, default: false },
    modelValue: { type: Boolean },
    trigger: { default: "hover" },
    content: { default: "" },
    title: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: a }) {
    const t = B("popover"), n = ref(null), e = ref(false), i = a, s = o;
    onMounted(() => {
      d();
    }), watch(
      () => s.modelValue,
      (I) => {
        e.value = I;
      }
    ), watch(
      () => e.value,
      () => {
        d();
      }
    );
    function d() {
      document.removeEventListener("click", v, { capture: true }), e.value && document.addEventListener("click", v, {
        passive: true,
        capture: true
      });
    }
    function v(I) {
      if (e.value) {
        const z = I.target, x = n.value;
        if (z === x || x != null && x.contains(z) || z.classList.contains("is-disabled")) return;
        u(false);
      }
    }
    const u = we((I) => {
      I ? V() : A();
    }, 100);
    function r() {
      (!s.trigger || s.trigger === "hover") && u(true);
    }
    function c() {
      (!s.trigger || s.trigger === "hover") && u(false);
    }
    function f() {
      e.value || u(true);
    }
    function g() {
      return n.value;
    }
    function V() {
      e.value = true, i("update:modelValue", e.value), i("change", e.value);
    }
    function A() {
      e.value = false, i("update:modelValue", e.value), i("change", e.value);
    }
    return (I, z) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(t).b()]),
      ref_key: "triggerRef",
      ref: n,
      onMouseenter: r,
      onMouseleave: c,
      onClick: f
    }, [
      renderSlot(I.$slots, "default", {}, void 0, true),
      createVNode(Ce, {
        visible: e.value,
        customClass: unref(t).e("wrapper"),
        placement: s.placement,
        offset: s.offset,
        "z-index": s.zIndex,
        getTriggerContainer: g,
        arrow: s.arrow,
        scrollClose: s.scrollClose,
        onClose: A,
        onMouseenter: r,
        onMouseleave: c,
        role: "tooltip"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([unref(t).e("content")])
          }, [
            s.title || I.$slots.title ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(t).e("title")])
            }, [
              renderSlot(I.$slots, "title", {}, () => [
                createTextVNode(toDisplayString(s.title), 1)
              ], true)
            ], 2)) : createCommentVNode("", true),
            s.content || I.$slots.content ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass([unref(t).e("body")])
            }, [
              renderSlot(I.$slots, "content", {}, () => [
                createTextVNode(toDisplayString(s.content), 1)
              ], true)
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ]),
        _: 3
      }, 8, ["visible", "customClass", "placement", "offset", "z-index", "arrow", "scrollClose"])
    ], 34));
  }
});
var Mo = L(So, [["__scopeId", "data-v-807c7fd8"]]);
var Ao = O("ImPopover", Mo);
var No = defineComponent({
  name: "ImBadge",
  __name: "ImBadge",
  props: {
    value: { default: void 0 },
    size: { default: "16px" },
    color: { default: "" },
    dot: { type: Boolean, default: false }
  },
  setup(o) {
    const a = B("badge"), t = o, n = computed(() => se(t.size));
    return (e, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(a).b(),
        t.color && unref(a).m(t.color),
        unref(a).is("dot", t.dot)
      ]),
      style: normalizeStyle({
        "--im-badge-size": n.value
      })
    }, [
      renderSlot(e.$slots, "default", {}, void 0, true),
      createBaseVNode("sub", {
        class: normalizeClass([unref(a).e("content")])
      }, [
        t.dot ? createCommentVNode("", true) : renderSlot(e.$slots, "content", { key: 0 }, () => [
          createTextVNode(toDisplayString(t.value), 1)
        ], true)
      ], 2)
    ], 6));
  }
});
var Po = L(No, [["__scopeId", "data-v-5cfbc3c5"]]);
var Do = O("ImBadge", Po);
var Ro = defineComponent({
  name: "ImBackTop",
  __name: "ImBackTop",
  props: {
    getTarget: { type: Function, default: () => null },
    visibleHeight: { default: 200 },
    zIndex: { default: void 0 },
    right: { default: "20px" },
    bottom: { default: "20px" }
  },
  setup(o) {
    const a = B("back-top"), t = ref(false);
    let n = null;
    const { zIndexToken: e } = oe(), i = o, s = computed(() => ({
      zIndex: i.zIndex || e.value || 1e3,
      right: se(i.right),
      bottom: se(i.bottom)
    }));
    onMounted(() => {
      var f;
      n = ((f = i.getTarget) == null ? void 0 : f.call(i)) || window, r(), u();
    }), onUnmounted(() => {
      c();
    });
    function d() {
      n && n.scrollTo({ top: 0, behavior: "smooth", left: 0 });
    }
    function v() {
      if (!n) return;
      const f = n.scrollTop || n.pageYOffset || 0;
      t.value = f > i.visibleHeight;
    }
    const u = ye(v, 100);
    function r() {
      n && (c(), n.addEventListener("scroll", u, {
        passive: true
      }));
    }
    function c() {
      n && n.removeEventListener("scroll", u);
    }
    return (f, g) => (openBlock(), createBlock(Transition, {
      name: "fade",
      mode: "out-in"
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(a).b()]),
          onClick: d,
          style: normalizeStyle(s.value)
        }, [
          renderSlot(f.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, t.value]
        ])
      ]),
      _: 3
    }));
  }
});
var Oo = L(Ro, [["__scopeId", "data-v-f8ee14ab"]]);
var Yo = O("ImBackTop", Oo);
var Ho = defineComponent({
  name: "ImCollapse",
  __name: "ImCollapse",
  props: {
    title: { default: "" },
    desc: { default: "" },
    modelValue: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: a }) {
    const t = B("collapse");
    return ref(o.modelValue || false), (e, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var Fo = L(Ho, [["__scopeId", "data-v-aa065b44"]]);
var Wo = defineComponent({
  name: "ImCollapseItem",
  __name: "ImCollapseItem",
  props: {
    title: { default: "" },
    desc: { default: "" },
    modelValue: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: a }) {
    const t = B("collapse-item"), n = a, e = o, i = ref(e.modelValue || false);
    function s() {
      i.value = !i.value, n("update:modelValue", i.value), n("change", i.value);
    }
    async function d(r, c) {
      const f = r.getBoundingClientRect();
      r.style.height = "0px", r.style.transition = "all 0.3s ease", await new Promise((g) => requestAnimationFrame(g)), r.style.height = `${f.height}px`, c();
    }
    function v(r) {
    }
    async function u(r, c) {
      r.style.transition = "all 0.3s ease", r.style.height = "0px", c(), await new Promise((f) => requestAnimationFrame(f)), r.style.height = "auto";
    }
    return (r, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      createBaseVNode("div", {
        class: normalizeClass([unref(t).e("title")]),
        onClick: s
      }, [
        renderSlot(r.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(e.title), 1)
        ], true)
      ], 2),
      createVNode(Transition, {
        css: false,
        mode: "out-in",
        duration: { enter: 300, leave: 300 },
        onEnter: d,
        onAfterEnter: v,
        onLeave: u
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass([unref(t).e("content")])
          }, [
            createBaseVNode("div", {
              class: normalizeClass([unref(t).e("desc")])
            }, [
              renderSlot(r.$slots, "default", {}, () => [
                createTextVNode(toDisplayString(e.desc), 1)
              ], true)
            ], 2)
          ], 2), [
            [vShow, i.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
});
var qo = L(Wo, [["__scopeId", "data-v-44faecf8"]]);
var Xo = O("ImCollapseItem", qo);
var Uo = O("ImCollapse", Fo);
var jo = [
  $e,
  Be,
  Te,
  Le,
  Y,
  be,
  Lt,
  St,
  Dt,
  Rt,
  qt,
  Jt,
  Kt,
  to,
  Me,
  co,
  po,
  ho,
  Bo,
  Ge,
  je,
  Eo,
  Ao,
  Do,
  Yo,
  Uo,
  Xo
];
var Go = (o, a) => {
  o.provide(We, {
    size: (a == null ? void 0 : a.size) || 36,
    zIndex: (a == null ? void 0 : a.zIndex) || 1e3
  }), o.directive("ripple", it), o.directive("loading", ut), jo.forEach((t) => {
    t.name ? o.component(t.name, t) : console.warn(`组件${t}缺少name属性`);
  });
};
var ea = {
  install: Go
};
export {
  St as ImAlert,
  Lt as ImAnchor,
  to as ImAvatar,
  Yo as ImBackTop,
  Do as ImBadge,
  Dt as ImBreadcrumb,
  Rt as ImBreadcrumbItem,
  $e as ImButton,
  po as ImCard,
  Be as ImCol,
  Uo as ImCollapse,
  Xo as ImCollapseItem,
  ho as ImDialog,
  be as ImDivider,
  co as ImDrawer,
  qt as ImDropdown,
  Y as ImIcon,
  Le as ImInput,
  Jt as ImList,
  Kt as ImListItem,
  Me as ImMask,
  Bo as ImPagination,
  Ao as ImPopover,
  Te as ImRow,
  Ge as ImSelect,
  je as ImTag,
  Eo as ImTooltip,
  ea as default,
  Zo as useImLoading,
  Qo as useImMessage
};
//# sourceMappingURL=im-design.js.map
