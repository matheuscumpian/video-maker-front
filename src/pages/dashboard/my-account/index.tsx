import React from 'react';
import Head from 'next/head';
import Check from '../../../assets/check.svg';
import { Header } from '../../../components';
import { useRouter } from 'next/router';
import { actions } from '../../../store/states/auth';
import { useMount } from '../../../hooks';
import { ApplicationState } from '../../../store';
import { UserState } from '../../../models/User';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  Container,
  Logout,
  PlanPrice,
  Section,
  SectionItem,
  SectionTitle,
} from '../../../styles/pages/MyAccount';

// How its supposed to be
interface Plan {
  isAvailable: boolean;
  name: string;
}

const MyAccount: React.FC = () => {
  const { authenticated, user } = useSelector<ApplicationState, UserState>(state => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useMount(() => {
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  const onClickLogout = () => {
    router.push('/');
    dispatch(actions.logout());
  };

  const onClickChangePlan = () => {
    router.push('/dashboard/my-account/plans');
  };

  return authenticated ? (
    <>
      <Head>
        <title>Video</title>
      </Head>
      <Header options={[{ title: 'Dashboard', link: '/dashboard' }]} />
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>Dados Gerais</CardTitle>
            <Logout onClick={onClickLogout}>Logout</Logout>
          </CardHeader>
          <SectionTitle>Nome</SectionTitle>
          <Section>{user ? user.name : ''}</Section>
          <SectionTitle>Email</SectionTitle>
          <Section>{user ? user.email : ''}</Section>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Plano Atual</CardTitle>
            <PlanPrice>$19.90</PlanPrice>
          </CardHeader>
          <SectionTitle>Video Maker Plus</SectionTitle>
          <Section className='planSection'>
            <SectionItem>
              <Check />
              Early access to features
            </SectionItem>
          </Section>
          <Button onClick={onClickChangePlan}>Change Plan</Button>
        </Card>
      </Container>
    </>
  ) : (
    <></>
  );
};

export default MyAccount;
