import React from 'react';
import { ImageContainer, StyledCardVideo, Title } from '../../styles/components/CardVideo';
import { BounceLoader, MoonLoader } from 'react-spinners';
import styled from 'styled-components';

interface CardProps {
  id?: string;
  thumbnail?: string;
  title?: string;
  onClick: any;
}

const LoadingCard = styled.div`
  padding: 24px;
`;

const ProcessingLabel = styled.p`
  font-size: 12px;
  text-align: center;
  padding: 24px;
`;

const CardVideo: React.FC<CardProps> = ({ thumbnail, title, onClick }) => {
  const processing = thumbnail === 'processing';

  return (
    <StyledCardVideo onClick={onClick}>
      <ImageContainer>
        {!processing ? (
          <img alt='Video thumbnail' src={thumbnail} />
        ) : (
          <LoadingCard>
            <MoonLoader size={70} color={'#EB46C0'} loading={true} />
          </LoadingCard>
        )}
      </ImageContainer>
      <Title>{title}</Title>
      {processing && <ProcessingLabel>Processing video...</ProcessingLabel>}
    </StyledCardVideo>
  );
};

export { CardVideo };
