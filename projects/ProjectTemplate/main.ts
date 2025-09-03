// Create canvas and add to body
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
if (!ctx)
    throw new Error("Canvas context not available");
// Function to resize canvas and redraw text
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawText();
}
// Function to draw centered text
function drawText() {
    if (!ctx)
        return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const text = "Project Template";
    // Dynamically set font size based on canvas width
    const fontSize = Math.min(canvas.width, canvas.height) / 10;
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}
// Initial draw
resizeCanvas();
// Redraw on window resize
window.addEventListener('resize', resizeCanvas);
export {};
