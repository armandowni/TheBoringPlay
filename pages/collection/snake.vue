<template>
  <div
    class="flex flex-col justify-center items-center gap-3 w-full text-primary"
  >
    <span class="text-4xl font-bold text-center">Snake Game</span>
    <div class="games">
      <div class="flex flex-col gap-3">
        <canvas id="gameCanvas" width="640" height="400"></canvas>
        <div class="flex" id="actions">
          <button
            class="bg-blue-500 text-white rounded-lg px-3 py-2 w-full"
            v-if="berhenti"
            v-on:click="() => startGame()"
          >
            {{ $t("startBtn") }}
          </button>

          <div
            class="flex flex-col justify-center gap-5 w-full"
            v-else-if="!berhenti"
          >
            <div class="flex gap-5 items-center">
              <input
                type="range"
                min="0"
                max="90"
                v-model="valueAngle"
                :onchange="() => updateCanon()"
                class="range range-secondary range-md"
                :disabled="tembak"
              />
              <input
                type="number"
                min="0"
                max="90"
                v-model="valueAngle"
                :disabled="tembak"
                :onchange="() => updateCanon()"
                class="px-5 text-center bg-white text-black border-2 rounded-lg border-black"
              />
            </div>
            <button
              class="bg-blue-500 text-white rounded-lg px-3 py-2 flex-1 disabled:bg-gray-400 disabled:text-black disabled:cursor-not-allowed"
              :onclick="() => fire()"
              :disabled="tembak"
            >
              {{ $t("fireBtn") }}
            </button>
            <button
              class="bg-blue-500 text-white rounded-lg px-3 py-2 flex-1 disabled:bg-gray-400 disabled:text-black disabled:cursor-not-allowed"
              :onclick="() => startGame()"
            >
              {{ $t("restartBtn") }}
            </button>
          </div>
        </div>
      </div>
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
  const result = await fetchData("/snake", "get");
  //   console.log(result);
  highscore.value = result;
}
async function addGamePlayed() {
  const result = await $fetch("/collectionGames", {
    method: "post",
    body: {
      name: "Canon Game",
    },
  });
}
onMounted(() => {
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
  @apply gap-10;
  @apply bg-primary;
  @apply p-5;
  @apply rounded-lg;
  @apply h-full;
  @apply lg:max-h-[640px];
}
.games > .highscore {
  @apply overflow-scroll;
}
#gameCanvas {
  @apply w-full;
  max-height: 640px;
  background-image: url("~/assets/images/download.png");
  background-size: 100% 100%;
  border: 1px solid black;
  @apply rounded-lg;
}
</style>
