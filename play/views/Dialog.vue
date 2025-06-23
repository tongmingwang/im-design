<template>
  <div>
    <ImDialog
      v-model="visible"
      :draggable="true"
      :getTarget="getTarget"
      top="8vh">
      <ImDialogHeader>
        标题
        <template #action> <ImButton variant="text">Action</ImButton></template>
      </ImDialogHeader>
      <ImDialogBody content="一个提示"> </ImDialogBody>
      <ImDialogFooter>
        <ImButton variant="text" @click="visible = false">Cancel</ImButton>
        <ImButton color="primary" variant="text" @click="visible = false"
          >Confirm</ImButton
        >
      </ImDialogFooter>
    </ImDialog>
    <ImButton @click="visible = true" ref="buttonRef">打开对话框</ImButton>

    <ImDialog v-model="show1" fullscreen>
      <ImCard title="Hello" borderless>
        <template #header-action>
          <ImButton
            shape="circle"
            size="48"
            variant="text"
            @click="show1 = false">
            <ImIcon name="close" size="24" />
          </ImButton>
        </template>
        <div>text ...</div>
        <div>text ...</div>
        <div>text ...</div>
      </ImCard>
    </ImDialog>
    <ImButton @click="show1 = true">fullscreen</ImButton>

    <ImDialog v-model="show2" height="150px">
      <ImCard borderless>
        <div>text ...</div>
        <div>text ...</div>
        <div>text ...</div>
        <div>text ...</div>
        <div>text ...</div>
        <div>text ...</div>
        <div>text ...</div>
      </ImCard>
    </ImDialog>
    <ImButton @click="show2 = true">Report</ImButton>

    <ImDialog v-model="parent">
      <ImCard borderless>
        <div>text ...</div>
        <div>text ...</div>
        <ImButton @click="child = true"> Child </ImButton>
      </ImCard>
      <ImDialog v-model="child">
        <ImCard borderless title="Child">
          <div>text ...</div>
          <div>text ...</div>
        </ImCard>
      </ImDialog>
    </ImDialog>
    <ImButton @click="parent = true">Parent</ImButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const buttonRef = ref<any | null>(null);
const visible = ref(false);
const show1 = ref(false);
const show2 = ref(false);
const parent = ref(false);
const child = ref(false);

function getTarget() {
  return buttonRef.value.ref;
  // return document.body!
}
</script>

<style scoped>
.demo {
  height: 100%;
  width: 100%;
  background-color: rgb(82, 63, 63);
}
</style>
