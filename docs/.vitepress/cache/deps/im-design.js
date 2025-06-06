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

// node_modules/.pnpm/im-design@0.0.26/node_modules/im-design/dist/im-design.js
var de = (n) => {
  throw TypeError(n);
};
var me = (n, t, e) => t.has(n) || de("Cannot " + e);
var j = (n, t, e) => (me(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var pe = (n, t, e) => t.has(n) ? de("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var fe = (n, t, e, o) => (me(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
var he = Symbol("im-design-token");
var P;
var we = class {
  constructor() {
    pe(this, P);
    fe(this, P, []);
  }
  async add(t) {
    j(this, P).push(t);
  }
  remove() {
    try {
      const t = j(this, P).shift();
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
        const m = 200 - r;
        setTimeout(
          () => {
            a(null);
          },
          m > 0 ? m : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms", setTimeout(() => {
        t && (t == null || t.remove()), j(this, P).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
P = /* @__PURE__ */ new WeakMap();
var ke = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: true
      }), window.addEventListener("mouseup", r, { passive: true });
    })();
    const o = new we();
    async function s(a) {
      if (!t.value) return;
      const m = window.getComputedStyle(n), i = n.getBoundingClientRect(), d = document.createElement("div");
      d.className = "im-ripple", o.add(d);
      const c = document.createElement("div");
      c.className = "im-ripple__item";
      const u = a.clientX || a.touches && a.touches[0].clientX, _ = a.clientY || a.touches && a.touches[0].clientY, h = Math.max(i.width, i.height), y = u - i.left - h / 2, C = _ - i.top - h / 2, B = i.width - i.height <= 5;
      Object.assign(c.style, {
        "background-color": m.color,
        width: `${h}px`,
        height: `${h}px`,
        left: `${y}px`,
        top: `${C}px`,
        opacity: "0.15",
        transform: B ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), c.setAttribute("data-time", Date.now() + ""), d.appendChild(c), n.appendChild(d);
      const g = m.position;
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
var F = (n, t) => {
  const e = inject(he), o = ref(Number(e.size || 36)), s = ref(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
};
var xe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function $e(n, t) {
  return openBlock(), createElementBlock("svg", xe, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var Ce = { render: $e };
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
  setup(n, { emit: t }) {
    const e = n, o = t, s = k("button"), { sizeToken: r } = F(), a = computed(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), m = computed(() => {
      let c = +(e.size || r.value || 36);
      return {
        "--im-button-size": c + "px",
        "--im-button-padding": (c * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), i = computed(() => e.loading && ["square", "circle"].includes(e.shape)), d = () => {
      e.disabled || e.loading || o("click");
    };
    return (c, u) => {
      const _ = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(a.value),
        onClick: d,
        style: normalizeStyle(m.value),
        tabindex: e.tabindex || 0,
        type: e.type || "button",
        disabled: e.disabled || e.loading
      }, [
        e.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(s).e("loading")])
        }, [
          createVNode(unref(Ce))
        ], 2)) : createCommentVNode("", true),
        i.value ? createCommentVNode("", true) : renderSlot(c.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, Be)), [
        [_, true]
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
var Z = w(Le, [["__scopeId", "data-v-706dad03"]]);
Z.install = (n) => {
  n.component("ImButton", Z);
};
var Ee = defineComponent({
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
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (m, i) => (openBlock(), createBlock(resolveDynamicComponent(m), { key: i }))), 128))
    ], 6));
  }
});
var ee = w(Ee, [["__scopeId", "data-v-5179967f"]]);
var ze = defineComponent({
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
var te = w(ze, [["__scopeId", "data-v-ecf91058"]]);
ee.install = (n) => {
  n.component("ImRow", ee);
};
te.install = (n) => {
  n.component("ImCol", te);
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
  setup(n, { emit: t }) {
    const e = n, { sizeToken: o } = F(), s = t, r = ref(e.modelValue), a = k("input"), m = () => {
      s("update:modelValue", r.value), s("change", r.value);
    };
    return (i, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(o) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(a).e("input")],
        "onUpdate:modelValue": d[0] || (d[0] = (c) => r.value = c)
      }, e, { onInput: m }), null, 16), [
        [vModelDynamic, r.value]
      ])
    ], 6));
  }
});
var ne = w(Te, [["__scopeId", "data-v-6c70856c"]]);
ne.install = (n) => {
  n.component("ImInput", ne);
};
var Ve = defineComponent({
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
var q = w(Ve, [["__scopeId", "data-v-1e711363"]]);
q.install = function(n) {
  n.component("ImIcon", q);
};
var Ae = defineComponent({
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
var G = w(Ae, [["__scopeId", "data-v-108f9bec"]]);
G.name = "ImDivider";
G.install = function(n) {
  n.component("ImDivider", G);
};
var E = (n, t) => (t.install = (e) => {
  e.component(n, t);
}, t);
var ce = (n, t) => {
  let e;
  return function(...o) {
    e || (e = setTimeout(() => {
      n.apply(this, o), e = null;
    }, t));
  };
};
var H = (n, t) => {
  let e;
  return function(...o) {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, o);
    }, t);
  };
};
var ve = (n, t, e) => {
  if (!e) return false;
  const o = e.getBoundingClientRect();
  return n >= o.left && n <= o.left + o.width && t >= o.top && t <= o.top + o.height;
};
var De = ["onClick"];
var Re = defineComponent({
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
    function m(u) {
      let _ = u == null ? void 0 : u.scrollTop;
      return o.value === window && (_ = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), _;
    }
    function i(u) {
      var B;
      if (r.value || !o.value) return;
      const _ = o.value === window ? u.target : o.value;
      let h = m(_);
      const y = _.offsetTop || 0, C = (a.data || []).map(({ id: g }) => {
        const x = document.getElementById(g);
        return x ? {
          id: g,
          offsetTop: x.offsetTop - y,
          el: x
        } : null;
      }).filter(Boolean);
      s.value = null;
      for (let g = 0; g < C.length; g++) {
        const x = C[g];
        if (h >= x.offsetTop - (a.offset || 0) && h <= x.offsetTop + (((B = x.el) == null ? void 0 : B.clientHeight) || 0) - (a.offset || 0)) {
          s.value = x.id;
          return;
        }
      }
      if (!s.value && h >= (parseInt(String(a.offset)) || 0)) {
        const g = C.find((x) => h <= x.offsetTop - (a.offset || 0) && h > (a.offset || 0) ? (s.value = x.id, true) : false);
        g && (s.value = g.id);
      }
    }
    function d() {
      const u = a.target ? typeof a.target == "string" ? document.querySelector(a.target) : a.target : window;
      if (!u)
        return null;
      o.value = u;
      const _ = ce(i, 50);
      return i({ target: u }), u.addEventListener("scroll", _, { passive: true }), () => {
        u.removeEventListener("scroll", _);
      };
    }
    async function c(u) {
      var y, C, B;
      if (s.value === u || !u) return;
      r.value = u, s.value = u;
      const _ = document.getElementById(u);
      if (!_) return;
      (C = o.value) == null || C.scrollTo({
        // @ts-ignore
        top: _.offsetTop - (a.offset || 0) - (((y = o.value) == null ? void 0 : y.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const h = H(() => {
        var g;
        r.value = null, (g = o.value) == null || g.removeEventListener("scroll", h);
      }, 300);
      (B = o.value) == null || B.addEventListener("scroll", h, { passive: true });
    }
    return (u, _) => {
      const h = resolveDirective("ripple");
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
        ], 10, De)), [
          [h, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Se = w(Re, [["__scopeId", "data-v-4840d244"]]);
var Pe = E("ImAnchor", Se);
var Me = defineComponent({
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
    const e = t, o = ref(null), s = n, r = k("alert"), a = useSlots(), m = computed(() => !!(s.showIcon && s.title)), i = computed(() => {
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
      }), await new Promise((_) => setTimeout(_, 300)), (u = o.value) == null || u.remove();
    };
    return (c, u) => {
      const _ = resolveDirective("ripple");
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
            createVNode(unref(q), {
              name: i.value,
              size: m.value ? 24 : 16
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
            createVNode(unref(q), {
              name: "close",
              size: "16"
            })
          ], true)
        ], 2)), [
          [_, true]
        ]) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var Ne = w(Me, [["__scopeId", "data-v-d11fdcb2"]]);
var Ye = E("ImAlert", Ne);
var Oe = defineComponent({
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
        var i, d;
        return (d = (i = e.default) == null ? void 0 : i.call(e)) == null ? void 0 : d.filter((c) => {
          var u;
          return (c == null ? void 0 : c.type) && ((u = c == null ? void 0 : c.type) == null ? void 0 : u.name) === "ImBreadcrumbItem";
        });
      }
    ), m = (i) => {
      i && r.modelValue !== i && (o("update:modelValue", i), o("change", i));
    };
    return (i, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(s).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (c, u) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(c), {
          active: r.modelValue,
          onClick: m
        }, null, 8, ["active"])),
        a.value && a.value.length > 0 && u < a.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(s).e("separator")])
        }, [
          renderSlot(i.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(r.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var Xe = w(Oe, [["__scopeId", "data-v-64336468"]]);
var qe = defineComponent({
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
var Fe = w(qe, [["__scopeId", "data-v-40ed04b1"]]);
var We = E("ImBreadcrumb", Xe);
var je = E("ImBreadcrumb", Fe);
var He = (n = 50) => {
  const t = ref(0), e = ref(0), o = ce((s) => {
    t.value = s.clientX, e.value = s.clientY;
  }, n);
  return onMounted(() => {
    window.addEventListener("mousemove", o, { passive: true });
  }), onUnmounted(() => {
    window.removeEventListener("mousemove", o);
  }), { x: t, y: e };
};
var Ue = (n, t, e, o = "bottomLeft") => {
  watch(
    () => n.value,
    () => {
      n.value && s();
    }
  );
  async function s() {
    var _;
    await new Promise((h) => requestAnimationFrame(h));
    const r = t == null ? void 0 : t.value, a = e == null ? void 0 : e.value;
    if (!r || !a) return;
    const i = (((_ = r.children) == null ? void 0 : _.length) != 1 ? r : r.children[0]).getBoundingClientRect(), d = i.bottom, c = a.getBoundingClientRect(), u = 2;
    switch (o) {
      case "bottom":
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty(
          "left",
          `${i.left + i.width / 2 - c.width / 2}px`
        );
        break;
      case "bottomRight":
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty(
          "left",
          `${i.left + i.width - c.width}px`
        );
        break;
      case "top":
        a.style.setProperty(
          "top",
          `${i.top - c.height - u}px`
        ), a.style.setProperty(
          "left",
          `${i.left + i.width / 2 - c.width / 2}px`
        );
        break;
      case "topRight":
        a.style.setProperty(
          "top",
          `${i.top - c.height - u}px`
        ), a.style.setProperty(
          "left",
          `${i.right - c.width}px`
        );
        break;
      case "topLeft":
        a.style.setProperty(
          "top",
          `${i.top - c.height - u}px`
        ), a.style.setProperty("left", `${i.left}px`);
        break;
      default:
        a.style.setProperty("top", `${d + u}px`), a.style.setProperty("left", `${i.left}px`);
        break;
    }
  }
};
var Ge = (n) => {
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
var Je = defineComponent({
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
    const e = t, o = k("dropdown"), s = n, r = ref(null), a = ref(null), m = ref(s.modelValue || false), i = Ge((x = s.placement) != null && x.includes("top") ? "top" : "bottom");
    let d = null, c = 100;
    const { x: u, y: _ } = He(30), { zIndexToken: h } = F();
    Ue(m, r, a, s.placement), onMounted(() => {
      d && d(), d = g();
    }), onUnmounted(() => {
      d && d();
    }), watch(() => s.trigger, () => {
      d && d(), d = g();
    });
    const y = ce(() => {
      const D = ve(u.value, _.value, a.value);
      ve(u.value, _.value, r.value) || D || (m.value = false);
    }, c);
    watch(() => [u.value, _.value], () => {
      s.trigger != "hover" || !m.value || y();
    });
    function C() {
      m.value = true, e("update:modelValue", m.value), e("change", m.value), window.addEventListener("scroll", B, { passive: true, capture: true });
    }
    function B() {
      m.value = false, e("update:modelValue", m.value), e("change", m.value), window.removeEventListener("scroll", close);
    }
    function g() {
      var W, ue;
      d && d();
      const D = H((S) => {
        var V;
        (V = r.value) != null && V.contains(S.target) || B();
      }, c);
      if (document.addEventListener("click", D, { passive: true }), s.trigger === "hover") {
        const S = H(C, c);
        return (W = r.value) == null || W.addEventListener("mouseenter", S, { passive: true }), () => {
          var V;
          (V = r.value) == null || V.removeEventListener("mouseenter", S), document.removeEventListener("click", D);
        };
      }
      if (s.trigger === "click") {
        const S = H(() => {
          m.value ? B() : C();
        }, c);
        return (ue = r.value) == null || ue.addEventListener("click", S, { passive: true }), () => {
          var V;
          (V = r.value) == null || V.removeEventListener("click", S), document.removeEventListener("click", D);
        };
      }
      return null;
    }
    return (D, W) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(o).b()]),
      ref_key: "dropdownRef",
      ref: r
    }, [
      renderSlot(D.$slots, "default", {}, void 0, true),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          onEnter: unref(i).onEnter,
          onLeave: unref(i).onLeave,
          duration: { enter: 300, leave: 200 }
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([unref(o).e("content")]),
              ref_key: "contentRef",
              ref: a,
              style: normalizeStyle({
                zIndex: s.zIndex || unref(h)
              })
            }, [
              renderSlot(D.$slots, "content", {}, void 0, true)
            ], 6), [
              [vShow, m.value]
            ])
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave"])
      ]))
    ], 2));
  }
});
var Ke = w(Je, [["__scopeId", "data-v-c394ceaa"]]);
var Qe = E("ImDropdown", Ke);
var Ze = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = n, o = useSlots(), s = k("list"), r = computed(() => {
      var d;
      const i = ((d = o.default) == null ? void 0 : d.call(o)) || [];
      if (i.length) {
        const c = [];
        return i.forEach((u) => {
          var _, h;
          typeof u.type == "object" ? c.push(u) : u.children && ((_ = u.children) != null && _.length) && ((h = u.children) == null || h.forEach((y) => {
            typeof (y == null ? void 0 : y.type) == "object" && c.push(y);
          }));
        }), c;
      }
    }), a = t, m = (i) => {
      a("update:modelValue", i.value), a("change", i.value);
    };
    return (i, d) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(s).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (c) => (openBlock(), createBlock(resolveDynamicComponent(c), {
        active: e.modelValue,
        onClick: () => m(c.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var et = w(Ze, [["__scopeId", "data-v-9599f63c"]]);
var tt = defineComponent({
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
      const m = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(e).b(), unref(e).is("active", !!(s.active && s.active === s.value))]),
        onClick: a[0] || (a[0] = (i) => o("click", i))
      }, [
        renderSlot(r.$slots, "default", {}, void 0, true)
      ], 2)), [
        [m, s.ripple]
      ]);
    };
  }
});
var nt = w(tt, [["__scopeId", "data-v-41ec0ba7"]]);
var st = E("ImList", et);
var ot = E("ImListItem", nt);
var at = ["src", "srcset", "alt", "loading"];
var rt = defineComponent({
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
    return (a, m) => (openBlock(), createElementBlock("span", {
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
      }, null, 42, at))
    ], 6));
  }
});
var lt = w(rt, [["__scopeId", "data-v-c4c32038"]]);
var it = E("ImAvatar", lt);
var ct = () => ({
  onEnter: (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease-out", n.getBoundingClientRect(), n.style.opacity = 1, t();
  },
  onLeave: async (n, t) => {
    n.style.opacity = 0, await new Promise((e) => requestAnimationFrame(e)), n.addEventListener("transitionend", t);
  }
});
var ut = (n = "right") => {
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
      o.style.transform = t, o.style.transition = "transform 200ms ease-out", o.getBoundingClientRect(), o.style.transform = "translateX(0)", s();
    },
    onLeave: async (o, s) => {
      o.style.transform = e, o.style.transition = "transform 200ms ease-out", await new Promise((r) => requestAnimationFrame(r)), o.addEventListener("transitionend", () => {
        s();
      });
    }
  };
};
var dt = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(n, { emit: t }) {
    const e = k("mask"), { zIndexToken: o } = F(), s = n, r = ct(), a = t, m = () => {
      s.closeOnClickMask && a("close", false);
    };
    return (i, d) => (openBlock(), createBlock(Transition, {
      onEnter: unref(r).onEnter,
      onLeave: unref(r).onLeave
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(e).b()]),
          style: normalizeStyle({
            zIndex: s.zIndex || unref(o)
          }),
          onClick: m
        }, [
          renderSlot(i.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, s.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
});
var mt = w(dt, [["__scopeId", "data-v-2ba470f4"]]);
var ye = E("ImMask", mt);
var pt = ["aria-modal"];
var ft = defineComponent({
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
    const e = k("drawer"), o = t, s = n, r = ref(null), a = ut(s.placement), { zIndexToken: m } = F(), i = () => {
      o("update:modelValue", false);
    };
    return (d, c) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: r,
        class: normalizeClass([unref(e).b(), s.placement ? unref(e).m(s.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": (parseInt(String(s.size)) || 378) + "px", zIndex: s.zIndex || unref(m) }),
        "aria-modal": s.modelValue
      }, [
        s.mask ? (openBlock(), createBlock(unref(ye), {
          key: 0,
          visible: s.modelValue,
          closeOnClickMask: s.closeOnClickMask,
          onClose: i,
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
      ], 14, pt)
    ]));
  }
});
var vt = w(ft, [["__scopeId", "data-v-1b0178a0"]]);
var _t = E("ImDrawer", vt);
var ht = defineComponent({
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
var yt = w(ht, [["__scopeId", "data-v-cf1ecfc0"]]);
var gt = E("ImCard", yt);
var It = [
  Z,
  te,
  ee,
  ne,
  q,
  G,
  Pe,
  Ye,
  We,
  je,
  Qe,
  st,
  ot,
  it,
  ye,
  _t,
  gt
];
var bt = (n, t) => {
  n.provide(he, {
    size: (t == null ? void 0 : t.size) || 36,
    zIndex: (t == null ? void 0 : t.zIndex) || 1e3
  }), n.directive("ripple", ke), It.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var xt = {
  install: bt
};
export {
  Ye as ImAlert,
  Pe as ImAnchor,
  it as ImAvatar,
  We as ImBreadcrumb,
  je as ImBreadcrumbItem,
  Z as ImButton,
  gt as ImCard,
  te as ImCol,
  G as ImDivider,
  _t as ImDrawer,
  Qe as ImDropdown,
  q as ImIcon,
  ne as ImInput,
  st as ImList,
  ot as ImListItem,
  ye as ImMask,
  ee as ImRow,
  xt as default
};
//# sourceMappingURL=im-design.js.map
