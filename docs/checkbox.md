# Checkbox 多选框

在一组备选项中进行多选。

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
    desc: '绑定值',
    type: 'Boolean',
    default: 'false',
  },
  { attr: 'label', desc: '显示的文本', type: 'String' ,default:'无' },
  { attr: 'disabled', desc: '是否禁用', type: 'Boolean' ,default:'false'},
  { attr: 'readonly', desc: '是否只读', type: 'Boolean' ,default:'false'},
  { attr: 'indeterminate', desc: '是否为半选状态', type: 'Boolean' ,default:'false'},
  { attr: 'change', desc: '状态改变时的回调函数' ,type:'Function',default:'无'},

  { attr: 'name', desc: '原生 name 属性' ,type:'String',default:'无'},
  { attr: 'value', desc: '绑定的值' ,type:'String|Number',default:'无'},
]
</script>

## 基础用法

单独使用可以表示两种状态之间的切换

<ImAlert variant="outlined">
选中项绑定到v-model显示的变量上。它的值是 Boolean 类型的。
</ImAlert>

<ImCheckbox v-model="checked" label="你好中国" />

```vue
<template>
  <ImCheckbox v-model="checked" label="你好中国" />
</template>
```

## 禁用状态

多选框不可用状态 设置 disabled 属性为 true 即可。

<ImCheckbox label="你好中国" disabled />

```vue
<template>
  <ImCheckbox label="你好中国" disabled />
</template>
```

## 只读状态

多选框只读状态 设置 readonly 属性为 true 即可。

<ImCheckbox label="你好中国" readonly />

```vue
<template>
  <ImCheckbox label="你好中国" readonly />
</template>
```

## 多选框组

<ImAlert variant="outlined">
多选情况下，每一个 ImCheckbox 必须传入 value 属性，以及 v-model必须是数组
</ImAlert>

<ImCheckbox
v-model="isCheckAll"
:indeterminate="indeterminate"
label="全选"
@change="onCheckAll" />

  <div>是否全选：{{ checkedList }}</div>
  <ImCheckbox
    :value="item"
    v-model="checkedList"
    v-for="item in list"
    >选项 {{ item }}</ImCheckbox
  >

```vue
<template>
  <ImCheckbox
    v-model="isCheckAll"
    :indeterminate="indeterminate"
    label="全选"
    @change="onCheckAll" />
  <div>{{ checkedList }}</div>
  <ImCheckbox
    :value="item"
    v-model="checkedList"
    @change="onItemChange"
    v-for="item in list"
    >选项 {{ item }}</ImCheckbox
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

## APIS

<ImTable :border="false" :stript="false" >
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
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
