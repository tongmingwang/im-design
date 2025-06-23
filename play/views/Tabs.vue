<template>
  <div>
    <ImTabs v-model="active">
      <ImTab :name="item" :label="`Label ${item}`" v-for="item in tabs" />
    </ImTabs>
    <ImPanes v-model="active">
      <ImPane :name="item" v-for="item in tabs">Content {{ item }}</ImPane>
    </ImPanes>

    <ImTabs v-model="active" color="primary">
      <ImTab :name="item" :label="`Label ${item}`" v-for="item in tabs" />
    </ImTabs>
    <ImPanes v-model="active">
      <ImPane :name="item" v-for="item in tabs">Content {{ item }}</ImPane>
    </ImPanes>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const active = ref('1');

const tabs = ['1', '2', '3'];
</script>

<style scoped></style>
