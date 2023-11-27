import { useState, useEffect } from "react";
import imagesData from "../assets/datas/pic_list.json";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
from {
    // transform: translateY(100%);
    opacity: 0;
  }
  to {
    // transform: translateY(0);
    opacity: 1;

  }
`;
const slideOut = keyframes`
from {
    // transform: translateY(0);
    opacity: 1;
  }
  to {
    // transform: translateY(100%);
    opacity: 0;

  }
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: auto;
`;
const Image = styled.img`
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100%;
  height:400px;
  border-radius : 15px;
  animation: ${({ isVisible }) => (isVisible ? slideIn : slideOut)} 1s linear
    forwards;
`;
function ImageComponent() {
  const [imageSrc, setImageSrc] = useState(imagesData[0].path);
  const [isVisible, setIsVisible] = useState(true);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % imagesData.length;
      setIsVisible(false);
      setTimeout(() => {
        setImageSrc(imagesData[index].path);
        setIsVisible(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageContainer>
      <Image src={imageSrc} alt="Nom de l'image" isVisible={isVisible} />
    </ImageContainer>
  );
}

export default ImageComponent;
