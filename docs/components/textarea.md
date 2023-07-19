# Textarea 文本域

## 基本使用

color 属性可以改变开关的颜色
:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-textarea placeholder="请输入内容" width="500" height="120" size="25" />
  </div>
</template>
```

:::

## 自定义最大字数

设置 maxLength 属性来限制文本域最多输入的字数
:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-textarea
      placeholder="请输入内容"
      width="500"
      height="120"
      size="25"
      maxLength="10"
    />
  </div>
</template>
```

:::

## 禁用状态

设置 disabled 禁用文本域
:::demo

```vue
<template>
  <anz-textarea
    placeholder="请输入内容"
    width="500"
    height="150"
    size="25"
    disabled
  />
</template>
```

:::
