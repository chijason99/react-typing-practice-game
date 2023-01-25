import { useState, useEffect } from "react";

export default function Alphabet({ letterObj, pressedKey }) {
  const [isCleared, setIsCleared] = useState(false)
  const { x, y, letter } = letterObj;
  useEffect(() => {
    if(pressedKey == '') return
    if(pressedKey === letter){
      setIsCleared(true)
    }
  },[pressedKey])
  return (
    !isCleared && <span
      className="alphabet"
      style={{ transform: `translate(${x}px,${y}px)` }}
    >
      {letter}
    </span>
  );
}
