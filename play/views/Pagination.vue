<template>
  <div>
    <ImPagination :total="600" :pageNumber="pageNumber" :pageSize="pageSize" @change="onChange" />
    <ImPagination layout="prev,next,pager" :total="600" size="28" :pageNumber="pageNumber" :pageSize="pageSize"
      @change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const pageNumber = ref(10)
const pageSize = ref(10)

const onChange = (data) => {
  console.log(data)
  pageNumber.value = data.pageNumber
  pageSize.value = data.pageSize
}

</script>

<style scoped></style>