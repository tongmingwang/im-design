<template>
  <ImForm v-model="form" ref="formRef">
    <ImFormItem label="账号" prop="name">
      <ImInput v-model="form.name" />
    </ImFormItem>
    <ImFormItem
      label="密码"
      prop="pwd"
      :rules="[{ maxLength: 10, minLength: 5, message: '密码输入不对' }]">
      <ImInput v-model="form.pwd" />
    </ImFormItem>

    <ImFormItem label="性别" prop="checked">
      <ImRadioGroup v-model="form.sex">
        <ImRadio value="1" label="男"></ImRadio>
        <ImRadio value="2" label="女"></ImRadio>
        <ImRadio value="3" label="未知"></ImRadio>
      </ImRadioGroup>
    </ImFormItem>
    <ImFormItem label="" prop="checked">
      <ImCheckbox v-model="form.checked" label="同意协议" />
    </ImFormItem>
    <ImButton @click="onSave">Save</ImButton>
  </ImForm>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const formRef = ref();
const form = reactive({
  name: 'zs',
  pwd: '12',
  checked: false,
  sex: '1',
  age: 18,
});

const onSave = () => {
  console.log(formRef.value, 'formRef.value');

  formRef.value?.validate();
};
</script>

<style lang="scss">
#app {
  padding: 50px;
  background-color: var(--im-bg-container-color);
}
</style>
