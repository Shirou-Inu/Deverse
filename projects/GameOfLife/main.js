import Grid from "./grid.js";
// Create canvas and add to body
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.appendChild(canvas);
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;
// Variables
// Handle window resize
window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});
const grid = new Grid(50, 50, 1000, 500);
grid.initGrid(true);
function draw() {
    // Clear screen
    ctx.clearRect(0, 0, width, height);
    // Draw background
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, height);
    grid.draw(ctx);
    // Redraw
    requestAnimationFrame(draw);
}
draw();
