import React from 'react';
import Head from 'next/head';
import Header from '../../../components/Header';
import Check from '../../../assets/check.svg';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const onClickLogout = () => {
    // Logout
  };

  const onClickChangePlan = () => {
    router.push('/dashboard/my-account/plans');
  };

  return (
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
          <Section>Dino da Silva Sauro</Section>
          <SectionTitle>Email</SectionTitle>
          <Section>dinodasilva@sauro.com</Section>
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
  );
};

export default MyAccount;
