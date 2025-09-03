// Remove body margins and hide overflow
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.overflow = 'hidden';

// Create canvas and add to body
const canvas = document.createElement('canvas');
canvas.style.display = 'block'; // Prevents inline-element spacing
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

if (!ctx) throw new Error("Canvas context not available");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawText();
}

function drawText() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const text = "Project Template";
    const fontSize = Math.min(canvas.width, canvas.height) / 10;
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);