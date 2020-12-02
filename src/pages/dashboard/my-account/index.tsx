import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Check from '../../../assets/check.svg';
import UnChecked from '../../../assets/unChecked.svg';
import plansDetails from '../../../models/data-plans.json';
import { Header } from '../../../components';
import { useRouter } from 'next/router';
import { actions } from '../../../store/states/auth';
import { useMount } from '../../../hooks';
import { ApplicationState } from '../../../store';
import { UserState } from '../../../models/User';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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
import { AuthService } from '../../../services/Auth';

interface planInterface {
  title: string;
  monthPrice: number;
  yearPrice: number;
  features: Feature[];
}

interface Feature {
  name: string;
  checked: boolean;
}

const MyAccount: React.FC = () => {
  const { authenticated, user } = useSelector<ApplicationState, UserState>(state => state.auth);
  const dispatch = useDispatch();
  const [plan, setPlan] = useState<planInterface>();
  const router = useRouter();

  useMount(() => {
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  useEffect(() => {
    if (authenticated) {
      AuthService.getPlan(user._id)
        .then(({ data }) => setPlan(plansDetails[data.plan]))
        .catch(err => {
          toast.error('😥 Parece que houve um problema', {
            autoClose: 4000,
            position: 'top-center',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
          return err;
        });
    }
  }, [user]);

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
            <PlanPrice>${plan ? plan.monthPrice.toFixed(2) : ''}</PlanPrice>
          </CardHeader>
          <SectionTitle>{plan ? plan.title : ''}</SectionTitle>
          <Section className='planSection'>
            {plan ? (
              plan.features.map((item: Feature, index) => {
                return (
                  <SectionItem key={index}>
                    {item.checked ? <Check /> : <UnChecked />}
                    {item.name}
                  </SectionItem>
                );
              })
            ) : (
              <SectionItem>
                <Check />
              </SectionItem>
            )}
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
