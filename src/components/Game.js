import { Alphabet, pickRandomAlphabet } from "./Alphabet";

export const GAME_STATUS = {
  START: "start",
  PAUSED: "paused",
  GAMEOVER: "gameover",
  MENU: "menu",
  RUNNING: "running",
};
export default class Game {
  constructor(gameWidth, gameHeight) {
    this.status = GAME_STATUS.MENU;
    this.level = 1;
    this.score = 0;
    this.alphabetsArray = [];
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.life = 10;
  }
  start() {
      this.generateAlphabetsArray();
      this.status = GAME_STATUS.RUNNING;
  }
  pause() {
    if (this.status === GAME_STATUS.PAUSED) {
      this.status = GAME_STATUS.RUNNING;
    } else if (this.status === GAME_STATUS.RUNNING) {
      this.status = GAME_STATUS.PAUSED;
    }
  }
  gameover() {
    this.status = GAME_STATUS.GAMEOVER;
  }
  reset() {
    this.alphabetsArray = [];
    this.level = 10;
    this.score = 0;
    this.life = 10;
  }
  draw(ctx) {
    if (this.status === GAME_STATUS.RUNNING) {
      for (const alphabet of this.alphabetsArray) {
        alphabet.draw(ctx);
      }
    }

    switch (this.status) {
      case GAME_STATUS.PAUSED:
        showTextOnCanvas(
          ctx,
          this.gameWidth,
          this.gameHeight,
          "PAUSED",
          "Press ESC to continue"
        );
        break;
      case GAME_STATUS.GAMEOVER:
        showTextOnCanvas(
          ctx,
          this.gameWidth,
          this.gameHeight,
          "GAMEOVER",
          "Press SPACEBAR to restart"
        );
        break;
      case GAME_STATUS.MENU:
        showTextOnCanvas(
          ctx,
          this.gameWidth,
          this.gameHeight,
          "Press SPACEBAR to start"
        );
        break;
    }
  }
  update(deltaTime) {
    if (this.status !== GAME_STATUS.RUNNING) return;

    if (this.alphabetsArray.some((alphabet) => alphabet.hitBoundary)) {
      this.gameover();
      return;
    }
    for (const alphabet of this.alphabetsArray) {
      alphabet.update(deltaTime);
    }
  }
  checkLevelCleared() {
    if(this.status !== GAME_STATUS.RUNNING) return;
    if (this.alphabetsArray.length > 0) return;
    this.level++;
    this.generateAlphabetsArray();
  }
  generateAlphabetsArray() {
    return (this.alphabetsArray = [...Array(this.level)].map(
      () => new Alphabet(pickRandomAlphabet())
    ));
  }
  minusLife() {
    if (this.life === 0) return;
    this.life--;
    if (this.life > 0) return;
    this.gameover();
  }
}

function showTextOnCanvas(ctx, gameWidth, gameHeight, text1, text2 = "") {
  ctx.save();
  ctx.clearRect(0, 0, gameWidth, gameHeight);
  ctx.fillStyle = "rgba(0,0,0,0.6)";
  ctx.fillRect(0, 0, gameWidth, gameHeight);
  ctx.font = "normal 50px Noto Sans TC";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  if(!text2){
  ctx.fillText(text1, gameWidth / 2, gameHeight / 2 );
  }else{
    ctx.fillText(text1, gameWidth / 2, gameHeight / 2 - 30);
    ctx.font = "40px Noto Sans TC";
    ctx.fillText(text2, gameWidth / 2, (gameHeight + 140) / 2);
  }

  ctx.restore();
}
