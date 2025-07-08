import{C as b}from"./CodeView.js";import{d as g,h as d,z as A,r as a,c as V,o as C,w as t,a as n,e as u,b as o,_ as L}from"./index.js";/* empty css                                        */const P={class:"demo"},y=`
<template>
  <ImMenu v-model="active" :subActiveList="subActiveList">
    <ImMenuItem name="1">Home</ImMenuItem>
    <ImSubMenu name="2">
      <template #label>Orders</template>
      <ImMenuItem name="2-1">Order Page1</ImMenuItem>
      <ImMenuItem name="2-2">Order Page2</ImMenuItem>
    </ImSubMenu>
    <ImMenuItem name="3">About Us</ImMenuItem>
  </ImMenu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const subActiveList = ref<Array<string | number>>([]);
const active = ref('1');

watch(
  () => active.value,
  (val) => {
    if (['2-1', '2-2'].includes(val)) {
      subActiveList.value = ['2'];
    } else {
      subActiveList.value = [];
    }
  }
);
<\/script>
`,w=g({__name:"Menu",setup(O){const m=d([]),l=d("1");A(()=>l.value,i=>{["2-1","2-2"].includes(i)?m.value=["2"]:m.value=[]});const p=[{name:"modelValue",type:"string",default:"-",description:"激活的菜单项",otherValue:"-"},{name:"color",type:"string",default:"-",description:"菜单颜色",otherValue:"primary, success, warning,error"},{name:"align",type:"string",default:"left",description:"对齐方式",otherValue:"center, right"},{name:"subActiveList",type:"Array<string | number>",default:"[]",description:"子菜单激活列表",otherValue:"-"},{name:"vertical",type:"boolean",default:"false",description:"垂直菜单",otherValue:"-"}];return(i,e)=>{const s=a("ImMenuItem"),c=a("ImSubMenu"),v=a("ImMenu"),_=a("CodeTemp"),r=a("PageCard"),I=a("ComponentApi"),f=a("PageWrapper");return C(),V(f,{title:"Menu 菜单",desc:"为网站提供导航功能的菜单"},{default:t(()=>[n(r,{title:"基础用法",desc:"设置 v-model 可以让菜单选中项高亮。"},{default:t(()=>[n(_,null,{code:t(()=>[n(b,{code:y})]),default:t(()=>[u("div",P,[n(v,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=M=>l.value=M),subActiveList:m.value},{default:t(()=>[n(s,{name:"1"},{default:t(()=>e[1]||(e[1]=[o("Home")])),_:1,__:[1]}),n(c,{name:"2"},{label:t(()=>e[2]||(e[2]=[o("Orders")])),default:t(()=>[n(s,{name:"2-1"},{default:t(()=>e[3]||(e[3]=[o("Order Page1")])),_:1,__:[3]}),n(s,{name:"2-2"},{default:t(()=>e[4]||(e[4]=[o("Order Page2")])),_:1,__:[4]})]),_:1}),n(s,{name:"3"},{default:t(()=>e[5]||(e[5]=[o("About Us")])),_:1,__:[5]})]),_:1},8,["modelValue","subActiveList"])])]),_:1})]),_:1}),n(r,{title:"依赖的组件"},{desc:t(()=>e[6]||(e[6]=[u("div",null,"ImMenu",-1),u("div",null,"ImMenuItem",-1),u("div",null,"ImSubMenu",-1)])),_:1}),n(r,{title:"Api",desc:"Props属性："},{default:t(()=>[n(I,{data:p})]),_:1})]),_:1})}}}),N=L(w,[["__scopeId","data-v-a392fc72"]]);export{N as default};
