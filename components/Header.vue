<template>
  <nav class="header">
    <div class="icon-menu">
      <a class="title" href="/">The Boring Game</a>

      <div class="menu">
        <a href="/">{{ $t("HomeMenu") }}</a>
        <a href="/collection">{{ $t("CollectionMenu") }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.header {
  @apply bg-white;
  @apply text-black;
  @apply p-5;
  @apply text-2xl;
  @apply flex;
  @apply justify-between;
  @apply items-center;
}
.header > .icon-menu {
  @apply flex;
  @apply items-center;
  @apply gap-10;
}

.header > .icon-menu > .menu {
  @apply hidden;
  @apply lg:flex;
  @apply flex-row;
  @apply gap-3;
  @apply text-xl;
}
</style>
