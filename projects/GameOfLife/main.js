/* Conway's Game of Life — TypeScript + Canvas
   Features:
   - Play/Pause/Step
   - Click & drag edit
   - Randomize/Clear
   - Adjustable cell size + tick speed
   - Toroidal wrapping
   - HiDPI-safe rendering + resize handling
*/
class Grid {
    width;
    height;
    data; // 0/1 values
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = new Uint8Array(width * height);
    }
    index(x, y) {
        return y * this.width + x;
    }
    get(x, y) {
        // wrap-around (toroidal)
        const X = (x + this.width) % this.width;
        const Y = (y + this.height) % this.height;
        return this.data[this.index(X, Y)];
    }
    set(x, y, v) {
        const X = (x + this.width) % this.width;
        const Y = (y + this.height) % this.height;
        this.data[this.index(X, Y)] = v;
    }
    fillRandom(density = 0.35) {
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] = Math.random() < density ? 1 : 0;
        }
    }
    clear() {
        this.data.fill(0);
    }
    cloneTo(target) {
        if (target.width !== this.width || target.height !== this.height) {
            throw new Error("Grid sizes must match");
        }
        target.data.set(this.data);
    }
}
class Life {
    grid;
    next;
    constructor(w, h) {
        this.grid = new Grid(w, h);
        this.next = new Grid(w, h);
    }
    resize(w, h) {
        const newGrid = new Grid(w, h);
        // preserve as much as possible (top-left aligned)
        for (let y = 0; y < Math.min(h, this.grid.height); y++) {
            for (let x = 0; x < Math.min(w, this.grid.width); x++) {
                newGrid.set(x, y, this.grid.get(x, y));
            }
        }
        this.grid = newGrid;
        this.next = new Grid(w, h);
    }
    step() {
        const { grid, next } = this;
        const w = grid.width;
        const h = grid.height;
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                let n = 0;
                // count neighbors (8 directions)
                n += grid.get(x - 1, y - 1);
                n += grid.get(x, y - 1);
                n += grid.get(x + 1, y - 1);
                n += grid.get(x - 1, y);
                n += grid.get(x + 1, y);
                n += grid.get(x - 1, y + 1);
                n += grid.get(x, y + 1);
                n += grid.get(x + 1, y + 1);
                const alive = grid.get(x, y) === 1;
                let out = 0;
                if (alive) {
                    // survival: 2 or 3 neighbors
                    out = (n === 2 || n === 3) ? 1 : 0;
                }
                else {
                    // birth: exactly 3 neighbors
                    out = (n === 3) ? 1 : 0;
                }
                next.set(x, y, out);
            }
        }
        // swap
        [this.grid, this.next] = [this.next, this.grid];
    }
}
function main() {
    const canvas = document.getElementById("life");
    const playPauseBtn = document.getElementById("playPause");
    const stepBtn = document.getElementById("step");
    const clearBtn = document.getElementById("clear");
    const randomBtn = document.getElementById("random");
    const speedInput = document.getElementById("speed"); // ticks per second
    const cellSizeInput = document.getElementById("cellSize");
    const ctx = canvas.getContext("2d");
    let playing = false;
    let cellSize = Number(cellSizeInput.value); // CSS pixels per cell (before devicePixelRatio)
    let ticksPerSecond = Number(speedInput.value);
    let lastTickTime = 0;
    // Backing store scaling for HiDPI
    function resizeCanvasBackingStore() {
        const dpr = Math.max(1, window.devicePixelRatio || 1);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.floor(rect.width * dpr);
        canvas.height = Math.floor(rect.height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // keep drawing units in CSS pixels
    }
    // Compute grid size based on current cell size
    function computeGridSize() {
        const rect = canvas.getBoundingClientRect();
        const cols = Math.max(4, Math.floor(rect.width / cellSize));
        const rows = Math.max(4, Math.floor(rect.height / cellSize));
        return { cols, rows };
    }
    // Initialize life model
    const { cols, rows } = computeGridSize();
    const life = new Life(cols, rows);
    // Draw grid & cells
    function draw() {
        const rect = canvas.getBoundingClientRect();
        // Clear
        ctx.clearRect(0, 0, rect.width, rect.height);
        // Background (subtle)
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("color-scheme").includes("dark") ? "#0b0b0b" : "#ffffff";
        ctx.fillRect(0, 0, rect.width, rect.height);
        // Cells
        ctx.fillStyle = "#2aa745"; // alive cells
        const g = life.grid;
        for (let y = 0; y < g.height; y++) {
            for (let x = 0; x < g.width; x++) {
                if (g.get(x, y) === 1) {
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }
        // Grid lines (light)
        ctx.beginPath();
        const gridColor = matchMedia("(prefers-color-scheme: dark)").matches ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)";
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        for (let x = 0; x <= g.width; x++) {
            const px = x * cellSize + 0.5; // crisp 1px lines
            ctx.moveTo(px, 0);
            ctx.lineTo(px, g.height * cellSize);
        }
        for (let y = 0; y <= g.height; y++) {
            const py = y * cellSize + 0.5;
            ctx.moveTo(0, py);
            ctx.lineTo(g.width * cellSize, py);
        }
        ctx.stroke();
    }
    // Animation loop
    function loop(t) {
        if (playing) {
            const minIntervalMs = 1000 / Math.max(1, ticksPerSecond);
            if (t - lastTickTime >= minIntervalMs) {
                life.step();
                lastTickTime = t;
            }
        }
        draw();
        requestAnimationFrame(loop);
    }
    // Controls
    function setPlaying(next) {
        playing = next;
        playPauseBtn.textContent = playing ? "⏸ Pause" : "▶ Play";
        playPauseBtn.dataset.active = playing ? "true" : "false";
    }
    playPauseBtn.addEventListener("click", () => {
        setPlaying(!playing);
    });
    stepBtn.addEventListener("click", () => {
        if (!playing) {
            life.step();
            draw();
        }
    });
    clearBtn.addEventListener("click", () => {
        life.grid.clear();
        draw();
    });
    randomBtn.addEventListener("click", () => {
        life.grid.fillRandom(0.35);
        draw();
    });
    speedInput.addEventListener("input", () => {
        ticksPerSecond = Number(speedInput.value);
    });
    cellSizeInput.addEventListener("input", () => {
        cellSize = Number(cellSizeInput.value);
        const { cols: c, rows: r } = computeGridSize();
        life.resize(c, r);
        draw();
    });
    // Pointer editing
    let drawing = false;
    let drawValue = 1;
    function canvasToCell(clientX, clientY) {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((clientX - rect.left) / cellSize);
        const y = Math.floor((clientY - rect.top) / cellSize);
        return { x, y };
    }
    function toggleAt(clientX, clientY) {
        const { x, y } = canvasToCell(clientX, clientY);
        if (x < 0 || y < 0 || x >= life.grid.width || y >= life.grid.height)
            return;
        life.grid.set(x, y, drawValue);
    }
    canvas.addEventListener("pointerdown", (e) => {
        canvas.setPointerCapture(e.pointerId);
        const { x, y } = canvasToCell(e.clientX, e.clientY);
        const current = life.grid.get(x, y);
        drawValue = current ? 0 : 1;
        drawing = true;
        toggleAt(e.clientX, e.clientY);
        draw();
    });
    canvas.addEventListener("pointermove", (e) => {
        if (!drawing)
            return;
        toggleAt(e.clientX, e.clientY);
        draw();
    });
    const endDraw = (e) => {
        if (!drawing)
            return;
        drawing = false;
        canvas.releasePointerCapture(e.pointerId);
    };
    canvas.addEventListener("pointerup", endDraw);
    canvas.addEventListener("pointercancel", endDraw);
    canvas.addEventListener("pointerleave", () => (drawing = false));
    // Resize handling (including DPR changes)
    function handleResize() {
        resizeCanvasBackingStore();
        const { cols: c, rows: r } = computeGridSize();
        life.resize(c, r);
        draw();
    }
    window.addEventListener("resize", handleResize);
    matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener?.("change", handleResize);
    // Initial layout & start loop
    handleResize();
    draw();
    requestAnimationFrame(loop);
}
document.addEventListener("DOMContentLoaded", main);
export {};
