const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cat
let cat = {
    x: 50,
    y: canvas.height / 2,
    speed: 2,
    moving: false,
    frame: 0
};

// Cat Illustration
function drawCat(x, y) {
    if (document.body.classList.contains("night-mode")) {
      ctx.strokeStyle = "#f8f7d1"; 
      ctx.fillStyle = "#f8f7d1";
  } else {
      ctx.strokeStyle = "#314ffe"; 
      ctx.fillStyle = "#314ffe";
  }

  ctx.lineWidth = 4;

    // Head
    ctx.beginPath();

    // Left ear
    ctx.moveTo(x + 5, y - 12);
    ctx.lineTo(x + 6, y - 36); 
    ctx.lineTo(x + 25, y - 25);

    // Top of head 
    ctx.bezierCurveTo(x + 30, y - 30, x + 60, y - 45, x + 90, y - 36);

    // Right ear
    ctx.lineTo(x + 108, y - 48); 
    ctx.lineTo(x + 110, y - 20); 

    // Right side of head
    ctx.bezierCurveTo(x + 120, y + 5, x + 110, y + 35, x + 80, y + 40); 

    // Left side of head
    ctx.bezierCurveTo(x + 25, y + 50, x - 10, y + 45, x + 5, y - 15); 
    ctx.stroke();
    
    // Eyes
    ctx.beginPath();
    ctx.arc(x + 35, y, 7, 0, Math.PI * 2);
    ctx.arc(x + 80, y - 5, 7, 0, Math.PI * 2);
    ctx.fill();
    
    // Nose
    ctx.beginPath();
    ctx.arc(x + 58, y + 2, 4, 0, Math.PI * 2);
    ctx.fill();
    
    // Whiskers
    ctx.beginPath();

    // Left whiskers
    ctx.moveTo(x + 10, y - 2);
    ctx.lineTo(x - 10, y - 6);  
    ctx.moveTo(x + 10, y + 6);
    ctx.lineTo(x - 10, y + 12);  

    // Right whiskers
    ctx.moveTo(x + 100, y - 6);
    ctx.lineTo(x + 120, y - 12);  
    ctx.moveTo(x + 100, y + 2);
    ctx.lineTo(x + 120, y + 8);  
    ctx.stroke();

    // Body 
    ctx.beginPath();
    // Left body line
    ctx.moveTo(x + 12, y + 42); 
    ctx.bezierCurveTo(x - 10, y + 100, x + 20, y + 130, x + 20, y + 145);
    ctx.stroke();

    // Right body line
    ctx.moveTo(x + 100, y + 37); 
    ctx.bezierCurveTo(x + 120, y + 100, x + 95, y + 130, x + 99, y + 145); 
    ctx.stroke();
    
    // Arms

    // Left arm
    ctx.beginPath();
    ctx.moveTo(x + 8, y + 50); 
    ctx.bezierCurveTo(x - 15, y + 40, x - 30, y + 65, x + 5, y + 75); 
    ctx.stroke();

    // Right arm
    ctx.beginPath();
    ctx.moveTo(x + 105, y + 48); 
    ctx.bezierCurveTo(x + 128, y + 40, x + 140, y + 65, x + 108, y + 73); 
    ctx.stroke();

    // Left paw 
    ctx.lineWidth = 3.2;
    ctx.beginPath();
    ctx.moveTo(x - 15, y + 54);
    ctx.lineTo(x - 5, y + 55);
    ctx.moveTo(x - 15, y + 60);
    ctx.lineTo(x - 5, y + 62);
    ctx.stroke();

    // Right paw 
    ctx.beginPath();
    ctx.moveTo(x + 128, y + 54);
    ctx.lineTo(x + 116, y + 55);
    ctx.moveTo(x + 128, y + 60);
    ctx.lineTo(x + 116, y + 62);
    ctx.stroke();

    // Legs

    // Left leg 
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x + 20, y + 144);
    ctx.bezierCurveTo(x + 15, y + 178, x + 50, y + 170, x + 50, y + 150);
    ctx.stroke();

    // Leg Connection
    ctx.beginPath();
    ctx.moveTo(x + 50, y + 152);
    ctx.bezierCurveTo(x + 48, y + 145, x + 68, y + 142, x + 66, y + 153); 
    ctx.stroke();

    // Right leg
    ctx.beginPath();
    ctx.moveTo(x + 99, y + 142);
    ctx.bezierCurveTo(x + 105, y + 178, x + 63, y + 170, x + 66, y + 150);
    ctx.stroke(); 

    // Left paw 
    ctx.lineWidth = 3.2;
    ctx.beginPath();
    ctx.moveTo(x + 30, y + 155);
    ctx.lineTo(x + 30, y + 165);
    ctx.moveTo(x + 40, y + 155);
    ctx.lineTo(x + 40, y + 165);
    ctx.stroke();
    
    // Right paw 
    ctx.beginPath();
    ctx.moveTo(x + 80, y + 155);
    ctx.lineTo(x + 80, y + 165);
    ctx.moveTo(x + 90, y + 154);
    ctx.lineTo(x + 90, y + 165);
    ctx.stroke();

    // Tail
    ctx.lineWidth = 4;
    ctx.beginPath();
    let tailWave = Math.sin(cat.x * 0.05) * 8
    ctx.moveTo(x + 12, y + 120); 
    ctx.bezierCurveTo(x - 50, y + 110 + tailWave, x - 30, y + 60 + tailWave, x - 30, y + 45 + tailWave); 
    ctx.bezierCurveTo(x - 30, y + 28 + tailWave, x - 50, y + 30 + tailWave, x - 45, y + 50 + tailWave); 
    ctx.stroke();

    // Skateboard
    ctx.beginPath();
    ctx.ellipse(x + 63, y + 180, 80, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Wheels
      if (document.body.classList.contains("night-mode")) {
        ctx.fillStyle = "#000059";
    } else {
        ctx.fillStyle = "#f8f7d1"; 
    }

    // Left Wheel
    ctx.beginPath();
    ctx.arc(x + 18, y + 193, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Right Wheel
    ctx.beginPath(); 
    ctx.arc(x + 108, y + 193, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}
  
// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (cat.moving) {
        cat.x += cat.speed;
        if (cat.x > canvas.width) {
            cat.x = -50; 
        }
    }
    
    drawCat(cat.x, cat.y);
    requestAnimationFrame(animate);
}

// Controls
const playButton = document.getElementById("play");
const speedUp = document.getElementById("speedUp");
const slowDown = document.getElementById("slowDown");
const resetButton = document.getElementById("reset");
const nightModeButton = document.getElementById("nightMode");
const dayModeButton = document.getElementById("dayMode");

nightModeButton.classList.add("night-mode-toggle");

playButton.addEventListener("click", () => {
  cat.moving = !cat.moving;
  playButton.textContent = cat.moving ? "⏸" : "▶";
});

speedUp.addEventListener("click", () => cat.speed += 2);
slowDown.addEventListener("click", () => cat.speed = Math.max(1, cat.speed - 2));
resetButton.addEventListener("click", () => {
  cat.x = 50;
  cat.moving = false;
  playButton.textContent = "▶";
});

// Site starts in day mode
document.body.classList.remove("night-mode");
nightModeButton.classList.remove("hidden");
dayModeButton.classList.add("hidden");

// Mode toggle
nightModeButton.addEventListener("click", () => {
    document.body.classList.add("night-mode");
    nightModeButton.classList.add("hidden");
    dayModeButton.classList.remove("hidden");
});

dayModeButton.addEventListener("click", () => {
    document.body.classList.remove("night-mode");
    nightModeButton.classList.remove("hidden");
    dayModeButton.classList.add("hidden");
});
animate();

