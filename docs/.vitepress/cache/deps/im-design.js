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

// node_modules/.pnpm/im-design@0.0.8/node_modules/im-design/dist/im-design.js
var R = (n) => {
  throw TypeError(n);
};
var V = (n, t, e) => t.has(n) || R("Cannot " + e);
var v = (n, t, e) => (V(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var T = (n, t, e) => t.has(n) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var D = (n, t, e, o) => (V(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
var F = Symbol("im-design-token");
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
  const e = inject(F), o = ref(Number(e.size || 36)), s = ref(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
};
var ne = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function oe(n, t) {
  return openBlock(), createElementBlock("svg", ne, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var se = { render: oe };
var ie = ["tabindex", "type", "disabled"];
var z = defineComponent({
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
    const e = n, o = t, s = x("button"), { sizeToken: i } = M(), l = computed(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), u = computed(() => {
      let a = +(e.size || i.value || 36);
      return {
        "--im-button-size": a + "px",
        "--im-button-padding": (a * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), c = computed(() => e.loading && ["square", "circle"].includes(e.shape)), r = () => {
      e.disabled || e.loading || o("click");
    };
    return (a, N) => {
      const I = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(l.value),
        onClick: r,
        style: normalizeStyle(u.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(s).e("loading")])
        }, [
          createVNode(unref(se))
        ], 2)) : createCommentVNode("", true),
        c.value ? createCommentVNode("", true) : renderSlot(a.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ])
      ], 14, ie)), [
        [I, true]
      ]);
    };
  }
});
z.install = (n) => {
  n.component("ImButton", z);
};
var h;
var ae = class {
  constructor() {
    T(this, h);
    D(this, h, []);
  }
  async add(t) {
    v(this, h).push(t);
  }
  remove() {
    try {
      const t = v(this, h).shift();
      t && this.run(t);
    } catch (t) {
      console.error(t);
    }
  }
  run(t) {
    try {
      const e = t.querySelector(".im-ripple__item");
      if (!e) return;
      e.style.opacity = "0", e.style.transition = "all 200ms ease-out", e.getBoundingClientRect(), setTimeout(() => {
        t.remove();
      }, 200);
    } catch (e) {
      console.log(e);
    }
  }
};
h = /* @__PURE__ */ new WeakMap();
var le = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: true
      }), n.addEventListener("mouseup", i, { passive: true });
    })();
    const o = new ae();
    async function s(l) {
      if (!t.value) return;
      const u = window.getComputedStyle(n), c = n.getBoundingClientRect(), r = document.createElement("div");
      r.className = "im-ripple", o.add(r);
      const a = document.createElement("div");
      a.className = "im-ripple__item";
      const N = l.clientX || l.touches && l.touches[0].clientX, I = l.clientY || l.touches && l.touches[0].clientY, b = Math.max(c.width, c.height), P = N - c.left - b / 2, X = I - c.top - b / 2, Y = c.width - c.height <= 5;
      Object.assign(a.style, {
        "background-color": u.color,
        width: `${b}px`,
        height: `${b}px`,
        left: `${P}px`,
        top: `${X}px`,
        opacity: "0.25",
        transform: Y ? "scale(0.88)" : "scale(0.66)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), r.appendChild(a), n.appendChild(r);
      const S = u.position;
      S === "static" && (n.style.position = "relative", n.dataset.originalPosition = S), a.getBoundingClientRect(), a.style.transform = "scale(5)", a.style.opacity = "0.33";
    }
    function i() {
      o.remove();
    }
  }
};
var k = defineComponent({
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
      var i;
      return ((i = e.default) == null ? void 0 : i.call(e)) || [];
    }), s = x("row");
    return (i, l) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(s).b()]),
      style: normalizeStyle({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (u, c) => (openBlock(), createBlock(resolveDynamicComponent(u), { key: c }))), 128))
    ], 6));
  }
});
var C = defineComponent({
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
    return (s, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      renderSlot(s.$slots, "default")
    ], 6));
  }
});
k.install = (n) => {
  n.component("ImRow", k);
};
C.install = (n) => {
  n.component("ImCol", C);
};
var B = defineComponent({
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
    const e = n, { sizeToken: o } = M(), s = t, i = ref(e.modelValue), l = x("input"), u = () => {
      s("update:modelValue", i.value), s("change", i.value);
    };
    return (c, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(l).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(o) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(l).e("input")],
        "onUpdate:modelValue": r[0] || (r[0] = (a) => i.value = a)
      }, e, { onInput: u }), null, 16), [
        [vModelDynamic, i.value]
      ])
    ], 6));
  }
});
B.install = (n) => {
  n.component("ImInput", B);
};
var $ = defineComponent({
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
$.install = function(n) {
  n.component("ImIcon", $);
};
var ce = [z, C, k, B, $];
var ue = {
  install(n, t) {
    n.provide(F, {
      size: (t == null ? void 0 : t.size) || 36,
      zIndex: (t == null ? void 0 : t.zIndex) || 1e3
    }), n.directive("ripple", le), ce.forEach((e) => {
      e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
    });
  }
};
export {
  z as ImButton,
  C as ImCol,
  $ as ImIcon,
  B as ImInput,
  k as ImRow,
  ue as default
};
//# sourceMappingURL=im-design.js.map
