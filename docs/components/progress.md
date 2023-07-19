# Progress 进度条

## 基本使用

percentage 属性表示进度条对应的百分比，取值范围在 0-100 范围内。
color 属性可以配置不同的进度条样式，展示不同的颜色状态
:::demo

```vue
<template>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="blue" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="red" percentage="10" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="green" percentage="20" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="orange" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="gray" percentage="70" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="black" percentage="90" />
  </div>
</template>
```

:::

## 自定义高度

height 属性可配置进度条的高度
:::demo

```vue
<template>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="blue" percentage="10" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="40" color="red" percentage="40" />
  </div>
</template>
```

:::

## 渐变背景

还可以设置背景颜色为渐变
:::demo

```vue
<template>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="WarmFlame" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="NightFade" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="YoungPassion" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="SunnyMorning" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="FrozenDreams" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="DeepBlue" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="SharpeyeEagle" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="NewYork" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="OldHat" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="Rainbow" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="Rainbow" percentage="50" />
  </div>
  <div style="margin-bottom: 20px">
    <anz-progress height="20" color="RichMetal" percentage="50" />
  </div>
</template>
```

:::
