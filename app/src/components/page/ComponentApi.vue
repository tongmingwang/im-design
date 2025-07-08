<template>
  <ImTable>
    <thead>
      <tr>
        <th>属性名</th>
        <th>类型</th>
        <th>默认值</th>
        <th>可选值</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.data" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.default }}</td>
        <td>{{ item.otherValue }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </tbody>
  </ImTable>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Array<{
    name: string;
    type: string;
    default: string;
    otherValue: string;
    description: string;
  }>,
});
</script>

<style scoped></style>
