import{C as f}from"./CodeView.js";import{d as _,h as b,r as a,c as y,o as V,w as o,a as e,p as h}from"./index.js";/* empty css                                        */const v=`
<template>
  <ImSelect :options="options" v-model="val" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const val = ref('');
const options = new Array(4)
  .fill(0)
  .map((_, index) => ({ value: index, label: Item + index }));
<\/script>
`,A=_({__name:"Select",setup(g){const l=b(""),r=new Array(4).fill(0).map((s,t)=>({value:`${t}`,label:`Item ${t} `})),p=[{name:"modelValue",type:"string | number | any",default:"-",description:"绑定值",otherValue:"-"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用",otherValue:"-"},{name:"readonly",type:"boolean",default:"false",description:"是否只读",otherValue:"-"},{name:"placeholder",type:"string",default:"-",description:"占位符",otherValue:"-"},{name:"options",type:"Array<{ value: string | number; label: string,disabled:boolean }>",default:"[]",description:"选项列表，用于渲染下拉菜单的选项。每个选项对象包含 value 和 label 属性。",otherValue:"-"},{name:"size",type:"number | string",default:"36px",description:"组件大小，默认为 36px",otherValue:"-"},{name:"clearable",type:"boolean",default:"false",description:"是否可清空",otherValue:"-"},{name:"zIndex",type:"number",default:"1000",description:"浮层的 z-index 值，默认为 1000。当浮层被遮挡时，可以调整此值以解决层级问题。",otherValue:"-"},{name:"multiple",type:"boolean",default:"false",description:"是否支持多选",otherValue:"-"},{name:"maxTag",type:"number",default:"1",description:"多选显示的最大标签数，默认为 1。",otherValue:"-"},{name:"arrow",type:"boolean",default:"false",description:"是否显示下拉箭头",otherValue:"-"},{name:"offset",type:"number",default:"8",description:"下拉菜单偏移量，默认为 8。用于调整下拉菜单的位置。",otherValue:"-"},{name:"scrollClose",type:"boolean",default:"false",description:"滚动时是否关闭下拉菜单，默认为 false。",otherValue:"-"},{name:"emptyText",type:"string",default:"暂无数据",description:'下拉菜单为空时显示的文本，默认为 "暂无数据"。',otherValue:"-"}];return(s,t)=>{const i=a("ImSelect"),d=a("CodeTemp"),n=a("PageCard"),m=a("ComponentApi"),u=a("PageWrapper");return V(),y(u,{title:"Select 选择器",desc:"下拉选择器，用于从一组选项中选择一个。"},{default:o(()=>[e(n,{title:"基础用法",desc:"通过设置 v-model 绑定输入框的值"},{default:o(()=>[e(d,null,{code:o(()=>[e(f,{code:v})]),default:o(()=>[e(i,{options:h(r),modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c)},null,8,["options","modelValue"])]),_:1})]),_:1}),e(n,{title:"Api",desc:"Props属性："},{default:o(()=>[e(m,{data:p})]),_:1})]),_:1})}}});export{A as default};
