import {
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  inject,
  normalizeClass,
  normalizeStyle,
  openBlock,
  ref,
  renderSlot,
  resolveDirective,
  toDisplayString,
  unref,
  withDirectives
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.0/node_modules/im-design/dist/im-design.js
var x = (n) => {
  throw TypeError(n);
};
var w = (n, t, e) => t.has(n) || x("Cannot " + e);
var f = (n, t, e) => (w(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var S = (n, t, e) => t.has(n) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var I = (n, t, e, s) => (w(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var B = Symbol("im-design-token");
var G = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, s) => s ? `is-${e}` : ""
  };
};
var H = (n, t) => {
  const e = inject(B), s = ref(Number(e.size || 36)), o = ref(e.zIndex || 1e3);
  return { sizeToken: s, zIndexToken: o };
};
var J = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function L(n, t) {
  return openBlock(), createElementBlock("svg", J, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M481.835 512 155.584 185.75a21.333 21.333 0 0 1 30.165-30.166L512 481.834l326.25-326.25a21.333 21.333 0 0 1 30.166 30.165L542.166 512l326.25 326.25a21.333 21.333 0 0 1-30.165 30.166L512 542.166l-326.25 326.25a21.333 21.333 0 1 1-30.166-30.165z" }, null, -1)
  ]));
}
var K = { render: L };
var ae = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: K,
  render: L
}, Symbol.toStringTag, { value: "Module" }));
var Q = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function T(n, t) {
  return openBlock(), createElementBlock("svg", Q, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M448 768c176.725 0 320-143.275 320-320S624.725 128 448 128 128 271.275 128 448s143.275 320 320 320m0 42.667C247.701 810.667 85.333 648.299 85.333 448S247.701 85.333 448 85.333 810.667 247.701 810.667 448 648.299 810.667 448 810.667m304.917-27.584a21.333 21.333 0 0 1 30.166-30.166L933.93 903.765a21.333 21.333 0 0 1-30.166 30.166L752.917 783.104z" }, null, -1)
  ]));
}
var U = { render: T };
var de = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: U,
  render: T
}, Symbol.toStringTag, { value: "Module" }));
var W = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function j(n, t) {
  return openBlock(), createElementBlock("svg", W, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333 85.333 38.205 85.333 85.333S810.968 896 763.84 896M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333-85.333-38.205-85.333-85.333S716.712 128 763.84 128m0 554.667h-.072c-39.16 0-74.203 17.626-97.628 45.378L376.255 560.982c4.932-13.101 7.787-28.245 7.787-44.055v-.595c0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509h.059c70.689 0 127.997-57.308 127.997-128s-57.308-128-128-128-128 57.308-128 128c0 18.965 4.224 36.907 11.627 53.099L355.179 435.179c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128l.001.564-.001.484c0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889s128-57.308 128-128-57.308-128-128-128" }, null, -1)
  ]));
}
var Z = { render: j };
var ue = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: Z,
  render: j
}, Symbol.toStringTag, { value: "Module" }));
var ee = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function M(n, t) {
  return openBlock(), createElementBlock("svg", ee, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var te = { render: M };
var ne = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: te,
  render: M
}, Symbol.toStringTag, { value: "Module" }));
var oe = ["tabindex", "type", "disabled"];
var b = defineComponent({
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
    const e = n, s = t, o = G("button"), { sizeToken: i } = H(), h = computed(() => [
      o.b(),
      e.color && o.m(e.color),
      e.shape && o.m(e.shape),
      e.variant && o.m(e.variant),
      o.is("disabled", e.disabled),
      o.is("loading", e.loading)
    ].filter(Boolean)), r = computed(() => {
      let a = +(e.size || i.value || 36);
      return {
        "--im-button-size": a + "px",
        "--im-button-padding": (a * 0.4).toFixed(0) + "px"
      };
    }), l = computed(() => e.loading && ["square", "circle"].includes(e.shape)), c = () => {
      e.disabled || e.loading || s("click");
    };
    return (a, v) => {
      const d = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(h.value),
        onClick: c,
        style: normalizeStyle(r.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(o).e("loading")])
        }, [
          createVNode(unref(ne))
        ], 2)) : createCommentVNode("", true),
        l.value ? createCommentVNode("", true) : renderSlot(a.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ])
      ], 14, oe)), [
        [d]
      ]);
    };
  }
});
b.install = (n) => {
  n.component("ImButton", b);
};
var u;
var se = class {
  constructor() {
    S(this, u);
    I(this, u, []);
  }
  add(t) {
    f(this, u).push(t);
  }
  remove() {
    try {
      const t = f(this, u).shift();
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
        e.style.opacity = "0", e.style.transition = "opacity 0.13s ease-out", setTimeout(() => {
          t.remove();
        }, 150);
      } else
        setTimeout(() => {
          this.run(t);
        }, 30);
    } catch (e) {
      console.log(e);
    }
  }
};
u = /* @__PURE__ */ new WeakMap();
var ie = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: true
      }), n.addEventListener("mouseup", o, { passive: true });
    })();
    const e = new se();
    async function s(i) {
      const h = window.getComputedStyle(n), r = n.getBoundingClientRect(), l = document.createElement("div");
      l.className = "im-ripple", e.add(l);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const a = i.clientX || i.touches && i.touches[0].clientX, v = i.clientY || i.touches && i.touches[0].clientY, d = Math.max(r.width, r.height), O = a - r.left - d / 2, E = v - r.top - d / 2, N = r.width - r.height <= 5;
      Object.assign(c.style, {
        "background-color": h.color,
        width: `${d}px`,
        height: `${d}px`,
        left: `${O}px`,
        top: `${E}px`,
        opacity: 0.33,
        transform: N ? "scale(1)" : "scale(0.75)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), l.appendChild(c), n.appendChild(l);
      const y = h.position;
      y === "static" && (n.style.position = "relative", n.dataset.originalPosition = y), c.getBoundingClientRect(), c.style.transform = "scale(4)", c.addEventListener(
        "transitionend",
        () => {
          l.setAttribute("data-remove", "on");
        },
        { once: true }
      );
    }
    function o() {
      e.remove();
    }
  }
};
var re = [b];
var me = {
  install(n, t) {
    n.provide(B, {
      size: (t == null ? void 0 : t.size) || 36,
      zIndex: (t == null ? void 0 : t.zIndex) || 1e3
    }), n.directive("ripple", ie), re.forEach((e) => {
      e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
    });
  }
};
export {
  b as ImButton,
  ae as ImIconClose,
  de as ImIconSearch,
  ue as ImIconShare,
  me as default
};
//# sourceMappingURL=im-design.js.map
