# Table Component

Displays multiple similarly structured data rows, supporting sorting, filtering, comparison and other custom operations.

## Basic Usage

Use `<ImTable>` wrapping `<thead>` and `<tbody>` to build tables.

<style scoped>
  .w_48 {
    width: 48px;
    max-width: 48px;
  }
</style>
<script setup lang="ts">
import { ref, computed } from 'vue';

const checkedList: any = ref([]);
const isCheckAll = ref(false);
const indeterminate = computed(
  () =>
    checkedList.value.length > 0 &&
    list.length > checkedList.value.length &&
    !isCheckAll.value
);
const list: Array<number> = new Array(10).fill(null).map((_, i) => i + 1);

const onCheckAll = () => {
  if (isCheckAll.value) {
    checkedList.value = [...list];
  } else {
    checkedList.value = [];
  }
};
const onItemChange = () => {
  isCheckAll.value = checkedList.value.length === list.length;
};
</script>

<ImTable>
  <thead>
    <tr>
      <th class="w_48">
        <ImCheckbox
          v-model="isCheckAll"
          :indeterminate="indeterminate"
          @change="onCheckAll" />
      </th>
      <th>Name</th>
      <th>Gender</th>
      <th>Age</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="i in list">
      <td class="w_48">
        <ImCheckbox
          v-model="checkedList"
          label=""
          :value="i"
          @change="onItemChange" />
      </td>
      <td>User {{ i }}</td>
      <td>Male</td>
      <td>20</td>
      <td>
        <ImButton>Edit</ImButton>
      </td>
    </tr>
  </tbody>
</ImTable>

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';

const checkedList: any = ref([]);
const isCheckAll = ref(false);
const indeterminate = computed(
  () =>
    checkedList.value.length > 0 &&
    list.length > checkedList.value.length &&
    !isCheckAll.value
);
const list: Array<number> = new Array(10).fill(null).map((_, i) => i + 1);

const onCheckAll = () => {
  if (isCheckAll.value) {
    checkedList.value = [...list];
  } else {
    checkedList.value = [];
  }
};
const onItemChange = () => {
  isCheckAll.value = checkedList.value.length === list.length;
};
</script>
<template>
  <ImTable>
    <thead>
      <tr>
        <th class="w_48">
          <ImCheckbox
            v-model="isCheckAll"
            :indeterminate="indeterminate"
            @change="onCheckAll" />
        </th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in list">
        <td class="w_48">
          <ImCheckbox
            v-model="checkedList"
            label=""
            :value="i"
            @change="onItemChange" />
        </td>
        <td>User {{ i }}</td>
        <td>Male</td>
        <td>20</td>
        <td>
          <ImButton>Edit</ImButton>
        </td>
      </tr>
    </tbody>
  </ImTable>
</template>
```

## Fixed Header

Set `fixed-header` property on `<ImTable>` to fix the header.

<ImTable height="300px" fixedHeader>
  <thead>
    <tr>
      <th class="w_48">
        <ImCheckbox
          v-model="isCheckAll"
          :indeterminate="indeterminate"
          @change="onCheckAll" />
      </th>
      <th>Name</th>
      <th>Gender</th>
      <th>Age</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="i in list">
      <td class="w_48">
        <ImCheckbox
          v-model="checkedList"
          label=""
          :value="i"
          @change="onItemChange" />
      </td>
      <td>User {{ i }}</td>
      <td>Male</td>
      <td>20</td>
      <td>
        <ImButton>Edit</ImButton>
      </td>
    </tr>
  </tbody>
</ImTable>