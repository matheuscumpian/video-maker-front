import React from 'react';
import Head from 'next/head';
import Header from '../../../components/Header';
import theme from '../../../styles/theme';
import { Button } from '../../../components';
import {
  Container,
  DetailsContent,
  DetailsTitle,
  Section,
  SectionContent,
  SectionTitle,
  VideoContainer,
  VideoDetails,
  VideoTitle,
} from '../../../styles/pages/Video';

const Dashboard: React.FC = () => {
  return (
    <>
      <Head>
        <title>Video</title>
      </Head>
      <Header
        options={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'My Account', link: '/dashboard' },
        ]}
      />

      <Container>
        <VideoContainer>
          <video src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4' controls></video>
          <VideoTitle>Lorem ipsum dolor sit amet</VideoTitle>
        </VideoContainer>
        <VideoDetails>
          <DetailsContent>
            <DetailsTitle>Video Details:</DetailsTitle>
            <SectionTitle>Sentence</SectionTitle>
            <Section>
              <SectionContent>Lorem ipsum dolor sit amet, consectetur adipiscing</SectionContent>
            </Section>
            <SectionTitle>Semantic</SectionTitle>
            <Section>
              <SectionContent>The history of</SectionContent>
            </Section>
            <Button isValid>Download Video</Button>
          </DetailsContent>
          <Button color={theme.colors.error} isValid>
            Delete Video
          </Button>
        </VideoDetails>
      </Container>
    </>
  );
};

export default Dashboard;
