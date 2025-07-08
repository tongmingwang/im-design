import{C as s}from"./CodeView-DQNVSKWQ.js";import{d as c,r as o,c as f,o as _,w as i,a as t,e as m,b as n}from"./index-Cs7ONCnX.js";/* empty css                                                 */const g={style:{width:"100%"}},x={style:{width:"100%"}},v={style:{width:"100%"}},R=c({__name:"divider",setup(q){const l=[{name:"vertical",type:"boolean",default:"false",description:"是否垂直方向展示，默认为水平方向",otherValue:"-"},{name:"color",type:"string",default:"flex-start",description:"颜色，默认为灰色",otherValue:"-"},{name:"size",type:"string|number",default:"1px",description:"分割线大小，默认为1px",otherValue:"-"},{name:"margin",type:"string|number",default:"1px",description:"分割线两侧的间距",otherValue:"-"},{name:"textLeftWidth",type:"string|number",default:"0",description:"文字左侧宽度，默认为0",otherValue:"-"},{name:"textRightWidth",type:"string|number",default:"0",description:"文字右侧宽度，默认为0",otherValue:"-"}];return(b,e)=>{const a=o("ImDivider"),d=o("CodeTemp"),r=o("PageCard"),u=o("ComponentApi"),p=o("PageWrapper");return _(),f(p,{title:"Divider 分割线",desc:"区隔内容的分割线。"},{default:i(()=>[t(r,{title:"基础使用",desc:"段落分割，并设置标题"},{default:i(()=>[t(d,null,{code:i(()=>[t(s,{code:`\r
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\r
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,\r
        quo modo.\r
        <ImDivider>Text</ImDivider>\r
        下一段文字 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\r
        nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert\r
        tamen, quo modo.\r
        `})]),default:i(()=>[m("div",g,[e[1]||(e[1]=n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ")),t(a,null,{default:i(()=>e[0]||(e[0]=[n("Text")])),_:1,__:[0]}),e[2]||(e[2]=n(" 下一段文字 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. "))])]),_:1})]),_:1}),t(r,{title:"标题位置",desc:"设置textLeftWidth textRightWidth 来设置分割线区域，实现文本偏移"},{default:i(()=>[t(d,null,{code:i(()=>[t(s,{code:`\r
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\r
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert\r
          tamen, quo modo.\r
          <ImDivider textLeftWidth='50px'>Text</ImDivider>\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne\r
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert\r
          tamen, quo modo.\r
        `})]),default:i(()=>[m("div",x,[e[4]||(e[4]=n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. ")),t(a,{textLeftWidth:"50px"},{default:i(()=>e[3]||(e[3]=[n("Text")])),_:1,__:[3]}),e[5]||(e[5]=n(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo. "))])]),_:1})]),_:1}),t(r,{title:"纵向分割",desc:"设置vertical为true，可以实现纵向分割"},{default:i(()=>[t(d,null,{code:i(()=>[t(s,{code:`\r
        Hello <ImDivider vertical /> World\r
        `})]),default:i(()=>[m("div",v,[e[6]||(e[6]=n("Hello ")),t(a,{vertical:""}),e[7]||(e[7]=n(" World"))])]),_:1})]),_:1}),t(r,{title:"Api",desc:"ImDivider基础props属性"},{default:i(()=>[t(u,{data:l})]),_:1})]),_:1})}}});export{R as default};
//# sourceMappingURL=divider-DKV7AtLu.js.map
