<template>
  <div>
    {{ visible }}
    <ImDrawer v-model="visible">
      <ImCard title="Default" borderless>
        <template #header-action>
          <ImButton variant="text" size="48" shape="circle" @click="visible = false">
            <ImIcon name="close" size="20" />
          </ImButton>
        </template>
        <p>Content ...</p>
        <p>Content ...</p>
      </ImCard>
    </ImDrawer>
    <ImDrawer v-model="top" placement="top">
      <ImCard title="Top" borderless>
        <template #header-action>
          <ImButton variant="text" size="48" shape="circle" @click="top = false">
            <ImIcon name="close" size="20" />
          </ImButton>
        </template>
        <p>Content ...</p>
        <p>Content ...</p>
      </ImCard>
    </ImDrawer>
    <ImDrawer v-model="bottom" placement="bottom">

      <ImCard title="Bottom" borderless>
        <template #header-action>
          <ImButton variant="text" size="48" shape="circle" @click="bottom = false">
            <ImIcon name="close" size="20" />
          </ImButton>
        </template>
        <p>Content ...</p>
        <p>Content ...</p>
      </ImCard>
    </ImDrawer>
    <ImDrawer v-model="left" placement="left">
      <ImCard title="Left" borderless>
        <template #header-action>
          <ImButton variant="text" size="48" shape="circle" @click="left = false">
            <ImIcon name="close" size="20" />
          </ImButton>
        </template>
        <p>Content ...</p>
        <p>Content ...</p>
      </ImCard>
    </ImDrawer>
    <ImButton @click="visible = !visible">
      Default
    </ImButton>
    <ImButton @click="top = !top">top</ImButton>
    <ImButton @click="bottom = !bottom">bottom</ImButton>
    <ImButton @click="left = !left">left</ImButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const top = ref(false)
const bottom = ref(false)
const left = ref(false)
</script>

<style scoped></style>