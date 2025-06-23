<template>
  <div v-loading="show">
    <ImDatePicker
      v-model="selectedDate"
      showTime
      format="YYYY-MM-DD HH:mm:ss" />
    <ImDatePicker v-model="selectedDate" format="YYYY-MM-DD" />
    <ImInput />
    <ImInputNumber />
    <ImButton>BUTTON</ImButton>
    <ImButton color="primary">BUTTON</ImButton>

    <div v-ripple="true">选中：{{ selectedDate }}</div>
    <Dialog />
    <Drawer />
    <Select />
    <Tabs />
    <Input />
    <Popover />
    <Card />
  </div>
  <ImButton @click="show = !show">Loading</ImButton>
  <Dropdown />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Dialog from './views/Dialog.vue';
import Drawer from './views/Drawer.vue';
import Tabs from './views/Tabs.vue';
import Input from './views/Input.vue';
import Select from './views/Select.vue';
import Popover from './views/Tooltip.vue';
import Card from './views/Card.vue';
import Dropdown from './views/Dropdown.vue';

const selectedDate = ref('');
const show = ref(false);
</script>

<style lang="scss">
#app {
  padding: 24px;
}

.menu {
  display: flex;
  width: 250px;
}
</style>
