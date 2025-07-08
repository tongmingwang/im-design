# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局

<style scoped>
.demo {
  background-color: var(--im-primary-color-8);
  height: 100px;
  border-radius: 4px;
  width: 100%;
}

.im-row {
  margin-bottom: 10px;
}

</style>

<ImRow :gutter="8">
    <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
    <ImCol span="4"><div class="demo"></div></ImCol>
    <ImCol span="4"><div class="demo"></div></ImCol>
    <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
  </ImRow>
  <ImRow>
    <ImCol span="24"><div class="demo" style="height: 200px"></div></ImCol>
  </ImRow>

```vue
<template>
  <ImRow :gutter="8">
    <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
    <ImCol span="4"><div class="demo"></div></ImCol>
    <ImCol span="4"><div class="demo"></div></ImCol>
    <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
  </ImRow>
  <ImRow>
    <ImCol span="24"><div class="demo" style="height: 200px"></div></ImCol>
  </ImRow>
</template>
```

## APIS
