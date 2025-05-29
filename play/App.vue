<template>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" :key="index">{{ item.toLocaleUpperCase() }}</im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" variant="outlined" :key="index">{{ item.toLocaleUpperCase()
    }}</im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" variant="tonal" :key="index">{{ item.toLocaleUpperCase()
    }}</im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" variant="text" :key="index">{{ item.toLocaleUpperCase()
    }}</im-button>
  </im-row>

  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="circle" :key="index">
      <ImIconShare />
    </im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="circle" variant="outlined" :key="index">
      <ImIconShare />
    </im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="circle" variant="tonal" :key="index">
      <ImIconShare />
    </im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="circle" variant="text" :key="index">
      <ImIconShare />
    </im-button>
  </im-row>

  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="square" :key="index">
      <ImIconShare />
    </im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="square" variant="outlined" :key="index">
      <ImIconShare />
    </im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="square" variant="tonal" :key="index">
      <ImIconShare />
    </im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="square" variant="text" :key="index">
      <ImIconShare />
    </im-button>
  </im-row>

  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="round" :key="index">{{ item.toUpperCase()
    }}</im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="round" variant="outlined" :key="index">{{
      item.toUpperCase() }}</im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="round" variant="tonal" :key="index">{{
      item.toUpperCase() }}</im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" v-for="(item, index) in colors" shape="round" variant="text" :key="index">{{
      item.toUpperCase() }}</im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" size="48" v-for="(item, index) in colors" :key="index">{{
      item.toUpperCase() }}</im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" size="40" v-for="(item, index) in colors" :key="index">{{
      item.toUpperCase() }}</im-button>
  </im-row>
  <im-row :gutter="8">
    <im-button :color="item" size="32" v-for="(item, index) in colors" :key="index">{{
      item.toUpperCase() }}</im-button>
  </im-row>
  <section>
    <im-button width="100%" :color="item" v-for="(item, index) in colors" :key="index">{{
      item.toUpperCase() }}</im-button>
  </section>
</template>

<script setup lang="ts">
const colors = ['default', 'primary', 'error', 'warning', 'success'];
import { ImIconShare } from '../packages/components';
</script>

<style scoped lang="scss">
  .demo {
    background-color: #c2bfbf;
    height: 100px;
    border-radius: 4px;
    width: 100%;
  }

  .im-row {
    margin-bottom: 10px;
  }
</style>
