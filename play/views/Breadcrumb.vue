<template>
  <div>
    {{ active }}
    <ImBreadcrumb v-model="active" @change="change">
      <ImBreadcrumbItem value="1">首页</ImBreadcrumbItem>
      <ImBreadcrumbItem value="2">组件</ImBreadcrumbItem>
      <ImBreadcrumbItem value="3">面包屑</ImBreadcrumbItem>

    </ImBreadcrumb>

    <ImBreadcrumb v-model="active" separator=">" @change="change">
      <ImBreadcrumbItem value="1">首页</ImBreadcrumbItem>
      <ImBreadcrumbItem value="2">组件</ImBreadcrumbItem>
      <ImBreadcrumbItem value="3">面包屑</ImBreadcrumbItem>

    </ImBreadcrumb>

    <ImBreadcrumb v-model="active" @change="change">
      <ImBreadcrumbItem value="1">
        <a href="/">首页</a>
      </ImBreadcrumbItem>
      <ImBreadcrumbItem value="2">组件</ImBreadcrumbItem>
      <ImBreadcrumbItem value="3">面包屑</ImBreadcrumbItem>
      <template #separator>
        **
      </template>
    </ImBreadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref('3')
const change = (val: string) => {
  console.log(val)
}

</script>

<style scoped></style>