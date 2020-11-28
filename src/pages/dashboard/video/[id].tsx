import React, { useState } from 'react';
import Head from 'next/head';
import theme from '../../../styles/theme';
import DownloadIcon from '../../../assets/download.svg';
import DeleteIcon from '../../../assets/trashcan.svg';
import { ApplicationState } from '../../../store';
import { Video, VideoState } from '../../../models/Video';
import { useMount } from '../../../hooks';
import { actions } from '../../../store/states/auth';
import { Button, Header } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
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

const VideoDetailsPage: React.FC = () => {
  const dispatch = useDispatch();
  const [id, setID] = useState('');
  const state = useSelector<ApplicationState, VideoState>(state => state.video);

  useMount(() => {
    setID(getID());
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  const getID = (): string => {
    const urlArray = window.location.href.split('/');
    return urlArray.pop();
  };

  return (
    <>
      <Head>
        <title>Video</title>
      </Head>
      <Header
        options={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'My Account', link: '/dashboard/my-account' },
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
            <Button isValid>
              <DownloadIcon />
              Download Video
            </Button>
          </DetailsContent>
          <Button color={theme.colors.error} isValid>
            <DeleteIcon />
            Delete Video
          </Button>
        </VideoDetails>
      </Container>
    </>
  );
};

export default VideoDetailsPage;
