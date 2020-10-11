import React, {useState} from 'react';
import './App.css';
import RenderLogo from './components/RenderLogo';
import RenderScore from './components/RenderScore';
import RenderImages from './components/RenderImages';
import RenderCongratulations from './components/RenderCongratulations';

function App() {
  const [game, setGame] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [arrayState, setArray] = useState([]);
  
  const handleClick = (e) => {
    // Game Win
    if (score === 19) {
      setGame(true);
    }
    // Lose Game
    if (arrayState.includes(e.target.name)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setArray([]);
    } else {
      // Add point to score & insert element name into new array
      setScore(score + 1);
      setArray([...arrayState, e.target.name]); 
    }
  };

  const handleCongratulationsClick = () => {
    setGame(false);
    setHighScore(score);
    setScore(0);
    setArray([]);
  }

  if (game) {
    return (
      <RenderCongratulations click={handleCongratulationsClick} />
    );
  } 

  return (
    <div className="App">
      <RenderLogo />
      <RenderScore scoreNum={score} highScoreNum={highScore} />
      <div className="image-div">
        <RenderImages click={handleClick} />
      </div>
    </div>
  );
}

export default App;
