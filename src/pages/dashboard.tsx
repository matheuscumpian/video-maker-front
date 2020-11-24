import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Empty from '../assets/empty.svg';
import { useMount, useUpdateEffect } from '../hooks';
import { getVideos } from '../store/states/video';
import { CardVideo, CardVideoSkeleton } from '../components';
import { ApplicationState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { VideoParams, VideoState } from '../models/Video';
import { Container, EmptyList, ListCards } from '../styles/pages/Dashboard';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const state = useSelector<ApplicationState, VideoState>(state => state.video);
  const status = state.status;
  const videos = state.videos;

  useMount(() => {
    dispatch(getVideos());
  });

  useUpdateEffect(() => {
    if (status === 'LOADING') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [status]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header
        options={[
          { title: 'Create Video', link: '/' },
          { title: 'My Account', link: '/' },
        ]}
      />
      <Container>
        <ListCards isEmpty={videos.length < 1}>
          {loading ? (
            <CardVideoSkeleton />
          ) : videos.length > 0 ? (
            videos.map((video: VideoParams, index) => {
              return <CardVideo id={index} key={index} thumbnail={video.image} title={video.title} />;
            })
          ) : (
            <EmptyList>
              <Empty />
            </EmptyList>
          )}
        </ListCards>
      </Container>
    </>
  );
};

export default Dashboard;
