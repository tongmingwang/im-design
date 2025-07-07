import{C as f}from"./CodeView.js";import{d as v,h as g,r,c as C,o as V,w as t,a as e,b as d,e as c}from"./index.js";/* empty css                                        */const P=`
<template>
  <ImBreadcrumb v-model="active" @change="change">
    <ImBreadcrumbItem value="1">首页</ImBreadcrumbItem>
    <ImBreadcrumbItem value="2">组件</ImBreadcrumbItem>
    <ImBreadcrumbItem value="3">面包屑</ImBreadcrumbItem>
  </ImBreadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref('3');
const change = (val: string) => {
  console.log(val);
};
<\/script>
`,N=v({__name:"Breadcrumb",setup(x){const n=g("3"),s=u=>{console.log(u)},p=[{name:"modelValue",type:"string",default:"-",description:"当前高亮的值",otherValue:"-"},{name:"separator",type:"string",default:"/",description:"分隔符，默认为斜杠 /",otherValue:"-"}],i=[{name:"value",type:"string | number",default:"-",description:"面包屑的值，用于判断当前高亮的值",otherValue:"-"}];return(u,a)=>{const o=r("ImBreadcrumbItem"),I=r("ImBreadcrumb"),B=r("CodeTemp"),m=r("PageCard"),l=r("ComponentApi"),_=r("PageWrapper");return V(),C(_,{title:"Breadcrumb 面包屑",desc:"显示当前页面在系统层级结构中的位置，并能向上返回。 我相信你们公司肯定用自定义，所以这里就很简单的方式"},{default:t(()=>[e(m,{title:"基础用法",desc:"面包屑组件通过 ImBreadcrumb 和 ImBreadcrumbItem 组合使用，可以方便的生成面包屑导航。"},{default:t(()=>[e(B,null,{code:t(()=>[e(f,{code:P})]),default:t(()=>[e(I,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=b=>n.value=b),onChange:s},{default:t(()=>[e(o,{value:"1"},{default:t(()=>a[1]||(a[1]=[d("首页")])),_:1,__:[1]}),e(o,{value:"2"},{default:t(()=>a[2]||(a[2]=[d("组件")])),_:1,__:[2]}),e(o,{value:"3"},{default:t(()=>a[3]||(a[3]=[d("面包屑")])),_:1,__:[3]})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(m,{title:"依赖组件",desc:"ImBreadcrumb,ImBreadcrumbItem"},{desc:t(()=>a[4]||(a[4]=[c("div",null,"ImBreadcrumb",-1),c("div",null,"ImBreadcrumbItem",-1)])),_:1}),e(m,{title:"Api",desc:"ImBreadcrumb Props属性："},{default:t(()=>[e(l,{data:p})]),_:1}),e(m,{title:"ImBreadcrumbItem",desc:"ImBreadcrumbItem Props属性："},{default:t(()=>[e(l,{data:i})]),_:1})]),_:1})}}});export{N as default};
