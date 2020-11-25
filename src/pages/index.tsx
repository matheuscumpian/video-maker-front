import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import { Container } from '../styles/pages/Home';
import Hero from '../components/Hero/Hero';
import { Container as Row } from '../styles/components/Row/Row';
import Marketing from '../assets/marketing.svg';
import Social from '../assets/social.svg';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { actions } from '../store/states/auth';
import { useMount } from '../hooks';

const phrasesFirstSection = ['Automate your video creation process', 'Accelerate your content creation flow'];

const phrasesSecondSection = ['Grow up your social media', 'build engagement.'];

const HeroBodySection1 = {
  phrases: phrasesFirstSection,
};

const HeroBodySection2 = {
  phrases: phrasesSecondSection,
};

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
  });

  const dispatch = useDispatch();

  useMount(() => {
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  return (
    <div id='fullpage'>
      <Container className='section' primary={true}>
        <Header
          options={[
            { title: 'Login', link: '/login' },
            { title: 'Register', link: '/register' },
          ]}
        />
        <Head>
          <title>Homepage</title>
        </Head>
        <Row>
          <Hero body={HeroBodySection1} image={true} />
          <Marketing data-aos='fade-in' />
        </Row>
      </Container>
      <Container className='section'>
        <Head>
          <title>Homepage</title>
        </Head>
        <Hero body={HeroBodySection2} image={false} />
        <Social data-aos='fade-up' />
      </Container>
    </div>
  );
};

export default Home;
