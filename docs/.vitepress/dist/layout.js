import{C as _}from"./CodeView.js";import{d as c,r as l,c as C,o as f,w as t,a as e,e as a,_ as I}from"./index.js";/* empty css                                        */const v=` 
        <ImRow :gutter="8" style="width: 100%">
          <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
          <ImCol span="4"><div class="demo"></div></ImCol>
          <ImCol span="4"><div class="demo"></div></ImCol>
          <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
        </ImRow>
        <ImRow>
          <ImCol span="24"
            ><div class="demo" style="height: 200px"></div
          ></ImCol>
        </ImRow>
        `,g=c({__name:"layout",setup(y){const p=[{name:"gutter",type:"number",default:"0",description:"间距",otherValue:"-"},{name:"align",type:"string",default:"flex-start",description:"对齐方式",otherValue:"flex-start | flex-end | center "}],i=[{name:"span",type:"number",default:"4",description:"栅格占据的列数",otherValue:"-"}];return(w,o)=>{const s=l("ImCol"),d=l("ImRow"),r=l("CodeTemp"),n=l("PageCard"),m=l("ComponentApi"),u=l("PageWrapper");return f(),C(u,{title:"Layout 布局",desc:"支持row 和 col配合使用"},{default:t(()=>[e(n,{title:"基础用法",desc:"ImIcon 支持 size name color等属性设置"},{default:t(()=>[e(r,null,{code:t(()=>[e(_,{code:v})]),default:t(()=>[e(d,{gutter:8,style:{width:"100%"}},{default:t(()=>[e(s,{span:"8"},{default:t(()=>o[0]||(o[0]=[a("div",{class:"demo",style:{height:"200px"}},null,-1)])),_:1,__:[0]}),e(s,{span:"4"},{default:t(()=>o[1]||(o[1]=[a("div",{class:"demo"},null,-1)])),_:1,__:[1]}),e(s,{span:"4"},{default:t(()=>o[2]||(o[2]=[a("div",{class:"demo"},null,-1)])),_:1,__:[2]}),e(s,{span:"8"},{default:t(()=>o[3]||(o[3]=[a("div",{class:"demo",style:{height:"200px"}},null,-1)])),_:1,__:[3]})]),_:1}),e(d,null,{default:t(()=>[e(s,{span:"24"},{default:t(()=>o[4]||(o[4]=[a("div",{class:"demo",style:{height:"200px"}},null,-1)])),_:1,__:[4]})]),_:1})]),_:1})]),_:1}),e(n,{title:"Api",desc:"ImRow 组件提供了以下属性："},{default:t(()=>[e(m,{data:p})]),_:1}),e(n,{title:"ImCol Api",desc:"ImCol 组件提供了以下属性："},{default:t(()=>[e(m,{data:i})]),_:1})]),_:1})}}}),V=I(g,[["__scopeId","data-v-366314ae"]]);export{V as default};
