# Layout System

Quickly and easily create layouts using a foundational 24-column grid.

## Basic Layout

Use columns to create basic grid layouts.

Combine `row` and `col` components with the `span` property of `col` components to freely create layouts.

<style scoped>
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

<ImRow :gutter="8">
  <ImCol span="8"><div class="demo" style="height: 200px"></div></ImCol>
  <ImCol span="4"><div class="demo"></div></ImCol>
  <ImCol span="4"><div class="demo"></div></ImCol>
  <ImCol span="4"><div class="demo"></div></ImCol>
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
    <ImCol span="4"><div class="demo"></div></ImCol>
  </ImRow>
  <ImRow>
    <ImCol span="24"><div class="demo" style="height: 200px"></div></ImCol>
  </ImRow>
</template>
```

## APIs