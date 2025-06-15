# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

## 基本用法

使用 `<ImTable>` 包裹 `<thead>` 和 `<tbody>` 来构建表格。

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
const list: Array<number> = new Array(50).fill(null).map((_, i) => i + 1);

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

<ImTable height="50vh">
  <thead>
    <tr>
      <th class="w_48">
        <ImCheckbox
          v-model="isCheckAll"
          :indeterminate="indeterminate"
          @change="onCheckAll" />
      </th>
      <th>姓名</th>
      <th>性别</th>
      <th>年龄</th>
      <th>操作</th>
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
      <td>张三</td>
      <td>男</td>
      <td>20</td>
      <td>
        <ImButton>编辑</ImButton>
      </td>
    </tr>
  </tbody>
</ImTable>

<style scoped>

  td,th {
    width: 500px;
  }
  .w_48 {
    width: 48px;
    max-width: 48px;
  }
</style>

## 固定表头

在 `<ImTable>` 组件上设置 `fixed-header` 属性，可以固定表头。

<ImTable height="50vh" fixedHeader>
  <thead>
    <tr>
      <th class="w_48">
        <ImCheckbox
          v-model="isCheckAll"
          :indeterminate="indeterminate"
          @change="onCheckAll" />
      </th>
      <th>姓名</th>
      <th>性别</th>
      <th>年龄</th>
      <th>操作</th>
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
      <td>张三</td>
      <td>男</td>
      <td>20</td>
      <td>
        <ImButton>编辑</ImButton>
      </td>
    </tr>
  </tbody>
</ImTable>
