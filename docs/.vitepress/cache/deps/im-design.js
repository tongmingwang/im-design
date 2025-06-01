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

// node_modules/.pnpm/im-design@0.0.20/node_modules/im-design/dist/im-design.js
var j = (t) => {
  throw TypeError(t);
};
var X = (t, n, e) => n.has(t) || j("Cannot " + e);
var N = (t, n, e) => (X(t, n, "read from private field"), e ? e.call(t) : n.get(t));
var U = (t, n, e) => n.has(t) ? j("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
var H = (t, n, e, s) => (X(t, n, "write to private field"), s ? s.call(t, e) : n.set(t, e), e);
var Q = Symbol("im-design-token");
var z;
var ce = class {
  constructor() {
    U(this, z);
    H(this, z, []);
  }
  async add(n) {
    N(this, z).push(n);
  }
  remove() {
    try {
      const n = N(this, z).shift();
      n && this.run(n);
    } catch (n) {
      console.error(n);
    }
  }
  async run(n) {
    try {
      const e = n.querySelector(".im-ripple__item");
      if (!e) return;
      let s = Date.now(), o = e.getAttribute("data-time");
      const r = s - Number(o) || 0;
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
        n && (n == null || n.remove()), N(this, z).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
z = /* @__PURE__ */ new WeakMap();
var ue = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(t, n) {
    (function() {
      t.addEventListener("mousedown", o, {
        passive: true
      }), window.addEventListener("mouseup", r, { passive: true }), window.addEventListener("touchstart", o, { passive: true }), window.addEventListener("touchend", r, { passive: true });
    })();
    const s = new ce();
    async function o(i) {
      if (!n.value) return;
      const v = window.getComputedStyle(t), f = t.getBoundingClientRect(), g = document.createElement("div");
      g.className = "im-ripple", s.add(g);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const l = i.clientX || i.touches && i.touches[0].clientX, u = i.clientY || i.touches && i.touches[0].clientY, _ = Math.max(f.width, f.height), y = l - f.left - _ / 2, w = u - f.top - _ / 2, T = f.width - f.height <= 5;
      Object.assign(c.style, {
        "background-color": v.color,
        width: `${_}px`,
        height: `${_}px`,
        left: `${y}px`,
        top: `${w}px`,
        opacity: "0.33",
        transform: T ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), g.appendChild(c), t.appendChild(g);
      const h = v.position;
      h === "static" && (t.style.position = "relative", t.dataset.originalPosition = h), c.getBoundingClientRect(), c.style.transform = "scale(2.8)", c.style.opacity = "0.33";
    }
    t.im_add_ripple_fn__ = o, t.im_remove_ripple_fn__ = r;
    function r() {
      s.remove();
    }
  },
  unmounted(t) {
    t && (t != null && t.im_add_ripple_fn__) && (t.removeEventListener("mousedown", t.im_add_ripple_fn__), window.removeEventListener("touchstart", t.im_add_ripple_fn__)), t && t.im_remove_ripple_fn__ && (window.removeEventListener("mouseup", t.im_remove_ripple_fn__), window.removeEventListener("touchend", t.im_remove_ripple_fn__));
  }
};
var E = (t) => {
  const n = "im-" + t;
  return {
    b: () => n,
    e: (e) => `${n}__${e}`,
    m: (e) => `${n}--${e}`,
    is: (e, s) => s ? `is-${e}` : ""
  };
};
var Z = (t, n) => {
  const e = inject(Q), s = ref(Number(e.size || 36)), o = ref(e.zIndex || 1e3);
  return { sizeToken: s, zIndexToken: o };
};
var de = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function me(t, n) {
  return openBlock(), createElementBlock("svg", de, n[0] || (n[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var pe = { render: me };
var fe = ["tabindex", "type", "disabled"];
var ve = defineComponent({
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
  setup(t, { emit: n }) {
    const e = t, s = n, o = E("button"), { sizeToken: r } = Z(), i = computed(() => [
      o.b(),
      e.color && o.m(e.color),
      e.shape && o.m(e.shape),
      e.variant && o.m(e.variant),
      o.is("disabled", e.disabled),
      o.is("loading", e.loading)
    ].filter(Boolean)), v = computed(() => {
      let c = +(e.size || r.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), f = computed(() => e.loading && ["square", "circle"].includes(e.shape)), g = () => {
      e.disabled || e.loading || s("click");
    };
    return (c, l) => {
      const u = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(i.value),
        onClick: g,
        style: normalizeStyle(v.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(o).e("loading")])
        }, [
          createVNode(unref(pe))
        ], 2)) : createCommentVNode("", true),
        f.value ? createCommentVNode("", true) : renderSlot(c.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, fe)), [
        [u, true]
      ]);
    };
  }
});
var k = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [s, o] of n)
    e[s] = o;
  return e;
};
var P = k(ve, [["__scopeId", "data-v-706dad03"]]);
P.install = (t) => {
  t.component("ImButton", P);
};
var _e = defineComponent({
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
  setup(t) {
    const n = t, e = useSlots(), s = computed(() => {
      var r;
      return ((r = e.default) == null ? void 0 : r.call(e)) || [];
    }), o = E("row");
    return (r, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(o).b()]),
      style: normalizeStyle({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (v, f) => (openBlock(), createBlock(resolveDynamicComponent(v), { key: f }))), 128))
    ], 6));
  }
});
var q = k(_e, [["__scopeId", "data-v-5179967f"]]);
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
  setup(t) {
    const n = t, e = E("col"), s = computed(
      () => +((Number(n.span) || 0) / 24).toFixed(2) * 100 + "%"
    );
    return (o, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b()]),
      style: normalizeStyle({
        "--im-col-w": s.value,
        "--im-col-offset": n.offset
      })
    }, [
      renderSlot(o.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var F = k(he, [["__scopeId", "data-v-ecf91058"]]);
q.install = (t) => {
  t.component("ImRow", q);
};
F.install = (t) => {
  t.component("ImCol", F);
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
  setup(t, { emit: n }) {
    const e = t, { sizeToken: s } = Z(), o = n, r = ref(e.modelValue), i = E("input"), v = () => {
      o("update:modelValue", r.value), o("change", r.value);
    };
    return (f, g) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(i).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(s) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(i).e("input")],
        "onUpdate:modelValue": g[0] || (g[0] = (c) => r.value = c)
      }, e, { onInput: v }), null, 16), [
        [vModelDynamic, r.value]
      ])
    ], 6));
  }
});
var M = k(ge, [["__scopeId", "data-v-6c70856c"]]);
M.install = (t) => {
  t.component("ImInput", M);
};
var ye = defineComponent({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(t) {
    const n = t;
    return (e, s) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(["im-icon", [`im-icon-${n.name}`]]),
      style: normalizeStyle({
        "--icon-size": (parseInt(String(n.size)) || 16) + "px",
        "--icon-color": n.color
      })
    }, null, 6));
  }
});
var L = k(ye, [["__scopeId", "data-v-1e711363"]]);
L.install = function(t) {
  t.component("ImIcon", L);
};
var Ie = defineComponent({
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
  setup(t) {
    const n = E("divider"), e = t;
    return (s, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(n).b(), unref(n).is("vertical", e.vertical)]),
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
        class: normalizeClass([unref(n).e("text")])
      }, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ], 2))
    ], 6));
  }
});
var V = k(Ie, [["__scopeId", "data-v-108f9bec"]]);
V.name = "ImDivider";
V.install = function(t) {
  t.component("ImDivider", V);
};
var ee = (t, n) => (n.install = (e) => {
  e.component(t, n);
}, n);
var we = (t, n) => {
  let e = null;
  return function(...s) {
    e || (e = setTimeout(() => {
      t.apply(this, s), e = null;
    }, n));
  };
};
var be = (t, n) => {
  let e = null;
  return function(...s) {
    e && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, s);
    }, n);
  };
};
var xe = ["onClick"];
var ke = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(t) {
    const n = E("anchor");
    let e = null;
    const s = ref(null), o = ref(null), r = ref(null), i = t;
    watch(
      () => i.target,
      () => {
        e && e(), e = g();
      }
    ), onMounted(() => {
      e = g();
    }), onUnmounted(() => {
      e && e();
    });
    function v(l) {
      let u = l == null ? void 0 : l.scrollTop;
      return s.value === window && (u = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), u;
    }
    function f(l) {
      var T;
      if (r.value || !s.value) return;
      const u = s.value === window ? l.target : s.value;
      let _ = v(u);
      const y = u.offsetTop || 0, w = (i.data || []).map(({ id: h }) => {
        const I = document.getElementById(h);
        return I ? {
          id: h,
          offsetTop: I.offsetTop - y,
          el: I
        } : null;
      }).filter(Boolean);
      o.value = null;
      for (let h = 0; h < w.length; h++) {
        const I = w[h];
        if (_ >= I.offsetTop - (i.offset || 0) && _ <= I.offsetTop + (((T = I.el) == null ? void 0 : T.clientHeight) || 0) - (i.offset || 0)) {
          o.value = I.id;
          return;
        }
      }
      if (!o.value && _ >= (parseInt(String(i.offset)) || 0)) {
        const h = w.find((I) => _ <= I.offsetTop - (i.offset || 0) && _ > (i.offset || 0) ? (o.value = I.id, true) : false);
        h && (o.value = h.id);
      }
    }
    function g() {
      const l = i.target ? typeof i.target == "string" ? document.querySelector(i.target) : i.target : window;
      if (!l)
        return null;
      s.value = l;
      const u = we(f, 50);
      return f({ target: l }), l.addEventListener("scroll", u, { passive: true }), () => {
        l.removeEventListener("scroll", u);
      };
    }
    async function c(l) {
      var y, w, T;
      if (o.value === l || !l) return;
      r.value = l, o.value = l;
      const u = document.getElementById(l);
      if (!u) return;
      (w = s.value) == null || w.scrollTo({
        // @ts-ignore
        top: u.offsetTop - (i.offset || 0) - (((y = s.value) == null ? void 0 : y.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const _ = be(() => {
        var h;
        r.value = null, (h = s.value) == null || h.removeEventListener("scroll", _);
      }, 300);
      (T = s.value) == null || T.addEventListener("scroll", _, { passive: true });
    }
    return (l, u) => {
      const _ = resolveDirective("ripple");
      return i.data && i.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(n).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.data, (y) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(n).e("item"), unref(n).is("active", o.value === y.id)]),
          onClick: () => c(y.id)
        }, [
          o.value === y.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(n).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(y.text), 1)
        ], 10, xe)), [
          [_, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Te = k(ke, [["__scopeId", "data-v-4840d244"]]);
var $e = ee("ImAnchor", Te);
var ze = defineComponent({
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
  setup(t, { emit: n }) {
    const e = n, s = ref(null), o = t, r = E("alert"), i = useSlots(), v = computed(() => !!(o.showIcon && o.title)), f = computed(() => {
      switch (o.color) {
        case "error":
          return "close-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "success":
          return "check-circle-fill";
        default:
          return "info-circle-fill";
      }
    }), g = async () => {
      var c, l;
      e("close"), (c = s.value) == null || c.animate([{
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
      }), await new Promise((u) => setTimeout(u, 300)), (l = s.value) == null || l.remove();
    };
    return (c, l) => {
      const u = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: s,
        class: normalizeClass([unref(r).b(), unref(r).m(o.color || "primary"), o.variant && unref(r).m(o.variant || "")])
      }, [
        o.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(r).e("icon")])
        }, [
          renderSlot(c.$slots, "icon", {}, () => [
            createVNode(unref(L), {
              name: f.value,
              size: v.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(r).e("content")])
        }, [
          o.title || unref(i).title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(r).e("title")])
          }, [
            renderSlot(c.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(o.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(r).e("message")])
          }, [
            renderSlot(c.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(o.message), 1)
            ], true)
          ], 2)
        ], 2),
        o.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(r).e("close")]),
          onClick: g
        }, [
          renderSlot(c.$slots, "close", {}, () => [
            createVNode(unref(L), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [u, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var Be = k(ze, [["__scopeId", "data-v-d11fdcb2"]]);
var Ce = ee("ImAlert", Be);
var Ee = [
  P,
  F,
  q,
  M,
  L,
  V,
  $e,
  Ce
];
var Se = (t, n) => {
  t.provide(Q, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), t.directive("ripple", ue), Ee.forEach((e) => {
    e.name ? t.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var Re = {
  install: Se
};
export {
  Ce as ImAlert,
  $e as ImAnchor,
  P as ImButton,
  F as ImCol,
  V as ImDivider,
  L as ImIcon,
  M as ImInput,
  q as ImRow,
  Re as default
};
//# sourceMappingURL=im-design.js.map
