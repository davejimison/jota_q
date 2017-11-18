class Cell {
    constructor(status, position) {
        this.status = status;
        this.position = position//[0,0];
    }
}

Cell.prototype.updateStatus = function(status) {
    this.status = status;
}
