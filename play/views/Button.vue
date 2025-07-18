<template>
  <ImButton size="148" shape="square">Demo</ImButton>
  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item">
      {{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" variant="outlined">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" variant="tonal">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" variant="text">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" shape="circle">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      shape="circle"
      >{{ item.toUpperCase() }}</ImButton
    >
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      shape="circle"
      >{{ item.toUpperCase() }}</ImButton
    >
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      shape="circle"
      >{{ item.toUpperCase() }}</ImButton
    >
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" shape="square">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      shape="square"
      >{{ item.toUpperCase() }}</ImButton
    >
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      shape="square"
      >{{ item.toUpperCase() }}</ImButton
    >
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      shape="square"
      >{{ item.toUpperCase() }}</ImButton
    >
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" shape="round">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      shape="round"
      >{{ item.toUpperCase() }}</ImButton
    >
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      shape="round"
      >{{ item.toUpperCase() }}</ImButton
    >
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      shape="round"
      >{{ item.toUpperCase() }}</ImButton
    >
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" loading shape="round">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      loading
      shape="round"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      loading
      shape="round"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      loading
      shape="round"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" loading shape="">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      loading
      shape=""
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      loading
      shape=""
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      loading
      shape=""
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" loading shape="circle">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      loading
      shape="circle"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      loading
      shape="circle"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      loading
      shape="circle"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" loading shape="square">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      loading
      shape="square"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      loading
      shape="square"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      loading
      shape="square"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" loading shape="round">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      loading
      shape="round"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      loading
      shape="round"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      loading
      shape="round"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" disabled shape="">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      disabled
      shape=""
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      disabled
      shape=""
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      disabled
      shape=""
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" disabled shape="circle">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      disabled
      shape="circle"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      disabled
      shape="circle"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      disabled
      shape="circle"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>

  <ImRow :gutter="8">
    <ImButton v-for="item in colors" :color="item" disabled shape="square">{{
      item.toUpperCase()
    }}</ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="outlined"
      disabled
      shape="square"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="tonal"
      disabled
      shape="square"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
  <ImRow :gutter="8">
    <ImButton
      v-for="item in colors"
      :color="item"
      variant="text"
      disabled
      shape="square"
      >{{ item.toUpperCase() }}
    </ImButton>
  </ImRow>
</template>

<script setup lang="ts">
const colors = ['primary', 'error', 'success', 'warning', 'default'];
</script>

<style scoped>
.im-row {
  margin-bottom: 8px;
}
</style>
