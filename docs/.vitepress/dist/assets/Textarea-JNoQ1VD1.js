import{C as i}from"./CodeView-DQNVSKWQ.js";import{d as c,h as f,r as t,c as _,o as V,w as a,a as e}from"./index-Cs7ONCnX.js";/* empty css                                                 */const h=`
<template>
  <ImTextarea v-model="textarea"></ImTextarea>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
<\/script>
`,T=c({__name:"Textarea",setup(x){const o=f("Hello World!"),l=[{name:"modelValue",type:"string | number | any",default:"-",description:"绑定值",otherValue:"-"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用",otherValue:"-"},{name:"readonly",type:"boolean",default:"false",description:"是否只读",otherValue:"-"},{name:"placeholder",type:"string",default:"-",description:"占位符",otherValue:"-"},{name:"maxlength",type:"number",default:"-",description:"最大长度",otherValue:"-"},{name:"minlength",type:"number",default:"-",description:"最小长度",otherValue:"-"},{name:"rows",type:"number",default:"2",description:"行数，默认为 2。当设置了 autoSize 为 true 时，rows 属性将失效。",otherValue:"-"},{name:"autoSize",type:"boolean",default:"false",description:"是否自动调整高度，设置为 true 时，会根据内容自适应高度。当设置了 autoSize 为 true 时，rows 属性将失效。",otherValue:"-"}];return(C,n)=>{const p=t("ImTextarea"),s=t("CodeTemp"),r=t("PageCard"),d=t("ComponentApi"),m=t("PageWrapper");return V(),_(m,{title:"Textarea 文本域",desc:"多行文本输入框，用于输入较长的文本内容。"},{default:a(()=>[e(r,{title:"基础用法",desc:"通过设置 v-model 绑定输入框的值"},{default:a(()=>[e(s,null,{code:a(()=>[e(i,{code:h})]),default:a(()=>[e(p,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=u=>o.value=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{title:"Api",desc:"Props属性："},{default:a(()=>[e(d,{data:l})]),_:1})]),_:1})}}});export{T as default};
//# sourceMappingURL=Textarea-JNoQ1VD1.js.map
