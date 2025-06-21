# Checkbox Component

Multiple selection among a set of options.

<script setup lang="ts">
import { ref, computed,watch } from 'vue';

const checked = ref(true);
const checkedList = ref([]);
const isCheckAll = ref(false);
const indeterminate = computed(
  () =>
    checkedList.value.length > 0 &&
    list.length > checkedList.value.length &&
    !isCheckAll.value
);
const list = ['1', '2', '3'];

watch(()=>checkedList.value,(val)=>{
    isCheckAll.value = val.length === list.length;
})
const onCheckAll = () => {
  if (isCheckAll.value) {
    checkedList.value = list;
  } else {
    checkedList.value = [];
  }
};


// api
const ApiList = [
  {
    attr: 'v-model',
    desc: 'Bound value',
    type: 'Boolean',
    default: 'false',
  },
  { attr: 'label', desc: 'Display text', type: 'String' ,default:'None' },
  { attr: 'disabled', desc: 'Whether disabled', type: 'Boolean' ,default:'false'},
  { attr: 'readonly', desc: 'Whether read-only', type: 'Boolean' ,default:'false'},
  { attr: 'indeterminate', desc: 'Indeterminate state', type: 'Boolean' ,default:'false'},
  { attr: 'change', desc: 'Callback when state changes' ,type:'Function',default:'None'},

  { attr: 'name', desc: 'Native name attribute' ,type:'String',default:'None'},
  { attr: 'value', desc: 'Bound value' ,type:'String|Number',default:'None'},
]
</script>

## Basic Usage

Can be used alone to toggle between two states

<ImAlert variant="outlined">
The selected state is bound to the variable in v-model. Its value is Boolean type.
</ImAlert>

<ImCheckbox v-model="checked" label="Hello China" />

```vue
<template>
  <ImCheckbox v-model="checked" label="Hello China" />
</template>
```

## Disabled State

Set the disabled property to true to make the checkbox unavailable.

<ImCheckbox label="Hello China" disabled />

```vue
<template>
  <ImCheckbox label="Hello China" disabled />
</template>
```

## Readonly State

Set the readonly property to true to make the checkbox read-only.

<ImCheckbox label="Hello China" readonly />

```vue
<template>
  <ImCheckbox label="Hello China" readonly />
</template>
```

## Checkbox Group

<ImAlert variant="outlined">
In multiple selection mode, each ImCheckbox must have a value property, and v-model must be an array.
</ImAlert>

<ImCheckbox
v-model="isCheckAll"
:indeterminate="indeterminate"
label="Select All"
@change="onCheckAll" />

  <div>All selected: {{ checkedList }}</div>
  <ImCheckbox
    :value="item"
    v-model="checkedList"
    v-for="item in list"
    >Option {{ item }}</ImCheckbox
  >

```vue
<template>
  <ImCheckbox
    v-model="isCheckAll"
    :indeterminate="indeterminate"
    label="Select All"
    @change="onCheckAll" />
  <div>{{ checkedList }}</div>
  <ImCheckbox
    :value="item"
    v-model="checkedList"
    @change="onItemChange"
    v-for="item in list"
    >Option {{ item }}</ImCheckbox
  >
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';

const checkedList = ref([]);
const isCheckAll = ref(false);
const indeterminate = computed(
  () =>
    checkedList.value.length > 0 &&
    list.length > checkedList.value.length &&
    !isCheckAll.value
);
const list = ['1', '2', '3'];

watch(
  () => checkedList.value,
  (val) => {
    isCheckAll.value = val.length === list.length;
  }
);
const onCheckAll = () => {
  if (isCheckAll.value) {
    checkedList.value = list;
  } else {
    checkedList.value = [];
  }
};
</script>
```

## APIs

<ImTable :border="false" :stript="false" >
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="item in ApiList">
      <td>{{ item.attr }}</td>
      <td>{{ item.desc }}</td>
      <td>{{ item.type }}</td>
      <td>{{ item.default }}</td>
    </tr>
  </tbody>
</ImTable>

<style scoped>
  td,th {
    width: 200px;
  }
</style>