import { defineComponent, ref, computed, watch, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Checkbox 多选框","description":"","frontmatter":{},"headers":[],"relativePath":"checkbox.md","filePath":"checkbox.md","lastUpdated":1749967739000}');
const __default__ = { name: "checkbox.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const checked = ref(true);
    const checkedList = ref([]);
    const isCheckAll = ref(false);
    const indeterminate = computed(
      () => checkedList.value.length > 0 && list.length > checkedList.value.length && !isCheckAll.value
    );
    const list = ["1", "2", "3"];
    watch(() => checkedList.value, (val) => {
      isCheckAll.value = val.length === list.length;
    });
    const onCheckAll = () => {
      if (isCheckAll.value) {
        checkedList.value = list;
      } else {
        checkedList.value = [];
      }
    };
    const ApiList = [
      {
        attr: "v-model",
        desc: "绑定值",
        type: "Boolean",
        default: "false"
      },
      { attr: "label", desc: "显示的文本", type: "String", default: "无" },
      { attr: "disabled", desc: "是否禁用", type: "Boolean", default: "false" },
      { attr: "readonly", desc: "是否只读", type: "Boolean", default: "false" },
      { attr: "indeterminate", desc: "是否为半选状态", type: "Boolean", default: "false" },
      { attr: "change", desc: "状态改变时的回调函数", type: "Function", default: "无" },
      { attr: "name", desc: "原生 name 属性", type: "String", default: "无" },
      { attr: "value", desc: "绑定的值", type: "String|Number", default: "无" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImAlert = resolveComponent("ImAlert");
      const _component_ImCheckbox = resolveComponent("ImCheckbox");
      const _component_ImTable = resolveComponent("ImTable");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-964a20ff><h1 id="checkbox-多选框" tabindex="-1" data-v-964a20ff>Checkbox 多选框 <a class="header-anchor" href="#checkbox-多选框" aria-label="Permalink to &quot;Checkbox 多选框&quot;" data-v-964a20ff>​</a></h1><p data-v-964a20ff>在一组备选项中进行多选。</p><h2 id="基础用法" tabindex="-1" data-v-964a20ff>基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;" data-v-964a20ff>​</a></h2><p data-v-964a20ff>单独使用可以表示两种状态之间的切换</p>`);
      _push(ssrRenderComponent(_component_ImAlert, { variant: "outlined" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 选中项绑定到v-model显示的变量上。它的值是 Boolean 类型的。 `);
          } else {
            return [
              createTextVNode(" 选中项绑定到v-model显示的变量上。它的值是 Boolean 类型的。 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ImCheckbox, {
        modelValue: checked.value,
        "onUpdate:modelValue": ($event) => checked.value = $event,
        label: "你好中国"
      }, null, _parent));
      _push(`<div class="language-vue vp-adaptive-theme" data-v-964a20ff><button title="Copy Code" class="copy" data-v-964a20ff></button><span class="lang" data-v-964a20ff>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-964a20ff><code data-v-964a20ff><span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>ImCheckbox</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>checked</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> label</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;你好中国&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> /&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span></code></pre></div><h2 id="禁用状态" tabindex="-1" data-v-964a20ff>禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;" data-v-964a20ff>​</a></h2><p data-v-964a20ff>多选框不可用状态 设置 disabled 属性为 true 即可。</p>`);
      _push(ssrRenderComponent(_component_ImCheckbox, {
        label: "你好中国",
        disabled: ""
      }, null, _parent));
      _push(`<div class="language-vue vp-adaptive-theme" data-v-964a20ff><button title="Copy Code" class="copy" data-v-964a20ff></button><span class="lang" data-v-964a20ff>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-964a20ff><code data-v-964a20ff><span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>ImCheckbox</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> label</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;你好中国&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> /&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span></code></pre></div><h2 id="只读状态" tabindex="-1" data-v-964a20ff>只读状态 <a class="header-anchor" href="#只读状态" aria-label="Permalink to &quot;只读状态&quot;" data-v-964a20ff>​</a></h2><p data-v-964a20ff>多选框只读状态 设置 readonly 属性为 true 即可。</p>`);
      _push(ssrRenderComponent(_component_ImCheckbox, {
        label: "你好中国",
        readonly: ""
      }, null, _parent));
      _push(`<div class="language-vue vp-adaptive-theme" data-v-964a20ff><button title="Copy Code" class="copy" data-v-964a20ff></button><span class="lang" data-v-964a20ff>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-964a20ff><code data-v-964a20ff><span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>ImCheckbox</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> label</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;你好中国&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> readonly</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> /&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span></code></pre></div><h2 id="多选框组" tabindex="-1" data-v-964a20ff>多选框组 <a class="header-anchor" href="#多选框组" aria-label="Permalink to &quot;多选框组&quot;" data-v-964a20ff>​</a></h2>`);
      _push(ssrRenderComponent(_component_ImAlert, { variant: "outlined" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 多选情况下，每一个 ImCheckbox 必须传入 value 属性，以及 v-model必须是数组 `);
          } else {
            return [
              createTextVNode(" 多选情况下，每一个 ImCheckbox 必须传入 value 属性，以及 v-model必须是数组 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ImCheckbox, {
        modelValue: isCheckAll.value,
        "onUpdate:modelValue": ($event) => isCheckAll.value = $event,
        indeterminate: indeterminate.value,
        label: "全选",
        onChange: onCheckAll
      }, null, _parent));
      _push(`<div data-v-964a20ff>是否全选：${ssrInterpolate(checkedList.value)}</div><!--[-->`);
      ssrRenderList(list, (item) => {
        _push(ssrRenderComponent(_component_ImCheckbox, {
          value: item,
          modelValue: checkedList.value,
          "onUpdate:modelValue": ($event) => checkedList.value = $event
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`选项 ${ssrInterpolate(item)}`);
            } else {
              return [
                createTextVNode("选项 " + toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="language-vue vp-adaptive-theme" data-v-964a20ff><button title="Copy Code" class="copy" data-v-964a20ff></button><span class="lang" data-v-964a20ff>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-964a20ff><code data-v-964a20ff><span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>ImCheckbox</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff>    v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>isCheckAll</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff>indeterminate</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>indeterminate</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff>    label</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;全选&quot;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff>change</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>onCheckAll</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> /&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;{{ checkedList }}&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>ImCheckbox</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>item</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff>    v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>checkedList</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff>change</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>onItemChange</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>    v-for</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>item </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>in</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> list</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    &gt;选项 {{ item }}&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>ImCheckbox</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  &gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> { ref, computed } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff> &#39;vue&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>;</span></span>
<span class="line" data-v-964a20ff></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff> checkedList</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>([]);</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff> isCheckAll</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff>false</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>);</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff> indeterminate</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> computed</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>(</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  () </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>=&gt;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    checkedList.value.</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff>length</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> &gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> &amp;&amp;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    list.</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff>length</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> &gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> checkedList.value.</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff>length</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> &amp;&amp;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>    !</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>isCheckAll.value</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>);</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff> list</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> [</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&#39;1&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&#39;2&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-964a20ff>&#39;3&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>];</span></span>
<span class="line" data-v-964a20ff></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff>watch</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>(</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  () </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> checkedList.value,</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  (</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}" data-v-964a20ff>val</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>) </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> {</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    isCheckAll.value </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> val.</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff>length</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> ===</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> list.</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-964a20ff>length</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  }</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>);</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-964a20ff> onCheckAll</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> () </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>=&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> {</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>  if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> (isCheckAll.value) {</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    checkedList.value </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> list;</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>else</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> {</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>    checkedList.value </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-964a20ff>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff> [];</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>  }</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>};</span></span>
<span class="line" data-v-964a20ff><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-964a20ff>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-964a20ff>&gt;</span></span></code></pre></div><h2 id="apis" tabindex="-1" data-v-964a20ff>APIS <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIS&quot;" data-v-964a20ff>​</a></h2>`);
      _push(ssrRenderComponent(_component_ImTable, {
        border: false,
        stript: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead data-v-964a20ff${_scopeId}><tr data-v-964a20ff${_scopeId}><th data-v-964a20ff${_scopeId}>属性</th><th data-v-964a20ff${_scopeId}>说明</th><th data-v-964a20ff${_scopeId}>类型</th><th data-v-964a20ff${_scopeId}>默认值</th></tr></thead><tbody data-v-964a20ff${_scopeId}><!--[-->`);
            ssrRenderList(ApiList, (item) => {
              _push2(`<tr data-v-964a20ff${_scopeId}><td data-v-964a20ff${_scopeId}>${ssrInterpolate(item.attr)}</td><td data-v-964a20ff${_scopeId}>${ssrInterpolate(item.desc)}</td><td data-v-964a20ff${_scopeId}>${ssrInterpolate(item.type)}</td><td data-v-964a20ff${_scopeId}>${ssrInterpolate(item.default)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", null, "属性"),
                  createVNode("th", null, "说明"),
                  createVNode("th", null, "类型"),
                  createVNode("th", null, "默认值")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(), createBlock(Fragment, null, renderList(ApiList, (item) => {
                  return createVNode("tr", null, [
                    createVNode("td", null, toDisplayString(item.attr), 1),
                    createVNode("td", null, toDisplayString(item.desc), 1),
                    createVNode("td", null, toDisplayString(item.type), 1),
                    createVNode("td", null, toDisplayString(item.default), 1)
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("checkbox.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-964a20ff"]]);
export {
  __pageData,
  checkbox as default
};
