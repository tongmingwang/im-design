# Color Palette

To avoid visual communication differences, we use a specific color palette to define colors, providing a consistent visual appearance for your product.

## Primary Color

The default theme color is a bright, friendly blue.

<div class="color_wrapper">
  <div class="item_main item" :style="{'--color': 'var(--im-primary-color-7)'}"></div>
  <section class="item_wrapper">
    <div v-for="item in colors" class="item" :style="{'--color': `var(--im-primary-color-${item})`}"></div>
  </section>
</div>

## Success Color

Success color indicates successful operations, such as form submission or file upload.

<div class="color_wrapper">
  <div class="item_main item" :style="{'--color': 'var(--im-success-color-7)'}"></div>
  <section class="item_wrapper">
    <div v-for="item in colors" class="item" :style="{'--color': `var(--im-success-color-${item})`}"></div>
  </section>
</div>

## Warning Color

Warning color indicates operation warnings, such as form validation failures or oversized file uploads.

<div class="color_wrapper">
  <div class="item_main item" :style="{'--color': 'var(--im-warning-color-7)'}"></div>
  <section class="item_wrapper">
    <div v-for="item in colors" class="item" :style="{'--color': `var(--im-warning-color-${item})`}"></div>
  </section>
</div>

## Error Color

Error color indicates failed operations, such as form validation failures or oversized file uploads.

<div class="color_wrapper">
  <div class="item_main item" :style="{'--color': 'var(--im-error-color-7)'}"></div>
  <section class="item_wrapper">
    <div v-for="item in colors" class="item" :style="{'--color': `var(--im-error-color-${item})`}"></div>
  </section>
</div>

## Neutral Colors

Neutral colors are used for text, backgrounds, and borders.

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
const colors2 = [12,11,9,8,7,6,5,4,3,2,1];
</script>