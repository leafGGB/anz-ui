# 角标

## 基本使用

color 属性可以配置角标的主题

:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-badge type="info" value="10" color="blue">哈哈哈</anz-badge>
    <anz-badge type="info" value="10" color="green">哈哈哈</anz-badge>
    <anz-badge type="info" value="10" color="yellow">哈哈哈</anz-badge>
    <anz-badge type="info" value="10" color="red">哈哈哈</anz-badge>
  </div>
</template>
```

:::

## 最大值

超过最大值则显示 99+

:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-badge type="info" value="100" color="blue">哈哈哈</anz-badge>
    <anz-badge type="info" value="100" color="green">哈哈哈</anz-badge>
    <anz-badge type="info" value="100" color="yellow">哈哈哈</anz-badge>
    <anz-badge type="info" value="100" color="red">哈哈哈</anz-badge>
  </div>
</template>
```

:::

## 小红点

设置 type 属性为 dor，展示为一个点

:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-badge type="dor">哈哈哈</anz-badge>
  </div>
</template>
```

:::
