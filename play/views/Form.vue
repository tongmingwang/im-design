<template>
  <ImForm v-model="form" ref="formRef" label-position="right" :rules="rules">
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
    <ImButton @click="onSave">Save</ImButton>
    <ImButton @click="onReset">reset</ImButton>
  </ImForm>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useImMessage } from '../../packages/components';
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
  useImMessage().success('成功');
};

function validator(val: any) {
  return val ? '' : '请勾选同意协议';
}
</script>
