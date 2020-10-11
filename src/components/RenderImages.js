import React from 'react';
import shuffleArray from '../components/shuffleArray';
import imageArray from '../components/ImageData';

const RenderImages = (props) => {
  return shuffleArray(imageArray).map(image => (
    <div className="character-image-div" key={image} onClick={props.click}>
      <img 
        className="character-image" 
        src={image} alt="" 
        name={image}
      />
    </div>
  ));
};

export default RenderImages;