# Button 按钮

## 基础用法

基础用法

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <anz-button>普通按钮</anz-button>
    <anz-button color="blue">主要按钮</anz-button>
    <anz-button color="green">成功按钮</anz-button>
    <anz-button color="yellow">警告按钮</anz-button>
    <anz-button color="red">失败按钮</anz-button>
  </div>
  <div style="margin-bottom:20px;">
    <anz-button round>普通按钮</anz-button>
    <anz-button color="blue" round>主要按钮</anz-button>
    <anz-button color="green" round>成功按钮</anz-button>
    <anz-button color="yellow" round>警告按钮</anz-button>
    <anz-button color="red" round>失败按钮</anz-button>
  </div>
</template>
```

:::

## 朴素按钮

通过 plain 属性将按钮设置为朴素按钮

:::demo

```vue
<template>
  <div style="margin-bottom:20px;">
    <anz-button plain>普通按钮</anz-button>
    <anz-button color="blue" plain>主要按钮</anz-button>
    <anz-button color="green" plain>绿色按钮</anz-button>
    <anz-button color="yellow" plain>警告按钮</anz-button>
    <anz-button color="red" plain>失败按钮</anz-button>
  </div>
</template>
```

:::

## 大按钮

通过 small、medium、large 属性设置按钮的大小

:::demo

```vue
<template>
  <div style="margin-bottom: 20px">
    <anz-button size="small" plain>小按钮</anz-button>
    <anz-button size="medium" plain>中按钮</anz-button>
    <anz-button size="large" plain>大按钮</anz-button>
  </div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-button icon="edit" plain></anz-button>
    <anz-button icon="delete" plain></anz-button>
    <anz-button icon="share" plain></anz-button>
    <anz-button icon="apple" plain></anz-button>
    <anz-button round plain icon="search">搜索</anz-button>
  </div>
</template>
```

:::
