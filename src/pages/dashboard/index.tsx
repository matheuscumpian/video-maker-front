import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Empty from '../../assets/empty.svg';
import { useAuth, useMount, useUpdateEffect } from '../../hooks';
import { getVideos } from '../../store/states/video';
import { CardVideo, CardVideoSkeleton } from '../../components';
import { ApplicationState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { VideoParams, VideoState } from '../../models/Video';
import { Container, EmptyList, ListCards } from '../../styles/pages/Dashboard';
import { useRouter } from 'next/router';
import { UserState } from '../../models/User';
import { actions } from '../../store/states/auth';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const state = useSelector<ApplicationState, VideoState>(state => state.video);
  const { authenticated } = useSelector<ApplicationState, UserState>(state => state.auth);
  const status = state.status;
  const videos = state.videos;

  useMount(() => {
    dispatch(getVideos());
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  useUpdateEffect(() => {
    if (status === 'LOADING') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [status]);

  const onClickCard = () => {
    router.push('/dashboard/video/1');
  };

  return authenticated ? (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header
        options={[
          { title: 'Create Video', link: '/dashboard/create-video' },
          { title: 'My Account', link: '/' },
        ]}
      />
      <Container>
        <ListCards isEmpty={videos.length < 1}>
          {loading ? (
            <CardVideoSkeleton />
          ) : videos.length > 0 ? (
            videos.map((video: VideoParams, index) => {
              return <CardVideo id={index} key={index} thumbnail={video.image} title={video.title} onClick={onClickCard} />;
            })
          ) : (
            <EmptyList>
              <Empty />
            </EmptyList>
          )}
        </ListCards>
      </Container>
    </>
  ) : (
    <></>
  );
};

export default Dashboard;
