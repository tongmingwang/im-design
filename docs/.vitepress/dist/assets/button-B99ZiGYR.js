import{C as l}from"./CodeView-DQNVSKWQ.js";import{d as f,r as i,c as B,o as _,w as r,a as o,b as e}from"./index-Cs7ONCnX.js";/* empty css                                                 */const b=f({__name:"button",setup(p){const s=[{name:"color",type:"string",default:"default",description:"按钮颜色",otherValue:["primary","error","success","warning"]},{name:"variant",type:"string",default:"filled",description:"按钮样式类型",otherValue:["outlined","tonal","text"]},{name:"disabled",type:"boolean",default:"false",description:"禁用状态"},{name:"loading",type:"boolean",default:"false",description:"加载中状态"},{name:"width",type:"string | number",default:"auto",description:"按钮宽度，支持百分比和像素值"},{name:"size",type:"string",default:"36",description:"按钮大小",otherValue:["number","string"]}];return(g,t)=>{const n=i("ImButton"),d=i("ImRow"),a=i("CodeTemp"),u=i("PageCard"),m=i("ComponentApi"),I=i("PageWrapper");return _(),B(I,{title:"Button 按钮",desc:"Button 是一个操作节点，点击后有反馈"},{default:r(()=>[o(u,{title:"基础用法",desc:"ImButton 支持 color variant shape disabled loading width size 等属性"},{default:r(()=>[o(a,null,{code:r(()=>[o(l,{code:`\r
          <ImRow :gutter="8">\r
          <ImButton>Default</ImButton>\r
          <ImButton color="primary">Primary</ImButton>\r
          <ImButton color="error">Error</ImButton>\r
          <ImButton color="success">Success</ImButton>\r
          <ImButton color="warning">Warning</ImButton>\r
        </ImRow>\r
\r
        <ImRow :gutter="8">\r
          <ImButton variant="outlined">Default</ImButton>\r
          <ImButton variant="outlined" color="primary">Primary</ImButton>\r
          <ImButton variant="outlined" color="error">Error</ImButton>\r
          <ImButton variant="outlined" color="success">Success</ImButton>\r
          <ImButton variant="outlined" color="warning">Warning</ImButton>\r
        </ImRow>\r
\r
        <ImRow :gutter="8">\r
          <ImButton variant="tonal">Default</ImButton>\r
          <ImButton variant="tonal" color="primary">Primary</ImButton>\r
          <ImButton variant="tonal" color="error">Error</ImButton>\r
          <ImButton variant="tonal" color="success">Success</ImButton>\r
          <ImButton variant="tonal" color="warning">Warning</ImButton>\r
        </ImRow>\r
\r
        <ImRow :gutter="8">\r
          <ImButton variant="text">Default</ImButton>\r
          <ImButton variant="text" color="primary">Primary</ImButton>\r
          <ImButton variant="text" color="error">Error</ImButton>\r
          <ImButton variant="text" color="success">Success</ImButton>\r
          <ImButton variant="text" color="warning">Warning</ImButton>\r
        </ImRow>\r
          `})]),default:r(()=>[o(d,{gutter:8},{default:r(()=>[o(n,null,{default:r(()=>t[0]||(t[0]=[e("Default")])),_:1,__:[0]}),o(n,{color:"primary"},{default:r(()=>t[1]||(t[1]=[e("Primary")])),_:1,__:[1]}),o(n,{color:"error"},{default:r(()=>t[2]||(t[2]=[e("Error")])),_:1,__:[2]}),o(n,{color:"success"},{default:r(()=>t[3]||(t[3]=[e("Success")])),_:1,__:[3]}),o(n,{color:"warning"},{default:r(()=>t[4]||(t[4]=[e("Warning")])),_:1,__:[4]})]),_:1}),o(d,{gutter:8},{default:r(()=>[o(n,{variant:"outlined"},{default:r(()=>t[5]||(t[5]=[e("Default")])),_:1,__:[5]}),o(n,{variant:"outlined",color:"primary"},{default:r(()=>t[6]||(t[6]=[e("Primary")])),_:1,__:[6]}),o(n,{variant:"outlined",color:"error"},{default:r(()=>t[7]||(t[7]=[e("Error")])),_:1,__:[7]}),o(n,{variant:"outlined",color:"success"},{default:r(()=>t[8]||(t[8]=[e("Success")])),_:1,__:[8]}),o(n,{variant:"outlined",color:"warning"},{default:r(()=>t[9]||(t[9]=[e("Warning")])),_:1,__:[9]})]),_:1}),o(d,{gutter:8},{default:r(()=>[o(n,{variant:"tonal"},{default:r(()=>t[10]||(t[10]=[e("Default")])),_:1,__:[10]}),o(n,{variant:"tonal",color:"primary"},{default:r(()=>t[11]||(t[11]=[e("Primary")])),_:1,__:[11]}),o(n,{variant:"tonal",color:"error"},{default:r(()=>t[12]||(t[12]=[e("Error")])),_:1,__:[12]}),o(n,{variant:"tonal",color:"success"},{default:r(()=>t[13]||(t[13]=[e("Success")])),_:1,__:[13]}),o(n,{variant:"tonal",color:"warning"},{default:r(()=>t[14]||(t[14]=[e("Warning")])),_:1,__:[14]})]),_:1}),o(d,{gutter:8},{default:r(()=>[o(n,{variant:"text"},{default:r(()=>t[15]||(t[15]=[e("Default")])),_:1,__:[15]}),o(n,{variant:"text",color:"primary"},{default:r(()=>t[16]||(t[16]=[e("Primary")])),_:1,__:[16]}),o(n,{variant:"text",color:"error"},{default:r(()=>t[17]||(t[17]=[e("Error")])),_:1,__:[17]}),o(n,{variant:"text",color:"success"},{default:r(()=>t[18]||(t[18]=[e("Success")])),_:1,__:[18]}),o(n,{variant:"text",color:"warning"},{default:r(()=>t[19]||(t[19]=[e("Warning")])),_:1,__:[19]})]),_:1})]),_:1})]),_:1}),o(u,{title:"禁用状态",desc:"通过设置 disabled 属性来禁用按钮，禁用的按钮不可点击"},{default:r(()=>[o(a,null,{code:r(()=>[o(l,{code:`\r
          <ImButton disabled>Default</ImButton>\r
          <ImButton color="primary" disabled>Primary</ImButton>\r
          <ImButton color="error" disabled>Error</ImButton>\r
          <ImButton color="success" disabled>Success</ImButton>\r
          <ImButton color="warning" disabled>Warning</ImButton>\r
          `})]),default:r(()=>[o(n,{disabled:""},{default:r(()=>t[20]||(t[20]=[e("Default")])),_:1,__:[20]}),o(n,{color:"primary",disabled:""},{default:r(()=>t[21]||(t[21]=[e("Primary")])),_:1,__:[21]}),o(n,{color:"error",disabled:""},{default:r(()=>t[22]||(t[22]=[e("Error")])),_:1,__:[22]}),o(n,{color:"success",disabled:""},{default:r(()=>t[23]||(t[23]=[e("Success")])),_:1,__:[23]}),o(n,{color:"warning",disabled:""},{default:r(()=>t[24]||(t[24]=[e("Warning")])),_:1,__:[24]})]),_:1})]),_:1}),o(u,{title:"加载中",desc:"点击按钮后进行数据加载操作，在按钮上显示加载状态。"},{default:r(()=>[o(a,null,{code:r(()=>[o(l,{code:`\r
          <ImButton loading>Loading</ImButton>\r
          `})]),default:r(()=>[o(n,{loading:""},{default:r(()=>t[25]||(t[25]=[e("Loading")])),_:1,__:[25]})]),_:1})]),_:1}),o(u,{title:"shape 形状",desc:"通过设置 shape 属性来改变按钮的形状，默认为圆形（circle）。"},{default:r(()=>[o(a,null,{code:r(()=>[o(l,{code:`\r
            <ImButton shape='circle'>Circle</ImButton>\r
            <ImButton shape='square'>Square</ImButton>\r
            `})]),default:r(()=>[o(n,{shape:"circle"},{default:r(()=>t[26]||(t[26]=[e("Circle")])),_:1,__:[26]}),o(n,{shape:"square"},{default:r(()=>t[27]||(t[27]=[e("Square")])),_:1,__:[27]})]),_:1})]),_:1}),o(u,{title:"size 大小",desc:"通过设置 size 属性来改变按钮的大小，默认为 36"},{default:r(()=>[o(a,null,{code:r(()=>[o(l,{code:`\r
            <ImButton size='28'>28</ImButton>\r
            <ImButton size='36'>36</ImButton>\r
            <ImButton size='48'>48</ImButton>\r
            `})]),default:r(()=>[o(n,{size:"28"},{default:r(()=>t[28]||(t[28]=[e("28")])),_:1,__:[28]}),o(n,{size:"36"},{default:r(()=>t[29]||(t[29]=[e("36")])),_:1,__:[29]}),o(n,{size:"48"},{default:r(()=>t[30]||(t[30]=[e("48")])),_:1,__:[30]})]),_:1})]),_:1}),o(u,{title:"自定义宽度",desc:"通过设置 width 属性来改变按钮的宽度，默认为 auto"},{default:r(()=>[o(a,null,{code:r(()=>[o(l,{code:`\r
            <ImButton width='100%'>100%</ImButton>\r
            `})]),default:r(()=>[o(n,{width:"100%"},{default:r(()=>t[31]||(t[31]=[e("100%")])),_:1,__:[31]})]),_:1})]),_:1}),o(u,{title:"Api",desc:"Button 组件提供了以下属性："},{default:r(()=>[o(m,{data:s})]),_:1})]),_:1})}}});export{b as default};
//# sourceMappingURL=button-B99ZiGYR.js.map
