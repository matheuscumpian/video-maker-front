import React from 'react';
import Head from 'next/head';
import { Container } from '../../../../styles/pages/Plans';
import { useMount } from '../../../../hooks';
import { Header, PlanCard } from '../../../../components/';
import { ApplicationState } from '../../../../store';
import { actions } from '../../../../store/states/auth';
import { UserState } from '../../../../models/User';
import { useDispatch, useSelector } from 'react-redux';

const Plans: React.FC = () => {
  const { authenticated, user } = useSelector<ApplicationState, UserState>(state => state.auth);
  const dispatch = useDispatch();

  useMount(() => {
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  return authenticated ? (
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
        <PlanCard name='Plano Free' price='$19.90' yearPrice='$200.00' />
        <PlanCard name='Plano Plus' price='$24.90' yearPrice='$270.00' />
        <PlanCard name='Plano Premium' price='$39.90' yearPrice='$400.00' />
      </Container>
    </>
  ) : (
    <></>
  );
};

export default Plans;
