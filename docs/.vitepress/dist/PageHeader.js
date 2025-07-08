import{C as _}from"./CodeView.js";import{d as u,r as o,c as g,o as f,w as e,a as t,e as I,b as r,_ as P}from"./index.js";/* empty css                                        */const C={class:"demo"},T=`
<template>
  <ImPageHeader title="Order" subTitle="编辑">
    <template #action>
      <ImButton color="primary">保存</ImButton>
    </template>
    <template #content>
      <ImTag color="primary">Hot</ImTag>
    </template>
  </ImPageHeader>
</template>

`,H=u({__name:"PageHeader",setup(y){const p=[{name:"title",type:"string",default:"-",description:"页标题",otherValue:"-"},{name:"subTitle",type:"string",default:"-",description:"副标题",otherValue:"-"},{name:"back",type:"event",default:"-",description:"返回按钮事件",otherValue:"-"}];return(B,a)=>{const m=o("ImButton"),s=o("ImTag"),c=o("ImPageHeader"),d=o("CodeTemp"),n=o("PageCard"),l=o("ComponentApi"),i=o("PageWrapper");return f(),g(i,{title:"PageHeader 页头",desc:"页头组件，用于显示页面的标题、副标题和操作区域。"},{default:e(()=>[t(n,{title:"基础用法",desc:"配合插槽和属性方式"},{default:e(()=>[t(d,null,{code:e(()=>[t(_,{code:T})]),default:e(()=>[I("div",C,[t(c,{title:"Order",subTitle:"编辑"},{action:e(()=>[t(m,{color:"primary"},{default:e(()=>a[0]||(a[0]=[r("保存")])),_:1,__:[0]})]),content:e(()=>[t(s,{color:"primary"},{default:e(()=>a[1]||(a[1]=[r("Hot")])),_:1,__:[1]})]),_:1})])]),_:1})]),_:1}),t(n,{title:"Api",desc:"Props属性："},{default:e(()=>[t(l,{data:p})]),_:1})]),_:1})}}}),v=P(H,[["__scopeId","data-v-92c60b86"]]);export{v as default};
