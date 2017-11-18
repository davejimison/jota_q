var Cell = require('./cell')

class Grid {
    constructor() {
        this.height = 0;
        this.width = 0;
        this.cells = {}//
    }
}

Grid.prototype.cells = function() {
    return this.cells;
}

Grid.prototype.createCell = function(status, position) {
    var cell = new Cell(status, position)
    this.cells[position.toString()] = cell
    return cell
}

Grid.prototype.getCell = function(xPos, yPos){
    if(cells.hasOwnProperty([xPos, yPos].toString()){
        return cells[[xPos, yPos].toString()]
    }
}

Grid.prototype.getNeighbors = function(cell) {
    var xPos = cell.position[0]
    var yPos = cell.position[1]

    var neighbors = []

    for(var i=xPos-1; i<xPos+1; i++){
        for(var n=yPos-1; n<yPos+1; n++){
            neighbors.push(this.getCell(i,n))
        }
    }

    return neighbors
}