# Switch 开关

## 普通开关

color 属性可以改变开关的颜色
:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-switch size="small" />
    <anz-switch size="small" color="green" />
    <anz-switch size="small" color="red" />
    <anz-switch size="small" color="wathet" />
  </div>
</template>
```

:::

## 不同尺寸

使用 small、medium、large 控制开关的大小
:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-switch size="small" />
    <anz-switch size="medium" />
    <anz-switch size="large" />
  </div>
</template>
```

:::

## 其他颜色

其他样式的开关
:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-switch size="medium" color="RainyAshville" />
    <anz-switch size="medium" color="SunnyMorning" />
    <anz-switch size="medium" color="DustyGrass" />
    <anz-switch size="medium" color="MorpheusDen" />
    <anz-switch size="medium" color="ItmeoBranding" />
    <anz-switch size="medium" color="StarWine" />
    <anz-switch size="medium" color="ShyRainbow" />
    <anz-switch size="medium" color="NewYork" />
  </div>
</template>
```

:::

## 选中状态

使用 checked 默认选中
:::demo

```vue
<template>
  <anz-switch size="medium" checked />
</template>
```

:::

## 禁用状态

使用 disabled 来开启禁用状态
:::demo

```vue
<template>
  <div class="flex flex-row">
    <anz-switch size="medium" disabled />
  </div>
</template>
```

:::
