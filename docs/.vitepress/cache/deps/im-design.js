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

// node_modules/.pnpm/im-design@0.0.9/node_modules/im-design/dist/im-design.js
var D = (n) => {
  throw TypeError(n);
};
var R = (n, t, e) => t.has(n) || D("Cannot " + e);
var v = (n, t, e) => (R(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var T = (n, t, e) => t.has(n) ? D("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var V = (n, t, e, o) => (R(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
var q = Symbol("im-design-token");
var x = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, o) => o ? `is-${e}` : ""
  };
};
var F = (n, t) => {
  const e = inject(q), o = ref(Number(e.size || 36)), s = ref(e.zIndex || 1e3);
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
    const e = n, o = t, s = x("button"), { sizeToken: i } = F(), a = computed(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), l = computed(() => {
      let c = +(e.size || i.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), r = computed(() => e.loading && ["square", "circle"].includes(e.shape)), m = () => {
      e.disabled || e.loading || o("click");
    };
    return (c, N) => {
      const I = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(a.value),
        onClick: m,
        style: normalizeStyle(l.value),
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
        r.value ? createCommentVNode("", true) : renderSlot(c.$slots, "default", { key: 1 }, () => [
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
    V(this, h, []);
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
  async run(t) {
    try {
      const e = t.querySelector(".im-ripple__item");
      if (!e) return;
      let o = Date.now(), s = e.getAttribute("data-time");
      const i = o - Number(s) || 0;
      i && await new Promise((a) => {
        e.style.opacity = "0.15";
        const l = 320 - i;
        setTimeout(
          () => {
            a(null);
          },
          l > 0 ? l : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms ", setTimeout(() => {
        t && (t == null || t.remove());
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
h = /* @__PURE__ */ new WeakMap();
var ce = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: true
      }), n.addEventListener("mouseup", i, { passive: true });
    })();
    const o = new ae();
    async function s(a) {
      if (!t.value) return;
      const l = window.getComputedStyle(n), r = n.getBoundingClientRect(), m = document.createElement("div");
      m.className = "im-ripple", o.add(m);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const N = a.clientX || a.touches && a.touches[0].clientX, I = a.clientY || a.touches && a.touches[0].clientY, _ = Math.max(r.width, r.height), M = N - r.left - _ / 2, X = I - r.top - _ / 2, Y = r.width - r.height <= 5;
      Object.assign(c.style, {
        "background-color": l.color,
        width: `${_}px`,
        height: `${_}px`,
        left: `${M}px`,
        top: `${X}px`,
        opacity: "0.25",
        transform: Y ? "scale(0.88)" : "scale(0.66)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), m.appendChild(c), n.appendChild(m);
      const S = l.position;
      S === "static" && (n.style.position = "relative", n.dataset.originalPosition = S), c.getBoundingClientRect(), c.style.transform = "scale(2.8)", c.style.opacity = "0.33";
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
    return (i, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(s).b()]),
      style: normalizeStyle({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (l, r) => (openBlock(), createBlock(resolveDynamicComponent(l), { key: r }))), 128))
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
    const e = n, { sizeToken: o } = F(), s = t, i = ref(e.modelValue), a = x("input"), l = () => {
      s("update:modelValue", i.value), s("change", i.value);
    };
    return (r, m) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(o) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(a).e("input")],
        "onUpdate:modelValue": m[0] || (m[0] = (c) => i.value = c)
      }, e, { onInput: l }), null, 16), [
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
var le = [z, C, k, B, $];
var ue = {
  install(n, t) {
    n.provide(q, {
      size: (t == null ? void 0 : t.size) || 36,
      zIndex: (t == null ? void 0 : t.zIndex) || 1e3
    }), n.directive("ripple", ce), le.forEach((e) => {
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
