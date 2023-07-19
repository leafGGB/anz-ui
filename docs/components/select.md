# Select 下拉列表

## 基本使用

传入一个数组即可展示列表
title 属性可以自定义列表的标题
:::demo

```vue
<template>
  <div style="margin-bottom: 20px">
    <anz-select :list="array" title="水果列表">哈哈哈</anz-select>
  </div>
</template>

<script setup>
const array = ["apple", "banana", "orange"];
</script>
```

:::

## 禁用状态

disabled 属性可以禁用下拉菜单
:::demo

```vue
<template>
  <div style="margin-bottom: 20px">
    <anz-select :list="array" title="水果列表" disabled="disabled" />
  </div>
</template>

<script setup>
const array = ["apple", "banana", "orange"];
</script>
```

:::
