<template>
  <div>
    <ImDialog v-model="visible" :closeOnClickMask="false">
      <ImCard title="Hello" borderless>
        <template #header-action>
          <ImButton shape="circle" variant="text" @click="visible = false">
            <ImIcon name="close" />
          </ImButton>
        </template>
        <div>text ...</div>
        <div>text ...</div>

      </ImCard>
      <footer style="padding:0 8px 8px 0;display: flex;justify-content: flex-end;">
        <ImButton variant="text" @click="visible = false">Cancel</ImButton>
        <ImButton color="primary" variant="text" @click="visible = false">Confirm</ImButton>
      </footer>
    </ImDialog>
    <ImButton @click="visible = true">Open</ImButton>

    <ImDialog v-model="show1" fullscreen>
      <ImCard title="Hello" borderless>
        <template #header-action>
          <ImButton shape="circle" size="48" variant="text" @click="show1 = false">
            <ImIcon name="close" size="24" />
          </ImButton>
        </template>
        <div>text ...</div>
        <div>text ...</div>
        <div>text ...</div>
        <div class="demo"></div>
      </ImCard>
    </ImDialog>
    <ImButton @click="show1 = true">fullscreen</ImButton>

    <ImDialog v-model="show2" width="50%" height="150px">
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
        <ImButton @click="child = true">
          Child
        </ImButton>
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
import { ref } from 'vue'

const visible = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const parent = ref(false)
const child = ref(false)
</script>

<style scoped>
  .demo {
    height: 100vh;
    background-color: red;
  }
</style>