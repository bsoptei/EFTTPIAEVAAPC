const r = (min, max) => Math.random() * (max - min) + min;

const rPos = () => new Position(r(0, 1700), r(0, 700));

const getRandomColor = () =>
  `#${Array(6).fill()
  .map((e, i) => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join("")}`;
