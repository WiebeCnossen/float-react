import "./App.css";
import generateGame from "./generateGame";

function App() {
  type Game = [number[], number, number, number];
  const [blocks, width, top, unit]: Game = generateGame(5);

  return (
    <>
      <h1>The float puzzle</h1>
      <p>How to play: swap blocks until they make a rectangle.</p>
      
      <div className="box" style={{ width }}>
        <hr style={{ top }} />
        {blocks.map((block, index) => (
          <div className="block" style={{ width: block * unit }}>
            {block}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
