import React, { useRef, useEffect, useState } from "react";
import Game, { GAME_STATUS } from "./Game";
import GameInfo from "./GameInfo";
export default function GameCanvas({ gameWidth, gameHeight }) {
  const gameCanvasRef = useRef(null);
  const game = new Game(gameWidth, gameHeight);

  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(10);
  useEffect(() => {
    let previousTimeStamp = 0;
    let animationFrameId;
    const ctx = gameCanvasRef.current.getContext("2d");
    function gameLoop(currentTimeStamp) {
      let deltaTime = currentTimeStamp - previousTimeStamp;
      previousTimeStamp = currentTimeStamp;
      ctx.clearRect(0, 0, gameWidth, gameHeight);
      game.draw(ctx);
      game.update(deltaTime);
      game.checkLevelCleared();
      setLevel(game.level);

      animationFrameId = window.requestAnimationFrame(gameLoop);
    }
    gameLoop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleKeyDown(event) {
    if (event.keyCode === 27) {
      return game.pause();
    }
    if (event.keyCode === 32) {
      if (game.status === GAME_STATUS.MENU) {
        game.start();
        return;
      } else if (game.status === GAME_STATUS.GAMEOVER) {
        game.reset();
        setLevel(1);
        setScore(0);
        setLife(10);
        game.start();
        return;
      }
    }
    if (event.keyCode > 90 || event.keyCode < 65) return;
    if (game.status !== GAME_STATUS.RUNNING) return;
    const input = String.fromCharCode(event.keyCode);
    if (!game.alphabetsArray.some((alphabet) => alphabet.alphabet === input)) {
      game.minusLife();
      setLife(game.life);
      return;
    }
    const targetArray = game.alphabetsArray.filter(
      (alphabet) => alphabet.alphabet === input
    );
    targetArray.sort((a, b) => b.position.y - a.position.y);
    game.alphabetsArray = game.alphabetsArray.filter(
      (alphabet) => alphabet.id !== targetArray[0].id
    );
    game.score += 10;
    setScore(game.score);
    return;
  }
  return (
    <>
      <GameInfo level={level} score={score} life={life} />
      <canvas
        className="game-canvas"
        ref={gameCanvasRef}
        width={gameWidth}
        height={gameHeight}
      ></canvas>
    </>
  );
}
