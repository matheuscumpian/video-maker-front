import styled from 'styled-components';

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  margin-top: 15vh;
  padding-left: 2vw;
  padding-right: 2vw;
  width: 100vw;

  video {
    height: auto;
    margin-right: 2vw;
    width: 1024px;
  }
`;

const DetailsContent = styled.div`
  margin-bottom: 15vh;
`;

const DetailsTitle = styled.p`
  font-size: 1.3rem;
`;

const VideoDetails = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.mediumBlack};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding-bottom: 2vh;
  padding-top: 2vh;
  padding-left: 2vw;
  padding-right: 2vw;
  width: 400px;
  max-width: 400px;

  Button {
    margin-top: 1.5vh;
  }
`;

const VideoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.h3`
  font-size: 2rem;
  margin-top: 2vh;
`;

const Section = styled.div`
  background-color: ${props => props.theme.colors.lightBlack};
  border-radius: 4px;
  padding: 1vw;
  width: 300px;
`;

const SectionContent = styled.p``;

const SectionTitle = styled.p`
  font-size: 1.2rem;
  margin-top: 2vh;
  margin-bottom: 1vh;
`;

export { Container, DetailsContent, DetailsTitle, Section, SectionContent, SectionTitle, VideoContainer, VideoDetails, VideoTitle };
