<template>
  <div
    class="flex flex-col justify-center items-center gap-3 w-full text-primary"
  >
    <span class="text-4xl font-bold text-center">Flappy Duck</span>
    <div class="games">
      <div class="flex flex-col gap-3">
        <canvas id="gameCanvas" width="640" height="400"></canvas>
        <div class="flex" id="actions">
          <button
            class="bg-blue-500 rounded-lg px-3 py-2 w-full"
            v-if="berhenti"
            v-on:click="() => startGame()"
          >
            {{ $t("startBtn") }}
          </button>

          <div
            class="flex flex-col justify-center gap-5 w-full"
            v-else-if="!berhenti"
          >
            <button
              class="bg-blue-500 rounded-lg px-3 py-2 flex-1"
              :onclick="() => jump()"
            >
              {{ $t("jumpBtn") }}
            </button>
          </div>
        </div>
      </div>
      <div class="highscore w-full lg:w-[540px]">
        <Table :dataHeaders="header" :dataTable="highscore" />
      </div>
    </div>
  </div>
</template>

<script setup>
import fetchData from "~/util/fetchData";
import imageDuck from "~/assets/images/flappy_duck-removebg.png";

const header = [
  { name: "No", key: "no" },
  { name: "Players Name", key: "username" },
  { name: "Score", key: "score" },
];

// gameCanvas
const gameCanvas = () => document.getElementById("gameCanvas");
let frameNo = 0;
let interval = 0;
const myGameArea = {
  start: function (gameCanvas) {
    gameCanvas.width = 640;
    gameCanvas.height = 400;
    frameNo = 0;
    interval = null;

    return { width: gameCanvas.width, height: gameCanvas.height };
  },
  view: function (gameCanvas) {
    gameCanvas.width = 640;
    gameCanvas.height = 400;
    const context = gameCanvas.getContext("2d");
    context.filter = "grayscale(50)";
    frameNo = 0;
    interval = null;
    return { width: gameCanvas.width, height: gameCanvas.height };
  },
  clear: function (gameCanvas) {
    const context = gameCanvas.getContext("2d");
    context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  },
  stop: function () {
    clearInterval(interval);
  },
};
let myGamePiece = null;
let myObstacles = [];
let myScore = null;
const speedX = 0;
const speedY = 0;
const berhenti = ref(true);
const highscore = ref([]);
const items = ["Highscore Top 50"];
let tab = null;
let loadData = true;

async function getDataHighScore() {
  const result = await fetchData("/flappyDuckGames", "get");
  //   console.log(result);
  highscore.value = result;
}
async function addGamePlayed() {
  const result = await $fetch("/collectionGames", {
    method: "post",
    body: {
      name: "Flappy Duck",
    },
  });
  console.log("masuk sini",result);
}

function viewGame() {
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGamePiece = new component(50, 50, imageDuck, 10, 150, "image");
  myObstacles = [];
  myObstacles.push(new component(50, 160, "green", 500, 0));
  myObstacles.push(new component(50, 160, "green", 500, 250));

  // const canvas = gameCanvas();
  myGameArea.view(gameCanvas());
  const text = "SCORE: " + frameNo;
  myScore.update(text);
  myGamePiece.update();
  myObstacles[0].update();
  myObstacles[1].update();
}
function startGame() {
  myObstacles = [];
  myGameArea.start(gameCanvas());
  myObstacles.push(new component(50, 160, "green", 500, 0));
  myObstacles.push(new component(50, 160, "green", 500, 250));
  myObstacles[0].update();
  myObstacles[1].update();
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGamePiece = new component(50, 50, imageDuck, 10, 150, "image");
  berhenti.value = false;
  interval = setInterval(updateGameArea, 20);
  addGamePlayed();
}
function component(width, height, color, xTemp, yTemp, type) {
  const image = new Image();
  if (type == "image") {
    image.src = color;
  }

  let x = xTemp;
  let y = yTemp;
  let gravity = 0.05;
  let gravitySpeed = 0;
  const update = function (text, xUpdate, yUpdate) {
    x = xUpdate || x;
    y = yUpdate || y;
    const ctx = gameCanvas().getContext("2d");
    if (type == "text") {
      ctx.font = width + " " + height;
      ctx.fillStyle = color;
      ctx.fillText(text, x, y);
    } else if (type == "image") {
      ctx.drawImage(image, x, y, width, height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  };
  const newPos = function (gravityUpdate) {
    setTimeout(() => (gravity = 0.05), 1);
    gravity = gravityUpdate || gravity;
    gravitySpeed += gravity;
    x += speedX;
    y += speedY + gravitySpeed;
    hitBottom();
    hitTop();
  };
  const hitBottom = function () {
    const rockbottom = gameCanvas().height - height;
    if (y > rockbottom) {
      y = rockbottom;
      gravitySpeed = 0;
    }
  };
  const hitTop = function () {
    let top = 0;
    if (y < top) {
      y = top;
      gravitySpeed = -0.02;
    }
  };
  const crashWith = function (otherobj) {
    const myleft = x + 15;
    const myright = x + width - 10;
    const mytop = y + 15;
    const mybottom = y + height - 10;
    const otherleft = otherobj.x;
    const otherright = otherobj.x + otherobj.width;
    const othertop = otherobj.y;
    const otherbottom = otherobj.y + otherobj.height;

    const rockbottom = gameCanvas().height - height;
    const top = 0.4;
    if (y < top) return true;
    if (y >= rockbottom) return true;

    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    )
      return false;

    return true;
  };

  return { update, newPos, crashWith, x, y, width, height, gravity };
}

function updateGameArea() {
  let x, height, gap, minHeight, maxHeight, minGap, maxGap;
  for (let i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      addDataPlayer(frameNo);
      frameNo = 0;
      myGameArea.stop(gameCanvas());
      myGameArea.clear(gameCanvas());
      berhenti.value = true;
      const text = "SCORE: " + frameNo;
      myScore.update(text);
      viewGame();
      return;
    }
  }
  myGameArea.clear(gameCanvas());
  frameNo += 1;
  if (frameNo == 1 || everyinterval(150)) {
    x = gameCanvas().width;
    minHeight = 20;
    maxHeight = 200;
    height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    minGap = 50;
    maxGap = 200;
    gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new component(50, height, "green", x, 0));
    myObstacles.push(
      new component(50, x - height - gap, "green", x, height + gap)
    );
  }
  for (let i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -1;
    myObstacles[i].update("", myObstacles[i].x, myObstacles[i].y);
  }

  const text = "SCORE: " + frameNo;
  myScore.update(text);
  myGamePiece.newPos();
  myGamePiece.update();
}
function everyinterval(n) {
  if ((frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}
function jump() {
  myGamePiece.newPos(-1.5);
}

async function addDataPlayer(score) {
  if (confirm("Are you sure you want to save your highscore?")) {
    const nama = prompt("Enter your name: ");
    const addData = {
      name: nama,
      score: score,
    };
    // console.log(addData);
    await fetchData("/flappyDuckGames", "post", {}, addData)
      .then(() => {
        alert("Done Save, Thank you for playing");
        getDataHighScore();
      })
      .catch((err) => console.log(err));
  } else {
    alert("okay no problemo");
  }
}

onMounted(() => {
  viewGame();

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
