<template>
  <div :class="[bem.b()]" :style="{
    '--im-pagination-size': sizeVal,
  }">
    <!-- total -->
    <div :class="[bem.e('total')]" v-if="layout.includes('total')">共 {{ total }} 条数据</div>
    <!-- prev -->
    <div :class="[bem.e('prev'), bem.is('disabled', isPrevDisabled)]" :aria-disabled="isPrevDisabled"
      v-if="layout.includes('prev')" v-ripple="!isPrevDisabled" @click="onPrevPage">
      <ImIcon name="left" size="14px" />
    </div>

    <!-- pager -->
    <div :class="[bem.e('pager'),]" v-if="layout.includes('pager')">
      <template v-for="item in pageList">
        <div v-if="item === 'left'" title="向前5页" :class="[bem.e('page-item'), bem.e('left')]" @click="onPrevGroup">
          <ImIcon name="ellipsis" class="im-icon--ellipsis" />
          <ImIcon name="arrowleft" class="im-icon--arrowleft" />
        </div>
        <div v-else-if="item !== 'right'" @click="() => handlePageChange(item)"
          :class="[bem.e('page-item'), bem.is('active', item === props.pageNumber)]" v-ripple="true"
          :title="String(item)">{{ item
          }}
        </div>
        <div v-else-if="item === 'right'" :class="[bem.e('page-item'), bem.e('right')]" title="向后5页"
          @click="onNextGroup">
          <ImIcon name="ellipsis" class="im-icon--ellipsis" />
          <ImIcon name="arrowright" class="im-icon--arrowright" />
        </div>
      </template>
    </div>
    <!-- next -->
    <div :class="[bem.e('next'), bem.is('disabled', isNextDisabled)]" :aria-disabled="isNextDisabled"
      v-if="layout.includes('next')" v-ripple="!isNextDisabled" @click="onNextPage">
      <ImIcon name="right" size="14px" />
    </div>
    <!-- pageSize -->
    <div :class="[bem.e('size')]" v-if="layout.includes('sizes')">
      <ImSelect :options="sizeOptions" v-model="sizeValue" :size="props.size" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ImPaginationProps } from './types'
import { useBem } from '@/utils/bem';
import ImIcon from '../ImIcon';
import { ref, computed, watch } from 'vue'
import { useToken } from '@/hooks/useToken';
import ImSelect from '../ImSelect'

type ListType = Array<number | 'left' | 'right'>
defineOptions({ name: 'ImPagination' })
const bem = useBem('pagination')
const emit = defineEmits<{ (e: 'change', pageData: { pageNumber: number; pageSize: number }): void }>()
const props = withDefaults(defineProps<ImPaginationProps>(), {
  pageSize: 10,
  pageNumber: 1,
  total: 0,
  pageSizeItems: () => [10, 20, 30, 40],
  layout: 'prev,pager,next,sizes,total',
  size: ''
})
const sizeValue = ref(props.pageSize)

// 渲染数据
const pageList = ref<ListType>([1])
// 全局注入尺寸token数据
const { sizeToken } = useToken()
// 定义尺寸数据
const sizeVal = computed(() => {
  return parseInt(String((props.size || sizeToken.value || 36))) + 'px'
})
// 总页数
const totalPage = computed(() => Math.ceil(props.total / (sizeValue.value || 10)))
// 是否禁用上一页
const isPrevDisabled = computed(() => props.pageNumber === 1)
// 是否禁用下一页
const isNextDisabled = computed(() => props.pageNumber >= totalPage.value)
// 分页
const sizeOptions = computed(() => props.pageSizeItems.map(item => ({ label: `${item} 条/页`, value: item })))

watch(() => sizeValue.value, (val) => {
  if (totalPage.value < props.pageNumber) {
    emit('change', { pageSize: val, pageNumber: totalPage.value })
  } else {
    emit('change', { pageSize: val, pageNumber: props.pageNumber })
  }
})
watch(() => [props.pageNumber, props.pageSize], () => {
  sizeValue.value = props.pageSize
  updatePager(props.pageNumber)
}, { immediate: true })

// 当前页码变化时，更新页面
function handlePageChange(page: number) {
  if (props.pageNumber !== page) {
    emit('change', { pageNumber: page, pageSize: props.pageSize })
  }
}
// 根据当前页，更新当前组和分页数据
function updatePager(pageNumber: number) {
  if (totalPage.value <= 1) {
    pageList.value = [1]
  } else {
    const curGroupIndex = Math.ceil(pageNumber / 5)
    const group: ListType = []
    // 找到组别生成当前渲染的组数据
    let start = curGroupIndex * 5 - 4
    for (let index = 0; index < 5; index++) {
      let item = start + index
      if (item > totalPage.value) {
        break
      }
      group.push(item)
    }
    // 前面是否还存在多组数据？
    if (pageNumber - 5 >= 1) {
      // 添加第一页和往左跳转5页的按钮
      group.unshift('left')
      group.unshift(1)
    }
    // 后面是否还存在多组数据？
    if (pageNumber + 5 <= totalPage.value) {
      group.push('right')
      group.push(totalPage.value)
    }
    pageList.value = group
    // 激活当前页码
    handlePageChange(pageNumber)

  }
}
// 点击快捷按钮下一页，需要处理
function onNextPage() {
  const nextPage = props.pageNumber + 1
  if (nextPage > totalPage.value) return handlePageChange(props.pageNumber)
  // 当前页是否还在当前组，不在则换下一组
  if (pageList.value.includes(nextPage)) {
    return handlePageChange(nextPage)
  }
  updatePager(nextPage)
}
// 点击快捷按钮上一页，需要处理
function onPrevPage() {
  const prevPage = props.pageNumber - 1
  if (prevPage < 1) return handlePageChange(props.pageNumber)
  // 当前页是否还在当前组，不在则换上一组
  if (pageList.value.includes(prevPage)) {
    return handlePageChange(prevPage)
  }
  updatePager(prevPage)
}
// 点击右侧按钮，跳转下一组
function onNextGroup() {
  const current = props.pageNumber + 5
  if (current > totalPage.value) return handlePageChange(totalPage.value)
  updatePager(current)
}
// 点击左侧按钮，跳转上一组 
function onPrevGroup() {
  const cur = props.pageNumber - 5

  if (cur < 1) return handlePageChange(1)
  updatePager(cur)
}
</script>

<style scoped lang="scss">
  @keyframes icon-fade-in {
    from {
      opacity: 0;
      transform: scale(0.33);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @mixin btn() {
    width: var(--im-pagination-size);
    height: var(--im-pagination-size);
    min-width: var(--im-pagination-size);
    min-height: var(--im-pagination-size);
  }


  .im-pagination {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--im-gray-color-10);
    font-size: 14px;
    font-weight: 500;
    overflow-x: auto;

    .im-pagination__total {
      margin-right: 24px;
      text-wrap: nowrap;
      white-space: nowrap;
      color: var(--im-gray-color-10);
    }

    .im-pagination__prev,
    .im-pagination__next {
      cursor: pointer;
      padding: 0;
      margin: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border-radius: 50%;
      position: relative;
      transition: background-color 0.2s ease-in-out;
      overflow: hidden;
      margin-right: 8px;
      color: var(--im-gray-color-8);
      @include btn();

      &:hover {
        background-color: var(--im-rgb-color-1);
      }

      &.is-disabled {
        cursor: not-allowed;
        color: var(--im-gray-color-5);
        background-color: transparent !important;

        &:hover {
          background-color: transparent !important;
        }
      }
    }

    .im-pagination__pager {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 0;
      padding: 0;
      flex-wrap: nowrap;

      .im-pagination__page-item {
        cursor: pointer;
        padding: 0;
        margin: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;

        border-radius: 50%;
        overflow: hidden;
        transition: background-color 0.2s ease-in-out;
        position: relative;
        margin-right: 8px;
        user-select: none;
        @include btn();

        &:hover {
          background-color: var(--im-rgb-color-1);
        }

        &.is-active {
          background-color: var(--im-primary-color-1);
          color: var(--im-primary-color-8);
        }
      }
    }

    .im-icon--arrowright,
    .im-icon--arrowleft {
      display: none;
      animation: icon-fade-in 0.2s ease;
    }

    .im-icon--ellipsis {
      animation: icon-fade-in 0.2s ease;
    }

    .im-pagination__left:hover {
      .im-icon--arrowleft {
        display: block;
      }

      .im-icon--ellipsis {
        display: none;
      }
    }

    .im-pagination__right:hover {
      .im-icon--arrowright {
        display: block;
      }

      .im-icon--ellipsis {
        display: none;
      }
    }

    .im-pagination__size {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 24px;
      min-width: 120px;
    }
  }

</style>