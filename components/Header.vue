<template>
  <nav class="header bg-primary">
    <div class="icon-menu">
      <a class="title" href="/">
        <img src="../assets/icon.png" alt="" width="50" />
        <span class="text-secondary">The Boring Games</span>
      </a>

      <div class="menu">
        <a href="/">{{ $t("HomeMenu") }}</a>
        <a href="/collection">{{ $t("CollectionMenu") }}</a>
      </div>
    </div>
    <div class="flex justify-center items-center gap-6">
      <label
        className="swap swap-rotate bg-secondary border-2 rounded-full p-3"
      >
        <input
          type="checkbox"
          value="dark"
          className=" theme-controller"
          :onchange="changeMode"
        />
        <font-awesome-icon
          icon="fas fa-sun"
          class="swap-on fill-current text-primary"
        />
        <font-awesome-icon
          icon="fas fa-moon"
          class="swap-off fill-current text-primary"
        />
      </label>

      <MenuDropdown
        classTitleButton="hidden lg:block"
        :iconFlag="selectedLang"
        :buttonSection="buttonActiveLang()"
        classButton="flex gap-3 items-center text-base bg-secondary text-white px-3 py-2"
      >
        <div
          v-for="(lang, index) in langList"
          :class="`flex gap-5 px-5 py-3 cursor-pointer items-center ${
            selectedLang === lang?.lang
              ? 'bg-[#2a323c] text-white rounded-sm'
              : 'text-black'
          }`"
          :key="index"
          :onclick="() => selectLang(lang)"
        >
          <country-flag
            class="h-96"
            :country="lang.icon"
            style="border: 1px solid black; margin-top: -10px"
          />
          <span>{{ lang.title }}</span>
        </div>
      </MenuDropdown>
    </div>
  </nav>
</template>

<script setup>
import MenuDropdown from "./MenuDropdown.vue";
const { locale, setLocale } = useI18n();

import { defineProps } from "vue";

const props = defineProps({
  changeMode: Function,
});

const selectedLang = ref("");
const langList = [
  { id: 1, title: "English", icon: "gb", lang: "gb" },
  { id: 2, title: "Indonesia", icon: "id", lang: "id" },
];

function selectLang(data) {
  setLocale(data?.lang || data?.value);
  selectedLang.value = data?.icon || data?.value;
}

function buttonActiveLang() {
  const langActive = langList.find((lang) => lang.lang === selectedLang.value);

  return langActive?.title;
}

function init() {
  selectLang(locale);
}

init();
</script>

<style scoped>
.header {
  @apply p-5;
  @apply px-3;
  @apply text-2xl;
  @apply flex;
  @apply justify-between;
  @apply items-center;
  @apply gap-5;
  @apply rounded-b-lg;
  @apply sticky;
  @apply lg:relative;
  @apply top-0;
  @apply z-10;
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
.header > .icon-menu > .menu > a {
  @apply text-secondary;
}
.header > .icon-menu > .title {
  @apply flex;
  @apply flex-row;
  @apply items-center;
  @apply gap-3;
  @apply font-bold;
  @apply bg-transparent;
  @apply lg:bg-blue-400;
  @apply text-black;
  @apply lg:text-white;
  @apply p-0;
  @apply lg:px-3;
  @apply lg:py-2;
  @apply rounded-lg;
  @apply text-base;
}
.header > .icon-menu > .title > img {
  @apply bg-white;
  @apply rounded-full;
}
</style>
