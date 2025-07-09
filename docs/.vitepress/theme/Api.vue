<template>
  <ImTable class="my_table">
    <thead>
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>描述</th>
        <th>默认值</th>
        <th>其他值</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.list">
        <td>{{ item.name || '-' }}</td>
        <td>{{ item.type || '-' }}</td>
        <td>{{ item.desc || '-' }}</td>
        <td>{{ item.default || '-' }}</td>
        <td>{{ item.other || '-' }}</td>
      </tr>
    </tbody>
  </ImTable>
</template>

<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
