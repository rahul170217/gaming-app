const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 180, y: 450, width: 40, height: 40 };
let enemy = { x: Math.random() * 360, y: -50, width: 40, height: 40 };
let score = 0;

function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawEnemy() {
    ctx.fillStyle = "red";
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
}

function updateEnemy() {
    enemy.y += 4;
    if (enemy.y > 500) {
        enemy.y = -50;
        enemy.x = Math.random() * 360;
        score++;
    }
}

function checkCollision() {
    if (
        player.x < enemy.x + enemy.width &&
        player.x + player.width > enemy.x &&
        player.y < enemy.y + enemy.height &&
        player.height + player.y > enemy.y
    ) {
        alert("Game Over! Score: " + score);
        document.location.reload();
    }
}

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft" && player.x > 0) player.x -= 20;
    if (e.key === "ArrowRight" && player.x < 360) player.x += 20;
});

function gameLoop() {
    ctx.clearRect(0, 0, 400, 500);
    drawPlayer();
    drawEnemy();
    updateEnemy();
    checkCollision();
    requestAnimationFrame(gameLoop);
}

gameLoop();
