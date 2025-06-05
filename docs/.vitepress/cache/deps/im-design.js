import {
  Fragment,
  Teleport,
  Transition,
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
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-K6JRRAUI.js";

// node_modules/.pnpm/im-design@0.0.23/node_modules/im-design/dist/im-design.js
var ie = (t) => {
  throw TypeError(t);
};
var ce = (t, n, e) => n.has(t) || ie("Cannot " + e);
var q = (t, n, e) => (ce(t, n, "read from private field"), e ? e.call(t) : n.get(t));
var ue = (t, n, e) => n.has(t) ? ie("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, e);
var de = (t, n, e, s) => (ce(t, n, "write to private field"), s ? s.call(t, e) : n.set(t, e), e);
var pe = Symbol("im-design-token");
var S;
var be = class {
  constructor() {
    ue(this, S);
    de(this, S, []);
  }
  async add(n) {
    q(this, S).push(n);
  }
  remove() {
    try {
      const n = q(this, S).shift();
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
      r && await new Promise((a) => {
        e.style.opacity = "0.1";
        const l = 200 - r;
        setTimeout(
          () => {
            a(null);
          },
          l > 0 ? l : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms ", setTimeout(() => {
        n && (n == null || n.remove()), q(this, S).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
S = /* @__PURE__ */ new WeakMap();
var we = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(t, n) {
    (function() {
      t.addEventListener("mousedown", o, {
        passive: true
      }), window.addEventListener("mouseup", r, { passive: true });
    })();
    const s = new be();
    async function o(a) {
      if (!n.value) return;
      const l = window.getComputedStyle(t), c = t.getBoundingClientRect(), u = document.createElement("div");
      u.className = "im-ripple", s.add(u);
      const i = document.createElement("div");
      i.className = "im-ripple__item";
      const d = a.clientX || a.touches && a.touches[0].clientX, f = a.clientY || a.touches && a.touches[0].clientY, h = Math.max(c.width, c.height), y = d - c.left - h / 2, B = f - c.top - h / 2, L = c.width - c.height <= 5;
      Object.assign(i.style, {
        "background-color": l.color,
        width: `${h}px`,
        height: `${h}px`,
        left: `${y}px`,
        top: `${B}px`,
        opacity: "0.33",
        transform: L ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), i.setAttribute("data-time", Date.now() + ""), u.appendChild(i), t.appendChild(u);
      const g = l.position;
      g === "static" && (t.style.position = "relative", t.dataset.originalPosition = g), i.getBoundingClientRect(), i.style.transform = "scale(2.8)", i.style.opacity = "0.33";
    }
    t.im_add_ripple_fn__ = o, t.im_remove_ripple_fn__ = r;
    function r() {
      s.remove();
    }
  },
  unmounted(t) {
    t && (t != null && t.im_add_ripple_fn__) && t.removeEventListener("mousedown", t.im_add_ripple_fn__), t && t.im_remove_ripple_fn__ && window.removeEventListener("mouseup", t.im_remove_ripple_fn__);
  }
};
var $ = (t) => {
  const n = "im-" + t;
  return {
    b: () => n,
    e: (e) => `${n}__${e}`,
    m: (e) => `${n}--${e}`,
    is: (e, s) => s ? `is-${e}` : ""
  };
};
var ae = (t, n) => {
  const e = inject(pe), s = ref(Number(e.size || 36)), o = ref(e.zIndex || 1e3);
  return { sizeToken: s, zIndexToken: o };
};
var xe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function ke(t, n) {
  return openBlock(), createElementBlock("svg", xe, n[0] || (n[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var $e = { render: ke };
var Be = ["tabindex", "type", "disabled"];
var Le = defineComponent({
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
    const e = t, s = n, o = $("button"), { sizeToken: r } = ae(), a = computed(() => [
      o.b(),
      e.color && o.m(e.color),
      e.shape && o.m(e.shape),
      e.variant && o.m(e.variant),
      o.is("disabled", e.disabled),
      o.is("loading", e.loading)
    ].filter(Boolean)), l = computed(() => {
      let i = +(e.size || r.value || 36);
      return {
        "--im-button-size": i + "px",
        "--im-button-padding": (i * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), c = computed(() => e.loading && ["square", "circle"].includes(e.shape)), u = () => {
      e.disabled || e.loading || s("click");
    };
    return (i, d) => {
      const f = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(a.value),
        onClick: u,
        style: normalizeStyle(l.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(o).e("loading")])
        }, [
          createVNode(unref($e))
        ], 2)) : createCommentVNode("", true),
        c.value ? createCommentVNode("", true) : renderSlot(i.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, Be)), [
        [f, true]
      ]);
    };
  }
});
var w = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [s, o] of n)
    e[s] = o;
  return e;
};
var Q = w(Le, [["__scopeId", "data-v-706dad03"]]);
Q.install = (t) => {
  t.component("ImButton", Q);
};
var Ce = defineComponent({
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
    }), o = $("row");
    return (r, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(o).b()]),
      style: normalizeStyle({
        "--im-row-gutter": n.gutter + "px",
        "align-items": n.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (l, c) => (openBlock(), createBlock(resolveDynamicComponent(l), { key: c }))), 128))
    ], 6));
  }
});
var Z = w(Ce, [["__scopeId", "data-v-5179967f"]]);
var Ee = defineComponent({
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
    const n = t, e = $("col"), s = computed(
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
var ee = w(Ee, [["__scopeId", "data-v-ecf91058"]]);
Z.install = (t) => {
  t.component("ImRow", Z);
};
ee.install = (t) => {
  t.component("ImCol", ee);
};
var Te = defineComponent({
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
    const e = t, { sizeToken: s } = ae(), o = n, r = ref(e.modelValue), a = $("input"), l = () => {
      o("update:modelValue", r.value), o("change", r.value);
    };
    return (c, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(s) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(a).e("input")],
        "onUpdate:modelValue": u[0] || (u[0] = (i) => r.value = i)
      }, e, { onInput: l }), null, 16), [
        [vModelDynamic, r.value]
      ])
    ], 6));
  }
});
var te = w(Te, [["__scopeId", "data-v-6c70856c"]]);
te.install = (t) => {
  t.component("ImInput", te);
};
var ze = defineComponent({
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
var W = w(ze, [["__scopeId", "data-v-1e711363"]]);
W.install = function(t) {
  t.component("ImIcon", W);
};
var Ve = defineComponent({
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
    const n = $("divider"), e = t;
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
var H = w(Ve, [["__scopeId", "data-v-108f9bec"]]);
H.name = "ImDivider";
H.install = function(t) {
  t.component("ImDivider", H);
};
var R = (t, n) => (n.install = (e) => {
  e.component(t, n);
}, n);
var re = (t, n) => {
  let e;
  return function(...s) {
    e || (e = setTimeout(() => {
      t.apply(this, s), e = null;
    }, n));
  };
};
var F = (t, n) => {
  let e;
  return function(...s) {
    e && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, s);
    }, n);
  };
};
var me = (t, n, e) => {
  if (!e) return false;
  const s = e.getBoundingClientRect();
  return t >= s.left && t <= s.left + s.width && n >= s.top && n <= s.top + s.height;
};
var Se = ["onClick"];
var Pe = defineComponent({
  name: "ImAnchor",
  __name: "ImAnchor",
  props: {
    data: {},
    offset: { default: 0 },
    target: { default: null }
  },
  setup(t) {
    const n = $("anchor");
    let e = null;
    const s = ref(null), o = ref(null), r = ref(null), a = t;
    watch(
      () => a.target,
      () => {
        e && e(), e = u();
      }
    ), onMounted(() => {
      e = u();
    }), onUnmounted(() => {
      e && e();
    });
    function l(d) {
      let f = d == null ? void 0 : d.scrollTop;
      return s.value === window && (f = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), f;
    }
    function c(d) {
      var L;
      if (r.value || !s.value) return;
      const f = s.value === window ? d.target : s.value;
      let h = l(f);
      const y = f.offsetTop || 0, B = (a.data || []).map(({ id: g }) => {
        const I = document.getElementById(g);
        return I ? {
          id: g,
          offsetTop: I.offsetTop - y,
          el: I
        } : null;
      }).filter(Boolean);
      o.value = null;
      for (let g = 0; g < B.length; g++) {
        const I = B[g];
        if (h >= I.offsetTop - (a.offset || 0) && h <= I.offsetTop + (((L = I.el) == null ? void 0 : L.clientHeight) || 0) - (a.offset || 0)) {
          o.value = I.id;
          return;
        }
      }
      if (!o.value && h >= (parseInt(String(a.offset)) || 0)) {
        const g = B.find((I) => h <= I.offsetTop - (a.offset || 0) && h > (a.offset || 0) ? (o.value = I.id, true) : false);
        g && (o.value = g.id);
      }
    }
    function u() {
      const d = a.target ? typeof a.target == "string" ? document.querySelector(a.target) : a.target : window;
      if (!d)
        return null;
      s.value = d;
      const f = re(c, 50);
      return c({ target: d }), d.addEventListener("scroll", f, { passive: true }), () => {
        d.removeEventListener("scroll", f);
      };
    }
    async function i(d) {
      var y, B, L;
      if (o.value === d || !d) return;
      r.value = d, o.value = d;
      const f = document.getElementById(d);
      if (!f) return;
      (B = s.value) == null || B.scrollTo({
        // @ts-ignore
        top: f.offsetTop - (a.offset || 0) - (((y = s.value) == null ? void 0 : y.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const h = F(() => {
        var g;
        r.value = null, (g = s.value) == null || g.removeEventListener("scroll", h);
      }, 300);
      (L = s.value) == null || L.addEventListener("scroll", h, { passive: true });
    }
    return (d, f) => {
      const h = resolveDirective("ripple");
      return a.data && a.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(n).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(a.data, (y) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(n).e("item"), unref(n).is("active", o.value === y.id)]),
          onClick: () => i(y.id)
        }, [
          o.value === y.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(n).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(y.text), 1)
        ], 10, Se)), [
          [h, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Re = w(Pe, [["__scopeId", "data-v-4840d244"]]);
var De = R("ImAnchor", Re);
var Ae = defineComponent({
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
    const e = n, s = ref(null), o = t, r = $("alert"), a = useSlots(), l = computed(() => !!(o.showIcon && o.title)), c = computed(() => {
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
    }), u = async () => {
      var i, d;
      e("close"), (i = s.value) == null || i.animate([{
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
      }), await new Promise((f) => setTimeout(f, 300)), (d = s.value) == null || d.remove();
    };
    return (i, d) => {
      const f = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: s,
        class: normalizeClass([unref(r).b(), unref(r).m(o.color || "primary"), o.variant && unref(r).m(o.variant || "")])
      }, [
        o.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(r).e("icon")])
        }, [
          renderSlot(i.$slots, "icon", {}, () => [
            createVNode(unref(W), {
              name: c.value,
              size: l.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(r).e("content")])
        }, [
          o.title || unref(a).title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(r).e("title")])
          }, [
            renderSlot(i.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(o.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(r).e("message")])
          }, [
            renderSlot(i.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(o.message), 1)
            ], true)
          ], 2)
        ], 2),
        o.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(r).e("close")]),
          onClick: u
        }, [
          renderSlot(i.$slots, "close", {}, () => [
            createVNode(unref(W), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [f, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var Ne = w(Ae, [["__scopeId", "data-v-d11fdcb2"]]);
var Ye = R("ImAlert", Ne);
var Me = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: n }) {
    const e = useSlots(), s = n, o = $("breadcrumb"), r = t, a = computed(
      () => {
        var c, u;
        return (u = (c = e.default) == null ? void 0 : c.call(e)) == null ? void 0 : u.filter((i) => {
          var d;
          return (i == null ? void 0 : i.type) && ((d = i == null ? void 0 : i.type) == null ? void 0 : d.name) === "ImBreadcrumbItem";
        });
      }
    ), l = (c) => {
      c && r.modelValue !== c && (s("update:modelValue", c), s("change", c));
    };
    return (c, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(o).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (i, d) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(i), {
          active: r.modelValue,
          onClick: l
        }, null, 8, ["active"])),
        a.value && a.value.length > 0 && d < a.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(o).e("separator")])
        }, [
          renderSlot(c.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(r.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var We = w(Me, [["__scopeId", "data-v-64336468"]]);
var je = defineComponent({
  name: "ImBreadcrumbItem",
  __name: "ImBreadcrumbItem",
  props: {
    active: {},
    value: { default: Math.random().toString() }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const e = $("breadcrumb__item"), s = t, o = n;
    return (r, a) => (openBlock(), createElementBlock("div", {
      onClick: a[0] || (a[0] = () => o("click", s.value)),
      class: normalizeClass([unref(e).b(), unref(e).is("active", s.active === s.value && !!s.value)])
    }, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var qe = w(je, [["__scopeId", "data-v-40ed04b1"]]);
var Fe = R("ImBreadcrumb", We);
var Oe = R("ImBreadcrumb", qe);
var Xe = (t = 50) => {
  const n = ref(0), e = ref(0), s = re((o) => {
    n.value = o.clientX, e.value = o.clientY;
  }, t);
  return onMounted(() => {
    window.addEventListener("mousemove", s, { passive: true });
  }), onUnmounted(() => {
    window.removeEventListener("mousemove", s);
  }), { x: n, y: e };
};
var He = (t, n, e, s = "bottomLeft") => {
  watch(
    () => t.value,
    () => {
      t.value && o();
    }
  );
  async function o() {
    await new Promise((i) => requestAnimationFrame(i));
    const r = n == null ? void 0 : n.value, a = e == null ? void 0 : e.value;
    if (!r || !a) return;
    const l = r.getBoundingClientRect(), c = a.getBoundingClientRect(), u = 4;
    switch (s) {
      case "bottom":
        a.style.setProperty("top", `${l.bottom + u}px`), a.style.setProperty(
          "left",
          `${l.left + l.width / 2 - c.width / 2}px`
        );
        break;
      case "bottomRight":
        a.style.setProperty("top", `${l.bottom + u}px`), a.style.setProperty(
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
        a.style.setProperty("top", `${l.bottom + u}px`), a.style.setProperty("left", `${l.left}px`);
        break;
    }
  }
};
var Ue = (t) => {
  const n = t.toLowerCase().includes("bottom") ? "translateY(-10px)" : "translateY(10px)";
  function e(o, r) {
    o.style.transform = n, o.style.opacity = "0", o.style.pointerEvents = "none", o.getBoundingClientRect(), o.style.transform = "translateY(0px)", o.style.opacity = "1", o.style.pointerEvents = "auto", r();
  }
  async function s(o, r) {
    o.style.transform = n, o.style.opacity = "0", o.getBoundingClientRect(), o.addEventListener("transitionend", () => {
      r(), o.style.transform = "translateY(0px)";
    });
  }
  return {
    onEnter: e,
    onLeave: s
  };
};
var Ge = defineComponent({
  name: "ImDropdown",
  __name: "ImDropdown",
  props: {
    modelValue: { type: Boolean, default: false },
    trigger: { default: "hover" },
    placement: { default: "bottomLeft" },
    zIndex: { default: void 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: n }) {
    var I;
    const e = n, s = $("dropdown"), o = t, r = ref(null), a = ref(null), l = ref(o.modelValue || false), c = Ue((I = o.placement) != null && I.includes("top") ? "top" : "bottom");
    let u = null, i = 100;
    const { x: d, y: f } = Xe(30), { zIndexToken: h } = ae();
    He(l, r, a, o.placement), onMounted(() => {
      u && u(), u = g();
    }), onUnmounted(() => {
      u && u();
    }), watch(() => o.trigger, () => {
      u && u(), u = g();
    });
    const y = re(() => {
      const z = me(d.value, f.value, a.value);
      me(d.value, f.value, r.value) || z || (l.value = false);
    }, i);
    watch(() => [d.value, f.value], () => {
      o.trigger != "hover" || !l.value || y();
    });
    function B() {
      l.value = true, e("update:modelValue", l.value), e("change", l.value), window.addEventListener("scroll", L, { passive: true, capture: true });
    }
    function L() {
      l.value = false, e("update:modelValue", l.value), e("change", l.value), window.removeEventListener("scroll", close);
    }
    function g() {
      var j, le;
      u && u();
      const z = F((V) => {
        var C;
        (C = r.value) != null && C.contains(V.target) || L();
      }, i);
      if (document.addEventListener("click", z, { passive: true }), o.trigger === "hover") {
        const V = F(B, i);
        return (j = r.value) == null || j.addEventListener("mouseenter", V, { passive: true }), () => {
          var C;
          (C = r.value) == null || C.removeEventListener("mouseenter", V), document.removeEventListener("click", z);
        };
      }
      if (o.trigger === "click") {
        const V = F(() => {
          l.value ? L() : B();
        }, i);
        return (le = r.value) == null || le.addEventListener("click", V, { passive: true }), () => {
          var C;
          (C = r.value) == null || C.removeEventListener("click", V), document.removeEventListener("click", z);
        };
      }
      return null;
    }
    return (z, j) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(s).b()]),
      ref_key: "dropdownRef",
      ref: r
    }, [
      renderSlot(z.$slots, "default", {}, void 0, true),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          onEnter: unref(c).onEnter,
          onLeave: unref(c).onLeave,
          duration: { enter: 300, leave: 200 }
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(s).e("content")]),
              ref_key: "contentRef",
              ref: a,
              style: normalizeStyle({
                zIndex: o.zIndex || unref(h)
              })
            }, [
              renderSlot(z.$slots, "content", {}, void 0, true)
            ], 6), [
              [vShow, l.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
});
var Je = w(Ge, [["__scopeId", "data-v-c394ceaa"]]);
var Ke = R("ImDropdown", Je);
var Qe = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: n }) {
    const e = t, s = useSlots(), o = $("list"), r = computed(() => {
      var u;
      const c = ((u = s.default) == null ? void 0 : u.call(s)) || [];
      if (c.length) {
        const i = [];
        return c.forEach((d) => {
          var f, h;
          typeof d.type == "object" ? i.push(d) : d.children && ((f = d.children) != null && f.length) && ((h = d.children) == null || h.forEach((y) => {
            typeof (y == null ? void 0 : y.type) == "object" && i.push(y);
          }));
        }), i;
      }
    });
    console.log(r.value);
    const a = n, l = (c) => {
      a("update:modelValue", c.value), a("change", c.value);
    };
    return (c, u) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(o).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (i) => (openBlock(), createBlock(resolveDynamicComponent(i), {
        active: e.modelValue,
        onClick: () => l(i.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var Ze = w(Qe, [["__scopeId", "data-v-6b9b0a0f"]]);
var et = defineComponent({
  name: "ImListItem",
  __name: "ImListItem",
  props: {
    disabled: { type: Boolean, default: false },
    value: { default: "" },
    active: { default: "" },
    ripple: { type: Boolean, default: true }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const e = $("list__item"), s = n, o = t;
    return (r, a) => {
      const l = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(e).b(), unref(e).is("active", !!(o.active && o.active === o.value))]),
        onClick: a[0] || (a[0] = (c) => s("click", c))
      }, [
        renderSlot(r.$slots, "default", {}, void 0, true)
      ], 2)), [
        [l, o.ripple]
      ]);
    };
  }
});
var tt = w(et, [["__scopeId", "data-v-1883a87a"]]);
var nt = R("ImList", Ze);
var ot = R("ImListItem", tt);
var st = [
  Q,
  ee,
  Z,
  te,
  W,
  H,
  De,
  Ye,
  Fe,
  Oe,
  Ke,
  nt,
  ot
];
var at = (t, n) => {
  t.provide(pe, {
    size: (n == null ? void 0 : n.size) || 36,
    zIndex: (n == null ? void 0 : n.zIndex) || 1e3
  }), t.directive("ripple", we), st.forEach((e) => {
    e.name ? t.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var it = {
  install: at
};
export {
  Ye as ImAlert,
  De as ImAnchor,
  Fe as ImBreadcrumb,
  Oe as ImBreadcrumbItem,
  Q as ImButton,
  ee as ImCol,
  H as ImDivider,
  Ke as ImDropdown,
  W as ImIcon,
  te as ImInput,
  nt as ImList,
  ot as ImListItem,
  Z as ImRow,
  it as default
};
//# sourceMappingURL=im-design.js.map
