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
let margin = 20;
// Handle window resize
window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});
const grid = new Grid(10, 50, width - 2 * margin, (0.75 * height) - 2 * margin);
grid.initGrid(0.25);
function draw() {
    // Clear screen
    ctx.clearRect(0, 0, width, height);
    // Draw background
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, height);
    // Translate origin
    ctx.save();
    ctx.translate(margin, 0.25 * height + margin);
    // Draw grid
    grid.draw(ctx);
    // Restore origin
    ctx.restore();
    // Redraw
    requestAnimationFrame(draw);
}
draw();
