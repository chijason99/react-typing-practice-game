import { useState, useEffect } from "react";
import AlphabetContainer from "./AlphabetContainer";
const Letters = [...Array(26)].map((_, index) =>
  String.fromCharCode(index + 65)
);
function getRandomLetter(ary) {
  const randomIndex = Math.floor(Math.random() * ary.length);
  return ary[randomIndex];
}
class Letter {
  constructor(letter) {
    this.x = getNumFromRange(0, 290);
    this.y = getNumFromRange(60, 140);
    this.letter = letter;
    this.id = crypto.randomUUID();
  }
}
function getNumFromRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateLettersAry(num) {
  return [...Array(num)].map(() => {
    return new Letter(getRandomLetter(Letters));
  });
}
export default function GameContainer() {
  const [level, setLevel] = useState(1);
  const [levelCleared, setLevelCleared] = useState(false);
  const [lettersAry, setLettersAry] = useState(generateLettersAry(level));
  useEffect(() => {
    if (!levelCleared) return;
    setLevel((prevState) => (prevState += 1));
    setLevelCleared(false);
  }, [levelCleared]);

  useEffect(() => {
    setLettersAry(generateLettersAry(level));
  }, [level]);

  function checkStatus(status) {
    setLevelCleared(status);
  }

  return (
    <main className="game-container">
      <AlphabetContainer lettersAry={lettersAry} checkStatus={checkStatus} />
    </main>
  );
}
