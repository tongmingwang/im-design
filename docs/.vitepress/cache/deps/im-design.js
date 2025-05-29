import {
  Fragment,
  computed,
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
  openBlock,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  useSlots,
  vModelDynamic,
  withDirectives
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.2/node_modules/im-design/dist/im-design.js
var L = (n) => {
  throw TypeError(n);
};
var T = (n, t, e) => t.has(n) || L("Cannot " + e);
var I = (n, t, e) => (T(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var M = (n, t, e) => t.has(n) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var N = (n, t, e, s) => (T(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var O = Symbol("im-design-token");
var x = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, s) => s ? `is-${e}` : ""
  };
};
var V = (n, t) => {
  const e = inject(O), s = ref(Number(e.size || 36)), o = ref(e.zIndex || 1e3);
  return { sizeToken: s, zIndexToken: o };
};
var se = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function E(n, t) {
  return openBlock(), createElementBlock("svg", se, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M481.835 512 155.584 185.75a21.333 21.333 0 0 1 30.165-30.166L512 481.834l326.25-326.25a21.333 21.333 0 0 1 30.166 30.165L542.166 512l326.25 326.25a21.333 21.333 0 0 1-30.165 30.166L512 542.166l-326.25 326.25a21.333 21.333 0 1 1-30.166-30.165z" }, null, -1)
  ]));
}
var ie = { render: E };
var be = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: ie,
  render: E
}, Symbol.toStringTag, { value: "Module" }));
var le = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function P(n, t) {
  return openBlock(), createElementBlock("svg", le, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M448 768c176.725 0 320-143.275 320-320S624.725 128 448 128 128 271.275 128 448s143.275 320 320 320m0 42.667C247.701 810.667 85.333 648.299 85.333 448S247.701 85.333 448 85.333 810.667 247.701 810.667 448 648.299 810.667 448 810.667m304.917-27.584a21.333 21.333 0 0 1 30.166-30.166L933.93 903.765a21.333 21.333 0 0 1-30.166 30.166L752.917 783.104z" }, null, -1)
  ]));
}
var re = { render: P };
var ve = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: re,
  render: P
}, Symbol.toStringTag, { value: "Module" }));
var ae = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function D(n, t) {
  return openBlock(), createElementBlock("svg", ae, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333 85.333 38.205 85.333 85.333S810.968 896 763.84 896M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333-85.333-38.205-85.333-85.333S716.712 128 763.84 128m0 554.667h-.072c-39.16 0-74.203 17.626-97.628 45.378L376.255 560.982c4.932-13.101 7.787-28.245 7.787-44.055v-.595c0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509h.059c70.689 0 127.997-57.308 127.997-128s-57.308-128-128-128-128 57.308-128 128c0 18.965 4.224 36.907 11.627 53.099L355.179 435.179c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128l.001.564-.001.484c0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889s128-57.308 128-128-57.308-128-128-128" }, null, -1)
  ]));
}
var ce = { render: D };
var xe = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: ce,
  render: D
}, Symbol.toStringTag, { value: "Module" }));
var ue = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function q(n, t) {
  return openBlock(), createElementBlock("svg", ue, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var de = { render: q };
var me = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: de,
  render: q
}, Symbol.toStringTag, { value: "Module" }));
var pe = ["tabindex", "type", "disabled"];
var S = defineComponent({
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
    tabindex: {}
  },
  emits: ["click"],
  setup(n, { emit: t }) {
    const e = n, s = t, o = x("button"), { sizeToken: l } = V(), r = computed(() => [
      o.b(),
      e.color && o.m(e.color),
      e.shape && o.m(e.shape),
      e.variant && o.m(e.variant),
      o.is("disabled", e.disabled),
      o.is("loading", e.loading)
    ].filter(Boolean)), m = computed(() => {
      let i = +(e.size || l.value || 36);
      return {
        "--im-button-size": i + "px",
        "--im-button-padding": (i * 0.45).toFixed(0) + "px"
      };
    }), a = computed(() => e.loading && ["square", "circle"].includes(e.shape)), u = () => {
      e.disabled || e.loading || s("click");
    };
    return (i, B) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(r.value),
      onClick: u,
      style: normalizeStyle(m.value),
      tabindex: e.tabindex || 0,
      type: e.type || "button",
      disabled: e.disabled || e.loading
    }, [
      e.loading ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass([unref(o).e("loading")])
      }, [
        createVNode(unref(me))
      ], 2)) : createCommentVNode("", true),
      a.value ? createCommentVNode("", true) : renderSlot(i.$slots, "default", { key: 1 }, () => [
        createTextVNode(toDisplayString(e.text), 1)
      ])
    ], 14, pe));
  }
});
S.install = (n) => {
  n.component("ImButton", S);
};
var h;
var he = class {
  constructor() {
    M(this, h);
    N(this, h, []);
  }
  async add(t) {
    I(this, h).push(t);
  }
  remove() {
    try {
      const t = I(this, h).shift();
      t && this.run(t);
    } catch (t) {
      console.error(t);
    }
  }
  run(t) {
    try {
      if (t.getAttribute("data-remove") === "on") {
        const e = t.querySelector(".im-ripple__item");
        if (!e) return;
        e.style.opacity = "0.1", e.style.transition = "all 100ms", e.getBoundingClientRect(), setTimeout(() => {
          t.remove();
        }, 100);
      } else
        setTimeout(() => {
          this.run(t);
        }, 30);
    } catch (e) {
      console.log(e);
    }
  }
};
h = /* @__PURE__ */ new WeakMap();
var ge = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", o, {
        passive: true
      }), n.addEventListener("mouseup", l, { passive: true });
    })();
    const s = new he();
    async function o(r) {
      if (console.log("createRipple"), !t.value) return;
      const m = window.getComputedStyle(n), a = n.getBoundingClientRect(), u = document.createElement("div");
      u.className = "im-ripple", s.add(u);
      const i = document.createElement("div");
      i.className = "im-ripple__item";
      const B = r.clientX || r.touches && r.touches[0].clientX, F = r.clientY || r.touches && r.touches[0].clientY, _ = Math.max(a.width, a.height), X = B - a.left - _ / 2, Y = F - a.top - _ / 2, A = a.width - a.height <= 5;
      Object.assign(i.style, {
        "background-color": m.color,
        width: `${_}px`,
        height: `${_}px`,
        left: `${X}px`,
        top: `${Y}px`,
        opacity: "0.08",
        transform: A ? "scale(0.88)" : "scale(0.5)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), u.appendChild(i), n.appendChild(u);
      const k = m.position;
      k === "static" && (n.style.position = "relative", n.dataset.originalPosition = k), i.getBoundingClientRect(), i.style.transform = "scale(2)", i.style.opacity = "0.2", i.addEventListener(
        "transitionend",
        () => {
          u.setAttribute("data-remove", "on");
        },
        { once: true }
      );
    }
    function l() {
      console.log("hideRipple"), s.remove();
    }
  }
};
var C = defineComponent({
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
    const t = n, e = useSlots(), s = computed(() => {
      var l;
      return ((l = e.default) == null ? void 0 : l.call(e)) || [];
    }), o = x("row");
    return (l, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(o).b()]),
      style: normalizeStyle({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (m, a) => (openBlock(), createBlock(resolveDynamicComponent(m), { key: a }))), 128))
    ], 6));
  }
});
var z = defineComponent({
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
    const t = n, e = x("col"), s = computed(
      () => +((Number(t.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (o, l) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-col-w": s.value,
        "--im-col-offset": t.offset
      })
    }, [
      renderSlot(o.$slots, "default")
    ], 6));
  }
});
C.install = (n) => {
  n.component("ImRow", C);
};
z.install = (n) => {
  n.component("ImCol", z);
};
var $ = defineComponent({
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
    const e = n, { sizeToken: s } = V(), o = t, l = ref(e.modelValue), r = x("input"), m = () => {
      o("update:modelValue", l.value), o("change", l.value);
    };
    return (a, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(r).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(s) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(r).e("input")],
        "onUpdate:modelValue": u[0] || (u[0] = (i) => l.value = i)
      }, e, { onInput: m }), null, 16), [
        [vModelDynamic, l.value]
      ])
    ], 6));
  }
});
$.install = (n) => {
  n.component("ImInput", $);
};
var fe = [S, z, C, $];
var Ie = {
  install(n, t) {
    n.provide(O, {
      size: (t == null ? void 0 : t.size) || 36,
      zIndex: (t == null ? void 0 : t.zIndex) || 1e3
    }), n.directive("ripple", ge), fe.forEach((e) => {
      e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
    });
  }
};
export {
  S as ImButton,
  z as ImCol,
  be as ImIconClose,
  me as ImIconLoading,
  ve as ImIconSearch,
  xe as ImIconShare,
  $ as ImInput,
  C as ImRow,
  Ie as default
};
//# sourceMappingURL=im-design.js.map
