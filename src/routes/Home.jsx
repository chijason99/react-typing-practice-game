import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <ul className="options-container">
        <li>
          <Link to="/play">Play</Link>
        </li>
        <li>
          <Link to="/tutorial">How To Play</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
      </ul>
    </div>
  );
}
