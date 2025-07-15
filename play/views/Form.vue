<template>
  <div class="demo">
    <div style="margin-bottom: 24px">
      <ImRadioGroup v-model="placement" variant="button">
        <ImRadio value="top">top</ImRadio>
        <ImRadio value="left">left</ImRadio>
        <ImRadio value="right">right</ImRadio>
      </ImRadioGroup>
    </div>
    <ImForm
      v-model="form"
      ref="formRef"
      :label-position="placement"
      :rules="rules">
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
      <ImFormItem>
        <ImButton @click="onSave" width="100%" color="primary"
          >提交数据</ImButton
        >
      </ImFormItem>

      <ImFormItem>
        <ImButton
          @click="onReset"
          width="100%"
          color="primary"
          variant="outlined"
          >重置表单</ImButton
        >
      </ImFormItem>
    </ImForm>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const formRef = ref();
const placement = ref('top');
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

<style>
.demo {
  background-color: #fff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  width: 500px;
  padding: 16px;
  border-radius: 8px;
  margin: auto;
}
</style>
