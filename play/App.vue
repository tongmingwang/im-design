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

<script setup lang="ts"></script>

<style scoped lang="scss">
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
