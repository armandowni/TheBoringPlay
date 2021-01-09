let myGameArea = {
    start: function(gameCanvas) {
        this.width = gameCanvas.width = 640;
        this.height = gameCanvas.height = 400;
        this.context = gameCanvas.getContext("2d");
        this.frameNo = 0;
        this.interval = 0;
    },
    view: function(gameCanvas) {
        gameCanvas.width = 640;
        gameCanvas.height = 400;
        this.context = gameCanvas.getContext("2d");
        this.frameNo = 0;
    },
    clear: function(gameCanvas) {
        this.context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
        this.context.filter = 'contrast(2)'
        this.context.font = "50px Georgia";
        this.context.fillText("Crash!", 250, 200);
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
            interval: null,
            disableBtnJump: true,
        }
    },
    mounted() {
        this.gameCanvas = document.getElementById("gameCanvas");
        this.viewGame();
    },
    methods: {
        viewGame() {
            this.myGamePiece = new this.component(50, 50, this.duck, 10, 150, 'image');
            this.myScore = new this.component("30px", "Consolas", "black", 280, 40, "text");
            this.myObstacles.push(new this.component(50, 160, "green", 500, 0));
            this.myObstacles.push(new this.component(50, 160, "green", 500, 250));
            this.disableBtnJump = true

            myGameArea.view(this.gameCanvas)
            this.myScore.text = "SCORE: " + myGameArea.frameNo;
            this.myScore.update();
            this.myGamePiece.update();
            this.myObstacles[0].update();
            this.myObstacles[1].update();
        },
        startGame() {
            this.myGamePiece = new this.component(50, 50, this.duck, 10, 150, 'image');
            this.myGamePiece.gravity = 0.05;
            this.myScore = new this.component("30px", "Consolas", "black", 280, 40, "text");
            this.disableBtnJump = false
            myGameArea.start(this.gameCanvas);
            myGameArea.interval = setInterval(this.updateGameArea, 20);
            this.updateGameArea();
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
            }
            this.hitBottom = function() {
                let rockbottom = myGameArea.height - this.height;
                if (this.y > rockbottom) {
                    this.y = rockbottom;
                    this.gravitySpeed = 0;
                }
            }
            this.crashWith = function(otherobj) {
                let myleft = this.x;
                let myright = this.x + (this.width);
                let mytop = this.y;
                let mybottom = this.y + (this.height);
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
                    myGameArea.stop();
                    this.disableBtnJump = true
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
            // console.log(this.myGamePiece.gravity);
        }
    },
};