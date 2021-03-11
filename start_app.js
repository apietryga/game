var player;
function startGame(){
    gamePlane.start();
    player = new component(50,50,"yellow",250,300);
}
var gamePlane = {
    canvas: document.createElement("canvas"),
    start: function(){
        this.canvas.width = "700";
        this.canvas.height = "350";
        this.context = this.canvas.getContext("2d");
        document.querySelector(".game").appendChild(this.canvas);    
        this.interval = setInterval(updateGamePlane, 20);
        window.addEventListener("keydown", function(e){
            gamePlane.key = e.keyCode;
            console.log(e.keyCode);
        })
        window.addEventListener("keyup", function(e){
            gamePlane.key = false;
        })
    },
    clear: function(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    },
    end: function(){
        console.log("Wyświetl");
    }
}
function component(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = gamePlane.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    this.speedX = 0;
    this.speedY = 0;
    this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGamePlane(){
    gamePlane.clear();
    player.speedX = 0;
    player.speedY = 0;
    if(gamePlane.key && gamePlane.key == 39){
        player.speedX = player.speedX+1;
    }
    if(gamePlane.key && gamePlane.key == 37){
        player.speedX = player.speedX-1;
    }
    if(gamePlane.key && gamePlane.key == 38){
        player.speedY = player.speedY-1;
    }
    if(gamePlane.key && gamePlane.key == 40){
        player.speedY = player.speedY+1;
    }
    player.update();
    player.newPos();
}
