<template>
  <div>
    <ImCard title="Card">
      <ImCardHeader title="ImTitle" divider>
        <template #actions>
          <ImButton variant="text" color="primary">Action</ImButton>
          <ImButton variant="text" color="primary">Action</ImButton>
        </template>
      </ImCardHeader>
      <ImCardBody class="body">
        <p>Text ...</p>
        <p>Text ...</p>
      </ImCardBody>
      <ImCardFooter divider>
        <ImButton variant="text" color="primary">Action</ImButton>
        <ImButton variant="text" color="primary">Action</ImButton>
      </ImCardFooter>
    </ImCard>
    <br />
    <ImCard title="Card" borderless shadow="always">
      <ImCardHeader title="ImTitle">
        <template #actions>
          <ImButton variant="text" color="primary">Action</ImButton>
          <ImButton variant="text" color="primary">Action</ImButton>
        </template>
      </ImCardHeader>
      <ImCardBody>
        <p>Text ...</p>
        <p>Text ...</p>
      </ImCardBody>
      <ImCardFooter>
        <ImButton variant="text" color="primary">Action</ImButton>
        <ImButton variant="text" color="primary">Action</ImButton>
      </ImCardFooter>
    </ImCard>
    <br />
    <ImCard title="Card" shadow="always" borderless>
      <ImCardHeader title="ImTitle">
        <template #actions>
          <ImButton variant="text" color="primary">Action</ImButton>
          <ImButton variant="text" color="primary">Action</ImButton>
        </template>
      </ImCardHeader>
      <ImCardBody>
        <p>Text ...</p>
        <p>Text ...</p>
      </ImCardBody>
      <ImCardFooter>
        <ImButton variant="text" color="primary">Action</ImButton>
        <ImButton variant="text" color="primary">Action</ImButton>
      </ImCardFooter>
    </ImCard>

    <br />

    <ImCard title="Card" shadow="hover">
      <ImCardHeader title="ImTitle">
        <template #actions>
          <ImButton variant="text" color="primary">Action</ImButton>
          <ImButton variant="text" color="primary">Action</ImButton>
        </template>
      </ImCardHeader>
      <ImCardBody>
        <p>Text ...</p>
        <p>Text ...</p>
      </ImCardBody>
      <ImCardFooter>
        <ImButton variant="text" color="primary">Action</ImButton>
        <ImButton variant="text" color="primary">Action</ImButton>
      </ImCardFooter>
    </ImCard>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
