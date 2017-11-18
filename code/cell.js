class Cell {
  constructor(status, coordinates) {
    this.status = status;
    this.coordinates = coordinates;
  }

  SetNextState(nextState) {
    this.nextState = nextState;
  }
}

module.exports = Cell;
