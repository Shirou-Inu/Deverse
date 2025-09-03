// Create canvas and add to body
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d")!;
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.appendChild(canvas);

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// Track mouse position for interaction
const mouse = { x: width / 2, y: height / 2 };

// Variables
let angle = 0;
let rotationDirection = 1;

// Handle window resize
window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

// Handle mouse move
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("keydown", (e) =>{
    if (e.code === "Space") {
        rotationDirection *= -1;
        e.preventDefault();
    }
})

// Draw a simple animation
function draw() {
  ctx.clearRect(0, 0, width, height);

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#1e3a8a");
  gradient.addColorStop(1, "#9333ea");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Draw interactive circle
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.fill();

  // Draw rotating square in the center
  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.rotate(angle);
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.fillRect(-40, -40, 80, 80);
  ctx.restore();

  // Update angle
  angle = (angle + 0.1 * rotationDirection) % 360;

  requestAnimationFrame(draw);
}

draw();