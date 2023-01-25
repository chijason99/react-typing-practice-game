import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <ul className="options-container">
        <li>
          <Link to="/react-typing-practice-game/play">Play</Link>
        </li>
        <li>
          <Link to="/react-typing-practice-game/tutorial">How To Play</Link>
        </li>
        <li>
          <Link to="/react-typing-practice-game/leaderboard">Leaderboard</Link>
        </li>
      </ul>
    </div>
  );
}
