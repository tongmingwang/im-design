import{C as x}from"./CodeView.js";import{d as y,h as w,r as n,c as m,o,w as t,a as l,f as p,F as u,g as d,p as c,b as h,x as A,e as _}from"./index.js";/* empty css                                        */const B=`
<template>
  <ImTabs v-model="value">
    <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
  </ImTabs>
  <ImPanes v-model="value">
    <ImPane v-for="item in arr" :name="item.value">
        This is a Panes Components, This Index is {{ item.label }}
    </ImPane>
  </ImPanes>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index.toString(),
  label: index,
}));
<\/script>
`,L=y({__name:"Tabs",setup(k){const s=w("1"),i=new Array(3).fill(0).map((v,e)=>({value:e.toString(),label:`Tab Index ${e}`})),f=[{name:"modelValue",type:"string",default:"-",description:"激活的面板索引",otherValue:"-"},{name:"color",type:"string",default:"-",description:"面板颜色",otherValue:"primary, success, warning,error"},{name:"align",type:"string",default:"left",description:"对齐方式",otherValue:"center, right"}];return(v,e)=>{const I=n("ImTab"),b=n("ImTabs"),P=n("ImPane"),T=n("ImPanes"),g=n("CodeTemp"),r=n("PageCard"),V=n("ComponentApi"),C=n("PageWrapper");return o(),m(C,{title:"Tabs 标签页",desc:"分隔内容上有关联但属于不同类别的数据集合。"},{default:t(()=>[l(r,{title:"基础用法",desc:"需要搭配ImPanes组件使用"},{default:t(()=>[l(g,null,{code:t(()=>[l(x,{code:B})]),default:t(()=>[l(b,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=a=>s.value=a)},{default:t(()=>[(o(!0),p(u,null,d(c(i),a=>(o(),m(I,{name:a.value,label:a.label},null,8,["name","label"]))),256))]),_:1},8,["modelValue"]),l(T,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=a=>s.value=a)},{default:t(()=>[(o(!0),p(u,null,d(c(i),a=>(o(),m(P,{name:a.value},{default:t(()=>[h(" This is a Panes Components, This Index is "+A(a.label),1)]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(r,{title:"依赖的组件"},{desc:t(()=>e[2]||(e[2]=[_("div",null,"ImPanes",-1),_("div",null,"ImPane",-1)])),_:1}),l(r,{title:"Api",desc:"Props属性："},{default:t(()=>[l(V,{data:f})]),_:1})]),_:1})}}});export{L as default};
