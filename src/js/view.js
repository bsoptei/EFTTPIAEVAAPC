class View {

  static init() {
    const canvas = document.getElementById(CONFIG.CANVAS_ID);
    canvas.style.backgroundColor = "#000";
    canvas.width  = CONFIG.WIDTH;
    canvas.height = CONFIG.HEIGHT;

    const ctx = canvas.getContext('2d');

    const clearCanvas = () => {
      ctx.clearRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
    };

    const drawPlayer = (player, xSize = 100, ySize = 100) => {
      ctx.drawImage(player.img, player.pos.x, player.pos.y, xSize, ySize);
    };

    const setInnerHTMLById = (id, ihtml) => {
      document.getElementById(id).innerHTML = ihtml;
    };

    const loadImageFromPath = (path) => {
      var temp_img = new Image();
      temp_img.src = path;
      return temp_img;
    };

    View.say = (text) => {
      window.speechSynthesis.cancel();
      return window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    };

    View.tellTheSadTruth = () => {
      setInnerHTMLById('status', 'You are dead');
    };

    View.updateScreen = (players, level, health, score) => {
      clearCanvas();
      setInnerHTMLById('level', `Level: ${level}`);
      setInnerHTMLById('health', `Health: ${health}`);
      setInnerHTMLById('score', `Score: ${score}`);
      players.forEach((player) => drawPlayer(player));
    };

    View.setRandomBackground = () => {
      canvas.style.backgroundColor = getRandomColor();
    };

    View.piggyPic = loadImageFromPath(CONFIG.ENEMY_SPRITE_PATH);
    View.chicPic  = loadImageFromPath(CONFIG.PLAYER_SPRITE_PATH);
    View.init = () => {};
  }

}
