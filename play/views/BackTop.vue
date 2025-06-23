<template>
  <div>
    <div>我是首页</div>
    <ImBackTop :getTarget="gatTarget" zIndex="2000">
      <ImButton>BackTop</ImButton>
    </ImBackTop>
    <ImBackTop :getTarget="gatTarget2" right="50px" bottom="20vh">
      <ImButton>BackTop</ImButton>
    </ImBackTop>
    <div class="wrapper">
      <div class="demo" id="scroll_id">
        <div class="inner"></div>
      </div>
      <div class="demo2" id="scroll_id2">
        <div class="inner"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
function gatTarget() {
  return document.querySelector('#scroll_id');
}
function gatTarget2() {
  return document.querySelector('#scroll_id2');
}
</script>

<style lang="scss" scoped>
.demo {
  height: 500px;
  flex: 1;
  overflow-y: auto;
}

.inner {
  height: 1500px;
  background-color: rgb(13, 13, 82);
}

.demo2 {
  height: 500px;
  flex: 1;
  overflow-y: auto;
}
.wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
}
</style>
