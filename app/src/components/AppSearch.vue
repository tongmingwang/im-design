<template>
  <div class="app_search" ref="trigger">
    <slot :open="open" :setState="setState"></slot>
    <ImDialog v-model="open" width="520px" :getTarget="getTarget" top="80px">
      <div class="search" ref="inputRef">
        <ImInput
          type="text"
          autofocus="autofocus"
          v-model="searchValue"
          class="input"
          clearable
          size="48"
          placeholder="输入关键词查询">
          <template #prefix><ImIcon name="search" size="32" /></template>
        </ImInput>
      </div>
      <div class="result">
        <Transition name="fade" mode="out-in" :duration="200">
          <ImEmpty
            title="输入关键词查询"
            description="暂无数据"
            v-if="!list.length" />
          <ImList class="list" v-else>
            <ImListItem v-for="item in list">
              <div class="items">
                <div>{{ item.label }}</div>
                <div>{{ item.value }}</div>
              </div>
              <div>
                <ImIcon name="right" />
              </div>
            </ImListItem>
          </ImList>
        </Transition>
      </div>
    </ImDialog>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const open = ref(false);
const router = useRouter();
const trigger = ref();
const inputRef = ref();
const searchValue = ref('');
const list: any = ref([]);

watch(open, (val) => {
  searchValue.value = '';
  if (val) {
    setTimeout(() => {
      inputRef.value.querySelector('input').focus();
    }, 300);
  }
});

const debounce = <T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  let timer: any;
  return function (this: unknown, ...args: T) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const handleSearch = debounce((val: string) => {
  console.log(val);
  list.value = val.split('').map((item) => ({ label: item, value: item }));
}, 500);

watch(() => searchValue.value, handleSearch);

const setState = (state: boolean) => {
  open.value = state;
};

const getTarget = () => {
  return trigger.value;
};
</script>

<style scoped lang="scss">
.app_search {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
}

.search {
  width: 100%;
  padding: 8px;
  background-color: var(--im-bg-container-color);

  .input {
    border-width: 2px;
  }
}

.result {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 8px 16px;
  min-height: 100px;
  background-color: var(--im-bg-container-color);
  overflow: hidden;
}

:deep(.im-list) {
  border-radius: 8px !important;
  padding: 8px !important;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  max-height: 60vh;

  .im-list__item {
    border-radius: 8px;
    border: 1px solid var(--im-gray-color-3);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.items {
  display: flex;
  flex-direction: column;
  gap: 4px;
  div {
    font-size: 14px;
    color: var(--im-gray-color-7);
    &:first-child {
      font-size: 16px;
      color: var(--im-gray-color-10);
    }
  }
}

.input {
  width: 100%;
  height: 48px;
}

.fade-enter-active,
.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
