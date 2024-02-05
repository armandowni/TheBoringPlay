<template>
  <nav class="header">
    <div class="icon-menu">
      <a class="title" href="/">
        <img src="../assets/icon.png" alt="" width="50" />
        <span>The Boring Game</span>
      </a>

      <div class="menu">
        <a href="/">{{ $t("HomeMenu") }}</a>
        <a href="/collection">{{ $t("CollectionMenu") }}</a>
      </div>
    </div>
    <MenuDropdown
      :iconFlag="selectedLang"
      :buttonSection="buttonActiveLang()"
      classButton="flex gap-3 items-center text-base bg-gray-800 text-white px-3 py-2"
    >
      <div
        v-for="(lang, index) in langList"
        :class="`flex gap-5 px-5 py-3 cursor-pointer items-center ${
          selectedLang === lang?.lang
            ? 'bg-gray-800 text-white rounded-sm'
            : null
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
  </nav>
</template>

<script setup>
import MenuDropdown from "./MenuDropdown.vue";
const { locale, setLocale } = useI18n();

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
  @apply bg-white;
  @apply text-black;
  @apply p-5;
  @apply px-3;
  @apply text-2xl;
  @apply flex;
  @apply justify-between;
  @apply items-center;
  @apply gap-5;
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
