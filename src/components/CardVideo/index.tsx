import React from 'react';
import ImageVideo from '../../assets/images/videoImageSmall.jpg';
import { ImageContainer, StyledCardVideo, Title } from '../../styles/components/CardVideo';

interface CardProps {
  id?: number;
  thumbnail?: string;
  title?: string;
  onClick: any;
}

const CardVideo: React.FC<CardProps> = ({ id, thumbnail, title, onClick }) => {
  return (
    <StyledCardVideo onClick={onClick}>
      <ImageContainer>
        <img alt='Video thumbnail' src={thumbnail || ImageVideo} />
      </ImageContainer>
      <Title>{title || 'Lorem ipsum dolor sit amet'}</Title>
    </StyledCardVideo>
  );
};

export default CardVideo;
