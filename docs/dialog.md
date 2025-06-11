# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 默认从底部弹出居中显示。

<script setup>
import { ref } from 'vue'

const open = ref(false)
const open2 = ref(false)
const fullShow = ref(false)
const parent = ref(false)
const child = ref(false)
const getTarget = () => {
  return document.getElementById('trigger-id')
}
</script>

<style scoped>
.demo {
  background-color: var(--im-primary-color-10);
  padding: 20px;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 14px;
}
</style>

<ImDialog v-model="open">
    <ImCard title="Dialog Title"> <div class="demo">Hello World</div> </ImCard>
</ImDialog>
  <ImButton @click="open = true">Oen Dialog</ImButton>

```vue
<template>
  <ImDialog v-model="open">
    <ImCard title="Dialog Title"> <div class="demo">Hello World</div> </ImCard>
  </ImDialog>
  <ImButton @click="open = true">Oen Dialog</ImButton>
</template>
```

## 触发器打开

需要传一个 `getTarget` 函数，该函数的返回值是触发器元素。

<ImDialog v-model="open2" :getTarget="getTarget">
  <ImCard title="Dialog">
    <div class="demo">Hello World</div>
  </ImCard>
</ImDialog>
<ImButton @click="open2 = true" id="trigger-id">Open Dialog2</ImButton>

```vue
<template>
  <ImDialog v-model="open2" :getTarget="getTarget">
    <ImCard title="Dialog">
      <div class="demo">Hello World</div>
    </ImCard>
  </ImDialog>
  <ImButton @click="open2 = true" id="trigger-id">Open Dialog2</ImButton>
</template>

<script setup>
const open2 = ref(false);
const getTarget = () => {
  return document.getElementById('trigger-id');
};
</script>
```

## 全屏对话框

使用 fullscreen 属性可以让对话框的内容区全屏显示。

<ImDialog v-model="fullShow" fullscreen>
    <ImCard title="Dialog Title" borderless>
      <template #header-action>
        <ImButton
          size="48"
          shape="circle"
          variant="text"
          @click="fullShow = false">
          <ImIcon name="close" size="22" />
        </ImButton>
      </template>
      <div style="height: 100%;" class="demo">
        这里是内容区域
      </div>
    </ImCard>
  </ImDialog>
<ImButton @click="fullShow = true">打开全屏对话框</ImButton>

```vue
<template>
  <ImDialog v-model="fullShow" fullscreen>
    <ImCard title="Dialog Title" borderless>
      <template #header-action>
        <ImButton
          size="48"
          shape="circle"
          variant="text"
          @click="fullShow = false">
          <ImIcon name="close" size="22" />
        </ImButton>
      </template>
      <div style="height: 100%;" class="demo">这里是内容区域</div>
    </ImCard>
  </ImDialog>
  <ImButton @click="fullShow = true">打开全屏对话框</ImButton>
</template>
```

## 嵌套使用

<ImDialog v-model="parent">
    <ImCard title="Parent Dialog">
      <div class="demo">这里是内容区域</div>
      <ImButton @click="child = true">打开子级对话框</ImButton>
    </ImCard>
    <ImDialog v-model="child" >
      <ImCard title="Child Dialog "> 
        <div class="demo">这里是内容区域</div>
        <div class="demo">这里是内容区域</div>
       </ImCard>
    </ImDialog>
  </ImDialog>
<ImButton @click="parent = true">打开父级对话框</ImButton>

```vue
<template>
  <ImDialog v-model="parent">
    <template #header>
      <div class="flex items-center justify-between w-full">
        <span>父级对话框</span>
        <ImButton
          size="48"
          shape="circle"
          variant="text"
          @click="parent = false">
          <ImIcon name="close" size="22" />
        </ImButton>
      </div>
    </template>
    这里是内容区域
    <ImButton @click="child = true">打开子级对话框</ImButton>
    <ImDialog v-model="child" parent>
      <ImCard title="Dialog Title"> 这里是内容区域 </ImCard>
    </ImDialog>
  </ImDialog>
  <ImButton @click="parent = true">打开父级对话框</ImButton>
</template>
```
