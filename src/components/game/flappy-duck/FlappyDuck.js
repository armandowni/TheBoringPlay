let myGameArea = {
    start: function(gameCanvas) {
        gameCanvas.width = 640;
        gameCanvas.height = 400;
        this.context = gameCanvas.getContext("2d");
        // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        // this.interval = setInterval(updateGameArea, 20);
    },
    view: function(gameCanvas) {
        gameCanvas.width = 640;
        gameCanvas.height = 400;
        this.context = gameCanvas.getContext("2d");
        this.frameNo = 0;
    },
    clear: function(gameCanvas) {
        this.context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    }
}

export default {
    name: 'FlappyDuck',
    data() {
        return {
            myGamePiece: null,
            myObstacles: [],
            myScore: null,
            gameCanvas: null,
        }
    },
    mounted() {
        this.gameCanvas = document.getElementById("gameCanvas");
        this.viewGame();
    },
    methods: {
        viewGame() {
            this.myGamePiece = new this.component(30, 30, "red", 10, 120);
            this.myGamePiece.gravity = 0.05;
            this.myScore = new this.component("30px", "Consolas", "black", 280, 40, "text");
            myGameArea.view(this.gameCanvas)
        },
        startGame() {
            this.myGamePiece = new this.component(30, 30, "red", 10, 120);
            this.myGamePiece.gravity = 0.05;
            this.myScore = new this.component("30px", "Consolas", "black", 280, 40, "text");
            myGameArea.start(this.gameCanvas);
        },
        component(width, height, color, x, y, type) {
            this.type = type;
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
                let rockbottom = myGameArea.canvas.height - this.height;
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
                    return;
                }
            }
            myGameArea.clear();
            myGameArea.frameNo += 1;
            if (myGameArea.frameNo == 1 || this.everyinterval(150)) {
                x = myGameArea.canvas.width;
                minHeight = 20;
                maxHeight = 200;
                height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
                minGap = 50;
                maxGap = 200;
                gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
                this.myObstacles.push(new this.component(10, height, "green", x, 0));
                this.myObstacles.push(new this.component(10, x - height - gap, "green", x, height + gap));
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
        }
    },
};