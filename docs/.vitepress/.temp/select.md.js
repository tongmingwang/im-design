import { useSSRContext, ref, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"select.md","filePath":"select.md","lastUpdated":1749913367000}');
const __default__ = { name: "select.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const val = ref("");
    const options = new Array(4).fill().map((_, index) => ({ value: `${index}`, label: `Item ${index} ` }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImSelect = resolveComponent("ImSelect");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="select-选择器" tabindex="-1">Select 选择器 <a class="header-anchor" href="#select-选择器" aria-label="Permalink to &quot;Select 选择器&quot;">​</a></h1><p>下拉选择器，用于从一组选项中选择一个。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基本使用。</p>`);
      _push(ssrRenderComponent(_component_ImSelect, {
        options: unref(options),
        modelValue: val.value,
        "onUpdate:modelValue": ($event) => val.value = $event
      }, null, _parent));
      _push(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ImSelect</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">options</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">options</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">val</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;vue&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> val</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> options</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> Array</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">4</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  .</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">fill</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  .</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">map</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">((</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">_</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">index</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">) </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> ({ value: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">\`\${</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">index</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">}\`</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, label: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">\`Item \${</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">index</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">} \`</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> }));</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div><h2 id="设置宽度" tabindex="-1">设置宽度 <a class="header-anchor" href="#设置宽度" aria-label="Permalink to &quot;设置宽度&quot;">​</a></h2><p>设置 width 为一个 css 样式值或者数字，单位默认为 px。</p>`);
      _push(ssrRenderComponent(_component_ImSelect, {
        options: unref(options),
        modelValue: val.value,
        "onUpdate:modelValue": ($event) => val.value = $event,
        width: "300",
        placeholder: "选择试试"
      }, null, _parent));
      _push(`<h2 id="设置尺寸" tabindex="-1">设置尺寸 <a class="header-anchor" href="#设置尺寸" aria-label="Permalink to &quot;设置尺寸&quot;">​</a></h2><p>设置 <code>size</code> 为数字，默认为 36。</p>`);
      _push(ssrRenderComponent(_component_ImSelect, {
        options: unref(options),
        modelValue: val.value,
        "onUpdate:modelValue": ($event) => val.value = $event,
        size: "40"
      }, null, _parent));
      _push(`<h2 id="多选模式" tabindex="-1">多选模式 <a class="header-anchor" href="#多选模式" aria-label="Permalink to &quot;多选模式&quot;">​</a></h2><p>设置 <code>multiple</code> 为 true，开启多选模式。</p>`);
      _push(ssrRenderComponent(_component_ImSelect, {
        options: unref(options),
        modelValue: val.value,
        "onUpdate:modelValue": ($event) => val.value = $event,
        multiple: "",
        placeholder: "选择多个试试"
      }, null, _parent));
      _push(`<p>设置 <code>maxTag</code> 最多显示的选项数量，默认为 1。</p>`);
      _push(ssrRenderComponent(_component_ImSelect, {
        options: unref(options),
        modelValue: val.value,
        "onUpdate:modelValue": ($event) => val.value = $event,
        multiple: "",
        maxTag: "2",
        width: "280"
      }, null, _parent));
      _push(`<h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2><p>设置 <code>disabled</code> 为 true，禁用选择器。</p>`);
      _push(ssrRenderComponent(_component_ImSelect, {
        options: unref(options),
        modelValue: val.value,
        "onUpdate:modelValue": ($event) => val.value = $event,
        disabled: ""
      }, null, _parent));
      _push(`<h2 id="清空选中" tabindex="-1">清空选中 <a class="header-anchor" href="#清空选中" aria-label="Permalink to &quot;清空选中&quot;">​</a></h2><p>设置 <code>clearable</code> 为 true，开启清空选中功能。</p>`);
      _push(ssrRenderComponent(_component_ImSelect, {
        options: unref(options),
        modelValue: val.value,
        "onUpdate:modelValue": ($event) => val.value = $event,
        clearable: ""
      }, null, _parent));
      _push(`<h2 id="隐藏箭头" tabindex="-1">隐藏箭头 <a class="header-anchor" href="#隐藏箭头" aria-label="Permalink to &quot;隐藏箭头&quot;">​</a></h2><p>设置 <code>arrow</code> 为 false，隐藏下拉箭头。</p>`);
      _push(ssrRenderComponent(_component_ImSelect, {
        options: unref(options),
        modelValue: val.value,
        "onUpdate:modelValue": ($event) => val.value = $event,
        arrow: false
      }, null, _parent));
      _push(`<h2 id="滚动关闭" tabindex="-1">滚动关闭 <a class="header-anchor" href="#滚动关闭" aria-label="Permalink to &quot;滚动关闭&quot;">​</a></h2><p>设置 <code>scrollClose</code> 属性为 true,即可实现</p>`);
      _push(ssrRenderComponent(_component_ImSelect, {
        options: unref(options),
        modelValue: val.value,
        "onUpdate:modelValue": ($event) => val.value = $event,
        scrollClose: ""
      }, null, _parent));
      _push(`<h2 id="apis" tabindex="-1">APIS <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIS&quot;">​</a></h2></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("select.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
