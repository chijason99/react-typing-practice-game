import { useState, useEffect } from "react";
import Alphabet from "./Alphabet";

// created this component such that the letters wont regenerate when the pressed key changes
export default function AlphabetContainer({ lettersAry, checkStatus }) {
  const [pressedKey, setPressedKey] = useState("");
  const [gameLettersAry, setGameLettersAry] = useState(lettersAry);
  useEffect(() => {
    if (pressedKey == "") return;
    const target = gameLettersAry.find((l) => l.letter === pressedKey);
    if (target) {
      setGameLettersAry((prevState) =>
        prevState.filter((l) => l.id !== target.id)
      );
      setPressedKey(""); // to prevent no response if the player tries to clear the same letter twice
    }
  }, [pressedKey]);
  useEffect(() => {
    if (gameLettersAry.length > 0) return;
    checkStatus(true);
    setGameLettersAry(lettersAry)
  }, [gameLettersAry]);
  return (
    <div
      className="alphabet-container"
      tabIndex={1}
      onKeyDown={(e) => setPressedKey(e.key.toUpperCase())}
    >
      {gameLettersAry.length > 0 &&
        gameLettersAry.map((letter) => {
          return <Alphabet letterObj={letter} key={letter.id} />;
        })}
    </div>
  );
}
