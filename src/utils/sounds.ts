import { Howl, Howler } from 'howler';

const click = new Howl({
  src: ['./sounds/click.wav'],
});

const draw2 = new Howl({
  src: ['./sounds/draw2.wav'],
});

const newGame = new Howl({
  src: ['./sounds/newGame.wav'],
});

const newGame2 = new Howl({
  src: ['./sounds/newGame2.wav'],
});

const score = new Howl({
  src: ['./sounds/score.wav'],
});

const sum = new Howl({
  src: ['./sounds/sum.wav'],
});

const sum2 = new Howl({
  src: ['./sounds/sum2.wav'],
});

const switchSide = new Howl({
  src: ['./sounds/switchSide.wav'],
});

export const allFiles = {
  draw2,
  click,
  switchSide,
  sum,
  sum2,
  newGame,
  newGame2,
  score,
};
