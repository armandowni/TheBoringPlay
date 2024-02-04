<template>
  <div class="flex flex-col justify-center items-center text-white">
    <span class="text-4xl text-center">{{ $t("CollectionMenu") }}</span>
    <div class="collectionGames">
      <div
        class="collectionGames-card"
        v-for="(game, index) in collectionGames"
        :key="index"
        v-bind:style="{
          background:
            'url(' + loadBgImage(game.gameImage) + ') no-repeat center',
          backgroundSize: 'cover',
          backgroundColor: 'white',
        }"
      >
        <!-- {{ game.gameName }} -->
      </div>
    </div>
  </div>
</template>

<script setup>
import url from "@/assets/images/comingsoon.png";
import fetchData from "~/util/fetchData";

const collectionGames = ref([]);

async function getDataCollection() {
  const result = await fetchData("/collectionGames", "get");
  collectionGames.value = result?.Data;
}
function loadBgImage(params) {
  console.log(url);
  return "~/assets/images/" + params;
}
function initPages() {
  getDataCollection();
}

initPages();
</script>
<style>
.collectionGames {
  @apply flex;
  @apply flex-col;
  @apply lg:flex-row;
  @apply gap-5;
  @apply py-5;
}
.collectionGames > .collectionGames-card {
  @apply w-52;
  @apply h-52;
  @apply duration-300;
  @apply hover:w-64;
  @apply hover:h-64;
  @apply border-2;
  @apply bg-auto;
  @apply rounded-xl;
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
  @apply cursor-pointer;
  @apply text-xl;
  @apply hover:text-4xl;
  @apply text-black;
  @apply font-bold;
}
</style>
