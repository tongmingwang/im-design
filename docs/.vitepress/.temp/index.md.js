import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Im Design","text":"Vue3组件解决方案","tagline":"匠心打造 · 极致体验 · 开箱即用","image":{"src":"/logo.svg","alt":"Im Design","width":300,"height":300,"loading":"lazy","decoding":"async"},"actions":[{"theme":"brand","text":"🚀 快速开始","link":"/getting-started"},{"theme":"alt","text":"📚 组件文档","link":"/button"}]},"features":[{"icon":"🛠️","title":"TypeScript深度集成","details":"完整的类型定义和API提示，提升开发效率和代码质量"},{"icon":"🎨","title":"主题定制能力","details":"支持动态换肤和CSS变量配置，轻松实现品牌化定制"},{"icon":"🔒","title":"安全可靠","details":"严格的代码审查和测试，保障生产环境稳定性"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1749908584000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
