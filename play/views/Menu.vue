<template>
  <div>
    {{ active }}
    <ImMenu v-model="active" :subActiveList="subActiveList">
      <ImMenuItem :name="i" v-for="i in 2">Home</ImMenuItem>
      <ImSubMenu name="1-1">
        <template #label>Orders</template>
        <ImMenuItem name="1-2">Order Page1</ImMenuItem>
        <ImMenuItem name="1-3">Order Page2</ImMenuItem>
      </ImSubMenu>
    </ImMenu>

    <ImMenu
      v-model="active"
      :subActiveList="subActiveList"
      align="right"
      color="error">
      <ImMenuItem name="1">Home</ImMenuItem>
      <ImSubMenu name="1-1">
        <template #label>Orders</template>
        <ImMenuItem name="1-2">Order Page1</ImMenuItem>
        <ImMenuItem name="1-3">Order Page2</ImMenuItem>
      </ImSubMenu>
      <ImMenuItem name="2">About Us</ImMenuItem>
    </ImMenu>

    <ImMenu
      vertical
      v-model="active"
      :subActiveList="subActiveList"
      color="primary"
      align="right">
      <ImMenuItem name="1"> Home </ImMenuItem>
      <ImSubMenu name="1-1">
        <template #label> Orders</template>
        <ImMenuItem name="1-2">Order Page1</ImMenuItem>
        <ImMenuItem name="1-3">Order Page2</ImMenuItem>

        <ImSubMenu name="2-2">
          <template #label> Orders</template>
          <ImMenuItem name="2-2">Order Page1</ImMenuItem>
          <ImMenuItem name="2-3">Order Page2</ImMenuItem>
        </ImSubMenu>
      </ImSubMenu>
      <ImMenuItem name="2">About Us</ImMenuItem>
    </ImMenu>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const active = ref('1');
const subActiveList = ref<Array<string | undefined>>([]);

watch(
  () => active.value,
  (val) => {
    if (['1-2', '1-3'].includes(val)) {
      subActiveList.value = ['1-1'];
    } else {
      subActiveList.value = [];
    }
  }
);
</script>

<style scoped></style>
