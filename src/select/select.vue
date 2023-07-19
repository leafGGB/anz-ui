<template>
  <div style="margin-bottom: 20px">
    <anz-select :list="array" title="水果列表" />
    <anz-select :list="array" title="水果列表" disabled="disabled" />
  </div>
</template>

<script setup>
import AnzSelect from "./index";
const array = ["apple", "banana", "orange"];
</script>
