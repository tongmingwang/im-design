import{C as d}from"./CodeView.js";import{d as _,h as i,r as a,c as f,o as C,w as t,a as e}from"./index.js";/* empty css                                        */const b=`
<template>
  <ImPagination
    :total="200"
    layout="prev,next,pager"
    :pageNumber="pageNumber"
    :pageSize="pageSize"
    @change="onChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pageNumber = ref(10);
const pageSize = ref(10);
const onChange = (data) => {
  pageNumber.value = data.pageNumber;
  pageSize.value = data.pageSize;
};
<\/script>
`,S=_({__name:"Pagination",setup(z){const n=i(10),p=i(10),s=o=>{n.value=o.pageNumber,p.value=o.pageSize},m=[{name:"pageSize",type:"number",default:"10",description:"每页显示的条数，默认为 10",otherValue:"-"},{name:"pageNumber",type:"number",default:"1",description:"当前页码，默认为 1",otherValue:"-"},{name:"total",type:"number",default:"0",description:"总数，默认为 0",otherValue:"-"},{name:"pageSizeItems",type:"array",default:"[10, 20, 30, 40]",description:"每页显示的条数选项，默认为 [10, 20, 30, 40]",otherValue:"-"},{name:"layout",type:"string",default:"prev,pager,next,sizes,total",description:"布局，默认全部展示，可选值：prev,pager,next,sizes,total",otherValue:"-"}];return(o,h)=>{const u=a("ImPagination"),l=a("CodeTemp"),r=a("PageCard"),c=a("ComponentApi"),g=a("PageWrapper");return C(),f(g,{title:"Pagination 分页",desc:"分页器用于分隔长列表，每次只加载一个页面。"},{default:t(()=>[e(r,{title:"基础用法",desc:"一般的分页器"},{default:t(()=>[e(l,null,{code:t(()=>[e(d,{code:b})]),default:t(()=>[e(u,{total:200,layout:"prev,next,pager",pageNumber:n.value,pageSize:p.value,onChange:s},null,8,["pageNumber","pageSize"])]),_:1})]),_:1}),e(r,{title:"Api",desc:"ImPagination Props属性："},{default:t(()=>[e(c,{data:m})]),_:1})]),_:1})}}});export{S as default};
