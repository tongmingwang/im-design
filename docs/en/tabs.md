# Tabs Component

Separates content collections that are related but belong to different categories.

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index.toString(),
  label: `Tab Index ${index}`,
}));
</script>

## Basic Usage

Simple, clean tab implementation.

<ImTabs v-model="value">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value">
    <ImCard title="Title" style="margin-top: 20px">
      <div>This is a Panes Component, Current Index: {{ item.label }}</div>
    </ImCard>
  </ImPane>
</ImPanes>

```vue
<template>
  <ImTabs v-model="value">
    <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
  </ImTabs>
  <ImPanes v-model="value">
    <ImPane v-for="item in arr" :name="item.value">
      <ImCard title="Title" style="margin-top: 20px">
        <div>This is a Panes Component, Current Index: {{ item.label }}</div>
      </ImCard>
    </ImPane>
  </ImPanes>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
const arr = new Array(3).fill(0).map((_, index) => ({
  value: index.toString(),
  label: `Tab Index ${index}`,
}));
</script>
```

## Color Variations

Change tab colors using the `color` property.

Primary color tabs:
<ImTabs v-model="value" color="primary">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value">
    <ImCard title="Title" borderless shadow="always">
      <div>This is a Panes Component, Current Index: {{ item.label }}</div>
    </ImCard>
  </ImPane>
</ImPanes>

Error color tabs:
<ImTabs v-model="value" color="error">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value">
    <ImCard title="Title" borderless shadow="always">
      <div>This is a Panes Component, Current Index: {{ item.label }}</div>
    </ImCard>
  </ImPane>
</ImPanes>

Success color tabs:
<ImTabs v-model="value" color="success">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value">
    <ImCard title="Title" borderless shadow="always">
      <div>This is a Panes Component, Current Index: {{ item.label }}</div>
    </ImCard>
  </ImPane>
</ImPanes>

Warning color tabs:
<ImTabs v-model="value" color="warning">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value">
    <ImCard title="Title" borderless shadow="always">
      <div>This is a Panes Component, Current Index: {{ item.label }}</div>
    </ImCard>
  </ImPane>
</ImPanes>

## Alignment Options

Supports three alignment modes: left, right and center.

Left aligned:
<ImTabs v-model="value" color="primary" align="left">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value">
    <ImCard title="Title" borderless shadow="always">
      <div>This is a Panes Component, Current Index: {{ item.label }}</div>
    </ImCard>
  </ImPane>
</ImPanes>

Right aligned:
<ImTabs v-model="value" color="primary" align="right">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value">
    <ImCard title="Title" borderless shadow="always">
      <div>This is a Panes Component, Current Index: {{ item.label }}</div>
    </ImCard>
  </ImPane>
</ImPanes>

Center aligned:
<ImTabs v-model="value" color="primary" align="center">
  <ImTab v-for="item in arr" :name="item.value" :label="item.label" />
</ImTabs>
<ImPanes v-model="value">
  <ImPane v-for="item in arr" :name="item.value">
    <ImCard title="Title" borderless shadow="always">
      <div>This is a Panes Component</div>
    </ImCard>
  </ImPane>
</ImPanes>