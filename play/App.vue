<template>
  <div class="play">
    <section>
      <im-button color="success">普通按钮</im-button>
      <im-button color="info">信息按钮</im-button>
      <im-button color="warning">警告按钮</im-button>
      <im-button color="error">危险按钮</im-button>
      <im-button color="primary"> Demo </im-button>
    </section>
    <section>
      <im-button color="primary" shape="round">Round</im-button>
      <im-button color="primary" shape="circle"><ImIconSearch /></im-button>
      <im-button color="primary" shape="square"><ImIconSearch /></im-button>
    </section>

    <section>
      <im-button color="primary" variant="text">变体按钮</im-button>
      <im-button color="error" variant="text">变体按钮</im-button>
      <im-button color="success" variant="text">变体按钮</im-button>
      <im-button color="warning" variant="text">变体按钮</im-button>
      <im-button color="" variant="text">变体按钮</im-button>
    </section>
    <section>
      <im-button color="primary" variant="tonal">变体按钮</im-button>
      <im-button color="error" variant="tonal">变体按钮</im-button>
      <im-button color="success" variant="tonal">变体按钮</im-button>
      <im-button color="warning" variant="tonal">变体按钮</im-button>
      <im-button color="" variant="tonal">变体按钮</im-button>
    </section>
    <section>
      <im-button color="primary" variant="outlined">变体按钮</im-button>
      <im-button color="error" variant="outlined">变体按钮</im-button>
      <im-button color="success" variant="outlined">变体按钮</im-button>
      <im-button color="warning" variant="outlined">变体按钮</im-button>
      <im-button color="" variant="outlined">变体按钮</im-button>
    </section>
    <section>
      <im-button color="error" variant="text" shape="round"
        ><ImIconSearch style="margin-right: 8px" />Hello</im-button
      >
      <im-button color="success" variant="tonal" shape="circle">
        <ImIconSearch />
      </im-button>
      <im-button color="warning" variant="outlined" shape="square">
        <ImIconSearch />
      </im-button>
    </section>
    <section>
      <im-button loading color="primary">UserInfo</im-button>
      <im-button loading color="success">UserInfo</im-button>
      <im-button loading color="error">UserInfo</im-button>
      <im-button loading color="warning">UserInfo</im-button>
      <im-button loading>UserInfo</im-button>
    </section>

    <section>
      <im-button loading shape="round" color="primary">UserInfo</im-button>
      <im-button loading shape="square" color="success">UserInfo</im-button>
      <im-button loading shape="circle" color="error">UserInfo</im-button>
    </section>

    <section>
      <im-button loading variant="text" color="primary">UserInfo</im-button>
      <im-button loading variant="text" color="success">UserInfo</im-button>
      <im-button loading variant="text" color="error">UserInfo</im-button>
      <im-button loading variant="text" color="warning">UserInfo</im-button>
      <im-button loading variant="text">UserInfo</im-button>
    </section>
    <section>
      <im-button loading variant="tonal" color="primary">UserInfo</im-button>
      <im-button loading variant="tonal" color="success">UserInfo</im-button>
      <im-button loading variant="tonal" color="error">UserInfo</im-button>
      <im-button loading variant="tonal" color="warning">UserInfo</im-button>
      <im-button loading variant="tonal">UserInfo</im-button>
    </section>
    <section>
      <im-button loading variant="outlined" color="primary">UserInfo</im-button>
      <im-button loading variant="outlined" color="success">UserInfo</im-button>
      <im-button loading variant="outlined" color="error">UserInfo</im-button>
      <im-button loading variant="outlined" color="warning">UserInfo</im-button>
      <im-button loading variant="outlined">UserInfo</im-button>
    </section>

    <section>
      <im-button disabled color="default">Disabled</im-button>
      <im-button disabled color="primary">Disabled</im-button>
      <im-button disabled color="success">Disabled</im-button>
      <im-button disabled color="error">Disabled</im-button>
      <im-button disabled color="warning">Disabled</im-button>
    </section>

    <section>
      <im-button disabled color="default" variant="outlined"
        >Disabled</im-button
      >
      <im-button disabled color="success" variant="outlined"
        >Disabled</im-button
      >
      <im-button disabled color="primary" variant="outlined"
        >Disabled</im-button
      >
      <im-button disabled color="error" variant="outlined">Disabled</im-button>
      <im-button disabled color="warning" variant="outlined"
        >Disabled</im-button
      >
    </section>

    <section>
      <im-button disabled color="default" variant="tonal">Disabled</im-button>
      <im-button disabled color="success" variant="tonal">Disabled</im-button>
      <im-button disabled color="primary" variant="tonal">Disabled</im-button>
      <im-button disabled color="error" variant="tonal">Disabled</im-button>
      <im-button disabled color="warning" variant="tonal">Disabled</im-button>
    </section>

    <section>
      <im-button disabled color="default" variant="text">Disabled</im-button>
      <im-button disabled color="success" variant="text">Disabled</im-button>
      <im-button disabled color="primary" variant="text">Disabled</im-button>
      <im-button disabled color="error" variant="text">Disabled</im-button>
      <im-button disabled color="warning" variant="text">Disabled</im-button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ImIconSearch } from '../packages/components';
</script>

<style scoped lang="scss">
.play {
  text-align: center;
  padding: 20px;

  section {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 12px;
  }
}
</style>
