# Icon 图标

ImDesign 提供常用的图标，方便你在项目快速使用，内存占用极小兼容性好 19kb 的大小。

## 使用

<script setup>
import iconData  from './public/imicon.json'
</script>

<style lang="scss">

  .icon-list {
    display: flex;
    flex-wrap: wrap!important;
  }

  .icon-item {
    padding: 24px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 12px;
    word-break: break-all;
    line-height: 1;
    border-radius: 4px;
    overflow: hidden;
    transition: all .3s;

    &:hover {
      background: var(--im-rgb-color-1);
      color: var(--im-primary-color-8);
    }

  }
</style>

<ImRow :gutter="8">
    <im-icon name="info-circle" />
    <im-icon name="info-circle" size="24px" />
</ImRow>

```vue
<template>
  <ImRow :gutter="8">
    <ImIcon name="info-circle" />
    <ImIcon name="info-circle" size="24px" />
  </ImRow>
</template>
```

## 图标列表

<ImRow class="icon-list">
  <ImCol v-for="(item, index) in iconData.glyphs" :key="index" span="5">
    <div class="icon-item" v-ripple="true">
      <ImIcon :name="item.font_class" size="36px" />
      {{ item.font_class }}
    </div>
  </ImCol>
</ImRow>

## APIS
