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
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.27/node_modules/im-design/dist/im-design.js
var be = Object.defineProperty;
var pe = (n) => {
  throw TypeError(n);
};
var we = (n, t, e) => t in n ? be(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var te = (n, t, e) => we(n, typeof t != "symbol" ? t + "" : t, e);
var fe = (n, t, e) => t.has(n) || pe("Cannot " + e);
var G = (n, t, e) => (fe(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var ve = (n, t, e) => t.has(n) ? pe("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var he = (n, t, e, o) => (fe(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
var ge = Symbol("im-design-token");
var N;
var Be = class {
  constructor() {
    ve(this, N);
    he(this, N, []);
  }
  async add(t) {
    G(this, N).push(t);
  }
  remove() {
    try {
      const t = G(this, N).shift();
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
      r && await new Promise((a) => {
        e.style.opacity = "0.1";
        const p = 200 - r;
        setTimeout(
          () => {
            a(null);
          },
          p > 0 ? p : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms", setTimeout(() => {
        t && (t == null || t.remove()), G(this, N).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
N = /* @__PURE__ */ new WeakMap();
var Ee = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: true
      }), window.addEventListener("mouseup", r, { passive: true });
    })();
    const o = new Be();
    async function s(a) {
      if (!t.value) return;
      const p = window.getComputedStyle(n), l = n.getBoundingClientRect(), d = document.createElement("div");
      d.className = "im-ripple", o.add(d);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const u = a.clientX || a.touches && a.touches[0].clientX, h = a.clientY || a.touches && a.touches[0].clientY, _ = Math.max(l.width, l.height), y = u - l.left - _ / 2, L = h - l.top - _ / 2, B = l.width - l.height <= 5;
      Object.assign(c.style, {
        "background-color": p.color,
        width: `${_}px`,
        height: `${_}px`,
        left: `${y}px`,
        top: `${L}px`,
        opacity: "0.15",
        transform: B ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), d.appendChild(c), n.appendChild(d);
      const g = p.position;
      g === "static" && (n.style.position = "relative", n.dataset.originalPosition = g), c.getBoundingClientRect(), c.style.transform = "scale(2.8)", c.style.opacity = "0.33";
    }
    n.im_add_ripple_fn__ = s, n.im_remove_ripple_fn__ = r;
    function r() {
      o.remove();
    }
  },
  unmounted(n) {
    n && (n != null && n.im_add_ripple_fn__) && n.removeEventListener("mousedown", n.im_add_ripple_fn__), n && n.im_remove_ripple_fn__ && window.removeEventListener("mouseup", n.im_remove_ripple_fn__);
  }
};
var k = (n) => {
  const t = "im-" + n;
  return {
    b: () => t,
    e: (e) => `${t}__${e}`,
    m: (e) => `${t}--${e}`,
    is: (e, o) => o ? `is-${e}` : ""
  };
};
var H = (n, t) => {
  const e = inject(ge), o = ref(Number(e.size || 36)), s = ref(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
};
var ze = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function Te(n, t) {
  return openBlock(), createElementBlock("svg", ze, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var Me = { render: Te };
var Ve = ["tabindex", "type", "disabled"];
var Ae = defineComponent({
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
    const e = n, o = t, s = k("button"), { sizeToken: r } = H(), a = computed(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), p = computed(() => {
      let c = +(e.size || r.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), l = computed(() => e.loading && ["square", "circle"].includes(e.shape)), d = () => {
      e.disabled || e.loading || o("click");
    };
    return (c, u) => {
      const h = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(a.value),
        onClick: d,
        style: normalizeStyle(p.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(s).e("loading")])
        }, [
          createVNode(unref(Me))
        ], 2)) : createCommentVNode("", true),
        l.value ? createCommentVNode("", true) : renderSlot(c.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, Ve)), [
        [h, true]
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
var ne = w(Ae, [["__scopeId", "data-v-706dad03"]]);
ne.install = (n) => {
  n.component("ImButton", ne);
};
var De = defineComponent({
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
    }), s = k("row");
    return (r, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(s).b()]),
      style: normalizeStyle({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (p, l) => (openBlock(), createBlock(resolveDynamicComponent(p), { key: l }))), 128))
    ], 6));
  }
});
var se = w(De, [["__scopeId", "data-v-5179967f"]]);
var Se = defineComponent({
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
    const t = n, e = k("col"), o = computed(
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
var oe = w(Se, [["__scopeId", "data-v-ecf91058"]]);
se.install = (n) => {
  n.component("ImRow", se);
};
oe.install = (n) => {
  n.component("ImCol", oe);
};
var Re = defineComponent({
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
    const e = n, { sizeToken: o } = H(), s = t, r = ref(e.modelValue), a = k("input"), p = () => {
      s("update:modelValue", r.value), s("change", r.value);
    };
    return (l, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(o) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(a).e("input")],
        "onUpdate:modelValue": d[0] || (d[0] = (c) => r.value = c)
      }, e, { onInput: p }), null, 16), [
        [vModelDynamic, r.value]
      ])
    ], 6));
  }
});
var ae = w(Re, [["__scopeId", "data-v-6c70856c"]]);
ae.install = (n) => {
  n.component("ImInput", ae);
};
var Pe = defineComponent({
  name: "ImIcon",
  __name: "ImIcon",
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(["im-icon", [`im-icon-${t.name}`]]),
      style: normalizeStyle({
        "--icon-size": (parseInt(String(t.size)) || 16) + "px",
        "--icon-color": t.color
      })
    }, null, 6));
  }
});
var F = w(Pe, [["__scopeId", "data-v-1e711363"]]);
F.install = function(n) {
  n.component("ImIcon", F);
};
var Ne = defineComponent({
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
    const t = k("divider"), e = n;
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
var K = w(Ne, [["__scopeId", "data-v-108f9bec"]]);
K.name = "ImDivider";
K.install = function(n) {
  n.component("ImDivider", K);
};
var T = (n, t) => (t.install = (e) => {
  e.component(n, t);
}, t);
var de = (n, t) => {
  let e;
  return function(...o) {
    e || (e = setTimeout(() => {
      n.apply(this, o), e = null;
    }, t));
  };
};
var J = (n, t) => {
  let e;
  return function(...o) {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, o);
    }, t);
  };
};
var _e = (n, t, e) => {
  if (!e) return false;
  const o = e.getBoundingClientRect();
  return n >= o.left && n <= o.left + o.width && t >= o.top && t <= o.top + o.height;
};
var Ye = ["onClick"];
var Oe = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(n) {
    const t = k("anchor");
    let e = null;
    const o = ref(null), s = ref(null), r = ref(null), a = n;
    watch(
      () => a.target,
      () => {
        e && e(), e = d();
      }
    ), onMounted(() => {
      e = d();
    }), onUnmounted(() => {
      e && e();
    });
    function p(u) {
      let h = u == null ? void 0 : u.scrollTop;
      return o.value === window && (h = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), h;
    }
    function l(u) {
      var B;
      if (r.value || !o.value) return;
      const h = o.value === window ? u.target : o.value;
      let _ = p(h);
      const y = h.offsetTop || 0, L = (a.data || []).map(({ id: g }) => {
        const x = document.getElementById(g);
        return x ? {
          id: g,
          offsetTop: x.offsetTop - y,
          el: x
        } : null;
      }).filter(Boolean);
      s.value = null;
      for (let g = 0; g < L.length; g++) {
        const x = L[g];
        if (_ >= x.offsetTop - (a.offset || 0) && _ <= x.offsetTop + (((B = x.el) == null ? void 0 : B.clientHeight) || 0) - (a.offset || 0)) {
          s.value = x.id;
          return;
        }
      }
      if (!s.value && _ >= (parseInt(String(a.offset)) || 0)) {
        const g = L.find((x) => _ <= x.offsetTop - (a.offset || 0) && _ > (a.offset || 0) ? (s.value = x.id, true) : false);
        g && (s.value = g.id);
      }
    }
    function d() {
      const u = a.target ? typeof a.target == "string" ? document.querySelector(a.target) : a.target : window;
      if (!u)
        return null;
      o.value = u;
      const h = de(l, 50);
      return l({ target: u }), u.addEventListener("scroll", h, { passive: true }), () => {
        u.removeEventListener("scroll", h);
      };
    }
    async function c(u) {
      var y, L, B;
      if (s.value === u || !u) return;
      r.value = u, s.value = u;
      const h = document.getElementById(u);
      if (!h) return;
      (L = o.value) == null || L.scrollTo({
        // @ts-ignore
        top: h.offsetTop - (a.offset || 0) - (((y = o.value) == null ? void 0 : y.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const _ = J(() => {
        var g;
        r.value = null, (g = o.value) == null || g.removeEventListener("scroll", _);
      }, 300);
      (B = o.value) == null || B.addEventListener("scroll", _, { passive: true });
    }
    return (u, h) => {
      const _ = resolveDirective("ripple");
      return a.data && a.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(t).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(a.data, (y) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(t).e("item"), unref(t).is("active", s.value === y.id)]),
          onClick: () => c(y.id)
        }, [
          s.value === y.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(t).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(y.text), 1)
        ], 10, Ye)), [
          [_, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Xe = w(Oe, [["__scopeId", "data-v-4840d244"]]);
var Fe = T("ImAnchor", Xe);
var qe = defineComponent({
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
  setup(n, { emit: t }) {
    const e = t, o = ref(null), s = n, r = k("alert"), a = useSlots(), p = computed(() => !!(s.showIcon && s.title)), l = computed(() => {
      switch (s.color) {
        case "error":
          return "close-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "success":
          return "check-circle-fill";
        default:
          return "info-circle-fill";
      }
    }), d = async () => {
      var c, u;
      e("close"), (c = o.value) == null || c.animate([{
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
      }), await new Promise((h) => setTimeout(h, 300)), (u = o.value) == null || u.remove();
    };
    return (c, u) => {
      const h = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: o,
        class: normalizeClass([unref(r).b(), unref(r).m(s.color || "primary"), s.variant && unref(r).m(s.variant || "")])
      }, [
        s.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(r).e("icon")])
        }, [
          renderSlot(c.$slots, "icon", {}, () => [
            createVNode(unref(F), {
              name: l.value,
              size: p.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(r).e("content")])
        }, [
          s.title || unref(a).title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(r).e("title")])
          }, [
            renderSlot(c.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(s.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(r).e("message")])
          }, [
            renderSlot(c.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(s.message), 1)
            ], true)
          ], 2)
        ], 2),
        s.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(r).e("close")]),
          onClick: d
        }, [
          renderSlot(c.$slots, "close", {}, () => [
            createVNode(unref(F), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [h, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var We = w(qe, [["__scopeId", "data-v-d11fdcb2"]]);
var je = T("ImAlert", We);
var He = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = useSlots(), o = t, s = k("breadcrumb"), r = n, a = computed(
      () => {
        var l, d;
        return (d = (l = e.default) == null ? void 0 : l.call(e)) == null ? void 0 : d.filter((c) => {
          var u;
          return (c == null ? void 0 : c.type) && ((u = c == null ? void 0 : c.type) == null ? void 0 : u.name) === "ImBreadcrumbItem";
        });
      }
    ), p = (l) => {
      l && r.modelValue !== l && (o("update:modelValue", l), o("change", l));
    };
    return (l, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(s).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (c, u) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(c), {
          active: r.modelValue,
          onClick: p
        }, null, 8, ["active"])),
        a.value && a.value.length > 0 && u < a.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(s).e("separator")])
        }, [
          renderSlot(l.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(r.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var Ue = w(He, [["__scopeId", "data-v-64336468"]]);
var Ge = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(n, { emit: t }) {
    const e = k("breadcrumb__item"), o = n, s = t;
    return (r, a) => (openBlock(), createElementBlock("div", {
      onClick: a[0] || (a[0] = () => s("click", o.value)),
      class: normalizeClass([unref(e).b(), unref(e).is("active", o.active === o.value && !!o.value)])
    }, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var Je = w(Ge, [["__scopeId", "data-v-40ed04b1"]]);
var Ke = T("ImBreadcrumb", Ue);
var Qe = T("ImBreadcrumb", Je);
var Ze = (n = 50) => {
  const t = ref(0), e = ref(0), o = de((s) => {
    t.value = s.clientX, e.value = s.clientY;
  }, n);
  return onMounted(() => {
    window.addEventListener("mousemove", o, { passive: true });
  }), onUnmounted(() => {
    window.removeEventListener("mousemove", o);
  }), { x: t, y: e };
};
var et = (n, t, e, o = "bottomLeft") => {
  watch(
    () => n.value,
    () => {
      n.value && s();
    }
  );
  async function s() {
    var h;
    await new Promise((_) => requestAnimationFrame(_));
    const r = t == null ? void 0 : t.value, a = e == null ? void 0 : e.value;
    if (!r || !a) return;
    const l = (((h = r.children) == null ? void 0 : h.length) != 1 ? r : r.children[0]).getBoundingClientRect(), d = l.bottom, c = a.getBoundingClientRect(), u = 2;
    switch (o) {
      case "bottom":
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty(
          "left",
          `${l.left + l.width / 2 - c.width / 2}px`
        );
        break;
      case "bottomRight":
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty(
          "left",
          `${l.left + l.width - c.width}px`
        );
        break;
      case "top":
        a.style.setProperty(
          "top",
          `${l.top - c.height - u}px`
        ), a.style.setProperty(
          "left",
          `${l.left + l.width / 2 - c.width / 2}px`
        );
        break;
      case "topRight":
        a.style.setProperty(
          "top",
          `${l.top - c.height - u}px`
        ), a.style.setProperty(
          "left",
          `${l.right - c.width}px`
        );
        break;
      case "topLeft":
        a.style.setProperty(
          "top",
          `${l.top - c.height - u}px`
        ), a.style.setProperty("left", `${l.left}px`);
        break;
      default:
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty("left", `${l.left}px`);
        break;
    }
  }
};
var tt = (n) => {
  const t = n.toLowerCase().includes("bottom") ? "translateY(-10px)" : "translateY(10px)";
  function e(s, r) {
    s.style.transform = t, s.style.opacity = "0", s.style.pointerEvents = "none", s.getBoundingClientRect(), s.style.transform = "translateY(0px)", s.style.opacity = "1", s.style.pointerEvents = "auto", r();
  }
  async function o(s, r) {
    s.style.transform = t, s.style.opacity = "0", s.getBoundingClientRect(), s.addEventListener("transitionend", () => {
      r(), s.style.transform = "translateY(0px)";
    });
  }
  return {
    onEnter: e,
    onLeave: o
  };
};
var nt = defineComponent({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: false },
    trigger: { default: "hover" },
    placement: { default: "bottomLeft" },
    zIndex: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    var x;
    const e = t, o = k("dropdown"), s = n, r = ref(null), a = ref(null), p = ref(s.modelValue || false), l = tt((x = s.placement) != null && x.includes("top") ? "top" : "bottom");
    let d = null, c = 100;
    const { x: u, y: h } = Ze(30), { zIndexToken: _ } = H();
    et(p, r, a, s.placement), onMounted(() => {
      d && d(), d = g();
    }), onUnmounted(() => {
      d && d();
    }), watch(() => s.trigger, () => {
      d && d(), d = g();
    });
    const y = de(() => {
      const D = _e(u.value, h.value, a.value);
      _e(u.value, h.value, r.value) || D || (p.value = false);
    }, c);
    watch(() => [u.value, h.value], () => {
      s.trigger != "hover" || !p.value || y();
    });
    function L() {
      p.value = true, e("update:modelValue", p.value), e("change", p.value), window.addEventListener("scroll", B, { passive: true, capture: true });
    }
    function B() {
      p.value = false, e("update:modelValue", p.value), e("change", p.value), window.removeEventListener("scroll", close);
    }
    function g() {
      var U, me;
      d && d();
      const D = J((P) => {
        var V;
        (V = r.value) != null && V.contains(P.target) || B();
      }, c);
      if (document.addEventListener("click", D, { passive: true }), s.trigger === "hover") {
        const P = J(L, c);
        return (U = r.value) == null || U.addEventListener("mouseenter", P, { passive: true }), () => {
          var V;
          (V = r.value) == null || V.removeEventListener("mouseenter", P), document.removeEventListener("click", D);
        };
      }
      if (s.trigger === "click") {
        const P = J(() => {
          p.value ? B() : L();
        }, c);
        return (me = r.value) == null || me.addEventListener("click", P, { passive: true }), () => {
          var V;
          (V = r.value) == null || V.removeEventListener("click", P), document.removeEventListener("click", D);
        };
      }
      return null;
    }
    return (D, U) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(o).b()]),
      ref_key: "dropdownRef",
      ref: r
    }, [
      renderSlot(D.$slots, "default", {}, void 0, true),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          onEnter: unref(l).onEnter,
          onLeave: unref(l).onLeave,
          duration: { enter: 300, leave: 200 }
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(o).e("content")]),
              ref_key: "contentRef",
              ref: a,
              style: normalizeStyle({
                zIndex: s.zIndex || unref(_)
              })
            }, [
              renderSlot(D.$slots, "content", {}, void 0, true)
            ], 6), [
              [vShow, p.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
});
var st = w(nt, [["__scopeId", "data-v-c394ceaa"]]);
var ot = T("ImDropdown", st);
var at = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = n, o = useSlots(), s = k("list"), r = computed(() => {
      var d;
      const l = ((d = o.default) == null ? void 0 : d.call(o)) || [];
      if (l.length) {
        const c = [];
        return l.forEach((u) => {
          var h, _;
          typeof u.type == "object" ? c.push(u) : u.children && ((h = u.children) != null && h.length) && ((_ = u.children) == null || _.forEach((y) => {
            typeof (y == null ? void 0 : y.type) == "object" && c.push(y);
          }));
        }), c;
      }
    }), a = t, p = (l) => {
      a("update:modelValue", l.value), a("change", l.value);
    };
    return (l, d) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(s).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (c) => (openBlock(), createBlock(resolveDynamicComponent(c), {
        active: e.modelValue,
        onClick: () => p(c.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var rt = w(at, [["__scopeId", "data-v-9599f63c"]]);
var lt = defineComponent({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: false },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: true }
  },
  emits: ["click"],
  setup(n, { emit: t }) {
    const e = k("list__item"), o = t, s = n;
    return (r, a) => {
      const p = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(e).b(), unref(e).is("active", !!(s.active && s.active === s.value))]),
        onClick: a[0] || (a[0] = (l) => o("click", l))
      }, [
        renderSlot(r.$slots, "default", {}, void 0, true)
      ], 2)), [
        [p, s.ripple]
      ]);
    };
  }
});
var it = w(lt, [["__scopeId", "data-v-41ec0ba7"]]);
var ct = T("ImList", rt);
var ut = T("ImListItem", it);
var dt = ["src", "srcset", "alt", "loading"];
var mt = defineComponent({
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
  setup(n, { emit: t }) {
    const e = t, o = k("avatar"), s = n, r = (a) => {
      console.log(a.target), e("error", a);
    };
    return (a, p) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(o).b(), s.shape ? unref(o).m(s.shape) : ""]),
      style: normalizeStyle({
        "--im-avatar-size": (Number(s.size) || 36) + "px",
        "--im-avatar-color": s.color || "var(--im-rgb-color-2)",
        "--im-avatar-fit": s.fit
      })
    }, [
      !s.src && !s.srcset ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(o).e("icon")])
      }, [
        renderSlot(a.$slots, "default", {}, void 0, true)
      ], 2)) : (openBlock(), createElementBlock("img", {
        key: 1,
        onError: r,
        src: s.src,
        srcset: s.srcset,
        alt: s.alt,
        loading: s.loading,
        class: normalizeClass([unref(o).e("img")])
      }, null, 42, dt))
    ], 6));
  }
});
var pt = w(mt, [["__scopeId", "data-v-c4c32038"]]);
var ft = T("ImAvatar", pt);
var vt = () => ({
  onEnter: (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease", n.getBoundingClientRect(), n.style.opacity = 1, t();
  },
  onLeave: async (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease", await new Promise((e) => requestAnimationFrame(e)), n.addEventListener("transitionend", t);
  }
});
var ht = (n = "right") => {
  let t = "", e = "";
  switch (n) {
    case "left":
      t = "translateX(-100%)", e = "translateX(-100%)";
      break;
    case "right":
      t = "translateX(100%)", e = "translateX(100%)";
      break;
    case "top":
      t = "translateY(-100%)", e = "translateY(-100%)";
      break;
    case "bottom":
      t = "translateY(100%)", e = "translateY(100%)";
      break;
    default:
      t = "translateX(100%)", e = "translateX(100%)";
      break;
  }
  return {
    onEnter: (o, s) => {
      o.style.transform = t, o.style.transition = "transform 200ms ease, opacity 200ms ease", o.style.opacity = "0", o.getBoundingClientRect(), o.style.transform = "translateX(0)", o.style.opacity = "1", s();
    },
    onLeave: async (o, s) => {
      o.style.transform = e, o.style.opacity = "0", o.style.transition = "transform 200ms ease, opacity 200ms ease", await new Promise((r) => requestAnimationFrame(r)), o.addEventListener("transitionend", () => {
        s();
      });
    }
  };
};
var _t = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(n, { emit: t }) {
    const e = k("mask"), { zIndexToken: o } = H(), s = n, r = vt(), a = t, p = () => {
      s.closeOnClickMask && a("close", false);
    };
    return (l, d) => (openBlock(), createBlock(Transition, {
      onEnter: unref(r).onEnter,
      onLeave: unref(r).onLeave
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(e).b()]),
          style: normalizeStyle({
            zIndex: s.zIndex || unref(o)
          }),
          onClick: p
        }, [
          renderSlot(l.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, s.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
});
var yt = w(_t, [["__scopeId", "data-v-2ba470f4"]]);
var Ie = T("ImMask", yt);
var gt = ["aria-modal"];
var It = defineComponent({
  name: "ImDrawer",
  __name: "ImDrawer",
  props: {
    modelValue: { type: Boolean, default: false },
    mask: { type: Boolean, default: true },
    closeOnClickMask: { type: Boolean, default: true },
    placement: { default: "right" },
    size: { default: 378 },
    zIndex: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = k("drawer"), o = t, s = n, r = ref(null), a = ht(s.placement), { zIndexToken: p } = H(), l = () => {
      o("update:modelValue", false);
    };
    return (d, c) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: r,
        class: normalizeClass([unref(e).b(), s.placement ? unref(e).m(s.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": (parseInt(String(s.size)) || 378) + "px", zIndex: s.zIndex || unref(p) }),
        "aria-modal": s.modelValue
      }, [
        s.mask ? (openBlock(), createBlock(unref(Ie), {
          key: 0,
          visible: s.modelValue,
          closeOnClickMask: s.closeOnClickMask,
          onClose: l,
          zIndex: "1"
        }, null, 8, ["visible", "closeOnClickMask"])) : createCommentVNode("", true),
        createVNode(Transition, {
          onEnter: unref(a).onEnter,
          onLeave: unref(a).onLeave
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(e).e("content")])
            }, [
              renderSlot(d.$slots, "default", {}, void 0, true)
            ], 2), [
              [vShow, s.modelValue]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ], 14, gt)
    ]));
  }
});
var bt = w(It, [["__scopeId", "data-v-1b0178a0"]]);
var wt = T("ImDrawer", bt);
var kt = defineComponent({
  name: "ImCard",
  __name: "ImCard",
  props: {
    title: { default: "" },
    borderless: { type: Boolean, default: false },
    shadow: { default: "" }
  },
  setup(n) {
    const t = k("card"), e = n;
    return (o, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b(), unref(t).is("borderless", e.borderless), e.shadow ? unref(t).m(e.shadow) : ""])
    }, [
      renderSlot(o.$slots, "header", {}, () => [
        createBaseVNode("div", {
          class: normalizeClass([unref(t).e("header")])
        }, [
          e.title ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(t).e("title")])
          }, toDisplayString(e.title), 3)) : createCommentVNode("", true),
          renderSlot(o.$slots, "header-action", {}, void 0, true)
        ], 2)
      ], true),
      createBaseVNode("div", {
        class: normalizeClass([unref(t).e("body")])
      }, [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ], 2)
    ], 2));
  }
});
var xt = w(kt, [["__scopeId", "data-v-cf1ecfc0"]]);
var $t = T("ImCard", xt);
var Ct = ["data-index"];
var Lt = { class: "im-message__text" };
var Bt = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function }
  },
  setup(n, { expose: t }) {
    const e = k("message"), o = n, s = ref([]);
    let r = null;
    watch(() => s.value, () => {
      s.value.length === 0 ? (console.log("消息列表为空，执行回调函数"), r = setTimeout(() => {
        !s.value.length && o.callback();
      }, 500)) : (r && clearTimeout(r), r = null);
    });
    const a = (l) => {
      switch (l) {
        case "success":
          return "check-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "error":
          return "close-circle-fill";
        default:
          return "info-circle-fill";
      }
    };
    return t({ addMsg: (l) => {
      s.value.push(l), setTimeout(() => {
        s.value = s.value.filter((d) => d.id !== l.id);
      }, l.duration || 3e3);
    } }), (l, d) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(e).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (c) => (openBlock(), createElementBlock("li", {
          key: c.id,
          "data-index": c.id,
          class: normalizeClass(["im-message__item", [unref(e).e("item"), c.color ? unref(e).e(c.color) : ""]])
        }, [
          createVNode(unref(F), {
            name: a(c.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", Lt, toDisplayString(c.msg), 1)
        ], 10, Ct))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var Et = w(Bt, [["__scopeId", "data-v-dbc89381"]]);
var zt = class {
  constructor() {
    te(this, "app");
    te(this, "container");
    this.app = null, this.container = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
    const t = this;
    this.app = createApp(Et, {
      callback: () => {
        t.destroy();
      }
    }), this.app.mount(this.container);
  }
  destroy() {
    var t, e;
    (t = this.app) == null || t.unmount(), (e = this.container) == null || e.remove(), this.app = null, this.container = null;
  }
  addMsg(t) {
    var e, o, s;
    this.app || this.createApp(), (s = (o = (e = this.app) == null ? void 0 : e._instance) == null ? void 0 : o.exposed) == null || s.addMsg({
      msg: t.msg,
      id: Math.random().toString().slice(2) + "_" + Date.now(),
      duration: t.duration || 3e3,
      color: (t == null ? void 0 : t.color) || "primary"
    });
  }
  info(t, e) {
    this.addMsg({
      color: "primary",
      msg: t,
      duration: e,
      id: ""
    });
  }
  success(t, e) {
    this.addMsg({
      color: "success",
      msg: t,
      duration: e,
      id: ""
    });
  }
  warning(t, e) {
    this.addMsg({
      color: "warning",
      msg: t,
      duration: e,
      id: ""
    });
  }
  error(t, e) {
    this.addMsg({
      color: "error",
      msg: t,
      duration: e,
      id: ""
    });
  }
};
var C = new zt();
var Dt = () => ({
  info: (n, t = 3e3) => {
    C == null || C.info(n, t);
  },
  success: (n, t = 3e3) => {
    C == null || C.success(n, t);
  },
  warning: (n, t = 3e3) => {
    C == null || C.warning(n, t);
  },
  error: (n, t = 3e3) => {
    C == null || C.error(n, t);
  }
});
var Tt = [
  ne,
  oe,
  se,
  ae,
  F,
  K,
  Fe,
  je,
  Ke,
  Qe,
  ot,
  ct,
  ut,
  ft,
  Ie,
  wt,
  $t
];
var Mt = (n, t) => {
  n.provide(ge, {
    size: (t == null ? void 0 : t.size) || 36,
    zIndex: (t == null ? void 0 : t.zIndex) || 1e3
  }), n.directive("ripple", Ee), Tt.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var St = {
  install: Mt
};
export {
  je as ImAlert,
  Fe as ImAnchor,
  ft as ImAvatar,
  Ke as ImBreadcrumb,
  Qe as ImBreadcrumbItem,
  ne as ImButton,
  $t as ImCard,
  oe as ImCol,
  K as ImDivider,
  wt as ImDrawer,
  ot as ImDropdown,
  F as ImIcon,
  ae as ImInput,
  ct as ImList,
  ut as ImListItem,
  Ie as ImMask,
  se as ImRow,
  St as default,
  Dt as useImMessage
};
//# sourceMappingURL=im-design.js.map
