import ReturnButton from "../components/ReturnButton";

export default function Tutorial() {
  return (
    <div className="tutorial-container">
      <h2 className="tutorial-header">
          Instructions:
      </h2>
      <ul className="tutorial-list">
        <li>
          There will be alphabets falling from the top of the game frame.
        </li>
        <li>
          You will have to clear them before they reach the ground, by pressing the corresponding keyboard keys.
        </li>
        <li>
          You can pause the game by pressing the Escape button on your keyboard.
        </li>
        <li>
          You will enter a new level once you clear all the falling alphabets.
        </li>
        <li>
          You will have a life count of 10 initially. Every time you press the wrong key, it will decrease by 1. The game will be over if your life count become 0, or if one of the alphabets touches the ground.
        </li>
        <li>
          The game does not have a winning requirement. Try to score as high as you can!
        </li>
      </ul>
      <ReturnButton />
    </div>
  );
}
