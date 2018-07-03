class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  distance(other) {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
}
