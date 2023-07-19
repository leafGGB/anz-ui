<template>
  <div style="margin-bottom: 20px">
    <anz-button>普通按钮</anz-button>
    <anz-button color="blue">主要按钮</anz-button>
    <anz-button color="green">成功按钮</anz-button>
    <anz-button color="yellow">警告按钮</anz-button>
    <anz-button color="red">失败按钮</anz-button>
  </div>
  <div style="margin-bottom: 20px">
    <anz-button color="blue" plain>朴素按钮</anz-button>
    <anz-button color="green" plain>绿色按钮</anz-button>
    <anz-button color="gray" plain>灰色按钮</anz-button>
    <anz-button color="yellow" plain>黄色按钮</anz-button>
    <anz-button color="red" plain>红色按钮</anz-button>
  </div>
  <div style="margin-bottom: 20px">
    <anz-button size="small" plain>小按钮</anz-button>
    <anz-button size="medium" plain>中按钮</anz-button>
    <anz-button size="large" plain>大按钮</anz-button>
  </div>
  <div style="margin-bottom: 20px">
    <anz-button color="blue" round plain icon="search">搜索按钮</anz-button>
    <anz-button color="green" round plain icon="edit">编辑按钮</anz-button>
    <anz-button color="gray" round plain icon="check">成功按钮</anz-button>
    <anz-button color="yellow" round plain icon="message">提示按钮</anz-button>
    <anz-button color="red" round plain icon="delete">删除按钮</anz-button>
  </div>
  <div style="margin-bottom: 20px">
    <anz-button color="blue" round plain icon="search"></anz-button>
    <anz-button color="green" round plain icon="edit"></anz-button>
    <anz-button color="gray" round plain icon="check"></anz-button>
    <anz-button color="yellow" round plain icon="message"></anz-button>
    <anz-Button color="red" round plain icon="delete"></anz-Button>
  </div>
</template>

<script lang="ts" setup>
import AnzButton from "./index";
</script>
