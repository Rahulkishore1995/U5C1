import { useState } from 'react'

import './App.css'

function App() {
  const [score, setScore] = useState(73);
  const [wicket, setWicket] = useState(1);
  let [balls, setBall] = useState(0);
  const [won, setWon] = useState("");
  const [lost, settlost] = useState("");
  
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              score
            }
          </h1>
        </div>
        <div>
          
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              wicket
            }
          </h1>
        </div>
          
        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              balls 
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={() => {score > 106 ?setWon(won + "India Won"):setScore(score + 1)}}>Add 1</button>
          <button onClick={() => {score > 106 ?setWon(won + "India Won"):setScore(score + 4)}}>Add 4</button>
          <button onClick={() => {score > 106 ?setWon(won + "India Won"):setScore(score + 6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {wicket}
        <button onClick={()=>{wicket >9 ? lost === "India lost" ? disabled :setWon("India Lost") :setWicket(wicket + 1)}} >Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        
        <button onClick={() => {}}>Add 1</button>
      </div>

      {won}
    </div>
  );
}

export default App;


   
