class Player {
  constructor(sid, img, pos = new Position()) {
    this.sid = sid;
    this.img = img;
    this.pos = pos;
  }

  moveTo(newPos) {
    this.pos = newPos;
  }

  get xPos() {
    return this.pos.x;
  }

  get yPos() {
    return this.pos.y;
  }

  set xPos(newX) {
    this.pos.x = newX;
  }

  set yPos(newY) {
    this.pos.y = newY;
  }

}
