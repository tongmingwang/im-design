# Theme 主题变量

ImDesign 是采用 css 全局变量来控制主题颜色的，你可以通过修改 css 全局变量的值来改变主题颜色。

例如，如果你想改变主题颜色为蓝色，你可以在 css 文件中修改以下变量：

```css
:root {
  --im-primary-color-7: #1890ff;
}
```

## 自定义主题

你需要提供一个全局色彩变量文件，然后在项目中全局引入这个变量文件。
全部变量如下所示：

```css
:root {
  // 主色系
  --im-primary-color-1: #e6f7ff;
  --im-primary-color-2: #b5e5ff;
  --im-primary-color-3: #8bd1fc;
  --im-primary-color-4: #5db3f0;
  --im-primary-color-5: #3494e3;
  --im-primary-color-6: #1077d7;
  --im-primary-color-7: #0457b0;
  --im-primary-color-8: #003e8a;
  --im-primary-color-9: #002963;
  --im-primary-color-10: #00173d;

  // 辅助色系
  --im-success-color-1: #f6ffed;
  --im-success-color-2: #d9f7be;
  --im-success-color-3: #b7eb8f;
  --im-success-color-4: #95de64;
  --im-success-color-5: #73d13d;
  --im-success-color-6: #54cf16;
  --im-success-color-7: #389e0d;
  --im-success-color-8: #237804;
  --im-success-color-9: #135200;
  --im-success-color-10: #092b00;

  // 警告色系
  --im-warning-color-1: #fffbe6;
  --im-warning-color-2: #fff3cd;
  --im-warning-color-3: #ffe58f;
  --im-warning-color-4: #ffd666;
  --im-warning-color-5: #ffc53d;
  --im-warning-color-6: #faad14;
  --im-warning-color-7: #d48806;
  --im-warning-color-8: #ad6800;
  --im-warning-color-9: #874d00;
  --im-warning-color-10: #613400;

  // 错误色系
  --im-error-color-1: #fff1f0;
  --im-error-color-2: #ffccc7;
  --im-error-color-3: #ffa39e;
  --im-error-color-4: #ff7875;
  --im-error-color-5: #ff4d4f;
  --im-error-color-6: #f5222d;
  --im-error-color-7: #cf1322;
  --im-error-color-8: #a8071a;
  --im-error-color-9: #820014;
  --im-error-color-10: #5c0011;

  // 中性色系
  --im-gray-color-1: #ffffff;
  --im-gray-color-2: #fafafa;
  --im-gray-color-3: #f5f5f5;
  --im-gray-color-4: #f0f0f0;
  --im-gray-color-5: #d9d9d9;
  --im-gray-color-6: #bfbfbf;
  --im-gray-color-7: #8c8c8c;
  --im-gray-color-8: #595959;
  --im-gray-color-9: #434343;
  --im-gray-color-10: #262626;
  --im-gray-color-11: #1f1f1f;
  --im-gray-color-12: #141414;
  --im-gray-color-13: #000000;

  // 其他
  --im-border-color: #d9d9d9;
  --im-shadow-color: rgba(0, 0, 0, 0.15);
  --im-radius: 4px;
  --im-rgb-color-1: rgba(0, 0, 0, 0.05);
  --im-rgb-color-2: rgba(0, 0, 0, 0.15);
}
```
