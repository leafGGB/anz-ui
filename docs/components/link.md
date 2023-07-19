# Link 链接

## 普通链接

:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-link href="#" color="blue">这是一个超链接</anz-link>
  </div>
</template>
```

:::

## 禁用状态

使用 disabled 来开启禁用状态

:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-link disabled href="#" color="blue">这是一个超链接</anz-link>
  </div>
</template>
```

:::

## 不同大小

设置 size 属性改变超链接的大小

:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-link disabled href="#" color="blue">这是一个超链接</anz-link>
    <anz-link disabled href="#" color="blue" size="2xl"
      >这是一个超链接</anz-link
    >
    <anz-link disabled href="#" color="blue" size="3xl"
      >这是一个超链接</anz-link
    >
  </div>
</template>
```

:::
