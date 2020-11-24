import React from 'react';
import Head from 'next/head';
import NotFoundSVG from '../assets/404.svg';
import styled from 'styled-components';
import Header from '../components/Header';

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  justify-content: center;

    svg {
      width: 50vw;
      height: 50vh;
    }
  }
`;

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Header options={[{ title: 'Home', link: '/' }]} />
      <NotFoundContainer>
        <NotFoundSVG />
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
