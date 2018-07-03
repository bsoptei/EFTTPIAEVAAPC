class Game {

  static init() {
    let death = false;
    let movHor = 50;
    let movVer = 50;
    let level = 1;
    let score = 0;
    let user = new Player("playa", View.chicPic);

    const randomPig = () => new Player(`pig${r(0, 10)}`, View.piggyPic, rPos());

    let players = [user].concat(Array(10).fill().map((e, i) => randomPig()));

    const enemies = () => players.filter((player) => player.sid != "playa");

    const update = () => View.updateScreen(players, level, user.health, score);

    const pwak = () => View.say('Pwak Pwak');

    const moveAllRandomly =
      (players) => players.forEach((player) => player.moveTo(rPos()));

    const checkInjuries = () => {
      const attackers =
        enemies().filter((enemy) => enemy.pos.distance(user.pos) < 50.0);

      if (attackers.length > 0)  {
        if (user.health - level >=0) {
          user.health -= level;
        } else {
          user.health = 0;
        }
      }
      if (user.health <= 0) {
        death = true;
        View.tellTheSadTruth();
      }
    };

    const levelUp = () => {
      View.setRandomBackground();
      View.say('Level up, motherfucker!');
      score += level * 10000;
      level += 1;
      players.push(randomPig());

      const minSpeed = 5;
      if (movVer > minSpeed) {
        movVer -= minSpeed;
      }
      if (movHor > minSpeed) {
        movHor -= minSpeed;
      }

      user.moveTo(new Position());
    };

    const up = () => {
      if (user.yPos - movVer >= 0) {
        user.yPos -= movVer;
      }
    };

    const down = () => {
      if (user.yPos + movVer < CONFIG.HEIGHT - 100) {
        user.yPos += movVer;
      }
    };

    const left = () => {
      if (user.xPos - movHor >= 0) {
        score -= (5000 ** level);
        user.xPos -= movHor;
      }
    };

    const right = () => {
      if (user.xPos + movHor < CONFIG.WIDTH) {
        score += level * user.xPos / 10;
        user.xPos += movHor;
      } else {
        levelUp();
      }
    };

    const timeFwd = () => {
      if (!death) {
        checkInjuries();
        moveAllRandomly(enemies());
      };
      update();
    };

    Game.handle = (task) => {
      if (!death) {
        if (task === 'up') {
          up();
        } else if (task === 'down') {
          down();
        } else if (task === 'left') {
          left();
        } else if (task === 'right') {
          right();
        } else if (task === 'pwak') {
          pwak();
        }

        update();
      }
    };

    user.health = 100;
    setInterval(timeFwd, 200);
  }

}
