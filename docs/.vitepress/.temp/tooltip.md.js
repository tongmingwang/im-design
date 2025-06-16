import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"tooltip.md","filePath":"tooltip.md","lastUpdated":1749913367000}');
const _sfc_main = { name: "tooltip.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ImTooltip = resolveComponent("ImTooltip");
  const _component_ImRow = resolveComponent("ImRow");
  const _component_ImButton = resolveComponent("ImButton");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tooltip-文字提示" tabindex="-1">Tooltip 文字提示 <a class="header-anchor" href="#tooltip-文字提示" aria-label="Permalink to &quot;Tooltip 文字提示&quot;">​</a></h1><p>常用于展示鼠标 hover 时的提示信息。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>鼠标移入元素，显示提示的文案。</p>`);
  _push(ssrRenderComponent(_component_ImTooltip, { content: " This is a tooltip. 意思是 这是一个文字提示" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` This is a tooltip. `);
      } else {
        return [
          createTextVNode(" This is a tooltip. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ImTooltip</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> content</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot; This is a tooltip. 意思是 这是一个文字提示&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    This is a tooltip.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ImTooltip</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div><h2 id="方向" tabindex="-1">方向 <a class="header-anchor" href="#方向" aria-label="Permalink to &quot;方向&quot;">​</a></h2><p>placement 属性设置提示框出现的位置。</p>`);
  _push(ssrRenderComponent(_component_ImRow, { gutter: "8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "top"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`top`);
                  } else {
                    return [
                      createTextVNode("top")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("top")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "top-left"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`top-left`);
                  } else {
                    return [
                      createTextVNode("top-left")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("top-left")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "top-right"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`top-right`);
                  } else {
                    return [
                      createTextVNode("top-right")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("top-right")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "top"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("top")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "top-left"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("top-left")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "top-right"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("top-right")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br><br>`);
  _push(ssrRenderComponent(_component_ImRow, { gutter: "8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "bottom"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`bottom`);
                  } else {
                    return [
                      createTextVNode("bottom")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("bottom")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "bottom-left"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`bottom-left`);
                  } else {
                    return [
                      createTextVNode("bottom-left")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("bottom-left")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "bottom-right"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`bottom-right`);
                  } else {
                    return [
                      createTextVNode("bottom-right")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("bottom-right")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "bottom"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("bottom")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "bottom-left"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("bottom-left")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "bottom-right"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("bottom-right")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br><br>`);
  _push(ssrRenderComponent(_component_ImRow, { gutter: "8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "left"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`left`);
                  } else {
                    return [
                      createTextVNode("left")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("left")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "left-bottom"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`left-bottom`);
                  } else {
                    return [
                      createTextVNode("left-bottom")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("left-bottom")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "left-top"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`left-top`);
                  } else {
                    return [
                      createTextVNode("left-top")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("left-top")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "left"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("left")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "left-bottom"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("left-bottom")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "left-top"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("left-top")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br><br>`);
  _push(ssrRenderComponent(_component_ImRow, { gutter: "8" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "right"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`right`);
                  } else {
                    return [
                      createTextVNode("right")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("right")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "right-bottom"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`right-bottom`);
                  } else {
                    return [
                      createTextVNode("right-bottom")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("right-bottom")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ImTooltip, {
          content: "这是提示文字组件！",
          placement: "right-top"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ImButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`right-top`);
                  } else {
                    return [
                      createTextVNode("right-top")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ImButton, null, {
                  default: withCtx(() => [
                    createTextVNode("right-top")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "right"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("right")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "right-bottom"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("right-bottom")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_ImTooltip, {
            content: "这是提示文字组件！",
            placement: "right-top"
          }, {
            default: withCtx(() => [
              createVNode(_component_ImButton, null, {
                default: withCtx(() => [
                  createTextVNode("right-top")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="触发方式" tabindex="-1">触发方式 <a class="header-anchor" href="#触发方式" aria-label="Permalink to &quot;触发方式&quot;">​</a></h2><p>设置 <code>trigger</code> 属性，可以设置鼠标点击或停留触发提示。支持 <code>hover</code>, <code>click</code>。</p>`);
  _push(ssrRenderComponent(_component_ImTooltip, {
    content: "这是提示文字组件！",
    trigger: "click"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ImButton, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`点击显示`);
            } else {
              return [
                createTextVNode("点击显示")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ImButton, null, {
            default: withCtx(() => [
              createTextVNode("点击显示")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="滚动关闭" tabindex="-1">滚动关闭 <a class="header-anchor" href="#滚动关闭" aria-label="Permalink to &quot;滚动关闭&quot;">​</a></h2><p>设置 <code>scrollClose</code> 属性，当鼠标滚动时关闭提示框。</p>`);
  _push(ssrRenderComponent(_component_ImTooltip, {
    content: "这是提示文字组件！",
    scrollClose: "",
    trigger: "click"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ImButton, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`滚动鼠标滚轮关闭提示`);
            } else {
              return [
                createTextVNode("滚动鼠标滚轮关闭提示")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ImButton, null, {
            default: withCtx(() => [
              createTextVNode("滚动鼠标滚轮关闭提示")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="apis" tabindex="-1">APIS <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIS&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tooltip.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tooltip as default
};
