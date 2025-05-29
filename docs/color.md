# Color 色彩

Im Design 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

## 主色

Im Design 默认的主题色是明亮、友好的蓝色。

<div class="color_wrapper">
  <div class="item_main item" :style="{'--color': 'var(--im-primary-color-7)'}"></div>
  <section class="item_wrapper">
    <div v-for="item in colors" class="item" :style="{'--color': `var(--im-primary-color-${item})`}"></div>
  </section>
</div>

## 成功色

成功色用于表示操作成功，例如提交表单、上传文件等。

<div class="color_wrapper">
  <div class="item_main item" :style="{'--color': 'var(--im-success-color-7)'}"></div>
  <section class="item_wrapper">
    <div v-for="item in colors" class="item" :style="{'--color': `var(--im-success-color-${item})`}"></div>
  </section>
</div>

## 警告色

警告色用于表示操作警告，例如表单验证不通过、上传文件过大等。

<div class="color_wrapper">
  <div class="item_main item" :style="{'--color': 'var(--im-warning-color-7)'}"></div>
  <section class="item_wrapper">
    <div v-for="item in colors" class="item" :style="{'--color': `var(--im-warning-color-${item})`}"></div>
  </section>
</div>

## 错误色

错误色用于表示操作失败，例如表单验证不通过、上传文件过大等。

<div class="color_wrapper">
  <div class="item_main item" :style="{'--color': 'var(--im-error-color-7)'}"></div>
  <section class="item_wrapper">
    <div v-for="item in colors" class="item" :style="{'--color': `var(--im-error-color-${item})`}"></div>
  </section>
</div>

## 中性色

中性色用于文本、背景和边框颜色。

<div class="color_wrapper gray">
  <div class="item_main item" :style="{'--color': 'var(--im-gray-color-10)'}"></div>
  <section class="item_wrapper">
    <div v-for="item in colors2" class="item" :style="{'--color': `var(--im-gray-color-${item})`}"></div>
  </section>
</div>

<style lang="scss">
.color_wrapper {
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 24px;

  .item {
    flex: 1;
    height: 50px;
    background-color: var(--color);
  }
  .item_main {
    height: 100px;
  }
  .item_wrapper {
    display: flex;
  }
  
}
.gray {
  border: 1px solid rgb(227, 226, 226);
}

</style>

<script setup>
const colors = [10,9,8,6,5,4,3,2,1];
const colors2 = [13,12,11,9,8,7,6,5,4,3,2,1];

</script>
