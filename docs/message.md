# Message 消息提示

需要给用户及时反馈时

## 基础使用

引入 `useImMessage` 方法内部支持 `info` `success` `error` `warning` 四个方法调用

<script setup>
import { useImMessage } from 'im-design'

const { info,error,success,warning } = useImMessage()
console.log('useImMessage', useImMessage())
</script>

<ImButton @click="info('这是一个提示消息！')">提示消息</ImButton>

```vue
<template>
  <ImButton @click="info('这是一个提示消息！')">提示消息</ImButton>
</template>
<script setup>
import { useImMessage } from 'im-design';

const { info } = useImMessage();
</script>
```

## 其他

<ImButton @click="error('这是一个提示消息！')" color="error">提示消息</ImButton>
<ImButton @click="success('这是一个提示消息！')" color="success">提示消息</ImButton>
<ImButton @click="warning('这是一个提示消息！')" color="warning">提示消息</ImButton>
