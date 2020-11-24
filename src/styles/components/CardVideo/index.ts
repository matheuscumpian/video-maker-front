import styled from 'styled-components';

const ImageContainer = styled.div`
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: center;
  max-height: 107px;
  min-width: 190px;
  max-width: 190px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

const StyledCardVideo = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.mediumBlack};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 2vw;
  margin-bottom: 4vh;
  max-width: 190px;
  min-height: 187px;
  transition: all 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Title = styled.p`
  align-self: flex-start;
  font-size: 1.1rem;
  text-align: left;
  padding: 6px 12px 0px 12px;
`;

export { ImageContainer, StyledCardVideo, Title };
