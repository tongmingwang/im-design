# BackTop 回到顶部

页面内容很长时，滚动到一定距离后可以显示回到顶部按钮，点击后可以回到顶部。

<ImAlert title="Tips" variant="outlined">需要注意滚动元素是通过方法查找，不是传字符串</ImAlert>

## 基础使用

使用 `getTarget` 属性指定滚动容器，默认为 `window`。

<div>
    <ImBackTop :getTarget="gatTarget" right="20vh" bottom="8vh">
      <ImButton color="primary" shape="circle" size="68">
        <ImIcon name="vertical-align-top" size="40"></ImIcon>
      </ImButton>
    </ImBackTop>
      <div class="demo" id="scroll_id">
        <div class="inner">BackTop1</div>
      </div>
  </div>

```vue
<template>
  <div>
    <ImBackTop :getTarget="gatTarget" right="20vh" bottom="8vh">
      <ImButton color="primary" shape="circle" size="68">
        <ImIcon name="vertical-align-top" size="40"></ImIcon>
      </ImButton>
    </ImBackTop>
    <div class="demo" id="scroll_id">
      <div class="inner">BackTop1</div>
    </div>
  </div>
</template>

<script setup>
function gatTarget() {
  return document.querySelector('#scroll_id');
}
</script>
```

<script setup>
function gatTarget() {
  return document.querySelector('#scroll_id');
}

</script>

<style scoped>
.demo {
  height: 200px;
  flex: 1;
  overflow-y: auto;
  border-radius: 4px;
  background-color: var(--im-primary-color-6);
}

.inner {
  height: 1500px;
  padding: 20px;
}

</style>
