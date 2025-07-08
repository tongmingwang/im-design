# Theme 主题变量

ImDesign 是采用 css 全局变量来控制主题颜色的，你可以通过修改 css 全局变量的值来改变主题颜色。

例如，如果你想改变主题颜色为蓝色，你可以在 css 文件中修改以下变量：

```css
:root {
  --im-primary-color-7: #1890ff;
}
```

## 主题变量

你需要提供一个全局色彩变量文件，然后在项目中全局引入这个变量文件。
全部变量如下所示：

```css
// src/styles/variables.scss
:root {
  --im-primary-color-1: #e3f2fd;
  --im-primary-color-2: #bbdefb;
  --im-primary-color-3: #90caf9;
  --im-primary-color-4: #64b5f6;
  --im-primary-color-5: #42a5f5;
  --im-primary-color-6: #2196f3;
  --im-primary-color-7: #1e88e5;
  --im-primary-color-8: #1976d2; // 主
  --im-primary-color-9: #1565c0;
  --im-primary-color-10: #0d47a1;

  // 辅助色系
  --im-success-color-1: #e8f5e9;
  --im-success-color-2: #c8e6c9;
  --im-success-color-3: #a5d6a7;
  --im-success-color-4: #81c784;
  --im-success-color-5: #66bb6a;
  --im-success-color-6: #4caf50;
  --im-success-color-7: #43a047;
  --im-success-color-8: #388e3c;
  --im-success-color-9: #2e7d32;
  --im-success-color-10: #1b5e20;

  // 警告色系
  --im-warning-color-1: #fff8e1;
  --im-warning-color-2: #ffecb3;
  --im-warning-color-3: #ffe082;
  --im-warning-color-4: #ffd54f;
  --im-warning-color-5: #ffca28;
  --im-warning-color-6: #ffc107;
  --im-warning-color-7: #ffb300;
  --im-warning-color-8: #ffa000;
  --im-warning-color-9: #ff8f00;
  --im-warning-color-10: #ff6f00;

  // 错误色系
  --im-error-color-1: #ffebee;
  --im-error-color-2: #ffcdd2;
  --im-error-color-3: #ef9a9a;
  --im-error-color-4: #e57373;
  --im-error-color-5: #ef5350;
  --im-error-color-6: #f44336;
  --im-error-color-7: #e53935;
  --im-error-color-8: #d32f2f;
  --im-error-color-9: #c62828;
  --im-error-color-10: #b71c1c;

  // 中性色系
  --im-gray-color-1: #ffffff;
  --im-gray-color-2: #fafafa;
  --im-gray-color-3: #f5f5f5;
  --im-gray-color-4: #e3e3e3;
  --im-gray-color-5: #d9d9d9;
  --im-gray-color-6: #bfbfbf;
  --im-gray-color-7: #8c8c8c;
  --im-gray-color-8: #595959;
  --im-gray-color-9: #434343;
  --im-gray-color-10: #262626;
  --im-gray-color-11: #1f1f1f;
  --im-gray-color-12: #141414;

  // 其他
  --im-border-color: #d9d9d9;
  --im-shadow-color: rgba(0, 0, 0, 0.15);

  // 圆角大小
  --im-radius: 4px;

  // rgba 色系
  --im-rgb-color-1: rgba(0, 0, 0, 0.05);
  --im-rgb-color-2: rgba(0, 0, 0, 0.15);
  --im-rgb-color-3: rgba(0, 0, 0, 0.25);
  --im-rgb-color-4: rgba(0, 0, 0, 0.5);
  --im-rgb-color-5: rgba(0, 0, 0, 0.7);
  --im-rgb-color-6: rgba(0, 0, 0, 0.85);
  --im-rgb-color-7: rgba(0, 0, 0, 0.9);
  --im-rgb-color-8: rgba(0, 0, 0, 0.95);
  --im-rgb-color-9: rgba(0, 0, 0, 0.98);

  // 背景色
  --im-bg-content-color: #ffffff;
  --im-bg-container-color: #f5f5f5;
  // 模态框背景色
  --im-bg-dialog-color: rgba(0, 0, 0, 0.33);
  // 滚动条颜色
  --im-scrollbar-color: rgba(0, 0, 0, 0.2);
  --im-scrollbar-hover-color: rgba(0, 0, 0, 0.35);
  --im-scrollbar-track-color: rgba(0, 0, 0, 0.06);
}
```

## 暗黑模式

html，或者 body 标签上添加 `class="dark"` 属性，即可开启暗黑模式。

```html
<html class="dark">
  <body>
    <!-- ... -->
  </body>
</html>
```
