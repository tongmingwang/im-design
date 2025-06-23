<template>
  <div>
    <ImButton @click="isShow = true">显示Layer</ImButton>
    <ImButton @click="isShow = false">关闭Layer</ImButton>

    <ImLayer placement="bottom" :visible="isShow" :getTriggerContainer="() => triggerEL" @close="isShow = false">
      <div class="content">
        <ul>
          <li v-for="i in 10" :key="i">xxx{{ i }}</li>
        </ul>
      </div>
    </ImLayer>

    <div class="demo1">
      <span ref="triggerEL" class="target">目标元素</span>
      <div class="demo2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImLayer from '../../packages/components/Common/ImLayer.vue';
import { ref } from 'vue';

const isShow = ref(false);
const triggerEL = ref<HTMLElement | null>(null);
</script>

<style scoped>
  .demo1 {
    height: 100px;
    background-color: rgb(66, 66, 66);
    overflow-y: auto;
    width: 300px;
    margin-top: 100px;
  }

  .demo2 {
    height: 800px;
    background-color: blue;
    width: 1000px;
  }

  .target {
    color: white;
  }

  .content {
    max-height: 120px;
    overflow-y: auto;
    width: 100%;
  }
</style>
