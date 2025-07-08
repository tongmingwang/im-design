import{C as b}from"./CodeView-DQNVSKWQ.js";import{d as h,r as o,c as C,o as s,w as t,a as e,b as m,f as L,F as V,g as w,x as v,e as r}from"./index-Cs7ONCnX.js";/* empty css                                                 */const y=`
<template>
  <ImDropdown>
    <ImButton>鼠标移入试试</ImButton>
    <template #content>
      <ImList>
        <ImListItem :value="item" v-for="item in list">{{
          item
        }}</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
</template>

<script setup lang="ts">
const list = ['三国演义', '水浒传', '西游记', '红楼梦'];
<\/script>
`,A=h({__name:"Dropdown",setup(B){const p=["三国演义","水浒传","西游记","红楼梦"],i=[{name:"modelValue",type:"boolean",default:"false",description:"是否显示下拉菜单，默认为 false",otherValue:"-"},{name:"trigger",type:"click | hover",default:"hover",description:"触发下拉菜单的方式，默认为 hover",otherValue:"click"},{name:"placement",type:"string",default:"bottom-left",description:"下拉菜单的位置，默认为 bottom-left",otherValue:"top-left | top-right | bottom-left | bottom-right | left-top | left-bottom | right-top | right-bottom"},{name:"zIndex",type:"number",default:"1000",description:"下拉菜单的 z-index，默认为 1000",otherValue:"-"},{name:"arrow",type:"boolean",default:"false",description:"是否显示下拉菜单的箭头，默认为 false",otherValue:"-"},{name:"offset",type:"number",default:"8",description:"下拉菜单的偏移量，默认为 8",otherValue:"-"},{name:"scrollClose",type:"boolean",default:"false",description:"是否在滚动时关闭下拉菜单，默认为 false",otherValue:"-"}];return(D,n)=>{const d=o("ImButton"),c=o("ImListItem"),u=o("ImList"),f=o("ImDropdown"),_=o("CodeTemp"),a=o("PageCard"),I=o("ComponentApi"),g=o("PageWrapper");return s(),C(g,{title:"Dropdown 下拉菜单",desc:"页面上的操作命令过多时，用此组件可以收纳操作元素。"},{default:t(()=>[e(a,{title:"基础用法",desc:"默认下拉菜单，鼠标移入则显示下拉菜单。"},{default:t(()=>[e(_,null,{code:t(()=>[e(b,{code:y})]),default:t(()=>[e(f,null,{content:t(()=>[e(u,null,{default:t(()=>[(s(),L(V,null,w(p,l=>e(c,{value:l},{default:t(()=>[m(v(l),1)]),_:2},1032,["value"])),64))]),_:1})]),default:t(()=>[e(d,null,{default:t(()=>n[0]||(n[0]=[m("鼠标移入试试")])),_:1,__:[0]})]),_:1})]),_:1})]),_:1}),e(a,{title:"依赖组件"},{desc:t(()=>n[1]||(n[1]=[r("div",null,"ImList",-1),r("div",null,"ImListItem",-1)])),_:1}),e(a,{title:"Api",desc:"ImDropdown Props属性："},{default:t(()=>[e(I,{data:i})]),_:1})]),_:1})}}});export{A as default};
//# sourceMappingURL=Dropdown-CGheomd_.js.map
