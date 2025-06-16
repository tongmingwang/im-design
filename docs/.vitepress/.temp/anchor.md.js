import { useSSRContext, ref, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anchor 锚点","description":"","frontmatter":{},"headers":[],"relativePath":"anchor.md","filePath":"anchor.md","lastUpdated":1749913367000}');
const __default__ = { name: "anchor.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const list = ref([
      {
        id: "Im_demo1",
        text: "测试1"
      },
      {
        id: "Im_demo2",
        text: "测试2"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImAnchor = resolveComponent("ImAnchor");
      const _component_ImAlert = resolveComponent("ImAlert");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-75fdabb5><h1 id="anchor-锚点" tabindex="-1" data-v-75fdabb5>Anchor 锚点 <a class="header-anchor" href="#anchor-锚点" aria-label="Permalink to &quot;Anchor 锚点&quot;" data-v-75fdabb5>​</a></h1><p data-v-75fdabb5>锚点（Anchor）是指在网页中用于定位到页面内特定位置的链接。通过锚点，用户可以快速跳转到页面的不同部分，提高用户体验和导航效率。</p><h2 id="使用" tabindex="-1" data-v-75fdabb5>使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;" data-v-75fdabb5>​</a></h2><p data-v-75fdabb5><code data-v-75fdabb5>ImAnchor</code> 组件是一个展示内容的区域，意味着你可以随意放置在不同的区域，但是为了更好的使用体验，我们推荐将锚点放置在右侧。</p><div class="flex" data-v-75fdabb5><div class="demo-container" id="anchor_im_id" data-v-75fdabb5><!--[-->`);
      ssrRenderList(list.value, (item) => {
        _push(`<section class="demo"${ssrRenderAttr("id", item.id)} data-v-75fdabb5>${ssrInterpolate(item.text)}</section>`);
      });
      _push(`<!--]--></div><div class="anchor" data-v-75fdabb5>`);
      _push(ssrRenderComponent(_component_ImAnchor, {
        data: list.value,
        target: "#anchor_im_id"
      }, null, _parent));
      _push(`</div></div><div class="language-vue vp-adaptive-theme" data-v-75fdabb5><button title="Copy Code" class="copy" data-v-75fdabb5></button><span class="lang" data-v-75fdabb5>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-75fdabb5><code data-v-75fdabb5><span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-75fdabb5> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;flex&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-75fdabb5> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;demo-container&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-75fdabb5> id</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;anchor_im_id&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>section</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-75fdabb5> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;demo&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-75fdabb5> v-for</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>item </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-75fdabb5>in</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5> list</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-75fdabb5>id</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>item.id</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>        {{ item.text }}</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>section</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-75fdabb5> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;anchor&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>ImAnchor</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-75fdabb5>data</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>list</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-75fdabb5> target</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-75fdabb5>&quot;#anchor_im_id&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5> /&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>  &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span>
<span class="line" data-v-75fdabb5><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-75fdabb5>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-75fdabb5>&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1" data-v-75fdabb5>Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;" data-v-75fdabb5>​</a></h2>`);
      _push(ssrRenderComponent(_component_ImAlert, {
        color: "primary",
        title: "注意",
        variant: "tonal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` target 属性是比较重要的，如果你的锚点要和某个容器一起滚动，你需要设置这个属性，否则锚点将不会正常工作。 `);
          } else {
            return [
              createTextVNode(" target 属性是比较重要的，如果你的锚点要和某个容器一起滚动，你需要设置这个属性，否则锚点将不会正常工作。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p data-v-75fdabb5>默认滚动区域是 window，如果你想自定义滚动区域，你可以通过 <code data-v-75fdabb5>target</code> 属性来指定。接收一个选择器字符串。或者传入一个 DOM 元素。</p><h2 id="apis" tabindex="-1" data-v-75fdabb5>APIS <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIS&quot;" data-v-75fdabb5>​</a></h2></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("anchor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const anchor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75fdabb5"]]);
export {
  __pageData,
  anchor as default
};
