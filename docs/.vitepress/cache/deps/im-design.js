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
  onMounted,
  onUnmounted,
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
  watch,
  withDirectives
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.14/node_modules/im-design/dist/im-design.js
var F = (n) => {
  throw TypeError(n);
};
var M = (n, t, e) => t.has(n) || F("Cannot " + e);
var N = (n, t, e) => (M(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var O = (n, t, e) => t.has(n) ? F("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var P = (n, t, e, o) => (M(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
var J = Symbol("im-design-token");
var T;
var ae = class {
  constructor() {
    O(this, T);
    P(this, T, []);
  }
  async add(t) {
    N(this, T).push(t);
  }
  remove() {
    try {
      const t = N(this, T).shift();
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
      const r = o - Number(s) || 0;
      r && await new Promise((i) => {
        e.style.opacity = "0.1";
        const v = 200 - r;
        setTimeout(
          () => {
            i(null);
          },
          v > 0 ? v : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms ", setTimeout(() => {
        t && (t == null || t.remove());
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
T = /* @__PURE__ */ new WeakMap();
var ce = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: true
      }), n.addEventListener("mouseup", r, { passive: true });
    })();
    const o = new ae();
    async function s(i) {
      if (!t.value) return;
      const v = window.getComputedStyle(n), m = n.getBoundingClientRect(), h = document.createElement("div");
      h.className = "im-ripple", o.add(h);
      const a = document.createElement("div");
      a.className = "im-ripple__item";
      const l = i.clientX || i.touches && i.touches[0].clientX, c = i.clientY || i.touches && i.touches[0].clientY, u = Math.max(m.width, m.height), _ = l - m.left - u / 2, b = c - m.top - u / 2, S = m.width - m.height <= 5;
      Object.assign(a.style, {
        "background-color": v.color,
        width: `${u}px`,
        height: `${u}px`,
        left: `${_}px`,
        top: `${b}px`,
        opacity: "0.33",
        transform: S ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), a.setAttribute("data-time", Date.now() + ""), h.appendChild(a), n.appendChild(h);
      const g = v.position;
      g === "static" && (n.style.position = "relative", n.dataset.originalPosition = g), a.getBoundingClientRect(), a.style.transform = "scale(2.8)", a.style.opacity = "0.33";
    }
    function r() {
      o.remove();
    }
  }
};
var $ = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, o) => o ? `is-${e}` : ""
  };
};
var K = (n, t) => {
  const e = inject(J), o = ref(Number(e.size || 36)), s = ref(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
};
var ue = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function de(n, t) {
  return openBlock(), createElementBlock("svg", ue, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var me = { render: de };
var pe = ["tabindex", "type", "disabled"];
var fe = defineComponent({
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
    const e = n, o = t, s = $("button"), { sizeToken: r } = K(), i = computed(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), v = computed(() => {
      let a = +(e.size || r.value || 36);
      return {
        "--im-button-size": a + "px",
        "--im-button-padding": (a * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), m = computed(() => e.loading && ["square", "circle"].includes(e.shape)), h = () => {
      e.disabled || e.loading || o("click");
    };
    return (a, l) => {
      const c = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(i.value),
        onClick: h,
        style: normalizeStyle(v.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(s).e("loading")])
        }, [
          createVNode(unref(me))
        ], 2)) : createCommentVNode("", true),
        m.value ? createCommentVNode("", true) : renderSlot(a.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, pe)), [
        [c, true]
      ]);
    };
  }
});
var w = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, s] of t)
    e[o] = s;
  return e;
};
var D = w(fe, [["__scopeId", "data-v-706dad03"]]);
D.install = (n) => {
  n.component("ImButton", D);
};
var ve = defineComponent({
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
      var r;
      return ((r = e.default) == null ? void 0 : r.call(e)) || [];
    }), s = $("row");
    return (r, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(s).b()]),
      style: normalizeStyle({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (v, m) => (openBlock(), createBlock(resolveDynamicComponent(v), { key: m }))), 128))
    ], 6));
  }
});
var L = w(ve, [["__scopeId", "data-v-5179967f"]]);
var he = defineComponent({
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
    const t = n, e = $("col"), o = computed(
      () => +((Number(t.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (s, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-col-w": o.value,
        "--im-col-offset": t.offset
      })
    }, [
      renderSlot(s.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var R = w(he, [["__scopeId", "data-v-ecf91058"]]);
L.install = (n) => {
  n.component("ImRow", L);
};
R.install = (n) => {
  n.component("ImCol", R);
};
var ge = defineComponent({
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
    const e = n, { sizeToken: o } = K(), s = t, r = ref(e.modelValue), i = $("input"), v = () => {
      s("update:modelValue", r.value), s("change", r.value);
    };
    return (m, h) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(i).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(o) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(i).e("input")],
        "onUpdate:modelValue": h[0] || (h[0] = (a) => r.value = a)
      }, e, { onInput: v }), null, 16), [
        [vModelDynamic, r.value]
      ])
    ], 6));
  }
});
var V = w(ge, [["__scopeId", "data-v-6c70856c"]]);
V.install = (n) => {
  n.component("ImInput", V);
};
var _e = defineComponent({
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
var A = w(_e, [["__scopeId", "data-v-458c0f87"]]);
A.install = function(n) {
  n.component("ImIcon", A);
};
var ye = defineComponent({
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
    const t = $("divider"), e = n;
    return (o, s) => (openBlock(), createElementBlock("div", {
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
var E = w(ye, [["__scopeId", "data-v-108f9bec"]]);
E.name = "ImDivider";
E.install = function(n) {
  n.component("ImDivider", E);
};
var Ie = (n, t) => (t.install = (e) => {
  e.component(n, t);
}, t);
var be = (n, t) => {
  let e = null;
  return function(...o) {
    e || (e = setTimeout(() => {
      n.apply(this, o), e = null;
    }, t));
  };
};
var xe = (n, t) => {
  let e = null;
  return function(...o) {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, o);
    }, t);
  };
};
var we = ["onClick"];
var ke = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(n) {
    const t = $("anchor");
    let e = null;
    const o = ref(null), s = ref(null), r = ref(null), i = n;
    watch(
      () => i.target,
      () => {
        e && e(), e = h();
      }
    ), onMounted(() => {
      e = h();
    }), onUnmounted(() => {
      e && e();
    });
    function v(l) {
      console.log(l, l == null ? void 0 : l.scrollTop, "el");
      let c = l == null ? void 0 : l.scrollTop;
      return o.value === window && (c = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), c;
    }
    function m(l) {
      var S;
      if (r.value || !o.value) return;
      const c = o.value === window ? l.target : o.value;
      let u = v(c);
      const _ = c.offsetTop || 0, b = (i.data || []).map(({ id: g }) => {
        const y = document.getElementById(g);
        return y ? {
          id: g,
          offsetTop: y.offsetTop - _,
          el: y
        } : null;
      }).filter(Boolean);
      s.value = null;
      for (let g = 0; g < b.length; g++) {
        const y = b[g];
        if (u >= y.offsetTop - (i.offset || 0) && u <= y.offsetTop + (((S = y.el) == null ? void 0 : S.clientHeight) || 0) - (i.offset || 0)) {
          s.value = y.id;
          return;
        }
      }
      if (!s.value && u >= (parseInt(String(i.offset)) || 0)) {
        const g = b.find((y) => u <= y.offsetTop - (i.offset || 0) && u > (i.offset || 0) ? (s.value = y.id, true) : false);
        g && (s.value = g.id);
      }
    }
    function h() {
      const l = i.target ? typeof i.target == "string" ? document.querySelector(i.target) : i.target : window;
      if (!l)
        return null;
      o.value = l;
      const c = be(m, 50);
      return m({ target: l }), l.addEventListener("scroll", c, { passive: true }), () => {
        l.removeEventListener("scroll", c);
      };
    }
    async function a(l) {
      var c;
      if (l) {
        r.value = l, s.value = l;
        const u = document.getElementById(l);
        if (!u) return;
        u.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start"
        });
        const _ = xe(() => {
          var b;
          r.value = null, (b = o.value) == null || b.removeEventListener("scroll", _);
        }, 300);
        (c = o.value) == null || c.addEventListener("scroll", _, { passive: true });
      }
    }
    return (l, c) => {
      const u = resolveDirective("ripple");
      return i.data && i.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(t).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.data, (_) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(t).e("item"), unref(t).is("active", s.value === _.id)]),
          onClick: () => a(_.id)
        }, [
          s.value === _.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(t).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(_.text), 1)
        ], 10, we)), [
          [u, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Te = w(ke, [["__scopeId", "data-v-8b9791ff"]]);
var ze = Ie("ImAnchor", Te);
var $e = [D, R, L, V, A, E, ze];
var Be = (n, t) => {
  n.provide(J, {
    size: (t == null ? void 0 : t.size) || 36,
    zIndex: (t == null ? void 0 : t.zIndex) || 1e3
  }), n.directive("ripple", ce), $e.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var Ee = {
  install: Be
};
export {
  ze as ImAnchor,
  D as ImButton,
  R as ImCol,
  E as ImDivider,
  A as ImIcon,
  V as ImInput,
  L as ImRow,
  Ee as default
};
//# sourceMappingURL=im-design.js.map
