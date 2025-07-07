import{C as c}from"./CodeView.js";import{d as m,r as i,c as l,o as e,w as o,a as r}from"./index.js";/* empty css                                        */const y=m({__name:"theme",setup(g){return(f,b)=>{const n=i("PageCard"),a=i("PageWrapper");return e(),l(a,{title:"全局主题设置",desc:"ImDesign 采用css变量方式实现主题变量，你可以在任何需要的地方修改它"},{default:o(()=>[r(n,{title:"默认主题变量",desc:"目前默认主题是浅色主题，内置暗黑主题，你可以修改主题"},{default:o(()=>[r(c,{language:"typescript",code:`\r
      :root {\r
        --im-primary-color-1: #e3f2fd;\r
        --im-primary-color-2: #bbdefb;\r
        --im-primary-color-3: #90caf9;\r
        --im-primary-color-4: #64b5f6;\r
        --im-primary-color-5: #42a5f5;\r
        --im-primary-color-6: #2196f3;\r
        --im-primary-color-7: #1e88e5;\r
        --im-primary-color-8: #1976d2; // 主\r
        --im-primary-color-9: #1565c0;\r
        --im-primary-color-10: #0d47a1;\r
\r
        --im-success-color-1: #e8f5e9;\r
        --im-success-color-2: #c8e6c9;\r
        --im-success-color-3: #a5d6a7;\r
        --im-success-color-4: #81c784;\r
        --im-success-color-5: #66bb6a;\r
        --im-success-color-6: #4caf50;\r
        --im-success-color-7: #43a047;\r
        --im-success-color-8: #388e3c;\r
        --im-success-color-9: #2e7d32;\r
        --im-success-color-10: #1b5e20;\r
\r
        --im-warning-color-1: #fff8e1;\r
        --im-warning-color-2: #ffecb3;\r
        --im-warning-color-3: #ffe082;\r
        --im-warning-color-4: #ffd54f;\r
        --im-warning-color-5: #ffca28;\r
        --im-warning-color-6: #ffc107;\r
        --im-warning-color-7: #ffb300;\r
        --im-warning-color-8: #ffa000;\r
        --im-warning-color-9: #ff8f00;\r
        --im-warning-color-10: #ff6f00;\r
\r
        --im-error-color-1: #ffebee;\r
        --im-error-color-2: #ffcdd2;\r
        --im-error-color-3: #ef9a9a;\r
        --im-error-color-4: #e57373;\r
        --im-error-color-5: #ef5350;\r
        --im-error-color-6: #f44336;\r
        --im-error-color-7: #e53935;\r
        --im-error-color-8: #d32f2f;\r
        --im-error-color-9: #c62828;\r
        --im-error-color-10: #b71c1c;\r
\r
        --im-gray-color-1: #ffffff;\r
        --im-gray-color-2: #fafafa;\r
        --im-gray-color-3: #f5f5f5;\r
        --im-gray-color-4: #e3e3e3;\r
        --im-gray-color-5: #d9d9d9;\r
        --im-gray-color-6: #bfbfbf;\r
        --im-gray-color-7: #8c8c8c;\r
        --im-gray-color-8: #595959;\r
        --im-gray-color-9: #434343;\r
        --im-gray-color-10: #262626;\r
        --im-gray-color-11: #1f1f1f;\r
        --im-gray-color-12: #141414;\r
\r
        --im-border-color: #d9d9d9;\r
        --im-shadow-color: rgba(0, 0, 0, 0.15);\r
\r
        --im-radius: 4px;\r
\r
        --im-rgb-color-1: rgba(0, 0, 0, 0.05);\r
        --im-rgb-color-2: rgba(0, 0, 0, 0.15);\r
        --im-rgb-color-3: rgba(0, 0, 0, 0.25);\r
        --im-rgb-color-4: rgba(0, 0, 0, 0.5);\r
        --im-rgb-color-5: rgba(0, 0, 0, 0.7);\r
        --im-rgb-color-6: rgba(0, 0, 0, 0.85);\r
        --im-rgb-color-7: rgba(0, 0, 0, 0.9);\r
        --im-rgb-color-8: rgba(0, 0, 0, 0.95);\r
        --im-rgb-color-9: rgba(0, 0, 0, 0.98);\r
\r
        --im-bg-content-color: #ffffff;\r
        --im-bg-container-color: #f5f5f5;\r
        --im-bg-dialog-color: rgba(0, 0, 0, 0.33);\r
        --im-scrollbar-color: rgba(0, 0, 0, 0.2);\r
        --im-scrollbar-hover-color: rgba(0, 0, 0, 0.35);\r
        --im-scrollbar-track-color: rgba(0, 0, 0, 0.06);\r
        --im-bg-loading-color: rgba(0, 0, 0, 0.5);\r
      }\r
      `})]),_:1}),r(n,{title:"暗黑主题变量",desc:"可以修改html或者body的属性或者类名实现"},{default:o(()=>[r(c,{language:"typescript",code:`\r
      html[data-theme='dark'],\r
      html.dark,\r
      body[data-theme='dark'],\r
      body.dark {\r
        // 主色系 (暗黑模式)\r
        --im-primary-color-1: #0b1c2d;\r
        --im-primary-color-2: #112b48;\r
        --im-primary-color-3: #113155;\r
        --im-primary-color-4: #153e6b;\r
        --im-primary-color-5: #1a4b81;\r
        --im-primary-color-6: #1e5997;\r
        --im-primary-color-7: #2367ad;\r
        --im-primary-color-8: #2775c3;\r
        --im-primary-color-9: #2c83d9;\r
        --im-primary-color-10: #3091ef;\r
\r
        // 辅助色系 (暗黑模式)\r
        --im-success-color-1: #0a1e0b;\r
        --im-success-color-2: #0d2e0f;\r
        --im-success-color-3: #113e13;\r
        --im-success-color-4: #154e17;\r
        --im-success-color-5: #1a5e1b;\r
        --im-success-color-6: #1e6e1f;\r
        --im-success-color-7: #237e23;\r
        --im-success-color-8: #278e27;\r
        --im-success-color-9: #2c9e2b;\r
        --im-success-color-10: #30ae2f;\r
\r
        // 警告色系 (暗黑模式)\r
        --im-warning-color-1: #2a1e0a;\r
        --im-warning-color-2: #3f2c0d;\r
        --im-warning-color-3: #553a11;\r
        --im-warning-color-4: #6b4815;\r
        --im-warning-color-5: #81561a;\r
        --im-warning-color-6: #97641e;\r
        --im-warning-color-7: #ad7223;\r
        --im-warning-color-8: #c38027;\r
        --im-warning-color-9: #d98e2c;\r
        --im-warning-color-10: #ef9c30;\r
\r
        // 错误色系 (暗黑模式)\r
        --im-error-color-1: #2a0a0a;\r
        --im-error-color-2: #3f0d0d;\r
        --im-error-color-3: #551111;\r
        --im-error-color-4: #6b1515;\r
        --im-error-color-5: #811a1a;\r
        --im-error-color-6: #971e1e;\r
        --im-error-color-7: #ad2323;\r
        --im-error-color-8: #c32727;\r
        --im-error-color-9: #d92c2c;\r
        --im-error-color-10: #ef3030;\r
\r
        // 中性色系 (暗黑模式)\r
        --im-gray-color-1: #141414; // 最暗背景\r
        --im-gray-color-2: #1f1f1f; // 次级背景\r
        --im-gray-color-3: #262626; // 三级背景\r
        --im-gray-color-4: #434343; // 四级背景\r
        --im-gray-color-5: #595959; // 边框/分割线\r
        --im-gray-color-6: #8c8c8c; // 次要文本\r
        --im-gray-color-7: #bfbfbf; // 常规文本\r
        --im-gray-color-8: #d9d9d9; // 标题文本\r
        --im-gray-color-9: #f0f0f0; // 强调文本\r
        --im-gray-color-10: #f5f5f5; // 最亮文本\r
        --im-gray-color-11: #fafafa; // 特殊强调\r
        --im-gray-color-12: #ffffff; // 纯白元素\r
\r
        // 其他\r
        --im-border-color: #6b6b6b;\r
        // rgb\r
        --im-rgb-color-1: rgba(255, 255, 255, 0.05);\r
        --im-rgb-color-2: rgba(255, 255, 255, 0.15);\r
        --im-rgb-color-3: rgba(255, 255, 255, 0.25);\r
        --im-rgb-color-4: rgba(255, 255, 255, 0.5);\r
        --im-rgb-color-5: rgba(255, 255, 255, 0.7);\r
        --im-rgb-color-6: rgba(255, 255, 255, 0.85);\r
        --im-rgb-color-7: rgba(255, 255, 255, 0.9);\r
        --im-rgb-color-8: rgba(255, 255, 255, 0.95);\r
        --im-rgb-color-9: rgba(255, 255, 255, 0.98);\r
\r
        // 背景色\r
        --im-bg-content-color: #212830;\r
        --im-bg-container-color: #151b23;\r
        --im-bg-dialog-color: rgba(255, 255, 255, 0.33);\r
\r
        // 滚动条颜色\r
        --im-scrollbar-color: rgba(255, 255, 255, 0.35);\r
        --im-scrollbar-hover-color: rgba(255, 255, 255, 0.6);\r
        --im-scrollbar-track-color: rgba(255, 255, 255, 0.06);\r
\r
        // loading 背景\r
        --im-bg-loading-color: rgba(255, 255, 255, 0.48);\r
      }\r
      `})]),_:1})]),_:1})}}});export{y as default};
