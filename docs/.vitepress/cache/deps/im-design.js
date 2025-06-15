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
  resolveComponent,
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

// node_modules/.pnpm/im-design@0.0.53/node_modules/im-design/dist/im-design.js
var et = Object.defineProperty;
var De = (o) => {
  throw TypeError(o);
};
var tt = (o, n, t) => n in o ? et(o, n, { enumerable: true, configurable: true, writable: true, value: t }) : o[n] = t;
var fe = (o, n, t) => tt(o, typeof n != "symbol" ? n + "" : n, t);
var Oe = (o, n, t) => n.has(o) || De("Cannot " + t);
var oe = (o, n, t) => (Oe(o, n, "read from private field"), t ? t.call(o) : n.get(o));
var Ve = (o, n, t) => n.has(o) ? De("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(o) : n.set(o, t);
var ve = (o, n, t, a) => (Oe(o, n, "write to private field"), a ? a.call(o, t) : n.set(o, t), t);
var Ue = Symbol("im-design-token");
var ue;
var ut = class {
  constructor() {
    Ve(this, ue);
    ve(this, ue, []);
  }
  async add(n) {
    oe(this, ue).push(n);
  }
  remove() {
    try {
      const n = oe(this, ue).shift();
      n && this.run(n);
    } catch (n) {
      console.error(n);
    }
  }
  async run(n) {
    try {
      const t = n.querySelector(".im-ripple__item");
      if (!t) return;
      let a = Date.now(), e = t.getAttribute("data-time");
      const r = a - Number(e) || 0;
      r && await new Promise((s) => {
        t.style.opacity = "0.1";
        const d = 200 - r;
        setTimeout(
          () => {
            s(null);
          },
          d > 0 ? d : 0
        );
      }), t.style.opacity = "0", t.style.transition = "all 50ms", setTimeout(() => {
        n && (n == null || n.remove()), oe(this, ue).length && this.remove();
      }, 50);
    } catch (t) {
      console.log(t);
    }
  }
};
ue = /* @__PURE__ */ new WeakMap();
var Te = "data-ripple";
async function dt(o, n, t) {
  const a = window.getComputedStyle(t), e = t.getBoundingClientRect(), r = document.createElement("div");
  r.className = "im-ripple", n.add(r);
  const s = document.createElement("div");
  s.className = "im-ripple__item";
  const d = o.clientX || o.touches && o.touches[0].clientX, g = o.clientY || o.touches && o.touches[0].clientY, m = Math.max(e.width, e.height), c = d - e.left - m / 2, u = g - e.top - m / 2, i = e.width - e.height <= 5;
  Object.assign(s.style, {
    "background-color": a.color,
    width: `${m}px`,
    height: `${m}px`,
    left: `${c}px`,
    top: `${u}px`,
    opacity: "0.15",
    transform: i ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), s.setAttribute("data-time", Date.now() + ""), r.appendChild(s), t.appendChild(r);
  const v = a.position;
  v === "static" && (t.style.position = "relative", t.dataset.originalPosition = v), s.getBoundingClientRect(), s.style.transform = "scale(2.8)", s.style.opacity = "0.33";
}
function He(o, n) {
  n.value ? o.setAttribute(Te, "on") : o.setAttribute(Te, "off");
}
function mt(o) {
  return o.getAttribute(Te) === "on";
}
var pt = {
  mounted(o, n) {
    He(o, n);
    const t = new ut(), a = (d) => {
      mt(o) && dt(d, t, o);
    }, e = () => {
      t.remove();
    }, r = () => {
      o.addEventListener("mousedown", a, { passive: true }), window.addEventListener("mouseup", e, { passive: true });
    }, s = () => {
      o.removeEventListener("mousedown", a), window.removeEventListener("mouseup", e);
    };
    r(), o._rippleListeners = { remove: s };
  },
  beforeUnmount(o) {
    var n;
    (n = o._rippleListeners) == null || n.remove();
  },
  updated(o, n) {
    He(o, n);
  }
};
var N = (o) => {
  const n = "im-" + o;
  return {
    b: () => n,
    e: (t) => `${n}__${t}`,
    m: (t) => `${n}--${t}`,
    is: (t, a) => a ? `is-${t}` : ""
  };
};
var ft = Object.prototype.toString;
var vt = (o) => ft.call(o) === "[object Number]";
var Ie = (o, n) => {
  let t;
  return function(...a) {
    t || (t = setTimeout(() => {
      o.apply(this, a), t = null;
    }, n));
  };
};
var Ce = (o, n) => {
  let t;
  return function(...a) {
    t && clearTimeout(t), t = setTimeout(() => {
      o.apply(this, a);
    }, n);
  };
};
var gt = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"];
var Z = (o) => {
  if (typeof o == "number") return `${o}px`;
  const n = String(o);
  return o ? gt.some((t) => n.includes(t)) ? n : `${o}px` : "";
};
var ge = (o) => o != null && !Number.isNaN(o) && vt(o);
var ht = defineComponent({
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
    const n = N("loading"), t = o, a = computed(() => Z(t.size));
    return (e, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(n).b(),
        t.customClass,
        unref(n).is("fullscreen", t.fullscreen),
        unref(n).is("mask", t.mask)
      ]),
      style: normalizeStyle({
        "--im-loading-size": a.value
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
        }, r[0] || (r[0] = [
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
var S = (o, n) => {
  const t = o.__vccOpts || o;
  for (const [a, e] of n)
    t[a] = e;
  return t;
};
var Ge = S(ht, [["__scopeId", "data-v-8ece8f88"]]);
function he(o, n) {
  ye(o);
  const t = createApp(Ge, {
    loading: true,
    fullScreen: false,
    loadingText: n
  }), a = document.createElement("div"), e = window.getComputedStyle(o);
  e.overflow !== "hidden" && (o.dataset.overflow = e.overflow, o.style.overflow = "hidden"), e.position === "static" && (o.dataset.position = e.position, o.style.position = "relative"), o.appendChild(a), t.mount(a), o.IM_LOADING_INSTANCE = t;
}
function ye(o) {
  const n = o == null ? void 0 : o.IM_LOADING_INSTANCE;
  if (n)
    try {
      n.unmount(), n._container.remove(), o.IM_LOADING_INSTANCE = null, o.dataset.overflow && (o.style.overflow = o.dataset.overflow, delete o.dataset.overflow), o.dataset.position && (o.style.position = o.dataset.position, delete o.dataset.position);
    } catch (t) {
      console.error(t);
    }
}
var bt = {
  mounted(o, n) {
    var t, a;
    if (typeof n.value == "boolean")
      return n.value && he(o);
    (t = n.value) != null && t.loading && he(o, (a = n.value) == null ? void 0 : a.loadingText);
  },
  beforeUnmount(o) {
    ye(o);
  },
  updated(o, n) {
    var t, a;
    if (typeof n.value == "boolean")
      return n.value ? he(o) : ye(o);
    (t = n.value) != null && t.loading ? he(o, (a = n.value) == null ? void 0 : a.loadingText) : ye(o);
  }
};
var yt = defineComponent({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    size: { default: 16 },
    name: {},
    color: { default: "currentColor" }
  },
  setup(o) {
    const n = o, t = computed(() => Z(n.size));
    return (a, e) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(["im-icon", [`im-icon-${n.name}`]]),
      style: normalizeStyle({
        "--icon-size": t.value,
        "--icon-color": n.color
      })
    }, null, 6));
  }
});
var H = S(yt, [["__scopeId", "data-v-a82dfaa3"]]);
H.install = function(o) {
  o.component("ImIcon", H);
};
var _t = ["data-index", "onMouseenter", "onMouseleave"];
var It = { class: "im-message__text" };
var wt = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(o, { expose: n }) {
    const t = N("message"), a = o, e = ref([]);
    let r = null;
    watch(() => e.value, () => {
      e.value.length === 0 ? r = setTimeout(() => {
        !e.value.length && a.callback();
      }, 500) : (r && clearTimeout(r), r = null);
    });
    const s = (c) => {
      switch (c) {
        case "success":
          return "check-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "error":
          return "close-circle-fill";
        default:
          return "info-circle-fill";
      }
    }, d = (c) => {
      c.timer && (clearTimeout(c.timer), c.timer = null);
    }, g = (c) => {
      c.timer && clearTimeout(c.timer), c.timer = setTimeout(() => {
        e.value = e.value.filter((u) => u.id !== c.id);
      }, c.duration || 3e3);
    }, m = (c) => {
      const u = setTimeout(() => {
        e.value = e.value.filter((i) => i.id !== c.id);
      }, c.duration || 3e3);
      e.value.push({ ...c, timer: u });
    };
    return a.add && a.add(m), n({ addMsg: m }), (c, u) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(t).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (i) => (openBlock(), createElementBlock("li", {
          key: i.id,
          "data-index": i.id,
          onMouseenter: () => d(i),
          onMouseleave: () => g(i),
          class: normalizeClass(["im-message__item", [unref(t).e("item"), i.color ? unref(t).e(i.color) : ""]])
        }, [
          createVNode(unref(H), {
            name: s(i.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", It, toDisplayString(i.msg), 1)
        ], 42, _t))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var kt = S(wt, [["__scopeId", "data-v-820c83a9"]]);
var xt = class {
  constructor() {
    fe(this, "app");
    fe(this, "container");
    fe(this, "addMsgToList");
    this.app = null, this.container = null, this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    if (typeof window < "u" && window) {
      this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
      const n = this;
      this.app = createApp(kt, {
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
var Io = () => (K || (K = new xt()), {
  info: (o, n = 3e3) => {
    K == null || K.info(o, n);
  },
  success: (o, n = 3e3) => {
    K == null || K.success(o, n);
  },
  warning: (o, n = 3e3) => {
    K == null || K.warning(o, n);
  },
  error: (o, n = 3e3) => {
    K == null || K.error(o, n);
  }
});
var te;
var Ct = class {
  constructor() {
    Ve(this, te);
    ve(this, te, null);
  }
  setLoading(n, t) {
    n ? this.createLoading(t) : this.closeLoading();
  }
  createLoading(n = {}) {
    this.closeLoading(), ve(this, te, createApp(Ge, {
      ...n,
      loading: true,
      fullscreen: true
    }));
    const t = document.createElement("div");
    t.setAttribute("class", "im-loading-container"), document.body.appendChild(t), oe(this, te).mount(t);
  }
  closeLoading() {
    oe(this, te) && (oe(this, te).unmount(), oe(this, te)._container && document.body.removeChild(oe(this, te)._container));
  }
};
te = /* @__PURE__ */ new WeakMap();
var Fe = new Ct();
var wo = () => ({
  show(o) {
    Fe.setLoading(true, o);
  },
  hide() {
    Fe.setLoading(false);
  }
});
var ae = (o, n) => {
  const t = inject(Ue), a = ref(Number(t.size || 36)), e = ref(t.zIndex || 1e3);
  return { sizeToken: a, zIndexToken: e };
};
var zt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function $t(o, n) {
  return openBlock(), createElementBlock("svg", zt, n[0] || (n[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var Bt = { render: $t };
var Vt = ["tabindex", "type", "disabled"];
var Tt = defineComponent({
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
  setup(o, { expose: n, emit: t }) {
    const a = o, e = t, r = N("button"), { sizeToken: s } = ae(), d = useAttrs(), g = computed(() => [
      r.b(),
      a.color && r.m(a.color),
      a.shape && r.m(a.shape),
      a.variant && r.m(a.variant),
      r.is("disabled", a.disabled),
      r.is("loading", a.loading)
    ].filter(Boolean)), m = ref(), c = computed(() => {
      let v = +(a.size || s.value || 36);
      return {
        "--im-button-size": v + "px",
        "--im-button-padding": (v * 0.45).toFixed(0) + "px",
        width: a.width
      };
    });
    n({
      ref: m,
      $el: m,
      focus: () => {
        var v;
        return (v = m.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = m.value) == null ? void 0 : v.blur();
      }
    });
    const u = computed(() => a.loading && ["square", "circle"].includes(a.shape)), i = () => {
      a.disabled || a.loading || e("click");
    };
    return (v, $) => {
      const _ = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", mergeProps(unref(d), {
        class: g.value,
        onClick: i,
        ref_key: "buttonRef",
        ref: m,
        style: c.value,
        tabindex: a.tabindex || 0,
        type: a.type || "button",
        disabled: a.disabled || a.loading
      }), [
        a.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(r).e("loading")])
        }, [
          createVNode(unref(Bt))
        ], 2)) : createCommentVNode("", true),
        u.value ? createCommentVNode("", true) : renderSlot(v.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(a.text), 1)
        ], true)
      ], 16, Vt)), [
        [_, true]
      ]);
    };
  }
});
var Le = S(Tt, [["__scopeId", "data-v-a3d92bde"]]);
Le.install = (o) => {
  o.component("ImButton", Le);
};
var Lt = defineComponent({
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
    const n = o, t = useSlots(), a = computed(() => {
      var r;
      return ((r = t.default) == null ? void 0 : r.call(t)) || [];
    }), e = N("row");
    return (r, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (d, g) => (openBlock(), createBlock(resolveDynamicComponent(d), { key: g }))), 128))
    ], 6));
  }
});
var Ae = S(Lt, [["__scopeId", "data-v-5179967f"]]);
var At = defineComponent({
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
    const n = o, t = N("col"), a = computed(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (e, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()]),
      style: normalizeStyle({
        "--im-col-w": a.value,
        "--im-col-offset": n.offset
      })
    }, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var Ne = S(At, [["__scopeId", "data-v-ecf91058"]]);
Ae.install = (o) => {
  o.component("ImRow", Ae);
};
Ne.install = (o) => {
  o.component("ImCol", Ne);
};
var Nt = ["disabled", "readonly", "placeholder", "name", "type", "max", "min", "maxlength", "minlength", "step", "pattern", "autocomplete", "autofocus", "tabindex", "id", "value"];
var St = defineComponent({
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
  setup(o, { expose: n, emit: t }) {
    const a = o, e = ref(null), { sizeToken: r } = ae(), s = t, d = ref(a.modelValue), g = N("input"), m = computed(
      () => Z(a.size || r.value || 36)
    );
    watch(
      () => a.modelValue,
      () => {
        d.value = a.modelValue;
      }
    ), n({
      $el: e,
      focus: () => {
        var i;
        return (i = e.value) == null ? void 0 : i.focus();
      },
      blur: () => {
        var i;
        return (i = e.value) == null ? void 0 : i.blur();
      }
    });
    const c = (i) => {
      const v = i.target;
      d.value = v.value, s("update:modelValue", d.value), s("change", d.value);
    };
    function u(i) {
      i.stopPropagation(), d.value = "", s("update:modelValue", d.value), s("change", d.value), s("clear");
    }
    return (i, v) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(g).b(),
        unref(g).is("disabled", a.disabled),
        unref(g).is("readonly", a.readonly),
        unref(g).is("has-append", a.isAppend),
        unref(g).is("has-prepend", a.isPrepend)
      ]),
      style: normalizeStyle({
        "--im-input-size": m.value
      })
    }, [
      renderSlot(i.$slots, "prefix", {}, () => [
        a.prefix ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(g).e("prefix")])
        }, toDisplayString(a.prefix), 3)) : createCommentVNode("", true)
      ], true),
      createBaseVNode("input", {
        class: normalizeClass([unref(g).e("input")]),
        ref_key: "inputRef",
        ref: e,
        disabled: a.disabled,
        readonly: a.readonly,
        placeholder: a.placeholder,
        name: a.name,
        type: a.type,
        max: a.max,
        min: a.min,
        maxlength: a.maxlength,
        minlength: a.minlength,
        step: a.step,
        pattern: a.pattern,
        autocomplete: a.autocomplete,
        autofocus: a.autofocus,
        tabindex: a.tabindex,
        id: a.id,
        value: d.value,
        onInput: c,
        onFocus: v[0] || (v[0] = () => s("focus")),
        onBlur: v[1] || (v[1] = () => s("blur"))
      }, null, 42, Nt),
      withDirectives(createBaseVNode("span", {
        class: normalizeClass([unref(g).e("clearable")])
      }, [
        createVNode(H, {
          name: "close-circle",
          size: "1.2em",
          onClick: u
        })
      ], 2), [
        [vShow, a.clearable && d.value && !(a.disabled || a.readonly)]
      ]),
      renderSlot(i.$slots, "suffix", {}, () => [
        a.prefix ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(g).e("suffix")])
        }, toDisplayString(a.suffix), 3)) : createCommentVNode("", true)
      ], true)
    ], 6));
  }
});
var Se = S(St, [["__scopeId", "data-v-41a2aed9"]]);
var Mt = defineComponent({
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
  setup(o, { expose: n, emit: t }) {
    const a = useSlots(), e = o, r = t, s = ref(null), d = ref(e.modelValue), g = N("input-wrapper"), m = computed(() => Z(e.size || 36)), c = computed(() => {
      var i;
      return !!(e.prepend || (i = a.prepend) != null && i.call(a));
    }), u = computed(() => {
      var i;
      return !!(e.append || (i = a.append) != null && i.call(a));
    });
    return watch(
      () => e.modelValue,
      () => {
        d.value = e.modelValue;
      }
    ), watch(d, () => {
      r("update:modelValue", d.value), r("change", d.value);
    }), n({
      $el: s,
      focus: () => {
        var i;
        return (i = s.value) == null ? void 0 : i.focus();
      },
      blur: () => {
        var i;
        return (i = s.value) == null ? void 0 : i.blur();
      },
      // @ts-ignore
      getInput: () => s.value.$el
    }), (i, v) => c.value || u.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass([unref(g).b()]),
      style: normalizeStyle({
        "--im-input-wrapper-size": m.value
      })
    }, [
      c.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(g).e("prepend")])
      }, [
        renderSlot(i.$slots, "prepend", {}, () => [
          createTextVNode(toDisplayString(e.prepend), 1)
        ], true)
      ], 2)) : createCommentVNode("", true),
      createVNode(Se, mergeProps(e, {
        modelValue: d.value,
        "onUpdate:modelValue": v[0] || (v[0] = ($) => d.value = $),
        ref_key: "inputRef",
        ref: s,
        size: m.value,
        isPrepend: c.value,
        isAppend: u.value
      }), createSlots({
        suffix: withCtx(() => [
          renderSlot(i.$slots, "suffix", {}, () => [
            createTextVNode(toDisplayString(e.suffix), 1)
          ], true)
        ]),
        _: 2
      }, [
        i.$slots.prefix || e.prefix ? {
          name: "prefix",
          fn: withCtx(() => [
            renderSlot(i.$slots, "prefix", {}, () => [
              createTextVNode(toDisplayString(e.prefix), 1)
            ], true)
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["modelValue", "size", "isPrepend", "isAppend"]),
      u.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass([unref(g).e("append")])
      }, [
        renderSlot(i.$slots, "append", {}, () => [
          createTextVNode(toDisplayString(e.append), 1)
        ], true)
      ], 2)) : createCommentVNode("", true)
    ], 6)) : (openBlock(), createBlock(Se, mergeProps({ key: 1 }, e, {
      modelValue: d.value,
      "onUpdate:modelValue": v[1] || (v[1] = ($) => d.value = $),
      size: m.value,
      ref_key: "inputRef",
      ref: s
    }), {
      prefix: withCtx(() => [
        renderSlot(i.$slots, "prefix", {}, void 0, true)
      ]),
      suffix: withCtx(() => [
        renderSlot(i.$slots, "suffix", {}, void 0, true)
      ]),
      _: 3
    }, 16, ["modelValue", "size"]));
  }
});
var Me = S(Mt, [["__scopeId", "data-v-e056ad34"]]);
Me.install = (o) => {
  o.component("ImInput", Me);
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
  setup(o) {
    const n = N("divider"), t = o;
    return (a, e) => (openBlock(), createElementBlock("div", {
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
        renderSlot(a.$slots, "default", {}, void 0, true)
      ], 2))
    ], 6));
  }
});
var we = S(Et, [["__scopeId", "data-v-108f9bec"]]);
we.name = "ImDivider";
we.install = function(o) {
  o.component("ImDivider", we);
};
var R = (o, n) => (n.install = (t) => {
  t.component(o, n);
}, n);
var Pt = ["onClick"];
var Rt = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(o) {
    const n = N("anchor");
    let t = null;
    const a = ref(null), e = ref(null), r = ref(null), s = o;
    watch(
      () => s.target,
      () => {
        t && t(), t = m();
      }
    ), onMounted(() => {
      t = m();
    }), onUnmounted(() => {
      t && t();
    });
    function d(u) {
      let i = u == null ? void 0 : u.scrollTop;
      return a.value === window && (i = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), i;
    }
    function g(u) {
      var b;
      if (r.value || !a.value) return;
      const i = a.value === window ? u.target : a.value;
      let v = d(i);
      const $ = i.offsetTop || 0, _ = (s.data || []).map(({ id: x }) => {
        const B = document.getElementById(x);
        return B ? {
          id: x,
          offsetTop: B.offsetTop - $,
          el: B
        } : null;
      }).filter(Boolean);
      e.value = null;
      for (let x = 0; x < _.length; x++) {
        const B = _[x];
        if (v >= B.offsetTop - (s.offset || 0) && v <= B.offsetTop + (((b = B.el) == null ? void 0 : b.clientHeight) || 0) - (s.offset || 0)) {
          e.value = B.id;
          return;
        }
      }
      if (!e.value && v >= (parseInt(String(s.offset)) || 0)) {
        const x = _.find((B) => v <= B.offsetTop - (s.offset || 0) && v > (s.offset || 0) ? (e.value = B.id, true) : false);
        x && (e.value = x.id);
      }
    }
    function m() {
      const u = s.target ? typeof s.target == "string" ? document.querySelector(s.target) : s.target : window;
      if (!u)
        return null;
      a.value = u;
      const i = Ie(g, 50);
      return g({ target: u }), u.addEventListener("scroll", i, { passive: true }), () => {
        u.removeEventListener("scroll", i);
      };
    }
    async function c(u) {
      var $, _, b;
      if (e.value === u || !u) return;
      r.value = u, e.value = u;
      const i = document.getElementById(u);
      if (!i) return;
      (_ = a.value) == null || _.scrollTo({
        // @ts-ignore
        top: i.offsetTop - (s.offset || 0) - ((($ = a.value) == null ? void 0 : $.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const v = Ce(() => {
        var x;
        r.value = null, (x = a.value) == null || x.removeEventListener("scroll", v);
      }, 300);
      (b = a.value) == null || b.addEventListener("scroll", v, { passive: true });
    }
    return (u, i) => {
      const v = resolveDirective("ripple");
      return s.data && s.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(n).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(s.data, ($) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(n).e("item"), unref(n).is("active", e.value === $.id)]),
          onClick: () => c($.id)
        }, [
          e.value === $.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(n).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString($.text), 1)
        ], 10, Pt)), [
          [v, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Dt = S(Rt, [["__scopeId", "data-v-4840d244"]]);
var Ot = R("ImAnchor", Dt);
var Ht = defineComponent({
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
  setup(o, { emit: n }) {
    const t = n, a = ref(null), e = o, r = N("alert"), s = useSlots(), d = computed(() => !!(e.showIcon && e.title)), g = computed(() => {
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
      var c, u;
      t("close"), (c = a.value) == null || c.animate([{
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
      }), await new Promise((i) => setTimeout(i, 300)), (u = a.value) == null || u.remove();
    };
    return (c, u) => {
      const i = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: a,
        class: normalizeClass([unref(r).b(), unref(r).m(e.color || "primary"), e.variant && unref(r).m(e.variant || "")])
      }, [
        e.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(r).e("icon")])
        }, [
          renderSlot(c.$slots, "icon", {}, () => [
            createVNode(unref(H), {
              name: g.value,
              size: d.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(r).e("content")])
        }, [
          e.title || unref(s).title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(r).e("title")])
          }, [
            renderSlot(c.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(e.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(r).e("message")])
          }, [
            renderSlot(c.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(e.message), 1)
            ], true)
          ], 2)
        ], 2),
        e.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(r).e("close")]),
          onClick: m
        }, [
          renderSlot(c.$slots, "close", {}, () => [
            createVNode(unref(H), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [i, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var Ft = S(Ht, [["__scopeId", "data-v-d11fdcb2"]]);
var Yt = R("ImAlert", Ft);
var Wt = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: n }) {
    const t = useSlots(), a = n, e = N("breadcrumb"), r = o, s = computed(
      () => {
        var g, m;
        return (m = (g = t.default) == null ? void 0 : g.call(t)) == null ? void 0 : m.filter((c) => {
          var u;
          return (c == null ? void 0 : c.type) && ((u = c == null ? void 0 : c.type) == null ? void 0 : u.name) === "ImBreadcrumbItem";
        });
      }
    ), d = (g) => {
      g && r.modelValue !== g && (a("update:modelValue", g), a("change", g));
    };
    return (g, m) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (c, u) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(c), {
          active: r.modelValue,
          onClick: d
        }, null, 8, ["active"])),
        s.value && s.value.length > 0 && u < s.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(e).e("separator")])
        }, [
          renderSlot(g.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(r.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var qt = S(Wt, [["__scopeId", "data-v-64336468"]]);
var Xt = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(o, { emit: n }) {
    const t = N("breadcrumb__item"), a = o, e = n;
    return (r, s) => (openBlock(), createElementBlock("div", {
      onClick: s[0] || (s[0] = () => e("click", a.value)),
      class: normalizeClass([unref(t).b(), unref(t).is("active", a.active === a.value && !!a.value)])
    }, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var jt = S(Xt, [["__scopeId", "data-v-40ed04b1"]]);
var Ut = R("ImBreadcrumb", qt);
var Gt = R("ImBreadcrumb", jt);
var ke = (o, n) => !o || !o.getAnimations ? false : (o.getAnimations(n).forEach((t) => t.cancel()), true);
var Ke = async (o, n) => {
  if (!o || !o.getAnimations) return false;
  try {
    return await Promise.all(
      o.getAnimations(n).map((t) => t.finished)
    ), true;
  } catch {
    return false;
  }
};
var ze = () => ({
  width: (window == null ? void 0 : window.innerWidth) || document.documentElement.clientWidth || document.body.clientWidth,
  height: (window == null ? void 0 : window.innerHeight) || document.documentElement.clientHeight || document.body.clientHeight
});
var Kt = () => document ? document.body.style.overflow === "hidden" || document.body.classList.contains("im-lock-scroll") : false;
var Je = async () => {
  try {
    if (await new Promise((n) => setTimeout(n, 0)), !document) return Promise.resolve();
    Array.from(document.querySelectorAll(".is-im-lock-scroll")).length ? Kt() || document.body.classList.add("im-lock-scroll") : document.body.classList.remove("im-lock-scroll");
  } catch {
  }
};
var Jt = ["role"];
var $e = defineComponent({
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
  setup(o, { emit: n }) {
    const { zIndexToken: t } = ae(), a = N("layer"), e = ref(null), r = n, s = o, d = reactive({
      top: "",
      left: "",
      minWidth: "fit-content"
    }), g = computed(() => b(s.placement)), m = {
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
    const c = ["bottom", "bottom-left", "bottom-right"], u = ["top", "top-left", "top-right"], i = ["right", "right-top", "right-bottom"], v = ["left", "left-top", "left-bottom"];
    function $(y, w, T = "bottom-left") {
      const { height: J } = ze();
      let O = 0;
      const se = s.arrow ? parseInt(String(s.offset || 0)) : 0;
      if (c.includes(T))
        O = y.bottom, O += se;
      else if (u.includes(T))
        O = y.top - w.height, O -= se;
      else if (i.includes(T) || v.includes(T))
        switch (T) {
          case "right":
          case "left":
            O = y.top + y.height * 0.5 - w.height / 2;
            break;
          case "right-top":
          case "left-top":
            O = y.top;
            break;
          case "right-bottom":
          case "left-bottom":
            O = y.top + y.height - w.height;
            break;
        }
      return O <= 0 ? 0 : O + w.height >= J ? J - w.height : O || y.top || 0;
    }
    function _(y, w, T = "bottom-left") {
      const J = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let O = 0;
      const se = s.arrow ? parseInt(String(s.offset || 0)) : 0;
      if (c.includes(T) || u.includes(T))
        switch (T) {
          case "bottom":
          case "top":
            O = y.right - y.width / 2 - w.width / 2;
            break;
          case "bottom-right":
          case "top-right":
            O = y.left + y.width - w.width;
            break;
          default:
            O = y.left;
            break;
        }
      else i.includes(T) ? O = y.left + y.width + se : v.includes(T) && (O = y.left - w.width - se);
      return O <= 0 ? 0 : O + w.width >= J ? J - w.width : O || y.left || 0;
    }
    const b = (y) => [...c, ...u, ...i, ...v].includes(y) ? s.placement : "bottom-left";
    function x(y) {
      if (s.scrollClose) {
        const w = y.target, T = e.value;
        if (w && w === T || T != null && T.contains(w))
          return;
        r("close", true);
      } else
        ee();
    }
    const B = Ie(ee, 100), C = Ie(x, 100);
    async function ee() {
      var se;
      const y = (se = s.getTriggerContainer) == null ? void 0 : se.call(s);
      if (!y)
        return r("close", true);
      ce();
      const w = g.value, T = e.value, J = y.getBoundingClientRect(), O = T.getBoundingClientRect();
      d.minWidth = s.role == "tooltip" ? "fit-content" : `${J.width}px`, d.top = `${$(J, O, w)}px`, d.left = `${_(J, O, w)}px`;
    }
    function G() {
      window.removeEventListener("scroll", C), s.visible && window.addEventListener("scroll", C, {
        passive: true,
        capture: true
      });
    }
    function U() {
      window.removeEventListener("resize", B), s.visible && window.addEventListener("resize", B, {
        passive: true,
        capture: true
      });
    }
    function ce() {
      const y = e.value;
      if (u.includes(g.value)) {
        y.style.transformOrigin = "center bottom";
        return;
      }
      if ((i.includes(g.value) || v.includes(g.value)) && ["right-bottom", "left-bottom"].includes(g.value)) {
        y.style.transformOrigin = "center bottom";
        return;
      }
      y.style.transformOrigin = "center top";
    }
    async function k(y) {
      const w = y;
      w.style.setProperty("transition", "none"), G(), U(), await new Promise((T) => requestAnimationFrame(T)), ee();
      try {
        w.getAnimations().forEach((T) => T == null ? void 0 : T.cancel()), w.animate(
          s.role === "tooltip" ? m.tooltip : m.dropdown,
          m.option
        ), Promise.all(
          w.getAnimations().map((T) => T.finished)
        ).finally(() => {
          w.style.setProperty("transition", "all 0.2s ease");
        });
      } catch (T) {
        console.error(T);
      }
    }
    function D(y, w) {
      const T = y;
      T.getAnimations().forEach((J) => J.cancel()), T.animate(
        s.role === "tooltip" ? m.tooltipLeave : m.dropdownLeave,
        m.option
      ), Promise.all(
        T.getAnimations().map((J) => J.finished)
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
        onLeave: D
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            onMouseenter: w[0] || (w[0] = (T) => r("mouseenter", T)),
            onMouseleave: w[1] || (w[1] = (T) => r("mouseleave", T)),
            tabindex: "-1",
            ref_key: "layerRef",
            ref: e,
            "aria-modal": "true",
            class: normalizeClass([
              unref(a).b(),
              "im-shadow",
              s.customClass,
              g.value && unref(a).m(g.value)
            ]),
            style: normalizeStyle({
              zIndex: s.zIndex || unref(t),
              ...d
            }),
            role: s.role
          }, [
            s.arrow ? (openBlock(), createElementBlock("svg", {
              key: 0,
              class: normalizeClass([unref(a).e("arrow")]),
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
              class: normalizeClass([unref(a).e("content")])
            }, [
              renderSlot(y.$slots, "default")
            ], 2)
          ], 46, Jt), [
            [vShow, s.visible]
          ])
        ]),
        _: 3
      })
    ]));
  }
});
var Qt = 100;
var Zt = defineComponent({
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
  setup(o, { emit: n }) {
    const t = n, a = N("dropdown"), e = o, r = ref(null), s = ref(e.modelValue || false);
    onMounted(() => {
      d();
    }), watch(
      () => s.value,
      () => {
        d();
      }
    ), watch(
      () => e.modelValue,
      (b) => {
        s.value = b;
      }
    );
    function d() {
      document.removeEventListener("click", m, { capture: true }), s.value && document.addEventListener("click", m, {
        passive: true,
        capture: true
      });
    }
    function g() {
      return r.value;
    }
    function m(b) {
      if (s.value) {
        const x = b.target, B = r.value;
        if (x === B || B != null && B.contains(x) || x.classList.contains("is-disabled")) return;
        i(false);
      }
    }
    function c() {
      (e.trigger === "hover" || !e.trigger) && i(true);
    }
    function u() {
      (e.trigger === "hover" || !e.trigger) && i(false);
    }
    const i = Ce((b) => {
      b ? $() : _();
    }, Qt);
    function v() {
      !s.value && i(true);
    }
    function $() {
      s.value = true, t("update:modelValue", s.value), t("change", s.value);
    }
    function _() {
      s.value = false, t("update:modelValue", s.value), t("change", s.value);
    }
    return (b, x) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(a).b()]),
      ref_key: "dropdownRef",
      ref: r,
      onMouseenter: c,
      onMouseleave: u,
      onClick: v
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode($e, {
        visible: s.value,
        customClass: unref(a).e("content"),
        placement: e.placement,
        offset: e.offset,
        "z-index": e.zIndex,
        getTriggerContainer: g,
        arrow: e.arrow,
        scrollClose: e.scrollClose,
        onClose: _,
        onMouseenter: c,
        onMouseleave: u
      }, {
        default: withCtx(() => [
          renderSlot(b.$slots, "content", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["visible", "customClass", "placement", "offset", "z-index", "arrow", "scrollClose"])
    ], 34));
  }
});
var ea = S(Zt, [["__scopeId", "data-v-64b1a7dc"]]);
var ta = R("ImDropdown", ea);
var aa = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: n }) {
    const t = o, a = useSlots(), e = N("list"), r = (c) => typeof c.type == "object" && c.type !== null, s = (c, u) => {
      const i = [];
      return c.forEach((v) => {
        if (r(v) && v.type && v.type.name == u) {
          const $ = v.props || {};
          i.push({ vnode: v, props: $ });
        } else v && (v != null && v.children) && Array.isArray(v.children) && i.push(...s(v.children, u));
      }), i;
    }, d = computed(() => {
      var i;
      const c = ((i = a.default) == null ? void 0 : i.call(a)) || [];
      return s(c, "ImListItem").map((v) => v.vnode);
    }), g = n, m = (c) => {
      var i;
      const u = ((i = c.props) == null ? void 0 : i.value) || "";
      console.log(u, "value"), !(u !== 0 && !u) && (g("update:modelValue", u), g("change", u));
    };
    return (c, u) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (i) => (openBlock(), createBlock(resolveDynamicComponent(i), {
        active: t.modelValue,
        onClick: () => m(i)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var oa = S(aa, [["__scopeId", "data-v-541c876e"]]);
var na = defineComponent({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: false },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: true }
  },
  emits: ["click"],
  setup(o, { emit: n }) {
    const t = N("list__item"), a = n, e = o;
    function r(s) {
      if (e.disabled) {
        s.stopPropagation();
        return;
      }
      a("click", e.value);
    }
    return (s, d) => {
      const g = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(t).b(), unref(t).is("active", !!(e.active && e.active === e.value)), unref(t).is("disabled", e.disabled)]),
        onClick: r
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2)), [
        [g, e.ripple && !e.disabled]
      ]);
    };
  }
});
var sa = S(na, [["__scopeId", "data-v-6df1dd93"]]);
var la = R("ImList", oa);
var ia = R("ImListItem", sa);
var ra = ["src", "srcset", "alt", "loading"];
var ca = defineComponent({
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
  setup(o, { emit: n }) {
    const t = n, a = N("avatar"), e = o, r = (s) => {
      console.log(s.target), t("error", s);
    };
    return (s, d) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(a).b(), e.shape ? unref(a).m(e.shape) : ""]),
      style: normalizeStyle({
        "--im-avatar-size": (Number(e.size) || 36) + "px",
        "--im-avatar-color": e.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": e.fit
      })
    }, [
      !e.src && !e.srcset ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(a).e("icon")])
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2)) : (openBlock(), createElementBlock("img", {
        key: 1,
        onError: r,
        src: e.src,
        srcset: e.srcset,
        alt: e.alt,
        loading: e.loading,
        class: normalizeClass([unref(a).e("img")])
      }, null, 42, ra))
    ], 6));
  }
});
var ua = S(ca, [["__scopeId", "data-v-c4c32038"]]);
var da = R("ImAvatar", ua);
var ma = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(o, { emit: n }) {
    const t = N("mask"), { zIndexToken: a } = ae(), e = o, r = n, s = () => {
      e.closeOnClickMask && r("close", false);
    };
    return (d, g) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(t).b()]),
          style: normalizeStyle({
            zIndex: e.zIndex || unref(a)
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
var pa = S(ma, [["__scopeId", "data-v-d5aadf77"]]);
var Re = R("ImMask", pa);
var le = {
  duration: 200,
  delay: 0,
  easing: "ease-out"
};
function Be(o, n = "right") {
  const t = (o == null ? void 0 : o.getBoundingClientRect()) || {}, a = (t == null ? void 0 : t.width) || 0, e = (t == null ? void 0 : t.height) || 0;
  switch (n) {
    case "left":
      return a ? `translateX(-${a}px)` : "translateX(-100%)";
    case "right":
      return a ? `translateX(${a}px)` : "translateX(100%)";
    case "top":
      return e ? `translateY(-${e}px)` : "translateY(-100%)";
    case "bottom":
      return e ? `translateY(${e}px)` : "translateY(100%)";
    default:
      return a ? `translateX(${a}px)` : "translateX(100%)";
  }
}
var be = async (o, n = true) => {
  let t = Be(o, "right"), a = [];
  n ? a = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : a = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], o == null || o.animate(a, le);
};
var Ye = async (o, n = true) => {
  let t = Be(o, "left"), a = [];
  n ? a = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : a = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], o == null || o.animate(a, le);
};
var We = async (o, n = true) => {
  let t = Be(o, "top"), a = [];
  n ? a = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : a = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], o == null || o.animate(a, le);
};
var qe = async (o, n = true) => {
  let t = Be(o, "bottom"), a = [];
  n ? a = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : a = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], o == null || o.animate(a, le);
};
var fa = async (o, n) => {
  let t = [], a = "center";
  const e = (n == null ? void 0 : n.getBoundingClientRect()) || null, { width: r, height: s } = ze(), d = o.getBoundingClientRect();
  if (e) {
    const g = (e.left - d.left) / d.width * 100, m = (e.top - d.top) / d.height * 100;
    a = `${g}% ${m}%`;
  } else {
    const g = (r * 0.5 - d.left) / d.width * 100, m = (s - d.top) / d.height * 100;
    a = `${g}% ${m}%`;
  }
  t = [
    {
      opacity: 0,
      transformOrigin: a,
      transform: "scale(0) "
    },
    {
      opacity: 1,
      transformOrigin: a,
      transform: "scale(1)"
    }
  ], o == null || o.animate(t, le);
};
var va = async (o, n) => {
  let t = [], a = "center";
  const e = (n == null ? void 0 : n.getBoundingClientRect()) || null, { width: r, height: s } = ze(), d = o.getBoundingClientRect();
  let g = "50%", m = "50%";
  e ? (g = (e.left + e.width * 0.5 - d.left) / d.width * 100, m = (e.top + e.height * 0.5 - d.top) / d.height * 100, a = `${g}% ${m}%`) : (g = (r * 0.5 - d.left) / d.width * 100, m = (s - d.top) / d.height * 100, a = `${g}% ${m}%`), t = [
    {
      opacity: 1,
      transformOrigin: a,
      transform: "scale(1)",
      offset: 0
    },
    {
      opacity: 0,
      transformOrigin: a,
      transform: "scale(0.33)",
      offset: 1
    }
  ], o == null || o.animate(t, le);
};
var Xe = (o, n = true) => {
  if (!o || !o.animate)
    return console.log("elFullscreenBottomIn");
  const { height: t } = ze();
  n ? o.animate(
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
var ga = ["aria-modal"];
var ha = defineComponent({
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
  setup(o, { emit: n }) {
    const t = N("drawer"), a = n, e = o, r = ref(null), { zIndexToken: s } = ae(), d = computed(() => Z(e.size || s.value || "280px"));
    watch(() => e.modelValue, (u) => {
      Je();
    }, { immediate: true });
    const g = () => {
      a("update:modelValue", false);
    };
    function m(u, i) {
      switch (ke(u), e.placement) {
        case "right":
          be(u);
          break;
        case "left":
          Ye(u);
          break;
        case "top":
          We(u);
          break;
        case "bottom":
          qe(u);
          break;
        default:
          be(u);
          break;
      }
      i();
    }
    function c(u, i) {
      switch (ke(u), e.placement) {
        case "right":
          be(u, false);
          break;
        case "left":
          Ye(u, false);
          break;
        case "top":
          We(u, false);
          break;
        case "bottom":
          qe(u, false);
          break;
        default:
          be(u, false);
          break;
      }
      Ke(u).finally(i);
    }
    return (u, i) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: r,
        class: normalizeClass([unref(t).b(), unref(t).is("im-lock-scroll", e.modelValue), e.placement ? unref(t).m(e.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": d.value, zIndex: e.zIndex || unref(s) }),
        "aria-modal": e.modelValue
      }, [
        e.mask ? (openBlock(), createBlock(unref(Re), {
          key: 0,
          visible: e.modelValue,
          closeOnClickMask: e.closeOnClickMask,
          onClose: g,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: m,
          onLeave: c
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(t).e("content")])
            }, [
              renderSlot(u.$slots, "default", {}, void 0, true)
            ], 2), [
              [vShow, e.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, ga)
    ]));
  }
});
var ba = S(ha, [["__scopeId", "data-v-230f0857"]]);
var ya = R("ImDrawer", ba);
var _a = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(o) {
    const n = N("card"), t = o;
    return (a, e) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(n).b(), unref(n).is("borderless", t.borderless), t.shadow ? unref(n).m(t.shadow) : ""])
    }, [
      renderSlot(a.$slots, "header", {}, () => [
        t.title || a.$slots["header-action"] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(n).e("header")])
        }, [
          createBaseVNode("span", {
            class: normalizeClass([unref(n).e("title")])
          }, toDisplayString(t.title), 3),
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
var Ia = S(_a, [["__scopeId", "data-v-4ccad88b"]]);
var wa = R("ImCard", Ia);
var ka = ["data-esc"];
var xa = defineComponent({
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
  setup(o, { emit: n }) {
    const t = N("dialog"), a = n, e = o, r = ref(null), { zIndexToken: s } = ae();
    watch(
      () => e.modelValue,
      (c) => {
        window.removeEventListener("keydown", d), c && e.closeOnEscape && window.addEventListener("keydown", d, { passive: true }), Je();
      },
      {
        immediate: true
      }
    );
    function d(c) {
      if (c.key === "Escape" || c.code === "Escape") {
        const u = document.querySelectorAll(
          '.im-dialog.is-show[data-esc="true"]'
        );
        u.length && r.value && Array.from(u).pop() === r.value && a("update:modelValue", false);
      }
    }
    const g = async (c, u) => {
      ke(c, { subtree: true }), e.fullscreen ? Xe(c) : fa(c, e == null ? void 0 : e.getTarget()), u();
    }, m = async (c, u) => {
      ke(c, { subtree: true }), e.fullscreen ? Xe(c, false) : va(c, e == null ? void 0 : e.getTarget()), await Ke(c, { subtree: true }), u();
    };
    return (c, u) => (openBlock(), createBlock(Teleport, { to: "body" }, [
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
        ref: r,
        style: normalizeStyle({
          zIndex: e.zIndex || unref(s)
        })
      }, [
        e.mask && !e.fullscreen ? (openBlock(), createBlock(unref(Re), {
          key: 0,
          closeOnClickMask: e.closeOnClickMask,
          visible: e.modelValue,
          onClose: u[0] || (u[0] = () => a("update:modelValue", false))
        }, null, 8, ["closeOnClickMask", "visible"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: g,
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
              renderSlot(c.$slots, "default", {}, void 0, true)
            ], 6), [
              [vShow, e.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, ka)
    ]));
  }
});
var Ca = S(xa, [["__scopeId", "data-v-8904b1d9"]]);
var za = R("ImDialog", Ca);
var $a = defineComponent({
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
  setup(o, { emit: n }) {
    const t = N("option"), a = n, e = o;
    function r(s) {
      if (s.preventDefault(), s.stopPropagation(), e.disabled) return;
      const d = e.value || e.label;
      d && a("change", d);
    }
    return (s, d) => {
      var m, c;
      const g = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        onClick: r,
        class: normalizeClass([unref(t).b(), unref(t).is("disabled", !!e.disabled), unref(t).is("active", (m = e.selectList) == null ? void 0 : m.includes(e.value || e.label || ""))])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([unref(t).e("text")])
        }, [
          renderSlot(s.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(e.label || e.value), 1)
          ], true)
        ], 2),
        e.multiple && ((c = e.selectList) != null && c.includes(e.value || e.label || "")) ? (openBlock(), createBlock(unref(H), {
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
        [g, !e.disabled]
      ]);
    };
  }
});
var Ba = S($a, [["__scopeId", "data-v-baa1be82"]]);
var Va = defineComponent({
  name: "ImTag",
  __name: "ImTag",
  props: {
    color: { default: "" },
    border: { type: Boolean },
    closeable: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: true }
  },
  emits: ["close", "update:modelValue"],
  setup(o, { emit: n }) {
    const t = N("tag"), a = n, e = o;
    function r(s) {
      a("update:modelValue", false), a("close", s);
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
            e.closeable ? (openBlock(), createBlock(unref(H), {
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
var Ta = S(Va, [["__scopeId", "data-v-16275f2c"]]);
var Qe = R("ImTag", Ta);
var La = defineComponent({
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
  setup(o, { emit: n }) {
    const t = N("select"), a = n, e = o, { sizeToken: r } = ae(), s = ref(false), d = ref([]), g = ref(null), m = ref(null), c = computed(() => Z(e.width)), u = computed(() => Z(e.size || r.value || "36px")), i = computed(() => {
      var k;
      return e.multiple ? e.options.filter((D) => d.value.includes(String(D.value))).map((D) => D.label) : ((k = e.options.find((D) => D.value === e.modelValue)) == null ? void 0 : k.label) || "";
    }), v = computed(() => e.options.filter(
      (k) => d.value.includes(String(k.value))
    )), $ = computed(() => {
      const k = v.value.length - e.maxTag;
      return v.value.length && e.maxTag && v.value.length - e.maxTag && k > 0 ? k : "";
    }), _ = computed(() => e.clearable && e.modelValue && i.value && !e.disabled), b = computed(() => {
      var k;
      return e.placeholder ? e.multiple ? !((k = v.value) != null && k.length) : !i.value : false;
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
        document.removeEventListener("click", ee, { capture: true }), k && document.addEventListener("click", ee, { capture: true });
      }
    );
    function x(k, D) {
      D.preventDefault();
      const y = d.value.filter((w) => w !== k.value);
      a("update:modelValue", y.join(","));
    }
    function B() {
      s.value = false;
    }
    function C() {
      var k;
      e.multiple ? d.value = ((k = String(e.modelValue)) == null ? void 0 : k.split(",")) || [] : d.value = [e.modelValue];
    }
    function ee(k) {
      var D, y;
      (D = g.value) != null && D.contains(k.target) || g.value === k.target || k.target === m.value || e.multiple && ((y = m.value) != null && y.contains(k.target)) || m.value === k.target || B();
    }
    async function G() {
      var D;
      if (s.value) return;
      s.value = true, await new Promise((y) => requestAnimationFrame(y));
      const k = (D = m.value) == null ? void 0 : D.querySelector(
        `.${t.is("active", true)}`
      );
      k && k.scrollIntoView({ behavior: "instant", block: "nearest" }), await new Promise((y) => requestAnimationFrame(y));
    }
    function U(k) {
      if (e.multiple) {
        const D = d.value;
        D.includes(k) ? D.splice(D.indexOf(k), 1) : D.push(k), a("update:modelValue", D.filter((y) => y).join(","));
        return;
      } else
        a("update:modelValue", k);
    }
    function ce(k) {
      k.preventDefault(), k.stopPropagation(), a("update:modelValue", "");
    }
    return (k, D) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(t).b(),
        unref(t).is("open", s.value),
        unref(t).is("disabled", e.disabled),
        unref(t).is("multiple", e.multiple)
      ]),
      style: normalizeStyle({
        "--im-select-width": c.value,
        "--im-select-height": u.value
      })
    }, [
      createBaseVNode("div", {
        onClick: G,
        class: normalizeClass([unref(t).e("trigger")]),
        ref_key: "triggerRef",
        ref: g,
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.value, (y, w) => (openBlock(), createElementBlock(Fragment, null, [
              w < e.maxTag ? (openBlock(), createBlock(unref(Qe), {
                key: w,
                onClose: withModifiers((T) => x(y, T), ["stop"]),
                closeable: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(y.label), 1)
                ]),
                _: 2
              }, 1032, ["onClose"])) : createCommentVNode("", true)
            ], 64))), 256))
          ], 2)) : createCommentVNode("", true),
          e.multiple && v.value.length && $.value ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(t).e("more")])
          }, [
            createVNode(unref(H), {
              name: "plus",
              size: "12px"
            }),
            createTextVNode(" " + toDisplayString($.value), 1)
          ], 2)) : createCommentVNode("", true),
          e.multiple ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass([unref(t).e("default")])
          }, toDisplayString(i.value), 3))
        ], 2)),
        createBaseVNode("span", {
          class: normalizeClass([unref(t).e("icon-down"), unref(t).is("rotate", s.value)])
        }, [
          renderSlot(k.$slots, "downIcon", {}, () => [
            createVNode(unref(H), {
              name: "down",
              size: "12"
            })
          ], true)
        ], 2),
        _.value ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass([unref(t).e("clear-icon")]),
          onClick: ce
        }, [
          renderSlot(k.$slots, "clearIcon", {}, () => [
            createVNode(unref(H), {
              name: "close-circle-fill",
              size: "18"
            })
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 2),
      createVNode($e, {
        visible: s.value,
        getTriggerContainer: () => g.value,
        "z-index": e.zIndex,
        onClose: B,
        arrow: e.arrow,
        offset: e.offset,
        scrollClose: e.scrollClose
      }, {
        default: withCtx(() => [
          createBaseVNode("ul", {
            class: normalizeClass([unref(t).e("list")]),
            ref_key: "listRef",
            ref: m
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.options, (y, w) => (openBlock(), createBlock(Ba, {
              multiple: e.multiple,
              key: y.value || y.label || w,
              disabled: y.disabled,
              "select-list": d.value,
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
var Aa = S(La, [["__scopeId", "data-v-51b7f08b"]]);
var Ze = R("ImSelect", Aa);
var Na = ["aria-disabled"];
var Sa = ["onClick", "title"];
var Ma = ["aria-disabled"];
var Ea = defineComponent({
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
  setup(o, { emit: n }) {
    const t = N("pagination"), a = n, e = o, r = ref(e.pageSize), s = ref([1]), { sizeToken: d } = ae(), g = computed(() => parseInt(String(e.size || d.value || 36)) + "px"), m = computed(
      () => Math.ceil(e.total / (r.value || 10))
    ), c = computed(() => e.pageNumber === 1), u = computed(() => e.pageNumber >= m.value), i = computed(
      () => e.pageSizeItems.map((C) => ({ label: `${C} 条/页`, value: C }))
    );
    watch(
      () => r.value,
      (C) => {
        m.value < e.pageNumber ? a("change", { pageSize: C, pageNumber: m.value }) : a("change", { pageSize: C, pageNumber: e.pageNumber });
      }
    ), watch(
      () => [e.pageNumber, e.pageSize],
      () => {
        r.value = e.pageSize, $(
          m.value < e.pageNumber ? m.value : e.pageNumber
        );
      },
      { immediate: true }
    );
    function v(C) {
      e.pageNumber !== C && a("change", { pageNumber: C, pageSize: e.pageSize });
    }
    function $(C) {
      if (m.value <= 1)
        s.value = [1];
      else {
        const ee = Math.ceil(C / 5), G = [];
        let U = ee * 5 - 4;
        for (let ce = 0; ce < 5; ce++) {
          let k = U + ce;
          if (k > m.value)
            break;
          G.push(k);
        }
        C - 5 >= 1 && (G.unshift("left"), G.unshift(1)), C + 5 <= m.value && (G.push("right"), G.push(m.value)), s.value = G, v(C);
      }
    }
    function _() {
      const C = e.pageNumber + 1;
      if (C > m.value) return v(e.pageNumber);
      if (s.value.includes(C))
        return v(C);
      $(C);
    }
    function b() {
      const C = e.pageNumber - 1;
      if (C < 1) return v(e.pageNumber);
      if (s.value.includes(C))
        return v(C);
      $(C);
    }
    function x() {
      const C = e.pageNumber + 5;
      if (C > m.value) return v(m.value);
      $(C);
    }
    function B() {
      const C = e.pageNumber - 5;
      if (C < 1) return v(1);
      $(C);
    }
    return (C, ee) => {
      const G = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(t).b()]),
        style: normalizeStyle({
          "--im-pagination-size": g.value
        })
      }, [
        C.layout.includes("total") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(t).e("total")])
        }, " 共 " + toDisplayString(C.total) + " 条数据 ", 3)) : createCommentVNode("", true),
        C.layout.includes("prev") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(t).e("prev"), unref(t).is("disabled", c.value)]),
          "aria-disabled": c.value,
          onClick: b
        }, [
          createVNode(unref(H), {
            name: "left",
            size: "14px"
          })
        ], 10, Na)), [
          [G, !c.value]
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
              onClick: B
            }, [
              createVNode(unref(H), {
                name: "ellipsis",
                class: "im-icon--ellipsis"
              }),
              createVNode(unref(H), {
                name: "arrowleft",
                class: "im-icon--arrowleft"
              })
            ], 2)) : U !== "right" ? withDirectives((openBlock(), createElementBlock("div", {
              key: 1,
              onClick: () => v(U),
              class: normalizeClass([
                unref(t).e("page-item"),
                unref(t).is("active", U === e.pageNumber)
              ]),
              title: String(U)
            }, [
              createTextVNode(toDisplayString(U), 1)
            ], 10, Sa)), [
              [G, true]
            ]) : U === "right" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass([unref(t).e("page-item"), unref(t).e("right")]),
              title: "向后5页",
              onClick: x
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
        C.layout.includes("next") ? withDirectives((openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(t).e("next"), unref(t).is("disabled", u.value)]),
          "aria-disabled": u.value,
          onClick: _
        }, [
          createVNode(unref(H), {
            name: "right",
            size: "14px"
          })
        ], 10, Ma)), [
          [G, !u.value]
        ]) : createCommentVNode("", true),
        C.layout.includes("sizes") ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass([unref(t).e("size")])
        }, [
          createVNode(unref(Ze), {
            options: i.value,
            modelValue: r.value,
            "onUpdate:modelValue": ee[0] || (ee[0] = (U) => r.value = U),
            size: e.size,
            scrollClose: ""
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var Pa = S(Ea, [["__scopeId", "data-v-661df4df"]]);
var Ra = R("ImPagination", Pa);
var Da = defineComponent({
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
  setup(o, { emit: n }) {
    const t = N("tooltip"), a = ref(null), e = ref(false), r = n, s = o;
    onMounted(() => {
      d();
    }), watch(
      () => s.modelValue,
      (b) => {
        e.value = b;
      }
    ), watch(
      () => e.value,
      () => {
        d();
      }
    );
    function d() {
      document.removeEventListener("click", g, { capture: true }), e.value && document.addEventListener("click", g, {
        passive: true,
        capture: true
      });
    }
    function g(b) {
      if (e.value) {
        const x = b.target, B = a.value;
        if (x === B || B != null && B.contains(x) || x.classList.contains("is-disabled")) return;
        m(false);
      }
    }
    const m = Ce((b) => {
      b ? $() : _();
    }, 100);
    function c() {
      (!s.trigger || s.trigger === "hover") && m(true);
    }
    function u() {
      (!s.trigger || s.trigger === "hover") && m(false);
    }
    function i() {
      e.value || m(true);
    }
    function v() {
      return a.value;
    }
    function $() {
      e.value = true, r("update:modelValue", e.value), r("change", e.value);
    }
    function _() {
      e.value = false, r("update:modelValue", e.value), r("change", e.value);
    }
    return (b, x) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(t).b()]),
      ref_key: "triggerRef",
      ref: a,
      onMouseenter: c,
      onMouseleave: u,
      onClick: i
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode($e, {
        visible: e.value,
        customClass: unref(t).e("wrapper"),
        placement: s.placement,
        offset: s.offset,
        "z-index": s.zIndex,
        getTriggerContainer: v,
        arrow: s.arrow,
        scrollClose: s.scrollClose,
        onClose: _,
        onMouseenter: c,
        onMouseleave: u,
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
var Oa = S(Da, [["__scopeId", "data-v-f51e979f"]]);
var Ha = R("ImTooltip", Oa);
var Fa = defineComponent({
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
  setup(o, { emit: n }) {
    const t = N("popover"), a = ref(null), e = ref(false), r = n, s = o;
    onMounted(() => {
      d();
    }), watch(
      () => s.modelValue,
      (b) => {
        e.value = b;
      }
    ), watch(
      () => e.value,
      () => {
        d();
      }
    );
    function d() {
      document.removeEventListener("click", g, { capture: true }), e.value && document.addEventListener("click", g, {
        passive: true,
        capture: true
      });
    }
    function g(b) {
      if (e.value) {
        const x = b.target, B = a.value;
        if (x === B || B != null && B.contains(x) || x.classList.contains("is-disabled")) return;
        m(false);
      }
    }
    const m = Ce((b) => {
      b ? $() : _();
    }, 100);
    function c() {
      (!s.trigger || s.trigger === "hover") && m(true);
    }
    function u() {
      (!s.trigger || s.trigger === "hover") && m(false);
    }
    function i() {
      e.value || m(true);
    }
    function v() {
      return a.value;
    }
    function $() {
      e.value = true, r("update:modelValue", e.value), r("change", e.value);
    }
    function _() {
      e.value = false, r("update:modelValue", e.value), r("change", e.value);
    }
    return (b, x) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(t).b()]),
      ref_key: "triggerRef",
      ref: a,
      onMouseenter: c,
      onMouseleave: u,
      onClick: i
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode($e, {
        visible: e.value,
        customClass: unref(t).e("wrapper"),
        placement: s.placement,
        offset: s.offset,
        "z-index": s.zIndex,
        getTriggerContainer: v,
        arrow: s.arrow,
        scrollClose: s.scrollClose,
        onClose: _,
        onMouseenter: c,
        onMouseleave: u,
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
var Ya = S(Fa, [["__scopeId", "data-v-807c7fd8"]]);
var Wa = R("ImPopover", Ya);
var qa = defineComponent({
  name: "ImBadge",
  __name: "ImBadge",
  props: {
    value: { default: void 0 },
    size: { default: "16px" },
    color: { default: "" },
    dot: { type: Boolean, default: false }
  },
  setup(o) {
    const n = N("badge"), t = o, a = computed(() => Z(t.size));
    return (e, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(n).b(),
        t.color && unref(n).m(t.color),
        unref(n).is("dot", t.dot)
      ]),
      style: normalizeStyle({
        "--im-badge-size": a.value
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
var Xa = S(qa, [["__scopeId", "data-v-ca9cca8c"]]);
var ja = R("ImBadge", Xa);
var Ua = defineComponent({
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
    const n = N("back-top"), t = ref(false);
    let a = null;
    const { zIndexToken: e } = ae(), r = o, s = computed(() => ({
      zIndex: r.zIndex || e.value || 1e3,
      right: Z(r.right),
      bottom: Z(r.bottom)
    }));
    onMounted(() => {
      var i;
      a = ((i = r.getTarget) == null ? void 0 : i.call(r)) || window, c(), m();
    }), onUnmounted(() => {
      u();
    });
    function d() {
      a && a.scrollTo({ top: 0, behavior: "smooth", left: 0 });
    }
    function g() {
      if (!a) return;
      const i = a.scrollTop || a.pageYOffset || 0;
      t.value = i > r.visibleHeight;
    }
    const m = Ie(g, 100);
    function c() {
      a && (u(), a.addEventListener("scroll", m, {
        passive: true
      }));
    }
    function u() {
      a && a.removeEventListener("scroll", m);
    }
    return (i, v) => (openBlock(), createBlock(Transition, {
      name: "fade",
      mode: "out-in"
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(n).b()]),
          onClick: d,
          style: normalizeStyle(s.value)
        }, [
          renderSlot(i.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, t.value]
        ])
      ]),
      _: 3
    }));
  }
});
var Ga = S(Ua, [["__scopeId", "data-v-f8ee14ab"]]);
var Ka = R("ImBackTop", Ga);
var Ja = defineComponent({
  name: "ImCollapse",
  __name: "ImCollapse",
  props: {
    title: { default: "" },
    desc: { default: "" },
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: n }) {
    const t = N("collapse"), a = useSlots(), e = n, r = o;
    function s(c) {
      var u;
      return ((u = c.type) == null ? void 0 : u.name) === "ImCollapseItem";
    }
    function d(c) {
      let u = [];
      if (Array.isArray(c))
        for (let i = 0; i < c.length; i++)
          Array.isArray(c[i]) ? u = u.concat(d(c[i])) : s(c[i]) ? u.push(c[i]) : Array.isArray(c[i].children) && (u = u.concat(d(c[i].children)));
      return console.log(u, "result"), u.filter((i) => s(i));
    }
    const g = computed(() => {
      var c;
      return d((c = a.default) == null ? void 0 : c.call(a));
    }), m = (c) => {
      e("update:modelValue", c), e("change", c);
    };
    return (c, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (i) => (openBlock(), createBlock(resolveDynamicComponent(i), {
        key: i.key,
        activeName: r.modelValue,
        onChange: m
      }, null, 40, ["activeName"]))), 128))
    ], 2));
  }
});
var Qa = S(Ja, [["__scopeId", "data-v-37a8cdfc"]]);
var Za = defineComponent({
  name: "ImCollapseItem",
  __name: "ImCollapseItem",
  props: {
    title: { default: "" },
    desc: { default: "" },
    name: {},
    activeName: { default: "" }
  },
  emits: ["change"],
  setup(o, { emit: n }) {
    const t = N("collapse-item"), a = n, e = o, r = ref(
      e.activeName && e.activeName === e.name || false
    );
    watch(
      () => e.activeName,
      () => {
        console.log(e.activeName, e.name), r.value = !!(e.activeName && e.activeName === e.name);
      }
    );
    function s() {
      r.value = !r.value, e.name && a("change", r.value ? e.name : "");
    }
    async function d(m, c) {
      m.style.height = "auto";
      const u = m.getBoundingClientRect();
      m.style.height = "0px", m.style.transition = "all 0.3s ease", await new Promise((i) => requestAnimationFrame(i)), m.style.height = `${u.height}px`, c();
    }
    async function g(m, c) {
      m.style.transition = "all 0.3s ease", m.style.height = "0px", await new Promise((i) => requestAnimationFrame(i));
      const u = () => {
        m.removeEventListener("transitionend", u, { passive: true }), c();
      };
      m.addEventListener("transitionend", u, { passive: true });
    }
    return (m, c) => {
      const u = resolveComponent("ImIcon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(t).b()])
      }, [
        createBaseVNode("div", {
          class: normalizeClass([unref(t).e("title")]),
          onClick: s
        }, [
          renderSlot(m.$slots, "header", {}, () => [
            createBaseVNode("span", null, toDisplayString(e.title), 1),
            createBaseVNode("span", {
              class: normalizeClass([unref(t).e("right-icon"), unref(t).is("open", r.value)])
            }, [
              createVNode(u, { name: "down" })
            ], 2)
          ], true)
        ], 2),
        createVNode(Transition, {
          css: false,
          mode: "out-in",
          duration: { enter: 300, leave: 300 },
          onEnter: d,
          onLeave: g
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(t).e("content")])
            }, [
              createBaseVNode("div", {
                class: normalizeClass([unref(t).e("desc")])
              }, [
                renderSlot(m.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(e.desc), 1)
                ], true)
              ], 2)
            ], 2), [
              [vShow, r.value]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var eo = S(Za, [["__scopeId", "data-v-47331499"]]);
var to = R("ImCollapseItem", eo);
var ao = R("ImCollapse", Qa);
var oo = defineComponent({
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
  setup(o, { expose: n, emit: t }) {
    const a = o, e = t, r = ref(null), s = ref(a.modelValue), d = N("input-number"), g = computed(() => a.disabled || a.readonly), m = computed(() => {
      const _ = Number(a.min);
      return ge(_) && s.value <= _ || g.value;
    }), c = computed(() => {
      const _ = Number(a.max);
      return ge(_) && s.value >= _ || g.value;
    });
    watch(
      () => a.modelValue,
      () => {
        s.value = a.modelValue;
      }
    ), n({
      $el: r,
      focus: () => {
        var _;
        return (_ = r.value) == null ? void 0 : _.focus();
      },
      blur: () => {
        var _;
        return (_ = r.value) == null ? void 0 : _.blur();
      },
      // @ts-ignore
      getInput: () => r.value.$el
    });
    const u = (_) => a.precision === 0 ? Math.round(+_) : parseFloat(Number(_).toFixed(a.precision || 0));
    function i() {
      const _ = parseFloat(String(a.step || 1)), b = +s.value + _;
      $(u(b));
    }
    function v() {
      const _ = parseFloat(String(a.step || 1)), b = s.value - _;
      $(u(b));
    }
    function $(_) {
      let b = parseFloat(String(_));
      const x = ge(Number(a.min)) ? Number(a.min) : -1 / 0, B = ge(Number(a.max)) ? Number(a.max) : 1 / 0;
      Number.isNaN(b) && (b = 0), b < x && (b = x), b > B && (b = B), s.value = b, e("update:modelValue", b), e("change", b);
    }
    return (_, b) => {
      const x = resolveDirective("ripple");
      return openBlock(), createBlock(Se, mergeProps({
        class: [unref(d).b(), unref(d).is("control-right", a.controlRight)]
      }, a, {
        type: "number",
        modelValue: s.value,
        "onUpdate:modelValue": b[0] || (b[0] = (B) => s.value = B),
        onChange: $,
        onFocus: b[1] || (b[1] = () => e("focus")),
        onBlur: b[2] || (b[2] = () => e("blur")),
        onClear: b[3] || (b[3] = () => e("clear"))
      }), {
        prefix: withCtx(() => [
          a.controlRight ? createCommentVNode("", true) : withDirectives((openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(d).e("decrease"), unref(d).is("disabled", m.value)]),
            onClick: v
          }, [
            createVNode(unref(H), {
              name: "minus",
              size: "1.1em"
            })
          ], 2)), [
            [x, !m.value]
          ]),
          renderSlot(_.$slots, "prefix", {}, () => [
            a.prefix ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(d).e("prefix")])
            }, toDisplayString(a.prefix), 3)) : createCommentVNode("", true)
          ], true)
        ]),
        suffix: withCtx(() => [
          renderSlot(_.$slots, "suffix", {}, () => [
            a.suffix ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(d).e("suffix")])
            }, toDisplayString(a.suffix), 3)) : createCommentVNode("", true)
          ], true),
          a.controlRight ? createCommentVNode("", true) : withDirectives((openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(d).e("increase"), unref(d).is("disabled", c.value)]),
            onClick: i
          }, [
            createVNode(unref(H), {
              name: "plus",
              size: "1.1em"
            })
          ], 2)), [
            [x, !c.value]
          ]),
          a.controlRight ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(d).e("control-right")])
          }, [
            withDirectives((openBlock(), createElementBlock("span", {
              class: normalizeClass([unref(d).e("up"), unref(d).is("disabled", c.value)]),
              onClick: i
            }, [
              createVNode(unref(H), {
                name: "up",
                size: "0.9em"
              })
            ], 2)), [
              [x, !c.value]
            ]),
            createBaseVNode("span", {
              class: normalizeClass([unref(d).e("control-divider")])
            }, null, 2),
            withDirectives((openBlock(), createElementBlock("span", {
              onClick: v,
              class: normalizeClass([unref(d).e("down"), unref(d).is("disabled", m.value)])
            }, [
              createVNode(unref(H), {
                name: "down",
                size: "0.9em"
              })
            ], 2)), [
              [x, !m.value]
            ])
          ], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16, ["class", "modelValue"]);
    };
  }
});
var no = S(oo, [["__scopeId", "data-v-0f29ae09"]]);
var so = R("ImInputNumber", no);
var lo = ["tabindex"];
var io = {
  key: 0,
  class: "im-checkbox_state-icon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
};
var ro = {
  key: 1,
  class: "im-checkbox_state-icon",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  fill: "currentColor"
};
var co = {
  key: 2,
  class: "im-checkbox_state-icon",
  fill: "currentColor",
  viewBox: "0 0 24 24"
};
var uo = ["value", "disabled", "readonly", "checked"];
var mo = defineComponent({
  name: "ImCheckbox",
  __name: "ImCheckbox",
  props: {
    modelValue: { type: [Boolean, Array], default: false },
    value: { default: void 0 },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean },
    label: { default: "" },
    indeterminate: { type: Boolean },
    checked: { type: Boolean },
    tabindex: {},
    size: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(o, { emit: n }) {
    const t = N("checkbox"), a = n, e = o, { sizeToken: r } = ae(), s = ref(c()), d = computed(() => !e.disabled && !e.readonly), g = computed(
      () => Z(e.size || r.value || "36px")
    );
    watch(
      () => e.modelValue,
      () => {
        s.value = c();
      }
    ), watch(
      () => e.checked,
      (i) => {
        s.value = i;
      }
    );
    function m(i) {
      const v = i.target;
      s.value = v.checked, u();
    }
    function c() {
      return Array.isArray(e.modelValue) ? e.modelValue.includes(e.value) : !!(e.modelValue || e.checked);
    }
    function u() {
      if (s.value)
        if (Array.isArray(e.modelValue)) {
          const i = [...e.modelValue];
          e.value && !i.includes(e.value) && (i.push(e.value), a("update:modelValue", i), a("change", i));
        } else
          a("update:modelValue", true), a("change", true);
      else if (Array.isArray(e.modelValue)) {
        const i = [...e.modelValue];
        if (e.value && i.includes(e.value)) {
          const v = i.indexOf(e.value);
          v > -1 && (i.splice(v, 1), a("update:modelValue", i), a("change", i));
        }
      } else
        a("update:modelValue", false), a("change", false);
    }
    return (i, v) => {
      const $ = resolveDirective("ripple");
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(t).b(),
          unref(t).is("checked", s.value || e.indeterminate),
          unref(t).is("readonly", e.readonly),
          unref(t).is("disabled", e.disabled),
          unref(t).is("indeterminate", e.indeterminate)
        ]),
        tabindex: e.tabindex,
        style: normalizeStyle({
          "--im-checkbox-size": g.value
        })
      }, [
        withDirectives((openBlock(), createElementBlock("span", {
          class: normalizeClass([unref(t).e("state")])
        }, [
          createVNode(Transition, {
            name: "fade",
            mode: "out-in",
            duration: { enter: 200, leave: 200 }
          }, {
            default: withCtx(() => [
              s.value ? (openBlock(), createElementBlock("svg", io, v[0] || (v[0] = [
                createBaseVNode("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 13.29c-.39.39-1.02.39-1.41 0L5.71 12.7a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.58 7.59z" }, null, -1)
              ]))) : e.indeterminate ? (openBlock(), createElementBlock("svg", ro, v[1] || (v[1] = [
                createBaseVNode("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z" }, null, -1)
              ]))) : (openBlock(), createElementBlock("svg", co, v[2] || (v[2] = [
                createBaseVNode("path", { d: "M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }, null, -1)
              ])))
            ]),
            _: 1
          })
        ], 2)), [
          [$, d.value]
        ]),
        createBaseVNode("span", {
          class: normalizeClass([unref(t).e("inner")])
        }, [
          renderSlot(i.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(e.label), 1)
          ], true)
        ], 2),
        createBaseVNode("input", {
          type: "checkbox",
          class: normalizeClass([unref(t).e("input")]),
          value: e.value,
          disabled: e.disabled,
          readonly: e.readonly,
          checked: s.value,
          onChange: m,
          tabindex: -1
        }, null, 42, uo)
      ], 14, lo);
    };
  }
});
var po = S(mo, [["__scopeId", "data-v-736eeee7"]]);
var fo = R("ImCheckbox", po);
var vo = defineComponent({
  name: "ImTable",
  __name: "ImTable",
  props: {
    border: { type: Boolean, default: false },
    stript: { type: Boolean, default: false },
    height: { default: "100%" },
    fixedHeader: { type: Boolean, default: false }
  },
  setup(o) {
    const n = N("table"), t = o, a = computed(() => Z(t.height));
    return (e, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(n).b(),
        unref(n).is("border", t.border),
        unref(n).is("stript", t.stript),
        unref(n).is("fixed-header", t.fixedHeader)
      ]),
      style: normalizeStyle({
        height: a.value
      })
    }, [
      createBaseVNode("table", {
        class: normalizeClass([unref(n).e("table")])
      }, [
        renderSlot(e.$slots, "default")
      ], 2)
    ], 6));
  }
});
var go = R("ImTable", vo);
var ho = [
  Le,
  Ne,
  Ae,
  Me,
  H,
  we,
  Ot,
  Yt,
  Ut,
  Gt,
  ta,
  la,
  ia,
  da,
  Re,
  ya,
  wa,
  za,
  Ra,
  Ze,
  Qe,
  Ha,
  Wa,
  ja,
  Ka,
  ao,
  to,
  so,
  fo,
  go
];
var bo = (o, n) => {
  o.provide(Ue, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), o.directive("ripple", pt), o.directive("loading", bt), ho.forEach((t) => {
    t.name ? o.component(t.name, t) : console.warn(`组件${t}缺少name属性`);
  });
};
var ko = {
  install: bo
};
export {
  Yt as ImAlert,
  Ot as ImAnchor,
  da as ImAvatar,
  Ka as ImBackTop,
  ja as ImBadge,
  Ut as ImBreadcrumb,
  Gt as ImBreadcrumbItem,
  Le as ImButton,
  wa as ImCard,
  fo as ImCheckbox,
  Ne as ImCol,
  ao as ImCollapse,
  to as ImCollapseItem,
  za as ImDialog,
  we as ImDivider,
  ya as ImDrawer,
  ta as ImDropdown,
  H as ImIcon,
  Me as ImInput,
  so as ImInputNumber,
  la as ImList,
  ia as ImListItem,
  Re as ImMask,
  Ra as ImPagination,
  Wa as ImPopover,
  Ae as ImRow,
  Ze as ImSelect,
  go as ImTable,
  Qe as ImTag,
  Ha as ImTooltip,
  ko as default,
  wo as useImLoading,
  Io as useImMessage
};
//# sourceMappingURL=im-design.js.map
