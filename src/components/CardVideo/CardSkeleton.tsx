import React from 'react';
import { ImageContainer, StyledCardVideo, Title } from '../../styles/components/CardVideo/CardSkeleton';
import { SKELETON_NUMBER_OF_CARDS } from './constants';

const CardVideoSkeleton: React.FC = () => {
  return (
    <>
      {Array.from(Array(SKELETON_NUMBER_OF_CARDS).keys()).map((_, index) => {
        return (
          <StyledCardVideo key={index}>
            <ImageContainer />
            <Title />
            <Title />
          </StyledCardVideo>
        );
      })}
    </>
  );
};

export { CardVideoSkeleton };
