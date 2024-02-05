<template>
  <div
    class="flex flex-col justify-center items-center gap-3 w-full text-white"
  >
    <span class="text-4xl text-center">Canon Game</span>
    <div class="games">
      <canvas></canvas>
      <div class="highscore">
        <Table :dataHeaders="header" :dataTable="highscore" />
      </div>
    </div>
  </div>
</template>

<script setup>
import fetchData from "~/util/fetchData";

const header = [
  { name: "No", key: "no" },
  { name: "Players Name", key: "username" },
  { name: "Score", key: "score" },
];
const highscore = ref([]);

async function getDataHighScore() {
  const result = await fetchData("/canonGames", "get");
  //   console.log(result);
  highscore.value = result;
}

function initPages() {
  getDataHighScore();
}

initPages();
</script>
<style scoped>
.games {
  @apply flex;
  @apply w-full;
  @apply justify-between;
  @apply gap-3;
  @apply bg-white;
  @apply p-5;
  @apply rounded-lg;
}
</style>
