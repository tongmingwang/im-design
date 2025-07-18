# Icon 图标

ImDesign 提供常用的图标，方便你在项目快速使用，内存占用极小兼容性好 19kb 的大小。

## 基础用法

使用`name`属性来使用图标

<script setup>
import iconData  from './public/imicon.json'
import { useImMessage } from 'im-design'
const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);

    // Fallback to the older method if Clipboard API isn't available
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback copy method failed: ', err);
    }
    document.body.removeChild(textarea);
  }
};

const onCopy = (item) =>{
  copyText(`<ImIcon name="${item.font_class}" />`)
  useImMessage().success('复制成功')
}
</script>

<style lang="scss">

  .icon-list {
    display: flex;
    flex-wrap: wrap!important;
  }

  .icon-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    transition: all .3s;
    width: 60px;
    height: 60px;
    cursor: pointer;

    &:hover {
      background: var(--im-rgb-color-1);
      color: var(--im-primary-color-8);
    }

  }
</style>
<im-icon name="info-circle" size="24px" />

```vue
<template>
  <ImIcon name="info-circle" size="24px" />
</template>
```

## 图标列表

系统内置图标，你可以通过 `name` 属性来使用。

<div class="icon-list">
    <div class="icon-item" v-ripple="true" v-for="(item, index) in iconData.glyphs" :key="index" @click="()=>onCopy(item)">
      <ImIcon :name="item.font_class" size="36px" />
    </div>
</div>

## API

```ts
defineProps<{
  // 图标大小，默认 16px
  size?: string | number;
  // 图标名称，必填项
  name: string;
  // 图标颜色，默认跟随主题色
  color?: string;
}>();
```
