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

// node_modules/.pnpm/im-design@0.0.49/node_modules/im-design/dist/im-design.js
var et = Object.defineProperty;
var De = (a) => {
  throw TypeError(a);
};
var tt = (a, n, t) => n in a ? et(a, n, { enumerable: true, configurable: true, writable: true, value: t }) : a[n] = t;
var ve = (a, n, t) => tt(a, typeof n != "symbol" ? n + "" : n, t);
var Oe = (a, n, t) => n.has(a) || De("Cannot " + t);
var oe = (a, n, t) => (Oe(a, n, "read from private field"), t ? t.call(a) : n.get(a));
var Te = (a, n, t) => n.has(a) ? De("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(a) : n.set(a, t);
var ge = (a, n, t, o) => (Oe(a, n, "write to private field"), o ? o.call(a, t) : n.set(a, t), t);
var Ue = Symbol("im-design-token");
var re;
var ut = class {
  constructor() {
    Te(this, re);
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
      const r = o - Number(e) || 0;
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
        n && (n == null || n.remove()), oe(this, re).length && this.remove();
      }, 50);
    } catch (t) {
      console.log(t);
    }
  }
};
re = /* @__PURE__ */ new WeakMap();
var pe = "data-ripple";
async function dt(a, n, t) {
  const o = window.getComputedStyle(t), e = t.getBoundingClientRect(), r = document.createElement("div");
  r.className = "im-ripple", n.add(r);
  const s = document.createElement("div");
  s.className = "im-ripple__item";
  const d = a.clientX || a.touches && a.touches[0].clientX, v = a.clientY || a.touches && a.touches[0].clientY, m = Math.max(e.width, e.height), u = d - e.left - m / 2, c = v - e.top - m / 2, i = e.width - e.height <= 5;
  Object.assign(s.style, {
    "background-color": o.color,
    width: `${m}px`,
    height: `${m}px`,
    left: `${u}px`,
    top: `${c}px`,
    opacity: "0.15",
    transform: i ? "scale(1)" : "scale(0.25)",
    "will-change": "transform,opacity"
    // 提示浏览器优化动画
  }), s.setAttribute("data-time", Date.now() + ""), r.appendChild(s), t.appendChild(r);
  const g = o.position;
  g === "static" && (t.style.position = "relative", t.dataset.originalPosition = g), s.getBoundingClientRect(), s.style.transform = "scale(2.8)", s.style.opacity = "0.33";
}
function Fe(a, n) {
  n.value ? !a.hasAttribute(pe) && a.setAttribute(pe, "on") : a.hasAttribute(pe) && a.setAttribute(pe, "off");
}
function mt(a) {
  return a.getAttribute(pe) === "on";
}
var pt = {
  mounted(a, n) {
    Fe(a, n);
    const t = new ut(), o = (d) => {
      mt(a) && dt(d, t, a);
    }, e = () => {
      t.remove();
    }, r = () => {
      a.addEventListener("mousedown", o, { passive: true }), window.addEventListener("mouseup", e, { passive: true });
    }, s = () => {
      a.removeEventListener("mousedown", o), window.removeEventListener("mouseup", e);
    };
    r(), a._rippleListeners = { remove: s };
  },
  beforeUnmount(a) {
    var n;
    (n = a._rippleListeners) == null || n.remove();
  },
  updated(a, n) {
    Fe(a, n);
  }
};
var S = (a) => {
  const n = "im-" + a;
  return {
    b: () => n,
    e: (t) => `${n}__${t}`,
    m: (t) => `${n}--${t}`,
    is: (t, o) => o ? `is-${t}` : ""
  };
};
var ft = Object.prototype.toString;
var vt = (a) => ft.call(a) === "[object Number]";
var we = (a, n) => {
  let t;
  return function(...o) {
    t || (t = setTimeout(() => {
      a.apply(this, o), t = null;
    }, n));
  };
};
var ze = (a, n) => {
  let t;
  return function(...o) {
    t && clearTimeout(t), t = setTimeout(() => {
      a.apply(this, o);
    }, n);
  };
};
var gt = ["%", "px", "em", "rem", "vh", "vw", "vmin", "vmax"];
var te = (a) => {
  if (typeof a == "number") return `${a}px`;
  const n = String(a);
  return a ? gt.some((t) => n.includes(t)) ? n : `${a}px` : "";
};
var he = (a) => a != null && !Number.isNaN(a) && vt(a);
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
  setup(a) {
    const n = S("loading"), t = a, o = computed(() => te(t.size));
    return (e, r) => (openBlock(), createElementBlock("div", {
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
var A = (a, n) => {
  const t = a.__vccOpts || a;
  for (const [o, e] of n)
    t[o] = e;
  return t;
};
var Ge = A(ht, [["__scopeId", "data-v-8ece8f88"]]);
function be(a, n) {
  Ie(a);
  const t = createApp(Ge, {
    loading: true,
    fullScreen: false,
    loadingText: n
  }), o = document.createElement("div"), e = window.getComputedStyle(a);
  e.overflow !== "hidden" && (a.dataset.overflow = e.overflow, a.style.overflow = "hidden"), e.position === "static" && (a.dataset.position = e.position, a.style.position = "relative"), a.appendChild(o), t.mount(o), a.IM_LOADING_INSTANCE = t;
}
function Ie(a) {
  const n = a == null ? void 0 : a.IM_LOADING_INSTANCE;
  if (n)
    try {
      n.unmount(), n._container.remove(), a.IM_LOADING_INSTANCE = null, a.dataset.overflow && (a.style.overflow = a.dataset.overflow, delete a.dataset.overflow), a.dataset.position && (a.style.position = a.dataset.position, delete a.dataset.position);
    } catch (t) {
      console.error(t);
    }
}
var bt = {
  mounted(a, n) {
    var t, o;
    if (typeof n.value == "boolean")
      return n.value && be(a);
    (t = n.value) != null && t.loading && be(a, (o = n.value) == null ? void 0 : o.loadingText);
  },
  beforeUnmount(a) {
    Ie(a);
  },
  updated(a, n) {
    var t, o;
    if (typeof n.value == "boolean")
      return n.value ? be(a) : Ie(a);
    (t = n.value) != null && t.loading ? be(a, (o = n.value) == null ? void 0 : o.loadingText) : Ie(a);
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
var O = A(yt, [["__scopeId", "data-v-a82dfaa3"]]);
O.install = function(a) {
  a.component("ImIcon", O);
};
var It = ["data-index", "onMouseenter", "onMouseleave"];
var _t = { class: "im-message__text" };
var wt = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(a, { expose: n }) {
    const t = S("message"), o = a, e = ref([]);
    let r = null;
    watch(() => e.value, () => {
      e.value.length === 0 ? r = setTimeout(() => {
        !e.value.length && o.callback();
      }, 500) : (r && clearTimeout(r), r = null);
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
    }, d = (u) => {
      u.timer && (clearTimeout(u.timer), u.timer = null);
    }, v = (u) => {
      u.timer && clearTimeout(u.timer), u.timer = setTimeout(() => {
        e.value = e.value.filter((c) => c.id !== u.id);
      }, u.duration || 3e3);
    }, m = (u) => {
      const c = setTimeout(() => {
        e.value = e.value.filter((i) => i.id !== u.id);
      }, u.duration || 3e3);
      e.value.push({ ...u, timer: c });
    };
    return o.add && o.add(m), n({ addMsg: m }), (u, c) => (openBlock(), createBlock(TransitionGroup, {
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
          onMouseleave: () => v(i),
          class: normalizeClass(["im-message__item", [unref(t).e("item"), i.color ? unref(t).e(i.color) : ""]])
        }, [
          createVNode(unref(O), {
            name: s(i.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", _t, toDisplayString(i.msg), 1)
        ], 42, It))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var kt = A(wt, [["__scopeId", "data-v-820c83a9"]]);
var xt = class {
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
var da = () => (K || (K = new xt()), {
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
var Ct = class {
  constructor() {
    Te(this, ee);
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
var Ye = new Ct();
var ma = () => ({
  show(a) {
    Ye.setLoading(true, a);
  },
  hide() {
    Ye.setLoading(false);
  }
});
var ne = (a, n) => {
  const t = inject(Ue), o = ref(Number(t.size || 36)), e = ref(t.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: e };
};
var zt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function $t(a, n) {
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
  setup(a, { expose: n, emit: t }) {
    const o = a, e = t, r = S("button"), { sizeToken: s } = ne(), d = useAttrs(), v = computed(() => [
      r.b(),
      o.color && r.m(o.color),
      o.shape && r.m(o.shape),
      o.variant && r.m(o.variant),
      r.is("disabled", o.disabled),
      r.is("loading", o.loading)
    ].filter(Boolean)), m = ref(), u = computed(() => {
      let g = +(o.size || s.value || 36);
      return {
        "--im-button-size": g + "px",
        "--im-button-padding": (g * 0.45).toFixed(0) + "px",
        width: o.width
      };
    });
    n({
      ref: m,
      $el: m,
      focus: () => {
        var g;
        return (g = m.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = m.value) == null ? void 0 : g.blur();
      }
    });
    const c = computed(() => o.loading && ["square", "circle"].includes(o.shape)), i = () => {
      o.disabled || o.loading || e("click");
    };
    return (g, V) => {
      const I = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", mergeProps(unref(d), {
        class: v.value,
        onClick: i,
        ref_key: "buttonRef",
        ref: m,
        style: u.value,
        tabindex: o.tabindex || 0,
        type: o.type || "button",
        disabled: o.disabled || o.loading
      }), [
        o.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(r).e("loading")])
        }, [
          createVNode(unref(Bt))
        ], 2)) : createCommentVNode("", true),
        c.value ? createCommentVNode("", true) : renderSlot(g.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(o.text), 1)
        ], true)
      ], 16, Vt)), [
        [I, true]
      ]);
    };
  }
});
var Le = A(Tt, [["__scopeId", "data-v-a3d92bde"]]);
Le.install = (a) => {
  a.component("ImButton", Le);
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
  setup(a) {
    const n = a, t = useSlots(), o = computed(() => {
      var r;
      return ((r = t.default) == null ? void 0 : r.call(t)) || [];
    }), e = S("row");
    return (r, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (d, v) => (openBlock(), createBlock(resolveDynamicComponent(d), { key: v }))), 128))
    ], 6));
  }
});
var Ne = A(Lt, [["__scopeId", "data-v-5179967f"]]);
var Nt = defineComponent({
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
    const n = a, t = S("col"), o = computed(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (e, r) => (openBlock(), createElementBlock("div", {
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
var Se = A(Nt, [["__scopeId", "data-v-ecf91058"]]);
Ne.install = (a) => {
  a.component("ImRow", Ne);
};
Se.install = (a) => {
  a.component("ImCol", Se);
};
var St = ["disabled", "readonly", "placeholder", "name", "type", "max", "min", "maxlength", "minlength", "step", "pattern", "autocomplete", "autofocus", "tabindex", "id", "value"];
var At = defineComponent({
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
    const o = a, e = ref(null), { sizeToken: r } = ne(), s = t, d = ref(o.modelValue), v = S("input"), m = computed(
      () => te(o.size || r.value || 36)
    );
    watch(
      () => o.modelValue,
      () => {
        d.value = o.modelValue;
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
    const u = (i) => {
      const g = i.target;
      d.value = g.value, s("update:modelValue", d.value), s("change", d.value);
    };
    function c(i) {
      i.stopPropagation(), d.value = "", s("update:modelValue", d.value), s("change", d.value), s("clear");
    }
    return (i, g) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(v).b(),
        unref(v).is("disabled", o.disabled),
        unref(v).is("readonly", o.readonly),
        unref(v).is("has-append", o.isAppend),
        unref(v).is("has-prepend", o.isPrepend)
      ]),
      style: normalizeStyle({
        "--im-input-size": m.value
      })
    }, [
      renderSlot(i.$slots, "prefix", {}, () => [
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
        value: d.value,
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
          onClick: c
        })
      ], 2), [
        [vShow, o.clearable && d.value && !(o.disabled || o.readonly)]
      ]),
      renderSlot(i.$slots, "suffix", {}, () => [
        o.prefix ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(v).e("suffix")])
        }, toDisplayString(o.suffix), 3)) : createCommentVNode("", true)
      ], true)
    ], 6));
  }
});
var Ae = A(At, [["__scopeId", "data-v-41a2aed9"]]);
var Et = defineComponent({
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
    const o = useSlots(), e = a, r = t, s = ref(null), d = ref(e.modelValue), v = S("input-wrapper"), m = computed(() => te(e.size || 36)), u = computed(() => {
      var i;
      return !!(e.prepend || (i = o.prepend) != null && i.call(o));
    }), c = computed(() => {
      var i;
      return !!(e.append || (i = o.append) != null && i.call(o));
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
    }), (i, g) => u.value || c.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass([unref(v).b()]),
      style: normalizeStyle({
        "--im-input-wrapper-size": m.value
      })
    }, [
      u.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(v).e("prepend")])
      }, [
        renderSlot(i.$slots, "prepend", {}, () => [
          createTextVNode(toDisplayString(e.prepend), 1)
        ], true)
      ], 2)) : createCommentVNode("", true),
      createVNode(Ae, mergeProps(e, {
        modelValue: d.value,
        "onUpdate:modelValue": g[0] || (g[0] = (V) => d.value = V),
        ref_key: "inputRef",
        ref: s,
        size: m.value,
        isPrepend: u.value,
        isAppend: c.value
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
      c.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass([unref(v).e("append")])
      }, [
        renderSlot(i.$slots, "append", {}, () => [
          createTextVNode(toDisplayString(e.append), 1)
        ], true)
      ], 2)) : createCommentVNode("", true)
    ], 6)) : (openBlock(), createBlock(Ae, mergeProps({ key: 1 }, e, {
      modelValue: d.value,
      "onUpdate:modelValue": g[1] || (g[1] = (V) => d.value = V),
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
var Ee = A(Et, [["__scopeId", "data-v-e056ad34"]]);
Ee.install = (a) => {
  a.component("ImInput", Ee);
};
var Mt = defineComponent({
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
    const n = S("divider"), t = a;
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
var ke = A(Mt, [["__scopeId", "data-v-108f9bec"]]);
ke.name = "ImDivider";
ke.install = function(a) {
  a.component("ImDivider", ke);
};
var F = (a, n) => (n.install = (t) => {
  t.component(a, n);
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
  setup(a) {
    const n = S("anchor");
    let t = null;
    const o = ref(null), e = ref(null), r = ref(null), s = a;
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
    function d(c) {
      let i = c == null ? void 0 : c.scrollTop;
      return o.value === window && (i = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), i;
    }
    function v(c) {
      var b;
      if (r.value || !o.value) return;
      const i = o.value === window ? c.target : o.value;
      let g = d(i);
      const V = i.offsetTop || 0, I = (s.data || []).map(({ id: x }) => {
        const $ = document.getElementById(x);
        return $ ? {
          id: x,
          offsetTop: $.offsetTop - V,
          el: $
        } : null;
      }).filter(Boolean);
      e.value = null;
      for (let x = 0; x < I.length; x++) {
        const $ = I[x];
        if (g >= $.offsetTop - (s.offset || 0) && g <= $.offsetTop + (((b = $.el) == null ? void 0 : b.clientHeight) || 0) - (s.offset || 0)) {
          e.value = $.id;
          return;
        }
      }
      if (!e.value && g >= (parseInt(String(s.offset)) || 0)) {
        const x = I.find(($) => g <= $.offsetTop - (s.offset || 0) && g > (s.offset || 0) ? (e.value = $.id, true) : false);
        x && (e.value = x.id);
      }
    }
    function m() {
      const c = s.target ? typeof s.target == "string" ? document.querySelector(s.target) : s.target : window;
      if (!c)
        return null;
      o.value = c;
      const i = we(v, 50);
      return v({ target: c }), c.addEventListener("scroll", i, { passive: true }), () => {
        c.removeEventListener("scroll", i);
      };
    }
    async function u(c) {
      var V, I, b;
      if (e.value === c || !c) return;
      r.value = c, e.value = c;
      const i = document.getElementById(c);
      if (!i) return;
      (I = o.value) == null || I.scrollTo({
        // @ts-ignore
        top: i.offsetTop - (s.offset || 0) - (((V = o.value) == null ? void 0 : V.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const g = ze(() => {
        var x;
        r.value = null, (x = o.value) == null || x.removeEventListener("scroll", g);
      }, 300);
      (b = o.value) == null || b.addEventListener("scroll", g, { passive: true });
    }
    return (c, i) => {
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
        ], 10, Pt)), [
          [g, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Dt = A(Rt, [["__scopeId", "data-v-4840d244"]]);
var Ot = F("ImAnchor", Dt);
var Ft = defineComponent({
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
    const t = n, o = ref(null), e = a, r = S("alert"), s = useSlots(), d = computed(() => !!(e.showIcon && e.title)), v = computed(() => {
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
      var u, c;
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
      }), await new Promise((i) => setTimeout(i, 300)), (c = o.value) == null || c.remove();
    };
    return (u, c) => {
      const i = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: o,
        class: normalizeClass([unref(r).b(), unref(r).m(e.color || "primary"), e.variant && unref(r).m(e.variant || "")])
      }, [
        e.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(r).e("icon")])
        }, [
          renderSlot(u.$slots, "icon", {}, () => [
            createVNode(unref(O), {
              name: v.value,
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
            renderSlot(u.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(e.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(r).e("message")])
          }, [
            renderSlot(u.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(e.message), 1)
            ], true)
          ], 2)
        ], 2),
        e.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(r).e("close")]),
          onClick: m
        }, [
          renderSlot(u.$slots, "close", {}, () => [
            createVNode(unref(O), {
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
var Yt = A(Ft, [["__scopeId", "data-v-d11fdcb2"]]);
var Ht = F("ImAlert", Yt);
var Wt = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: n }) {
    const t = useSlots(), o = n, e = S("breadcrumb"), r = a, s = computed(
      () => {
        var v, m;
        return (m = (v = t.default) == null ? void 0 : v.call(t)) == null ? void 0 : m.filter((u) => {
          var c;
          return (u == null ? void 0 : u.type) && ((c = u == null ? void 0 : u.type) == null ? void 0 : c.name) === "ImBreadcrumbItem";
        });
      }
    ), d = (v) => {
      v && r.modelValue !== v && (o("update:modelValue", v), o("change", v));
    };
    return (v, m) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (u, c) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(u), {
          active: r.modelValue,
          onClick: d
        }, null, 8, ["active"])),
        s.value && s.value.length > 0 && c < s.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(e).e("separator")])
        }, [
          renderSlot(v.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(r.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var qt = A(Wt, [["__scopeId", "data-v-64336468"]]);
var Xt = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(a, { emit: n }) {
    const t = S("breadcrumb__item"), o = a, e = n;
    return (r, s) => (openBlock(), createElementBlock("div", {
      onClick: s[0] || (s[0] = () => e("click", o.value)),
      class: normalizeClass([unref(t).b(), unref(t).is("active", o.active === o.value && !!o.value)])
    }, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var jt = A(Xt, [["__scopeId", "data-v-40ed04b1"]]);
var Ut = F("ImBreadcrumb", qt);
var Gt = F("ImBreadcrumb", jt);
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
var Kt = () => document ? document.body.style.overflow === "hidden" || document.body.classList.contains("im-lock-scroll") : false;
var Je = async () => {
  try {
    if (await new Promise((n) => setTimeout(n, 0)), !document) return Promise.resolve();
    Array.from(document.querySelectorAll(".is-im-lock-scroll")).length ? Kt() || document.body.classList.add("im-lock-scroll") : document.body.classList.remove("im-lock-scroll");
  } catch {
  }
};
var Jt = ["role"];
var Be = defineComponent({
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
    const { zIndexToken: t } = ne(), o = S("layer"), e = ref(null), r = n, s = a, d = reactive({
      top: "",
      left: "",
      minWidth: "fit-content"
    }), v = computed(() => b(s.placement)), m = {
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
    const u = ["bottom", "bottom-left", "bottom-right"], c = ["top", "top-left", "top-right"], i = ["right", "right-top", "right-bottom"], g = ["left", "left-top", "left-bottom"];
    function V(y, w, B = "bottom-left") {
      const { height: J } = $e();
      let D = 0;
      const se = s.arrow ? parseInt(String(s.offset || 0)) : 0;
      if (u.includes(B))
        D = y.bottom, D += se;
      else if (c.includes(B))
        D = y.top - w.height, D -= se;
      else if (i.includes(B) || g.includes(B))
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
    function I(y, w, B = "bottom-left") {
      const J = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let D = 0;
      const se = s.arrow ? parseInt(String(s.offset || 0)) : 0;
      if (u.includes(B) || c.includes(B))
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
      else i.includes(B) ? D = y.left + y.width + se : g.includes(B) && (D = y.left - w.width - se);
      return D <= 0 ? 0 : D + w.width >= J ? J - w.width : D || y.left || 0;
    }
    const b = (y) => [...u, ...c, ...i, ...g].includes(y) ? s.placement : "bottom-left";
    function x(y) {
      if (s.scrollClose) {
        const w = y.target, B = e.value;
        if (w && w === B || B != null && B.contains(w))
          return;
        r("close", true);
      } else
        Z();
    }
    const $ = we(Z, 100), C = we(x, 100);
    async function Z() {
      var se;
      const y = (se = s.getTriggerContainer) == null ? void 0 : se.call(s);
      if (!y)
        return r("close", true);
      ie();
      const w = v.value, B = e.value, J = y.getBoundingClientRect(), D = B.getBoundingClientRect();
      d.minWidth = s.role == "tooltip" ? "fit-content" : `${J.width}px`, d.top = `${V(J, D, w)}px`, d.left = `${I(J, D, w)}px`;
    }
    function G() {
      window.removeEventListener("scroll", C), s.visible && window.addEventListener("scroll", C, {
        passive: true,
        capture: true
      });
    }
    function U() {
      window.removeEventListener("resize", $), s.visible && window.addEventListener("resize", $, {
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
      if ((i.includes(v.value) || g.includes(v.value)) && ["right-bottom", "left-bottom"].includes(v.value)) {
        y.style.transformOrigin = "center bottom";
        return;
      }
      y.style.transformOrigin = "center top";
    }
    async function k(y) {
      const w = y;
      w.style.setProperty("transition", "none"), G(), U(), await new Promise((B) => requestAnimationFrame(B)), Z();
      try {
        w.getAnimations().forEach((B) => B == null ? void 0 : B.cancel()), w.animate(
          s.role === "tooltip" ? m.tooltip : m.dropdown,
          m.option
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
        s.role === "tooltip" ? m.tooltipLeave : m.dropdownLeave,
        m.option
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
            onMouseenter: w[0] || (w[0] = (B) => r("mouseenter", B)),
            onMouseleave: w[1] || (w[1] = (B) => r("mouseleave", B)),
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
              ...d
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
  setup(a, { emit: n }) {
    const t = n, o = S("dropdown"), e = a, r = ref(null), s = ref(e.modelValue || false);
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
    function v() {
      return r.value;
    }
    function m(b) {
      if (s.value) {
        const x = b.target, $ = r.value;
        if (x === $ || $ != null && $.contains(x) || x.classList.contains("is-disabled")) return;
        i(false);
      }
    }
    function u() {
      (e.trigger === "hover" || !e.trigger) && i(true);
    }
    function c() {
      (e.trigger === "hover" || !e.trigger) && i(false);
    }
    const i = ze((b) => {
      b ? V() : I();
    }, Qt);
    function g() {
      !s.value && i(true);
    }
    function V() {
      s.value = true, t("update:modelValue", s.value), t("change", s.value);
    }
    function I() {
      s.value = false, t("update:modelValue", s.value), t("change", s.value);
    }
    return (b, x) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(o).b()]),
      ref_key: "dropdownRef",
      ref: r,
      onMouseenter: u,
      onMouseleave: c,
      onClick: g
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode(Be, {
        visible: s.value,
        customClass: unref(o).e("content"),
        placement: e.placement,
        offset: e.offset,
        "z-index": e.zIndex,
        getTriggerContainer: v,
        arrow: e.arrow,
        scrollClose: e.scrollClose,
        onClose: I,
        onMouseenter: u,
        onMouseleave: c
      }, {
        default: withCtx(() => [
          renderSlot(b.$slots, "content", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["visible", "customClass", "placement", "offset", "z-index", "arrow", "scrollClose"])
    ], 34));
  }
});
var eo = A(Zt, [["__scopeId", "data-v-64b1a7dc"]]);
var to = F("ImDropdown", eo);
var oo = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: n }) {
    const t = a, o = useSlots(), e = S("list"), r = (u) => typeof u.type == "object" && u.type !== null, s = (u, c) => {
      const i = [];
      return u.forEach((g) => {
        if (r(g) && g.type && g.type.name == c) {
          const V = g.props || {};
          i.push({ vnode: g, props: V });
        } else g && (g != null && g.children) && Array.isArray(g.children) && i.push(...s(g.children, c));
      }), i;
    }, d = computed(() => {
      var i;
      const u = ((i = o.default) == null ? void 0 : i.call(o)) || [];
      return s(u, "ImListItem").map((g) => g.vnode);
    }), v = n, m = (u) => {
      var i;
      const c = ((i = u.props) == null ? void 0 : i.value) || "";
      console.log(c, "value"), !(c !== 0 && !c) && (v("update:modelValue", c), v("change", c));
    };
    return (u, c) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(e).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (i) => (openBlock(), createBlock(resolveDynamicComponent(i), {
        active: t.modelValue,
        onClick: () => m(i)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var ao = A(oo, [["__scopeId", "data-v-541c876e"]]);
var no = defineComponent({
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
    const t = S("list__item"), o = n, e = a;
    function r(s) {
      if (e.disabled) {
        s.stopPropagation();
        return;
      }
      o("click", e.value);
    }
    return (s, d) => {
      const v = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(t).b(), unref(t).is("active", !!(e.active && e.active === e.value)), unref(t).is("disabled", e.disabled)]),
        onClick: r
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2)), [
        [v, e.ripple && !e.disabled]
      ]);
    };
  }
});
var so = A(no, [["__scopeId", "data-v-6df1dd93"]]);
var lo = F("ImList", ao);
var io = F("ImListItem", so);
var ro = ["src", "srcset", "alt", "loading"];
var co = defineComponent({
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
    const t = n, o = S("avatar"), e = a, r = (s) => {
      console.log(s.target), t("error", s);
    };
    return (s, d) => (openBlock(), createElementBlock("span", {
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
        onError: r,
        src: e.src,
        srcset: e.srcset,
        alt: e.alt,
        loading: e.loading,
        class: normalizeClass([unref(o).e("img")])
      }, null, 42, ro))
    ], 6));
  }
});
var uo = A(co, [["__scopeId", "data-v-c4c32038"]]);
var mo = F("ImAvatar", uo);
var po = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(a, { emit: n }) {
    const t = S("mask"), { zIndexToken: o } = ne(), e = a, r = n, s = () => {
      e.closeOnClickMask && r("close", false);
    };
    return (d, v) => (openBlock(), createBlock(Transition, { name: "fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(t).b()]),
          style: normalizeStyle({
            zIndex: e.zIndex || unref(o)
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
var fo = A(po, [["__scopeId", "data-v-d5aadf77"]]);
var Re = F("ImMask", fo);
var le = {
  duration: 200,
  delay: 0,
  easing: "ease-out"
};
function Ve(a, n = "right") {
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
  let t = Ve(a, "right"), o = [];
  n ? o = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : o = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], a == null || a.animate(o, le);
};
var He = async (a, n = true) => {
  let t = Ve(a, "left"), o = [];
  n ? o = [
    { transform: t, opacity: 0 },
    { transform: "translateX(0)", opacity: 1 }
  ] : o = [
    { transform: "translateX(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], a == null || a.animate(o, le);
};
var We = async (a, n = true) => {
  let t = Ve(a, "top"), o = [];
  n ? o = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : o = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], a == null || a.animate(o, le);
};
var qe = async (a, n = true) => {
  let t = Ve(a, "bottom"), o = [];
  n ? o = [
    { transform: t, opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  ] : o = [
    { transform: "translateY(0)", opacity: 1 },
    { transform: t, opacity: 0 }
  ], a == null || a.animate(o, le);
};
var vo = async (a, n) => {
  let t = [], o = "center";
  const e = (n == null ? void 0 : n.getBoundingClientRect()) || null, { width: r, height: s } = $e(), d = a.getBoundingClientRect();
  if (e) {
    const v = (e.left - d.left) / d.width * 100, m = (e.top - d.top) / d.height * 100;
    o = `${v}% ${m}%`;
  } else {
    const v = (r * 0.5 - d.left) / d.width * 100, m = (s - d.top) / d.height * 100;
    o = `${v}% ${m}%`;
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
var go = async (a, n) => {
  let t = [], o = "center";
  const e = (n == null ? void 0 : n.getBoundingClientRect()) || null, { width: r, height: s } = $e(), d = a.getBoundingClientRect();
  let v = "50%", m = "50%";
  e ? (v = (e.left + e.width * 0.5 - d.left) / d.width * 100, m = (e.top + e.height * 0.5 - d.top) / d.height * 100, o = `${v}% ${m}%`) : (v = (r * 0.5 - d.left) / d.width * 100, m = (s - d.top) / d.height * 100, o = `${v}% ${m}%`), t = [
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
var ho = ["aria-modal"];
var bo = defineComponent({
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
    const t = S("drawer"), o = n, e = a, r = ref(null), { zIndexToken: s } = ne(), d = computed(() => te(e.size || s.value || "280px"));
    watch(() => e.modelValue, (c) => {
      Je();
    }, { immediate: true });
    const v = () => {
      o("update:modelValue", false);
    };
    function m(c, i) {
      switch (xe(c), e.placement) {
        case "right":
          ye(c);
          break;
        case "left":
          He(c);
          break;
        case "top":
          We(c);
          break;
        case "bottom":
          qe(c);
          break;
        default:
          ye(c);
          break;
      }
      i();
    }
    function u(c, i) {
      switch (xe(c), e.placement) {
        case "right":
          ye(c, false);
          break;
        case "left":
          He(c, false);
          break;
        case "top":
          We(c, false);
          break;
        case "bottom":
          qe(c, false);
          break;
        default:
          ye(c, false);
          break;
      }
      Ke(c).finally(i);
    }
    return (c, i) => (openBlock(), createBlock(Teleport, { to: "body" }, [
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
          onClose: v,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: m,
          onLeave: u
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
      ], 14, ho)
    ]));
  }
});
var yo = A(bo, [["__scopeId", "data-v-230f0857"]]);
var Io = F("ImDrawer", yo);
var _o = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(a) {
    const n = S("card"), t = a;
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
var wo = A(_o, [["__scopeId", "data-v-4ccad88b"]]);
var ko = F("ImCard", wo);
var xo = ["data-esc"];
var Co = defineComponent({
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
    const t = S("dialog"), o = n, e = a, r = ref(null), { zIndexToken: s } = ne();
    watch(
      () => e.modelValue,
      (u) => {
        window.removeEventListener("keydown", d), u && e.closeOnEscape && window.addEventListener("keydown", d, { passive: true }), Je();
      },
      {
        immediate: true
      }
    );
    function d(u) {
      if (u.key === "Escape" || u.code === "Escape") {
        const c = document.querySelectorAll(
          '.im-dialog.is-show[data-esc="true"]'
        );
        c.length && r.value && Array.from(c).pop() === r.value && o("update:modelValue", false);
      }
    }
    const v = async (u, c) => {
      xe(u, { subtree: true }), e.fullscreen ? Xe(u) : vo(u, e == null ? void 0 : e.getTarget()), c();
    }, m = async (u, c) => {
      xe(u, { subtree: true }), e.fullscreen ? Xe(u, false) : go(u, e == null ? void 0 : e.getTarget()), await Ke(u, { subtree: true }), c();
    };
    return (u, c) => (openBlock(), createBlock(Teleport, { to: "body" }, [
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
          onClose: c[0] || (c[0] = () => o("update:modelValue", false))
        }, null, 8, ["closeOnClickMask", "visible"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: v,
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
              renderSlot(u.$slots, "default", {}, void 0, true)
            ], 6), [
              [vShow, e.modelValue]
            ])
          ]),
          _: 3
        })
      ], 14, xo)
    ]));
  }
});
var zo = A(Co, [["__scopeId", "data-v-8904b1d9"]]);
var $o = F("ImDialog", zo);
var Bo = defineComponent({
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
    const t = S("option"), o = n, e = a;
    function r(s) {
      if (s.preventDefault(), s.stopPropagation(), e.disabled) return;
      const d = e.value || e.label;
      d && o("change", d);
    }
    return (s, d) => {
      var m, u;
      const v = resolveDirective("ripple");
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
        e.multiple && ((u = e.selectList) != null && u.includes(e.value || e.label || "")) ? (openBlock(), createBlock(unref(O), {
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
var Vo = A(Bo, [["__scopeId", "data-v-baa1be82"]]);
var To = defineComponent({
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
    const t = S("tag"), o = n, e = a;
    function r(s) {
      o("update:modelValue", false), o("close", s);
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
            e.closeable ? (openBlock(), createBlock(unref(O), {
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
var Lo = A(To, [["__scopeId", "data-v-16275f2c"]]);
var Qe = F("ImTag", Lo);
var No = defineComponent({
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
    const t = S("select"), o = n, e = a, { sizeToken: r } = ne(), s = ref(false), d = ref([]), v = ref(null), m = ref(null), u = computed(() => te(e.width)), c = computed(() => te(e.size || r.value || "36px")), i = computed(() => {
      var k;
      return e.multiple ? e.options.filter((R) => d.value.includes(String(R.value))).map((R) => R.label) : ((k = e.options.find((R) => R.value === e.modelValue)) == null ? void 0 : k.label) || "";
    }), g = computed(() => e.options.filter(
      (k) => d.value.includes(String(k.value))
    )), V = computed(() => {
      const k = g.value.length - e.maxTag;
      return g.value.length && e.maxTag && g.value.length - e.maxTag && k > 0 ? k : "";
    }), I = computed(() => e.clearable && e.modelValue && i.value && !e.disabled), b = computed(() => {
      var k;
      return e.placeholder ? e.multiple ? !((k = g.value) != null && k.length) : !i.value : false;
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
        document.removeEventListener("click", Z, { capture: true }), k && document.addEventListener("click", Z, { capture: true });
      }
    );
    function x(k, R) {
      R.preventDefault();
      const y = d.value.filter((w) => w !== k.value);
      o("update:modelValue", y.join(","));
    }
    function $() {
      s.value = false;
    }
    function C() {
      var k;
      e.multiple ? d.value = ((k = String(e.modelValue)) == null ? void 0 : k.split(",")) || [] : d.value = [e.modelValue];
    }
    function Z(k) {
      var R, y;
      (R = v.value) != null && R.contains(k.target) || v.value === k.target || k.target === m.value || e.multiple && ((y = m.value) != null && y.contains(k.target)) || m.value === k.target || $();
    }
    async function G() {
      var R;
      if (s.value) return;
      s.value = true, await new Promise((y) => requestAnimationFrame(y));
      const k = (R = m.value) == null ? void 0 : R.querySelector(
        `.${t.is("active", true)}`
      );
      k && k.scrollIntoView({ behavior: "instant", block: "nearest" }), await new Promise((y) => requestAnimationFrame(y));
    }
    function U(k) {
      if (e.multiple) {
        const R = d.value;
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
        "--im-select-height": c.value
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
          }, toDisplayString(i.value), 3))
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
        I.value ? (openBlock(), createElementBlock("span", {
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
      createVNode(Be, {
        visible: s.value,
        getTriggerContainer: () => v.value,
        "z-index": e.zIndex,
        onClose: $,
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.options, (y, w) => (openBlock(), createBlock(Vo, {
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
var So = A(No, [["__scopeId", "data-v-51b7f08b"]]);
var Ze = F("ImSelect", So);
var Ao = ["aria-disabled"];
var Eo = ["onClick", "title"];
var Mo = ["aria-disabled"];
var Po = defineComponent({
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
    const t = S("pagination"), o = n, e = a, r = ref(e.pageSize), s = ref([1]), { sizeToken: d } = ne(), v = computed(() => parseInt(String(e.size || d.value || 36)) + "px"), m = computed(
      () => Math.ceil(e.total / (r.value || 10))
    ), u = computed(() => e.pageNumber === 1), c = computed(() => e.pageNumber >= m.value), i = computed(
      () => e.pageSizeItems.map((C) => ({ label: `${C} 条/页`, value: C }))
    );
    watch(
      () => r.value,
      (C) => {
        m.value < e.pageNumber ? o("change", { pageSize: C, pageNumber: m.value }) : o("change", { pageSize: C, pageNumber: e.pageNumber });
      }
    ), watch(
      () => [e.pageNumber, e.pageSize],
      () => {
        r.value = e.pageSize, V(
          m.value < e.pageNumber ? m.value : e.pageNumber
        );
      },
      { immediate: true }
    );
    function g(C) {
      e.pageNumber !== C && o("change", { pageNumber: C, pageSize: e.pageSize });
    }
    function V(C) {
      if (m.value <= 1)
        s.value = [1];
      else {
        const Z = Math.ceil(C / 5), G = [];
        let U = Z * 5 - 4;
        for (let ie = 0; ie < 5; ie++) {
          let k = U + ie;
          if (k > m.value)
            break;
          G.push(k);
        }
        C - 5 >= 1 && (G.unshift("left"), G.unshift(1)), C + 5 <= m.value && (G.push("right"), G.push(m.value)), s.value = G, g(C);
      }
    }
    function I() {
      const C = e.pageNumber + 1;
      if (C > m.value) return g(e.pageNumber);
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
      if (C > m.value) return g(m.value);
      V(C);
    }
    function $() {
      const C = e.pageNumber - 5;
      if (C < 1) return g(1);
      V(C);
    }
    return (C, Z) => {
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
        ], 10, Ao)), [
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
              onClick: $
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
            ], 10, Eo)), [
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
          class: normalizeClass([unref(t).e("next"), unref(t).is("disabled", c.value)]),
          "aria-disabled": c.value,
          onClick: I
        }, [
          createVNode(unref(O), {
            name: "right",
            size: "14px"
          })
        ], 10, Mo)), [
          [G, !c.value]
        ]) : createCommentVNode("", true),
        C.layout.includes("sizes") ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass([unref(t).e("size")])
        }, [
          createVNode(unref(Ze), {
            options: i.value,
            modelValue: r.value,
            "onUpdate:modelValue": Z[0] || (Z[0] = (U) => r.value = U),
            size: e.size,
            scrollClose: ""
          }, null, 8, ["options", "modelValue", "size"])
        ], 2)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
var Ro = A(Po, [["__scopeId", "data-v-661df4df"]]);
var Do = F("ImPagination", Ro);
var Oo = defineComponent({
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
    const t = S("tooltip"), o = ref(null), e = ref(false), r = n, s = a;
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
      document.removeEventListener("click", v, { capture: true }), e.value && document.addEventListener("click", v, {
        passive: true,
        capture: true
      });
    }
    function v(b) {
      if (e.value) {
        const x = b.target, $ = o.value;
        if (x === $ || $ != null && $.contains(x) || x.classList.contains("is-disabled")) return;
        m(false);
      }
    }
    const m = ze((b) => {
      b ? V() : I();
    }, 100);
    function u() {
      (!s.trigger || s.trigger === "hover") && m(true);
    }
    function c() {
      (!s.trigger || s.trigger === "hover") && m(false);
    }
    function i() {
      e.value || m(true);
    }
    function g() {
      return o.value;
    }
    function V() {
      e.value = true, r("update:modelValue", e.value), r("change", e.value);
    }
    function I() {
      e.value = false, r("update:modelValue", e.value), r("change", e.value);
    }
    return (b, x) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(t).b()]),
      ref_key: "triggerRef",
      ref: o,
      onMouseenter: u,
      onMouseleave: c,
      onClick: i
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode(Be, {
        visible: e.value,
        customClass: unref(t).e("wrapper"),
        placement: s.placement,
        offset: s.offset,
        "z-index": s.zIndex,
        getTriggerContainer: g,
        arrow: s.arrow,
        scrollClose: s.scrollClose,
        onClose: I,
        onMouseenter: u,
        onMouseleave: c,
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
var Fo = A(Oo, [["__scopeId", "data-v-f51e979f"]]);
var Yo = F("ImTooltip", Fo);
var Ho = defineComponent({
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
    const t = S("popover"), o = ref(null), e = ref(false), r = n, s = a;
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
      document.removeEventListener("click", v, { capture: true }), e.value && document.addEventListener("click", v, {
        passive: true,
        capture: true
      });
    }
    function v(b) {
      if (e.value) {
        const x = b.target, $ = o.value;
        if (x === $ || $ != null && $.contains(x) || x.classList.contains("is-disabled")) return;
        m(false);
      }
    }
    const m = ze((b) => {
      b ? V() : I();
    }, 100);
    function u() {
      (!s.trigger || s.trigger === "hover") && m(true);
    }
    function c() {
      (!s.trigger || s.trigger === "hover") && m(false);
    }
    function i() {
      e.value || m(true);
    }
    function g() {
      return o.value;
    }
    function V() {
      e.value = true, r("update:modelValue", e.value), r("change", e.value);
    }
    function I() {
      e.value = false, r("update:modelValue", e.value), r("change", e.value);
    }
    return (b, x) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(t).b()]),
      ref_key: "triggerRef",
      ref: o,
      onMouseenter: u,
      onMouseleave: c,
      onClick: i
    }, [
      renderSlot(b.$slots, "default", {}, void 0, true),
      createVNode(Be, {
        visible: e.value,
        customClass: unref(t).e("wrapper"),
        placement: s.placement,
        offset: s.offset,
        "z-index": s.zIndex,
        getTriggerContainer: g,
        arrow: s.arrow,
        scrollClose: s.scrollClose,
        onClose: I,
        onMouseenter: u,
        onMouseleave: c,
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
var Wo = A(Ho, [["__scopeId", "data-v-807c7fd8"]]);
var qo = F("ImPopover", Wo);
var Xo = defineComponent({
  name: "ImBadge",
  __name: "ImBadge",
  props: {
    value: { default: void 0 },
    size: { default: "16px" },
    color: { default: "" },
    dot: { type: Boolean, default: false }
  },
  setup(a) {
    const n = S("badge"), t = a, o = computed(() => te(t.size));
    return (e, r) => (openBlock(), createElementBlock("div", {
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
var jo = A(Xo, [["__scopeId", "data-v-ca9cca8c"]]);
var Uo = F("ImBadge", jo);
var Go = defineComponent({
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
    const n = S("back-top"), t = ref(false);
    let o = null;
    const { zIndexToken: e } = ne(), r = a, s = computed(() => ({
      zIndex: r.zIndex || e.value || 1e3,
      right: te(r.right),
      bottom: te(r.bottom)
    }));
    onMounted(() => {
      var i;
      o = ((i = r.getTarget) == null ? void 0 : i.call(r)) || window, u(), m();
    }), onUnmounted(() => {
      c();
    });
    function d() {
      o && o.scrollTo({ top: 0, behavior: "smooth", left: 0 });
    }
    function v() {
      if (!o) return;
      const i = o.scrollTop || o.pageYOffset || 0;
      t.value = i > r.visibleHeight;
    }
    const m = we(v, 100);
    function u() {
      o && (c(), o.addEventListener("scroll", m, {
        passive: true
      }));
    }
    function c() {
      o && o.removeEventListener("scroll", m);
    }
    return (i, g) => (openBlock(), createBlock(Transition, {
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
var Ko = A(Go, [["__scopeId", "data-v-f8ee14ab"]]);
var Jo = F("ImBackTop", Ko);
var Qo = defineComponent({
  name: "ImCollapse",
  __name: "ImCollapse",
  props: {
    title: { default: "" },
    desc: { default: "" },
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: n }) {
    const t = S("collapse"), o = useSlots(), e = n, r = a;
    function s(u) {
      var c;
      return ((c = u.type) == null ? void 0 : c.name) === "ImCollapseItem";
    }
    function d(u) {
      let c = [];
      if (Array.isArray(u))
        for (let i = 0; i < u.length; i++)
          Array.isArray(u[i]) ? c = c.concat(d(u[i])) : s(u[i]) ? c.push(u[i]) : Array.isArray(u[i].children) && (c = c.concat(d(u[i].children)));
      return console.log(c, "result"), c.filter((i) => s(i));
    }
    const v = computed(() => {
      var u;
      return d((u = o.default) == null ? void 0 : u.call(o));
    }), m = (u) => {
      e("update:modelValue", u), e("change", u);
    };
    return (u, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(v.value, (i) => (openBlock(), createBlock(resolveDynamicComponent(i), {
        key: i.key,
        activeName: r.modelValue,
        onChange: m
      }, null, 40, ["activeName"]))), 128))
    ], 2));
  }
});
var Zo = A(Qo, [["__scopeId", "data-v-37a8cdfc"]]);
var ea = defineComponent({
  name: "ImCollapseItem",
  __name: "ImCollapseItem",
  props: {
    title: { default: "" },
    desc: { default: "" },
    name: {},
    activeName: { default: "" }
  },
  emits: ["change"],
  setup(a, { emit: n }) {
    const t = S("collapse-item"), o = n, e = a, r = ref(
      e.activeName && e.activeName === e.name || false
    );
    watch(
      () => e.activeName,
      () => {
        console.log(e.activeName, e.name), r.value = !!(e.activeName && e.activeName === e.name);
      }
    );
    function s() {
      r.value = !r.value, e.name && o("change", r.value ? e.name : "");
    }
    async function d(m, u) {
      m.style.height = "auto";
      const c = m.getBoundingClientRect();
      m.style.height = "0px", m.style.transition = "all 0.3s ease", await new Promise((i) => requestAnimationFrame(i)), m.style.height = `${c.height}px`, u();
    }
    async function v(m, u) {
      m.style.transition = "all 0.3s ease", m.style.height = "0px", await new Promise((i) => requestAnimationFrame(i));
      const c = () => {
        m.removeEventListener("transitionend", c, { passive: true }), u();
      };
      m.addEventListener("transitionend", c, { passive: true });
    }
    return (m, u) => {
      const c = resolveComponent("ImIcon");
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
              createVNode(c, { name: "down" })
            ], 2)
          ], true)
        ], 2),
        createVNode(Transition, {
          css: false,
          mode: "out-in",
          duration: { enter: 300, leave: 300 },
          onEnter: d,
          onLeave: v
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
var ta = A(ea, [["__scopeId", "data-v-47331499"]]);
var oa = F("ImCollapseItem", ta);
var aa = F("ImCollapse", Zo);
var na = defineComponent({
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
    const o = a, e = t, r = ref(null), s = ref(o.modelValue), d = S("input-number"), v = computed(() => o.disabled || o.readonly), m = computed(() => {
      const I = Number(o.min);
      return he(I) && s.value <= I || v.value;
    }), u = computed(() => {
      const I = Number(o.max);
      return he(I) && s.value >= I || v.value;
    });
    watch(
      () => o.modelValue,
      () => {
        s.value = o.modelValue;
      }
    ), n({
      $el: r,
      focus: () => {
        var I;
        return (I = r.value) == null ? void 0 : I.focus();
      },
      blur: () => {
        var I;
        return (I = r.value) == null ? void 0 : I.blur();
      },
      // @ts-ignore
      getInput: () => r.value.$el
    });
    const c = (I) => o.precision === 0 ? Math.round(+I) : parseFloat(Number(I).toFixed(o.precision || 0));
    function i() {
      const I = parseFloat(String(o.step || 1)), b = +s.value + I;
      V(c(b));
    }
    function g() {
      const I = parseFloat(String(o.step || 1)), b = s.value - I;
      V(c(b));
    }
    function V(I) {
      let b = parseFloat(String(I));
      const x = he(Number(o.min)) ? Number(o.min) : -1 / 0, $ = he(Number(o.max)) ? Number(o.max) : 1 / 0;
      Number.isNaN(b) && (b = 0), b < x && (b = x), b > $ && (b = $), s.value = b, e("update:modelValue", b), e("change", b);
    }
    return (I, b) => {
      const x = resolveDirective("ripple");
      return openBlock(), createBlock(Ae, mergeProps({
        class: [unref(d).b(), unref(d).is("control-right", o.controlRight)]
      }, o, {
        type: "number",
        modelValue: s.value,
        "onUpdate:modelValue": b[0] || (b[0] = ($) => s.value = $),
        onChange: V,
        onFocus: b[1] || (b[1] = () => e("focus")),
        onBlur: b[2] || (b[2] = () => e("blur")),
        onClear: b[3] || (b[3] = () => e("clear"))
      }), {
        prefix: withCtx(() => [
          o.controlRight ? createCommentVNode("", true) : withDirectives((openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(d).e("decrease"), unref(d).is("disabled", m.value)]),
            onClick: g
          }, [
            createVNode(unref(O), {
              name: "minus",
              size: "1.1em"
            })
          ], 2)), [
            [x, !m.value]
          ]),
          renderSlot(I.$slots, "prefix", {}, () => [
            o.prefix ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(d).e("prefix")])
            }, toDisplayString(o.prefix), 3)) : createCommentVNode("", true)
          ], true)
        ]),
        suffix: withCtx(() => [
          renderSlot(I.$slots, "suffix", {}, () => [
            o.suffix ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(d).e("suffix")])
            }, toDisplayString(o.suffix), 3)) : createCommentVNode("", true)
          ], true),
          o.controlRight ? createCommentVNode("", true) : withDirectives((openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(d).e("increase"), unref(d).is("disabled", u.value)]),
            onClick: i
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
            class: normalizeClass([unref(d).e("control-right")])
          }, [
            withDirectives((openBlock(), createElementBlock("span", {
              class: normalizeClass([unref(d).e("up"), unref(d).is("disabled", u.value)]),
              onClick: i
            }, [
              createVNode(unref(O), {
                name: "up",
                size: "0.9em"
              })
            ], 2)), [
              [x, !u.value]
            ]),
            createBaseVNode("span", {
              class: normalizeClass([unref(d).e("control-divider")])
            }, null, 2),
            withDirectives((openBlock(), createElementBlock("span", {
              onClick: g,
              class: normalizeClass([unref(d).e("down"), unref(d).is("disabled", m.value)])
            }, [
              createVNode(unref(O), {
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
var sa = A(na, [["__scopeId", "data-v-0f29ae09"]]);
var la = F("ImInputNumber", sa);
var ia = [
  Le,
  Se,
  Ne,
  Ee,
  O,
  ke,
  Ot,
  Ht,
  Ut,
  Gt,
  to,
  lo,
  io,
  mo,
  Re,
  Io,
  ko,
  $o,
  Do,
  Ze,
  Qe,
  Yo,
  qo,
  Uo,
  Jo,
  aa,
  oa,
  la
];
var ra = (a, n) => {
  a.provide(Ue, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), a.directive("ripple", pt), a.directive("loading", bt), ia.forEach((t) => {
    t.name ? a.component(t.name, t) : console.warn(`组件${t}缺少name属性`);
  });
};
var pa = {
  install: ra
};
export {
  Ht as ImAlert,
  Ot as ImAnchor,
  mo as ImAvatar,
  Jo as ImBackTop,
  Uo as ImBadge,
  Ut as ImBreadcrumb,
  Gt as ImBreadcrumbItem,
  Le as ImButton,
  ko as ImCard,
  Se as ImCol,
  aa as ImCollapse,
  oa as ImCollapseItem,
  $o as ImDialog,
  ke as ImDivider,
  Io as ImDrawer,
  to as ImDropdown,
  O as ImIcon,
  Ee as ImInput,
  la as ImInputNumber,
  lo as ImList,
  io as ImListItem,
  Re as ImMask,
  Do as ImPagination,
  qo as ImPopover,
  Ne as ImRow,
  Ze as ImSelect,
  Qe as ImTag,
  Yo as ImTooltip,
  pa as default,
  ma as useImLoading,
  da as useImMessage
};
//# sourceMappingURL=im-design.js.map
