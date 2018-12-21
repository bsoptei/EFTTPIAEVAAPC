class Controller {
  static init() {
    window.onkeyup = (e) => {
      const key = e.keyCode ? e.keyCode : e.which;

      const task = () => {
        if (key === CONFIG.UP) {
          return 'up';
        } else if (key === CONFIG.DOWN) {
          return 'down';
        } else if (key === CONFIG.RIGHT) {
          return 'right';
        } else if (key === CONFIG.LEFT) {
          return 'left';
        } else if (key === CONFIG.SPACE) {
          return 'pwak';
        }
      };

      Game.handle(task());
    };
    Controller.init = () => {};
  }
}
