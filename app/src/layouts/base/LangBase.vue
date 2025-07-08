<template>
  <ImDropdown placement="bottom-right">
    <ImButton variant="text" size="48" shape="circle">
      <svg
        viewBox="0 0 28 28"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4590"
        fill="currentColor"
        width="24"
        height="24">
        <path
          d="m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7 1.62-4.33L19.12 17z"></path>
      </svg>
    </ImButton>
    <template #content>
      <ImList v-model="locale">
        <ImListItem value="zh-CN">简体中文</ImListItem>
        <ImListItem value="en-US">English</ImListItem>
      </ImList>
    </template>
  </ImDropdown>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

watch(
  () => locale.value,
  () => {
    localStorage.setItem('lang', locale.value);
  }
);
</script>

<style scoped></style>
