import { useSSRContext, resolveComponent, resolveDirective, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"button.md","filePath":"button.md","lastUpdated":1749913367000}');
const __default__ = { name: "button.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const colors = ["default", "primary", "error", "warning", "success"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_im_row = resolveComponent("im-row");
      const _component_im_button = resolveComponent("im-button");
      const _component_ImIcon = resolveComponent("ImIcon");
      const _directive_ripple = resolveDirective("ripple");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d9efdf90><h1 id="button-按钮" tabindex="-1" data-v-d9efdf90>Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;" data-v-d9efdf90>​</a></h1><p data-v-d9efdf90>按钮是用来触发操作的组件，点击按钮会执行相应的业务逻辑。</p><h2 id="基础用法" tabindex="-1" data-v-d9efdf90>基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;" data-v-d9efdf90>​</a></h2><p data-v-d9efdf90>使用 <code data-v-d9efdf90>color</code> <code data-v-d9efdf90>variant</code> 属性组合来定义按钮色彩。</p>`);
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.toLocaleUpperCase())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.toLocaleUpperCase()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  key: index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.toLocaleUpperCase()), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                variant: "outlined",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.toLocaleUpperCase())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.toLocaleUpperCase()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  variant: "outlined",
                  key: index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.toLocaleUpperCase()), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                variant: "tonal",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.toLocaleUpperCase())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.toLocaleUpperCase()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  variant: "tonal",
                  key: index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.toLocaleUpperCase()), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                variant: "text",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.toLocaleUpperCase())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.toLocaleUpperCase()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  variant: "text",
                  key: index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.toLocaleUpperCase()), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="圆形按钮" tabindex="-1" data-v-d9efdf90>圆形按钮 <a class="header-anchor" href="#圆形按钮" aria-label="Permalink to &quot;圆形按钮&quot;" data-v-d9efdf90>​</a></h2><p data-v-d9efdf90><code data-v-d9efdf90>shape</code> 为 <code data-v-d9efdf90>circle</code> 的按钮组合</p>`);
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "circle",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ImIcon, { name: "like" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ImIcon, { name: "like" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "circle",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ImIcon, { name: "like" })
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "circle",
                variant: "outlined",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ImIcon, { name: "like" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ImIcon, { name: "like" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "circle",
                  variant: "outlined",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ImIcon, { name: "like" })
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "circle",
                variant: "tonal",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ImIcon, { name: "like" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ImIcon, { name: "like" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "circle",
                  variant: "tonal",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ImIcon, { name: "like" })
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "circle",
                variant: "text",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ImIcon, { name: "like" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ImIcon, { name: "like" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "circle",
                  variant: "text",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ImIcon, { name: "like" })
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="矩形按钮" tabindex="-1" data-v-d9efdf90>矩形按钮 <a class="header-anchor" href="#矩形按钮" aria-label="Permalink to &quot;矩形按钮&quot;" data-v-d9efdf90>​</a></h2><p data-v-d9efdf90><code data-v-d9efdf90>shape</code> 为 <code data-v-d9efdf90>square</code> 的按钮组合</p>`);
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "square",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ImIcon, { name: "like" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ImIcon, { name: "like" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "square",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ImIcon, { name: "like" })
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "square",
                variant: "outlined",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ImIcon, { name: "like" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ImIcon, { name: "like" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "square",
                  variant: "outlined",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ImIcon, { name: "like" })
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "square",
                variant: "tonal",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ImIcon, { name: "like" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ImIcon, { name: "like" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "square",
                  variant: "tonal",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ImIcon, { name: "like" })
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "square",
                variant: "text",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ImIcon, { name: "like" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ImIcon, { name: "like" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "square",
                  variant: "text",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ImIcon, { name: "like" })
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="大圆角按钮" tabindex="-1" data-v-d9efdf90>大圆角按钮 <a class="header-anchor" href="#大圆角按钮" aria-label="Permalink to &quot;大圆角按钮&quot;" data-v-d9efdf90>​</a></h2><p data-v-d9efdf90><code data-v-d9efdf90>shape</code> 为 <code data-v-d9efdf90>round</code> 的按钮组合</p>`);
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "round",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.toUpperCase())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.toUpperCase()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "round",
                  key: index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.toUpperCase()), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "round",
                variant: "outlined",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.toUpperCase())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.toUpperCase()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "round",
                  variant: "outlined",
                  key: index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.toUpperCase()), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "round",
                variant: "tonal",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.toUpperCase())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.toUpperCase()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "round",
                  variant: "tonal",
                  key: index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.toUpperCase()), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(colors, (item, index) => {
              _push2(ssrRenderComponent(_component_im_button, {
                color: item,
                shape: "round",
                variant: "text",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.toUpperCase())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.toUpperCase()), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(colors, (item, index) => {
                return createVNode(_component_im_button, {
                  color: item,
                  shape: "round",
                  variant: "text",
                  key: index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.toUpperCase()), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="宽度铺满" tabindex="-1" data-v-d9efdf90>宽度铺满 <a class="header-anchor" href="#宽度铺满" aria-label="Permalink to &quot;宽度铺满&quot;" data-v-d9efdf90>​</a></h2><p data-v-d9efdf90>使用 <code data-v-d9efdf90>width</code> 属性来定义按钮的宽度。接受一个字符串，如何 <code data-v-d9efdf90>100px</code>。</p><section data-v-d9efdf90><!--[-->`);
      ssrRenderList(colors, (item, index) => {
        _push(ssrRenderComponent(_component_im_button, mergeProps({
          width: "100%",
          color: item,
          key: index
        }, ssrGetDirectiveProps(_ctx, _directive_ripple, true)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.toUpperCase())}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.toUpperCase()), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section><h2 id="禁用状态" tabindex="-1" data-v-d9efdf90>禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;" data-v-d9efdf90>​</a></h2><p data-v-d9efdf90>使用 <code data-v-d9efdf90>disabled</code> 属性来定义按钮是否禁用。接受一个 <code data-v-d9efdf90>Boolean</code> 值。</p><div data-v-d9efdf90>`);
      _push(ssrRenderComponent(_component_im_button, {
        color: "success",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled`);
          } else {
            return [
              createTextVNode("Disabled")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "warning",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled`);
          } else {
            return [
              createTextVNode("Disabled")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "primary",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled`);
          } else {
            return [
              createTextVNode("Disabled")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "error",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled`);
          } else {
            return [
              createTextVNode("Disabled")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-d9efdf90>`);
      _push(ssrRenderComponent(_component_im_button, {
        variant: "outlined",
        color: "success",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled`);
          } else {
            return [
              createTextVNode("Disabled")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        variant: "outlined",
        color: "warning",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled`);
          } else {
            return [
              createTextVNode("Disabled")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        variant: "outlined",
        color: "primary",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled`);
          } else {
            return [
              createTextVNode("Disabled")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        variant: "outlined",
        color: "error",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disabled`);
          } else {
            return [
              createTextVNode("Disabled")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="language-html vp-adaptive-theme" data-v-d9efdf90><button title="Copy Code" class="copy" data-v-d9efdf90></button><span class="lang" data-v-d9efdf90>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-d9efdf90><code data-v-d9efdf90><span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;success&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;Disabled&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;warning&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;Disabled&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;Disabled&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;error&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;Disabled&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> variant</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;outlined&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;success&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;Disabled&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> variant</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;outlined&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;warning&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;Disabled&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> variant</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;outlined&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;Disabled&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> variant</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;outlined&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;error&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;Disabled&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span></code></pre></div><h2 id="加载状态" tabindex="-1" data-v-d9efdf90>加载状态 <a class="header-anchor" href="#加载状态" aria-label="Permalink to &quot;加载状态&quot;" data-v-d9efdf90>​</a></h2><p data-v-d9efdf90>可以使用 <code data-v-d9efdf90>loading</code> 属性来定义按钮是否处于加载状态。接受一个 <code data-v-d9efdf90>Boolean</code> 值。</p><div data-v-d9efdf90>`);
      _push(ssrRenderComponent(_component_im_button, {
        color: "success",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading`);
          } else {
            return [
              createTextVNode("Loading")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "warning",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading`);
          } else {
            return [
              createTextVNode("Loading")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "primary",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading`);
          } else {
            return [
              createTextVNode("Loading")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "error",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading`);
          } else {
            return [
              createTextVNode("Loading")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-d9efdf90>`);
      _push(ssrRenderComponent(_component_im_button, {
        variant: "outlined",
        color: "success",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading`);
          } else {
            return [
              createTextVNode("Loading")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        variant: "outlined",
        color: "warning",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading`);
          } else {
            return [
              createTextVNode("Loading")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        variant: "outlined",
        color: "primary",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading`);
          } else {
            return [
              createTextVNode("Loading")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        variant: "outlined",
        color: "error",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading`);
          } else {
            return [
              createTextVNode("Loading")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h2 id="调整尺寸" tabindex="-1" data-v-d9efdf90>调整尺寸 <a class="header-anchor" href="#调整尺寸" aria-label="Permalink to &quot;调整尺寸&quot;" data-v-d9efdf90>​</a></h2><p data-v-d9efdf90>支持数字类型的 n 多尺寸，默认大小为 <code data-v-d9efdf90>36</code>。你可以设置 <code data-v-d9efdf90>size</code> 属性来定义按钮的大小。</p><div data-v-d9efdf90>`);
      _push(ssrRenderComponent(_component_im_button, {
        color: "primary",
        size: "24"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`24`);
          } else {
            return [
              createTextVNode("24")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "primary",
        size: "32"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`32`);
          } else {
            return [
              createTextVNode("32")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "primary",
        size: "36"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`36`);
          } else {
            return [
              createTextVNode("36")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "primary",
        size: "48"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`48`);
          } else {
            return [
              createTextVNode("48")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "primary",
        size: "60"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`60`);
          } else {
            return [
              createTextVNode("60")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="language-html vp-adaptive-theme" data-v-d9efdf90><button title="Copy Code" class="copy" data-v-d9efdf90></button><span class="lang" data-v-d9efdf90>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-d9efdf90><code data-v-d9efdf90><span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> size</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;24&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;24&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> size</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;32&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;32&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> size</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;36&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;36&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> size</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;48&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;48&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90> size</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;60&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;60&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span></code></pre></div><h2 id="自定义颜色" tabindex="-1" data-v-d9efdf90>自定义颜色 <a class="header-anchor" href="#自定义颜色" aria-label="Permalink to &quot;自定义颜色&quot;" data-v-d9efdf90>​</a></h2><p data-v-d9efdf90>采用 css 变量自定义颜色,直接在按钮组件上覆盖掉默认的颜色变量即可</p><div data-v-d9efdf90>`);
      _push(ssrRenderComponent(_component_im_button, {
        color: "primary",
        style: { "--im-gray-color-1": "#fff", "--im-primary-color-8": "#262626", "--im-primary-color-7": "#565656", "--im-primary-color-9": "#000" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Custom`);
          } else {
            return [
              createTextVNode("Custom")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_im_button, {
        color: "primary",
        style: { "--im-gray-color-1": "#fff", "--im-primary-color-7": "rgb(187, 37, 132)", "--im-primary-color-8": "rgb(150, 14, 100)", "--im-primary-color-9": "rgb(125, 8, 82)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Custom`);
          } else {
            return [
              createTextVNode("Custom")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="language-html vp-adaptive-theme" data-v-d9efdf90><button title="Copy Code" class="copy" data-v-d9efdf90></button><span class="lang" data-v-d9efdf90>html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-d9efdf90><code data-v-d9efdf90><span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90>    color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;primary&quot;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90>    style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;--im-gray-color-1: #fff;--im-primary-color-8: #262626;--im-primary-color-7: #565656;--im-primary-color-9: #000;&quot;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>    &gt;Custom&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90>    color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;primary&quot;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-d9efdf90>    style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-d9efdf90>&quot;--im-gray-color-1: #fff;--im-primary-color-7: rgb(187, 37, 132);--im-primary-color-8:rgb(150, 14, 100);--im-primary-color-9: rgb(125, 8, 82);&quot;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>    &gt;Custom&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>im-button</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>  &gt;</span></span>
<span class="line" data-v-d9efdf90><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-d9efdf90>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-d9efdf90>&gt;</span></span></code></pre></div><h2 id="apis" tabindex="-1" data-v-d9efdf90>APIS <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIS&quot;" data-v-d9efdf90>​</a></h2></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("button.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9efdf90"]]);
export {
  __pageData,
  button as default
};
