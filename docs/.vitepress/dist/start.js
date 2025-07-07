import{C as a}from"./CodeView.js";import{d as g,h as f,r as p,c as v,o as I,w as n,a as e,e as d,b as i,_ as V}from"./index.js";/* empty css                                        */const A={class:"dark_view"},b={class:"dark_view"},B={class:"dark_view"},C={class:"dark_view"},P=g({__name:"start",setup(k){const m=f("npm");return(w,t)=>{const o=p("ImTab"),u=p("ImTabs"),s=p("ImPane"),_=p("ImPanes"),r=p("PageCard"),c=p("PageWrapper");return I(),v(c,{title:"快速开始",desc:"ImDesign致力于提供给程序员愉悦的开发体验。"},{default:n(()=>[e(r,{title:"安装",desc:"你可以使用 npm pnpm yarn cnpm 等包管理工具安装im-design组件库"},{default:n(()=>[d("div",A,[e(u,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=l=>m.value=l)},{default:n(()=>[e(o,{name:"npm"},{default:n(()=>t[2]||(t[2]=[i("npm")])),_:1,__:[2]}),e(o,{name:"cnpm"},{default:n(()=>t[3]||(t[3]=[i("cnpm")])),_:1,__:[3]}),e(o,{name:"yarn"},{default:n(()=>t[4]||(t[4]=[i("yarn")])),_:1,__:[4]}),e(o,{name:"pnpm"},{default:n(()=>t[5]||(t[5]=[i("pnpm")])),_:1,__:[5]})]),_:1},8,["modelValue"]),e(_,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=l=>m.value=l)},{default:n(()=>[e(s,{name:"npm"},{default:n(()=>[e(a,{language:"bash",code:"npm install im-design"})]),_:1}),e(s,{name:"cnpm"},{default:n(()=>[e(a,{language:"bash",code:"cnpm install im-design"})]),_:1}),e(s,{name:"yarn"},{default:n(()=>[e(a,{language:"bash",code:"yarn add im-design"})]),_:1}),e(s,{name:"pnpm"},{default:n(()=>[e(a,{language:"bash",code:"pnpm install im-design"})]),_:1})]),_:1},8,["modelValue"])])]),_:1}),e(r,{title:"全局引入",desc:"你可以在项目中通过import的方式引入组件库，或者在main.ts文件中全局注册。"},{default:n(()=>[d("div",b,[e(a,{language:"typescript",code:`\r
      import { createApp } from 'vue';\r
      import ImDesign from 'im-design';\r
      import 'im-design/dist/index.css';\r
      import App from './App.vue';\r
      const app = createApp(App);\r
      app.use(ImDesign);\r
      app.mount('#app');\r
      `})])]),_:1}),e(r,{title:"按需引入",desc:"你可以在项目中通过import的方式引入组件库，或者在main.ts文件中全局注册。"},{default:n(()=>[d("div",B,[e(a,{language:"typescript",code:`\r
      import { createApp } from 'vue';\r
      import { Button } from 'im-design';\r
      import 'im-design/dist/index.css';\r
      import App from './App.vue';\r
      const app = createApp(App);\r
      app.use(Button);\r
      app.mount('#app');\r
        `})])]),_:1}),e(r,{title:"SFC使用",desc:"你可以在项目中通过import的方式引入组件库，或者在main.ts文件中全局注册。"},{default:n(()=>[d("div",C,[e(a,{language:"html",code:`\r
        <template>\r
          <ImButton>按钮</ImButton>\r
        </template>\r
        <script setup>\r
          import { ImButton } from 'im-design';\r
        <\/script>\r
          `})])]),_:1})]),_:1})}}}),D=V(P,[["__scopeId","data-v-ef34741a"]]);export{D as default};
