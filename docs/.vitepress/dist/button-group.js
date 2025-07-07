import{C as d}from"./CodeView.js";import{d as _,r as n,c as B,o as c,w as t,a as o,b as u}from"./index.js";/* empty css                                        */const x=_({__name:"button-group",setup(I){const a=[{name:"size",type:"string | number",default:"36",description:"按钮大小",otherValue:"-"},{name:"color",type:"string",default:"-",description:"色彩",otherValue:"primary, error, success, warning"},{name:"vertical",type:"boolean",default:"false",description:"垂直布局"}];return(f,r)=>{const e=n("ImButton"),m=n("ImButtonGroup"),l=n("CodeTemp"),p=n("PageCard"),i=n("ComponentApi"),s=n("PageWrapper");return c(),B(s,{title:"ButtonGroup 按钮组",desc:"以按钮组的方式出现，常用于多项类似操作。"},{default:t(()=>[o(p,{title:"基础用法",desc:"ImButton 支持 color size 等属性"},{default:t(()=>[o(l,null,{code:t(()=>[o(d,{code:`\r
            <ImButtonGroup>\r
              <ImButton>Preview</ImButton>\r
              <ImButton color="primary">Next</ImButton>\r
            </ImButtonGroup>\r
\r
            <ImButtonGroup color="primary">\r
              <ImButton>Preview</ImButton>\r
              <ImButton color="primary">Next</ImButton>\r
            </ImButtonGroup>\r
\r
            <ImButtonGroup color="primary" size="48">\r
              <ImButton>Preview</ImButton>\r
              <ImButton color="primary">Next</ImButton>\r
            </ImButtonGroup>\r
          `})]),default:t(()=>[o(m,null,{default:t(()=>[o(e,null,{default:t(()=>r[0]||(r[0]=[u("Preview")])),_:1,__:[0]}),o(e,{color:"primary"},{default:t(()=>r[1]||(r[1]=[u("Next")])),_:1,__:[1]})]),_:1}),o(m,{color:"primary"},{default:t(()=>[o(e,null,{default:t(()=>r[2]||(r[2]=[u("Preview")])),_:1,__:[2]}),o(e,{color:"primary"},{default:t(()=>r[3]||(r[3]=[u("Next")])),_:1,__:[3]})]),_:1}),o(m,{color:"primary",size:"48"},{default:t(()=>[o(e,null,{default:t(()=>r[4]||(r[4]=[u("Preview")])),_:1,__:[4]}),o(e,{color:"primary"},{default:t(()=>r[5]||(r[5]=[u("Next")])),_:1,__:[5]})]),_:1})]),_:1})]),_:1}),o(p,{title:"Api",desc:"Button 组件提供了以下属性："},{default:t(()=>[o(i,{data:a})]),_:1})]),_:1})}}});export{x as default};
