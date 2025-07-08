import{C as A}from"./CodeView-DQNVSKWQ.js";import{d as y,h as u,j as L,z as I,r as o,c as w,o as m,w as l,a as t,e as p,f as P,x as h,F as B,g as N,b as v}from"./index-Cs7ONCnX.js";/* empty css                                                 */const T=`
<template>
  <ImCheckbox
    v-model="isCheckAll"
    :indeterminate="indeterminate"
    label="全选"
    @change="onCheckAll" />
  <div>{{ checkedList }}</div>
  <ImCheckbox :value="item" v-model="checkedList" v-for="item in list"
    >选项 {{ item }}</ImCheckbox
  >
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const checkedList: any = ref([]);
const isCheckAll = ref(false);
const indeterminate = computed(
  () =>
    checkedList.value.length > 0 &&
    list.length > checkedList.value.length &&
    !isCheckAll.value
);
const list = ['1', '2', '3'];

watch(
  () => checkedList.value,
  (val) => {
    isCheckAll.value = val.length === list.length;
  }
);
const onCheckAll = () => {
  if (isCheckAll.value) {
    checkedList.value = list;
  } else {
    checkedList.value = [];
  }
};
<\/script>
`,W=y({__name:"Checkbox",setup(z){const e=u([]),n=u(!1),f=L(()=>e.value.length>0&&s.length>e.value.length&&!n.value),s=["1","2","3"];I(()=>e.value,c=>{n.value=c.length===s.length});const k=()=>{n.value?e.value=s:e.value=[]},C=[{name:"modelValue",type:"string | number | any",default:"-",description:"绑定值",otherValue:"-"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用",otherValue:"-"},{name:"readonly",type:"boolean",default:"false",description:"是否只读",otherValue:"-"},{name:"label",type:"string",default:"-",description:"占位符",otherValue:"-"},{name:"indeterminate",type:"boolean",default:"false",description:"半选择状态",otherValue:"-"},{name:"checked",type:"boolean",default:"false",description:"是否选中",otherValue:"-"},{name:"size",type:"string",default:"36px",description:"checkbox 的尺寸，默认为 36px。",otherValue:"-"}];return(c,a)=>{const d=o("ImCheckbox"),g=o("CodeTemp"),r=o("PageCard"),_=o("ImAlert"),b=o("ComponentApi"),V=o("PageWrapper");return m(),w(V,{title:"Select 选择器",desc:"下拉选择器，用于从一组选项中选择一个。"},{default:l(()=>[t(r,{title:"基础用法",desc:"通过设置 v-model 绑定输入框的值"},{default:l(()=>[t(g,null,{code:l(()=>[t(A,{code:T})]),default:l(()=>[p("div",null,[t(d,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=i=>n.value=i),indeterminate:f.value,label:"全选",onChange:k},null,8,["modelValue","indeterminate"]),p("div",null,h(e.value),1),(m(),P(B,null,N(s,i=>t(d,{value:i,modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=x=>e.value=x)},{default:l(()=>[v("选项 "+h(i),1)]),_:2},1032,["value","modelValue"])),64))])]),_:1})]),_:1}),t(_,{style:{"margin-top":"16px"},variant:"outlined"},{default:l(()=>a[2]||(a[2]=[v(" 多选情况下，每一个 ImCheckbox 必须传入 value 属性，以及 v-model必须是数组 ")])),_:1,__:[2]}),t(r,{title:"Api",desc:"Props属性："},{default:l(()=>[t(b,{data:C})]),_:1})]),_:1})}}});export{W as default};
//# sourceMappingURL=Checkbox-Dpik_xE9.js.map
