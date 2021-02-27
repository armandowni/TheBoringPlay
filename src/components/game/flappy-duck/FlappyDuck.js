import axios from "axios";
import restApi from "../../../router/restAPI"
let myGameArea = {
    start: function(gameCanvas) {
        this.width = gameCanvas.width = 640;
        this.height = gameCanvas.height = 400;
        this.context = gameCanvas.getContext("2d");
        this.frameNo = 0;
        this.interval = null;
    },
    view: function(gameCanvas) {
        gameCanvas.width = 640;
        gameCanvas.height = 400;
        this.context = gameCanvas.getContext("2d");
        this.context.filter = "grayscale(50)"
        this.frameNo = 0;
        this.interval = null;
    },
    clear: function(gameCanvas) {
        this.context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
        // this.context.filter = 'contrast(2)'
        // this.context.font = "50px Georgia";
        // this.context.fillText("Crash!", 250, 200);
    }
}

import image from '@/assets/image/flappy_duck-removebg.png'

export default {
    name: 'FlappyDuck',
    data() {
        return {
            myGamePiece: null,
            myObstacles: [],
            myScore: null,
            duck: image,
            gameCanvas: null,
            disableBtnJump: true,
            disableBtnStart: false,
            allScore: [],
            items: [
                'Highscore Top 50',
            ],
            tab: null,
            loadData: true,
        }
    },
    mounted() {
        this.gameCanvas = document.getElementById("gameCanvas");
        this.viewGame();
    },
    methods: {
        viewGame() {
            this.myScore = new this.component("30px", "Consolas", "black", 280, 40, "text");
            this.myObstacles.push(new this.component(50, 160, "green", 500, 0));
            this.myObstacles.push(new this.component(50, 160, "green", 500, 250));
            this.myGamePiece = new this.component(50, 50, this.duck, 10, 150, 'image');

            myGameArea.view(this.gameCanvas)

            this.myScore.text = "SCORE: " + myGameArea.frameNo;
            this.myGamePiece.update();
            this.myScore.update();
            this.myObstacles[0].update();
            this.myObstacles[1].update();
            this.viewDataPlayer()
        },
        startGame() {
            this.myGamePiece = new this.component(50, 50, this.duck, 10, 150, 'image');
            this.myGamePiece.gravity = 0.05;
            this.myScore = new this.component("30px", "Consolas", "black", 280, 40, "text");
            this.disableBtnJump = false
            this.disableBtnStart = true
            myGameArea.start(this.gameCanvas);
            myGameArea.interval = setInterval(this.updateGameArea, 20);
            this.addGamePlayed()
        },
        component(width, height, color, x, y, type) {
            this.type = type;
            if (type == "image") {
                this.image = new Image();
                this.image.src = color;
            }
            this.score = 0;
            this.width = width;
            this.height = height;
            this.speedX = 0;
            this.speedY = 0;
            this.x = x;
            this.y = y;
            this.gravity = 0;
            this.gravitySpeed = 0;
            this.update = function() {
                let ctx = myGameArea.context;
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
            this.newPos = function() {
                this.gravitySpeed += this.gravity;
                this.x += this.speedX;
                this.y += this.speedY + this.gravitySpeed;
                this.hitBottom();
                this.hitTop();
            }
            this.hitBottom = function() {
                let rockbottom = myGameArea.height - this.height;
                if (this.y > rockbottom) {
                    this.y = rockbottom;
                    this.gravitySpeed = 0;
                }
            }
            this.hitTop = function() {
                let top = 0;
                if (this.y < top) {
                    this.y = top;
                    this.gravitySpeed = -0.02;
                }
            }
            this.crashWith = function(otherobj) {
                let myleft = this.x + 15;
                let myright = this.x + (this.width) - 10;
                let mytop = this.y + 15;
                let mybottom = this.y + (this.height) - 10;
                let otherleft = otherobj.x;
                let otherright = otherobj.x + (otherobj.width);
                let othertop = otherobj.y;
                let otherbottom = otherobj.y + (otherobj.height);
                let crash = true;
                if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
                    crash = false;
                }
                return crash;
            }
        },

        updateGameArea() {
            let x, height, gap, minHeight, maxHeight, minGap, maxGap;
            for (let i = 0; i < this.myObstacles.length; i += 1) {
                if (this.myGamePiece.crashWith(this.myObstacles[i])) {
                    this.addDataPlayer(myGameArea.frameNo)
                    myGameArea.stop();
                    this.myObstacles = []
                    this.myObstacles.push(new this.component(50, 160, "green", 500, 0));
                    this.myObstacles.push(new this.component(50, 160, "green", 500, 250));
                    this.disableBtnJump = true;
                    this.disableBtnStart = false;
                    return;
                }
            }
            myGameArea.clear(this.gameCanvas);
            myGameArea.frameNo += 1;
            if (myGameArea.frameNo == 1 || this.everyinterval(150)) {
                // console.log("width:" + myGameArea.width);
                x = myGameArea.width;
                minHeight = 20;
                maxHeight = 200;
                height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
                minGap = 50;
                maxGap = 200;
                gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
                this.myObstacles.push(new this.component(50, height, "green", x, 0));
                this.myObstacles.push(new this.component(50, x - height - gap, "green", x, height + gap));
            }
            for (let i = 0; i < this.myObstacles.length; i += 1) {
                this.myObstacles[i].x += -1;
                this.myObstacles[i].update();
            }
            this.myScore.text = "SCORE: " + myGameArea.frameNo;
            this.myScore.update();
            this.myGamePiece.newPos();
            this.myGamePiece.update();
        },
        everyinterval(n) {
            if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
            return false;
        },
        jump(n) {
            this.myGamePiece.gravity = n;
            // console.log("jump game");
        },
        // view and add data player
        addGamePlayed() {
            let param = this.$router.currentRoute.name
            let dataName = "Name=" + param
            axios.post(restApi.globalStorage + "/api/gamelists/addGamePLayed", dataName)
        },
        viewDataPlayer() {
            axios.get(restApi.globalStorage + "/api/highscoreflappyducks/getAllData").then((data) => {
                // console.log(data);
                this.allScore = data.data
                this.loadData = false
            })
        },
        addDataPlayer(score) {
            if (confirm('Are you sure you want to save your highscore?')) {
                let nama = prompt("Enter your name: ")
                let addData = {
                    username: nama,
                    score: score
                };
                // console.log(addData);
                axios.post(restApi.globalStorage + "/api/highscoreflappyducks/addDataPlayer", addData).then(result => {
                    let results = result.statusText
                    if (results === "OK") {
                        alert(result.data.Data);
                        this.viewGame();
                    } else {
                        alert("Can't save data, please wait or refresh the page");
                        this.viewGame();
                    }

                });
            } else {
                alert('okay no problemo');
            }


            // this.change = true
        },
        // end view and add data player
    },
};