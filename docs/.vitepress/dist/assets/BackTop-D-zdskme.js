import{C as _}from"./CodeView-DQNVSKWQ.js";import{d as g,r as t,c as h,o as f,w as o,a as e,e as r}from"./index-Cs7ONCnX.js";/* empty css                                                 */const I=`
<template>
  <ImBackTop :getTarget="gatTarget" right="20vh" bottom="8vh">
    <ImButton color="primary" shape="circle" size="68">
      <ImIcon name="vertical-align-top" size="40"></ImIcon>
    </ImButton>
  </ImBackTop>
  <div
    style="height: 100px; overflow-y: auto; width: 100%"
    id="scroll_id">
    <div class="inner" style="height: 800px">BackTop1</div>
  </div>
</template>

<script setup lang="ts">
function gatTarget() {
  return document.querySelector('#scroll_id');
}
<\/script>
`,w=g({__name:"BackTop",setup(T){function i(){return document.querySelector("#scroll_id")}const c=[{name:"getTarget",type:"function",default:"() => HTMLElement | Window",description:"获取滚动容器，默认为 window",otherValue:"-"},{name:"visibleHeight",type:"number",default:"200",description:"可视区域高度，默认为 200",otherValue:"-"},{name:"zIndex",type:"number",default:"1000",description:"滚动容器 zIndex，默认为 1000",otherValue:"-"},{name:"right",type:"string",default:"20px",description:"滚动容器右侧距离，默认为 20px",otherValue:"-"},{name:"bottom",type:"string",default:"20px",description:"滚动容器底部距离，默认为 20px",otherValue:"-"}];return(v,n)=>{const p=t("ImIcon"),s=t("ImButton"),l=t("ImBackTop"),d=t("CodeTemp"),a=t("PageCard"),m=t("ComponentApi"),u=t("PageWrapper");return f(),h(u,{title:"BackTop 回到顶部",desc:"页面内容很长时，滚动到一定距离后可以显示回到顶部按钮，点击后可以回到顶部。"},{default:o(()=>[e(a,{title:"基础用法",desc:"使用 getTarget 属性指定滚动容器，默认为 window"},{default:o(()=>[e(d,null,{code:o(()=>[e(_,{code:I})]),default:o(()=>[e(l,{getTarget:i,right:"20vh",bottom:"8vh"},{default:o(()=>[e(s,{color:"primary",shape:"circle",size:"68"},{default:o(()=>[e(p,{name:"vertical-align-top",size:"40"})]),_:1})]),_:1}),n[0]||(n[0]=r("div",{style:{height:"100px","overflow-y":"auto",width:"100%"},id:"scroll_id"},[r("div",{class:"inner",style:{height:"800px"}},"BackTop1")],-1))]),_:1,__:[0]})]),_:1}),e(a,{title:"Api",desc:"Props属性："},{default:o(()=>[e(m,{data:c})]),_:1})]),_:1})}}});export{w as default};
//# sourceMappingURL=BackTop-D-zdskme.js.map
