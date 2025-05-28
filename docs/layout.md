# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局

<style>
.demo {
  background-color: #c2bfbf;
  height: 100px;
  border-radius: 4px;
  width: 100%;
}

.im-row {
  margin-bottom: 10px;
}

</style>

<im-row :gutter="8">
    <im-col span="8"><div class="demo" style="height: 200px"></div></im-col>
    <im-col span="4"><div class="demo"></div></im-col>
    <im-col span="4"><div class="demo"></div></im-col>
    <im-col span="4"><div class="demo"></div></im-col>
  </im-row>
  <im-row>
    <im-col span="24"><div class="demo" style="height: 200px"></div></im-col>
  </im-row>

```vue
<template>
  <im-row :gutter="8">
    <im-col span="8"><div class="demo" style="height: 200px"></div></im-col>
    <im-col span="4"><div class="demo"></div></im-col>
    <im-col span="4"><div class="demo"></div></im-col>
    <im-col span="4"><div class="demo"></div></im-col>
  </im-row>
  <im-row>
    <im-col span="24"><div class="demo" style="height: 200px"></div></im-col>
  </im-row>
</template>
```
