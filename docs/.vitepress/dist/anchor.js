import{C as l}from"./CodeView.js";import{d as f,r as t,c as h,o as s,w as o,a as e,e as a,f as u,F as x,g as I,x as g,_ as v}from"./index.js";/* empty css                                        */const C={class:"demo-container",id:"anchor_im_id"},A=["id"],y={class:"anchor"},T=`
<template>
  <div class="flex">
    <div class="demo-container" id="anchor_im_id">
      <section class="demo" v-for="item in list" :id="item.id">
        {{ item.text }}
      </section>
    </div>
    <div class="anchor">
      <ImAnchor :data="list" target="#anchor_im_id" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const list = ref([
  {
    id: 'Im_demo1',
    text: '英雄所见略同',
  },
  {
    id: 'Im_demo2',
    text: '大新闻',
  },
  {
    id: 'Im_demo3',
    text: '新闻2',
  },
  {
    id: 'Im_demo4',
    text: '新闻3',
  },
  {
    id: 'Im_demo5',
    text: '新闻4',
  },
  {
    id: 'Im_demo6',
    text: '新闻5',
  },
]);
<\/script>
`,P=f({__name:"anchor",setup(V){const c=[{name:"target",type:"HTMLElement | string | null",default:"-",description:"目标滚动元素",otherValue:"-"},{name:"offset",type:"number",default:"-",description:"锚点偏移量",otherValue:"-"},{name:"data",type:"Array<AnchorData>",default:"-",description:"锚点数据"}],d=[{id:"Im_demo1",text:"英雄所见略同"},{id:"Im_demo2",text:"大新闻"},{id:"Im_demo3",text:"新闻2"},{id:"Im_demo4",text:"新闻3"},{id:"Im_demo5",text:"新闻4"},{id:"Im_demo6",text:"新闻5"}];return(B,k)=>{const m=t("ImAnchor"),r=t("CodeTemp"),i=t("PageCard"),_=t("ComponentApi"),p=t("PageWrapper");return s(),h(p,{title:"Typography 排版",desc:"文本统一样式"},{default:o(()=>[e(i,{title:"Title标题",desc:"ImTitle 设置标题基础样式"},{default:o(()=>[e(r,null,{code:o(()=>[e(l,{code:T})]),default:o(()=>[a("div",C,[(s(),u(x,null,I(d,n=>a("section",{class:"demo",id:n.id},g(n.text),9,A)),64))]),a("div",y,[e(m,{data:d,target:"#anchor_im_id"})])]),_:1})]),_:1}),e(i,{title:"Api",desc:"Props 属性："},{default:o(()=>[e(_,{data:c})]),_:1})]),_:1})}}}),E=v(P,[["__scopeId","data-v-9848d193"]]);export{E as default};
