<template>
  <html :data-theme="modeView">
    <div class="layout">
      <Header :changeMode="changeModeView" :mode="modeView" />
      <div class="content">
        <NuxtPage />
      </div>
      <div class="bottomBar">
        <div class="menu">
          <a href="/">
            <font-awesome-icon icon="fas fa-home" class="icon-card" />
            {{ $t("HomeMenu") }}
          </a>
          <a href="/collection">
            <font-awesome-icon icon="fas fa-bars" class="icon-card" />
            {{ $t("CollectionMenu") }}
          </a>
        </div>
      </div>
    </div>
  </html>
</template>

<script setup>
const modeView = ref("dark");

const changeModeView = () => {
  // console.log(e);
  if (modeView.value === "dark") modeView.value = "light";
  else modeView.value = "dark";
  localStorage.setItem("mode-view", modeView.value);
};

onMounted(() => {
  const mode = localStorage.getItem("mode-view");
  // console.log(mode);
  if (mode) return (modeView.value = mode);
});
</script>

<style>
.content {
  @apply px-10;
  @apply py-10;
}
.title-page::first-letter {
  @apply uppercase;
}

.bottomBar {
  @apply block;
  @apply lg:hidden;
  @apply sticky;
  @apply w-full;
  @apply bottom-0;
  @apply bg-primary;
  @apply text-secondary;
  @apply rounded-t-lg;
  @apply py-2;
}
.bottomBar > .menu {
  @apply flex;
  @apply flex-row;
  @apply justify-around;
  @apply items-center;
}
.bottomBar > .menu > a {
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
  @apply gap-1;
  @apply text-xl;
}
</style>
