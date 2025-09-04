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
    initGrid(random = false) {
        this.grid = [];
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.grid[i][j] = random ? Math.random() < 0.5 : false;
            }
        }
    }
    setMaxWidth(maxWidth) {
        this.maxWidth = maxWidth;
    }
    setMaxHeight(maxHeight) {
        this.maxHeight = maxHeight;
    }
    setCellSize() {
        const ratio = this.cols / this.rows;
        if (this.maxHeight < (ratio * this.maxWidth)) {
            this.cellSize = this.maxHeight / this.rows;
        }
        else {
            this.cellSize = this.maxWidth / this.cols;
        }
    }
    draw(ctx) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j]) {
                    ctx.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
                }
                else {
                    ctx.strokeRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
                }
            }
        }
    }
}
export default Grid;
