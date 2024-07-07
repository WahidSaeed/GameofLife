let generation = 0;
let population = 0;
function init() {
    area.start();

    let cellHMid = Math.round(area.cells.length / 2);
    let cellWMid = Math.round(area.cells[0].length / 2);

    let cellHMidHalf = Math.round(cellHMid / 2)
    let cellWMidHalf = Math.round(cellWMid / 2)

    for (let index = 0; index < 1000; index++) {
        let cellH = randomInt(-1 * cellHMidHalf, cellHMidHalf);
        let cellW = randomInt(-1 * cellWMidHalf, cellWMidHalf);
        let cell = area.cells[cellHMid + cellH][cellWMid + cellW];
        cell.state = 1;
        cell.render();  
    }

    setInterval(() => {
        generation += 1;
        document.getElementById('details').innerText = "Generation: " + generation
        document.getElementById('population').innerText = "Population: " + population
        area.calculateCells()
    }, 100)

}


var area = {
    canvas: document.createElement('canvas'),
    cellDim: 10,
    cells: new Array(),
    start: function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.ctx = this.canvas.getContext('2d');
        this.setBackground();
        this.setGrid()
    },
    setBackground: function() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    setGrid: function() {
        for (let y = 0; y < this.canvas.height; y += this.cellDim) {
            let cellRow = new Array()
            for (let x = 0; x < this.canvas.width; x += this.cellDim) {
                const cell = new Cell(this.cellDim, this.cellDim, x, y, 'white')
                cell.render();
    
                cellRow.push(cell);
            }
            this.cells.push(cellRow);
        }
    },
    calculateCells: function () {
        let height = this.cells.length
        let width = this.cells[0].length
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let neighbors = 0
                const currentCell = this.cells[y][x];
                
                for (let ny = y - 1; ny <= y + 1; ny++) {
                    for (let nx = x - 1; nx <= x + 1; nx++) {
                        
                        try {
                            if (!(nx == x && ny == y)) {
                                const nCell = this.cells[ny][nx];
                                neighbors += nCell.state
                            }
                        } catch (error) {
                            neighbors += 0
                        }

                    }
                }

                if (neighbors == 0 || neighbors == 1 || neighbors >= 4) {
                    currentCell.newState = 0
                }
                else if (neighbors == 3) {
                    currentCell.newState = 1
                }
            }
        }

        
        population = 0;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const currentCell = this.cells[y][x];
                let newState = currentCell.newState;
                currentCell.state = newState;
                currentCell.render()

                population += newState;
            }
        }
    }
}


function Cell(width, height, x, y, color) {
    this.color = color || "black";
    this.state = 0;
    this.newState = 0;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.render = function () {
        let ctx = area.ctx;
        ctx.fillStyle = this.state == 1 ? this.color : 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.1;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

init();