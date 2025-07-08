<template>
  <div>
    <ImSwitch borderColor="#f60" />
    <ImSwitch size="20" style="width: 48px" />
    <ImSwitch activeText="ON" inactiveText="OFF" style="width: 48px" />
    <ImSwitch activeText="Y" inactiveText="N" />
    <ImSwitch activeColor="#13ce66" inactiveColor="#ff4949" />
    <ImSwitch>
      <template v-slot:action="{ checked }">
        <ImIcon :name="checked ? 'check' : 'close'" size="16px" />
      </template>
    </ImSwitch>
    <ImSwitch disabled />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
