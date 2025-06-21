# Theme Variables

ImDesign uses CSS global variables to control theme colors. You can modify these variables to customize the theme.

For example, to change the primary color to blue, modify this variable in your CSS file:

```css
:root {
  --im-primary-color-7: #1890ff;
}
```

## Customizing Themes

You'll need to provide a global color variables file and import it throughout your project.
All available variables are shown below:

```css
// src/styles/variables.scss
:root {
  // Primary colors
  --im-primary-color-1: #e3f2fd;
  --im-primary-color-2: #bbdefb;
  --im-primary-color-3: #90caf9;
  --im-primary-color-4: #64b5f6;
  --im-primary-color-5: #42a5f5;
  --im-primary-color-6: #2196f3;
  --im-primary-color-7: #1e88e5;
  --im-primary-color-8: #1976d2;
  --im-primary-color-9: #1565c0;
  --im-primary-color-10: #0d47a1;

  // Success colors
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

  // Warning colors
  --im-warning-color-1: #fffde7;
  --im-warning-color-2: #fff9c4;
  --im-warning-color-3: #fff59d;
  --im-warning-color-4: #fff176;
  --im-warning-color-5: #ffee58;
  --im-warning-color-6: #ffeb3b;
  --im-warning-color-7: #fdd835;
  --im-warning-color-8: #fbc02d;
  --im-warning-color-9: #f9a825;
  --im-warning-color-10: #f57f17;

  // Error colors
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

  // Neutral colors
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

  // Other
  --im-border-color: #d9d9d9;
  --im-shadow-color: rgba(0, 0, 0, 0.15);
  --im-radius: 4px;
  --im-rgb-color-1: rgba(0, 0, 0, 0.08);
  --im-rgb-color-2: rgba(0, 0, 0, 0.15);
  --im-rgb-color-3: rgba(0, 0, 0, 0.25);
}
```