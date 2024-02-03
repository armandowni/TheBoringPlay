<template>
  <div class="home">
    <div class="landingSection">
      <div class="title">
        <span>{{ $t("HomeTitle") }}</span>
        <span class="text-base font-normal">{{ $t("HomeDesc") }}</span>
        <a href="/collection">
          <font-awesome-icon icon="fas fa-arrow-right" class="cursor-pointer" />
          {{ $t("BtnCollection") }}
        </a>
      </div>
      <img src="../assets//landing_page.png" alt="Cannot Reload" />
    </div>

    <div class="aboutSection">
      <h1>{{ $t("AboutUsTitle") }}</h1>
      <div class="about-us-list">
        <div
          class="about-us-card"
          v-for="(data, index) in aboutus"
          v-bind:key="index"
        >
          <div class="icon">
            <font-awesome-icon :icon="data?.icon" class="icon-card" />
          </div>
          <span class="desc">{{ $t(data?.about) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const aboutus = [
  {
    icon: "fas fa-gamepad",
    about: "aboutus.1",
  },
  {
    icon: "fas fa-laptop-code",
    about: "aboutus.2",
  },
  {
    icon: "fas fa-users",
    about: "aboutus.3",
  },
];
</script>

<style>
.home > .landingSection {
  @apply flex;
  @apply flex-col;
  @apply lg:flex-row;
  @apply justify-between;
  @apply items-center;
}
.home > .landingSection > .title {
  @apply text-4xl;
  @apply flex;
  @apply flex-col;
  @apply font-bold;
  @apply gap-1;
  @apply w-full;
  @apply lg:max-w-[600px];
  @apply text-center;
  @apply lg:text-left;
}
.home > .landingSection > .title > a {
  @apply flex;
  @apply flex-row-reverse;
  @apply justify-center;
  @apply items-center;
  @apply gap-3;
  @apply bg-white;
  @apply text-black;
  @apply rounded-xl;
  @apply text-center;
  @apply my-5;
  @apply w-full;
  @apply lg:max-w-64;
  @apply py-2;
  @apply cursor-pointer;
}
.home > .aboutSection {
  @apply bg-white;
  @apply rounded-lg;
  @apply p-5;
  @apply text-black;
}
.home > .aboutSection > h1 {
  @apply text-4xl;
  @apply font-bold;
  @apply text-center;
  @apply lg:text-left;
}
.home > .aboutSection > .about-us-list {
  @apply flex;
  @apply flex-col;
  @apply lg:flex-row;
  @apply gap-5;
  @apply py-5;
}
.home > .aboutSection > .about-us-list > .about-us-card {
  @apply flex;
  @apply items-center;
  @apply gap-5;
  @apply flex-row;
  @apply border-2;
  @apply rounded-xl;
}
.home > .aboutSection > .about-us-list > .about-us-card > .icon {
  @apply bg-blue-500;
  @apply h-80;
  @apply px-3;
  @apply flex;
  @apply rounded-l-lg;
  @apply justify-center;
  @apply items-center;
}
.home > .aboutSection > .about-us-list > .about-us-card > .icon > .icon-card {
  @apply cursor-pointer;
  @apply text-5xl;
}
</style>
