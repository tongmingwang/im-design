<template>
  <div>
    <div class="anchor">
      <ImAnchor :data="list" label="技术各位" />
    </div>
    <h1 id="test1">test1</h1>
    <h1 id="test2">test2</h1>
    <h1 id="test3">test3</h1>
  </div>
</template>

<script setup lang="ts">
const list = [
  {
    id: 'test1',
    text: '测试1',
  },
  {
    id: 'test2',
    text: '测试2',
  },
  {
    id: 'test3',
    text: '测试3',
  },
];
const list2 = [
  { id: 't1', text: '测试1' },
  { id: 't2', text: '测试2' },
  { id: 't3', text: '测试3' },
  { id: 't4', text: '测试4' },
  { id: 't5', text: '测试5' },
  { id: 't6', text: '测试6' },
  { id: 't7', text: '测试7' },
  { id: 't8', text: '测试8' },
  { id: 't9', text: '测试9' },
  { id: 't10', text: '测试10' },
];
</script>

<style scoped lang="scss">
h1 {
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  overflow: auto;
}

.anchor {
  position: fixed;
  top: 100px;
  right: 100px;
}

.demo {
  height: 50vh;
  width: 100%;
  background-color: #e4c2c2;
  margin-bottom: 24px;
}
</style>
