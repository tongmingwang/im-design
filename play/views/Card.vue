<template>
  <div>
    <ImCard title="Card">
      <template #header-action>
        <ImButton variant="text" color="primary">Action</ImButton>
      </template>
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
    <br />
    <ImCard title="Card" borderless shadow="always">
      <p>Text ...</p>
      <p>Text ...</p>
    </ImCard>
    <br />
    <ImCard title="Card" shadow="always" borderless>
      <template #header-action>
        <ImButton variant="text" color="primary">Action</ImButton>
      </template>
      <div>Text ...</div>
      <div>Text ...</div>
    </ImCard>

    <br />

    <ImCard title="Card" shadow="hover">
      <template #header-action>
        <ImButton variant="text" color="primary">Action</ImButton>
      </template>
      <div>Text ...</div>
      <div>Text ...</div>
    </ImCard>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>