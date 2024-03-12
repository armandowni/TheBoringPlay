<template>
  <div
    class="flex flex-col justify-center items-center gap-3 w-full text-primary"
  >
    <Modal
      :title="$t('instruction')"
      :isDialog="isModalOpen"
      :closeModal="openCloseModal"
    >
      <ul className="steps steps-vertical">
        <li
          className="step !text-left"
          v-for="(data, index) in instructionGame"
          :key="index"
        >
          {{ $t(data.desc) }}
        </li>
      </ul>
    </Modal>
    <span class="text-4xl font-bold text-center">Snake Game</span>
    <div class="games">
      <div class="flex flex-col gap-3">
        <button
          class="bg-blue-500 text-white rounded-lg px-3 py-2 w-full lg:w-52 flex justify-center items-center gap-3"
          :onclick="openCloseModal"
        >
          <font-awesome-icon :icon="'fas fa-circle-info'" class="" />
          {{ $t("instruction") }}
        </button>
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
            <div class="flex flex-col justify-center items-center gap-4">
              <button
                class="text-white w-10 h-10 bg-blue-500 rounded-lg"
                :onclick="button.up"
              >
                <font-awesome-icon icon="fas fa-arrow-up" />
              </button>
              <div class="flex justify-center items-center gap-16">
                <button
                  class="text-white w-10 h-10 bg-blue-500 rounded-lg"
                  :onclick="button.left"
                >
                  <font-awesome-icon icon="fas fa-arrow-left" />
                </button>
                <button
                  class="text-white w-10 h-10 bg-blue-500 rounded-lg"
                  :onclick="button.right"
                >
                  <font-awesome-icon icon="fas fa-arrow-right" />
                </button>
              </div>
              <button
                class="text-white w-10 h-10 bg-blue-500 rounded-lg"
                :onclick="button.down"
              >
                <font-awesome-icon icon="fas fa-arrow-down" />
              </button>
            </div>
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
import { endGameIns, startGameIns } from "~/util/const";
import fetchData from "~/util/fetchData";

const header = [
  { name: "No", key: "no" },
  { name: "Players Name", key: "username" },
  { name: "Score", key: "score" },
];
const isModalOpen = ref(false);
function openCloseModal() {
  if (isModalOpen.value) return (isModalOpen.value = false);
  else return (isModalOpen.value = true);
}
const instructionGame = [
  ...startGameIns,
  { desc: "insSnakeGame1" },
  { desc: "insSnakeGame2" },
  { desc: "insRepeatGame" },
  ...endGameIns,
];
const highscore = ref([]);
const berhenti = ref(true);
let waktu = 60;

async function getDataHighScore() {
  const result = await fetchData("/snakeGames", "get");
  // console.log(result);
  highscore.value = result;
}
async function addGamePlayed() {
  const result = await $fetch("/collectionGames", {
    method: "post",
    body: {
      name: "Snake Game",
    },
  });
}

const canvas = () => document.getElementById("gameCanvas");
const scale = 15;
const gameArea = {
  view: function () {
    canvas().width = 640;
    canvas().height = 400;
    const context = canvas().getContext("2d");
    context.filter = "grayscale(50)";
    waktu = 60;
    printClock(waktu);
  },
  clear: function () {
    const context = canvas().getContext("2d");
    context.clearRect(0, 0, canvas().width, canvas().height);
  },
};

let snake;
let fruit;
let time;
let score;
function viewGame() {
  gameArea.view();
  snake = new Snake();
  snake.update();
  snake.draw();
  time = new componentScore(
    canvas(),
    "20px",
    "Consolas",
    "black",
    500,
    40,
    "text"
  );
  printClock(waktu);
  score = new componentScore(
    canvas(),
    "20px",
    "Consolas",
    "black",
    400,
    40,
    "text"
  );
  printScore(0);
}

function startGame() {
  addGamePlayed();
  snake = new Snake();
  fruit = new Fruit();
  berhenti.value = false;
  fruit.pickLocation();

  const timeInterval = window.setInterval(() => {
    waktu--;
  }, 1000);

  const gameInterval = window.setInterval(() => {
    gameArea.clear();
    printClock(waktu);
    printScore(snake.total);

    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
      snake.draw();
    }

    if (waktu < 0 || snake.checkCollision()) {
      addDataPlayer(snake.total);
      viewGame();
      berhenti.value = true;
      clearInterval(timeInterval);
      clearInterval(gameInterval);
      return;
    }
  }, 200);
}

function printClock(second) {
  time?.update("Time: " + second);
}
function printScore(scoreVal) {
  score?.update("Score: " + scoreVal);
}

class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
  }

  draw() {
    const ctx = canvas().getContext("2d");
    ctx.fillStyle = "#000000";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x >= canvas().width) {
      this.x = 0;
    }
    if (this.y >= canvas().height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = canvas().width - scale;
    }
    if (this.y < 0) {
      this.y = canvas().height - scale;
    }
  }

  eat(fruit) {
    if (this.x === fruit.x && this.y === fruit.y) {
      this.total++;
      return true;
    }
    return false;
  }

  checkCollision() {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.tail = [];

        return true;
      }
    }
  }
}

class Fruit {
  constructor() {
    this.x;
    this.y;
  }

  pickLocation() {
    const rows = canvas()?.height / scale;
    const columns = canvas()?.width / scale;
    this.x = Math.floor(Math.random() * columns) * scale;
    this.y = Math.floor(Math.random() * rows) * scale;
  }

  draw() {
    console.log(this.x, this.y);
    const ctx = canvas().getContext("2d");
    ctx.fillStyle = "#008000";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}

const button = {
  up: () => {
    if (snake.ySpeed !== scale * 1) {
      snake.xSpeed = 0;
      snake.ySpeed = -scale * 1;
    }
  },
  down: () => {
    if (snake.ySpeed !== -scale * 1) {
      snake.xSpeed = 0;
      snake.ySpeed = scale * 1;
    }
  },
  left: () => {
    if (snake.xSpeed !== scale * 1) {
      snake.xSpeed = -scale * 1;
      snake.ySpeed = 0;
    }
  },
  right: () => {
    if (snake.xSpeed !== -scale * 1) {
      snake.xSpeed = scale * 1;
      snake.ySpeed = 0;
    }
  },
};

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      button.up();
      break;
    case "s":
      button.down();
      break;
    case "a":
      button.left();
      break;
    case "d":
      button.right();
      break;
  }
});

function componentScore(Canvas, width, height, color, xTemp, yTemp, type) {
  const image = new Image();
  if (type == "image") {
    image.src = color;
  }
  const ctx = Canvas.getContext("2d");
  let x = xTemp;
  let y = yTemp;
  const radius = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));

  const update = function (text, xUpdate, yUpdate) {
    x = xUpdate || x;
    y = yUpdate || y;
    if (type == "text") {
      ctx.font = width + " " + height;
      ctx.fillStyle = color;
      ctx.fillText(text, x, y);
    } else if (type == "image") {
      // console.log("new x :", x);
      ctx.drawImage(image, x, y, width, height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }

    return { update, clr, text: "", x, y, width, height, radius };
  };

  const clr = function () {
    ctx.clearRect(247, 180, 115, 30);
  };
  return { update, clr, text: "", x, y, width, height, radius };
}
async function addDataPlayer(score) {
  if (confirm("Are you sure you want to save your highscore?")) {
    const nama = prompt("Enter your name: ");

    const addData = {
      name: nama,
      score: score,
    };
    await $fetch("/snakeGames", {
      method: "post",
      body: addData,
    })
      .then(async () => await getDataHighScore())
      .catch((error) => console.log(error));
  } else {
    alert("okay no problemo");
  }
}

onMounted(() => {
  getDataHighScore();
  viewGame();
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
  @apply bg-orange-600;
  background-size: 100% 100%;
  border: 1px solid black;
  @apply rounded-lg;
}
</style>
