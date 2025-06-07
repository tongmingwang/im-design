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

// node_modules/.pnpm/im-design@0.0.30/node_modules/im-design/dist/im-design.js
var Ie = Object.defineProperty;
var ve = (n) => {
  throw TypeError(n);
};
var we = (n, t, e) => t in n ? Ie(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var J = (n, t, e) => we(n, typeof t != "symbol" ? t + "" : t, e);
var ye = (n, t, e) => t.has(n) || ve("Cannot " + e);
var K = (n, t, e) => (ye(n, t, "read from private field"), e ? e.call(n) : t.get(n));
var he = (n, t, e) => t.has(n) ? ve("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e);
var _e = (n, t, e, o) => (ye(n, t, "write to private field"), o ? o.call(n, e) : t.set(n, e), e);
var be = Symbol("im-design-token");
var N;
var Ee = class {
  constructor() {
    he(this, N);
    _e(this, N, []);
  }
  async add(t) {
    K(this, N).push(t);
  }
  remove() {
    try {
      const t = K(this, N).shift();
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
      const l = o - Number(s) || 0;
      l && await new Promise((a) => {
        e.style.opacity = "0.1";
        const m = 200 - l;
        setTimeout(
          () => {
            a(null);
          },
          m > 0 ? m : 0
        );
      }), e.style.opacity = "0", e.style.transition = "all 50ms", setTimeout(() => {
        t && (t == null || t.remove()), K(this, N).length && this.remove();
      }, 50);
    } catch (e) {
      console.log(e);
    }
  }
};
N = /* @__PURE__ */ new WeakMap();
var Be = {
  // 及他自己的所有子节点都挂载完成后调用
  mounted(n, t) {
    (function() {
      n.addEventListener("mousedown", s, {
        passive: true
      }), window.addEventListener("mouseup", l, { passive: true });
    })();
    const o = new Ee();
    async function s(a) {
      if (!t.value) return;
      const m = window.getComputedStyle(n), d = n.getBoundingClientRect(), c = document.createElement("div");
      c.className = "im-ripple", o.add(c);
      const r = document.createElement("div");
      r.className = "im-ripple__item";
      const u = a.clientX || a.touches && a.touches[0].clientX, f = a.clientY || a.touches && a.touches[0].clientY, h = Math.max(d.width, d.height), I = u - d.left - h / 2, B = f - d.top - h / 2, T = d.width - d.height <= 5;
      Object.assign(r.style, {
        "background-color": m.color,
        width: `${h}px`,
        height: `${h}px`,
        left: `${I}px`,
        top: `${B}px`,
        opacity: "0.15",
        transform: T ? "scale(1)" : "scale(0.25)",
        "will-change": "transform,opacity"
        // 提示浏览器优化动画
      }), r.setAttribute("data-time", Date.now() + ""), c.appendChild(r), n.appendChild(c);
      const w = m.position;
      w === "static" && (n.style.position = "relative", n.dataset.originalPosition = w), r.getBoundingClientRect(), r.style.transform = "scale(2.8)", r.style.opacity = "0.33";
    }
    n.im_add_ripple_fn__ = s, n.im_remove_ripple_fn__ = l;
    function l() {
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
var U = (n, t) => {
  const e = inject(be), o = ref(Number(e.size || 36)), s = ref(e.zIndex || 1e3);
  return { sizeToken: o, zIndexToken: s };
};
var Te = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  class: "im-icon",
  viewBox: "0 0 1024 1024"
};
function ze(n, t) {
  return openBlock(), createElementBlock("svg", Te, t[0] || (t[0] = [
    createBaseVNode("path", { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.5 440.5 0 0 0-94.3-139.9 437.7 437.7 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150s83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36" }, null, -1)
  ]));
}
var Me = { render: ze };
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
    const e = n, o = t, s = k("button"), { sizeToken: l } = U(), a = computed(() => [
      s.b(),
      e.color && s.m(e.color),
      e.shape && s.m(e.shape),
      e.variant && s.m(e.variant),
      s.is("disabled", e.disabled),
      s.is("loading", e.loading)
    ].filter(Boolean)), m = computed(() => {
      let r = +(e.size || l.value || 36);
      return {
        "--im-button-size": r + "px",
        "--im-button-padding": (r * 0.45).toFixed(0) + "px",
        width: e.width
      };
    }), d = computed(() => e.loading && ["square", "circle"].includes(e.shape)), c = () => {
      e.disabled || e.loading || o("click");
    };
    return (r, u) => {
      const f = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(a.value),
        onClick: c,
        style: normalizeStyle(m.value),
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
        d.value ? createCommentVNode("", true) : renderSlot(r.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(e.text), 1)
        ], true)
      ], 14, Ve)), [
        [f, true]
      ]);
    };
  }
});
var b = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, s] of t)
    e[o] = s;
  return e;
};
var oe = b(Ae, [["__scopeId", "data-v-fe80f42d"]]);
oe.install = (n) => {
  n.component("ImButton", oe);
};
var Pe = defineComponent({
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
      var l;
      return ((l = e.default) == null ? void 0 : l.call(e)) || [];
    }), s = k("row");
    return (l, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(s).b()]),
      style: normalizeStyle({
        "--im-row-gutter": t.gutter + "px",
        "align-items": t.align
      })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (m, d) => (openBlock(), createBlock(resolveDynamicComponent(m), { key: d }))), 128))
    ], 6));
  }
});
var ae = b(Pe, [["__scopeId", "data-v-5179967f"]]);
var De = defineComponent({
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
    return (s, l) => (openBlock(), createElementBlock("div", {
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
var re = b(De, [["__scopeId", "data-v-ecf91058"]]);
ae.install = (n) => {
  n.component("ImRow", ae);
};
re.install = (n) => {
  n.component("ImCol", re);
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
    const e = n, { sizeToken: o } = U(), s = t, l = ref(e.modelValue), a = k("input"), m = () => {
      s("update:modelValue", l.value), s("change", l.value);
    };
    return (d, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b()]),
      style: normalizeStyle({
        "--in-input-size": (e.size || unref(o) || 36) + "px"
      })
    }, [
      withDirectives(createBaseVNode("input", mergeProps({
        class: [unref(a).e("input")],
        "onUpdate:modelValue": c[0] || (c[0] = (r) => l.value = r)
      }, e, { onInput: m }), null, 16), [
        [vModelDynamic, l.value]
      ])
    ], 6));
  }
});
var le = b(Re, [["__scopeId", "data-v-6c70856c"]]);
le.install = (n) => {
  n.component("ImInput", le);
};
var Se = defineComponent({
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
var F = b(Se, [["__scopeId", "data-v-1e711363"]]);
F.install = function(n) {
  n.component("ImIcon", F);
};
var Ye = defineComponent({
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
var Z = b(Ye, [["__scopeId", "data-v-108f9bec"]]);
Z.name = "ImDivider";
Z.install = function(n) {
  n.component("ImDivider", Z);
};
var E = (n, t) => (t.install = (e) => {
  e.component(n, t);
}, t);
var me = (n, t) => {
  let e;
  return function(...o) {
    e || (e = setTimeout(() => {
      n.apply(this, o), e = null;
    }, t));
  };
};
var Q = (n, t) => {
  let e;
  return function(...o) {
    e && clearTimeout(e), e = setTimeout(() => {
      n.apply(this, o);
    }, t);
  };
};
var ge = (n, t, e) => {
  if (!e) return false;
  const o = e.getBoundingClientRect();
  return n >= o.left && n <= o.left + o.width && t >= o.top && t <= o.top + o.height;
};
var Ne = ["onClick"];
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
    const o = ref(null), s = ref(null), l = ref(null), a = n;
    watch(
      () => a.target,
      () => {
        e && e(), e = c();
      }
    ), onMounted(() => {
      e = c();
    }), onUnmounted(() => {
      e && e();
    });
    function m(u) {
      let f = u == null ? void 0 : u.scrollTop;
      return o.value === window && (f = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop), f;
    }
    function d(u) {
      var T;
      if (l.value || !o.value) return;
      const f = o.value === window ? u.target : o.value;
      let h = m(f);
      const I = f.offsetTop || 0, B = (a.data || []).map(({ id: w }) => {
        const L = document.getElementById(w);
        return L ? {
          id: w,
          offsetTop: L.offsetTop - I,
          el: L
        } : null;
      }).filter(Boolean);
      s.value = null;
      for (let w = 0; w < B.length; w++) {
        const L = B[w];
        if (h >= L.offsetTop - (a.offset || 0) && h <= L.offsetTop + (((T = L.el) == null ? void 0 : T.clientHeight) || 0) - (a.offset || 0)) {
          s.value = L.id;
          return;
        }
      }
      if (!s.value && h >= (parseInt(String(a.offset)) || 0)) {
        const w = B.find((L) => h <= L.offsetTop - (a.offset || 0) && h > (a.offset || 0) ? (s.value = L.id, true) : false);
        w && (s.value = w.id);
      }
    }
    function c() {
      const u = a.target ? typeof a.target == "string" ? document.querySelector(a.target) : a.target : window;
      if (!u)
        return null;
      o.value = u;
      const f = me(d, 50);
      return d({ target: u }), u.addEventListener("scroll", f, { passive: true }), () => {
        u.removeEventListener("scroll", f);
      };
    }
    async function r(u) {
      var I, B, T;
      if (s.value === u || !u) return;
      l.value = u, s.value = u;
      const f = document.getElementById(u);
      if (!f) return;
      (B = o.value) == null || B.scrollTo({
        // @ts-ignore
        top: f.offsetTop - (a.offset || 0) - (((I = o.value) == null ? void 0 : I.offsetTop) || 0),
        behavior: "smooth",
        left: 0
      });
      const h = Q(() => {
        var w;
        l.value = null, (w = o.value) == null || w.removeEventListener("scroll", h);
      }, 300);
      (T = o.value) == null || T.addEventListener("scroll", h, { passive: true });
    }
    return (u, f) => {
      const h = resolveDirective("ripple");
      return a.data && a.data.length ? (openBlock(), createElementBlock("ul", {
        key: 0,
        class: normalizeClass([unref(t).b()])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(a.data, (I) => withDirectives((openBlock(), createElementBlock("li", {
          class: normalizeClass([unref(t).e("item"), unref(t).is("active", s.value === I.id)]),
          onClick: () => r(I.id)
        }, [
          s.value === I.id ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([unref(t).e("bar")])
          }, null, 2)) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(I.text), 1)
        ], 10, Ne)), [
          [h, true]
        ])), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var Xe = b(Oe, [["__scopeId", "data-v-4840d244"]]);
var qe = E("ImAnchor", Xe);
var Fe = defineComponent({
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
    const e = t, o = ref(null), s = n, l = k("alert"), a = useSlots(), m = computed(() => !!(s.showIcon && s.title)), d = computed(() => {
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
    }), c = async () => {
      var r, u;
      e("close"), (r = o.value) == null || r.animate([{
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
      }), await new Promise((f) => setTimeout(f, 300)), (u = o.value) == null || u.remove();
    };
    return (r, u) => {
      const f = resolveDirective("ripple");
      return openBlock(), createElementBlock("div", {
        ref_key: "alertRef",
        ref: o,
        class: normalizeClass([unref(l).b(), unref(l).m(s.color || "primary"), s.variant && unref(l).m(s.variant || "")])
      }, [
        s.showIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(l).e("icon")])
        }, [
          renderSlot(r.$slots, "icon", {}, () => [
            createVNode(unref(F), {
              name: d.value,
              size: m.value ? 24 : 16
            }, null, 8, ["name", "size"])
          ], true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(l).e("content")])
        }, [
          s.title || unref(a).title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(l).e("title")])
          }, [
            renderSlot(r.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(s.title), 1)
            ], true)
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(l).e("message")])
          }, [
            renderSlot(r.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(s.message), 1)
            ], true)
          ], 2)
        ], 2),
        s.closable ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(l).e("close")]),
          onClick: c
        }, [
          renderSlot(r.$slots, "close", {}, () => [
            createVNode(unref(F), {
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
var We = b(Fe, [["__scopeId", "data-v-d11fdcb2"]]);
var He = E("ImAlert", We);
var je = defineComponent({
  name: "ImBreadcrumb",
  __name: "ImBreadcrumb",
  props: {
    modelValue: { default: "" },
    separator: { default: "/" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = useSlots(), o = t, s = k("breadcrumb"), l = n, a = computed(
      () => {
        var d, c;
        return (c = (d = e.default) == null ? void 0 : d.call(e)) == null ? void 0 : c.filter((r) => {
          var u;
          return (r == null ? void 0 : r.type) && ((u = r == null ? void 0 : r.type) == null ? void 0 : u.name) === "ImBreadcrumbItem";
        });
      }
    ), m = (d) => {
      d && l.modelValue !== d && (o("update:modelValue", d), o("change", d));
    };
    return (d, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(s).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (r, u) => (openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(resolveDynamicComponent(r), {
          active: l.modelValue,
          onClick: m
        }, null, 8, ["active"])),
        a.value && a.value.length > 0 && u < a.value.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([unref(s).e("separator")])
        }, [
          renderSlot(d.$slots, "separator", {}, () => [
            createTextVNode(toDisplayString(l.separator), 1)
          ], true)
        ], 2)) : createCommentVNode("", true)
      ], 64))), 256))
    ], 2));
  }
});
var Ue = b(je, [["__scopeId", "data-v-64336468"]]);
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
    return (l, a) => (openBlock(), createElementBlock("div", {
      onClick: a[0] || (a[0] = () => s("click", o.value)),
      class: normalizeClass([unref(e).b(), unref(e).is("active", o.active === o.value && !!o.value)])
    }, [
      renderSlot(l.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var Je = b(Ge, [["__scopeId", "data-v-40ed04b1"]]);
var Ke = E("ImBreadcrumb", Ue);
var Qe = E("ImBreadcrumb", Je);
var Ze = (n = 50) => {
  const t = ref(0), e = ref(0), o = me((s) => {
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
    var f;
    await new Promise((h) => requestAnimationFrame(h));
    const l = t == null ? void 0 : t.value, a = e == null ? void 0 : e.value;
    if (!l || !a) return;
    const d = (((f = l.children) == null ? void 0 : f.length) != 1 ? l : l.children[0]).getBoundingClientRect(), c = d.bottom, r = a.getBoundingClientRect(), u = 2;
    switch (o) {
      case "bottom":
        a.style.setProperty("top", `${c + u}px`), a.style.setProperty(
          "left",
          `${d.left + d.width / 2 - r.width / 2}px`
        );
        break;
      case "bottomRight":
        a.style.setProperty("top", `${c + u}px`), a.style.setProperty(
          "left",
          `${d.left + d.width - r.width}px`
        );
        break;
      case "top":
        a.style.setProperty(
          "top",
          `${d.top - r.height - u}px`
        ), a.style.setProperty(
          "left",
          `${d.left + d.width / 2 - r.width / 2}px`
        );
        break;
      case "topRight":
        a.style.setProperty(
          "top",
          `${d.top - r.height - u}px`
        ), a.style.setProperty(
          "left",
          `${d.right - r.width}px`
        );
        break;
      case "topLeft":
        a.style.setProperty(
          "top",
          `${d.top - r.height - u}px`
        ), a.style.setProperty("left", `${d.left}px`);
        break;
      default:
        a.style.setProperty("top", `${c + u}px`), a.style.setProperty("left", `${d.left}px`);
        break;
    }
  }
};
var tt = (n) => {
  const t = n.toLowerCase().includes("bottom") ? "translateY(-10px)" : "translateY(10px)";
  function e(s, l) {
    s.style.transform = t, s.style.opacity = "0", s.style.pointerEvents = "none", s.getBoundingClientRect(), s.style.transform = "translateY(0px)", s.style.opacity = "1", s.style.pointerEvents = "auto", l();
  }
  async function o(s, l) {
    s.style.transform = t, s.style.opacity = "0", s.getBoundingClientRect();
    const a = () => {
      l(), s && (s.style.transform = "translateY(0px)"), s.removeEventListener("transitionend", a);
    };
    s.addEventListener("transitionend", a, { passive: true });
  }
  return {
    onEnter: e,
    onLeave: o
  };
};
var st = defineComponent({
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
    var L;
    const e = t, o = k("dropdown"), s = n, l = ref(null), a = ref(null), m = ref(s.modelValue || false), d = tt((L = s.placement) != null && L.includes("top") ? "top" : "bottom");
    let c = null, r = 100;
    const { x: u, y: f } = Ze(30), { zIndexToken: h } = U();
    et(m, l, a, s.placement), onMounted(() => {
      c && c(), c = w();
    }), onUnmounted(() => {
      c && c();
    }), watch(() => s.trigger, () => {
      c && c(), c = w();
    });
    const I = me(() => {
      const R = ge(u.value, f.value, a.value);
      ge(u.value, f.value, l.value) || R || (m.value = false);
    }, r);
    watch(() => [u.value, f.value], () => {
      s.trigger != "hover" || !m.value || I();
    });
    function B() {
      m.value = true, e("update:modelValue", m.value), e("change", m.value), window.addEventListener("scroll", T, { passive: true, capture: true });
    }
    function T() {
      m.value = false, e("update:modelValue", m.value), e("change", m.value), window.removeEventListener("scroll", close);
    }
    function w() {
      var G, fe;
      c && c();
      const R = Q((Y) => {
        var V;
        (V = l.value) != null && V.contains(Y.target) || T();
      }, r);
      if (document.addEventListener("click", R, { passive: true }), s.trigger === "hover") {
        const Y = Q(B, r);
        return (G = l.value) == null || G.addEventListener("mouseenter", Y, { passive: true }), () => {
          var V;
          (V = l.value) == null || V.removeEventListener("mouseenter", Y), document.removeEventListener("click", R);
        };
      }
      if (s.trigger === "click") {
        const Y = Q(() => {
          m.value ? T() : B();
        }, r);
        return (fe = l.value) == null || fe.addEventListener("click", Y, { passive: true }), () => {
          var V;
          (V = l.value) == null || V.removeEventListener("click", Y), document.removeEventListener("click", R);
        };
      }
      return null;
    }
    return (R, G) => (openBlock(), createElementBlock("span", {
      class: normalizeClass([unref(o).b()]),
      ref_key: "dropdownRef",
      ref: l
    }, [
      renderSlot(R.$slots, "default", {}, void 0, true),
      (openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          onEnter: unref(d).onEnter,
          onLeave: unref(d).onLeave,
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
              renderSlot(R.$slots, "content", {}, void 0, true)
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
var nt = b(st, [["__scopeId", "data-v-c394ceaa"]]);
var ot = E("ImDropdown", nt);
var at = defineComponent({
  name: "ImList",
  __name: "ImList",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "change"],
  setup(n, { emit: t }) {
    const e = n, o = useSlots(), s = k("list"), l = computed(() => {
      var c;
      const d = ((c = o.default) == null ? void 0 : c.call(o)) || [];
      if (d.length) {
        const r = [];
        return d.forEach((u) => {
          var f, h;
          typeof u.type == "object" ? r.push(u) : u.children && ((f = u.children) != null && f.length) && ((h = u.children) == null || h.forEach((I) => {
            typeof (I == null ? void 0 : I.type) == "object" && r.push(I);
          }));
        }), r;
      }
    }), a = t, m = (d) => {
      a("update:modelValue", d.value), a("change", d.value);
    };
    return (d, c) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass([unref(s).b()])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(l.value, (r) => (openBlock(), createBlock(resolveDynamicComponent(r), {
        active: e.modelValue,
        onClick: () => m(r.props)
      }, null, 8, ["active", "onClick"]))), 256))
    ], 2));
  }
});
var rt = b(at, [["__scopeId", "data-v-9599f63c"]]);
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
    return (l, a) => {
      const m = resolveDirective("ripple");
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(e).b(), unref(e).is("active", !!(s.active && s.active === s.value))]),
        onClick: a[0] || (a[0] = (d) => o("click", d))
      }, [
        renderSlot(l.$slots, "default", {}, void 0, true)
      ], 2)), [
        [m, s.ripple]
      ]);
    };
  }
});
var it = b(lt, [["__scopeId", "data-v-41ec0ba7"]]);
var ct = E("ImList", rt);
var dt = E("ImListItem", it);
var ut = ["src", "srcset", "alt", "loading"];
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
    const e = t, o = k("avatar"), s = n, l = (a) => {
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
        onError: l,
        src: s.src,
        srcset: s.srcset,
        alt: s.alt,
        loading: s.loading,
        class: normalizeClass([unref(o).e("img")])
      }, null, 42, ut))
    ], 6));
  }
});
var pt = b(mt, [["__scopeId", "data-v-c4c32038"]]);
var ft = E("ImAvatar", pt);
var vt = () => ({
  onEnter: (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease", n.getBoundingClientRect(), n.style.opacity = 1, t();
  },
  onLeave: async (n, t) => {
    n.style.opacity = 0, n.style.transition = "opacity 200ms ease", await new Promise((o) => requestAnimationFrame(o));
    const e = () => {
      t(), n && n.removeEventListener("transitionend", e);
    };
    n.addEventListener("transitionend", e);
  }
});
var yt = (n = "right") => {
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
      o.style.transform = e, o.style.opacity = "0", o.style.transition = "transform 200ms ease, opacity 200ms ease", await new Promise((a) => requestAnimationFrame(a));
      const l = () => {
        s(), o && o.removeEventListener("transitionend", l);
      };
      o.addEventListener("transitionend", l, { passive: true });
    }
  };
};
var ht = defineComponent({
  name: "ImMask",
  __name: "ImMask",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 0 },
    closeOnClickMask: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(n, { emit: t }) {
    const e = k("mask"), { zIndexToken: o } = U(), s = n, l = vt(), a = t, m = () => {
      s.closeOnClickMask && a("close", false);
    };
    return (d, c) => (openBlock(), createBlock(Transition, {
      onEnter: unref(l).onEnter,
      onLeave: unref(l).onLeave
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass([unref(e).b()]),
          style: normalizeStyle({
            zIndex: s.zIndex || unref(o)
          }),
          onClick: m
        }, [
          renderSlot(d.$slots, "default", {}, void 0, true)
        ], 6), [
          [vShow, s.visible]
        ])
      ]),
      _: 3
    }, 8, ["onEnter", "onLeave"]));
  }
});
var _t = b(ht, [["__scopeId", "data-v-2ba470f4"]]);
var pe = E("ImMask", _t);
var gt = ["aria-modal"];
var bt = defineComponent({
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
    const e = k("drawer"), o = t, s = n, l = ref(null), a = yt(s.placement), { zIndexToken: m } = U(), d = () => {
      o("update:modelValue", false);
    };
    return (c, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        tabindex: "-1",
        ref_key: "containerRef",
        ref: l,
        class: normalizeClass([unref(e).b(), s.placement ? unref(e).m(s.placement) : ""]),
        style: normalizeStyle({ "--im-drawer-size": (parseInt(String(s.size)) || 378) + "px", zIndex: s.zIndex || unref(m) }),
        "aria-modal": s.modelValue
      }, [
        s.mask ? (openBlock(), createBlock(unref(pe), {
          key: 0,
          visible: s.modelValue,
          closeOnClickMask: s.closeOnClickMask,
          onClose: d,
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
              renderSlot(c.$slots, "default", {}, void 0, true)
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
var It = b(bt, [["__scopeId", "data-v-1b0178a0"]]);
var wt = E("ImDrawer", It);
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
        e.title || o.$slots["header-action"] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(t).e("header")])
        }, [
          createBaseVNode("span", {
            class: normalizeClass([unref(t).e("title")])
          }, toDisplayString(e.title), 3),
          renderSlot(o.$slots, "header-action", {}, void 0, true)
        ], 2)) : createCommentVNode("", true)
      ], true),
      createBaseVNode("div", {
        class: normalizeClass([unref(t).e("body")])
      }, [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ], 2)
    ], 2));
  }
});
var xt = b(kt, [["__scopeId", "data-v-bb9cd52c"]]);
var Lt = E("ImCard", xt);
var $t = ["data-index", "onMouseenter", "onMouseleave"];
var Ct = { class: "im-message__text" };
var Et = defineComponent({
  __name: "Message",
  props: {
    callback: { type: Function },
    add: { type: Function }
  },
  setup(n, { expose: t }) {
    const e = k("message"), o = n, s = ref([]);
    let l = null;
    watch(() => s.value, () => {
      s.value.length === 0 ? l = setTimeout(() => {
        !s.value.length && o.callback();
      }, 500) : (l && clearTimeout(l), l = null);
    });
    const a = (r) => {
      switch (r) {
        case "success":
          return "check-circle-fill";
        case "warning":
          return "warning-circle-fill";
        case "error":
          return "close-circle-fill";
        default:
          return "info-circle-fill";
      }
    }, m = (r) => {
      r.timer && (clearTimeout(r.timer), r.timer = null);
    }, d = (r) => {
      r.timer && clearTimeout(r.timer), r.timer = setTimeout(() => {
        s.value = s.value.filter((u) => u.id !== r.id);
      }, r.duration || 3e3);
    }, c = (r) => {
      const u = setTimeout(() => {
        s.value = s.value.filter((f) => f.id !== r.id);
      }, r.duration || 3e3);
      s.value.push({ ...r, timer: u });
    };
    return o.add && o.add(c), t({ addMsg: c }), (r, u) => (openBlock(), createBlock(TransitionGroup, {
      tag: "ul",
      name: "list",
      css: true,
      class: normalizeClass([unref(e).b()])
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (f) => (openBlock(), createElementBlock("li", {
          key: f.id,
          "data-index": f.id,
          onMouseenter: () => m(f),
          onMouseleave: () => d(f),
          class: normalizeClass(["im-message__item", [unref(e).e("item"), f.color ? unref(e).e(f.color) : ""]])
        }, [
          createVNode(unref(F), {
            name: a(f.color),
            size: "18px"
          }, null, 8, ["name"]),
          createBaseVNode("span", Ct, toDisplayString(f.msg), 1)
        ], 42, $t))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var Bt = b(Et, [["__scopeId", "data-v-820c83a9"]]);
var Tt = class {
  constructor() {
    J(this, "app");
    J(this, "container");
    J(this, "addMsgToList");
    this.app = null, this.container = null, this.addMsgToList = null;
  }
  // 创建一个Vue应用实例
  createApp() {
    if (typeof window < "u" && window) {
      this.container = document.createElement("div"), this.container.classList.add("im-message-container"), document.body.appendChild(this.container);
      const t = this;
      this.app = createApp(Bt, {
        callback: () => {
          t.destroy();
        },
        add: (e) => {
          t.addMsgToList = e;
        }
      }), this.app.mount(this.container);
    } else
      throw new Error("只能在浏览器环境下使用");
  }
  destroy() {
    var t, e;
    (t = this.app) == null || t.unmount(), (e = this.container) == null || e.remove(), this.app = null, this.container = null;
  }
  addMsg(t) {
    if (this.app || this.createApp(), !this.addMsgToList) return console.error("addMsgToList is null");
    this.addMsgToList({
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
var $ = null;
var Yt = () => ($ || ($ = new Tt()), {
  info: (n, t = 3e3) => {
    $ == null || $.info(n, t);
  },
  success: (n, t = 3e3) => {
    $ == null || $.success(n, t);
  },
  warning: (n, t = 3e3) => {
    $ == null || $.warning(n, t);
  },
  error: (n, t = 3e3) => {
    $ == null || $.error(n, t);
  }
});
var zt = ["data-visible", "data-esc"];
var Mt = defineComponent({
  name: "ImDialog",
  __name: "ImDialog",
  props: {
    modelValue: { type: Boolean, default: false },
    closeOnClickMask: { type: Boolean, default: true },
    width: { default: "420px" },
    height: { default: "auto" },
    fullscreen: { type: Boolean, default: false },
    closeOnEscape: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = k("dialog"), o = t, s = n, l = ref(null);
    watch(
      () => s.modelValue,
      (c) => {
        c ? s.closeOnEscape && window.addEventListener("keydown", a, { passive: true }) : window.removeEventListener("keydown", a);
      }
    );
    function a(c) {
      if (c.key === "Escape" || c.code === "Escape") {
        const r = document.querySelectorAll(
          '.im-dialog[data-visible="true"][data-esc="true"]'
        );
        r.length && l.value && Array.from(r).pop() === l.value && o("update:modelValue", false);
      }
    }
    const m = async (c, r) => {
      c.style.setProperty("opacity", "0"), c.style.setProperty("transition", "all 0.2s ease"), s.fullscreen ? c.style.setProperty("transform", "translateY(100%)") : c.style.setProperty("transform", "scale(0.98)"), c.getBoundingClientRect(), c.style.setProperty("opacity", "1"), c.style.setProperty("transform", "translateY(0) scale(1)"), r(), !document.body.classList.contains("im-overflow-hidden") && document.body.classList.add("im-overflow-hidden");
    }, d = async (c, r) => {
      c.style.setProperty("opacity", "0"), s.fullscreen ? c.style.setProperty("transform", "translateY(100%)") : c.style.setProperty("transform", "scale(0.98)"), c.style.setProperty("transition", "all 0.2s ease");
      const u = () => {
        r(), Array.from(
          document.body.querySelectorAll('.im-dialog[data-visible="true"]')
        ).length || document.body.classList.remove("im-overflow-hidden"), c.removeEventListener("transitionend", u);
      };
      c.addEventListener("transitionend", u, { passive: true });
    };
    return (c, r) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createBaseVNode("div", {
        "aria-modal": "true",
        class: normalizeClass([unref(e).b()]),
        tabindex: "-1",
        "data-visible": s.modelValue,
        "data-esc": s.closeOnEscape,
        ref_key: "dialogRef",
        ref: l
      }, [
        createVNode(unref(pe), {
          closeOnClickMask: s.closeOnClickMask,
          visible: s.modelValue,
          onClose: r[0] || (r[0] = () => o("update:modelValue", false))
        }, null, 8, ["closeOnClickMask", "visible"]),
        createVNode(Transition, {
          onEnter: m,
          duration: { enter: 200, leave: 200 },
          onLeave: d
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              class: normalizeClass([
                unref(e).e("content"),
                unref(e).is("fullscreen", s.fullscreen),
                "im-shadow"
              ]),
              style: normalizeStyle({
                maxWidth: s.width,
                width: s.width,
                height: s.height
              })
            }, [
              renderSlot(c.$slots, "default", {}, void 0, true)
            ], 6), [
              [vShow, s.modelValue]
            ])
          ]),
          _: 3
        })
      ], 10, zt)
    ]));
  }
});
var Vt = b(Mt, [["__scopeId", "data-v-b6a6ad9a"]]);
var At = E("ImDialog", Vt);
var Pt = [
  oe,
  re,
  ae,
  le,
  F,
  Z,
  qe,
  He,
  Ke,
  Qe,
  ot,
  ct,
  dt,
  ft,
  pe,
  wt,
  Lt,
  At
];
var Dt = (n, t) => {
  n.provide(be, {
    size: (t == null ? void 0 : t.size) || 36,
    zIndex: (t == null ? void 0 : t.zIndex) || 1e3
  }), n.directive("ripple", Be), Pt.forEach((e) => {
    e.name ? n.component(e.name, e) : console.warn(`组件${e}缺少name属性`);
  });
};
var Nt = {
  install: Dt
};
export {
  He as ImAlert,
  qe as ImAnchor,
  ft as ImAvatar,
  Ke as ImBreadcrumb,
  Qe as ImBreadcrumbItem,
  oe as ImButton,
  Lt as ImCard,
  re as ImCol,
  At as ImDialog,
  Z as ImDivider,
  wt as ImDrawer,
  ot as ImDropdown,
  F as ImIcon,
  le as ImInput,
  ct as ImList,
  dt as ImListItem,
  pe as ImMask,
  ae as ImRow,
  Nt as default,
  Yt as useImMessage
};
//# sourceMappingURL=im-design.js.map
