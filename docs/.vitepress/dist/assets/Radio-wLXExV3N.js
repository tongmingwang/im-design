import{C as V}from"./CodeView-DQNVSKWQ.js";import{d as y,h as C,r as t,c as p,o as r,w as a,a as o,e as d,f as R,F as g,g as I,p as x}from"./index-Cs7ONCnX.js";/* empty css                                                 */const h=`
<template>
  <ImRadioGroup v-model="value">
    <ImRadio
      v-for="item in arr"
      :key="item.value"
      :label="item.label"
      :value="item.value" />
  </ImRadioGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(1);
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index,
  label: '选项' + index,
}));
<\/script>
`,P=y({__name:"Radio",setup(k){const i=C(1),u=new Array(3).fill(0).map((m,e)=>({value:e,label:"选项"+e})),s=[{name:"modelValue",type:"string | number",default:"-",description:"绑定值",otherValue:"-"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用",otherValue:"-"},{name:"readonly",type:"boolean",default:"false",description:"是否只读",otherValue:"-"},{name:"vertical",type:"boolean",default:"false",description:"是否垂直排列，默认为水平排列。",otherValue:"-"},{name:"size",type:"string",default:"36px",description:"checkbox 的尺寸，默认为 36px。",otherValue:"-"},{name:"variant",type:"'button' | ''",default:"''",description:"按钮样式，默认为空字符串。",otherValue:"-"}];return(m,e)=>{const c=t("ImRadio"),f=t("ImRadioGroup"),_=t("CodeTemp"),n=t("PageCard"),v=t("ComponentApi"),b=t("PageWrapper");return r(),p(b,{title:"Radio 单选框",desc:"在一组备选项中进行单选"},{default:a(()=>[o(n,{title:"基础用法",desc:"单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。"},{default:a(()=>[o(_,null,{code:a(()=>[o(V,{code:h})]),default:a(()=>[d("div",null,[o(f,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l)},{default:a(()=>[(r(!0),R(g,null,I(x(u),l=>(r(),p(c,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1})]),_:1}),o(n,{title:"依赖的组件"},{desc:a(()=>e[1]||(e[1]=[d("div",null,"ImRadioGroup",-1),d("div",null,"ImRadio",-1)])),_:1}),o(n,{title:"Api",desc:"Props属性："},{default:a(()=>[o(v,{data:s})]),_:1})]),_:1})}}});export{P as default};
//# sourceMappingURL=Radio-wLXExV3N.js.map
