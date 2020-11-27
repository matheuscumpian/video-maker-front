import React from 'react';
import Head from 'next/head';
import Header from '../../../../components/Header';
import { PlanCard } from '../../../../components';
import { Container } from '../../../../styles/pages/Plans';

const Plans: React.FC = () => {
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
        <PlanCard name='Plano Free' price='$19.90' yearPrice='$200.00' />
        <PlanCard name='Plano Plus' price='$24.90' yearPrice='$270.00' />
        <PlanCard name='Plano Premium' price='$39.90' yearPrice='$400.00' />
      </Container>
    </>
  );
};

export default Plans;
