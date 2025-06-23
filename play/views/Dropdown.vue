<template>
  <div class="demo">
    <ImDropdown trigger="hover">
      <ImButton>Hover Me</ImButton>
      <template #content>
        <ImList>
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>
    <div style="height: 300px"></div>
    <ImDropdown trigger="click">
      <ImButton>Click Me</ImButton>
      <template #content>
        <ImList>
          <ImListItem :value="String(item)" v-for="item in 5" disabled
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>
    <div style="height: 300px"></div>
    <ImDropdown trigger="click" placement="bottom">
      <ImButton>Bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="bottom-left">
      <ImButton>bottom-left</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="bottom-right">
      <ImButton>bottom-right</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="top">
      <ImButton>top</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="top-left">
      <ImButton>top-left</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>

    <ImDropdown trigger="click" placement="top-right">
      <ImButton>top-right</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="right">
      <ImButton>right</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>

    <ImDropdown trigger="click" placement="right-top">
      <ImButton>right-top</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="right-bottom">
      <ImButton>right-bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>

    <ImDropdown trigger="click" placement="left">
      <ImButton>left</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>
    <ImDropdown trigger="click" placement="left-top">
      <ImButton>left-top</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}</ImListItem
          >
        </ImList>
      </template>
    </ImDropdown>

    <ImDropdown trigger="click" placement="left-bottom">
      <ImButton>left-bottom</ImButton>
      <template #content>
        <ImList v-model="val">
          <ImListItem :value="String(item)" v-for="item in 5"
            >Menu Item Index{{ item }}
          </ImListItem>
        </ImList>
      </template>
    </ImDropdown>
    <div style="height: 300px"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const val = ref('1');
</script>

<style lang="scss" scoped>
.demo {
  height: 500px;
  overflow: auto;
}
</style>
