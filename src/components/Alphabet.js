const ALPHABETS_ARRAY = [...Array(26)].map((_, index) =>
  String.fromCharCode(index + 65)
);

export class Alphabet {
  constructor(alphabet) {
    this.alphabet = alphabet;
    this.size = 80;
    this.speed = 20;
    this.id = crypto.randomUUID();
    this.position = {
      x: pickRandomPositionX(),
      y: pickRandomPositionY(),
    };
    this.hitBoundary = false

  }

  draw(ctx) {
    ctx.font = `${this.size}px Sans Serif`;
    ctx.fillStyle = "white";
    ctx.fillText(this.alphabet, this.position.x, this.position.y);
  }

  update(deltaTime) {
    if (!deltaTime) return;
    if(this.alphabet === "Q" && this.position.y + this.size > 663){
      this.position.y = 663 - this.size;
      this.hitBoundary = true;
    }
    if(this.position.y + this.size > 680){
      this.position.y = 680 - this.size;
      this.hitBoundary = true;
    }
    this.position.y += this.speed / deltaTime;
  }
}

export function pickRandomAlphabet() {
  const randomNum = Math.floor(Math.random() * 26);
  return ALPHABETS_ARRAY[randomNum];
}

function pickRandomPositionX(){
    return 100 + Math.floor(Math.random()*8)*90 + Math.floor(Math.random()*20)
}
function pickRandomPositionY(){
    return 80 + Math.floor(Math.random()*8)*50
}