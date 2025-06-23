<template>
  <main class="demo">
    <div>
      <ImTooltip content="This a Tooltip Trigger Text" placement="bottom">
        <ImButton>bottom</ImButton>
      </ImTooltip>
      <ImTooltip content="This a Tooltip Trigger Text" placement="bottom-left">
        <ImButton>bottom-left</ImButton>
      </ImTooltip>
      <ImTooltip content="This a Tooltip Trigger Text" placement="bottom-right">
        <ImButton>bottom-right</ImButton>
      </ImTooltip>
    </div>
    <div>
      <ImTooltip content="This a Tooltip Trigger Text" placement="top">
        <ImButton>top</ImButton>
      </ImTooltip>
      <ImTooltip content="This a Tooltip Trigger Text" placement="top-left">
        <ImButton>top-left</ImButton>
      </ImTooltip>
      <ImTooltip content="This a Tooltip Trigger Text" placement="top-right">
        <ImButton>top-right</ImButton>
      </ImTooltip>
    </div>

    <div>
      <ImTooltip content="This a Tooltip Trigger Text" placement="right">
        <ImButton>right</ImButton>
      </ImTooltip>
      <ImTooltip content="This a Tooltip Trigger Text" placement="right-top">
        <ImButton>right-top</ImButton>
      </ImTooltip>
      <ImTooltip content="This a Tooltip Trigger Text" placement="right-bottom">
        <ImButton>right-bottom</ImButton>
      </ImTooltip>
    </div>

    <div>
      <ImTooltip content="This a Tooltip Trigger Text" placement="left">
        <ImButton>left</ImButton>
      </ImTooltip>
      <ImTooltip content="This a Tooltip Trigger Text" placement="left-top">
        <ImButton>left-top</ImButton>
      </ImTooltip>
      <ImTooltip content="This a Tooltip Trigger Text" placement="left-bottom">
        <ImButton>left-bottom</ImButton>
      </ImTooltip>
    </div>

    <div>
      <ImPopover placement="left" title="测试">
        <ImButton>left</ImButton>
        <template #content> This is a popover content. </template>
      </ImPopover>
      <ImPopover
        trigger="click"
        content="This is a popover content."
        title="Popover"
        placement="left-top">
        <ImButton>left-top</ImButton>
      </ImPopover>
      <ImPopover content="This is a popover content." placement="left-bottom">
        <ImButton>left-bottom</ImButton>
      </ImPopover>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: 8px;
}
</style>
