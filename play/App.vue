<template>
  <div class="main">
    <ImRow :gutter="8">
      <im-button :color="item" v-for="(item, index) in colors" :key="index">{{ item.toLocaleUpperCase() }}</im-button>
    </ImRow>
    <im-row :gutter="8">
      <im-button :color="item" v-for="(item, index) in colors" variant="outlined" :key="index">{{
        item.toLocaleUpperCase()
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
        <ImIcon name="search" />
      </im-button>
    </im-row>
    <im-row :gutter="8">
      <im-button :color="item" v-for="(item, index) in colors" shape="circle" variant="outlined" :key="index">
        <ImIcon name="search" />
      </im-button>
    </im-row>
    <im-row :gutter="8">
      <im-button :color="item" v-for="(item, index) in colors" shape="circle" variant="tonal" :key="index">
        <ImIcon name="search" />
      </im-button>
    </im-row>
    <im-row :gutter="8">
      <im-button :color="item" v-for="(item, index) in colors" shape="circle" variant="text" :key="index">
        <ImIcon name="search" />
      </im-button>
    </im-row>

    <im-row :gutter="8">
      <im-button :color="item" v-for="(item, index) in colors" shape="square" :key="index">
        <ImIcon name="search" />
      </im-button>
    </im-row>
    <im-row :gutter="8">
      <im-button :color="item" v-for="(item, index) in colors" shape="square" variant="outlined" :key="index">
        <ImIcon name="search" />
      </im-button>
    </im-row>
    <im-row :gutter="8">
      <im-button :color="item" v-for="(item, index) in colors" shape="square" variant="tonal" :key="index">
        <ImIcon name="search" />
      </im-button>
    </im-row>
    <im-row :gutter="8">
      <im-button :color="item" v-for="(item, index) in colors" shape="square" variant="text" :key="index">
        <ImIcon name="search" />
      </im-button>
    </im-row>

    <im-row :gutter="8">
      <im-button :color="item" loading v-for="(item, index) in colors" shape="square" variant="tonal" :key="index">
        <ImIcon name="search" />
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
      <im-button :color="item" size="48" v-ripple="true" v-for="(item, index) in colors" :key="index">{{
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
      <im-button width="100%" v-ripple="true" :color="item" v-for="(item, index) in colors" :key="index">{{
        item.toUpperCase() }}</im-button>
    </section>

  </div>
</template>

<script setup lang="ts">
const colors = ['default', 'primary', 'error', 'warning', 'success'];
</script>

<style scoped lang="scss">
  .im-row {
    margin-bottom: 10px;
  }

  .main {
    background-color: var(--im-bg-content-color);
    margin: 24px;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 0 12px var(--im-shadow-color);
  }
</style>
