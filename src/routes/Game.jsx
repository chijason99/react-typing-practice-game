import ReturnButton from "../components/ReturnButton";
import GameCanvas from "../components/GameCanvas";
export default function Game() {
  return (
    <div>
      <GameCanvas gameWidth={800} gameHeight={600} />
      <ReturnButton />
    </div>
  );
}
