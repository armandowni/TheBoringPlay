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
          className="step step-primary text-primary !text-left"
          v-for="(data, index) in instructionGame"
          :key="index"
        >
          {{ $t(data.desc) }}
        </li>
      </ul>
    </Modal>
    <span class="text-4xl font-bold text-center">Canon Game</span>
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
import imageBird from "~/assets/images/bird1.png";
import { endGameIns, startGameIns } from "../../util/const";

const header = [
  { name: "No", key: "no" },
  { name: "Players Name", key: "username" },
  { name: "Score", key: "score" },
];

const instructionGame = [
  ...startGameIns,
  { desc: "insCanonGame1" },
  { desc: "insCanonGame2" },
  { desc: "insRepeatGame" },
  ...endGameIns,
];
const highscore = ref([]);
const isModalOpen = ref(false);
function openCloseModal() {
  if (isModalOpen.value) return (isModalOpen.value = false);
  else return (isModalOpen.value = true);
}

async function getDataHighScore() {
  const result = await fetchData("/canonGames", "get");
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
  // console.log("masuk sini",result);
}
// gameCanvas
const gameCanvas = () => document.getElementById("gameCanvas");

// hud
let ground = null;
let time = null;
let myScore = null;
let timer = null;

// boolean var
const berhenti = ref(true);
const tembak = ref(false);
const valueAngle = ref(0);
let Angle = true;
let score = 0;
let tembakan = null;

// character
let cannon = null;
let target = null;
let bullet = null;

const xBird = () => Math.floor(Math.random() * 200) + 200;
const yBird = () => Math.floor(Math.random() * 200) + 100;

let tab = null;
let items = ["Highscore Top 50"];
let waktu = 60;
// gameArea
let myGameArea = {
  start: function (gameCanvas) {
    gameCanvas.width = 640;
    gameCanvas.height = 400;
    const context = gameCanvas.getContext("2d");
    context.filter = "grayscale(0)";

    waktu = 60;
  },
  view: function (gameCanvas) {
    gameCanvas.width = 640;
    gameCanvas.height = 400;
    const context = gameCanvas.getContext("2d");
    context.filter = "grayscale(50)";
    waktu = 60;
  },
  clear: function (gameCanvas) {
    const context = gameCanvas.getContext("2d");
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  },
};

function viewGame() {
  const canvas = gameCanvas();
  myGameArea.view(canvas);
  Angle = true;
  utility();
  updateGameArea();
  clock();
}

function startGame() {
  if (timer != null) {
    clearInterval(timer);
  }
  Angle = false;
  berhenti.value = false;
  valueAngle.value = 0;
  tembak.value = false;
  score = 0;
  clearInterval(tembakan);
  utility();
  myGameArea.start(gameCanvas());
  clock();
  addGamePlayed();
}

// clock function
function clock() {
  if (berhenti.value == false) {
    timer = setInterval(function () {
      printClock(waktu);
      if (waktu == -1) {
        // console.log(waktu);
        berhenti.value = true;
        valueAngle.value = 0;
        addDataPlayer(score);
        score = 0;
        tembak.value = false;
        clearInterval(timer);
        viewGame();
        bullet.update();
      } else {
        waktu--;
      }
    }, 1000);
  } else {
    printClock(waktu);
  }
}
function printClock(second) {
  updateGameArea();
  time.update("Time: " + second);
}
// end clock

// view and add data player

async function addDataPlayer(score) {
  if (confirm("Are you sure you want to save your highscore?")) {
    const nama = prompt("Enter your name: ");

    const addData = {
      name: nama,
      score: score,
    };
    await fetchData("/canonGames", "post", {}, addData)
      .then(() => {
        alert("Done Save, Thank you for playing");
        getDataHighScore();
      })
      .catch((err) => console.log(err));
  } else {
    alert("okay no problemo");
  }
}
// end view and add data player

// make some character and hud in this function
function utility() {
  myScore = new componentScore(
    gameCanvas(),
    "20px",
    "Consolas",
    "black",
    280,
    40,
    "text"
  );
  ground = new component(gameCanvas(), 630, 100, "chocolate", 5, 350);
  time = new componentScore(
    gameCanvas(),
    "20px",
    "Consolas",
    "black",
    500,
    40,
    "text"
  );
  cannon = {
    ban: new component(gameCanvas(), 50, 10, "black", 15, 340),
    meriam: new componentCanon(gameCanvas(), 60, 20, "red", 40, 310),
    tiang: new component(gameCanvas(), 10, 30, "black", 30, 310),
  };

  target = new componentScore(
    gameCanvas(),
    50,
    50,
    imageBird,
    xBird(),
    yBird(),
    "image"
  );
  bullet = new componentBullet(
    gameCanvas(),
    10,
    10,
    "black",
    cannon.meriam.x,
    cannon.meriam.y
  );
}

// component
function component(Canvas, widthTemp, heightTemp, color, xTemp, yTemp) {
  let width = widthTemp;
  let height = heightTemp;
  let x = xTemp;
  let y = yTemp;

  const ctx = Canvas.getContext("2d");
  const update = function () {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    // ctx.lineWidth = 1
  };

  const clr = function () {
    ctx.clearRect(0, 0, width, height);
  };
  return { update, clr, x, y, width, height };
}
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
function componentCanon(gameCanvas, width, height, color, xTemp, yTemp) {
  // function for draw rect,circle,and many more
  let angle = 0;
  let x = xTemp;
  let y = yTemp;
  const ctx = gameCanvas.getContext("2d");
  const update = function (angletemp) {
    angle = angletemp;
    ctx.fillStyle = color;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((angletemp * 3.14) / 90);
    ctx.fillRect(width / -6, height / -2, width, height);
    ctx.lineWidth = 1;
    ctx.restore();
  };
  const calculateAngle = function (angleUpdate) {
    return (angleUpdate / 2) * -1;
  };
  const clr = function () {
    ctx.clearRect(x - 15, y - 66, 100, 80);
  };
  return { update, clr, calculateAngle, x, y, angle };
}
function componentBullet(gameCanvas, width, height, color, xTemp, yTemp) {
  // function for draw rect,circle,and many more

  const BulletSpeed = 8;
  const gravity = 0.14;
  let velocityY = -1;
  let x = xTemp;
  let y = yTemp;
  const radius = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
  const ctx = gameCanvas.getContext("2d");

  const update = function (xUpdate, yUpdate) {
    x = xUpdate || x;
    y = yUpdate || y;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.save();
    ctx.rotate((0 * 3.14) / 90);
    ctx.arc(x, y, 8, 0, 2 * 3.14);
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.restore();
  };

  const clr = function () {
    ctx.clearRect(x - 5, y - 5, 10, 10);
  };
  return {
    update,
    clr,
    x,
    y,
    width,
    height,
    BulletSpeed,
    radius,
    gravity,
    velocityY,
  };
}

// end component

// updateGameArea
function updateGameArea() {
  myGameArea.clear(gameCanvas());
  const text = "SCORE: " + score;
  myScore.update(text);
  ground.update();
  target.update();
  printCannonChar(cannon.meriam.calculateAngle(valueAngle.value));
  bullet.update();
}
// endUpdateArea

//  score

// cannon function
function printCannonChar(angle) {
  cannon.ban.update();
  cannon.tiang.update();
  cannon.meriam.update(angle);
}

function updateCanon() {
  const degree = valueAngle.value;
  cannon.meriam.clr();
  const angleCannon = cannon.meriam.calculateAngle(degree);
  printCannonChar(angleCannon);
  bullet.update(cannon.meriam.x, cannon.meriam.y);
}
// end cannon function

// peluru function

function fire() {
  tembak.value = true;
  Angle = true;
  peluru();
}

function isCollision(obj1, obj2) {
  return (
    obj1.x - obj1.radius >= obj2.x &&
    obj1.x + obj1.radius <= obj2.x + obj2.width &&
    obj1.y - obj1.radius >= obj2.y &&
    obj1.y + obj1.radius <= obj2.y + obj2.height
  );
}

function peluru() {
  // console.log(target.x, target.y);
  if (tembak.value == false) {
    bullet.x = 80;
    bullet.update();
  } else {
    tembakan = setInterval(function () {
      let crash = true;
      if (!isCollision(bullet, target)) {
        crash = false;
      }
      if (bullet.x >= 640 || bullet.y >= ground.y - 10 || bullet.y <= 0) {
        bullet.x = cannon.meriam.x;
        bullet.y = cannon.meriam.y;
        bullet.velocityY = -1;
        tembak.value = false;
        Angle = false;
        bullet.update(cannon.meriam.x, bullet.y);
        clearInterval(tembakan);
      } else if (crash == true) {
        bullet.x = cannon.meriam.x;
        bullet.y = cannon.meriam.y;
        bullet.velocityY = -1;
        tembak.value = false;
        score += 100;
        Angle = false;
        target = target.update("", xBird(), yBird());
        bullet.update(bullet.x, bullet.y);
        myScore.update(score);
        clearInterval(tembakan);
      } else {
        bullet.clr();
        const rotation =
          (cannon.meriam.calculateAngle(valueAngle.value) * 3.14) / 90;
        bullet.x += Math.cos(rotation) * bullet.BulletSpeed;
        bullet.y += Math.sin(rotation) * bullet.BulletSpeed;

        bullet.y += bullet.velocityY;
        bullet.velocityY += bullet.gravity;

        bullet.update(bullet.x, bullet.y);
      }
    }, 40);
  }
}
// end peluru

onMounted(() => {
  // viewGame();
  // getDataHighScore();
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
