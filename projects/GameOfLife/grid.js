class Grid {
    rows;
    cols;
    maxWidth;
    maxHeight;
    cellSize = 0;
    generation;
    grid = [];
    constructor(rows, cols, maxWidth, maxHeight) {
        this.rows = rows;
        this.cols = cols;
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this.generation = 0;
        this.initGrid();
        this.setCellSize();
    }
    initGrid(aliveProb = 0) {
        this.grid = [];
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j] = Math.random() < aliveProb;
            }
        }
    }
    setMaxWidth(maxWidth) {
        this.maxWidth = maxWidth;
        this.setCellSize();
    }
    setMaxHeight(maxHeight) {
        this.maxHeight = maxHeight;
        this.setCellSize();
    }
    setCellSize() {
        const ratio = this.rows / this.cols;
        if (this.maxHeight < ratio * this.maxWidth) {
            this.cellSize = this.maxHeight / this.rows;
        }
        else {
            this.cellSize = this.maxWidth / this.cols;
        }
    }
    getWidth() {
        return this.cellSize * this.cols;
    }
    getHeight() {
        return this.cellSize * this.rows;
    }
    step() {
        const newGrid = [];
        for (let i = 0; i < this.rows; i++) {
            newGrid[i] = [];
            for (let j = 0; j < this.cols; j++) {
                // Grab total live cells
                const liveCount = this.getLiveCount(i, j);
                // Determine cell status
                if (this.grid[i][j]) {
                    newGrid[i][j] = liveCount > 1 && liveCount < 4;
                }
                else {
                    newGrid[i][j] = liveCount == 3;
                }
            }
        }
        this.grid = newGrid;
    }
    getLiveCount(i, j) {
        let liveCount = 0;
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
                if (di === 0 && dj === 0)
                    continue;
                const ni = i + di;
                const nj = j + dj;
                if (ni >= 0 && ni < this.rows && nj >= 0 && nj < this.cols) {
                    liveCount += this.grid[ni][nj] ? 1 : 0;
                }
            }
        }
        return liveCount;
    }
    draw(ctx) {
        // Draw background
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.cellSize * this.cols, this.cellSize * this.rows);
        // Draw cells
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j]) {
                    ctx.fillStyle = "white";
                    ctx.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
                }
            }
        }
        // Draw grid
    }
}
export default Grid;
