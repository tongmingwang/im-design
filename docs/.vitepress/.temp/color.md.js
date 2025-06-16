import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { useSSRContext } from "vue";
const __pageData = JSON.parse('{"title":"Color 色彩","description":"","frontmatter":{},"headers":[],"relativePath":"color.md","filePath":"color.md","lastUpdated":1748506272000}');
const __default__ = { name: "color.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const colors = [10, 9, 8, 6, 5, 4, 3, 2, 1];
    const colors2 = [12, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="color-色彩" tabindex="-1">Color 色彩 <a class="header-anchor" href="#color-色彩" aria-label="Permalink to &quot;Color 色彩&quot;">​</a></h1><p>为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</p><h2 id="主色" tabindex="-1">主色 <a class="header-anchor" href="#主色" aria-label="Permalink to &quot;主色&quot;">​</a></h2><p>默认的主题色是明亮、友好的蓝色。</p><div class="color_wrapper"><div class="item_main item" style="${ssrRenderStyle({ "--color": "var(--im-primary-color-7)" })}"></div><section class="item_wrapper"><!--[-->`);
      ssrRenderList(colors, (item) => {
        _push(`<div class="item" style="${ssrRenderStyle({ "--color": `var(--im-primary-color-${item})` })}"></div>`);
      });
      _push(`<!--]--></section></div><h2 id="成功色" tabindex="-1">成功色 <a class="header-anchor" href="#成功色" aria-label="Permalink to &quot;成功色&quot;">​</a></h2><p>成功色用于表示操作成功，例如提交表单、上传文件等。</p><div class="color_wrapper"><div class="item_main item" style="${ssrRenderStyle({ "--color": "var(--im-success-color-7)" })}"></div><section class="item_wrapper"><!--[-->`);
      ssrRenderList(colors, (item) => {
        _push(`<div class="item" style="${ssrRenderStyle({ "--color": `var(--im-success-color-${item})` })}"></div>`);
      });
      _push(`<!--]--></section></div><h2 id="警告色" tabindex="-1">警告色 <a class="header-anchor" href="#警告色" aria-label="Permalink to &quot;警告色&quot;">​</a></h2><p>警告色用于表示操作警告，例如表单验证不通过、上传文件过大等。</p><div class="color_wrapper"><div class="item_main item" style="${ssrRenderStyle({ "--color": "var(--im-warning-color-7)" })}"></div><section class="item_wrapper"><!--[-->`);
      ssrRenderList(colors, (item) => {
        _push(`<div class="item" style="${ssrRenderStyle({ "--color": `var(--im-warning-color-${item})` })}"></div>`);
      });
      _push(`<!--]--></section></div><h2 id="错误色" tabindex="-1">错误色 <a class="header-anchor" href="#错误色" aria-label="Permalink to &quot;错误色&quot;">​</a></h2><p>错误色用于表示操作失败，例如表单验证不通过、上传文件过大等。</p><div class="color_wrapper"><div class="item_main item" style="${ssrRenderStyle({ "--color": "var(--im-error-color-7)" })}"></div><section class="item_wrapper"><!--[-->`);
      ssrRenderList(colors, (item) => {
        _push(`<div class="item" style="${ssrRenderStyle({ "--color": `var(--im-error-color-${item})` })}"></div>`);
      });
      _push(`<!--]--></section></div><h2 id="中性色" tabindex="-1">中性色 <a class="header-anchor" href="#中性色" aria-label="Permalink to &quot;中性色&quot;">​</a></h2><p>中性色用于文本、背景和边框颜色。</p><div class="color_wrapper gray"><div class="item_main item" style="${ssrRenderStyle({ "--color": "var(--im-gray-color-10)" })}"></div><section class="item_wrapper"><!--[-->`);
      ssrRenderList(colors2, (item) => {
        _push(`<div class="item" style="${ssrRenderStyle({ "--color": `var(--im-gray-color-${item})` })}"></div>`);
      });
      _push(`<!--]--></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("color.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
