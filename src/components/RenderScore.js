import React from 'react';

const RenderScore = (props) => (
  <div className="scoreboard">
    <p>Score: {props.scoreNum} / 20</p>
    <br/>
    <p>High Score: {props.highScoreNum}</p>
  </div>
);

export default RenderScore;