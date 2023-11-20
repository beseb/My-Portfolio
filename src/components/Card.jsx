/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../styles/main.scss';

function Card({ datas }) {
  const image = datas.images[0];
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const overlayStyle = {
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    width: isHovered ? '100%' : '0%',
    transition: 'width 0.5s ease-in-out',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    wordBreak: 'none',
    overflow: 'visible',
    
  };
  const titleStyle = {
    whiteSpace: 'nowrap',
  };
  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    height: '80%',
    width: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    transform: isHovered ? 'scale(1.03)' : 'none',
    transition: 'all 0.1s ease-in-out',
  };

  return (
    <a
      className={`card_container ${datas.id}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='--images_container' style={imageContainerStyle}>
        <img src={image} alt='' style={imageStyle} />
      </div>
      <div className='_overlay' style={overlayStyle}>
        <h3 className='--title' style={titleStyle}>{datas.title}</h3>
      </div>
    </a>
  );
}

export default Card;
