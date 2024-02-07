<template>
  <div class="flex flex-col justify-center items-center text-primary">
    <span class="text-4xl font-bold text-center">{{
      $t("CollectionMenu")
    }}</span>
    <div class="collectionGames">
      <div
        class="collectionGames-card"
        v-for="(game, index) in collectionGames"
        :key="index"
      >
        <img
          class="w-full h-full bg-white"
          :src="game.gameImage"
          alt=""
          style="object-fit: cover"
        />
        <div class="buttonPlay">
          <span>
            {{ game.gameName }}
          </span>
          <a
            :href="game.gameUrl"
            class="bg-white px-3 py-5 text-black rounded-lg text-sm"
            v-if="!game?.gameName?.includes('coming')"
          >
            Play Now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import fetchData from "~/util/fetchData";

const collectionGames = ref([]);

async function getDataCollection() {
  const result = await fetchData("/collectionGames", "get");
  collectionGames.value = result?.Data;
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
  @apply relative;
  @apply h-52;
  @apply duration-300;
  @apply hover:w-64;
  @apply hover:h-64;
  @apply border-2;
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
.collectionGames > .collectionGames-card:hover > img {
  @apply opacity-50;
}
.collectionGames > .collectionGames-card > .buttonPlay {
  @apply invisible;
  @apply flex;
  @apply flex-col;
  @apply gap-3;
  @apply items-center;
  @apply justify-center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.collectionGames > .collectionGames-card:hover > .buttonPlay {
  @apply visible;
  @apply text-white;
}
</style>
