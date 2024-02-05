<template>
  <div
    class="flex flex-col justify-center items-center gap-3 w-full text-white"
  >
    <span class="text-4xl font-bold text-center">Flappy Duck</span>
    <div class="games">
      <div class="flex flex-col">
        <canvas id="gameCanvas" width="100"></canvas>
        <div class="flex" id="actions">
          <button class="bg-blue-500 text-black rounded-lg px-3 py-2"> Start Game</button>
        </div>
      </div>
      <div class="highscore w-[350px] lg:w-full">
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

async function getDataHighScore() {
  const result = await fetchData("/flappyDuckGames", "get");
  //   console.log(result);
  highscore.value = result;
}

onMounted(() => {
  // viewGame();

  getDataHighScore();
});
</script>
<style scoped>
.games {
  @apply flex;
  @apply flex-col;
  @apply lg:flex-row;
  @apply w-full;
  @apply justify-between;
  @apply gap-3;
  @apply bg-white;
  @apply p-5;
  @apply rounded-lg;
}
</style>
