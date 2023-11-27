import { useState, useEffect } from "react";
import imagesData from "../assets/datas/pic_list.json";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideOut = keyframes`
  from {
    opacity: 1;
  }
  to {
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
  height: 400px;
  border-radius : 15px;

  animation: ${({ isVisible }) => (isVisible ? slideIn : slideOut)} 1s linear
    forwards;
`;
function ImageComponent2() {
    const [imageSrc, setImageSrc] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * imagesData.length);
        setImageSrc(imagesData[randomIndex].path);
        setIsVisible(true);
      
        let index = randomIndex;
        setTimeout(() => {
          const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
              index = (index - 1 + imagesData.length) % imagesData.length;
              setImageSrc(imagesData[index].path);
              setIsVisible(true);
            }, 1000);
          }, 5000);
      
          return () => clearInterval(interval);
        }, 2500);
      }, []);

  return (
    <ImageContainer>
      <Image
        src={imageSrc}
        alt={`Nom de l'image ${imageSrc}`}
        isVisible={isVisible}
      />
    </ImageContainer>
  );
}

export default ImageComponent2;
