<template>
  <div class="demo">
    <ImDropdown trigger="hover">
      <ImButton>Hover Me</ImButton>
      <template #content>
        <ImList>
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>
    <div style="height: 300px;"></div>
    <ImDropdown trigger="click">
      <ImButton>Click Me</ImButton>
      <template #content>
        <ImList>
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>

      </template>
    </ImDropdown>
    <div style="height: 300px;"></div>
    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>

    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>

    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>

    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>

    <ImDropdown trigger="click" placement="top">
      <ImButton>top</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5">Menu Item Index{{ item }}</ImListItem>
        </ImList>
      </template>
    </ImDropdown>

    <div style="height: 300px;"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const val = ref('1')
</script>

<style lang="scss" scoped>
  .demo {
    height: 500px;
    overflow-y: auto;
  }
</style>