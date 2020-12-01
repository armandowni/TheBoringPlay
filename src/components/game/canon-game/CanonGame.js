// gameArea
let myGameArea = {
  // canvas: document.getElementById('gameCanvas'),
  start: function (gameCanvas) {
    gameCanvas.width = 640;
    gameCanvas.height = 400;
    this.context = gameCanvas.getContext("2d");
    // gamePlay.appendChild(this.canvas);
    // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.waktu = 60;
  },
  view: function (gameCanvas) {
    gameCanvas.width = 640;
    gameCanvas.height = 400;
    this.context = gameCanvas.getContext("2d");
    // gamePlay.appendChild(this.canvas);
    // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.waktu = 60;
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

let data = [{
  name: "IronMen",
  score: 800
}, {
  name: "Odading",
  score: 300
}, {
  name: "Lewis",
  score: 200
}]
export default {
  name: 'CanonGame',
  data() {
    return {
      // hud
      ground: null,
      time: null,
      myScore: null,
      timer: null,

      // gameCanvas
      gameCanvas: null,

      // boolean var
      change: false,
      berhenti: true,
      hit: false,
      tembak: false,

      // another var
      angle: null,
      buttonFire: null,
      startBtn: null,
      score: 0,
      bird: '../../assets/image/bird1.png',

      // character
      cannon: null,
      target: null,
      bullet: null
    }
  },
  mounted() {
    this.gameCanvas = document.getElementById("gameCanvas");
    this.buttonFire = document.getElementById('fireBtn')
    this.startBtn = document.getElementById('startBtn')
    this.angle = document.getElementById('inputDeg')

    this.viewGame();
    this.updateGameArea()
  },
  methods: {
    viewGame() {
      myGameArea.view(this.gameCanvas)
      this.angle.value = 0
      this.disabledBtn()
      this.utility();
      this.viewDataPlayer()
      this.printClock(myGameArea.waktu)
    },
    startGame() {
      this.berhenti = false
      myGameArea.start(this.gameCanvas);
      this.enableBtn()
    },

    // clock function
    clock() {
      if (this.berhenti == false) {
        this.timer = setInterval(function () {
          // time.clear()
          this.printClock(myGameArea.waktu);
          if (myGameArea.waktu == -1) {
            let nama = prompt("Enter your name: ")
            this.addDataPlayer(nama, this.score)
            // value = 0
            this.berhenti = true
            this.tembak = false
            this.buttonFire.disabled = false
            this.hit = false
            this.printPeluru()
            this.viewGame()
            clearInterval(this.timer)
          } else {
            this.myGameArea.waktu--
          }
        }, 1000);
      } else {
        this.printClock(myGameArea.waktu)
      }

    },
    printClock(second) {
      // updateGameArea()
      this.time.text = "Time: " + second
      this.time.update()
    },
    // end clock

    // view and add data player
    viewDataPlayer() {
      let tableHs = ""
      tableHs = document.getElementById('highScore')
      // console.log(data);
      for (let index = 0; index < data.length; index++) {
        var row = tableHs.insertRow(index + 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = index + 1 + ".";
        cell2.innerHTML = data[index].name;
        cell3.innerHTML = data[index].score;
      }
      // console.log(tableHs.rows.length);

      if (this.change == true) {
        for (let index = tableHs.rows.length; index > data.length + 1; index--) {
          tableHs.deleteRow(index - 1);
        }
      }
      // console.log(tableHs.rows.length);
      this.change = false
    },
    addDataPlayer(name, score) {
      let addData = {
        name: name,
        score: score
      };

      let indexKe = 0
      // cekscore
      for (let index = 0; index < data.length; index++) {
        if (data[index].score > addData.score) {
          if (data[index].score < addData.score) {
            indexKe = index + 1
          } else {
            indexKe = index + 1
          }
        } else if (data[index].score == addData.score) {
          indexKe = index
        }
      }

      // console.log(indexKe);
      data.splice(indexKe, 0, addData);

      if (data.length > 10) {
        data.splice(data.length - 1, 1)
      }

      alert("Successfull add data \nName : " + name + "\nScore: " + score);
      this.change = true
    },
    // end view and add data player

    // make some character and hud in this function
    utility() {
      this.myScore = new this.componentScore(this.gameCanvas, "20px", "Consolas", "black", 280, 40, "text");
      this.ground = new this.component(this.gameCanvas, 630, 100, "chocolate", 5, 350);
      this.time = new this.componentScore(this.gameCanvas, "20px", "Consolas", "black", 500, 40, "text");
      this.cannon = {
        ban: new this.component(this.gameCanvas, 50, 10, "black", 15, 340),
        meriam: new this.componentCanon(this.gameCanvas, 60, 20, "red", 40, 310),
        tiang: new this.component(this.gameCanvas, 10, 30, "black", 30, 310),
      }
      let x = Math.floor(Math.random() * 200) + 200;
      let y = Math.floor(Math.random() * 200) + 100;
      this.target = new this.componentScore(this.gameCanvas, 50, 50, this.bird, x, y, "image");
      this.bullet = new this.componentBullet(this.gameCanvas, 10, 10, "white", this.cannon.meriam.x, this.cannon.meriam.y)
    },

    // component
    component(Canvas, width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.speedX = 0;
      this.speedY = 0;
      this.x = x;
      this.y = y;
      this.update = function () {
        let ctx = Canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // ctx.lineWidth = 1
      }
      this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
      }
      this.clr = function () {
        let ctx = this.gameCanvas.context;
        ctx.clearRect(0, 0, this.width, this.height)
      }
    },
    componentScore(Canvas, width, height, color, x, y, type) {
      this.type = type;
      if (type == "image") {
        this.image = new Image();
        this.image.src = color;
      }
      this.width = width;
      this.height = height;
      this.speedX = 0;
      this.speedY = 0;
      this.x = x;
      this.y = y;
      this.update = function () {
        let ctx = Canvas.getContext("2d");
        if (this.type == "text") {
          ctx.font = this.width + " " + this.height;
          ctx.fillStyle = color;
          ctx.fillText(this.text, this.x, this.y);
        } else if (type == "image") {
          ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
        } else {
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
        }
      }
      this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
      }
    },
    componentCanon(gameCanvas, width, height, color, x, y) { // function for draw rect,circle,and many more
      this.width = width;
      this.height = height;
      this.speedX = 0;
      this.speedY = 0;
      this.angle = 0
      this.x = x;
      this.y = y;
      let ctx = gameCanvas.getContext("2d");
      this.update = function () {
        ctx.fillStyle = color;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 90);
        ctx.fillRect(this.width / -6, this.height / -2, this.width, this.height);
        ctx.lineWidth = 1
        ctx.restore();
      }
      this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
      }
      this.clr = function () {
        ctx.clearRect(this.x - 15, this.y - 66, 100, 80);
      }
    },
    componentBullet(gameCanvas, width, height, color, x, y) { // function for draw rect,circle,and many more
      this.width = width;
      this.height = height;
      this.speedX = 0;
      this.speedY = 0;
      this.BulletSpeed = 8
      this.angle = 0
      this.x = x;
      this.y = y;
      this.gravity = 0.05
      this.gravitySpeed = 0
      let ctx = gameCanvas.getContext("2d");
      this.update = function () {
        ctx.beginPath()
        ctx.fillStyle = color;
        ctx.save();
        ctx.rotate(this.angle * Math.PI / 90)
        ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        ctx.lineWidth = 1
        ctx.fill();
        ctx.restore();
      }
      this.newPos = function () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
      }
      this.clr = function () {
        ctx = myGameArea.context;
        ctx.clearRect(this.x - 5, this.y - 5, 10, 10)
      }
    },

    // end component

    // for button
    enableBtn() {
      this.buttonFire.disabled = false
      this.startBtn.disabled = true
      this.angle.disabled = false
    },
    disabledBtn() {
      this.startBtn.disabled = false
      this.buttonFire.disabled = true
      this.angle.disabled = true
    },
    // end for button

    // updateGameArea
    updateGameArea() {
      // myGameArea.clear();
      this.ground.update();

      // score
      this.scoreUpdate(this.score);

      // // target
      this.randomBurung();

      // // Cannon
      this.printCannonChar();

      // // peluru
      this.printPeluru();
    },
    // endUpdateArea

    //  score
    scoreUpdate(score) {
      this.myScore.text = "SCORE: " + score;
      this.myScore.update();
    },
  
    // cannon function
    printCannonChar() {
      this.cannon.ban.update();
      this.cannon.tiang.update();
      this.cannon.meriam.update();
    },
    updateCanon() {
      let degree = this.angle.value
      if (degree > 90) {
        document.getElementById('alert').innerHTML = "You cannon input greater than 90 degree "
      } else {
        document.getElementById('alert').innerHTML = ""
        this.cannon.meriam.clr()
        this.cannon.meriam.angle = (degree / 2) * -1
        this.bullet.x = this.cannon.meriam.x
        this.bullet.y = this.cannon.meriam.y
        this.printCannonChar()
        this.printPeluru()
      }
    },
    // end cannon function
    randomBurung() {
      if (this.hit == true) {
        this.target.x = Math.floor(Math.random() * 200) + 200;
        this.target.y = Math.floor(Math.random() * 200) + 100;
        this.hit = false
      }
      this.target.update()
      // console.log(this.target);
    },
    // peluru function
    printPeluru() {
      this.bullet.update()
    },

    // end peluru function

  }
};