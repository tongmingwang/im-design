# Form 表单

表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 基本用法

下面是一个基本的表单示例。

<ImForm v-model="form" ref="formRef" label-position="top" :rules="rules">
<ImFormItem label="账号" prop="name" required>
<ImInput v-model="form.name" />
</ImFormItem>
<ImFormItem label="年龄" prop="age" required>
<ImInputNumber controlRight v-model="form.age" />
</ImFormItem>
<ImFormItem
    label="密码"
    prop="pwd"
    required
    :rules="[{ maxLength: 10, minLength: 5, message: '密码输入不对' }]">
<ImInput v-model="form.pwd" />
</ImFormItem>
<ImFormItem label="性别" prop="sex" required>
<ImRadioGroup v-model="form.sex">
<ImRadio value="1" label="男"></ImRadio>
<ImRadio value="2" label="女"></ImRadio>
<ImRadio value="3" label="未知"></ImRadio>
</ImRadioGroup>
</ImFormItem>
<ImFormItem
    label="协议"
    prop="checked"
    :rules="[{ validator: validator }]"
    required>
<ImCheckbox v-model="form.checked" label="勾选代表同意协议" />
</ImFormItem>
<ImFormItem label="介绍自己" prop="desc" required>
<ImTextarea v-model="form.desc" />
</ImFormItem>
<ImButton @click="onSave" color="primary">提交表单</ImButton>
<ImButton @click="onReset">重置表单</ImButton>
</ImForm>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const formRef = ref();
const form = reactive({
  name: '',
  pwd: '',
  checked: false,
  sex: '',
  desc: '',
  age: undefined,
});

const rules = {
  name: [{ message: '请输入账号', required: true }],
  sex: { message: '请选择性别', required: true },
  desc: [{ message: '请输入介绍', required: true }],
  age: [{ message: '请输入0-100年龄', required: true, max: 100, min: 0 }],
};

const onSave = async () => {
  const res = await formRef.value?.validate((data) => {
    console.log(data, 'data');
  });
  console.log(res, 'res');
  alert(JSON.stringify(res));
};

const onReset = () => {
  formRef.value?.reset();
};

function validator(val: any) {
  return val ? '' : '请勾选同意协议';
}
</script>

```vue
<template>
  <ImForm v-model="form" ref="formRef" label-position="top" :rules="rules">
    <ImFormItem label="账号" prop="name" required>
      <ImInput v-model="form.name" />
    </ImFormItem>
    <ImFormItem label="年龄" prop="age" required>
      <ImInputNumber controlRight v-model="form.age" />
    </ImFormItem>
    <ImFormItem
      label="密码"
      prop="pwd"
      required
      :rules="[{ maxLength: 10, minLength: 5, message: '密码输入不对' }]">
      <ImInput v-model="form.pwd" />
    </ImFormItem>
    <ImFormItem label="性别" prop="sex" required>
      <ImRadioGroup v-model="form.sex">
        <ImRadio value="1" label="男"></ImRadio>
        <ImRadio value="2" label="女"></ImRadio>
        <ImRadio value="3" label="未知"></ImRadio>
      </ImRadioGroup>
    </ImFormItem>
    <ImFormItem
      label="协议"
      prop="checked"
      :rules="[{ validator: validator }]"
      required>
      <ImCheckbox v-model="form.checked" label="勾选代表同意协议" />
    </ImFormItem>
    <ImFormItem label="介绍自己" prop="desc" required>
      <ImTextarea v-model="form.desc" />
    </ImFormItem>
    <ImButton @click="onSave" color="primary">提交表单</ImButton>
    <ImButton @click="onReset">重置表单</ImButton>
  </ImForm>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const formRef = ref();
const form = reactive({
  name: '',
  pwd: '',
  checked: false,
  sex: '',
  desc: '',
  age: undefined,
});

const rules = {
  name: [{ message: '请输入账号', required: true }],
  sex: { message: '请选择性别', required: true },
  desc: [{ message: '请输入介绍', required: true }],
  age: [{ message: '请输入0-100年龄', required: true, max: 100, min: 0 }],
};

const onSave = async () => {
  const res = await formRef.value?.validate((data) => {
    console.log(data, 'data');
  });
  console.log(res, 'res');
};

const onReset = () => {
  formRef.value?.reset();
};

function validator(val: any) {
  return val ? '' : '请勾选同意协议';
}
</script>
```

## Form Props

| 属性名         | 说明                                                              | 类型                 | 可选值                           | 默认值    |
| -------------- | ----------------------------------------------------------------- | -------------------- | -------------------------------- | --------- |
| modelValue     | 表单数据对象                                                      | `object`             | -                                | -         |
| label-position | 表单域标签的位置                                                  | `string`             | `'top'` \| `'left'` \| `'right'` | `'right'` |
| label-width    | 表单域标签的宽度，作为 Form 直接子元素的 form-item 的 label-width | `number` \| `string` | -                                | -         |
| rules          | 表单验证规则                                                      | `object`             | -                                | -         |

## FormItem Props

| 属性名        | 说明              | 类型      | 可选值                           | 默认值    |
| ------------- | ----------------- | --------- | -------------------------------- | --------- |
| prop          | 表单域 model 字段 | `string   | -                                | -         |
| label         | 标签文本          | `string`  | -                                | -         |
| rules         | 表单验证规则      | `object`  | -                                | -         |
| required      | 是否显示必填标识  | `boolean` | -                                | false     |
| labelPosition | 表单域标签的位置  | `string`  | `'top'` \| `'left'` \| `'right'` | `'right'` |
| labelWidth    | 表单域标签的宽度  | `number`  | -                                | -         |
| showMessage   | 是否显示错误信息  | `boolean` | -                                | true      |
| showIcon      | 是否显示错误图标  | `boolean` | -                                | false     |

## Form Methods

| 方法名   | 说明                                                    |
| -------- | ------------------------------------------------------- |
| validate | 校验表单数据，返回 Promise 对象。传 callback 也会有回调 |
| reset    | 重置表单数据。支持传数组，单个字段重置                  |

## Rules 规则

| 属性名    | 说明                                       | 类型                                           |
| --------- | ------------------------------------------ | ---------------------------------------------- |
| message   | 校验失败时的提示信息                       | `string`                                       |
| validator | 支持 Promise，返回是错误信息，不返回则成功 | `(value: any) => Promise<string \| undefined>` |
| required  | 是否必填                                   | `boolean`                                      |
| max       | 最大值                                     | `number`                                       |
| min       | 最小值                                     | `number`                                       |
| maxLength | 最大长度                                   | `number`                                       |
| minLength | 最小长度                                   | `number`                                       |

## Ref 调用验证结果

| 属性名  | 说明     | 类型      |
| ------- | -------- | --------- |
| status  | 状态     | `boolean` |
| result  | 数据     | `Object`  |
| message | 错误信息 | `Object`  |
