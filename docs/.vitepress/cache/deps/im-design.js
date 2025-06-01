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
  resolveDirective,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  useSlots,
  vModelDynamic,
  withDirectives
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.13/node_modules/im-design/dist/im-design.js
var E = (n) => {
  throw TypeError(n);
};
var L = (n, t, e) => t.has(n) || E("Cannot " + e);
var z = (n, t, e) => (L(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var W = (n, t, e) => t.has(n) ? E("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var P = (n, t, e, o) => (L(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
var F = Symbol("im-design-token");
var v;
var ie = class {
  constructor() {
    W(this, v);
    P(this, v, []);
  }
  async add(t) {
    z(this, v).push(t);
  }
  remove() {
    try {
      const t = z(this, v).shift();
      t && this.run(t);
    } catch (t) {
      console.error(t);
    }
  }
  async run(t) {
    try {
      const e = t.querySelector(".im-ripple__item");
      if (!e) return;
      let o = Date.now(), i = e.getAttribute("data-time");
      const s = o - Number(i) || 0;
      s && await new Promise((a) => {
        e.style.opacity = "0.1";
        const r = 200 - s;
        setTimeout(
          () => {
            a(null);
          },
          r > 0 ? r : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms ", setTimeout(() => {
        t && (t == null || t.remove());
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
v = /* @__PURE__ */ new WeakMap();
var se = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", i, {
        passive: true
      }), n.addEventListener("mouseup", s, { passive: true });
    })();
    const o = new ie();
    async function i(a) {
      if (!t.value) return;
      const r = window.getComputedStyle(n), l = n.getBoundingClientRect(), u = document.createElement("div");
      u.className = "im-ripple", o.add(u);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const T = a.clientX || a.touches && a.touches[0].clientX, w = a.clientY || a.touches && a.touches[0].clientY, I = Math.max(l.width, l.height), X = T - l.left - I / 2, Y = w - l.top - I / 2, A = l.width - l.height <= 5;
      Object.assign(c.style, {
        "background-color": r.color,
        width: `${I}px`,
        height: `${I}px`,
        left: `${X}px`,
        top: `${Y}px`,
        opacity: "0.33",
        transform: A ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), u.appendChild(c), n.appendChild(u);
      const V = r.position;
      V === "static" && (n.style.position = "relative", n.dataset.originalPosition = V), c.getBoundingClientRect(), c.style.transform = "scale(2.8)", c.style.opacity = "0.33";
    }
    function s() {
      o.remove();
    }
  }
};
var x = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, o) => o ? `is-${e}` : ""
  };
};
var M = (n, t) => {
  const e = inject(F), o = ref(Number(e.size || 36)), i = ref(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: i };
};
var ae = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function ce(n, t) {
  return openBlock(), createElementBlock("svg", ae, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var re = { render: ce };
var le = ["tabindex", "type", "disabled"];
var de = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = t, i = x("button"), { sizeToken: s } = M(), a = computed(() => [
      i.b(),
      e.color && i.m(e.color),
      e.shape && i.m(e.shape),
      e.variant && i.m(e.variant),
      i.is("disabled", e.disabled),
      i.is("loading", e.loading)
    ].filter(Boolean)), r = computed(() => {
      let c = +(e.size || s.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), l = computed(() => e.loading && ["square", "circle"].includes(e.shape)), u = () => {
      e.disabled || e.loading || o("click");
    };
    return (c, T) => {
      const w = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(a.value),
        onClick: u,
        style: normalizeStyle(r.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(i).e("loading")])
        }, [
          createVNode(unref(re))
        ], 2)) : createCommentVNode("", true),
        l.value ? createCommentVNode("", true) : renderSlot(c.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, le)), [
        [w, true]
      ]);
    };
  }
});
var y = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, i] of t)
    e[o] = i;
  return e;
};
var C = y(de, [["__scopeId", "data-v-706dad03"]]);
C.install = (n) => {
  n.component("ImButton", C);
};
var me = defineComponent({
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
    const t = n, e = useSlots(), o = computed(() => {
      var s;
      return ((s = e.default) == null ? void 0 : s.call(e)) || [];
    }), i = x("row");
    return (s, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(i).b()]),
      style: normalizeStyle({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (r, l) => (openBlock(), createBlock(resolveDynamicComponent(r), { key: l }))), 128))
    ], 6));
  }
});
var B = y(me, [["__scopeId", "data-v-5179967f"]]);
var pe = defineComponent({
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
    const t = n, e = x("col"), o = computed(
      () => +((Number(t.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (i, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      renderSlot(i.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var N = y(pe, [["__scopeId", "data-v-ecf91058"]]);
B.install = (n) => {
  n.component("ImRow", B);
};
N.install = (n) => {
  n.component("ImCol", N);
};
var ue = defineComponent({
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
    const e = n, { sizeToken: o } = M(), i = t, s = ref(e.modelValue), a = x("input"), r = () => {
      i("update:modelValue", s.value), i("change", s.value);
    };
    return (l, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(o) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(a).e("input")],
        "onUpdate:modelValue": u[0] || (u[0] = (c) => s.value = c)
      }, e, { onInput: r }), null, 16), [
        [vModelDynamic, s.value]
      ])
    ], 6));
  }
});
var D = y(ue, [["__scopeId", "data-v-6c70856c"]]);
D.install = (n) => {
  n.component("ImInput", D);
};
var he = defineComponent({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: Number,
    color: String
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(["im-icon", [`im-icon-${t.name}`]]),
      style: normalizeStyle({
        "--icon-size": t.size || "16px",
        "--icon-color": t.color
      })
    }, null, 6));
  }
});
var S = y(he, [["__scopeId", "data-v-458c0f87"]]);
S.install = function(n) {
  n.component("ImIcon", S);
};
var ve = defineComponent({
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
    const t = x("divider"), e = n;
    return (o, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b(), unref(t).is("vertical", e.vertical)]),
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
        class: normalizeClass([unref(t).e("text")])
      }, [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ], 2))
    ], 6));
  }
});
var b = y(ve, [["__scopeId", "data-v-108f9bec"]]);
b.name = "ImDivider";
b.install = function(n) {
  n.component("ImDivider", b);
};
var _e = [C, N, B, D, S, b];
var fe = (n, t) => {
  n.provide(F, {
    size: (t == null ? void 0 : t.size) || 36,
    zIndex: (t == null ? void 0 : t.zIndex) || 1e3
  }), n.directive("ripple", se), _e.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var xe = {
  install: fe
};
export {
  C as ImButton,
  N as ImCol,
  b as ImDivider,
  S as ImIcon,
  D as ImInput,
  B as ImRow,
  xe as default
};
//# sourceMappingURL=im-design.js.map
