import React from 'react';
import MHAStudents from '../images/MHA_Students.jpg';

const RenderCongratulations = (props) => (
  <div className="congratulations">
    <img 
      className="mha-students"
      src={MHAStudents} alt=""
      onClick={props.click}
    />
    <h1>Congratulations!</h1>
  </div>
);

export default RenderCongratulations;