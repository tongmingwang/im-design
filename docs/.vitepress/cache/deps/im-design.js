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
  createSlots,
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
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.48/node_modules/im-design/dist/im-design.js
var et = Object.defineProperty;
var De = (a) => {
  throw TypeError(a);
};
var tt = (a, n, t) => n in a ? et(a, n, { enumerable: true, configurable: true, writable: true, value: t }) : a[n] = t;
var ve = (a, n, t) => tt(a, typeof n != "symbol" ? n + "" : n, t);
var Oe = (a, n, t) => n.has(a) || De("Cannot " + t);
var oe = (a, n, t) => (Oe(a, n, "read from private field"), t ? t.call(a) : n.get(a));
var Ve = (a, n, t) => n.has(a) ? De("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(a) : n.set(a, t);
var ge = (a, n, t, o) => (Oe(a, n, "write to private field"), o ? o.call(a, t) : n.set(a, t), t);
var Ue = Symbol("im-design-token");
var re;
var ct = class {
  constructor() {
    Ve(this, re);
    ge(this, re, []);
  }
  async add(n) {
    oe(this, re).push(n);
  }
  remove() {
    try {
      const n = oe(this, re).shift();
      n && this.run(n);
    } catch (n) {
      console.error(n);
    }
  }
  async run(n) {
    try {
      const t = n.querySelector(".im-ripple__item");
      if (!t) return;
      let o = Date.now(), e = t.getAttribute("data-time");
      const i = o - Number(e) || 0;
      i && await new Promise((s) => {
        t.style.opacity = "0.1";
        const c = 200 - i;
        setTimeout(
          () => {
            s(null);
          },
          c > 0 ? c : 0
        );
      }), t.style.opacity = "0", t.style.transition = "all 50ms", setTimeout(() => {
        n && (n == null || n.remove()), oe(this, re).length && this.remove();
      }, 50);
    } catch (t) {
      console.log(t);
    }
  }
};
re = /* @__PURE__ */ new WeakMap();
var me = "data-ripple";
async function ut(a, n, t) {
  const o = window.getComputedStyle(t), e = t.getBoundingClientRect(), i = document.createElement("div");
  i.className = "im-ripple", n.add(i);
  const s = document.createElement("div");
  s.className = "im-ripple__item";
  const c = a.clientX || a.touches && a.touches[0].clientX, v = a.clientY || a.touches && a.touches[0].clientY, f = Math.max(e.width, e.height), u = c - e.left - f / 2, d = v - e.top - f / 2, r = e.width - e.height <= 5;
  Object.assign(s.style, {
    "background-color": o.color,
    width: `${f}px`,
    height: `${f}px`,
    left: `${u}px`,
    top: `${d}px`,
    opacity: "0.15",
    transform: r ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), s.setAttribute("data-time", Date.now() + ""), i.appendChild(s), t.appendChild(i);
  const g = o.position;
  g === "static" && (t.style.position = "relative", t.dataset.originalPosition = g), s.getBoundingClientRect(), s.style.transform = "scale(2.8)", s.style.opacity = "0.33";
}
function Fe(a, n) {
  n.value ? !a.hasAttribute(me) && a.setAttribute(me, "on") : a.hasAttribute(me) && a.setAttribute(me, "off");
}
function dt(a) {
  return a.getAttribute(me) === "on";
}
var mt = {
  mounted(a, n) {
    Fe(a, n);
    const t = new ct(), o = (c) => {
      dt(a) && ut(c, t, a);
    }, e = () => {
      t.remove();
    }, i = () => {
      a.addEventListener("mousedown", o, { passive: true }), window.addEventListener("mouseup", e, { passive: true });
    }, s = () => {
      a.removeEventListener("mousedown", o), window.removeEventListener("mouseup", e);
    };
    i(), a._rippleListeners = { remove: s };
  },
  beforeUnmount(a) {
    var n;
    (n = a._rippleListeners) == null || n.remove();
  },
  updated(a, n) {
    Fe(a, n);
  }
};
var N = (a) => {
  const n = "im-" + a;
  return {
    b: () => n,
    e: (t) => `${n}__${t}`,
    m: (t) => `${n}--${t}`,
    is: (t, o) => o ? `is-${t}` : ""
  };
};
var pt = Object.prototype.toString;
var ft = (a) => pt.call(a) === "[object Number]";
var we = (a, n) => {
  let t;
  return function(...o) {
    t || (t = setTimeout(() => {
      a.apply(this, o), t = null;
    }, n));
  };
};
var Ce = (a, n) => {
  let t;
  return function(...o) {
    t && clearTimeout(t), t = setTimeout(() => {
      a.apply(this, o);
    }, n);
  };
};
var vt = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"];
var te = (a) => {
  if (typeof a == "number") return `${a}px`;
  const n = String(a);
  return a ? vt.some((t) => n.includes(t)) ? n : `${a}px` : "";
};
var he = (a) => a != null && !Number.isNaN(a) && ft(a);
var gt = defineComponent({
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
  setup(a) {
    const n = N("loading"), t = a, o = computed(() => te(t.size));
    return (e, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(n).b(),
        t.customClass,
        unref(n).is("fullscreen", t.fullscreen),
        unref(n).is("mask", t.mask)
      ]),
      style: normalizeStyle({
        "--im-loading-size": o.value
      })
    }, [
      createBaseVNode("div", {
        class: normalizeClass([unref(n).e("icon-wrapper")])
      }, [
        (openBlock(), createElementBlock("svg", {
          viewBox: "0 0 1024 1024",
          class: normalizeClass([unref(n).e("loading")]),
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
        class: normalizeClass([unref(n).e("text")])
      }, toDisplayString(t.loadingText), 3)) : createCommentVNode("", true)
    ], 6));
  }
});
var A = (a, n) => {
  const t = a.__vccOpts || a;
  for (const [o, e] of n)
    t[o] = e;
  return t;
};
var Ge = A(gt, [["__scopeId", "data-v-8ece8f88"]]);
function be(a, n) {
  _e(a);
  const t = createApp(Ge, {
    loading: true,
    fullScreen: false,
    loadingText: n
  }), o = document.createElement("div"), e = window.getComputedStyle(a);
  e.overflow !== "hidden" && (a.dataset.overflow = e.overflow, a.style.overflow = "hidden"), e.position === "static" && (a.dataset.position = e.position, a.style.position = "relative"), a.appendChild(o), t.mount(o), a.IM_LOADING_INSTANCE = t;
}
function _e(a) {
  const n = a == null ? void 0 : a.IM_LOADING_INSTANCE;
  if (n)
    try {
      n.unmount(), n._container.remove(), a.IM_LOADING_INSTANCE = null, a.dataset.overflow && (a.style.overflow = a.dataset.overflow, delete a.dataset.overflow), a.dataset.position && (a.style.position = a.dataset.position, delete a.dataset.position);
    } catch (t) {
      console.error(t);
    }
}
var ht = {
  mounted(a, n) {
    var t, o;
    if (typeof n.value == "boolean")
      return n.value && be(a);
    (t = n.value) != null && t.loading && be(a, (o = n.value) == null ? void 0 : o.loadingText);
  },
  beforeUnmount(a) {
    _e(a);
  },
  updated(a, n) {
    var t, o;
    if (typeof n.value == "boolean")
      return n.value ? be(a) : _e(a);
    (t = n.value) != null && t.loading ? be(a, (o = n.value) == null ? void 0 : o.loadingText) : _e(a);
  }
};
var bt = defineComponent({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    size: { default: 16 },
    name: {},
    color: { default: "currentColor" }
  },
  setup(a) {
    const n = a, t = computed(() => te(n.size));
    return (o, e) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(["im-icon", [`im-icon-${n.name}`]]),
      style: normalizeStyle({
        "--icon-size": t.value,
        "--icon-color": n.color
      })
    }, null, 6));
  }
});
var O = A(bt, [["__scopeId", "data-v-a82dfaa3"]]);
O.install = function(a) {
  a.component("ImIcon", O);
};
var yt = ["data-index", "onMouseenter", "onMouseleave"];
var _t = { class: "im-message__text" };
var It = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(a, { expose: n }) {
    const t = N("message"), o = a, e = ref([]);
    let i = null;
    watch(() => e.value, () => {
      e.value.length === 0 ? i = setTimeout(() => {
        !e.value.length && o.callback();
      }, 500) : (i && clearTimeout(i), i = null);
    });
    const s = (u) => {
      switch (u) {
        case "success":
          return "check-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "error":
          return "close-circle-fill";
        default:
          return "info-circle-fill";
      }
    }, c = (u) => {
      u.timer && (clearTimeout(u.timer), u.timer = null);
    }, v = (u) => {
      u.timer && clearTimeout(u.timer), u.timer = setTimeout(() => {
        e.value = e.value.filter((d) => d.id !== u.id);
      }, u.duration || 3e3);
    }, f = (u) => {
      const d = setTimeout(() => {
        e.value = e.value.filter((r) => r.id !== u.id);
      }, u.duration || 3e3);
      e.value.push({ ...u, timer: d });
    };
    return o.add && o.add(f), n({ addMsg: f }), (u, d) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(t).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (r) => (openBlock(), createElementBlock("li", {
          key: r.id,
          "data-index": r.id,
          onMouseenter: () => c(r),
          onMouseleave: () => v(r),
          class: normalizeClass(["im-message__item", [unref(t).e("item"), r.color ? unref(t).e(r.color) : ""]])
        }, [
          createVNode(unref(O), {
            name: s(r.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", _t, toDisplayString(r.msg), 1)
        ], 42, yt))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var wt = A(It, [["__scopeId", "data-v-820c83a9"]]);
var kt = class {
  constructor() {
    ve(this, "app");
    ve(this, "container");
    ve(this, "addMsgToList");
    this.app = null, this.container = null, this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    if (typeof window < "u" && window) {
      this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
      const n = this;
      this.app = createApp(wt, {
        callback: () => {
          n.destroy();
        },
        add: (t) => {
          n.addMsgToList = t;
        }
      }), this.app.mount(this.container);
    } else
      throw new Error("只能在浏览器环境下使用");
  }
  destroy() {
    var n, t;
    (n = this.app) == null || n.unmount(), (t = this.container) == null || t.remove(), this.app = null, this.container = null;
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
  info(n, t) {
    this.addMsg({
      color: "primary",
      msg: n,
      duration: t,
      id: ""
    });
  }
  success(n, t) {
    this.addMsg({
      color: "success",
      msg: n,
      duration: t,
      id: ""
    });
  }
  warning(n, t) {
    this.addMsg({
      color: "warning",
      msg: n,
      duration: t,
      id: ""
    });
  }
  error(n, t) {
    this.addMsg({
      color: "error",
      msg: n,
      duration: t,
      id: ""
    });
  }
};
var K = null;
var ua = () => (K || (K = new kt()), {
  info: (a, n = 3e3) => {
    K == null || K.info(a, n);
  },
  success: (a, n = 3e3) => {
    K == null || K.success(a, n);
  },
  warning: (a, n = 3e3) => {
    K == null || K.warning(a, n);
  },
  error: (a, n = 3e3) => {
    K == null || K.error(a, n);
  }
});
var ee;
var xt = class {
  constructor() {
    Ve(this, ee);
    ge(this, ee, null);
  }
  setLoading(n, t) {
    n ? this.createLoading(t) : this.closeLoading();
  }
  createLoading(n = {}) {
    this.closeLoading(), ge(this, ee, createApp(Ge, {
      ...n,
      loading: true,
      fullscreen: true
    }));
    const t = document.createElement("div");
    t.setAttribute("class", "im-loading-container"), document.body.appendChild(t), oe(this, ee).mount(t);
  }
  closeLoading() {
    oe(this, ee) && (oe(this, ee).unmount(), oe(this, ee)._container && document.body.removeChild(oe(this, ee)._container));
  }
};
ee = /* @__PURE__ */ new WeakMap();
var Ye = new xt();
var da = () => ({
  show(a) {
    Ye.setLoading(true, a);
  },
  hide() {
    Ye.setLoading(false);
  }
});
var ae = (a, n) => {
  const t = inject(Ue), o = ref(Number(t.size || 36)), e = ref(t.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: e };
};
var Ct = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function $t(a, n) {
  return openBlock(), createElementBlock("svg", Ct, n[0] || (n[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var zt = { render: $t };
var Bt = ["tabindex", "type", "disabled"];
var Vt = defineComponent({
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
  setup(a, { expose: n, emit: t }) {
    const o = a, e = t, i = N("button"), { sizeToken: s } = ae(), c = useAttrs(), v = computed(() => [
      i.b(),
      o.color && i.m(o.color),
      o.shape && i.m(o.shape),
      o.variant && i.m(o.variant),
      i.is("disabled", o.disabled),
      i.is("loading", o.loading)
    ].filter(Boolean)), f = ref(), u = computed(() => {
      let g = +(o.size || s.value || 36);
      return {
        "--im-button-size": g + "px",
        "--im-button-padding": (g * 0.45).toFixed(0) + "px",
        width: o.width
      };
    });
    n({
      ref: f,
      $el: f,
      focus: () => {
        var g;
        return (g = f.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = f.value) == null ? void 0 : g.blur();
      }
    });
    const d = computed(() => o.loading && ["square", "circle"].includes(o.shape)), r = () => {
      o.disabled || o.loading || e("click");
    };
    return (g, V) => {
      const _ = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", mergeProps(unref(c), {
        class: v.value,
        onClick: r,
        ref_key: "buttonRef",
        ref: f,
        style: u.value,
        tabindex: o.tabindex || 0,
        type: o.type || "button",
        disabled: o.disabled || o.loading
      }), [
        o.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(i).e("loading")])
        }, [
          createVNode(unref(zt))
        ], 2)) : createCommentVNode("", true),
        d.value ? createCommentVNode("", true) : renderSlot(g.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(o.text), 1)
        ], true)
      ], 16, Bt)), [
        [_, true]
      ]);
    };
  }
});
var Te = A(Vt, [["__scopeId", "data-v-a3d92bde"]]);
Te.install = (a) => {
  a.component("ImButton", Te);
};
var Tt = defineComponent({
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
  setup(a) {
    const n = a, t = useSlots(), o = computed(() => {
      var i;
      return ((i = t.default) == null ? void 0 : i.call(t)) || [];
    }), e = N("row");
    return (i, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (c, v) => (openBlock(), createBlock(resolveDynamicComponent(c), { key: v }))), 128))
    ], 6));
  }
});
var Le = A(Tt, [["__scopeId", "data-v-5179967f"]]);
var Lt = defineComponent({
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
  setup(a) {
    const n = a, t = N("col"), o = computed(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (e, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()]),
      style: normalizeStyle({
        "--im-col-w": o.value,
        "--im-col-offset": n.offset
      })
    }, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var Se = A(Lt, [["__scopeId", "data-v-ecf91058"]]);
Le.install = (a) => {
  a.component("ImRow", Le);
};
Se.install = (a) => {
  a.component("ImCol", Se);
};
var St = ["disabled", "readonly", "placeholder", "name", "type", "max", "min", "maxlength", "minlength", "step", "pattern", "autocomplete", "autofocus", "tabindex", "id", "value"];
var Nt = defineComponent({
  name: "ImInput",
  __name: "InputBase",
  props: {
    isAppend: { type: Boolean },
    isPrepend: { type: Boolean },
    modelValue: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    placeholder: {},
    type: {},
    name: {},
    id: {},
    maxlength: {},
    minlength: {},
    max: {},
    min: {},
    step: {},
    pattern: {},
    required: { type: Boolean },
    autocomplete: {},
    autofocus: { type: Boolean },
    tabindex: {},
    precision: {},
    size: {},
    prefix: {},
    suffix: {},
    clearable: { type: Boolean },
    showPassword: { type: Boolean },
    showWordCount: { type: Boolean },
    prepend: {},
    append: {}
  },
  emits: ["update:modelValue", "change", "clear", "focus", "blur"],
  setup(a, { expose: n, emit: t }) {
    const o = a, e = ref(null), { sizeToken: i } = ae(), s = t, c = ref(o.modelValue), v = N("input"), f = computed(
      () => te(o.size || i.value || 36)
    );
    watch(
      () => o.modelValue,
      () => {
        c.value = o.modelValue;
      }
    ), n({
      $el: e,
      focus: () => {
        var r;
        return (r = e.value) == null ? void 0 : r.focus();
      },
      blur: () => {
        var r;
        return (r = e.value) == null ? void 0 : r.blur();
      }
    });
    const u = (r) => {
      const g = r.target;
      c.value = g.value, s("update:modelValue", c.value), s("change", c.value);
    };
    function d(r) {
      r.stopPropagation(), c.value = "", s("update:modelValue", c.value), s("change", c.value), s("clear");
    }
    return (r, g) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(v).b(),
        unref(v).is("disabled", o.disabled),
        unref(v).is("readonly", o.readonly),
        unref(v).is("has-append", o.isAppend),
        unref(v).is("has-prepend", o.isPrepend)
      ]),
      style: normalizeStyle({
        "--im-input-size": f.value
      })
    }, [
      renderSlot(r.$slots, "prefix", {}, () => [
        o.prefix ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(v).e("prefix")])
        }, toDisplayString(o.prefix), 3)) : createCommentVNode("", true)
      ], true),
      createBaseVNode("input", {
        class: normalizeClass([unref(v).e("input")]),
        ref_key: "inputRef",
        ref: e,
        disabled: o.disabled,
        readonly: o.readonly,
        placeholder: o.placeholder,
        name: o.name,
        type: o.type,
        max: o.max,
        min: o.min,
        maxlength: o.maxlength,
        minlength: o.minlength,
        step: o.step,
        pattern: o.pattern,
        autocomplete: o.autocomplete,
        autofocus: o.autofocus,
        tabindex: o.tabindex,
        id: o.id,
        value: c.value,
        onInput: u,
        onFocus: g[0] || (g[0] = () => s("focus")),
        onBlur: g[1] || (g[1] = () => s("blur"))
      }, null, 42, St),
      withDirectives(createBaseVNode("span", {
        class: normalizeClass([unref(v).e("clearable")])
      }, [
        createVNode(O, {
          name: "close-circle",
          size: "1.2em",
          onClick: d
        })
      ], 2), [
        [vShow, o.clearable && c.value && !(o.disabled || o.readonly)]
      ]),
      renderSlot(r.$slots, "suffix", {}, () => [
        o.prefix ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(v).e("suffix")])
        }, toDisplayString(o.suffix), 3)) : createCommentVNode("", true)
      ], true)
    ], 6));
  }
});
var Ne = A(Nt, [["__scopeId", "data-v-41a2aed9"]]);
var At = defineComponent({
  name: "ImInput",
  __name: "ImInput",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    placeholder: {},
    type: {},
    name: {},
    id: {},
    maxlength: {},
    minlength: {},
    max: {},
    min: {},
    step: {},
    pattern: {},
    required: { type: Boolean },
    autocomplete: {},
    autofocus: { type: Boolean },
    tabindex: {},
    precision: {},
    size: {},
    prefix: {},
    suffix: {},
    clearable: { type: Boolean },
    showPassword: { type: Boolean },
    showWordCount: { type: Boolean },
    prepend: {},
    append: {}
  },
  emits: ["update:modelValue", "change"],
  setup(a, { expose: n, emit: t }) {
    const o = useSlots(), e = a, i = t, s = ref(null), c = ref(e.modelValue), v = N("input-wrapper"), f = computed(() => te(e.size || 36)), u = computed(() => {
      var r;
      return !!(e.prepend || (r = o.prepend) != null && r.call(o));
    }), d = computed(() => {
      var r;
      return !!(e.append || (r = o.append) != null && r.call(o));
    });
    return watch(
      () => e.modelValue,
      () => {
        c.value = e.modelValue;
      }
    ), watch(c, () => {
      i("update:modelValue", c.value), i("change", c.value);
    }), n({
      $el: s,
      focus: () => {
        var r;
        return (r = s.value) == null ? void 0 : r.focus();
      },
      blur: () => {
        var r;
        return (r = s.value) == null ? void 0 : r.blur();
      },
      // @ts-ignore
      getInput: () => s.value.$el
    }), (r, g) => u.value || d.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass([unref(v).b()]),
      style: normalizeStyle({
        "--im-input-wrapper-size": f.value
      })
    }, [
      u.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(v).e("prepend")])
      }, [
        renderSlot(r.$slots, "prepend", {}, () => [
          createTextVNode(toDisplayString(e.prepend), 1)
        ], true)
      ], 2)) : createCommentVNode("", true),
      createVNode(Ne, mergeProps(e, {
        modelValue: c.value,
        "onUpdate:modelValue": g[0] || (g[0] = (V) => c.value = V),
        ref_key: "inputRef",
        ref: s,
        size: f.value,
        isPrepend: u.value,
        isAppend: d.value
      }), createSlots({
        suffix: withCtx(() => [
          renderSlot(r.$slots, "suffix", {}, () => [
            createTextVNode(toDisplayString(e.suffix), 1)
          ], true)
        ]),
        _: 2
      }, [
        r.$slots.prefix || e.prefix ? {
          name: "prefix",
          fn: withCtx(() => [
            renderSlot(r.$slots, "prefix", {}, () => [
              createTextVNode(toDisplayString(e.prefix), 1)
            ], true)
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue", "size", "isPrepend", "isAppend"]),
      d.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass([unref(v).e("append")])
      }, [
        renderSlot(r.$slots, "append", {}, () => [
          createTextVNode(toDisplayString(e.append), 1)
        ], true)
      ], 2)) : createCommentVNode("", true)
    ], 6)) : (openBlock(), createBlock(Ne, mergeProps({ key: 1 }, e, {
      modelValue: c.value,
      "onUpdate:modelValue": g[1] || (g[1] = (V) => c.value = V),
      size: f.value,
      ref_key: "inputRef",
      ref: s
    }), {
      prefix: withCtx(() => [
        renderSlot(r.$slots, "prefix", {}, void 0, true)
      ]),
      suffix: withCtx(() => [
        renderSlot(r.$slots, "suffix", {}, void 0, true)
      ]),
      _: 3
    }, 16, ["modelValue", "size"]));
  }
});
var Ae = A(At, [["__scopeId", "data-v-e056ad34"]]);
Ae.install = (a) => {
  a.component("ImInput", Ae);
};
var Et = defineComponent({
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
  setup(a) {
    const n = N("divider"), t = a;
    return (o, e) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(n).b(), unref(n).is("vertical", t.vertical)]),
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
        class: normalizeClass([unref(n).e("text")])
      }, [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ], 2))
    ], 6));
  }
});
var ke = A(Et, [["__scopeId", "data-v-108f9bec"]]);
ke.name = "ImDivider";
ke.install = function(a) {
  a.component("ImDivider", ke);
};
var F = (a, n) => (n.install = (t) => {
  t.component(a, n);
}, n);
var Mt = ["onClick"];
var Pt = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(a) {
    const n = N("anchor");
    let t = null;
    const o = ref(null), e = ref(null), i = ref(null), s = a;
    watch(
      () => s.target,
      () => {
        t && t(), t = f();
      }
    ), onMounted(() => {
      t = f();
    }), onUnmounted(() => {
      t && t();
    });
    function c(d) {
      let r = d == null ? void 0 : d.scrollTop;
      return o.value === window && (r = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), r;
    }
    function v(d) {
      var b;
      if (i.value || !o.value) return;
      const r = o.value === window ? d.target : o.value;
      let g = c(r);
      const V = r.offsetTop || 0, _ = (s.data || []).map(({ id: x }) => {
        const z = document.getElementById(x);
        return z ? {
          id: x,
          offsetTop: z.offsetTop - V,
          el: z
        } : null;
      }).filter(Boolean);
      e.value = null;
      for (let x = 0; x < _.length; x++) {
        const z = _[x];
        if (g >= z.offsetTop - (s.offset || 0) && g <= z.offsetTop + (((b = z.el) == null ? void 0 : b.clientHeight) || 0) - (s.offset || 0)) {
          e.value = z.id;
          return;
        }
      }
      if (!e.value && g >= (parseInt(String(s.offset)) || 0)) {
        const x = _.find((z) => g <= z.offsetTop - (s.offset || 0) && g > (s.offset || 0) ? (e.value = z.id, true) : false);
        x && (e.value = x.id);
      }
    }
    function f() {
      const d = s.target ? typeof s.target == "string" ? document.querySelector(s.target) : s.target : window;
      if (!d)
        return null;
      o.value = d;
      const r = we(v, 50);
      return v({ target: d }), d.addEventListener("scroll", r, { passive: true }), () => {
        d.removeEventListener("scroll", r);
      };
    }
    async function u(d) {
      var V, _, b;
      if (e.value === d || !d) return;
      i.value = d, e.value = d;
      const r = document.getElementById(d);
      if (!r) return;
      (_ = o.value) == null || _.scrollTo({
        // @ts-ignore
        top: r.offsetTop - (s.offset || 0) - (((V = o.value) == null ? void 0 : V.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const g = Ce(() => {
        var x;
        i.value = null, (x = o.value) == null || x.removeEventListener("scroll", g);
      }, 300);
      (b = o.value) == null || b.addEventListener("scroll", g, { passive: true });
    }
    return (d, r) => {
      const g = resolveDirective("ripple");
      return s.data && s.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(n).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(s.data, (V) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(n).e("item"), unref(n).is("active", e.value === V.id)]),
          onClick: () => u(V.id)
        }, [
          e.value === V.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(n).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(V.text), 1)
        ], 10, Mt)), [
          [g, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Rt = A(Pt, [["__scopeId", "data-v-4840d244"]]);
var Dt = F("ImAnchor", Rt);
var Ot = defineComponent({
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
  setup(a, { emit: n }) {
    const t = n, o = ref(null), e = a, i = N("alert"), s = useSlots(), c = computed(() => !!(e.showIcon && e.title)), v = computed(() => {
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
    }), f = async () => {
      var u, d;
      t("close"), (u = o.value) == null || u.animate([{
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
      }), await new Promise((r) => setTimeout(r, 300)), (d = o.value) == null || d.remove();
    };
    return (u, d) => {
      const r = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: o,
        class: normalizeClass([unref(i).b(), unref(i).m(e.color || "primary"), e.variant && unref(i).m(e.variant || "")])
      }, [
        e.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(i).e("icon")])
        }, [
          renderSlot(u.$slots, "icon", {}, () => [
            createVNode(unref(O), {
              name: v.value,
              size: c.value ? 24 : 16
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
            renderSlot(u.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(e.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(i).e("message")])
          }, [
            renderSlot(u.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(e.message), 1)
            ], true)
          ], 2)
        ], 2),
        e.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(i).e("close")]),
          onClick: f
        }, [
          renderSlot(u.$slots, "close", {}, () => [
            createVNode(unref(O), {
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
var Ft = A(Ot, [["__scopeId", "data-v-d11fdcb2"]]);
var Yt = F("ImAlert", Ft);
var Ht = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: n }) {
    const t = useSlots(), o = n, e = N("breadcrumb"), i = a, s = computed(
      () => {
        var v, f;
        return (f = (v = t.default) == null ? void 0 : v.call(t)) == null ? void 0 : f.filter((u) => {
          var d;
          return (u == null ? void 0 : u.type) && ((d = u == null ? void 0 : u.type) == null ? void 0 : d.name) === "ImBreadcrumbItem";
        });
      }
    ), c = (v) => {
      v && i.modelValue !== v && (o("update:modelValue", v), o("change", v));
    };
    return (v, f) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (u, d) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(u), {
          active: i.modelValue,
          onClick: c
        }, null, 8, ["active"])),
        s.value && s.value.length > 0 && d < s.value.length - 1 ? (openBlock(), createElementBlock("span", {
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
var Wt = A(Ht, [["__scopeId", "data-v-64336468"]]);
var qt = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(a, { emit: n }) {
    const t = N("breadcrumb__item"), o = a, e = n;
    return (i, s) => (openBlock(), createElementBlock("div", {
      onClick: s[0] || (s[0] = () => e("click", o.value)),
      class: normalizeClass([unref(t).b(), unref(t).is("active", o.active === o.value && !!o.value)])
    }, [
      renderSlot(i.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var Xt = A(qt, [["__scopeId", "data-v-40ed04b1"]]);
var jt = F("ImBreadcrumb", Wt);
var Ut = F("ImBreadcrumb", Xt);
var xe = (a, n) => !a || !a.getAnimations ? false : (a.getAnimations(n).forEach((t) => t.cancel()), true);
var Ke = async (a, n) => {
  if (!a || !a.getAnimations) return false;
  try {
    return await Promise.all(
      a.getAnimations(n).map((t) => t.finished)
    ), true;
  } catch {
    return false;
  }
};
var $e = () => ({
  width: (window == null ? void 0 : window.innerWidth) || document.documentElement.clientWidth || document.body.clientWidth,
  height: (window == null ? void 0 : window.innerHeight) || document.documentElement.clientHeight || document.body.clientHeight
});
var Gt = () => document ? document.body.style.overflow === "hidden" || document.body.classList.contains("im-lock-scroll") : false;
var Je = async () => {
  try {
    if (await new Promise((n) => setTimeout(n, 0)), !document) return Promise.resolve();
    Array.from(document.querySelectorAll(".is-im-lock-scroll")).length ? Gt() || document.body.classList.add("im-lock-scroll") : document.body.classList.remove("im-lock-scroll");
  } catch {
  }
};
var Kt = ["role"];
var ze = defineComponent({
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
  setup(a, { emit: n }) {
    const { zIndexToken: t } = ae(), o = N("layer"), e = ref(null), i = n, s = a, c = reactive({
      top: "",
      left: "",
      minWidth: "fit-content"
    }), v = computed(() => b(s.placement)), f = {
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
        const w = document.createElement("div");
        w.id = "im-layer-container", document.body.appendChild(w);
      }
    });
    const u = ["bottom", "bottom-left", "bottom-right"], d = ["top", "top-left", "top-right"], r = ["right", "right-top", "right-bottom"], g = ["left", "left-top", "left-bottom"];
    function V(y, w, B = "bottom-left") {
      const { height: J } = $e();
      let D = 0;
      const ne = s.arrow ? parseInt(String(s.offset || 0)) : 0;
      if (u.includes(B))
        D = y.bottom, D += ne;
      else if (d.includes(B))
        D = y.top - w.height, D -= ne;
      else if (r.includes(B) || g.includes(B))
        switch (B) {
          case "right":
          case "left":
            D = y.top + y.height * 0.5 - w.height / 2;
            break;
          case "right-top":
          case "left-top":
            D = y.top;
            break;
          case "right-bottom":
          case "left-bottom":
            D = y.top + y.height - w.height;
            break;
        }
      return D <= 0 ? 0 : D + w.height >= J ? J - w.height : D || y.top || 0;
    }
    function _(y, w, B = "bottom-left") {
      const J = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let D = 0;
      const ne = s.arrow ? parseInt(String(s.offset || 0)) : 0;
      if (u.includes(B) || d.includes(B))
        switch (B) {
          case "bottom":
          case "top":
            D = y.right - y.width / 2 - w.width / 2;
            break;
          case "bottom-right":
          case "top-right":
            D = y.left + y.width - w.width;
            break;
          default:
            D = y.left;
            break;
        }
      else r.includes(B) ? D = y.left + y.width + ne : g.includes(B) && (D = y.left - w.width - ne);
      return D <= 0 ? 0 : D + w.width >= J ? J - w.width : D || y.left || 0;
    }
    const b = (y) => [...u, ...d, ...r, ...g].includes(y) ? s.placement : "bottom-left";
    function x(y) {
      if (s.scrollClose) {
        const w = y.target, B = e.value;
        if (w && w === B || B != null && B.contains(w))
          return;
        i("close", true);
      } else
        Q();
    }
    const z = we(Q, 100), C = we(x, 100);
    async function Q() {
      var ne;
      const y = (ne = s.getTriggerContainer) == null ? void 0 : ne.call(s);
      if (!y)
        return i("close", true);
      ie();
      const w = v.value, B = e.value, J = y.getBoundingClientRect(), D = B.getBoundingClientRect();
      c.minWidth = s.role == "tooltip" ? "fit-content" : `${J.width}px`, c.top = `${V(J, D, w)}px`, c.left = `${_(J, D, w)}px`;
    }
    function G() {
      window.removeEventListener("scroll", C), s.visible && window.addEventListener("scroll", C, {
        passive: true,
        capture: true
      });
    }
    function U() {
      window.removeEventListener("resize", z), s.visible && window.addEventListener("resize", z, {
        passive: true,
        capture: true
      });
    }
    function ie() {
      const y = e.value;
      if (d.includes(v.value)) {
        y.style.transformOrigin = "center bottom";
        return;
      }
      if ((r.includes(v.value) || g.includes(v.value)) && ["right-bottom", "left-bottom"].includes(v.value)) {
        y.style.transformOrigin = "center bottom";
        return;
      }
      y.style.transformOrigin = "center top";
    }
    async function k(y) {
      const w = y;
      w.style.setProperty("transition", "none"), G(), U(), await new Promise((B) => requestAnimationFrame(B)), Q();
      try {
        w.getAnimations().forEach((B) => B == null ? void 0 : B.cancel()), w.animate(
          s.role === "tooltip" ? f.tooltip : f.dropdown,
          f.option
        ), Promise.all(
          w.getAnimations().map((B) => B.finished)
        ).finally(() => {
          w.style.setProperty("transition", "all 0.2s ease");
        });
      } catch (B) {
        console.error(B);
      }
    }
    function R(y, w) {
      const B = y;
      B.getAnimations().forEach((J) => J.cancel()), B.animate(
        s.role === "tooltip" ? f.tooltipLeave : f.dropdownLeave,
        f.option
      ), Promise.all(
        B.getAnimations().map((J) => J.finished)
      ).finally(() => {
        w(), G(), U();
      });
    }
    return (y, w) => (openBlock(), createBlock(Teleport, { to: "#im-layer-container" }, [
      createVNode(Transition, {
        css: false,
        duration: { enter: 200, leave: 200 },
        mode: "out-in",
        onBeforeEnter: k,
        onLeave: R
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            onMouseenter: w[0] || (w[0] = (B) => i("mouseenter", B)),
            onMouseleave: w[1] || (w[1] = (B) => i("mouseleave", B)),
            tabindex: "-1",
            ref_key: "layerRef",
            ref: e,
            "aria-modal": "true",
            class: normalizeClass([
              unref(o).b(),
              "im-shadow",
              s.customClass,
              v.value && unref(o).m(v.value)
            ]),
            style: normalizeStyle({
              zIndex: s.zIndex || unref(t),
              ...c
            }),
            role: s.role
          }, [
            s.arrow ? (openBlock(), createElementBlock("svg", {
              key: 0,
              class: normalizeClass([unref(o).e("arrow")]),
              width: "16",
              height: "16",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "19626"
            }, w[2] || (w[2] = [
              createBaseVNode("path", {
                d: "M590.336 763.563l359.083-362.155A85.333 85.333 0 0 0 888.832 256H170.667a85.333 85.333 0 0 0-60.587 145.408l359.083 362.155a85.333 85.333 0 0 0 121.173 0z",
                "p-id": "19626"
              }, null, -1)
            ]), 2)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass([unref(o).e("content")])
            }, [
              renderSlot(y.$slots, "default")
            ], 2)
          ], 46, Kt), [
            [vShow, s.visible]
          ])
        ]),
        _: 3
      })
    ]));
  }
});
var Jt = 100;
var Qt = defineComponent({
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
  setup(a, { emit: n }) {
    const t = n, o = N("dropdown"), e = a, i = ref(null), s = ref(e.modelValue || false);
    onMounted(() => {
      c();
    }), watch(
      () => s.value,
      () => {
        c();
      }
    ), watch(
      () => e.modelValue,
      (b) => {
        s.value = b;
      }
    );
    function c() {
      document.removeEventListener("click", f, { capture: true }), s.value && document.addEventListener("click", f, {
        passive: true,
        capture: true
      });
    }
    function v() {
      return i.value;
    }
    function f(b) {
      if (s.value) {
        const x = b.target, z = i.value;
        if (x === z || z != null && z.contains(x) || x.classList.contains("is-disabled")) return;
        r(false);
      }
    }
    function u() {
      (e.trigger === "hover" || !e.trigger) && r(true);
    }
    function d() {
      (e.trigger === "hover" || !e.trigger) && r(false);
    }
    const r = Ce((b) => {
      b ? V() : _();
    }, Jt);
    function g() {
      !s.value && r(true);
    }
    function V() {
      s.value = true, t("update:modelValue", s.value), t("change", s.value);
    }
    function _() {
      s.value = false, t("update:modelValue", s.value), t("change", s.value);
    }
    return (b, x) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(o).b()]),
      ref_key: "dropdownRef",
      ref: i,
      onMouseenter: u,
      onMouseleave: d,
      onClick: g
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode(ze, {
        visible: s.value,
        customClass: unref(o).e("content"),
        placement: e.placement,
        offset: e.offset,
        "z-index": e.zIndex,
        getTriggerContainer: v,
        arrow: e.arrow,
        scrollClose: e.scrollClose,
        onClose: _,
        onMouseenter: u,
        onMouseleave: d
      }, {
        default: withCtx(() => [
          renderSlot(b.$slots, "content", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["visible", "customClass", "placement", "offset", "z-index", "arrow", "scrollClose"])
    ], 34));
  }
});
var Zt = A(Qt, [["__scopeId", "data-v-64b1a7dc"]]);
var eo = F("ImDropdown", Zt);
var to = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: n }) {
    const t = a, o = useSlots(), e = N("list"), i = (u) => typeof u.type == "object" && u.type !== null, s = (u, d) => {
      const r = [];
      return u.forEach((g) => {
        if (i(g) && g.type && g.type.name == d) {
          const V = g.props || {};
          r.push({ vnode: g, props: V });
        } else g && (g != null && g.children) && Array.isArray(g.children) && r.push(...s(g.children, d));
      }), r;
    }, c = computed(() => {
      var r;
      const u = ((r = o.default) == null ? void 0 : r.call(o)) || [];
      return s(u, "ImListItem").map((g) => g.vnode);
    }), v = n, f = (u) => {
      var r;
      const d = ((r = u.props) == null ? void 0 : r.value) || "";
      console.log(d, "value"), !(d !== 0 && !d) && (v("update:modelValue", d), v("change", d));
    };
    return (u, d) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(c.value, (r) => (openBlock(), createBlock(resolveDynamicComponent(r), {
        active: t.modelValue,
        onClick: () => f(r)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var oo = A(to, [["__scopeId", "data-v-541c876e"]]);
var ao = defineComponent({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: false },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: true }
  },
  emits: ["click"],
  setup(a, { emit: n }) {
    const t = N("list__item"), o = n, e = a;
    function i(s) {
      if (e.disabled) {
        s.stopPropagation();
        return;
      }
      o("click", e.value);
    }
    return (s, c) => {
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
var no = A(ao, [["__scopeId", "data-v-6df1dd93"]]);
var so = F("ImList", oo);
var lo = F("ImListItem", no);
var io = ["src", "srcset", "alt", "loading"];
var ro = defineComponent({
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
  setup(a, { emit: n }) {
    const t = n, o = N("avatar"), e = a, i = (s) => {
      console.log(s.target), t("error", s);
    };
    return (s, c) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(o).b(), e.shape ? unref(o).m(e.shape) : ""]),
      style: normalizeStyle({
        "--im-avatar-size": (Number(e.size) || 36) + "px",
        "--im-avatar-color": e.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": e.fit
      })
    }, [
      !e.src && !e.srcset ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(o).e("icon")])
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2)) : (openBlock(), createElementBlock("img", {
        key: 1,
        onError: i,
        src: e.src,
        srcset: e.srcset,
        alt: e.alt,
        loading: e.loading,
        class: normalizeClass([unref(o).e("img")])
      }, null, 42, io))
    ], 6));
  }
});
var co = A(ro, [["__scopeId", "data-v-c4c32038"]]);
var uo = F("ImAvatar", co);
var mo = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(a, { emit: n }) {
    const t = N("mask"), { zIndexToken: o } = ae(), e = a, i = n, s = () => {
      e.closeOnClickMask && i("close", false);
    };
    return (c, v) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(t).b()]),
          style: normalizeStyle({
            zIndex: e.zIndex || unref(o)
          }),
          onClick: s
        }, [
          renderSlot(c.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, e.visible]
        ])
      ]),
      _: 3
    }));
  }
});
var po = A(mo, [["__scopeId", "data-v-d5aadf77"]]);
var Re = F("ImMask", po);
var le = {
  duration: 200,
  delay: 0,
  easing: "ease-out"
};
function Be(a, n = "right") {
  const t = (a == null ? void 0 : a.getBoundingClientRect()) || {}, o = (t == null ? void 0 : t.width) || 0, e = (t == null ? void 0 : t.height) || 0;
  switch (n) {
    case "left":
      return o ? `translateX(-${o}px)` : "translateX(-100%)";
    case "right":
      return o ? `translateX(${o}px)` : "translateX(100%)";
    case "top":
      return e ? `translateY(-${e}px)` : "translateY(-100%)";
    case "bottom":
      return e ? `translateY(${e}px)` : "translateY(100%)";
    default:
      return o ? `translateX(${o}px)` : "translateX(100%)";
  }
}
var ye = async (a, n = true) => {
  let t = Be(a, "right"), o = [];
  n ? o = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : o = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], a == null || a.animate(o, le);
};
var He = async (a, n = true) => {
  let t = Be(a, "left"), o = [];
  n ? o = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : o = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], a == null || a.animate(o, le);
};
var We = async (a, n = true) => {
  let t = Be(a, "top"), o = [];
  n ? o = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : o = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], a == null || a.animate(o, le);
};
var qe = async (a, n = true) => {
  let t = Be(a, "bottom"), o = [];
  n ? o = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : o = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], a == null || a.animate(o, le);
};
var fo = async (a, n) => {
  let t = [], o = "center";
  const e = (n == null ? void 0 : n.getBoundingClientRect()) || null, { width: i, height: s } = $e(), c = a.getBoundingClientRect();
  if (e) {
    const v = (e.left - c.left) / c.width * 100, f = (e.top - c.top) / c.height * 100;
    o = `${v}% ${f}%`;
  } else {
    const v = (i * 0.5 - c.left) / c.width * 100, f = (s - c.top) / c.height * 100;
    o = `${v}% ${f}%`;
  }
  t = [
    {
      opacity: 0,
      transformOrigin: o,
      transform: "scale(0) "
    },
    {
      opacity: 1,
      transformOrigin: o,
      transform: "scale(1)"
    }
  ], a == null || a.animate(t, le);
};
var vo = async (a, n) => {
  let t = [], o = "center";
  const e = (n == null ? void 0 : n.getBoundingClientRect()) || null, { width: i, height: s } = $e(), c = a.getBoundingClientRect();
  let v = "50%", f = "50%";
  e ? (v = (e.left + e.width * 0.5 - c.left) / c.width * 100, f = (e.top + e.height * 0.5 - c.top) / c.height * 100, o = `${v}% ${f}%`) : (v = (i * 0.5 - c.left) / c.width * 100, f = (s - c.top) / c.height * 100, o = `${v}% ${f}%`), t = [
    {
      opacity: 1,
      transformOrigin: o,
      transform: "scale(1)",
      offset: 0
    },
    {
      opacity: 0,
      transformOrigin: o,
      transform: "scale(0.33)",
      offset: 1
    }
  ], a == null || a.animate(t, le);
};
var Xe = (a, n = true) => {
  if (!a || !a.animate)
    return console.log("elFullscreenBottomIn");
  const { height: t } = $e();
  n ? a.animate(
    [
      { transform: `translateY(${t}px)`, opacity: 0 },
      { transform: "translateY(0)", opacity: 1 }
    ],
    le
  ) : a.animate(
    [
      { transform: "translateY(0)", opacity: 1 },
      { transform: `translateY(${t}px)`, opacity: 0 }
    ],
    le
  );
};
var go = ["aria-modal"];
var ho = defineComponent({
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
  setup(a, { emit: n }) {
    const t = N("drawer"), o = n, e = a, i = ref(null), { zIndexToken: s } = ae(), c = computed(() => te(e.size || s.value || "280px"));
    watch(() => e.modelValue, (d) => {
      Je();
    }, { immediate: true });
    const v = () => {
      o("update:modelValue", false);
    };
    function f(d, r) {
      switch (xe(d), e.placement) {
        case "right":
          ye(d);
          break;
        case "left":
          He(d);
          break;
        case "top":
          We(d);
          break;
        case "bottom":
          qe(d);
          break;
        default:
          ye(d);
          break;
      }
      r();
    }
    function u(d, r) {
      switch (xe(d), e.placement) {
        case "right":
          ye(d, false);
          break;
        case "left":
          He(d, false);
          break;
        case "top":
          We(d, false);
          break;
        case "bottom":
          qe(d, false);
          break;
        default:
          ye(d, false);
          break;
      }
      Ke(d).finally(r);
    }
    return (d, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: i,
        class: normalizeClass([unref(t).b(), unref(t).is("im-lock-scroll", e.modelValue), e.placement ? unref(t).m(e.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": c.value, zIndex: e.zIndex || unref(s) }),
        "aria-modal": e.modelValue
      }, [
        e.mask ? (openBlock(), createBlock(unref(Re), {
          key: 0,
          visible: e.modelValue,
          closeOnClickMask: e.closeOnClickMask,
          onClose: v,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: f,
          onLeave: u
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(t).e("content")])
            }, [
              renderSlot(d.$slots, "default", {}, void 0, true)
            ], 2), [
              [vShow, e.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, go)
    ]));
  }
});
var bo = A(ho, [["__scopeId", "data-v-230f0857"]]);
var yo = F("ImDrawer", bo);
var _o = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(a) {
    const n = N("card"), t = a;
    return (o, e) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(n).b(), unref(n).is("borderless", t.borderless), t.shadow ? unref(n).m(t.shadow) : ""])
    }, [
      renderSlot(o.$slots, "header", {}, () => [
        t.title || o.$slots["header-action"] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(n).e("header")])
        }, [
          createBaseVNode("span", {
            class: normalizeClass([unref(n).e("title")])
          }, toDisplayString(t.title), 3),
          renderSlot(o.$slots, "header-action", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ], true),
      createBaseVNode("div", {
        class: normalizeClass([unref(n).e("body")])
      }, [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ], 2)
    ], 2));
  }
});
var Io = A(_o, [["__scopeId", "data-v-4ccad88b"]]);
var wo = F("ImCard", Io);
var ko = ["data-esc"];
var xo = defineComponent({
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
  setup(a, { emit: n }) {
    const t = N("dialog"), o = n, e = a, i = ref(null), { zIndexToken: s } = ae();
    watch(
      () => e.modelValue,
      (u) => {
        window.removeEventListener("keydown", c), u && e.closeOnEscape && window.addEventListener("keydown", c, { passive: true }), Je();
      },
      {
        immediate: true
      }
    );
    function c(u) {
      if (u.key === "Escape" || u.code === "Escape") {
        const d = document.querySelectorAll(
          '.im-dialog.is-show[data-esc="true"]'
        );
        d.length && i.value && Array.from(d).pop() === i.value && o("update:modelValue", false);
      }
    }
    const v = async (u, d) => {
      xe(u, { subtree: true }), e.fullscreen ? Xe(u) : fo(u, e == null ? void 0 : e.getTarget()), d();
    }, f = async (u, d) => {
      xe(u, { subtree: true }), e.fullscreen ? Xe(u, false) : vo(u, e == null ? void 0 : e.getTarget()), await Ke(u, { subtree: true }), d();
    };
    return (u, d) => (openBlock(), createBlock(Teleport, { to: "body" }, [
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
        e.mask && !e.fullscreen ? (openBlock(), createBlock(unref(Re), {
          key: 0,
          closeOnClickMask: e.closeOnClickMask,
          visible: e.modelValue,
          onClose: d[0] || (d[0] = () => o("update:modelValue", false))
        }, null, 8, ["closeOnClickMask", "visible"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: v,
          duration: { enter: 200, leave: 200 },
          onLeave: f
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
              renderSlot(u.$slots, "default", {}, void 0, true)
            ], 6), [
              [vShow, e.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, ko)
    ]));
  }
});
var Co = A(xo, [["__scopeId", "data-v-8904b1d9"]]);
var $o = F("ImDialog", Co);
var zo = defineComponent({
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
  setup(a, { emit: n }) {
    const t = N("option"), o = n, e = a;
    function i(s) {
      if (s.preventDefault(), s.stopPropagation(), e.disabled) return;
      const c = e.value || e.label;
      c && o("change", c);
    }
    return (s, c) => {
      var f, u;
      const v = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        onClick: i,
        class: normalizeClass([unref(t).b(), unref(t).is("disabled", !!e.disabled), unref(t).is("active", (f = e.selectList) == null ? void 0 : f.includes(e.value || e.label || ""))])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([unref(t).e("text")])
        }, [
          renderSlot(s.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(e.label || e.value), 1)
          ], true)
        ], 2),
        e.multiple && ((u = e.selectList) != null && u.includes(e.value || e.label || "")) ? (openBlock(), createBlock(unref(O), {
          key: 0,
          name: "check",
          size: "12",
          class: normalizeClass([unref(t).e("check")])
        }, {
          default: withCtx(() => c[0] || (c[0] = [
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
var Bo = A(zo, [["__scopeId", "data-v-baa1be82"]]);
var Vo = defineComponent({
  name: "ImTag",
  __name: "ImTag",
  props: {
    color: { default: "" },
    border: { type: Boolean },
    closeable: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: true }
  },
  emits: ["close", "update:modelValue"],
  setup(a, { emit: n }) {
    const t = N("tag"), o = n, e = a;
    function i(s) {
      o("update:modelValue", false), o("close", s);
    }
    return (s, c) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        e.modelValue ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(t).b(), e.color ? unref(t).m(e.color) : "", unref(t).is("border", e.border)])
        }, [
          createBaseVNode("div", {
            class: normalizeClass([unref(t).e("content")])
          }, [
            renderSlot(s.$slots, "default", {}, void 0, true),
            e.closeable ? (openBlock(), createBlock(unref(O), {
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
var To = A(Vo, [["__scopeId", "data-v-16275f2c"]]);
var Qe = F("ImTag", To);
var Lo = defineComponent({
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
  setup(a, { emit: n }) {
    const t = N("select"), o = n, e = a, { sizeToken: i } = ae(), s = ref(false), c = ref([]), v = ref(null), f = ref(null), u = computed(() => te(e.width)), d = computed(() => te(e.size || i.value || "36px")), r = computed(() => {
      var k;
      return e.multiple ? e.options.filter((R) => c.value.includes(String(R.value))).map((R) => R.label) : ((k = e.options.find((R) => R.value === e.modelValue)) == null ? void 0 : k.label) || "";
    }), g = computed(() => e.options.filter(
      (k) => c.value.includes(String(k.value))
    )), V = computed(() => {
      const k = g.value.length - e.maxTag;
      return g.value.length && e.maxTag && g.value.length - e.maxTag && k > 0 ? k : "";
    }), _ = computed(() => e.clearable && e.modelValue && r.value && !e.disabled), b = computed(() => {
      var k;
      return e.placeholder ? e.multiple ? !((k = g.value) != null && k.length) : !r.value : false;
    });
    watch(
      () => e.modelValue,
      () => {
        C();
      },
      { immediate: true }
    ), watch(
      () => s.value,
      (k) => {
        document.removeEventListener("click", Q, { capture: true }), k && document.addEventListener("click", Q, { capture: true });
      }
    );
    function x(k, R) {
      R.preventDefault();
      const y = c.value.filter((w) => w !== k.value);
      o("update:modelValue", y.join(","));
    }
    function z() {
      s.value = false;
    }
    function C() {
      var k;
      e.multiple ? c.value = ((k = String(e.modelValue)) == null ? void 0 : k.split(",")) || [] : c.value = [e.modelValue];
    }
    function Q(k) {
      var R, y;
      (R = v.value) != null && R.contains(k.target) || v.value === k.target || k.target === f.value || e.multiple && ((y = f.value) != null && y.contains(k.target)) || f.value === k.target || z();
    }
    async function G() {
      var R;
      if (s.value) return;
      s.value = true, await new Promise((y) => requestAnimationFrame(y));
      const k = (R = f.value) == null ? void 0 : R.querySelector(
        `.${t.is("active", true)}`
      );
      k && k.scrollIntoView({ behavior: "instant", block: "nearest" }), await new Promise((y) => requestAnimationFrame(y));
    }
    function U(k) {
      if (e.multiple) {
        const R = c.value;
        R.includes(k) ? R.splice(R.indexOf(k), 1) : R.push(k), o("update:modelValue", R.filter((y) => y).join(","));
        return;
      } else
        o("update:modelValue", k);
    }
    function ie(k) {
      k.preventDefault(), k.stopPropagation(), o("update:modelValue", "");
    }
    return (k, R) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(t).b(),
        unref(t).is("open", s.value),
        unref(t).is("disabled", e.disabled),
        unref(t).is("multiple", e.multiple)
      ]),
      style: normalizeStyle({
        "--im-select-width": u.value,
        "--im-select-height": d.value
      })
    }, [
      createBaseVNode("div", {
        onClick: G,
        class: normalizeClass([unref(t).e("trigger")]),
        ref_key: "triggerRef",
        ref: v,
        tabindex: "-1"
      }, [
        b.value ? (openBlock(), createElementBlock("span", {
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (y, w) => (openBlock(), createElementBlock(Fragment, null, [
              w < e.maxTag ? (openBlock(), createBlock(unref(Qe), {
                key: w,
                onClose: withModifiers((B) => x(y, B), ["stop"]),
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
            createVNode(unref(O), {
              name: "plus",
              size: "12px"
            }),
            createTextVNode(" " + toDisplayString(V.value), 1)
          ], 2)) : createCommentVNode("", true),
          e.multiple ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass([unref(t).e("default")])
          }, toDisplayString(r.value), 3))
        ], 2)),
        createBaseVNode("span", {
          class: normalizeClass([unref(t).e("icon-down"), unref(t).is("rotate", s.value)])
        }, [
          renderSlot(k.$slots, "downIcon", {}, () => [
            createVNode(unref(O), {
              name: "down",
              size: "12"
            })
          ], true)
        ], 2),
        _.value ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass([unref(t).e("clear-icon")]),
          onClick: ie
        }, [
          renderSlot(k.$slots, "clearIcon", {}, () => [
            createVNode(unref(O), {
              name: "close-circle-fill",
              size: "18"
            })
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 2),
      createVNode(ze, {
        visible: s.value,
        getTriggerContainer: () => v.value,
        "z-index": e.zIndex,
        onClose: z,
        arrow: e.arrow,
        offset: e.offset,
        scrollClose: e.scrollClose
      }, {
        default: withCtx(() => [
          createBaseVNode("ul", {
            class: normalizeClass([unref(t).e("list")]),
            ref_key: "listRef",
            ref: f
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.options, (y, w) => (openBlock(), createBlock(Bo, {
              multiple: e.multiple,
              key: y.value || y.label || w,
              disabled: y.disabled,
              "select-list": c.value,
              value: y.value,
              label: y.label,
              onChange: U
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
var So = A(Lo, [["__scopeId", "data-v-51b7f08b"]]);
var Ze = F("ImSelect", So);
var No = ["aria-disabled"];
var Ao = ["onClick", "title"];
var Eo = ["aria-disabled"];
var Mo = defineComponent({
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
  setup(a, { emit: n }) {
    const t = N("pagination"), o = n, e = a, i = ref(e.pageSize), s = ref([1]), { sizeToken: c } = ae(), v = computed(() => parseInt(String(e.size || c.value || 36)) + "px"), f = computed(
      () => Math.ceil(e.total / (i.value || 10))
    ), u = computed(() => e.pageNumber === 1), d = computed(() => e.pageNumber >= f.value), r = computed(
      () => e.pageSizeItems.map((C) => ({ label: `${C} 条/页`, value: C }))
    );
    watch(
      () => i.value,
      (C) => {
        f.value < e.pageNumber ? o("change", { pageSize: C, pageNumber: f.value }) : o("change", { pageSize: C, pageNumber: e.pageNumber });
      }
    ), watch(
      () => [e.pageNumber, e.pageSize],
      () => {
        i.value = e.pageSize, V(
          f.value < e.pageNumber ? f.value : e.pageNumber
        );
      },
      { immediate: true }
    );
    function g(C) {
      e.pageNumber !== C && o("change", { pageNumber: C, pageSize: e.pageSize });
    }
    function V(C) {
      if (f.value <= 1)
        s.value = [1];
      else {
        const Q = Math.ceil(C / 5), G = [];
        let U = Q * 5 - 4;
        for (let ie = 0; ie < 5; ie++) {
          let k = U + ie;
          if (k > f.value)
            break;
          G.push(k);
        }
        C - 5 >= 1 && (G.unshift("left"), G.unshift(1)), C + 5 <= f.value && (G.push("right"), G.push(f.value)), s.value = G, g(C);
      }
    }
    function _() {
      const C = e.pageNumber + 1;
      if (C > f.value) return g(e.pageNumber);
      if (s.value.includes(C))
        return g(C);
      V(C);
    }
    function b() {
      const C = e.pageNumber - 1;
      if (C < 1) return g(e.pageNumber);
      if (s.value.includes(C))
        return g(C);
      V(C);
    }
    function x() {
      const C = e.pageNumber + 5;
      if (C > f.value) return g(f.value);
      V(C);
    }
    function z() {
      const C = e.pageNumber - 5;
      if (C < 1) return g(1);
      V(C);
    }
    return (C, Q) => {
      const G = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(t).b()]),
        style: normalizeStyle({
          "--im-pagination-size": v.value
        })
      }, [
        C.layout.includes("total") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(t).e("total")])
        }, " 共 " + toDisplayString(C.total) + " 条数据 ", 3)) : createCommentVNode("", true),
        C.layout.includes("prev") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(t).e("prev"), unref(t).is("disabled", u.value)]),
          "aria-disabled": u.value,
          onClick: b
        }, [
          createVNode(unref(O), {
            name: "left",
            size: "14px"
          })
        ], 10, No)), [
          [G, !u.value]
        ]) : createCommentVNode("", true),
        C.layout.includes("pager") ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(t).e("pager")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (U) => (openBlock(), createElementBlock(Fragment, null, [
            U === "left" ? (openBlock(), createElementBlock("div", {
              key: 0,
              title: "向前5页",
              class: normalizeClass([unref(t).e("page-item"), unref(t).e("left")]),
              onClick: z
            }, [
              createVNode(unref(O), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(O), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : U !== "right" ? withDirectives((openBlock(), createElementBlock("div", {
              key: 1,
              onClick: () => g(U),
              class: normalizeClass([
                unref(t).e("page-item"),
                unref(t).is("active", U === e.pageNumber)
              ]),
              title: String(U)
            }, [
              createTextVNode(toDisplayString(U), 1)
            ], 10, Ao)), [
              [G, true]
            ]) : U === "right" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass([unref(t).e("page-item"), unref(t).e("right")]),
              title: "向后5页",
              onClick: x
            }, [
              createVNode(unref(O), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(O), {
                name: "arrowright",
                class: "im-icon--arrowright"
              })
            ], 2)) : createCommentVNode("", true)
          ], 64))), 256))
        ], 2)) : createCommentVNode("", true),
        C.layout.includes("next") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(t).e("next"), unref(t).is("disabled", d.value)]),
          "aria-disabled": d.value,
          onClick: _
        }, [
          createVNode(unref(O), {
            name: "right",
            size: "14px"
          })
        ], 10, Eo)), [
          [G, !d.value]
        ]) : createCommentVNode("", true),
        C.layout.includes("sizes") ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass([unref(t).e("size")])
        }, [
          createVNode(unref(Ze), {
            options: r.value,
            modelValue: i.value,
            "onUpdate:modelValue": Q[0] || (Q[0] = (U) => i.value = U),
            size: e.size,
            scrollClose: ""
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var Po = A(Mo, [["__scopeId", "data-v-661df4df"]]);
var Ro = F("ImPagination", Po);
var Do = defineComponent({
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
  setup(a, { emit: n }) {
    const t = N("tooltip"), o = ref(null), e = ref(false), i = n, s = a;
    onMounted(() => {
      c();
    }), watch(
      () => s.modelValue,
      (b) => {
        e.value = b;
      }
    ), watch(
      () => e.value,
      () => {
        c();
      }
    );
    function c() {
      document.removeEventListener("click", v, { capture: true }), e.value && document.addEventListener("click", v, {
        passive: true,
        capture: true
      });
    }
    function v(b) {
      if (e.value) {
        const x = b.target, z = o.value;
        if (x === z || z != null && z.contains(x) || x.classList.contains("is-disabled")) return;
        f(false);
      }
    }
    const f = Ce((b) => {
      b ? V() : _();
    }, 100);
    function u() {
      (!s.trigger || s.trigger === "hover") && f(true);
    }
    function d() {
      (!s.trigger || s.trigger === "hover") && f(false);
    }
    function r() {
      e.value || f(true);
    }
    function g() {
      return o.value;
    }
    function V() {
      e.value = true, i("update:modelValue", e.value), i("change", e.value);
    }
    function _() {
      e.value = false, i("update:modelValue", e.value), i("change", e.value);
    }
    return (b, x) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(t).b()]),
      ref_key: "triggerRef",
      ref: o,
      onMouseenter: u,
      onMouseleave: d,
      onClick: r
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode(ze, {
        visible: e.value,
        customClass: unref(t).e("wrapper"),
        placement: s.placement,
        offset: s.offset,
        "z-index": s.zIndex,
        getTriggerContainer: g,
        arrow: s.arrow,
        scrollClose: s.scrollClose,
        onClose: _,
        onMouseenter: u,
        onMouseleave: d,
        role: "tooltip"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([unref(t).e("content")])
          }, [
            renderSlot(b.$slots, "content", {}, () => [
              createTextVNode(toDisplayString(s.content), 1)
            ], true)
          ], 2)
        ]),
        _: 3
      }, 8, ["visible", "customClass", "placement", "offset", "z-index", "arrow", "scrollClose"])
    ], 34));
  }
});
var Oo = A(Do, [["__scopeId", "data-v-f51e979f"]]);
var Fo = F("ImTooltip", Oo);
var Yo = defineComponent({
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
  setup(a, { emit: n }) {
    const t = N("popover"), o = ref(null), e = ref(false), i = n, s = a;
    onMounted(() => {
      c();
    }), watch(
      () => s.modelValue,
      (b) => {
        e.value = b;
      }
    ), watch(
      () => e.value,
      () => {
        c();
      }
    );
    function c() {
      document.removeEventListener("click", v, { capture: true }), e.value && document.addEventListener("click", v, {
        passive: true,
        capture: true
      });
    }
    function v(b) {
      if (e.value) {
        const x = b.target, z = o.value;
        if (x === z || z != null && z.contains(x) || x.classList.contains("is-disabled")) return;
        f(false);
      }
    }
    const f = Ce((b) => {
      b ? V() : _();
    }, 100);
    function u() {
      (!s.trigger || s.trigger === "hover") && f(true);
    }
    function d() {
      (!s.trigger || s.trigger === "hover") && f(false);
    }
    function r() {
      e.value || f(true);
    }
    function g() {
      return o.value;
    }
    function V() {
      e.value = true, i("update:modelValue", e.value), i("change", e.value);
    }
    function _() {
      e.value = false, i("update:modelValue", e.value), i("change", e.value);
    }
    return (b, x) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(t).b()]),
      ref_key: "triggerRef",
      ref: o,
      onMouseenter: u,
      onMouseleave: d,
      onClick: r
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode(ze, {
        visible: e.value,
        customClass: unref(t).e("wrapper"),
        placement: s.placement,
        offset: s.offset,
        "z-index": s.zIndex,
        getTriggerContainer: g,
        arrow: s.arrow,
        scrollClose: s.scrollClose,
        onClose: _,
        onMouseenter: u,
        onMouseleave: d,
        role: "tooltip"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([unref(t).e("content")])
          }, [
            s.title || b.$slots.title ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(t).e("title")])
            }, [
              renderSlot(b.$slots, "title", {}, () => [
                createTextVNode(toDisplayString(s.title), 1)
              ], true)
            ], 2)) : createCommentVNode("", true),
            s.content || b.$slots.content ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass([unref(t).e("body")])
            }, [
              renderSlot(b.$slots, "content", {}, () => [
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
var Ho = A(Yo, [["__scopeId", "data-v-807c7fd8"]]);
var Wo = F("ImPopover", Ho);
var qo = defineComponent({
  name: "ImBadge",
  __name: "ImBadge",
  props: {
    value: { default: void 0 },
    size: { default: "16px" },
    color: { default: "" },
    dot: { type: Boolean, default: false }
  },
  setup(a) {
    const n = N("badge"), t = a, o = computed(() => te(t.size));
    return (e, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(n).b(),
        t.color && unref(n).m(t.color),
        unref(n).is("dot", t.dot)
      ]),
      style: normalizeStyle({
        "--im-badge-size": o.value
      })
    }, [
      renderSlot(e.$slots, "default", {}, void 0, true),
      createBaseVNode("sub", {
        class: normalizeClass([unref(n).e("content")])
      }, [
        t.dot ? createCommentVNode("", true) : renderSlot(e.$slots, "content", { key: 0 }, () => [
          createTextVNode(toDisplayString(t.value), 1)
        ], true)
      ], 2)
    ], 6));
  }
});
var Xo = A(qo, [["__scopeId", "data-v-5cfbc3c5"]]);
var jo = F("ImBadge", Xo);
var Uo = defineComponent({
  name: "ImBackTop",
  __name: "ImBackTop",
  props: {
    getTarget: { type: Function, default: () => null },
    visibleHeight: { default: 200 },
    zIndex: { default: void 0 },
    right: { default: "20px" },
    bottom: { default: "20px" }
  },
  setup(a) {
    const n = N("back-top"), t = ref(false);
    let o = null;
    const { zIndexToken: e } = ae(), i = a, s = computed(() => ({
      zIndex: i.zIndex || e.value || 1e3,
      right: te(i.right),
      bottom: te(i.bottom)
    }));
    onMounted(() => {
      var r;
      o = ((r = i.getTarget) == null ? void 0 : r.call(i)) || window, u(), f();
    }), onUnmounted(() => {
      d();
    });
    function c() {
      o && o.scrollTo({ top: 0, behavior: "smooth", left: 0 });
    }
    function v() {
      if (!o) return;
      const r = o.scrollTop || o.pageYOffset || 0;
      t.value = r > i.visibleHeight;
    }
    const f = we(v, 100);
    function u() {
      o && (d(), o.addEventListener("scroll", f, {
        passive: true
      }));
    }
    function d() {
      o && o.removeEventListener("scroll", f);
    }
    return (r, g) => (openBlock(), createBlock(Transition, {
      name: "fade",
      mode: "out-in"
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(n).b()]),
          onClick: c,
          style: normalizeStyle(s.value)
        }, [
          renderSlot(r.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, t.value]
        ])
      ]),
      _: 3
    }));
  }
});
var Go = A(Uo, [["__scopeId", "data-v-f8ee14ab"]]);
var Ko = F("ImBackTop", Go);
var Jo = defineComponent({
  name: "ImCollapse",
  __name: "ImCollapse",
  props: {
    title: { default: "" },
    desc: { default: "" },
    modelValue: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: n }) {
    const t = N("collapse");
    return ref(a.modelValue || false), (e, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var Qo = A(Jo, [["__scopeId", "data-v-aa065b44"]]);
var Zo = defineComponent({
  name: "ImCollapseItem",
  __name: "ImCollapseItem",
  props: {
    title: { default: "" },
    desc: { default: "" },
    modelValue: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: n }) {
    const t = N("collapse-item"), o = n, e = a, i = ref(e.modelValue || false);
    function s() {
      i.value = !i.value, o("update:modelValue", i.value), o("change", i.value);
    }
    async function c(u, d) {
      const r = u.getBoundingClientRect();
      u.style.height = "0px", u.style.transition = "all 0.3s ease", await new Promise((g) => requestAnimationFrame(g)), u.style.height = `${r.height}px`, d();
    }
    function v(u) {
    }
    async function f(u, d) {
      u.style.transition = "all 0.3s ease", u.style.height = "0px", d(), await new Promise((r) => requestAnimationFrame(r)), u.style.height = "auto";
    }
    return (u, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      createBaseVNode("div", {
        class: normalizeClass([unref(t).e("title")]),
        onClick: s
      }, [
        renderSlot(u.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(e.title), 1)
        ], true)
      ], 2),
      createVNode(Transition, {
        css: false,
        mode: "out-in",
        duration: { enter: 300, leave: 300 },
        onEnter: c,
        onAfterEnter: v,
        onLeave: f
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            class: normalizeClass([unref(t).e("content")])
          }, [
            createBaseVNode("div", {
              class: normalizeClass([unref(t).e("desc")])
            }, [
              renderSlot(u.$slots, "default", {}, () => [
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
var ea = A(Zo, [["__scopeId", "data-v-44faecf8"]]);
var ta = F("ImCollapseItem", ea);
var oa = F("ImCollapse", Qo);
var aa = defineComponent({
  name: "ImInputNumber",
  __name: "InputNumber",
  props: {
    controlRight: { type: Boolean },
    modelValue: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    placeholder: {},
    type: {},
    name: {},
    id: {},
    maxlength: {},
    minlength: {},
    max: {},
    min: {},
    step: {},
    pattern: {},
    required: { type: Boolean },
    autocomplete: {},
    autofocus: { type: Boolean },
    tabindex: {},
    precision: {},
    size: {},
    prefix: {},
    suffix: {},
    clearable: { type: Boolean },
    showPassword: { type: Boolean },
    showWordCount: { type: Boolean },
    prepend: {},
    append: {}
  },
  emits: ["update:modelValue", "change", "clear", "focus", "blur"],
  setup(a, { expose: n, emit: t }) {
    const o = a, e = t, i = ref(null), s = ref(o.modelValue), c = N("input-number"), v = computed(() => o.disabled || o.readonly), f = computed(() => {
      const _ = Number(o.min);
      return he(_) && s.value <= _ || v.value;
    }), u = computed(() => {
      const _ = Number(o.max);
      return he(_) && s.value >= _ || v.value;
    });
    watch(
      () => o.modelValue,
      () => {
        s.value = o.modelValue;
      }
    ), n({
      $el: i,
      focus: () => {
        var _;
        return (_ = i.value) == null ? void 0 : _.focus();
      },
      blur: () => {
        var _;
        return (_ = i.value) == null ? void 0 : _.blur();
      },
      // @ts-ignore
      getInput: () => i.value.$el
    });
    const d = (_) => o.precision === 0 ? Math.round(+_) : parseFloat(Number(_).toFixed(o.precision || 0));
    function r() {
      const _ = parseFloat(String(o.step || 1)), b = +s.value + _;
      V(d(b));
    }
    function g() {
      const _ = parseFloat(String(o.step || 1)), b = s.value - _;
      V(d(b));
    }
    function V(_) {
      let b = parseFloat(String(_));
      const x = he(Number(o.min)) ? Number(o.min) : -1 / 0, z = he(Number(o.max)) ? Number(o.max) : 1 / 0;
      Number.isNaN(b) && (b = 0), b < x && (b = x), b > z && (b = z), s.value = b, e("update:modelValue", b), e("change", b);
    }
    return (_, b) => {
      const x = resolveDirective("ripple");
      return openBlock(), createBlock(Ne, mergeProps({
        class: [unref(c).b(), unref(c).is("control-right", o.controlRight)]
      }, o, {
        type: "number",
        modelValue: s.value,
        "onUpdate:modelValue": b[0] || (b[0] = (z) => s.value = z),
        onChange: V,
        onFocus: b[1] || (b[1] = () => e("focus")),
        onBlur: b[2] || (b[2] = () => e("blur")),
        onClear: b[3] || (b[3] = () => e("clear"))
      }), {
        prefix: withCtx(() => [
          o.controlRight ? createCommentVNode("", true) : withDirectives((openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(c).e("decrease"), unref(c).is("disabled", f.value)]),
            onClick: g
          }, [
            createVNode(unref(O), {
              name: "minus",
              size: "1.1em"
            })
          ], 2)), [
            [x, !f.value]
          ]),
          renderSlot(_.$slots, "prefix", {}, () => [
            o.prefix ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(c).e("prefix")])
            }, toDisplayString(o.prefix), 3)) : createCommentVNode("", true)
          ], true)
        ]),
        suffix: withCtx(() => [
          renderSlot(_.$slots, "suffix", {}, () => [
            o.suffix ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(c).e("suffix")])
            }, toDisplayString(o.suffix), 3)) : createCommentVNode("", true)
          ], true),
          o.controlRight ? createCommentVNode("", true) : withDirectives((openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(c).e("increase"), unref(c).is("disabled", u.value)]),
            onClick: r
          }, [
            createVNode(unref(O), {
              name: "plus",
              size: "1.1em"
            })
          ], 2)), [
            [x, !u.value]
          ]),
          o.controlRight ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(c).e("control-right")])
          }, [
            withDirectives((openBlock(), createElementBlock("span", {
              class: normalizeClass([unref(c).e("up"), unref(c).is("disabled", u.value)]),
              onClick: r
            }, [
              createVNode(unref(O), {
                name: "up",
                size: "0.9em"
              })
            ], 2)), [
              [x, !u.value]
            ]),
            createBaseVNode("span", {
              class: normalizeClass([unref(c).e("control-divider")])
            }, null, 2),
            withDirectives((openBlock(), createElementBlock("span", {
              onClick: g,
              class: normalizeClass([unref(c).e("down"), unref(c).is("disabled", f.value)])
            }, [
              createVNode(unref(O), {
                name: "down",
                size: "0.9em"
              })
            ], 2)), [
              [x, !f.value]
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16, ["class", "modelValue"]);
    };
  }
});
var na = A(aa, [["__scopeId", "data-v-0f29ae09"]]);
var sa = F("ImInputNumber", na);
var la = [
  Te,
  Se,
  Le,
  Ae,
  O,
  ke,
  Dt,
  Yt,
  jt,
  Ut,
  eo,
  so,
  lo,
  uo,
  Re,
  yo,
  wo,
  $o,
  Ro,
  Ze,
  Qe,
  Fo,
  Wo,
  jo,
  Ko,
  oa,
  ta,
  sa
];
var ia = (a, n) => {
  a.provide(Ue, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), a.directive("ripple", mt), a.directive("loading", ht), la.forEach((t) => {
    t.name ? a.component(t.name, t) : console.warn(`组件${t}缺少name属性`);
  });
};
var ma = {
  install: ia
};
export {
  Yt as ImAlert,
  Dt as ImAnchor,
  uo as ImAvatar,
  Ko as ImBackTop,
  jo as ImBadge,
  jt as ImBreadcrumb,
  Ut as ImBreadcrumbItem,
  Te as ImButton,
  wo as ImCard,
  Se as ImCol,
  oa as ImCollapse,
  ta as ImCollapseItem,
  $o as ImDialog,
  ke as ImDivider,
  yo as ImDrawer,
  eo as ImDropdown,
  O as ImIcon,
  Ae as ImInput,
  sa as ImInputNumber,
  so as ImList,
  lo as ImListItem,
  Re as ImMask,
  Ro as ImPagination,
  Wo as ImPopover,
  Le as ImRow,
  Ze as ImSelect,
  Qe as ImTag,
  Fo as ImTooltip,
  ma as default,
  da as useImLoading,
  ua as useImMessage
};
//# sourceMappingURL=im-design.js.map
