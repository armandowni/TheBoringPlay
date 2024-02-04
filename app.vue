<template>
  <div class="layout">
    <Header />
    <NuxtPage class="content" />
  </div>
</template>

<script setup lang="ts">
let load = false;
let page = "";
let breakpointSize = 0;

function checkDisplays() {}
function checkRouteName() {
  page = "test";
}
function doLoading() {
  // this.load = false;
  // setTimeout(() => {
  //   this.load = true;
  // }, 2000);
}
</script>

<style>
.content {
  @apply px-10;
  @apply py-10;
}
</style>
