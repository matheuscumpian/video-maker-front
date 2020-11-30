import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Empty from '../../assets/empty.svg';
import { useMount, useUpdateEffect } from '../../hooks';
import { getVideos } from '../../store/states/video';
import { CardVideo, CardVideoSkeleton, Header } from '../../components';
import { ApplicationState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { Video, VideoState } from '../../models/Video';
import { Container, EmptyList, ListCards } from '../../styles/pages/Dashboard';
import { useRouter } from 'next/router';
import { UserState } from '../../models/User';
import { actions } from '../../store/states/auth';
import { VideoService } from '../../services/Video';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const state = useSelector<ApplicationState, VideoState>(state => state.video);
  const { authenticated, user } = useSelector<ApplicationState, UserState>(state => state.auth);
  const status = state.status;
  const videos = state.videos;

  useMount(() => {
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  useUpdateEffect(() => {
    if (authenticated) {
      dispatch(getVideos(user._id));
    }
  }, [authenticated]);

  useEffect(() => {
    dispatch(getVideos(user._id));
  }, [dispatch, user]);

  useUpdateEffect(() => {
    if (status === 'LOADING') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [status]);

  const onClickCard = (id: string) => {
    router.push(`/dashboard/video/${id}`);
  };

  return authenticated ? (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header
        options={[
          { title: 'Create Video', link: '/dashboard/create-video' },
          { title: 'My Account', link: '/dashboard/my-account' },
        ]}
      />
      <Container>
        <ListCards isEmpty={videos.length < 1}>
          {loading ? (
            <CardVideoSkeleton />
          ) : videos.length > 0 ? (
            videos.map((video: Video) => {
              return (
                <CardVideo
                  id={video._id}
                  key={video._id}
                  thumbnail={video.thumbnail}
                  title={video.name}
                  onClick={() => onClickCard(video._id)}
                />
              );
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
